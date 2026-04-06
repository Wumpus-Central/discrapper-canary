n.d(t, { J: () => v });
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
    g = n(372745),
    _ = n(559516),
    x = n(665526),
    A = n(933257),
    h = n(228201),
    p = n(935185),
    T = n(652215),
    f = n(985018);
let S = (0, a.dT)(c.X.ACCOUNT_STANDING_TAB, {
        getTitle: () => f.intl.string(f.t["Vov/9o"]),
        onItemSelect: () => {
            d.default.track(T.HAw.MY_ACCOUNT_PAGE_TAB_NAVIGATE, { target_tab_name: p.D.STANDING });
        },
        buildLayout: () => [h.Q],
    }),
    E = (0, a.dT)(c.X.ACCOUNT_SECURITY_TAB, {
        getTitle: () => f.intl.string(f.t.Am9YHi),
        onItemSelect: () => {
            d.default.track(T.HAw.MY_ACCOUNT_PAGE_TAB_NAVIGATE, { target_tab_name: p.D.SECURITY });
        },
        buildLayout: () => [x.P, m.o, A.s],
    });
function b() {
    let e = o.default.getCurrentUser();
    return (
        null == e || (0, u.pC)("Account") || (0, r.A)(e.id, e.getAvatarURL(void 0, 80)),
        () => {
            s.A.clearBackupCodes(), (0, l.Uo)();
        }
    );
}
let C = (0, a.t_)(c.X.ACCOUNT_PANEL, {
        useTitle: () => f.intl.string(f.t["JAIM/m"]),
        initialize: b,
        hideInStreamerMode: !0,
        buildLayout: () => [E, S],
    }),
    N = (0, a.t_)(c.X.ACCOUNT_PANEL, {
        useTitle: () => f.intl.string(f.t["ldCE/p"]),
        initialize: b,
        hideInStreamerMode: !0,
        buildLayout: () => [g.u, _.v],
    }),
    v = (0, a.i4)(c.X.ACCOUNT_SIDEBAR_ITEM, {
        useTitle: () => ((0, u.pC)("Account") ? f.intl.string(f.t["ldCE/p"]) : f.intl.string(f.t["JAIM/m"])),
        icon: i.UserIcon,
        buildLayout: () => ((0, u.pC)("Account") ? [N] : [C]),
    });
