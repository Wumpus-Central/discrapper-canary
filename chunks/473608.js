n.d(t, { O: () => v }), n(47120), n(627341);
var i = n(200651),
    r = n(512722),
    a = n.n(r),
    s = n(278074),
    o = n(979554),
    l = n(442837),
    u = n(481060),
    c = n(1585),
    d = n(125988),
    f = n(731896),
    _ = n(594174),
    p = n(597688),
    h = n(452049),
    m = n(223223);
let g = (e) => {
        let { avatarDecoration: t, fallbackLabel: n } = e,
            r = (0, l.e7)([_.default], () => _.default.getCurrentUser()),
            { avatarDecorationSrc: a, eventHandlers: s } = (0, d.Z)({
                user: r,
                onlyAnimateOnHover: !0,
                avatarDecorationOverride: t,
                size: (0, c.y9)(u.EFr.SIZE_40)
            });
        return null == t
            ? n
            : (0, i.jsx)('img', {
                  src: a,
                  alt: t.label,
                  className: h.avatarDecoration,
                  ...s
              });
    },
    E = (e) => {
        var t;
        let { profileEffect: n, fallbackLabel: r } = e,
            a = (0, f.V)(null == n ? void 0 : n.id);
        if (null == a) return r;
        let { accessibilityLabel: s, thumbnailPreviewSrc: o, title: l } = null !== (t = null == a ? void 0 : a.config) && void 0 !== t ? t : {};
        return (0, i.jsxs)('div', {
            className: h.profileEffectContainer,
            children: [
                (0, i.jsx)('img', {
                    src: m,
                    alt: s,
                    className: h.profileEffectBackground
                }),
                (0, i.jsx)('img', {
                    className: h.profileEffect,
                    src: o,
                    alt: l
                })
            ]
        });
    },
    v = (e) => {
        var t;
        let { product: n, sku: r, fallbackLabel: u } = e,
            c = (0, l.e7)([p.Z], () => p.Z.getProduct(null == r ? void 0 : r.id)),
            d = null != n ? n : c,
            [f] = null !== (t = null == d ? void 0 : d.items) && void 0 !== t ? t : [];
        return (0, s.EQ)(null == f ? void 0 : f.type)
            .with(
                o.Z.AVATAR_DECORATION,
                () => (
                    a()(f.type === o.Z.AVATAR_DECORATION, 'ts-match checked the type'),
                    (0, i.jsx)(g, {
                        avatarDecoration: f,
                        fallbackLabel: u
                    })
                )
            )
            .with(
                o.Z.PROFILE_EFFECT,
                () => (
                    a()(f.type === o.Z.PROFILE_EFFECT, 'ts-match checked the type'),
                    (0, i.jsx)(E, {
                        profileEffect: f,
                        fallbackLabel: u
                    })
                )
            )
            .otherwise(() => u);
    };
