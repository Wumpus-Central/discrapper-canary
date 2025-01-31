n.d(t, { Z: () => h });
var i = n(570140),
    r = n(367907),
    a = n(932724),
    s = n(634041),
    o = n(647177),
    l = n(592125),
    u = n(131951),
    c = n(19780),
    d = n(944486),
    f = n(594174);
let _ = (e, t) => ({
        channel_id: e.id,
        channel_type: e.type,
        guild_id: e.getGuildId(),
        rtc_connection_id: c.Z.getRTCConnectionId(),
        duration: c.Z.getDuration(),
        media_session_id: c.Z.getMediaSessionId(),
        ...(0, r.kO)(c.Z.getGuildId(), c.Z.getChannelId(), t)
    }),
    p = () => {
        var e;
        let t = (0, a.P)(f.default.getCurrentUser());
        return {
            video_device_name: null === (e = u.Z.getVideoDevices()[u.Z.getVideoDeviceId()]) || void 0 === e ? void 0 : e.name,
            video_hardware_scaling_enabled: u.Z.getHardwareEncoding(),
            video_effect_type: (0, o.TA)(t),
            video_effect_detail: (0, o.V$)(t)
        };
    };
function h(e, t, n, r) {
    let a = d.Z.getVoiceChannelId(),
        o = l.Z.getChannel(a);
    if (null == t && null != a && null != o) {
        let t = _(o, r);
        if ((e(), s.Z.hasUsedBackgroundInCall)) {
            let e = {
                ...t,
                ...p()
            };
            i.Z.dispatch({
                type: 'VIDEO_BACKGROUND_SHOW_FEEDBACK',
                analyticsData: e
            });
        } else
            i.Z.dispatch({
                type: 'VOICE_CHANNEL_SHOW_FEEDBACK',
                analyticsData: t
            });
    } else e();
}
