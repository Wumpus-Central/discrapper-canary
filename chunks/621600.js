n.d(t, {
    $R: () => h,
    GA: () => y,
    I: () => T,
    UE: () => p,
    Wq: () => m,
    ZB: () => _,
    jz: () => v,
    rU: () => I,
    sK: () => E,
    wK: () => b
}),
    n(789020),
    n(47120);
var i = n(367907),
    r = n(601992),
    a = n(592125),
    s = n(375954),
    o = n(9156);
n(626135);
var l = n(630388),
    u = n(981631),
    c = n(468788),
    d = n(490897),
    f = n(526761),
    _ = (function (e) {
        return (e.ForumThreadsCreatedOn = 'enabled forum thread created notifs'), (e.ForumThreadsCreatedOff = 'disabled forum thread created notifs'), (e.SuppressEveryoneOn = 'enabled suppress everyone'), (e.SuppressEveryoneOff = 'disabled suppress everyone'), (e.SuppressRolesOn = 'enabled suppress roles'), (e.SuppressRolesOff = 'disabled suppress roles'), (e.HighlightsOn = 'enabled highlights'), (e.HighlightsOff = 'disabled highlights'), (e.MobilePushOn = 'enabled mobile push notifications'), (e.MobilePushOff = 'disabled mobile push notifications'), (e.UnreadsAll = 'unreads set to all messages'), (e.UnreadsMentions = 'unreads set to mentions'), (e.UnreadsDefault = 'unreads set to the default'), (e.NotificationsAll = 'notifications set to all messages'), (e.NotificationsMentions = 'notifications set to mentions'), (e.NotificationsNothing = 'notifications set to nothing'), (e.NotificationsDefault = 'notifications set to the default'), (e.PresetAll = 'notification preset set to all messages'), (e.PresetMentions = 'notification preset set to mentions'), (e.PresetNothing = 'notification preset set to nothing'), (e.PresetDefault = 'notification preset set to the default'), (e.OptedIn = 'opted in to entity'), (e.OptedOut = 'opted out from entity'), (e.Favorited = 'favorited'), (e.UnFavorited = 'unfavorited'), (e.Muted = 'muted'), (e.Unmuted = 'unmuted'), (e.MutedScheduledEvents = 'muted scheduled events'), (e.UnmutedScheduledEvents = 'unmuted scheduled events'), (e.OverrideCreated = 'channel override created'), (e.OverrideDeleted = 'channel override deleted'), (e.AnnouncementAutoEnable = 'announcement channels auto set to all messages'), e;
    })({});
let p = {
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
        notifications: (e) => (e === u.bL.ALL_MESSAGES ? 'notifications set to all messages' : e === u.bL.ONLY_MENTIONS ? 'notifications set to mentions' : e === u.bL.NO_MESSAGES ? 'notifications set to nothing' : 'notifications set to the default')
    },
    h = Object.freeze({
        [u.bL.ALL_MESSAGES]: 'All',
        [u.bL.ONLY_MENTIONS]: 'Mentions',
        [u.bL.NO_MESSAGES]: 'Nothing',
        [u.bL.NULL]: null
    });
function m(e, t, n, a, s) {
    var o, d;
    let _ = function (e) {
            var t, n, i, r, a, s, o;
            let l = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                u = null != l.mute_config && null != l.mute_config.end_time ? new Date(l.mute_config.end_time).getTime() : e.guild_muted_until,
                c = null != l.message_notifications ? h[l.message_notifications] : e.guild_message_notification_settings;
            return {
                guild_muted_until: u,
                guild_flags: null !== (t = l.flags) && void 0 !== t ? t : e.guild_flags,
                guild_is_muted: null !== (n = l.muted) && void 0 !== n ? n : e.guild_is_muted,
                guild_message_notification_settings: c,
                guild_suppress_roles: null !== (i = l.suppress_roles) && void 0 !== i ? i : e.guild_suppress_roles,
                guild_receive_mobile_push: null !== (r = l.mobile_push) && void 0 !== r ? r : e.guild_receive_mobile_push,
                guild_notify_highlights: null !== (a = l.notify_highlights) && void 0 !== a ? a : e.guild_notify_highlights,
                guild_suppress_everyone: null !== (s = l.suppress_everyone) && void 0 !== s ? s : e.guild_suppress_everyone,
                guild_scheduled_events_muted: null !== (o = l.mute_scheduled_events) && void 0 !== o ? o : e.guild_scheduled_events_muted
            };
        },
        p = _(n),
        m = _(y(e), t),
        E = g(p, m, 'RETURN_PREVIOUS_WHEN_CHANGED'),
        v = null !== (o = E('guild_flags')) && void 0 !== o ? o : 0,
        I = (null !== (d = m.guild_flags) && void 0 !== d ? d : 0) ^ v,
        T = 0 === (0, l.M1)(I, f.vc.OPT_IN_CHANNELS_OFF, f.vc.OPT_IN_CHANNELS_ON);
    i.ZP.trackWithMetadata(u.rMx.NOTIFICATION_SETTINGS_UPDATED, {
        ...m,
        ...r.Z.getStats(e),
        location: s,
        guild_id: e,
        update_type: c.I.GUILD,
        label: a,
        guild_flags_old: E('guild_flags'),
        guild_is_muted_old: E('guild_is_muted'),
        guild_suppress_roles_old: E('guild_suppress_roles'),
        guild_notify_highlights_old: E('guild_notify_highlights'),
        guild_suppress_everyone_old: E('guild_suppress_everyone'),
        guild_receive_mobile_push_old: E('guild_receive_mobile_push'),
        guild_scheduled_events_muted_old: E('guild_scheduled_events_muted'),
        guild_message_notification_settings_old: E('guild_message_notification_settings'),
        is_opt_in_only_change: T
    });
}
function g(e, t, n) {
    return (i) => {
        if ('RETURN_PREVIOUS_WHEN_CHANGED' === n) return e[i] !== t[i] ? e[i] : void 0;
    };
}
function E(e) {
    return null != e && null != e.end_time ? new Date(e.end_time).getTime() : null;
}
function v(e, t, n, o, d, _) {
    var p, m, v, y;
    let I = function (t) {
            var n, i;
            let r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                a = null !== (n = r.muted) && void 0 !== n ? n : null == t ? void 0 : t.channel_is_muted,
                s = null != r.message_notifications ? h[r.message_notifications] : null == t ? void 0 : t.channel_message_notification_settings,
                o = null == e ? null : !0 === a || null != s;
            return {
                channel_is_muted: a,
                channel_is_overridden: o,
                channel_flags: null !== (i = r.flags) && void 0 !== i ? i : null == t ? void 0 : t.channel_flags,
                channel_message_notification_settings: s,
                channel_muted_until: E(r.mute_config)
            };
        },
        b = I(o),
        S = I(T(e, t), n),
        A = g(b, S, 'RETURN_PREVIOUS_WHEN_CHANGED'),
        N = a.Z.getChannel(t),
        C = null !== (m = A('channel_flags')) && void 0 !== m ? m : 0,
        R = (null !== (v = S.channel_flags) && void 0 !== v ? v : 0) ^ C,
        O = 0 === (0, l.M1)(R, f.ic.FAVORITED, f.ic.OPT_IN_ENABLED),
        D = null !== (y = null === (p = s.Z.getLastMessage(t)) || void 0 === p ? void 0 : p.type) && void 0 !== y ? y : null;
    i.ZP.trackWithMetadata(u.rMx.NOTIFICATION_SETTINGS_UPDATED, {
        ...S,
        ...r.Z.getStats(e),
        location: _,
        guild_id: e,
        channel_id: t,
        update_type: c.I.CHANNEL,
        label: d,
        parent_id: null != N ? N.parent_id : null,
        channel_flags_old: A('channel_flags'),
        channel_is_muted_old: A('channel_is_muted'),
        channel_muted_until_old: A('channel_muted_until'),
        channel_is_overridden_old: A('channel_is_overridden'),
        channel_message_notification_settings_old: A('channel_message_notification_settings'),
        is_opt_in_only_change: O,
        last_message_type: D
    });
}
function y(e) {
    let t = o.ZP.isMuted(e),
        n = o.ZP.getMuteConfig(e);
    return {
        guild_suppress_everyone: o.ZP.isSuppressEveryoneEnabled(e),
        guild_suppress_roles: o.ZP.isSuppressRolesEnabled(e),
        guild_scheduled_events_muted: o.ZP.isMuteScheduledEventsEnabled(e),
        guild_is_muted: t,
        guild_muted_until: null != n && null != n.end_time ? new Date(n.end_time).getTime() : null,
        guild_receive_mobile_push: o.ZP.isMobilePushEnabled(e),
        guild_message_notification_settings: h[o.ZP.getMessageNotifications(e)],
        guild_notify_highlights: o.ZP.getNotifyHighlights(e),
        guild_flags: o.ZP.getGuildFlags(e)
    };
}
function I(e) {
    let t = new Map();
    return e.forEach((e) => t.set(e, y(e))), t;
}
function T(e, t) {
    let n = o.ZP.isChannelMuted(e, t),
        i = o.ZP.getChannelMuteConfig(e, t);
    return {
        channel_is_muted: n,
        channel_muted_until: null != i && null != i.end_time ? new Date(i.end_time).getTime() : null,
        channel_message_notification_settings: h[o.ZP.getChannelMessageNotifications(e, t)],
        channel_flags: o.ZP.getChannelIdFlags(e, t)
    };
}
function b(e, t) {
    let n = new Map();
    return t.forEach((t) => n.set(t, T(e, t))), n;
}
