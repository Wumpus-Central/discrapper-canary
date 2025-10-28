n.d(t, {
    Y: () => g,
    Z: () => m,
});
var r,
    i = n(951288),
    l = n(647438),
    a = n(120356),
    s = n.n(a),
    o = n(481060),
    c = n(906732),
    d = n(221292),
    u = n(461631),
    p = n(228168),
    h = n(388032),
    f = n(232644),
    g =
        (((r = {}).GIFTING_FLOW = "gifting_flow"),
        (r.PROFILE_MODAL = "profile_modal"),
        (r.PROFILE_SIDEBAR = "profile_sidebar"),
        r);
function m(e) {
    let {
            item: t,
            wishlistId: n,
            isOwner: r,
            surface: a = "profile_modal",
            cardRef: g,
            renderItemPreview: m,
            accessibleLabel: b,
            onCardClick: _,
            buttonCTALabel: y,
            buttonIcon: x,
            isOwned: v = !1,
            renderSourceIcon: j,
        } = e,
        O = l.useRef(null),
        C = l.useRef(null),
        I = null != g ? g : C,
        { analyticsLocations: S } = (0, c.ZP)(),
        E = "profile_modal" === a && !v,
        Z = (0, i.jsx)("div", {
            className: f.cardStateIconWrapper,
            children: (0, i.jsx)(o.sV5, {
                size: "custom",
                color: o.TVs.colors.WHITE,
                width: 38,
                height: 38,
                className: s()(f.cardStateIcon, f.checkmark),
                "aria-label": h.intl.string(h.t.L5Pt9L),
            }),
        }),
        P = (0, i.jsx)("div", {
            className: f.overlay,
            children: (0, i.jsx)(o.Button, {
                focusProps: { ringTarget: I },
                variant: "primary",
                size: "sm",
                text: y,
                icon: x,
                onClick: (e) => {
                    e.stopPropagation(), T();
                },
                fullWidth: !0,
            }),
        }),
        T = () => {
            v ||
                (null != n &&
                    (0, d.Er)({
                        wishlistId: n,
                        action: p.NW.WISHLIST_ITEM_CLICKED,
                        skuId: t.skuId,
                        analyticsLocations: S,
                    }),
                _());
        };
    return (0, i.jsxs)("div", {
        ref: O,
        className: f.container,
        children: [
            (0, i.jsxs)("div", {
                ref: I,
                className: s()(f.card, {
                    [f.giftSent]: v,
                    [f.smallCard]: "gifting_flow" === a,
                    [f.largeCard]: "profile_modal" === a,
                }),
                onClick: T,
                children: [
                    (0, i.jsx)(o.nn4, { children: (0, i.jsx)(o.H, { children: b }) }),
                    (0, i.jsx)("div", {
                        className: f.cardPreview,
                        children: m(),
                    }),
                    v && Z,
                    E
                        ? P
                        : (0, i.jsx)(o.P3F, {
                              "aria-label": y,
                              focusProps: { ringTarget: I },
                              onClick: (e) => {
                                  e.stopPropagation(), T();
                              },
                          }),
                ],
            }),
            null != j && j(),
            r &&
                null != n &&
                (0, i.jsx)(u.Z, {
                    iconSize: "sm",
                    item: t,
                    wishlistId: n,
                    className: f.removeItemButton,
                }),
        ],
    });
}
