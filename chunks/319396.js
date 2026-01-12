n.d(t, { Z: () => P });
var r = n(54381),
    i = n(473749),
    l = n(505805),
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
    b = n(780899),
    y = n(733231),
    j = n(796483),
    h = n(388032),
    O = n(796647);
function v(e) {
    let { item: t, index: n, wishlistId: i, onReorder: l, children: a } = e,
        { manageFocusOnReorder: o } = (0, y.C)();
    return (0, r.jsx)(b.yW, {
        index: n,
        itemId: String(t.skuId),
        listType: String(i),
        itemType: "WISHLIST_ITEM",
        itemPreviewProps: { item: t },
        "aria-label": h.intl.formatToPlainString(h.t["7SnyMA"], { positionNumber: n + 1 }),
        onReorder: l,
        onEnd: () => o(String(t.skuId)),
        className: O.dragAndDropContainer,
        dropBeforeClassName: O.dropIndicatorBefore,
        dropAfterClassName: O.dropIndicatorAfter,
        draggingClassName: O.isDragging,
        children: (0, r.jsx)("div", {
            className: O.dragHandleContainer,
            children: a,
        }),
    });
}
let x = i.memo(function (e) {
    let {
            item: t,
            index: n,
            profileOwner: i,
            isOwner: l,
            wishlistId: a,
            tooltipConfig: s,
            isDragging: u,
            onReorder: d,
        } = e,
        { registerDragHandleRef: g } = (0, y.C)(),
        p = l
            ? (0, r.jsx)(b.e_, {
                  buttonRef: g(String(t.skuId)),
                  className: O.dragHandle,
                  onFocus: (e) => e.stopPropagation(),
              })
            : void 0,
        m = (0, r.jsx)(j.Z, {
            item: t,
            profileOwner: i,
            wishlistId: a,
            isOwner: l,
            isDragging: u,
            dragHandle: p,
        }),
        h = m;
    if (s.shouldShow && !u)
        if (null != s.title && null == s.body && null == s.renderIcon)
            h = (0, r.jsx)(c.u, {
                text: s.title,
                position: "top",
                asContainer: !0,
                delay: f.rq,
                children: m,
            });
        else {
            var x, P;
            h = (0, r.jsx)(o.i, {
                title: s.title,
                body: null != (P = s.body) ? P : "",
                asset: null == (x = s.renderIcon) ? void 0 : x.call(s, t),
                assetSize: f.EU,
                position: "top",
                asContainer: !0,
                delay: f.rq,
                children: m,
            });
        }
    return l
        ? (0, r.jsx)("li", {
              children: (0, r.jsx)(v, {
                  item: t,
                  index: n,
                  wishlistId: a,
                  onReorder: d,
                  children: h,
              }),
          })
        : (0, r.jsx)("li", { children: h });
});
function P(e) {
    let { items: t, profileOwner: n, isOwner: o } = e,
        c = p.default.getCurrentUser(),
        { defaultWishlistId: f } = (0, a.cj)([m.Z], () => ({ defaultWishlistId: m.Z.getFirstWishlistId(n.id) })),
        b = (0, g.c)(t, o),
        { isDragging: j } = (0, l.f)((e) => ({ isDragging: e.isDragging() })),
        h = i.useCallback(
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
    let v = (0, r.jsx)("ul", {
        className: O.grid,
        children: t.map((e, t) =>
            (0, r.jsx)(
                x,
                {
                    item: e,
                    index: t,
                    profileOwner: n,
                    isOwner: o,
                    wishlistId: f,
                    tooltipConfig: b[t],
                    isDragging: j,
                    onReorder: h,
                },
                e.skuId,
            ),
        ),
    });
    return o
        ? (0, r.jsx)(y.d, {
              emptyListFallbackRef: null,
              children: v,
          })
        : v;
}
