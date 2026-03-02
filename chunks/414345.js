i.d(t, { g1: () => l });
let n = (0, i(250105).Ay)({
    kind: "user",
    name: "2026-02-premium-brand-refresh-2026",
    defaultConfig: { treatment: "CONTROL" },
    variations: { 0: { treatment: "CONTROL" }, 1: { treatment: "UPDATE_ALL" }, 2: { treatment: "EXCLUDE_TRY_IT_OUT" } },
});
function l(e) {
    let { location: t, onPremiumTryItOutProfile: i = !1 } = e,
        l = n.getConfig({ location: t }).treatment;
    return !0 === i ? "UPDATE_ALL" === l : "CONTROL" !== l;
}
