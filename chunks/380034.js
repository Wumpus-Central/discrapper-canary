let l = (0, n(945810).mj)({
        name: "2026-11-payment-element-accordion-layout",
        kind: "user",
        defaultConfig: { accordionLayout: !1, compactAppearance: !1 },
        variations: { 1: { accordionLayout: !0, compactAppearance: !0 } },
    }),
    i = { type: "accordion", defaultCollapsed: !1, visibleAccordionItemsCount: 0 },
    r = 588245 != n.j ? l : null;
n.d(
    t,
    {},
    {
        AK: i,
        Ay: r,
        EH: function () {
            let { accordionLayout: e, compactAppearance: t } = l.useConfig({ location: "add_payment_stripe_elements" });
            return { layout: e ? i : void 0, compact: t };
        },
    },
);
