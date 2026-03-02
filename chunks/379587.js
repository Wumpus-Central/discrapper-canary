"use strict";
n.d(t, { m: () => i, o: () => r });
let r = (0, n(945810).mj)({
    name: "2026-01-favorites-server",
    kind: "user",
    defaultConfig: { enabled: !1, hasHigherPrivileges: !1 },
    variations: { 1: { enabled: !0, hasHigherPrivileges: !0 }, 2: { enabled: !0, hasHigherPrivileges: !1 } },
});
function i(e) {
    let { location: t } = e;
    return r.useConfig({ location: t });
}
