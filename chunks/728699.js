n.d(t, { T: () => m });
var i = n(64700),
    s = n(934551),
    l = n(554146),
    a = n(834981),
    r = n(419954),
    o = n(933297),
    d = n(780964),
    c = n(264474),
    u = n(985018),
    _ = n(842130);
let g = (0, r.t_)(d.X.FAMILY_CENTER_PANEL, {
        useTitle: () => u.intl.string(_.default.RZqaJn),
        buildLayout: () => [c.g],
    }),
    m = (0, r.i4)(d.X.FAMILY_CENTER_SIDEBAR_ITEM, {
        useTitle: () => u.intl.string(_.default.RZqaJn),
        icon: s.GroupIcon,
        usePersistentBadge: function () {
            return i.useMemo(() => ({ badgeType: o.Xi.COUNT, useCount: a.VT }), []);
        },
        getDismissibleBadges: function () {
            return [{ badgeType: o.Xi.NEW, dismissibleContent: l.M.FAMILY_CENTER_NEW_BADGE }];
        },
        buildLayout: () => [g],
    });
