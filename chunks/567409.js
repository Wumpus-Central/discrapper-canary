(n.d(t, { N: () => f }), n(388685));
var r = n(73800),
    o = n(392711),
    i = n.n(o),
    l = n(876215),
    a = n(897674),
    c = n(709054),
    s = n(206583);
let u = new Set([l.s.PLAYED_GAME, l.s.LAUNCHED_ACTIVITY]),
    d = (e) => u.has(e.content_type);
function f(e) {
    let t = (0, a.Z)({ id: s.YN.GLOBAL_FEED }),
        n = (0, a.Z)({
            id: s.YN.GLOBAL_FEED,
            unrankedEntries: !0
        });
    return r.useMemo(
        () =>
            i()(n)
                .unionBy(t, (e) => e.id)
                .filter(d)
                .filter((t) => t.extra.application_id === e)
                .orderBy((e) => c.default.extractTimestamp(e.id), 'desc')
                .uniqWith((e, t) => e.author_id === t.author_id && e.extra.application_id === t.extra.application_id)
                .value(),
        [n, e, t]
    );
}
