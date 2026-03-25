"use strict";
n.d(t, { Hz: () => i });
let r = (0, n(945810).mj)({
    name: "2026-03-20-play-with-xbox-game-pass",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 0: { enabled: !1 }, 1: { enabled: !0 } },
});
function i(e) {
    let { enabled: t } = r.useConfig({ location: e });
    return t;
}
