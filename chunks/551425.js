n.d(e, { Z: () => S });
var i = n(255367);
n(73800);
var r = n(979554),
    s = n(442837),
    l = n(481060),
    a = n(1585),
    o = n(125988),
    c = n(479446),
    u = n(981632),
    d = n(876917),
    p = n(594174),
    f = n(597688),
    h = n(22267),
    m = n(609887);
let g = l.EFr.SIZE_152,
    y = (0, a.y9)(g),
    O = (t) => {
        var e, n;
        let { item: r } = t,
            a = (0, s.e7)([p.default], () => p.default.getCurrentUser()),
            {
                avatarDecorationSrc: c,
                avatarPlaceholderSrc: u,
                eventHandlers: d
            } = (0, o.Z)({
                user: a,
                avatarDecorationOverride: r,
                size: y
            });
        return (0, i.jsx)('div', {
            className: m.avatarDecorationPreview,
            children: (0, i.jsx)(
                l.qEK,
                ((e = (function (t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = null != arguments[e] ? arguments[e] : {},
                            i = Object.keys(n);
                        ('function' == typeof Object.getOwnPropertySymbols &&
                            (i = i.concat(
                                Object.getOwnPropertySymbols(n).filter(function (t) {
                                    return Object.getOwnPropertyDescriptor(n, t).enumerable;
                                })
                            )),
                            i.forEach(function (e) {
                                var i;
                                ((i = n[e]),
                                    e in t
                                        ? Object.defineProperty(t, e, {
                                              value: i,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0
                                          })
                                        : (t[e] = i));
                            }));
                    }
                    return t;
                })({}, d)),
                (n = n =
                    {
                        'aria-label': r.label,
                        src: u,
                        avatarDecoration: c,
                        size: g
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
    b = (t) => {
        let { item: e } = t;
        return (0, i.jsx)('div', {
            className: m.profileEffectPreview,
            children: (0, i.jsx)(d.Z, {
                isHovering: !0,
                profileEffectId: null == e ? void 0 : e.id
            })
        });
    },
    j = (t) => {
        let { item: e } = t;
        return (0, i.jsx)('div', {
            className: m.nameplatePreview,
            children: (0, i.jsx)(h.Z, {
                nameplate: e,
                className: m.nameplate,
                nameplatePreviewSize: 'xlarge',
                isHighlighted: !0,
                showPlaceholderUser: !0
            })
        });
    },
    S = (t) => {
        let { giftCode: e } = t,
            n = (0, s.e7)([f.Z], () => f.Z.getProduct(e.skuId)),
            l = null == n ? void 0 : n.items[0];
        switch (null == l ? void 0 : l.type) {
            case r.Z.AVATAR_DECORATION:
                return (0, i.jsx)(O, { item: l });
            case r.Z.PROFILE_EFFECT:
                return (0, i.jsx)(b, { item: l });
            case r.Z.NAMEPLATE:
                return (0, i.jsx)(j, { item: l });
            default:
                return null != e.giftStyle
                    ? (0, i.jsx)(u.Z, {
                          defaultAnimationState: c.SR.ACTION,
                          idleAnimationState: c.SR.LOOP,
                          className: m.giftAnimation,
                          giftStyle: e.giftStyle
                      })
                    : null;
        }
    };
