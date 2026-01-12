n.d(t, {
    $C: () => o,
    IA: () => i,
});
var r = n(722733),
    i = (function (e) {
        return (e.PAYMENT_REVIEW = "control"), (e.PLAN_SELECTION = "plan_selection"), e;
    })({});
let a = (0, r.ZP)({
    name: "2026-01-marketing-banner-cta-action",
    kind: "user",
    defaultConfig: { treatment: "control" },
    variations: {
        0: { treatment: "control" },
        1: { treatment: "plan_selection" },
    },
});
function o(e) {
    return a.useConfig({ location: e });
}
