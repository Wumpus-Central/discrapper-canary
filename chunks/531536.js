var l = n(477900);
n(582128);
var r = n(503698),
    i = n.n(r),
    a = n(575593),
    s = n(855986),
    u = n(834730),
    c = n(474012),
    o = n(607123),
    d = n(287809),
    h = n(137504);
function f(e) {
    let { title: t, body: n, image: r, badge: a, className: s, textGroupClassName: u } = e;
    return (0, l.jsxs)("div", {
        className: i()(h.kL, s),
        children: [
            null != r && (0, l.jsx)("div", { className: h.Sl, children: r }),
            (0, l.jsxs)("div", {
                className: h.Qs,
                children: [
                    null != a && (0, l.jsx)("div", { className: h.oL, children: a }),
                    (0, l.jsxs)("div", { className: i()(h.Z, u), children: [t, n] }),
                ],
            }),
        ],
    });
}
n.d(
    t,
    {},
    {
        W: f,
        v: function (e) {
            let { className: t, product: n, title: r, subtitle: p, badge: m } = e,
                C = (0, s.bG)([d.default], () => d.default.getCurrentUser()),
                y = (0, c.tP)(n);
            return null == y
                ? null
                : (0, l.jsx)(f, {
                      className: t,
                      image: (0, l.jsx)("div", {
                          className: h.yn,
                          children: (0, l.jsx)("div", {
                              className: i()(h.ML, {
                                  [h.M]: n?.type === a.R.AVATAR_DECORATION,
                                  [h.Hm]: n?.type === a.R.PROFILE_EFFECT,
                                  [h.hH]: n?.type === a.R.PROFILE_FRAME,
                                  [h.qF]: n?.type === a.R.NAMEPLATE,
                                  [h.l2]: n?.type === a.R.BUNDLE,
                              }),
                              children: (0, l.jsx)(o.pL, {
                                  collectiblesItem: y,
                                  user: C,
                                  nameplatePreviewStyle: h.M4,
                                  nameplatePreviewRescalerStyle: h.N1,
                              }),
                          }),
                      }),
                      badge: m,
                      title:
                          null != r &&
                          (0, l.jsx)(u.E, { variant: "body-md/medium", color: "text-default", children: r }),
                      body:
                          null != p && (0, l.jsx)(u.E, { variant: "body-sm/medium", color: "text-muted", children: p }),
                  });
        },
    },
);
