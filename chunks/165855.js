t.d(e, {
    Z: function () {
        return f;
    }
});
var i = t(200651);
t(192379);
var r = t(442837),
    l = t(481060),
    u = t(455395),
    a = t(750850),
    o = t(581052),
    d = t(875252),
    s = t(583332),
    c = t(594174);
function f(n) {
    let { channel: e } = n,
        t = (0, r.e7)([c.default], () => c.default.getCurrentUser()),
        f = (0, o.V)(e),
        I = (0, u.i)(e),
        x = (0, s.g)(e),
        M = (0, d.H)(e),
        _ = (0, a.e)(e);
    return (null == t ? void 0 : t.isStaff()) !== !0
        ? null
        : (0, i.jsxs)(l.MenuItem, {
              id: 'dev tools',
              label: 'Dev Tools',
              children: [(0, i.jsx)(l.MenuGroup, { children: f }), (0, i.jsx)(l.MenuGroup, { children: M }), (0, i.jsx)(l.MenuGroup, { children: x }), (0, i.jsx)(l.MenuGroup, { children: I }), (0, i.jsx)(l.MenuGroup, { children: _ })]
          });
}
