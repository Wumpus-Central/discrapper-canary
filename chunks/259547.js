n.d(t, { T: () => _, U: () => m });
var i = n(64700),
    s = n(177953),
    l = n(554146),
    a = n(834981),
    r = n(419954),
    o = n(933297),
    d = n(780964),
    u = n(481722),
    c = n(985018),
    g = n(602339);
let m = (0, r.t_)(d.X.FAMILY_CENTER_PANEL, {
        useTitle: () => c.intl.string(g.default.RZqaJn),
        buildLayout: () => [u.g],
    }),
    _ = (0, r.i4)(d.X.FAMILY_CENTER_SIDEBAR_ITEM, {
        useTitle: () => c.intl.string(g.default.RZqaJn),
        icon: s.n,
        usePersistentBadge: function () {
            return i.useMemo(() => ({ badgeType: o.Xi.COUNT, useCount: a.VT }), []);
        },
        getDismissibleBadges: function () {
            return [{ badgeType: o.Xi.NEW, dismissibleContent: l.M.FAMILY_CENTER_NEW_BADGE }];
        },
        buildLayout: () => [m],
    });
