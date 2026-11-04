(n.d(e, { c: () => tr }), n(321073));
var i = n(350835),
    l = n(731738),
    a = n(136722),
    r = n(855986),
    u = n(506774),
    o = n(765178),
    s = n(73153),
    d = n(308528),
    c = n(367513),
    A = n(778858),
    f = n(264686),
    _ = n(597798),
    E = n(77729),
    N = n(883600),
    T = n(963027),
    I = n(47167),
    g = n(435470),
    h = n(707592),
    C = n(362280),
    S = n(380335),
    y = n(432005),
    p = n(913379),
    O = n(535586),
    m = n(411238),
    U = n(4043),
    P = n(695515),
    D = n(976860),
    R = n(378570),
    v = n(129095),
    L = n(446600),
    k = n(747926),
    G = n(253932),
    w = n(718446),
    V = n(260509),
    M = n(734057),
    F = n(71393),
    b = n(596344),
    W = n(803224),
    H = n(576705),
    Y = n(218461),
    B = n(994500),
    K = n(309010),
    x = n(894768),
    q = n(351906),
    J = n(870570),
    j = n(287809),
    X = n(977997),
    $ = n(129230),
    z = n(562153),
    Q = n(723702),
    Z = n(427262),
    tt = n(119622),
    te = n(652215),
    tn = n(988794),
    ti = n(672396),
    tl = n(355097),
    ta = n(792996);
let tr = "message1",
    tu = E.A?.features.supports("notifications") ? 20 : 1,
    to = "discord_dismissed_notification_shown",
    ts = document.hasFocus(),
    td = null,
    tc = new Set(),
    tA = ["FR", "GF", "PF", "TF", "RE", "GP", "MQ", "YT", "NC", "PM", "WF"],
    tf = new (class {
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
                    (e.close(), $.default.track(te.HAw.NOTIFICATION_ACTION, { action: "ACK", ...n }));
                }));
        }
    })();
function t_() {
    return !!(
        W.A.getDesktopType() === te.nRU.NEVER ||
        x.A.getStatus() === te.clD.DND ||
        G.NO.getSetting() ||
        P.A.isCurrentUserInRestrictedHours()
    );
}
function tE(t) {
    p.A.increment({
        name: l.K.NOTIFICATION_SOUND_PLAYBACK_ATTEMPT,
        tags: [`reason:${t ? "played" : "disabled_by_user"}`],
    });
}
function tN(t) {
    return null != X.A.getVoiceStateForChannel(t);
}
class tT extends r.Ay.Store {
    static displayName = "NotificationStore";
    initialize() {
        this.waitFor(N.A, M.A, P.A, F.A, S.A, b.A, W.A, H.A, Y.Ay, B.A, K.Ay, x.A, L.A, q.A, J.A, j.default, X.A);
    }
}
new tT(
    s.h,
    __OVERLAY__
        ? {}
        : {
              NOTIFICATIONS_SET_PERMISSION_STATE: function (t) {
                  let { enabled: e } = t;
                  e !== te.kCE.ENABLED ||
                      Q.isPlatformEmbedded ||
                      tt.Ay.showNotification(
                          n(705194),
                          ta.intl.string(ta.t.VSgOVg),
                          ta.intl.string(ta.t["1UJvqc"]),
                          { notif_type: "NOTIFICATIONS_SET_PERMISSION_STATE" },
                          {
                              sound: tr,
                              volume: 0.4,
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
                  return !t_() && (tt.Ay.showNotification(e, n, i, l, a), !1);
              },
              WINDOW_FOCUS: function (t) {
                  if ((ts = t.focused)) {
                      let t = K.Ay.getChannelId();
                      null != t && tf.clearChannel(t);
                  }
              },
              MESSAGE_CREATE: function (t) {
                  var e;
                  let { channelId: i, message: a, optimistic: r } = t;
                  if (r) return !1;
                  let u = M.A.getChannel(i),
                      d = j.default.getUser(a.author?.id),
                      A = j.default.getCurrentUser();
                  if (null == u || null == d || null == A) return !1;
                  let _ = b.A.getMessage(i, a.id) ?? (0, y.rh)(a),
                      E = Y.Ay.getMentionCount(i);
                  (0, Y.Wm)(_, A) && E > 0 && o.O.announce((0, T.Ay)({ channel: u, mentionCount: E }));
                  let I = (0, m.lx)(a, i, !ts),
                      g = W.A.getNotifyMessagesInSelectedChannel() && (0, m.kY)(a, i);
                  if (!I && !g) return !1;
                  if (P.A.isCurrentUserInRestrictedHours())
                      return (
                          p.A.increment({
                              name: l.K.NOTIFICATION_SOUND_PLAYBACK_ATTEMPT,
                              tags: ["reason:restricted_hours"],
                          }),
                          !1
                      );
                  if (J.A.hasAction())
                      return (
                          p.A.increment({
                              name: l.K.NOTIFICATION_SOUND_PLAYBACK_ATTEMPT,
                              tags: ["reason:required_action"],
                          }),
                          !1
                      );
                  if (
                      a.type === te.lAJ.CHANGELOG &&
                      (null == a.changelog_id || N.A.latestChangelogId() !== a.changelog_id)
                  )
                      return !1;
                  let h = !W.A.isSoundDisabled(tr);
                  if ((g && (tE(h), h && tt.Ay.playNotificationSound("message3", 0.4), !ts)) || !I) return !1;
                  let C = n(228342).default,
                      S = n(592598).A;
                  if (
                      null != C.getFocusedPID() &&
                      !S.isNotificationDisabled(ti.KS.TextChat) &&
                      !q.A.disableNotifications
                  )
                      return !1;
                  let { icon: D, title: v, body: L, emoji: k } = (0, m.TB)(u, a, d),
                      G = !(null != (e = A?.id) && (0, U.r)(e, 0.01));
                  if (
                      (s.h.dispatch({
                          type: "RPC_NOTIFICATION_CREATE",
                          channelId: u.id,
                          message: a,
                          icon: D,
                          title: v,
                          body: L,
                      }),
                      (0, O.n)(a, u.guild_id),
                      W.A.getDesktopType() === te.nRU.NEVER)
                  )
                      return (tE(h), h && tt.Ay.playNotificationSound(tr, 0.4), !1);
                  (tE(h),
                      tt.Ay.showNotification(
                          D,
                          v,
                          L,
                          {
                              notif_type: "MESSAGE_CREATE",
                              notif_user_id: a.author?.id,
                              message_id: a.id,
                              message_type: a.type,
                              channel_id: u.id,
                              channel_type: u.type,
                              guild_id: u.guild_id,
                              badge: (0, Y.Wm)(_, A),
                          },
                          {
                              omitViewTracking: G,
                              tag: a.id,
                              sound: h ? tr : void 0,
                              volume: 0.4,
                              onClick() {
                                  ((0, R.iN)(u.id),
                                      (u.type === te.rbe.GUILD_VOICE || u.type === te.rbe.GUILD_STAGE_VOICE) &&
                                          c.A.updateChatOpen(u.id, !0),
                                      f.default.clickedNotification());
                              },
                              isUserAvatar: !0,
                              messageRecord: _,
                              fallbackDeepLink: (0, tt.Id)(te.BVt.CHANNEL(u.guild_id, u.id, a.id)),
                              emoji: k,
                          },
                      ).then((t) => {
                          null != t && tf.track(u.id, t.notification, t.trackingProps);
                      }));
              },
              CHANNEL_SELECT: function (t) {
                  let { channelId: e } = t;
                  return (null != e && tf.clearChannel(e), !1);
              },
              MESSAGE_ACK: function (t) {
                  let { channelId: e } = t;
                  return (tf.clearChannel(e), !1);
              },
              ACTIVITY_START: function (t) {
                  let { userId: e, activity: n } = t;
                  if (t_() || n.type !== i.$.PLAYING) return !1;
                  {
                      let t = j.default.getUser(e);
                      if (null == t) return !1;
                      let l = Z.Ay.getName(t),
                          a = n.name,
                          r = t.getAvatarURL(void 0, 128),
                          u = ta.intl.string(ta.t.XoTWsI),
                          o = ta.intl.formatToPlainString(ta.t.o4Aipn, { username: l, gameName: a });
                      return (
                          tt.Ay.showNotification(
                              r,
                              u,
                              o,
                              {
                                  notif_type: "ACTIVITY_START",
                                  activity_type: i.$.PLAYING,
                                  notif_user_id: e,
                                  activity_name: a,
                              },
                              {
                                  sound: "message2",
                                  playSoundIfDisabled: !1,
                                  volume: 0.4,
                                  onClick() {
                                      d.A.openPrivateChannel({ recipientIds: e });
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
                  if (t_()) return;
                  let n = j.default.getCurrentUser();
                  if (null == n) return;
                  let i = e.find((t) => t.userId === n.id);
                  if (null == i) return;
                  let { channelId: l, guildId: a, suppress: r, requestToSpeakTimestamp: u } = i;
                  if (null == l || null == a || !(!r && null != u)) return;
                  let o = F.A.getGuild(a),
                      s = M.A.getChannel(l),
                      d = L.A.getStageInstanceByChannel(l);
                  null != o &&
                      null != s &&
                      null != d &&
                      tt.Ay.showNotification(
                          (0, V.Iv)(o, 128),
                          (0, I.m1)(s, j.default, B.A),
                          ta.intl.formatToPlainString(ta.t.sqnsSP, {
                              channelName: (0, I.m1)(s, j.default, B.A),
                              channelTopic: d?.topic,
                          }),
                          { notif_type: "Stage Speak Invite" },
                          { isUserAvatar: !1 },
                      );
              },
              STAGE_INSTANCE_UPDATE: function (t) {
                  let { instance: e } = t;
                  if (t_() || !e.send_start_notification || tN(e.channel_id)) return !1;
                  let n = j.default.getCurrentUser(),
                      i = F.A.getGuild(e.guild_id),
                      l = M.A.getChannel(e.channel_id),
                      r = j.default.getUser(e.host_id);
                  if (
                      null == n ||
                      null == l ||
                      null == i ||
                      null == r ||
                      !(0, m.Wv)(n, r, l) ||
                      !H.A.can(a.kg(te.xBc.CONNECT, te.xBc.VIEW_CHANNEL), l) ||
                      tc.has(e.id)
                  )
                      return !1;
                  (tc.add(e.id),
                      tt.Ay.showNotification(
                          (0, V.Iv)(i, 128),
                          ta.intl.formatToPlainString(ta.t.bZ4Okd, { guildName: i.name }),
                          ta.intl.formatToPlainString(ta.t.qTelnO, {
                              username: z.Ay.getName(i.id, l.id, r),
                              topic: e.topic,
                          }),
                          { notif_type: "STAGE_INSTANCE_CREATE", guild_id: i.id, channel_id: l.id },
                          {
                              onClick() {
                                  (0, v.av)(l);
                              },
                              isUserAvatar: !1,
                          },
                      ));
              },
              STAGE_INSTANCE_DELETE: function (t) {
                  let { instance: e } = t;
                  tc.delete(e.id);
              },
              GUILD_SCHEDULED_EVENT_UPDATE: function (t) {
                  let { guildScheduledEvent: e } = t;
                  if (t_() || null == e.notification_type) return !1;
                  e.notification_type === tn.b8.EVENT_START
                      ? e.entity_type === tn.Ps.STAGE_INSTANCE || e.entity_type === tn.Ps.VOICE
                          ? (function (t) {
                                if (t_()) return;
                                let e = t.channel_id;
                                if (null == e || tN(e)) return;
                                let n = j.default.getCurrentUser(),
                                    i = F.A.getGuild(t.guild_id),
                                    l = M.A.getChannel(t.channel_id),
                                    r = j.default.getUser(t.host_id);
                                null != n &&
                                    null != l &&
                                    null != i &&
                                    null != r &&
                                    H.A.can(a.kg(te.xBc.CONNECT, te.xBc.VIEW_CHANNEL), l) &&
                                    tt.Ay.showNotification(
                                        (0, V.Iv)(i, 128),
                                        ta.intl.formatToPlainString(ta.t.bOu6Wn, { guildName: i.name }),
                                        ta.intl.formatToPlainString(ta.t.GV9L8u, {
                                            topic: t.name,
                                            username: z.Ay.getName(i.id, l.id, r),
                                        }),
                                        {
                                            notif_type: "GUILD_SCHEDULED_EVENT_UPDATE",
                                            guild_id: i.id,
                                            channel_id: l.id,
                                        },
                                        {
                                            onClick() {
                                                (t.entity_type === tn.Ps.STAGE_INSTANCE && (0, v.av)(l),
                                                    t.entity_type === tn.Ps.VOICE &&
                                                        _.default.selectVoiceChannel(l.id));
                                            },
                                            isUserAvatar: !1,
                                        },
                                    );
                            })(e)
                          : e.entity_type === tn.Ps.EXTERNAL &&
                            (function (t) {
                                if (t_()) return;
                                let e = j.default.getCurrentUser(),
                                    n = F.A.getGuild(t.guild_id);
                                null == e ||
                                    null == n ||
                                    tt.Ay.showNotification(
                                        (0, V.Iv)(n, 128),
                                        ta.intl.formatToPlainString(ta.t.bOu6Wn, { guildName: n.name }),
                                        ta.intl.formatToPlainString(ta.t.mYyaRB, { topic: t.name }),
                                        { notif_type: "GUILD_SCHEDULED_EVENT_UPDATE", guild_id: n.id },
                                        {
                                            onClick() {
                                                (A.A.transitionToGuildSync(t.guild_id), (0, h.uR)({ eventId: t.id }));
                                            },
                                            isUserAvatar: !1,
                                        },
                                    );
                            })(e)
                      : e.notification_type;
              },
              THREAD_CREATE: function (t) {
                  let { channel: e, isNewlyCreated: n } = t;
                  if (t_()) return !1;
                  let i = M.A.getChannel(e.parent_id);
                  if (null == i || !te.kvI.GUILD_THREADS_ONLY.has(i.type) || !n || !(0, m.q1)(e, i, !ts)) return !1;
                  let { author: l, user: a } = (0, g.tY)(e);
                  if (null == a) return !1;
                  let r = F.A.getGuild(i.guild_id);
                  if (null == r) return !1;
                  let u = ta.intl.formatToPlainString(ta.t["2IGVl5"], {
                          channelName: (0, I.m1)(i, j.default, B.A),
                          guildName: r.name,
                      }),
                      o = ta.intl.formatToPlainString(ta.t.jPhTvT, {
                          channelName: (0, I.m1)(e, j.default, B.A),
                          userUsername: l?.nick ?? a?.username,
                      }),
                      s = a.getAvatarURL(void 0, 128);
                  tt.Ay.showNotification(
                      s,
                      u,
                      o,
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
                      { icon: n, title: i, body: l, route: a, trackingType: r, tag: u } = t;
                  if (t_() || null == i || null == l || null == r || "reactions_push_notification" === r.toLowerCase())
                      return !1;
                  tt.Ay.showNotification(
                      n,
                      i,
                      l,
                      { notif_type: r },
                      {
                          onClick() {
                              null != a && ((0, C.A)(a), f.default.clickedNotification());
                          },
                          tag: u,
                          isUserAvatar: !1,
                      },
                  ).then((t) => {
                      null != t && null != e && tf.track(e, t.notification, t.trackingProps);
                  });
              },
              REACTION_NOTIFICATION_SENT: function (t) {
                  let { icon: e, title: n, body: i, route: l, trackingType: a, message: r, reactorUserId: u } = t;
                  if (t_() || null == n || null == i || null == a) return !1;
                  let o = r.channel_id;
                  if (null == o) return !1;
                  let s = M.A.getChannel(o);
                  if (null == s) return !1;
                  let d = j.default.getUser(u);
                  if (!(0, m.nR)({ message: r, channel: s, reactor: d, includeSelectedChannel: !ts })) return !1;
                  tt.Ay.showNotification(
                      e,
                      n,
                      i,
                      { notif_type: a, notif_user_id: u, message_id: r.id },
                      {
                          onClick() {
                              null != l && ((0, C.A)(l), f.default.clickedNotification());
                          },
                          isUserAvatar: !0,
                      },
                  ).then((t) => {
                      null != t && null != o && tf.track(o, t.notification, t.trackingProps);
                  });
              },
              WINDOW_HIDDEN: function () {
                  let t = (0, Q.uF)(),
                      e = (0, Q.j9)();
                  if (!(!u.w.get(to, !1) && Q.isPlatformEmbedded && (t || e))) return !1;
                  let i = !1;
                  return (
                      null != td && (i = tA.includes(td)),
                      !!i &&
                          (tt.Ay.showNotification(
                              n(608598),
                              ta.intl.string(ta.t.VSgOVg),
                              ta.intl.string(ta.t["+J/F66"]),
                              { notif_type: "WINDOW_HIDDEN" },
                              {
                                  overrideStreamerMode: !0,
                                  onClick: () => {
                                      (0, D.pX)((0, w.T)(t ? tl.od.WINDOWS : tl.od.LINUX));
                                  },
                                  onShown: () => {
                                      u.w.set(to, !0);
                                  },
                                  isUserAvatar: !1,
                              },
                          ),
                          !1)
                  );
              },
              LOGOUT: function () {
                  return (u.w.remove(to), !1);
              },
              CONNECTION_OPEN: function (t) {
                  let { countryCode: e, guilds: n } = t;
                  ((td = e), tc.clear(), n.forEach((t) => t.stage_instances.forEach((t) => tc.add(t.id))));
              },
              MESSAGE_REMINDER_DUE: function (t) {
                  let { savedMessage: e } = t;
                  if (t_()) return !1;
                  let n = e.message;
                  if (null == n || null == n.author) return !1;
                  let i = M.A.getChannel(e.saveData.channelId);
                  if (null == i) return !1;
                  let { icon: l, body: a } = (0, m.TB)(i, n, n.author);
                  tt.Ay.showNotification(
                      l,
                      ta.intl.string(ta.t.IjZJB5),
                      a,
                      { notif_type: "MESSAGE_REMINDER_DUE" },
                      {
                          onClick() {
                              (0, C.A)(te.BVt.CHANNEL(i?.getGuildId(), i.id, n.id));
                          },
                          isUserAvatar: !0,
                      },
                  );
              },
              RESTRICTED_HOURS_WARNING: function (t) {
                  let { title: e, subtitle: i } = t;
                  if (t_() || !W.A.screenDowntimeReminder) return !1;
                  tt.Ay.showNotification(
                      n(608598),
                      e,
                      i,
                      { notif_type: "RESTRICTED_HOURS_WARNING" },
                      { isUserAvatar: !1 },
                  );
              },
          },
);
