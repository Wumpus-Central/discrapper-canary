"use strict";
n.d(t, { Pq: () => eh, rq: () => eE, Ay: () => eI, he: () => eA }), n(938796);
var i = n(481613),
    r = n.n(i),
    a = n(562708),
    s = n(607399),
    l = n(821418),
    o = n(665260),
    d = n(400253),
    c = n(742821),
    u = n(80703),
    _ = n(636537),
    E = n(459838),
    A = n(933681),
    h = n(228366),
    I = n(181658),
    f = n(178253),
    p = n(811024);
function T(e) {
    let { channelId: t, applicationId: n, intent: i, inviterUserId: r, analyticsLocations: a, commandOrigin: s } = e;
    h.h.dispatch({
        type: "EMBEDDED_ACTIVITY_DEFERRED_OPEN",
        channelId: t,
        applicationId: n,
        intent: i,
        inviterUserId: r,
        analyticsLocations: a,
        commandOrigin: s,
    });
}
var m = n(612200),
    g = n(323073),
    S = n(392054),
    N = n(197111),
    C = n(507263),
    R = n(202384),
    O = n(51758),
    L = n(473529),
    D = n(707592),
    y = n(698441),
    v = n(610101),
    b = n(224536),
    M = n(842241),
    P = n(970163),
    U = n(700241),
    w = n(824865),
    G = n(976860),
    x = n(790535),
    k = n(95701),
    F = n(280450),
    V = n(734057),
    B = n(808728),
    H = n(696451),
    j = n(71393),
    W = n(958590),
    Y = n(299091),
    K = n(576705),
    $ = n(994500),
    z = n(967198),
    q = n(287809),
    Z = n(174459),
    X = n(927813),
    Q = n(499785),
    J = n(877062),
    ee = n(827343),
    et = n(66834),
    en = n(401843),
    ei = n(652215),
    er = n(204925),
    ea = n(746080),
    es = n(325278),
    el = n(172799),
    eo = n(516607);
let ed = "invite",
    ec = null;
function eu(e) {
    let t = {};
    switch (e.target_type) {
        case el.yV.STREAM:
            (t.targetType = e.target_type), (t.targetUserId = e.target_user?.id);
            break;
        case el.yV.EMBEDDED_APPLICATION:
            (t.targetType = e.target_type), (t.targetApplicationId = e.target_application?.id);
            break;
        case el.yV.ROLE_SUBSCRIPTIONS_PURCHASE:
            t.targetType = e.target_type;
    }
    let n = null == j.A.getGuild(e.guild?.id) || e.new_member;
    return (
        n && null != e.channel && (0, k.ke)(e.channel.type) && (t.welcomeModalChannelId = e.channel.id),
        null != e.guild_scheduled_event && (t.guildScheduledEvent = e.guild_scheduled_event),
        (t.isGuestInvite = (0, o.Lt)(e.flags ?? 0, l.Q.IS_GUEST_INVITE)),
        (t.isApplicationBypassInvite = (0, o.Lt)(e.flags ?? 0, l.Q.IS_APPLICATION_BYPASS)),
        (t.inviterUserId = e.inviter?.id),
        n || (t.forceTransition = !0),
        null != e.target_channel_id &&
            ((t.targetChannelId = e.target_channel_id),
            null != e.target_message_id && (t.targetMessageId = e.target_message_id)),
        t
    );
}
function e_(e, t) {
    let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
    V.A.addConditionalChangeListener(() => {
        let r = V.A.getChannel(e),
            a = q.default.getCurrentUser();
        return (
            null == r ||
            null == a ||
            (!(
                (r.nsfw && !a.nsfwAllowed) ||
                (r.isGuildVocalOrThread() && (0, g.Tv)(e)) ||
                (r.isGuildVocalOrThread() && 0)
            ) &&
                (t?.guildScheduledEvent != null
                    ? !(function (e) {
                          let { guildScheduledEvent: t, welcomeModalChannelId: n } = e;
                          null != t &&
                              (0, C.B)(() => {
                                  let e = { guildScheduledEventId: t.id };
                                  null != n && (e.welcomeModalChannelId = n), (0, D.Ul)(t, e);
                              });
                      })(t)
                    : !(function (e) {
                          let { guildId: t, channel: i, options: r, analyticsLocations: a = [] } = e,
                              s = j.A.getGuild(t),
                              l = s?.features.has(ei.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL),
                              {
                                  targetUserId: o,
                                  targetType: d,
                                  targetApplicationId: c,
                                  isGuestInvite: u,
                                  isApplicationBypassInvite: _,
                              } = r ?? {};
                          if (!u && !_ && !r?.forceTransition && l && z.A.getGuildId() !== t) return;
                          let { type: A } = i,
                              h = V.A.getChannel(i.id),
                              I = (function (e, t, n) {
                                  if (n?.targetType === el.yV.ROLE_SUBSCRIPTIONS_PURCHASE)
                                      return ea.VV.ROLE_SUBSCRIPTIONS;
                                  let i = n?.targetChannelId;
                                  if (null != i) {
                                      let e = V.A.getChannel(i);
                                      if (null != e && K.A.can((0, k.TA)(e.type), e)) return i;
                                  }
                                  if (n?.targetType == null && !(0, k.QE)(t.type) && (0, L.K)(e))
                                      return ea.VV.GUILD_HOME;
                                  let r = V.A.getChannel(t.id),
                                      a = (0, k.TA)(t.type);
                                  return K.A.can(a, r)
                                      ? t.id
                                      : (B.Ay.getDefaultChannel(e, !0, ei.xBc.CREATE_INSTANT_INVITE)?.id ?? t.id);
                              })(t, i, r),
                              f = A === ei.rbe.GUILD_STAGE_VOICE,
                              m = r?.targetChannelId != null && I === r.targetChannelId,
                              g = m ? r?.targetMessageId : void 0,
                              N = ei.BVt.CHANNEL(t, I, g);
                          I === i.id && (0, k.QE)(A) && r?.autoJoin !== !1
                              ? (0, C.B)(() => {
                                    Promise.resolve()
                                        .then(n.bind(n, 730852))
                                        .then((e) => {
                                            let { default: n } = e,
                                                s = () => {
                                                    if (f) {
                                                        (0, x.av)(
                                                            i instanceof k.YB ? i : (0, k.createChannelRecord)(i),
                                                        ),
                                                            (0, G.pX)(N);
                                                        return;
                                                    }
                                                    r?.muteOnJoinVoiceChannel && ee.A.setSelfMute(E.x.DEFAULT, !0),
                                                        n.selectVoiceChannel(I),
                                                        d === el.yV.STREAM &&
                                                            null != o &&
                                                            en.Nl({
                                                                streamType: es.U4.GUILD,
                                                                ownerId: o,
                                                                guildId: t,
                                                                channelId: I,
                                                            }),
                                                        d === el.yV.EMBEDDED_APPLICATION &&
                                                            null != c &&
                                                            ((0, G.pX)(ei.BVt.CHANNEL(t ?? ei.ME, I)),
                                                            T({
                                                                channelId: I,
                                                                applicationId: c,
                                                                intent: r?.intent,
                                                                inviterUserId: r?.inviterUserId,
                                                                analyticsLocations: a,
                                                                commandOrigin: S.iw.CHAT,
                                                            }));
                                                };
                                            !u && (0, O.V)(t, [j.A, q.default, H.Ay]) ? (0, R.Ze)(t, s) : s();
                                        });
                                })
                              : (0, p.AX)(h) &&
                                d === el.yV.EMBEDDED_APPLICATION &&
                                null != c &&
                                ((0, G.pX)(ei.BVt.CHANNEL(t ?? ei.ME, I)),
                                T({
                                    channelId: I,
                                    applicationId: c,
                                    intent: r?.intent,
                                    inviterUserId: r?.inviterUserId,
                                    analyticsLocations: a,
                                    commandOrigin: S.iw.CHAT,
                                })),
                              (function (e, t) {
                                  let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                                      { type: i } = e,
                                      { transitionTo: r, welcomeModalChannelId: a, guildScheduledEvent: s } = t ?? {},
                                      l = i === ei.rbe.GUILD_STAGE_VOICE,
                                      o = { source: w.A.INVITE_ACCEPT, navigationReplace: !0 };
                                  return (
                                      n && (o.openChannel = !0),
                                      null != a && (o.welcomeModalChannelId = a),
                                      l && (o.state = { stageInviteKey: eo.J2 }),
                                      null != s && (o.guildScheduledEventId = s.id),
                                      (e) => (null != r ? r(e, o) : (0, G.pX)(e, o))
                                  );
                              })(
                                  i,
                                  r,
                                  m,
                              )(N);
                      })({ guildId: r.getGuildId() ?? ei.ME, channel: r, options: t, analyticsLocations: i }),
                !1))
        );
    });
}
async function eE(e) {
    let { guild_id: t, channel_id: n } = e;
    (0, y.Fd)(e) && null != n ? e_(n) : await et.A.transitionToGuildSync(t);
}
function eA(e, t) {
    let {
        invite: n,
        action: i,
        inviter_id: r,
        invite_message_id: a,
        invite_instance_id: s,
        application_id: l,
        stream_key: o,
        number_of_users_in_channel: d,
    } = e;
    Z.default.track(ei.HAw.INVITE_EMBED_ACTIONED, {
        action: i,
        invite_code: n.code,
        invite_type: n.type?.toString(),
        inviter_id: r ?? null,
        invite_message_id: a ?? null,
        invite_instance_id: s ?? null,
        application_id: l ?? null,
        stream_key: o ?? null,
        number_of_users_in_channel: d ?? null,
        location_stack: t ?? null,
    });
}
function eh(e, t, n) {
    Z.default.track(ei.HAw.INVITE_SERVER_CLICKED, { guild_id: e, action: t, location_stack: n ?? null });
}
let eI = {
    resolveInvite: function e(t, n, i) {
        return h.h.isDispatching()
            ? Promise.resolve().then(() => e(t, n, i))
            : (h.h.dispatch({ type: "INVITE_RESOLVE", code: t }),
              (0, P.A)(t, n, i).then((e) => {
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
            let { body: r } = await _.Bo.post({
                url: ei.Rsh.INSTANT_INVITES(e),
                body: i,
                context: { location: n },
                rejectWithError: !0,
            });
            return h.h.dispatch({ type: "INSTANT_INVITE_CREATE_SUCCESS", channelId: e, invite: r }), r;
        } catch (t) {
            throw (h.h.dispatch({ type: "INSTANT_INVITE_CREATE_FAILURE", channelId: e }), new I.A(t));
        }
    },
    async mobileCreateInvite(e, t) {
        let n = W.A.getInvite(e.id);
        if (null != n && !n.isExpired()) return n.code;
        let i = { max_age: X.A.Seconds.DAY },
            r = await this.createInvite(e.id, i, t).catch(() =>
                h.h.dispatch({ type: "NATIVE_APP_INSTANT_INVITE_GDM_SHARE_FAILED" }),
            );
        return r?.code;
    },
    async getAllFriendInvites(e) {
        if ((await new Promise((e) => h.h.wait(() => e(null))), W.A.getFriendInvitesFetching()))
            return null != ec ? ec.then((e) => e.body) : Promise.reject(Error("Invalid friend invite fetch request"));
        (ec = _.Bo.get({ url: ei.Rsh.FRIEND_INVITES, context: { location: e }, rejectWithError: !1 })),
            h.h.dispatch({ type: "FRIEND_INVITES_FETCH_REQUEST", requestedAt: new Date() });
        let { body: t } = await ec;
        return (
            (ec = null), h.h.dispatch({ type: "FRIEND_INVITES_FETCH_RESPONSE", receivedAt: new Date(), invites: t }), t
        );
    },
    createFriendInvite: (e, t) => (
        h.h.dispatch({ type: "FRIEND_INVITE_CREATE_REQUEST" }),
        _.Bo.post({ url: ei.Rsh.FRIEND_INVITES, body: e ?? {}, context: { location: t }, rejectWithError: !1 }).then(
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
        _.Bo.del({ url: ei.Rsh.FRIEND_INVITES, context: { location }, rejectWithError: !1 }).then((e) => {
            let { body: t } = e;
            h.h.dispatch({ type: "FRIEND_INVITE_REVOKE_SUCCESS", invites: t });
        })
    ),
    revokeFriendInvite: (e) => _.Bo.del({ url: ei.Rsh.INVITE(e), rejectWithError: !1 }),
    async fetchFriendMembers(e) {
        try {
            let { body: t } = await Q.A.get({
                url: ei.Rsh.INVITE_FRIEND_MEMBERS(e),
                trackedActionData: {
                    event: a.NetworkActionNames.INVITE_FRIEND_MEMBERS_FETCH,
                    properties: (t) => (0, A.e0)({ code: e, friend_count: t?.body?.friend_member_ids?.length ?? 0 }),
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
        return Q.A.delete({
            url: ei.Rsh.INVITE(t),
            oldFormErrors: !0,
            trackedActionData: {
                event: a.NetworkActionNames.INVITE_REVOKE,
                properties: { uses: e.uses, max_uses: e.maxUses, max_age: e.maxAge, invite_type: e.type },
            },
            rejectWithError: !1,
        }).then(() => {
            h.h.dispatch({ type: "INSTANT_INVITE_REVOKE_SUCCESS", code: t, channelId: n.id });
        });
    },
    acceptInvite(e) {
        var t;
        let i,
            r,
            a,
            s,
            { inviteKey: d, context: c, callback: u, skipOnboarding: E } = e,
            A = (0, M.m0)(d),
            I = F.default.getSessionId(),
            p = W.A.getReceivedInstallationIdForInviteCode(A),
            T = Y.A.getInvite(d);
        if (null != T)
            (i = T.guild_scheduled_event),
                (s = i?.id),
                (r = T.target_channel_id ?? void 0),
                (a = T.target_message_id ?? void 0);
        else {
            let e = (0, M.y$)(d);
            (s = e.guildScheduledEventId), (r = e.targetChannelId), (a = e.targetMessageId);
        }
        let g = ((t = s), { ...c, invite_guild_scheduled_event_id: t }),
            S = q.default.getCurrentUser();
        return S?.hasFlag(ei.nhx.QUARANTINED)
            ? ((0, U.default)(), new Promise((e, t) => t(Error())))
            : (h.h.dispatch({ type: "INVITE_ACCEPT", code: d }),
              _.Bo.post({
                  url: ei.Rsh.INVITE(A),
                  context: g,
                  oldFormErrors: !0,
                  body: { session_id: I, invite_instance_id: c.invite_instance_id, received_installation_id: p },
                  rejectWithError: !1,
              }).then(
                  async (e) => {
                      null != p && this.clearReceivedInstallationIdForInviteCode(A),
                          h.h.dispatch({ type: "INVITE_ACCEPT_SUCCESS", invite: e.body, code: d });
                      let t = i ?? y.Ay.getGuildScheduledEvent(s),
                          c = {
                              ...e.body,
                              guild_scheduled_event: t,
                              target_channel_id: e.body.target_channel_id ?? r,
                              target_message_id: e.body.target_message_id ?? a,
                          },
                          _ = c?.guild_id ?? c?.guild?.id,
                          I = (0, o.Lt)(c.flags ?? 0, l.Q.IS_GUEST_INVITE);
                      if (!E && !I && null != _ && c.new_member && !c.show_verification_form) {
                          let { default: e } = await Promise.resolve().then(n.bind(n, 608401));
                          await e({ guildId: _ });
                      }
                      return u?.(c), e.body;
                  },
                  (e) => {
                      throw (
                          (e.body?.code === ei.t02.USER_GUILD_JOIN_LARGE_GUILD_UNDERAGE_DISALLOWED &&
                              (0, m.yO)(er.w_.JOIN_LARGE_GUILD_UNDERAGE),
                          h.h.dispatch({
                              type: "INVITE_ACCEPT_FAILURE",
                              code: d,
                              error: { message: e.body?.message, code: e.body?.code },
                          }),
                          new f.A(e))
                      );
                  },
              ));
    },
    acceptInviteAndTransitionToInviteChannel(e) {
        let { inviteKey: t, context: n, analyticsLocations: i, callback: r, skipOnboarding: a, autoJoin: s } = e;
        return this.acceptInvite({
            inviteKey: t,
            context: n,
            skipOnboarding: a,
            callback: (e) => {
                if (null != e.channel) {
                    let t = { ...eu(e), autoJoin: s };
                    e_(e.channel.id, t, i ?? []);
                }
                null != r && r(e);
            },
        });
    },
    transitionToInvite(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            { transitionTo: n, muteOnJoinVoiceChannel: i, intent: r, forceTransition: a } = t,
            { channel: s, guild: d, inviter: c } = e;
        if (null == s && null == d && null != c) {
            let e = $.A.isFriend(c.id) ? V.A.getDMFromUserId(c.id) : null;
            null != e && e_(e, t);
            return;
        }
        if (null != d && d.features?.includes(ei.GuildFeatures.HUB)) return void b.A.onOpenHubInvite(e);
        let u = e.flags ?? 0,
            _ = (0, o.Lt)(u, l.Q.IS_GUEST_INVITE) || (0, o.Lt)(u, l.Q.IS_APPLICATION_BYPASS);
        if (null != d && !_ && e.new_member && (0, v.h)(d)) return void (0, v.W)(d.id);
        if (null == s) return;
        let E = eu(e);
        null != n && (E.transitionTo = n),
            null != r && (E.intent = r),
            null != i && (E.muteOnJoinVoiceChannel = i),
            null != a && (E.forceTransition = a),
            e_(s.id, E);
    },
    openNativeAppModal(e) {
        let t = (0, M.y$)(e),
            n = {
                installationId: F.default.getInstallationForTracking(),
                targetChannelId: t.targetChannelId,
                targetMessageId: t.targetMessageId,
                guildScheduledEventId: t.guildScheduledEventId,
            };
        N.A.openNativeAppModal(t.baseCode, ei.e$_.INVITE_BROWSER, n);
    },
    transitionToInviteOnboarding(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            { transitionTo: n = G.pX } = t,
            i = (0, M.WU)({
                baseCode: e.code,
                targetChannelId: e.target_channel_id ?? void 0,
                targetMessageId: e.target_message_id ?? void 0,
                guildScheduledEventId: e.guild_scheduled_event?.id,
            });
        n(ei.BVt.APP_WITH_INVITE_AND_GUILD_ONBOARDING(e.code), { search: (0, M.ys)(i) });
    },
    openApp(e, t, n, i, a) {
        let l,
            o = null != e ? (0, M.y$)(e) : null,
            _ = o?.baseCode,
            E = o?.targetMessageId,
            A = o?.targetChannelId;
        if (
            (h.h.dispatch({ type: "INVITE_APP_OPENING", code: e }),
            null != r().ua && r().ua.toLowerCase().indexOf("googlebot") > -1)
        )
            return void h.h.dispatch({ type: "INVITE_APP_NOT_OPENED", code: e });
        if (r().os?.family === "Android" || r().os?.family === "iOS" || s.v1) {
            let e = null != _ ? (0, d.jN)(_) : (0, d.BH)(),
                t = (0, c.I_)();
            (l = (0, c.Ay)(e, {
                utmSource: 2 === a ? "friend_invite" : ed,
                fingerprint: n,
                installationId: F.default.getInstallationForTracking(),
                username: i,
                attemptId: t,
                event: o?.guildScheduledEventId,
                channel: A,
                message: E,
                iosFallbackLink: `https://discord.com/api/download/mobile?invite_code=${_}`,
            })),
                Z.default.track(ei.HAw.DEEP_LINK_CLICKED, {
                    fingerprint: (0, u.v)(n),
                    attempt_id: t,
                    source: ed,
                    invite_code: _,
                });
        } else {
            let e = t ?? A;
            "#" === (l = null != e ? ei.BVt.INVITE_PROXY(e, E) : "")[0] && (l = l.slice(1)), (l = `discord://${l}`);
        }
        J.A.launch(l, (t) => {
            h.h.dispatch(t ? { type: "INVITE_APP_OPENED", code: e } : { type: "INVITE_APP_NOT_OPENED", code: e });
        });
    },
    setReceivedInstallationIdForInviteCode(e, t) {
        h.h.dispatch({ type: "INSTANT_INVITE_RECEIVED_INSTALLATION_ID_SET", inviteCode: e, receivedInstallationId: t });
    },
    clearReceivedInstallationIdForInviteCode(e) {
        h.h.dispatch({ type: "INSTANT_INVITE_RECEIVED_INSTALLATION_ID_CLEAR", inviteCode: e });
    },
    trackInviteServerClicked: eh,
};
