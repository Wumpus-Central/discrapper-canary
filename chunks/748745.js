t.d(n, { Z: () => b });
var i = t(951288),
    r = t(647438),
    l = t(120356),
    a = t.n(l),
    o = t(442837),
    s = t(755721),
    c = t(481060),
    d = t(838968),
    u = t(880419),
    m = t(693587),
    g = t(967647),
    f = t(989308),
    p = t(388032),
    v = t(362320),
    x = t(961820);
function j(e) {
    let { guildId: n, gameInstance: t, cost: r } = e;
    return (0, i.jsx)(c.ua7, {
        "aria-label": p.intl.string(f.default.TZsu1d),
        text: (0, i.jsx)(u.Po, { cost: r }),
        children: (e) => {
            var l, o;
            return (0, i.jsx)(
                s.zx,
                ((l = (function (e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = null != arguments[n] ? arguments[n] : {},
                            i = Object.keys(t);
                        "function" == typeof Object.getOwnPropertySymbols &&
                            (i = i.concat(
                                Object.getOwnPropertySymbols(t).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(t, e).enumerable;
                                }),
                            )),
                            i.forEach(function (n) {
                                var i;
                                (i = t[n]),
                                    n in e
                                        ? Object.defineProperty(e, n, {
                                              value: i,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0,
                                          })
                                        : (e[n] = i);
                            });
                    }
                    return e;
                })({}, e)),
                (o = o =
                    {
                        className: a()(v.secondaryButton, x.disableButton),
                        innerClassName: v.buttonInner,
                        wrapperClassName: v.secondaryButton,
                        color: s.Tt.PRIMARY,
                        "aria-label": p.intl.string(f.default.TZsu1d),
                        onClick: (e) => {
                            e.stopPropagation(), (0, g.Q)(n, t);
                        },
                        children: (0, i.jsx)(u.RD, {
                            cost: r,
                            isActive: !0,
                            compact: !0,
                        }),
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(l, Object.getOwnPropertyDescriptors(o))
                    : (function (e, n) {
                          var t = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var i = Object.getOwnPropertySymbols(e);
                              t.push.apply(t, i);
                          }
                          return t;
                      })(Object(o)).forEach(function (e) {
                          Object.defineProperty(l, e, Object.getOwnPropertyDescriptor(o, e));
                      }),
                l),
            );
        },
    });
}
function b(e) {
    var n, t, l, a;
    let { guildId: s, gameInstance: u, onClick: g } = e,
        v = (0, o.e7)([m.Z], () => m.Z.getStateForGuild(s)),
        b = r.useMemo(() => {
            var e;
            return null == v || null == (e = v.entitlements) ? void 0 : e[u.entitlementId];
        }, [null == v ? void 0 : v.entitlements, u.entitlementId]),
        h = (null == b ? void 0 : b.ends_at) != null,
        _ =
            null == b ||
            null == (a = b.sku) ||
            null == (l = a.tenant_metadata) ||
            null == (t = l.guild_monetization) ||
            null == (n = t.game_server)
                ? void 0
                : n.boost_price;
    return null == _
        ? null
        : (0, i.jsxs)(c.P3F, {
              className: x.game,
              onClick: () => g(u),
              children: [
                  (0, i.jsx)("img", {
                      className: x.image,
                      alt: "",
                  }),
                  (0, i.jsxs)("div", {
                      className: x.textContainer,
                      children: [
                          (0, i.jsx)(c.X6q, {
                              variant: "heading-sm/semibold",
                              children: u.name,
                          }),
                          h
                              ? (0, i.jsx)(d.rL, { dateString: b.ends_at })
                              : (0, i.jsx)(d.P2, { text: p.intl.string(f.default.FFLkm5) }),
                      ],
                  }),
                  (0, i.jsx)(j, {
                      guildId: s,
                      gameInstance: u,
                      cost: _,
                  }),
              ],
          });
}
