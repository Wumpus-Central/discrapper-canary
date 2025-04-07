n.d(t, { Z: () => b }), n(388685);
var r = n(570140),
    i = n(367907),
    o = n(932724),
    a = n(634041),
    s = n(647177),
    l = n(592125),
    c = n(131951),
    u = n(19780),
    d = n(944486),
    f = n(594174);
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
function h(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function m(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : h(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let g = (e, t) => {
        let n = u.ZP.getVoiceFilterSpeakingDurationMs();
        return m(
            p(
                {
                    channel_id: e.id,
                    channel_type: e.type,
                    guild_id: e.getGuildId(),
                    rtc_connection_id: u.ZP.getRTCConnectionId(),
                    duration: u.ZP.getDuration(),
                    media_session_id: u.ZP.getMediaSessionId()
                },
                (0, i.kO)(u.ZP.getGuildId(), u.ZP.getChannelId(), t)
            ),
            {
                duration_speaking_voice_filter_ids: null != n ? [...n.keys()] : null,
                duration_speaking_voice_filter_ms: null != n ? [...n.values()] : null
            }
        );
    },
    E = () => {
        var e;
        let t = (0, o.P)(f.default.getCurrentUser());
        return {
            video_device_name: null == (e = c.Z.getVideoDevices()[c.Z.getVideoDeviceId()]) ? void 0 : e.name,
            video_hardware_scaling_enabled: c.Z.getHardwareEncoding(),
            video_effect_type: (0, s.TA)(t),
            video_effect_detail: (0, s.V$)(t)
        };
    };
function b(e, t, n, i) {
    let o = d.Z.getVoiceChannelId(),
        s = l.Z.getChannel(o);
    if (null == t && null != o && null != s) {
        let t = g(s, i);
        if ((e(), a.Z.hasUsedBackgroundInCall)) {
            let e = p({}, t, E());
            r.Z.dispatch({
                type: 'VIDEO_BACKGROUND_SHOW_FEEDBACK',
                analyticsData: e
            });
        } else
            r.Z.dispatch({
                type: 'VOICE_CHANNEL_SHOW_FEEDBACK',
                analyticsData: t
            });
    } else e();
}
