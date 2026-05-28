"use strict";
n.d(t, { E: () => s, X: () => r });
let i = (0, n(945810).mj)({
    name: "2026-03-wysiwyg-user-profile-editing",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
function r(e) {
    let { enabled: t } = i.useConfig({ location: e });
    return t;
}
function s(e) {
    return i.getConfig({ location: e }).enabled;
}
