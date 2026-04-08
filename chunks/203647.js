n.d(t, { A: () => b });
var i = n(627968),
    a = n(64700),
    l = n(688807),
    s = n(311907),
    r = n(459192),
    o = n(990078),
    d = n(808247),
    c = n(107563),
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
    v = n(81441);
function E(e) {
    let { item: t, index: n, wishlistId: a, onReorder: l, children: s } = e,
        { manageFocusOnReorder: r } = (0, A.r)();
    return (0, i.jsx)(_.mG, {
        index: n,
        itemId: String(t.skuId),
        listType: String(a),
        itemType: "WISHLIST_ITEM",
        itemPreviewProps: { item: t },
        "aria-label": j.intl.formatToPlainString(j.t["7SnyMA"], { positionNumber: n + 1 }),
        onReorder: l,
        onEnd: () => r(String(t.skuId)),
        className: v.C,
        dropBeforeClassName: v.A,
        dropAfterClassName: v.Ze,
        draggingClassName: v.Id,
        children: (0, i.jsx)("div", { className: v.An, children: s }),
    });
}
let T = a.memo(function (e) {
    let {
            item: t,
            index: n,
            profileOwner: l,
            isOwner: s,
            wishlistId: d,
            tooltipConfig: c,
            isDragging: u,
            onReorder: p,
        } = e,
        { registerDragHandleRef: h } = (0, A.r)(),
        j = (0, g.GG)("user_profile_wishlist_grid"),
        T = a.useMemo(
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
        b = a.useMemo(() => {
            if (j) return (0, i.jsx)(x.A, { item: t, wishlistOwner: l, wishlistId: d, isDragging: u, dragHandle: T });
            let e = (0, i.jsx)(I.A, {
                    item: t,
                    profileOwner: l,
                    wishlistId: d,
                    isOwner: s,
                    isDragging: u,
                    dragHandle: T,
                }),
                n = e;
            return (
                c.shouldShow &&
                    !u &&
                    (n = (0, f.Qc)(c)
                        ? (0, i.jsx)(o.m, { text: c.title, position: "top", asContainer: !0, delay: m.Zh, children: e })
                        : (0, i.jsx)(r.u, {
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
        }, [j, t, l, u, T, c, s, d]);
    return s
        ? (0, i.jsx)("li", { children: (0, i.jsx)(E, { item: t, index: n, wishlistId: d, onReorder: p, children: b }) })
        : (0, i.jsx)("li", { children: b });
});
function b(e) {
    let { items: t, profileOwner: n, isOwner: r } = e,
        o = p.default.getCurrentUser(),
        { defaultWishlistId: g } = (0, s.cf)([h.A], () => ({ defaultWishlistId: h.A.getFirstWishlistId(n.id) })),
        m = (0, f.b7)(t, r),
        { isDragging: x } = (0, l.V)((e) => ({ isDragging: e.isDragging() })),
        _ = a.useCallback(
            (e, n) => {
                if (e === n || null == g || 0 === t.length || e < 0 || e >= t.length || n < 0 || n >= t.length) return;
                let i = c.A.getWishlist(g);
                if (null == i) return;
                let a = t[e],
                    { newWishlistData: l, previousSkuId: s, nextSkuId: r } = (0, u.A)(i, t, e, n);
                d.A.reorderWishlistItem(g, a.skuId, { previousSkuId: s, nextSkuId: r, newWishlistData: l });
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
