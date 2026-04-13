"use strict";
n.d(t, { O: () => D, a: () => b });
var r = n(627968),
    i = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(575593),
    l = n(311907),
    u = n(582754),
    c = n(397927),
    d = n(736653),
    _ = n(590180),
    f = n(320447),
    p = n(442759),
    h = n(88686),
    m = n(780898),
    E = n(214881),
    g = n(942426),
    A = n(181774),
    I = n(132198),
    T = n(929283),
    S = n(581989),
    y = n(180171),
    v = n(989099),
    N = n(370184);
let C = (e) => {
        let { avatarDecoration: t, avatarSize: n } = e,
            i = (0, d.Ay)(),
            s = (0, u.qB)(i) ? v : y;
        return (0, r.jsx)(T.i, { item: t, avatarSize: n, isHighlighted: !1, avatarPlaceholderSrc: s, className: S.M });
    },
    R = (e) => {
        let { item: t, fallbackLabel: n } = e,
            s = (0, g.A)(t.skuId),
            { accessibilityLabel: a, thumbnailPreviewSrc: o, title: l } = s ?? {},
            u = i.useMemo(() => (0, A.Rc)(o), [o]);
        return null == s
            ? n
            : (0, r.jsxs)("div", {
                  className: S.YS,
                  children: [
                      (0, r.jsx)("img", { src: N.A, alt: a, className: S.Zp }),
                      (0, r.jsx)("img", { className: S.Hm, src: u, alt: l }),
                  ],
              });
    },
    O = (e) => {
        let { nameplate: t, fallbackLabel: n } = e,
            [s, a] = i.useState(!1),
            o = i.useCallback(() => a(!0), []),
            l = i.useCallback(() => a(!1), []);
        return null == t
            ? n
            : (0, r.jsx)("div", {
                  className: S.rz,
                  onMouseEnter: o,
                  onMouseLeave: l,
                  children: (0, r.jsx)(E.A, { nameplate: (0, m.WK)(t), hovered: s, placement: h.u.MINI_PREVIEW }),
              });
    },
    b = (e) => {
        let { product: t, fallbackLabel: n, staticPreviewClassName: i } = e,
            { firstAvatarDecoration: s, firstProfileEffect: o, firstNameplate: l } = (0, p.f5)(t),
            { enabled: u } = (0, f.P)("BundleMiniPreview"),
            d = t.previewAssets?.fgStatic;
        return u && null != d
            ? (0, r.jsx)("img", { src: d, alt: t.name, className: a()(S.C0, i) })
            : null == s && null == o && null == l
              ? n
              : (0, r.jsxs)("div", {
                    className: S.WJ,
                    children: [
                        null != o &&
                            (0, r.jsx)("div", {
                                className: S.zh,
                                children: (0, r.jsx)(R, { item: o, fallbackLabel: null }),
                            }),
                        null != l &&
                            (0, r.jsx)("div", {
                                className: S.sY,
                                children: (0, r.jsx)(O, { nameplate: l, fallbackLabel: null }),
                            }),
                        null != s &&
                            (0, r.jsx)("div", {
                                className: S.kf,
                                children: (0, r.jsx)(C, { avatarDecoration: s, avatarSize: c._3J.SIZE_24 }),
                            }),
                    ],
                });
    },
    D = (e) => {
        let { product: t, sku: n, fallbackLabel: i } = e,
            s = n?.id,
            a = (0, l.bG)([_.A], () => _.A.getProduct(n?.id)),
            u = t ?? a;
        if (u?.type === o.R.BUNDLE) return (0, r.jsx)(b, { product: u, fallbackLabel: i });
        let [d] = u?.items ?? [];
        return void 0 !== s && s in I.m
            ? I.m[s].render({ animationState: "on_hover", className: S.Vr })
            : d?.type === o.R.AVATAR_DECORATION
              ? (0, r.jsx)(C, { avatarDecoration: d, avatarSize: c._3J.SIZE_40 })
              : d?.type === o.R.PROFILE_EFFECT
                ? (0, r.jsx)(R, { item: d, fallbackLabel: i })
                : d?.type === o.R.NAMEPLATE
                  ? (0, r.jsx)(O, { nameplate: d, fallbackLabel: i })
                  : i;
    };
