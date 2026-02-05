"use strict";
n.d(t, { ik: () => i });
let r = (0, n(945810).mj)({
        name: "2025-12-unified-checkout",
        kind: "user",
        defaultConfig: { enabled: !1, variation: 0 },
        variations: { 1: { enabled: !0, variation: 1 } },
    }),
    i = (e) => {
        let { location: t } = e,
            n = r.getConfig({ location: t });
        return { ...n, isNoopTreatment: 1 === n.variation };
    };
