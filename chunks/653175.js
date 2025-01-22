r.d(n, {
    Z: function () {
        return m;
    }
});
var i = r(570140),
    a = r(367907),
    o = r(932724),
    s = r(634041),
    l = r(647177),
    u = r(592125),
    c = r(131951),
    d = r(19780),
    f = r(944486),
    p = r(594174);
let h = (e, n) => ({
        channel_id: e.id,
        channel_type: e.type,
        guild_id: e.getGuildId(),
        rtc_connection_id: d.Z.getRTCConnectionId(),
        duration: d.Z.getDuration(),
        media_session_id: d.Z.getMediaSessionId(),
        ...(0, a.kO)(d.Z.getGuildId(), d.Z.getChannelId(), n)
    }),
    _ = () => {
        var e;
        let n = (0, o.P)(p.default.getCurrentUser());
        return {
            video_device_name: null === (e = c.Z.getVideoDevices()[c.Z.getVideoDeviceId()]) || void 0 === e ? void 0 : e.name,
            video_hardware_scaling_enabled: c.Z.getHardwareEncoding(),
            video_effect_type: (0, l.TA)(n),
            video_effect_detail: (0, l.V$)(n)
        };
    };
function m(e, n, r, a) {
    let o = f.Z.getVoiceChannelId(),
        l = u.Z.getChannel(o);
    if (null == n && null != o && null != l) {
        let n = h(l, a);
        if ((e(), s.Z.hasUsedBackgroundInCall)) {
            let e = {
                ...n,
                ..._()
            };
            i.Z.dispatch({
                type: 'VIDEO_BACKGROUND_SHOW_FEEDBACK',
                analyticsData: e
            });
        } else
            i.Z.dispatch({
                type: 'VOICE_CHANNEL_SHOW_FEEDBACK',
                analyticsData: n
            });
    } else e();
}
