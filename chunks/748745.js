n.d(t, { Z: () => x });
var l = n(951288),
    a = n(647438),
    i = n(120356),
    r = n.n(i),
    s = n(442837),
    o = n(755721),
    c = n(481060),
    u = n(838968),
    d = n(880419),
    m = n(693587),
    v = n(967647),
    g = n(989308),
    b = n(388032),
    f = n(362320),
    j = n(961820);
function p(e) {
    let { guildId: t, gameInstance: n, cost: a } = e;
    return (0, l.jsx)(c.ua7, {
        "aria-label": b.intl.string(g.default.TZsu1d),
        text: (0, l.jsx)(d.Po, { cost: a }),
        children: (e) => {
            var i, s;
            return (0, l.jsx)(
                o.zx,
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
                        className: r()(f.secondaryButton, j.disableButton),
                        innerClassName: f.buttonInner,
                        wrapperClassName: f.secondaryButton,
                        color: o.Tt.PRIMARY,
                        "aria-label": b.intl.string(g.default.TZsu1d),
                        onClick: (e) => {
                            e.stopPropagation(), (0, v.Q)(t, n);
                        },
                        children: (0, l.jsx)(d.RD, {
                            cost: a,
                            isActive: !0,
                            compact: !0,
                        }),
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
            );
        },
    });
}
function x(e) {
    var t, n, i, r;
    let { guildId: o, gameInstance: d, onClick: v } = e,
        f = (0, s.e7)([m.Z], () => m.Z.getStateForGuild(o)),
        x = a.useMemo(() => {
            var e;
            return null == f || null == (e = f.entitlements) ? void 0 : e[d.entitlementId];
        }, [null == f ? void 0 : f.entitlements, d.entitlementId]),
        y = (null == x ? void 0 : x.ends_at) != null,
        h =
            null == x ||
            null == (r = x.sku) ||
            null == (i = r.tenant_metadata) ||
            null == (n = i.guild_monetization) ||
            null == (t = n.game_server)
                ? void 0
                : t.boost_price;
    return null == h
        ? null
        : (0, l.jsxs)(c.P3F, {
              className: j.game,
              onClick: () => v(d),
              children: [
                  (0, l.jsx)("img", {
                      className: j.image,
                      alt: "",
                  }),
                  (0, l.jsxs)("div", {
                      className: j.textContainer,
                      children: [
                          (0, l.jsx)(c.X6q, {
                              variant: "heading-sm/semibold",
                              children: d.name,
                          }),
                          y
                              ? (0, l.jsx)(u.rL, { dateString: x.ends_at })
                              : (0, l.jsx)(u.P2, { text: b.intl.string(g.default.FFLkm5) }),
                      ],
                  }),
                  (0, l.jsx)(p, {
                      guildId: o,
                      gameInstance: d,
                      cost: h,
                  }),
              ],
          });
}
