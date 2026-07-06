"use strict";
n.d(t, { pD: () => eo, cH: () => ea }), n(321073);
var i = n(731738),
    r = n(136722),
    s = n(17928),
    a = n(506774),
    o = n(765178),
    l = n(228366),
    u = n(308528),
    c = n(367513),
    d = n(66834),
    _ = n(264686),
    h = n(730852),
    f = n(77729),
    E = n(883600),
    p = n(963027),
    m = n(47167),
    g = n(435470),
    A = n(707592),
    I = n(741231),
    T = n(380335),
    S = n(320095),
    N = n(807393),
    C = n(535586),
    y = n(944043),
    O = n(181370),
    R = n.n(O),
    v = n(695515),
    b = n(976860),
    L = n(378570),
    D = n(790535),
    w = n(446600),
    P = n(747926),
    M = n(885386),
    x = n(718446),
    U = n(260509),
    k = n(734057),
    G = n(71393),
    V = n(232835),
    F = n(803224),
    B = n(576705),
    H = n(568548),
    j = n(994500),
    W = n(309010),
    Y = n(461213),
    K = n(351906),
    $ = n(870570),
    z = n(287809),
    q = n(977997),
    Z = n(174459),
    X = n(562153),
    Q = n(723702),
    J = n(427262),
    ee = n(479975),
    et = n(652215),
    en = n(988794),
    ei = n(672396),
    er = n(355097),
    es = n(375708);
let ea = "message1",
    eo = 0.4,
    el = f.A?.features.supports("notifications") ? 20 : 1,
    eu = "discord_dismissed_notification_shown",
    ec = document.hasFocus(),
    ed = null,
    e_ = new Set(),
    eh = ["FR", "GF", "PF", "TF", "RE", "GP", "MQ", "YT", "NC", "PM", "WF"],
    ef = new (class {
        _channels = {};
        track(e, t, n) {
            let i = this._channels[e];
            for (
                null == i && ((i = []), (this._channels[e] = i)), i.push({ notification: t, trackingProps: n });
                i.length > el;
            ) {
                let e = i.shift();
                e?.notification?.close != null &&
                    (e.notification.close(),
                    Z.default.track(et.HAw.NOTIFICATION_ACTION, { action: "REMOVE", ...e.trackingProps }));
            }
        }
        clearChannel(e) {
            let t = this._channels[e];
            null != t &&
                (delete this._channels[e],
                t.forEach((e) => {
                    let { notification: t, trackingProps: n } = e;
                    t.close(), Z.default.track(et.HAw.NOTIFICATION_ACTION, { action: "ACK", ...n });
                }));
        }
    })();
function eE() {
    return !!(
        F.A.getDesktopType() === et.nRU.NEVER ||
        Y.A.getStatus() === et.clD.DND ||
        M.NO.getSetting() ||
        v.A.isCurrentUserInRestrictedHours()
    );
}
function ep(e) {
    N.A.increment({
        name: i.K.NOTIFICATION_SOUND_PLAYBACK_ATTEMPT,
        tags: [`reason:${e ? "played" : "disabled_by_user"}`],
    });
}
function em(e) {
    return null != q.A.getVoiceStateForChannel(e);
}
class eg extends s.Ay.Store {
    static displayName = "NotificationStore";
    initialize() {
        this.waitFor(E.A, k.A, v.A, G.A, T.A, V.A, F.A, B.A, H.Ay, j.A, W.A, Y.A, w.A, K.A, $.A, z.default, q.A);
    }
}
new eg(
    l.h,
    __OVERLAY__
        ? {}
        : {
              NOTIFICATIONS_SET_PERMISSION_STATE: function (e) {
                  let { enabled: t } = e;
                  t !== et.kCE.ENABLED ||
                      Q.isPlatformEmbedded ||
                      ee.A.showNotification(
                          n(705194),
                          es.intl.string(es.t.VSgOVg),
                          es.intl.string(es.t["1UJvqc"]),
                          { notif_type: "NOTIFICATIONS_SET_PERMISSION_STATE" },
                          {
                              sound: ea,
                              volume: eo,
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
                  return !eE() && (ee.A.showNotification(t, n, i, r, s), !1);
              },
              WINDOW_FOCUS: function (e) {
                  if ((ec = e.focused)) {
                      let e = W.A.getChannelId();
                      null != e && ef.clearChannel(e);
                  }
              },
              MESSAGE_CREATE: function (e) {
                  let { channelId: t, message: r, optimistic: s } = e;
                  if (s) return !1;
                  let a = k.A.getChannel(t),
                      u = z.default.getUser(r.author?.id),
                      d = z.default.getCurrentUser();
                  if (null == a || null == u || null == d) return !1;
                  let h = V.A.getMessage(t, r.id) ?? (0, S.rh)(r),
                      f = H.Ay.getMentionCount(t);
                  (0, H.Wm)(h, d) && f > 0 && o.O.announce((0, p.Ay)({ channel: a, mentionCount: f }));
                  let m = (0, y.lx)(r, t, !ec),
                      g = F.A.getNotifyMessagesInSelectedChannel() && (0, y.kY)(r, t);
                  if (!m && !g) return !1;
                  if (v.A.isCurrentUserInRestrictedHours())
                      return (
                          N.A.increment({
                              name: i.K.NOTIFICATION_SOUND_PLAYBACK_ATTEMPT,
                              tags: ["reason:restricted_hours"],
                          }),
                          !1
                      );
                  if ($.A.hasAction())
                      return (
                          N.A.increment({
                              name: i.K.NOTIFICATION_SOUND_PLAYBACK_ATTEMPT,
                              tags: ["reason:required_action"],
                          }),
                          !1
                      );
                  if (
                      r.type === et.lAJ.CHANGELOG &&
                      (null == r.changelog_id || E.A.latestChangelogId() !== r.changelog_id)
                  )
                      return !1;
                  let A = !F.A.isSoundDisabled(ea);
                  if ((g && (ep(A), A && ee.A.playNotificationSound("message3", 0.4), !ec)) || !m) return !1;
                  let I = n(773371).default,
                      T = n(592598).A;
                  if (
                      null != I.getFocusedPID() &&
                      !T.isNotificationDisabled(ei.KS.TextChat) &&
                      !K.A.disableNotifications
                  )
                      return !1;
                  let { icon: O, title: b, body: D, emoji: w } = (0, y.TB)(a, r, u),
                      P = !(function (e) {
                          let t;
                          return (
                              null != e &&
                              ((t = R().v3(String(e))) < 0 && (t += 0x100000000), t % 0x7fffffff < 21474836.47)
                          );
                      })(d?.id);
                  if (
                      (l.h.dispatch({
                          type: "RPC_NOTIFICATION_CREATE",
                          channelId: a.id,
                          message: r,
                          icon: O,
                          title: b,
                          body: D,
                      }),
                      (0, C.n)(r, a.guild_id),
                      F.A.getDesktopType() === et.nRU.NEVER)
                  )
                      return ep(A), A && ee.A.playNotificationSound(ea, eo), !1;
                  ep(A),
                      ee.A.showNotification(
                          O,
                          b,
                          D,
                          {
                              notif_type: "MESSAGE_CREATE",
                              notif_user_id: r.author?.id,
                              message_id: r.id,
                              message_type: r.type,
                              channel_id: a.id,
                              channel_type: a.type,
                              guild_id: a.guild_id,
                              badge: (0, H.Wm)(h, d),
                          },
                          {
                              omitViewTracking: P,
                              tag: r.id,
                              sound: A ? ea : void 0,
                              volume: eo,
                              onClick() {
                                  (0, L.iN)(a.id),
                                      (a.type === et.rbe.GUILD_VOICE || a.type === et.rbe.GUILD_STAGE_VOICE) &&
                                          c.A.updateChatOpen(a.id, !0),
                                      _.default.clickedNotification();
                              },
                              isUserAvatar: !0,
                              messageRecord: h,
                              fallbackDeepLink: (0, ee.I)(et.BVt.CHANNEL(a.guild_id, a.id, r.id)),
                              emoji: w,
                          },
                      ).then((e) => {
                          null != e && ef.track(a.id, e.notification, e.trackingProps);
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
                  if (eE() || n.type !== et.$pd.PLAYING) return !1;
                  {
                      let e = z.default.getUser(t);
                      if (null == e) return !1;
                      let i = J.Ay.getName(e),
                          r = n.name,
                          s = e.getAvatarURL(void 0, 128),
                          a = es.intl.string(es.t.XoTWsI),
                          o = es.intl.formatToPlainString(es.t.o4Aipn, { username: i, gameName: r });
                      return (
                          ee.A.showNotification(
                              s,
                              a,
                              o,
                              {
                                  notif_type: "ACTIVITY_START",
                                  activity_type: et.$pd.PLAYING,
                                  notif_user_id: t,
                                  activity_name: r,
                              },
                              {
                                  sound: "message2",
                                  playSoundIfDisabled: !1,
                                  volume: 0.4,
                                  onClick() {
                                      u.A.openPrivateChannel({ recipientIds: t });
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
                  if (eE()) return;
                  let n = z.default.getCurrentUser();
                  if (null == n) return;
                  let i = t.find((e) => e.userId === n.id);
                  if (null == i) return;
                  let { channelId: r, guildId: s, suppress: a, requestToSpeakTimestamp: o } = i;
                  if (null == r || null == s || !(!a && null != o)) return;
                  let l = G.A.getGuild(s),
                      u = k.A.getChannel(r),
                      c = w.A.getStageInstanceByChannel(r);
                  null != l &&
                      null != u &&
                      null != c &&
                      ee.A.showNotification(
                          (0, U.Iv)(l, 128),
                          (0, m.m1)(u, z.default, j.A),
                          es.intl.formatToPlainString(es.t.sqnsSP, {
                              channelName: (0, m.m1)(u, z.default, j.A),
                              channelTopic: c?.topic,
                          }),
                          { notif_type: "Stage Speak Invite" },
                          { isUserAvatar: !1 },
                      );
              },
              STAGE_INSTANCE_UPDATE: function (e) {
                  let { instance: t } = e;
                  if (eE() || !t.send_start_notification || em(t.channel_id)) return !1;
                  let n = z.default.getCurrentUser(),
                      i = G.A.getGuild(t.guild_id),
                      s = k.A.getChannel(t.channel_id),
                      a = z.default.getUser(t.host_id);
                  if (
                      null == n ||
                      null == s ||
                      null == i ||
                      null == a ||
                      !(0, y.Wv)(n, a, s) ||
                      !B.A.can(r.kg(et.xBc.CONNECT, et.xBc.VIEW_CHANNEL), s) ||
                      e_.has(t.id)
                  )
                      return !1;
                  e_.add(t.id),
                      ee.A.showNotification(
                          (0, U.Iv)(i, 128),
                          es.intl.formatToPlainString(es.t.bZ4Okd, { guildName: i.name }),
                          es.intl.formatToPlainString(es.t.qTelnO, {
                              username: X.Ay.getName(i.id, s.id, a),
                              topic: t.topic,
                          }),
                          { notif_type: "STAGE_INSTANCE_CREATE", guild_id: i.id, channel_id: s.id },
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
                  e_.delete(t.id);
              },
              GUILD_SCHEDULED_EVENT_UPDATE: function (e) {
                  let { guildScheduledEvent: t } = e;
                  if (eE() || null == t.notification_type) return !1;
                  t.notification_type === en.b8.EVENT_START
                      ? t.entity_type === en.Ps.STAGE_INSTANCE || t.entity_type === en.Ps.VOICE
                          ? (function (e) {
                                if (eE()) return;
                                let t = e.channel_id;
                                if (null == t || em(t)) return;
                                let n = z.default.getCurrentUser(),
                                    i = G.A.getGuild(e.guild_id),
                                    s = k.A.getChannel(e.channel_id),
                                    a = z.default.getUser(e.host_id);
                                null != n &&
                                    null != s &&
                                    null != i &&
                                    null != a &&
                                    B.A.can(r.kg(et.xBc.CONNECT, et.xBc.VIEW_CHANNEL), s) &&
                                    ee.A.showNotification(
                                        (0, U.Iv)(i, 128),
                                        es.intl.formatToPlainString(es.t.bOu6Wn, { guildName: i.name }),
                                        es.intl.formatToPlainString(es.t.GV9L8u, {
                                            topic: e.name,
                                            username: X.Ay.getName(i.id, s.id, a),
                                        }),
                                        {
                                            notif_type: "GUILD_SCHEDULED_EVENT_UPDATE",
                                            guild_id: i.id,
                                            channel_id: s.id,
                                        },
                                        {
                                            onClick() {
                                                e.entity_type === en.Ps.STAGE_INSTANCE && (0, D.av)(s),
                                                    e.entity_type === en.Ps.VOICE && h.default.selectVoiceChannel(s.id);
                                            },
                                            isUserAvatar: !1,
                                        },
                                    );
                            })(t)
                          : t.entity_type === en.Ps.EXTERNAL &&
                            (function (e) {
                                if (eE()) return;
                                let t = z.default.getCurrentUser(),
                                    n = G.A.getGuild(e.guild_id);
                                null == t ||
                                    null == n ||
                                    ee.A.showNotification(
                                        (0, U.Iv)(n, 128),
                                        es.intl.formatToPlainString(es.t.bOu6Wn, { guildName: n.name }),
                                        es.intl.formatToPlainString(es.t.mYyaRB, { topic: e.name }),
                                        { notif_type: "GUILD_SCHEDULED_EVENT_UPDATE", guild_id: n.id },
                                        {
                                            onClick() {
                                                d.A.transitionToGuildSync(e.guild_id), (0, A.uR)({ eventId: e.id });
                                            },
                                            isUserAvatar: !1,
                                        },
                                    );
                            })(t)
                      : t.notification_type;
              },
              THREAD_CREATE: function (e) {
                  let { channel: t, isNewlyCreated: n } = e;
                  if (eE()) return !1;
                  let i = k.A.getChannel(t.parent_id);
                  if (null == i || !et.kvI.GUILD_THREADS_ONLY.has(i.type) || !n || !(0, y.q1)(t, i, !ec)) return !1;
                  let { author: r, user: s } = (0, g.tY)(t);
                  if (null == s) return !1;
                  let a = G.A.getGuild(i.guild_id);
                  if (null == a) return !1;
                  let o = es.intl.formatToPlainString(es.t["2IGVl5"], {
                          channelName: (0, m.m1)(i, z.default, j.A),
                          guildName: a.name,
                      }),
                      l = es.intl.formatToPlainString(es.t.jPhTvT, {
                          channelName: (0, m.m1)(t, z.default, j.A),
                          userUsername: r?.nick ?? s?.username,
                      }),
                      u = s.getAvatarURL(void 0, 128);
                  ee.A.showNotification(
                      u,
                      o,
                      l,
                      { notif_type: "THREAD_CREATE", notif_user_id: s.id },
                      {
                          onClick() {
                              (0, P.JA)(t);
                          },
                          isUserAvatar: !0,
                      },
                  );
              },
              GENERIC_PUSH_NOTIFICATION_SENT: function (e) {
                  let t,
                      { icon: n, title: i, body: r, route: s, trackingType: a, tag: o } = e;
                  if (eE() || null == i || null == r || null == a || "reactions_push_notification" === a.toLowerCase())
                      return !1;
                  ee.A.showNotification(
                      n,
                      i,
                      r,
                      { notif_type: a },
                      {
                          onClick() {
                              null != s && ((0, I.A)(s), _.default.clickedNotification());
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
                  if (eE() || null == n || null == i || null == s) return !1;
                  let l = a.channel_id;
                  if (null == l) return !1;
                  let u = k.A.getChannel(l);
                  if (null == u) return !1;
                  let c = z.default.getUser(o);
                  if (!(0, y.nR)({ message: a, channel: u, reactor: c, includeSelectedChannel: !ec })) return !1;
                  ee.A.showNotification(
                      t,
                      n,
                      i,
                      { notif_type: s, notif_user_id: o, message_id: a.id },
                      {
                          onClick() {
                              null != r && ((0, I.A)(r), _.default.clickedNotification());
                          },
                          isUserAvatar: !0,
                      },
                  ).then((e) => {
                      null != e && null != l && ef.track(l, e.notification, e.trackingProps);
                  });
              },
              WINDOW_HIDDEN: function () {
                  let e = (0, Q.isWindows)(),
                      t = (0, Q.isLinux)();
                  if (!(!a.w.get(eu, !1) && Q.isPlatformEmbedded && (e || t))) return !1;
                  let i = !1;
                  return (
                      null != ed && (i = eh.includes(ed)),
                      !!i &&
                          (ee.A.showNotification(
                              n(608598),
                              es.intl.string(es.t.VSgOVg),
                              es.intl.string(es.t["+J/F66"]),
                              { notif_type: "WINDOW_HIDDEN" },
                              {
                                  overrideStreamerMode: !0,
                                  onClick: () => {
                                      (0, b.pX)((0, x.settingsPathToRoute)(e ? er.od.WINDOWS : er.od.LINUX));
                                  },
                                  onShown: () => {
                                      a.w.set(eu, !0);
                                  },
                                  isUserAvatar: !1,
                              },
                          ),
                          !1)
                  );
              },
              LOGOUT: function () {
                  return a.w.remove(eu), !1;
              },
              CONNECTION_OPEN: function (e) {
                  let { countryCode: t, guilds: n } = e;
                  (ed = t), e_.clear(), n.forEach((e) => e.stage_instances.forEach((e) => e_.add(e.id)));
              },
              MESSAGE_REMINDER_DUE: function (e) {
                  let { savedMessage: t } = e;
                  if (eE()) return !1;
                  let n = t.message;
                  if (null == n || null == n.author) return !1;
                  let i = k.A.getChannel(t.saveData.channelId);
                  if (null == i) return !1;
                  let { icon: r, body: s } = (0, y.TB)(i, n, n.author);
                  ee.A.showNotification(
                      r,
                      es.intl.string(es.t.IjZJB5),
                      s,
                      { notif_type: "MESSAGE_REMINDER_DUE" },
                      {
                          onClick() {
                              (0, I.A)(et.BVt.CHANNEL(i?.getGuildId(), i.id, n.id));
                          },
                          isUserAvatar: !0,
                      },
                  );
              },
              RESTRICTED_HOURS_WARNING: function (e) {
                  let { title: t, subtitle: i } = e;
                  if (eE() || !F.A.screenDowntimeReminder) return !1;
                  ee.A.showNotification(
                      n(608598),
                      t,
                      i,
                      { notif_type: "RESTRICTED_HOURS_WARNING" },
                      { isUserAvatar: !1 },
                  );
              },
          },
);
