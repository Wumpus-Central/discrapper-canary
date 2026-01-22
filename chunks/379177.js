l.d(t, {
    eJ: () => s,
    rR: () => r,
});
let n = (0, l(945810).mj)({
        name: "2025-10-orb-rental",
        kind: "user",
        defaultConfig: {
            enabled: !1,
            rentalDuration: void 0,
        },
        variations: {
            0: {
                enabled: !1,
                rentalDuration: void 0,
            },
            1: {
                enabled: !0,
                rentalDuration: 3,
            },
            2: {
                enabled: !0,
                rentalDuration: 7,
            },
            3: {
                enabled: !0,
                rentalDuration: -1,
            },
        },
    }),
    r = (e) => n.useConfig({ location: e }).enabled,
    s = (e) => n.useConfig({ location: e }).rentalDuration;
