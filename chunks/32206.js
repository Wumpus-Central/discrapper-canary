"use strict";
n.d(t, { A: () => s, c: () => r });
let i = (0, n(945810).mj)({
    name: "2026-03-collectibles-profile-frames",
    kind: "user",
    defaultConfig: { enableProfileFrames: !1 },
    variations: { 0: { enableProfileFrames: !1 }, 1: { enableProfileFrames: !0 } },
});
function r(e) {
    return i.useConfig({ location: e }).enableProfileFrames;
}
let s = i;
