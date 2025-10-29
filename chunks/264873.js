n.d(t, { Z: () => x }), n(388685);
var r = n(951288),
    i = n(647438),
    s = n(525654),
    l = n.n(s),
    a = n(442837),
    o = n(481060),
    c = n(893776),
    u = n(493773),
    d = n(129293),
    h = n(388905),
    g = n(703656),
    p = n(108427),
    m = n(981631),
    f = n(388032),
    _ = n(197571);
function x(e) {
    let { location: t, transitionTo: s = g.uL } = e,
        [a, x] = i.useState("submitting");
    function E() {
        return "Android" === l().os.family || "iOS" === l().os.family
            ? null
            : (0, r.jsx)(o.Button, {
                  text: f.intl.string(f.t.dKhVQN),
                  fullWidth: !0,
                  onClick: () => s(m.Z5c.LOGIN, { source: "authorizeIPAdress" }),
              });
    }
    return ((0, u.ZP)(() => {
        (0, p.e)("authorize_ip");
        let e = (0, d.Z)(t);
        if (null == e) return void x("failed");
        (async () => {
            try {
                await c.Z.authorizeIPAddress(e), x("succeeded");
            } catch (e) {
                x("failed");
            }
        })();
    }),
    "failed" === a)
        ? (0, r.jsxs)(h.ZP, {
              children: [
                  (0, r.jsx)("img", {
                      alt: "",
                      src: n(262467),
                      className: _.marginBottom20,
                  }),
                  (0, r.jsx)(h.Dx, {
                      className: _.marginBottom8,
                      children: f.intl.string(f.t["f/54az"]),
                  }),
                  (0, r.jsx)(h.DK, {
                      className: _.marginBottom40,
                      children: f.intl.string(f.t.i3ehMr),
                  }),
                  E(),
              ],
          })
        : "succeeded" === a
          ? (0, r.jsxs)(h.ZP, {
                children: [
                    (0, r.jsx)("img", {
                        alt: "",
                        src: n(640356),
                        className: _.marginBottom20,
                    }),
                    (0, r.jsx)(h.Dx, {
                        className: _.marginBottom8,
                        children: f.intl.string(f.t.iG0SlK),
                    }),
                    (0, r.jsx)(h.DK, {
                        className: _.marginBottom40,
                        children: f.intl.string(f.t["Elv+qt"]),
                    }),
                    E(),
                ],
            })
          : (0, r.jsxs)(h.ZP, {
                children: [(0, r.jsx)(h.Hh, {}), (0, r.jsx)(h.Dx, { children: f.intl.string(f.t["9exy+V"]) })],
            });
}
a.ZP.initialize();
