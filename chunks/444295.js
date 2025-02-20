n.d(t, {
    AE: () => l,
    JS: () => f,
    Qu: () => p,
    Ws: () => h,
    bk: () => _,
    ou: () => u,
    zi: () => d
});
var r = n(615287),
    i = n(77498),
    o = n(19780),
    a = n(626135),
    s = n(981631),
    l = (function (e) {
        return (e.OOP = 'oop'), (e.OOP_GAME = 'oop game'), (e.LEGACY = 'legacy'), (e.LEGACY_GAME = 'legacy game'), e;
    })({});
function c(e) {
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
function u(e, t, o) {
    var l, u, d;
    let f = null != o ? i.Z.getDetectableGame(o) : null,
        { default: p } = n(371651),
        _ = null !== (l = null == p ? void 0 : p.getMostRecentOverlayRenderMethod()) && void 0 !== l ? l : void 0,
        h = null != _ ? r.gl[_] : void 0;
    a.default.track(s.rMx.OVERLAY_TOGGLED, {
        enabled: e,
        setting_type: c(t),
        client_setting_type: t,
        application_id: null !== (u = null == f ? void 0 : f.id) && void 0 !== u ? u : void 0,
        application_name: null !== (d = null == f ? void 0 : f.name) && void 0 !== d ? d : void 0,
        most_recent_overlay_render_method: h
    });
}
function d(e, t) {
    var n, r, i;
    let { locked: l, shownUserIds: c, liveUserIds: u, contentInventoryIds: d } = t;
    ((null !== (n = null == c ? void 0 : c.length) && void 0 !== n ? n : 0) !== 0 || (null !== (r = null == u ? void 0 : u.length) && void 0 !== r ? r : 0) !== 0 || (null !== (i = null == d ? void 0 : d.length) && void 0 !== i ? i : 0) !== 0) &&
        a.default.track(s.rMx.WIDGET_CONTENT_SHOWN, {
            overlay_locked: l,
            widget_type: e,
            shown_user_ids: c,
            live_user_ids: u,
            content_inventory_ids: d,
            media_session_id: o.Z.getMediaSessionId()
        });
}
function f(e, t) {
    let { pinned: n, opacity: r } = t;
    a.default.track(s.rMx.WIDGET_SETTING_UPDATED, {
        widget_type: e,
        pinned: n,
        opacity: r
    });
}
var p = (function (e) {
        return (e.SCREEN_SHARE = 'screen share'), (e.CAMERA = 'camera'), (e.MICROPHONE = 'microphone'), (e.AUDIO = 'audio'), (e.VOICE = 'voice'), (e.CALL_BUTTON = 'call button'), (e.SOUNDBOARD = 'soundboard'), (e.GO_LIVE = 'go live'), (e.INVITE = 'invite'), (e.REDIRECT = 'redirect'), e;
    })({}),
    _ = (function (e) {
        return (e.ENABLED = 'enabled'), (e.DISABLED = 'disabled'), (e.SETTINGS_OPENED = 'settings opened'), (e.PANEL_OPENED = 'panel opened'), (e.STREAM_PREVIEWED = 'stream previewed'), (e.INVITE_SENT = 'invite sent'), (e.JOIN_REQUEST_SENT = 'join request sent'), (e.PROFILE_OPENED = 'profile opened'), (e.GUILD_PROFILE_OPENED = 'guild profile opened'), (e.CHAT = 'chat'), e;
    })({});
function h(e, t) {
    let { type: n, value: r, userId: i } = t;
    a.default.track(s.rMx.WIDGET_INTERACTED, {
        widget_type: e,
        interaction_type: n,
        interaction_value: r,
        target_user_id: i,
        media_session_id: o.Z.getMediaSessionId()
    });
}
