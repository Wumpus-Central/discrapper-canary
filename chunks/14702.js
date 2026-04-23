"use strict";
n.d(t, { O: () => L, a: () => D });
var i = n(627968),
    r = n(64700),
    s = n(503698),
    a = n.n(s),
    o = n(575593),
    l = n(17928),
    d = n(462887),
    _ = n(778712),
    u = n(736653),
    c = n(590180),
    E = n(320447),
    h = n(442759),
    m = n(88686),
    f = n(780898),
    g = n(174755),
    p = n(942426),
    A = n(181774),
    I = n(132198),
    T = n(929283),
    S = n(38357),
    N = n(180171),
    C = n(989099),
    R = n(370184);
let O = (e) => {
        let { avatarDecoration: t, avatarSize: n } = e,
            r = (0, u.Ay)(),
            s = (0, d.q)(r);
        return (0, i.jsx)(T.i, {
            item: t,
            avatarSize: n,
            isHighlighted: !1,
            avatarPlaceholderSrc: s ? C : N,
            className: S.M,
        });
    },
    y = (e) => {
        let { item: t, fallbackLabel: n } = e,
            s = (0, p.A)(t.skuId),
            { accessibilityLabel: a, thumbnailPreviewSrc: o, title: l } = s ?? {},
            d = r.useMemo(() => (0, A.Rc)(o), [o]);
        return null == s
            ? n
            : (0, i.jsxs)("div", {
                  className: S.YS,
                  children: [
                      (0, i.jsx)("img", { src: R.A, alt: a, className: S.Zp }),
                      (0, i.jsx)("img", { className: S.Hm, src: d, alt: l }),
                  ],
              });
    },
    v = (e) => {
        let { nameplate: t, fallbackLabel: n } = e,
            [s, a] = r.useState(!1),
            o = r.useCallback(() => a(!0), []),
            l = r.useCallback(() => a(!1), []);
        return null == t
            ? n
            : (0, i.jsx)("div", {
                  className: S.rz,
                  onMouseEnter: o,
                  onMouseLeave: l,
                  children: (0, i.jsx)(g.A, { nameplate: (0, f.WK)(t), hovered: s, placement: m.u.MINI_PREVIEW }),
              });
    },
    D = (e) => {
        let { product: t, fallbackLabel: n, staticPreviewClassName: r } = e,
            { firstAvatarDecoration: s, firstProfileEffect: o, firstNameplate: l } = (0, h.f5)(t),
            { enabled: d } = (0, E.P)("BundleMiniPreview"),
            u = t.previewAssets?.fgStatic;
        return d && null != u
            ? (0, i.jsx)("img", { src: u, alt: t.name, className: a()(S.C0, r) })
            : null == s && null == o && null == l
              ? n
              : (0, i.jsxs)("div", {
                    className: S.WJ,
                    children: [
                        null != o &&
                            (0, i.jsx)("div", {
                                className: S.zh,
                                children: (0, i.jsx)(y, { item: o, fallbackLabel: null }),
                            }),
                        null != l &&
                            (0, i.jsx)("div", {
                                className: S.sY,
                                children: (0, i.jsx)(v, { nameplate: l, fallbackLabel: null }),
                            }),
                        null != s &&
                            (0, i.jsx)("div", {
                                className: S.kf,
                                children: (0, i.jsx)(O, { avatarDecoration: s, avatarSize: _._3.SIZE_24 }),
                            }),
                    ],
                });
    },
    L = (e) => {
        let { product: t, sku: n, fallbackLabel: r } = e,
            s = n?.id,
            a = (0, l.bG)([c.A], () => c.A.getProduct(n?.id)),
            d = t ?? a;
        if (d?.type === o.R.BUNDLE) return (0, i.jsx)(D, { product: d, fallbackLabel: r });
        let [u] = d?.items ?? [];
        return void 0 !== s && s in I.m
            ? I.m[s].render({ animationState: "on_hover", className: S.Vr })
            : u?.type === o.R.AVATAR_DECORATION
              ? (0, i.jsx)(O, { avatarDecoration: u, avatarSize: _._3.SIZE_40 })
              : u?.type === o.R.PROFILE_EFFECT
                ? (0, i.jsx)(y, { item: u, fallbackLabel: r })
                : u?.type === o.R.NAMEPLATE
                  ? (0, i.jsx)(v, { nameplate: u, fallbackLabel: r })
                  : r;
    };
