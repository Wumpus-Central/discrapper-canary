n.d(t, { PY: () => s, Rk: () => a, jb: () => o, q9: () => r });
var l = n(174459),
    i = n(652215);
let s = {
        ALL_SYSTEM_MESSAGES: "all_system_messages",
        LEADERBOARD_SYSTEM_MESSAGES: "leaderboard_system_messages",
        WHITEBOARD_SYSTEM_MESSAGES: "whiteboard_system_messages",
    },
    a = { WINNER_BADGE: "winner_badge", LEADERBOARD_SYSTEM_MESSAGE: "leaderboard_system_message" };
function r(e, t, n) {
    l.default.track(i.HAw.SERVER_HUB_TOGGLE_SETTING, { guild_id: e, type: t, value: n });
}
function o(e, t) {
    l.default.track(i.HAw.SERVER_HUB_VISIT, { guild_id: e, source: t });
}
