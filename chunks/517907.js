t.d(n, { A: () => r });
var a = t(64700),
    i = t(17928),
    o = t(832163);
let d = (0, t(945810).mj)({
    name: "2026-04-slayer-storefront-orbs",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 }, 2: { enabled: !0 }, 3: { enabled: !0 } },
});
function r(e) {
    let { location: n, applicationId: t } = e,
        r = (function (e) {
            let { location: n } = e;
            return d.useConfig({ location: n }).enabled;
        })({ location: n }),
        l = (0, i.bG)([o.A], () => (null != t ? o.A.getConfigForApplicationId(t) : void 0)),
        s = a.useMemo(() => Date.now() < (l?.promotionEndDatetime?.getTime() ?? 0), [l]);
    return r && l?.allowOrbsSpending && s;
}
