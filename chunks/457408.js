"use strict";
n.d(t, { A: () => s });
let i = (0, n(240921).Ay)({
    kind: "user",
    name: "2026-05-age-restricted-application-commands",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var r = n(501592),
    a = n(587895);
function s(e) {
    if (!i.getConfig({ location: "isApplicationAgeRestricted" }).enabled) return !1;
    let t = a.A.getApplication(e);
    return (0, r.K)(t?.contentClassification);
}
