"use strict";
n.d(t, { E: () => u, M8: () => l, NI: () => o, sq: () => s });
var r = n(945810);
let i = (0, r.mj)({
    name: "2026-03-overlay-default-keybind",
    kind: "user",
    defaultConfig: { keybindOverride: void 0 },
    variations: {
        1: { keybindOverride: "ctrl+tab" },
        2: { keybindOverride: "alt+x" },
        3: { keybindOverride: "ctrl+l" },
    },
});
function s(e) {
    return i.getConfig({ location: e });
}
let a = (0, r.mj)({
    name: "2025-11-overlay-chat",
    kind: "user",
    defaultConfig: { hasChat: !1, hasFriendList: !1, showNowPlayingForDifferentGames: !1 },
    variations: {
        1: { hasChat: !0, hasFriendList: !1, showNowPlayingForDifferentGames: !1 },
        2: { hasChat: !0, hasFriendList: !0, showNowPlayingForDifferentGames: !1 },
        3: { hasChat: !0, hasFriendList: !0, showNowPlayingForDifferentGames: !0 },
    },
});
function o(e) {
    return a.getConfig({ location: e });
}
function l(e) {
    return a.useConfig({ location: e });
}
function u() {
    o("OVERLAY_INITIALIZED");
}
