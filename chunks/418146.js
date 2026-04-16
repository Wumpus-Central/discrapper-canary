n.d(t, { u: () => k });
var i = n(627968),
    s = n(935399),
    l = n(934551),
    r = n(158954),
    a = n(311907),
    o = n(554146),
    d = n(932001),
    c = n(843402),
    u = n(589051),
    m = n(592598),
    g = n(46373),
    _ = n(419954),
    x = n(933297),
    h = n(351906),
    A = n(532624),
    p = n(242286),
    T = n(256415),
    f = n(723702),
    S = n(780964),
    E = n(358776),
    b = n(858897),
    C = n(17460),
    v = n(202949),
    N = n(762678),
    I = n(900155),
    j = n(237887),
    y = n(444381),
    O = n(49999),
    R = n(985018),
    L = n(192391),
    P = n(130324),
    D = n(966040);
function G() {
    let [e, t] = (0, d.kn)([o.M.OVERLAY_OOP_SETTINGS_NUX], void 0, !0);
    return ((0, s.Ay)(() => () => {
        t(O.i.AUTO_DISMISS);
    }),
    e !== o.M.OVERLAY_OOP_SETTINGS_NUX)
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsxs)("div", {
                      className: L.xC,
                      children: [
                          (0, i.jsx)("div", {
                              children: (0, i.jsx)("img", {
                                  src: P.A,
                                  alt: R.intl.string(R.t.mdXZh1),
                                  className: L.tl,
                              }),
                          }),
                          (0, i.jsx)("div", {
                              children: (0, i.jsxs)("div", {
                                  className: L.vJ,
                                  children: [
                                      (0, i.jsx)(r.DZT, {
                                          variant: "heading-xl/medium",
                                          color: "text-strong",
                                          children: R.intl.string(R.t.jzjJQg),
                                      }),
                                      (0, i.jsx)(r.EYj, {
                                          variant: "text-md/normal",
                                          color: "text-muted",
                                          children: R.intl.string(R.t["5dOfxb"]),
                                      }),
                                  ],
                              }),
                          }),
                          (0, i.jsx)("div", {
                              children: (0, i.jsx)("img", {
                                  src: D.A,
                                  alt: R.intl.string(R.t.mdXZh1),
                                  className: L.lh,
                              }),
                          }),
                          (0, i.jsx)("div", {
                              "data-button-hoisted-classname-wrapper": !0,
                              className: L.VV,
                              children: (0, i.jsx)(r.$nd, {
                                  variant: "primary",
                                  text: R.intl.string(R.t.Q26diF),
                                  onClick: () => void t(O.i.DISMISS),
                              }),
                          }),
                      ],
                  }),
                  (0, i.jsx)(g.A, { className: L.yF }),
              ],
          });
}
function M() {
    let e = (0, a.bG)([h.A], () => h.A.enabled),
        t = (0, u.Mn)("OverlayStreamerModeNotice");
    return e && t
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(r.wx6, {
                      type: "warning",
                      children: R.intl.format(R.t.fuEX5B, {
                          onClick: () => {
                              let e = (0, E.Ci)("OverlayStreamerModeNotice_handleClick");
                              (0, b.openUserSettings)(e ? S.X.STREAMER_MODE_CATEGORY : S.X.STREAMER_MODE_PANEL);
                          },
                      }),
                  }),
                  (0, i.jsx)(g.A, { className: L.yF }),
              ],
          })
        : null;
}
let U = (0, _.t_)(S.X.OVERLAY_PANEL, {
        initialize: function () {
            return (
                (0, v.Q)(),
                A.Ay.addChangeListener(v.Q),
                m.A.addChangeListener(v.Q),
                T.default.addChangeListener(v.Q),
                p.default.addChangeListener(v.Q),
                f.isPlatformEmbedded && (0, c.a2)(),
                () => {
                    A.Ay.removeChangeListener(v.Q),
                        m.A.removeChangeListener(v.Q),
                        T.default.removeChangeListener(v.Q),
                        p.default.removeChangeListener(v.Q),
                        f.isPlatformEmbedded && (0, c.e0)();
                }
            );
        },
        useTitle: () => R.intl.string(R.t["9cb1Uz"]),
        decoration: {
            type: x.t9.STRONGLY_DISCOURAGED_CUSTOM,
            component: function () {
                return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(G, {}), (0, i.jsx)(M, {})] });
            },
        },
        buildLayout: () => [N.u, I.X, y.D, j.h],
    }),
    k = (0, _.i4)(S.X.OVERLAY_SIDEBAR_ITEM, {
        useTitle: () => R.intl.string(R.t["9cb1Uz"]),
        icon: l.WindowTopOutlineIcon,
        usePredicate: C.b_,
        buildLayout: () => [U],
    });
