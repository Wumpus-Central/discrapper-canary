"use strict";
n.d(t, {
    CP: () => T,
    DZ: () => A,
    G_: () => p,
    ME: () => S,
    Qe: () => E,
    Sq: () => m,
    Xh: () => y,
    ct: () => I,
    fd: () => f,
}),
    n(938796);
var i,
    r = n(665260),
    s = n(95561),
    a = n(535586),
    o = n(734057),
    l = n(232835),
    u = n(543465);
n(174459);
var c = n(652215),
    d = n(406535),
    _ = n(790782),
    h = n(355097),
    f =
        (((i = {}).ForumThreadsCreatedOn = "enabled forum thread created notifs"),
        (i.ForumThreadsCreatedOff = "disabled forum thread created notifs"),
        (i.SuppressEveryoneOn = "enabled suppress everyone"),
        (i.SuppressEveryoneOff = "disabled suppress everyone"),
        (i.SuppressRolesOn = "enabled suppress roles"),
        (i.SuppressRolesOff = "disabled suppress roles"),
        (i.HighlightsOn = "enabled highlights"),
        (i.HighlightsOff = "disabled highlights"),
        (i.MobilePushOn = "enabled mobile push notifications"),
        (i.MobilePushOff = "disabled mobile push notifications"),
        (i.UnreadsAll = "unreads set to all messages"),
        (i.UnreadsMentions = "unreads set to mentions"),
        (i.UnreadsDefault = "unreads set to the default"),
        (i.NotificationsAll = "notifications set to all messages"),
        (i.NotificationsMentions = "notifications set to mentions"),
        (i.NotificationsNothing = "notifications set to nothing"),
        (i.NotificationsDefault = "notifications set to the default"),
        (i.PresetAll = "notification preset set to all messages"),
        (i.PresetMentions = "notification preset set to mentions"),
        (i.PresetNothing = "notification preset set to nothing"),
        (i.PresetDefault = "notification preset set to the default"),
        (i.OptedIn = "opted in to entity"),
        (i.OptedOut = "opted out from entity"),
        (i.Favorited = "favorited"),
        (i.UnFavorited = "unfavorited"),
        (i.Muted = "muted"),
        (i.Unmuted = "unmuted"),
        (i.MutedScheduledEvents = "muted scheduled events"),
        (i.UnmutedScheduledEvents = "unmuted scheduled events"),
        (i.OverrideCreated = "channel override created"),
        (i.OverrideDeleted = "channel override deleted"),
        (i.AnnouncementAutoEnable = "announcement channels auto set to all messages"),
        i);
let p = {
        forumThreadsCreated: (e) =>
            e ? "enabled forum thread created notifs" : "disabled forum thread created notifs",
        suppressEveryone: (e) => (e ? "enabled suppress everyone" : "disabled suppress everyone"),
        suppressRoles: (e) => (e ? "enabled suppress roles" : "disabled suppress roles"),
        highlights: (e) => (e ? "enabled highlights" : "disabled highlights"),
        mobilePush: (e) => (e ? "enabled mobile push notifications" : "disabled mobile push notifications"),
        optedIn: (e) => (e ? "opted in to entity" : "opted out from entity"),
        favorited: (e) => (e ? "favorited" : "unfavorited"),
        muted: (e) => (e ? "muted" : "unmuted"),
        mutedEvents: (e) => (e ? "muted scheduled events" : "unmuted scheduled events"),
        unreads: (e) =>
            e === _.e.ALL_MESSAGES
                ? "unreads set to all messages"
                : e === _.e.ONLY_MENTIONS
                  ? "unreads set to mentions"
                  : "unreads set to the default",
        notifications: (e) =>
            e === c.orn.ALL_MESSAGES
                ? "notifications set to all messages"
                : e === c.orn.ONLY_MENTIONS
                  ? "notifications set to mentions"
                  : e === c.orn.NO_MESSAGES
                    ? "notifications set to nothing"
                    : "notifications set to the default",
    },
    E = Object.freeze({
        [c.orn.ALL_MESSAGES]: "All",
        [c.orn.ONLY_MENTIONS]: "Mentions",
        [c.orn.NO_MESSAGES]: "Nothing",
        [c.orn.NULL]: null,
    });
function m(e, t, n, i, o) {
    let l = function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n =
                    null != t.mute_config && null != t.mute_config.end_time
                        ? new Date(t.mute_config.end_time).getTime()
                        : e.guild_muted_until,
                i =
                    null != t.message_notifications
                        ? E[t.message_notifications]
                        : e.guild_message_notification_settings;
            return {
                guild_muted_until: n,
                guild_flags: t.flags ?? e.guild_flags,
                guild_is_muted: t.muted ?? e.guild_is_muted,
                guild_message_notification_settings: i,
                guild_suppress_roles: t.suppress_roles ?? e.guild_suppress_roles,
                guild_receive_mobile_push: t.mobile_push ?? e.guild_receive_mobile_push,
                guild_notify_highlights: t.notify_highlights ?? e.guild_notify_highlights,
                guild_suppress_everyone: t.suppress_everyone ?? e.guild_suppress_everyone,
                guild_scheduled_events_muted: t.mute_scheduled_events ?? e.guild_scheduled_events_muted,
            };
        },
        u = l(n),
        _ = l(T(e), t),
        f = g(u, _, "RETURN_PREVIOUS_WHEN_CHANGED"),
        p = f("guild_flags") ?? 0,
        m = (_.guild_flags ?? 0) ^ p,
        A = 0 === (0, r.iE)(m, h.n3.OPT_IN_CHANNELS_OFF, h.n3.OPT_IN_CHANNELS_ON);
    s.Ay.trackWithMetadata(c.HAw.NOTIFICATION_SETTINGS_UPDATED, {
        ..._,
        ...a.A.getStats(e),
        location: o,
        guild_id: e,
        update_type: d.Y.GUILD,
        label: i,
        guild_flags_old: f("guild_flags"),
        guild_is_muted_old: f("guild_is_muted"),
        guild_suppress_roles_old: f("guild_suppress_roles"),
        guild_notify_highlights_old: f("guild_notify_highlights"),
        guild_suppress_everyone_old: f("guild_suppress_everyone"),
        guild_receive_mobile_push_old: f("guild_receive_mobile_push"),
        guild_scheduled_events_muted_old: f("guild_scheduled_events_muted"),
        guild_message_notification_settings_old: f("guild_message_notification_settings"),
        is_opt_in_only_change: A,
    });
}
function g(e, t, n) {
    return (i) => {
        if ("RETURN_PREVIOUS_WHEN_CHANGED" === n) return e[i] !== t[i] ? e[i] : void 0;
    };
}
function A(e) {
    return null != e && null != e.end_time ? new Date(e.end_time).getTime() : null;
}
function I(e) {
    let {
            updateType: t = d.Y.CHANNEL,
            guildId: n,
            channelId: i,
            applicationId: u,
            change: _,
            previous: f,
            label: p,
            location: m,
        } = e,
        I = function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                i = t.muted ?? e?.channel_is_muted,
                r =
                    null != t.message_notifications
                        ? E[t.message_notifications]
                        : e?.channel_message_notification_settings,
                s = null == n ? null : !0 === i || null != r;
            return {
                channel_is_muted: i,
                channel_is_overridden: s,
                channel_flags: t.flags ?? e?.channel_flags,
                channel_message_notification_settings: r,
                channel_muted_until: A(t.mute_config),
            };
        },
        T = I(f),
        y = I(S(n, i), _),
        N = g(T, y, "RETURN_PREVIOUS_WHEN_CHANGED"),
        v = o.A.getChannel(i),
        C = N("channel_flags") ?? 0,
        R = (y.channel_flags ?? 0) ^ C,
        O = 0 === (0, r.iE)(R, h.vv.FAVORITED, h.vv.OPT_IN_ENABLED),
        b = l.A.getLastMessage(i)?.type ?? null;
    s.Ay.trackWithMetadata(c.HAw.NOTIFICATION_SETTINGS_UPDATED, {
        ...y,
        ...a.A.getStats(n),
        location: m,
        guild_id: n,
        channel_id: i,
        update_type: t,
        label: p,
        parent_id: null != v ? v.parent_id : null,
        channel_flags_old: N("channel_flags"),
        channel_is_muted_old: N("channel_is_muted"),
        channel_muted_until_old: N("channel_muted_until"),
        channel_is_overridden_old: N("channel_is_overridden"),
        channel_message_notification_settings_old: N("channel_message_notification_settings"),
        is_opt_in_only_change: O,
        last_message_type: b,
        application_id: u,
    });
}
function T(e) {
    let t = u.Ay.isMuted(e),
        n = u.Ay.getMuteConfig(e);
    return {
        guild_suppress_everyone: u.Ay.isSuppressEveryoneEnabled(e),
        guild_suppress_roles: u.Ay.isSuppressRolesEnabled(e),
        guild_scheduled_events_muted: u.Ay.isMuteScheduledEventsEnabled(e),
        guild_is_muted: t,
        guild_muted_until: null != n && null != n.end_time ? new Date(n.end_time).getTime() : null,
        guild_receive_mobile_push: u.Ay.isMobilePushEnabled(e),
        guild_message_notification_settings: E[u.Ay.getMessageNotifications(e)],
        guild_notify_highlights: u.Ay.getNotifyHighlights(e),
        guild_flags: u.Ay.getGuildFlags(e),
    };
}
function S(e, t) {
    let n = u.Ay.isChannelMuted(e, t),
        i = u.Ay.getChannelMuteConfig(e, t);
    return {
        channel_is_muted: n,
        channel_muted_until: null != i && null != i.end_time ? new Date(i.end_time).getTime() : null,
        channel_message_notification_settings: E[u.Ay.getChannelMessageNotifications(e, t)],
        channel_flags: u.Ay.getChannelIdFlags(e, t),
    };
}
function y(e, t) {
    let n = new Map();
    return t.forEach((t) => n.set(t, S(e, t))), n;
}
