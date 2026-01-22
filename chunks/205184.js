n.d(t, {
    s: () => f,
}),
    n(896048);
var r = n(64700),
    i = n(735438),
    a = n.n(i),
    s = n(681154),
    o = n(475450),
    l = n(661191),
    c = n(424994);
let u = new Set([s.I.PLAYED_GAME, s.I.LAUNCHED_ACTIVITY]),
    d = (e) => u.has(e.content_type);

function f(e) {
    let t = (0, o.A)({
            id: c.X1.GLOBAL_FEED,
        }),
        n = (0, o.A)({
            id: c.X1.GLOBAL_FEED,
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
