"use strict";
n.d(t, { A: () => i, R: () => a });
let r = (0, n(250105).Ay)({
    kind: "user",
    name: "2025-10-premium-brand-refresh-ga-backtest",
    defaultConfig: { enabled: !0 },
    variations: { 1: { enabled: !1 } },
});
function i(e) {
    let { location: t } = e;
    return r.useConfig({ location: t }).enabled;
}
function a(e) {
    let { location: t } = e;
    return r.getConfig({ location: t }).enabled;
}
