e.d(n, { Z: () => f });
var i = e(255367);
e(73800);
var r = e(442837),
    l = e(481060),
    s = e(455395),
    a = e(750850),
    d = e(581052),
    u = e(875252),
    o = e(583332),
    c = e(594174);
function f(t) {
    let { channel: n } = t,
        e = (0, r.e7)([c.default], () => c.default.getCurrentUser()),
        f = (0, d.V)(n),
        g = (0, s.i)(n),
        h = (0, o.g)(n),
        j = (0, u.H)(n),
        p = (0, a.e)(n);
    return (null == e ? void 0 : e.isStaff()) !== !0
        ? null
        : (0, i.jsxs)(l.sNh, {
              id: "dev tools",
              label: "Dev Tools",
              children: [
                  (0, i.jsx)(l.kSQ, { children: f }),
                  (0, i.jsx)(l.kSQ, { children: j }),
                  (0, i.jsx)(l.kSQ, { children: h }),
                  (0, i.jsx)(l.kSQ, { children: g }),
                  (0, i.jsx)(l.kSQ, { children: p }),
              ],
          });
}
