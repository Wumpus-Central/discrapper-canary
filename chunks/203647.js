i.d(t, { A: () => E });
var n = i(627968),
    s = i(64700),
    l = i(688807),
    a = i(311907),
    r = i(459192),
    o = i(990078),
    d = i(808247),
    c = i(107563),
    u = i(840411),
    g = i(178213),
    m = i(594832),
    h = i(86638),
    x = i(46537),
    p = i(287809),
    A = i(622543),
    f = i(451395),
    I = i(823016),
    j = i(18983),
    v = i(985018),
    S = i(415234);
function b(e) {
    let { item: t, index: i, wishlistId: s, onReorder: l, children: a } = e,
        { manageFocusOnReorder: r } = (0, I.r)();
    return (0, n.jsx)(f.mG, {
        index: i,
        itemId: String(t.skuId),
        listType: String(s),
        itemType: "WISHLIST_ITEM",
        itemPreviewProps: { item: t },
        "aria-label": v.intl.formatToPlainString(v.t["7SnyMA"], { positionNumber: i + 1 }),
        onReorder: l,
        onEnd: () => r(String(t.skuId)),
        className: S.C,
        dropBeforeClassName: S.A,
        dropAfterClassName: S.Ze,
        draggingClassName: S.Id,
        children: (0, n.jsx)("div", { className: S.An, children: a }),
    });
}
let y = s.memo(function (e) {
    let {
            item: t,
            index: i,
            profileOwner: l,
            isOwner: a,
            wishlistId: d,
            tooltipConfig: c,
            isDragging: u,
            onReorder: p,
        } = e,
        { registerDragHandleRef: A } = (0, I.r)(),
        v = (0, g.GG)("user_profile_wishlist_grid"),
        y = s.useMemo(
            () =>
                a
                    ? (0, n.jsx)(f.jV, {
                          buttonRef: A(String(t.skuId)),
                          className: S.BU,
                          onFocus: (e) => e.stopPropagation(),
                      })
                    : void 0,
            [a, A, t.skuId],
        ),
        E = s.useMemo(() => {
            if (v) return (0, n.jsx)(h.A, { item: t, wishlistOwner: l, wishlistId: d, isDragging: u, dragHandle: y });
            let e = (0, n.jsx)(j.A, {
                    item: t,
                    profileOwner: l,
                    wishlistId: d,
                    isOwner: a,
                    isDragging: u,
                    dragHandle: y,
                }),
                i = e;
            return (
                c.shouldShow &&
                    !u &&
                    (i = (0, x.Qc)(c)
                        ? (0, n.jsx)(o.m, { text: c.title, position: "top", asContainer: !0, delay: m.Zh, children: e })
                        : (0, n.jsx)(r.u, {
                              title: c.title,
                              body: c.body ?? "",
                              asset: c.renderIcon?.(t),
                              assetSize: m.Q8,
                              position: "top",
                              asContainer: !0,
                              delay: m.Zh,
                              children: e,
                          })),
                i
            );
        }, [v, t, l, u, y, c, a, d]);
    return a
        ? (0, n.jsx)("li", { children: (0, n.jsx)(b, { item: t, index: i, wishlistId: d, onReorder: p, children: E }) })
        : (0, n.jsx)("li", { children: E });
});
function E(e) {
    let { items: t, profileOwner: i, isOwner: r } = e,
        o = p.default.getCurrentUser(),
        { defaultWishlistId: g } = (0, a.cf)([A.A], () => ({ defaultWishlistId: A.A.getFirstWishlistId(i.id) })),
        m = (0, x.b7)(t, r),
        { isDragging: h } = (0, l.V)((e) => ({ isDragging: e.isDragging() })),
        f = s.useCallback(
            (e, i) => {
                if (e === i || null == g || 0 === t.length || e < 0 || e >= t.length || i < 0 || i >= t.length) return;
                let n = c.A.getWishlist(g);
                if (null == n) return;
                let s = t[e],
                    { newWishlistData: l, previousSkuId: a, nextSkuId: r } = (0, u.Ap)(n, t, e, i);
                d.A.reorderWishlistItem(g, s.skuId, { previousSkuId: a, nextSkuId: r, newWishlistData: l });
            },
            [g, t],
        );
    if (null == o || null == g) return null;
    let j = (0, n.jsx)("ul", {
        className: S.Vg,
        children: t.map((e, t) =>
            (0, n.jsx)(
                y,
                {
                    item: e,
                    index: t,
                    profileOwner: i,
                    isOwner: r,
                    wishlistId: g,
                    tooltipConfig: m[t],
                    isDragging: h,
                    onReorder: f,
                },
                e.skuId,
            ),
        ),
    });
    return r ? (0, n.jsx)(I.B, { emptyListFallbackRef: null, children: j }) : j;
}
