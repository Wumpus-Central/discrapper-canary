n.d(t, { J: () => S });
var i = n(934551),
    s = n(98207),
    l = n(631670),
    a = n(419954),
    r = n(576622),
    o = n(287809),
    d = n(954571),
    c = n(780964),
    u = n(782844),
    _ = n(828797),
    g = n(611478),
    m = n(402089),
    A = n(281225),
    h = n(652215),
    p = n(985018);
let x = (0, a.dT)(c.X.ACCOUNT_STANDING_TAB, {
        getTitle: () => p.intl.string(p.t["Vov/9o"]),
        onItemSelect: () => {
            d.default.track(h.HAw.MY_ACCOUNT_PAGE_TAB_NAVIGATE, { target_tab_name: u.D.STANDING });
        },
        buildLayout: () => [A.Q],
    }),
    E = (0, a.dT)(c.X.ACCOUNT_SECURITY_TAB, {
        getTitle: () => p.intl.string(p.t.Am9YHi),
        onItemSelect: () => {
            d.default.track(h.HAw.MY_ACCOUNT_PAGE_TAB_NAVIGATE, { target_tab_name: u.D.SECURITY });
        },
        buildLayout: () => [g.P, _.o, m.s],
    }),
    T = (0, a.t_)(c.X.ACCOUNT_PANEL, {
        useTitle: () => p.intl.string(p.t["JAIM/m"]),
        initialize: function () {
            let e = o.default.getCurrentUser();
            return (
                null != e && (0, r.A)(e.id, e.getAvatarURL(void 0, 80)),
                () => {
                    s.A.clearBackupCodes(), (0, l.Uo)();
                }
            );
        },
        hideInStreamerMode: !0,
        buildLayout: () => [E, x],
    }),
    S = (0, a.i4)(c.X.ACCOUNT_SIDEBAR_ITEM, {
        useTitle: () => p.intl.string(p.t["JAIM/m"]),
        icon: i.UserIcon,
        buildLayout: () => [T],
    });
