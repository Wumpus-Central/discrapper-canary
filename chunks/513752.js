"use strict";
n.d(t, { A: () => E });
var r = n(73153),
    i = n(58149),
    s = n(329551),
    a = n(912630),
    o = n(965162),
    l = n(734057),
    u = n(430452),
    d = n(383501),
    c = n(309010),
    _ = n(287809),
    f = n(34135);
function E(e, t, n, E) {
    let h = c.A.getVoiceChannelId(),
        p = l.A.getChannel(h);
    if (null == t && null != h && null != p) {
        let t,
            n,
            l =
                ((t = d.A.getRTCConnection()),
                (n = t?.getVoiceDurationStats()),
                {
                    channel_id: p.id,
                    channel_type: p.type,
                    guild_id: p.getGuildId(),
                    rtc_connection_id: d.A.getRTCConnectionId(),
                    duration: d.A.getDuration(),
                    media_session_id: d.A.getMediaSessionId(),
                    ...(0, i.JK)(d.A.getGuildId(), d.A.getChannelId(), E),
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
