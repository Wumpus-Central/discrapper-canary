n.d(t, { Z: () => _ }), n(388685);
var r = n(951288),
    i = n(647438),
    l = n(525654),
    a = n.n(l),
    s = n(442837),
    o = n(893776),
    c = n(493773),
    u = n(129293),
    d = n(388905),
    h = n(703656),
    p = n(108427),
    m = n(981631),
    f = n(388032),
    g = n(197571);
function _(e) {
    let { location: t, transitionTo: l = h.uL } = e,
        [s, _] = i.useState("submitting");
    function x() {
        return "Android" === a().os.family || "iOS" === a().os.family
            ? null
            : (0, r.jsx)(d.zx, {
                  onClick: () => l(m.Z5c.LOGIN, { source: "authorizeIPAdress" }),
                  children: f.intl.string(f.t.dKhVQE),
              });
    }
    return ((0, c.ZP)(() => {
        (0, p.e)("authorize_ip");
        let e = (0, u.Z)(t);
        if (null == e) return void _("failed");
        (async () => {
            try {
                await o.Z.authorizeIPAddress(e), _("succeeded");
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
                      children: f.intl.string(f.t["f/54a2"]),
                  }),
                  (0, r.jsx)(d.DK, {
                      className: g.marginBottom40,
                      children: f.intl.string(f.t.i3ehMj),
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
                        children: f.intl.string(f.t.iG0SlJ),
                    }),
                    (0, r.jsx)(d.DK, {
                        className: g.marginBottom40,
                        children: f.intl.string(f.t["Elv+qq"]),
                    }),
                    x(),
                ],
            })
          : (0, r.jsxs)(d.ZP, {
                children: [(0, r.jsx)(d.Hh, {}), (0, r.jsx)(d.Dx, { children: f.intl.string(f.t["9exy+f"]) })],
            });
}
s.ZP.initialize();
