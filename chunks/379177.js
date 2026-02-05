"use strict";
s.d(t, { eJ: () => l, rR: () => r });
let n = (0, s(945810).mj)({
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
    r = (e) => n.useConfig({ location: e }).enabled,
    l = (e) => n.useConfig({ location: e }).rentalDuration;
