r.d(n, {
    Q: function () {
        return h;
    },
    t: function () {
        return p;
    }
});
var i = r(615287),
    a = r(594190),
    o = r(371651),
    s = r(388627),
    l = r(131951),
    u = r(449224),
    c = r(626135),
    d = r(367907),
    f = r(981631);
function p() {
    let e, n, r, i, o;
    let s = l.Z.getGoLiveSource();
    if (null != s && ((e = s.quality.resolution), (n = s.quality.frameRate), null != s.desktopSource)) {
        var u, c;
        r = s.desktopSource.soundshareSession;
        let e = null != s.desktopSource.sourcePid ? a.ZP.getGameForPID(s.desktopSource.sourcePid) : null;
        (i = null !== (u = null == e ? void 0 : e.name) && void 0 !== u ? u : null), (o = null !== (c = null == e ? void 0 : e.id) && void 0 !== c ? c : null);
    }
    return {
        video_input_resolution: e,
        video_input_frame_rate: n,
        soundshare_session: r,
        share_game_name: i,
        share_game_id: o
    };
}
function h(e, n) {
    var r;
    let l = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        p = __OVERLAY__ ? u.Z.getGame() : (0, s.pL)(),
        h = a.ZP.getRunningGames().find((e) => e.name === (null == p ? void 0 : p.name)),
        _ = null !== (r = o.Z.getRenderMethod(null == h ? void 0 : h.pid)) && void 0 !== r ? r : i.gl.Disabled;
    switch (
        ((n = {
            overlay_game_name: null != p ? p.name : 'Unknown Game',
            overlay_app_id: null != p ? p.id : null,
            overlay_render_method: i.gl[_],
            ...n
        }),
        e)
    ) {
        case f.rMx.VOICE_CHANNEL_SELECTED:
        case f.rMx.SETTINGS_PANE_VIEWED:
        case f.rMx.GUILD_VIEWED:
        case f.rMx.CHANNEL_OPENED:
            return (0, d.yw)(e, n, l);
        default:
            return c.default.track(e, n, { flush: l });
    }
}
