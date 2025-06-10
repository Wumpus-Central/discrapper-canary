n.d(t, { Z: () => C }), n(314940);
var r = n(255367);
n(73800);
var i = n(278074),
    a = n(979554),
    o = n(481060),
    s = n(1585),
    l = n(125988),
    c = n(583434),
    u = n(22267),
    d = n(479446),
    f = n(981632),
    _ = n(731896),
    p = n(680295),
    h = n(998502),
    m = n(987209),
    g = n(388032),
    E = n(563967),
    b = n(241822);
function y(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function O(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                y(e, t, n[t]);
            });
    }
    return e;
}
function v(e, t) {
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
function I(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : v(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let T = h.ZP.getEnableHardwareAcceleration() ? o.Xo$ : o.qEK;
function S(e) {
    let { avatarDecoration: t } = e,
        {
            avatarDecorationSrc: n,
            eventHandlers: i,
            avatarPlaceholderSrc: a
        } = (0, l.Z)({
            avatarDecorationOverride: t,
            size: (0, s.y9)(o.EFr.SIZE_152)
        });
    return (0, r.jsx)('div', {
        className: E.giftMainAnimationWrapper,
        children: (0, r.jsx)(
            T,
            I(O({}, i), {
                avatarDecoration: n,
                src: a,
                className: E.avatar,
                size: o.EFr.SIZE_152,
                'aria-label': g.intl.string(g.t.lqaIxM)
            })
        )
    });
}
function A(e) {
    var t;
    let { id: n } = e,
        i = null == (t = (0, _.V)(n)) ? void 0 : t.config;
    return (0, r.jsxs)('div', {
        className: E.profileEffectContainer,
        children: [
            (0, r.jsx)('img', {
                src: b,
                alt: null == i ? void 0 : i.accessibilityLabel,
                className: E.profileEffectBackground
            }),
            (0, r.jsx)(p.Z, { profileEffectId: n })
        ]
    });
}
function N(e) {
    let { nameplate: t } = e;
    return (0, r.jsx)('div', {
        className: E.nameplateContainer,
        children: (0, r.jsx)(u.Z, {
            nameplate: t,
            className: E.nameplate,
            nameplatePreviewSize: 'large',
            isHighlighted: !0,
            showPlaceholderUser: !0
        })
    });
}
function C(e) {
    let { sku: t } = e,
        { selectedGiftStyle: n } = (0, m.wD)(),
        { product: o } = (0, c.T)(null == t ? void 0 : t.id),
        s = null == o ? void 0 : o.items[0],
        l = (0, i.EQ)(s)
            .with({ type: a.Z.AVATAR_DECORATION }, (e) => (0, r.jsx)(S, { avatarDecoration: e }))
            .with({ type: a.Z.PROFILE_EFFECT }, (e) => (0, r.jsx)(A, { id: e.id }))
            .with({ type: a.Z.NAMEPLATE }, (e) => (0, r.jsx)(N, { nameplate: e }))
            .otherwise(() => null);
    return null != n && null == l
        ? (0, r.jsx)('div', {
              className: E.giftMainAnimationWrapper,
              children: (0, r.jsx)(f.Z, {
                  defaultAnimationState: d.SR.LOOP,
                  giftStyle: n,
                  shouldAnimate: !0,
                  className: E.__invalid_giftMainAnimation
              })
          })
        : l;
}
