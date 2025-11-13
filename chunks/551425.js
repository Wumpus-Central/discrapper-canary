n.d(t, { Z: () => x });
var r = n(951288);
n(647438);
var i = n(979554),
    s = n(442837),
    l = n(481060),
    a = n(1585),
    o = n(125988),
    c = n(566697),
    u = n(479446),
    d = n(981632),
    f = n(876917),
    p = n(594174),
    h = n(583434),
    m = n(216541),
    g = n(948067);
let b = l.EFr.SIZE_152,
    y = (0, a.y9)(b),
    O = (e) => {
        var t, n;
        let { item: i } = e,
            a = (0, s.e7)([p.default], () => p.default.getCurrentUser()),
            {
                avatarDecorationSrc: c,
                avatarPlaceholderSrc: u,
                eventHandlers: d,
            } = (0, o.Z)({
                user: a,
                avatarDecorationOverride: i,
                size: y,
            });
        return (0, r.jsx)("div", {
            className: g.avatarDecorationPreview,
            children: (0, r.jsx)(
                l.qEK,
                ((t = (function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = null != arguments[t] ? arguments[t] : {},
                            r = Object.keys(n);
                        "function" == typeof Object.getOwnPropertySymbols &&
                            (r = r.concat(
                                Object.getOwnPropertySymbols(n).filter(function (e) {
                                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                                }),
                            )),
                            r.forEach(function (t) {
                                var r;
                                (r = n[t]),
                                    t in e
                                        ? Object.defineProperty(e, t, {
                                              value: r,
                                              enumerable: !0,
                                              configurable: !0,
                                              writable: !0,
                                          })
                                        : (e[t] = r);
                            });
                    }
                    return e;
                })({}, d)),
                (n = n =
                    {
                        "aria-label": i.label,
                        src: u,
                        avatarDecoration: c,
                        size: b,
                    }),
                Object.getOwnPropertyDescriptors
                    ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n))
                    : (function (e, t) {
                          var n = Object.keys(e);
                          if (Object.getOwnPropertySymbols) {
                              var r = Object.getOwnPropertySymbols(e);
                              n.push.apply(n, r);
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
        return (0, r.jsx)("div", {
            className: g.profileEffectPreview,
            children: (0, r.jsx)(f.Z, {
                isHighlighted: !0,
                skuId: null == t ? void 0 : t.skuId,
            }),
        });
    },
    P = (e) => {
        let { item: t } = e;
        return (0, r.jsx)("div", {
            className: g.nameplatePreview,
            children: (0, r.jsx)(c.Z, {
                nameplate: t,
                className: g.nameplate,
                nameplatePreviewSize: "xlarge",
                isHighlighted: !0,
                showPlaceholderUser: !0,
            }),
        });
    },
    v = (e) => {
        let { product: t } = e;
        return (0, r.jsx)("div", {
            className: g.bundlePreview,
            children: (0, r.jsx)(m.d, {
                product: t,
                isPurchased: !1,
                isHighlighted: !1,
            }),
        });
    },
    x = (e) => {
        let { giftCode: t } = e,
            { product: n, isFetching: s } = (0, h.T)(t.skuId, !0);
        if (s || null == n)
            return (0, r.jsx)("div", {
                className: g.spinnerContainer,
                children: (0, r.jsx)(l.$jN, {}),
            });
        if (n.type === i.Z.BUNDLE) return 0 === n.items.length ? null : (0, r.jsx)(v, { product: n });
        let a = null == n ? void 0 : n.items[0];
        switch (null == a ? void 0 : a.type) {
            case i.Z.AVATAR_DECORATION:
                return (0, r.jsx)(O, { item: a });
            case i.Z.PROFILE_EFFECT:
                return (0, r.jsx)(j, { item: a });
            case i.Z.NAMEPLATE:
                return (0, r.jsx)(P, { item: a });
            default:
                return null != t.giftStyle
                    ? (0, r.jsx)(d.Z, {
                          defaultAnimationState: u.SR.ACTION,
                          idleAnimationState: u.SR.LOOP,
                          className: g.giftAnimation,
                          giftStyle: t.giftStyle,
                      })
                    : null;
        }
    };
