n.d(t, { Z: () => N }), n(627341);
var r = n(200651);
n(192379);
var i = n(278074),
    o = n(979554),
    a = n(481060),
    s = n(1585),
    l = n(125988),
    c = n(583434),
    u = n(479446),
    d = n(981632),
    f = n(731896),
    _ = n(680295),
    p = n(998502),
    h = n(987209),
    m = n(388032),
    g = n(563967),
    E = n(241822);
function b(e, t, n) {
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
function y(e) {
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
                b(e, t, n[t]);
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
function O(e, t) {
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
let I = p.ZP.getEnableHardwareAcceleration() ? a.Xo$ : a.qEK;
function S(e) {
    let { avatarDecoration: t } = e,
        {
            avatarDecorationSrc: n,
            eventHandlers: i,
            avatarPlaceholderSrc: o
        } = (0, l.Z)({
            avatarDecorationOverride: t,
            size: (0, s.y9)(a.EFr.SIZE_152)
        });
    return (0, r.jsx)('div', {
        className: g.giftMainAnimationWrapper,
        children: (0, r.jsx)(
            I,
            O(y({}, i), {
                avatarDecoration: n,
                src: o,
                className: g.avatar,
                size: a.EFr.SIZE_152,
                'aria-label': m.NW.string(m.t.lqaIxM)
            })
        )
    });
}
function T(e) {
    var t;
    let { id: n } = e,
        i = null == (t = (0, f.V)(n)) ? void 0 : t.config;
    return (0, r.jsxs)('div', {
        className: g.profileEffectContainer,
        children: [
            (0, r.jsx)('img', {
                src: E,
                alt: null == i ? void 0 : i.accessibilityLabel,
                className: g.profileEffectBackground
            }),
            (0, r.jsx)(_.Z, { profileEffectId: n })
        ]
    });
}
function N(e) {
    let { sku: t } = e,
        { selectedGiftStyle: n } = (0, h.wD)(),
        { product: a } = (0, c.T)(null == t ? void 0 : t.id),
        s = null == a ? void 0 : a.items[0],
        l = (0, i.EQ)(s)
            .with({ type: o.Z.AVATAR_DECORATION }, (e) => (0, r.jsx)(S, { avatarDecoration: e }))
            .with({ type: o.Z.PROFILE_EFFECT }, (e) => (0, r.jsx)(T, { id: e.id }))
            .otherwise(() => null);
    return null != n && null == l
        ? (0, r.jsx)('div', {
              className: g.giftMainAnimationWrapper,
              children: (0, r.jsx)(d.Z, {
                  defaultAnimationState: u.SR.LOOP,
                  giftStyle: n,
                  shouldAnimate: !0,
                  className: g.__invalid_giftMainAnimation
              })
          })
        : l;
}
