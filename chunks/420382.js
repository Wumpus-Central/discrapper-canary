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
    g = n(652215),
    p = n(985018),
    A = n(818050);
function f(e) {
    let { location: t, transitionTo: r = h.pX } = e,
        [a, f] = s.useState("submitting");
    function E() {
        return "Android" === l().os.family || "iOS" === l().os.family
            ? null
            : (0, i.jsx)(o.$, {
                  text: p.intl.string(p.t.dKhVQN),
                  fullWidth: !0,
                  onClick: () => r(g.BVt.LOGIN, { source: "authorizeIPAdress" }),
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
                  (0, i.jsx)(_.hE, { className: A.QB, children: p.intl.string(p.t["f/54az"]) }),
                  (0, i.jsx)(_.tK, { className: A.C2, children: p.intl.string(p.t.i3ehMr) }),
                  E(),
              ],
          })
        : "succeeded" === a
          ? (0, i.jsxs)(_.Ay, {
                children: [
                    (0, i.jsx)("img", { alt: "", src: n(841406), className: A.SX }),
                    (0, i.jsx)(_.hE, { className: A.QB, children: p.intl.string(p.t.iG0SlK) }),
                    (0, i.jsx)(_.tK, { className: A.C2, children: p.intl.string(p.t["Elv+qt"]) }),
                    E(),
                ],
            })
          : (0, i.jsxs)(_.Ay, {
                children: [(0, i.jsx)(_.CK, {}), (0, i.jsx)(_.hE, { children: p.intl.string(p.t["9exy+V"]) })],
            });
}
a.Ay.initialize();
