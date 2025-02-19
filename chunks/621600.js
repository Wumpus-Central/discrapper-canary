n.d(t, {
    $R: () => v,
    GA: () => I,
    I: () => N,
    UE: () => E,
    Wq: () => b,
    ZB: () => g,
    jz: () => S,
    rU: () => T,
    sK: () => O,
    wK: () => A
}),
    n(789020),
    n(47120);
var r = n(367907),
    i = n(601992),
    o = n(592125),
    a = n(375954),
    s = n(9156);
n(626135);
var l = n(630388),
    c = n(981631),
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
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function _(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
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
    return (e.ForumThreadsCreatedOn = 'enabled forum thread created notifs'), (e.ForumThreadsCreatedOff = 'disabled forum thread created notifs'), (e.SuppressEveryoneOn = 'enabled suppress everyone'), (e.SuppressEveryoneOff = 'disabled suppress everyone'), (e.SuppressRolesOn = 'enabled suppress roles'), (e.SuppressRolesOff = 'disabled suppress roles'), (e.HighlightsOn = 'enabled highlights'), (e.HighlightsOff = 'disabled highlights'), (e.MobilePushOn = 'enabled mobile push notifications'), (e.MobilePushOff = 'disabled mobile push notifications'), (e.UnreadsAll = 'unreads set to all messages'), (e.UnreadsMentions = 'unreads set to mentions'), (e.UnreadsDefault = 'unreads set to the default'), (e.NotificationsAll = 'notifications set to all messages'), (e.NotificationsMentions = 'notifications set to mentions'), (e.NotificationsNothing = 'notifications set to nothing'), (e.NotificationsDefault = 'notifications set to the default'), (e.PresetAll = 'notification preset set to all messages'), (e.PresetMentions = 'notification preset set to mentions'), (e.PresetNothing = 'notification preset set to nothing'), (e.PresetDefault = 'notification preset set to the default'), (e.OptedIn = 'opted in to entity'), (e.OptedOut = 'opted out from entity'), (e.Favorited = 'favorited'), (e.UnFavorited = 'unfavorited'), (e.Muted = 'muted'), (e.Unmuted = 'unmuted'), (e.MutedScheduledEvents = 'muted scheduled events'), (e.UnmutedScheduledEvents = 'unmuted scheduled events'), (e.OverrideCreated = 'channel override created'), (e.OverrideDeleted = 'channel override deleted'), (e.AnnouncementAutoEnable = 'announcement channels auto set to all messages'), e;
})({});
let E = {
        forumThreadsCreated: (e) => (e ? 'enabled forum thread created notifs' : 'disabled forum thread created notifs'),
        suppressEveryone: (e) => (e ? 'enabled suppress everyone' : 'disabled suppress everyone'),
        suppressRoles: (e) => (e ? 'enabled suppress roles' : 'disabled suppress roles'),
        highlights: (e) => (e ? 'enabled highlights' : 'disabled highlights'),
        mobilePush: (e) => (e ? 'enabled mobile push notifications' : 'disabled mobile push notifications'),
        optedIn: (e) => (e ? 'opted in to entity' : 'opted out from entity'),
        favorited: (e) => (e ? 'favorited' : 'unfavorited'),
        muted: (e) => (e ? 'muted' : 'unmuted'),
        mutedEvents: (e) => (e ? 'muted scheduled events' : 'unmuted scheduled events'),
        unreads: (e) => (e === d.i.ALL_MESSAGES ? 'unreads set to all messages' : e === d.i.ONLY_MENTIONS ? 'unreads set to mentions' : 'unreads set to the default'),
        notifications: (e) => (e === c.bL.ALL_MESSAGES ? 'notifications set to all messages' : e === c.bL.ONLY_MENTIONS ? 'notifications set to mentions' : e === c.bL.NO_MESSAGES ? 'notifications set to nothing' : 'notifications set to the default')
    },
    v = Object.freeze({
        [c.bL.ALL_MESSAGES]: 'All',
        [c.bL.ONLY_MENTIONS]: 'Mentions',
        [c.bL.NO_MESSAGES]: 'Nothing',
        [c.bL.NULL]: null
    });
function b(e, t, n, o, a) {
    var s, d;
    let p = function (e) {
            var t, n, r, i, o, a, s;
            let l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                c = null != l.mute_config && null != l.mute_config.end_time ? new Date(l.mute_config.end_time).getTime() : e.guild_muted_until,
                u = null != l.message_notifications ? v[l.message_notifications] : e.guild_message_notification_settings;
            return {
                guild_muted_until: c,
                guild_flags: null !== (t = l.flags) && void 0 !== t ? t : e.guild_flags,
                guild_is_muted: null !== (n = l.muted) && void 0 !== n ? n : e.guild_is_muted,
                guild_message_notification_settings: u,
                guild_suppress_roles: null !== (r = l.suppress_roles) && void 0 !== r ? r : e.guild_suppress_roles,
                guild_receive_mobile_push: null !== (i = l.mobile_push) && void 0 !== i ? i : e.guild_receive_mobile_push,
                guild_notify_highlights: null !== (o = l.notify_highlights) && void 0 !== o ? o : e.guild_notify_highlights,
                guild_suppress_everyone: null !== (a = l.suppress_everyone) && void 0 !== a ? a : e.guild_suppress_everyone,
                guild_scheduled_events_muted: null !== (s = l.mute_scheduled_events) && void 0 !== s ? s : e.guild_scheduled_events_muted
            };
        },
        h = p(n),
        g = p(I(e), t),
        E = y(h, g, 'RETURN_PREVIOUS_WHEN_CHANGED'),
        b = null !== (s = E('guild_flags')) && void 0 !== s ? s : 0,
        O = (null !== (d = g.guild_flags) && void 0 !== d ? d : 0) ^ b,
        S = 0 === (0, l.M1)(O, f.vc.OPT_IN_CHANNELS_OFF, f.vc.OPT_IN_CHANNELS_ON);
    r.ZP.trackWithMetadata(
        c.rMx.NOTIFICATION_SETTINGS_UPDATED,
        m(_({}, g, i.Z.getStats(e)), {
            location: a,
            guild_id: e,
            update_type: u.I.GUILD,
            label: o,
            guild_flags_old: E('guild_flags'),
            guild_is_muted_old: E('guild_is_muted'),
            guild_suppress_roles_old: E('guild_suppress_roles'),
            guild_notify_highlights_old: E('guild_notify_highlights'),
            guild_suppress_everyone_old: E('guild_suppress_everyone'),
            guild_receive_mobile_push_old: E('guild_receive_mobile_push'),
            guild_scheduled_events_muted_old: E('guild_scheduled_events_muted'),
            guild_message_notification_settings_old: E('guild_message_notification_settings'),
            is_opt_in_only_change: S
        })
    );
}
function y(e, t, n) {
    return (r) => {
        if ('RETURN_PREVIOUS_WHEN_CHANGED' === n) return e[r] !== t[r] ? e[r] : void 0;
    };
}
function O(e) {
    return null != e && null != e.end_time ? new Date(e.end_time).getTime() : null;
}
function S(e, t, n, s, d, p) {
    var h, g, E, b;
    let S = function (t) {
            var n, r;
            let i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                o = null !== (n = i.muted) && void 0 !== n ? n : null == t ? void 0 : t.channel_is_muted,
                a = null != i.message_notifications ? v[i.message_notifications] : null == t ? void 0 : t.channel_message_notification_settings,
                s = null == e ? null : !0 === o || null != a;
            return {
                channel_is_muted: o,
                channel_is_overridden: s,
                channel_flags: null !== (r = i.flags) && void 0 !== r ? r : null == t ? void 0 : t.channel_flags,
                channel_message_notification_settings: a,
                channel_muted_until: O(i.mute_config)
            };
        },
        I = S(s),
        T = S(N(e, t), n),
        A = y(I, T, 'RETURN_PREVIOUS_WHEN_CHANGED'),
        C = o.Z.getChannel(t),
        R = null !== (g = A('channel_flags')) && void 0 !== g ? g : 0,
        P = (null !== (E = T.channel_flags) && void 0 !== E ? E : 0) ^ R,
        w = 0 === (0, l.M1)(P, f.ic.FAVORITED, f.ic.OPT_IN_ENABLED),
        D = null !== (b = null === (h = a.Z.getLastMessage(t)) || void 0 === h ? void 0 : h.type) && void 0 !== b ? b : null;
    r.ZP.trackWithMetadata(
        c.rMx.NOTIFICATION_SETTINGS_UPDATED,
        m(_({}, T, i.Z.getStats(e)), {
            location: p,
            guild_id: e,
            channel_id: t,
            update_type: u.I.CHANNEL,
            label: d,
            parent_id: null != C ? C.parent_id : null,
            channel_flags_old: A('channel_flags'),
            channel_is_muted_old: A('channel_is_muted'),
            channel_muted_until_old: A('channel_muted_until'),
            channel_is_overridden_old: A('channel_is_overridden'),
            channel_message_notification_settings_old: A('channel_message_notification_settings'),
            is_opt_in_only_change: w,
            last_message_type: D
        })
    );
}
function I(e) {
    let t = s.ZP.isMuted(e),
        n = s.ZP.getMuteConfig(e);
    return {
        guild_suppress_everyone: s.ZP.isSuppressEveryoneEnabled(e),
        guild_suppress_roles: s.ZP.isSuppressRolesEnabled(e),
        guild_scheduled_events_muted: s.ZP.isMuteScheduledEventsEnabled(e),
        guild_is_muted: t,
        guild_muted_until: null != n && null != n.end_time ? new Date(n.end_time).getTime() : null,
        guild_receive_mobile_push: s.ZP.isMobilePushEnabled(e),
        guild_message_notification_settings: v[s.ZP.getMessageNotifications(e)],
        guild_notify_highlights: s.ZP.getNotifyHighlights(e),
        guild_flags: s.ZP.getGuildFlags(e)
    };
}
function T(e) {
    let t = new Map();
    return e.forEach((e) => t.set(e, I(e))), t;
}
function N(e, t) {
    let n = s.ZP.isChannelMuted(e, t),
        r = s.ZP.getChannelMuteConfig(e, t);
    return {
        channel_is_muted: n,
        channel_muted_until: null != r && null != r.end_time ? new Date(r.end_time).getTime() : null,
        channel_message_notification_settings: v[s.ZP.getChannelMessageNotifications(e, t)],
        channel_flags: s.ZP.getChannelIdFlags(e, t)
    };
}
function A(e, t) {
    let n = new Map();
    return t.forEach((t) => n.set(t, N(e, t))), n;
}
