n.d(t, { A: () => b });
var i = n(627968),
    l = n(64700),
    a = n(688807),
    s = n(311907),
    r = n(459192),
    o = n(990078),
    c = n(808247),
    d = n(107563),
    u = n(840411),
    g = n(178213),
    m = n(594832),
    x = n(86638),
    f = n(46537),
    p = n(287809),
    h = n(622543),
    _ = n(451395),
    A = n(823016),
    I = n(18983),
    j = n(985018),
    v = n(935915);
function E(e) {
    let { item: t, index: n, wishlistId: l, onReorder: a, children: s } = e,
        { manageFocusOnReorder: r } = (0, A.r)();
    return (0, i.jsx)(_.mG, {
        index: n,
        itemId: String(t.skuId),
        listType: String(l),
        itemType: "WISHLIST_ITEM",
        itemPreviewProps: { item: t },
        "aria-label": j.intl.formatToPlainString(j.t["7SnyMA"], { positionNumber: n + 1 }),
        onReorder: a,
        onEnd: () => r(String(t.skuId)),
        className: v.C,
        dropBeforeClassName: v.A,
        dropAfterClassName: v.Ze,
        draggingClassName: v.Id,
        children: (0, i.jsx)("div", { className: v.An, children: s }),
    });
}
let T = l.memo(function (e) {
    let {
            item: t,
            index: n,
            profileOwner: a,
            isOwner: s,
            wishlistId: c,
            tooltipConfig: d,
            isDragging: u,
            onReorder: p,
        } = e,
        { registerDragHandleRef: h } = (0, A.r)(),
        j = (0, g.G)("user_profile_wishlist_grid"),
        T = l.useMemo(
            () =>
                s
                    ? (0, i.jsx)(_.jV, {
                          buttonRef: h(String(t.skuId)),
                          className: v.BU,
                          onFocus: (e) => e.stopPropagation(),
                      })
                    : void 0,
            [s, h, t.skuId],
        ),
        b = l.useMemo(() => {
            if (j)
                return (0, i.jsx)(x.A, {
                    item: t,
                    wishlistOwner: a,
                    wishlistId: c,
                    isDragging: u,
                    dragHandle: T,
                    tooltipConfig: d,
                });
            let e = (0, i.jsx)(I.A, {
                    item: t,
                    profileOwner: a,
                    wishlistId: c,
                    isOwner: s,
                    isDragging: u,
                    dragHandle: T,
                }),
                n = e;
            return (
                d.shouldShow &&
                    !u &&
                    (n = (0, f.Qc)(d)
                        ? (0, i.jsx)(o.m, { text: d.title, position: "top", asContainer: !0, delay: m.Zh, children: e })
                        : (0, i.jsx)(r.u, {
                              title: d.title,
                              body: d.body ?? "",
                              asset: d.renderIcon?.(t),
                              assetSize: m.Q8,
                              position: "top",
                              asContainer: !0,
                              delay: m.Zh,
                              children: e,
                          })),
                n
            );
        }, [j, t, a, u, T, d, s, c]);
    return s
        ? (0, i.jsx)("li", { children: (0, i.jsx)(E, { item: t, index: n, wishlistId: c, onReorder: p, children: b }) })
        : (0, i.jsx)("li", { children: b });
});
function b(e) {
    let { items: t, profileOwner: n, isOwner: r } = e,
        o = p.default.getCurrentUser(),
        { defaultWishlistId: g } = (0, s.cf)([h.A], () => ({ defaultWishlistId: h.A.getFirstWishlistId(n.id) })),
        m = (0, f.b7)(t, r),
        { isDragging: x } = (0, a.V)((e) => ({ isDragging: e.isDragging() })),
        _ = l.useCallback(
            (e, n) => {
                if (e === n || null == g || 0 === t.length || e < 0 || e >= t.length || n < 0 || n >= t.length) return;
                let i = d.A.getWishlist(g);
                if (null == i) return;
                let l = t[e],
                    { newWishlistData: a, previousSkuId: s, nextSkuId: r } = (0, u.A)(i, t, e, n);
                c.A.reorderWishlistItem(g, l.skuId, { previousSkuId: s, nextSkuId: r, newWishlistData: a });
            },
            [g, t],
        );
    if (null == o || null == g) return null;
    let I = (0, i.jsx)("ul", {
        className: v.Vg,
        children: t.map((e, t) =>
            (0, i.jsx)(
                T,
                {
                    item: e,
                    index: t,
                    profileOwner: n,
                    isOwner: r,
                    wishlistId: g,
                    tooltipConfig: m[t],
                    isDragging: x,
                    onReorder: _,
                },
                e.skuId,
            ),
        ),
    });
    return r ? (0, i.jsx)(A.B, { emptyListFallbackRef: null, children: I }) : I;
}
