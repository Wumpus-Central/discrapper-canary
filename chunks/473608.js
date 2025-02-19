n.d(t, { O: () => y }), n(47120), n(627341);
var r = n(200651),
    i = n(512722),
    o = n.n(i),
    a = n(278074),
    s = n(979554),
    l = n(442837),
    c = n(481060),
    u = n(1585),
    d = n(125988),
    f = n(731896),
    p = n(594174),
    _ = n(597688),
    h = n(436600),
    m = n(223223);
function g(e, t, n) {
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
function E(e) {
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
                g(e, t, n[t]);
            });
    }
    return e;
}
let v = (e) => {
        let { avatarDecoration: t, fallbackLabel: n } = e,
            i = (0, l.e7)([p.default], () => p.default.getCurrentUser()),
            { avatarDecorationSrc: o, eventHandlers: a } = (0, d.Z)({
                user: i,
                onlyAnimateOnHover: !0,
                avatarDecorationOverride: t,
                size: (0, u.y9)(c.EFr.SIZE_40)
            });
        return null == t
            ? n
            : (0, r.jsx)(
                  'img',
                  E(
                      {
                          src: o,
                          alt: t.label,
                          className: h.avatarDecoration
                      },
                      a
                  )
              );
    },
    b = (e) => {
        var t;
        let { profileEffect: n, fallbackLabel: i } = e,
            o = (0, f.V)(null == n ? void 0 : n.id);
        if (null == o) return i;
        let { accessibilityLabel: a, thumbnailPreviewSrc: s, title: l } = null !== (t = null == o ? void 0 : o.config) && void 0 !== t ? t : {};
        return (0, r.jsxs)('div', {
            className: h.profileEffectContainer,
            children: [
                (0, r.jsx)('img', {
                    src: m,
                    alt: a,
                    className: h.profileEffectBackground
                }),
                (0, r.jsx)('img', {
                    className: h.profileEffect,
                    src: s,
                    alt: l
                })
            ]
        });
    },
    y = (e) => {
        var t;
        let { product: n, sku: i, fallbackLabel: c } = e,
            u = (0, l.e7)([_.Z], () => _.Z.getProduct(null == i ? void 0 : i.id)),
            d = null != n ? n : u,
            [f] = null !== (t = null == d ? void 0 : d.items) && void 0 !== t ? t : [];
        return (0, a.EQ)(null == f ? void 0 : f.type)
            .with(
                s.Z.AVATAR_DECORATION,
                () => (
                    o()(f.type === s.Z.AVATAR_DECORATION, 'ts-match checked the type'),
                    (0, r.jsx)(v, {
                        avatarDecoration: f,
                        fallbackLabel: c
                    })
                )
            )
            .with(
                s.Z.PROFILE_EFFECT,
                () => (
                    o()(f.type === s.Z.PROFILE_EFFECT, 'ts-match checked the type'),
                    (0, r.jsx)(b, {
                        profileEffect: f,
                        fallbackLabel: c
                    })
                )
            )
            .otherwise(() => c);
    };
