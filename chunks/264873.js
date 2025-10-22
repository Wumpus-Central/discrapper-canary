n.d(t, { Z: () => _ }), n(388685);
var r = n(951288),
    i = n(647438),
    s = n(525654),
    l = n.n(s),
    a = n(442837),
    o = n(893776),
    c = n(493773),
    u = n(129293),
    d = n(388905),
    h = n(703656),
    g = n(108427),
    p = n(981631),
    m = n(388032),
    f = n(10198);
function _(e) {
    let { location: t, transitionTo: s = h.uL } = e,
        [a, _] = i.useState("submitting");
    function x() {
        return "Android" === l().os.family || "iOS" === l().os.family
            ? null
            : (0, r.jsx)(d.zx, {
                  onClick: () => s(p.Z5c.LOGIN, { source: "authorizeIPAdress" }),
                  children: m.intl.string(m.t.dKhVQN),
              });
    }
    return ((0, c.ZP)(() => {
        (0, g.e)("authorize_ip");
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
    "failed" === a)
        ? (0, r.jsxs)(d.ZP, {
              children: [
                  (0, r.jsx)("img", {
                      alt: "",
                      src: n(262467),
                      className: f.marginBottom20,
                  }),
                  (0, r.jsx)(d.Dx, {
                      className: f.marginBottom8,
                      children: m.intl.string(m.t["f/54az"]),
                  }),
                  (0, r.jsx)(d.DK, {
                      className: f.marginBottom40,
                      children: m.intl.string(m.t.i3ehMr),
                  }),
                  x(),
              ],
          })
        : "succeeded" === a
          ? (0, r.jsxs)(d.ZP, {
                children: [
                    (0, r.jsx)("img", {
                        alt: "",
                        src: n(640356),
                        className: f.marginBottom20,
                    }),
                    (0, r.jsx)(d.Dx, {
                        className: f.marginBottom8,
                        children: m.intl.string(m.t.iG0SlK),
                    }),
                    (0, r.jsx)(d.DK, {
                        className: f.marginBottom40,
                        children: m.intl.string(m.t["Elv+qt"]),
                    }),
                    x(),
                ],
            })
          : (0, r.jsxs)(d.ZP, {
                children: [(0, r.jsx)(d.Hh, {}), (0, r.jsx)(d.Dx, { children: m.intl.string(m.t["9exy+V"]) })],
            });
}
a.ZP.initialize();
