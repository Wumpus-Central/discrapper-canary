s.d(t, { W: () => h, v: () => f });
var l = s(477900);
s(582128);
var a = s(503698),
    n = s.n(a),
    r = s(575593),
    i = s(17928),
    u = s(834730),
    d = s(474012),
    c = s(607123),
    o = s(287809),
    g = s(137504);
function h(e) {
    let { title: t, body: s, image: a, badge: r, className: i, textGroupClassName: u } = e;
    return (0, l.jsxs)("div", {
        className: n()(g.kL, i),
        children: [
            null != a && (0, l.jsx)("div", { className: g.Sl, children: a }),
            (0, l.jsxs)("div", {
                className: g.Qs,
                children: [
                    null != r && (0, l.jsx)("div", { className: g.oL, children: r }),
                    (0, l.jsxs)("div", { className: n()(g.Z, u), children: [t, s] }),
                ],
            }),
        ],
    });
}
function f(e) {
    let { className: t, product: s, title: a, subtitle: f, badge: m } = e,
        E = (0, i.bG)([o.default], () => o.default.getCurrentUser()),
        S = (0, d.tP)(s);
    return null == S
        ? null
        : (0, l.jsx)(h, {
              className: t,
              image: (0, l.jsx)("div", {
                  className: g.yn,
                  children: (0, l.jsx)("div", {
                      className: n()(g.ML, {
                          [g.M]: s?.type === r.R.AVATAR_DECORATION,
                          [g.Hm]: s?.type === r.R.PROFILE_EFFECT,
                          [g.hH]: s?.type === r.R.PROFILE_FRAME,
                          [g.qF]: s?.type === r.R.NAMEPLATE,
                          [g.l2]: s?.type === r.R.BUNDLE,
                      }),
                      children: (0, l.jsx)(c.pL, {
                          collectiblesItem: S,
                          user: E,
                          nameplatePreviewStyle: g.M4,
                          nameplatePreviewRescalerStyle: g.N1,
                      }),
                  }),
              }),
              badge: m,
              title: null != a && (0, l.jsx)(u.E, { variant: "text-md/medium", color: "text-default", children: a }),
              body: null != f && (0, l.jsx)(u.E, { variant: "text-sm/medium", color: "text-muted", children: f }),
          });
}
