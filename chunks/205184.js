n.d(t, { s: () => p });
var r = n(582128),
    i = n(435558),
    u = n.n(i),
    a = n(681154),
    l = n(808323),
    s = n(935208),
    o = n(424994);
let d = new Set([a.ContentInventoryEntryType.PLAYED_GAME, a.ContentInventoryEntryType.LAUNCHED_ACTIVITY]);
function c(e) {
    return d.has(e.content_type);
}
function p(e) {
    let t = (0, l.A)({ id: o.X1.GLOBAL_FEED }),
        n = (0, l.A)({ id: o.X1.GLOBAL_FEED, unrankedEntries: !0 });
    return r.useMemo(
        () =>
            u()(n)
                .unionBy(t, (e) => e.id)
                .filter(c)
                .filter((t) => t.extra.application_id === e)
                .orderBy((e) => s.default.extractTimestamp(e.id), "desc")
                .uniqWith((e, t) => e.author_id === t.author_id && e.extra.application_id === t.extra.application_id)
                .value(),
        [n, e, t],
    );
}
