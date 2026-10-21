t.d(n, { Nv: () => d, PY: () => i, Rk: () => s, jb: () => u, q9: () => o });
var l = t(174459),
    a = t(855823),
    r = t(652215);
let i = {
        ALL_SYSTEM_MESSAGES: "all_system_messages",
        LEADERBOARD_SYSTEM_MESSAGES: "leaderboard_system_messages",
        WHITEBOARD_SYSTEM_MESSAGES: "whiteboard_system_messages",
        MUSIC_SYSTEM_MESSAGES: "music_system_messages",
    },
    s = {
        WINNER_BADGE: "winner_badge",
        LEADER_BADGE: "leader_badge",
        LEADERBOARD_SYSTEM_MESSAGE: "leaderboard_system_message",
        MUSIC_SYSTEM_MESSAGE: "music_system_message",
    };
function o(e, n, t) {
    l.default.track(r.HAw.SERVER_HUB_TOGGLE_SETTING, { guild_id: e, type: n, value: t });
}
function u(e, n) {
    l.default.track(r.HAw.SERVER_HUB_VISIT, { guild_id: e, source: n });
}
function d(e, n, t) {
    l.default.track(r.HAw.SERVER_HUB_WIDGET_EDIT_CLICKED, {
        guild_id: e,
        widget_type: n,
        ...((0, a.Ny)(t) ? {} : { widget_id: t }),
    });
}
