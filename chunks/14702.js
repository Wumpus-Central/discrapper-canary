n.d(t, { O: () => N, a: () => T });
var a = n(627968),
    r = n(64700),
    l = n(503698),
    i = n.n(l),
    s = n(575593),
    o = n(17928),
    c = n(462887),
    d = n(778712),
    u = n(736653),
    p = n(590180),
    _ = n(320447),
    m = n(442759),
    b = n(88686),
    f = n(780898),
    g = n(174755),
    h = n(942426),
    x = n(181774),
    v = n(132198),
    A = n(929283),
    y = n(38357),
    I = n(180171),
    j = n(989099),
    E = n(370184);
let P = (e) => {
        let { avatarDecoration: t, avatarSize: n } = e,
            r = (0, u.Ay)(),
            l = (0, c.q)(r);
        return (0, a.jsx)(A.i, {
            item: t,
            avatarSize: n,
            isHighlighted: !1,
            avatarPlaceholderSrc: l ? j : I,
            className: y.M,
        });
    },
    S = (e) => {
        let { item: t, fallbackLabel: n } = e,
            l = (0, h.A)(t.skuId),
            { accessibilityLabel: i, thumbnailPreviewSrc: s, title: o } = l ?? {},
            c = r.useMemo(() => (0, x.Rc)(s), [s]);
        return null == l
            ? n
            : (0, a.jsxs)("div", {
                  className: y.YS,
                  children: [
                      (0, a.jsx)("img", { src: E.A, alt: i, className: y.Zp }),
                      (0, a.jsx)("img", { className: y.Hm, src: c, alt: o }),
                  ],
              });
    },
    k = (e) => {
        let { nameplate: t, fallbackLabel: n } = e,
            [l, i] = r.useState(!1),
            s = r.useCallback(() => i(!0), []),
            o = r.useCallback(() => i(!1), []);
        return null == t
            ? n
            : (0, a.jsx)("div", {
                  className: y.rz,
                  onMouseEnter: s,
                  onMouseLeave: o,
                  children: (0, a.jsx)(g.A, { nameplate: (0, f.WK)(t), hovered: l, placement: b.u.MINI_PREVIEW }),
              });
    },
    T = (e) => {
        let { product: t, fallbackLabel: n, staticPreviewClassName: r } = e,
            { firstAvatarDecoration: l, firstProfileEffect: s, firstNameplate: o } = (0, m.f5)(t),
            { enabled: c } = (0, _.P)("BundleMiniPreview"),
            u = t.previewAssets?.fgStatic;
        return c && null != u
            ? (0, a.jsx)("img", { src: u, alt: t.name, className: i()(y.C0, r) })
            : null == l && null == s && null == o
              ? n
              : (0, a.jsxs)("div", {
                    className: y.WJ,
                    children: [
                        null != s &&
                            (0, a.jsx)("div", {
                                className: y.zh,
                                children: (0, a.jsx)(S, { item: s, fallbackLabel: null }),
                            }),
                        null != o &&
                            (0, a.jsx)("div", {
                                className: y.sY,
                                children: (0, a.jsx)(k, { nameplate: o, fallbackLabel: null }),
                            }),
                        null != l &&
                            (0, a.jsx)("div", {
                                className: y.kf,
                                children: (0, a.jsx)(P, { avatarDecoration: l, avatarSize: d._3.SIZE_24 }),
                            }),
                    ],
                });
    },
    N = (e) => {
        let { product: t, sku: n, fallbackLabel: r } = e,
            l = n?.id,
            i = (0, o.bG)([p.A], () => p.A.getProduct(n?.id)),
            c = t ?? i;
        if (c?.type === s.R.BUNDLE) return (0, a.jsx)(T, { product: c, fallbackLabel: r });
        let [u] = c?.items ?? [];
        return void 0 !== l && l in v.m
            ? v.m[l].render({ animationState: "on_hover", className: y.Vr })
            : u?.type === s.R.AVATAR_DECORATION
              ? (0, a.jsx)(P, { avatarDecoration: u, avatarSize: d._3.SIZE_40 })
              : u?.type === s.R.PROFILE_EFFECT
                ? (0, a.jsx)(S, { item: u, fallbackLabel: r })
                : u?.type === s.R.NAMEPLATE
                  ? (0, a.jsx)(k, { nameplate: u, fallbackLabel: r })
                  : r;
    };
