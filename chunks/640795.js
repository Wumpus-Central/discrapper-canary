n.d(t, { q: () => p }), n(415506);
var r = n(956067),
    i = n(544891),
    a = n(570140),
    o = n(710845),
    s = n(873741),
    l = n(139674);
let c = 'https://cdn.discordapp.com/bad-domains/updated_hashes.json',
    u = 'https://cdn.discordapp.com/bad-domains/current_revision.txt',
    { WEBAPP_ENDPOINT: d } = window.GLOBAL_ENV,
    f = 'https:'.concat(d, '/bad-hash-delta'),
    _ = new o.Z('FetchBlockedDomain');
function p() {
    return r.Z.timeAsync('\uD83D\uDCBE', 'fetchBlockedDomainList', h);
}
async function h() {
    _.verbose('Fetching blocked domain list');
    try {
        let e,
            t = parseInt((await i.tn.get(u)).text),
            n = l.Z.getCurrentRevision();
        if ((_.verbose('Server revision: '.concat(t, ', Client revision: ').concat(n)), null === n || n !== t)) {
            try {
                if (null === n || n > t) {
                    let e = null === n ? 'null' : 'greater than server revision number';
                    throw Error('Client revision number is ' + e);
                }
                let a = (
                    await i.tn.get({
                        url: f,
                        query: {
                            revision: n,
                            targetRevision: t
                        },
                        rejectWithError: !1
                    })
                ).body;
                if (0 === a.ADDED.length && 0 === a.REMOVED.length) return void _.verbose('No changes to blocked domains list.');
                _.verbose('Retrieved delta, domains added: '.concat(a.ADDED.length, ', domains removed: ').concat(a.REMOVED.length));
                let o = await r.Z.timeAsync('\uD83D\uDCBE', 'getBlockedDomainList', () => l.Z.getBlockedDomainList());
                if (null === o) throw Error('Blocked domain list is null');
                _.verbose('Blocked domains list length: '.concat(o.size, ' before update')),
                    a.ADDED.forEach((e) => {
                        if (null != o[e]) throw Error('Unable to add domain which is already in the blockedDomains set: '.concat(e));
                        o[e] = !0;
                    }),
                    a.REMOVED.forEach((e) => {
                        if (null == o[e]) throw Error('Unable to removed domain which is not in the blockedDomains set: '.concat(e));
                        o[e] = !1;
                    }),
                    (e = Object.keys(o).filter((e) => o[e])),
                    _.verbose('Delta applied successfully');
            } catch (t) {
                if ((_.verbose('Unable to process domain list delta: '.concat(t.message)), (0, s.K)())) return void _.verbose('Slow network detected, not downloading full list');
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
                    a.Z.dispatch({
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
