r.d(t, { W: () => h, v: () => x });
var s = r(477900);
r(582128);
var i = r(503698),
    l = r.n(i),
    n = r(575593),
    a = r(17928),
    c = r(834730),
    u = r(474012),
    d = r(607123),
    o = r(287809),
    m = r(137504);
function h(e) {
    let { title: t, body: r, image: i, badge: n, className: a, textGroupClassName: c } = e;
    return (0, s.jsxs)("div", {
        className: l()(m.kL, a),
        children: [
            null != i && (0, s.jsx)("div", { className: m.Sl, children: i }),
            (0, s.jsxs)("div", {
                className: m.Qs,
                children: [
                    null != n && (0, s.jsx)("div", { className: m.oL, children: n }),
                    (0, s.jsxs)("div", { className: l()(m.Z, c), children: [t, r] }),
                ],
            }),
        ],
    });
}
function x(e) {
    let { className: t, product: r, title: i, subtitle: x, badge: p } = e,
        f = (0, a.bG)([o.default], () => o.default.getCurrentUser()),
        g = (0, u.tP)(r);
    return null == g
        ? null
        : (0, s.jsx)(h, {
              className: t,
              image: (0, s.jsx)("div", {
                  className: m.yn,
                  children: (0, s.jsx)("div", {
                      className: l()(m.ML, {
                          [m.M]: r?.type === n.R.AVATAR_DECORATION,
                          [m.Hm]: r?.type === n.R.PROFILE_EFFECT,
                          [m.hH]: r?.type === n.R.PROFILE_FRAME,
                          [m.qF]: r?.type === n.R.NAMEPLATE,
                          [m.l2]: r?.type === n.R.BUNDLE,
                      }),
                      children: (0, s.jsx)(d.pL, {
                          collectiblesItem: g,
                          user: f,
                          nameplatePreviewStyle: m.M4,
                          nameplatePreviewRescalerStyle: m.N1,
                      }),
                  }),
              }),
              badge: p,
              title: null != i && (0, s.jsx)(c.E, { variant: "text-md/medium", color: "text-default", children: i }),
              body: null != x && (0, s.jsx)(c.E, { variant: "text-sm/medium", color: "text-muted", children: x }),
          });
}
