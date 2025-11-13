n.d(t, {
    Q: () => E,
    t: () => g,
});
var r = n(579806),
    i = n(594190),
    a = n(837268),
    o = n(371651),
    s = n(388627),
    l = n(361291),
    c = n(131951),
    u = n(19780),
    d = n(449224),
    f = n(626135),
    _ = n(367907),
    p = n(981631);
function h(e, t, n) {
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
function m(e) {
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
                h(e, t, n[t]);
            });
    }
    return e;
}
function g() {
    let e,
        t,
        n,
        r,
        a,
        o = c.Z.getGoLiveSource(),
        s = l.Z.getState().preset;
    if (null != o && ((e = o.quality.resolution), (t = o.quality.frameRate), null != o.desktopSource)) {
        var u, d;
        n = o.desktopSource.soundshareSession;
        let e = null != o.desktopSource.sourcePid ? i.ZP.getGameForPID(o.desktopSource.sourcePid) : null;
        (r = null != (u = null == e ? void 0 : e.name) ? u : null),
            (a = null != (d = null == e ? void 0 : e.id) ? d : null);
    }
    return {
        video_input_resolution: e,
        video_input_frame_rate: t,
        soundshare_session: n,
        share_game_name: r,
        share_game_id: a,
        quality_preset: s,
    };
}
async function E(e, t) {
    var n, l, c, h, g, E;
    let b = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        y = __OVERLAY__ ? d.Z.getGame() : (0, s.pL)(),
        O = i.ZP.getRunningGames().find((e) => e.name === (null == y ? void 0 : y.name)),
        v = (null == O ? void 0 : O.pid) != null ? o.default.getTrackedGameByPid(null == O ? void 0 : O.pid) : null,
        I = null != (c = null == v ? void 0 : v.source) ? c : null,
        T =
            null !=
            (g =
                null != (h = null == v ? void 0 : v.overlayMethod)
                    ? h
                    : o.default.getRenderMethod(null == O ? void 0 : O.pid))
                ? g
                : null,
        S = {
            overlay_game_source: I,
            overlay_game_name: null != y ? y.name : "Unknown Game",
            overlay_app_id: null != y ? y.id : null,
            overlay_render_method: null != T ? a.gl[T] : null,
            media_session_id: u.Z.getMediaSessionId(),
            overlay_game_elevated: null == O ? void 0 : O.elevated,
            input_service_initialized: i.ZP.isSystemServiceInitialized("input-service"),
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
        };
    switch ((__OVERLAY__ && (S.overlay_render_method = a.gl[a.gl.Hook]), (t = m({}, S, t)), e)) {
        case p.rMx.VOICE_CHANNEL_SELECTED:
        case p.rMx.SETTINGS_PANE_VIEWED:
        case p.rMx.GUILD_VIEWED:
        case p.rMx.CHANNEL_OPENED:
            return (0, _.yw)(e, t, b);
        default:
            return f.default.track(e, t, { flush: b });
    }
}
