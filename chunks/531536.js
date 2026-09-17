r.d(t, { W: () => x, v: () => p });
var i = r(477900);
r(582128);
var n = r(503698),
    l = r.n(n),
    s = r(575593),
    a = r(17928),
    o = r(834730),
    d = r(474012),
    c = r(607123),
    u = r(287809),
    m = r(137504);
function x(e) {
    let { title: t, body: r, image: n, badge: s, className: a } = e;
    return (0, i.jsxs)("div", {
        className: l()(m.kL, a),
        children: [
            null != n && (0, i.jsx)("div", { className: m.Sl, children: n }),
            (0, i.jsxs)("div", {
                className: m.Qs,
                children: [null != s && (0, i.jsx)("div", { className: m.oL, children: s }), t, r],
            }),
        ],
    });
}
function p(e) {
    let { className: t, product: r, title: n, subtitle: p, badge: h } = e,
        f = (0, a.bG)([u.default], () => u.default.getCurrentUser()),
        g = (0, d.tP)(r);
    return null == g
        ? null
        : (0, i.jsx)(x, {
              className: t,
              image: (0, i.jsx)("div", {
                  className: m.yn,
                  children: (0, i.jsx)("div", {
                      className: l()(m.ML, {
                          [m.M]: r?.type === s.R.AVATAR_DECORATION,
                          [m.Hm]: r?.type === s.R.PROFILE_EFFECT,
                          [m.hH]: r?.type === s.R.PROFILE_FRAME,
                          [m.qF]: r?.type === s.R.NAMEPLATE,
                          [m.l2]: r?.type === s.R.BUNDLE,
                      }),
                      children: (0, i.jsx)(c.pL, {
                          collectiblesItem: g,
                          user: f,
                          nameplatePreviewStyle: m.M4,
                          nameplatePreviewRescalerStyle: m.N1,
                      }),
                  }),
              }),
              badge: h,
              title: null != n && (0, i.jsx)(o.E, { variant: "text-md/medium", color: "text-default", children: n }),
              body: null != p && (0, i.jsx)(o.E, { variant: "text-sm/medium", color: "text-muted", children: p }),
          });
}
