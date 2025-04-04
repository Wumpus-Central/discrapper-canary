n.d(t, {
    AE: () => c,
    JS: () => p,
    Qu: () => h,
    Ws: () => g,
    bk: () => m,
    ee: () => f,
    ou: () => d,
    zi: () => _
}),
    n(47120);
var r = n(192379),
    i = n(615287),
    o = n(77498),
    a = n(19780),
    s = n(626135),
    l = n(981631),
    c = (function (e) {
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
function d(e, t, r) {
    var a, c, d;
    let f = null != r ? o.Z.getDetectableGame(r) : null,
        { default: _ } = n(371651),
        p = null != (a = null == _ ? void 0 : _.getMostRecentOverlayRenderMethod()) ? a : void 0,
        h = null != p ? i.gl[p] : void 0;
    s.default.track(l.rMx.OVERLAY_TOGGLED, {
        enabled: e,
        setting_type: u(t),
        client_setting_type: t,
        application_id: null != (c = null == f ? void 0 : f.id) ? c : void 0,
        application_name: null != (d = null == f ? void 0 : f.name) ? d : void 0,
        most_recent_overlay_render_method: h
    });
}
function f(e, t) {
    let [n, i] = r.useState(e()),
        o = r.useRef(e);
    return (
        r.useEffect(() => {
            o.current = e;
        }, [e]),
        r.useEffect(() => {
            i((e) => {
                let t = o.current();
                if (e.size > t.size || e.size < t.size) return t;
                for (let n of e) if (!t.has(n)) return t;
                for (let n of t) if (!e.has(n)) return t;
                return e;
            });
        }, t),
        n
    );
}
function _(e, t) {
    var n, r, i;
    let { locked: o, shownUserIds: c, liveUserIds: u, contentInventoryIds: d } = t;
    ((null != (n = null == c ? void 0 : c.length) ? n : 0) !== 0 || (null != (r = null == u ? void 0 : u.length) ? r : 0) !== 0 || (null != (i = null == d ? void 0 : d.length) ? i : 0) !== 0) &&
        s.default.track(l.rMx.WIDGET_CONTENT_SHOWN, {
            overlay_locked: o,
            widget_type: e,
            shown_user_ids: c,
            live_user_ids: u,
            content_inventory_ids: d,
            media_session_id: a.ZP.getMediaSessionId()
        });
}
function p(e, t) {
    let { pinned: n, opacity: r } = t;
    s.default.track(l.rMx.WIDGET_SETTING_UPDATED, {
        widget_type: e,
        pinned: n,
        opacity: r
    });
}
var h = (function (e) {
        return (e.SCREEN_SHARE = 'screen share'), (e.CAMERA = 'camera'), (e.MICROPHONE = 'microphone'), (e.AUDIO = 'audio'), (e.VOICE = 'voice'), (e.CALL_BUTTON = 'call button'), (e.SOUNDBOARD = 'soundboard'), (e.GO_LIVE = 'go live'), (e.INVITE = 'invite'), (e.REDIRECT = 'redirect'), e;
    })({}),
    m = (function (e) {
        return (e.ENABLED = 'enabled'), (e.DISABLED = 'disabled'), (e.SETTINGS_OPENED = 'settings opened'), (e.PANEL_OPENED = 'panel opened'), (e.STREAM_PREVIEWED = 'stream previewed'), (e.INVITE_SENT = 'invite sent'), (e.JOIN_REQUEST_SENT = 'join request sent'), (e.PROFILE_OPENED = 'profile opened'), (e.GUILD_PROFILE_OPENED = 'guild profile opened'), (e.CHAT = 'chat'), e;
    })({});
function g(e, t) {
    let { type: n, value: r, userId: i } = t;
    s.default.track(l.rMx.WIDGET_INTERACTED, {
        widget_type: e,
        interaction_type: n,
        interaction_value: r,
        target_user_id: i,
        media_session_id: a.ZP.getMediaSessionId()
    });
}
