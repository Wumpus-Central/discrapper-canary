n.d(t, { Z: () => b });
var l = n(951288),
    a = n(647438),
    i = n(442837),
    r = n(481060),
    s = n(838968),
    o = n(880419),
    c = n(693587),
    u = n(943970),
    d = n(967647),
    m = n(989308),
    v = n(388032),
    f = n(961820);
function g(e) {
    let { guildId: t, gameInstance: n, cost: a } = e;
    return (0, l.jsx)(r.ua7, {
        "aria-label": v.intl.string(m.default.TZsu1d),
        text: (0, l.jsx)(o.Po, { cost: a }),
        children: (e) => {
            var i, s;
            return (0, l.jsx)("div", {
                className: f.disableButton,
                children: (0, l.jsx)(
                    r.zxk,
                    ((i = (function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {},
                                l = Object.keys(n);
                            "function" == typeof Object.getOwnPropertySymbols &&
                                (l = l.concat(
                                    Object.getOwnPropertySymbols(n).filter(function (e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                    }),
                                )),
                                l.forEach(function (t) {
                                    var l;
                                    (l = n[t]),
                                        t in e
                                            ? Object.defineProperty(e, t, {
                                                  value: l,
                                                  enumerable: !0,
                                                  configurable: !0,
                                                  writable: !0,
                                              })
                                            : (e[t] = l);
                                });
                        }
                        return e;
                    })({}, e)),
                    (s = s =
                        {
                            icon: {
                                type: "icon",
                                asset: r.zkc,
                            },
                            text: a.toString(),
                            variant: "secondary",
                            size: "sm",
                            "aria-label": v.intl.string(m.default.TZsu1d),
                            onClick: (e) => {
                                e.stopPropagation(), (0, d.Q)(t, n);
                            },
                        }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(s))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var l = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, l);
                              }
                              return n;
                          })(Object(s)).forEach(function (e) {
                              Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(s, e));
                          }),
                    i),
                ),
            });
        },
    });
}
function b(e) {
    var t, n, o, d;
    let { guildId: b, gameInstance: p, onClick: j } = e,
        x = (0, i.e7)([c.Z], () => c.Z.getStateForGuild(b)),
        y = a.useMemo(() => {
            var e;
            return null == x || null == (e = x.entitlements) ? void 0 : e[p.entitlementId];
        }, [null == x ? void 0 : x.entitlements, p.entitlementId]),
        O = (null == y ? void 0 : y.ends_at) != null,
        h =
            null == y ||
            null == (d = y.sku) ||
            null == (o = d.tenant_metadata) ||
            null == (n = o.guild_monetization) ||
            null == (t = n.game_server)
                ? void 0
                : t.boost_price,
        P = (0, u.Z)(p.gameId, "icon");
    return null == h
        ? null
        : (0, l.jsxs)(r.P3F, {
              className: f.game,
              onClick: () => j(p),
              children: [
                  (0, l.jsx)("img", {
                      className: f.image,
                      alt: "",
                      src: P,
                  }),
                  (0, l.jsxs)("div", {
                      className: f.textContainer,
                      children: [
                          (0, l.jsx)(r.X6q, {
                              variant: "heading-sm/semibold",
                              children: p.name,
                          }),
                          O
                              ? (0, l.jsx)(s.rL, { dateString: y.ends_at })
                              : (0, l.jsx)(s.P2, { text: v.intl.string(m.default.FFLkm5) }),
                      ],
                  }),
                  (0, l.jsx)(g, {
                      guildId: b,
                      gameInstance: p,
                      cost: h,
                  }),
              ],
          });
}
