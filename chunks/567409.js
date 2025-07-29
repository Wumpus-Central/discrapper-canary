(r.d(t, { N: () => m }), r(388685));
var n = r(73800),
    i = r(392711),
    a = r.n(i),
    l = r(876215),
    s = r(897674),
    o = r(709054),
    c = r(206583);
let u = new Set([l.s.PLAYED_GAME, l.s.LAUNCHED_ACTIVITY]),
    d = (e) => u.has(e.content_type);
function m(e) {
    let t = (0, s.Z)({ id: c.YN.GLOBAL_FEED }),
        r = (0, s.Z)({
            id: c.YN.GLOBAL_FEED,
            unrankedEntries: !0
        });
    return n.useMemo(
        () =>
            a()(r)
                .unionBy(t, (e) => e.id)
                .filter(d)
                .filter((t) => t.extra.application_id === e)
                .orderBy((e) => o.default.extractTimestamp(e.id), 'desc')
                .uniqWith((e, t) => e.author_id === t.author_id && e.extra.application_id === t.extra.application_id)
                .value(),
        [r, e, t]
    );
}
