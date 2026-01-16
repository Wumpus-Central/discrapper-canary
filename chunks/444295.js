n.d(t, {
    JS: () => h,
    OverlayToggledClientSettingType: () => u,
    Qu: () => m,
    Ws: () => E,
    bk: () => g,
    ee: () => p,
    ou: () => f,
    zi: () => _,
}),
    n(388685);
var r = n(473749),
    i = n(579806),
    a = n(404577),
    o = n(19780),
    s = n(626135),
    l = n(837268),
    c = n(981631),
    u = (function (e) {
        return (e.OOP = "oop"), (e.OOP_GAME = "oop game"), (e.LEGACY = "legacy"), (e.LEGACY_GAME = "legacy game"), e;
    })({});
function d(e) {
    switch (e) {
        case "oop":
        case "oop game":
        default:
            return "overlay toggled - global";
        case "legacy":
        case "legacy game":
            return "overlay toggled - game";
    }
}
async function f(e, t, r) {
    var o, u, f, p, _, h;
    let m = null != r ? a.Z.getDetectableGame(r) : null,
        { default: g } = n(371651),
        E = null != (f = null == g ? void 0 : g.getMostRecentOverlayRenderMethod()) ? f : void 0,
        b = null != E ? l.gl[E] : void 0;
    __OVERLAY__ && (b = l.gl[l.gl.Hook]),
        s.default.track(c.rMx.OVERLAY_TOGGLED, {
            enabled: e,
            setting_type: d(t),
            client_setting_type: t,
            application_id: null != (p = null == m ? void 0 : m.id) ? p : void 0,
            application_name: null != (_ = null == m ? void 0 : m.name) ? _ : void 0,
            most_recent_overlay_render_method: b,
            hardware_display_count:
                null !=
                (h = await (null === i.Z ||
                void 0 === i.Z ||
                null == (u = i.Z.hardware) ||
                null == (o = u.getDisplayCount)
                    ? void 0
                    : o.call(u)))
                    ? h
                    : null,
        });
}
function p(e, t) {
    let [n, i] = r.useState(e()),
        a = r.useRef(e);
    return (
        r.useEffect(() => {
            a.current = e;
        }, [e]),
        r.useEffect(() => {
            i((e) => {
                let t = a.current();
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
    let { locked: a, shownUserIds: l, liveUserIds: u, contentInventoryIds: d } = t;
    ((null != (n = null == l ? void 0 : l.length) ? n : 0) !== 0 ||
        (null != (r = null == u ? void 0 : u.length) ? r : 0) !== 0 ||
        (null != (i = null == d ? void 0 : d.length) ? i : 0) !== 0) &&
        s.default.track(c.rMx.WIDGET_CONTENT_SHOWN, {
            overlay_locked: a,
            widget_type: e,
            shown_user_ids: l,
            live_user_ids: u,
            content_inventory_ids: d,
            media_session_id: o.Z.getMediaSessionId(),
        });
}
function h(e, t) {
    let { pinned: n, opacity: r } = t;
    s.default.track(c.rMx.WIDGET_SETTING_UPDATED, {
        widget_type: e,
        pinned: n,
        opacity: r,
    });
}
var m = (function (e) {
        return (
            (e.SCREEN_SHARE = "screen share"),
            (e.CAMERA = "camera"),
            (e.MICROPHONE = "microphone"),
            (e.AUDIO = "audio"),
            (e.VOICE = "voice"),
            (e.CALL_BUTTON = "call button"),
            (e.SOUNDBOARD = "soundboard"),
            (e.GO_LIVE = "go live"),
            (e.INVITE = "invite"),
            (e.REDIRECT = "redirect"),
            (e.FRIEND_LIST = "friend list"),
            (e.FRIEND_REQUEST = "friend request"),
            (e.KEYBIND_HINT = "keybind hint"),
            e
        );
    })({}),
    g = (function (e) {
        return (
            (e.ENABLED = "enabled"),
            (e.DISABLED = "disabled"),
            (e.SETTINGS_OPENED = "settings opened"),
            (e.PANEL_OPENED = "panel opened"),
            (e.OVERLAY_UNLOCKED = "overlay unlocked"),
            (e.STREAM_PREVIEWED = "stream previewed"),
            (e.INVITE_SENT = "invite sent"),
            (e.JOIN_REQUEST_SENT = "join request sent"),
            (e.PROFILE_OPENED = "profile opened"),
            (e.GUILD_PROFILE_OPENED = "guild profile opened"),
            (e.CHAT = "chat"),
            (e.ACCEPT_REQUEST = "accept request"),
            (e.DECLINE_REQUEST = "decline request"),
            (e.CANCEL_REQUEST = "cancel request"),
            (e.SEND_REQUEST = "send request"),
            (e.SEARCH = "search"),
            (e.SETTING_ADJUSTED = "setting adjusted"),
            e
        );
    })({});
function E(e, t) {
    let { type: n, value: r, userId: i, secondaryValue: a } = t;
    s.default.track(c.rMx.WIDGET_INTERACTED, {
        widget_type: e,
        interaction_type: n,
        interaction_value: r,
        interaction_secondary_value: a,
        target_user_id: i,
        media_session_id: o.Z.getMediaSessionId(),
    });
}
