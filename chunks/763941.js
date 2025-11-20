n.d(t, {
    IT: () => i,
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
                rentalDuration: 1,
            },
            3: {
                enabled: !0,
                rentalDuration: -1,
            },
        },
    }),
    l = (e) => r.useConfig({ location: e }).enabled,
    i = (e) => r.useConfig({ location: e }).rentalDuration;
