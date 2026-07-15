s.d(a, { O: () => F, a: () => P });
var t = s(627968),
    l = s(64700),
    n = s(503698),
    r = s.n(n),
    i = s(575593),
    c = s(17928),
    u = s(462887),
    d = s(778712),
    m = s(736653),
    o = s(590180),
    j = s(442759),
    x = s(88686),
    v = s(780898),
    h = s(174755),
    p = s(942426),
    A = s(665411),
    N = s(181774),
    R = s(132198),
    f = s(929283),
    E = s(38357),
    I = s(180171),
    _ = s(989099),
    k = s(370184);
function S(e) {
    let { avatarDecoration: a, avatarSize: s } = e,
        l = (0, m.Ay)(),
        n = (0, u.q)(l);
    return (0, t.jsx)(f.i, {
        item: a,
        avatarSize: s,
        isHighlighted: !1,
        avatarPlaceholderSrc: n ? _ : I,
        className: E.M,
    });
}
function g(e) {
    let { item: a } = e,
        s = (0, p.A)(a.skuId),
        { accessibilityLabel: n, thumbnailPreviewSrc: r, title: i } = s ?? {},
        c = l.useMemo(() => (0, N.Rc)(r), [r]);
    return null == s
        ? null
        : (0, t.jsxs)("div", {
              className: E.ti,
              children: [
                  (0, t.jsx)("img", { src: k.A, alt: n, className: E.Zp }),
                  (0, t.jsx)("img", { className: E.Hm, src: c, alt: i }),
              ],
          });
}
function C(e) {
    let { item: a } = e;
    return (0, t.jsx)("div", { className: E.uF, children: (0, t.jsx)(A.A, { frame: a }) });
}
function M(e) {
    let { nameplate: a } = e,
        [s, n] = l.useState(!1),
        r = l.useCallback(() => n(!0), []),
        i = l.useCallback(() => n(!1), []);
    return null == a
        ? null
        : (0, t.jsx)("div", {
              className: E.rz,
              onMouseEnter: r,
              onMouseLeave: i,
              children: (0, t.jsx)(h.A, { nameplate: (0, v.WK)(a), hovered: s, placement: x.u.MINI_PREVIEW }),
          });
}
function P(e) {
    let { product: a, staticPreviewClassName: s } = e,
        { firstAvatarDecoration: l, firstProfileEffect: n, firstNameplate: i } = (0, j.f5)(a),
        c = a.previewAssets?.fgStatic;
    return null != c
        ? (0, t.jsx)("img", { src: c, alt: a.name, className: r()(E.C0, s) })
        : null == l && null == n && null == i
          ? null
          : (0, t.jsxs)("div", {
                className: E.WJ,
                children: [
                    null != n && (0, t.jsx)("div", { className: E.zh, children: (0, t.jsx)(g, { item: n }) }),
                    null != i && (0, t.jsx)("div", { className: E.sY, children: (0, t.jsx)(M, { nameplate: i }) }),
                    null != l &&
                        (0, t.jsx)("div", {
                            className: E.kf,
                            children: (0, t.jsx)(S, { avatarDecoration: l, avatarSize: d._3.SIZE_24 }),
                        }),
                ],
            });
}
function F(e) {
    let { product: a, sku: s } = e,
        l = s?.id ?? a?.skuId,
        n = (0, c.bG)([o.A], () => o.A.getProduct(s?.id)),
        r = a ?? n;
    if (r?.type === i.R.BUNDLE) return (0, t.jsx)(P, { product: r });
    let [u] =
        (r?.type === i.R.VARIANTS_GROUP ? (r.variants?.find((e) => e.skuId === l)?.items ?? r.items) : r?.items) ?? [];
    if (void 0 !== l && l in R.m) return R.m[l].render({ animationState: "on_hover", className: E.Vr });
    switch (u?.type) {
        case i.R.AVATAR_DECORATION:
            return (0, t.jsx)(S, { avatarDecoration: u, avatarSize: d._3.SIZE_40 });
        case i.R.PROFILE_EFFECT:
            return (0, t.jsx)(g, { item: u });
        case i.R.PROFILE_FRAME:
            return (0, t.jsx)(C, { item: u });
        case i.R.NAMEPLATE:
            return (0, t.jsx)(M, { nameplate: u });
        default:
            return null;
    }
}
