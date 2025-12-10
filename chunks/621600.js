n.d(t, {
    $R: () => b,
    GA: () => I,
    I: () => C,
    UE: () => E,
    Wq: () => y,
    ZB: () => g,
    jz: () => S,
    rU: () => T,
    sK: () => v,
    wK: () => A,
}),
    n(997841),
    n(388685);
var r = n(95015),
    i = n(367907),
    a = n(601992),
    o = n(592125),
    s = n(375954),
    l = n(9156);
n(626135);
var c = n(981631),
    u = n(468788),
    d = n(490897),
    f = n(526761);
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
function m(e, t) {
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
function h(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : m(Object(t)).forEach(function (n) {
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
            e === d.i.ALL_MESSAGES
                ? "unreads set to all messages"
                : e === d.i.ONLY_MENTIONS
                  ? "unreads set to mentions"
                  : "unreads set to the default",
        notifications: (e) =>
            e === c.bL.ALL_MESSAGES
                ? "notifications set to all messages"
                : e === c.bL.ONLY_MENTIONS
                  ? "notifications set to mentions"
                  : e === c.bL.NO_MESSAGES
                    ? "notifications set to nothing"
                    : "notifications set to the default",
    },
    b = Object.freeze({
        [c.bL.ALL_MESSAGES]: "All",
        [c.bL.ONLY_MENTIONS]: "Mentions",
        [c.bL.NO_MESSAGES]: "Nothing",
        [c.bL.NULL]: null,
    });
function y(e, t, n, o, s) {
    var l, d;
    let p = function (e) {
            var t, n, r, i, a, o, s;
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
                guild_suppress_everyone: null != (o = l.suppress_everyone) ? o : e.guild_suppress_everyone,
                guild_scheduled_events_muted:
                    null != (s = l.mute_scheduled_events) ? s : e.guild_scheduled_events_muted,
            };
        },
        m = p(n),
        g = p(I(e), t),
        E = O(m, g, "RETURN_PREVIOUS_WHEN_CHANGED"),
        y = null != (l = E("guild_flags")) ? l : 0,
        v = (null != (d = g.guild_flags) ? d : 0) ^ y,
        S = 0 === (0, r.M1)(v, f.vc.OPT_IN_CHANNELS_OFF, f.vc.OPT_IN_CHANNELS_ON);
    i.ZP.trackWithMetadata(
        c.rMx.NOTIFICATION_SETTINGS_UPDATED,
        h(_({}, g, a.Z.getStats(e)), {
            location: s,
            guild_id: e,
            update_type: u.I.GUILD,
            label: o,
            guild_flags_old: E("guild_flags"),
            guild_is_muted_old: E("guild_is_muted"),
            guild_suppress_roles_old: E("guild_suppress_roles"),
            guild_notify_highlights_old: E("guild_notify_highlights"),
            guild_suppress_everyone_old: E("guild_suppress_everyone"),
            guild_receive_mobile_push_old: E("guild_receive_mobile_push"),
            guild_scheduled_events_muted_old: E("guild_scheduled_events_muted"),
            guild_message_notification_settings_old: E("guild_message_notification_settings"),
            is_opt_in_only_change: S,
        }),
    );
}
function O(e, t, n) {
    return (r) => {
        if ("RETURN_PREVIOUS_WHEN_CHANGED" === n) return e[r] !== t[r] ? e[r] : void 0;
    };
}
function v(e) {
    return null != e && null != e.end_time ? new Date(e.end_time).getTime() : null;
}
function S(e) {
    var t, n, l, d;
    let {
            updateType: p = u.I.CHANNEL,
            guildId: m,
            channelId: g,
            applicationId: E,
            change: y,
            previous: S,
            label: I,
            location: T,
        } = e,
        A = function (e) {
            var t, n;
            let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                i = null != (t = r.muted) ? t : null == e ? void 0 : e.channel_is_muted,
                a =
                    null != r.message_notifications
                        ? b[r.message_notifications]
                        : null == e
                          ? void 0
                          : e.channel_message_notification_settings,
                o = null == m ? null : !0 === i || null != a;
            return {
                channel_is_muted: i,
                channel_is_overridden: o,
                channel_flags: null != (n = r.flags) ? n : null == e ? void 0 : e.channel_flags,
                channel_message_notification_settings: a,
                channel_muted_until: v(r.mute_config),
            };
        },
        N = A(S),
        P = A(C(m, g), y),
        R = O(N, P, "RETURN_PREVIOUS_WHEN_CHANGED"),
        D = o.Z.getChannel(g),
        w = null != (n = R("channel_flags")) ? n : 0,
        x = (null != (l = P.channel_flags) ? l : 0) ^ w,
        L = 0 === (0, r.M1)(x, f.ic.FAVORITED, f.ic.OPT_IN_ENABLED),
        j = null != (d = null == (t = s.Z.getLastMessage(g)) ? void 0 : t.type) ? d : null;
    i.ZP.trackWithMetadata(
        c.rMx.NOTIFICATION_SETTINGS_UPDATED,
        h(_({}, P, a.Z.getStats(m)), {
            location: T,
            guild_id: m,
            channel_id: g,
            update_type: p,
            label: I,
            parent_id: null != D ? D.parent_id : null,
            channel_flags_old: R("channel_flags"),
            channel_is_muted_old: R("channel_is_muted"),
            channel_muted_until_old: R("channel_muted_until"),
            channel_is_overridden_old: R("channel_is_overridden"),
            channel_message_notification_settings_old: R("channel_message_notification_settings"),
            is_opt_in_only_change: L,
            last_message_type: j,
            application_id: E,
        }),
    );
}
function I(e) {
    let t = l.ZP.isMuted(e),
        n = l.ZP.getMuteConfig(e);
    return {
        guild_suppress_everyone: l.ZP.isSuppressEveryoneEnabled(e),
        guild_suppress_roles: l.ZP.isSuppressRolesEnabled(e),
        guild_scheduled_events_muted: l.ZP.isMuteScheduledEventsEnabled(e),
        guild_is_muted: t,
        guild_muted_until: null != n && null != n.end_time ? new Date(n.end_time).getTime() : null,
        guild_receive_mobile_push: l.ZP.isMobilePushEnabled(e),
        guild_message_notification_settings: b[l.ZP.getMessageNotifications(e)],
        guild_notify_highlights: l.ZP.getNotifyHighlights(e),
        guild_flags: l.ZP.getGuildFlags(e),
    };
}
function T(e) {
    let t = new Map();
    return e.forEach((e) => t.set(e, I(e))), t;
}
function C(e, t) {
    let n = l.ZP.isChannelMuted(e, t),
        r = l.ZP.getChannelMuteConfig(e, t);
    return {
        channel_is_muted: n,
        channel_muted_until: null != r && null != r.end_time ? new Date(r.end_time).getTime() : null,
        channel_message_notification_settings: b[l.ZP.getChannelMessageNotifications(e, t)],
        channel_flags: l.ZP.getChannelIdFlags(e, t),
    };
}
function A(e, t) {
    let n = new Map();
    return t.forEach((t) => n.set(t, C(e, t))), n;
}
