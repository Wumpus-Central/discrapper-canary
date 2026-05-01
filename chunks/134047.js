"use strict";
n.d(t, { M: () => i, T: () => r });
let i = (0, n(240921).Ay)({
    kind: "user",
    name: "2025-11-auto-open-tiv",
    defaultConfig: { collectAnalytics: !1, autoOpenTIV: !1, autoNavigateChannel: !1 },
    variations: {
        0: { collectAnalytics: !0, autoOpenTIV: !1, autoNavigateChannel: !1 },
        1: { collectAnalytics: !0, autoOpenTIV: !0, autoNavigateChannel: !1 },
        2: { collectAnalytics: !0, autoOpenTIV: !0, autoNavigateChannel: !0 },
        3: { collectAnalytics: !0, autoOpenTIV: !1, autoNavigateChannel: !0 },
    },
});
function r(e) {
    let { channel: t, location: n } = e,
        { autoOpenTIV: r } = i.useConfig({ location: n });
    return null != t && !!t.isGuildVocal() && r;
}
