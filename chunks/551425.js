n.d(e, { Z: () => v });
var i = n(951288);
n(647438);
var r = n(979554),
    l = n(442837),
    s = n(481060),
    a = n(1585),
    o = n(125988),
    u = n(479446),
    c = n(981632),
    d = n(876917),
    p = n(594174),
    f = n(597688),
    m = n(22267),
    h = n(799940);
let g = s.EFr.SIZE_152,
    y = (0, a.y9)(g),
    O = (t) => {
        var e, n;
        let { item: r } = t,
            a = (0, l.e7)([p.default], () => p.default.getCurrentUser()),
            {
                avatarDecorationSrc: u,
                avatarPlaceholderSrc: c,
                eventHandlers: d,
            } = (0, o.Z)({
                user: a,
                avatarDecorationOverride: r,
                size: y,
            });
        return (0, i.jsx)("div", {
            className: h.avatarDecorationPreview,
            children: (0, i.jsx)(
                s.qEK,
                ((e = (function (t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = null != arguments[e] ? arguments[e] : {},
                            i = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols &&
                            (i = i.concat(
                                Object.getOwnPropertySymbols(n).filter(function (t) {
                                    return Object.getOwnPropertyDescriptor(n, t).enumerable;
                                }),
                            )),
                            i.forEach(function (e) {
                                var i;
                                (i = n[e]),
                                    e in t
                                        ? Object.defineProperty(t, e, {
                                              value: i,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0,
                                          })
                                        : (t[e] = i);
                            });
                    }
                    return t;
                })({}, d)),
                (n = n =
                    {
                        "aria-label": r.label,
                        src: c,
                        avatarDecoration: u,
                        size: g,
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
                e),
            ),
        });
    },
    b = (t) => {
        let { item: e } = t;
        return (0, i.jsx)("div", {
            className: h.profileEffectPreview,
            children: (0, i.jsx)(d.Z, {
                isHovering: !0,
                skuId: null == e ? void 0 : e.skuId,
            }),
        });
    },
    j = (t) => {
        let { item: e } = t;
        return (0, i.jsx)("div", {
            className: h.nameplatePreview,
            children: (0, i.jsx)(m.Z, {
                nameplate: e,
                className: h.nameplate,
                nameplatePreviewSize: "xlarge",
                isHighlighted: !0,
                showPlaceholderUser: !0,
            }),
        });
    },
    v = (t) => {
        let { giftCode: e } = t,
            n = (0, l.e7)([f.Z], () => f.Z.getProduct(e.skuId)),
            s = null == n ? void 0 : n.items[0];
        switch (null == s ? void 0 : s.type) {
            case r.Z.AVATAR_DECORATION:
                return (0, i.jsx)(O, { item: s });
            case r.Z.PROFILE_EFFECT:
                return (0, i.jsx)(b, { item: s });
            case r.Z.NAMEPLATE:
                return (0, i.jsx)(j, { item: s });
            default:
                return null != e.giftStyle
                    ? (0, i.jsx)(c.Z, {
                          defaultAnimationState: u.SR.ACTION,
                          idleAnimationState: u.SR.LOOP,
                          className: h.giftAnimation,
                          giftStyle: e.giftStyle,
                      })
                    : null;
        }
    };
