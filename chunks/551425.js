i.d(e, { Z: () => P });
var n = i(255367);
i(73800);
var r = i(979554),
    l = i(442837),
    s = i(481060),
    a = i(1585),
    o = i(125988),
    u = i(479446),
    c = i(981632),
    d = i(876917),
    p = i(594174),
    f = i(597688),
    m = i(22267),
    h = i(948067);
let g = s.EFr.SIZE_152,
    y = (0, a.y9)(g),
    O = (t) => {
        var e, i;
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
        return (0, n.jsx)("div", {
            className: h.avatarDecorationPreview,
            children: (0, n.jsx)(
                s.qEK,
                ((e = (function (t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var i = null != arguments[e] ? arguments[e] : {},
                            n = Object.keys(i);
                        "function" == typeof Object.getOwnPropertySymbols &&
                            (n = n.concat(
                                Object.getOwnPropertySymbols(i).filter(function (t) {
                                    return Object.getOwnPropertyDescriptor(i, t).enumerable;
                                }),
                            )),
                            n.forEach(function (e) {
                                var n;
                                (n = i[e]),
                                    e in t
                                        ? Object.defineProperty(t, e, {
                                              value: n,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0,
                                          })
                                        : (t[e] = n);
                            });
                    }
                    return t;
                })({}, d)),
                (i = i =
                    {
                        "aria-label": r.label,
                        src: c,
                        avatarDecoration: u,
                        size: g,
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
                e),
            ),
        });
    },
    b = (t) => {
        let { item: e } = t;
        return (0, n.jsx)("div", {
            className: h.profileEffectPreview,
            children: (0, n.jsx)(d.Z, {
                isHovering: !0,
                profileEffectId: null == e ? void 0 : e.id,
            }),
        });
    },
    j = (t) => {
        let { item: e } = t;
        return (0, n.jsx)("div", {
            className: h.nameplatePreview,
            children: (0, n.jsx)(m.Z, {
                nameplate: e,
                className: h.nameplate,
                nameplatePreviewSize: "xlarge",
                isHighlighted: !0,
                showPlaceholderUser: !0,
            }),
        });
    },
    P = (t) => {
        let { giftCode: e } = t,
            i = (0, l.e7)([f.Z], () => f.Z.getProduct(e.skuId)),
            s = null == i ? void 0 : i.items[0];
        switch (null == s ? void 0 : s.type) {
            case r.Z.AVATAR_DECORATION:
                return (0, n.jsx)(O, { item: s });
            case r.Z.PROFILE_EFFECT:
                return (0, n.jsx)(b, { item: s });
            case r.Z.NAMEPLATE:
                return (0, n.jsx)(j, { item: s });
            default:
                return null != e.giftStyle
                    ? (0, n.jsx)(c.Z, {
                          defaultAnimationState: u.SR.ACTION,
                          idleAnimationState: u.SR.LOOP,
                          className: h.giftAnimation,
                          giftStyle: e.giftStyle,
                      })
                    : null;
        }
    };
