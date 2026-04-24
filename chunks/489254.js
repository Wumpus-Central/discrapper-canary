r.d(n, { n: () => _ });
let t = (0, r(250105).Ay)({
    name: "2026-04-boosting-pre-checkout-modal-refresh-v2",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
function _(e) {
    return t.useConfig({ location: e }).enabled;
}
