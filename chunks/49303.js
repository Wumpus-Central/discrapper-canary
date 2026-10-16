n.d(t, { Nv: () => d, PY: () => i, Rk: () => s, jb: () => u, q9: () => o });
var l = n(174459),
    a = n(855823),
    r = n(652215);
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
    };
function o(e, t, n) {
    l.default.track(r.HAw.SERVER_HUB_TOGGLE_SETTING, { guild_id: e, type: t, value: n });
}
function u(e, t) {
    l.default.track(r.HAw.SERVER_HUB_VISIT, { guild_id: e, source: t });
}
function d(e, t, n) {
    l.default.track(r.HAw.SERVER_HUB_WIDGET_EDIT_CLICKED, {
        guild_id: e,
        widget_type: t,
        ...((0, a.Ny)(n) ? {} : { widget_id: n }),
    });
}
