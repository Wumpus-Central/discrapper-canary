n.d(t, { Q: () => x });
var i = n(64700),
    s = n(934551),
    l = n(35587),
    r = n(419954),
    a = n(933297),
    o = n(780964),
    d = n(479879),
    c = n(68897),
    u = n(832463),
    m = n(985018);
let g = (0, r.zZ)(o.X.GIFT_INVENTORY_CATEGORY, { buildLayout: () => [d.V, c.R, u.Y] }),
    _ = (0, r.t_)(o.X.GIFT_PANEL, { useTitle: () => m.intl.string(m.t["jcSP+g"]), buildLayout: () => [g] }),
    x = (0, r.i4)(o.X.GIFT_SIDEBAR_ITEM, {
        useTitle: () => m.intl.string(m.t["jcSP+g"]),
        icon: s.GiftIcon,
        usePersistentBadge: function () {
            return i.useMemo(() => ({ badgeType: a.Xi.COUNT, useCount: () => (0, l.IO)().length }), []);
        },
        buildLayout: () => [_],
    });
