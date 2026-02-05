"use strict";
n.d(t, { s: () => _ });
var r = n(64700),
    i = n(735438),
    a = n.n(i),
    s = n(681154),
    o = n(475450),
    l = n(661191),
    u = n(424994);
let c = new Set([s.ContentInventoryEntryType.PLAYED_GAME, s.ContentInventoryEntryType.LAUNCHED_ACTIVITY]),
    d = (e) => c.has(e.content_type);
function _(e) {
    let t = (0, o.A)({ id: u.X1.GLOBAL_FEED }),
        n = (0, o.A)({ id: u.X1.GLOBAL_FEED, unrankedEntries: !0 });
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
