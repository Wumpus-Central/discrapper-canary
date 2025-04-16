n.d(t, { Z: () => f });
var i = n(200651);
n(192379);
var r = n(442837),
    l = n(481060),
    s = n(455395),
    a = n(750850),
    d = n(581052),
    o = n(875252),
    u = n(583332),
    c = n(594174);
function f(e) {
    let { channel: t } = e,
        n = (0, r.e7)([c.default], () => c.default.getCurrentUser()),
        f = (0, d.V)(t),
        g = (0, s.i)(t),
        Z = (0, u.g)(t),
        N = (0, o.H)(t),
        h = (0, a.e)(t);
    return (null == n ? void 0 : n.isStaff()) !== !0
        ? null
        : (0, i.jsxs)(l.sNh, {
              id: 'dev tools',
              label: 'Dev Tools',
              children: [(0, i.jsx)(l.kSQ, { children: f }), (0, i.jsx)(l.kSQ, { children: N }), (0, i.jsx)(l.kSQ, { children: Z }), (0, i.jsx)(l.kSQ, { children: g }), (0, i.jsx)(l.kSQ, { children: h })]
          });
}
