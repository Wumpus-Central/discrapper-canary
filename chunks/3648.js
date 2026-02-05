n.d(t, { A: () => R, Z: () => v });
var i = n(627968),
    l = n(64700),
    s = n(311907),
    a = n(554146),
    r = n(192308),
    o = n(342494),
    d = n(397927),
    c = n(793574),
    u = n(627363),
    h = n(576030),
    A = n(379848),
    g = n(957785),
    m = n(186111),
    p = n(916023),
    _ = n(533406),
    x = n(366523),
    f = n(188275),
    E = n(49999),
    C = n(788868),
    I = n(985018),
    S = n(407494),
    b = n(101616),
    N = n(585048);
function T(e) {
    let { targetElementRef: t, onRequestClose: n, onActionClick: l } = e;
    return (0, i.jsx)(o.AM, {
        size: "lg",
        shouldShow: !0,
        position: "left",
        caretConfig: { align: "center" },
        gradientColor: "blue",
        align: "center",
        onRequestClose: n,
        actions: [{ text: I.intl.string(I.t.uB4Gax), variant: "primary", onClick: l }],
        targetElementRef: t,
        title: I.intl.string(I.t.qh9t5c),
        body: I.intl.string(I.t.iM6fxV),
        graphic: { type: "image", src: N.A },
    });
}
function j(e) {
    let { showPopover: t, onViewWishlist: n, onCardClick: o, ...d } = e,
        c = l.useRef(null),
        u = (0, r.useHasAnyModalOpen)(),
        h = (0, s.bG)([m.A], () => m.A.hasLayers()),
        _ = (0, p.Jw)({ location: "wishlist-card" }),
        [x, f] = (0, A.kn)(_ ? [a.M.GAME_SHOP_WISHLIST_POPOVER] : [], E.m.SIDEBAR, !0),
        C = l.useCallback(() => {
            f(E.i.USER_DISMISS), o();
        }, [o, f]),
        I = l.useCallback(() => {
            f(E.i.USER_DISMISS);
        }, [f]),
        S = l.useCallback(() => {
            f(E.i.USER_DISMISS), n();
        }, [n, f]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(g.A, { ...d, onCardClick: C, ref: c }),
            t &&
                x === a.M.GAME_SHOP_WISHLIST_POPOVER &&
                !u &&
                !h &&
                (0, i.jsx)(T, { targetElementRef: c, onRequestClose: I, onActionClick: S }),
        ],
    });
}
function v(e, t) {
    let {
            index: n,
            moreCount: l,
            onViewWishlist: s,
            isSingleCard: a = !1,
            profileOwner: r,
            wishlistId: o,
            cardSize: d,
            analyticsLocations: u,
        } = t,
        A = null != l && l > 0,
        g = {
            title: A ? I.intl.string(I.t.TxBQzD) : I.intl.string(I.t["4yiU7x"]),
            body: A ? void 0 : I.intl.string(I.t.ilhtIa),
            renderIcon: A ? void 0 : h.GM,
            shouldShow: !0,
        };
    return (0, i.jsx)(
        j,
        {
            wishlistItem: e,
            onCardClick: () => {
                A
                    ? s()
                    : (0, _.a)(
                          e.sku,
                          { isGift: !0, giftRecipient: r, giftingOrigin: C.vQ.USER_PROFILE_WISHLIST },
                          {
                              analyticsLocations: [
                                  ...u,
                                  c.A.SLAYER_STOREFRONT_BREADCRUMB_WISHLIST_ITEM_CARD_GIFT_BUTTON,
                              ],
                          },
                      );
            },
            tooltipConfig: g,
            shouldScalePreview: !1,
            renderPreview: () =>
                (0, i.jsx)(x.e, {
                    containerClassName: S.Nr,
                    backgroundImageClassName: S.GC,
                    foregroundImageClassName: S.wP,
                    sku: e.sku,
                    shape: "custom",
                }),
            moreCount: l,
            isSingleCard: a,
            wishlistId: o,
            showPopover: 0 === n && e.sku.applicationId === f.XR,
            onViewWishlist: s,
            cardSize: d,
        },
        e.skuId,
    );
}
function y(e) {
    let { item: t, card: n, analyticsLocations: l, profileOwner: s } = e,
        { data: a } = (0, u.YY)(t.sku.applicationId);
    return (0, i.jsxs)("div", {
        className: b.D5,
        children: [
            n,
            (0, i.jsx)("div", {
                className: b.S7,
                children: (0, i.jsxs)(d.DUT, {
                    onClick: () => {
                        (0, _.a)(
                            t.sku,
                            { isGift: !0, giftRecipient: s, giftingOrigin: C.vQ.USER_PROFILE_WISHLIST },
                            {
                                analyticsLocations: [
                                    ...l,
                                    c.A.SLAYER_STOREFRONT_BREADCRUMB_WISHLIST_ITEM_CARD_GIFT_BUTTON,
                                ],
                            },
                        );
                    },
                    className: b.Hh,
                    "aria-label": I.intl.string(I.t.pLPjsb),
                    children: [
                        (0, i.jsx)(d.Text, {
                            variant: "text-sm/semibold",
                            color: "text-default",
                            lineClamp: 2,
                            children: t.skuName,
                        }),
                        (0, i.jsx)(d.Text, {
                            variant: "text-xs/medium",
                            color: "text-default",
                            children: I.intl.format(I.t["CqpEC+"], { applicationName: a?.name }),
                        }),
                    ],
                }),
            }),
        ],
    });
}
function R(e, t) {
    let { profileOwner: n, analyticsLocations: l, wishlistId: s, onViewWishlist: a } = t,
        r = v(e, {
            index: 0,
            profileOwner: n,
            analyticsLocations: l,
            onViewWishlist: a,
            isSingleCard: !0,
            wishlistId: s,
        });
    return (0, i.jsx)(y, { item: e, card: r, profileOwner: n, analyticsLocations: l });
}
