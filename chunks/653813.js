t.d(i, { default: () => x });
var n = t(627968),
    s = t(64700),
    l = t(935462),
    r = t(331322),
    a = t(534514),
    c = t(937008),
    o = t(156312),
    d = t(532794),
    u = t(232516),
    h = t(788868),
    m = t(652215),
    g = t(985018),
    p = t(116550);
function I(e) {
    let {
            giftRecipient: i,
            onClose: t,
            transitionState: c,
            analyticsLocations: I,
            analyticsLocation: x,
            analyticsObject: _,
            giftMessage: f,
        } = e,
        { priceOptions: j } = (0, o.P5)(),
        b = s.useCallback(
            (e) => {
                (0, d.A)({
                    isGift: !0,
                    giftRecipient: i,
                    subscriptionTier: e,
                    giftingOrigin: h.vQ.DM_CHANNEL,
                    analyticsLocations: I ?? [],
                    analyticsLocation: x,
                    analyticsObject: _ ?? {
                        page: m.liQ.DM_CHANNEL,
                        section: m.JJy.CHANNEL_TEXT_AREA,
                        object: m.ZSU.BUTTON_ICON,
                        objectType: m.AnalyticsObjectTypes.GIFT,
                    },
                    giftMessage: f,
                }),
                    t();
            },
            [i, I, x, _, f, t],
        );
    return (0, n.jsxs)(l.EO, {
        transitionState: c,
        size: l.rI.DYNAMIC,
        className: p.jT,
        parentComponent: "GiftOptionSelectModal",
        "data-migration-pending": !0,
        children: [
            (0, n.jsx)(l.rQ, {
                className: p.Hc,
                "data-migration-pending": !0,
                children: (0, n.jsxs)(r.B, {
                    direction: "horizontal",
                    justify: "space-between",
                    children: [
                        (0, n.jsx)(a.D, { variant: "heading-md/semibold", children: g.intl.string(g.t["wg/30i"]) }),
                        (0, n.jsx)(l.s_, { onClick: t, "data-migration-pending": !0 }),
                    ],
                }),
            }),
            (0, n.jsx)(l.$m, {
                className: p.S3,
                "data-migration-pending": !0,
                children: (0, n.jsx)(u.A, {
                    onSelectSku: b,
                    giftRecipient: i,
                    priceOptions: j,
                    onWishlistItemClick: t,
                }),
            }),
        ],
    });
}
function x(e) {
    let {
        giftRecipient: i,
        onClose: t,
        transitionState: s,
        analyticsLocations: l,
        analyticsLocation: r,
        analyticsObject: a,
        giftMessage: d,
    } = e;
    return (0, n.jsx)(o.PaymentContextProvider, {
        activeSubscription: null,
        stepConfigs: [],
        skuIDs: h.T7,
        isGift: !0,
        children: (0, n.jsx)(c.dX, {
            isGift: !0,
            giftRecipient: i,
            giftingOrigin: h.vQ.DM_CHANNEL,
            children: (0, n.jsx)(I, {
                giftRecipient: i,
                onClose: t,
                transitionState: s,
                analyticsLocations: l,
                analyticsLocation: r,
                analyticsObject: a,
                giftMessage: d,
            }),
        }),
    });
}
