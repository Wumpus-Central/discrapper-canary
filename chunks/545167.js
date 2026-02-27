"use strict";
n.d(t, { v: () => a });
var r = n(945810),
    i = n(723702);
let s = (0, r.mj)({
    name: "2026-02-bf-browser",
    kind: "user",
    defaultConfig: { allowEnhancedNav: !0 },
    variations: { 1: { allowEnhancedNav: !1 } },
});
function a(e) {
    if (!(0, i.isDesktop)()) return !1;
    let { allowEnhancedNav: t } = s.getConfig(e);
    return t;
}
