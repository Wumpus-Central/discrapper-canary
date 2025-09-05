n.d(t, { Z: () => _ }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(525654),
    s = n.n(l),
    o = n(442837),
    a = n(893776),
    c = n(493773),
    u = n(129293),
    d = n(388905),
    h = n(703656),
    f = n(108427),
    p = n(981631),
    g = n(388032),
    m = n(197571);
function _(e) {
    let { location: t, transitionTo: l = h.uL } = e,
        [o, _] = i.useState("submitting");
    function x() {
        return "Android" === s().os.family || "iOS" === s().os.family
            ? null
            : (0, r.jsx)(d.zx, {
                  onClick: () => l(p.Z5c.LOGIN, { source: "authorizeIPAdress" }),
                  children: g.intl.string(g.t.dKhVQE),
              });
    }
    return ((0, c.ZP)(() => {
        (0, f.e)("authorize_ip");
        let e = (0, u.Z)(t);
        if (null == e) return void _("failed");
        (async () => {
            try {
                await a.Z.authorizeIPAddress(e), _("succeeded");
            } catch (e) {
                _("failed");
            }
        })();
    }),
    "failed" === o)
        ? (0, r.jsxs)(d.ZP, {
              children: [
                  (0, r.jsx)("img", {
                      alt: "",
                      src: n(262467),
                      className: m.marginBottom20,
                  }),
                  (0, r.jsx)(d.Dx, {
                      className: m.marginBottom8,
                      children: g.intl.string(g.t["f/54a2"]),
                  }),
                  (0, r.jsx)(d.DK, {
                      className: m.marginBottom40,
                      children: g.intl.string(g.t.i3ehMj),
                  }),
                  x(),
              ],
          })
        : "succeeded" === o
          ? (0, r.jsxs)(d.ZP, {
                children: [
                    (0, r.jsx)("img", {
                        alt: "",
                        src: n(640356),
                        className: m.marginBottom20,
                    }),
                    (0, r.jsx)(d.Dx, {
                        className: m.marginBottom8,
                        children: g.intl.string(g.t.iG0SlJ),
                    }),
                    (0, r.jsx)(d.DK, {
                        className: m.marginBottom40,
                        children: g.intl.string(g.t["Elv+qq"]),
                    }),
                    x(),
                ],
            })
          : (0, r.jsxs)(d.ZP, {
                children: [(0, r.jsx)(d.Hh, {}), (0, r.jsx)(d.Dx, { children: g.intl.string(g.t["9exy+f"]) })],
            });
}
o.ZP.initialize();
