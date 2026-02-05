"use strict";
n.d(t, {
    CP: () => I,
    DZ: () => E,
    G_: () => p,
    ME: () => T,
    Qe: () => h,
    Sq: () => m,
    Xh: () => y,
    ct: () => A,
    fd: () => f,
}),
    n(938796);
var r = n(665260),
    i = n(58149),
    a = n(535586),
    s = n(734057),
    o = n(320501),
    l = n(543465);
n(954571);
var u = n(652215),
    c = n(406535),
    d = n(790782),
    _ = n(355097),
    f = (function (e) {
        return (
            (e.ForumThreadsCreatedOn = "enabled forum thread created notifs"),
            (e.ForumThreadsCreatedOff = "disabled forum thread created notifs"),
            (e.SuppressEveryoneOn = "enabled suppress everyone"),
            (e.SuppressEveryoneOff = "disabled suppress everyone"),
            (e.SuppressRolesOn = "enabled suppress roles"),
            (e.SuppressRolesOff = "disabled suppress roles"),
            (e.HighlightsOn = "enabled highlights"),
            (e.HighlightsOff = "disabled highlights"),
            (e.MobilePushOn = "enabled mobile push notifications"),
            (e.MobilePushOff = "disabled mobile push notifications"),
            (e.UnreadsAll = "unreads set to all messages"),
            (e.UnreadsMentions = "unreads set to mentions"),
            (e.UnreadsDefault = "unreads set to the default"),
            (e.NotificationsAll = "notifications set to all messages"),
            (e.NotificationsMentions = "notifications set to mentions"),
            (e.NotificationsNothing = "notifications set to nothing"),
            (e.NotificationsDefault = "notifications set to the default"),
            (e.PresetAll = "notification preset set to all messages"),
            (e.PresetMentions = "notification preset set to mentions"),
            (e.PresetNothing = "notification preset set to nothing"),
            (e.PresetDefault = "notification preset set to the default"),
            (e.OptedIn = "opted in to entity"),
            (e.OptedOut = "opted out from entity"),
            (e.Favorited = "favorited"),
            (e.UnFavorited = "unfavorited"),
            (e.Muted = "muted"),
            (e.Unmuted = "unmuted"),
            (e.MutedScheduledEvents = "muted scheduled events"),
            (e.UnmutedScheduledEvents = "unmuted scheduled events"),
            (e.OverrideCreated = "channel override created"),
            (e.OverrideDeleted = "channel override deleted"),
            (e.AnnouncementAutoEnable = "announcement channels auto set to all messages"),
            e
        );
    })({});
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
            e === d.e.ALL_MESSAGES
                ? "unreads set to all messages"
                : e === d.e.ONLY_MENTIONS
                  ? "unreads set to mentions"
                  : "unreads set to the default",
        notifications: (e) =>
            e === u.orn.ALL_MESSAGES
                ? "notifications set to all messages"
                : e === u.orn.ONLY_MENTIONS
                  ? "notifications set to mentions"
                  : e === u.orn.NO_MESSAGES
                    ? "notifications set to nothing"
                    : "notifications set to the default",
    },
    h = Object.freeze({
        [u.orn.ALL_MESSAGES]: "All",
        [u.orn.ONLY_MENTIONS]: "Mentions",
        [u.orn.NO_MESSAGES]: "Nothing",
        [u.orn.NULL]: null,
    });
function m(e, t, n, s, o) {
    let l = function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n =
                    null != t.mute_config && null != t.mute_config.end_time
                        ? new Date(t.mute_config.end_time).getTime()
                        : e.guild_muted_until,
                r =
                    null != t.message_notifications
                        ? h[t.message_notifications]
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
        d = l(n),
        f = l(I(e), t),
        p = g(d, f, "RETURN_PREVIOUS_WHEN_CHANGED"),
        m = p("guild_flags") ?? 0,
        E = (f.guild_flags ?? 0) ^ m,
        A = 0 === (0, r.iE)(E, _.n3.OPT_IN_CHANNELS_OFF, _.n3.OPT_IN_CHANNELS_ON);
    i.Ay.trackWithMetadata(u.HAw.NOTIFICATION_SETTINGS_UPDATED, {
        ...f,
        ...a.A.getStats(e),
        location: o,
        guild_id: e,
        update_type: c.Y.GUILD,
        label: s,
        guild_flags_old: p("guild_flags"),
        guild_is_muted_old: p("guild_is_muted"),
        guild_suppress_roles_old: p("guild_suppress_roles"),
        guild_notify_highlights_old: p("guild_notify_highlights"),
        guild_suppress_everyone_old: p("guild_suppress_everyone"),
        guild_receive_mobile_push_old: p("guild_receive_mobile_push"),
        guild_scheduled_events_muted_old: p("guild_scheduled_events_muted"),
        guild_message_notification_settings_old: p("guild_message_notification_settings"),
        is_opt_in_only_change: A,
    });
}
function g(e, t, n) {
    return (r) => {
        if ("RETURN_PREVIOUS_WHEN_CHANGED" === n) return e[r] !== t[r] ? e[r] : void 0;
    };
}
function E(e) {
    return null != e && null != e.end_time ? new Date(e.end_time).getTime() : null;
}
function A(e) {
    let {
            updateType: t = c.Y.CHANNEL,
            guildId: n,
            channelId: l,
            applicationId: d,
            change: f,
            previous: p,
            label: m,
            location: A,
        } = e,
        I = function (e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                r = t.muted ?? e?.channel_is_muted,
                i =
                    null != t.message_notifications
                        ? h[t.message_notifications]
                        : e?.channel_message_notification_settings,
                a = null == n ? null : !0 === r || null != i;
            return {
                channel_is_muted: r,
                channel_is_overridden: a,
                channel_flags: t.flags ?? e?.channel_flags,
                channel_message_notification_settings: i,
                channel_muted_until: E(t.mute_config),
            };
        },
        y = I(p),
        S = I(T(n, l), f),
        v = g(y, S, "RETURN_PREVIOUS_WHEN_CHANGED"),
        C = s.A.getChannel(l),
        b = v("channel_flags") ?? 0,
        N = (S.channel_flags ?? 0) ^ b,
        R = 0 === (0, r.iE)(N, _.vv.FAVORITED, _.vv.OPT_IN_ENABLED),
        O = o.A.getLastMessage(l)?.type ?? null;
    i.Ay.trackWithMetadata(u.HAw.NOTIFICATION_SETTINGS_UPDATED, {
        ...S,
        ...a.A.getStats(n),
        location: A,
        guild_id: n,
        channel_id: l,
        update_type: t,
        label: m,
        parent_id: null != C ? C.parent_id : null,
        channel_flags_old: v("channel_flags"),
        channel_is_muted_old: v("channel_is_muted"),
        channel_muted_until_old: v("channel_muted_until"),
        channel_is_overridden_old: v("channel_is_overridden"),
        channel_message_notification_settings_old: v("channel_message_notification_settings"),
        is_opt_in_only_change: R,
        last_message_type: O,
        application_id: d,
    });
}
function I(e) {
    let t = l.Ay.isMuted(e),
        n = l.Ay.getMuteConfig(e);
    return {
        guild_suppress_everyone: l.Ay.isSuppressEveryoneEnabled(e),
        guild_suppress_roles: l.Ay.isSuppressRolesEnabled(e),
        guild_scheduled_events_muted: l.Ay.isMuteScheduledEventsEnabled(e),
        guild_is_muted: t,
        guild_muted_until: null != n && null != n.end_time ? new Date(n.end_time).getTime() : null,
        guild_receive_mobile_push: l.Ay.isMobilePushEnabled(e),
        guild_message_notification_settings: h[l.Ay.getMessageNotifications(e)],
        guild_notify_highlights: l.Ay.getNotifyHighlights(e),
        guild_flags: l.Ay.getGuildFlags(e),
    };
}
function T(e, t) {
    let n = l.Ay.isChannelMuted(e, t),
        r = l.Ay.getChannelMuteConfig(e, t);
    return {
        channel_is_muted: n,
        channel_muted_until: null != r && null != r.end_time ? new Date(r.end_time).getTime() : null,
        channel_message_notification_settings: h[l.Ay.getChannelMessageNotifications(e, t)],
        channel_flags: l.Ay.getChannelIdFlags(e, t),
    };
}
function y(e, t) {
    let n = new Map();
    return t.forEach((t) => n.set(t, T(e, t))), n;
}
