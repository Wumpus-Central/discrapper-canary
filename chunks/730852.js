"use strict";
n.d(t, { default: () => P });
var i = n(228366),
    r = n(323073),
    s = n(469802),
    a = n(643501),
    o = n(574172),
    l = n(976860),
    u = n(288254),
    c = n(734057),
    d = n(761853),
    _ = n(835245),
    f = n(192308),
    h = n(890615),
    p = n(51758),
    E = n(776781),
    m = n(96566),
    g = n(413339),
    A = n(95561),
    I = n(329551),
    T = n(912630),
    S = n(965162),
    N = n(763827),
    y = n(309010),
    C = n(287809),
    v = n(53857),
    O = n(71393),
    R = n(834942),
    b = n(576705),
    D = n(977997),
    L = n(871237);
let w = function (e, t) {
    let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        s = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
        { lockVoiceStateForResume: a = !1, bypassIdleUpdate: o = !1 } =
            arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {},
        l = c.A.getChannel(e),
        u = D.A.getCurrentClientVoiceChannelId(t ?? null) === e,
        w = null != l ? R.A.getCheck(l.guild_id) : null;
    if (!(null != t && (0, p.V)(t)) && (null == w || w.canChat || (0, E.pC)(l))) {
        if (null != l && !u) {
            let e = (0, L.Pd)(l, D.A, O.A);
            if (e && l.isGuildStageVoice() && (0, m.xn)(l.id))
                return void (0, f.openModalLazy)(async () => {
                    let { default: e } = await Promise.all([
                        n.e("85096"),
                        n.e("24199"),
                        n.e("43039"),
                        n.e("88077"),
                        n.e("66900"),
                        n.e("13681"),
                        n.e("55314"),
                        n.e("89094"),
                        n.e("29177"),
                        n.e("32551"),
                        n.e("31658"),
                        n.e("46270"),
                        n.e("1555"),
                        n.e("44695"),
                        n.e("21690"),
                        n.e("45723"),
                        n.e("38835"),
                        n.e("43568"),
                    ]).then(n.bind(n, 717523));
                    return (t) => e({ channel: l, ...t });
                });
            if (e)
                return void (0, f.openModalLazy)(async () => {
                    let { default: e } = await n.e("54207").then(n.bind(n, 361698));
                    return (t) => e(t);
                });
            if (!(0, h.A)(l, b.A)) return;
        }
        r && (0, g.PX)(),
            (function (e, t, n) {
                let r = y.A.getVoiceChannelId(),
                    s = c.A.getChannel(r);
                if (null == t && null != r && null != s) {
                    let t,
                        r,
                        a =
                            ((t = N.A.getRTCConnection()),
                            (r = t?.getVoiceDurationStats()),
                            {
                                channel_id: s.id,
                                channel_type: s.type,
                                guild_id: s.getGuildId(),
                                rtc_connection_id: N.A.getRTCConnectionId(),
                                duration: N.A.getDuration(),
                                media_session_id: N.A.getMediaSessionId(),
                                ...(0, A.JK)(N.A.getGuildId(), N.A.getChannelId(), n),
                                duration_muted_ms: r?.duration_muted_ms ?? null,
                                output_audio_route_type: v.A.getCurrentRouteType(),
                            });
                    if ((e(), T.A.hasUsedBackgroundInCall)) {
                        let e,
                            t = {
                                ...a,
                                ...((e = (0, I.i)(C.default.getCurrentUser())),
                                {
                                    video_device_name: d.Ay.getVideoDevices()[d.Ay.getVideoDeviceId()]?.name,
                                    video_hardware_scaling_enabled: d.Ay.getHardwareEncoding(),
                                    video_effect_type: (0, S.wC)(e),
                                    video_effect_detail: (0, S._V)(e),
                                }),
                            };
                        i.h.dispatch({ type: "VIDEO_BACKGROUND_SHOW_FEEDBACK", analyticsData: t });
                    } else i.h.dispatch({ type: "VOICE_CHANNEL_SHOW_FEEDBACK", analyticsData: a });
                } else e();
            })(
                function () {
                    let n = (0, _.A)();
                    i.h.dispatch({
                        type: "VOICE_CHANNEL_SELECT",
                        guildId: t,
                        channelId: e,
                        currentVoiceChannelId: y.A.getVoiceChannelId(),
                        video: r,
                        stream: s,
                        lockVoiceStateForResume: a,
                        joinVoiceId: n,
                        bypassIdleUpdate: o,
                    });
                },
                e,
                r,
            );
    }
};
var M = n(652215);
let P = {
    selectChannel(e) {
        let { guildId: t, channelId: n, messageId: r, jumpType: s, source: a, skipMessageFetch: o } = e;
        i.h.dispatch({
            type: "CHANNEL_SELECT",
            guildId: t === M.ME ? null : t,
            channelId: n,
            messageId: r,
            jumpType: s,
            source: a,
            skipMessageFetch: o,
        });
    },
    selectPrivateChannel(e) {
        (0, l.pX)(M.BVt.CHANNEL(M.ME, e));
    },
    selectVoiceChannel(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
            s = c.A.getChannel(e),
            a = s?.getGuildId();
        s?.isGuildVocalOrThread() && ((0, r.qR)(s) || (0, u.BV)(s))
            ? (0, l.pX)(M.BVt.CHANNEL(a, e))
            : d.Ay.isSupported() && (null != e && d.Ay.getMediaEngine().interact(), w(e, a, t, n, i));
    },
    disconnect() {
        let e = a.default.getRemoteSessionId();
        null != e && s.Fc(e), this.selectVoiceChannel(null), o.close(M.MLl.CHANNEL_CALL_POPOUT);
    },
};
