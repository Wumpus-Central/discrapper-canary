i.d(e, { z: () => I });
var n = i(627968),
    l = i(311907),
    s = i(3137),
    r = i(454292),
    u = i(419954),
    a = i(780964),
    o = i(358776),
    T = i(74695),
    A = i(531525),
    S = i(985018),
    E = i(625587);
let d = (0, u.t_)(a.X.POGGERMODE_PANEL, {
        usePredicate: () => !(0, o.dk)("LegacyPoggermodePanel"),
        useTitle: () => S.intl.string(S.t.AtCukI),
        StronglyDiscouragedCustomComponent: r.A,
        buildLayout: () => [],
    }),
    _ = (0, u.t_)(a.X.POGGERMODE_PANEL, {
        usePredicate: () => (0, o.dk)("PoggermodePanel"),
        useTitle: () => S.intl.string(S.t.AtCukI),
        buildLayout: () => [T.c],
    }),
    I = (0, u.i4)(a.X.POGGERMODE_SIDEBAR_ITEM, {
        useTitle: () => S.intl.string(S.t.AtCukI),
        getLegacySearchKey: () => ((0, o.WJ)("PoggermodePanel") ? void 0 : A.H.POGGERMODE),
        icon: () =>
            (0, n.jsx)("img", {
                alt: "",
                src: i(724405),
                className: E.$,
            }),
        usePredicate: () => (0, l.bG)([s.A], () => s.A.settingsVisible),
        buildLayout: () => ((0, o.WJ)("PoggermodePanel") ? [_] : [d]),
    });
