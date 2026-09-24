r.d(t, { W: () => h, v: () => f });
var i = r(477900);
r(582128);
var n = r(503698),
    s = r.n(n),
    l = r(575593),
    a = r(17928),
    u = r(834730),
    o = r(474012),
    c = r(607123),
    d = r(287809),
    m = r(137504);
function h(e) {
    let { title: t, body: r, image: n, badge: l, className: a } = e;
    return (0, i.jsxs)("div", {
        className: s()(m.kL, a),
        children: [
            null != n && (0, i.jsx)("div", { className: m.Sl, children: n }),
            (0, i.jsxs)("div", {
                className: m.Qs,
                children: [null != l && (0, i.jsx)("div", { className: m.oL, children: l }), t, r],
            }),
        ],
    });
}
function f(e) {
    let { className: t, product: r, title: n, subtitle: f, badge: x } = e,
        p = (0, a.bG)([d.default], () => d.default.getCurrentUser()),
        g = (0, o.tP)(r);
    return null == g
        ? null
        : (0, i.jsx)(h, {
              className: t,
              image: (0, i.jsx)("div", {
                  className: m.yn,
                  children: (0, i.jsx)("div", {
                      className: s()(m.ML, {
                          [m.M]: r?.type === l.R.AVATAR_DECORATION,
                          [m.Hm]: r?.type === l.R.PROFILE_EFFECT,
                          [m.hH]: r?.type === l.R.PROFILE_FRAME,
                          [m.qF]: r?.type === l.R.NAMEPLATE,
                          [m.l2]: r?.type === l.R.BUNDLE,
                      }),
                      children: (0, i.jsx)(c.pL, {
                          collectiblesItem: g,
                          user: p,
                          nameplatePreviewStyle: m.M4,
                          nameplatePreviewRescalerStyle: m.N1,
                      }),
                  }),
              }),
              badge: x,
              title: null != n && (0, i.jsx)(u.E, { variant: "text-md/medium", color: "text-default", children: n }),
              body: null != f && (0, i.jsx)(u.E, { variant: "text-sm/medium", color: "text-muted", children: f }),
          });
}
