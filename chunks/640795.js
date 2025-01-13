r.d(n, {
    q: function () {
        return g;
    }
});
var i = r(411104);
var a = r(956067),
    s = r(544891),
    o = r(570140),
    l = r(710845),
    u = r(873741),
    c = r(139674);
let d = 'https://cdn.discordapp.com/bad-domains/updated_hashes.json',
    f = 'https://cdn.discordapp.com/bad-domains/current_revision.txt',
    { WEBAPP_ENDPOINT: _ } = window.GLOBAL_ENV,
    h = 'https:'.concat(_, '/bad-hash-delta'),
    p = 15,
    m = new l.Z('FetchBlockedDomain');
function g() {
    return a.Z.timeAsync('\uD83D\uDCBE', 'fetchBlockedDomainList', E);
}
async function E() {
    m.verbose('Fetching blocked domain list');
    try {
        let e;
        let n = parseInt((await s.tn.get(f)).text),
            r = c.Z.getCurrentRevision();
        if ((m.verbose('Server revision: '.concat(n, ', Client revision: ').concat(r)), null === r || r !== n)) {
            try {
                if (null === r || r > n) {
                    let e = null === r ? 'null' : 'greater than server revision number';
                    throw Error('Client revision number is ' + e);
                }
                if (n - r > p) throw Error('Client revision number is more than '.concat(p, ' behind the server revision number'));
                let i = (
                    await s.tn.get({
                        url: h,
                        query: { revision: r },
                        rejectWithError: !1
                    })
                ).body;
                if (0 === i.ADDED.length && 0 === i.REMOVED.length) {
                    m.verbose('No changes to blocked domains list.');
                    return;
                }
                m.verbose('Retrieved delta, domains added: '.concat(i.ADDED.length, ', domains removed: ').concat(i.REMOVED.length));
                let o = await a.Z.timeAsync('\uD83D\uDCBE', 'getBlockedDomainList', () => c.Z.getBlockedDomainList());
                if (null === o) throw Error('Blocked domain list is null');
                m.verbose('Blocked domains list length: '.concat(o.size, ' before update')),
                    i.ADDED.forEach((e) => {
                        if (null != o[e]) throw Error('Unable to add domain which is already in the blockedDomains set: '.concat(e));
                        o[e] = !0;
                    }),
                    i.REMOVED.forEach((e) => {
                        if (null == o[e]) throw Error('Unable to removed domain which is not in the blockedDomains set: '.concat(e));
                        o[e] = !1;
                    }),
                    (e = Object.keys(o).filter((e) => o[e])),
                    m.verbose('Delta applied successfully');
            } catch (n) {
                if ((m.verbose('Unable to process domain list delta: '.concat(n.message)), (0, u.K)())) {
                    m.verbose('Slow network detected, not downloading full list');
                    return;
                }
                m.verbose('Downloading the full bad domains file'),
                    (e = (
                        await s.tn.get({
                            url: d,
                            rejectWithError: !1
                        })
                    ).body);
            }
            m.verbose('Blocked domains list length: '.concat(e.length, ' after update')),
                a.Z.time('\uD83D\uDCBE', 'Save Blocked Domain List', () =>
                    o.Z.dispatch({
                        type: 'BLOCKED_DOMAIN_LIST_FETCHED',
                        list: e,
                        revision: n
                    })
                );
        }
    } catch (e) {
        m.error(e);
    }
}
