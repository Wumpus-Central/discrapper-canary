"use strict";
n.d(t, { default: () => P });
var i = n(228366),
    r = n(323073),
    a = n(469802),
    s = n(643501),
    l = n(574172),
    o = n(976860),
    d = n(288254),
    c = n(734057),
    u = n(186295),
    _ = n(132500),
    E = n(192308),
    A = n(890615),
    h = n(51758),
    I = n(776781),
    f = n(96566),
    p = n(413339),
    T = n(95561),
    m = n(329551),
    g = n(912630),
    S = n(965162),
    N = n(763827),
    C = n(309010),
    R = n(287809),
    O = n(53857),
    L = n(71393),
    y = n(834942),
    D = n(576705),
    v = n(977997),
    b = n(871237),
    M = n(652215);
let P = {
    selectChannel(e) {
        let { guildId: t, channelId: n, messageId: r, jumpType: a, source: s, skipMessageFetch: l } = e;
        i.h.dispatch({
            type: "CHANNEL_SELECT",
            guildId: t === M.ME ? null : t,
            channelId: n,
            messageId: r,
            jumpType: a,
            source: s,
            skipMessageFetch: l,
        });
    },
    selectPrivateChannel(e) {
        (0, o.pX)(M.BVt.CHANNEL(M.ME, e));
    },
    selectVoiceChannel(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
            l = c.A.getChannel(e),
            P = l?.getGuildId();
        l?.isGuildVocalOrThread() && ((0, r.qR)(l) || (0, d.BV)(l))
            ? (0, o.pX)(M.BVt.CHANNEL(P, e))
            : u.Ay.isSupported() &&
              (null != e && u.Ay.getMediaEngine().interact(),
              (function (e, t) {
                  let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                      a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                      { lockVoiceStateForResume: s = !1, bypassIdleUpdate: l = !1 } =
                          arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {},
                      o = c.A.getChannel(e),
                      d = v.A.getCurrentClientVoiceChannelId(t ?? null) === e,
                      M = null != o ? y.A.getCheck(o.guild_id) : null;
                  if (!(null != t && (0, h.V)(t)) && (null == M || M.canChat || (0, I.pC)(o))) {
                      if (null != o && !d) {
                          let e = (0, b.Pd)(o, v.A, L.A);
                          if (e && o.isGuildStageVoice() && (0, f.xn)(o.id))
                              return (0, E.openModalLazy)(async () => {
                                  let { default: e } = await n.e("43568").then(n.bind(n, 717523));
                                  return (t) => e({ channel: o, ...t });
                              });
                          if (e)
                              return (0, E.openModalLazy)(async () => {
                                  let { default: e } = await n.e("54207").then(n.bind(n, 361698));
                                  return (t) => e(t);
                              });
                          if (!(0, A.A)(o, D.A)) return;
                      }
                      r && (0, p.PX)(),
                          (function (e, t, n) {
                              let r = C.Ay.getVoiceChannelId(),
                                  a = c.A.getChannel(r);
                              if (null == t && null != r && null != a) {
                                  let t,
                                      r,
                                      s =
                                          ((t = N.A.getRTCConnection()),
                                          (r = t?.getVoiceDurationStats()),
                                          {
                                              channel_id: a.id,
                                              channel_type: a.type,
                                              guild_id: a.getGuildId(),
                                              rtc_connection_id: N.A.getRTCConnectionId(),
                                              duration: N.A.getDuration(),
                                              media_session_id: N.A.getMediaSessionId(),
                                              ...(0, T.JK)(N.A.getGuildId(), N.A.getChannelId(), n),
                                              duration_muted_ms: r?.duration_muted_ms ?? null,
                                              output_audio_route_type: O.A.getCurrentRouteType(),
                                          });
                                  if ((e(), g.A.hasUsedBackgroundInCall)) {
                                      let e,
                                          t = {
                                              ...s,
                                              ...((e = (0, m.i)(R.default.getCurrentUser())),
                                              {
                                                  video_device_name:
                                                      u.Ay.getVideoDevices()[u.Ay.getVideoDeviceId()]?.name,
                                                  video_hardware_scaling_enabled: u.Ay.getHardwareEncoding(),
                                                  video_effect_type: (0, S.wC)(e),
                                                  video_effect_detail: (0, S._V)(e),
                                              }),
                                          };
                                      i.h.dispatch({ type: "VIDEO_BACKGROUND_SHOW_FEEDBACK", analyticsData: t });
                                  } else i.h.dispatch({ type: "VOICE_CHANNEL_SHOW_FEEDBACK", analyticsData: s });
                              } else e();
                          })(
                              function () {
                                  let n = (0, _.A)();
                                  i.h.dispatch({
                                      type: "VOICE_CHANNEL_SELECT",
                                      guildId: t,
                                      channelId: e,
                                      currentVoiceChannelId: C.Ay.getVoiceChannelId(),
                                      video: r,
                                      stream: a,
                                      lockVoiceStateForResume: s,
                                      joinVoiceId: n,
                                      bypassIdleUpdate: l,
                                  });
                              },
                              e,
                              r,
                          );
                  }
              })(e, P, t, a, s));
    },
    disconnect() {
        let e = s.default.getRemoteSessionId();
        null != e && a.Fc(e), this.selectVoiceChannel(null), l.close(M.MLl.CHANNEL_CALL_POPOUT);
    },
};
