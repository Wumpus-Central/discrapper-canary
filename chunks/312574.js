n.d(t, { u: () => R });
var i = n(627968),
    s = n(935399),
    l = n(934551),
    a = n(158954),
    r = n(554146),
    o = n(932001),
    d = n(843402),
    c = n(592598),
    u = n(46373),
    m = n(419954),
    _ = n(933297),
    g = n(532624),
    x = n(242286),
    A = n(256415),
    h = n(723702),
    p = n(780964),
    f = n(790076),
    T = n(682262),
    S = n(694202),
    E = n(50847),
    b = n(606275),
    C = n(879545),
    v = n(49999),
    N = n(985018),
    I = n(696952),
    j = n(130324),
    y = n(966040);
let O = (0, m.t_)(p.X.OVERLAY_PANEL, {
        initialize: function () {
            return (
                (0, f.Ql)(),
                g.Ay.addChangeListener(f.Ql),
                c.A.addChangeListener(f.Ql),
                A.default.addChangeListener(f.Ql),
                x.default.addChangeListener(f.Ql),
                h.isPlatformEmbedded && (0, d.a2)(),
                () => {
                    g.Ay.removeChangeListener(f.Ql),
                        c.A.removeChangeListener(f.Ql),
                        A.default.removeChangeListener(f.Ql),
                        x.default.removeChangeListener(f.Ql),
                        h.isPlatformEmbedded && (0, d.e0)();
                }
            );
        },
        useTitle: () => N.intl.string(N.t["9cb1Uz"]),
        decoration: {
            type: _.t9.STRONGLY_DISCOURAGED_CUSTOM,
            component: function () {
                let [e, t] = (0, o.kn)([r.M.OVERLAY_OOP_SETTINGS_NUX], void 0, !0);
                return ((0, s.Ay)(() => () => {
                    t(v.i.AUTO_DISMISS);
                }),
                e !== r.M.OVERLAY_OOP_SETTINGS_NUX)
                    ? null
                    : (0, i.jsxs)(i.Fragment, {
                          children: [
                              (0, i.jsxs)("div", {
                                  className: I.xC,
                                  children: [
                                      (0, i.jsx)("div", {
                                          children: (0, i.jsx)("img", {
                                              src: j.A,
                                              alt: N.intl.string(N.t.mdXZh1),
                                              className: I.tl,
                                          }),
                                      }),
                                      (0, i.jsx)("div", {
                                          children: (0, i.jsxs)("div", {
                                              className: I.vJ,
                                              children: [
                                                  (0, i.jsx)(a.DZT, {
                                                      variant: "heading-xl/medium",
                                                      color: "text-strong",
                                                      children: N.intl.string(N.t.jzjJQg),
                                                  }),
                                                  (0, i.jsx)(a.EYj, {
                                                      variant: "text-md/normal",
                                                      color: "text-muted",
                                                      children: N.intl.string(N.t["5dOfxb"]),
                                                  }),
                                              ],
                                          }),
                                      }),
                                      (0, i.jsx)("div", {
                                          children: (0, i.jsx)("img", {
                                              src: y.A,
                                              alt: N.intl.string(N.t.mdXZh1),
                                              className: I.lh,
                                          }),
                                      }),
                                      (0, i.jsx)("div", {
                                          "data-button-hoisted-classname-wrapper": !0,
                                          className: I.VV,
                                          children: (0, i.jsx)(a.$nd, {
                                              variant: "primary",
                                              text: N.intl.string(N.t.Q26diF),
                                              onClick: () => void t(v.i.DISMISS),
                                          }),
                                      }),
                                  ],
                              }),
                              (0, i.jsx)(u.A, { className: I.yF }),
                          ],
                      });
            },
        },
        buildLayout: () => [S.u, E.X, C.D, b.h],
    }),
    R = (0, m.i4)(p.X.OVERLAY_SIDEBAR_ITEM, {
        useTitle: () => N.intl.string(N.t["9cb1Uz"]),
        icon: l.WindowTopOutlineIcon,
        usePredicate: T.b_,
        buildLayout: () => [O],
    });
