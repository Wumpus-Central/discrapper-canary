let i = (0, n(945810).mj)({
    name: "2026-09-a11y-chassis-target-size",
    kind: "user",
    defaultConfig: { enabled: !1, rtcLargerTarget: !1 },
    variations: {
        0: { enabled: !1, rtcLargerTarget: !1 },
        1: { enabled: !0, rtcLargerTarget: !1 },
        2: { enabled: !0, rtcLargerTarget: !0 },
    },
});
n.d(
    t,
    {},
    {
        BX: function (e) {
            return i.useConfig({ location: e }).enabled;
        },
        KN: function (e) {
            return i.useConfig({ location: e }).rtcLargerTarget;
        },
    },
);
