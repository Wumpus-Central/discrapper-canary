e.d(t, { Z: () => h });
var i = e(200651);
e(192379);
var l = e(442837),
    r = e(481060),
    a = e(455395),
    s = e(750850),
    d = e(581052),
    u = e(875252),
    o = e(583332),
    c = e(594174);
function h(n) {
    let { channel: t } = n,
        e = (0, l.e7)([c.default], () => c.default.getCurrentUser()),
        h = (0, d.V)(t),
        f = (0, a.i)(t),
        x = (0, o.g)(t),
        _ = (0, u.H)(t),
        g = (0, s.e)(t);
    return (null == e ? void 0 : e.isStaff()) !== !0
        ? null
        : (0, i.jsxs)(r.sNh, {
              id: 'dev tools',
              label: 'Dev Tools',
              children: [(0, i.jsx)(r.kSQ, { children: h }), (0, i.jsx)(r.kSQ, { children: _ }), (0, i.jsx)(r.kSQ, { children: x }), (0, i.jsx)(r.kSQ, { children: f }), (0, i.jsx)(r.kSQ, { children: g })]
          });
}
