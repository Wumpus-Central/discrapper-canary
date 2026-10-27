l.d(e, { P: () => b, j: () => m });
var n = l(17928),
    r = l(587895),
    u = l(288106),
    o = l(69236),
    i = l(582128),
    a = l(945810),
    c = l(280450);
let f = (0, a.mj)({
    name: "2026-10-sfp-bloons-orb-split-tender",
    kind: "user",
    defaultConfig: { discountPercent: null, offerSkuId: null },
    variations: {
        0: { discountPercent: null, offerSkuId: null },
        1: { discountPercent: 10, offerSkuId: "1560340689907089505" },
        2: { discountPercent: 15, offerSkuId: "1560711732412940429" },
        3: { discountPercent: 20, offerSkuId: "1560711810007699506" },
    },
});
function d(t) {
    let e = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        l = (0, n.bG)([c.default], () => c.default.getId()),
        [r, u] = (0, n.yK)([a.Bt], () => a.Bt.getEvaluationAndAssignment("user", l, f.definition.name), [l]),
        o = f.getConfig({ location: t }, { autoTrackExposure: !1 });
    i.useEffect(() => {
        e && f.getConfig({ location: t });
    }, [t, e, r, u, l]);
    let { discountPercent: d, offerSkuId: s } = o;
    return null == d || null == s ? null : { discountPercent: d, offerSkuId: s };
}
var s = l(188275),
    p = l(206285),
    S = l(105292);
function g(t, e) {
    switch (e) {
        case "storefront.headerText":
            return t.storefront?.headerText ?? null;
        case "pdp.label":
            return t.pdp?.label ?? null;
        case "pdp.tooltip":
            return t.pdp?.tooltip ?? null;
        case "checkout.label":
            return t.checkout?.label ?? null;
        case "checkout.tooltip":
            return t.checkout?.tooltip ?? null;
        case "vcStream.tooltip":
            return t.vcStream?.tooltip ?? null;
    }
}
function b(t, e) {
    d(`slayer_storefront_${e}`, t === s.S3);
}
function m(t, e) {
    let l = d("slayer_storefront_promotion_text", !1),
        i = (0, o.W8)(),
        a = (0, n.bG)([r.A], () => r.A.getApplication(s.S3)?.name);
    if (null == t) return null;
    if ("1560319795629527231" !== t.id || null == l) return g(t, e);
    let { discountPercent: c } = l,
        f = t.rewardStatus === u.GM.EARNED;
    switch (e) {
        case "storefront.headerText":
            return S.intl.formatToPlainString(f ? p.default.siNyGT : p.default.vyOvli, { discountPercent: c });
        case "pdp.label": {
            let t = p.default.dWuM4X;
            return (
                f ? (t = p.default.EpCeMs) : i && (t = p.default["1HXutk"]),
                S.intl.formatToPlainString(t, { discountPercent: c })
            );
        }
        case "pdp.tooltip":
            if (!f && i) return S.intl.string(p.default.jNgHOu);
            return S.intl.formatToPlainString(f ? p.default["KcU3c+"] : p.default.Pld6Sd, { discountPercent: c });
        case "checkout.label":
            return S.intl.formatToPlainString(p.default.EpCeMs, { discountPercent: c });
        case "checkout.tooltip":
            return S.intl.formatToPlainString(p.default["KcU3c+"], { discountPercent: c });
        case "vcStream.tooltip":
            if (null == a) return g(t, e);
            return S.intl.formatToPlainString(p.default.uBLTPw, { discountPercent: c, applicationName: a });
    }
}
