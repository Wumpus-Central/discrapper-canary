r.r(t),
    r.d(t, {
        default: () => N,
    }),
    r(896048);
var n = r(627968),
    i = r(64700),
    s = r(284009),
    a = r.n(s),
    l = r(108531),
    o = r(575593),
    c = r(334279),
    u = r(417597),
    d = r(397927),
    f = r(550111),
    p = r(170887),
    h = r(331402),
    g = r(287809),
    m = r(846957),
    y = r(929283),
    j = r(245068),
    b = r(158216),
    O = r(985018),
    v = r(243821),
    x = r(743102),
    P = r(497451),
    w = r(241988);

function E(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            n = Object.keys(r);
        "function" == typeof Object.getOwnPropertySymbols &&
            (n = n.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                }),
            )),
            n.forEach(function (t) {
                var n;
                (n = r[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: n,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = n);
            });
    }
    return e;
}
let S = (e) => {
        let { product: t, itemConsumed: r, forCollectedModal: i } = e,
            [s] = t.items,
            l = (0, u.bG)([g.default], () => {
                let e = g.default.getCurrentUser();
                return a()(null != e, "User cannot be undefined"), e;
            }),
            b = Object.values(c.j).includes(t.skuId),
            E = (0, p.A)({
                location: "CollectiblesProductPreview",
            });
        if (t.type === o.R.PROFILE_EFFECT)
            return (0, n.jsx)("div", {
                className: v.NM,
                children: (0, n.jsx)(h.A, {
                    skuId: s.skuId,
                    delayProfileEffectIntro: i,
                    withScaleAnimation: i,
                }),
            });
        if (t.type === o.R.AVATAR_DECORATION)
            return (0, n.jsx)(y.i, {
                item: s,
                user: l,
                avatarSize: d._3J.SIZE_120,
                isHighlighted: !0,
            });
        if (t.type === o.R.NAMEPLATE)
            return (0, n.jsx)("div", {
                className: v.qF,
                children: (0, n.jsx)(f.A, {
                    nameplate: s,
                    user: l,
                    nameplatePreviewSize: "large",
                    isHighlighted: !0,
                }),
            });
        if (t.type === o.R.BUNDLE)
            return (0, n.jsx)("div", {
                className: v.hT,
                children: (0, n.jsx)(j.X, {
                    product: t,
                    user: l,
                    isHighlighted: !0,
                    forCollectedModal: i,
                }),
            });
        if (t.type === o.R.EXTERNAL_SKU) {
            if (b)
                if (r)
                    return (0, n.jsx)("img", {
                        src: E ? w : P,
                        alt: O.intl.string(O.t.t0xkSB),
                        style: {
                            width: "100%",
                        },
                    });
                else
                    return (0, n.jsx)("img", {
                        src: x,
                        alt: O.intl.string(O.t.g5W1g8),
                    });
            return (0, n.jsx)(m.B, {
                product: t,
            });
        }
        return null;
    },
    k = (e) => {
        let { reducedMotion: t, displayOptions: r } = e,
            [s, a] = i.useState(!1),
            o = (0, d.zhh)({
                from: {
                    transform: "translateX(100%)",
                    right: "-100%",
                },
                to: {
                    transform: "translateX(50%)",
                    right: "50%",
                },
                config: {
                    duration: 1550,
                },
                onRest: () => setTimeout(() => a(!0), 100),
            }),
            c = (0, d.zhh)({
                from: {
                    transform: "translateX(100%)",
                    right: "-100%",
                },
                to: {
                    transform: "translateX(50%)",
                    right: "50%",
                },
                config: {
                    duration: 1550,
                },
                reverse: s,
            }),
            u = (0, d.zhh)(
                {
                    from: {
                        transform: "translateX(50%)",
                        right: "50%",
                        opacity: 1,
                    },
                    to: {
                        transform: "translateX(50%)",
                        right: "50%",
                        opacity: 0,
                    },
                    config: {
                        duration: 300,
                    },
                    delay: 600,
                },
                "animate-always",
            );
        return (0, n.jsxs)(n.Fragment, {
            children: [
                (0, n.jsx)(l.animated.div, {
                    className: v.VH,
                    style: o,
                    children: (0, n.jsx)(S, E({}, e)),
                }),
                (0, n.jsx)(l.animated.div, {
                    className: v.VH,
                    style: t ? u : c,
                    children: (0, n.jsx)("img", {
                        src: r.getSrc(),
                        style: r.style,
                        alt: "",
                        "aria-hidden": "true",
                    }),
                }),
            ],
        });
    };

function N(e) {
    var t, r;
    let i = (0, b.K9)(e.product.categorySkuId);
    return null != i
        ? (0, n.jsx)(
              k,
              ((t = E({}, e)),
              (r = r =
                  {
                      displayOptions: i,
                  }),
              Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
                  : (function (e, t) {
                        var r = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var n = Object.getOwnPropertySymbols(e);
                            r.push.apply(r, n);
                        }
                        return r;
                    })(Object(r)).forEach(function (e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
                    }),
              t),
          )
        : (0, n.jsx)(S, E({}, e));
}
