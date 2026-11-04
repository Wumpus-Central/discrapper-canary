var i = n(945810);
let r = (0, i.mj)({
        name: "2026-03-overlay-default-keybind",
        kind: "user",
        defaultConfig: { keybindOverride: void 0 },
        variations: {
            1: { keybindOverride: "ctrl+tab" },
            2: { keybindOverride: "alt+x" },
            3: { keybindOverride: "ctrl+l" },
        },
    }),
    a = (0, i.mj)({
        name: "2025-11-overlay-chat",
        kind: "user",
        defaultConfig: { hasChat: !1, hasFriendList: !1, showNowPlayingForDifferentGames: !1 },
        variations: {
            1: { hasChat: !0, hasFriendList: !1, showNowPlayingForDifferentGames: !1 },
            2: { hasChat: !0, hasFriendList: !0, showNowPlayingForDifferentGames: !1 },
            3: { hasChat: !0, hasFriendList: !0, showNowPlayingForDifferentGames: !0 },
        },
    });
function s(e) {
    return a.getConfig({ location: e });
}
let l = (0, i.mj)({
    name: "2026-04-overlay-streamer-mode",
    kind: "user",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
function o(e) {
    return l.getConfig({ location: e });
}
let d = (0, i.mj)({
    name: "2026-10-overlay-native-window-rendering",
    kind: "user",
    defaultConfig: { enabled: !1, enableNVOverlay: !1 },
    variations: { 1: { enabled: !0, enableNVOverlay: !1 }, 2: { enabled: !0, enableNVOverlay: !0 } },
});
n.d(
    t,
    {},
    {
        E: function () {
            (s("OVERLAY_INITIALIZED"), o("OVERLAY_INITIALIZED"));
        },
        M8: function (e) {
            return a.useConfig({ location: e });
        },
        Mn: function (e) {
            return l.useConfig({ location: e }).enabled;
        },
        NI: s,
        Wu: function (e) {
            return d.getConfig({ location: e });
        },
        sq: function (e) {
            return r.getConfig({ location: e });
        },
        zQ: o,
    },
);
