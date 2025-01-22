r.d(n, {
    Z: function () {
        return S;
    }
});
var i = r(627341);
var a = r(200651);
r(192379);
var o = r(278074),
    s = r(979554),
    l = r(481060),
    u = r(1585),
    c = r(125988),
    d = r(583434),
    f = r(479446),
    p = r(981632),
    h = r(731896),
    _ = r(680295),
    m = r(998502),
    g = r(987209),
    E = r(388032),
    v = r(975765),
    y = r(241822);
let b = m.ZP.getEnableHardwareAcceleration() ? l.AnimatedAvatar : l.Avatar;
function I(e) {
    let { avatarDecoration: n } = e,
        {
            avatarDecorationSrc: r,
            eventHandlers: i,
            avatarPlaceholderSrc: o
        } = (0, c.Z)({
            avatarDecorationOverride: n,
            size: (0, u.y9)(l.AvatarSizes.SIZE_152)
        });
    return (0, a.jsx)('div', {
        className: v.giftMainAnimationWrapper,
        children: (0, a.jsx)(b, {
            ...i,
            avatarDecoration: r,
            src: o,
            className: v.avatar,
            size: l.AvatarSizes.SIZE_152,
            'aria-label': E.intl.string(E.t.lqaIxM)
        })
    });
}
function T(e) {
    var n;
    let { id: r } = e,
        i = null === (n = (0, h.V)(r)) || void 0 === n ? void 0 : n.config;
    return (0, a.jsxs)('div', {
        className: v.profileEffectContainer,
        children: [
            (0, a.jsx)('img', {
                src: y,
                alt: null == i ? void 0 : i.accessibilityLabel,
                className: v.profileEffectBackground
            }),
            (0, a.jsx)(_.Z, { profileEffectId: r })
        ]
    });
}
function S(e) {
    let { sku: n } = e,
        { selectedGiftStyle: r } = (0, g.wD)(),
        { product: i } = (0, d.T)(null == n ? void 0 : n.id),
        l = null == i ? void 0 : i.items[0],
        u = (0, o.EQ)(l)
            .with({ type: s.Z.AVATAR_DECORATION }, (e) => (0, a.jsx)(I, { avatarDecoration: e }))
            .with({ type: s.Z.PROFILE_EFFECT }, (e) => (0, a.jsx)(T, { id: e.id }))
            .otherwise(() => null);
    return null != r && null == u
        ? (0, a.jsx)('div', {
              className: v.giftMainAnimationWrapper,
              children: (0, a.jsx)(p.Z, {
                  defaultAnimationState: f.SR.LOOP,
                  giftStyle: r,
                  shouldAnimate: !0,
                  className: v.__invalid_giftMainAnimation
              })
          })
        : u;
}
