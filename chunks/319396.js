n.d(t, { Z: () => P });
var r = n(54381),
    i = n(473749),
    l = n(85707),
    a = n(442837),
    o = n(454399),
    c = n(28664),
    s = n(277511),
    u = n(607550),
    d = n(474930),
    f = n(602733),
    g = n(689201),
    p = n(594174),
    m = n(621853),
    b = n(559410),
    h = n(780899),
    y = n(733231),
    v = n(796483),
    O = n(388032),
    j = n(855587);
function x(e) {
    let { item: t, index: n, wishlistId: i, onReorder: l, children: a } = e,
        { registerDragHandleRef: o, manageFocusOnReorder: c } = (0, y.C)();
    return (0, r.jsx)(h.yW, {
        index: n,
        itemId: String(t.skuId),
        listType: String(i),
        itemType: "WISHLIST_ITEM",
        itemPreviewProps: { item: t },
        "aria-label": O.intl.formatToPlainString(O.t["7SnyMA"], { positionNumber: n + 1 }),
        onReorder: l,
        onEnd: () => c(String(t.skuId)),
        className: j.dragAndDropContainer,
        dropBeforeClassName: j.dropIndicatorBefore,
        dropAfterClassName: j.dropIndicatorAfter,
        draggingClassName: j.isDragging,
        children: (0, r.jsxs)("div", {
            className: j.dragHandleContainer,
            children: [
                a,
                (0, r.jsx)(h.e_, {
                    buttonRef: o(String(t.skuId)),
                    className: j.dragHandle,
                }),
            ],
        }),
    });
}
let _ = i.memo(function (e) {
    let {
            item: t,
            index: n,
            profileOwner: i,
            isOwner: l,
            wishlistId: a,
            canReorder: s,
            tooltipConfig: u,
            isDragging: d,
            onReorder: g,
        } = e,
        p = (0, r.jsx)(v.Z, {
            item: t,
            profileOwner: i,
            wishlistId: a,
            isOwner: l,
            isDragging: d,
        }),
        m = p;
    if (u.shouldShow && !d)
        if (null != u.title && null == u.body && null == u.renderIcon)
            m = (0, r.jsx)(c.u, {
                text: u.title,
                position: "top",
                asContainer: !0,
                delay: f.rq,
                children: p,
            });
        else {
            var b, h;
            m = (0, r.jsx)(o.i, {
                title: u.title,
                body: null != (h = u.body) ? h : "",
                asset: null == (b = u.renderIcon) ? void 0 : b.call(u, t),
                assetSize: f.EU,
                position: "top",
                asContainer: !0,
                delay: f.rq,
                children: p,
            });
        }
    return (
        s &&
            (m = (0, r.jsx)(x, {
                item: t,
                index: n,
                wishlistId: a,
                onReorder: g,
                children: m,
            })),
        (0, r.jsx)("li", { children: m })
    );
});
function P(e) {
    let { items: t, profileOwner: n, isOwner: o } = e,
        c = p.default.getCurrentUser(),
        { defaultWishlistId: f } = (0, a.cj)([m.Z], () => ({ defaultWishlistId: m.Z.getFirstWishlistId(n.id) })),
        h = (0, g.c)(t, o),
        v = (0, b.f)({ location: "UserProfileModalV2WishlistGrid" }) && o,
        { isDragging: O } = (0, l.f)((e) => ({ isDragging: e.isDragging() })),
        x = i.useCallback(
            (e, n) => {
                if (e === n || null == f || 0 === t.length || e < 0 || e >= t.length || n < 0 || n >= t.length) return;
                let r = u.Z.getWishlist(f);
                if (null == r) return;
                let i = t[e],
                    { newWishlistData: l, previousSkuId: a, nextSkuId: o } = (0, d.d)(r, t, e, n);
                s.Z.reorderWishlistItem(f, i.skuId, {
                    previousSkuId: a,
                    nextSkuId: o,
                    newWishlistData: l,
                });
            },
            [f, t],
        );
    if (null == c || null == f) return null;
    let P = (0, r.jsx)("ul", {
        className: j.grid,
        children: t.map((e, t) =>
            (0, r.jsx)(
                _,
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
              children: P,
          })
        : P;
}
