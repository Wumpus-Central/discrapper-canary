n.d(t, { Z: () => _ }), n(388685);
var r = n(54381),
    i = n(473749),
    s = n(525654),
    a = n.n(s),
    l = n(442837),
    o = n(481060),
    c = n(893776),
    u = n(493773),
    d = n(129293),
    h = n(388905),
    f = n(703656),
    g = n(108427),
    m = n(981631),
    p = n(388032),
    x = n(478411);
function _(e) {
    let { location: t, transitionTo: s = f.uL } = e,
        [l, _] = i.useState("submitting");
    function E() {
        return "Android" === a().os.family || "iOS" === a().os.family
            ? null
            : (0, r.jsx)(o.Button, {
                  text: p.intl.string(p.t.dKhVQN),
                  fullWidth: !0,
                  onClick: () => s(m.Z5c.LOGIN, { source: "authorizeIPAdress" }),
              });
    }
    return ((0, u.ZP)(() => {
        (0, g.e)("authorize_ip");
        let e = (0, d.Z)(t);
        if (null == e) return void _("failed");
        (async () => {
            try {
                await c.Z.authorizeIPAddress(e), _("succeeded");
            } catch (e) {
                _("failed");
            }
        })();
    }),
    "failed" === l)
        ? (0, r.jsxs)(h.ZP, {
              children: [
                  (0, r.jsx)("img", {
                      alt: "",
                      src: n(262467),
                      className: x.marginBottom20,
                  }),
                  (0, r.jsx)(h.Dx, {
                      className: x.marginBottom8,
                      children: p.intl.string(p.t["f/54az"]),
                  }),
                  (0, r.jsx)(h.DK, {
                      className: x.marginBottom40,
                      children: p.intl.string(p.t.i3ehMr),
                  }),
                  E(),
              ],
          })
        : "succeeded" === l
          ? (0, r.jsxs)(h.ZP, {
                children: [
                    (0, r.jsx)("img", {
                        alt: "",
                        src: n(640356),
                        className: x.marginBottom20,
                    }),
                    (0, r.jsx)(h.Dx, {
                        className: x.marginBottom8,
                        children: p.intl.string(p.t.iG0SlK),
                    }),
                    (0, r.jsx)(h.DK, {
                        className: x.marginBottom40,
                        children: p.intl.string(p.t["Elv+qt"]),
                    }),
                    E(),
                ],
            })
          : (0, r.jsxs)(h.ZP, {
                children: [(0, r.jsx)(h.Hh, {}), (0, r.jsx)(h.Dx, { children: p.intl.string(p.t["9exy+V"]) })],
            });
}
l.ZP.initialize();
