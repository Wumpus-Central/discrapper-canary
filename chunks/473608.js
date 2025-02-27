n.d(t, { O: () => I }), n(47120), n(627341);
var r = n(200651),
    i = n(512722),
    o = n.n(i),
    a = n(278074),
    s = n(979554),
    l = n(442837),
    c = n(481060),
    u = n(1585),
    d = n(125988),
    f = n(516817),
    _ = n(731896),
    p = n(594174),
    h = n(597688),
    g = n(579407),
    m = n(436600),
    E = n(223223);
function v(e, t, n) {
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
function b(e) {
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
                v(e, t, n[t]);
            });
    }
    return e;
}
let y = (e) => {
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
                  b(
                      {
                          src: o,
                          alt: t.label,
                          className: m.avatarDecoration
                      },
                      a
                  )
              );
    },
    O = (e) => {
        var t;
        let { profileEffect: n, fallbackLabel: i } = e,
            o = (0, _.V)(null == n ? void 0 : n.id);
        if (null == o) return i;
        let { accessibilityLabel: a, thumbnailPreviewSrc: s, title: l } = null !== (t = null == o ? void 0 : o.config) && void 0 !== t ? t : {};
        return (0, r.jsxs)('div', {
            className: m.profileEffectContainer,
            children: [
                (0, r.jsx)('img', {
                    src: E,
                    alt: a,
                    className: m.profileEffectBackground
                }),
                (0, r.jsx)('img', {
                    className: m.profileEffect,
                    src: s,
                    alt: l
                })
            ]
        });
    },
    S = (e) => {
        let { nameplate: t, fallbackLabel: n } = e;
        return null == t
            ? n
            : (0, r.jsx)('div', {
                  className: m.nameplateContainer,
                  children: (0, r.jsx)(f.Z, {
                      nameplate: (0, g.EU)(t),
                      selected: !0
                  })
              });
    },
    I = (e) => {
        var t;
        let { product: n, sku: i, fallbackLabel: c } = e,
            u = (0, l.e7)([h.Z], () => h.Z.getProduct(null == i ? void 0 : i.id)),
            d = null != n ? n : u,
            [f] = null !== (t = null == d ? void 0 : d.items) && void 0 !== t ? t : [];
        return (0, a.EQ)(null == f ? void 0 : f.type)
            .with(
                s.Z.AVATAR_DECORATION,
                () => (
                    o()(f.type === s.Z.AVATAR_DECORATION, 'ts-match checked the type'),
                    (0, r.jsx)(y, {
                        avatarDecoration: f,
                        fallbackLabel: c
                    })
                )
            )
            .with(
                s.Z.PROFILE_EFFECT,
                () => (
                    o()(f.type === s.Z.PROFILE_EFFECT, 'ts-match checked the type'),
                    (0, r.jsx)(O, {
                        profileEffect: f,
                        fallbackLabel: c
                    })
                )
            )
            .with(
                s.Z.NAMEPLATE,
                () => (
                    o()(f.type === s.Z.NAMEPLATE, 'ts-match checked the type'),
                    (0, r.jsx)(S, {
                        nameplate: f,
                        fallbackLabel: c
                    })
                )
            )
            .otherwise(() => c);
    };
