n.d(t, { N: () => f }), n(388685);
var r = n(647438),
    i = n(392711),
    o = n.n(i),
    l = n(876215),
    a = n(897674),
    c = n(709054),
    u = n(206583);
let s = new Set([l.s.PLAYED_GAME, l.s.LAUNCHED_ACTIVITY]),
    d = (e) => s.has(e.content_type);
function f(e) {
    let t = (0, a.Z)({ id: u.YN.GLOBAL_FEED }),
        n = (0, a.Z)({
            id: u.YN.GLOBAL_FEED,
            unrankedEntries: !0,
        });
    return r.useMemo(
        () =>
            o()(n)
                .unionBy(t, (e) => e.id)
                .filter(d)
                .filter((t) => t.extra.application_id === e)
                .orderBy((e) => c.default.extractTimestamp(e.id), "desc")
                .uniqWith((e, t) => e.author_id === t.author_id && e.extra.application_id === t.extra.application_id)
                .value(),
        [n, e, t],
    );
}
