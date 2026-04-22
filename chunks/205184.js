n.d(t, { s: () => h });
var i = n(64700),
    l = n(735438),
    s = n.n(l),
    a = n(681154),
    r = n(475450),
    o = n(661191),
    d = n(424994);
let c = new Set([a.ContentInventoryEntryType.PLAYED_GAME, a.ContentInventoryEntryType.LAUNCHED_ACTIVITY]),
    u = (e) => c.has(e.content_type);
function h(e) {
    let t = (0, r.A)({ id: d.X1.GLOBAL_FEED }),
        n = (0, r.A)({ id: d.X1.GLOBAL_FEED, unrankedEntries: !0 });
    return i.useMemo(
        () =>
            s()(n)
                .unionBy(t, (e) => e.id)
                .filter(u)
                .filter((t) => t.extra.application_id === e)
                .orderBy((e) => o.default.extractTimestamp(e.id), "desc")
                .uniqWith((e, t) => e.author_id === t.author_id && e.extra.application_id === t.extra.application_id)
                .value(),
        [n, e, t],
    );
}
