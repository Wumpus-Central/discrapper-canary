t.d(n, { Z: () => f });
var i = t(54381);
t(473749);
var r = t(442837),
    l = t(481060),
    a = t(455395),
    s = t(750850),
    o = t(581052),
    d = t(875252),
    c = t(583332),
    u = t(594174);
function f(e) {
    let { channel: n } = e,
        t = (0, r.e7)([u.default], () => u.default.getCurrentUser()),
        f = (0, o.V)(n),
        h = (0, a.i)(n),
        g = (0, c.g)(n),
        j = (0, d.H)(n),
        p = (0, s.e)(n);
    return (null == t ? void 0 : t.isStaff()) !== !0
        ? null
        : (0, i.jsxs)(l.sNh, {
              id: "dev tools",
              label: "Dev Tools",
              children: [
                  (0, i.jsx)(l.kSQ, { children: f }),
                  (0, i.jsx)(l.kSQ, { children: j }),
                  (0, i.jsx)(l.kSQ, { children: g }),
                  (0, i.jsx)(l.kSQ, { children: h }),
                  (0, i.jsx)(l.kSQ, { children: p }),
              ],
          });
}
