n.d(t, { O: () => P }), n(388685), n(314940);
var r = n(54381),
    i = n(473749),
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
    b = n(578976),
    y = n(579407),
    O = n(755419),
    v = n(666765),
    I = n(223223);
function T(e, t, n) {
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
function S(e) {
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
                T(e, t, n[t]);
            });
    }
    return e;
}
let A = (e) => {
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
                  S(
                      {
                          src: a,
                          alt: t.label,
                          className: v.avatarDecoration,
                      },
                      o,
                  ),
              );
    },
    C = (e) => {
        var t;
        let { profileEffect: n, fallbackLabel: a } = e,
            o = (0, h.V)(null == n ? void 0 : n.skuId),
            {
                accessibilityLabel: s,
                thumbnailPreviewSrc: l,
                title: c,
            } = null != (t = null == o ? void 0 : o.config) ? t : {},
            u = i.useMemo(() => (0, b.JE)(l), [l]);
        return null == o
            ? a
            : (0, r.jsxs)("div", {
                  className: v.profileEffectContainer,
                  children: [
                      (0, r.jsx)("img", {
                          src: I,
                          alt: s,
                          className: v.profileEffectBackground,
                      }),
                      (0, r.jsx)("img", {
                          className: v.profileEffect,
                          src: u,
                          alt: c,
                      }),
                  ],
              });
    },
    N = (e) => {
        let { nameplate: t, fallbackLabel: n } = e,
            [a, o] = i.useState(!1),
            s = i.useCallback(() => o(!0), []),
            l = i.useCallback(() => o(!1), []);
        return null == t
            ? n
            : (0, r.jsx)("div", {
                  className: v.nameplateContainer,
                  onMouseEnter: s,
                  onMouseLeave: l,
                  children: (0, r.jsx)(p.Z, {
                      nameplate: (0, y.EU)(t),
                      hovered: a,
                      placement: _.i.MINI_PREVIEW,
                  }),
              });
    },
    R = (e) => {
        let { product: t, fallbackLabel: n } = e,
            { firstAvatarDecoration: i, firstProfileEffect: a, firstNameplate: o } = (0, E.Rj)(t);
        return null == i && null == a && null == o
            ? n
            : (0, r.jsxs)("div", {
                  className: v.bundleMiniPreview,
                  children: [
                      null != a &&
                          (0, r.jsx)("div", {
                              className: v.bundleMiniProfileEffectContainer,
                              children: (0, r.jsx)(C, {
                                  profileEffect: a,
                                  fallbackLabel: null,
                              }),
                          }),
                      null != i &&
                          (0, r.jsx)("div", {
                              className: v.bundleMiniAvatarDecorationContainer,
                              children: (0, r.jsx)(A, {
                                  avatarDecoration: i,
                                  fallbackLabel: null,
                              }),
                          }),
                      null != o &&
                          (0, r.jsx)("div", {
                              className: v.bundleMiniNameplateContainer,
                              children: (0, r.jsx)(N, {
                                  nameplate: o,
                                  fallbackLabel: null,
                              }),
                          }),
                  ],
              });
    },
    P = (e) => {
        var t;
        let { product: n, sku: i, fallbackLabel: a } = e,
            u = null == i ? void 0 : i.id,
            d = (0, c.e7)([g.Z], () => g.Z.getProduct(null == i ? void 0 : i.id)),
            f = null != n ? n : d;
        if ((null == f ? void 0 : f.type) === l.Z.BUNDLE)
            return (0, r.jsx)(R, {
                product: f,
                fallbackLabel: a,
            });
        let [_] = null != (t = null == f ? void 0 : f.items) ? t : [];
        return void 0 !== u && u in O.K
            ? O.K[u].render({
                  animationState: "on_hover",
                  className: v.externalProductAsset,
              })
            : (0, s.EQ)(null == _ ? void 0 : _.type)
                  .with(
                      l.Z.AVATAR_DECORATION,
                      () => (
                          o()(_.type === l.Z.AVATAR_DECORATION, "ts-match checked the type"),
                          (0, r.jsx)(A, {
                              avatarDecoration: _,
                              fallbackLabel: a,
                          })
                      ),
                  )
                  .with(
                      l.Z.PROFILE_EFFECT,
                      () => (
                          o()(_.type === l.Z.PROFILE_EFFECT, "ts-match checked the type"),
                          (0, r.jsx)(C, {
                              profileEffect: _,
                              fallbackLabel: a,
                          })
                      ),
                  )
                  .with(
                      l.Z.NAMEPLATE,
                      () => (
                          o()(_.type === l.Z.NAMEPLATE, "ts-match checked the type"),
                          (0, r.jsx)(N, {
                              nameplate: _,
                              fallbackLabel: a,
                          })
                      ),
                  )
                  .otherwise(() => a);
    };
