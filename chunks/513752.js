"use strict";
n.d(t, { A: () => m });
var r = n(73153),
    i = n(58149),
    s = n(329551),
    a = n(912630),
    o = n(965162),
    l = n(734057),
    u = n(430452),
    c = n(383501),
    d = n(309010),
    _ = n(287809),
    f = n(34135);
let p = (e, t) => {
        let n = c.A.getRTCConnection(),
            r = n?.getVoiceDurationStats();
        return {
            channel_id: e.id,
            channel_type: e.type,
            guild_id: e.getGuildId(),
            rtc_connection_id: c.A.getRTCConnectionId(),
            duration: c.A.getDuration(),
            media_session_id: c.A.getMediaSessionId(),
            ...(0, i.JK)(c.A.getGuildId(), c.A.getChannelId(), t),
            duration_speaking_voice_filter_ids: r?.duration_speaking_voice_filter_ids ?? null,
            duration_speaking_voice_filter_ms: r?.duration_speaking_voice_filter_ms ?? null,
            duration_muted_ms: r?.duration_muted_ms ?? null,
            output_audio_route_type: f.A.getCurrentRouteType(),
        };
    },
    h = () => {
        let e = (0, s.i)(_.default.getCurrentUser());
        return {
            video_device_name: u.Ay.getVideoDevices()[u.Ay.getVideoDeviceId()]?.name,
            video_hardware_scaling_enabled: u.Ay.getHardwareEncoding(),
            video_effect_type: (0, o.wC)(e),
            video_effect_detail: (0, o._V)(e),
        };
    };
function m(e, t, n, i) {
    let s = d.A.getVoiceChannelId(),
        o = l.A.getChannel(s);
    if (null == t && null != s && null != o) {
        let t = p(o, i);
        if ((e(), a.A.hasUsedBackgroundInCall)) {
            let e = { ...t, ...h() };
            r.h.dispatch({ type: "VIDEO_BACKGROUND_SHOW_FEEDBACK", analyticsData: e });
        } else r.h.dispatch({ type: "VOICE_CHANNEL_SHOW_FEEDBACK", analyticsData: t });
    } else e();
}
