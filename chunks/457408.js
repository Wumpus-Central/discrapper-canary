"use strict";
n.d(t, { A: () => o });
var i = n(853811),
    r = n(381438);
let s = (0, n(240921).Ay)({
    kind: "user",
    name: "2026-05-age-restricted-application-commands",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var a = n(587895);
function o(e) {
    if (!s.getConfig({ location: "isApplicationAgeRestricted" }).enabled) return !1;
    let t = a.A.getApplication(e);
    return (
        t?.contentClassification != null &&
        (0, i.U1)({ type: i.fS.MINIMAL, data: t.contentClassification }) === r.Y.ADULT
    );
}
