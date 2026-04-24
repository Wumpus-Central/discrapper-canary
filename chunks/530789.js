e.d(n, { pD: () => ti, cH: () => te }), e(321073);
var i = e(136722),
    l = e(17928),
    a = e(506774),
    r = e(228366),
    o = e(308528),
    u = e(367513),
    s = e(686956),
    d = e(264686),
    c = e(956793),
    f = e(77729),
    A = e(883600),
    _ = e(47167),
    g = e(435470),
    E = e(707592),
    T = e(22007),
    N = e(380335),
    C = e(320095),
    h = e(535586),
    I = e(938005),
    p = e(571524),
    S = e(181370),
    m = e.n(S),
    v = e(695515),
    y = e(976860),
    U = e(378570),
    O = e(790535),
    R = e(446600),
    D = e(747926),
    k = e(253932),
    P = e(718446),
    G = e(260509),
    w = e(734057),
    L = e(71393),
    b = e(232835),
    V = e(803224),
    H = e(576705),
    F = e(222823),
    W = e(994500),
    M = e(309010),
    x = e(461213),
    B = e(351906),
    Y = e(287809),
    J = e(977997),
    X = e(954571),
    q = e(562153),
    j = e(723702),
    K = e(427262),
    Q = e(756876),
    Z = e(652215),
    $ = e(988794),
    z = e(672396),
    tt = e(355097),
    tn = e(985018);
let te = "message1",
    ti = 0.4,
    tl = f.A?.features.supports("notifications") ? 20 : 1,
    ta = "discord_dismissed_notification_shown",
    tr = document.hasFocus(),
    to = null,
    tu = new Set(),
    ts = ["FR", "GF", "PF", "TF", "RE", "GP", "MQ", "YT", "NC", "PM", "WF"],
    td = new (class {
        _channels = {};
        track(t, n, e) {
            let i = this._channels[t];
            for (
                null == i && ((i = []), (this._channels[t] = i)), i.push({ notification: n, trackingProps: e });
                i.length > tl;
            ) {
                let t = i.shift();
                t?.notification?.close != null &&
                    (t.notification.close(),
                    X.default.track(Z.HAw.NOTIFICATION_ACTION, { action: "REMOVE", ...t.trackingProps }));
            }
        }
        clearChannel(t) {
            let n = this._channels[t];
            null != n &&
                (delete this._channels[t],
                n.forEach((t) => {
                    let { notification: n, trackingProps: e } = t;
                    n.close(), X.default.track(Z.HAw.NOTIFICATION_ACTION, { action: "ACK", ...e });
                }));
        }
    })();
function tc() {
    return !!(
        V.A.getDesktopType() === Z.nRU.NEVER ||
        x.A.getStatus() === Z.clD.DND ||
        k.NO.getSetting() ||
        v.A.isCurrentUserInRestrictedHours()
    );
}
function tf(t) {
    return null != J.A.getVoiceStateForChannel(t);
}
class tA extends l.Ay.Store {
    static displayName = "NotificationStore";
    initialize() {
        this.waitFor(A.A, w.A, v.A, L.A, N.A, b.A, V.A, H.A, W.A, M.A, x.A, R.A, B.A, Y.default, J.A);
    }
}
new tA(
    r.h,
    __OVERLAY__
        ? {}
        : {
              NOTIFICATIONS_SET_PERMISSION_STATE: function (t) {
                  let { enabled: n } = t;
                  n !== Z.kCE.ENABLED ||
                      j.isPlatformEmbedded ||
                      Q.A.showNotification(
                          e(705194),
                          tn.intl.string(tn.t.VSgOVg),
                          tn.intl.string(tn.t["1UJvqc"]),
                          { notif_type: "NOTIFICATIONS_SET_PERMISSION_STATE" },
                          {
                              sound: te,
                              volume: ti,
                              tag: "hello",
                              onClick: () => {
                                  window.focus();
                              },
                              isUserAvatar: !1,
                          },
                      );
              },
              NOTIFICATION_CREATE: function (t) {
                  let { icon: n, title: e, body: i, trackingProps: l, options: a } = t;
                  return !tc() && (Q.A.showNotification(n, e, i, l, a), !1);
              },
              WINDOW_FOCUS: function (t) {
                  if ((tr = t.focused)) {
                      let t = M.A.getChannelId();
                      null != t && td.clearChannel(t);
                  }
              },
              MESSAGE_CREATE: function (t) {
                  let { channelId: n, message: i, optimistic: l } = t;
                  if (l) return !1;
                  let a = w.A.getChannel(n),
                      o = Y.default.getUser(i.author?.id),
                      s = Y.default.getCurrentUser();
                  if (null == a || null == o || null == s) return !1;
                  let c = (0, I.lx)(i, n, !tr),
                      f = V.A.getNotifyMessagesInSelectedChannel() && (0, I.kY)(i, n);
                  if (
                      (!c && !f) ||
                      v.A.isCurrentUserInRestrictedHours() ||
                      (i.type === Z.lAJ.CHANGELOG &&
                          (null == i.changelog_id || A.A.latestChangelogId() !== i.changelog_id))
                  )
                      return !1;
                  let _ = !V.A.isSoundDisabled(te);
                  if ((f && (_ && Q.A.playNotificationSound("message3", 0.4), !tr)) || !c) return !1;
                  let g = e(773371).default,
                      E = e(592598).A;
                  if (
                      null != g.getFocusedPID() &&
                      !E.isNotificationDisabled(z.KS.TextChat) &&
                      !B.A.disableNotifications
                  )
                      return !1;
                  let { icon: T, title: N, body: p, emoji: S } = (0, I.TB)(a, i, o),
                      y = !((t) => {
                          let n;
                          return (
                              null != t &&
                              ((n = m().v3(String(t))) < 0 && (n += 0x100000000), n % 0x7fffffff < 21474836.47)
                          );
                      })(s?.id);
                  if (
                      (r.h.dispatch({
                          type: "RPC_NOTIFICATION_CREATE",
                          channelId: a.id,
                          message: i,
                          icon: T,
                          title: N,
                          body: p,
                      }),
                      (0, h.n)(i, a.guild_id),
                      V.A.getDesktopType() === Z.nRU.NEVER)
                  )
                      return _ && Q.A.playNotificationSound(te, ti), !1;
                  let O = b.A.getMessage(n, i.id) ?? (0, C.rh)(i);
                  Q.A.showNotification(
                      T,
                      N,
                      p,
                      {
                          notif_type: "MESSAGE_CREATE",
                          notif_user_id: i.author?.id,
                          message_id: i.id,
                          message_type: i.type,
                          channel_id: a.id,
                          channel_type: a.type,
                          guild_id: a.guild_id,
                          badge: (0, F.Wm)(O, s),
                      },
                      {
                          omitViewTracking: y,
                          tag: i.id,
                          sound: _ ? te : void 0,
                          volume: ti,
                          onClick() {
                              (0, U.iN)(a.id),
                                  (a.type === Z.rbe.GUILD_VOICE || a.type === Z.rbe.GUILD_STAGE_VOICE) &&
                                      u.A.updateChatOpen(a.id, !0),
                                  d.default.clickedNotification();
                          },
                          isUserAvatar: !0,
                          messageRecord: O,
                          fallbackDeepLink: (0, Q.I)(Z.BVt.CHANNEL(a.guild_id, a.id, i.id)),
                          emoji: S,
                      },
                  ).then((t) => {
                      null != t && td.track(a.id, t.notification, t.trackingProps);
                  });
              },
              CHANNEL_SELECT: function (t) {
                  let { channelId: n } = t;
                  return null != n && td.clearChannel(n), !1;
              },
              MESSAGE_ACK: function (t) {
                  let { channelId: n } = t;
                  return td.clearChannel(n), !1;
              },
              ACTIVITY_START: function (t) {
                  let { userId: n, activity: e } = t;
                  if (tc() || e.type !== Z.$pd.PLAYING) return !1;
                  {
                      let t = Y.default.getUser(n);
                      if (null == t) return !1;
                      let i = K.Ay.getName(t),
                          l = e.name,
                          a = t.getAvatarURL(void 0, 128),
                          r = tn.intl.string(tn.t.XoTWsI),
                          u = tn.intl.formatToPlainString(tn.t.o4Aipn, { username: i, gameName: l });
                      return (
                          Q.A.showNotification(
                              a,
                              r,
                              u,
                              {
                                  notif_type: "ACTIVITY_START",
                                  activity_type: Z.$pd.PLAYING,
                                  notif_user_id: n,
                                  activity_name: l,
                              },
                              {
                                  sound: "message2",
                                  playSoundIfDisabled: !1,
                                  volume: 0.4,
                                  onClick() {
                                      o.A.openPrivateChannel({ recipientIds: n });
                                  },
                                  isUserAvatar: !0,
                              },
                          ),
                          !1
                      );
                  }
              },
              VOICE_STATE_UPDATES: function (t) {
                  let { voiceStates: n } = t;
                  if (tc()) return;
                  let e = Y.default.getCurrentUser();
                  if (null == e) return;
                  let i = n.find((t) => t.userId === e.id);
                  if (null == i) return;
                  let { channelId: l, guildId: a, suppress: r, requestToSpeakTimestamp: o } = i;
                  if (null == l || null == a || !(!r && null != o)) return;
                  let u = L.A.getGuild(a),
                      s = w.A.getChannel(l),
                      d = R.A.getStageInstanceByChannel(l);
                  null != u &&
                      null != s &&
                      null != d &&
                      Q.A.showNotification(
                          (0, G.Iv)(u, 128),
                          (0, _.m1)(s, Y.default, W.A),
                          tn.intl.formatToPlainString(tn.t.sqnsSP, {
                              channelName: (0, _.m1)(s, Y.default, W.A),
                              channelTopic: d?.topic,
                          }),
                          { notif_type: "Stage Speak Invite" },
                          { isUserAvatar: !1 },
                      );
              },
              STAGE_INSTANCE_UPDATE: function (t) {
                  let { instance: n } = t;
                  if (tc() || !n.send_start_notification || tf(n.channel_id)) return !1;
                  let e = Y.default.getCurrentUser(),
                      l = L.A.getGuild(n.guild_id),
                      a = w.A.getChannel(n.channel_id),
                      r = Y.default.getUser(n.host_id);
                  if (
                      null == e ||
                      null == a ||
                      null == l ||
                      null == r ||
                      !(0, I.Wv)(e, r, a) ||
                      !H.A.can(i.kg(Z.xBc.CONNECT, Z.xBc.VIEW_CHANNEL), a) ||
                      tu.has(n.id)
                  )
                      return !1;
                  tu.add(n.id),
                      Q.A.showNotification(
                          (0, G.Iv)(l, 128),
                          tn.intl.formatToPlainString(tn.t.bZ4Okd, { guildName: l.name }),
                          tn.intl.formatToPlainString(tn.t.qTelnO, {
                              username: q.Ay.getName(l.id, a.id, r),
                              topic: n.topic,
                          }),
                          { notif_type: "STAGE_INSTANCE_CREATE", guild_id: l.id, channel_id: a.id },
                          {
                              onClick() {
                                  (0, O.av)(a);
                              },
                              isUserAvatar: !1,
                          },
                      );
              },
              STAGE_INSTANCE_DELETE: function (t) {
                  let { instance: n } = t;
                  tu.delete(n.id);
              },
              GUILD_SCHEDULED_EVENT_UPDATE: function (t) {
                  let { guildScheduledEvent: n } = t;
                  if (tc() || null == n.notification_type) return !1;
                  n.notification_type === $.b8.EVENT_START &&
                      (n.entity_type === $.Ps.STAGE_INSTANCE || n.entity_type === $.Ps.VOICE
                          ? (function (t) {
                                if (tc()) return;
                                let n = t.channel_id;
                                if (null == n || tf(n)) return;
                                let e = Y.default.getCurrentUser(),
                                    l = L.A.getGuild(t.guild_id),
                                    a = w.A.getChannel(t.channel_id),
                                    r = Y.default.getUser(t.host_id);
                                null != e &&
                                    null != a &&
                                    null != l &&
                                    null != r &&
                                    H.A.can(i.kg(Z.xBc.CONNECT, Z.xBc.VIEW_CHANNEL), a) &&
                                    Q.A.showNotification(
                                        (0, G.Iv)(l, 128),
                                        tn.intl.formatToPlainString(tn.t.bOu6Wn, { guildName: l.name }),
                                        tn.intl.formatToPlainString(tn.t.GV9L8u, {
                                            topic: t.name,
                                            username: q.Ay.getName(l.id, a.id, r),
                                        }),
                                        {
                                            notif_type: "GUILD_SCHEDULED_EVENT_UPDATE",
                                            guild_id: l.id,
                                            channel_id: a.id,
                                        },
                                        {
                                            onClick() {
                                                t.entity_type === $.Ps.STAGE_INSTANCE && (0, O.av)(a),
                                                    t.entity_type === $.Ps.VOICE && c.default.selectVoiceChannel(a.id);
                                            },
                                            isUserAvatar: !1,
                                        },
                                    );
                            })(n)
                          : n.entity_type === $.Ps.EXTERNAL &&
                            (function (t) {
                                if (tc()) return;
                                let n = Y.default.getCurrentUser(),
                                    e = L.A.getGuild(t.guild_id);
                                null == n ||
                                    null == e ||
                                    Q.A.showNotification(
                                        (0, G.Iv)(e, 128),
                                        tn.intl.formatToPlainString(tn.t.bOu6Wn, { guildName: e.name }),
                                        tn.intl.formatToPlainString(tn.t.mYyaRB, { topic: t.name }),
                                        { notif_type: "GUILD_SCHEDULED_EVENT_UPDATE", guild_id: e.id },
                                        {
                                            onClick() {
                                                s.A.transitionToGuildSync(t.guild_id), (0, E.uR)({ eventId: t.id });
                                            },
                                            isUserAvatar: !1,
                                        },
                                    );
                            })(n));
              },
              THREAD_CREATE: function (t) {
                  let { channel: n, isNewlyCreated: e } = t;
                  if (tc()) return !1;
                  let i = w.A.getChannel(n.parent_id);
                  if (null == i || !Z.kvI.GUILD_THREADS_ONLY.has(i.type) || !e || !(0, I.q1)(n, i, !tr)) return !1;
                  let { author: l, user: a } = (0, g.tY)(n);
                  if (null == a) return !1;
                  let r = L.A.getGuild(i.guild_id);
                  if (null == r) return !1;
                  let o = tn.intl.formatToPlainString(tn.t["2IGVl5"], {
                          channelName: (0, _.m1)(i, Y.default, W.A),
                          guildName: r.name,
                      }),
                      u = tn.intl.formatToPlainString(tn.t.jPhTvT, {
                          channelName: (0, _.m1)(n, Y.default, W.A),
                          userUsername: l?.nick ?? a?.username,
                      }),
                      s = a.getAvatarURL(void 0, 128);
                  Q.A.showNotification(
                      s,
                      o,
                      u,
                      { notif_type: "THREAD_CREATE", notif_user_id: a.id },
                      {
                          onClick() {
                              (0, D.JA)(n);
                          },
                          isUserAvatar: !0,
                      },
                  );
              },
              GENERIC_PUSH_NOTIFICATION_SENT: function (t) {
                  let n,
                      { icon: e, title: i, body: l, route: a, trackingType: r, tag: o } = t;
                  if (tc() || null == i || null == l || null == r || "reactions_push_notification" === r.toLowerCase())
                      return !1;
                  Q.A.showNotification(
                      e,
                      i,
                      l,
                      { notif_type: r },
                      {
                          onClick() {
                              null != a && ((0, T.A)(a), d.default.clickedNotification());
                          },
                          tag: o,
                          isUserAvatar: !1,
                      },
                  ).then((t) => {
                      null != t && null != n && td.track(n, t.notification, t.trackingProps);
                  });
              },
              REACTION_NOTIFICATION_SENT: function (t) {
                  let { icon: n, title: e, body: i, route: l, trackingType: a, message: r, reactorUserId: o } = t;
                  if (tc() || null == e || null == i || null == a) return !1;
                  let u = r.channel_id;
                  if (null == u || (M.A.getCurrentlySelectedChannelId() === u && tr)) return !1;
                  let s = w.A.getChannel(u);
                  if (null == s) return !1;
                  if (s.type === Z.rbe.GROUP_DM) {
                      let t = Y.default.getCurrentUser();
                      if (
                          r.author?.id !== t?.id &&
                          !p.A.getConfig({ location: "desktopNotification" }).showSettingsToggle
                      )
                          return !1;
                  }
                  Q.A.showNotification(
                      n,
                      e,
                      i,
                      { notif_type: a, notif_user_id: o, message_id: r.id },
                      {
                          onClick() {
                              null != l && ((0, T.A)(l), d.default.clickedNotification());
                          },
                          isUserAvatar: !0,
                      },
                  ).then((t) => {
                      null != t && null != u && td.track(u, t.notification, t.trackingProps);
                  });
              },
              WINDOW_HIDDEN: function () {
                  let t = (0, j.isWindows)(),
                      n = (0, j.isLinux)();
                  if (!(!a.w.get(ta, !1) && j.isPlatformEmbedded && (t || n))) return !1;
                  let i = !1;
                  return (
                      null != to && (i = ts.includes(to)),
                      !!i &&
                          (Q.A.showNotification(
                              e(608598),
                              tn.intl.string(tn.t.VSgOVg),
                              tn.intl.string(tn.t["+J/F66"]),
                              { notif_type: "WINDOW_HIDDEN" },
                              {
                                  overrideStreamerMode: !0,
                                  onClick: () => {
                                      (0, y.pX)((0, P.settingsPathToRoute)(t ? tt.od.WINDOWS : tt.od.LINUX));
                                  },
                                  onShown: () => {
                                      a.w.set(ta, !0);
                                  },
                                  isUserAvatar: !1,
                              },
                          ),
                          !1)
                  );
              },
              LOGOUT: function () {
                  return a.w.remove(ta), !1;
              },
              CONNECTION_OPEN: function (t) {
                  let { countryCode: n, guilds: e } = t;
                  (to = n), tu.clear(), e.forEach((t) => t.stage_instances.forEach((t) => tu.add(t.id)));
              },
              MESSAGE_REMINDER_DUE: function (t) {
                  let { savedMessage: n } = t;
                  if (tc()) return !1;
                  let e = n.message;
                  if (null == e || null == e.author) return !1;
                  let i = w.A.getChannel(n.saveData.channelId);
                  if (null == i) return !1;
                  let { icon: l, body: a } = (0, I.TB)(i, e, e.author);
                  Q.A.showNotification(
                      l,
                      tn.intl.string(tn.t.IjZJB5),
                      a,
                      { notif_type: "MESSAGE_REMINDER_DUE" },
                      {
                          onClick() {
                              (0, T.A)(Z.BVt.CHANNEL(i?.getGuildId(), i.id, e.id));
                          },
                          isUserAvatar: !0,
                      },
                  );
              },
              RESTRICTED_HOURS_WARNING: function (t) {
                  let { title: n, subtitle: i } = t;
                  if (tc()) return !1;
                  Q.A.showNotification(
                      e(608598),
                      n,
                      i,
                      { notif_type: "RESTRICTED_HOURS_WARNING" },
                      { isUserAvatar: !1 },
                  );
              },
          },
);
