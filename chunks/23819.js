n.d(t, { J: () => y });
var i = n(934551),
    s = n(98207),
    l = n(631670),
    r = n(974544),
    a = n(419954),
    o = n(576622),
    d = n(287809),
    c = n(954571),
    u = n(780964),
    m = n(358776),
    g = n(305693),
    _ = n(372745),
    x = n(559516),
    h = n(665526),
    A = n(933257),
    p = n(228201),
    T = n(875532),
    f = n(441444),
    S = n(935185),
    E = n(652215),
    b = n(985018);
let C = (0, a.dT)(u.X.ACCOUNT_STANDING_TAB, {
        getTitle: () => b.intl.string(b.t["Vov/9o"]),
        onItemSelect: () => {
            c.default.track(E.HAw.MY_ACCOUNT_PAGE_TAB_NAVIGATE, { target_tab_name: S.D.STANDING });
        },
        buildLayout: () => [T.t],
    }),
    v = (0, a.dT)(u.X.ACCOUNT_SECURITY_TAB, {
        getTitle: () => b.intl.string(b.t.Am9YHi),
        onItemSelect: () => {
            c.default.track(E.HAw.MY_ACCOUNT_PAGE_TAB_NAVIGATE, { target_tab_name: S.D.SECURITY });
        },
        buildLayout: () => [h.P, g.o, A.s],
    });
function N() {
    let e = d.default.getCurrentUser();
    return (
        null == e || (0, m.pC)("Account") || (0, o.A)(e.id, e.getAvatarURL(void 0, 80)),
        () => {
            s.A.clearBackupCodes(), (0, l.Uo)();
        }
    );
}
let I = (0, a.t_)(u.X.ACCOUNT_PANEL, {
        useTitle: () => b.intl.string(b.t["JAIM/m"]),
        initialize: N,
        useObscuredNotice: r.L,
        buildLayout: () => [v, C],
    }),
    j = (0, a.t_)(u.X.ACCOUNT_PANEL, {
        useTitle: () => b.intl.string(b.t["ldCE/p"]),
        initialize: N,
        useObscuredNotice: r.L,
        buildLayout: () => [_.u, x.v, p.Q, f.J, A._],
    }),
    y = (0, a.i4)(u.X.ACCOUNT_SIDEBAR_ITEM, {
        useTitle: () => ((0, m.pC)("Account") ? b.intl.string(b.t["ldCE/p"]) : b.intl.string(b.t["JAIM/m"])),
        icon: i.UserIcon,
        buildLayout: () => ((0, m.pC)("Account") ? [j] : [I]),
    });
