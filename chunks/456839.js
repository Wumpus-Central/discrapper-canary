n.d(t, { a: () => N, O: () => S });
var a = n(627968),
    r = n(64700),
    l = n(503698),
    i = n.n(l),
    s = n(575593),
    u = n(17928),
    o = n(462887),
    c = n(778712),
    d = n(736653),
    m = n(590180),
    f = n(442759),
    p = n(88686),
    g = n(780898),
    b = n(174755),
    v = n(942426),
    A = n(665411),
    x = n(181774),
    h = n(576052),
    y = n(929283),
    E = n(38357),
    T = n(180171),
    _ = n(989099);
let I = (e) => {
        let { avatarDecoration: t, avatarSize: n } = e,
            r = (0, d.Ay)(),
            l = (0, o.q)(r);
        return (0, a.jsx)(y.i, {
            item: t,
            avatarSize: n,
            isHighlighted: !1,
            avatarPlaceholderSrc: l ? _ : T,
            className: E.M,
        });
    },
    k = (e) => {
        let { item: t } = e,
            n = (0, v.A)(t.skuId),
            { accessibilityLabel: l, thumbnailPreviewSrc: i, title: s } = n ?? {},
            u = r.useMemo(() => (0, x.Rc)(i), [i]);
        return null == n
            ? null
            : (0, a.jsxs)("div", {
                  className: E.ti,
                  children: [
                      (0, a.jsx)("img", {
                          src: "https://cdn.discordapp.com/assets/content/12b31ddb6470a59ecf9103c1aee866f9fdb3331727949eb88029160c02be9e0e.png",
                          alt: l,
                          className: E.Zp,
                      }),
                      (0, a.jsx)("img", { className: E.Hm, src: u, alt: s }),
                  ],
              });
    },
    P = (e) => {
        let { item: t } = e;
        return (0, a.jsx)("div", { className: E.uF, children: (0, a.jsx)(A.A, { frame: t }) });
    },
    L = (e) => {
        let { nameplate: t } = e,
            [n, l] = r.useState(!1),
            i = r.useCallback(() => l(!0), []),
            s = r.useCallback(() => l(!1), []);
        return null == t
            ? null
            : (0, a.jsx)("div", {
                  className: E.rz,
                  onMouseEnter: i,
                  onMouseLeave: s,
                  children: (0, a.jsx)(b.A, { nameplate: (0, g.WK)(t), hovered: n, placement: p.u.MINI_PREVIEW }),
              });
    },
    N = (e) => {
        let { product: t, staticPreviewClassName: n } = e,
            { firstAvatarDecoration: r, firstProfileEffect: l, firstNameplate: s } = (0, f.f5)(t),
            u = t.previewAssets?.fgStatic;
        return null != u
            ? (0, a.jsx)("img", { src: u, alt: t.name, className: i()(E.C0, n) })
            : null == r && null == l && null == s
              ? null
              : (0, a.jsxs)("div", {
                    className: E.WJ,
                    children: [
                        null != l && (0, a.jsx)("div", { className: E.zh, children: (0, a.jsx)(k, { item: l }) }),
                        null != s && (0, a.jsx)("div", { className: E.sY, children: (0, a.jsx)(L, { nameplate: s }) }),
                        null != r &&
                            (0, a.jsx)("div", {
                                className: E.kf,
                                children: (0, a.jsx)(I, { avatarDecoration: r, avatarSize: c._3.SIZE_24 }),
                            }),
                    ],
                });
    },
    S = (e) => {
        let { product: t, sku: n } = e,
            r = n?.id,
            l = (0, u.bG)([m.A], () => m.A.getProduct(n?.id)),
            i = t ?? l;
        if (i?.type === s.R.BUNDLE) return (0, a.jsx)(N, { product: i });
        let [o] = i?.items ?? [];
        if (void 0 !== r && r in h.m) return h.m[r].render({ animationState: "on_hover", className: E.Vr });
        switch (o?.type) {
            case s.R.AVATAR_DECORATION:
                return (0, a.jsx)(I, { avatarDecoration: o, avatarSize: c._3.SIZE_40 });
            case s.R.PROFILE_EFFECT:
                return (0, a.jsx)(k, { item: o });
            case s.R.PROFILE_FRAME:
                return (0, a.jsx)(P, { item: o });
            case s.R.NAMEPLATE:
                return (0, a.jsx)(L, { nameplate: o });
            default:
                return null;
        }
    };
