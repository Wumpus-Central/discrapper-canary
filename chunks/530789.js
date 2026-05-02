n.d(e, { pD: () => tl, cH: () => ti }), n(321073);
var i = n(136722),
    l = n(17928),
    a = n(506774),
    r = n(228366),
    o = n(308528),
    u = n(367513),
    s = n(66834),
    d = n(264686),
    c = n(730852),
    f = n(77729),
    A = n(883600),
    _ = n(47167),
    E = n(435470),
    N = n(707592),
    g = n(741231),
    T = n(380335),
    h = n(320095),
    I = n(535586),
    C = n(938005),
    S = n(571524),
    p = n(181370),
    O = n.n(p),
    m = n(695515),
    y = n(976860),
    U = n(378570),
    P = n(790535),
    D = n(446600),
    R = n(747926),
    v = n(885386),
    k = n(718446),
    G = n(260509),
    L = n(734057),
    w = n(71393),
    V = n(232835),
    b = n(803224),
    M = n(576705),
    F = n(222823),
    H = n(994500),
    W = n(309010),
    Y = n(461213),
    x = n(351906),
    B = n(870570),
    J = n(287809),
    j = n(977997),
    q = n(174459),
    X = n(562153),
    K = n(723702),
    $ = n(427262),
    z = n(756876),
    Q = n(652215),
    Z = n(988794),
    tt = n(672396),
    te = n(355097),
    tn = n(375708);
let ti = "message1",
    tl = 0.4,
    ta = f.A?.features.supports("notifications") ? 20 : 1,
    tr = "discord_dismissed_notification_shown",
    to = document.hasFocus(),
    tu = null,
    ts = new Set(),
    td = ["FR", "GF", "PF", "TF", "RE", "GP", "MQ", "YT", "NC", "PM", "WF"],
    tc = new (class {
        _channels = {};
        track(t, e, n) {
            let i = this._channels[t];
            for (
                null == i && ((i = []), (this._channels[t] = i)), i.push({ notification: e, trackingProps: n });
                i.length > ta;
            ) {
                let t = i.shift();
                t?.notification?.close != null &&
                    (t.notification.close(),
                    q.default.track(Q.HAw.NOTIFICATION_ACTION, { action: "REMOVE", ...t.trackingProps }));
            }
        }
        clearChannel(t) {
            let e = this._channels[t];
            null != e &&
                (delete this._channels[t],
                e.forEach((t) => {
                    let { notification: e, trackingProps: n } = t;
                    e.close(), q.default.track(Q.HAw.NOTIFICATION_ACTION, { action: "ACK", ...n });
                }));
        }
    })();
function tf() {
    return !!(
        b.A.getDesktopType() === Q.nRU.NEVER ||
        Y.A.getStatus() === Q.clD.DND ||
        v.NO.getSetting() ||
        m.A.isCurrentUserInRestrictedHours()
    );
}
function tA(t) {
    return null != j.A.getVoiceStateForChannel(t);
}
class t_ extends l.Ay.Store {
    static displayName = "NotificationStore";
    initialize() {
        this.waitFor(A.A, L.A, m.A, w.A, T.A, V.A, b.A, M.A, H.A, W.A, Y.A, D.A, x.A, B.A, J.default, j.A);
    }
}
new t_(
    r.h,
    __OVERLAY__
        ? {}
        : {
              NOTIFICATIONS_SET_PERMISSION_STATE: function (t) {
                  let { enabled: e } = t;
                  e !== Q.kCE.ENABLED ||
                      K.isPlatformEmbedded ||
                      z.A.showNotification(
                          n(705194),
                          tn.intl.string(tn.t.VSgOVg),
                          tn.intl.string(tn.t["1UJvqc"]),
                          { notif_type: "NOTIFICATIONS_SET_PERMISSION_STATE" },
                          {
                              sound: ti,
                              volume: tl,
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
                  return !tf() && (z.A.showNotification(e, n, i, l, a), !1);
              },
              WINDOW_FOCUS: function (t) {
                  if ((to = t.focused)) {
                      let t = W.A.getChannelId();
                      null != t && tc.clearChannel(t);
                  }
              },
              MESSAGE_CREATE: function (t) {
                  let { channelId: e, message: i, optimistic: l } = t;
                  if (l) return !1;
                  let a = L.A.getChannel(e),
                      o = J.default.getUser(i.author?.id),
                      s = J.default.getCurrentUser();
                  if (null == a || null == o || null == s) return !1;
                  let c = (0, C.lx)(i, e, !to),
                      f = b.A.getNotifyMessagesInSelectedChannel() && (0, C.kY)(i, e);
                  if (
                      (!c && !f) ||
                      m.A.isCurrentUserInRestrictedHours() ||
                      B.A.hasAction() ||
                      (i.type === Q.lAJ.CHANGELOG &&
                          (null == i.changelog_id || A.A.latestChangelogId() !== i.changelog_id))
                  )
                      return !1;
                  let _ = !b.A.isSoundDisabled(ti);
                  if ((f && (_ && z.A.playNotificationSound("message3", 0.4), !to)) || !c) return !1;
                  let E = n(773371).default,
                      N = n(592598).A;
                  if (
                      null != E.getFocusedPID() &&
                      !N.isNotificationDisabled(tt.KS.TextChat) &&
                      !x.A.disableNotifications
                  )
                      return !1;
                  let { icon: g, title: T, body: S, emoji: p } = (0, C.TB)(a, i, o),
                      y = !((t) => {
                          let e;
                          return (
                              null != t &&
                              ((e = O().v3(String(t))) < 0 && (e += 0x100000000), e % 0x7fffffff < 21474836.47)
                          );
                      })(s?.id);
                  if (
                      (r.h.dispatch({
                          type: "RPC_NOTIFICATION_CREATE",
                          channelId: a.id,
                          message: i,
                          icon: g,
                          title: T,
                          body: S,
                      }),
                      (0, I.n)(i, a.guild_id),
                      b.A.getDesktopType() === Q.nRU.NEVER)
                  )
                      return _ && z.A.playNotificationSound(ti, tl), !1;
                  let P = V.A.getMessage(e, i.id) ?? (0, h.rh)(i);
                  z.A.showNotification(
                      g,
                      T,
                      S,
                      {
                          notif_type: "MESSAGE_CREATE",
                          notif_user_id: i.author?.id,
                          message_id: i.id,
                          message_type: i.type,
                          channel_id: a.id,
                          channel_type: a.type,
                          guild_id: a.guild_id,
                          badge: (0, F.Wm)(P, s),
                      },
                      {
                          omitViewTracking: y,
                          tag: i.id,
                          sound: _ ? ti : void 0,
                          volume: tl,
                          onClick() {
                              (0, U.iN)(a.id),
                                  (a.type === Q.rbe.GUILD_VOICE || a.type === Q.rbe.GUILD_STAGE_VOICE) &&
                                      u.A.updateChatOpen(a.id, !0),
                                  d.default.clickedNotification();
                          },
                          isUserAvatar: !0,
                          messageRecord: P,
                          fallbackDeepLink: (0, z.I)(Q.BVt.CHANNEL(a.guild_id, a.id, i.id)),
                          emoji: p,
                      },
                  ).then((t) => {
                      null != t && tc.track(a.id, t.notification, t.trackingProps);
                  });
              },
              CHANNEL_SELECT: function (t) {
                  let { channelId: e } = t;
                  return null != e && tc.clearChannel(e), !1;
              },
              MESSAGE_ACK: function (t) {
                  let { channelId: e } = t;
                  return tc.clearChannel(e), !1;
              },
              ACTIVITY_START: function (t) {
                  let { userId: e, activity: n } = t;
                  if (tf() || n.type !== Q.$pd.PLAYING) return !1;
                  {
                      let t = J.default.getUser(e);
                      if (null == t) return !1;
                      let i = $.Ay.getName(t),
                          l = n.name,
                          a = t.getAvatarURL(void 0, 128),
                          r = tn.intl.string(tn.t.XoTWsI),
                          u = tn.intl.formatToPlainString(tn.t.o4Aipn, { username: i, gameName: l });
                      return (
                          z.A.showNotification(
                              a,
                              r,
                              u,
                              {
                                  notif_type: "ACTIVITY_START",
                                  activity_type: Q.$pd.PLAYING,
                                  notif_user_id: e,
                                  activity_name: l,
                              },
                              {
                                  sound: "message2",
                                  playSoundIfDisabled: !1,
                                  volume: 0.4,
                                  onClick() {
                                      o.A.openPrivateChannel({ recipientIds: e });
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
                  if (tf()) return;
                  let n = J.default.getCurrentUser();
                  if (null == n) return;
                  let i = e.find((t) => t.userId === n.id);
                  if (null == i) return;
                  let { channelId: l, guildId: a, suppress: r, requestToSpeakTimestamp: o } = i;
                  if (null == l || null == a || !(!r && null != o)) return;
                  let u = w.A.getGuild(a),
                      s = L.A.getChannel(l),
                      d = D.A.getStageInstanceByChannel(l);
                  null != u &&
                      null != s &&
                      null != d &&
                      z.A.showNotification(
                          (0, G.Iv)(u, 128),
                          (0, _.m1)(s, J.default, H.A),
                          tn.intl.formatToPlainString(tn.t.sqnsSP, {
                              channelName: (0, _.m1)(s, J.default, H.A),
                              channelTopic: d?.topic,
                          }),
                          { notif_type: "Stage Speak Invite" },
                          { isUserAvatar: !1 },
                      );
              },
              STAGE_INSTANCE_UPDATE: function (t) {
                  let { instance: e } = t;
                  if (tf() || !e.send_start_notification || tA(e.channel_id)) return !1;
                  let n = J.default.getCurrentUser(),
                      l = w.A.getGuild(e.guild_id),
                      a = L.A.getChannel(e.channel_id),
                      r = J.default.getUser(e.host_id);
                  if (
                      null == n ||
                      null == a ||
                      null == l ||
                      null == r ||
                      !(0, C.Wv)(n, r, a) ||
                      !M.A.can(i.kg(Q.xBc.CONNECT, Q.xBc.VIEW_CHANNEL), a) ||
                      ts.has(e.id)
                  )
                      return !1;
                  ts.add(e.id),
                      z.A.showNotification(
                          (0, G.Iv)(l, 128),
                          tn.intl.formatToPlainString(tn.t.bZ4Okd, { guildName: l.name }),
                          tn.intl.formatToPlainString(tn.t.qTelnO, {
                              username: X.Ay.getName(l.id, a.id, r),
                              topic: e.topic,
                          }),
                          { notif_type: "STAGE_INSTANCE_CREATE", guild_id: l.id, channel_id: a.id },
                          {
                              onClick() {
                                  (0, P.av)(a);
                              },
                              isUserAvatar: !1,
                          },
                      );
              },
              STAGE_INSTANCE_DELETE: function (t) {
                  let { instance: e } = t;
                  ts.delete(e.id);
              },
              GUILD_SCHEDULED_EVENT_UPDATE: function (t) {
                  let { guildScheduledEvent: e } = t;
                  if (tf() || null == e.notification_type) return !1;
                  e.notification_type === Z.b8.EVENT_START &&
                      (e.entity_type === Z.Ps.STAGE_INSTANCE || e.entity_type === Z.Ps.VOICE
                          ? (function (t) {
                                if (tf()) return;
                                let e = t.channel_id;
                                if (null == e || tA(e)) return;
                                let n = J.default.getCurrentUser(),
                                    l = w.A.getGuild(t.guild_id),
                                    a = L.A.getChannel(t.channel_id),
                                    r = J.default.getUser(t.host_id);
                                null != n &&
                                    null != a &&
                                    null != l &&
                                    null != r &&
                                    M.A.can(i.kg(Q.xBc.CONNECT, Q.xBc.VIEW_CHANNEL), a) &&
                                    z.A.showNotification(
                                        (0, G.Iv)(l, 128),
                                        tn.intl.formatToPlainString(tn.t.bOu6Wn, { guildName: l.name }),
                                        tn.intl.formatToPlainString(tn.t.GV9L8u, {
                                            topic: t.name,
                                            username: X.Ay.getName(l.id, a.id, r),
                                        }),
                                        {
                                            notif_type: "GUILD_SCHEDULED_EVENT_UPDATE",
                                            guild_id: l.id,
                                            channel_id: a.id,
                                        },
                                        {
                                            onClick() {
                                                t.entity_type === Z.Ps.STAGE_INSTANCE && (0, P.av)(a),
                                                    t.entity_type === Z.Ps.VOICE && c.default.selectVoiceChannel(a.id);
                                            },
                                            isUserAvatar: !1,
                                        },
                                    );
                            })(e)
                          : e.entity_type === Z.Ps.EXTERNAL &&
                            (function (t) {
                                if (tf()) return;
                                let e = J.default.getCurrentUser(),
                                    n = w.A.getGuild(t.guild_id);
                                null == e ||
                                    null == n ||
                                    z.A.showNotification(
                                        (0, G.Iv)(n, 128),
                                        tn.intl.formatToPlainString(tn.t.bOu6Wn, { guildName: n.name }),
                                        tn.intl.formatToPlainString(tn.t.mYyaRB, { topic: t.name }),
                                        { notif_type: "GUILD_SCHEDULED_EVENT_UPDATE", guild_id: n.id },
                                        {
                                            onClick() {
                                                s.A.transitionToGuildSync(t.guild_id), (0, N.uR)({ eventId: t.id });
                                            },
                                            isUserAvatar: !1,
                                        },
                                    );
                            })(e));
              },
              THREAD_CREATE: function (t) {
                  let { channel: e, isNewlyCreated: n } = t;
                  if (tf()) return !1;
                  let i = L.A.getChannel(e.parent_id);
                  if (null == i || !Q.kvI.GUILD_THREADS_ONLY.has(i.type) || !n || !(0, C.q1)(e, i, !to)) return !1;
                  let { author: l, user: a } = (0, E.tY)(e);
                  if (null == a) return !1;
                  let r = w.A.getGuild(i.guild_id);
                  if (null == r) return !1;
                  let o = tn.intl.formatToPlainString(tn.t["2IGVl5"], {
                          channelName: (0, _.m1)(i, J.default, H.A),
                          guildName: r.name,
                      }),
                      u = tn.intl.formatToPlainString(tn.t.jPhTvT, {
                          channelName: (0, _.m1)(e, J.default, H.A),
                          userUsername: l?.nick ?? a?.username,
                      }),
                      s = a.getAvatarURL(void 0, 128);
                  z.A.showNotification(
                      s,
                      o,
                      u,
                      { notif_type: "THREAD_CREATE", notif_user_id: a.id },
                      {
                          onClick() {
                              (0, R.JA)(e);
                          },
                          isUserAvatar: !0,
                      },
                  );
              },
              GENERIC_PUSH_NOTIFICATION_SENT: function (t) {
                  let e,
                      { icon: n, title: i, body: l, route: a, trackingType: r, tag: o } = t;
                  if (tf() || null == i || null == l || null == r || "reactions_push_notification" === r.toLowerCase())
                      return !1;
                  z.A.showNotification(
                      n,
                      i,
                      l,
                      { notif_type: r },
                      {
                          onClick() {
                              null != a && ((0, g.A)(a), d.default.clickedNotification());
                          },
                          tag: o,
                          isUserAvatar: !1,
                      },
                  ).then((t) => {
                      null != t && null != e && tc.track(e, t.notification, t.trackingProps);
                  });
              },
              REACTION_NOTIFICATION_SENT: function (t) {
                  let { icon: e, title: n, body: i, route: l, trackingType: a, message: r, reactorUserId: o } = t;
                  if (tf() || null == n || null == i || null == a) return !1;
                  let u = r.channel_id;
                  if (null == u || (W.A.getCurrentlySelectedChannelId() === u && to)) return !1;
                  let s = L.A.getChannel(u);
                  if (null == s) return !1;
                  if (s.type === Q.rbe.GROUP_DM) {
                      let t = J.default.getCurrentUser();
                      if (
                          r.author?.id !== t?.id &&
                          !S.A.getConfig({ location: "desktopNotification" }).showSettingsToggle
                      )
                          return !1;
                  }
                  z.A.showNotification(
                      e,
                      n,
                      i,
                      { notif_type: a, notif_user_id: o, message_id: r.id },
                      {
                          onClick() {
                              null != l && ((0, g.A)(l), d.default.clickedNotification());
                          },
                          isUserAvatar: !0,
                      },
                  ).then((t) => {
                      null != t && null != u && tc.track(u, t.notification, t.trackingProps);
                  });
              },
              WINDOW_HIDDEN: function () {
                  let t = (0, K.isWindows)(),
                      e = (0, K.isLinux)();
                  if (!(!a.w.get(tr, !1) && K.isPlatformEmbedded && (t || e))) return !1;
                  let i = !1;
                  return (
                      null != tu && (i = td.includes(tu)),
                      !!i &&
                          (z.A.showNotification(
                              n(608598),
                              tn.intl.string(tn.t.VSgOVg),
                              tn.intl.string(tn.t["+J/F66"]),
                              { notif_type: "WINDOW_HIDDEN" },
                              {
                                  overrideStreamerMode: !0,
                                  onClick: () => {
                                      (0, y.pX)((0, k.settingsPathToRoute)(t ? te.od.WINDOWS : te.od.LINUX));
                                  },
                                  onShown: () => {
                                      a.w.set(tr, !0);
                                  },
                                  isUserAvatar: !1,
                              },
                          ),
                          !1)
                  );
              },
              LOGOUT: function () {
                  return a.w.remove(tr), !1;
              },
              CONNECTION_OPEN: function (t) {
                  let { countryCode: e, guilds: n } = t;
                  (tu = e), ts.clear(), n.forEach((t) => t.stage_instances.forEach((t) => ts.add(t.id)));
              },
              MESSAGE_REMINDER_DUE: function (t) {
                  let { savedMessage: e } = t;
                  if (tf()) return !1;
                  let n = e.message;
                  if (null == n || null == n.author) return !1;
                  let i = L.A.getChannel(e.saveData.channelId);
                  if (null == i) return !1;
                  let { icon: l, body: a } = (0, C.TB)(i, n, n.author);
                  z.A.showNotification(
                      l,
                      tn.intl.string(tn.t.IjZJB5),
                      a,
                      { notif_type: "MESSAGE_REMINDER_DUE" },
                      {
                          onClick() {
                              (0, g.A)(Q.BVt.CHANNEL(i?.getGuildId(), i.id, n.id));
                          },
                          isUserAvatar: !0,
                      },
                  );
              },
              RESTRICTED_HOURS_WARNING: function (t) {
                  let { title: e, subtitle: i } = t;
                  if (tf()) return !1;
                  z.A.showNotification(
                      n(608598),
                      e,
                      i,
                      { notif_type: "RESTRICTED_HOURS_WARNING" },
                      { isUserAvatar: !1 },
                  );
              },
          },
);
