"use strict";
n.d(t, { H6: () => a, Jy: () => s, R8: () => r });
let i = (0, n(945810).mj)({
    name: "2026-04-kestrel",
    kind: "user",
    defaultConfig: { enabled: !1, threshold: 0 },
    variations: {
        0: { enabled: !1, threshold: 0 },
        1: { enabled: !0, threshold: 15 },
        2: { enabled: !0, threshold: 20 },
        3: { enabled: !0, threshold: 25 },
    },
});
function r(e) {
    let { location: t } = e;
    return i.getConfig({ location: t });
}
function s(e, t) {
    return e.enabled ? Math.max(1048576 * e.threshold, t) : t;
}
function a(e) {
    return e.enabled
        ? 15 === e.threshold
            ? "kestrel_a"
            : 20 === e.threshold
              ? "kestrel_b"
              : 25 === e.threshold
                ? "kestrel_c"
                : "unknown"
        : "control";
}
