i.d(e, { s: () => _ });
var n = i(64700),
    a = i(735438),
    r = i.n(a),
    d = i(681154),
    p = i(808323),
    o = i(935208),
    u = i(424994);
let s = new Set([d.ContentInventoryEntryType.PLAYED_GAME, d.ContentInventoryEntryType.LAUNCHED_ACTIVITY]),
    c = (t) => s.has(t.content_type);
function _(t) {
    let e = (0, p.A)({ id: u.X1.GLOBAL_FEED }),
        i = (0, p.A)({ id: u.X1.GLOBAL_FEED, unrankedEntries: !0 });
    return n.useMemo(
        () =>
            r()(i)
                .unionBy(e, (t) => t.id)
                .filter(c)
                .filter((e) => e.extra.application_id === t)
                .orderBy((t) => o.default.extractTimestamp(t.id), "desc")
                .uniqWith((t, e) => t.author_id === e.author_id && t.extra.application_id === e.extra.application_id)
                .value(),
        [i, t, e],
    );
}
