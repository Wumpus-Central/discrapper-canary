n.d(t, { O: () => T }), n(47120), n(627341);
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
    m = n(579407),
    g = n(755419),
    E = n(231103),
    b = n(223223);
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
                v(e, t, n[t]);
            });
    }
    return e;
}
let O = (e) => {
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
                  y(
                      {
                          src: o,
                          alt: t.label,
                          className: E.avatarDecoration
                      },
                      a
                  )
              );
    },
    I = (e) => {
        var t;
        let { profileEffect: n, fallbackLabel: i } = e,
            o = (0, _.V)(null == n ? void 0 : n.id);
        if (null == o) return i;
        let { accessibilityLabel: a, thumbnailPreviewSrc: s, title: l } = null !== (t = null == o ? void 0 : o.config) && void 0 !== t ? t : {};
        return (0, r.jsxs)('div', {
            className: E.profileEffectContainer,
            children: [
                (0, r.jsx)('img', {
                    src: b,
                    alt: a,
                    className: E.profileEffectBackground
                }),
                (0, r.jsx)('img', {
                    className: E.profileEffect,
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
                  className: E.nameplateContainer,
                  children: (0, r.jsx)(f.Z, {
                      nameplate: (0, m.EU)(t),
                      selected: !0
                  })
              });
    },
    T = (e) => {
        var t;
        let { product: n, sku: i, fallbackLabel: c } = e,
            u = null == i ? void 0 : i.id,
            d = (0, l.e7)([h.Z], () => h.Z.getProduct(null == i ? void 0 : i.id)),
            f = null != n ? n : d,
            [_] = null !== (t = null == f ? void 0 : f.items) && void 0 !== t ? t : [];
        return void 0 !== u && u in g.KO
            ? g.KO[u].render({
                  animationState: 'on_hover',
                  className: E.externalProductAsset
              })
            : (0, a.EQ)(null == _ ? void 0 : _.type)
                  .with(
                      s.Z.AVATAR_DECORATION,
                      () => (
                          o()(_.type === s.Z.AVATAR_DECORATION, 'ts-match checked the type'),
                          (0, r.jsx)(O, {
                              avatarDecoration: _,
                              fallbackLabel: c
                          })
                      )
                  )
                  .with(
                      s.Z.PROFILE_EFFECT,
                      () => (
                          o()(_.type === s.Z.PROFILE_EFFECT, 'ts-match checked the type'),
                          (0, r.jsx)(I, {
                              profileEffect: _,
                              fallbackLabel: c
                          })
                      )
                  )
                  .with(
                      s.Z.NAMEPLATE,
                      () => (
                          o()(_.type === s.Z.NAMEPLATE, 'ts-match checked the type'),
                          (0, r.jsx)(S, {
                              nameplate: _,
                              fallbackLabel: c
                          })
                      )
                  )
                  .otherwise(() => c);
    };
