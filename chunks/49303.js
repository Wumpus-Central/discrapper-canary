t.d(n, { PY: () => r, Rk: () => i, jb: () => o, q9: () => s });
var a = t(174459),
    l = t(652215);
let r = {
        ALL_SYSTEM_MESSAGES: "all_system_messages",
        LEADERBOARD_SYSTEM_MESSAGES: "leaderboard_system_messages",
        WHITEBOARD_SYSTEM_MESSAGES: "whiteboard_system_messages",
    },
    i = {
        WINNER_BADGE: "winner_badge",
        LEADER_BADGE: "leader_badge",
        LEADERBOARD_SYSTEM_MESSAGE: "leaderboard_system_message",
    };
function s(e, n, t) {
    a.default.track(l.HAw.SERVER_HUB_TOGGLE_SETTING, { guild_id: e, type: n, value: t });
}
function o(e, n) {
    a.default.track(l.HAw.SERVER_HUB_VISIT, { guild_id: e, source: n });
}
