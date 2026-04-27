n.d(t, { O: () => R, a: () => C });
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
    x = n(395744),
    v = n(181774),
    A = n(132198),
    y = n(929283),
    j = n(38357),
    I = n(180171),
    E = n(989099),
    P = n(370184);
let S = (e) => {
        let { avatarDecoration: t, avatarSize: n } = e,
            r = (0, u.Ay)(),
            l = (0, c.q)(r);
        return (0, a.jsx)(y.i, {
            item: t,
            avatarSize: n,
            isHighlighted: !1,
            avatarPlaceholderSrc: l ? E : I,
            className: j.M,
        });
    },
    k = (e) => {
        let { item: t } = e,
            n = (0, h.A)(t.skuId),
            { accessibilityLabel: l, thumbnailPreviewSrc: i, title: s } = n ?? {},
            o = r.useMemo(() => (0, v.Rc)(i), [i]);
        return null == n
            ? null
            : (0, a.jsxs)("div", {
                  className: j.ti,
                  children: [
                      (0, a.jsx)("img", { src: P.A, alt: l, className: j.Zp }),
                      (0, a.jsx)("img", { className: j.Hm, src: o, alt: s }),
                  ],
              });
    },
    N = (e) => {
        let { item: t } = e;
        return (0, a.jsx)("div", { className: j.ti, children: (0, a.jsx)(x.A, { profileFrame: t, isMini: !0 }) });
    },
    T = (e) => {
        let { nameplate: t } = e,
            [n, l] = r.useState(!1),
            i = r.useCallback(() => l(!0), []),
            s = r.useCallback(() => l(!1), []);
        return null == t
            ? null
            : (0, a.jsx)("div", {
                  className: j.rz,
                  onMouseEnter: i,
                  onMouseLeave: s,
                  children: (0, a.jsx)(g.A, { nameplate: (0, f.WK)(t), hovered: n, placement: b.u.MINI_PREVIEW }),
              });
    },
    C = (e) => {
        let { product: t, staticPreviewClassName: n } = e,
            { firstAvatarDecoration: r, firstProfileEffect: l, firstNameplate: s } = (0, m.f5)(t),
            { enabled: o } = (0, _.P)("BundleMiniPreview"),
            c = t.previewAssets?.fgStatic;
        return o && null != c
            ? (0, a.jsx)("img", { src: c, alt: t.name, className: i()(j.C0, n) })
            : null == r && null == l && null == s
              ? null
              : (0, a.jsxs)("div", {
                    className: j.WJ,
                    children: [
                        null != l && (0, a.jsx)("div", { className: j.zh, children: (0, a.jsx)(k, { item: l }) }),
                        null != s && (0, a.jsx)("div", { className: j.sY, children: (0, a.jsx)(T, { nameplate: s }) }),
                        null != r &&
                            (0, a.jsx)("div", {
                                className: j.kf,
                                children: (0, a.jsx)(S, { avatarDecoration: r, avatarSize: d._3.SIZE_24 }),
                            }),
                    ],
                });
    },
    R = (e) => {
        let { product: t, sku: n } = e,
            r = n?.id,
            l = (0, o.bG)([p.A], () => p.A.getProduct(n?.id)),
            i = t ?? l;
        if (i?.type === s.R.BUNDLE) return (0, a.jsx)(C, { product: i });
        let [c] = i?.items ?? [];
        if (void 0 !== r && r in A.m) return A.m[r].render({ animationState: "on_hover", className: j.Vr });
        switch (c?.type) {
            case s.R.AVATAR_DECORATION:
                return (0, a.jsx)(S, { avatarDecoration: c, avatarSize: d._3.SIZE_40 });
            case s.R.PROFILE_EFFECT:
                return (0, a.jsx)(k, { item: c });
            case s.R.PROFILE_FRAME:
                return (0, a.jsx)(N, { item: c });
            case s.R.NAMEPLATE:
                return (0, a.jsx)(T, { nameplate: c });
            default:
                return null;
        }
    };
