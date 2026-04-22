"use strict";
n.d(t, { A: () => f });
var i = n(627968),
    s = n(64700),
    r = n(481613),
    l = n.n(r),
    a = n(311907),
    o = n(821609),
    c = n(830215),
    d = n(964486),
    u = n(396681),
    _ = n(854378),
    h = n(976860),
    m = n(210714),
    p = n(652215),
    g = n(985018),
    A = n(818050);
function f(e) {
    let { location: t, transitionTo: r = h.pX } = e,
        [a, f] = s.useState("submitting");
    function x() {
        return "Android" === l().os.family || "iOS" === l().os.family
            ? null
            : (0, i.jsx)(o.$, {
                  text: g.intl.string(g.t.dKhVQN),
                  fullWidth: !0,
                  onClick: () => r(p.BVt.LOGIN, { source: "authorizeIPAdress" }),
              });
    }
    return ((0, d.Ay)(() => {
        (0, m.d)("authorize_ip");
        let e = (0, u.A)(t);
        null == e
            ? f("failed")
            : (async () => {
                  try {
                      await c.A.authorizeIPAddress(e), f("succeeded");
                  } catch (e) {
                      f("failed");
                  }
              })();
    }),
    "failed" === a)
        ? (0, i.jsxs)(_.Ay, {
              children: [
                  (0, i.jsx)("img", { alt: "", src: n(792009), className: A.SX }),
                  (0, i.jsx)(_.hE, { className: A.QB, children: g.intl.string(g.t["f/54az"]) }),
                  (0, i.jsx)(_.tK, { className: A.C2, children: g.intl.string(g.t.i3ehMr) }),
                  x(),
              ],
          })
        : "succeeded" === a
          ? (0, i.jsxs)(_.Ay, {
                children: [
                    (0, i.jsx)("img", { alt: "", src: n(841406), className: A.SX }),
                    (0, i.jsx)(_.hE, { className: A.QB, children: g.intl.string(g.t.iG0SlK) }),
                    (0, i.jsx)(_.tK, { className: A.C2, children: g.intl.string(g.t["Elv+qt"]) }),
                    x(),
                ],
            })
          : (0, i.jsxs)(_.Ay, {
                children: [(0, i.jsx)(_.CK, {}), (0, i.jsx)(_.hE, { children: g.intl.string(g.t["9exy+V"]) })],
            });
}
a.Ay.initialize();
