"use strict";
n.d(t, { O: () => N });
var r = n(627968),
    i = n(64700),
    a = n(575593),
    s = n(311907),
    o = n(582754),
    l = n(397927),
    u = n(736653),
    c = n(226540),
    d = n(227),
    _ = n(262737),
    f = n(590180),
    p = n(442759),
    h = n(181774),
    m = n(628856),
    g = n(132198),
    E = n(929283),
    A = n(190016),
    I = n(180171),
    T = n(989099),
    y = n(191761);
let S = (e) => {
        let { avatarDecoration: t, avatarSize: n } = e,
            i = (0, u.Ay)(),
            a = (0, o.qB)(i) ? T : I;
        return (0, r.jsx)(E.i, { item: t, avatarSize: n, isHighlighted: !1, avatarPlaceholderSrc: a, className: A.M });
    },
    v = (e) => {
        let { profileEffect: t, fallbackLabel: n } = e,
            a = (0, _.V)(t?.skuId),
            { accessibilityLabel: s, thumbnailPreviewSrc: o, title: l } = a?.config ?? {},
            u = i.useMemo(() => (0, h.Rc)(o), [o]);
        return null == a
            ? n
            : (0, r.jsxs)("div", {
                  className: A.YS,
                  children: [
                      (0, r.jsx)("img", { src: y, alt: s, className: A.Zp }),
                      (0, r.jsx)("img", { className: A.Hm, src: u, alt: l }),
                  ],
              });
    },
    C = (e) => {
        let { nameplate: t, fallbackLabel: n } = e,
            [a, s] = i.useState(!1),
            o = i.useCallback(() => s(!0), []),
            l = i.useCallback(() => s(!1), []);
        return null == t
            ? n
            : (0, r.jsx)("div", {
                  className: A.rz,
                  onMouseEnter: o,
                  onMouseLeave: l,
                  children: (0, r.jsx)(d.A, { nameplate: (0, m.D)(t), hovered: a, placement: c.u.MINI_PREVIEW }),
              });
    },
    b = (e) => {
        let { product: t, fallbackLabel: n } = e,
            { firstAvatarDecoration: i, firstProfileEffect: a, firstNameplate: s } = (0, p.f5)(t);
        return null == i && null == a && null == s
            ? n
            : (0, r.jsxs)("div", {
                  className: A.WJ,
                  children: [
                      null != a &&
                          (0, r.jsx)("div", {
                              className: A.zh,
                              children: (0, r.jsx)(v, { profileEffect: a, fallbackLabel: null }),
                          }),
                      null != s &&
                          (0, r.jsx)("div", {
                              className: A.sY,
                              children: (0, r.jsx)(C, { nameplate: s, fallbackLabel: null }),
                          }),
                      null != i &&
                          (0, r.jsx)("div", {
                              className: A.kf,
                              children: (0, r.jsx)(S, { avatarDecoration: i, avatarSize: l._3J.SIZE_24 }),
                          }),
                  ],
              });
    },
    N = (e) => {
        let { product: t, sku: n, fallbackLabel: i } = e,
            o = n?.id,
            u = (0, s.bG)([f.A], () => f.A.getProduct(n?.id)),
            c = t ?? u;
        if (c?.type === a.R.BUNDLE) return (0, r.jsx)(b, { product: c, fallbackLabel: i });
        let [d] = c?.items ?? [];
        return void 0 !== o && o in g.m
            ? g.m[o].render({ animationState: "on_hover", className: A.Vr })
            : d?.type === a.R.AVATAR_DECORATION
              ? (0, r.jsx)(S, { avatarDecoration: d, avatarSize: l._3J.SIZE_40 })
              : d?.type === a.R.PROFILE_EFFECT
                ? (0, r.jsx)(v, { profileEffect: d, fallbackLabel: i })
                : d?.type === a.R.NAMEPLATE
                  ? (0, r.jsx)(C, { nameplate: d, fallbackLabel: i })
                  : i;
    };
