n.d(t, {
    AE: () => l,
    JS: () => f,
    Qu: () => _,
    Ws: () => h,
    bk: () => p,
    ou: () => c,
    zi: () => d
});
var i = n(615287),
    r = n(77498),
    a = n(19780),
    s = n(626135),
    o = n(981631),
    l = (function (e) {
        return (e.OOP = 'oop'), (e.OOP_GAME = 'oop game'), (e.LEGACY = 'legacy'), (e.LEGACY_GAME = 'legacy game'), e;
    })({});
function u(e) {
    switch (e) {
        case 'oop':
        case 'oop game':
        default:
            return 'overlay toggled - global';
        case 'legacy':
        case 'legacy game':
            return 'overlay toggled - game';
    }
}
function c(e, t, a) {
    var l, c, d;
    let f = null != a ? r.Z.getDetectableGame(a) : null,
        { default: _ } = n(371651),
        p = null !== (l = null == _ ? void 0 : _.getMostRecentOverlayRenderMethod()) && void 0 !== l ? l : void 0,
        h = null != p ? i.gl[p] : void 0;
    s.default.track(o.rMx.OVERLAY_TOGGLED, {
        enabled: e,
        setting_type: u(t),
        client_setting_type: t,
        application_id: null !== (c = null == f ? void 0 : f.id) && void 0 !== c ? c : void 0,
        application_name: null !== (d = null == f ? void 0 : f.name) && void 0 !== d ? d : void 0,
        most_recent_overlay_render_method: h
    });
}
function d(e, t) {
    var n, i, r;
    let { locked: l, shownUserIds: u, liveUserIds: c, contentInventoryIds: d } = t;
    ((null !== (n = null == u ? void 0 : u.length) && void 0 !== n ? n : 0) !== 0 || (null !== (i = null == c ? void 0 : c.length) && void 0 !== i ? i : 0) !== 0 || (null !== (r = null == d ? void 0 : d.length) && void 0 !== r ? r : 0) !== 0) &&
        s.default.track(o.rMx.WIDGET_CONTENT_SHOWN, {
            overlay_locked: l,
            widget_type: e,
            shown_user_ids: u,
            live_user_ids: c,
            content_inventory_ids: d,
            media_session_id: a.Z.getMediaSessionId()
        });
}
function f(e, t) {
    let { pinned: n, opacity: i } = t;
    s.default.track(o.rMx.WIDGET_SETTING_UPDATED, {
        widget_type: e,
        pinned: n,
        opacity: i
    });
}
var _ = (function (e) {
        return (e.SCREEN_SHARE = 'screen share'), (e.CAMERA = 'camera'), (e.MICROPHONE = 'microphone'), (e.AUDIO = 'audio'), (e.VOICE = 'voice'), (e.CALL_BUTTON = 'call button'), (e.SOUNDBOARD = 'soundboard'), (e.GO_LIVE = 'go live'), (e.INVITE = 'invite'), (e.REDIRECT = 'redirect'), e;
    })({}),
    p = (function (e) {
        return (e.ENABLED = 'enabled'), (e.DISABLED = 'disabled'), (e.SETTINGS_OPENED = 'settings opened'), (e.PANEL_OPENED = 'panel opened'), (e.STREAM_PREVIEWED = 'stream previewed'), (e.INVITE_SENT = 'invite sent'), (e.JOIN_REQUEST_SENT = 'join request sent'), (e.PROFILE_OPENED = 'profile opened'), (e.GUILD_PROFILE_OPENED = 'guild profile opened'), (e.CHAT = 'chat'), e;
    })({});
function h(e, t) {
    let { type: n, value: i, userId: r } = t;
    s.default.track(o.rMx.WIDGET_INTERACTED, {
        widget_type: e,
        interaction_type: n,
        interaction_value: i,
        target_user_id: r,
        media_session_id: a.Z.getMediaSessionId()
    });
}
