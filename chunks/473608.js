t.d(n, {
    O: function () {
        return S;
    }
}),
    t(47120),
    t(627341);
var i = t(200651),
    l = t(512722),
    r = t.n(l),
    s = t(278074),
    a = t(979554),
    c = t(442837),
    o = t(481060),
    u = t(1585),
    d = t(125988),
    m = t(731896),
    p = t(594174),
    x = t(597688),
    h = t(452049),
    f = t(223223);
let v = (e) => {
        let { avatarDecoration: n, fallbackLabel: t } = e,
            l = (0, c.e7)([p.default], () => p.default.getCurrentUser()),
            { avatarDecorationSrc: r, eventHandlers: s } = (0, d.Z)({
                user: l,
                onlyAnimateOnHover: !0,
                avatarDecorationOverride: n,
                size: (0, u.y9)(o.AvatarSizes.SIZE_40)
            });
        return null == n
            ? t
            : (0, i.jsx)('img', {
                  src: r,
                  alt: n.label,
                  className: h.avatarDecoration,
                  ...s
              });
    },
    g = (e) => {
        var n;
        let { profileEffect: t, fallbackLabel: l } = e,
            r = (0, m.V)(null == t ? void 0 : t.id);
        if (null == r) return l;
        let { accessibilityLabel: s, thumbnailPreviewSrc: a, title: c } = null !== (n = null == r ? void 0 : r.config) && void 0 !== n ? n : {};
        return (0, i.jsxs)('div', {
            className: h.profileEffectContainer,
            children: [
                (0, i.jsx)('img', {
                    src: f,
                    alt: s,
                    className: h.profileEffectBackground
                }),
                (0, i.jsx)('img', {
                    className: h.profileEffect,
                    src: a,
                    alt: c
                })
            ]
        });
    },
    S = (e) => {
        var n;
        let { product: t, sku: l, fallbackLabel: o } = e,
            u = (0, c.e7)([x.Z], () => x.Z.getProduct(null == l ? void 0 : l.id)),
            d = null != t ? t : u,
            [m] = null !== (n = null == d ? void 0 : d.items) && void 0 !== n ? n : [];
        return (0, s.EQ)(null == m ? void 0 : m.type)
            .with(
                a.Z.AVATAR_DECORATION,
                () => (
                    r()(m.type === a.Z.AVATAR_DECORATION, 'ts-match checked the type'),
                    (0, i.jsx)(v, {
                        avatarDecoration: m,
                        fallbackLabel: o
                    })
                )
            )
            .with(
                a.Z.PROFILE_EFFECT,
                () => (
                    r()(m.type === a.Z.PROFILE_EFFECT, 'ts-match checked the type'),
                    (0, i.jsx)(g, {
                        profileEffect: m,
                        fallbackLabel: o
                    })
                )
            )
            .otherwise(() => o);
    };
