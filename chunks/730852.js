"use strict";
n.d(t, { default: () => U });
var i = n(228366),
    r = n(323073),
    a = n(469802),
    s = n(643501),
    l = n(574172),
    o = n(976860),
    d = n(288254),
    c = n(734057),
    u = n(45630),
    _ = n(309010),
    E = n(967198),
    A = n(132500),
    h = n(192308),
    I = n(890615),
    f = n(51758),
    p = n(776781),
    T = n(96566),
    m = n(712711),
    g = n(95561),
    S = n(329551),
    N = n(912630),
    C = n(965162),
    O = n(763827),
    R = n(287809),
    L = n(53857),
    y = n(71393),
    D = n(834942),
    v = n(576705),
    b = n(977997),
    M = n(147036),
    P = n(652215);
let U = {
    selectChannel(e) {
        let {
                guildId: t,
                channelId: n,
                messageId: r,
                jumpType: a,
                source: s,
                skipMessageFetch: l,
                opensChannel: o,
            } = e,
            d = E.A.getGuildId() ?? null,
            c = _.Ay.getChannelId(d, !1) ?? null;
        i.h.dispatch({
            type: "CHANNEL_SELECT",
            guildId: t === P.ME ? null : t,
            channelId: n,
            fromGuildId: d,
            fromChannelId: c,
            messageId: r,
            jumpType: a,
            source: s,
            skipMessageFetch: l,
            opensChannel: o,
        });
    },
    selectPrivateChannel(e) {
        (0, o.pX)(P.BVt.CHANNEL(P.ME, e));
    },
    selectVoiceChannel(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
            a = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
            s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
            l = c.A.getChannel(e),
            E = l?.getGuildId();
        l?.isGuildVocalOrThread() && ((0, r.qR)(l) || (0, d.BV)(l))
            ? (0, o.pX)(P.BVt.CHANNEL(E, e))
            : u.Ay.isSupported() &&
              (null != e && u.Ay.getMediaEngine().interact(),
              (function (e, t) {
                  let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                      a = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                      { lockVoiceStateForResume: s = !1, bypassIdleUpdate: l = !1 } =
                          arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {},
                      o = c.A.getChannel(e),
                      d = b.A.getCurrentClientVoiceChannelId(t ?? null) === e,
                      E = null != o ? D.A.getCheck(o.guild_id) : null;
                  if (!(null != t && (0, f.V)(t)) && (null == E || E.canChat || (0, p.pC)(o))) {
                      if (null != o && !d) {
                          let e = (0, M.Pd)(o, b.A, y.A);
                          if (e && o.isGuildStageVoice() && (0, T.xn)(o.id))
                              return (0, h.openModalLazy)(async () => {
                                  let { default: e } = await Promise.all([
                                      n.e("63092"),
                                      n.e("392028"),
                                      n.e("424199"),
                                      n.e("454048"),
                                      n.e("543039"),
                                      n.e("721690"),
                                      n.e("901555"),
                                      n.e("295366"),
                                      n.e("844695"),
                                      n.e("136022"),
                                      n.e("988077"),
                                      n.e("832817"),
                                      n.e("561216"),
                                      n.e("60898"),
                                      n.e("552712"),
                                      n.e("829177"),
                                      n.e("232551"),
                                      n.e("904723"),
                                      n.e("313681"),
                                      n.e("34472"),
                                      n.e("588940"),
                                      n.e("643568"),
                                  ]).then(n.bind(n, 717523));
                                  return (t) => e({ channel: o, ...t });
                              });
                          if (e)
                              return (0, h.openModalLazy)(async () => {
                                  let { default: e } = await n.e("354207").then(n.bind(n, 361698));
                                  return (t) => e(t);
                              });
                          if (!(0, I.A)(o, v.A)) return;
                      }
                      r && (0, m.PX)(),
                          (function (e, t, n) {
                              let r = _.Ay.getVoiceChannelId(),
                                  a = c.A.getChannel(r);
                              if (null == t && null != r && null != a) {
                                  let t,
                                      r,
                                      s =
                                          ((t = O.A.getRTCConnection()),
                                          (r = t?.getVoiceDurationStats()),
                                          {
                                              channel_id: a.id,
                                              channel_type: a.type,
                                              guild_id: a.getGuildId(),
                                              rtc_connection_id: O.A.getRTCConnectionId(),
                                              duration: O.A.getDuration(),
                                              media_session_id: O.A.getMediaSessionId(),
                                              ...(0, g.JK)(O.A.getGuildId(), O.A.getChannelId(), n),
                                              duration_muted_ms: r?.duration_muted_ms ?? null,
                                              output_audio_route_type: L.A.getCurrentRouteType(),
                                          });
                                  if ((e(), N.A.hasUsedBackgroundInCall)) {
                                      let e,
                                          t = {
                                              ...s,
                                              ...((e = (0, S.i)(R.default.getCurrentUser())),
                                              {
                                                  video_device_name:
                                                      u.Ay.getVideoDevices()[u.Ay.getVideoDeviceId()]?.name,
                                                  video_hardware_scaling_enabled: u.Ay.getHardwareEncoding(),
                                                  video_effect_type: (0, C.wC)(e),
                                                  video_effect_detail: (0, C._V)(e),
                                              }),
                                          };
                                      i.h.dispatch({ type: "VIDEO_BACKGROUND_SHOW_FEEDBACK", analyticsData: t });
                                  } else i.h.dispatch({ type: "VOICE_CHANNEL_SHOW_FEEDBACK", analyticsData: s });
                              } else e();
                          })(
                              function () {
                                  let n = (0, A.A)();
                                  i.h.dispatch({
                                      type: "VOICE_CHANNEL_SELECT",
                                      guildId: t,
                                      channelId: e,
                                      currentVoiceChannelId: _.Ay.getVoiceChannelId(),
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
              })(e, E, t, a, s));
    },
    disconnect() {
        let e = s.default.getRemoteSessionId();
        null != e && a.Fc(e), this.selectVoiceChannel(null), l.close(P.MLl.CHANNEL_CALL_POPOUT);
    },
};
