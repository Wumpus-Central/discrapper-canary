n.d(t, { Z: () => R }), n(314940);
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
    m = n(998502),
    g = n(987209),
    E = n(388032),
    b = n(610868),
    y = n(241822);
function O(e, t, n) {
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
function v(e) {
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
                O(e, t, n[t]);
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
let S = m.ZP.getEnableHardwareAcceleration() ? o.Xo$ : o.qEK;
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
        className: b.giftMainAnimationWrapper,
        children: (0, r.jsx)(
            S,
            T(v({}, i), {
                avatarDecoration: n,
                src: a,
                className: b.avatar,
                size: o.EFr.SIZE_152,
                "aria-label": E.intl.string(E.t.lqaIxM),
            }),
        ),
    });
}
function C(e) {
    var t;
    let { skuId: n } = e,
        i = null == (t = (0, p.V)(n)) ? void 0 : t.config;
    return (0, r.jsxs)("div", {
        className: b.profileEffectContainer,
        children: [
            (0, r.jsx)("img", {
                src: y,
                alt: null == i ? void 0 : i.accessibilityLabel,
                className: b.profileEffectBackground,
            }),
            (0, r.jsx)(h.Z, { skuId: n }),
        ],
    });
}
function N(e) {
    let { nameplate: t } = e;
    return (0, r.jsx)("div", {
        className: b.nameplateContainer,
        children: (0, r.jsx)(d.Z, {
            nameplate: t,
            className: b.nameplate,
            nameplatePreviewSize: "xlarge",
            isHighlighted: !0,
            showPlaceholderUser: !0,
        }),
    });
}
function R(e) {
    let { sku: t } = e,
        { selectedGiftStyle: n } = (0, g.wD)(),
        { product: o } = (0, c.T)(null == t ? void 0 : t.id),
        s = null == o ? void 0 : o.items[0];
    if ((null == o ? void 0 : o.type) === a.Z.BUNDLE)
        return (0, r.jsx)("div", {
            className: b.bundlePreviewWrapper,
            children: (0, r.jsx)(u.d, {
                product: o,
                isPurchased: !1,
                isHighlighted: !1,
            }),
        });
    let l = (0, i.EQ)(s)
        .with({ type: a.Z.AVATAR_DECORATION }, (e) => (0, r.jsx)(A, { avatarDecoration: e }))
        .with({ type: a.Z.PROFILE_EFFECT }, (e) => (0, r.jsx)(C, { skuId: e.skuId }))
        .with({ type: a.Z.NAMEPLATE }, (e) => (0, r.jsx)(N, { nameplate: e }))
        .otherwise(() => null);
    return null != n && null == l
        ? (0, r.jsx)("div", {
              className: b.giftMainAnimationWrapper,
              children: (0, r.jsx)(_.Z, {
                  defaultAnimationState: f.SR.LOOP,
                  giftStyle: n,
                  shouldAnimate: !0,
                  className: b.__invalid_giftMainAnimation,
              }),
          })
        : l;
}
