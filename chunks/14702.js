"use strict";
n.d(t, { O: () => O, a: () => R });
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
    h = n(320447),
    m = n(442759),
    E = n(181774),
    g = n(132198),
    A = n(929283),
    I = n(190016),
    T = n(180171),
    S = n(989099),
    y = n(370184);
let v = (e) => {
        let { avatarDecoration: t, avatarSize: n } = e,
            i = (0, u.Ay)(),
            s = (0, o.qB)(i) ? S : T;
        return (0, r.jsx)(A.i, { item: t, avatarSize: n, isHighlighted: !1, avatarPlaceholderSrc: s, className: I.M });
    },
    N = (e) => {
        let { profileEffect: t, fallbackLabel: n } = e,
            s = (0, f.V)(t?.skuId),
            { accessibilityLabel: a, thumbnailPreviewSrc: o, title: l } = s?.config ?? {},
            u = i.useMemo(() => (0, E.Rc)(o), [o]);
        return null == s
            ? n
            : (0, r.jsxs)("div", {
                  className: I.YS,
                  children: [
                      (0, r.jsx)("img", { src: y.A, alt: a, className: I.Zp }),
                      (0, r.jsx)("img", { className: I.Hm, src: u, alt: l }),
                  ],
              });
    },
    C = (e) => {
        let { nameplate: t, fallbackLabel: n } = e,
            [s, a] = i.useState(!1),
            o = i.useCallback(() => a(!0), []),
            l = i.useCallback(() => a(!1), []);
        return null == t
            ? n
            : (0, r.jsx)("div", {
                  className: I.rz,
                  onMouseEnter: o,
                  onMouseLeave: l,
                  children: (0, r.jsx)(_.A, { nameplate: (0, d.WK)(t), hovered: s, placement: c.u.MINI_PREVIEW }),
              });
    },
    R = (e) => {
        let { product: t, fallbackLabel: n } = e,
            { firstAvatarDecoration: i, firstProfileEffect: s, firstNameplate: a } = (0, m.f5)(t),
            { enabled: o } = (0, h.P)("BundleMiniPreview"),
            u = t.previewAssets?.fgStatic;
        return o && null != u
            ? (0, r.jsx)("img", { src: u, alt: t.name, className: I.C0 })
            : null == i && null == s && null == a
              ? n
              : (0, r.jsxs)("div", {
                    className: I.WJ,
                    children: [
                        null != s &&
                            (0, r.jsx)("div", {
                                className: I.zh,
                                children: (0, r.jsx)(N, { profileEffect: s, fallbackLabel: null }),
                            }),
                        null != a &&
                            (0, r.jsx)("div", {
                                className: I.sY,
                                children: (0, r.jsx)(C, { nameplate: a, fallbackLabel: null }),
                            }),
                        null != i &&
                            (0, r.jsx)("div", {
                                className: I.kf,
                                children: (0, r.jsx)(v, { avatarDecoration: i, avatarSize: l._3J.SIZE_24 }),
                            }),
                    ],
                });
    },
    O = (e) => {
        let { product: t, sku: n, fallbackLabel: i } = e,
            o = n?.id,
            u = (0, a.bG)([p.A], () => p.A.getProduct(n?.id)),
            c = t ?? u;
        if (c?.type === s.R.BUNDLE) return (0, r.jsx)(R, { product: c, fallbackLabel: i });
        let [d] = c?.items ?? [];
        return void 0 !== o && o in g.m
            ? g.m[o].render({ animationState: "on_hover", className: I.Vr })
            : d?.type === s.R.AVATAR_DECORATION
              ? (0, r.jsx)(v, { avatarDecoration: d, avatarSize: l._3J.SIZE_40 })
              : d?.type === s.R.PROFILE_EFFECT
                ? (0, r.jsx)(N, { profileEffect: d, fallbackLabel: i })
                : d?.type === s.R.NAMEPLATE
                  ? (0, r.jsx)(C, { nameplate: d, fallbackLabel: i })
                  : i;
    };
