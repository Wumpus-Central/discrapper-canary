n.d(t, { O: () => N }), n(47120), n(627341);
var r = n(200651),
    i = n(512722),
    o = n.n(i),
    a = n(278074),
    s = n(979554),
    l = n(442837),
    c = n(481060),
    u = n(1585),
    d = n(125988),
    f = n(359135),
    _ = n(516817),
    p = n(731896),
    h = n(594174),
    m = n(597688),
    g = n(579407),
    E = n(755419),
    b = n(643158),
    y = n(223223);
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
function O(e) {
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
let I = (e) => {
        let { avatarDecoration: t, fallbackLabel: n } = e,
            i = (0, l.e7)([h.default], () => h.default.getCurrentUser()),
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
                  O(
                      {
                          src: o,
                          alt: t.label,
                          className: b.avatarDecoration
                      },
                      a
                  )
              );
    },
    S = (e) => {
        var t;
        let { profileEffect: n, fallbackLabel: i } = e,
            o = (0, p.V)(null == n ? void 0 : n.id);
        if (null == o) return i;
        let { accessibilityLabel: a, thumbnailPreviewSrc: s, title: l } = null != (t = null == o ? void 0 : o.config) ? t : {};
        return (0, r.jsxs)('div', {
            className: b.profileEffectContainer,
            children: [
                (0, r.jsx)('img', {
                    src: y,
                    alt: a,
                    className: b.profileEffectBackground
                }),
                (0, r.jsx)('img', {
                    className: b.profileEffect,
                    src: s,
                    alt: l
                })
            ]
        });
    },
    T = (e) => {
        let { nameplate: t, fallbackLabel: n } = e;
        return null == t
            ? n
            : (0, r.jsx)('div', {
                  className: b.nameplateContainer,
                  children: (0, r.jsx)(_.Z, {
                      nameplate: (0, g.EU)(t),
                      selected: !0,
                      placement: f.i.MINI_PREVIEW
                  })
              });
    },
    N = (e) => {
        var t;
        let { product: n, sku: i, fallbackLabel: c } = e,
            u = null == i ? void 0 : i.id,
            d = (0, l.e7)([m.Z], () => m.Z.getProduct(null == i ? void 0 : i.id)),
            f = null != n ? n : d,
            [_] = null != (t = null == f ? void 0 : f.items) ? t : [];
        return void 0 !== u && u in E.KO
            ? E.KO[u].render({
                  animationState: 'on_hover',
                  className: b.externalProductAsset
              })
            : (0, a.EQ)(null == _ ? void 0 : _.type)
                  .with(
                      s.Z.AVATAR_DECORATION,
                      () => (
                          o()(_.type === s.Z.AVATAR_DECORATION, 'ts-match checked the type'),
                          (0, r.jsx)(I, {
                              avatarDecoration: _,
                              fallbackLabel: c
                          })
                      )
                  )
                  .with(
                      s.Z.PROFILE_EFFECT,
                      () => (
                          o()(_.type === s.Z.PROFILE_EFFECT, 'ts-match checked the type'),
                          (0, r.jsx)(S, {
                              profileEffect: _,
                              fallbackLabel: c
                          })
                      )
                  )
                  .with(
                      s.Z.NAMEPLATE,
                      () => (
                          o()(_.type === s.Z.NAMEPLATE, 'ts-match checked the type'),
                          (0, r.jsx)(T, {
                              nameplate: _,
                              fallbackLabel: c
                          })
                      )
                  )
                  .otherwise(() => c);
    };
