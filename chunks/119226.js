n.d(t, { Z: () => T }), n(627341);
var i = n(200651);
n(192379);
var r = n(278074),
    a = n(979554),
    s = n(481060),
    o = n(1585),
    l = n(125988),
    u = n(583434),
    c = n(479446),
    d = n(981632),
    f = n(731896),
    _ = n(680295),
    p = n(998502),
    h = n(987209),
    m = n(388032),
    g = n(46078),
    E = n(241822);
let v = p.ZP.getEnableHardwareAcceleration() ? s.Xo$ : s.qEK;
function y(e) {
    let { avatarDecoration: t } = e,
        {
            avatarDecorationSrc: n,
            eventHandlers: r,
            avatarPlaceholderSrc: a
        } = (0, l.Z)({
            avatarDecorationOverride: t,
            size: (0, o.y9)(s.EFr.SIZE_152)
        });
    return (0, i.jsx)('div', {
        className: g.giftMainAnimationWrapper,
        children: (0, i.jsx)(v, {
            ...r,
            avatarDecoration: n,
            src: a,
            className: g.avatar,
            size: s.EFr.SIZE_152,
            'aria-label': m.intl.string(m.t.lqaIxM)
        })
    });
}
function I(e) {
    var t;
    let { id: n } = e,
        r = null === (t = (0, f.V)(n)) || void 0 === t ? void 0 : t.config;
    return (0, i.jsxs)('div', {
        className: g.profileEffectContainer,
        children: [
            (0, i.jsx)('img', {
                src: E,
                alt: null == r ? void 0 : r.accessibilityLabel,
                className: g.profileEffectBackground
            }),
            (0, i.jsx)(_.Z, { profileEffectId: n })
        ]
    });
}
function T(e) {
    let { sku: t } = e,
        { selectedGiftStyle: n } = (0, h.wD)(),
        { product: s } = (0, u.T)(null == t ? void 0 : t.id),
        o = null == s ? void 0 : s.items[0],
        l = (0, r.EQ)(o)
            .with({ type: a.Z.AVATAR_DECORATION }, (e) => (0, i.jsx)(y, { avatarDecoration: e }))
            .with({ type: a.Z.PROFILE_EFFECT }, (e) => (0, i.jsx)(I, { id: e.id }))
            .otherwise(() => null);
    return null != n && null == l
        ? (0, i.jsx)('div', {
              className: g.giftMainAnimationWrapper,
              children: (0, i.jsx)(d.Z, {
                  defaultAnimationState: c.SR.LOOP,
                  giftStyle: n,
                  shouldAnimate: !0,
                  className: g.__invalid_giftMainAnimation
              })
          })
        : l;
}
