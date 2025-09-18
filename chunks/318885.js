n.d(t, {
    Q: () => g,
    t: () => m,
});
var r = n(579806),
    i = n(594190),
    a = n(837268),
    o = n(371651),
    s = n(388627),
    l = n(131951),
    c = n(19780),
    u = n(449224),
    d = n(626135),
    f = n(367907),
    _ = n(981631);
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
function h(e) {
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
function m() {
    let e,
        t,
        n,
        r,
        a,
        o = l.Z.getGoLiveSource();
    if (null != o && ((e = o.quality.resolution), (t = o.quality.frameRate), null != o.desktopSource)) {
        var s, c;
        n = o.desktopSource.soundshareSession;
        let e = null != o.desktopSource.sourcePid ? i.ZP.getGameForPID(o.desktopSource.sourcePid) : null;
        (r = null != (s = null == e ? void 0 : e.name) ? s : null),
            (a = null != (c = null == e ? void 0 : e.id) ? c : null);
    }
    return {
        video_input_resolution: e,
        video_input_frame_rate: t,
        soundshare_session: n,
        share_game_name: r,
        share_game_id: a,
    };
}
async function g(e, t) {
    var n, l, p, m, g, E;
    let b = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        y = __OVERLAY__ ? u.Z.getGame() : (0, s.pL)(),
        O = i.ZP.getRunningGames().find((e) => e.name === (null == y ? void 0 : y.name)),
        v = (null == O ? void 0 : O.pid) != null ? o.default.getTrackedGameByPid(null == O ? void 0 : O.pid) : null,
        I = null != (p = null == v ? void 0 : v.source) ? p : null,
        T =
            null !=
            (g =
                null != (m = null == v ? void 0 : v.overlayMethod)
                    ? m
                    : o.default.getRenderMethod(null == O ? void 0 : O.pid))
                ? g
                : null;
    switch (
        ((t = h(
            {},
            {
                overlay_game_source: I,
                overlay_game_name: null != y ? y.name : "Unknown Game",
                overlay_app_id: null != y ? y.id : null,
                overlay_render_method: null != T ? a.gl[T] : null,
                media_session_id: c.Z.getMediaSessionId(),
                overlay_game_elevated: null == O ? void 0 : O.elevated,
                input_service_initialized: i.ZP.isInputServiceInitialized(),
                hardware_display_count:
                    null !=
                    (E = await (null === r.Z ||
                    void 0 === r.Z ||
                    null == (l = r.Z.hardware) ||
                    null == (n = l.getDisplayCount)
                        ? void 0
                        : n.call(l)))
                        ? E
                        : null,
            },
            t,
        )),
        e)
    ) {
        case _.rMx.VOICE_CHANNEL_SELECTED:
        case _.rMx.SETTINGS_PANE_VIEWED:
        case _.rMx.GUILD_VIEWED:
        case _.rMx.CHANNEL_OPENED:
            return (0, f.yw)(e, t, b);
        default:
            return d.default.track(e, t, { flush: b });
    }
}
