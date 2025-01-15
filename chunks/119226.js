t.d(n, {
    Z: function () {
        return y;
    }
}),
    t(627341);
var i = t(200651);
t(192379);
var l = t(278074),
    r = t(979554),
    s = t(481060),
    a = t(1585),
    c = t(125988),
    o = t(583434),
    u = t(479446),
    d = t(981632),
    m = t(731896),
    p = t(680295),
    x = t(998502),
    h = t(987209),
    f = t(388032),
    v = t(975765),
    g = t(241822);
let S = x.ZP.getEnableHardwareAcceleration() ? s.AnimatedAvatar : s.Avatar;
function E(e) {
    let { avatarDecoration: n } = e,
        {
            avatarDecorationSrc: t,
            eventHandlers: l,
            avatarPlaceholderSrc: r
        } = (0, c.Z)({
            avatarDecorationOverride: n,
            size: (0, a.y9)(s.AvatarSizes.SIZE_152)
        });
    return (0, i.jsx)('div', {
        className: v.giftMainAnimationWrapper,
        children: (0, i.jsx)(S, {
            ...l,
            avatarDecoration: t,
            src: r,
            className: v.avatar,
            size: s.AvatarSizes.SIZE_152,
            'aria-label': f.intl.string(f.t.lqaIxM)
        })
    });
}
function j(e) {
    var n;
    let { id: t } = e,
        l = null === (n = (0, m.V)(t)) || void 0 === n ? void 0 : n.config;
    return (0, i.jsxs)('div', {
        className: v.profileEffectContainer,
        children: [
            (0, i.jsx)('img', {
                src: g,
                alt: null == l ? void 0 : l.accessibilityLabel,
                className: v.profileEffectBackground
            }),
            (0, i.jsx)(p.Z, { profileEffectId: t })
        ]
    });
}
function y(e) {
    let { sku: n } = e,
        { selectedGiftStyle: t } = (0, h.wD)(),
        { product: s } = (0, o.T)(null == n ? void 0 : n.id),
        a = null == s ? void 0 : s.items[0],
        c = (0, l.EQ)(a)
            .with({ type: r.Z.AVATAR_DECORATION }, (e) => (0, i.jsx)(E, { avatarDecoration: e }))
            .with({ type: r.Z.PROFILE_EFFECT }, (e) => (0, i.jsx)(j, { id: e.id }))
            .otherwise(() => null);
    return null != t && null == c
        ? (0, i.jsx)('div', {
              className: v.giftMainAnimationWrapper,
              children: (0, i.jsx)(d.Z, {
                  defaultAnimationState: u.SR.LOOP,
                  giftStyle: t,
                  shouldAnimate: !0,
                  className: v.__invalid_giftMainAnimation
              })
          })
        : c;
}
