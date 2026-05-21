"use strict";
n.d(t, { pD: () => ea, cH: () => es }), n(321073);
var i = n(136722),
    r = n(17928),
    s = n(506774),
    a = n(765178),
    o = n(228366),
    l = n(308528),
    u = n(367513),
    c = n(66834),
    d = n(264686),
    _ = n(730852),
    f = n(77729),
    h = n(883600),
    p = n(963027),
    E = n(47167),
    m = n(435470),
    g = n(707592),
    A = n(741231),
    I = n(380335),
    T = n(320095),
    S = n(535586),
    N = n(938005),
    y = n(571524),
    C = n(181370),
    v = n.n(C),
    O = n(695515),
    R = n(976860),
    b = n(378570),
    D = n(790535),
    L = n(446600),
    w = n(747926),
    M = n(885386),
    P = n(718446),
    x = n(260509),
    U = n(734057),
    k = n(71393),
    G = n(232835),
    F = n(803224),
    V = n(576705),
    B = n(222823),
    H = n(994500),
    j = n(309010),
    Y = n(461213),
    W = n(351906),
    K = n(870570),
    z = n(287809),
    $ = n(977997),
    q = n(174459),
    Z = n(562153),
    X = n(723702),
    Q = n(427262),
    J = n(756876),
    ee = n(652215),
    et = n(988794),
    en = n(672396),
    ei = n(355097),
    er = n(375708);
let es = "message1",
    ea = 0.4,
    eo = f.A?.features.supports("notifications") ? 20 : 1,
    el = "discord_dismissed_notification_shown",
    eu = document.hasFocus(),
    ec = null,
    ed = new Set(),
    e_ = ["FR", "GF", "PF", "TF", "RE", "GP", "MQ", "YT", "NC", "PM", "WF"],
    ef = new (class {
        _channels = {};
        track(e, t, n) {
            let i = this._channels[e];
            for (
                null == i && ((i = []), (this._channels[e] = i)), i.push({ notification: t, trackingProps: n });
                i.length > eo;
            ) {
                let e = i.shift();
                e?.notification?.close != null &&
                    (e.notification.close(),
                    q.default.track(ee.HAw.NOTIFICATION_ACTION, { action: "REMOVE", ...e.trackingProps }));
            }
        }
        clearChannel(e) {
            let t = this._channels[e];
            null != t &&
                (delete this._channels[e],
                t.forEach((e) => {
                    let { notification: t, trackingProps: n } = e;
                    t.close(), q.default.track(ee.HAw.NOTIFICATION_ACTION, { action: "ACK", ...n });
                }));
        }
    })();
function eh() {
    return !!(
        F.A.getDesktopType() === ee.nRU.NEVER ||
        Y.A.getStatus() === ee.clD.DND ||
        M.NO.getSetting() ||
        O.A.isCurrentUserInRestrictedHours()
    );
}
function ep(e) {
    return null != $.A.getVoiceStateForChannel(e);
}
class eE extends r.Ay.Store {
    static displayName = "NotificationStore";
    initialize() {
        this.waitFor(h.A, U.A, O.A, k.A, I.A, G.A, F.A, V.A, B.Ay, H.A, j.A, Y.A, L.A, W.A, K.A, z.default, $.A);
    }
}
new eE(
    o.h,
    __OVERLAY__
        ? {}
        : {
              NOTIFICATIONS_SET_PERMISSION_STATE: function (e) {
                  let { enabled: t } = e;
                  t !== ee.kCE.ENABLED ||
                      X.isPlatformEmbedded ||
                      J.A.showNotification(
                          n(705194),
                          er.intl.string(er.t.VSgOVg),
                          er.intl.string(er.t["1UJvqc"]),
                          { notif_type: "NOTIFICATIONS_SET_PERMISSION_STATE" },
                          {
                              sound: es,
                              volume: ea,
                              tag: "hello",
                              onClick: () => {
                                  window.focus();
                              },
                              isUserAvatar: !1,
                          },
                      );
              },
              NOTIFICATION_CREATE: function (e) {
                  let { icon: t, title: n, body: i, trackingProps: r, options: s } = e;
                  return !eh() && (J.A.showNotification(t, n, i, r, s), !1);
              },
              WINDOW_FOCUS: function (e) {
                  if ((eu = e.focused)) {
                      let e = j.A.getChannelId();
                      null != e && ef.clearChannel(e);
                  }
              },
              MESSAGE_CREATE: function (e) {
                  let { channelId: t, message: i, optimistic: r } = e;
                  if (r) return !1;
                  let s = U.A.getChannel(t),
                      l = z.default.getUser(i.author?.id),
                      c = z.default.getCurrentUser();
                  if (null == s || null == l || null == c) return !1;
                  let _ = G.A.getMessage(t, i.id) ?? (0, T.rh)(i),
                      f = B.Ay.getMentionCount(t);
                  (0, B.Wm)(_, c) && f > 0 && a.O.announce((0, p.Ay)({ channel: s, mentionCount: f }));
                  let E = (0, N.lx)(i, t, !eu),
                      m = F.A.getNotifyMessagesInSelectedChannel() && (0, N.kY)(i, t);
                  if (
                      (!E && !m) ||
                      O.A.isCurrentUserInRestrictedHours() ||
                      K.A.hasAction() ||
                      (i.type === ee.lAJ.CHANGELOG &&
                          (null == i.changelog_id || h.A.latestChangelogId() !== i.changelog_id))
                  )
                      return !1;
                  let g = !F.A.isSoundDisabled(es);
                  if ((m && (g && J.A.playNotificationSound("message3", 0.4), !eu)) || !E) return !1;
                  let A = n(773371).default,
                      I = n(592598).A;
                  if (
                      null != A.getFocusedPID() &&
                      !I.isNotificationDisabled(en.KS.TextChat) &&
                      !W.A.disableNotifications
                  )
                      return !1;
                  let { icon: y, title: C, body: R, emoji: D } = (0, N.TB)(s, i, l),
                      L = !((e, t) => {
                          let n;
                          return (
                              null != t &&
                              ((n = v().v3(String(t))) < 0 && (n += 0x100000000), n % 0x7fffffff < 21474836.47)
                          );
                      })(0, c?.id);
                  if (
                      (o.h.dispatch({
                          type: "RPC_NOTIFICATION_CREATE",
                          channelId: s.id,
                          message: i,
                          icon: y,
                          title: C,
                          body: R,
                      }),
                      (0, S.n)(i, s.guild_id),
                      F.A.getDesktopType() === ee.nRU.NEVER)
                  )
                      return g && J.A.playNotificationSound(es, ea), !1;
                  J.A.showNotification(
                      y,
                      C,
                      R,
                      {
                          notif_type: "MESSAGE_CREATE",
                          notif_user_id: i.author?.id,
                          message_id: i.id,
                          message_type: i.type,
                          channel_id: s.id,
                          channel_type: s.type,
                          guild_id: s.guild_id,
                          badge: (0, B.Wm)(_, c),
                      },
                      {
                          omitViewTracking: L,
                          tag: i.id,
                          sound: g ? es : void 0,
                          volume: ea,
                          onClick() {
                              (0, b.iN)(s.id),
                                  (s.type === ee.rbe.GUILD_VOICE || s.type === ee.rbe.GUILD_STAGE_VOICE) &&
                                      u.A.updateChatOpen(s.id, !0),
                                  d.default.clickedNotification();
                          },
                          isUserAvatar: !0,
                          messageRecord: _,
                          fallbackDeepLink: (0, J.I)(ee.BVt.CHANNEL(s.guild_id, s.id, i.id)),
                          emoji: D,
                      },
                  ).then((e) => {
                      null != e && ef.track(s.id, e.notification, e.trackingProps);
                  });
              },
              CHANNEL_SELECT: function (e) {
                  let { channelId: t } = e;
                  return null != t && ef.clearChannel(t), !1;
              },
              MESSAGE_ACK: function (e) {
                  let { channelId: t } = e;
                  return ef.clearChannel(t), !1;
              },
              ACTIVITY_START: function (e) {
                  let { userId: t, activity: n } = e;
                  if (eh() || n.type !== ee.$pd.PLAYING) return !1;
                  {
                      let e = z.default.getUser(t);
                      if (null == e) return !1;
                      let i = Q.Ay.getName(e),
                          r = n.name,
                          s = e.getAvatarURL(void 0, 128),
                          a = er.intl.string(er.t.XoTWsI),
                          o = er.intl.formatToPlainString(er.t.o4Aipn, { username: i, gameName: r });
                      return (
                          J.A.showNotification(
                              s,
                              a,
                              o,
                              {
                                  notif_type: "ACTIVITY_START",
                                  activity_type: ee.$pd.PLAYING,
                                  notif_user_id: t,
                                  activity_name: r,
                              },
                              {
                                  sound: "message2",
                                  playSoundIfDisabled: !1,
                                  volume: 0.4,
                                  onClick() {
                                      l.A.openPrivateChannel({ recipientIds: t });
                                  },
                                  isUserAvatar: !0,
                              },
                          ),
                          !1
                      );
                  }
              },
              VOICE_STATE_UPDATES: function (e) {
                  let { voiceStates: t } = e;
                  if (eh()) return;
                  let n = z.default.getCurrentUser();
                  if (null == n) return;
                  let i = t.find((e) => e.userId === n.id);
                  if (null == i) return;
                  let { channelId: r, guildId: s, suppress: a, requestToSpeakTimestamp: o } = i;
                  if (null == r || null == s || !(!a && null != o)) return;
                  let l = k.A.getGuild(s),
                      u = U.A.getChannel(r),
                      c = L.A.getStageInstanceByChannel(r);
                  null != l &&
                      null != u &&
                      null != c &&
                      J.A.showNotification(
                          (0, x.Iv)(l, 128),
                          (0, E.m1)(u, z.default, H.A),
                          er.intl.formatToPlainString(er.t.sqnsSP, {
                              channelName: (0, E.m1)(u, z.default, H.A),
                              channelTopic: c?.topic,
                          }),
                          { notif_type: "Stage Speak Invite" },
                          { isUserAvatar: !1 },
                      );
              },
              STAGE_INSTANCE_UPDATE: function (e) {
                  let { instance: t } = e;
                  if (eh() || !t.send_start_notification || ep(t.channel_id)) return !1;
                  let n = z.default.getCurrentUser(),
                      r = k.A.getGuild(t.guild_id),
                      s = U.A.getChannel(t.channel_id),
                      a = z.default.getUser(t.host_id);
                  if (
                      null == n ||
                      null == s ||
                      null == r ||
                      null == a ||
                      !(0, N.Wv)(n, a, s) ||
                      !V.A.can(i.kg(ee.xBc.CONNECT, ee.xBc.VIEW_CHANNEL), s) ||
                      ed.has(t.id)
                  )
                      return !1;
                  ed.add(t.id),
                      J.A.showNotification(
                          (0, x.Iv)(r, 128),
                          er.intl.formatToPlainString(er.t.bZ4Okd, { guildName: r.name }),
                          er.intl.formatToPlainString(er.t.qTelnO, {
                              username: Z.Ay.getName(r.id, s.id, a),
                              topic: t.topic,
                          }),
                          { notif_type: "STAGE_INSTANCE_CREATE", guild_id: r.id, channel_id: s.id },
                          {
                              onClick() {
                                  (0, D.av)(s);
                              },
                              isUserAvatar: !1,
                          },
                      );
              },
              STAGE_INSTANCE_DELETE: function (e) {
                  let { instance: t } = e;
                  ed.delete(t.id);
              },
              GUILD_SCHEDULED_EVENT_UPDATE: function (e) {
                  let { guildScheduledEvent: t } = e;
                  if (eh() || null == t.notification_type) return !1;
                  t.notification_type === et.b8.EVENT_START &&
                      (t.entity_type === et.Ps.STAGE_INSTANCE || t.entity_type === et.Ps.VOICE
                          ? (function (e) {
                                if (eh()) return;
                                let t = e.channel_id;
                                if (null == t || ep(t)) return;
                                let n = z.default.getCurrentUser(),
                                    r = k.A.getGuild(e.guild_id),
                                    s = U.A.getChannel(e.channel_id),
                                    a = z.default.getUser(e.host_id);
                                null != n &&
                                    null != s &&
                                    null != r &&
                                    null != a &&
                                    V.A.can(i.kg(ee.xBc.CONNECT, ee.xBc.VIEW_CHANNEL), s) &&
                                    J.A.showNotification(
                                        (0, x.Iv)(r, 128),
                                        er.intl.formatToPlainString(er.t.bOu6Wn, { guildName: r.name }),
                                        er.intl.formatToPlainString(er.t.GV9L8u, {
                                            topic: e.name,
                                            username: Z.Ay.getName(r.id, s.id, a),
                                        }),
                                        {
                                            notif_type: "GUILD_SCHEDULED_EVENT_UPDATE",
                                            guild_id: r.id,
                                            channel_id: s.id,
                                        },
                                        {
                                            onClick() {
                                                e.entity_type === et.Ps.STAGE_INSTANCE && (0, D.av)(s),
                                                    e.entity_type === et.Ps.VOICE && _.default.selectVoiceChannel(s.id);
                                            },
                                            isUserAvatar: !1,
                                        },
                                    );
                            })(t)
                          : t.entity_type === et.Ps.EXTERNAL &&
                            (function (e) {
                                if (eh()) return;
                                let t = z.default.getCurrentUser(),
                                    n = k.A.getGuild(e.guild_id);
                                null == t ||
                                    null == n ||
                                    J.A.showNotification(
                                        (0, x.Iv)(n, 128),
                                        er.intl.formatToPlainString(er.t.bOu6Wn, { guildName: n.name }),
                                        er.intl.formatToPlainString(er.t.mYyaRB, { topic: e.name }),
                                        { notif_type: "GUILD_SCHEDULED_EVENT_UPDATE", guild_id: n.id },
                                        {
                                            onClick() {
                                                c.A.transitionToGuildSync(e.guild_id), (0, g.uR)({ eventId: e.id });
                                            },
                                            isUserAvatar: !1,
                                        },
                                    );
                            })(t));
              },
              THREAD_CREATE: function (e) {
                  let { channel: t, isNewlyCreated: n } = e;
                  if (eh()) return !1;
                  let i = U.A.getChannel(t.parent_id);
                  if (null == i || !ee.kvI.GUILD_THREADS_ONLY.has(i.type) || !n || !(0, N.q1)(t, i, !eu)) return !1;
                  let { author: r, user: s } = (0, m.tY)(t);
                  if (null == s) return !1;
                  let a = k.A.getGuild(i.guild_id);
                  if (null == a) return !1;
                  let o = er.intl.formatToPlainString(er.t["2IGVl5"], {
                          channelName: (0, E.m1)(i, z.default, H.A),
                          guildName: a.name,
                      }),
                      l = er.intl.formatToPlainString(er.t.jPhTvT, {
                          channelName: (0, E.m1)(t, z.default, H.A),
                          userUsername: r?.nick ?? s?.username,
                      }),
                      u = s.getAvatarURL(void 0, 128);
                  J.A.showNotification(
                      u,
                      o,
                      l,
                      { notif_type: "THREAD_CREATE", notif_user_id: s.id },
                      {
                          onClick() {
                              (0, w.JA)(t);
                          },
                          isUserAvatar: !0,
                      },
                  );
              },
              GENERIC_PUSH_NOTIFICATION_SENT: function (e) {
                  let t,
                      { icon: n, title: i, body: r, route: s, trackingType: a, tag: o } = e;
                  if (eh() || null == i || null == r || null == a || "reactions_push_notification" === a.toLowerCase())
                      return !1;
                  J.A.showNotification(
                      n,
                      i,
                      r,
                      { notif_type: a },
                      {
                          onClick() {
                              null != s && ((0, A.A)(s), d.default.clickedNotification());
                          },
                          tag: o,
                          isUserAvatar: !1,
                      },
                  ).then((e) => {
                      null != e && null != t && ef.track(t, e.notification, e.trackingProps);
                  });
              },
              REACTION_NOTIFICATION_SENT: function (e) {
                  let { icon: t, title: n, body: i, route: r, trackingType: s, message: a, reactorUserId: o } = e;
                  if (eh() || null == n || null == i || null == s) return !1;
                  let l = a.channel_id;
                  if (null == l || (j.A.getCurrentlySelectedChannelId() === l && eu)) return !1;
                  let u = U.A.getChannel(l);
                  if (null == u) return !1;
                  if (u.type === ee.rbe.GROUP_DM) {
                      let e = z.default.getCurrentUser();
                      if (
                          a.author?.id !== e?.id &&
                          !y.A.getConfig({ location: "desktopNotification" }).showSettingsToggle
                      )
                          return !1;
                  }
                  J.A.showNotification(
                      t,
                      n,
                      i,
                      { notif_type: s, notif_user_id: o, message_id: a.id },
                      {
                          onClick() {
                              null != r && ((0, A.A)(r), d.default.clickedNotification());
                          },
                          isUserAvatar: !0,
                      },
                  ).then((e) => {
                      null != e && null != l && ef.track(l, e.notification, e.trackingProps);
                  });
              },
              WINDOW_HIDDEN: function () {
                  let e = (0, X.isWindows)(),
                      t = (0, X.isLinux)();
                  if (!(!s.w.get(el, !1) && X.isPlatformEmbedded && (e || t))) return !1;
                  let i = !1;
                  return (
                      null != ec && (i = e_.includes(ec)),
                      !!i &&
                          (J.A.showNotification(
                              n(608598),
                              er.intl.string(er.t.VSgOVg),
                              er.intl.string(er.t["+J/F66"]),
                              { notif_type: "WINDOW_HIDDEN" },
                              {
                                  overrideStreamerMode: !0,
                                  onClick: () => {
                                      (0, R.pX)((0, P.settingsPathToRoute)(e ? ei.od.WINDOWS : ei.od.LINUX));
                                  },
                                  onShown: () => {
                                      s.w.set(el, !0);
                                  },
                                  isUserAvatar: !1,
                              },
                          ),
                          !1)
                  );
              },
              LOGOUT: function () {
                  return s.w.remove(el), !1;
              },
              CONNECTION_OPEN: function (e) {
                  let { countryCode: t, guilds: n } = e;
                  (ec = t), ed.clear(), n.forEach((e) => e.stage_instances.forEach((e) => ed.add(e.id)));
              },
              MESSAGE_REMINDER_DUE: function (e) {
                  let { savedMessage: t } = e;
                  if (eh()) return !1;
                  let n = t.message;
                  if (null == n || null == n.author) return !1;
                  let i = U.A.getChannel(t.saveData.channelId);
                  if (null == i) return !1;
                  let { icon: r, body: s } = (0, N.TB)(i, n, n.author);
                  J.A.showNotification(
                      r,
                      er.intl.string(er.t.IjZJB5),
                      s,
                      { notif_type: "MESSAGE_REMINDER_DUE" },
                      {
                          onClick() {
                              (0, A.A)(ee.BVt.CHANNEL(i?.getGuildId(), i.id, n.id));
                          },
                          isUserAvatar: !0,
                      },
                  );
              },
              RESTRICTED_HOURS_WARNING: function (e) {
                  let { title: t, subtitle: i } = e;
                  if (eh() || !F.A.screenDowntimeReminder) return !1;
                  J.A.showNotification(
                      n(608598),
                      t,
                      i,
                      { notif_type: "RESTRICTED_HOURS_WARNING" },
                      { isUserAvatar: !1 },
                  );
              },
          },
);
