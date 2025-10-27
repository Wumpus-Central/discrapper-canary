r.d(t, {
    Y: () => h,
    Z: () => I,
});
var n,
    i = r(951288),
    l = r(647438),
    s = r(120356),
    a = r.n(s),
    c = r(481060),
    o = r(906732),
    u = r(221292),
    d = r(461631),
    f = r(228168),
    m = r(388032),
    p = r(232644),
    h = (((n = {}).GIFTING_FLOW = "gifting_flow"), (n.PROFILE_MODAL = "profile_modal"), n);
function I(e) {
    let {
            item: t,
            wishlistId: r,
            isOwner: n,
            surface: s = "profile_modal",
            cardRef: h,
            renderItemPreview: I,
            accessibleLabel: O,
            onCardClick: g,
            buttonCTALabel: b,
            buttonIcon: P,
            isOwned: j = !1,
            renderSourceIcon: v,
        } = e,
        S = l.useRef(null),
        w = l.useRef(null),
        x = null != h ? h : w,
        { analyticsLocations: y } = (0, o.ZP)(),
        E = "profile_modal" === s && !j,
        N = (0, i.jsx)("div", {
            className: p.cardStateIconWrapper,
            children: (0, i.jsx)(c.sV5, {
                size: "custom",
                color: c.TVs.colors.WHITE,
                width: 38,
                height: 38,
                className: a()(p.cardStateIcon, p.checkmark),
                "aria-label": m.intl.string(m.t.L5Pt9L),
            }),
        }),
        T = (0, i.jsx)("div", {
            className: p.overlay,
            children: (0, i.jsx)(c.Button, {
                focusProps: { ringTarget: x },
                variant: "primary",
                size: "sm",
                text: b,
                icon: P,
                onClick: (e) => {
                    e.stopPropagation(), k();
                },
                fullWidth: !0,
            }),
        }),
        k = () => {
            j ||
                (null != r &&
                    (0, u.Er)({
                        wishlistId: r,
                        action: f.NW.WISHLIST_ITEM_CLICKED,
                        skuId: t.skuId,
                        analyticsLocations: y,
                    }),
                g());
        };
    return (0, i.jsxs)("div", {
        ref: S,
        className: p.container,
        children: [
            (0, i.jsxs)("div", {
                ref: x,
                className: a()(p.card, {
                    [p.giftSent]: j,
                    [p.smallCard]: "gifting_flow" === s,
                    [p.largeCard]: "profile_modal" === s,
                }),
                onClick: k,
                children: [
                    (0, i.jsx)(c.nn4, { children: (0, i.jsx)(c.H, { children: O }) }),
                    (0, i.jsx)("div", {
                        className: p.cardPreview,
                        children: I(),
                    }),
                    j && N,
                    E
                        ? T
                        : (0, i.jsx)(c.P3F, {
                              "aria-label": b,
                              focusProps: { ringTarget: x },
                              onClick: (e) => {
                                  e.stopPropagation(), k();
                              },
                          }),
                ],
            }),
            null != v && v(),
            n &&
                null != r &&
                (0, i.jsx)(d.Z, {
                    iconSize: "sm",
                    item: t,
                    wishlistId: r,
                    className: p.removeItemButton,
                }),
        ],
    });
}
