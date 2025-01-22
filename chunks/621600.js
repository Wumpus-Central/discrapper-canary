r.d(n, {
    $R: function () {
        return E;
    },
    GA: function () {
        return T;
    },
    I: function () {
        return A;
    },
    UE: function () {
        return g;
    },
    Wq: function () {
        return v;
    },
    ZB: function () {
        return i;
    },
    jz: function () {
        return I;
    },
    rU: function () {
        return S;
    },
    sK: function () {
        return b;
    },
    wK: function () {
        return C;
    }
});
var i,
    a = r(789020);
var o = r(47120);
var s = r(367907),
    l = r(601992),
    u = r(592125),
    c = r(375954),
    d = r(9156);
r(626135);
var f = r(630388),
    p = r(981631),
    h = r(468788),
    _ = r(490897),
    m = r(526761);
!(function (e) {
    (e.ForumThreadsCreatedOn = 'enabled forum thread created notifs'), (e.ForumThreadsCreatedOff = 'disabled forum thread created notifs'), (e.SuppressEveryoneOn = 'enabled suppress everyone'), (e.SuppressEveryoneOff = 'disabled suppress everyone'), (e.SuppressRolesOn = 'enabled suppress roles'), (e.SuppressRolesOff = 'disabled suppress roles'), (e.HighlightsOn = 'enabled highlights'), (e.HighlightsOff = 'disabled highlights'), (e.MobilePushOn = 'enabled mobile push notifications'), (e.MobilePushOff = 'disabled mobile push notifications'), (e.UnreadsAll = 'unreads set to all messages'), (e.UnreadsMentions = 'unreads set to mentions'), (e.UnreadsDefault = 'unreads set to the default'), (e.NotificationsAll = 'notifications set to all messages'), (e.NotificationsMentions = 'notifications set to mentions'), (e.NotificationsNothing = 'notifications set to nothing'), (e.NotificationsDefault = 'notifications set to the default'), (e.PresetAll = 'notification preset set to all messages'), (e.PresetMentions = 'notification preset set to mentions'), (e.PresetNothing = 'notification preset set to nothing'), (e.PresetDefault = 'notification preset set to the default'), (e.OptedIn = 'opted in to entity'), (e.OptedOut = 'opted out from entity'), (e.Favorited = 'favorited'), (e.UnFavorited = 'unfavorited'), (e.Muted = 'muted'), (e.Unmuted = 'unmuted'), (e.MutedScheduledEvents = 'muted scheduled events'), (e.UnmutedScheduledEvents = 'unmuted scheduled events'), (e.OverrideCreated = 'channel override created'), (e.OverrideDeleted = 'channel override deleted'), (e.AnnouncementAutoEnable = 'announcement channels auto set to all messages');
})(i || (i = {}));
let g = {
        forumThreadsCreated: (e) => (e ? 'enabled forum thread created notifs' : 'disabled forum thread created notifs'),
        suppressEveryone: (e) => (e ? 'enabled suppress everyone' : 'disabled suppress everyone'),
        suppressRoles: (e) => (e ? 'enabled suppress roles' : 'disabled suppress roles'),
        highlights: (e) => (e ? 'enabled highlights' : 'disabled highlights'),
        mobilePush: (e) => (e ? 'enabled mobile push notifications' : 'disabled mobile push notifications'),
        optedIn: (e) => (e ? 'opted in to entity' : 'opted out from entity'),
        favorited: (e) => (e ? 'favorited' : 'unfavorited'),
        muted: (e) => (e ? 'muted' : 'unmuted'),
        mutedEvents: (e) => (e ? 'muted scheduled events' : 'unmuted scheduled events'),
        unreads: (e) => (e === _.i.ALL_MESSAGES ? 'unreads set to all messages' : e === _.i.ONLY_MENTIONS ? 'unreads set to mentions' : 'unreads set to the default'),
        notifications: (e) => (e === p.bL.ALL_MESSAGES ? 'notifications set to all messages' : e === p.bL.ONLY_MENTIONS ? 'notifications set to mentions' : e === p.bL.NO_MESSAGES ? 'notifications set to nothing' : 'notifications set to the default')
    },
    E = Object.freeze({
        [p.bL.ALL_MESSAGES]: 'All',
        [p.bL.ONLY_MENTIONS]: 'Mentions',
        [p.bL.NO_MESSAGES]: 'Nothing',
        [p.bL.NULL]: null
    });
function v(e, n, r, i, a) {
    var o, u;
    let c = function (e) {
            var n, r, i, a, o, s, l;
            let u = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                c = null != u.mute_config && null != u.mute_config.end_time ? new Date(u.mute_config.end_time).getTime() : e.guild_muted_until,
                d = null != u.message_notifications ? E[u.message_notifications] : e.guild_message_notification_settings;
            return {
                guild_muted_until: c,
                guild_flags: null !== (n = u.flags) && void 0 !== n ? n : e.guild_flags,
                guild_is_muted: null !== (r = u.muted) && void 0 !== r ? r : e.guild_is_muted,
                guild_message_notification_settings: d,
                guild_suppress_roles: null !== (i = u.suppress_roles) && void 0 !== i ? i : e.guild_suppress_roles,
                guild_receive_mobile_push: null !== (a = u.mobile_push) && void 0 !== a ? a : e.guild_receive_mobile_push,
                guild_notify_highlights: null !== (o = u.notify_highlights) && void 0 !== o ? o : e.guild_notify_highlights,
                guild_suppress_everyone: null !== (s = u.suppress_everyone) && void 0 !== s ? s : e.guild_suppress_everyone,
                guild_scheduled_events_muted: null !== (l = u.mute_scheduled_events) && void 0 !== l ? l : e.guild_scheduled_events_muted
            };
        },
        d = c(r),
        _ = c(T(e), n),
        g = y(d, _, 'RETURN_PREVIOUS_WHEN_CHANGED'),
        v = null !== (o = g('guild_flags')) && void 0 !== o ? o : 0,
        b = (null !== (u = _.guild_flags) && void 0 !== u ? u : 0) ^ v,
        I = 0 === (0, f.M1)(b, m.vc.OPT_IN_CHANNELS_OFF, m.vc.OPT_IN_CHANNELS_ON);
    s.ZP.trackWithMetadata(p.rMx.NOTIFICATION_SETTINGS_UPDATED, {
        ..._,
        ...l.Z.getStats(e),
        location: a,
        guild_id: e,
        update_type: h.I.GUILD,
        label: i,
        guild_flags_old: g('guild_flags'),
        guild_is_muted_old: g('guild_is_muted'),
        guild_suppress_roles_old: g('guild_suppress_roles'),
        guild_notify_highlights_old: g('guild_notify_highlights'),
        guild_suppress_everyone_old: g('guild_suppress_everyone'),
        guild_receive_mobile_push_old: g('guild_receive_mobile_push'),
        guild_scheduled_events_muted_old: g('guild_scheduled_events_muted'),
        guild_message_notification_settings_old: g('guild_message_notification_settings'),
        is_opt_in_only_change: I
    });
}
function y(e, n, r) {
    return (i) => {
        if ('RETURN_PREVIOUS_WHEN_CHANGED' === r) return e[i] !== n[i] ? e[i] : void 0;
    };
}
function b(e) {
    return null != e && null != e.end_time ? new Date(e.end_time).getTime() : null;
}
function I(e, n, r, i, a, o) {
    var d, _, g, v;
    let I = function (n) {
            var r, i;
            let a = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                o = null !== (r = a.muted) && void 0 !== r ? r : null == n ? void 0 : n.channel_is_muted,
                s = null != a.message_notifications ? E[a.message_notifications] : null == n ? void 0 : n.channel_message_notification_settings,
                l = null == e ? null : !0 === o || null != s;
            return {
                channel_is_muted: o,
                channel_is_overridden: l,
                channel_flags: null !== (i = a.flags) && void 0 !== i ? i : null == n ? void 0 : n.channel_flags,
                channel_message_notification_settings: s,
                channel_muted_until: b(a.mute_config)
            };
        },
        T = I(i),
        S = I(A(e, n), r),
        C = y(T, S, 'RETURN_PREVIOUS_WHEN_CHANGED'),
        N = u.Z.getChannel(n),
        R = null !== (_ = C('channel_flags')) && void 0 !== _ ? _ : 0,
        O = (null !== (g = S.channel_flags) && void 0 !== g ? g : 0) ^ R,
        D = 0 === (0, f.M1)(O, m.ic.FAVORITED, m.ic.OPT_IN_ENABLED),
        x = null !== (v = null === (d = c.Z.getLastMessage(n)) || void 0 === d ? void 0 : d.type) && void 0 !== v ? v : null;
    s.ZP.trackWithMetadata(p.rMx.NOTIFICATION_SETTINGS_UPDATED, {
        ...S,
        ...l.Z.getStats(e),
        location: o,
        guild_id: e,
        channel_id: n,
        update_type: h.I.CHANNEL,
        label: a,
        parent_id: null != N ? N.parent_id : null,
        channel_flags_old: C('channel_flags'),
        channel_is_muted_old: C('channel_is_muted'),
        channel_muted_until_old: C('channel_muted_until'),
        channel_is_overridden_old: C('channel_is_overridden'),
        channel_message_notification_settings_old: C('channel_message_notification_settings'),
        is_opt_in_only_change: D,
        last_message_type: x
    });
}
function T(e) {
    let n = d.ZP.isMuted(e),
        r = d.ZP.getMuteConfig(e);
    return {
        guild_suppress_everyone: d.ZP.isSuppressEveryoneEnabled(e),
        guild_suppress_roles: d.ZP.isSuppressRolesEnabled(e),
        guild_scheduled_events_muted: d.ZP.isMuteScheduledEventsEnabled(e),
        guild_is_muted: n,
        guild_muted_until: null != r && null != r.end_time ? new Date(r.end_time).getTime() : null,
        guild_receive_mobile_push: d.ZP.isMobilePushEnabled(e),
        guild_message_notification_settings: E[d.ZP.getMessageNotifications(e)],
        guild_notify_highlights: d.ZP.getNotifyHighlights(e),
        guild_flags: d.ZP.getGuildFlags(e)
    };
}
function S(e) {
    let n = new Map();
    return e.forEach((e) => n.set(e, T(e))), n;
}
function A(e, n) {
    let r = d.ZP.isChannelMuted(e, n),
        i = d.ZP.getChannelMuteConfig(e, n);
    return {
        channel_is_muted: r,
        channel_muted_until: null != i && null != i.end_time ? new Date(i.end_time).getTime() : null,
        channel_message_notification_settings: E[d.ZP.getChannelMessageNotifications(e, n)],
        channel_flags: d.ZP.getChannelIdFlags(e, n)
    };
}
function C(e, n) {
    let r = new Map();
    return n.forEach((n) => r.set(n, A(e, n))), r;
}
