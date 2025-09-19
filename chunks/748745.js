t.d(n, { Z: () => b });
var r = t(951288);
t(647438);
var i = t(120356),
    a = t.n(i),
    l = t(442837),
    o = t(755721),
    s = t(481060),
    c = t(838968),
    d = t(880419),
    u = t(693587),
    m = t(967647),
    g = t(989308),
    f = t(388032),
    p = t(362320),
    v = t(961820);
function x(e) {
    var n, t, i, c, x, b;
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
                null == (i = c.tenant_metadata) ||
                null == (t = i.guild_monetization) ||
                null == (n = t.game_server)
                    ? void 0
                    : n.boost_price)
                ? b
                : 0;
    return 0 === C
        ? null
        : (0, r.jsx)(s.ua7, {
              "aria-label": f.intl.string(g.default.TZsu1d),
              text: (0, r.jsx)(d.Po, { cost: C }),
              children: (e) => {
                  var n, t;
                  return (0, r.jsx)(
                      o.zx,
                      ((n = (function (e) {
                          for (var n = 1; n < arguments.length; n++) {
                              var t = null != arguments[n] ? arguments[n] : {},
                                  r = Object.keys(t);
                              "function" == typeof Object.getOwnPropertySymbols &&
                                  (r = r.concat(
                                      Object.getOwnPropertySymbols(t).filter(function (e) {
                                          return Object.getOwnPropertyDescriptor(t, e).enumerable;
                                      }),
                                  )),
                                  r.forEach(function (n) {
                                      var r;
                                      (r = t[n]),
                                          n in e
                                              ? Object.defineProperty(e, n, {
                                                    value: r,
                                                    enumerable: !0,
                                                    configurable: !0,
                                                    writable: !0,
                                                })
                                              : (e[n] = r);
                                  });
                          }
                          return e;
                      })({}, e)),
                      (t = t =
                          {
                              className: a()(p.secondaryButton, v.disableButton),
                              innerClassName: p.buttonInner,
                              wrapperClassName: p.secondaryButton,
                              color: o.Tt.PRIMARY,
                              "aria-label": f.intl.string(g.default.TZsu1d),
                              onClick: (e) => {
                                  e.stopPropagation(), (0, m.Q)(j, h);
                              },
                              children: (0, r.jsx)(d.RD, {
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
                                    var r = Object.getOwnPropertySymbols(e);
                                    t.push.apply(t, r);
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
    let { guildId: n, gameInstance: t, onClick: i } = e,
        a = (0, l.e7)([u.Z], () => {
            var e;
            return null == (e = u.Z.getStateForGuild(n)) ? void 0 : e.entitlements[t.entitlementId];
        }),
        o = (null == a ? void 0 : a.ends_at) != null;
    return (0, r.jsxs)(s.P3F, {
        className: v.game,
        onClick: () => i(t),
        children: [
            (0, r.jsx)("img", {
                className: v.image,
                alt: "",
            }),
            (0, r.jsxs)("div", {
                className: v.textContainer,
                children: [
                    (0, r.jsx)(s.X6q, {
                        variant: "heading-sm/semibold",
                        children: t.name,
                    }),
                    o
                        ? (0, r.jsx)(c.rL, { dateString: a.ends_at })
                        : (0, r.jsx)(c.P2, { text: f.intl.string(g.default.FFLkm5) }),
                ],
            }),
            (0, r.jsx)(x, {
                guildId: n,
                gameInstance: t,
            }),
        ],
    });
}
