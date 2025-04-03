n.d(t, {
    Q: () => m,
    t: () => h
});
var r = n(615287),
    i = n(594190),
    o = n(371651),
    a = n(388627),
    s = n(131951),
    l = n(19780),
    c = n(449224),
    u = n(626135),
    d = n(367907),
    f = n(981631);
function _(e, t, n) {
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
function p(e) {
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
                _(e, t, n[t]);
            });
    }
    return e;
}
function h() {
    let e,
        t,
        n,
        r,
        o,
        a = s.Z.getGoLiveSource();
    if (null != a && ((e = a.quality.resolution), (t = a.quality.frameRate), null != a.desktopSource)) {
        var l, c;
        n = a.desktopSource.soundshareSession;
        let e = null != a.desktopSource.sourcePid ? i.ZP.getGameForPID(a.desktopSource.sourcePid) : null;
        (r = null != (l = null == e ? void 0 : e.name) ? l : null), (o = null != (c = null == e ? void 0 : e.id) ? c : null);
    }
    return {
        video_input_resolution: e,
        video_input_frame_rate: t,
        soundshare_session: n,
        share_game_name: r,
        share_game_id: o
    };
}
function m(e, t) {
    var n;
    let s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        _ = __OVERLAY__ ? c.Z.getGame() : (0, a.pL)(),
        h = i.ZP.getRunningGames().find((e) => e.name === (null == _ ? void 0 : _.name)),
        m = null != (n = o.default.getRenderMethod(null == h ? void 0 : h.pid)) ? n : null;
    switch (
        ((t = p(
            {},
            {
                overlay_game_name: null != _ ? _.name : 'Unknown Game',
                overlay_app_id: null != _ ? _.id : null,
                overlay_render_method: null != m ? r.gl[m] : null,
                media_session_id: l.Z.getMediaSessionId()
            },
            t
        )),
        e)
    ) {
        case f.rMx.VOICE_CHANNEL_SELECTED:
        case f.rMx.SETTINGS_PANE_VIEWED:
        case f.rMx.GUILD_VIEWED:
        case f.rMx.CHANNEL_OPENED:
            return (0, d.yw)(e, t, s);
        default:
            return u.default.track(e, t, { flush: s });
    }
}
