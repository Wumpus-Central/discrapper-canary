n.d(t, {
    A: () => A,
});
var r = n(627968);
n(64700);
var i = n(311907),
    l = n(397927),
    a = n(717187),
    o = n(884569),
    s = n(846577),
    d = n(695192),
    c = n(87746),
    u = n(287809);

function A(e) {
    let { channel: t } = e,
        n = (0, i.bG)([u.default], () => u.default.getCurrentUser()),
        A = (0, s.P)(t),
        f = (0, a.y)(t),
        b = (0, c.Q)(t),
        g = (0, d.m)(t),
        p = (0, o.B)(t);
    return (null == n ? void 0 : n.isStaff()) !== !0
        ? null
        : (0, r.jsxs)(l.Drp, {
              id: "dev tools",
              label: "Dev Tools",
              children: [
                  (0, r.jsx)(l.rXV, {
                      children: A,
                  }),
                  (0, r.jsx)(l.rXV, {
                      children: g,
                  }),
                  (0, r.jsx)(l.rXV, {
                      children: b,
                  }),
                  (0, r.jsx)(l.rXV, {
                      children: f,
                  }),
                  (0, r.jsx)(l.rXV, {
                      children: p,
                  }),
              ],
          });
}
