i.d(t, { T: () => C });
var n = i(627968),
    l = i(934551),
    s = i(554146),
    r = i(397927),
    a = i(834981),
    u = i(793998),
    o = i(419954),
    d = i(933297),
    _ = i(780964),
    T = i(358776),
    A = i(264474),
    S = i(531525),
    E = i(985018),
    c = i(842130);
let g = (0, o.t_)(_.X.FAMILY_CENTER_PANEL, {
        usePredicate: () => !(0, T.dk)("LegacyFamilyCenterPanel"),
        useTitle: () => E.intl.string(c.default.RZqaJn),
        StronglyDiscouragedCustomComponent: u.p,
        buildLayout: () => [],
    }),
    I = (0, o.t_)(_.X.FAMILY_CENTER_PANEL, {
        usePredicate: () => (0, T.dk)("FamilyCenterPanel"),
        useTitle: () => E.intl.string(c.default.RZqaJn),
        buildLayout: () => [A.g],
    }),
    C = (0, o.i4)(_.X.FAMILY_CENTER_SIDEBAR_ITEM, {
        useTitle: () => E.intl.string(c.default.RZqaJn),
        getLegacySearchKey: () => ((0, T.WJ)("FamilyCenterPanel") ? void 0 : S.H.PRIVACY_FAMILY_CENTER),
        icon: l.GroupIcon,
        trailing: {
            type: d.Si.STRONGLY_DISCOURAGED_CUSTOM,
            getDismissibleContentTypes: () => [s.M.FAMILY_CENTER_NEW_BADGE],
            useCustomDecoration: function (e) {
                let t = (0, a.VT)();
                return e === s.M.FAMILY_CENTER_NEW_BADGE
                    ? (0, n.jsx)(r.LpS, { text: E.intl.string(E.t.y2b7CA) })
                    : t > 0
                      ? (0, n.jsx)(r.hVq, { count: t })
                      : null;
            },
        },
        buildLayout: () => ((0, T.WJ)("FamilyCenterPanel") ? [I] : [g]),
    });
