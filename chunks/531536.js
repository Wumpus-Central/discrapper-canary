n.d(t, { W: () => h, v: () => m });
var l = n(477900);
n(582128);
var r = n(503698),
    i = n.n(r),
    s = n(575593),
    a = n(17928),
    u = n(834730),
    c = n(474012),
    o = n(607123),
    d = n(287809),
    f = n(137504);
function h(e) {
    let { title: t, body: n, image: r, badge: s, className: a, textGroupClassName: u } = e;
    return (0, l.jsxs)("div", {
        className: i()(f.kL, a),
        children: [
            null != r && (0, l.jsx)("div", { className: f.Sl, children: r }),
            (0, l.jsxs)("div", {
                className: f.Qs,
                children: [
                    null != s && (0, l.jsx)("div", { className: f.oL, children: s }),
                    (0, l.jsxs)("div", { className: i()(f.Z, u), children: [t, n] }),
                ],
            }),
        ],
    });
}
function m(e) {
    let { className: t, product: n, title: r, subtitle: m, badge: p } = e,
        C = (0, a.bG)([d.default], () => d.default.getCurrentUser()),
        E = (0, c.tP)(n);
    return null == E
        ? null
        : (0, l.jsx)(h, {
              className: t,
              image: (0, l.jsx)("div", {
                  className: f.yn,
                  children: (0, l.jsx)("div", {
                      className: i()(f.ML, {
                          [f.M]: n?.type === s.R.AVATAR_DECORATION,
                          [f.Hm]: n?.type === s.R.PROFILE_EFFECT,
                          [f.hH]: n?.type === s.R.PROFILE_FRAME,
                          [f.qF]: n?.type === s.R.NAMEPLATE,
                          [f.l2]: n?.type === s.R.BUNDLE,
                      }),
                      children: (0, l.jsx)(o.pL, {
                          collectiblesItem: E,
                          user: C,
                          nameplatePreviewStyle: f.M4,
                          nameplatePreviewRescalerStyle: f.N1,
                      }),
                  }),
              }),
              badge: p,
              title: null != r && (0, l.jsx)(u.E, { variant: "text-md/medium", color: "text-default", children: r }),
              body: null != m && (0, l.jsx)(u.E, { variant: "text-sm/medium", color: "text-muted", children: m }),
          });
}
