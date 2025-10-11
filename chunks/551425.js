n.d(t, { Z: () => x });
var i = n(951288);
n(647438);
var r = n(979554),
    l = n(442837),
    a = n(481060),
    s = n(1585),
    o = n(125988),
    u = n(479446),
    c = n(981632),
    d = n(876917),
    p = n(594174),
    f = n(583434),
    m = n(216541),
    g = n(22267),
    h = n(948067);
let b = a.EFr.SIZE_152,
    y = (0, s.y9)(b),
    O = (e) => {
        var t, n;
        let { item: r } = e,
            s = (0, l.e7)([p.default], () => p.default.getCurrentUser()),
            {
                avatarDecorationSrc: u,
                avatarPlaceholderSrc: c,
                eventHandlers: d,
            } = (0, o.Z)({
                user: s,
                avatarDecorationOverride: r,
                size: y,
            });
        return (0, i.jsx)("div", {
            className: h.avatarDecorationPreview,
            children: (0, i.jsx)(
                a.qEK,
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
                        src: c,
                        avatarDecoration: u,
                        size: b,
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
    v = (e) => {
        let { item: t } = e;
        return (0, i.jsx)("div", {
            className: h.profileEffectPreview,
            children: (0, i.jsx)(d.Z, {
                isHighlighted: !0,
                skuId: null == t ? void 0 : t.skuId,
            }),
        });
    },
    P = (e) => {
        let { item: t } = e;
        return (0, i.jsx)("div", {
            className: h.nameplatePreview,
            children: (0, i.jsx)(g.Z, {
                nameplate: t,
                className: h.nameplate,
                nameplatePreviewSize: "xlarge",
                isHighlighted: !0,
                showPlaceholderUser: !0,
            }),
        });
    },
    j = (e) => {
        let { product: t } = e;
        return (0, i.jsx)("div", {
            className: h.bundlePreview,
            children: (0, i.jsx)(m.d, {
                product: t,
                isPurchased: !1,
                isHighlighted: !1,
            }),
        });
    },
    x = (e) => {
        let { giftCode: t } = e,
            { product: n, isFetching: l } = (0, f.T)(t.skuId, !0);
        if (l || null == n)
            return (0, i.jsx)("div", {
                className: h.spinnerContainer,
                children: (0, i.jsx)(a.$jN, {}),
            });
        if (n.type === r.Z.BUNDLE) return 0 === n.items.length ? null : (0, i.jsx)(j, { product: n });
        let s = null == n ? void 0 : n.items[0];
        switch (null == s ? void 0 : s.type) {
            case r.Z.AVATAR_DECORATION:
                return (0, i.jsx)(O, { item: s });
            case r.Z.PROFILE_EFFECT:
                return (0, i.jsx)(v, { item: s });
            case r.Z.NAMEPLATE:
                return (0, i.jsx)(P, { item: s });
            default:
                return null != t.giftStyle
                    ? (0, i.jsx)(c.Z, {
                          defaultAnimationState: u.SR.ACTION,
                          idleAnimationState: u.SR.LOOP,
                          className: h.giftAnimation,
                          giftStyle: t.giftStyle,
                      })
                    : null;
        }
    };
