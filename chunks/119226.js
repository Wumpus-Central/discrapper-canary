n.d(t, { Z: () => L }), n(314940);
var r = n(951288);
n(647438);
var i = n(278074),
    a = n(979554),
    o = n(481060),
    s = n(1585),
    l = n(125988),
    c = n(583434),
    u = n(216541),
    d = n(22267),
    f = n(479446),
    _ = n(981632),
    p = n(731896),
    h = n(680295),
    m = n(848118),
    g = n(998502),
    E = n(987209),
    b = n(981631),
    y = n(388032),
    O = n(610868),
    v = n(241822);
function I(e, t, n) {
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
function T(e) {
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
                I(e, t, n[t]);
            });
    }
    return e;
}
function S(e, t) {
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
function A(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : S(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let C = g.ZP.getEnableHardwareAcceleration() ? o.Xo$ : o.qEK;
function N(e) {
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
        className: O.giftMainAnimationWrapper,
        children: (0, r.jsx)(
            C,
            A(T({}, i), {
                avatarDecoration: n,
                src: a,
                className: O.avatar,
                size: o.EFr.SIZE_152,
                "aria-label": y.intl.string(y.t.lqaIxI),
            }),
        ),
    });
}
function R(e) {
    var t;
    let { skuId: n } = e,
        i = null == (t = (0, p.V)(n)) ? void 0 : t.config;
    return (0, r.jsxs)("div", {
        className: O.profileEffectContainer,
        children: [
            (0, r.jsx)("img", {
                src: v,
                alt: null == i ? void 0 : i.accessibilityLabel,
                className: O.profileEffectBackground,
            }),
            (0, r.jsx)(h.Z, { skuId: n }),
        ],
    });
}
function P(e) {
    let { nameplate: t } = e;
    return (0, r.jsx)("div", {
        className: O.nameplateContainer,
        children: (0, r.jsx)(d.Z, {
            nameplate: t,
            className: O.nameplate,
            nameplatePreviewSize: "xlarge",
            isHighlighted: !0,
            showPlaceholderUser: !0,
        }),
    });
}
let D = (e) => {
        let { sku: t } = e,
            { selectedGiftStyle: n } = (0, E.wD)(),
            { product: o } = (0, c.T)(null == t ? void 0 : t.id),
            s = null == o ? void 0 : o.items[0];
        if ((null == o ? void 0 : o.type) === a.Z.BUNDLE)
            return (0, r.jsx)("div", {
                className: O.bundlePreviewWrapper,
                children: (0, r.jsx)(u.d, {
                    product: o,
                    isPurchased: !1,
                    isHighlighted: !1,
                }),
            });
        let l = (0, i.EQ)(s)
            .with({ type: a.Z.AVATAR_DECORATION }, (e) => (0, r.jsx)(N, { avatarDecoration: e }))
            .with({ type: a.Z.PROFILE_EFFECT }, (e) => (0, r.jsx)(R, { skuId: e.skuId }))
            .with({ type: a.Z.NAMEPLATE }, (e) => (0, r.jsx)(P, { nameplate: e }))
            .otherwise(() => null);
        return null != n && null == l
            ? (0, r.jsx)("div", {
                  className: O.giftMainAnimationWrapper,
                  children: (0, r.jsx)(_.Z, {
                      defaultAnimationState: f.SR.LOOP,
                      giftStyle: n,
                      shouldAnimate: !0,
                      className: O.__invalid_giftMainAnimation,
                  }),
              })
            : l;
    },
    w = (e) => {
        let { sku: t } = e;
        return (0, r.jsx)("div", {
            className: O.slayerStorefrontReviewImageWrapper,
            children: (0, r.jsx)(m.A, {
                className: O.slayerStorefrontReviewImage,
                sku: t,
            }),
        });
    };
function L(e) {
    let { sku: t } = e;
    return t.productLine === b.POd.COLLECTIBLES
        ? (0, r.jsx)(D, { sku: t })
        : t.productLine === b.POd.SOCIAL_LAYER_GAME_ITEM
          ? (0, r.jsx)(w, { sku: t })
          : null;
}
