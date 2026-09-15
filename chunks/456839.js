a.d(s, { a: () => C, O: () => M });
var t = a(477900),
    n = a(582128),
    l = a(503698),
    r = a.n(l),
    i = a(575593),
    c = a(17928),
    u = a(462887),
    d = a(778712),
    m = a(736653),
    o = a(590180),
    j = a(442759),
    p = a(88686),
    x = a(780898),
    h = a(174755),
    v = a(942426),
    f = a(665411),
    N = a(181774),
    A = a(576052),
    R = a(929283),
    E = a(161906),
    I = a(180171),
    _ = a(989099);
function b(e) {
    let { avatarDecoration: s, avatarSize: a } = e,
        n = (0, m.Ay)(),
        l = (0, u.q)(n);
    return (0, t.jsx)(R.i, {
        item: s,
        avatarSize: a,
        isHighlighted: !1,
        avatarPlaceholderSrc: l ? _ : I,
        className: E.M,
    });
}
function k(e) {
    let { item: s } = e,
        a = (0, v.A)(s.skuId),
        { accessibilityLabel: l, thumbnailPreviewSrc: r, title: i } = a ?? {},
        c = n.useMemo(() => (0, N.Rc)(r), [r]);
    return null == a
        ? null
        : (0, t.jsxs)("div", {
              className: E.ti,
              children: [
                  (0, t.jsx)("img", {
                      src: "https://cdn.discordapp.com/assets/content/12b31ddb6470a59ecf9103c1aee866f9fdb3331727949eb88029160c02be9e0e.png",
                      alt: l,
                      className: E.Zp,
                  }),
                  (0, t.jsx)("img", { className: E.Hm, src: c, alt: i }),
              ],
          });
}
function S(e) {
    let { item: s } = e;
    return (0, t.jsx)("div", { className: E.uF, children: (0, t.jsx)(f.A, { frame: s }) });
}
function g(e) {
    let { nameplate: s } = e,
        [a, l] = n.useState(!1),
        r = n.useCallback(() => l(!0), []),
        i = n.useCallback(() => l(!1), []);
    return null == s
        ? null
        : (0, t.jsx)("div", {
              className: E.rz,
              onMouseEnter: r,
              onMouseLeave: i,
              children: (0, t.jsx)(h.A, { nameplate: (0, x.WK)(s), hovered: a, placement: p.u.MINI_PREVIEW }),
          });
}
function C(e) {
    let { product: s, staticPreviewClassName: a } = e,
        { firstAvatarDecoration: n, firstProfileEffect: l, firstNameplate: i } = (0, j.f5)(s),
        c = s.previewAssets?.fgStatic;
    return null != c
        ? (0, t.jsx)("img", { src: c, alt: s.name, className: r()(E.C0, a) })
        : null == n && null == l && null == i
          ? null
          : (0, t.jsxs)("div", {
                className: E.WJ,
                children: [
                    null != l && (0, t.jsx)("div", { className: E.zh, children: (0, t.jsx)(k, { item: l }) }),
                    null != i && (0, t.jsx)("div", { className: E.sY, children: (0, t.jsx)(g, { nameplate: i }) }),
                    null != n &&
                        (0, t.jsx)("div", {
                            className: E.kf,
                            children: (0, t.jsx)(b, { avatarDecoration: n, avatarSize: d._3.SIZE_24 }),
                        }),
                ],
            });
}
function M(e) {
    let { product: s, sku: a } = e,
        n = a?.id ?? s?.skuId,
        l = (0, c.bG)([o.A], () => o.A.getProduct(a?.id)),
        r = s ?? l;
    if (r?.type === i.R.BUNDLE) return (0, t.jsx)(C, { product: r });
    let [u] =
        (r?.type === i.R.VARIANTS_GROUP ? (r.variants?.find((e) => e.skuId === n)?.items ?? r.items) : r?.items) ?? [];
    if (void 0 !== n && n in A.m) return A.m[n].render({ animationState: "on_hover", className: E.Vr });
    switch (u?.type) {
        case i.R.AVATAR_DECORATION:
            return (0, t.jsx)(b, { avatarDecoration: u, avatarSize: d._3.SIZE_40 });
        case i.R.PROFILE_EFFECT:
            return (0, t.jsx)(k, { item: u });
        case i.R.PROFILE_FRAME:
            return (0, t.jsx)(S, { item: u });
        case i.R.NAMEPLATE:
            return (0, t.jsx)(g, { nameplate: u });
        default:
            return null;
    }
}
