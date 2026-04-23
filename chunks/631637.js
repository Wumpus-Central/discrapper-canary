n.d(t, { A: () => A });
var r = n(627968);
n(64700);
var i = n(311907),
    l = n(477782),
    a = n(717187),
    d = n(884569),
    s = n(846577),
    u = n(695192),
    o = n(87746),
    c = n(287809);
function A(e) {
    let { channel: t } = e,
        n = (0, i.bG)([c.default], () => c.default.getCurrentUser()),
        A = (0, s.P)(t),
        g = (0, a.y)(t),
        f = (0, o.Q)(t),
        h = (0, u.m)(t),
        E = (0, d.B)(t);
    return n?.isStaff() !== !0
        ? null
        : (0, r.jsxs)(l.Dr, {
              id: "dev tools",
              label: "Dev Tools",
              children: [
                  (0, r.jsx)(l.rX, { children: A }),
                  (0, r.jsx)(l.rX, { children: h }),
                  (0, r.jsx)(l.rX, { children: f }),
                  (0, r.jsx)(l.rX, { children: g }),
                  (0, r.jsx)(l.rX, { children: E }),
              ],
          });
}
