"use strict";
i.d(t, { n: () => n });
let r = (0, i(250105).Ay)({
    name: "2026-04-boosting-pre-checkout-modal-refresh-v2",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
function n(e) {
    return r.useConfig({ location: e }).enabled;
}
