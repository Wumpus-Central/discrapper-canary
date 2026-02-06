s.d(t, { eJ: () => a, rR: () => l });
let r = (0, s(945810).mj)({
        name: "2025-10-orb-rental",
        kind: "user",
        defaultConfig: { enabled: !1, rentalDuration: void 0 },
        variations: {
            0: { enabled: !1, rentalDuration: void 0 },
            1: { enabled: !0, rentalDuration: 3 },
            2: { enabled: !0, rentalDuration: 7 },
            3: { enabled: !0, rentalDuration: -1 },
        },
    }),
    l = (e) => r.useConfig({ location: e }).enabled,
    a = (e) => r.useConfig({ location: e }).rentalDuration;
