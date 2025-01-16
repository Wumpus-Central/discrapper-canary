var s = i(200651);
i(192379);
var n = i(979554),
    l = i(442837),
    a = i(481060),
    r = i(1585),
    o = i(125988),
    d = i(876917),
    u = i(594174),
    c = i(597688),
    h = i(314295);
let p = a.AvatarSizes.SIZE_152,
    f = (0, r.y9)(p),
    m = (t) => {
        let { item: e } = t,
            i = (0, l.e7)([u.default], () => u.default.getCurrentUser()),
            {
                avatarDecorationSrc: n,
                avatarPlaceholderSrc: r,
                eventHandlers: d
            } = (0, o.Z)({
                user: i,
                avatarDecorationOverride: e,
                size: f
            });
        return (0, s.jsx)('div', {
            className: h.avatarDecorationPreview,
            children: (0, s.jsx)(a.Avatar, {
                ...d,
                'aria-label': e.label,
                src: r,
                avatarDecoration: n,
                size: p
            })
        });
    },
    g = (t) => {
        let { item: e } = t;
        return (0, s.jsx)('div', {
            className: h.profileEffectPreview,
            children: (0, s.jsx)(d.Z, {
                isHovering: !0,
                profileEffectId: null == e ? void 0 : e.id
            })
        });
    };
e.Z = (t) => {
    let { giftCode: e } = t,
        i = (0, l.e7)([c.Z], () => c.Z.getProduct(e.skuId)),
        a = null == i ? void 0 : i.items[0];
    return (0, s.jsxs)(s.Fragment, {
        children: [(null == a ? void 0 : a.type) === n.Z.AVATAR_DECORATION && (0, s.jsx)(m, { item: a }), (null == a ? void 0 : a.type) === n.Z.PROFILE_EFFECT && (0, s.jsx)(g, { item: a })]
    });
};
