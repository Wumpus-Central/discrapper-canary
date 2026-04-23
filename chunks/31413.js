"use strict";
n.d(t, { G: () => i });
let r = (0, n(945810).mj)({
    name: "2026-02-premium-offer-reminder-xp",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
function i(e) {
    let { location: t } = e;
    return r.getConfig({ location: t }).enabled;
}
