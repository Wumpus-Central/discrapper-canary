"use strict";
n.d(t, { Pq: () => ef, rq: () => ed, Ay: () => eh, he: () => e_ }), n(938796);
var i = n(481613),
    r = n.n(i),
    s = n(562708),
    a = n(821418),
    o = n(665260),
    l = n(400253),
    u = n(742821),
    c = n(80703),
    d = n(636537),
    _ = n(459838),
    f = n(933681),
    h = n(228366),
    p = n(181658),
    E = n(178253),
    m = n(811024);
function g(e) {
    let { channelId: t, applicationId: n, intent: i, inviterUserId: r, analyticsLocations: s, commandOrigin: a } = e;
    h.h.dispatch({
        type: "EMBEDDED_ACTIVITY_DEFERRED_OPEN",
        channelId: t,
        applicationId: n,
        intent: i,
        inviterUserId: r,
        analyticsLocations: s,
        commandOrigin: a,
    });
}
var A = n(612200),
    I = n(323073),
    T = n(392054),
    S = n(197111),
    N = n(507263),
    y = n(202384),
    C = n(51758),
    v = n(473529),
    O = n(707592),
    R = n(698441),
    b = n(610101),
    D = n(224536),
    L = n(842241),
    w = n(970163),
    M = n(700241),
    P = n(824865),
    x = n(976860),
    U = n(790535),
    k = n(95701),
    G = n(495544),
    F = n(734057),
    V = n(808728),
    B = n(696451),
    H = n(71393),
    j = n(958590),
    Y = n(576705),
    W = n(967198),
    K = n(287809),
    z = n(174459),
    $ = n(927813),
    q = n(499785),
    Z = n(877062),
    X = n(827343),
    Q = n(66834),
    J = n(401843),
    ee = n(652215),
    et = n(204925),
    en = n(746080),
    ei = n(325278),
    er = n(172799),
    es = n(516607);
let ea = "invite",
    eo = null;
function el(e) {
    let t = {};
    switch (e.target_type) {
        case er.yV.STREAM:
            (t.targetType = e.target_type), (t.targetUserId = e.target_user?.id);
            break;
        case er.yV.EMBEDDED_APPLICATION:
            (t.targetType = e.target_type), (t.targetApplicationId = e.target_application?.id);
            break;
        case er.yV.ROLE_SUBSCRIPTIONS_PURCHASE:
            t.targetType = e.target_type;
    }
    let n = null == H.A.getGuild(e.guild?.id) || e.new_member;
    return (
        n && null != e.channel && (0, k.ke)(e.channel.type) && (t.welcomeModalChannelId = e.channel.id),
        null != e.guild_scheduled_event && (t.guildScheduledEvent = e.guild_scheduled_event),
        (t.isGuestInvite = (0, o.Lt)(e.flags ?? 0, a.Q.IS_GUEST_INVITE)),
        (t.isApplicationBypassInvite = (0, o.Lt)(e.flags ?? 0, a.Q.IS_APPLICATION_BYPASS)),
        (t.inviterUserId = e.inviter?.id),
        n || (t.forceTransition = !0),
        t
    );
}
function eu(e) {
    let { guildId: t, channel: i, options: r, analyticsLocations: s = [] } = e,
        a = H.A.getGuild(t),
        o = a?.features.has(ee.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL),
        {
            targetUserId: l,
            targetType: u,
            targetApplicationId: c,
            isGuestInvite: d,
            isApplicationBypassInvite: f,
        } = r ?? {};
    if (!d && !f && !r?.forceTransition && o && W.A.getGuildId() !== t) return;
    let { type: h } = i,
        p = F.A.getChannel(i.id),
        E = (function (e, t, n) {
            if (n?.targetType === er.yV.ROLE_SUBSCRIPTIONS_PURCHASE) return en.VV.ROLE_SUBSCRIPTIONS;
            if (n?.targetType == null && !(0, k.QE)(t.type) && (0, v.K)(e)) return en.VV.GUILD_HOME;
            let i = F.A.getChannel(t.id),
                r = (0, k.TA)(t.type);
            return Y.A.can(r, i) ? t.id : (V.Ay.getDefaultChannel(e, !0, ee.xBc.CREATE_INSTANT_INVITE)?.id ?? t.id);
        })(t, i, r),
        A = h === ee.rbe.GUILD_STAGE_VOICE,
        I = ee.BVt.CHANNEL(t, E);
    E === i.id && (0, k.QE)(h) && r?.autoJoin !== !1
        ? (0, N.B)(() => {
              Promise.resolve()
                  .then(n.bind(n, 730852))
                  .then((e) => {
                      let { default: n } = e,
                          a = () => {
                              if (A) {
                                  (0, U.av)(i instanceof k.YB ? i : (0, k.createChannelRecord)(i)), (0, x.pX)(I);
                                  return;
                              }
                              r?.muteOnJoinVoiceChannel && X.A.setSelfMute(_.x.DEFAULT, !0),
                                  n.selectVoiceChannel(E),
                                  u === er.yV.STREAM &&
                                      null != l &&
                                      J.Nl({ streamType: ei.U4.GUILD, ownerId: l, guildId: t, channelId: E }),
                                  u === er.yV.EMBEDDED_APPLICATION &&
                                      null != c &&
                                      ((0, x.pX)(ee.BVt.CHANNEL(t ?? ee.ME, E)),
                                      g({
                                          channelId: E,
                                          applicationId: c,
                                          intent: r?.intent,
                                          inviterUserId: r?.inviterUserId,
                                          analyticsLocations: s,
                                          commandOrigin: T.iw.CHAT,
                                      }));
                          };
                      !d && (0, C.V)(t, [H.A, K.default, B.Ay]) ? (0, y.Ze)(t, a) : a();
                  });
          })
        : (0, m.AX)(p) &&
          u === er.yV.EMBEDDED_APPLICATION &&
          null != c &&
          ((0, x.pX)(ee.BVt.CHANNEL(t ?? ee.ME, E)),
          g({
              channelId: E,
              applicationId: c,
              intent: r?.intent,
              inviterUserId: r?.inviterUserId,
              analyticsLocations: s,
              commandOrigin: T.iw.CHAT,
          })),
        (function (e, t) {
            let { type: n } = e,
                { transitionTo: i, welcomeModalChannelId: r, guildScheduledEvent: s } = t ?? {},
                a = n === ee.rbe.GUILD_STAGE_VOICE,
                o = { source: P.A.INVITE_ACCEPT, navigationReplace: !0 };
            return (
                null != r && (o.welcomeModalChannelId = r),
                a && (o.state = { stageInviteKey: es.J2 }),
                null != s && (o.guildScheduledEventId = s.id),
                (e) => (null != i ? i(e, o) : (0, x.pX)(e, o))
            );
        })(
            i,
            r,
        )(I);
}
let ec = function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
        F.A.addConditionalChangeListener(() => {
            let i = F.A.getChannel(e),
                r = K.default.getCurrentUser();
            return (
                null == i ||
                null == r ||
                (!(
                    (i.nsfw && !r.nsfwAllowed) ||
                    (i.isGuildVocalOrThread() && (0, I.Tv)(e)) ||
                    (i.isGuildVocalOrThread() && 0)
                ) &&
                    (t?.guildScheduledEvent != null
                        ? !(function (e) {
                              let { guildScheduledEvent: t, welcomeModalChannelId: n } = e;
                              null != t &&
                                  (0, N.B)(() => {
                                      let e = { guildScheduledEventId: t.id };
                                      null != n && (e.welcomeModalChannelId = n), (0, O.Ul)(t, e);
                                  });
                          })(t)
                        : eu({ guildId: i.getGuildId() ?? ee.ME, channel: i, options: t, analyticsLocations: n }),
                    !1))
            );
        });
    },
    ed = async (e) => {
        let { guild_id: t, channel_id: n } = e;
        (0, R.Fd)(e) && null != n ? ec(n) : await Q.A.transitionToGuildSync(t);
    };
function e_(e, t) {
    let {
        invite: n,
        action: i,
        inviter_id: r,
        invite_message_id: s,
        invite_instance_id: a,
        application_id: o,
        stream_key: l,
        number_of_users_in_channel: u,
    } = e;
    z.default.track(ee.HAw.INVITE_EMBED_ACTIONED, {
        action: i,
        invite_code: n.code,
        invite_type: n.type?.toString(),
        inviter_id: r ?? null,
        invite_message_id: s ?? null,
        invite_instance_id: a ?? null,
        application_id: o ?? null,
        stream_key: l ?? null,
        number_of_users_in_channel: u ?? null,
        location_stack: t ?? null,
    });
}
function ef(e, t, n) {
    z.default.track(ee.HAw.INVITE_SERVER_CLICKED, { guild_id: e, action: t, location_stack: n ?? null });
}
let eh = {
    resolveInvite: function e(t, n, i) {
        return h.h.isDispatching()
            ? Promise.resolve().then(() => e(t, n, i))
            : (h.h.dispatch({ type: "INVITE_RESOLVE", code: t }),
              (0, w.A)(t, n, i).then((e) => {
                  let { invite: t, code: n, banned: i } = e;
                  return (
                      null != t
                          ? h.h.dispatch({ type: "INVITE_RESOLVE_SUCCESS", invite: t, code: n })
                          : h.h.dispatch({ type: "INVITE_RESOLVE_FAILURE", code: n, banned: i }),
                      { invite: t, code: n }
                  );
              }));
    },
    getInviteContext: (e, t) => ({
        location: e,
        location_guild_id: t?.guild != null ? t.guild.id : void 0,
        location_channel_id: t?.channel != null ? t.channel.id : void 0,
        location_channel_type: t?.channel != null ? t.channel.type : void 0,
    }),
    async createInvite(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            n = arguments.length > 2 ? arguments[2] : void 0;
        try {
            let i = { ...t };
            i.role_ids?.length === 0 && delete i.role_ids;
            let { body: r } = await d.Bo.post({
                url: ee.Rsh.INSTANT_INVITES(e),
                body: i,
                context: { location: n },
                rejectWithError: !0,
            });
            return h.h.dispatch({ type: "INSTANT_INVITE_CREATE_SUCCESS", channelId: e, invite: r }), r;
        } catch (t) {
            throw (h.h.dispatch({ type: "INSTANT_INVITE_CREATE_FAILURE", channelId: e }), new p.A(t));
        }
    },
    async mobileCreateInvite(e, t) {
        let n = j.A.getInvite(e.id);
        if (null != n && !n.isExpired()) return n.code;
        let i = { max_age: $.A.Seconds.DAY },
            r = await this.createInvite(e.id, i, t).catch(() =>
                h.h.dispatch({ type: "NATIVE_APP_INSTANT_INVITE_GDM_SHARE_FAILED" }),
            );
        return r?.code;
    },
    async getAllFriendInvites(e) {
        if ((await new Promise((e) => h.h.wait(() => e(null))), j.A.getFriendInvitesFetching()))
            return null != eo ? eo.then((e) => e.body) : Promise.reject(Error("Invalid friend invite fetch request"));
        (eo = d.Bo.get({ url: ee.Rsh.FRIEND_INVITES, context: { location: e }, rejectWithError: !1 })),
            h.h.dispatch({ type: "FRIEND_INVITES_FETCH_REQUEST", requestedAt: new Date() });
        let { body: t } = await eo;
        return (
            (eo = null), h.h.dispatch({ type: "FRIEND_INVITES_FETCH_RESPONSE", receivedAt: new Date(), invites: t }), t
        );
    },
    createFriendInvite: (e, t) => (
        h.h.dispatch({ type: "FRIEND_INVITE_CREATE_REQUEST" }),
        d.Bo.post({ url: ee.Rsh.FRIEND_INVITES, body: e ?? {}, context: { location: t }, rejectWithError: !1 }).then(
            (e) => {
                let { body: t } = e;
                return h.h.dispatch({ type: "FRIEND_INVITE_CREATE_SUCCESS", invite: t }), t;
            },
            (e) => {
                throw (h.h.dispatch({ type: "FRIEND_INVITE_CREATE_FAILURE", error: e }), e);
            },
        )
    ),
    revokeFriendInvites: () => (
        h.h.dispatch({ type: "FRIEND_INVITE_REVOKE_REQUEST" }),
        d.Bo.del({ url: ee.Rsh.FRIEND_INVITES, context: { location }, rejectWithError: !1 }).then((e) => {
            let { body: t } = e;
            h.h.dispatch({ type: "FRIEND_INVITE_REVOKE_SUCCESS", invites: t });
        })
    ),
    revokeFriendInvite: (e) => d.Bo.del({ url: ee.Rsh.INVITE(e), rejectWithError: !1 }),
    async fetchFriendMembers(e) {
        try {
            let { body: t } = await q.A.get({
                url: ee.Rsh.INVITE_FRIEND_MEMBERS(e),
                trackedActionData: {
                    event: s.NetworkActionNames.INVITE_FRIEND_MEMBERS_FETCH,
                    properties: (t) => (0, f.e0)({ code: e, friend_count: t?.body?.friend_member_ids?.length ?? 0 }),
                },
                rejectWithError: !0,
            });
            h.h.dispatch({
                type: "INVITE_FRIEND_MEMBERS_FETCH_SUCCESS",
                code: e,
                friendMemberIds: t.friend_member_ids,
            });
        } catch (t) {
            h.h.dispatch({ type: "INVITE_FRIEND_MEMBERS_FETCH_FAILURE", code: e });
        }
    },
    clearInviteFromStore(e) {
        h.h.dispatch({ type: "INSTANT_INVITE_CLEAR", channelId: e });
    },
    revokeInvite(e) {
        let { code: t, channel: n } = e;
        return q.A.delete({
            url: ee.Rsh.INVITE(t),
            oldFormErrors: !0,
            trackedActionData: {
                event: s.NetworkActionNames.INVITE_REVOKE,
                properties: { uses: e.uses, max_uses: e.maxUses, max_age: e.maxAge, invite_type: e.type },
            },
            rejectWithError: !1,
        }).then(() => {
            h.h.dispatch({ type: "INSTANT_INVITE_REVOKE_SUCCESS", code: t, channelId: n.id });
        });
    },
    acceptInvite(e) {
        let { inviteKey: t, context: i, callback: r, skipOnboarding: s } = e,
            l = (0, L.y$)(t),
            u = l.baseCode,
            c = G.default.getSessionId(),
            _ = j.A.getReceivedInstallationIdForInviteCode(u),
            f = { ...i, invite_guild_scheduled_event_id: l.guildScheduledEventId },
            p = K.default.getCurrentUser();
        return p?.hasFlag(ee.nhx.QUARANTINED)
            ? ((0, M.default)(), new Promise((e, t) => t(Error())))
            : (h.h.dispatch({ type: "INVITE_ACCEPT", code: t }),
              d.Bo.post({
                  url: ee.Rsh.INVITE(u),
                  context: f,
                  oldFormErrors: !0,
                  body: { session_id: c, invite_instance_id: i.invite_instance_id, received_installation_id: _ },
                  rejectWithError: !1,
              }).then(
                  async (e) => {
                      null != _ && this.clearReceivedInstallationIdForInviteCode(u),
                          h.h.dispatch({ type: "INVITE_ACCEPT_SUCCESS", invite: e.body, code: t });
                      let i = R.Ay.getGuildScheduledEvent(l.guildScheduledEventId),
                          c = { ...e.body, guild_scheduled_event: i },
                          d = c?.guild_id ?? c?.guild?.id,
                          f = (0, o.Lt)(c.flags ?? 0, a.Q.IS_GUEST_INVITE);
                      if (!s && !f && null != d && c.new_member && !c.show_verification_form) {
                          let { default: e } = await Promise.resolve().then(n.bind(n, 608401));
                          await e({ guildId: d });
                      }
                      return r?.(c), e.body;
                  },
                  (e) => {
                      throw (
                          (e.body?.code === ee.t02.USER_GUILD_JOIN_LARGE_GUILD_UNDERAGE_DISALLOWED &&
                              (0, A.yO)(et.w_.JOIN_LARGE_GUILD_UNDERAGE),
                          h.h.dispatch({
                              type: "INVITE_ACCEPT_FAILURE",
                              code: t,
                              error: { message: e.body?.message, code: e.body?.code },
                          }),
                          new E.A(e))
                      );
                  },
              ));
    },
    acceptInviteAndTransitionToInviteChannel(e) {
        let { inviteKey: t, context: n, analyticsLocations: i, callback: r, skipOnboarding: s, autoJoin: a } = e;
        return this.acceptInvite({
            inviteKey: t,
            context: n,
            skipOnboarding: s,
            callback: (e) => {
                if (null != e.channel) {
                    let t = { ...el(e), autoJoin: a };
                    ec(e.channel.id, t, i ?? []);
                }
                null != r && r(e);
            },
        });
    },
    transitionToInvite(e, t, n) {
        let { channel: i, guild: r } = e;
        if (null != r && r.features?.includes(ee.GuildFeatures.HUB)) return void D.A.onOpenHubInvite(e);
        let s = e.flags ?? 0,
            l = (0, o.Lt)(s, a.Q.IS_GUEST_INVITE) || (0, o.Lt)(s, a.Q.IS_APPLICATION_BYPASS);
        if (null != r && !l && e.new_member && (0, b.h)(r)) return void (0, b.W)(r.id);
        if (null == i) return;
        let u = el(e);
        null != t && (u.transitionTo = t),
            null != n && (u.muteOnJoinVoiceChannel = n),
            eu({ guildId: null != r ? r.id : ee.ME, channel: i, options: u });
    },
    transitionToInviteSync(e, t, n) {
        if (null != e.channel) {
            let i = el(e);
            this.transitionToInviteChannelSync(e.channel.id, { ...i, intent: n, transitionTo: t, forceTransition: !0 });
        }
    },
    openNativeAppModal(e) {
        let t = { installationId: G.default.getInstallationForTracking() };
        S.A.openNativeAppModal(e, ee.e$_.INVITE_BROWSER, t);
    },
    openApp(e, t, n, i, s) {
        let a,
            o = null != e ? (0, L.y$)(e) : null,
            d = o?.baseCode;
        if (
            (h.h.dispatch({ type: "INVITE_APP_OPENING", code: e }),
            null != r().ua && r().ua.toLowerCase().indexOf("googlebot") > -1)
        )
            return void h.h.dispatch({ type: "INVITE_APP_NOT_OPENED", code: e });
        if (r().os?.family === "Android" || r().os?.family === "iOS") {
            let e = null != d ? (0, l.jN)(d) : (0, l.BH)(),
                t = (0, u.I_)();
            (a = (0, u.Ay)(e, {
                utmSource: 2 === s ? "friend_invite" : ea,
                fingerprint: n,
                installationId: G.default.getInstallationForTracking(),
                username: i,
                attemptId: t,
                event: o?.guildScheduledEventId,
                iosFallbackLink: `https://discord.com/api/download/mobile?invite_code=${d}`,
            })),
                z.default.track(ee.HAw.DEEP_LINK_CLICKED, {
                    fingerprint: (0, c.v)(n),
                    attempt_id: t,
                    source: ea,
                    invite_code: d,
                });
        } else "#" === (a = null != t ? ee.BVt.INVITE_PROXY(t) : "")[0] && (a = a.slice(1)), (a = `discord://${a}`);
        Z.A.launch(a, (t) => {
            h.h.dispatch(t ? { type: "INVITE_APP_OPENED", code: e } : { type: "INVITE_APP_NOT_OPENED", code: e });
        });
    },
    setReceivedInstallationIdForInviteCode(e, t) {
        h.h.dispatch({ type: "INSTANT_INVITE_RECEIVED_INSTALLATION_ID_SET", inviteCode: e, receivedInstallationId: t });
    },
    clearReceivedInstallationIdForInviteCode(e) {
        h.h.dispatch({ type: "INSTANT_INVITE_RECEIVED_INSTALLATION_ID_CLEAR", inviteCode: e });
    },
    transitionToInviteChannelSync: ec,
    trackInviteServerClicked: ef,
};
