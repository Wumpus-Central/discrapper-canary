i.d(e, {
    J: () => b,
});
var n = i(934551),
    l = i(98207),
    s = i(631670),
    r = i(419954),
    u = i(576622),
    a = i(287809),
    o = i(954571),
    T = i(780964),
    A = i(358776),
    S = i(782844),
    E = i(828797),
    d = i(611478),
    _ = i(402089),
    I = i(281225),
    g = i(531525),
    c = i(652215),
    N = i(985018);
let O = (0, r.dT)(T.X.ACCOUNT_STANDING_TAB, {
        getTitle: () => N.intl.string(N.t["Vov/9o"]),
        onItemSelect: () => {
            o.default.track(c.HAw.MY_ACCOUNT_PAGE_TAB_NAVIGATE, {
                target_tab_name: S.D.STANDING,
            });
        },
        buildLayout: () => [I.Q],
    }),
    C = (0, r.dT)(T.X.ACCOUNT_SECURITY_TAB, {
        getTitle: () => N.intl.string(N.t.Am9YHi),
        onItemSelect: () => {
            o.default.track(c.HAw.MY_ACCOUNT_PAGE_TAB_NAVIGATE, {
                target_tab_name: S.D.SECURITY,
            });
        },
        buildLayout: () => [d.P, E.o, _.s],
    }),
    L = (0, r.t_)(T.X.ACCOUNT_PANEL, {
        useTitle: () => N.intl.string(N.t["JAIM/m"]),
        initialize: function () {
            let t = a.default.getCurrentUser();
            return (
                null != t && (0, u.A)(t.id, t.getAvatarURL(void 0, 80)),
                () => {
                    l.A.clearBackupCodes(), (0, s.Uo)();
                }
            );
        },
        hideInStreamerMode: !0,
        buildLayout: () => [C, O],
    }),
    R = (0, r.t_)(T.X.ACCOUNT_PANEL, {
        useTitle: () => N.intl.string(N.t["JAIM/m"]),
        StronglyDiscouragedCustomComponent: S.A,
        buildLayout: () => [],
    }),
    b = (0, r.i4)(T.X.ACCOUNT_SIDEBAR_ITEM, {
        useTitle: () => N.intl.string(N.t["JAIM/m"]),
        getLegacySearchKey: () => ((0, A.WJ)("AccountPanel") ? void 0 : g.H.ACCOUNT),
        icon: n.UserIcon,
        buildLayout: () => ((0, A.WJ)("AccountPanel") ? [L] : [R]),
    });
