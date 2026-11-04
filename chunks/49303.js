n.d(t, {
    Fh: () => _,
    Js: () => g,
    Nv: () => f,
    P7: () => p,
    PY: () => a,
    Rk: () => s,
    jM: () => m,
    jb: () => c,
    nn: () => A,
    pb: () => o,
    q9: () => d,
    qg: () => E,
});
var l = n(174459),
    r = n(855823),
    i = n(652215);
let a = {
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
    },
    o = 221552 == n.j ? { USER: "user", PERMISSION_LOST: "permission_lost" } : null;
function u(e) {
    return (0, r.Ny)(e) ? { is_new_widget: !0 } : { is_new_widget: !1, widget_id: e };
}
function d(e, t, n) {
    l.default.track(i.HAw.SERVER_HUB_TOGGLE_SETTING, { guild_id: e, type: t, value: n });
}
function c(e, t) {
    l.default.track(i.HAw.SERVER_HUB_VISIT, { guild_id: e, source: t });
}
function f(e, t, n) {
    l.default.track(i.HAw.SERVER_HUB_WIDGET_EDIT_CLICKED, {
        guild_id: e,
        widget_type: t,
        ...((0, r.Ny)(n) ? {} : { widget_id: n }),
    });
}
function _(e, t, n) {
    let { widgetCount: r, isNewHub: a } = n;
    l.default.track(i.HAw.SERVER_HUB_EDIT_STARTED, { guild_id: e, edit_session_id: t, widget_count: r, is_new_hub: a });
}
function E(e, t, n) {
    let { widget: r, widgetCount: a } = n;
    l.default.track(i.HAw.SERVER_HUB_EDIT_WIDGET_ADDED, {
        guild_id: e,
        edit_session_id: t,
        widget_type: r.type,
        column_index: r.position.column,
        order_index: r.position.order,
        widget_count: a,
    });
}
function g(e, t, n) {
    let { widget: r, from: a, to: s } = n;
    l.default.track(i.HAw.SERVER_HUB_EDIT_WIDGET_MOVED, {
        guild_id: e,
        edit_session_id: t,
        widget_type: r.type,
        ...u(r.id),
        from_column_index: a.column,
        from_order_index: a.order,
        to_column_index: s.column,
        to_order_index: s.order,
    });
}
function m(e, t, n) {
    let { widget: r, widgetCount: a } = n;
    l.default.track(i.HAw.SERVER_HUB_EDIT_WIDGET_DELETED, {
        guild_id: e,
        edit_session_id: t,
        widget_type: r.type,
        ...u(r.id),
        column_index: r.position.column,
        order_index: r.position.order,
        widget_count: a,
    });
}
function A(e, t, n) {
    let { widgetCount: r, addedWidgetCount: a, deletedWidgetCount: s, bannerChanged: o } = n;
    l.default.track(i.HAw.SERVER_HUB_EDIT_SAVED, {
        guild_id: e,
        edit_session_id: t,
        widget_count: r,
        added_widget_count: a,
        deleted_widget_count: s,
        banner_changed: o,
    });
}
function p(e, t, n) {
    let { reason: r, hadChanges: a, widgetCount: s } = n;
    l.default.track(i.HAw.SERVER_HUB_EDIT_CANCELED, {
        guild_id: e,
        edit_session_id: t,
        reason: r,
        had_changes: a,
        widget_count: s,
    });
}
