n.d(t, {
    CP: () => S,
    DZ: () => A,
    G_: () => E,
    ME: () => I,
    Qe: () => b,
    Sq: () => y,
    Xh: () => T,
    ct: () => v,
    fd: () => g,
}),
    n(938796),
    n(896048);
var r = n(665260),
    i = n(58149),
    a = n(535586),
    s = n(734057),
    o = n(320501),
    l = n(543465);
n(954571);
var c = n(652215),
    u = n(406535),
    d = n(790782),
    f = n(355097);

function p(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function _(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                p(e, t, n[t]);
            });
    }
    return e;
}

function h(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}

function m(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : h(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
var g = (function (e) {
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
let E = {
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
            e === c.orn.ALL_MESSAGES
                ? "notifications set to all messages"
                : e === c.orn.ONLY_MENTIONS
                  ? "notifications set to mentions"
                  : e === c.orn.NO_MESSAGES
                    ? "notifications set to nothing"
                    : "notifications set to the default",
    },
    b = Object.freeze({
        [c.orn.ALL_MESSAGES]: "All",
        [c.orn.ONLY_MENTIONS]: "Mentions",
        [c.orn.NO_MESSAGES]: "Nothing",
        [c.orn.NULL]: null,
    });

function y(e, t, n, s, o) {
    var l, d;
    let p = function (e) {
            var t, n, r, i, a, s, o;
            let l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                c =
                    null != l.mute_config && null != l.mute_config.end_time
                        ? new Date(l.mute_config.end_time).getTime()
                        : e.guild_muted_until,
                u =
                    null != l.message_notifications
                        ? b[l.message_notifications]
                        : e.guild_message_notification_settings;
            return {
                guild_muted_until: c,
                guild_flags: null != (t = l.flags) ? t : e.guild_flags,
                guild_is_muted: null != (n = l.muted) ? n : e.guild_is_muted,
                guild_message_notification_settings: u,
                guild_suppress_roles: null != (r = l.suppress_roles) ? r : e.guild_suppress_roles,
                guild_receive_mobile_push: null != (i = l.mobile_push) ? i : e.guild_receive_mobile_push,
                guild_notify_highlights: null != (a = l.notify_highlights) ? a : e.guild_notify_highlights,
                guild_suppress_everyone: null != (s = l.suppress_everyone) ? s : e.guild_suppress_everyone,
                guild_scheduled_events_muted:
                    null != (o = l.mute_scheduled_events) ? o : e.guild_scheduled_events_muted,
            };
        },
        h = p(n),
        g = p(S(e), t),
        E = O(h, g, "RETURN_PREVIOUS_WHEN_CHANGED"),
        y = null != (l = E("guild_flags")) ? l : 0,
        A = (null != (d = g.guild_flags) ? d : 0) ^ y,
        v = 0 === (0, r.iE)(A, f.n3.OPT_IN_CHANNELS_OFF, f.n3.OPT_IN_CHANNELS_ON);
    i.Ay.trackWithMetadata(
        c.HAw.NOTIFICATION_SETTINGS_UPDATED,
        m(_({}, g, a.A.getStats(e)), {
            location: o,
            guild_id: e,
            update_type: u.Y.GUILD,
            label: s,
            guild_flags_old: E("guild_flags"),
            guild_is_muted_old: E("guild_is_muted"),
            guild_suppress_roles_old: E("guild_suppress_roles"),
            guild_notify_highlights_old: E("guild_notify_highlights"),
            guild_suppress_everyone_old: E("guild_suppress_everyone"),
            guild_receive_mobile_push_old: E("guild_receive_mobile_push"),
            guild_scheduled_events_muted_old: E("guild_scheduled_events_muted"),
            guild_message_notification_settings_old: E("guild_message_notification_settings"),
            is_opt_in_only_change: v,
        }),
    );
}

function O(e, t, n) {
    return (r) => {
        if ("RETURN_PREVIOUS_WHEN_CHANGED" === n) return e[r] !== t[r] ? e[r] : void 0;
    };
}

function A(e) {
    return null != e && null != e.end_time ? new Date(e.end_time).getTime() : null;
}

function v(e) {
    var t, n, l, d;
    let {
            updateType: p = u.Y.CHANNEL,
            guildId: h,
            channelId: g,
            applicationId: E,
            change: y,
            previous: v,
            label: S,
            location: T,
        } = e,
        C = function (e) {
            var t, n;
            let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                i = null != (t = r.muted) ? t : null == e ? void 0 : e.channel_is_muted,
                a =
                    null != r.message_notifications
                        ? b[r.message_notifications]
                        : null == e
                          ? void 0
                          : e.channel_message_notification_settings,
                s = null == h ? null : !0 === i || null != a;
            return {
                channel_is_muted: i,
                channel_is_overridden: s,
                channel_flags: null != (n = r.flags) ? n : null == e ? void 0 : e.channel_flags,
                channel_message_notification_settings: a,
                channel_muted_until: A(r.mute_config),
            };
        },
        N = C(v),
        R = C(I(h, g), y),
        w = O(N, R, "RETURN_PREVIOUS_WHEN_CHANGED"),
        P = s.A.getChannel(g),
        D = null != (t = w("channel_flags")) ? t : 0,
        x = (null != (n = R.channel_flags) ? n : 0) ^ D,
        L = 0 === (0, r.iE)(x, f.vv.FAVORITED, f.vv.OPT_IN_ENABLED),
        j = null != (l = null == (d = o.A.getLastMessage(g)) ? void 0 : d.type) ? l : null;
    i.Ay.trackWithMetadata(
        c.HAw.NOTIFICATION_SETTINGS_UPDATED,
        m(_({}, R, a.A.getStats(h)), {
            location: T,
            guild_id: h,
            channel_id: g,
            update_type: p,
            label: S,
            parent_id: null != P ? P.parent_id : null,
            channel_flags_old: w("channel_flags"),
            channel_is_muted_old: w("channel_is_muted"),
            channel_muted_until_old: w("channel_muted_until"),
            channel_is_overridden_old: w("channel_is_overridden"),
            channel_message_notification_settings_old: w("channel_message_notification_settings"),
            is_opt_in_only_change: L,
            last_message_type: j,
            application_id: E,
        }),
    );
}

function S(e) {
    let t = l.Ay.isMuted(e),
        n = l.Ay.getMuteConfig(e);
    return {
        guild_suppress_everyone: l.Ay.isSuppressEveryoneEnabled(e),
        guild_suppress_roles: l.Ay.isSuppressRolesEnabled(e),
        guild_scheduled_events_muted: l.Ay.isMuteScheduledEventsEnabled(e),
        guild_is_muted: t,
        guild_muted_until: null != n && null != n.end_time ? new Date(n.end_time).getTime() : null,
        guild_receive_mobile_push: l.Ay.isMobilePushEnabled(e),
        guild_message_notification_settings: b[l.Ay.getMessageNotifications(e)],
        guild_notify_highlights: l.Ay.getNotifyHighlights(e),
        guild_flags: l.Ay.getGuildFlags(e),
    };
}

function I(e, t) {
    let n = l.Ay.isChannelMuted(e, t),
        r = l.Ay.getChannelMuteConfig(e, t);
    return {
        channel_is_muted: n,
        channel_muted_until: null != r && null != r.end_time ? new Date(r.end_time).getTime() : null,
        channel_message_notification_settings: b[l.Ay.getChannelMessageNotifications(e, t)],
        channel_flags: l.Ay.getChannelIdFlags(e, t),
    };
}

function T(e, t) {
    let n = new Map();
    return t.forEach((t) => n.set(t, I(e, t))), n;
}
