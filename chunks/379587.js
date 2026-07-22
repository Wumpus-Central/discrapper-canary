"use strict";
n.d(t, { BM: () => a, mN: () => r, oS: () => i });
let i = (0, n(945810).mj)({
    name: "2026-01-favorites-server",
    kind: "user",
    defaultConfig: { enabled: !1, hasHigherPrivileges: !1 },
    variations: {
        1: { enabled: !0, hasHigherPrivileges: !0 },
        2: { enabled: !0, hasHigherPrivileges: !1 },
        3: { enabled: !0, hasHigherPrivileges: !0, isFreemium: !0 },
    },
});
function r(e) {
    let { location: t } = e;
    return i.useConfig({ location: t });
}
function a(e) {
    let { location: t } = e;
    return i.getConfig({ location: t });
}
