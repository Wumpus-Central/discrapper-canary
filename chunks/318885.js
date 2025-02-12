n.d(t, {
    Q: () => p,
    t: () => _
});
var i = n(615287),
    r = n(594190),
    a = n(371651),
    s = n(388627),
    o = n(131951),
    l = n(19780),
    u = n(449224),
    c = n(626135),
    d = n(367907),
    f = n(981631);
function _() {
    let e, t, n, i, a;
    let s = o.Z.getGoLiveSource();
    if (null != s && ((e = s.quality.resolution), (t = s.quality.frameRate), null != s.desktopSource)) {
        var l, u;
        n = s.desktopSource.soundshareSession;
        let e = null != s.desktopSource.sourcePid ? r.ZP.getGameForPID(s.desktopSource.sourcePid) : null;
        (i = null !== (l = null == e ? void 0 : e.name) && void 0 !== l ? l : null), (a = null !== (u = null == e ? void 0 : e.id) && void 0 !== u ? u : null);
    }
    return {
        video_input_resolution: e,
        video_input_frame_rate: t,
        soundshare_session: n,
        share_game_name: i,
        share_game_id: a
    };
}
function p(e, t) {
    var n;
    let o = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        _ = __OVERLAY__ ? u.Z.getGame() : (0, s.pL)(),
        p = r.ZP.getRunningGames().find((e) => e.name === (null == _ ? void 0 : _.name)),
        h = null !== (n = a.default.getRenderMethod(null == p ? void 0 : p.pid)) && void 0 !== n ? n : i.gl.Disabled;
    switch (
        ((t = {
            overlay_game_name: null != _ ? _.name : 'Unknown Game',
            overlay_app_id: null != _ ? _.id : null,
            overlay_render_method: i.gl[h],
            media_session_id: l.Z.getMediaSessionId(),
            ...t
        }),
        e)
    ) {
        case f.rMx.VOICE_CHANNEL_SELECTED:
        case f.rMx.SETTINGS_PANE_VIEWED:
        case f.rMx.GUILD_VIEWED:
        case f.rMx.CHANNEL_OPENED:
            return (0, d.yw)(e, t, o);
        default:
            return c.default.track(e, t, { flush: o });
    }
}
