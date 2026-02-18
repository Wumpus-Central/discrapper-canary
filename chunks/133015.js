i.d(t, { n: () => s });
let n = (0, i(945810).mj)({
    name: "2025-01-slayer-storefront-orbs-reward",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 }, 2: { enabled: !0 } },
});
function s(e) {
    let { location: t } = e;
    return n.useConfig({ location: t }).enabled;
}
