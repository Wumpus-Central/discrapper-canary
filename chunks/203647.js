n.d(t, { A: () => A });
var r = n(627968),
    l = n(64700),
    i = n(688807),
    a = n(311907),
    s = n(459192),
    o = n(990078),
    c = n(808247),
    u = n(107563),
    d = n(840411),
    f = n(594832),
    p = n(46537),
    b = n(287809),
    g = n(622543),
    m = n(451395),
    y = n(823016),
    O = n(18983),
    j = n(985018),
    x = n(935915);
function h(e) {
    let { item: t, index: n, wishlistId: l, onReorder: i, children: a } = e,
        { manageFocusOnReorder: s } = (0, y.r)();
    return (0, r.jsx)(m.mG, {
        index: n,
        itemId: String(t.skuId),
        listType: String(l),
        itemType: "WISHLIST_ITEM",
        itemPreviewProps: { item: t },
        "aria-label": j.intl.formatToPlainString(j.t["7SnyMA"], { positionNumber: n + 1 }),
        onReorder: i,
        onEnd: () => s(String(t.skuId)),
        className: x.C,
        dropBeforeClassName: x.A,
        dropAfterClassName: x.Ze,
        draggingClassName: x.Id,
        children: (0, r.jsx)("div", {
            className: x.An,
            children: a,
        }),
    });
}
let v = l.memo(function (e) {
    let {
            item: t,
            index: n,
            profileOwner: l,
            isOwner: i,
            wishlistId: a,
            tooltipConfig: c,
            isDragging: u,
            onReorder: d,
        } = e,
        { registerDragHandleRef: p } = (0, y.r)(),
        b = i
            ? (0, r.jsx)(m.jV, {
                  buttonRef: p(String(t.skuId)),
                  className: x.BU,
                  onFocus: (e) => e.stopPropagation(),
              })
            : void 0,
        g = (0, r.jsx)(O.A, {
            item: t,
            profileOwner: l,
            wishlistId: a,
            isOwner: i,
            isDragging: u,
            dragHandle: b,
        }),
        j = g;
    if (c.shouldShow && !u)
        if (null != c.title && null == c.body && null == c.renderIcon)
            j = (0, r.jsx)(o.m, {
                text: c.title,
                position: "top",
                asContainer: !0,
                delay: f.Zh,
                children: g,
            });
        else {
            var v, A;
            j = (0, r.jsx)(s.u, {
                title: c.title,
                body: null != (v = c.body) ? v : "",
                asset: null == (A = c.renderIcon) ? void 0 : A.call(c, t),
                assetSize: f.Q8,
                position: "top",
                asContainer: !0,
                delay: f.Zh,
                children: g,
            });
        }
    return i
        ? (0, r.jsx)("li", {
              children: (0, r.jsx)(h, {
                  item: t,
                  index: n,
                  wishlistId: a,
                  onReorder: d,
                  children: j,
              }),
          })
        : (0, r.jsx)("li", { children: j });
});
function A(e) {
    let { items: t, profileOwner: n, isOwner: s } = e,
        o = b.default.getCurrentUser(),
        { defaultWishlistId: f } = (0, a.cf)([g.A], () => ({ defaultWishlistId: g.A.getFirstWishlistId(n.id) })),
        m = (0, p.u)(t, s),
        { isDragging: O } = (0, i.V)((e) => ({ isDragging: e.isDragging() })),
        j = l.useCallback(
            (e, n) => {
                if (e === n || null == f || 0 === t.length || e < 0 || e >= t.length || n < 0 || n >= t.length) return;
                let r = u.A.getWishlist(f);
                if (null == r) return;
                let l = t[e],
                    { newWishlistData: i, previousSkuId: a, nextSkuId: s } = (0, d.A)(r, t, e, n);
                c.A.reorderWishlistItem(f, l.skuId, {
                    previousSkuId: a,
                    nextSkuId: s,
                    newWishlistData: i,
                });
            },
            [f, t],
        );
    if (null == o || null == f) return null;
    let h = (0, r.jsx)("ul", {
        className: x.Vg,
        children: t.map((e, t) =>
            (0, r.jsx)(
                v,
                {
                    item: e,
                    index: t,
                    profileOwner: n,
                    isOwner: s,
                    wishlistId: f,
                    tooltipConfig: m[t],
                    isDragging: O,
                    onReorder: j,
                },
                e.skuId,
            ),
        ),
    });
    return s
        ? (0, r.jsx)(y.B, {
              emptyListFallbackRef: null,
              children: h,
          })
        : h;
}
