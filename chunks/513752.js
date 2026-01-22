n.d(t, {
    A: () => b,
}),
    n(896048);
var r = n(73153),
    i = n(58149),
    a = n(329551),
    s = n(912630),
    o = n(965162),
    l = n(734057),
    c = n(430452),
    u = n(383501),
    d = n(309010),
    f = n(287809);

function p(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}

function _(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                p(e, t, n[t]);
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
        let n = u.A.getVoiceFilterSpeakingDurationMs();
        return m(
            _(
                {
                    channel_id: e.id,
                    channel_type: e.type,
                    guild_id: e.getGuildId(),
                    rtc_connection_id: u.A.getRTCConnectionId(),
                    duration: u.A.getDuration(),
                    media_session_id: u.A.getMediaSessionId(),
                },
                (0, i.JK)(u.A.getGuildId(), u.A.getChannelId(), t),
            ),
            {
                duration_speaking_voice_filter_ids: null != n ? [...n.keys()] : null,
                duration_speaking_voice_filter_ms: null != n ? [...n.values()] : null,
            },
        );
    },
    E = () => {
        var e;
        let t = (0, a.i)(f.default.getCurrentUser());
        return {
            video_device_name: null == (e = c.A.getVideoDevices()[c.A.getVideoDeviceId()]) ? void 0 : e.name,
            video_hardware_scaling_enabled: c.A.getHardwareEncoding(),
            video_effect_type: (0, o.wC)(t),
            video_effect_detail: (0, o._V)(t),
        };
    };

function b(e, t, n, i) {
    let a = d.A.getVoiceChannelId(),
        o = l.A.getChannel(a);
    if (null == t && null != a && null != o) {
        let t = g(o, i);
        if ((e(), s.A.hasUsedBackgroundInCall)) {
            let e = _({}, t, E());
            r.h.dispatch({
                type: "VIDEO_BACKGROUND_SHOW_FEEDBACK",
                analyticsData: e,
            });
        } else
            r.h.dispatch({
                type: "VOICE_CHANNEL_SHOW_FEEDBACK",
                analyticsData: t,
            });
    } else e();
}
