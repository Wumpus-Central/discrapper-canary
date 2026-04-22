"use strict";
n.d(t, {
    CP: () => T,
    DZ: () => A,
    G_: () => h,
    ME: () => S,
    Qe: () => p,
    Sq: () => m,
    Xh: () => y,
    ct: () => I,
    fd: () => E,
}),
    n(938796);
var r,
    i = n(665260),
    s = n(58149),
    a = n(535586),
    o = n(734057),
    l = n(320501),
    u = n(543465);
n(954571);
var d = n(652215),
    c = n(406535),
    _ = n(790782),
    f = n(355097),
    E =
        (((r = {}).ForumThreadsCreatedOn = "enabled forum thread created notifs"),
        (r.ForumThreadsCreatedOff = "disabled forum thread created notifs"),
        (r.SuppressEveryoneOn = "enabled suppress everyone"),
        (r.SuppressEveryoneOff = "disabled suppress everyone"),
        (r.SuppressRolesOn = "enabled suppress roles"),
        (r.SuppressRolesOff = "disabled suppress roles"),
        (r.HighlightsOn = "enabled highlights"),
        (r.HighlightsOff = "disabled highlights"),
        (r.MobilePushOn = "enabled mobile push notifications"),
        (r.MobilePushOff = "disabled mobile push notifications"),
        (r.UnreadsAll = "unreads set to all messages"),
        (r.UnreadsMentions = "unreads set to mentions"),
        (r.UnreadsDefault = "unreads set to the default"),
        (r.NotificationsAll = "notifications set to all messages"),
        (r.NotificationsMentions = "notifications set to mentions"),
        (r.NotificationsNothing = "notifications set to nothing"),
        (r.NotificationsDefault = "notifications set to the default"),
        (r.PresetAll = "notification preset set to all messages"),
        (r.PresetMentions = "notification preset set to mentions"),
        (r.PresetNothing = "notification preset set to nothing"),
        (r.PresetDefault = "notification preset set to the default"),
        (r.OptedIn = "opted in to entity"),
        (r.OptedOut = "opted out from entity"),
        (r.Favorited = "favorited"),
        (r.UnFavorited = "unfavorited"),
        (r.Muted = "muted"),
        (r.Unmuted = "unmuted"),
        (r.MutedScheduledEvents = "muted scheduled events"),
        (r.UnmutedScheduledEvents = "unmuted scheduled events"),
        (r.OverrideCreated = "channel override created"),
        (r.OverrideDeleted = "channel override deleted"),
        (r.AnnouncementAutoEnable = "announcement channels auto set to all messages"),
        r);
let h = {
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
            e === d.orn.ALL_MESSAGES
                ? "notifications set to all messages"
                : e === d.orn.ONLY_MENTIONS
                  ? "notifications set to mentions"
                  : e === d.orn.NO_MESSAGES
                    ? "notifications set to nothing"
                    : "notifications set to the default",
    },
    p = Object.freeze({
        [d.orn.ALL_MESSAGES]: "All",
        [d.orn.ONLY_MENTIONS]: "Mentions",
        [d.orn.NO_MESSAGES]: "Nothing",
        [d.orn.NULL]: null,
    });
function m(e, t, n, r, o) {
    let l = function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n =
                    null != t.mute_config && null != t.mute_config.end_time
                        ? new Date(t.mute_config.end_time).getTime()
                        : e.guild_muted_until,
                r =
                    null != t.message_notifications
                        ? p[t.message_notifications]
                        : e.guild_message_notification_settings;
            return {
                guild_muted_until: n,
                guild_flags: t.flags ?? e.guild_flags,
                guild_is_muted: t.muted ?? e.guild_is_muted,
                guild_message_notification_settings: r,
                guild_suppress_roles: t.suppress_roles ?? e.guild_suppress_roles,
                guild_receive_mobile_push: t.mobile_push ?? e.guild_receive_mobile_push,
                guild_notify_highlights: t.notify_highlights ?? e.guild_notify_highlights,
                guild_suppress_everyone: t.suppress_everyone ?? e.guild_suppress_everyone,
                guild_scheduled_events_muted: t.mute_scheduled_events ?? e.guild_scheduled_events_muted,
            };
        },
        u = l(n),
        _ = l(T(e), t),
        E = g(u, _, "RETURN_PREVIOUS_WHEN_CHANGED"),
        h = E("guild_flags") ?? 0,
        m = (_.guild_flags ?? 0) ^ h,
        A = 0 === (0, i.iE)(m, f.n3.OPT_IN_CHANNELS_OFF, f.n3.OPT_IN_CHANNELS_ON);
    s.Ay.trackWithMetadata(d.HAw.NOTIFICATION_SETTINGS_UPDATED, {
        ..._,
        ...a.A.getStats(e),
        location: o,
        guild_id: e,
        update_type: c.Y.GUILD,
        label: r,
        guild_flags_old: E("guild_flags"),
        guild_is_muted_old: E("guild_is_muted"),
        guild_suppress_roles_old: E("guild_suppress_roles"),
        guild_notify_highlights_old: E("guild_notify_highlights"),
        guild_suppress_everyone_old: E("guild_suppress_everyone"),
        guild_receive_mobile_push_old: E("guild_receive_mobile_push"),
        guild_scheduled_events_muted_old: E("guild_scheduled_events_muted"),
        guild_message_notification_settings_old: E("guild_message_notification_settings"),
        is_opt_in_only_change: A,
    });
}
function g(e, t, n) {
    return (r) => {
        if ("RETURN_PREVIOUS_WHEN_CHANGED" === n) return e[r] !== t[r] ? e[r] : void 0;
    };
}
function A(e) {
    return null != e && null != e.end_time ? new Date(e.end_time).getTime() : null;
}
function I(e) {
    let {
            updateType: t = c.Y.CHANNEL,
            guildId: n,
            channelId: r,
            applicationId: u,
            change: _,
            previous: E,
            label: h,
            location: m,
        } = e,
        I = function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                r = t.muted ?? e?.channel_is_muted,
                i =
                    null != t.message_notifications
                        ? p[t.message_notifications]
                        : e?.channel_message_notification_settings,
                s = null == n ? null : !0 === r || null != i;
            return {
                channel_is_muted: r,
                channel_is_overridden: s,
                channel_flags: t.flags ?? e?.channel_flags,
                channel_message_notification_settings: i,
                channel_muted_until: A(t.mute_config),
            };
        },
        T = I(E),
        y = I(S(n, r), _),
        N = g(T, y, "RETURN_PREVIOUS_WHEN_CHANGED"),
        O = o.A.getChannel(r),
        R = N("channel_flags") ?? 0,
        v = (y.channel_flags ?? 0) ^ R,
        C = 0 === (0, i.iE)(v, f.vv.FAVORITED, f.vv.OPT_IN_ENABLED),
        b = l.A.getLastMessage(r)?.type ?? null;
    s.Ay.trackWithMetadata(d.HAw.NOTIFICATION_SETTINGS_UPDATED, {
        ...y,
        ...a.A.getStats(n),
        location: m,
        guild_id: n,
        channel_id: r,
        update_type: t,
        label: h,
        parent_id: null != O ? O.parent_id : null,
        channel_flags_old: N("channel_flags"),
        channel_is_muted_old: N("channel_is_muted"),
        channel_muted_until_old: N("channel_muted_until"),
        channel_is_overridden_old: N("channel_is_overridden"),
        channel_message_notification_settings_old: N("channel_message_notification_settings"),
        is_opt_in_only_change: C,
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
        guild_message_notification_settings: p[u.Ay.getMessageNotifications(e)],
        guild_notify_highlights: u.Ay.getNotifyHighlights(e),
        guild_flags: u.Ay.getGuildFlags(e),
    };
}
function S(e, t) {
    let n = u.Ay.isChannelMuted(e, t),
        r = u.Ay.getChannelMuteConfig(e, t);
    return {
        channel_is_muted: n,
        channel_muted_until: null != r && null != r.end_time ? new Date(r.end_time).getTime() : null,
        channel_message_notification_settings: p[u.Ay.getChannelMessageNotifications(e, t)],
        channel_flags: u.Ay.getChannelIdFlags(e, t),
    };
}
function y(e, t) {
    let n = new Map();
    return t.forEach((t) => n.set(t, S(e, t))), n;
}
