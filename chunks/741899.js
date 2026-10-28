l.d(e, { N: () => a });
var n = l(582128),
    r = l(17928),
    u = l(945810),
    o = l(280450);
let i = (0, u.mj)({
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
function a(t) {
    let e = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        l = (0, r.bG)([o.default], () => o.default.getId()),
        [a, c] = (0, r.yK)([u.Bt], () => u.Bt.getEvaluationAndAssignment("user", l, i.definition.name), [l]),
        f = i.getConfig({ location: t }, { autoTrackExposure: !1 });
    n.useEffect(() => {
        e && i.getConfig({ location: t });
    }, [t, e, a, c, l]);
    let { discountPercent: d, offerSkuId: s } = f;
    return null == d || null == s ? null : { discountPercent: d, offerSkuId: s };
}
