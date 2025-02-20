n.d(t, { Z: () => f });
var r = n(200651);
n(192379);
var i = n(442837),
    l = n(481060),
    a = n(455395),
    o = n(750850),
    s = n(581052),
    c = n(875252),
    u = n(583332),
    d = n(594174);
function f(e) {
    let { channel: t } = e,
        n = (0, i.e7)([d.default], () => d.default.getCurrentUser()),
        f = (0, s.V)(t),
        h = (0, a.i)(t),
        g = (0, u.g)(t),
        O = (0, c.H)(t),
        j = (0, o.e)(t);
    return (null == n ? void 0 : n.isStaff()) !== !0
        ? null
        : (0, r.jsxs)(l.sNh, {
              id: 'dev tools',
              label: 'Dev Tools',
              children: [(0, r.jsx)(l.kSQ, { children: f }), (0, r.jsx)(l.kSQ, { children: O }), (0, r.jsx)(l.kSQ, { children: g }), (0, r.jsx)(l.kSQ, { children: h }), (0, r.jsx)(l.kSQ, { children: j })]
          });
}
