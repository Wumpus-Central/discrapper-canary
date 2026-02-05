"use strict";
n.d(t, { V: () => s });
var r = n(945810),
    i = n(128319);
let a = (0, r.mj)({
    name: "2025-11-async-clips-source-deinit",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
function s(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        { isInHoldout: n } = i.p.getCurrentConfig({ location: e }, { autoTrackExposure: t });
    return n ? { enabled: !1 } : a.getConfig({ location: e });
}
