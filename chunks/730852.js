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
    _ = n(132500),
    E = n(192308),
    A = n(890615),
    h = n(51758),
    I = n(776781),
    f = n(96566),
    p = n(712711),
    T = n(95561),
    m = n(329551),
    g = n(912630),
    S = n(965162),
    N = n(763827),
    C = n(309010),
    O = n(287809),
    R = n(53857),
    L = n(71393),
    y = n(834942),
    D = n(576705),
    v = n(977997),
    b = n(147036);
let M = { fromGuildId: void 0, fromChannelId: void 0 };
var P = n(652215);
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
            { fromGuildId: d, fromChannelId: c } = M;
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
            M = l?.getGuildId();
        l?.isGuildVocalOrThread() && ((0, r.qR)(l) || (0, d.BV)(l))
            ? (0, o.pX)(P.BVt.CHANNEL(M, e))
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
                                  let { default: e } = await Promise.all([
                                      n.e("196063"),
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
                                      n.e("343550"),
                                      n.e("552712"),
                                      n.e("829177"),
                                      n.e("232551"),
                                      n.e("892340"),
                                      n.e("313681"),
                                      n.e("34472"),
                                      n.e("165595"),
                                      n.e("588940"),
                                      n.e("643568"),
                                  ]).then(n.bind(n, 717523));
                                  return (t) => e({ channel: o, ...t });
                              });
                          if (e)
                              return (0, E.openModalLazy)(async () => {
                                  let { default: e } = await n.e("354207").then(n.bind(n, 361698));
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
                                              output_audio_route_type: R.A.getCurrentRouteType(),
                                          });
                                  if ((e(), g.A.hasUsedBackgroundInCall)) {
                                      let e,
                                          t = {
                                              ...s,
                                              ...((e = (0, m.i)(O.default.getCurrentUser())),
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
              })(e, M, t, a, s));
    },
    disconnect() {
        let e = s.default.getRemoteSessionId();
        null != e && a.Fc(e), this.selectVoiceChannel(null), l.close(P.MLl.CHANNEL_CALL_POPOUT);
    },
};
