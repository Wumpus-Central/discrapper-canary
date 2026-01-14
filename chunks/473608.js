n.d(t, { O: () => A }), n(388685);
var r = n(54381),
    i = n(473749),
    a = n(979554),
    o = n(442837),
    s = n(780384),
    l = n(481060),
    c = n(410030),
    u = n(359135),
    d = n(516817),
    f = n(731896),
    p = n(597688),
    _ = n(328456),
    m = n(578976),
    h = n(579407),
    g = n(755419),
    E = n(616066),
    b = n(989035),
    y = n(63243),
    O = n(244488),
    v = n(223223);
let S = (e) => {
        let { avatarDecoration: t, avatarSize: n } = e,
            i = (0, c.ZP)(),
            a = (0, s.ap)(i) ? O : y;
        return (0, r.jsx)(E.R, {
            item: t,
            avatarSize: n,
            isHighlighted: !1,
            avatarPlaceholderSrc: a,
            className: b.avatarDecoration,
        });
    },
    I = (e) => {
        var t;
        let { profileEffect: n, fallbackLabel: a } = e,
            o = (0, f.V)(null == n ? void 0 : n.skuId),
            {
                accessibilityLabel: s,
                thumbnailPreviewSrc: l,
                title: c,
            } = null != (t = null == o ? void 0 : o.config) ? t : {},
            u = i.useMemo(() => (0, m.JE)(l), [l]);
        return null == o
            ? a
            : (0, r.jsxs)("div", {
                  className: b.profileEffectContainer,
                  children: [
                      (0, r.jsx)("img", {
                          src: v,
                          alt: s,
                          className: b.profileEffectBackground,
                      }),
                      (0, r.jsx)("img", {
                          className: b.profileEffect,
                          src: u,
                          alt: c,
                      }),
                  ],
              });
    },
    T = (e) => {
        let { nameplate: t, fallbackLabel: n } = e,
            [a, o] = i.useState(!1),
            s = i.useCallback(() => o(!0), []),
            l = i.useCallback(() => o(!1), []);
        return null == t
            ? n
            : (0, r.jsx)("div", {
                  className: b.nameplateContainer,
                  onMouseEnter: s,
                  onMouseLeave: l,
                  children: (0, r.jsx)(d.Z, {
                      nameplate: (0, h.E)(t),
                      hovered: a,
                      placement: u.i.MINI_PREVIEW,
                  }),
              });
    },
    C = (e) => {
        let { product: t, fallbackLabel: n } = e,
            { firstAvatarDecoration: i, firstProfileEffect: a, firstNameplate: o } = (0, _.Rj)(t);
        return null == i && null == a && null == o
            ? n
            : (0, r.jsxs)("div", {
                  className: b.bundleMiniPreview,
                  children: [
                      null != a &&
                          (0, r.jsx)("div", {
                              className: b.bundleMiniProfileEffectContainer,
                              children: (0, r.jsx)(I, {
                                  profileEffect: a,
                                  fallbackLabel: null,
                              }),
                          }),
                      null != o &&
                          (0, r.jsx)("div", {
                              className: b.bundleMiniNameplateContainer,
                              children: (0, r.jsx)(T, {
                                  nameplate: o,
                                  fallbackLabel: null,
                              }),
                          }),
                      null != i &&
                          (0, r.jsx)("div", {
                              className: b.bundleMiniAvatarDecorationContainer,
                              children: (0, r.jsx)(S, {
                                  avatarDecoration: i,
                                  avatarSize: l.EFr.SIZE_24,
                              }),
                          }),
                  ],
              });
    },
    A = (e) => {
        var t;
        let { product: n, sku: i, fallbackLabel: s } = e,
            c = null == i ? void 0 : i.id,
            u = (0, o.e7)([p.Z], () => p.Z.getProduct(null == i ? void 0 : i.id)),
            d = null != n ? n : u;
        if ((null == d ? void 0 : d.type) === a.Z.BUNDLE)
            return (0, r.jsx)(C, {
                product: d,
                fallbackLabel: s,
            });
        let [f] = null != (t = null == d ? void 0 : d.items) ? t : [];
        return void 0 !== c && c in g.K
            ? g.K[c].render({
                  animationState: "on_hover",
                  className: b.externalProductAsset,
              })
            : (null == f ? void 0 : f.type) === a.Z.AVATAR_DECORATION
              ? (0, r.jsx)(S, {
                    avatarDecoration: f,
                    avatarSize: l.EFr.SIZE_40,
                })
              : (null == f ? void 0 : f.type) === a.Z.PROFILE_EFFECT
                ? (0, r.jsx)(I, {
                      profileEffect: f,
                      fallbackLabel: s,
                  })
                : (null == f ? void 0 : f.type) === a.Z.NAMEPLATE
                  ? (0, r.jsx)(T, {
                        nameplate: f,
                        fallbackLabel: s,
                    })
                  : s;
    };
