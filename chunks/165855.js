t.d(e, { Z: () => f });
var i = t(200651);
t(192379);
var l = t(442837),
    r = t(481060),
    d = t(455395),
    s = t(750850),
    a = t(581052),
    u = t(875252),
    o = t(583332),
    c = t(594174);
function f(n) {
    let { channel: e } = n,
        t = (0, l.e7)([c.default], () => c.default.getCurrentUser()),
        f = (0, a.V)(e),
        h = (0, d.i)(e),
        g = (0, o.g)(e),
        Z = (0, u.H)(e),
        N = (0, s.e)(e);
    return (null == t ? void 0 : t.isStaff()) !== !0
        ? null
        : (0, i.jsxs)(r.sNh, {
              id: 'dev tools',
              label: 'Dev Tools',
              children: [(0, i.jsx)(r.kSQ, { children: f }), (0, i.jsx)(r.kSQ, { children: Z }), (0, i.jsx)(r.kSQ, { children: g }), (0, i.jsx)(r.kSQ, { children: h }), (0, i.jsx)(r.kSQ, { children: N })]
          });
}
