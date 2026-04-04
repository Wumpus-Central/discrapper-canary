n.d(t, { J: () => S });
var i = n(934551),
    s = n(98207),
    l = n(631670),
    a = n(419954),
    r = n(576622),
    o = n(287809),
    d = n(954571),
    c = n(780964),
    u = n(305693),
    m = n(665526),
    g = n(933257),
    _ = n(228201),
    x = n(935185),
    A = n(652215),
    h = n(985018);
let p = (0, a.dT)(c.X.ACCOUNT_STANDING_TAB, {
        getTitle: () => h.intl.string(h.t["Vov/9o"]),
        onItemSelect: () => {
            d.default.track(A.HAw.MY_ACCOUNT_PAGE_TAB_NAVIGATE, { target_tab_name: x.D.STANDING });
        },
        buildLayout: () => [_.Q],
    }),
    T = (0, a.dT)(c.X.ACCOUNT_SECURITY_TAB, {
        getTitle: () => h.intl.string(h.t.Am9YHi),
        onItemSelect: () => {
            d.default.track(A.HAw.MY_ACCOUNT_PAGE_TAB_NAVIGATE, { target_tab_name: x.D.SECURITY });
        },
        buildLayout: () => [m.P, u.o, g.s],
    }),
    f = (0, a.t_)(c.X.ACCOUNT_PANEL, {
        useTitle: () => h.intl.string(h.t["JAIM/m"]),
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
        buildLayout: () => [T, p],
    }),
    S = (0, a.i4)(c.X.ACCOUNT_SIDEBAR_ITEM, {
        useTitle: () => h.intl.string(h.t["JAIM/m"]),
        icon: i.UserIcon,
        buildLayout: () => [f],
    });
