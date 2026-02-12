"use strict";
n.d(t, { O: () => R, a: () => N });
var r = n(627968),
    i = n(64700),
    a = n(575593),
    s = n(311907),
    o = n(582754),
    l = n(397927),
    u = n(736653),
    c = n(226540),
    d = n(369496),
    _ = n(227),
    f = n(262737),
    h = n(590180),
    p = n(442759),
    g = n(181774),
    E = n(132198),
    A = n(929283),
    I = n(190016),
    T = n(180171),
    y = n(989099),
    S = n(191761);
let v = (e) => {
        let { avatarDecoration: t, avatarSize: n } = e,
            i = (0, u.Ay)(),
            a = (0, o.qB)(i) ? y : T;
        return (0, r.jsx)(A.i, { item: t, avatarSize: n, isHighlighted: !1, avatarPlaceholderSrc: a, className: I.M });
    },
    C = (e) => {
        let { profileEffect: t, fallbackLabel: n } = e,
            a = (0, f.V)(t?.skuId),
            { accessibilityLabel: s, thumbnailPreviewSrc: o, title: l } = a?.config ?? {},
            u = i.useMemo(() => (0, g.Rc)(o), [o]);
        return null == a
            ? n
            : (0, r.jsxs)("div", {
                  className: I.YS,
                  children: [
                      (0, r.jsx)("img", { src: S, alt: s, className: I.Zp }),
                      (0, r.jsx)("img", { className: I.Hm, src: u, alt: l }),
                  ],
              });
    },
    b = (e) => {
        let { nameplate: t, fallbackLabel: n } = e,
            [a, s] = i.useState(!1),
            o = i.useCallback(() => s(!0), []),
            l = i.useCallback(() => s(!1), []);
        return null == t
            ? n
            : (0, r.jsx)("div", {
                  className: I.rz,
                  onMouseEnter: o,
                  onMouseLeave: l,
                  children: (0, r.jsx)(_.A, { nameplate: (0, d.WK)(t), hovered: a, placement: c.u.MINI_PREVIEW }),
              });
    },
    N = (e) => {
        let { product: t, fallbackLabel: n } = e,
            { firstAvatarDecoration: i, firstProfileEffect: a, firstNameplate: s } = (0, p.f5)(t);
        return null == i && null == a && null == s
            ? n
            : (0, r.jsxs)("div", {
                  className: I.WJ,
                  children: [
                      null != a &&
                          (0, r.jsx)("div", {
                              className: I.zh,
                              children: (0, r.jsx)(C, { profileEffect: a, fallbackLabel: null }),
                          }),
                      null != s &&
                          (0, r.jsx)("div", {
                              className: I.sY,
                              children: (0, r.jsx)(b, { nameplate: s, fallbackLabel: null }),
                          }),
                      null != i &&
                          (0, r.jsx)("div", {
                              className: I.kf,
                              children: (0, r.jsx)(v, { avatarDecoration: i, avatarSize: l._3J.SIZE_24 }),
                          }),
                  ],
              });
    },
    R = (e) => {
        let { product: t, sku: n, fallbackLabel: i } = e,
            o = n?.id,
            u = (0, s.bG)([h.A], () => h.A.getProduct(n?.id)),
            c = t ?? u;
        if (c?.type === a.R.BUNDLE) return (0, r.jsx)(N, { product: c, fallbackLabel: i });
        let [d] = c?.items ?? [];
        return void 0 !== o && o in E.m
            ? E.m[o].render({ animationState: "on_hover", className: I.Vr })
            : d?.type === a.R.AVATAR_DECORATION
              ? (0, r.jsx)(v, { avatarDecoration: d, avatarSize: l._3J.SIZE_40 })
              : d?.type === a.R.PROFILE_EFFECT
                ? (0, r.jsx)(C, { profileEffect: d, fallbackLabel: i })
                : d?.type === a.R.NAMEPLATE
                  ? (0, r.jsx)(b, { nameplate: d, fallbackLabel: i })
                  : i;
    };
