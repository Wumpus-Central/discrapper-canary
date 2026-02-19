"use strict";
n.d(t, { Ao: () => s });
let i = (0, n(945810).mj)({
    name: "2025-11-guild-powerups-mobile",
    kind: "user",
    defaultConfig: { enabled: !1, notificationsEnabled: !1 },
    variations: { 1: { enabled: !0, notificationsEnabled: !1 }, 2: { enabled: !0, notificationsEnabled: !0 } },
});
function s(e) {
    return i.useConfig({ location: e }).enabled;
}
