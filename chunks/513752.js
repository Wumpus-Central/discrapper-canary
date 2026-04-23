"use strict";
n.d(t, { A: () => p });
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
function p(e, t, n, p) {
    let h = d.A.getVoiceChannelId(),
        E = l.A.getChannel(h);
    if (null == t && null != h && null != E) {
        let t,
            n,
            l =
                ((t = c.A.getRTCConnection()),
                (n = t?.getVoiceDurationStats()),
                {
                    channel_id: E.id,
                    channel_type: E.type,
                    guild_id: E.getGuildId(),
                    rtc_connection_id: c.A.getRTCConnectionId(),
                    duration: c.A.getDuration(),
                    media_session_id: c.A.getMediaSessionId(),
                    ...(0, i.JK)(c.A.getGuildId(), c.A.getChannelId(), p),
                    duration_muted_ms: n?.duration_muted_ms ?? null,
                    output_audio_route_type: f.A.getCurrentRouteType(),
                });
        if ((e(), a.A.hasUsedBackgroundInCall)) {
            let e,
                t = {
                    ...l,
                    ...((e = (0, s.i)(_.default.getCurrentUser())),
                    {
                        video_device_name: u.Ay.getVideoDevices()[u.Ay.getVideoDeviceId()]?.name,
                        video_hardware_scaling_enabled: u.Ay.getHardwareEncoding(),
                        video_effect_type: (0, o.wC)(e),
                        video_effect_detail: (0, o._V)(e),
                    }),
                };
            r.h.dispatch({ type: "VIDEO_BACKGROUND_SHOW_FEEDBACK", analyticsData: t });
        } else r.h.dispatch({ type: "VOICE_CHANNEL_SHOW_FEEDBACK", analyticsData: l });
    } else e();
}
