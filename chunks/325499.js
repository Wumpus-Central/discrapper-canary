"use strict";
n.d(t, { b: () => r, i: () => a });
let i = (0, n(945810).mj)({
    name: "2026-03-croissant",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
function r(e) {
    let { enabled: t } = i.useConfig({ location: e });
    return t;
}
function a(e) {
    let { enabled: t } = i.getConfig({ location: e });
    return t;
}
