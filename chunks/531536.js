r.d(t, { W: () => x, v: () => p });
var n = r(477900);
r(582128);
var i = r(503698),
    l = r.n(i),
    a = r(575593),
    s = r(17928),
    o = r(834730),
    u = r(474012),
    c = r(607123),
    d = r(287809),
    m = r(137504);
function x(e) {
    let { title: t, body: r, image: i, badge: a, className: s } = e;
    return (0, n.jsxs)("div", {
        className: l()(m.kL, s),
        children: [
            null != i && (0, n.jsx)("div", { className: m.Sl, children: i }),
            (0, n.jsxs)("div", {
                className: m.Qs,
                children: [null != a && (0, n.jsx)("div", { className: m.oL, children: a }), t, r],
            }),
        ],
    });
}
function p(e) {
    let { className: t, product: r, title: i, subtitle: p, badge: h } = e,
        f = (0, s.bG)([d.default], () => d.default.getCurrentUser()),
        g = (0, u.tP)(r);
    return null == g
        ? null
        : (0, n.jsx)(x, {
              className: t,
              image: (0, n.jsx)("div", {
                  className: m.yn,
                  children: (0, n.jsx)("div", {
                      className: l()(m.ML, {
                          [m.M]: r?.type === a.R.AVATAR_DECORATION,
                          [m.Hm]: r?.type === a.R.PROFILE_EFFECT,
                          [m.hH]: r?.type === a.R.PROFILE_FRAME,
                          [m.qF]: r?.type === a.R.NAMEPLATE,
                          [m.l2]: r?.type === a.R.BUNDLE,
                      }),
                      children: (0, n.jsx)(c.pL, {
                          collectiblesItem: g,
                          user: f,
                          nameplatePreviewStyle: m.M4,
                          nameplatePreviewRescalerStyle: m.N1,
                      }),
                  }),
              }),
              badge: h,
              title: null != i && (0, n.jsx)(o.E, { variant: "text-md/medium", color: "text-default", children: i }),
              body: null != p && (0, n.jsx)(o.E, { variant: "text-sm/medium", color: "text-muted", children: p }),
          });
}
