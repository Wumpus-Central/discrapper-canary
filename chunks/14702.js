n.d(t, { O: () => L, a: () => C });
var r = n(627968),
    a = n(64700),
    s = n(503698),
    l = n.n(s),
    i = n(575593),
    c = n(17928),
    u = n(462887),
    o = n(778712),
    d = n(736653),
    m = n(590180),
    p = n(320447),
    x = n(442759),
    v = n(88686),
    h = n(780898),
    g = n(174755),
    f = n(942426),
    b = n(887792),
    j = n(181774),
    _ = n(132198),
    A = n(929283),
    y = n(38357),
    N = n(180171),
    E = n(989099),
    I = n(370184);
let k = (e) => {
        let { avatarDecoration: t, avatarSize: n } = e,
            a = (0, d.Ay)(),
            s = (0, u.q)(a);
        return (0, r.jsx)(A.i, {
            item: t,
            avatarSize: n,
            isHighlighted: !1,
            avatarPlaceholderSrc: s ? E : N,
            className: y.M,
        });
    },
    P = (e) => {
        let { item: t } = e,
            n = (0, f.A)(t.skuId),
            { accessibilityLabel: s, thumbnailPreviewSrc: l, title: i } = n ?? {},
            c = a.useMemo(() => (0, j.Rc)(l), [l]);
        return null == n
            ? null
            : (0, r.jsxs)("div", {
                  className: y.ti,
                  children: [
                      (0, r.jsx)("img", { src: I.A, alt: s, className: y.Zp }),
                      (0, r.jsx)("img", { className: y.Hm, src: c, alt: i }),
                  ],
              });
    },
    T = (e) => {
        let { item: t } = e;
        return (0, r.jsx)("div", { className: y.ti, children: (0, r.jsx)(b.A, { frame: t }) });
    },
    R = (e) => {
        let { nameplate: t } = e,
            [n, s] = a.useState(!1),
            l = a.useCallback(() => s(!0), []),
            i = a.useCallback(() => s(!1), []);
        return null == t
            ? null
            : (0, r.jsx)("div", {
                  className: y.rz,
                  onMouseEnter: l,
                  onMouseLeave: i,
                  children: (0, r.jsx)(g.A, { nameplate: (0, h.WK)(t), hovered: n, placement: v.u.MINI_PREVIEW }),
              });
    },
    C = (e) => {
        let { product: t, staticPreviewClassName: n } = e,
            { firstAvatarDecoration: a, firstProfileEffect: s, firstNameplate: i } = (0, x.f5)(t),
            { enabled: c } = (0, p.P)("BundleMiniPreview"),
            u = t.previewAssets?.fgStatic;
        return c && null != u
            ? (0, r.jsx)("img", { src: u, alt: t.name, className: l()(y.C0, n) })
            : null == a && null == s && null == i
              ? null
              : (0, r.jsxs)("div", {
                    className: y.WJ,
                    children: [
                        null != s && (0, r.jsx)("div", { className: y.zh, children: (0, r.jsx)(P, { item: s }) }),
                        null != i && (0, r.jsx)("div", { className: y.sY, children: (0, r.jsx)(R, { nameplate: i }) }),
                        null != a &&
                            (0, r.jsx)("div", {
                                className: y.kf,
                                children: (0, r.jsx)(k, { avatarDecoration: a, avatarSize: o._3.SIZE_24 }),
                            }),
                    ],
                });
    },
    L = (e) => {
        let { product: t, sku: n } = e,
            a = n?.id,
            s = (0, c.bG)([m.A], () => m.A.getProduct(n?.id)),
            l = t ?? s;
        if (l?.type === i.R.BUNDLE) return (0, r.jsx)(C, { product: l });
        let [u] = l?.items ?? [];
        if (void 0 !== a && a in _.m) return _.m[a].render({ animationState: "on_hover", className: y.Vr });
        switch (u?.type) {
            case i.R.AVATAR_DECORATION:
                return (0, r.jsx)(k, { avatarDecoration: u, avatarSize: o._3.SIZE_40 });
            case i.R.PROFILE_EFFECT:
                return (0, r.jsx)(P, { item: u });
            case i.R.PROFILE_FRAME:
                return (0, r.jsx)(T, { item: u });
            case i.R.NAMEPLATE:
                return (0, r.jsx)(R, { nameplate: u });
            default:
                return null;
        }
    };
