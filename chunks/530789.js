n.d(e, { pD: () => to, cH: () => tr }), n(321073);
var i = n(731738),
    l = n(136722),
    a = n(17928),
    r = n(506774),
    o = n(765178),
    u = n(228366),
    s = n(308528),
    d = n(367513),
    c = n(66834),
    A = n(264686),
    f = n(730852),
    _ = n(77729),
    E = n(883600),
    N = n(963027),
    T = n(47167),
    g = n(435470),
    I = n(707592),
    h = n(741231),
    C = n(380335),
    S = n(320095),
    p = n(807393),
    O = n(535586),
    m = n(944043),
    y = n(181370),
    U = n.n(y),
    P = n(695515),
    D = n(976860),
    R = n(378570),
    v = n(790535),
    L = n(446600),
    k = n(747926),
    G = n(885386),
    w = n(718446),
    V = n(260509),
    M = n(734057),
    b = n(71393),
    F = n(232835),
    W = n(803224),
    H = n(576705),
    Y = n(568548),
    B = n(994500),
    x = n(309010),
    K = n(461213),
    q = n(351906),
    J = n(870570),
    j = n(287809),
    X = n(977997),
    $ = n(174459),
    z = n(562153),
    Q = n(723702),
    Z = n(427262),
    tt = n(479975),
    te = n(652215),
    tn = n(988794),
    ti = n(672396),
    tl = n(355097),
    ta = n(375708);
let tr = "message1",
    to = 0.4,
    tu = _.A?.features.supports("notifications") ? 20 : 1,
    ts = "discord_dismissed_notification_shown",
    td = document.hasFocus(),
    tc = null,
    tA = new Set(),
    tf = ["FR", "GF", "PF", "TF", "RE", "GP", "MQ", "YT", "NC", "PM", "WF"],
    t_ = new (class {
        _channels = {};
        track(t, e, n) {
            let i = this._channels[t];
            for (
                null == i && ((i = []), (this._channels[t] = i)), i.push({ notification: e, trackingProps: n });
                i.length > tu;
            ) {
                let t = i.shift();
                t?.notification?.close != null &&
                    (t.notification.close(),
                    $.default.track(te.HAw.NOTIFICATION_ACTION, { action: "REMOVE", ...t.trackingProps }));
            }
        }
        clearChannel(t) {
            let e = this._channels[t];
            null != e &&
                (delete this._channels[t],
                e.forEach((t) => {
                    let { notification: e, trackingProps: n } = t;
                    e.close(), $.default.track(te.HAw.NOTIFICATION_ACTION, { action: "ACK", ...n });
                }));
        }
    })();
function tE() {
    return !!(
        W.A.getDesktopType() === te.nRU.NEVER ||
        K.A.getStatus() === te.clD.DND ||
        G.NO.getSetting() ||
        P.A.isCurrentUserInRestrictedHours()
    );
}
function tN(t) {
    p.A.increment({
        name: i.K.NOTIFICATION_SOUND_PLAYBACK_ATTEMPT,
        tags: [`reason:${t ? "played" : "disabled_by_user"}`],
    });
}
function tT(t) {
    return null != X.A.getVoiceStateForChannel(t);
}
class tg extends a.Ay.Store {
    static displayName = "NotificationStore";
    initialize() {
        this.waitFor(E.A, M.A, P.A, b.A, C.A, F.A, W.A, H.A, Y.Ay, B.A, x.Ay, K.A, L.A, q.A, J.A, j.default, X.A);
    }
}
new tg(
    u.h,
    __OVERLAY__
        ? {}
        : {
              NOTIFICATIONS_SET_PERMISSION_STATE: function (t) {
                  let { enabled: e } = t;
                  e !== te.kCE.ENABLED ||
                      Q.isPlatformEmbedded ||
                      tt.A.showNotification(
                          n(705194),
                          ta.intl.string(ta.t.VSgOVg),
                          ta.intl.string(ta.t["1UJvqc"]),
                          { notif_type: "NOTIFICATIONS_SET_PERMISSION_STATE" },
                          {
                              sound: tr,
                              volume: to,
                              tag: "hello",
                              onClick: () => {
                                  window.focus();
                              },
                              isUserAvatar: !1,
                          },
                      );
              },
              NOTIFICATION_CREATE: function (t) {
                  let { icon: e, title: n, body: i, trackingProps: l, options: a } = t;
                  return !tE() && (tt.A.showNotification(e, n, i, l, a), !1);
              },
              WINDOW_FOCUS: function (t) {
                  if ((td = t.focused)) {
                      let t = x.Ay.getChannelId();
                      null != t && t_.clearChannel(t);
                  }
              },
              MESSAGE_CREATE: function (t) {
                  let { channelId: e, message: l, optimistic: a } = t;
                  if (a) return !1;
                  let r = M.A.getChannel(e),
                      s = j.default.getUser(l.author?.id),
                      c = j.default.getCurrentUser();
                  if (null == r || null == s || null == c) return !1;
                  let f = F.A.getMessage(e, l.id) ?? (0, S.rh)(l),
                      _ = Y.Ay.getMentionCount(e);
                  (0, Y.Wm)(f, c) && _ > 0 && o.O.announce((0, N.Ay)({ channel: r, mentionCount: _ }));
                  let T = (0, m.lx)(l, e, !td),
                      g = W.A.getNotifyMessagesInSelectedChannel() && (0, m.kY)(l, e);
                  if (!T && !g) return !1;
                  if (P.A.isCurrentUserInRestrictedHours())
                      return (
                          p.A.increment({
                              name: i.K.NOTIFICATION_SOUND_PLAYBACK_ATTEMPT,
                              tags: ["reason:restricted_hours"],
                          }),
                          !1
                      );
                  if (J.A.hasAction())
                      return (
                          p.A.increment({
                              name: i.K.NOTIFICATION_SOUND_PLAYBACK_ATTEMPT,
                              tags: ["reason:required_action"],
                          }),
                          !1
                      );
                  if (
                      l.type === te.lAJ.CHANGELOG &&
                      (null == l.changelog_id || E.A.latestChangelogId() !== l.changelog_id)
                  )
                      return !1;
                  let I = !W.A.isSoundDisabled(tr);
                  if ((g && (tN(I), I && tt.A.playNotificationSound("message3", 0.4), !td)) || !T) return !1;
                  let h = n(773371).default,
                      C = n(592598).A;
                  if (
                      null != h.getFocusedPID() &&
                      !C.isNotificationDisabled(ti.KS.TextChat) &&
                      !q.A.disableNotifications
                  )
                      return !1;
                  let { icon: y, title: D, body: v, emoji: L } = (0, m.TB)(r, l, s),
                      k = !(function (t) {
                          let e;
                          return (
                              null != t &&
                              ((e = U().v3(String(t))) < 0 && (e += 0x100000000), e % 0x7fffffff < 21474836.47)
                          );
                      })(c?.id);
                  if (
                      (u.h.dispatch({
                          type: "RPC_NOTIFICATION_CREATE",
                          channelId: r.id,
                          message: l,
                          icon: y,
                          title: D,
                          body: v,
                      }),
                      (0, O.n)(l, r.guild_id),
                      W.A.getDesktopType() === te.nRU.NEVER)
                  )
                      return tN(I), I && tt.A.playNotificationSound(tr, to), !1;
                  tN(I),
                      tt.A.showNotification(
                          y,
                          D,
                          v,
                          {
                              notif_type: "MESSAGE_CREATE",
                              notif_user_id: l.author?.id,
                              message_id: l.id,
                              message_type: l.type,
                              channel_id: r.id,
                              channel_type: r.type,
                              guild_id: r.guild_id,
                              badge: (0, Y.Wm)(f, c),
                          },
                          {
                              omitViewTracking: k,
                              tag: l.id,
                              sound: I ? tr : void 0,
                              volume: to,
                              onClick() {
                                  (0, R.iN)(r.id),
                                      (r.type === te.rbe.GUILD_VOICE || r.type === te.rbe.GUILD_STAGE_VOICE) &&
                                          d.A.updateChatOpen(r.id, !0),
                                      A.default.clickedNotification();
                              },
                              isUserAvatar: !0,
                              messageRecord: f,
                              fallbackDeepLink: (0, tt.I)(te.BVt.CHANNEL(r.guild_id, r.id, l.id)),
                              emoji: L,
                          },
                      ).then((t) => {
                          null != t && t_.track(r.id, t.notification, t.trackingProps);
                      });
              },
              CHANNEL_SELECT: function (t) {
                  let { channelId: e } = t;
                  return null != e && t_.clearChannel(e), !1;
              },
              MESSAGE_ACK: function (t) {
                  let { channelId: e } = t;
                  return t_.clearChannel(e), !1;
              },
              ACTIVITY_START: function (t) {
                  let { userId: e, activity: n } = t;
                  if (tE() || n.type !== te.$pd.PLAYING) return !1;
                  {
                      let t = j.default.getUser(e);
                      if (null == t) return !1;
                      let i = Z.Ay.getName(t),
                          l = n.name,
                          a = t.getAvatarURL(void 0, 128),
                          r = ta.intl.string(ta.t.XoTWsI),
                          o = ta.intl.formatToPlainString(ta.t.o4Aipn, { username: i, gameName: l });
                      return (
                          tt.A.showNotification(
                              a,
                              r,
                              o,
                              {
                                  notif_type: "ACTIVITY_START",
                                  activity_type: te.$pd.PLAYING,
                                  notif_user_id: e,
                                  activity_name: l,
                              },
                              {
                                  sound: "message2",
                                  playSoundIfDisabled: !1,
                                  volume: 0.4,
                                  onClick() {
                                      s.A.openPrivateChannel({ recipientIds: e });
                                  },
                                  isUserAvatar: !0,
                              },
                          ),
                          !1
                      );
                  }
              },
              VOICE_STATE_UPDATES: function (t) {
                  let { voiceStates: e } = t;
                  if (tE()) return;
                  let n = j.default.getCurrentUser();
                  if (null == n) return;
                  let i = e.find((t) => t.userId === n.id);
                  if (null == i) return;
                  let { channelId: l, guildId: a, suppress: r, requestToSpeakTimestamp: o } = i;
                  if (null == l || null == a || !(!r && null != o)) return;
                  let u = b.A.getGuild(a),
                      s = M.A.getChannel(l),
                      d = L.A.getStageInstanceByChannel(l);
                  null != u &&
                      null != s &&
                      null != d &&
                      tt.A.showNotification(
                          (0, V.Iv)(u, 128),
                          (0, T.m1)(s, j.default, B.A),
                          ta.intl.formatToPlainString(ta.t.sqnsSP, {
                              channelName: (0, T.m1)(s, j.default, B.A),
                              channelTopic: d?.topic,
                          }),
                          { notif_type: "Stage Speak Invite" },
                          { isUserAvatar: !1 },
                      );
              },
              STAGE_INSTANCE_UPDATE: function (t) {
                  let { instance: e } = t;
                  if (tE() || !e.send_start_notification || tT(e.channel_id)) return !1;
                  let n = j.default.getCurrentUser(),
                      i = b.A.getGuild(e.guild_id),
                      a = M.A.getChannel(e.channel_id),
                      r = j.default.getUser(e.host_id);
                  if (
                      null == n ||
                      null == a ||
                      null == i ||
                      null == r ||
                      !(0, m.Wv)(n, r, a) ||
                      !H.A.can(l.kg(te.xBc.CONNECT, te.xBc.VIEW_CHANNEL), a) ||
                      tA.has(e.id)
                  )
                      return !1;
                  tA.add(e.id),
                      tt.A.showNotification(
                          (0, V.Iv)(i, 128),
                          ta.intl.formatToPlainString(ta.t.bZ4Okd, { guildName: i.name }),
                          ta.intl.formatToPlainString(ta.t.qTelnO, {
                              username: z.Ay.getName(i.id, a.id, r),
                              topic: e.topic,
                          }),
                          { notif_type: "STAGE_INSTANCE_CREATE", guild_id: i.id, channel_id: a.id },
                          {
                              onClick() {
                                  (0, v.av)(a);
                              },
                              isUserAvatar: !1,
                          },
                      );
              },
              STAGE_INSTANCE_DELETE: function (t) {
                  let { instance: e } = t;
                  tA.delete(e.id);
              },
              GUILD_SCHEDULED_EVENT_UPDATE: function (t) {
                  let { guildScheduledEvent: e } = t;
                  if (tE() || null == e.notification_type) return !1;
                  e.notification_type === tn.b8.EVENT_START
                      ? e.entity_type === tn.Ps.STAGE_INSTANCE || e.entity_type === tn.Ps.VOICE
                          ? (function (t) {
                                if (tE()) return;
                                let e = t.channel_id;
                                if (null == e || tT(e)) return;
                                let n = j.default.getCurrentUser(),
                                    i = b.A.getGuild(t.guild_id),
                                    a = M.A.getChannel(t.channel_id),
                                    r = j.default.getUser(t.host_id);
                                null != n &&
                                    null != a &&
                                    null != i &&
                                    null != r &&
                                    H.A.can(l.kg(te.xBc.CONNECT, te.xBc.VIEW_CHANNEL), a) &&
                                    tt.A.showNotification(
                                        (0, V.Iv)(i, 128),
                                        ta.intl.formatToPlainString(ta.t.bOu6Wn, { guildName: i.name }),
                                        ta.intl.formatToPlainString(ta.t.GV9L8u, {
                                            topic: t.name,
                                            username: z.Ay.getName(i.id, a.id, r),
                                        }),
                                        {
                                            notif_type: "GUILD_SCHEDULED_EVENT_UPDATE",
                                            guild_id: i.id,
                                            channel_id: a.id,
                                        },
                                        {
                                            onClick() {
                                                t.entity_type === tn.Ps.STAGE_INSTANCE && (0, v.av)(a),
                                                    t.entity_type === tn.Ps.VOICE && f.default.selectVoiceChannel(a.id);
                                            },
                                            isUserAvatar: !1,
                                        },
                                    );
                            })(e)
                          : e.entity_type === tn.Ps.EXTERNAL &&
                            (function (t) {
                                if (tE()) return;
                                let e = j.default.getCurrentUser(),
                                    n = b.A.getGuild(t.guild_id);
                                null == e ||
                                    null == n ||
                                    tt.A.showNotification(
                                        (0, V.Iv)(n, 128),
                                        ta.intl.formatToPlainString(ta.t.bOu6Wn, { guildName: n.name }),
                                        ta.intl.formatToPlainString(ta.t.mYyaRB, { topic: t.name }),
                                        { notif_type: "GUILD_SCHEDULED_EVENT_UPDATE", guild_id: n.id },
                                        {
                                            onClick() {
                                                c.A.transitionToGuildSync(t.guild_id), (0, I.uR)({ eventId: t.id });
                                            },
                                            isUserAvatar: !1,
                                        },
                                    );
                            })(e)
                      : e.notification_type;
              },
              THREAD_CREATE: function (t) {
                  let { channel: e, isNewlyCreated: n } = t;
                  if (tE()) return !1;
                  let i = M.A.getChannel(e.parent_id);
                  if (null == i || !te.kvI.GUILD_THREADS_ONLY.has(i.type) || !n || !(0, m.q1)(e, i, !td)) return !1;
                  let { author: l, user: a } = (0, g.tY)(e);
                  if (null == a) return !1;
                  let r = b.A.getGuild(i.guild_id);
                  if (null == r) return !1;
                  let o = ta.intl.formatToPlainString(ta.t["2IGVl5"], {
                          channelName: (0, T.m1)(i, j.default, B.A),
                          guildName: r.name,
                      }),
                      u = ta.intl.formatToPlainString(ta.t.jPhTvT, {
                          channelName: (0, T.m1)(e, j.default, B.A),
                          userUsername: l?.nick ?? a?.username,
                      }),
                      s = a.getAvatarURL(void 0, 128);
                  tt.A.showNotification(
                      s,
                      o,
                      u,
                      { notif_type: "THREAD_CREATE", notif_user_id: a.id },
                      {
                          onClick() {
                              (0, k.JA)(e);
                          },
                          isUserAvatar: !0,
                      },
                  );
              },
              GENERIC_PUSH_NOTIFICATION_SENT: function (t) {
                  let e,
                      { icon: n, title: i, body: l, route: a, trackingType: r, tag: o } = t;
                  if (tE() || null == i || null == l || null == r || "reactions_push_notification" === r.toLowerCase())
                      return !1;
                  tt.A.showNotification(
                      n,
                      i,
                      l,
                      { notif_type: r },
                      {
                          onClick() {
                              null != a && ((0, h.A)(a), A.default.clickedNotification());
                          },
                          tag: o,
                          isUserAvatar: !1,
                      },
                  ).then((t) => {
                      null != t && null != e && t_.track(e, t.notification, t.trackingProps);
                  });
              },
              REACTION_NOTIFICATION_SENT: function (t) {
                  let { icon: e, title: n, body: i, route: l, trackingType: a, message: r, reactorUserId: o } = t;
                  if (tE() || null == n || null == i || null == a) return !1;
                  let u = r.channel_id;
                  if (null == u) return !1;
                  let s = M.A.getChannel(u);
                  if (null == s) return !1;
                  let d = j.default.getUser(o);
                  if (!(0, m.nR)({ message: r, channel: s, reactor: d, includeSelectedChannel: !td })) return !1;
                  tt.A.showNotification(
                      e,
                      n,
                      i,
                      { notif_type: a, notif_user_id: o, message_id: r.id },
                      {
                          onClick() {
                              null != l && ((0, h.A)(l), A.default.clickedNotification());
                          },
                          isUserAvatar: !0,
                      },
                  ).then((t) => {
                      null != t && null != u && t_.track(u, t.notification, t.trackingProps);
                  });
              },
              WINDOW_HIDDEN: function () {
                  let t = (0, Q.isWindows)(),
                      e = (0, Q.isLinux)();
                  if (!(!r.w.get(ts, !1) && Q.isPlatformEmbedded && (t || e))) return !1;
                  let i = !1;
                  return (
                      null != tc && (i = tf.includes(tc)),
                      !!i &&
                          (tt.A.showNotification(
                              n(608598),
                              ta.intl.string(ta.t.VSgOVg),
                              ta.intl.string(ta.t["+J/F66"]),
                              { notif_type: "WINDOW_HIDDEN" },
                              {
                                  overrideStreamerMode: !0,
                                  onClick: () => {
                                      (0, D.pX)((0, w.settingsPathToRoute)(t ? tl.od.WINDOWS : tl.od.LINUX));
                                  },
                                  onShown: () => {
                                      r.w.set(ts, !0);
                                  },
                                  isUserAvatar: !1,
                              },
                          ),
                          !1)
                  );
              },
              LOGOUT: function () {
                  return r.w.remove(ts), !1;
              },
              CONNECTION_OPEN: function (t) {
                  let { countryCode: e, guilds: n } = t;
                  (tc = e), tA.clear(), n.forEach((t) => t.stage_instances.forEach((t) => tA.add(t.id)));
              },
              MESSAGE_REMINDER_DUE: function (t) {
                  let { savedMessage: e } = t;
                  if (tE()) return !1;
                  let n = e.message;
                  if (null == n || null == n.author) return !1;
                  let i = M.A.getChannel(e.saveData.channelId);
                  if (null == i) return !1;
                  let { icon: l, body: a } = (0, m.TB)(i, n, n.author);
                  tt.A.showNotification(
                      l,
                      ta.intl.string(ta.t.IjZJB5),
                      a,
                      { notif_type: "MESSAGE_REMINDER_DUE" },
                      {
                          onClick() {
                              (0, h.A)(te.BVt.CHANNEL(i?.getGuildId(), i.id, n.id));
                          },
                          isUserAvatar: !0,
                      },
                  );
              },
              RESTRICTED_HOURS_WARNING: function (t) {
                  let { title: e, subtitle: i } = t;
                  if (tE() || !W.A.screenDowntimeReminder) return !1;
                  tt.A.showNotification(
                      n(608598),
                      e,
                      i,
                      { notif_type: "RESTRICTED_HOURS_WARNING" },
                      { isUserAvatar: !1 },
                  );
              },
          },
);
