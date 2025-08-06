n.d(t, { O: () => N }), n(388685), n(314940);
var r = n(255367),
    i = n(73800),
    o = n(512722),
    a = n.n(o),
    s = n(278074),
    l = n(979554),
    c = n(442837),
    u = n(481060),
    d = n(1585),
    f = n(125988),
    _ = n(359135),
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
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function I(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
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
            { avatarDecorationSrc: o, eventHandlers: a } = (0, f.Z)({
                user: i,
                onlyAnimateOnHover: !0,
                avatarDecorationOverride: t,
                size: (0, d.y9)(u.EFr.SIZE_40),
            });
        return null == t
            ? n
            : (0, r.jsx)(
                  "img",
                  I(
                      {
                          src: o,
                          alt: t.label,
                          className: y.avatarDecoration,
                      },
                      a,
                  ),
              );
    },
    S = (e) => {
        var t;
        let { profileEffect: n, fallbackLabel: i } = e,
            o = (0, h.V)(null == n ? void 0 : n.id);
        if (null == o) return i;
        let {
            accessibilityLabel: a,
            thumbnailPreviewSrc: s,
            title: l,
        } = null != (t = null == o ? void 0 : o.config) ? t : {};
        return (0, r.jsxs)("div", {
            className: y.profileEffectContainer,
            children: [
                (0, r.jsx)("img", {
                    src: O,
                    alt: a,
                    className: y.profileEffectBackground,
                }),
                (0, r.jsx)("img", {
                    className: y.profileEffect,
                    src: s,
                    alt: l,
                }),
            ],
        });
    },
    A = (e) => {
        let { nameplate: t, fallbackLabel: n } = e,
            [o, a] = i.useState(!1),
            s = i.useCallback(() => a(!0), []),
            l = i.useCallback(() => a(!1), []);
        return null == t
            ? n
            : (0, r.jsx)("div", {
                  className: y.nameplateContainer,
                  onMouseEnter: s,
                  onMouseLeave: l,
                  children: (0, r.jsx)(p.Z, {
                      nameplate: (0, E.EU)(t),
                      hovered: o,
                      placement: _.i.MINI_PREVIEW,
                  }),
              });
    },
    N = (e) => {
        var t;
        let { product: n, sku: i, fallbackLabel: o } = e,
            u = null == i ? void 0 : i.id,
            d = (0, c.e7)([g.Z], () => g.Z.getProduct(null == i ? void 0 : i.id)),
            f = null != n ? n : d,
            [_] = null != (t = null == f ? void 0 : f.items) ? t : [];
        return void 0 !== u && u in b.K
            ? b.K[u].render({
                  animationState: "on_hover",
                  className: y.externalProductAsset,
              })
            : (0, s.EQ)(null == _ ? void 0 : _.type)
                  .with(
                      l.Z.AVATAR_DECORATION,
                      () => (
                          a()(_.type === l.Z.AVATAR_DECORATION, "ts-match checked the type"),
                          (0, r.jsx)(T, {
                              avatarDecoration: _,
                              fallbackLabel: o,
                          })
                      ),
                  )
                  .with(
                      l.Z.PROFILE_EFFECT,
                      () => (
                          a()(_.type === l.Z.PROFILE_EFFECT, "ts-match checked the type"),
                          (0, r.jsx)(S, {
                              profileEffect: _,
                              fallbackLabel: o,
                          })
                      ),
                  )
                  .with(
                      l.Z.NAMEPLATE,
                      () => (
                          a()(_.type === l.Z.NAMEPLATE, "ts-match checked the type"),
                          (0, r.jsx)(A, {
                              nameplate: _,
                              fallbackLabel: o,
                          })
                      ),
                  )
                  .otherwise(() => o);
    };
