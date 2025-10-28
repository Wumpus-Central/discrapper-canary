n.d(e, { Z: () => x });
var i = n(951288);
n(647438);
var r = n(979554),
    s = n(442837),
    l = n(481060),
    a = n(1585),
    o = n(125988),
    c = n(566697),
    u = n(479446),
    d = n(981632),
    p = n(876917),
    f = n(594174),
    h = n(583434),
    m = n(216541),
    g = n(948067);
let b = l.EFr.SIZE_152,
    y = (0, a.y9)(b),
    O = (t) => {
        var e, n;
        let { item: r } = t,
            a = (0, s.e7)([f.default], () => f.default.getCurrentUser()),
            {
                avatarDecorationSrc: c,
                avatarPlaceholderSrc: u,
                eventHandlers: d,
            } = (0, o.Z)({
                user: a,
                avatarDecorationOverride: r,
                size: y,
            });
        return (0, i.jsx)("div", {
            className: g.avatarDecorationPreview,
            children: (0, i.jsx)(
                l.qEK,
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
                        src: u,
                        avatarDecoration: c,
                        size: b,
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
    j = (t) => {
        let { item: e } = t;
        return (0, i.jsx)("div", {
            className: g.profileEffectPreview,
            children: (0, i.jsx)(p.Z, {
                isHighlighted: !0,
                skuId: null == e ? void 0 : e.skuId,
            }),
        });
    },
    v = (t) => {
        let { item: e } = t;
        return (0, i.jsx)("div", {
            className: g.nameplatePreview,
            children: (0, i.jsx)(c.Z, {
                nameplate: e,
                className: g.nameplate,
                nameplatePreviewSize: "xlarge",
                isHighlighted: !0,
                showPlaceholderUser: !0,
            }),
        });
    },
    P = (t) => {
        let { product: e } = t;
        return (0, i.jsx)("div", {
            className: g.bundlePreview,
            children: (0, i.jsx)(m.d, {
                product: e,
                isPurchased: !1,
                isHighlighted: !1,
            }),
        });
    },
    x = (t) => {
        let { giftCode: e } = t,
            { product: n, isFetching: s } = (0, h.T)(e.skuId, !0);
        if (s || null == n)
            return (0, i.jsx)("div", {
                className: g.spinnerContainer,
                children: (0, i.jsx)(l.$jN, {}),
            });
        if (n.type === r.Z.BUNDLE) return 0 === n.items.length ? null : (0, i.jsx)(P, { product: n });
        let a = null == n ? void 0 : n.items[0];
        switch (null == a ? void 0 : a.type) {
            case r.Z.AVATAR_DECORATION:
                return (0, i.jsx)(O, { item: a });
            case r.Z.PROFILE_EFFECT:
                return (0, i.jsx)(j, { item: a });
            case r.Z.NAMEPLATE:
                return (0, i.jsx)(v, { item: a });
            default:
                return null != e.giftStyle
                    ? (0, i.jsx)(d.Z, {
                          defaultAnimationState: u.SR.ACTION,
                          idleAnimationState: u.SR.LOOP,
                          className: g.giftAnimation,
                          giftStyle: e.giftStyle,
                      })
                    : null;
        }
    };
