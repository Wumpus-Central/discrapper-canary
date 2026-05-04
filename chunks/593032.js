"use strict";
n.d(t, { A: () => r });
let i = (0, n(945810).mj)({
    name: "2025-12-katsudon",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
function r(e) {
    let { location: t } = e,
        { enabled: n } = i.useConfig({ location: t });
    return n;
}
