n.d(t, { G: () => g, H: () => p });
var i = n(477900),
    l = n(582128),
    s = n(866665),
    r = n(408278),
    a = n(427209),
    o = n(174459),
    d = n(192308),
    c = n(294454),
    u = n(758836),
    m = n(652215),
    h = n(375708);
function g(e) {
    let { skuId: t, product: s, productName: r, tab: a, source: h = "collectibles-shop-pdp", onTrackClick: g } = e;
    return l.useCallback(() => {
        (o.default.track(m.HAw.COLLECTIBLES_SHARE_LINK_BUTTON_CLICKED, { sku_id: t }),
            g?.(u.sH.SHARE_LINK),
            ((e) => {
                let { skuId: t, product: l, productName: s, tab: r, source: a } = e;
                (0, d.openModalLazy)(
                    async () => {
                        let { default: e } = await Promise.all([
                            n.e("385663"),
                            n.e("90343"),
                            n.e("866475"),
                            n.e("241697"),
                            n.e("844780"),
                            n.e("236946"),
                            n.e("692639"),
                            n.e("890480"),
                            n.e("440963"),
                            n.e("565617"),
                            n.e("766031"),
                            n.e("394317"),
                            n.e("744385"),
                            n.e("304329"),
                            n.e("84755"),
                            n.e("2617"),
                        ]).then(n.bind(n, 32672));
                        return (n) => (0, i.jsx)(e, { ...n, skuId: t, product: l, productName: s, tab: r, source: a });
                    },
                    { stackingBehavior: "stack", modalKey: c.aU },
                );
            })({ skuId: t, product: s, productName: r, tab: a, source: h }));
    }, [t, s, r, a, h, g]);
}
function p(e) {
    let t = g(e);
    return (0, i.jsx)(s.m, {
        text: h.intl.string(h.t.RDE0Sc),
        ariaHidden: !0,
        children: (0, i.jsx)(r.K, {
            "aria-label": h.intl.string(h.t.Ej3B3Y),
            onClick: t,
            icon: a.A,
            variant: "overlay-secondary",
            size: "sm",
        }),
    });
}
