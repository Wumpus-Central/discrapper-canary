n.d(t, {
    A: () => A,
});
var r = n(627968),
    l = n(64700),
    i = n(688807),
    a = n(311907),
    o = n(459192),
    s = n(990078),
    c = n(808247),
    u = n(107563),
    d = n(840411),
    f = n(178213),
    p = n(594832),
    g = n(86638),
    m = n(46537),
    b = n(287809),
    y = n(622543),
    O = n(451395),
    j = n(823016),
    h = n(18983),
    x = n(985018),
    v = n(935915);

function _(e) {
    let { item: t, index: n, wishlistId: l, onReorder: i, children: a } = e,
        { manageFocusOnReorder: o } = (0, j.r)();
    return (0, r.jsx)(O.mG, {
        index: n,
        itemId: String(t.skuId),
        listType: String(l),
        itemType: "WISHLIST_ITEM",
        itemPreviewProps: {
            item: t,
        },
        "aria-label": x.intl.formatToPlainString(x.t["7SnyMA"], {
            positionNumber: n + 1,
        }),
        onReorder: i,
        onEnd: () => o(String(t.skuId)),
        className: v.C,
        dropBeforeClassName: v.A,
        dropAfterClassName: v.Ze,
        draggingClassName: v.Id,
        children: (0, r.jsx)("div", {
            className: v.An,
            children: a,
        }),
    });
}
let I = l.memo(function (e) {
    let {
            item: t,
            index: n,
            profileOwner: i,
            isOwner: a,
            wishlistId: c,
            tooltipConfig: u,
            isDragging: d,
            onReorder: m,
        } = e,
        { registerDragHandleRef: b } = (0, j.r)(),
        y = (0, f.G)("user_profile_wishlist_grid"),
        x = l.useMemo(
            () =>
                a
                    ? (0, r.jsx)(O.jV, {
                          buttonRef: b(String(t.skuId)),
                          className: v.BU,
                          onFocus: (e) => e.stopPropagation(),
                      })
                    : void 0,
            [a, b, t.skuId],
        ),
        I = l.useMemo(() => {
            if (y)
                return (0, r.jsx)(g.A, {
                    item: t,
                    wishlistOwner: i,
                    wishlistId: c,
                    isDragging: d,
                    dragHandle: x,
                    tooltipConfig: u,
                });
            let e = (0, r.jsx)(h.A, {
                    item: t,
                    profileOwner: i,
                    wishlistId: c,
                    isOwner: a,
                    isDragging: d,
                    dragHandle: x,
                }),
                n = e;
            if (u.shouldShow && !d)
                if (null != u.title && null == u.body && null == u.renderIcon)
                    n = (0, r.jsx)(s.m, {
                        text: u.title,
                        position: "top",
                        asContainer: !0,
                        delay: p.Zh,
                        children: e,
                    });
                else {
                    var l, f;
                    n = (0, r.jsx)(o.u, {
                        title: u.title,
                        body: null != (l = u.body) ? l : "",
                        asset: null == (f = u.renderIcon) ? void 0 : f.call(u, t),
                        assetSize: p.Q8,
                        position: "top",
                        asContainer: !0,
                        delay: p.Zh,
                        children: e,
                    });
                }
            return n;
        }, [y, t, i, d, x, u, a, c]);
    return a
        ? (0, r.jsx)("li", {
              children: (0, r.jsx)(_, {
                  item: t,
                  index: n,
                  wishlistId: c,
                  onReorder: m,
                  children: I,
              }),
          })
        : (0, r.jsx)("li", {
              children: I,
          });
});

function A(e) {
    let { items: t, profileOwner: n, isOwner: o } = e,
        s = b.default.getCurrentUser(),
        { defaultWishlistId: f } = (0, a.cf)([y.A], () => ({
            defaultWishlistId: y.A.getFirstWishlistId(n.id),
        })),
        p = (0, m.u)(t, o),
        { isDragging: g } = (0, i.V)((e) => ({
            isDragging: e.isDragging(),
        })),
        O = l.useCallback(
            (e, n) => {
                if (e === n || null == f || 0 === t.length || e < 0 || e >= t.length || n < 0 || n >= t.length) return;
                let r = u.A.getWishlist(f);
                if (null == r) return;
                let l = t[e],
                    { newWishlistData: i, previousSkuId: a, nextSkuId: o } = (0, d.A)(r, t, e, n);
                c.A.reorderWishlistItem(f, l.skuId, {
                    previousSkuId: a,
                    nextSkuId: o,
                    newWishlistData: i,
                });
            },
            [f, t],
        );
    if (null == s || null == f) return null;
    let h = (0, r.jsx)("ul", {
        className: v.Vg,
        children: t.map((e, t) =>
            (0, r.jsx)(
                I,
                {
                    item: e,
                    index: t,
                    profileOwner: n,
                    isOwner: o,
                    wishlistId: f,
                    tooltipConfig: p[t],
                    isDragging: g,
                    onReorder: O,
                },
                e.skuId,
            ),
        ),
    });
    return o
        ? (0, r.jsx)(j.B, {
              emptyListFallbackRef: null,
              children: h,
          })
        : h;
}
