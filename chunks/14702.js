"use strict";
n.d(t, { O: () => R, a: () => C });
var r = n(627968),
    i = n(64700),
    s = n(575593),
    a = n(311907),
    o = n(582754),
    l = n(397927),
    u = n(736653),
    c = n(226540),
    d = n(369496),
    _ = n(227),
    f = n(262737),
    p = n(590180),
    h = n(442759),
    m = n(181774),
    E = n(132198),
    g = n(929283),
    A = n(190016),
    I = n(180171),
    T = n(989099),
    S = n(370184);
let y = (e) => {
        let { avatarDecoration: t, avatarSize: n } = e,
            i = (0, u.Ay)(),
            s = (0, o.qB)(i) ? T : I;
        return (0, r.jsx)(g.i, { item: t, avatarSize: n, isHighlighted: !1, avatarPlaceholderSrc: s, className: A.M });
    },
    v = (e) => {
        let { profileEffect: t, fallbackLabel: n } = e,
            s = (0, f.V)(t?.skuId),
            { accessibilityLabel: a, thumbnailPreviewSrc: o, title: l } = s?.config ?? {},
            u = i.useMemo(() => (0, m.Rc)(o), [o]);
        return null == s
            ? n
            : (0, r.jsxs)("div", {
                  className: A.YS,
                  children: [
                      (0, r.jsx)("img", { src: S.A, alt: a, className: A.Zp }),
                      (0, r.jsx)("img", { className: A.Hm, src: u, alt: l }),
                  ],
              });
    },
    N = (e) => {
        let { nameplate: t, fallbackLabel: n } = e,
            [s, a] = i.useState(!1),
            o = i.useCallback(() => a(!0), []),
            l = i.useCallback(() => a(!1), []);
        return null == t
            ? n
            : (0, r.jsx)("div", {
                  className: A.rz,
                  onMouseEnter: o,
                  onMouseLeave: l,
                  children: (0, r.jsx)(_.A, { nameplate: (0, d.WK)(t), hovered: s, placement: c.u.MINI_PREVIEW }),
              });
    },
    C = (e) => {
        let { product: t, fallbackLabel: n } = e,
            { firstAvatarDecoration: i, firstProfileEffect: s, firstNameplate: a } = (0, h.f5)(t);
        return null == i && null == s && null == a
            ? n
            : (0, r.jsxs)("div", {
                  className: A.WJ,
                  children: [
                      null != s &&
                          (0, r.jsx)("div", {
                              className: A.zh,
                              children: (0, r.jsx)(v, { profileEffect: s, fallbackLabel: null }),
                          }),
                      null != a &&
                          (0, r.jsx)("div", {
                              className: A.sY,
                              children: (0, r.jsx)(N, { nameplate: a, fallbackLabel: null }),
                          }),
                      null != i &&
                          (0, r.jsx)("div", {
                              className: A.kf,
                              children: (0, r.jsx)(y, { avatarDecoration: i, avatarSize: l._3J.SIZE_24 }),
                          }),
                  ],
              });
    },
    R = (e) => {
        let { product: t, sku: n, fallbackLabel: i } = e,
            o = n?.id,
            u = (0, a.bG)([p.A], () => p.A.getProduct(n?.id)),
            c = t ?? u;
        if (c?.type === s.R.BUNDLE) return (0, r.jsx)(C, { product: c, fallbackLabel: i });
        let [d] = c?.items ?? [];
        return void 0 !== o && o in E.m
            ? E.m[o].render({ animationState: "on_hover", className: A.Vr })
            : d?.type === s.R.AVATAR_DECORATION
              ? (0, r.jsx)(y, { avatarDecoration: d, avatarSize: l._3J.SIZE_40 })
              : d?.type === s.R.PROFILE_EFFECT
                ? (0, r.jsx)(v, { profileEffect: d, fallbackLabel: i })
                : d?.type === s.R.NAMEPLATE
                  ? (0, r.jsx)(N, { nameplate: d, fallbackLabel: i })
                  : i;
    };
