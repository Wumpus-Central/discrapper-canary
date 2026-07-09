n.d(t, { a: () => L, O: () => N });
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
    b = n(780898),
    A = n(174755),
    g = n(942426),
    v = n(665411),
    h = n(181774),
    _ = n(576052),
    y = n(929283),
    I = n(741717),
    x = n(180171),
    E = n(989099);
function T(e) {
    let { avatarDecoration: t, avatarSize: n } = e,
        r = (0, d.Ay)(),
        l = (0, o.q)(r);
    return (0, a.jsx)(y.i, {
        item: t,
        avatarSize: n,
        isHighlighted: !1,
        avatarPlaceholderSrc: l ? E : x,
        className: I.M,
    });
}
function P(e) {
    let { item: t } = e,
        n = (0, g.A)(t.skuId),
        { accessibilityLabel: l, thumbnailPreviewSrc: i, title: s } = n ?? {},
        u = r.useMemo(() => (0, h.Rc)(i), [i]);
    return null == n
        ? null
        : (0, a.jsxs)("div", {
              className: I.ti,
              children: [
                  (0, a.jsx)("img", {
                      src: "https://cdn.discordapp.com/assets/content/12b31ddb6470a59ecf9103c1aee866f9fdb3331727949eb88029160c02be9e0e.png",
                      alt: l,
                      className: I.Zp,
                  }),
                  (0, a.jsx)("img", { className: I.Hm, src: u, alt: s }),
              ],
          });
}
function S(e) {
    let { item: t } = e;
    return (0, a.jsx)("div", { className: I.uF, children: (0, a.jsx)(v.A, { frame: t }) });
}
function k(e) {
    let { nameplate: t } = e,
        [n, l] = r.useState(!1),
        i = r.useCallback(() => l(!0), []),
        s = r.useCallback(() => l(!1), []);
    return null == t
        ? null
        : (0, a.jsx)("div", {
              className: I.rz,
              onMouseEnter: i,
              onMouseLeave: s,
              children: (0, a.jsx)(A.A, { nameplate: (0, b.WK)(t), hovered: n, placement: p.u.MINI_PREVIEW }),
          });
}
function L(e) {
    let { product: t, staticPreviewClassName: n } = e,
        { firstAvatarDecoration: r, firstProfileEffect: l, firstNameplate: s } = (0, f.f5)(t),
        u = t.previewAssets?.fgStatic;
    return null != u
        ? (0, a.jsx)("img", { src: u, alt: t.name, className: i()(I.C0, n) })
        : null == r && null == l && null == s
          ? null
          : (0, a.jsxs)("div", {
                className: I.WJ,
                children: [
                    null != l && (0, a.jsx)("div", { className: I.zh, children: (0, a.jsx)(P, { item: l }) }),
                    null != s && (0, a.jsx)("div", { className: I.sY, children: (0, a.jsx)(k, { nameplate: s }) }),
                    null != r &&
                        (0, a.jsx)("div", {
                            className: I.kf,
                            children: (0, a.jsx)(T, { avatarDecoration: r, avatarSize: c._3.SIZE_24 }),
                        }),
                ],
            });
}
function N(e) {
    let { product: t, sku: n } = e,
        r = n?.id ?? t?.skuId,
        l = (0, u.bG)([m.A], () => m.A.getProduct(n?.id)),
        i = t ?? l;
    if (i?.type === s.R.BUNDLE) return (0, a.jsx)(L, { product: i });
    let [o] = i?.items ?? [];
    if (void 0 !== r && r in _.m) return _.m[r].render({ animationState: "on_hover", className: I.Vr });
    switch (o?.type) {
        case s.R.AVATAR_DECORATION:
            return (0, a.jsx)(T, { avatarDecoration: o, avatarSize: c._3.SIZE_40 });
        case s.R.PROFILE_EFFECT:
            return (0, a.jsx)(P, { item: o });
        case s.R.PROFILE_FRAME:
            return (0, a.jsx)(S, { item: o });
        case s.R.NAMEPLATE:
            return (0, a.jsx)(k, { nameplate: o });
        default:
            return null;
    }
}
