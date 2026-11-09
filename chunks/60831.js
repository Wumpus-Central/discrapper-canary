n.d(t, { H: () => p, G: () => g });
var i = n(477900),
    l = n(582128),
    s = n(866665),
    r = n(408278),
    a = n(427209),
    o = n(129230),
    d = n(192308),
    c = n(294454),
    u = n(758836),
    m = n(652215),
    h = n(792996);
function g(e) {
    let { skuId: t, product: s, productName: r, tab: a, source: h = "collectibles-shop-pdp", onTrackClick: g } = e;
    return l.useCallback(() => {
        (o.default.track(m.HAw.COLLECTIBLES_SHARE_LINK_BUTTON_CLICKED, { sku_id: t }),
            g?.(u.sH.SHARE_LINK),
            ((e) => {
                let { skuId: t, product: l, productName: s, tab: r, source: a } = e;
                (0, d.mM)(
                    async () => {
                        let { default: e } = await Promise.all([
                            n.e(949117),
                            n.e(921611),
                            n.e(933947),
                            n.e(866475),
                            n.e(241697),
                            n.e(844780),
                            n.e(236946),
                            n.e(692639),
                            n.e(890480),
                            n.e(440963),
                            n.e(766031),
                            n.e(394317),
                            n.e(304329),
                            n.e(12762),
                            n.e(312478),
                        ]).then(n.bind(n, 760429));
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
