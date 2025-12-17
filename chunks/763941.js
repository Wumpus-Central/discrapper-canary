n.d(t, {
    IT: () => a,
    Pc: () => l,
});
let r = (0, n(427164).le)({
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
    l = (e) => r.useConfig({ location: e }).enabled,
    a = (e) => r.useConfig({ location: e }).rentalDuration;
