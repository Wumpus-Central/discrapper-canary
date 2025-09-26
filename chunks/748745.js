n.d(t, { Z: () => b });
var l = n(951288),
    i = n(647438),
    a = n(442837),
    r = n(481060),
    s = n(838968),
    o = n(880419),
    u = n(693587),
    c = n(943970),
    d = n(967647),
    m = n(989308),
    v = n(388032),
    g = n(961820);
function f(e) {
    let { guildId: t, gameInstance: n, cost: i } = e;
    return (0, l.jsx)(r.ua7, {
        "aria-label": v.intl.string(m.default.TZsu1d),
        text: (0, l.jsx)(o.Po, { cost: i }),
        children: (e) => {
            var a, s;
            return (0, l.jsx)("div", {
                className: g.disableButton,
                children: (0, l.jsx)(
                    r.zxk,
                    ((a = (function (e) {
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
                                asset: r.mTd,
                            },
                            text: i.toString(),
                            variant: "secondary",
                            size: "sm",
                            "aria-label": v.intl.string(m.default.TZsu1d),
                            onClick: (e) => {
                                e.stopPropagation(), (0, d.Q)(t, n);
                            },
                        }),
                    Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(s))
                        : (function (e, t) {
                              var n = Object.keys(e);
                              if (Object.getOwnPropertySymbols) {
                                  var l = Object.getOwnPropertySymbols(e);
                                  n.push.apply(n, l);
                              }
                              return n;
                          })(Object(s)).forEach(function (e) {
                              Object.defineProperty(a, e, Object.getOwnPropertyDescriptor(s, e));
                          }),
                    a),
                ),
            });
        },
    });
}
function b(e) {
    var t, n, o, d;
    let { guildId: b, gameInstance: p, onClick: j } = e,
        x = (0, a.e7)([u.Z], () => u.Z.getStateForGuild(b)),
        y = i.useMemo(() => {
            var e;
            return null == x || null == (e = x.entitlements) ? void 0 : e[p.entitlementId];
        }, [null == x ? void 0 : x.entitlements, p.entitlementId]),
        h = (null == y ? void 0 : y.ends_at) != null,
        O =
            null == y ||
            null == (d = y.sku) ||
            null == (o = d.tenant_metadata) ||
            null == (n = o.guild_monetization) ||
            null == (t = n.game_server)
                ? void 0
                : t.boost_price,
        P = (0, c.Z)(p.gameId, "icon");
    return null == O
        ? null
        : (0, l.jsxs)(r.P3F, {
              className: g.game,
              onClick: () => j(p),
              children: [
                  (0, l.jsx)("img", {
                      className: g.image,
                      alt: "",
                      src: P,
                  }),
                  (0, l.jsxs)("div", {
                      className: g.textContainer,
                      children: [
                          (0, l.jsx)(r.X6q, {
                              variant: "heading-sm/semibold",
                              children: p.name,
                          }),
                          h
                              ? (0, l.jsx)(s.rL, { dateString: y.ends_at })
                              : (0, l.jsx)(s.P2, { text: v.intl.string(m.default.FFLkm5) }),
                      ],
                  }),
                  (0, l.jsx)(f, {
                      guildId: b,
                      gameInstance: p,
                      cost: O,
                  }),
              ],
          });
}
