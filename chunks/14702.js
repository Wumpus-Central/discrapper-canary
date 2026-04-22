n.d(t, { O: () => N, a: () => S });
var a = n(627968),
    r = n(64700),
    l = n(503698),
    i = n.n(l),
    s = n(575593),
    o = n(311907),
    u = n(462887),
    c = n(778712),
    d = n(736653),
    m = n(590180),
    p = n(320447),
    _ = n(442759),
    f = n(88686),
    g = n(780898),
    b = n(214881),
    v = n(942426),
    x = n(181774),
    h = n(132198),
    I = n(929283),
    A = n(741717),
    y = n(180171),
    T = n(989099),
    E = n(370184);
let C = (e) => {
        let { avatarDecoration: t, avatarSize: n } = e,
            r = (0, d.Ay)(),
            l = (0, u.q)(r);
        return (0, a.jsx)(I.i, {
            item: t,
            avatarSize: n,
            isHighlighted: !1,
            avatarPlaceholderSrc: l ? T : y,
            className: A.M,
        });
    },
    P = (e) => {
        let { item: t, fallbackLabel: n } = e,
            l = (0, v.A)(t.skuId),
            { accessibilityLabel: i, thumbnailPreviewSrc: s, title: o } = l ?? {},
            u = r.useMemo(() => (0, x.Rc)(s), [s]);
        return null == l
            ? n
            : (0, a.jsxs)("div", {
                  className: A.YS,
                  children: [
                      (0, a.jsx)("img", { src: E.A, alt: i, className: A.Zp }),
                      (0, a.jsx)("img", { className: A.Hm, src: u, alt: o }),
                  ],
              });
    },
    L = (e) => {
        let { nameplate: t, fallbackLabel: n } = e,
            [l, i] = r.useState(!1),
            s = r.useCallback(() => i(!0), []),
            o = r.useCallback(() => i(!1), []);
        return null == t
            ? n
            : (0, a.jsx)("div", {
                  className: A.rz,
                  onMouseEnter: s,
                  onMouseLeave: o,
                  children: (0, a.jsx)(b.A, { nameplate: (0, g.WK)(t), hovered: l, placement: f.u.MINI_PREVIEW }),
              });
    },
    S = (e) => {
        let { product: t, fallbackLabel: n, staticPreviewClassName: r } = e,
            { firstAvatarDecoration: l, firstProfileEffect: s, firstNameplate: o } = (0, _.f5)(t),
            { enabled: u } = (0, p.P)("BundleMiniPreview"),
            d = t.previewAssets?.fgStatic;
        return u && null != d
            ? (0, a.jsx)("img", { src: d, alt: t.name, className: i()(A.C0, r) })
            : null == l && null == s && null == o
              ? n
              : (0, a.jsxs)("div", {
                    className: A.WJ,
                    children: [
                        null != s &&
                            (0, a.jsx)("div", {
                                className: A.zh,
                                children: (0, a.jsx)(P, { item: s, fallbackLabel: null }),
                            }),
                        null != o &&
                            (0, a.jsx)("div", {
                                className: A.sY,
                                children: (0, a.jsx)(L, { nameplate: o, fallbackLabel: null }),
                            }),
                        null != l &&
                            (0, a.jsx)("div", {
                                className: A.kf,
                                children: (0, a.jsx)(C, { avatarDecoration: l, avatarSize: c._3.SIZE_24 }),
                            }),
                    ],
                });
    },
    N = (e) => {
        let { product: t, sku: n, fallbackLabel: r } = e,
            l = n?.id,
            i = (0, o.bG)([m.A], () => m.A.getProduct(n?.id)),
            u = t ?? i;
        if (u?.type === s.R.BUNDLE) return (0, a.jsx)(S, { product: u, fallbackLabel: r });
        let [d] = u?.items ?? [];
        return void 0 !== l && l in h.m
            ? h.m[l].render({ animationState: "on_hover", className: A.Vr })
            : d?.type === s.R.AVATAR_DECORATION
              ? (0, a.jsx)(C, { avatarDecoration: d, avatarSize: c._3.SIZE_40 })
              : d?.type === s.R.PROFILE_EFFECT
                ? (0, a.jsx)(P, { item: d, fallbackLabel: r })
                : d?.type === s.R.NAMEPLATE
                  ? (0, a.jsx)(L, { nameplate: d, fallbackLabel: r })
                  : r;
    };
