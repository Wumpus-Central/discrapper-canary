n.d(e, { Z: () => b });
var i = n(255367);
n(73800);
var r = n(979554),
    s = n(442837),
    l = n(481060),
    o = n(1585),
    a = n(125988),
    u = n(479446),
    c = n(981632),
    d = n(876917),
    p = n(594174),
    f = n(597688),
    h = n(609887);
let m = l.EFr.SIZE_152,
    g = (0, o.y9)(m),
    y = (t) => {
        var e, n;
        let { item: r } = t,
            o = (0, s.e7)([p.default], () => p.default.getCurrentUser()),
            {
                avatarDecorationSrc: u,
                avatarPlaceholderSrc: c,
                eventHandlers: d
            } = (0, a.Z)({
                user: o,
                avatarDecorationOverride: r,
                size: g
            });
        return (0, i.jsx)('div', {
            className: h.avatarDecorationPreview,
            children: (0, i.jsx)(
                l.qEK,
                ((e = (function (t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = null != arguments[e] ? arguments[e] : {},
                            i = Object.keys(n);
                        'function' == typeof Object.getOwnPropertySymbols &&
                            (i = i.concat(
                                Object.getOwnPropertySymbols(n).filter(function (t) {
                                    return Object.getOwnPropertyDescriptor(n, t).enumerable;
                                })
                            )),
                            i.forEach(function (e) {
                                var i;
                                (i = n[e]),
                                    e in t
                                        ? Object.defineProperty(t, e, {
                                              value: i,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0
                                          })
                                        : (t[e] = i);
                            });
                    }
                    return t;
                })({}, d)),
                (n = n =
                    {
                        'aria-label': r.label,
                        src: c,
                        avatarDecoration: u,
                        size: m
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
                    : (function (t, e) {
                          var n = Object.keys(t);
                          if (Object.getOwnPropertySymbols) {
                              var i = Object.getOwnPropertySymbols(t);
                              n.push.apply(n, i);
                          }
                          return n;
                      })(Object(n)).forEach(function (t) {
                          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
                      }),
                e)
            )
        });
    },
    O = (t) => {
        let { item: e } = t;
        return (0, i.jsx)('div', {
            className: h.profileEffectPreview,
            children: (0, i.jsx)(d.Z, {
                isHovering: !0,
                profileEffectId: null == e ? void 0 : e.id
            })
        });
    },
    b = (t) => {
        let { giftCode: e } = t,
            n = (0, s.e7)([f.Z], () => f.Z.getProduct(e.skuId)),
            l = null == n ? void 0 : n.items[0];
        switch (null == l ? void 0 : l.type) {
            case r.Z.AVATAR_DECORATION:
                return (0, i.jsx)(y, { item: l });
            case r.Z.PROFILE_EFFECT:
                return (0, i.jsx)(O, { item: l });
            default:
                return null != e.giftStyle
                    ? (0, i.jsx)(c.Z, {
                          defaultAnimationState: u.SR.ACTION,
                          idleAnimationState: u.SR.LOOP,
                          className: h.giftAnimation,
                          giftStyle: e.giftStyle
                      })
                    : null;
        }
    };
