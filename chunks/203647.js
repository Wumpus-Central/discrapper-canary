n.d(t, { A: () => N });
var i = n(627968),
    a = n(64700),
    l = n(688807),
    s = n(311907),
    r = n(459192),
    o = n(990078),
    c = n(808247),
    d = n(107563),
    u = n(840411),
    m = n(178213),
    g = n(594832),
    p = n(86638),
    x = n(46537),
    f = n(287809),
    _ = n(622543),
    h = n(451395),
    A = n(823016),
    I = n(18983),
    v = n(985018),
    j = n(415234);
function E(e) {
    let { item: t, index: n, wishlistId: a, onReorder: l, children: s } = e,
        { manageFocusOnReorder: r } = (0, A.r)();
    return (0, i.jsx)(h.mG, {
        index: n,
        itemId: String(t.skuId),
        listType: String(a),
        itemType: "WISHLIST_ITEM",
        itemPreviewProps: { item: t },
        "aria-label": v.intl.formatToPlainString(v.t["7SnyMA"], { positionNumber: n + 1 }),
        onReorder: l,
        onEnd: () => r(String(t.skuId)),
        className: j.C,
        dropBeforeClassName: j.A,
        dropAfterClassName: j.Ze,
        draggingClassName: j.Id,
        children: (0, i.jsx)("div", { className: j.An, children: s }),
    });
}
let T = a.memo(function (e) {
    let {
            item: t,
            index: n,
            profileOwner: l,
            isOwner: s,
            wishlistId: c,
            tooltipConfig: d,
            isDragging: u,
            onReorder: f,
        } = e,
        { registerDragHandleRef: _ } = (0, A.r)(),
        v = (0, m.GG)("user_profile_wishlist_grid"),
        T = a.useMemo(
            () =>
                s
                    ? (0, i.jsx)(h.jV, {
                          buttonRef: _(String(t.skuId)),
                          className: j.BU,
                          onFocus: (e) => e.stopPropagation(),
                      })
                    : void 0,
            [s, _, t.skuId],
        ),
        N = a.useMemo(() => {
            if (v) return (0, i.jsx)(p.A, { item: t, wishlistOwner: l, wishlistId: c, isDragging: u, dragHandle: T });
            let e = (0, i.jsx)(I.A, {
                    item: t,
                    profileOwner: l,
                    wishlistId: c,
                    isOwner: s,
                    isDragging: u,
                    dragHandle: T,
                }),
                n = e;
            return (
                d.shouldShow &&
                    !u &&
                    (n = (0, x.Qc)(d)
                        ? (0, i.jsx)(o.m, { text: d.title, position: "top", asContainer: !0, delay: g.Zh, children: e })
                        : (0, i.jsx)(r.u, {
                              title: d.title,
                              body: d.body ?? "",
                              asset: d.renderIcon?.(t),
                              assetSize: g.Q8,
                              position: "top",
                              asContainer: !0,
                              delay: g.Zh,
                              children: e,
                          })),
                n
            );
        }, [v, t, l, u, T, d, s, c]);
    return s
        ? (0, i.jsx)("li", { children: (0, i.jsx)(E, { item: t, index: n, wishlistId: c, onReorder: f, children: N }) })
        : (0, i.jsx)("li", { children: N });
});
function N(e) {
    let { items: t, profileOwner: n, isOwner: r } = e,
        o = f.default.getCurrentUser(),
        { defaultWishlistId: m } = (0, s.cf)([_.A], () => ({ defaultWishlistId: _.A.getFirstWishlistId(n.id) })),
        g = (0, x.b7)(t, r),
        { isDragging: p } = (0, l.V)((e) => ({ isDragging: e.isDragging() })),
        h = a.useCallback(
            (e, n) => {
                if (e === n || null == m || 0 === t.length || e < 0 || e >= t.length || n < 0 || n >= t.length) return;
                let i = d.A.getWishlist(m);
                if (null == i) return;
                let a = t[e],
                    { newWishlistData: l, previousSkuId: s, nextSkuId: r } = (0, u.A)(i, t, e, n);
                c.A.reorderWishlistItem(m, a.skuId, { previousSkuId: s, nextSkuId: r, newWishlistData: l });
            },
            [m, t],
        );
    if (null == o || null == m) return null;
    let I = (0, i.jsx)("ul", {
        className: j.Vg,
        children: t.map((e, t) =>
            (0, i.jsx)(
                T,
                {
                    item: e,
                    index: t,
                    profileOwner: n,
                    isOwner: r,
                    wishlistId: m,
                    tooltipConfig: g[t],
                    isDragging: p,
                    onReorder: h,
                },
                e.skuId,
            ),
        ),
    });
    return r ? (0, i.jsx)(A.B, { emptyListFallbackRef: null, children: I }) : I;
}
