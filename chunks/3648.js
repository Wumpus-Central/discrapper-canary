"use strict";
n.d(t, { A: () => R, Z: () => y });
var i = n(627968),
    s = n(64700),
    l = n(311907),
    r = n(554146),
    a = n(192308),
    o = n(342494),
    c = n(397927),
    d = n(793574),
    u = n(627363),
    h = n(576030),
    A = n(379848),
    p = n(957785),
    g = n(186111),
    m = n(916023),
    _ = n(533406),
    f = n(366523),
    x = n(188275),
    C = n(49999),
    E = n(788868),
    I = n(985018),
    b = n(407494),
    N = n(101616),
    S = n(585048);
function T(e) {
    let { targetElementRef: t, onRequestClose: n, onActionClick: s } = e;
    return (0, i.jsx)(o.AM, {
        size: "lg",
        shouldShow: !0,
        position: "left",
        caretConfig: { align: "center" },
        gradientColor: "blue",
        align: "center",
        onRequestClose: n,
        actions: [{ text: I.intl.string(I.t.uB4Gax), variant: "primary", onClick: s }],
        targetElementRef: t,
        title: I.intl.string(I.t.qh9t5c),
        body: I.intl.string(I.t.iM6fxV),
        graphic: { type: "image", src: S.A },
    });
}
function v(e) {
    let { showPopover: t, onViewWishlist: n, onCardClick: o, ...c } = e,
        d = s.useRef(null),
        u = (0, a.useHasAnyModalOpen)(),
        h = (0, l.bG)([g.A], () => g.A.hasLayers()),
        _ = (0, m.Jw)({ location: "wishlist-card" }),
        [f, x] = (0, A.kn)(_ ? [r.M.GAME_SHOP_WISHLIST_POPOVER] : [], C.m.SIDEBAR, !0),
        E = s.useCallback(() => {
            x(C.i.USER_DISMISS), o();
        }, [o, x]),
        I = s.useCallback(() => {
            x(C.i.USER_DISMISS);
        }, [x]),
        b = s.useCallback(() => {
            x(C.i.USER_DISMISS), n();
        }, [n, x]);
    return (0, i.jsxs)(i.Fragment, {
        children: [
            (0, i.jsx)(p.A, { ...c, onCardClick: E, ref: d }),
            t &&
                f === r.M.GAME_SHOP_WISHLIST_POPOVER &&
                !u &&
                !h &&
                (0, i.jsx)(T, { targetElementRef: d, onRequestClose: I, onActionClick: b }),
        ],
    });
}
function y(e, t) {
    let {
            index: n,
            moreCount: s,
            onViewWishlist: l,
            isSingleCard: r = !1,
            profileOwner: a,
            wishlistId: o,
            cardSize: c,
            analyticsLocations: u,
        } = t,
        A = null != s && s > 0,
        p = {
            title: A ? I.intl.string(I.t.TxBQzD) : I.intl.string(I.t["4yiU7x"]),
            body: A ? void 0 : I.intl.string(I.t.ilhtIa),
            renderIcon: A ? void 0 : h.GM,
            shouldShow: !0,
        };
    return (0, i.jsx)(
        v,
        {
            wishlistItem: e,
            onCardClick: () => {
                A
                    ? l()
                    : (0, _.a)(
                          e.sku,
                          { isGift: !0, giftRecipient: a, giftingOrigin: E.vQ.USER_PROFILE_WISHLIST },
                          {
                              analyticsLocations: [
                                  ...u,
                                  d.A.SLAYER_STOREFRONT_BREADCRUMB_WISHLIST_ITEM_CARD_GIFT_BUTTON,
                              ],
                          },
                      );
            },
            tooltipConfig: p,
            shouldScalePreview: !1,
            renderPreview: () =>
                (0, i.jsx)(f.e, {
                    containerClassName: b.Nr,
                    backgroundImageClassName: b.GC,
                    foregroundImageClassName: b.wP,
                    sku: e.sku,
                    shape: "custom",
                }),
            moreCount: s,
            isSingleCard: r,
            wishlistId: o,
            showPopover: 0 === n && e.sku.applicationId === x.XR,
            onViewWishlist: l,
            cardSize: c,
        },
        e.skuId,
    );
}
function j(e) {
    let { item: t, card: n, analyticsLocations: s, profileOwner: l } = e,
        { data: r } = (0, u.YY)(t.sku.applicationId);
    return (0, i.jsxs)("div", {
        className: N.D5,
        children: [
            n,
            (0, i.jsx)("div", {
                className: N.S7,
                children: (0, i.jsxs)(c.DUT, {
                    onClick: () => {
                        (0, _.a)(
                            t.sku,
                            { isGift: !0, giftRecipient: l, giftingOrigin: E.vQ.USER_PROFILE_WISHLIST },
                            {
                                analyticsLocations: [
                                    ...s,
                                    d.A.SLAYER_STOREFRONT_BREADCRUMB_WISHLIST_ITEM_CARD_GIFT_BUTTON,
                                ],
                            },
                        );
                    },
                    className: N.Hh,
                    "aria-label": I.intl.string(I.t.pLPjsb),
                    children: [
                        (0, i.jsx)(c.Text, {
                            variant: "text-sm/semibold",
                            color: "text-default",
                            lineClamp: 2,
                            children: t.skuName,
                        }),
                        (0, i.jsx)(c.Text, {
                            variant: "text-xs/medium",
                            color: "text-default",
                            children: I.intl.format(I.t["CqpEC+"], { applicationName: r?.name }),
                        }),
                    ],
                }),
            }),
        ],
    });
}
function R(e, t) {
    let { profileOwner: n, analyticsLocations: s, wishlistId: l, onViewWishlist: r } = t,
        a = y(e, {
            index: 0,
            profileOwner: n,
            analyticsLocations: s,
            onViewWishlist: r,
            isSingleCard: !0,
            wishlistId: l,
        });
    return (0, i.jsx)(j, { item: e, card: a, profileOwner: n, analyticsLocations: s });
}
