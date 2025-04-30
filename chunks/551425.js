i.d(e, { Z: () => b });
var n = i(200651);
i(192379);
var s = i(979554),
    r = i(442837),
    l = i(481060),
    a = i(1585),
    o = i(125988),
    c = i(876917),
    u = i(594174),
    d = i(597688),
    p = i(609887);
let h = l.EFr.SIZE_152,
    f = (0, a.y9)(h),
    g = (t) => {
        var e, i;
        let { item: s } = t,
            a = (0, r.e7)([u.default], () => u.default.getCurrentUser()),
            {
                avatarDecorationSrc: c,
                avatarPlaceholderSrc: d,
                eventHandlers: g
            } = (0, o.Z)({
                user: a,
                avatarDecorationOverride: s,
                size: f
            });
        return (0, n.jsx)('div', {
            className: p.avatarDecorationPreview,
            children: (0, n.jsx)(
                l.qEK,
                ((e = (function (t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var i = null != arguments[e] ? arguments[e] : {},
                            n = Object.keys(i);
                        'function' == typeof Object.getOwnPropertySymbols &&
                            (n = n.concat(
                                Object.getOwnPropertySymbols(i).filter(function (t) {
                                    return Object.getOwnPropertyDescriptor(i, t).enumerable;
                                })
                            )),
                            n.forEach(function (e) {
                                var n;
                                (n = i[e]),
                                    e in t
                                        ? Object.defineProperty(t, e, {
                                              value: n,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0
                                          })
                                        : (t[e] = n);
                            });
                    }
                    return t;
                })({}, g)),
                (i = i =
                    {
                        'aria-label': s.label,
                        src: d,
                        avatarDecoration: c,
                        size: h
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(i))
                    : (function (t, e) {
                          var i = Object.keys(t);
                          if (Object.getOwnPropertySymbols) {
                              var n = Object.getOwnPropertySymbols(t);
                              i.push.apply(i, n);
                          }
                          return i;
                      })(Object(i)).forEach(function (t) {
                          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(i, t));
                      }),
                e)
            )
        });
    },
    m = (t) => {
        let { item: e } = t;
        return (0, n.jsx)('div', {
            className: p.profileEffectPreview,
            children: (0, n.jsx)(c.Z, {
                isHovering: !0,
                profileEffectId: null == e ? void 0 : e.id
            })
        });
    },
    b = (t) => {
        let { giftCode: e } = t,
            i = (0, r.e7)([d.Z], () => d.Z.getProduct(e.skuId)),
            l = null == i ? void 0 : i.items[0];
        return (0, n.jsxs)(n.Fragment, {
            children: [(null == l ? void 0 : l.type) === s.Z.AVATAR_DECORATION && (0, n.jsx)(g, { item: l }), (null == l ? void 0 : l.type) === s.Z.PROFILE_EFFECT && (0, n.jsx)(m, { item: l })]
        });
    };
