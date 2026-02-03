r.r(t),
    r.d(t, {
        default: () => _,
    }),
    r(896048);
var i = r(627968),
    s = r(64700),
    n = r(92674),
    a = r(575593),
    l = r(334279),
    c = r(417597),
    o = r(397927),
    u = r(550111),
    d = r(170887),
    f = r(331402),
    p = r(287809),
    g = r(846957),
    h = r(929283),
    y = r(245068),
    m = r(158216),
    j = r(985018),
    b = r(243821),
    O = r(743102),
    v = r(497451),
    x = r(241988);

function P(e) {
    for (var t = 1; t < arguments.length; t++) {
        var r = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(r);
        "function" == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(r).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(r, e).enumerable;
                }),
            )),
            i.forEach(function (t) {
                var i;
                (i = r[t]),
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
}
let w = (e) => {
        let { product: t, itemConsumed: r, forCollectedModal: s } = e,
            n = (0, d.A)({
                location: "CollectiblesProductPreview",
            }),
            m = (0, c.bG)([p.default], () => p.default.getCurrentUser());
        if (null == m) return null;
        let [P] = t.items;
        if (t.type === a.R.PROFILE_EFFECT)
            return (0, i.jsx)("div", {
                className: b.NM,
                children: (0, i.jsx)(f.A, {
                    skuId: P.skuId,
                    delayProfileEffectIntro: s,
                    withScaleAnimation: s,
                }),
            });
        if (t.type === a.R.AVATAR_DECORATION)
            return (0, i.jsx)(h.i, {
                item: P,
                user: m,
                avatarSize: o._3J.SIZE_120,
                isHighlighted: !0,
            });
        if (t.type === a.R.NAMEPLATE)
            return (0, i.jsx)("div", {
                className: b.qF,
                children: (0, i.jsx)(u.A, {
                    nameplate: P,
                    user: m,
                    nameplatePreviewSize: "large",
                    isHighlighted: !0,
                }),
            });
        if (t.type === a.R.BUNDLE)
            return (0, i.jsx)("div", {
                className: b.hT,
                children: (0, i.jsx)(y.X, {
                    product: t,
                    user: m,
                    isHighlighted: !0,
                    forCollectedModal: s,
                }),
            });
        if (t.type === a.R.EXTERNAL_SKU) {
            if (Object.values(l.j).includes(t.skuId))
                if (r)
                    return (0, i.jsx)("img", {
                        src: n ? x : v,
                        alt: j.intl.string(j.t.t0xkSB),
                        style: {
                            width: "100%",
                        },
                    });
                else
                    return (0, i.jsx)("img", {
                        src: O,
                        alt: j.intl.string(j.t.g5W1g8),
                    });
            return (0, i.jsx)(g.B, {
                product: t,
            });
        }
        return null;
    },
    E = (e) => {
        let { reducedMotion: t, displayOptions: r } = e,
            [a, l] = s.useState(!1),
            c = (0, o.zhh)({
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
                onRest: () => setTimeout(() => l(!0), 100),
            }),
            u = (0, o.zhh)({
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
                reverse: a,
            }),
            d = (0, o.zhh)(
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
        return (0, i.jsxs)(i.Fragment, {
            children: [
                (0, i.jsx)(n.animated.div, {
                    className: b.VH,
                    style: c,
                    children: (0, i.jsx)(w, P({}, e)),
                }),
                (0, i.jsx)(n.animated.div, {
                    className: b.VH,
                    style: t ? d : u,
                    children: (0, i.jsx)("img", {
                        src: r.getSrc(),
                        style: r.style,
                        alt: "",
                        "aria-hidden": "true",
                    }),
                }),
            ],
        });
    };

function _(e) {
    var t, r;
    let s = (0, m.K9)(e.product.categorySkuId);
    return null != s
        ? (0, i.jsx)(
              E,
              ((t = P({}, e)),
              (r = r =
                  {
                      displayOptions: s,
                  }),
              Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r))
                  : (function (e, t) {
                        var r = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var i = Object.getOwnPropertySymbols(e);
                            r.push.apply(r, i);
                        }
                        return r;
                    })(Object(r)).forEach(function (e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e));
                    }),
              t),
          )
        : (0, i.jsx)(w, P({}, e));
}
