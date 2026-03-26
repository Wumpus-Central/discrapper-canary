"use strict";
n.d(t, { O: () => O, a: () => R });
var r = n(627968),
    i = n(64700),
    s = n(575593),
    a = n(311907),
    o = n(582754),
    l = n(397927),
    u = n(736653),
    c = n(262737),
    d = n(590180),
    _ = n(320447),
    f = n(442759),
    p = n(88686),
    h = n(780898),
    m = n(214881),
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
            s = (0, c.V)(t?.skuId),
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
                  children: (0, r.jsx)(m.A, { nameplate: (0, h.WK)(t), hovered: s, placement: p.u.MINI_PREVIEW }),
              });
    },
    R = (e) => {
        let { product: t, fallbackLabel: n } = e,
            { firstAvatarDecoration: i, firstProfileEffect: s, firstNameplate: a } = (0, f.f5)(t),
            { enabled: o } = (0, _.P)("BundleMiniPreview"),
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
            u = (0, a.bG)([d.A], () => d.A.getProduct(n?.id)),
            c = t ?? u;
        if (c?.type === s.R.BUNDLE) return (0, r.jsx)(R, { product: c, fallbackLabel: i });
        let [_] = c?.items ?? [];
        return void 0 !== o && o in g.m
            ? g.m[o].render({ animationState: "on_hover", className: I.Vr })
            : _?.type === s.R.AVATAR_DECORATION
              ? (0, r.jsx)(v, { avatarDecoration: _, avatarSize: l._3J.SIZE_40 })
              : _?.type === s.R.PROFILE_EFFECT
                ? (0, r.jsx)(N, { profileEffect: _, fallbackLabel: i })
                : _?.type === s.R.NAMEPLATE
                  ? (0, r.jsx)(C, { nameplate: _, fallbackLabel: i })
                  : i;
    };
