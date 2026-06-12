"use strict";
n.d(t, { Y1: () => r });
let i = (0, n(945810).mj)({
    kind: "user",
    name: "2025-08-voice-user-affinity",
    defaultConfig: { enabled: !1 },
    variations: {
        0: { enabled: !1, sortType: void 0 },
        1: { enabled: !0, sortType: "vc_probability" },
        2: { enabled: !0, sortType: "communication_probability" },
    },
});
function r(e) {
    return i.getConfig({ location: e }).sortType;
}
