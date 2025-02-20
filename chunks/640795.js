n.d(t, { q: () => h }), n(411104);
var r = n(956067),
    i = n(544891),
    o = n(570140),
    a = n(710845),
    s = n(873741),
    l = n(139674);
let c = 'https://cdn.discordapp.com/bad-domains/updated_hashes.json',
    u = 'https://cdn.discordapp.com/bad-domains/current_revision.txt',
    { WEBAPP_ENDPOINT: d } = window.GLOBAL_ENV,
    f = 'https:'.concat(d, '/bad-hash-delta'),
    p = 15,
    _ = new a.Z('FetchBlockedDomain');
function h() {
    return r.Z.timeAsync('\uD83D\uDCBE', 'fetchBlockedDomainList', m);
}
async function m() {
    _.verbose('Fetching blocked domain list');
    try {
        let e;
        let t = parseInt((await i.tn.get(u)).text),
            n = l.Z.getCurrentRevision();
        if ((_.verbose('Server revision: '.concat(t, ', Client revision: ').concat(n)), null === n || n !== t)) {
            try {
                if (null === n || n > t) {
                    let e = null === n ? 'null' : 'greater than server revision number';
                    throw Error('Client revision number is ' + e);
                }
                if (t - n > p) throw Error('Client revision number is more than '.concat(p, ' behind the server revision number'));
                let o = (
                    await i.tn.get({
                        url: f,
                        query: { revision: n },
                        rejectWithError: !1
                    })
                ).body;
                if (0 === o.ADDED.length && 0 === o.REMOVED.length) {
                    _.verbose('No changes to blocked domains list.');
                    return;
                }
                _.verbose('Retrieved delta, domains added: '.concat(o.ADDED.length, ', domains removed: ').concat(o.REMOVED.length));
                let a = await r.Z.timeAsync('\uD83D\uDCBE', 'getBlockedDomainList', () => l.Z.getBlockedDomainList());
                if (null === a) throw Error('Blocked domain list is null');
                _.verbose('Blocked domains list length: '.concat(a.size, ' before update')),
                    o.ADDED.forEach((e) => {
                        if (null != a[e]) throw Error('Unable to add domain which is already in the blockedDomains set: '.concat(e));
                        a[e] = !0;
                    }),
                    o.REMOVED.forEach((e) => {
                        if (null == a[e]) throw Error('Unable to removed domain which is not in the blockedDomains set: '.concat(e));
                        a[e] = !1;
                    }),
                    (e = Object.keys(a).filter((e) => a[e])),
                    _.verbose('Delta applied successfully');
            } catch (t) {
                if ((_.verbose('Unable to process domain list delta: '.concat(t.message)), (0, s.K)())) {
                    _.verbose('Slow network detected, not downloading full list');
                    return;
                }
                _.verbose('Downloading the full bad domains file'),
                    (e = (
                        await i.tn.get({
                            url: c,
                            rejectWithError: !1
                        })
                    ).body);
            }
            _.verbose('Blocked domains list length: '.concat(e.length, ' after update')),
                r.Z.time('\uD83D\uDCBE', 'Save Blocked Domain List', () =>
                    o.Z.dispatch({
                        type: 'BLOCKED_DOMAIN_LIST_FETCHED',
                        list: e,
                        revision: t
                    })
                );
        }
    } catch (e) {
        _.error(e);
    }
}
