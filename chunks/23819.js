n.d(t, { J: () => I });
var i = n(934551),
    s = n(98207),
    l = n(631670),
    a = n(974544),
    r = n(419954),
    o = n(576622),
    d = n(287809),
    c = n(954571),
    u = n(780964),
    m = n(358776),
    g = n(305693),
    _ = n(372745),
    x = n(559516),
    A = n(665526),
    h = n(933257),
    p = n(228201),
    T = n(935185),
    f = n(652215),
    S = n(985018);
let b = (0, r.dT)(u.X.ACCOUNT_STANDING_TAB, {
        getTitle: () => S.intl.string(S.t["Vov/9o"]),
        onItemSelect: () => {
            c.default.track(f.HAw.MY_ACCOUNT_PAGE_TAB_NAVIGATE, { target_tab_name: T.D.STANDING });
        },
        buildLayout: () => [p.Q],
    }),
    E = (0, r.dT)(u.X.ACCOUNT_SECURITY_TAB, {
        getTitle: () => S.intl.string(S.t.Am9YHi),
        onItemSelect: () => {
            c.default.track(f.HAw.MY_ACCOUNT_PAGE_TAB_NAVIGATE, { target_tab_name: T.D.SECURITY });
        },
        buildLayout: () => [A.P, g.o, h.s],
    });
function C() {
    let e = d.default.getCurrentUser();
    return (
        null == e || (0, m.pC)("Account") || (0, o.A)(e.id, e.getAvatarURL(void 0, 80)),
        () => {
            s.A.clearBackupCodes(), (0, l.Uo)();
        }
    );
}
let N = (0, r.t_)(u.X.ACCOUNT_PANEL, {
        useTitle: () => S.intl.string(S.t["JAIM/m"]),
        initialize: C,
        useObscuredNotice: a.L,
        buildLayout: () => [E, b],
    }),
    v = (0, r.t_)(u.X.ACCOUNT_PANEL, {
        useTitle: () => S.intl.string(S.t["ldCE/p"]),
        initialize: C,
        useObscuredNotice: a.L,
        buildLayout: () => [_.u, x.v],
    }),
    I = (0, r.i4)(u.X.ACCOUNT_SIDEBAR_ITEM, {
        useTitle: () => ((0, m.pC)("Account") ? S.intl.string(S.t["ldCE/p"]) : S.intl.string(S.t["JAIM/m"])),
        icon: i.UserIcon,
        buildLayout: () => ((0, m.pC)("Account") ? [v] : [N]),
    });
