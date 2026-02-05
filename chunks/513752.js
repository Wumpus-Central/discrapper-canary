"use strict";
n.d(t, { A: () => h });
var r = n(73153),
    i = n(58149),
    a = n(329551),
    s = n(912630),
    o = n(965162),
    l = n(734057),
    u = n(430452),
    c = n(383501),
    d = n(309010),
    _ = n(287809);
let f = (e, t) => {
        let n = c.A.getVoiceFilterSpeakingDurationMs();
        return {
            channel_id: e.id,
            channel_type: e.type,
            guild_id: e.getGuildId(),
            rtc_connection_id: c.A.getRTCConnectionId(),
            duration: c.A.getDuration(),
            media_session_id: c.A.getMediaSessionId(),
            ...(0, i.JK)(c.A.getGuildId(), c.A.getChannelId(), t),
            duration_speaking_voice_filter_ids: null != n ? [...n.keys()] : null,
            duration_speaking_voice_filter_ms: null != n ? [...n.values()] : null,
        };
    },
    p = () => {
        let e = (0, a.i)(_.default.getCurrentUser());
        return {
            video_device_name: u.A.getVideoDevices()[u.A.getVideoDeviceId()]?.name,
            video_hardware_scaling_enabled: u.A.getHardwareEncoding(),
            video_effect_type: (0, o.wC)(e),
            video_effect_detail: (0, o._V)(e),
        };
    };
function h(e, t, n, i) {
    let a = d.A.getVoiceChannelId(),
        o = l.A.getChannel(a);
    if (null == t && null != a && null != o) {
        let t = f(o, i);
        if ((e(), s.A.hasUsedBackgroundInCall)) {
            let e = { ...t, ...p() };
            r.h.dispatch({ type: "VIDEO_BACKGROUND_SHOW_FEEDBACK", analyticsData: e });
        } else r.h.dispatch({ type: "VOICE_CHANNEL_SHOW_FEEDBACK", analyticsData: t });
    } else e();
}
