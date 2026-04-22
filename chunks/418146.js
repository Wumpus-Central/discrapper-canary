n.d(t, { u: () => V });
var i = n(627968),
    s = n(935399),
    l = n(625657),
    a = n(534514),
    r = n(834730),
    o = n(821609),
    d = n(683071),
    u = n(311907),
    c = n(554146),
    g = n(932001),
    m = n(843402),
    _ = n(589051),
    A = n(592598),
    h = n(46373),
    p = n(419954),
    x = n(933297),
    E = n(351906),
    T = n(532624),
    S = n(242286),
    f = n(256415),
    b = n(723702),
    C = n(780964),
    v = n(858897),
    N = n(17460),
    I = n(202949),
    y = n(762678),
    j = n(900155),
    O = n(237887),
    R = n(444381),
    L = n(49999),
    D = n(985018),
    P = n(192391),
    G = n(130324),
    M = n(966040);
function U() {
    let [e, t] = (0, g.kn)([c.M.OVERLAY_OOP_SETTINGS_NUX], void 0, !0);
    return ((0, s.Ay)(() => () => {
        t(L.i.AUTO_DISMISS);
    }),
    e !== c.M.OVERLAY_OOP_SETTINGS_NUX)
        ? null
        : (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsxs)("div", {
                      className: P.xC,
                      children: [
                          (0, i.jsx)("div", {
                              children: (0, i.jsx)("img", {
                                  src: G.A,
                                  alt: D.intl.string(D.t.mdXZh1),
                                  className: P.tl,
                              }),
                          }),
                          (0, i.jsx)("div", {
                              children: (0, i.jsxs)("div", {
                                  className: P.vJ,
                                  children: [
                                      (0, i.jsx)(a.D, {
                                          variant: "heading-xl/medium",
                                          color: "text-strong",
                                          children: D.intl.string(D.t.jzjJQg),
                                      }),
                                      (0, i.jsx)(r.E, {
                                          variant: "text-md/normal",
                                          color: "text-muted",
                                          children: D.intl.string(D.t["5dOfxb"]),
                                      }),
                                  ],
                              }),
                          }),
                          (0, i.jsx)("div", {
                              children: (0, i.jsx)("img", {
                                  src: M.A,
                                  alt: D.intl.string(D.t.mdXZh1),
                                  className: P.lh,
                              }),
                          }),
                          (0, i.jsx)("div", {
                              "data-button-hoisted-classname-wrapper": !0,
                              className: P.VV,
                              children: (0, i.jsx)(o.$, {
                                  variant: "primary",
                                  text: D.intl.string(D.t.Q26diF),
                                  onClick: () => void t(L.i.DISMISS),
                              }),
                          }),
                      ],
                  }),
                  (0, i.jsx)(h.A, { className: P.yF }),
              ],
          });
}
function k() {
    let e = (0, u.bG)([E.A], () => E.A.enabled),
        t = (0, _.Mn)("OverlayStreamerModeNotice");
    return e && t
        ? (0, i.jsxs)(i.Fragment, {
              children: [
                  (0, i.jsx)(d.w, {
                      type: "warning",
                      children: D.intl.format(D.t.fuEX5B, {
                          onClick: () => (0, v.openUserSettings)(C.X.STREAMER_MODE_CATEGORY),
                      }),
                  }),
                  (0, i.jsx)(h.A, { className: P.yF }),
              ],
          })
        : null;
}
let w = (0, p.t_)(C.X.OVERLAY_PANEL, {
        initialize: function () {
            return (
                (0, I.Q)(),
                T.Ay.addChangeListener(I.Q),
                A.A.addChangeListener(I.Q),
                f.default.addChangeListener(I.Q),
                S.default.addChangeListener(I.Q),
                b.isPlatformEmbedded && (0, m.a2)(),
                () => {
                    T.Ay.removeChangeListener(I.Q),
                        A.A.removeChangeListener(I.Q),
                        f.default.removeChangeListener(I.Q),
                        S.default.removeChangeListener(I.Q),
                        b.isPlatformEmbedded && (0, m.e0)();
                }
            );
        },
        useTitle: () => D.intl.string(D.t["9cb1Uz"]),
        decoration: {
            type: x.t9.STRONGLY_DISCOURAGED_CUSTOM,
            component: function () {
                return (0, i.jsxs)(i.Fragment, { children: [(0, i.jsx)(U, {}), (0, i.jsx)(k, {})] });
            },
        },
        buildLayout: () => [y.u, j.X, R.D, O.h],
    }),
    V = (0, p.i4)(C.X.OVERLAY_SIDEBAR_ITEM, {
        useTitle: () => D.intl.string(D.t["9cb1Uz"]),
        icon: l.l,
        usePredicate: N.b_,
        buildLayout: () => [w],
    });
