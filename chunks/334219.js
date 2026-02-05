i.d(e, { z: () => _ });
var n = i(627968),
    l = i(311907),
    s = i(3137),
    r = i(454292),
    a = i(419954),
    u = i(780964),
    o = i(358776),
    d = i(74695),
    T = i(531525),
    A = i(985018),
    S = i(625587);
let E = (0, a.t_)(u.X.POGGERMODE_PANEL, {
        usePredicate: () => !(0, o.dk)("LegacyPoggermodePanel"),
        useTitle: () => A.intl.string(A.t.AtCukI),
        StronglyDiscouragedCustomComponent: r.A,
        buildLayout: () => [],
    }),
    g = (0, a.t_)(u.X.POGGERMODE_PANEL, {
        usePredicate: () => (0, o.dk)("PoggermodePanel"),
        useTitle: () => A.intl.string(A.t.AtCukI),
        buildLayout: () => [d.c],
    }),
    _ = (0, a.i4)(u.X.POGGERMODE_SIDEBAR_ITEM, {
        useTitle: () => A.intl.string(A.t.AtCukI),
        getLegacySearchKey: () => ((0, o.WJ)("PoggermodePanel") ? void 0 : T.H.POGGERMODE),
        icon: () => (0, n.jsx)("img", { alt: "", src: i(724405), className: S.$ }),
        usePredicate: () => (0, l.bG)([s.A], () => s.A.settingsVisible),
        buildLayout: () => ((0, o.WJ)("PoggermodePanel") ? [g] : [E]),
    });
