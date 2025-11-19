n.d(t, { N: () => f }), n(388685);
var r = n(473749),
    i = n(392711),
    a = n.n(i),
    o = n(876215),
    s = n(897674),
    l = n(709054),
    c = n(206583);
let u = new Set([o.s.PLAYED_GAME, o.s.LAUNCHED_ACTIVITY]),
    d = (e) => u.has(e.content_type);
function f(e) {
    let t = (0, s.Z)({ id: c.YN.GLOBAL_FEED }),
        n = (0, s.Z)({
            id: c.YN.GLOBAL_FEED,
            unrankedEntries: !0,
        });
    return r.useMemo(
        () =>
            a()(n)
                .unionBy(t, (e) => e.id)
                .filter(d)
                .filter((t) => t.extra.application_id === e)
                .orderBy((e) => l.default.extractTimestamp(e.id), "desc")
                .uniqWith((e, t) => e.author_id === t.author_id && e.extra.application_id === t.extra.application_id)
                .value(),
        [n, e, t],
    );
}
