i.d(e, { u: () => y });
var n = i(627968),
    l = i(935399),
    s = i(934551),
    a = i(158954),
    r = i(554146),
    u = i(932001),
    o = i(46373),
    d = i(419954),
    A = i(933297),
    T = i(780964),
    S = i(358776),
    E = i(790076),
    g = i(682262),
    c = i(694202),
    _ = i(50847),
    I = i(606275),
    C = i(879545),
    N = i(531525),
    O = i(49999),
    b = i(985018),
    p = i(696952),
    D = i(130324),
    L = i(966040);
let m = (0, d.t_)(T.X.OVERLAY_PANEL, {
        usePredicate: () => (0, S.dk)("OverlayPanel"),
        useTitle: () => b.intl.string(b.t["9cb1Uz"]),
        decoration: {
            type: A.t9.STRONGLY_DISCOURAGED_CUSTOM,
            component: function () {
                let [t, e] = (0, u.kn)([r.M.OVERLAY_OOP_SETTINGS_NUX], void 0, !0);
                return ((0, l.Ay)(() => () => {
                    e(O.i.AUTO_DISMISS);
                }),
                t !== r.M.OVERLAY_OOP_SETTINGS_NUX)
                    ? null
                    : (0, n.jsxs)(n.Fragment, {
                          children: [
                              (0, n.jsxs)("div", {
                                  className: p.xC,
                                  children: [
                                      (0, n.jsx)("div", {
                                          children: (0, n.jsx)("img", {
                                              src: D.A,
                                              alt: b.intl.string(b.t.mdXZh1),
                                              className: p.tl,
                                          }),
                                      }),
                                      (0, n.jsx)("div", {
                                          children: (0, n.jsxs)("div", {
                                              className: p.vJ,
                                              children: [
                                                  (0, n.jsx)(a.DZT, {
                                                      variant: "heading-xl/medium",
                                                      color: "text-strong",
                                                      children: b.intl.string(b.t.jzjJQg),
                                                  }),
                                                  (0, n.jsx)(a.EYj, {
                                                      variant: "text-md/normal",
                                                      color: "text-muted",
                                                      children: b.intl.string(b.t["5dOfxb"]),
                                                  }),
                                              ],
                                          }),
                                      }),
                                      (0, n.jsx)("div", {
                                          children: (0, n.jsx)("img", {
                                              src: L.A,
                                              alt: b.intl.string(b.t.mdXZh1),
                                              className: p.lh,
                                          }),
                                      }),
                                      (0, n.jsx)("div", {
                                          "data-button-hoisted-classname-wrapper": !0,
                                          className: p.VV,
                                          children: (0, n.jsx)(a.$nd, {
                                              variant: "primary",
                                              text: b.intl.string(b.t.Q26diF),
                                              onClick: () => void e(O.i.DISMISS),
                                          }),
                                      }),
                                  ],
                              }),
                              (0, n.jsx)(o.A, { className: p.yF }),
                          ],
                      });
            },
        },
        buildLayout: () => [c.u, _.X, C.D, I.h],
    }),
    R = (0, d.t_)(T.X.OVERLAY_PANEL, {
        usePredicate: () => !(0, S.dk)("OverlayPanel"),
        useTitle: () => b.intl.string(b.t["9cb1Uz"]),
        StronglyDiscouragedCustomComponent: E.Ay,
        buildLayout: () => [],
    }),
    y = (0, d.i4)(T.X.OVERLAY_SIDEBAR_ITEM, {
        useTitle: () => b.intl.string(b.t["9cb1Uz"]),
        icon: s.WindowTopOutlineIcon,
        usePredicate: g.b_,
        getLegacySearchKey: () => ((0, S.WJ)("OverlayPanel") ? void 0 : N.H.OVERLAY),
        buildLayout: () => ((0, S.WJ)("OverlayPanel") ? [m] : [R]),
    });
