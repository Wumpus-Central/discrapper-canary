n.d(t, { J: () => N });
var i = n(934551),
    s = n(98207),
    l = n(631670),
    a = n(419954),
    r = n(576622),
    o = n(287809),
    d = n(954571),
    c = n(780964),
    u = n(358776),
    m = n(305693),
    g = n(559516),
    _ = n(665526),
    x = n(933257),
    A = n(228201),
    h = n(935185),
    p = n(652215),
    T = n(985018);
let f = (0, a.dT)(c.X.ACCOUNT_STANDING_TAB, {
        getTitle: () => T.intl.string(T.t["Vov/9o"]),
        onItemSelect: () => {
            d.default.track(p.HAw.MY_ACCOUNT_PAGE_TAB_NAVIGATE, { target_tab_name: h.D.STANDING });
        },
        buildLayout: () => [A.Q],
    }),
    S = (0, a.dT)(c.X.ACCOUNT_SECURITY_TAB, {
        getTitle: () => T.intl.string(T.t.Am9YHi),
        onItemSelect: () => {
            d.default.track(p.HAw.MY_ACCOUNT_PAGE_TAB_NAVIGATE, { target_tab_name: h.D.SECURITY });
        },
        buildLayout: () => [_.P, m.o, x.s],
    });
function E() {
    let e = o.default.getCurrentUser();
    return (
        null == e || (0, u.pC)("Account") || (0, r.A)(e.id, e.getAvatarURL(void 0, 80)),
        () => {
            s.A.clearBackupCodes(), (0, l.Uo)();
        }
    );
}
let b = (0, a.t_)(c.X.ACCOUNT_PANEL, {
        useTitle: () => T.intl.string(T.t["JAIM/m"]),
        initialize: E,
        hideInStreamerMode: !0,
        buildLayout: () => [S, f],
    }),
    C = (0, a.t_)(c.X.ACCOUNT_PANEL, {
        useTitle: () => T.intl.string(T.t["ldCE/p"]),
        initialize: E,
        hideInStreamerMode: !0,
        buildLayout: () => [g.v],
    }),
    N = (0, a.i4)(c.X.ACCOUNT_SIDEBAR_ITEM, {
        useTitle: () => ((0, u.pC)("Account") ? T.intl.string(T.t["ldCE/p"]) : T.intl.string(T.t["JAIM/m"])),
        icon: i.UserIcon,
        buildLayout: () => ((0, u.pC)("Account") ? [C] : [b]),
    });
