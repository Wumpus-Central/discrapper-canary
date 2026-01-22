n.d(t, {
    W: () => i,
});
let r = (0, n(250105).Ay)({
    kind: "user",
    name: "2025-08-negative-hardware-acceleration",
    defaultConfig: {
        forceEnableVideoHardwareAcceleration: !1,
        forceEnableAppHardwareAcceleration: !1,
    },
    variations: {
        1: {
            forceEnableVideoHardwareAcceleration: !0,
            forceEnableAppHardwareAcceleration: !1,
        },
        2: {
            forceEnableVideoHardwareAcceleration: !1,
            forceEnableAppHardwareAcceleration: !0,
        },
        3: {
            forceEnableVideoHardwareAcceleration: !0,
            forceEnableAppHardwareAcceleration: !0,
        },
    },
});

function i(e) {
    return r.getConfig({
        location: e,
    }).forceEnableAppHardwareAcceleration;
}
