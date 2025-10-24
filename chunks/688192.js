r.d(t, {
    Y: () => h,
    Z: () => I,
});
var n,
    i = r(951288),
    s = r(647438),
    l = r(120356),
    a = r.n(l),
    o = r(481060),
    c = r(906732),
    u = r(221292),
    d = r(461631),
    f = r(228168),
    p = r(388032),
    m = r(232644),
    h = (((n = {}).GIFTING_FLOW = "gifting_flow"), (n.PROFILE_MODAL = "profile_modal"), n);
function I(e) {
    let {
            item: t,
            wishlistId: r,
            isOwner: n,
            surface: l = "profile_modal",
            cardRef: h,
            renderItemPreview: I,
            accessibleLabel: O,
            onCardClick: g,
            buttonCTALabel: b,
            buttonIcon: P,
            isOwned: j = !1,
            renderSourceIcon: v,
        } = e,
        S = s.useRef(null),
        w = s.useRef(null),
        y = null != h ? h : w,
        { analyticsLocations: x } = (0, c.ZP)(),
        E = "profile_modal" === l && !j,
        T = (0, i.jsx)("div", {
            className: m.cardStateIconWrapper,
            children: (0, i.jsx)(o.sV5, {
                size: "custom",
                color: o.TVs.colors.WHITE,
                width: 38,
                height: 38,
                className: a()(m.cardStateIcon, m.checkmark),
                "aria-label": p.intl.string(p.t.L5Pt9L),
            }),
        }),
        N = (0, i.jsx)("div", {
            className: m.overlay,
            children: (0, i.jsx)(o.Button, {
                focusProps: { ringTarget: y },
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
                        analyticsLocations: x,
                    }),
                g());
        };
    return (0, i.jsxs)("div", {
        ref: S,
        className: m.container,
        children: [
            (0, i.jsxs)("div", {
                ref: y,
                className: a()(m.card, {
                    [m.giftSent]: j,
                    [m.smallCard]: "gifting_flow" === l,
                    [m.largeCard]: "profile_modal" === l,
                }),
                onClick: k,
                children: [
                    (0, i.jsx)(o.nn4, { children: (0, i.jsx)(o.H, { children: O }) }),
                    (0, i.jsx)("div", {
                        className: m.cardPreview,
                        children: I(),
                    }),
                    j && T,
                    E
                        ? N
                        : (0, i.jsx)(o.P3F, {
                              "aria-label": b,
                              focusProps: { ringTarget: y },
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
                    className: m.removeItemButton,
                }),
        ],
    });
}
