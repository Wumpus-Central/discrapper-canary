var l = n(613412),
    i = n(139286),
    r = n(129230),
    a = n(855823),
    s = n(652215),
    o = n(412728);
let u = 221552 == n.j ? { USER: "user", PERMISSION_LOST: "permission_lost" } : null;
function d(e) {
    return (0, a.Ny)(e) ? { is_new_widget: !0 } : { is_new_widget: !1, widget_id: e };
}
function c(e) {
    let { guildId: t, widget: n, loadId: l, column: i, order: r } = e;
    return {
        guild_id: t,
        hub_load_id: l,
        widget_type: n.type,
        ...((0, a.Ny)(n.id) ? {} : { widget_id: n.id }),
        column_index: i,
        order_index: r,
    };
}
n.d(
    t,
    {},
    {
        $c: function (e) {
            r.default.track(s.HAw.SERVER_HUB_WIDGET_EMPTY_VIEWED, c(e));
        },
        Fh: function (e, t, n) {
            let { widgetCount: l, isNewHub: i } = n;
            r.default.track(s.HAw.SERVER_HUB_EDIT_STARTED, {
                guild_id: e,
                edit_session_id: t,
                widget_count: l,
                is_new_hub: i,
            });
        },
        Js: function (e, t, n) {
            let { widget: l, from: i, to: a } = n;
            r.default.track(s.HAw.SERVER_HUB_EDIT_WIDGET_MOVED, {
                guild_id: e,
                edit_session_id: t,
                widget_type: l.type,
                ...d(l.id),
                from_column_index: i.column,
                from_order_index: i.order,
                to_column_index: a.column,
                to_order_index: a.order,
            });
        },
        Nv: function (e, t, n) {
            r.default.track(s.HAw.SERVER_HUB_WIDGET_EDIT_CLICKED, {
                guild_id: e,
                widget_type: t,
                ...((0, a.Ny)(n) ? {} : { widget_id: n }),
            });
        },
        P7: function (e, t, n) {
            let { reason: l, hadChanges: i, widgetCount: a } = n;
            r.default.track(s.HAw.SERVER_HUB_EDIT_CANCELED, {
                guild_id: e,
                edit_session_id: t,
                reason: l,
                had_changes: i,
                widget_count: a,
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
            (0, i.x)({ type: o.z.VIEW, name: l.ImpressionNames.SERVER_HUB_WIDGET, properties: c(e) }, !1, !0);
        },
        jM: function (e, t, n) {
            let { widget: l, widgetCount: i } = n;
            r.default.track(s.HAw.SERVER_HUB_EDIT_WIDGET_DELETED, {
                guild_id: e,
                edit_session_id: t,
                widget_type: l.type,
                ...d(l.id),
                column_index: l.position.column,
                order_index: l.position.order,
                widget_count: i,
            });
        },
        jb: function (e, t) {
            r.default.track(s.HAw.SERVER_HUB_VISIT, { guild_id: e, source: t });
        },
        nn: function (e, t, n) {
            let { widgetCount: l, addedWidgetCount: i, deletedWidgetCount: a, bannerChanged: o } = n;
            r.default.track(s.HAw.SERVER_HUB_EDIT_SAVED, {
                guild_id: e,
                edit_session_id: t,
                widget_count: l,
                added_widget_count: i,
                deleted_widget_count: a,
                banner_changed: o,
            });
        },
        pb: u,
        q9: function (e, t, n) {
            r.default.track(s.HAw.SERVER_HUB_TOGGLE_SETTING, { guild_id: e, type: t, value: n });
        },
        qg: function (e, t, n) {
            let { widget: l, widgetCount: i } = n;
            r.default.track(s.HAw.SERVER_HUB_EDIT_WIDGET_ADDED, {
                guild_id: e,
                edit_session_id: t,
                widget_type: l.type,
                column_index: l.position.column,
                order_index: l.position.order,
                widget_count: i,
            });
        },
    },
);
