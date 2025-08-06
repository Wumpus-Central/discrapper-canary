(n.d(t, { N: () => f }), n(388685));
var r = n(73800),
    i = n(392711),
    o = n.n(i),
    a = n(876215),
    s = n(897674),
    l = n(709054),
    c = n(206583);
let u = new Set([a.s.PLAYED_GAME, a.s.LAUNCHED_ACTIVITY]),
    d = (e) => u.has(e.content_type);
function f(e) {
    let t = (0, s.Z)({ id: c.YN.GLOBAL_FEED }),
        n = (0, s.Z)({
            id: c.YN.GLOBAL_FEED,
            unrankedEntries: !0
        });
    return r.useMemo(
        () =>
            o()(n)
                .unionBy(t, (e) => e.id)
                .filter(d)
                .filter((t) => t.extra.application_id === e)
                .orderBy((e) => l.default.extractTimestamp(e.id), 'desc')
                .uniqWith((e, t) => e.author_id === t.author_id && e.extra.application_id === t.extra.application_id)
                .value(),
        [n, e, t]
    );
}
