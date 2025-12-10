n.d(t, { O: () => R }), n(388685), n(314940);
var r = n(54381),
    i = n(473749),
    a = n(512722),
    o = n.n(a),
    s = n(278074),
    l = n(979554),
    c = n(442837),
    u = n(780384),
    d = n(481060),
    f = n(410030),
    p = n(359135),
    _ = n(516817),
    m = n(731896),
    h = n(597688),
    g = n(328456),
    E = n(578976),
    b = n(579407),
    y = n(755419),
    O = n(616066),
    v = n(187951),
    S = n(63243),
    I = n(244488),
    T = n(223223);
let C = (e) => {
        let { avatarDecoration: t, avatarSize: n } = e,
            i = (0, f.ZP)(),
            a = (0, u.ap)(i) ? I : S;
        return (0, r.jsx)(O.R, {
            item: t,
            avatarSize: n,
            isHighlighted: !1,
            isPurchased: !1,
            avatarPlaceholderSrc: a,
            className: v.avatarDecoration,
        });
    },
    A = (e) => {
        var t;
        let { profileEffect: n, fallbackLabel: a } = e,
            o = (0, m.V)(null == n ? void 0 : n.skuId),
            {
                accessibilityLabel: s,
                thumbnailPreviewSrc: l,
                title: c,
            } = null != (t = null == o ? void 0 : o.config) ? t : {},
            u = i.useMemo(() => (0, E.JE)(l), [l]);
        return null == o
            ? a
            : (0, r.jsxs)("div", {
                  className: v.profileEffectContainer,
                  children: [
                      (0, r.jsx)("img", {
                          src: T,
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
                  children: (0, r.jsx)(_.Z, {
                      nameplate: (0, b.EU)(t),
                      hovered: a,
                      placement: p.i.MINI_PREVIEW,
                  }),
              });
    },
    P = (e) => {
        let { product: t, fallbackLabel: n } = e,
            { firstAvatarDecoration: i, firstProfileEffect: a, firstNameplate: o } = (0, g.Rj)(t);
        return null == i && null == a && null == o
            ? n
            : (0, r.jsxs)("div", {
                  className: v.bundleMiniPreview,
                  children: [
                      null != a &&
                          (0, r.jsx)("div", {
                              className: v.bundleMiniProfileEffectContainer,
                              children: (0, r.jsx)(A, {
                                  profileEffect: a,
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
                      null != i &&
                          (0, r.jsx)("div", {
                              className: v.bundleMiniAvatarDecorationContainer,
                              children: (0, r.jsx)(C, {
                                  avatarDecoration: i,
                                  avatarSize: d.EFr.SIZE_24,
                              }),
                          }),
                  ],
              });
    },
    R = (e) => {
        var t;
        let { product: n, sku: i, fallbackLabel: a } = e,
            u = null == i ? void 0 : i.id,
            f = (0, c.e7)([h.Z], () => h.Z.getProduct(null == i ? void 0 : i.id)),
            p = null != n ? n : f;
        if ((null == p ? void 0 : p.type) === l.Z.BUNDLE)
            return (0, r.jsx)(P, {
                product: p,
                fallbackLabel: a,
            });
        let [_] = null != (t = null == p ? void 0 : p.items) ? t : [];
        return void 0 !== u && u in y.K
            ? y.K[u].render({
                  animationState: "on_hover",
                  className: v.externalProductAsset,
              })
            : (0, s.EQ)(null == _ ? void 0 : _.type)
                  .with(
                      l.Z.AVATAR_DECORATION,
                      () => (
                          o()(_.type === l.Z.AVATAR_DECORATION, "ts-match checked the type"),
                          (0, r.jsx)(C, {
                              avatarDecoration: _,
                              avatarSize: d.EFr.SIZE_40,
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
                          (0, r.jsx)(N, {
                              nameplate: _,
                              fallbackLabel: a,
                          })
                      ),
                  )
                  .otherwise(() => a);
    };
