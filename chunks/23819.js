n.d(t, { J: () => j });
var i = n(950305),
    s = n(98207),
    l = n(631670),
    a = n(974544),
    r = n(419954),
    o = n(576622),
    d = n(287809),
    u = n(954571),
    c = n(780964),
    g = n(358776),
    m = n(305693),
    _ = n(372745),
    A = n(559516),
    h = n(665526),
    p = n(933257),
    x = n(228201),
    E = n(875532),
    T = n(441444),
    S = n(935185),
    f = n(652215),
    b = n(985018);
let C = (0, r.dT)(c.X.ACCOUNT_STANDING_TAB, {
        getTitle: () => b.intl.string(b.t["Vov/9o"]),
        onItemSelect: () => {
            u.default.track(f.HAw.MY_ACCOUNT_PAGE_TAB_NAVIGATE, { target_tab_name: S.D.STANDING });
        },
        buildLayout: () => [E.t],
    }),
    v = (0, r.dT)(c.X.ACCOUNT_SECURITY_TAB, {
        getTitle: () => b.intl.string(b.t.Am9YHi),
        onItemSelect: () => {
            u.default.track(f.HAw.MY_ACCOUNT_PAGE_TAB_NAVIGATE, { target_tab_name: S.D.SECURITY });
        },
        buildLayout: () => [h.P, m.o, p.s],
    });
function N() {
    let e = d.default.getCurrentUser();
    return (
        null == e || (0, g.pC)("Account") || (0, o.A)(e.id, e.getAvatarURL(void 0, 80)),
        () => {
            s.A.clearBackupCodes(), (0, l.Uo)();
        }
    );
}
let I = (0, r.t_)(c.X.ACCOUNT_PANEL, {
        useTitle: () => b.intl.string(b.t["JAIM/m"]),
        initialize: N,
        useObscuredNotice: a.L,
        buildLayout: () => [v, C],
    }),
    y = (0, r.t_)(c.X.ACCOUNT_PANEL, {
        useTitle: () => b.intl.string(b.t["ldCE/p"]),
        initialize: N,
        useObscuredNotice: a.L,
        buildLayout: () => [_.u, A.v, x.Q, T.J, p._],
    }),
    j = (0, r.i4)(c.X.ACCOUNT_SIDEBAR_ITEM, {
        useTitle: () => ((0, g.pC)("Account") ? b.intl.string(b.t["ldCE/p"]) : b.intl.string(b.t["JAIM/m"])),
        icon: i.n,
        buildLayout: () => ((0, g.pC)("Account") ? [y] : [I]),
    });
