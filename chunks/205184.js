n.d(e, { s: () => _ });
var i = n(64700),
    r = n(735438),
    a = n.n(r),
    d = n(681154),
    o = n(808323),
    p = n(935208),
    u = n(424994);
let c = new Set([d.ContentInventoryEntryType.PLAYED_GAME, d.ContentInventoryEntryType.LAUNCHED_ACTIVITY]);
function s(t) {
    return c.has(t.content_type);
}
function _(t) {
    let e = (0, o.A)({ id: u.X1.GLOBAL_FEED }),
        n = (0, o.A)({ id: u.X1.GLOBAL_FEED, unrankedEntries: !0 });
    return i.useMemo(
        () =>
            a()(n)
                .unionBy(e, (t) => t.id)
                .filter(s)
                .filter((e) => e.extra.application_id === t)
                .orderBy((t) => p.default.extractTimestamp(t.id), "desc")
                .uniqWith((t, e) => t.author_id === e.author_id && t.extra.application_id === e.extra.application_id)
                .value(),
        [n, t, e],
    );
}
