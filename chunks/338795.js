i.d(e, { J: () => b });
var n = i(934551),
    l = i(98207),
    s = i(631670),
    r = i(419954),
    a = i(576622),
    u = i(287809),
    o = i(954571),
    d = i(780964),
    T = i(358776),
    A = i(782844),
    S = i(828797),
    E = i(611478),
    g = i(402089),
    _ = i(281225),
    c = i(531525),
    I = i(652215),
    N = i(985018);
let C = (0, r.dT)(d.X.ACCOUNT_STANDING_TAB, {
        getTitle: () => N.intl.string(N.t["Vov/9o"]),
        onItemSelect: () => {
            o.default.track(I.HAw.MY_ACCOUNT_PAGE_TAB_NAVIGATE, { target_tab_name: A.D.STANDING });
        },
        buildLayout: () => [_.Q],
    }),
    O = (0, r.dT)(d.X.ACCOUNT_SECURITY_TAB, {
        getTitle: () => N.intl.string(N.t.Am9YHi),
        onItemSelect: () => {
            o.default.track(I.HAw.MY_ACCOUNT_PAGE_TAB_NAVIGATE, { target_tab_name: A.D.SECURITY });
        },
        buildLayout: () => [E.P, S.o, g.s],
    }),
    L = (0, r.t_)(d.X.ACCOUNT_PANEL, {
        useTitle: () => N.intl.string(N.t["JAIM/m"]),
        initialize: function () {
            let t = u.default.getCurrentUser();
            return (
                null != t && (0, a.A)(t.id, t.getAvatarURL(void 0, 80)),
                () => {
                    l.A.clearBackupCodes(), (0, s.Uo)();
                }
            );
        },
        hideInStreamerMode: !0,
        buildLayout: () => [O, C],
    }),
    R = (0, r.t_)(d.X.ACCOUNT_PANEL, {
        useTitle: () => N.intl.string(N.t["JAIM/m"]),
        StronglyDiscouragedCustomComponent: A.A,
        buildLayout: () => [],
    }),
    b = (0, r.i4)(d.X.ACCOUNT_SIDEBAR_ITEM, {
        useTitle: () => N.intl.string(N.t["JAIM/m"]),
        getLegacySearchKey: () => ((0, T.WJ)("AccountPanel") ? void 0 : c.H.ACCOUNT),
        icon: n.UserIcon,
        buildLayout: () => ((0, T.WJ)("AccountPanel") ? [L] : [R]),
    });
