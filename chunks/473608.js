n.d(t, { O: () => N }), n(388685), n(314940);
var r = n(255367),
    i = n(73800),
    a = n(512722),
    o = n.n(a),
    s = n(278074),
    l = n(979554),
    c = n(442837),
    u = n(481060),
    d = n(1585),
    _ = n(125988),
    f = n(359135),
    p = n(516817),
    h = n(731896),
    m = n(594174),
    g = n(597688),
    E = n(579407),
    b = n(755419),
    y = n(643158),
    O = n(223223);
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
function I(e) {
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
let T = (e) => {
        let { avatarDecoration: t, fallbackLabel: n } = e,
            i = (0, c.e7)([m.default], () => m.default.getCurrentUser()),
            { avatarDecorationSrc: a, eventHandlers: o } = (0, _.Z)({
                user: i,
                onlyAnimateOnHover: !0,
                avatarDecorationOverride: t,
                size: (0, d.y9)(u.EFr.SIZE_40)
            });
        return null == t
            ? n
            : (0, r.jsx)(
                  'img',
                  I(
                      {
                          src: a,
                          alt: t.label,
                          className: y.avatarDecoration
                      },
                      o
                  )
              );
    },
    S = (e) => {
        var t;
        let { profileEffect: n, fallbackLabel: i } = e,
            a = (0, h.V)(null == n ? void 0 : n.id);
        if (null == a) return i;
        let { accessibilityLabel: o, thumbnailPreviewSrc: s, title: l } = null != (t = null == a ? void 0 : a.config) ? t : {};
        return (0, r.jsxs)('div', {
            className: y.profileEffectContainer,
            children: [
                (0, r.jsx)('img', {
                    src: O,
                    alt: o,
                    className: y.profileEffectBackground
                }),
                (0, r.jsx)('img', {
                    className: y.profileEffect,
                    src: s,
                    alt: l
                })
            ]
        });
    },
    A = (e) => {
        let { nameplate: t, fallbackLabel: n } = e,
            [a, o] = i.useState(!1),
            s = i.useCallback(() => o(!0), []),
            l = i.useCallback(() => o(!1), []);
        return null == t
            ? n
            : (0, r.jsx)('div', {
                  className: y.nameplateContainer,
                  onMouseEnter: s,
                  onMouseLeave: l,
                  children: (0, r.jsx)(p.Z, {
                      nameplate: (0, E.EU)(t),
                      hovered: a,
                      placement: f.i.MINI_PREVIEW
                  })
              });
    },
    N = (e) => {
        var t;
        let { product: n, sku: i, fallbackLabel: a } = e,
            u = null == i ? void 0 : i.id,
            d = (0, c.e7)([g.Z], () => g.Z.getProduct(null == i ? void 0 : i.id)),
            _ = null != n ? n : d,
            [f] = null != (t = null == _ ? void 0 : _.items) ? t : [];
        return void 0 !== u && u in b.K
            ? b.K[u].render({
                  animationState: 'on_hover',
                  className: y.externalProductAsset
              })
            : (0, s.EQ)(null == f ? void 0 : f.type)
                  .with(
                      l.Z.AVATAR_DECORATION,
                      () => (
                          o()(f.type === l.Z.AVATAR_DECORATION, 'ts-match checked the type'),
                          (0, r.jsx)(T, {
                              avatarDecoration: f,
                              fallbackLabel: a
                          })
                      )
                  )
                  .with(
                      l.Z.PROFILE_EFFECT,
                      () => (
                          o()(f.type === l.Z.PROFILE_EFFECT, 'ts-match checked the type'),
                          (0, r.jsx)(S, {
                              profileEffect: f,
                              fallbackLabel: a
                          })
                      )
                  )
                  .with(
                      l.Z.NAMEPLATE,
                      () => (
                          o()(f.type === l.Z.NAMEPLATE, 'ts-match checked the type'),
                          (0, r.jsx)(A, {
                              nameplate: f,
                              fallbackLabel: a
                          })
                      )
                  )
                  .otherwise(() => a);
    };
