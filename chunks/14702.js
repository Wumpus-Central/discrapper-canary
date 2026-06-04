n.d(t, { O: () => S, a: () => M });
var l = n(627968),
    a = n(64700),
    r = n(503698),
    i = n.n(r),
    s = n(575593),
    u = n(17928),
    o = n(462887),
    c = n(778712),
    d = n(736653),
    m = n(590180),
    p = n(442759),
    f = n(88686),
    g = n(780898),
    x = n(174755),
    v = n(942426),
    b = n(665411),
    h = n(181774),
    y = n(576052),
    A = n(929283),
    I = n(38357),
    _ = n(180171),
    T = n(989099),
    P = n(370184);
let E = (e) => {
        let { avatarDecoration: t, avatarSize: n } = e,
            a = (0, d.Ay)(),
            r = (0, o.q)(a);
        return (0, l.jsx)(A.i, {
            item: t,
            avatarSize: n,
            isHighlighted: !1,
            avatarPlaceholderSrc: r ? T : _,
            className: I.M,
        });
    },
    j = (e) => {
        let { item: t } = e,
            n = (0, v.A)(t.skuId),
            { accessibilityLabel: r, thumbnailPreviewSrc: i, title: s } = n ?? {},
            u = a.useMemo(() => (0, h.Rc)(i), [i]);
        return null == n
            ? null
            : (0, l.jsxs)("div", {
                  className: I.ti,
                  children: [
                      (0, l.jsx)("img", { src: P.A, alt: r, className: I.Zp }),
                      (0, l.jsx)("img", { className: I.Hm, src: u, alt: s }),
                  ],
              });
    },
    N = (e) => {
        let { item: t } = e;
        return (0, l.jsx)("div", { className: I.uF, children: (0, l.jsx)(b.A, { frame: t }) });
    },
    R = (e) => {
        let { nameplate: t } = e,
            [n, r] = a.useState(!1),
            i = a.useCallback(() => r(!0), []),
            s = a.useCallback(() => r(!1), []);
        return null == t
            ? null
            : (0, l.jsx)("div", {
                  className: I.rz,
                  onMouseEnter: i,
                  onMouseLeave: s,
                  children: (0, l.jsx)(x.A, { nameplate: (0, g.WK)(t), hovered: n, placement: f.u.MINI_PREVIEW }),
              });
    },
    M = (e) => {
        let { product: t, staticPreviewClassName: n } = e,
            { firstAvatarDecoration: a, firstProfileEffect: r, firstNameplate: s } = (0, p.f5)(t),
            u = t.previewAssets?.fgStatic;
        return null != u
            ? (0, l.jsx)("img", { src: u, alt: t.name, className: i()(I.C0, n) })
            : null == a && null == r && null == s
              ? null
              : (0, l.jsxs)("div", {
                    className: I.WJ,
                    children: [
                        null != r && (0, l.jsx)("div", { className: I.zh, children: (0, l.jsx)(j, { item: r }) }),
                        null != s && (0, l.jsx)("div", { className: I.sY, children: (0, l.jsx)(R, { nameplate: s }) }),
                        null != a &&
                            (0, l.jsx)("div", {
                                className: I.kf,
                                children: (0, l.jsx)(E, { avatarDecoration: a, avatarSize: c._3.SIZE_24 }),
                            }),
                    ],
                });
    },
    S = (e) => {
        let { product: t, sku: n } = e,
            a = n?.id,
            r = (0, u.bG)([m.A], () => m.A.getProduct(n?.id)),
            i = t ?? r;
        if (i?.type === s.R.BUNDLE) return (0, l.jsx)(M, { product: i });
        let [o] = i?.items ?? [];
        if (void 0 !== a && a in y.m) return y.m[a].render({ animationState: "on_hover", className: I.Vr });
        switch (o?.type) {
            case s.R.AVATAR_DECORATION:
                return (0, l.jsx)(E, { avatarDecoration: o, avatarSize: c._3.SIZE_40 });
            case s.R.PROFILE_EFFECT:
                return (0, l.jsx)(j, { item: o });
            case s.R.PROFILE_FRAME:
                return (0, l.jsx)(N, { item: o });
            case s.R.NAMEPLATE:
                return (0, l.jsx)(R, { nameplate: o });
            default:
                return null;
        }
    };
