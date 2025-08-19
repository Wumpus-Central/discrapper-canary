n.d(t, { N: () => _ }), n(388685);
var r = n(647438),
    a = n(392711),
    i = n.n(a),
    o = n(876215),
    l = n(897674),
    s = n(709054),
    c = n(206583);
let d = new Set([o.s.PLAYED_GAME, o.s.LAUNCHED_ACTIVITY]),
    u = (e) => d.has(e.content_type);
function _(e) {
    let t = (0, l.Z)({ id: c.YN.GLOBAL_FEED }),
        n = (0, l.Z)({
            id: c.YN.GLOBAL_FEED,
            unrankedEntries: !0,
        });
    return r.useMemo(
        () =>
            i()(n)
                .unionBy(t, (e) => e.id)
                .filter(u)
                .filter((t) => t.extra.application_id === e)
                .orderBy((e) => s.default.extractTimestamp(e.id), "desc")
                .uniqWith((e, t) => e.author_id === t.author_id && e.extra.application_id === t.extra.application_id)
                .value(),
        [n, e, t],
    );
}
