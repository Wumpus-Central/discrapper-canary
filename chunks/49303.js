var i = n(613412),
    r = n(139286),
    a = n(129230),
    l = n(855823),
    d = n(652215),
    s = n(412728);
let u = 221552 == n.j ? { USER: "user", PERMISSION_LOST: "permission_lost" } : null;
function o(e) {
    return (0, l.Ny)(e) ? { is_new_widget: !0 } : { is_new_widget: !1, widget_id: e };
}
function c(e) {
    let { guildId: t, widget: n, loadId: i, column: r, order: a } = e;
    return {
        guild_id: t,
        hub_load_id: i,
        widget_type: n.type,
        ...((0, l.Ny)(n.id) ? {} : { widget_id: n.id }),
        column_index: r,
        order_index: a,
    };
}
n.d(
    t,
    {},
    {
        $c: function (e) {
            a.default.track(d.HAw.SERVER_HUB_WIDGET_EMPTY_VIEWED, c(e));
        },
        Fh: function (e, t, n) {
            let { widgetCount: i, isNewHub: r } = n;
            a.default.track(d.HAw.SERVER_HUB_EDIT_STARTED, {
                guild_id: e,
                edit_session_id: t,
                widget_count: i,
                is_new_hub: r,
            });
        },
        Js: function (e, t, n) {
            let { widget: i, from: r, to: l } = n;
            a.default.track(d.HAw.SERVER_HUB_EDIT_WIDGET_MOVED, {
                guild_id: e,
                edit_session_id: t,
                widget_type: i.type,
                ...o(i.id),
                from_column_index: r.column,
                from_order_index: r.order,
                to_column_index: l.column,
                to_order_index: l.order,
            });
        },
        Nv: function (e, t, n) {
            a.default.track(d.HAw.SERVER_HUB_WIDGET_EDIT_CLICKED, {
                guild_id: e,
                widget_type: t,
                ...((0, l.Ny)(n) ? {} : { widget_id: n }),
            });
        },
        P7: function (e, t, n) {
            let { reason: i, hadChanges: r, widgetCount: l } = n;
            a.default.track(d.HAw.SERVER_HUB_EDIT_CANCELED, {
                guild_id: e,
                edit_session_id: t,
                reason: i,
                had_changes: r,
                widget_count: l,
            });
        },
        PY: {
            ALL_SYSTEM_MESSAGES: "all_system_messages",
            LEADERBOARD_SYSTEM_MESSAGES: "leaderboard_system_messages",
            WHITEBOARD_SYSTEM_MESSAGES: "whiteboard_system_messages",
            MUSIC_SYSTEM_MESSAGES: "music_system_messages",
        },
        Rk: {
            CHANNEL_LIST: "channel_list",
            COACHMARK: "coachmark",
            WINNER_BADGE: "winner_badge",
            LEADER_BADGE: "leader_badge",
            LEADERBOARD_SYSTEM_MESSAGE: "leaderboard_system_message",
            MUSIC_SYSTEM_MESSAGE: "music_system_message",
            WHITEBOARD_SYSTEM_MESSAGE: "whiteboard_system_message",
        },
        b_: function (e) {
            (0, r.x)({ type: s.z.VIEW, name: i.ImpressionNames.SERVER_HUB_WIDGET, properties: c(e) }, !1, !0);
        },
        jM: function (e, t, n) {
            let { widget: i, widgetCount: r } = n;
            a.default.track(d.HAw.SERVER_HUB_EDIT_WIDGET_DELETED, {
                guild_id: e,
                edit_session_id: t,
                widget_type: i.type,
                ...o(i.id),
                column_index: i.position.column,
                order_index: i.position.order,
                widget_count: r,
            });
        },
        jb: function (e, t) {
            a.default.track(d.HAw.SERVER_HUB_VISIT, { guild_id: e, source: t });
        },
        nn: function (e, t, n) {
            let { widgetCount: i, addedWidgetCount: r, deletedWidgetCount: l, bannerChanged: s } = n;
            a.default.track(d.HAw.SERVER_HUB_EDIT_SAVED, {
                guild_id: e,
                edit_session_id: t,
                widget_count: i,
                added_widget_count: r,
                deleted_widget_count: l,
                banner_changed: s,
            });
        },
        pb: u,
        q9: function (e, t, n) {
            a.default.track(d.HAw.SERVER_HUB_TOGGLE_SETTING, { guild_id: e, type: t, value: n });
        },
        qg: function (e, t, n) {
            let { widget: i, widgetCount: r } = n;
            a.default.track(d.HAw.SERVER_HUB_EDIT_WIDGET_ADDED, {
                guild_id: e,
                edit_session_id: t,
                widget_type: i.type,
                column_index: i.position.column,
                order_index: i.position.order,
                widget_count: r,
            });
        },
    },
);
