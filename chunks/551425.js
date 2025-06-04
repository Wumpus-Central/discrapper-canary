n.d(e, { Z: () => y });
var i = n(255367);
n(73800);
var r = n(979554),
    s = n(442837),
    l = n(481060),
    o = n(1585),
    a = n(125988),
    c = n(876917),
    u = n(594174),
    d = n(597688),
    p = n(609887);
let f = l.EFr.SIZE_152,
    h = (0, o.y9)(f),
    m = (t) => {
        var e, n;
        let { item: r } = t,
            o = (0, s.e7)([u.default], () => u.default.getCurrentUser()),
            {
                avatarDecorationSrc: c,
                avatarPlaceholderSrc: d,
                eventHandlers: m
            } = (0, a.Z)({
                user: o,
                avatarDecorationOverride: r,
                size: h
            });
        return (0, i.jsx)('div', {
            className: p.avatarDecorationPreview,
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
                })({}, m)),
                (n = n =
                    {
                        'aria-label': r.label,
                        src: d,
                        avatarDecoration: c,
                        size: f
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
    g = (t) => {
        let { item: e } = t;
        return (0, i.jsx)('div', {
            className: p.profileEffectPreview,
            children: (0, i.jsx)(c.Z, {
                isHovering: !0,
                profileEffectId: null == e ? void 0 : e.id
            })
        });
    },
    y = (t) => {
        let { giftCode: e } = t,
            n = (0, s.e7)([d.Z], () => d.Z.getProduct(e.skuId)),
            l = null == n ? void 0 : n.items[0];
        return (0, i.jsxs)(i.Fragment, {
            children: [(null == l ? void 0 : l.type) === r.Z.AVATAR_DECORATION && (0, i.jsx)(m, { item: l }), (null == l ? void 0 : l.type) === r.Z.PROFILE_EFFECT && (0, i.jsx)(g, { item: l })]
        });
    };
