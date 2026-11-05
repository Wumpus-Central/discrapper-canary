var i = n(582128),
    r = n(855986),
    a = n(945810),
    s = n(46653);
let l = (0, a.mj)({
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
function o(e) {
    l.getConfig({ location: e });
}
n.d(
    t,
    {},
    {
        N: function (e) {
            let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
                n = (0, r.bG)([s.default], () => s.default.getId()),
                [d, c] = (0, r.yK)([a.Bt], () => a.Bt.getEvaluationAndAssignment("user", n, l.definition.name), [n]),
                u = l.getConfig({ location: e }, { autoTrackExposure: !1 });
            i.useEffect(() => {
                t && o(e);
            }, [e, t, d, c, n]);
            let { discountPercent: _, offerSkuId: E } = u;
            return null == _ || null == E ? null : { discountPercent: _, offerSkuId: E };
        },
        s: o,
    },
);
