r.d(n, {
    O: function () {
        return I;
    }
});
var i = r(47120);
var a = r(627341);
var o = r(200651),
    s = r(512722),
    l = r.n(s),
    u = r(278074),
    c = r(979554),
    d = r(442837),
    f = r(481060),
    p = r(1585),
    h = r(125988),
    _ = r(731896),
    m = r(594174),
    g = r(597688),
    E = r(452049),
    v = r(223223);
let y = (e) => {
        let { avatarDecoration: n, fallbackLabel: r } = e,
            i = (0, d.e7)([m.default], () => m.default.getCurrentUser()),
            { avatarDecorationSrc: a, eventHandlers: s } = (0, h.Z)({
                user: i,
                onlyAnimateOnHover: !0,
                avatarDecorationOverride: n,
                size: (0, p.y9)(f.AvatarSizes.SIZE_40)
            });
        return null == n
            ? r
            : (0, o.jsx)('img', {
                  src: a,
                  alt: n.label,
                  className: E.avatarDecoration,
                  ...s
              });
    },
    b = (e) => {
        var n;
        let { profileEffect: r, fallbackLabel: i } = e,
            a = (0, _.V)(null == r ? void 0 : r.id);
        if (null == a) return i;
        let { accessibilityLabel: s, thumbnailPreviewSrc: l, title: u } = null !== (n = null == a ? void 0 : a.config) && void 0 !== n ? n : {};
        return (0, o.jsxs)('div', {
            className: E.profileEffectContainer,
            children: [
                (0, o.jsx)('img', {
                    src: v,
                    alt: s,
                    className: E.profileEffectBackground
                }),
                (0, o.jsx)('img', {
                    className: E.profileEffect,
                    src: l,
                    alt: u
                })
            ]
        });
    },
    I = (e) => {
        var n;
        let { product: r, sku: i, fallbackLabel: a } = e,
            s = (0, d.e7)([g.Z], () => g.Z.getProduct(null == i ? void 0 : i.id)),
            f = null != r ? r : s,
            [p] = null !== (n = null == f ? void 0 : f.items) && void 0 !== n ? n : [];
        return (0, u.EQ)(null == p ? void 0 : p.type)
            .with(
                c.Z.AVATAR_DECORATION,
                () => (
                    l()(p.type === c.Z.AVATAR_DECORATION, 'ts-match checked the type'),
                    (0, o.jsx)(y, {
                        avatarDecoration: p,
                        fallbackLabel: a
                    })
                )
            )
            .with(
                c.Z.PROFILE_EFFECT,
                () => (
                    l()(p.type === c.Z.PROFILE_EFFECT, 'ts-match checked the type'),
                    (0, o.jsx)(b, {
                        profileEffect: p,
                        fallbackLabel: a
                    })
                )
            )
            .otherwise(() => a);
    };
