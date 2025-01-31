n.d(t, { q: () => h }), n(411104);
var i = n(956067),
    r = n(544891),
    a = n(570140),
    s = n(710845),
    o = n(873741),
    l = n(139674);
let u = 'https://cdn.discordapp.com/bad-domains/updated_hashes.json',
    c = 'https://cdn.discordapp.com/bad-domains/current_revision.txt',
    { WEBAPP_ENDPOINT: d } = window.GLOBAL_ENV,
    f = 'https:'.concat(d, '/bad-hash-delta'),
    _ = 15,
    p = new s.Z('FetchBlockedDomain');
function h() {
    return i.Z.timeAsync('\uD83D\uDCBE', 'fetchBlockedDomainList', m);
}
async function m() {
    p.verbose('Fetching blocked domain list');
    try {
        let e;
        let t = parseInt((await r.tn.get(c)).text),
            n = l.Z.getCurrentRevision();
        if ((p.verbose('Server revision: '.concat(t, ', Client revision: ').concat(n)), null === n || n !== t)) {
            try {
                if (null === n || n > t) {
                    let e = null === n ? 'null' : 'greater than server revision number';
                    throw Error('Client revision number is ' + e);
                }
                if (t - n > _) throw Error('Client revision number is more than '.concat(_, ' behind the server revision number'));
                let a = (
                    await r.tn.get({
                        url: f,
                        query: { revision: n },
                        rejectWithError: !1
                    })
                ).body;
                if (0 === a.ADDED.length && 0 === a.REMOVED.length) {
                    p.verbose('No changes to blocked domains list.');
                    return;
                }
                p.verbose('Retrieved delta, domains added: '.concat(a.ADDED.length, ', domains removed: ').concat(a.REMOVED.length));
                let s = await i.Z.timeAsync('\uD83D\uDCBE', 'getBlockedDomainList', () => l.Z.getBlockedDomainList());
                if (null === s) throw Error('Blocked domain list is null');
                p.verbose('Blocked domains list length: '.concat(s.size, ' before update')),
                    a.ADDED.forEach((e) => {
                        if (null != s[e]) throw Error('Unable to add domain which is already in the blockedDomains set: '.concat(e));
                        s[e] = !0;
                    }),
                    a.REMOVED.forEach((e) => {
                        if (null == s[e]) throw Error('Unable to removed domain which is not in the blockedDomains set: '.concat(e));
                        s[e] = !1;
                    }),
                    (e = Object.keys(s).filter((e) => s[e])),
                    p.verbose('Delta applied successfully');
            } catch (t) {
                if ((p.verbose('Unable to process domain list delta: '.concat(t.message)), (0, o.K)())) {
                    p.verbose('Slow network detected, not downloading full list');
                    return;
                }
                p.verbose('Downloading the full bad domains file'),
                    (e = (
                        await r.tn.get({
                            url: u,
                            rejectWithError: !1
                        })
                    ).body);
            }
            p.verbose('Blocked domains list length: '.concat(e.length, ' after update')),
                i.Z.time('\uD83D\uDCBE', 'Save Blocked Domain List', () =>
                    a.Z.dispatch({
                        type: 'BLOCKED_DOMAIN_LIST_FETCHED',
                        list: e,
                        revision: t
                    })
                );
        }
    } catch (e) {
        p.error(e);
    }
}
