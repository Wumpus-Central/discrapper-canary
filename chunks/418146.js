n.d(t, { u: () => U });
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
    E = n(858897),
    b = n(17460),
    C = n(202949),
    v = n(762678),
    N = n(900155),
    I = n(237887),
    j = n(444381),
    y = n(49999),
    O = n(985018),
    R = n(192391),
    L = n(130324),
    P = n(966040);
function D() {
    let [e, t] = (0, d.kn)([o.M.OVERLAY_OOP_SETTINGS_NUX], void 0, !0);
    return ((0, s.Ay)(() => () => {
        t(y.i.AUTO_DISMISS);
    }),
    e !== o.M.OVERLAY_OOP_SETTINGS_NUX)
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsxs)("div", {
                      className: R.xC,
                      children: [
                          (0, i.jsx)("div", {
                              children: (0, i.jsx)("img", {
                                  src: L.A,
                                  alt: O.intl.string(O.t.mdXZh1),
                                  className: R.tl,
                              }),
                          }),
                          (0, i.jsx)("div", {
                              children: (0, i.jsxs)("div", {
                                  className: R.vJ,
                                  children: [
                                      (0, i.jsx)(r.DZT, {
                                          variant: "heading-xl/medium",
                                          color: "text-strong",
                                          children: O.intl.string(O.t.jzjJQg),
                                      }),
                                      (0, i.jsx)(r.EYj, {
                                          variant: "text-md/normal",
                                          color: "text-muted",
                                          children: O.intl.string(O.t["5dOfxb"]),
                                      }),
                                  ],
                              }),
                          }),
                          (0, i.jsx)("div", {
                              children: (0, i.jsx)("img", {
                                  src: P.A,
                                  alt: O.intl.string(O.t.mdXZh1),
                                  className: R.lh,
                              }),
                          }),
                          (0, i.jsx)("div", {
                              "data-button-hoisted-classname-wrapper": !0,
                              className: R.VV,
                              children: (0, i.jsx)(r.$nd, {
                                  variant: "primary",
                                  text: O.intl.string(O.t.Q26diF),
                                  onClick: () => void t(y.i.DISMISS),
                              }),
                          }),
                      ],
                  }),
                  (0, i.jsx)(g.A, { className: R.yF }),
              ],
          });
}
function G() {
    let e = (0, a.bG)([h.A], () => h.A.enabled),
        t = (0, u.Mn)("OverlayStreamerModeNotice");
    return e && t
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(r.wx6, {
                      type: "warning",
                      children: O.intl.format(O.t.fuEX5B, {
                          onClick: () => (0, E.openUserSettings)(S.X.STREAMER_MODE_CATEGORY),
                      }),
                  }),
                  (0, i.jsx)(g.A, { className: R.yF }),
              ],
          })
        : null;
}
let M = (0, _.t_)(S.X.OVERLAY_PANEL, {
        initialize: function () {
            return (
                (0, C.Q)(),
                A.Ay.addChangeListener(C.Q),
                m.A.addChangeListener(C.Q),
                T.default.addChangeListener(C.Q),
                p.default.addChangeListener(C.Q),
                f.isPlatformEmbedded && (0, c.a2)(),
                () => {
                    A.Ay.removeChangeListener(C.Q),
                        m.A.removeChangeListener(C.Q),
                        T.default.removeChangeListener(C.Q),
                        p.default.removeChangeListener(C.Q),
                        f.isPlatformEmbedded && (0, c.e0)();
                }
            );
        },
        useTitle: () => O.intl.string(O.t["9cb1Uz"]),
        decoration: {
            type: x.t9.STRONGLY_DISCOURAGED_CUSTOM,
            component: function () {
                return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(D, {}), (0, i.jsx)(G, {})] });
            },
        },
        buildLayout: () => [v.u, N.X, j.D, I.h],
    }),
    U = (0, _.i4)(S.X.OVERLAY_SIDEBAR_ITEM, {
        useTitle: () => O.intl.string(O.t["9cb1Uz"]),
        icon: l.WindowTopOutlineIcon,
        usePredicate: b.b_,
        buildLayout: () => [M],
    });
