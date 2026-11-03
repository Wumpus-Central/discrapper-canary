n.d(t, { Nv: () => c, PY: () => i, Rk: () => s, jb: () => o, q9: () => u });
var l = n(174459),
    r = n(855823),
    a = n(652215);
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
function u(e, t, n) {
    l.default.track(a.HAw.SERVER_HUB_TOGGLE_SETTING, { guild_id: e, type: t, value: n });
}
function o(e, t) {
    l.default.track(a.HAw.SERVER_HUB_VISIT, { guild_id: e, source: t });
}
function c(e, t, n) {
    l.default.track(a.HAw.SERVER_HUB_WIDGET_EDIT_CLICKED, {
        guild_id: e,
        widget_type: t,
        ...((0, r.Ny)(n) ? {} : { widget_id: n }),
    });
}
