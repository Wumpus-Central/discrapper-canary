l.d(n, { PY: () => r, Rk: () => i, jb: () => s, q9: () => o });
var t = l(174459),
    a = l(652215);
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
function o(e, n, l) {
    t.default.track(a.HAw.SERVER_HUB_TOGGLE_SETTING, { guild_id: e, type: n, value: l });
}
function s(e, n) {
    t.default.track(a.HAw.SERVER_HUB_VISIT, { guild_id: e, source: n });
}
