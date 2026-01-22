i.d(e, {
    u: () => c,
});
var n = i(934551),
    l = i(419954),
    s = i(780964),
    r = i(358776),
    u = i(790076),
    a = i(682262),
    o = i(694202),
    T = i(50847),
    A = i(606275),
    S = i(222328),
    E = i(879545),
    d = i(531525),
    _ = i(985018);
let I = (0, l.t_)(s.X.OVERLAY_PANEL, {
        usePredicate: () => (0, r.dk)("OverlayPanel"),
        useTitle: () => _.intl.string(_.t["9cb1Uz"]),
        buildLayout: () => [S.I, o.u, T.X, E.D, A.h],
    }),
    g = (0, l.t_)(s.X.OVERLAY_PANEL, {
        usePredicate: () => !(0, r.dk)("OverlayPanel"),
        useTitle: () => _.intl.string(_.t["9cb1Uz"]),
        StronglyDiscouragedCustomComponent: u.Ay,
        buildLayout: () => [],
    }),
    c = (0, l.i4)(s.X.OVERLAY_SIDEBAR_ITEM, {
        useTitle: () => _.intl.string(_.t["9cb1Uz"]),
        icon: n.WindowTopOutlineIcon,
        usePredicate: a.b_,
        getLegacySearchKey: () => ((0, r.WJ)("OverlayPanel") ? void 0 : d.H.OVERLAY),
        buildLayout: () => ((0, r.WJ)("OverlayPanel") ? [I] : [g]),
    });
