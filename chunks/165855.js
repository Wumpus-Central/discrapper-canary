e.d(t, { Z: () => f });
var i = e(255367);
e(73800);
var l = e(442837),
    r = e(481060),
    d = e(455395),
    s = e(750850),
    a = e(581052),
    u = e(875252),
    o = e(583332),
    c = e(594174);
function f(n) {
    let { channel: t } = n,
        e = (0, l.e7)([c.default], () => c.default.getCurrentUser()),
        f = (0, a.V)(t),
        h = (0, d.i)(t),
        g = (0, o.g)(t),
        Z = (0, u.H)(t),
        S = (0, s.e)(t);
    return (null == e ? void 0 : e.isStaff()) !== !0
        ? null
        : (0, i.jsxs)(r.sNh, {
              id: 'dev tools',
              label: 'Dev Tools',
              children: [(0, i.jsx)(r.kSQ, { children: f }), (0, i.jsx)(r.kSQ, { children: Z }), (0, i.jsx)(r.kSQ, { children: g }), (0, i.jsx)(r.kSQ, { children: h }), (0, i.jsx)(r.kSQ, { children: S })]
          });
}
