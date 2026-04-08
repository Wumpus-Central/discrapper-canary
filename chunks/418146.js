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
    g = n(933297),
    _ = n(532624),
    x = n(242286),
    A = n(256415),
    h = n(723702),
    p = n(780964),
    T = n(17460),
    f = n(202949),
    S = n(762678),
    b = n(900155),
    E = n(237887),
    C = n(444381),
    N = n(49999),
    v = n(985018),
    I = n(331290),
    j = n(130324),
    y = n(966040);
let O = (0, m.t_)(p.X.OVERLAY_PANEL, {
        initialize: function () {
            return (
                (0, f.Q)(),
                _.Ay.addChangeListener(f.Q),
                c.A.addChangeListener(f.Q),
                A.default.addChangeListener(f.Q),
                x.default.addChangeListener(f.Q),
                h.isPlatformEmbedded && (0, d.a2)(),
                () => {
                    _.Ay.removeChangeListener(f.Q),
                        c.A.removeChangeListener(f.Q),
                        A.default.removeChangeListener(f.Q),
                        x.default.removeChangeListener(f.Q),
                        h.isPlatformEmbedded && (0, d.e0)();
                }
            );
        },
        useTitle: () => v.intl.string(v.t["9cb1Uz"]),
        decoration: {
            type: g.t9.STRONGLY_DISCOURAGED_CUSTOM,
            component: function () {
                let [e, t] = (0, o.kn)([r.M.OVERLAY_OOP_SETTINGS_NUX], void 0, !0);
                return ((0, s.Ay)(() => () => {
                    t(N.i.AUTO_DISMISS);
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
                                              alt: v.intl.string(v.t.mdXZh1),
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
                                                      children: v.intl.string(v.t.jzjJQg),
                                                  }),
                                                  (0, i.jsx)(a.EYj, {
                                                      variant: "text-md/normal",
                                                      color: "text-muted",
                                                      children: v.intl.string(v.t["5dOfxb"]),
                                                  }),
                                              ],
                                          }),
                                      }),
                                      (0, i.jsx)("div", {
                                          children: (0, i.jsx)("img", {
                                              src: y.A,
                                              alt: v.intl.string(v.t.mdXZh1),
                                              className: I.lh,
                                          }),
                                      }),
                                      (0, i.jsx)("div", {
                                          "data-button-hoisted-classname-wrapper": !0,
                                          className: I.VV,
                                          children: (0, i.jsx)(a.$nd, {
                                              variant: "primary",
                                              text: v.intl.string(v.t.Q26diF),
                                              onClick: () => void t(N.i.DISMISS),
                                          }),
                                      }),
                                  ],
                              }),
                              (0, i.jsx)(u.A, { className: I.yF }),
                          ],
                      });
            },
        },
        buildLayout: () => [S.u, b.X, C.D, E.h],
    }),
    R = (0, m.i4)(p.X.OVERLAY_SIDEBAR_ITEM, {
        useTitle: () => v.intl.string(v.t["9cb1Uz"]),
        icon: l.WindowTopOutlineIcon,
        usePredicate: T.b_,
        buildLayout: () => [O],
    });
