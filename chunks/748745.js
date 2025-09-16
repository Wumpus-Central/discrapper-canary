t.d(n, { Z: () => b });
var i = t(951288);
t(647438);
var r = t(120356),
    a = t.n(r),
    l = t(442837),
    o = t(755721),
    s = t(481060),
    c = t(838968),
    d = t(880419),
    u = t(693587),
    m = t(967647),
    g = t(989308),
    p = t(388032),
    f = t(362320),
    v = t(961820);
function x(e) {
    var n, t, r, c, x, b;
    let { guildId: j, gameInstance: h } = e,
        _ = (0, l.e7)([u.Z], () => {
            var e;
            return null == (e = u.Z.getStateForGuild(j)) ? void 0 : e.entitlements;
        }),
        C =
            null !=
            (b =
                null == _ ||
                null == (x = _[h.entitlementId]) ||
                null == (c = x.sku) ||
                null == (r = c.tenant_metadata) ||
                null == (t = r.guild_monetization) ||
                null == (n = t.game_server)
                    ? void 0
                    : n.boost_price)
                ? b
                : 0;
    return 0 === C
        ? null
        : (0, i.jsx)(s.ua7, {
              "aria-label": p.intl.string(g.default.TZsu1d),
              text: (0, i.jsx)(d.Po, { cost: C }),
              children: (e) => {
                  var n, t;
                  return (0, i.jsx)(
                      o.zx,
                      ((n = (function (e) {
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
                      (t = t =
                          {
                              className: a()(f.secondaryButton, v.disableButton),
                              innerClassName: f.buttonInner,
                              wrapperClassName: f.secondaryButton,
                              color: o.Tt.PRIMARY,
                              "aria-label": p.intl.string(g.default.TZsu1d),
                              onClick: (e) => {
                                  e.stopPropagation(), (0, m.Q)(j, h);
                              },
                              children: (0, i.jsx)(d.RD, {
                                  cost: C,
                                  isActive: !0,
                                  compact: !0,
                              }),
                          }),
                      Object.getOwnPropertyDescriptors
                          ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t))
                          : (function (e, n) {
                                var t = Object.keys(e);
                                if (Object.getOwnPropertySymbols) {
                                    var i = Object.getOwnPropertySymbols(e);
                                    t.push.apply(t, i);
                                }
                                return t;
                            })(Object(t)).forEach(function (e) {
                                Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(t, e));
                            }),
                      n),
                  );
              },
          });
}
function b(e) {
    let { guildId: n, gameInstance: t, onClick: r } = e;
    return (0, i.jsxs)(s.P3F, {
        className: v.game,
        onClick: () => r(t),
        children: [
            (0, i.jsx)("img", {
                className: v.image,
                alt: "",
            }),
            (0, i.jsxs)("div", {
                className: v.textContainer,
                children: [
                    (0, i.jsx)(s.X6q, {
                        variant: "heading-sm/semibold",
                        children: t.name,
                    }),
                    (0, i.jsx)(c.P2, { text: p.intl.string(g.default.FFLkm5) }),
                ],
            }),
            (0, i.jsx)(x, {
                guildId: n,
                gameInstance: t,
            }),
        ],
    });
}
