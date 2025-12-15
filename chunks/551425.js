n.d(t, { Z: () => S });
var i = n(54381);
n(473749);
var r = n(979554),
    l = n(442837),
    s = n(481060),
    a = n(1585),
    o = n(125988),
    c = n(566697),
    u = n(479446),
    d = n(981632),
    f = n(876917),
    p = n(594174),
    m = n(583434),
    h = n(216541),
    b = n(411698);
let g = s.EFr.SIZE_152,
    y = (0, a.y9)(g),
    O = (e) => {
        var t, n;
        let { item: r } = e,
            a = (0, l.e7)([p.default], () => p.default.getCurrentUser()),
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
            className: b.avatarDecorationPreview,
            children: (0, i.jsx)(
                s.qEK,
                ((t = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            i = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols &&
                            (i = i.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                }),
                            )),
                            i.forEach(function (t) {
                                var i;
                                (i = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: i,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0,
                                          })
                                        : (e[t] = i);
                            });
                    }
                    return e;
                })({}, d)),
                (n = n =
                    {
                        "aria-label": r.label,
                        src: u,
                        avatarDecoration: c,
                        size: g,
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var i = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, i);
                          }
                          return n;
                      })(Object(n)).forEach(function (e) {
                          Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                      }),
                t),
            ),
        });
    },
    j = (e) => {
        let { item: t } = e;
        return (0, i.jsx)("div", {
            className: b.profileEffectPreview,
            children: (0, i.jsx)(f.Z, {
                isHighlighted: !0,
                skuId: null == t ? void 0 : t.skuId,
            }),
        });
    },
    P = (e) => {
        let { item: t } = e;
        return (0, i.jsx)("div", {
            className: b.nameplatePreview,
            children: (0, i.jsx)(c.Z, {
                nameplate: t,
                className: b.nameplate,
                nameplatePreviewSize: "xlarge",
                isHighlighted: !0,
                showPlaceholderUser: !0,
            }),
        });
    },
    v = (e) => {
        let { product: t } = e;
        return (0, i.jsx)("div", {
            className: b.bundlePreview,
            children: (0, i.jsx)(h.d, {
                product: t,
                isHighlighted: !1,
            }),
        });
    },
    S = (e) => {
        let { giftCode: t } = e,
            { product: n, isFetching: l } = (0, m.T)(t.skuId, !0);
        if (l || null == n)
            return (0, i.jsx)("div", {
                className: b.spinnerContainer,
                children: (0, i.jsx)(s.$jN, {}),
            });
        if (n.type === r.Z.BUNDLE) return 0 === n.items.length ? null : (0, i.jsx)(v, { product: n });
        let a = null == n ? void 0 : n.items[0];
        switch (null == a ? void 0 : a.type) {
            case r.Z.AVATAR_DECORATION:
                return (0, i.jsx)(O, { item: a });
            case r.Z.PROFILE_EFFECT:
                return (0, i.jsx)(j, { item: a });
            case r.Z.NAMEPLATE:
                return (0, i.jsx)(P, { item: a });
            default:
                return null != t.giftStyle
                    ? (0, i.jsx)(d.Z, {
                          defaultAnimationState: u.SR.ACTION,
                          idleAnimationState: u.SR.LOOP,
                          className: b.giftAnimation,
                          giftStyle: t.giftStyle,
                      })
                    : null;
        }
    };
