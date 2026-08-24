"use strict";
n.d(t, {
    CP: () => g,
    DZ: () => T,
    G_: () => h,
    ME: () => S,
    Qe: () => I,
    Sq: () => f,
    Xh: () => N,
    ct: () => m,
    fd: () => A,
}),
    n(938796);
var i,
    r = n(665260),
    a = n(95561),
    s = n(535586),
    l = n(734057),
    o = n(232835),
    d = n(543465);
n(174459);
var c = n(652215),
    u = n(406535),
    _ = n(790782),
    E = n(355097),
    A =
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
            e === c.orn.ALL_MESSAGES
                ? "notifications set to all messages"
                : e === c.orn.ONLY_MENTIONS
                  ? "notifications set to mentions"
                  : e === c.orn.NO_MESSAGES
                    ? "notifications set to nothing"
                    : "notifications set to the default",
    },
    I = Object.freeze({
        [c.orn.ALL_MESSAGES]: "All",
        [c.orn.ONLY_MENTIONS]: "Mentions",
        [c.orn.NO_MESSAGES]: "Nothing",
        [c.orn.NULL]: null,
    });
function f(e, t, n, i, l) {
    function o(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            n =
                null != t.mute_config && null != t.mute_config.end_time
                    ? new Date(t.mute_config.end_time).getTime()
                    : e.guild_muted_until,
            i = null != t.message_notifications ? I[t.message_notifications] : e.guild_message_notification_settings;
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
    }
    let d = o(n),
        _ = o(g(e), t),
        A = p(d, _, "RETURN_PREVIOUS_WHEN_CHANGED"),
        h = A("guild_flags") ?? 0,
        f = (_.guild_flags ?? 0) ^ h,
        T = 0 === (0, r.iE)(f, E.n3.OPT_IN_CHANNELS_OFF, E.n3.OPT_IN_CHANNELS_ON);
    a.Ay.trackWithMetadata(c.HAw.NOTIFICATION_SETTINGS_UPDATED, {
        ..._,
        ...s.A.getStats(e),
        location: l,
        guild_id: e,
        update_type: u.Y.GUILD,
        label: i,
        guild_flags_old: A("guild_flags"),
        guild_is_muted_old: A("guild_is_muted"),
        guild_suppress_roles_old: A("guild_suppress_roles"),
        guild_notify_highlights_old: A("guild_notify_highlights"),
        guild_suppress_everyone_old: A("guild_suppress_everyone"),
        guild_receive_mobile_push_old: A("guild_receive_mobile_push"),
        guild_scheduled_events_muted_old: A("guild_scheduled_events_muted"),
        guild_message_notification_settings_old: A("guild_message_notification_settings"),
        is_opt_in_only_change: T,
    });
}
function p(e, t, n) {
    return (i) => {
        if ("RETURN_PREVIOUS_WHEN_CHANGED" === n) return e[i] !== t[i] ? e[i] : void 0;
    };
}
function T(e) {
    return null != e && null != e.end_time ? new Date(e.end_time).getTime() : null;
}
function m(e) {
    let {
        updateType: t = u.Y.CHANNEL,
        guildId: n,
        channelId: i,
        applicationId: d,
        change: _,
        previous: A,
        label: h,
        location: f,
    } = e;
    function m(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            i = t.muted ?? e?.channel_is_muted,
            r = null != t.message_notifications ? I[t.message_notifications] : e?.channel_message_notification_settings,
            a = null == n ? null : !0 === i || null != r;
        return {
            channel_is_muted: i,
            channel_is_overridden: a,
            channel_flags: t.flags ?? e?.channel_flags,
            channel_message_notification_settings: r,
            channel_muted_until: T(t.mute_config),
        };
    }
    let g = m(A),
        N = m(S(n, i), _),
        C = p(g, N, "RETURN_PREVIOUS_WHEN_CHANGED"),
        O = l.A.getChannel(i),
        R = C("channel_flags") ?? 0,
        L = (N.channel_flags ?? 0) ^ R,
        y = 0 === (0, r.iE)(L, E.vv.FAVORITED, E.vv.OPT_IN_ENABLED),
        D = o.A.getLastMessage(i)?.type ?? null;
    a.Ay.trackWithMetadata(c.HAw.NOTIFICATION_SETTINGS_UPDATED, {
        ...N,
        ...s.A.getStats(n),
        location: f,
        guild_id: n,
        channel_id: i,
        update_type: t,
        label: h,
        parent_id: null != O ? O.parent_id : null,
        channel_flags_old: C("channel_flags"),
        channel_is_muted_old: C("channel_is_muted"),
        channel_muted_until_old: C("channel_muted_until"),
        channel_is_overridden_old: C("channel_is_overridden"),
        channel_message_notification_settings_old: C("channel_message_notification_settings"),
        is_opt_in_only_change: y,
        last_message_type: D,
        application_id: d,
    });
}
function g(e) {
    let t = d.Ay.isMuted(e),
        n = d.Ay.getMuteConfig(e);
    return {
        guild_suppress_everyone: d.Ay.isSuppressEveryoneEnabled(e),
        guild_suppress_roles: d.Ay.isSuppressRolesEnabled(e),
        guild_scheduled_events_muted: d.Ay.isMuteScheduledEventsEnabled(e),
        guild_is_muted: t,
        guild_muted_until: null != n && null != n.end_time ? new Date(n.end_time).getTime() : null,
        guild_receive_mobile_push: d.Ay.isMobilePushEnabled(e),
        guild_message_notification_settings: I[d.Ay.getMessageNotifications(e)],
        guild_notify_highlights: d.Ay.getNotifyHighlights(e),
        guild_flags: d.Ay.getGuildFlags(e),
    };
}
function S(e, t) {
    let n = d.Ay.isChannelMuted(e, t),
        i = d.Ay.getChannelMuteConfig(e, t);
    return {
        channel_is_muted: n,
        channel_muted_until: null != i && null != i.end_time ? new Date(i.end_time).getTime() : null,
        channel_message_notification_settings: I[d.Ay.getChannelMessageNotifications(e, t)],
        channel_flags: d.Ay.getChannelIdFlags(e, t),
    };
}
function N(e, t) {
    let n = new Map();
    return t.forEach((t) => n.set(t, S(e, t))), n;
}
