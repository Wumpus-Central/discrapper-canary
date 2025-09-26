n.d(t, { Z: () => y });
var l = n(951288),
    i = n(647438),
    a = n(120356),
    r = n.n(a),
    s = n(442837),
    o = n(755721),
    c = n(481060),
    u = n(838968),
    d = n(880419),
    m = n(693587),
    v = n(943970),
    f = n(967647),
    g = n(258640),
    b = n(388032),
    p = n(123879),
    j = n(958751);
function x(e) {
    let { guildId: t, gameInstance: n, cost: i } = e;
    return (0, l.jsx)(c.ua7, {
        "aria-label": b.intl.string(g.default.TZsu1d),
        text: (0, l.jsx)(d.Po, { cost: i }),
        children: (e) => {
            var a, s;
            return (0, l.jsx)(
                o.zx,
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
                        className: r()(p.secondaryButton, j.disableButton),
                        innerClassName: p.buttonInner,
                        wrapperClassName: p.secondaryButton,
                        color: o.Tt.PRIMARY,
                        "aria-label": b.intl.string(g.default.TZsu1d),
                        onClick: (e) => {
                            e.stopPropagation(), (0, f.Q)(t, n);
                        },
                        children: (0, l.jsx)(d.RD, {
                            cost: i,
                            isActive: !0,
                            compact: !0,
                        }),
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
            );
        },
    });
}
function y(e) {
    var t, n, a, r;
    let { guildId: o, gameInstance: d, onClick: f } = e,
        p = (0, s.e7)([m.Z], () => m.Z.getStateForGuild(o)),
        y = i.useMemo(() => {
            var e;
            return null == p || null == (e = p.entitlements) ? void 0 : e[d.entitlementId];
        }, [null == p ? void 0 : p.entitlements, d.entitlementId]),
        h = (null == y ? void 0 : y.ends_at) != null,
        O =
            null == y ||
            null == (r = y.sku) ||
            null == (a = r.tenant_metadata) ||
            null == (n = a.guild_monetization) ||
            null == (t = n.game_server)
                ? void 0
                : t.boost_price,
        P = (0, v.Z)(d.gameId, "icon");
    return null == O
        ? null
        : (0, l.jsxs)(c.P3F, {
              className: j.game,
              onClick: () => f(d),
              children: [
                  (0, l.jsx)("img", {
                      className: j.image,
                      alt: "",
                      src: P,
                  }),
                  (0, l.jsxs)("div", {
                      className: j.textContainer,
                      children: [
                          (0, l.jsx)(c.X6q, {
                              variant: "heading-sm/semibold",
                              children: d.name,
                          }),
                          h
                              ? (0, l.jsx)(u.rL, { dateString: y.ends_at })
                              : (0, l.jsx)(u.P2, { text: b.intl.string(g.default.FFLkm5) }),
                      ],
                  }),
                  (0, l.jsx)(x, {
                      guildId: o,
                      gameInstance: d,
                      cost: O,
                  }),
              ],
          });
}
