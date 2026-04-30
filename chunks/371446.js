"use strict";
n.d(t, { m: () => s, Z: () => a });
var i = n(885973);
let r = (0, n(945810).mj)({
        kind: "user",
        name: "2025-01-virtual-currency-rollout",
        defaultConfig: { enabled: !1 },
        variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
    }),
    s = (e) => ((0, i.C)(e) ? { enabled: !1 } : { enabled: r.getConfig(e).enabled }),
    a = (e) => {
        let t = r.useConfig(e);
        return (0, i.C)(e) ? { enabled: !1 } : { enabled: t.enabled };
    };
