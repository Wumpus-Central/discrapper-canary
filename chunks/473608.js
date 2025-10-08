n.d(t, { O: () => R }), n(388685), n(314940);
var r = n(951288),
    i = n(647438),
    a = n(512722),
    o = n.n(a),
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
    E = n(328456),
    b = n(579407),
    y = n(755419),
    O = n(187951),
    v = n(223223);
function I(e, t, n) {
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
function T(e) {
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
                I(e, t, n[t]);
            });
    }
    return e;
}
let S = (e) => {
        let { avatarDecoration: t, fallbackLabel: n } = e,
            i = (0, c.e7)([m.default], () => m.default.getCurrentUser()),
            { avatarDecorationSrc: a, eventHandlers: o } = (0, f.Z)({
                user: i,
                onlyAnimateOnHoverOrFocus: !0,
                avatarDecorationOverride: t,
                size: (0, d.y9)(u.EFr.SIZE_40),
            });
        return null == t
            ? n
            : (0, r.jsx)(
                  "img",
                  T(
                      {
                          src: a,
                          alt: t.label,
                          className: O.avatarDecoration,
                      },
                      o,
                  ),
              );
    },
    A = (e) => {
        var t;
        let { profileEffect: n, fallbackLabel: i } = e,
            a = (0, h.V)(null == n ? void 0 : n.skuId);
        if (null == a) return i;
        let {
            accessibilityLabel: o,
            thumbnailPreviewSrc: s,
            title: l,
        } = null != (t = null == a ? void 0 : a.config) ? t : {};
        return (0, r.jsxs)("div", {
            className: O.profileEffectContainer,
            children: [
                (0, r.jsx)("img", {
                    src: v,
                    alt: o,
                    className: O.profileEffectBackground,
                }),
                (0, r.jsx)("img", {
                    className: O.profileEffect,
                    src: s,
                    alt: l,
                }),
            ],
        });
    },
    C = (e) => {
        let { nameplate: t, fallbackLabel: n } = e,
            [a, o] = i.useState(!1),
            s = i.useCallback(() => o(!0), []),
            l = i.useCallback(() => o(!1), []);
        return null == t
            ? n
            : (0, r.jsx)("div", {
                  className: O.nameplateContainer,
                  onMouseEnter: s,
                  onMouseLeave: l,
                  children: (0, r.jsx)(p.Z, {
                      nameplate: (0, b.EU)(t),
                      hovered: a,
                      placement: _.i.MINI_PREVIEW,
                  }),
              });
    },
    N = (e) => {
        let { product: t, fallbackLabel: n } = e,
            { firstAvatarDecoration: i, firstProfileEffect: a, firstNameplate: o } = (0, E.Rj)(t);
        return null == i && null == a && null == o
            ? n
            : (0, r.jsxs)("div", {
                  className: O.bundleMiniPreview,
                  children: [
                      null != a &&
                          (0, r.jsx)("div", {
                              className: O.bundleMiniProfileEffectContainer,
                              children: (0, r.jsx)(A, {
                                  profileEffect: a,
                                  fallbackLabel: null,
                              }),
                          }),
                      null != i &&
                          (0, r.jsx)("div", {
                              className: O.bundleMiniAvatarDecorationContainer,
                              children: (0, r.jsx)(S, {
                                  avatarDecoration: i,
                                  fallbackLabel: null,
                              }),
                          }),
                      null != o &&
                          (0, r.jsx)("div", {
                              className: O.bundleMiniNameplateContainer,
                              children: (0, r.jsx)(C, {
                                  nameplate: o,
                                  fallbackLabel: null,
                              }),
                          }),
                  ],
              });
    },
    R = (e) => {
        var t;
        let { product: n, sku: i, fallbackLabel: a } = e,
            u = null == i ? void 0 : i.id,
            d = (0, c.e7)([g.Z], () => g.Z.getProduct(null == i ? void 0 : i.id)),
            f = null != n ? n : d;
        if ((null == f ? void 0 : f.type) === l.Z.BUNDLE)
            return (0, r.jsx)(N, {
                product: f,
                fallbackLabel: a,
            });
        let [_] = null != (t = null == f ? void 0 : f.items) ? t : [];
        return void 0 !== u && u in y.K
            ? y.K[u].render({
                  animationState: "on_hover",
                  className: O.externalProductAsset,
              })
            : (0, s.EQ)(null == _ ? void 0 : _.type)
                  .with(
                      l.Z.AVATAR_DECORATION,
                      () => (
                          o()(_.type === l.Z.AVATAR_DECORATION, "ts-match checked the type"),
                          (0, r.jsx)(S, {
                              avatarDecoration: _,
                              fallbackLabel: a,
                          })
                      ),
                  )
                  .with(
                      l.Z.PROFILE_EFFECT,
                      () => (
                          o()(_.type === l.Z.PROFILE_EFFECT, "ts-match checked the type"),
                          (0, r.jsx)(A, {
                              profileEffect: _,
                              fallbackLabel: a,
                          })
                      ),
                  )
                  .with(
                      l.Z.NAMEPLATE,
                      () => (
                          o()(_.type === l.Z.NAMEPLATE, "ts-match checked the type"),
                          (0, r.jsx)(C, {
                              nameplate: _,
                              fallbackLabel: a,
                          })
                      ),
                  )
                  .otherwise(() => a);
    };
