"use strict";
n.d(t, { s: () => _ });
var r = n(64700),
    i = n(735438),
    a = n.n(i),
    l = n(681154),
    s = n(808323),
    o = n(935208),
    c = n(424994);
let u = new Set([l.ContentInventoryEntryType.PLAYED_GAME, l.ContentInventoryEntryType.LAUNCHED_ACTIVITY]),
    d = (e) => u.has(e.content_type);
function _(e) {
    let t = (0, s.A)({ id: c.X1.GLOBAL_FEED }),
        n = (0, s.A)({ id: c.X1.GLOBAL_FEED, unrankedEntries: !0 });
    return r.useMemo(
        () =>
            a()(n)
                .unionBy(t, (e) => e.id)
                .filter(d)
                .filter((t) => t.extra.application_id === e)
                .orderBy((e) => o.default.extractTimestamp(e.id), "desc")
                .uniqWith((e, t) => e.author_id === t.author_id && e.extra.application_id === t.extra.application_id)
                .value(),
        [n, e, t],
    );
}
