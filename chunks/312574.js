n.d(t, { u: () => f });
var i = n(627968),
    s = n(935399),
    l = n(934551),
    a = n(158954),
    r = n(554146),
    o = n(932001),
    d = n(46373),
    c = n(419954),
    u = n(933297),
    _ = n(780964),
    g = n(682262),
    m = n(694202),
    A = n(50847),
    h = n(606275),
    p = n(879545),
    x = n(49999),
    E = n(985018),
    T = n(696952),
    S = n(130324),
    C = n(966040);
let I = (0, c.t_)(_.X.OVERLAY_PANEL, {
        useTitle: () => E.intl.string(E.t["9cb1Uz"]),
        decoration: {
            type: u.t9.STRONGLY_DISCOURAGED_CUSTOM,
            component: function () {
                let [e, t] = (0, o.kn)([r.M.OVERLAY_OOP_SETTINGS_NUX], void 0, !0);
                return ((0, s.Ay)(() => () => {
                    t(x.i.AUTO_DISMISS);
                }),
                e !== r.M.OVERLAY_OOP_SETTINGS_NUX)
                    ? null
                    : (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsxs)("div", {
                                  className: T.xC,
                                  children: [
                                      (0, i.jsx)("div", {
                                          children: (0, i.jsx)("img", {
                                              src: S.A,
                                              alt: E.intl.string(E.t.mdXZh1),
                                              className: T.tl,
                                          }),
                                      }),
                                      (0, i.jsx)("div", {
                                          children: (0, i.jsxs)("div", {
                                              className: T.vJ,
                                              children: [
                                                  (0, i.jsx)(a.DZT, {
                                                      variant: "heading-xl/medium",
                                                      color: "text-strong",
                                                      children: E.intl.string(E.t.jzjJQg),
                                                  }),
                                                  (0, i.jsx)(a.EYj, {
                                                      variant: "text-md/normal",
                                                      color: "text-muted",
                                                      children: E.intl.string(E.t["5dOfxb"]),
                                                  }),
                                              ],
                                          }),
                                      }),
                                      (0, i.jsx)("div", {
                                          children: (0, i.jsx)("img", {
                                              src: C.A,
                                              alt: E.intl.string(E.t.mdXZh1),
                                              className: T.lh,
                                          }),
                                      }),
                                      (0, i.jsx)("div", {
                                          "data-button-hoisted-classname-wrapper": !0,
                                          className: T.VV,
                                          children: (0, i.jsx)(a.$nd, {
                                              variant: "primary",
                                              text: E.intl.string(E.t.Q26diF),
                                              onClick: () => void t(x.i.DISMISS),
                                          }),
                                      }),
                                  ],
                              }),
                              (0, i.jsx)(d.A, { className: T.yF }),
                          ],
                      });
            },
        },
        buildLayout: () => [m.u, A.X, p.D, h.h],
    }),
    f = (0, c.i4)(_.X.OVERLAY_SIDEBAR_ITEM, {
        useTitle: () => E.intl.string(E.t["9cb1Uz"]),
        icon: l.WindowTopOutlineIcon,
        usePredicate: g.b_,
        buildLayout: () => [I],
    });
