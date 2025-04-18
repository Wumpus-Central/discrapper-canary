s.d(e, { Z: () => b });
var i = s(200651);
s(192379);
var n = s(979554),
    r = s(442837),
    l = s(481060),
    a = s(1585),
    o = s(125988),
    c = s(876917),
    u = s(594174),
    d = s(597688),
    p = s(609887);
let h = l.EFr.SIZE_152,
    f = (0, a.y9)(h),
    g = (t) => {
        var e, s;
        let { item: n } = t,
            a = (0, r.e7)([u.default], () => u.default.getCurrentUser()),
            {
                avatarDecorationSrc: c,
                avatarPlaceholderSrc: d,
                eventHandlers: g
            } = (0, o.Z)({
                user: a,
                avatarDecorationOverride: n,
                size: f
            });
        return (0, i.jsx)('div', {
            className: p.avatarDecorationPreview,
            children: (0, i.jsx)(
                l.qEK,
                ((e = (function (t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var s = null != arguments[e] ? arguments[e] : {},
                            i = Object.keys(s);
                        'function' == typeof Object.getOwnPropertySymbols &&
                            (i = i.concat(
                                Object.getOwnPropertySymbols(s).filter(function (t) {
                                    return Object.getOwnPropertyDescriptor(s, t).enumerable;
                                })
                            )),
                            i.forEach(function (e) {
                                var i;
                                (i = s[e]),
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
                })({}, g)),
                (s = s =
                    {
                        'aria-label': n.label,
                        src: d,
                        avatarDecoration: c,
                        size: h
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(s))
                    : (function (t, e) {
                          var s = Object.keys(t);
                          if (Object.getOwnPropertySymbols) {
                              var i = Object.getOwnPropertySymbols(t);
                              s.push.apply(s, i);
                          }
                          return s;
                      })(Object(s)).forEach(function (t) {
                          Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(s, t));
                      }),
                e)
            )
        });
    },
    m = (t) => {
        let { item: e } = t;
        return (0, i.jsx)('div', {
            className: p.profileEffectPreview,
            children: (0, i.jsx)(c.Z, {
                isHovering: !0,
                profileEffectId: null == e ? void 0 : e.id
            })
        });
    },
    b = (t) => {
        let { giftCode: e } = t,
            s = (0, r.e7)([d.Z], () => d.Z.getProduct(e.skuId)),
            l = null == s ? void 0 : s.items[0];
        return (0, i.jsxs)(i.Fragment, {
            children: [(null == l ? void 0 : l.type) === n.Z.AVATAR_DECORATION && (0, i.jsx)(g, { item: l }), (null == l ? void 0 : l.type) === n.Z.PROFILE_EFFECT && (0, i.jsx)(m, { item: l })]
        });
    };
