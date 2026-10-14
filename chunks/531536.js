s.d(t, { W: () => f, v: () => h });
var l = s(477900);
s(582128);
var i = s(503698),
    a = s.n(i),
    r = s(575593),
    n = s(17928),
    u = s(834730),
    c = s(474012),
    d = s(607123),
    o = s(287809),
    g = s(137504);
function f(e) {
    let { title: t, body: s, image: i, badge: r, className: n, textGroupClassName: u } = e;
    return (0, l.jsxs)("div", {
        className: a()(g.kL, n),
        children: [
            null != i && (0, l.jsx)("div", { className: g.Sl, children: i }),
            (0, l.jsxs)("div", {
                className: g.Qs,
                children: [
                    null != r && (0, l.jsx)("div", { className: g.oL, children: r }),
                    (0, l.jsxs)("div", { className: a()(g.Z, u), children: [t, s] }),
                ],
            }),
        ],
    });
}
function h(e) {
    let { className: t, product: s, title: i, subtitle: h, badge: m } = e,
        E = (0, n.bG)([o.default], () => o.default.getCurrentUser()),
        S = (0, c.tP)(s);
    return null == S
        ? null
        : (0, l.jsx)(f, {
              className: t,
              image: (0, l.jsx)("div", {
                  className: g.yn,
                  children: (0, l.jsx)("div", {
                      className: a()(g.ML, {
                          [g.M]: s?.type === r.R.AVATAR_DECORATION,
                          [g.Hm]: s?.type === r.R.PROFILE_EFFECT,
                          [g.hH]: s?.type === r.R.PROFILE_FRAME,
                          [g.qF]: s?.type === r.R.NAMEPLATE,
                          [g.l2]: s?.type === r.R.BUNDLE,
                      }),
                      children: (0, l.jsx)(d.pL, {
                          collectiblesItem: S,
                          user: E,
                          nameplatePreviewStyle: g.M4,
                          nameplatePreviewRescalerStyle: g.N1,
                      }),
                  }),
              }),
              badge: m,
              title: null != i && (0, l.jsx)(u.E, { variant: "text-md/medium", color: "text-default", children: i }),
              body: null != h && (0, l.jsx)(u.E, { variant: "text-sm/medium", color: "text-muted", children: h }),
          });
}
