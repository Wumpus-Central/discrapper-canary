n.d(t, { $: () => i });
let r = (0, n(722733).ZP)({
    kind: "user",
    name: "2025-10-fetch-promotions-endpoint",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
function i(e) {
    let { location: t } = e;
    return r.getConfig({ location: t }).enabled;
}
