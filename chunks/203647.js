n.d(t, { A: () => b });
var i = n(627968),
    l = n(64700),
    a = n(688807),
    r = n(311907),
    s = n(459192),
    o = n(990078),
    d = n(808247),
    c = n(107563),
    u = n(840411),
    g = n(178213),
    m = n(594832),
    x = n(86638),
    f = n(46537),
    h = n(287809),
    p = n(622543),
    _ = n(451395),
    A = n(823016),
    I = n(18983),
    j = n(985018),
    v = n(935915);
function T(e) {
    let { item: t, index: n, wishlistId: l, onReorder: a, children: r } = e,
        { manageFocusOnReorder: s } = (0, A.r)();
    return (0, i.jsx)(_.mG, {
        index: n,
        itemId: String(t.skuId),
        listType: String(l),
        itemType: "WISHLIST_ITEM",
        itemPreviewProps: { item: t },
        "aria-label": j.intl.formatToPlainString(j.t["7SnyMA"], { positionNumber: n + 1 }),
        onReorder: a,
        onEnd: () => s(String(t.skuId)),
        className: v.C,
        dropBeforeClassName: v.A,
        dropAfterClassName: v.Ze,
        draggingClassName: v.Id,
        children: (0, i.jsx)("div", { className: v.An, children: r }),
    });
}
let E = l.memo(function (e) {
    let {
            item: t,
            index: n,
            profileOwner: a,
            isOwner: r,
            wishlistId: d,
            tooltipConfig: c,
            isDragging: u,
            onReorder: f,
        } = e,
        { registerDragHandleRef: h } = (0, A.r)(),
        p = (0, g.G)("user_profile_wishlist_grid"),
        j = l.useMemo(
            () =>
                r
                    ? (0, i.jsx)(_.jV, {
                          buttonRef: h(String(t.skuId)),
                          className: v.BU,
                          onFocus: (e) => e.stopPropagation(),
                      })
                    : void 0,
            [r, h, t.skuId],
        ),
        E = l.useMemo(() => {
            if (p)
                return (0, i.jsx)(x.A, {
                    item: t,
                    wishlistOwner: a,
                    wishlistId: d,
                    isDragging: u,
                    dragHandle: j,
                    tooltipConfig: c,
                });
            let e = (0, i.jsx)(I.A, {
                    item: t,
                    profileOwner: a,
                    wishlistId: d,
                    isOwner: r,
                    isDragging: u,
                    dragHandle: j,
                }),
                n = e;
            return (
                c.shouldShow &&
                    !u &&
                    (n =
                        null != c.title && null == c.body && null == c.renderIcon
                            ? (0, i.jsx)(o.m, {
                                  text: c.title,
                                  position: "top",
                                  asContainer: !0,
                                  delay: m.Zh,
                                  children: e,
                              })
                            : (0, i.jsx)(s.u, {
                                  title: c.title,
                                  body: c.body ?? "",
                                  asset: c.renderIcon?.(t),
                                  assetSize: m.Q8,
                                  position: "top",
                                  asContainer: !0,
                                  delay: m.Zh,
                                  children: e,
                              })),
                n
            );
        }, [p, t, a, u, j, c, r, d]);
    return r
        ? (0, i.jsx)("li", { children: (0, i.jsx)(T, { item: t, index: n, wishlistId: d, onReorder: f, children: E }) })
        : (0, i.jsx)("li", { children: E });
});
function b(e) {
    let { items: t, profileOwner: n, isOwner: s } = e,
        o = h.default.getCurrentUser(),
        { defaultWishlistId: g } = (0, r.cf)([p.A], () => ({ defaultWishlistId: p.A.getFirstWishlistId(n.id) })),
        m = (0, f.u)(t, s),
        { isDragging: x } = (0, a.V)((e) => ({ isDragging: e.isDragging() })),
        _ = l.useCallback(
            (e, n) => {
                if (e === n || null == g || 0 === t.length || e < 0 || e >= t.length || n < 0 || n >= t.length) return;
                let i = c.A.getWishlist(g);
                if (null == i) return;
                let l = t[e],
                    { newWishlistData: a, previousSkuId: r, nextSkuId: s } = (0, u.A)(i, t, e, n);
                d.A.reorderWishlistItem(g, l.skuId, { previousSkuId: r, nextSkuId: s, newWishlistData: a });
            },
            [g, t],
        );
    if (null == o || null == g) return null;
    let I = (0, i.jsx)("ul", {
        className: v.Vg,
        children: t.map((e, t) =>
            (0, i.jsx)(
                E,
                {
                    item: e,
                    index: t,
                    profileOwner: n,
                    isOwner: s,
                    wishlistId: g,
                    tooltipConfig: m[t],
                    isDragging: x,
                    onReorder: _,
                },
                e.skuId,
            ),
        ),
    });
    return s ? (0, i.jsx)(A.B, { emptyListFallbackRef: null, children: I }) : I;
}
