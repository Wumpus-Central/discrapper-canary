n.d(t, { G: () => g, H: () => A });
var i = n(477900),
    l = n(582128),
    s = n(866665),
    a = n(408278),
    r = n(427209),
    o = n(174459),
    c = n(192308),
    d = n(294454),
    u = n(758836),
    m = n(652215),
    h = n(375708);
function g(e) {
    let { skuId: t, product: s, productName: a, tab: r, source: h = "collectibles-shop-pdp", onTrackClick: g } = e;
    return l.useCallback(() => {
        o.default.track(m.HAw.COLLECTIBLES_SHARE_LINK_BUTTON_CLICKED, { sku_id: t }),
            g?.(u.sH.SHARE_LINK),
            ((e) => {
                let { skuId: t, product: l, productName: s, tab: a, source: r } = e;
                (0, c.openModalLazy)(
                    async () => {
                        let { default: e } = await Promise.all([
                            n.e("267732"),
                            n.e("533158"),
                            n.e("721642"),
                            n.e("130891"),
                            n.e("241697"),
                            n.e("844780"),
                            n.e("236946"),
                            n.e("692639"),
                            n.e("565617"),
                            n.e("890480"),
                            n.e("440963"),
                            n.e("766031"),
                            n.e("394317"),
                            n.e("744385"),
                            n.e("523601"),
                            n.e("2617"),
                        ]).then(n.bind(n, 32672));
                        return (n) => (0, i.jsx)(e, { ...n, skuId: t, product: l, productName: s, tab: a, source: r });
                    },
                    { stackingBehavior: "stack", modalKey: d.aU },
                );
            })({ skuId: t, product: s, productName: a, tab: r, source: h });
    }, [t, s, a, r, h, g]);
}
function A(e) {
    let t = g(e);
    return (0, i.jsx)(s.m, {
        text: h.intl.string(h.t.RDE0Sc),
        ariaHidden: !0,
        children: (0, i.jsx)(a.K, {
            "aria-label": h.intl.string(h.t.Ej3B3Y),
            onClick: t,
            icon: r.A,
            variant: "overlay-secondary",
            size: "sm",
        }),
    });
}
