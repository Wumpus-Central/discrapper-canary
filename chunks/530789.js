n.d(e, { pD: () => tr, cH: () => ta }), n(321073);
var i = n(136722),
    l = n(17928),
    a = n(506774),
    r = n(765178),
    o = n(228366),
    u = n(308528),
    s = n(367513),
    d = n(66834),
    c = n(264686),
    f = n(730852),
    A = n(77729),
    _ = n(883600),
    E = n(963027),
    g = n(47167),
    N = n(435470),
    T = n(707592),
    h = n(741231),
    I = n(380335),
    C = n(320095),
    S = n(535586),
    p = n(938005),
    m = n(571524),
    O = n(181370),
    y = n.n(O),
    U = n(695515),
    D = n(976860),
    P = n(378570),
    R = n(790535),
    v = n(446600),
    k = n(747926),
    w = n(885386),
    G = n(718446),
    L = n(260509),
    V = n(734057),
    M = n(71393),
    b = n(232835),
    W = n(803224),
    F = n(576705),
    H = n(222823),
    Y = n(994500),
    x = n(309010),
    B = n(461213),
    J = n(351906),
    j = n(870570),
    q = n(287809),
    X = n(977997),
    K = n(174459),
    $ = n(562153),
    z = n(723702),
    Q = n(427262),
    Z = n(756876),
    tt = n(652215),
    te = n(988794),
    tn = n(672396),
    ti = n(355097),
    tl = n(375708);
let ta = "message1",
    tr = 0.4,
    to = A.A?.features.supports("notifications") ? 20 : 1,
    tu = "discord_dismissed_notification_shown",
    ts = document.hasFocus(),
    td = null,
    tc = new Set(),
    tf = ["FR", "GF", "PF", "TF", "RE", "GP", "MQ", "YT", "NC", "PM", "WF"],
    tA = new (class {
        _channels = {};
        track(t, e, n) {
            let i = this._channels[t];
            for (
                null == i && ((i = []), (this._channels[t] = i)), i.push({ notification: e, trackingProps: n });
                i.length > to;
            ) {
                let t = i.shift();
                t?.notification?.close != null &&
                    (t.notification.close(),
                    K.default.track(tt.HAw.NOTIFICATION_ACTION, { action: "REMOVE", ...t.trackingProps }));
            }
        }
        clearChannel(t) {
            let e = this._channels[t];
            null != e &&
                (delete this._channels[t],
                e.forEach((t) => {
                    let { notification: e, trackingProps: n } = t;
                    e.close(), K.default.track(tt.HAw.NOTIFICATION_ACTION, { action: "ACK", ...n });
                }));
        }
    })();
function t_() {
    return !!(
        W.A.getDesktopType() === tt.nRU.NEVER ||
        B.A.getStatus() === tt.clD.DND ||
        w.NO.getSetting() ||
        U.A.isCurrentUserInRestrictedHours()
    );
}
function tE(t) {
    return null != X.A.getVoiceStateForChannel(t);
}
class tg extends l.Ay.Store {
    static displayName = "NotificationStore";
    initialize() {
        this.waitFor(_.A, V.A, U.A, M.A, I.A, b.A, W.A, F.A, H.Ay, Y.A, x.A, B.A, v.A, J.A, j.A, q.default, X.A);
    }
}
new tg(
    o.h,
    __OVERLAY__
        ? {}
        : {
              NOTIFICATIONS_SET_PERMISSION_STATE: function (t) {
                  let { enabled: e } = t;
                  e !== tt.kCE.ENABLED ||
                      z.isPlatformEmbedded ||
                      Z.A.showNotification(
                          n(705194),
                          tl.intl.string(tl.t.VSgOVg),
                          tl.intl.string(tl.t["1UJvqc"]),
                          { notif_type: "NOTIFICATIONS_SET_PERMISSION_STATE" },
                          {
                              sound: ta,
                              volume: tr,
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
                  return !t_() && (Z.A.showNotification(e, n, i, l, a), !1);
              },
              WINDOW_FOCUS: function (t) {
                  if ((ts = t.focused)) {
                      let t = x.A.getChannelId();
                      null != t && tA.clearChannel(t);
                  }
              },
              MESSAGE_CREATE: function (t) {
                  let { channelId: e, message: i, optimistic: l } = t;
                  if (l) return !1;
                  let a = V.A.getChannel(e),
                      u = q.default.getUser(i.author?.id),
                      d = q.default.getCurrentUser();
                  if (null == a || null == u || null == d) return !1;
                  let f = b.A.getMessage(e, i.id) ?? (0, C.rh)(i),
                      A = H.Ay.getMentionCount(e);
                  (0, H.Wm)(f, d) && A > 0 && r.O.announce((0, E.Ay)({ channel: a, mentionCount: A }));
                  let g = (0, p.lx)(i, e, !ts),
                      N = W.A.getNotifyMessagesInSelectedChannel() && (0, p.kY)(i, e);
                  if (
                      (!g && !N) ||
                      U.A.isCurrentUserInRestrictedHours() ||
                      j.A.hasAction() ||
                      (i.type === tt.lAJ.CHANGELOG &&
                          (null == i.changelog_id || _.A.latestChangelogId() !== i.changelog_id))
                  )
                      return !1;
                  let T = !W.A.isSoundDisabled(ta);
                  if ((N && (T && Z.A.playNotificationSound("message3", 0.4), !ts)) || !g) return !1;
                  let h = n(773371).default,
                      I = n(592598).A;
                  if (
                      null != h.getFocusedPID() &&
                      !I.isNotificationDisabled(tn.KS.TextChat) &&
                      !J.A.disableNotifications
                  )
                      return !1;
                  let { icon: m, title: O, body: D, emoji: R } = (0, p.TB)(a, i, u),
                      v = !((t) => {
                          let e;
                          return (
                              null != t &&
                              ((e = y().v3(String(t))) < 0 && (e += 0x100000000), e % 0x7fffffff < 21474836.47)
                          );
                      })(d?.id);
                  if (
                      (o.h.dispatch({
                          type: "RPC_NOTIFICATION_CREATE",
                          channelId: a.id,
                          message: i,
                          icon: m,
                          title: O,
                          body: D,
                      }),
                      (0, S.n)(i, a.guild_id),
                      W.A.getDesktopType() === tt.nRU.NEVER)
                  )
                      return T && Z.A.playNotificationSound(ta, tr), !1;
                  Z.A.showNotification(
                      m,
                      O,
                      D,
                      {
                          notif_type: "MESSAGE_CREATE",
                          notif_user_id: i.author?.id,
                          message_id: i.id,
                          message_type: i.type,
                          channel_id: a.id,
                          channel_type: a.type,
                          guild_id: a.guild_id,
                          badge: (0, H.Wm)(f, d),
                      },
                      {
                          omitViewTracking: v,
                          tag: i.id,
                          sound: T ? ta : void 0,
                          volume: tr,
                          onClick() {
                              (0, P.iN)(a.id),
                                  (a.type === tt.rbe.GUILD_VOICE || a.type === tt.rbe.GUILD_STAGE_VOICE) &&
                                      s.A.updateChatOpen(a.id, !0),
                                  c.default.clickedNotification();
                          },
                          isUserAvatar: !0,
                          messageRecord: f,
                          fallbackDeepLink: (0, Z.I)(tt.BVt.CHANNEL(a.guild_id, a.id, i.id)),
                          emoji: R,
                      },
                  ).then((t) => {
                      null != t && tA.track(a.id, t.notification, t.trackingProps);
                  });
              },
              CHANNEL_SELECT: function (t) {
                  let { channelId: e } = t;
                  return null != e && tA.clearChannel(e), !1;
              },
              MESSAGE_ACK: function (t) {
                  let { channelId: e } = t;
                  return tA.clearChannel(e), !1;
              },
              ACTIVITY_START: function (t) {
                  let { userId: e, activity: n } = t;
                  if (t_() || n.type !== tt.$pd.PLAYING) return !1;
                  {
                      let t = q.default.getUser(e);
                      if (null == t) return !1;
                      let i = Q.Ay.getName(t),
                          l = n.name,
                          a = t.getAvatarURL(void 0, 128),
                          r = tl.intl.string(tl.t.XoTWsI),
                          o = tl.intl.formatToPlainString(tl.t.o4Aipn, { username: i, gameName: l });
                      return (
                          Z.A.showNotification(
                              a,
                              r,
                              o,
                              {
                                  notif_type: "ACTIVITY_START",
                                  activity_type: tt.$pd.PLAYING,
                                  notif_user_id: e,
                                  activity_name: l,
                              },
                              {
                                  sound: "message2",
                                  playSoundIfDisabled: !1,
                                  volume: 0.4,
                                  onClick() {
                                      u.A.openPrivateChannel({ recipientIds: e });
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
                  let n = q.default.getCurrentUser();
                  if (null == n) return;
                  let i = e.find((t) => t.userId === n.id);
                  if (null == i) return;
                  let { channelId: l, guildId: a, suppress: r, requestToSpeakTimestamp: o } = i;
                  if (null == l || null == a || !(!r && null != o)) return;
                  let u = M.A.getGuild(a),
                      s = V.A.getChannel(l),
                      d = v.A.getStageInstanceByChannel(l);
                  null != u &&
                      null != s &&
                      null != d &&
                      Z.A.showNotification(
                          (0, L.Iv)(u, 128),
                          (0, g.m1)(s, q.default, Y.A),
                          tl.intl.formatToPlainString(tl.t.sqnsSP, {
                              channelName: (0, g.m1)(s, q.default, Y.A),
                              channelTopic: d?.topic,
                          }),
                          { notif_type: "Stage Speak Invite" },
                          { isUserAvatar: !1 },
                      );
              },
              STAGE_INSTANCE_UPDATE: function (t) {
                  let { instance: e } = t;
                  if (t_() || !e.send_start_notification || tE(e.channel_id)) return !1;
                  let n = q.default.getCurrentUser(),
                      l = M.A.getGuild(e.guild_id),
                      a = V.A.getChannel(e.channel_id),
                      r = q.default.getUser(e.host_id);
                  if (
                      null == n ||
                      null == a ||
                      null == l ||
                      null == r ||
                      !(0, p.Wv)(n, r, a) ||
                      !F.A.can(i.kg(tt.xBc.CONNECT, tt.xBc.VIEW_CHANNEL), a) ||
                      tc.has(e.id)
                  )
                      return !1;
                  tc.add(e.id),
                      Z.A.showNotification(
                          (0, L.Iv)(l, 128),
                          tl.intl.formatToPlainString(tl.t.bZ4Okd, { guildName: l.name }),
                          tl.intl.formatToPlainString(tl.t.qTelnO, {
                              username: $.Ay.getName(l.id, a.id, r),
                              topic: e.topic,
                          }),
                          { notif_type: "STAGE_INSTANCE_CREATE", guild_id: l.id, channel_id: a.id },
                          {
                              onClick() {
                                  (0, R.av)(a);
                              },
                              isUserAvatar: !1,
                          },
                      );
              },
              STAGE_INSTANCE_DELETE: function (t) {
                  let { instance: e } = t;
                  tc.delete(e.id);
              },
              GUILD_SCHEDULED_EVENT_UPDATE: function (t) {
                  let { guildScheduledEvent: e } = t;
                  if (t_() || null == e.notification_type) return !1;
                  e.notification_type === te.b8.EVENT_START &&
                      (e.entity_type === te.Ps.STAGE_INSTANCE || e.entity_type === te.Ps.VOICE
                          ? (function (t) {
                                if (t_()) return;
                                let e = t.channel_id;
                                if (null == e || tE(e)) return;
                                let n = q.default.getCurrentUser(),
                                    l = M.A.getGuild(t.guild_id),
                                    a = V.A.getChannel(t.channel_id),
                                    r = q.default.getUser(t.host_id);
                                null != n &&
                                    null != a &&
                                    null != l &&
                                    null != r &&
                                    F.A.can(i.kg(tt.xBc.CONNECT, tt.xBc.VIEW_CHANNEL), a) &&
                                    Z.A.showNotification(
                                        (0, L.Iv)(l, 128),
                                        tl.intl.formatToPlainString(tl.t.bOu6Wn, { guildName: l.name }),
                                        tl.intl.formatToPlainString(tl.t.GV9L8u, {
                                            topic: t.name,
                                            username: $.Ay.getName(l.id, a.id, r),
                                        }),
                                        {
                                            notif_type: "GUILD_SCHEDULED_EVENT_UPDATE",
                                            guild_id: l.id,
                                            channel_id: a.id,
                                        },
                                        {
                                            onClick() {
                                                t.entity_type === te.Ps.STAGE_INSTANCE && (0, R.av)(a),
                                                    t.entity_type === te.Ps.VOICE && f.default.selectVoiceChannel(a.id);
                                            },
                                            isUserAvatar: !1,
                                        },
                                    );
                            })(e)
                          : e.entity_type === te.Ps.EXTERNAL &&
                            (function (t) {
                                if (t_()) return;
                                let e = q.default.getCurrentUser(),
                                    n = M.A.getGuild(t.guild_id);
                                null == e ||
                                    null == n ||
                                    Z.A.showNotification(
                                        (0, L.Iv)(n, 128),
                                        tl.intl.formatToPlainString(tl.t.bOu6Wn, { guildName: n.name }),
                                        tl.intl.formatToPlainString(tl.t.mYyaRB, { topic: t.name }),
                                        { notif_type: "GUILD_SCHEDULED_EVENT_UPDATE", guild_id: n.id },
                                        {
                                            onClick() {
                                                d.A.transitionToGuildSync(t.guild_id), (0, T.uR)({ eventId: t.id });
                                            },
                                            isUserAvatar: !1,
                                        },
                                    );
                            })(e));
              },
              THREAD_CREATE: function (t) {
                  let { channel: e, isNewlyCreated: n } = t;
                  if (t_()) return !1;
                  let i = V.A.getChannel(e.parent_id);
                  if (null == i || !tt.kvI.GUILD_THREADS_ONLY.has(i.type) || !n || !(0, p.q1)(e, i, !ts)) return !1;
                  let { author: l, user: a } = (0, N.tY)(e);
                  if (null == a) return !1;
                  let r = M.A.getGuild(i.guild_id);
                  if (null == r) return !1;
                  let o = tl.intl.formatToPlainString(tl.t["2IGVl5"], {
                          channelName: (0, g.m1)(i, q.default, Y.A),
                          guildName: r.name,
                      }),
                      u = tl.intl.formatToPlainString(tl.t.jPhTvT, {
                          channelName: (0, g.m1)(e, q.default, Y.A),
                          userUsername: l?.nick ?? a?.username,
                      }),
                      s = a.getAvatarURL(void 0, 128);
                  Z.A.showNotification(
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
                  if (t_() || null == i || null == l || null == r || "reactions_push_notification" === r.toLowerCase())
                      return !1;
                  Z.A.showNotification(
                      n,
                      i,
                      l,
                      { notif_type: r },
                      {
                          onClick() {
                              null != a && ((0, h.A)(a), c.default.clickedNotification());
                          },
                          tag: o,
                          isUserAvatar: !1,
                      },
                  ).then((t) => {
                      null != t && null != e && tA.track(e, t.notification, t.trackingProps);
                  });
              },
              REACTION_NOTIFICATION_SENT: function (t) {
                  let { icon: e, title: n, body: i, route: l, trackingType: a, message: r, reactorUserId: o } = t;
                  if (t_() || null == n || null == i || null == a) return !1;
                  let u = r.channel_id;
                  if (null == u || (x.A.getCurrentlySelectedChannelId() === u && ts)) return !1;
                  let s = V.A.getChannel(u);
                  if (null == s) return !1;
                  if (s.type === tt.rbe.GROUP_DM) {
                      let t = q.default.getCurrentUser();
                      if (
                          r.author?.id !== t?.id &&
                          !m.A.getConfig({ location: "desktopNotification" }).showSettingsToggle
                      )
                          return !1;
                  }
                  Z.A.showNotification(
                      e,
                      n,
                      i,
                      { notif_type: a, notif_user_id: o, message_id: r.id },
                      {
                          onClick() {
                              null != l && ((0, h.A)(l), c.default.clickedNotification());
                          },
                          isUserAvatar: !0,
                      },
                  ).then((t) => {
                      null != t && null != u && tA.track(u, t.notification, t.trackingProps);
                  });
              },
              WINDOW_HIDDEN: function () {
                  let t = (0, z.isWindows)(),
                      e = (0, z.isLinux)();
                  if (!(!a.w.get(tu, !1) && z.isPlatformEmbedded && (t || e))) return !1;
                  let i = !1;
                  return (
                      null != td && (i = tf.includes(td)),
                      !!i &&
                          (Z.A.showNotification(
                              n(608598),
                              tl.intl.string(tl.t.VSgOVg),
                              tl.intl.string(tl.t["+J/F66"]),
                              { notif_type: "WINDOW_HIDDEN" },
                              {
                                  overrideStreamerMode: !0,
                                  onClick: () => {
                                      (0, D.pX)((0, G.settingsPathToRoute)(t ? ti.od.WINDOWS : ti.od.LINUX));
                                  },
                                  onShown: () => {
                                      a.w.set(tu, !0);
                                  },
                                  isUserAvatar: !1,
                              },
                          ),
                          !1)
                  );
              },
              LOGOUT: function () {
                  return a.w.remove(tu), !1;
              },
              CONNECTION_OPEN: function (t) {
                  let { countryCode: e, guilds: n } = t;
                  (td = e), tc.clear(), n.forEach((t) => t.stage_instances.forEach((t) => tc.add(t.id)));
              },
              MESSAGE_REMINDER_DUE: function (t) {
                  let { savedMessage: e } = t;
                  if (t_()) return !1;
                  let n = e.message;
                  if (null == n || null == n.author) return !1;
                  let i = V.A.getChannel(e.saveData.channelId);
                  if (null == i) return !1;
                  let { icon: l, body: a } = (0, p.TB)(i, n, n.author);
                  Z.A.showNotification(
                      l,
                      tl.intl.string(tl.t.IjZJB5),
                      a,
                      { notif_type: "MESSAGE_REMINDER_DUE" },
                      {
                          onClick() {
                              (0, h.A)(tt.BVt.CHANNEL(i?.getGuildId(), i.id, n.id));
                          },
                          isUserAvatar: !0,
                      },
                  );
              },
              RESTRICTED_HOURS_WARNING: function (t) {
                  let { title: e, subtitle: i } = t;
                  if (t_() || !W.A.screenDowntimeReminder) return !1;
                  Z.A.showNotification(
                      n(608598),
                      e,
                      i,
                      { notif_type: "RESTRICTED_HOURS_WARNING" },
                      { isUserAvatar: !1 },
                  );
              },
          },
);
