r.d(n, {
    q: function () {
        return g;
    }
});
var i = r(411104);
var a = r(956067),
    o = r(544891),
    s = r(570140),
    l = r(710845),
    u = r(873741),
    c = r(139674);
let d = 'https://cdn.discordapp.com/bad-domains/updated_hashes.json',
    f = 'https://cdn.discordapp.com/bad-domains/current_revision.txt',
    { WEBAPP_ENDPOINT: p } = window.GLOBAL_ENV,
    h = 'https:'.concat(p, '/bad-hash-delta'),
    _ = 15,
    m = new l.Z('FetchBlockedDomain');
function g() {
    return a.Z.timeAsync('\uD83D\uDCBE', 'fetchBlockedDomainList', E);
}
async function E() {
    m.verbose('Fetching blocked domain list');
    try {
        let e;
        let n = parseInt((await o.tn.get(f)).text),
            r = c.Z.getCurrentRevision();
        if ((m.verbose('Server revision: '.concat(n, ', Client revision: ').concat(r)), null === r || r !== n)) {
            try {
                if (null === r || r > n) {
                    let e = null === r ? 'null' : 'greater than server revision number';
                    throw Error('Client revision number is ' + e);
                }
                if (n - r > _) throw Error('Client revision number is more than '.concat(_, ' behind the server revision number'));
                let i = (
                    await o.tn.get({
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
                let s = await a.Z.timeAsync('\uD83D\uDCBE', 'getBlockedDomainList', () => c.Z.getBlockedDomainList());
                if (null === s) throw Error('Blocked domain list is null');
                m.verbose('Blocked domains list length: '.concat(s.size, ' before update')),
                    i.ADDED.forEach((e) => {
                        if (null != s[e]) throw Error('Unable to add domain which is already in the blockedDomains set: '.concat(e));
                        s[e] = !0;
                    }),
                    i.REMOVED.forEach((e) => {
                        if (null == s[e]) throw Error('Unable to removed domain which is not in the blockedDomains set: '.concat(e));
                        s[e] = !1;
                    }),
                    (e = Object.keys(s).filter((e) => s[e])),
                    m.verbose('Delta applied successfully');
            } catch (n) {
                if ((m.verbose('Unable to process domain list delta: '.concat(n.message)), (0, u.K)())) {
                    m.verbose('Slow network detected, not downloading full list');
                    return;
                }
                m.verbose('Downloading the full bad domains file'),
                    (e = (
                        await o.tn.get({
                            url: d,
                            rejectWithError: !1
                        })
                    ).body);
            }
            m.verbose('Blocked domains list length: '.concat(e.length, ' after update')),
                a.Z.time('\uD83D\uDCBE', 'Save Blocked Domain List', () =>
                    s.Z.dispatch({
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
