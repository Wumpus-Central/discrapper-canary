"use strict";
n.d(t, { T0: () => i });
let r = (0, n(945810).mj)({
        name: "2026-01-unified-checkout-ui",
        kind: "user",
        defaultConfig: { enabled: !1, variation: 0 },
        variations: { 1: { enabled: !0, variation: 1 } },
    }),
    i = (e) => {
        let { location: t } = e,
            n = r.useConfig({ location: t });
        return { ...n, isTreatment: 1 === n.variation };
    };
