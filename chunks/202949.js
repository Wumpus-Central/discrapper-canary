n.d(t, { Q: () => f, z: () => S });
var i = n(735438),
    s = n.n(i),
    l = n(311907),
    a = n(93465),
    r = n(589051),
    o = n(592598),
    d = n(532624),
    c = n(242286),
    u = n(256415),
    m = n(954571),
    _ = n(350535),
    g = n(780964),
    x = n(652215),
    A = n(672396),
    h = n(985018);
let p = T(null);
function f() {
    var e;
    let t = T(p);
    (e = p),
        s().isEqual(s().omit(t, "old_enabled"), s().omit(e, "old_enabled")) ||
            (m.default.track(x.HAw.OVERLAY_SETTINGS_UPDATED, { ...t }), (p = t));
}
function T(e) {
    let t = u.default.getNotificationPositionMode(),
        n = t !== x.G6Q.DISABLED,
        i = d.Ay.getOverlayKeybind(),
        s = d.Ay.getOverlayChatKeybind();
    return {
        enabled: c.default.enabled,
        notifications_enabled: n,
        notifications_position: n ? t : null,
        text_notifications_mode: o.A.isNotificationDisabled(A.KS.TextChat) ? "DISABLED" : "ENABLED",
        hotkey: null != i ? (0, _.dI)(i.shortcut) : null,
        text_activation_hotkey: null != s ? (0, _.dI)(s.shortcut) : null,
        text_opacity_slider: u.default.getTextWidgetOpacity(),
        old_enabled: e?.enabled ?? c.default.enabled,
    };
}
function S(e) {
    return [
        {
            title: h.t.eVE4LX,
            description: h.t["72WNqk"],
            disabledSetting: a.M.TEXT_CHAT,
            key: g.X.OVERLAY_NOTIFICATIONS_TEXT_CHAT,
        },
        {
            title: h.t.oifnSh,
            description: h.t.bgU5r0,
            disabledSetting: a.M.WELCOME_GENERAL,
            key: g.X.OVERLAY_NOTIFICATIONS_WELCOME,
        },
        {
            title: h.t.hqsZJW,
            description: h.t.kHjdqc,
            disabledSetting: a.M.GO_LIVE_NUDGE,
            key: g.X.OVERLAY_NOTIFICATIONS_GO_LIVE,
        },
        {
            title: h.t.sop3rn,
            description: h.t.pjgffc,
            disabledSetting: a.M.GAME_ACTIVITY,
            key: g.X.OVERLAY_NOTIFICATIONS_GAME_ACTIVITY,
        },
        {
            title: h.t["2QVhbb"],
            description: h.t.wQ4ilB,
            disabledSetting: a.M.NOW_PLAYING,
            key: g.X.OVERLAY_NOTIFICATIONS_NOW_PLAYING,
        },
        e && {
            title: h.t.giM9fA,
            description: h.t.EhAfWj,
            disabledSetting: a.M.NOW_PLAYING_DIFFERENT_GAMES,
            key: g.X.OVERLAY_NOTIFICATIONS_NOW_PLAYING_DIFFERENT_GAMES,
            usePredicate: () => {
                let { showNowPlayingForDifferentGames: e } = (0, r.M8)(
                        "OverlayV3NowPlayingDifferentGamesNotificationSetting",
                    ),
                    t = (0, l.bG)([o.A], () => o.A.isNotificationDisabledBySetting(a.M.NOW_PLAYING));
                return !!e && !t;
            },
        },
    ]
        .filter((e) => !1 !== e)
        .filter(Boolean);
}
