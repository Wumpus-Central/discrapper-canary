n.d(t, { Z: () => D }), n(314940);
var r = n(54381);
n(473749);
var i = n(278074),
    a = n(979554),
    o = n(481060),
    s = n(1585),
    l = n(125988),
    c = n(583434),
    u = n(216541),
    d = n(566697),
    f = n(479446),
    p = n(981632),
    _ = n(731896),
    m = n(680295),
    h = n(998502),
    g = n(987209),
    E = n(981631),
    b = n(388032),
    y = n(610868),
    O = n(241822);
function v(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function S(e) {
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
                v(e, t, n[t]);
            });
    }
    return e;
}
function I(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function T(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : I(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let C = h.ZP.getEnableHardwareAcceleration() ? o.Xo$ : o.qEK;
function A(e) {
    let { avatarDecoration: t } = e,
        {
            avatarDecorationSrc: n,
            eventHandlers: i,
            avatarPlaceholderSrc: a,
        } = (0, l.Z)({
            avatarDecorationOverride: t,
            size: (0, s.y9)(o.EFr.SIZE_152),
        });
    return (0, r.jsx)("div", {
        className: y.giftMainAnimationWrapper,
        children: (0, r.jsx)(
            C,
            T(S({}, i), {
                avatarDecoration: n,
                src: a,
                className: y.avatar,
                size: o.EFr.SIZE_152,
                "aria-label": b.intl.string(b.t.lqaIxI),
            }),
        ),
    });
}
function N(e) {
    var t;
    let { skuId: n } = e,
        i = null == (t = (0, _.V)(n)) ? void 0 : t.config;
    return (0, r.jsxs)("div", {
        className: y.profileEffectContainer,
        children: [
            (0, r.jsx)("img", {
                src: O,
                alt: null == i ? void 0 : i.accessibilityLabel,
                className: y.profileEffectBackground,
            }),
            (0, r.jsx)(m.Z, { skuId: n }),
        ],
    });
}
function P(e) {
    let { nameplate: t } = e;
    return (0, r.jsx)("div", {
        className: y.nameplateContainer,
        children: (0, r.jsx)(d.Z, {
            nameplate: t,
            className: y.nameplate,
            nameplatePreviewSize: "xlarge",
            isHighlighted: !0,
            showPlaceholderUser: !0,
        }),
    });
}
let R = (e) => {
    let { sku: t } = e,
        { selectedGiftStyle: n } = (0, g.wD)(),
        { product: o } = (0, c.T)(null == t ? void 0 : t.id),
        s = null == o ? void 0 : o.items[0];
    if ((null == o ? void 0 : o.type) === a.Z.BUNDLE)
        return (0, r.jsx)("div", {
            className: y.bundlePreviewWrapper,
            children: (0, r.jsx)(u.d, {
                product: o,
                isPurchased: !1,
                isHighlighted: !1,
            }),
        });
    let l = (0, i.EQ)(s)
        .with({ type: a.Z.AVATAR_DECORATION }, (e) => (0, r.jsx)(A, { avatarDecoration: e }))
        .with({ type: a.Z.PROFILE_EFFECT }, (e) => (0, r.jsx)(N, { skuId: e.skuId }))
        .with({ type: a.Z.NAMEPLATE }, (e) => (0, r.jsx)(P, { nameplate: e }))
        .otherwise(() => null);
    return null != n && null == l
        ? (0, r.jsx)("div", {
              className: y.giftMainAnimationWrapper,
              children: (0, r.jsx)(p.Z, {
                  defaultAnimationState: f.SR.LOOP,
                  giftStyle: n,
                  shouldAnimate: !0,
                  className: y.__invalid_giftMainAnimation,
              }),
          })
        : l;
};
function D(e) {
    let { sku: t } = e;
    return t.productLine === E.POd.COLLECTIBLES ? (0, r.jsx)(R, { sku: t }) : null;
}
