n.d(t, { Z: () => I });
var r = n(54381),
    i = n(473749),
    a = n(505805),
    l = n(442837),
    o = n(454399),
    c = n(28664),
    s = n(277511),
    u = n(607550),
    d = n(474930),
    f = n(602733),
    g = n(689201),
    p = n(594174),
    b = n(621853),
    m = n(559410),
    h = n(780899),
    y = n(733231),
    v = n(796483),
    O = n(388032),
    j = n(796647);
function x(e) {
    let { item: t, index: n, wishlistId: i, onReorder: a, children: l } = e,
        { manageFocusOnReorder: o } = (0, y.C)();
    return (0, r.jsx)(h.yW, {
        index: n,
        itemId: String(t.skuId),
        listType: String(i),
        itemType: "WISHLIST_ITEM",
        itemPreviewProps: { item: t },
        "aria-label": O.intl.formatToPlainString(O.t["7SnyMA"], { positionNumber: n + 1 }),
        onReorder: a,
        onEnd: () => o(String(t.skuId)),
        className: j.dragAndDropContainer,
        dropBeforeClassName: j.dropIndicatorBefore,
        dropAfterClassName: j.dropIndicatorAfter,
        draggingClassName: j.isDragging,
        children: (0, r.jsx)("div", {
            className: j.dragHandleContainer,
            children: l,
        }),
    });
}
let P = i.memo(function (e) {
    let {
            item: t,
            index: n,
            profileOwner: i,
            isOwner: a,
            wishlistId: l,
            canReorder: s,
            tooltipConfig: u,
            isDragging: d,
            onReorder: g,
        } = e,
        { registerDragHandleRef: p } = (0, y.C)(),
        b = s
            ? (0, r.jsx)(h.e_, {
                  buttonRef: p(String(t.skuId)),
                  className: j.dragHandle,
                  onFocus: (e) => e.stopPropagation(),
              })
            : void 0,
        m = (0, r.jsx)(v.Z, {
            item: t,
            profileOwner: i,
            wishlistId: l,
            isOwner: a,
            isDragging: d,
            dragHandle: b,
        }),
        O = m;
    if (u.shouldShow && !d)
        if (null != u.title && null == u.body && null == u.renderIcon)
            O = (0, r.jsx)(c.u, {
                text: u.title,
                position: "top",
                asContainer: !0,
                delay: f.rq,
                children: m,
            });
        else {
            var P, I;
            O = (0, r.jsx)(o.i, {
                title: u.title,
                body: null != (I = u.body) ? I : "",
                asset: null == (P = u.renderIcon) ? void 0 : P.call(u, t),
                assetSize: f.EU,
                position: "top",
                asContainer: !0,
                delay: f.rq,
                children: m,
            });
        }
    return s
        ? (0, r.jsx)("li", {
              children: (0, r.jsx)(x, {
                  item: t,
                  index: n,
                  wishlistId: l,
                  onReorder: g,
                  children: O,
              }),
          })
        : (0, r.jsx)("li", { children: O });
});
function I(e) {
    let { items: t, profileOwner: n, isOwner: o } = e,
        c = p.default.getCurrentUser(),
        { defaultWishlistId: f } = (0, l.cj)([b.Z], () => ({ defaultWishlistId: b.Z.getFirstWishlistId(n.id) })),
        h = (0, g.c)(t, o),
        v = (0, m.f)({ location: "UserProfileModalV2WishlistGrid" }) && o,
        { isDragging: O } = (0, a.f)((e) => ({ isDragging: e.isDragging() })),
        x = i.useCallback(
            (e, n) => {
                if (e === n || null == f || 0 === t.length || e < 0 || e >= t.length || n < 0 || n >= t.length) return;
                let r = u.Z.getWishlist(f);
                if (null == r) return;
                let i = t[e],
                    { newWishlistData: a, previousSkuId: l, nextSkuId: o } = (0, d.d)(r, t, e, n);
                s.Z.reorderWishlistItem(f, i.skuId, {
                    previousSkuId: l,
                    nextSkuId: o,
                    newWishlistData: a,
                });
            },
            [f, t],
        );
    if (null == c || null == f) return null;
    let I = (0, r.jsx)("ul", {
        className: j.grid,
        children: t.map((e, t) =>
            (0, r.jsx)(
                P,
                {
                    item: e,
                    index: t,
                    profileOwner: n,
                    isOwner: o,
                    wishlistId: f,
                    canReorder: v,
                    tooltipConfig: h[t],
                    isDragging: O,
                    onReorder: x,
                },
                e.skuId,
            ),
        ),
    });
    return v
        ? (0, r.jsx)(y.d, {
              emptyListFallbackRef: null,
              children: I,
          })
        : I;
}
