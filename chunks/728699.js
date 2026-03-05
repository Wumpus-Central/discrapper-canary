n.d(t, { T: () => A });
var i = n(627968),
    s = n(934551),
    l = n(554146),
    a = n(397927),
    r = n(834981),
    o = n(419954),
    d = n(933297),
    c = n(780964),
    u = n(264474),
    _ = n(985018),
    g = n(842130);
let m = (0, o.t_)(c.X.FAMILY_CENTER_PANEL, {
        useTitle: () => _.intl.string(g.default.RZqaJn),
        buildLayout: () => [u.g],
    }),
    A = (0, o.i4)(c.X.FAMILY_CENTER_SIDEBAR_ITEM, {
        useTitle: () => _.intl.string(g.default.RZqaJn),
        icon: s.GroupIcon,
        trailing: {
            type: d.Si.STRONGLY_DISCOURAGED_CUSTOM,
            getDismissibleContentTypes: () => [l.M.FAMILY_CENTER_NEW_BADGE],
            useCustomDecoration: function (e) {
                let t = (0, r.VT)();
                return e === l.M.FAMILY_CENTER_NEW_BADGE
                    ? (0, i.jsx)(a.LpS, { text: _.intl.string(_.t.y2b7CA) })
                    : t > 0
                      ? (0, i.jsx)(a.hVq, { count: t })
                      : null;
            },
        },
        buildLayout: () => [m],
    });
