n.d(t, { A: () => x }), n(896048);
var r = n(627968),
    i = n(64700),
    s = n(481613),
    l = n.n(s),
    a = n(311907),
    o = n(397927),
    c = n(830215),
    u = n(964486),
    d = n(396681),
    h = n(854378),
    f = n(976860),
    p = n(210714),
    g = n(652215),
    m = n(985018),
    A = n(473169);
function x(e) {
    let { location: t, transitionTo: s = f.pX } = e,
        [a, x] = i.useState("submitting");
    function _() {
        return "Android" === l().os.family || "iOS" === l().os.family
            ? null
            : (0, r.jsx)(o.Button, {
                  text: m.intl.string(m.t.dKhVQN),
                  fullWidth: !0,
                  onClick: () => s(g.BVt.LOGIN, { source: "authorizeIPAdress" }),
              });
    }
    return ((0, u.Ay)(() => {
        (0, p.d)("authorize_ip");
        let e = (0, d.A)(t);
        null == e
            ? x("failed")
            : (async () => {
                  try {
                      await c.A.authorizeIPAddress(e), x("succeeded");
                  } catch (e) {
                      x("failed");
                  }
              })();
    }),
    "failed" === a)
        ? (0, r.jsxs)(h.Ay, {
              children: [
                  (0, r.jsx)("img", {
                      alt: "",
                      src: n(792009),
                      className: A.SX,
                  }),
                  (0, r.jsx)(h.hE, {
                      className: A.QB,
                      children: m.intl.string(m.t["f/54az"]),
                  }),
                  (0, r.jsx)(h.tK, {
                      className: A.C2,
                      children: m.intl.string(m.t.i3ehMr),
                  }),
                  _(),
              ],
          })
        : "succeeded" === a
          ? (0, r.jsxs)(h.Ay, {
                children: [
                    (0, r.jsx)("img", {
                        alt: "",
                        src: n(841406),
                        className: A.SX,
                    }),
                    (0, r.jsx)(h.hE, {
                        className: A.QB,
                        children: m.intl.string(m.t.iG0SlK),
                    }),
                    (0, r.jsx)(h.tK, {
                        className: A.C2,
                        children: m.intl.string(m.t["Elv+qt"]),
                    }),
                    _(),
                ],
            })
          : (0, r.jsxs)(h.Ay, {
                children: [(0, r.jsx)(h.CK, {}), (0, r.jsx)(h.hE, { children: m.intl.string(m.t["9exy+V"]) })],
            });
}
a.Ay.initialize();
