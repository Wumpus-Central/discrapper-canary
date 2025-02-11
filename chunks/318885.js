n.d(t, {
    Q: () => _,
    t: () => f
});
var i = n(615287),
    r = n(594190),
    a = n(371651),
    s = n(388627),
    o = n(131951),
    l = n(449224),
    u = n(626135),
    c = n(367907),
    d = n(981631);
function f() {
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
function _(e, t) {
    var n;
    let o = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        f = __OVERLAY__ ? l.Z.getGame() : (0, s.pL)(),
        _ = r.ZP.getRunningGames().find((e) => e.name === (null == f ? void 0 : f.name)),
        p = null !== (n = a.default.getRenderMethod(null == _ ? void 0 : _.pid)) && void 0 !== n ? n : i.gl.Disabled;
    switch (
        ((t = {
            overlay_game_name: null != f ? f.name : 'Unknown Game',
            overlay_app_id: null != f ? f.id : null,
            overlay_render_method: i.gl[p],
            ...t
        }),
        e)
    ) {
        case d.rMx.VOICE_CHANNEL_SELECTED:
        case d.rMx.SETTINGS_PANE_VIEWED:
        case d.rMx.GUILD_VIEWED:
        case d.rMx.CHANNEL_OPENED:
            return (0, c.yw)(e, t, o);
        default:
            return u.default.track(e, t, { flush: o });
    }
}
