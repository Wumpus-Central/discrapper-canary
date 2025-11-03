n.d(t, {
    B: () => f,
    J: () => p,
});
var r = n(951288),
    i = n(481060),
    l = n(728345),
    a = n(766717),
    s = n(594914),
    o = n(848118),
    c = n(388032),
    d = n(758650),
    u = n(976218);
function p(e, t) {
    let { moreCount: n, onViewWishlist: i, isSingleCard: l = !1 } = t,
        u = null != n && n > 0,
        p = u ? c.intl.string(c.t.TxBQzD) : c.intl.string(c.t.ilhtIa);
    return (0, r.jsx)(
        a.Z,
        {
            onCardClick: () => {
                if (u) return void i();
                (0, s.P)(e.sku, { isGift: !0 });
            },
            tooltipText: p,
            shouldScalePreview: !1,
            renderPreview: () =>
                (0, r.jsx)(o.A, {
                    containerClassName: d.card,
                    backgroundImageClassName: d.cardBackgroundImage,
                    foregroundImageClassName: d.cardImage,
                    sku: e.sku,
                    shape: "custom",
                }),
            moreCount: n,
            isSingleCard: l,
        },
        e.skuId,
    );
}
function h(e) {
    let { item: t, card: n } = e,
        { data: a } = (0, l.IX)(t.sku.applicationId);
    return (0, r.jsxs)("div", {
        className: u.singleItemContainer,
        children: [
            n,
            (0, r.jsx)("div", {
                className: u.singleItemInfo,
                children: (0, r.jsxs)(i.P3F, {
                    onClick: () => {
                        (0, s.P)(t.sku, { isGift: !0 });
                    },
                    className: u.singleItemName,
                    "aria-label": c.intl.string(c.t.ilhtIa),
                    children: [
                        (0, r.jsx)(i.Text, {
                            variant: "text-sm/semibold",
                            color: "text-default",
                            lineClamp: 2,
                            children: t.skuName,
                        }),
                        (0, r.jsx)(i.Text, {
                            variant: "text-xs/medium",
                            color: "text-default",
                            children: c.intl.format(c.t["CqpEC+"], { applicationName: null == a ? void 0 : a.name }),
                        }),
                    ],
                }),
            }),
        ],
    });
}
function f(e, t) {
    let { profileOwner: n, analyticsLocations: i } = t,
        l = p(e, {
            profileOwner: n,
            analyticsLocations: i,
            onViewWishlist: () => {},
            isSingleCard: !0,
        });
    return (0, r.jsx)(h, {
        item: e,
        card: l,
    });
}
