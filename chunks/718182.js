n.d(t, { Z: () => _ }), n(388685);
var r = n(255367),
    i = n(73800),
    l = n(525654),
    o = n.n(l),
    s = n(442837),
    a = n(893776),
    c = n(493773),
    u = n(129293),
    d = n(388905),
    h = n(703656),
    p = n(108427),
    f = n(981631),
    m = n(388032),
    g = n(20493);
function _(e) {
    let { location: t, transitionTo: l = h.uL } = e,
        [s, _] = i.useState("submitting");
    function x() {
        return "Android" === o().os.family || "iOS" === o().os.family
            ? null
            : (0, r.jsx)(d.zx, {
                  onClick: () => l(f.Z5c.LOGIN, { source: "authorizeIPAdress" }),
                  children: m.intl.string(m.t.dKhVQE),
              });
    }
    return ((0, c.ZP)(() => {
        (0, p.e)("authorize_ip");
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
    "failed" === s)
        ? (0, r.jsxs)(d.ZP, {
              children: [
                  (0, r.jsx)("img", {
                      alt: "",
                      src: n(262467),
                      className: g.marginBottom20,
                  }),
                  (0, r.jsx)(d.Dx, {
                      className: g.marginBottom8,
                      children: m.intl.string(m.t["f/54a2"]),
                  }),
                  (0, r.jsx)(d.DK, {
                      className: g.marginBottom40,
                      children: m.intl.string(m.t.i3ehMj),
                  }),
                  x(),
              ],
          })
        : "succeeded" === s
          ? (0, r.jsxs)(d.ZP, {
                children: [
                    (0, r.jsx)("img", {
                        alt: "",
                        src: n(640356),
                        className: g.marginBottom20,
                    }),
                    (0, r.jsx)(d.Dx, {
                        className: g.marginBottom8,
                        children: m.intl.string(m.t.iG0SlJ),
                    }),
                    (0, r.jsx)(d.DK, {
                        className: g.marginBottom40,
                        children: m.intl.string(m.t["Elv+qq"]),
                    }),
                    x(),
                ],
            })
          : (0, r.jsxs)(d.ZP, {
                children: [(0, r.jsx)(d.Hh, {}), (0, r.jsx)(d.Dx, { children: m.intl.string(m.t["9exy+f"]) })],
            });
}
s.ZP.initialize();
