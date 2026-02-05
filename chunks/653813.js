i.d(t, { default: () => f });
var n = i(627968),
    r = i(64700),
    l = i(397927),
    s = i(937008),
    a = i(156312),
    o = i(532794),
    u = i(232516),
    d = i(788868),
    c = i(652215),
    m = i(985018),
    p = i(431389);
function _(e) {
    let {
            giftRecipient: t,
            onClose: i,
            transitionState: s,
            analyticsLocations: _,
            analyticsLocation: f,
            analyticsObject: h,
            giftMessage: g,
        } = e,
        { priceOptions: I } = (0, a.P5)(),
        S = r.useCallback(
            (e) => {
                (0, o.A)({
                    isGift: !0,
                    giftRecipient: t,
                    subscriptionTier: e,
                    giftingOrigin: d.vQ.DM_CHANNEL,
                    analyticsLocations: _ ?? [],
                    analyticsLocation: f,
                    analyticsObject: h ?? {
                        page: c.liQ.DM_CHANNEL,
                        section: c.JJy.CHANNEL_TEXT_AREA,
                        object: c.ZSU.BUTTON_ICON,
                        objectType: c.AnalyticsObjectTypes.GIFT,
                    },
                    giftMessage: g,
                }),
                    i();
            },
            [t, _, f, h, g, i],
        );
    return (0, n.jsxs)(l.EOs, {
        transitionState: s,
        size: l.rIJ.DYNAMIC,
        className: p.jT,
        parentComponent: "GiftOptionSelectModal",
        "data-migration-pending": !0,
        children: [
            (0, n.jsx)(l.rQ0, {
                className: p.Hc,
                "data-migration-pending": !0,
                children: (0, n.jsxs)(l.BJc, {
                    direction: "horizontal",
                    justify: "space-between",
                    children: [
                        (0, n.jsx)(l.Heading, {
                            variant: "heading-md/semibold",
                            children: m.intl.string(m.t["wg/30i"]),
                        }),
                        (0, n.jsx)(l.s_y, { onClick: i, "data-migration-pending": !0 }),
                    ],
                }),
            }),
            (0, n.jsx)(l.$mQ, {
                className: p.S3,
                "data-migration-pending": !0,
                children: (0, n.jsx)(u.A, {
                    onSelectSku: S,
                    giftRecipient: t,
                    priceOptions: I,
                    onWishlistItemClick: i,
                }),
            }),
        ],
    });
}
function f(e) {
    let {
        giftRecipient: t,
        onClose: i,
        transitionState: r,
        analyticsLocations: l,
        analyticsLocation: o,
        analyticsObject: u,
        giftMessage: c,
    } = e;
    return (0, n.jsx)(a.PaymentContextProvider, {
        activeSubscription: null,
        stepConfigs: [],
        skuIDs: d.T7,
        isGift: !0,
        children: (0, n.jsx)(s.dX, {
            isGift: !0,
            giftRecipient: t,
            giftingOrigin: d.vQ.DM_CHANNEL,
            children: (0, n.jsx)(_, {
                giftRecipient: t,
                onClose: i,
                transitionState: r,
                analyticsLocations: l,
                analyticsLocation: o,
                analyticsObject: u,
                giftMessage: c,
            }),
        }),
    });
}
