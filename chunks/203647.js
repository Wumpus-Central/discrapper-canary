i.d(t, { A: () => I });
var n = i(627968),
    l = i(64700),
    s = i(688807),
    a = i(311907),
    r = i(808247),
    d = i(107563),
    o = i(840411),
    c = i(86638),
    u = i(287809),
    g = i(622543),
    m = i(451395),
    h = i(823016),
    x = i(985018),
    A = i(415234);
function p(e) {
    let { item: t, index: i, wishlistId: l, onReorder: s, children: a } = e,
        { manageFocusOnReorder: r } = (0, h.r)();
    return (0, n.jsx)(m.mG, {
        index: i,
        itemId: String(t.skuId),
        listType: String(l),
        itemType: "WISHLIST_ITEM",
        itemPreviewProps: { item: t },
        "aria-label": x.intl.formatToPlainString(x.t["7SnyMA"], { positionNumber: i + 1 }),
        onReorder: s,
        onEnd: () => r(String(t.skuId)),
        className: A.C,
        dropBeforeClassName: A.A,
        dropAfterClassName: A.Ze,
        draggingClassName: A.Id,
        children: (0, n.jsx)("div", { className: A.An, children: a }),
    });
}
let f = l.memo(function (e) {
    let { item: t, index: i, profileOwner: s, isOwner: a, wishlistId: r, isDragging: d, onReorder: o } = e,
        { registerDragHandleRef: u } = (0, h.r)(),
        g = l.useMemo(
            () =>
                a
                    ? (0, n.jsx)(m.jV, {
                          buttonRef: u(String(t.skuId)),
                          className: A.BU,
                          onFocus: (e) => e.stopPropagation(),
                      })
                    : void 0,
            [a, u, t.skuId],
        ),
        x = l.useMemo(
            () => (0, n.jsx)(c.A, { item: t, wishlistOwner: s, wishlistId: r, isDragging: d, dragHandle: g }),
            [t, s, d, g, r],
        );
    return a
        ? (0, n.jsx)("li", { children: (0, n.jsx)(p, { item: t, index: i, wishlistId: r, onReorder: o, children: x }) })
        : (0, n.jsx)("li", { children: x });
});
function I(e) {
    let { items: t, profileOwner: i, isOwner: c } = e,
        m = u.default.getCurrentUser(),
        { defaultWishlistId: x } = (0, a.cf)([g.A], () => ({ defaultWishlistId: g.A.getFirstWishlistId(i.id) })),
        { isDragging: p } = (0, s.V)((e) => ({ isDragging: e.isDragging() })),
        I = l.useCallback(
            (e, i) => {
                if (e === i || null == x || 0 === t.length || e < 0 || e >= t.length || i < 0 || i >= t.length) return;
                let n = d.A.getWishlist(x);
                if (null == n) return;
                let l = t[e],
                    { newWishlistData: s, previousSkuId: a, nextSkuId: c } = (0, o.Ap)(n, t, e, i);
                r.A.reorderWishlistItem(x, l.skuId, { previousSkuId: a, nextSkuId: c, newWishlistData: s });
            },
            [x, t],
        );
    if (null == m || null == x) return null;
    let j = (0, n.jsx)("ul", {
        className: A.Vg,
        children: t.map((e, t) =>
            (0, n.jsx)(
                f,
                { item: e, index: t, profileOwner: i, isOwner: c, wishlistId: x, isDragging: p, onReorder: I },
                e.skuId,
            ),
        ),
    });
    return c ? (0, n.jsx)(h.B, { emptyListFallbackRef: null, children: j }) : j;
}
