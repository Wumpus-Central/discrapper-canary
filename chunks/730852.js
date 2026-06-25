"use strict";
n.d(t, { default: () => M });
var i = n(228366),
    r = n(323073),
    s = n(469802),
    a = n(643501),
    o = n(574172),
    l = n(976860),
    u = n(288254),
    c = n(734057),
    d = n(472444),
    _ = n(835245),
    h = n(192308),
    f = n(890615),
    p = n(51758),
    E = n(776781),
    m = n(96566),
    g = n(413339),
    A = n(95561),
    I = n(329551),
    T = n(912630),
    S = n(965162),
    y = n(763827),
    C = n(309010),
    N = n(287809),
    v = n(53857),
    R = n(71393),
    O = n(834942),
    b = n(576705),
    D = n(977997),
    L = n(871237),
    w = n(652215);
let M = {
    selectChannel(e) {
        let { guildId: t, channelId: n, messageId: r, jumpType: s, source: a, skipMessageFetch: o } = e;
        i.h.dispatch({
            type: "CHANNEL_SELECT",
            guildId: t === w.ME ? null : t,
            channelId: n,
            messageId: r,
            jumpType: s,
            source: a,
            skipMessageFetch: o,
        });
    },
    selectPrivateChannel(e) {
        (0, l.pX)(w.BVt.CHANNEL(w.ME, e));
    },
    selectVoiceChannel(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
            o = c.A.getChannel(e),
            M = o?.getGuildId();
        o?.isGuildVocalOrThread() && ((0, r.qR)(o) || (0, u.BV)(o))
            ? (0, l.pX)(w.BVt.CHANNEL(M, e))
            : d.Ay.isSupported() &&
              (null != e && d.Ay.getMediaEngine().interact(),
              (function (e, t) {
                  let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                      s = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                      { lockVoiceStateForResume: a = !1, bypassIdleUpdate: o = !1 } =
                          arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {},
                      l = c.A.getChannel(e),
                      u = D.A.getCurrentClientVoiceChannelId(t ?? null) === e,
                      w = null != l ? O.A.getCheck(l.guild_id) : null;
                  if (!(null != t && (0, p.V)(t)) && (null == w || w.canChat || (0, E.pC)(l))) {
                      if (null != l && !u) {
                          let e = (0, L.Pd)(l, D.A, R.A);
                          if (e && l.isGuildStageVoice() && (0, m.xn)(l.id))
                              return (0, h.openModalLazy)(async () => {
                                  let { default: e } = await n.e("43568").then(n.bind(n, 717523));
                                  return (t) => e({ channel: l, ...t });
                              });
                          if (e)
                              return (0, h.openModalLazy)(async () => {
                                  let { default: e } = await n.e("54207").then(n.bind(n, 361698));
                                  return (t) => e(t);
                              });
                          if (!(0, f.A)(l, b.A)) return;
                      }
                      r && (0, g.PX)(),
                          (function (e, t, n) {
                              let r = C.A.getVoiceChannelId(),
                                  s = c.A.getChannel(r);
                              if (null == t && null != r && null != s) {
                                  let t,
                                      r,
                                      a =
                                          ((t = y.A.getRTCConnection()),
                                          (r = t?.getVoiceDurationStats()),
                                          {
                                              channel_id: s.id,
                                              channel_type: s.type,
                                              guild_id: s.getGuildId(),
                                              rtc_connection_id: y.A.getRTCConnectionId(),
                                              duration: y.A.getDuration(),
                                              media_session_id: y.A.getMediaSessionId(),
                                              ...(0, A.JK)(y.A.getGuildId(), y.A.getChannelId(), n),
                                              duration_muted_ms: r?.duration_muted_ms ?? null,
                                              output_audio_route_type: v.A.getCurrentRouteType(),
                                          });
                                  if ((e(), T.A.hasUsedBackgroundInCall)) {
                                      let e,
                                          t = {
                                              ...a,
                                              ...((e = (0, I.i)(N.default.getCurrentUser())),
                                              {
                                                  video_device_name:
                                                      d.Ay.getVideoDevices()[d.Ay.getVideoDeviceId()]?.name,
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
                                      currentVoiceChannelId: C.A.getVoiceChannelId(),
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
              })(e, M, t, s, a));
    },
    disconnect() {
        let e = a.default.getRemoteSessionId();
        null != e && s.Fc(e), this.selectVoiceChannel(null), o.close(w.MLl.CHANNEL_CALL_POPOUT);
    },
};
