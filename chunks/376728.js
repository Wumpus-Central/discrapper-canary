(n.d(t, { Pq: () => eI, rq: () => eA, Ay: () => ef, he: () => eh }), n(938796));
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
    E = n(205693),
    A = n(933681),
    h = n(73153),
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
    S = n(45645),
    N = n(392054),
    C = n(197111),
    O = n(507263),
    R = n(202384),
    L = n(51758),
    y = n(473529),
    D = n(707592),
    v = n(698441),
    b = n(610101),
    M = n(224536),
    P = n(21599),
    U = n(970163),
    w = n(700241),
    G = n(824865),
    x = n(976860),
    k = n(747376),
    F = n(95701),
    B = n(280450),
    V = n(734057),
    H = n(808728),
    j = n(696451),
    W = n(71393),
    Y = n(958590),
    K = n(299091),
    $ = n(576705),
    z = n(994500),
    X = n(967198),
    Z = n(287809),
    q = n(174459),
    Q = n(927813),
    J = n(499785),
    ee = n(877062),
    et = n(827343),
    en = n(66834),
    ei = n(401843),
    er = n(652215),
    ea = n(204925),
    es = n(746080),
    el = n(325278),
    eo = n(172799),
    ed = n(516607);
let ec = "invite",
    eu = null;
function e_(e) {
    let t = {};
    switch (e.target_type) {
        case eo.yV.STREAM:
            ((t.targetType = e.target_type), (t.targetUserId = e.target_user?.id));
            break;
        case eo.yV.EMBEDDED_APPLICATION:
            ((t.targetType = e.target_type), (t.targetApplicationId = e.target_application?.id));
            break;
        case eo.yV.ROLE_SUBSCRIPTIONS_PURCHASE:
            t.targetType = e.target_type;
    }
    let n = null == W.A.getGuild(e.guild?.id) || e.new_member;
    return (
        n && null != e.channel && (0, F.ke)(e.channel.type) && (t.welcomeModalChannelId = e.channel.id),
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
function eE(e, t) {
    let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
    V.A.addConditionalChangeListener(() => {
        let r = V.A.getChannel(e),
            a = Z.default.getCurrentUser();
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
                              (0, O.B)(() => {
                                  let e = { guildScheduledEventId: t.id };
                                  (null != n && (e.welcomeModalChannelId = n), (0, D.Ul)(t, e));
                              });
                      })(t)
                    : !(function (e) {
                          let { guildId: t, channel: i, options: r, analyticsLocations: a = [] } = e,
                              s = W.A.getGuild(t),
                              l = s?.features.has(er.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL),
                              {
                                  targetUserId: o,
                                  targetType: d,
                                  targetApplicationId: c,
                                  isGuestInvite: u,
                                  isApplicationBypassInvite: _,
                              } = r ?? {};
                          if (!u && !_ && !r?.forceTransition && l && X.A.getGuildId() !== t) return;
                          let { type: A } = i,
                              h = V.A.getChannel(i.id),
                              I = (function (e, t, n) {
                                  if (n?.targetType === eo.yV.ROLE_SUBSCRIPTIONS_PURCHASE)
                                      return es.VV.ROLE_SUBSCRIPTIONS;
                                  let i = n?.targetChannelId;
                                  if (null != i) {
                                      let e = V.A.getChannel(i);
                                      if (null != e && $.A.can((0, F.TA)(e.type), e)) return i;
                                  }
                                  if (n?.targetType == null && !(0, F.QE)(t.type) && (0, y.K)(e))
                                      return es.VV.GUILD_HOME;
                                  let r = V.A.getChannel(t.id),
                                      a = (0, F.TA)(t.type);
                                  return $.A.can(a, r)
                                      ? t.id
                                      : (H.Ay.getDefaultChannel(e, !0, er.xBc.CREATE_INSTANT_INVITE)?.id ?? t.id);
                              })(t, i, r),
                              f = A === er.rbe.GUILD_STAGE_VOICE,
                              m = r?.targetChannelId != null && I === r.targetChannelId,
                              g = m ? r?.targetMessageId : void 0,
                              S = er.BVt.CHANNEL(t, I, g);
                          (I === i.id && (0, F.QE)(A) && r?.autoJoin !== !1
                              ? (0, O.B)(() => {
                                    Promise.resolve()
                                        .then(n.bind(n, 730852))
                                        .then((e) => {
                                            let { default: n } = e,
                                                s = () => {
                                                    if (f) {
                                                        ((0, k.av)(
                                                            i instanceof F.YB ? i : (0, F.createChannelRecord)(i),
                                                        ),
                                                            (0, x.pX)(S));
                                                        return;
                                                    }
                                                    (r?.muteOnJoinVoiceChannel && et.A.setSelfMute(E.x.DEFAULT, !0),
                                                        n.selectVoiceChannel(I),
                                                        d === eo.yV.STREAM &&
                                                            null != o &&
                                                            ei.Nl({
                                                                streamType: el.U4.GUILD,
                                                                ownerId: o,
                                                                guildId: t,
                                                                channelId: I,
                                                            }),
                                                        d === eo.yV.EMBEDDED_APPLICATION &&
                                                            null != c &&
                                                            ((0, x.pX)(er.BVt.CHANNEL(t ?? er.ME, I)),
                                                            T({
                                                                channelId: I,
                                                                applicationId: c,
                                                                intent: r?.intent,
                                                                inviterUserId: r?.inviterUserId,
                                                                analyticsLocations: a,
                                                                commandOrigin: N.iw.CHAT,
                                                            })));
                                                };
                                            !u && (0, L.V)(t, [W.A, Z.default, j.Ay]) ? (0, R.Ze)(t, s) : s();
                                        });
                                })
                              : (0, p.AX)(h) &&
                                d === eo.yV.EMBEDDED_APPLICATION &&
                                null != c &&
                                ((0, x.pX)(er.BVt.CHANNEL(t ?? er.ME, I)),
                                T({
                                    channelId: I,
                                    applicationId: c,
                                    intent: r?.intent,
                                    inviterUserId: r?.inviterUserId,
                                    analyticsLocations: a,
                                    commandOrigin: N.iw.CHAT,
                                })),
                              (function (e, t) {
                                  let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                                      { type: i } = e,
                                      { transitionTo: r, welcomeModalChannelId: a, guildScheduledEvent: s } = t ?? {},
                                      l = i === er.rbe.GUILD_STAGE_VOICE,
                                      o = { source: G.A.INVITE_ACCEPT, navigationReplace: !0 };
                                  return (
                                      n && (o.openChannel = !0),
                                      null != a && (o.welcomeModalChannelId = a),
                                      l && (o.state = { stageInviteKey: ed.J2 }),
                                      null != s && (o.guildScheduledEventId = s.id),
                                      (e) => (null != r ? r(e, o) : (0, x.pX)(e, o))
                                  );
                              })(
                                  i,
                                  r,
                                  m,
                              )(S));
                      })({ guildId: r.getGuildId() ?? er.ME, channel: r, options: t, analyticsLocations: i }),
                !1))
        );
    });
}
async function eA(e) {
    let { guild_id: t, channel_id: n } = e;
    (0, v.Fd)(e) && null != n ? eE(n) : await en.A.transitionToGuildSync(t);
}
function eh(e, t) {
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
    q.default.track(er.HAw.INVITE_EMBED_ACTIONED, {
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
function eI(e, t, n) {
    q.default.track(er.HAw.INVITE_SERVER_CLICKED, { guild_id: e, action: t, location_stack: n ?? null });
}
let ef = {
    resolveInvite: function e(t, n, i) {
        return h.h.isDispatching()
            ? Promise.resolve().then(() => e(t, n, i))
            : (h.h.dispatch({ type: "INVITE_RESOLVE", code: t }),
              (0, U.A)(t, n, i).then((e) => {
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
                url: er.Rsh.INSTANT_INVITES(e),
                body: i,
                context: { location: n },
                rejectWithError: !0,
            });
            return (h.h.dispatch({ type: "INSTANT_INVITE_CREATE_SUCCESS", channelId: e, invite: r }), r);
        } catch (t) {
            throw (h.h.dispatch({ type: "INSTANT_INVITE_CREATE_FAILURE", channelId: e }), new I.A(t));
        }
    },
    async mobileCreateInvite(e, t) {
        let n = Y.A.getInvite(e.id);
        if (null != n && !n.isExpired()) return n.code;
        let i = { max_age: Q.A.Seconds.DAY },
            r = await this.createInvite(e.id, i, t).catch(() =>
                h.h.dispatch({ type: "NATIVE_APP_INSTANT_INVITE_GDM_SHARE_FAILED" }),
            );
        return r?.code;
    },
    async getAllFriendInvites(e) {
        if ((await new Promise((e) => h.h.wait(() => e(null))), Y.A.getFriendInvitesFetching()))
            return null != eu ? eu.then((e) => e.body) : Promise.reject(Error("Invalid friend invite fetch request"));
        ((eu = _.Bo.get({ url: er.Rsh.FRIEND_INVITES, context: { location: e }, rejectWithError: (0, _.fT)() })),
            h.h.dispatch({ type: "FRIEND_INVITES_FETCH_REQUEST", requestedAt: new Date() }));
        let { body: t } = await eu;
        return (
            (eu = null), h.h.dispatch({ type: "FRIEND_INVITES_FETCH_RESPONSE", receivedAt: new Date(), invites: t }), t
        );
    },
    createFriendInvite: (e, t) => (
        h.h.dispatch({ type: "FRIEND_INVITE_CREATE_REQUEST" }),
        _.Bo.post({
            url: er.Rsh.FRIEND_INVITES,
            body: e ?? {},
            context: { location: t },
            rejectWithError: (0, _.fT)(),
        }).then(
            (e) => {
                let { body: t } = e;
                return (h.h.dispatch({ type: "FRIEND_INVITE_CREATE_SUCCESS", invite: t }), t);
            },
            (e) => {
                throw (h.h.dispatch({ type: "FRIEND_INVITE_CREATE_FAILURE", error: e }), e);
            },
        )
    ),
    revokeFriendInvites: () => (
        h.h.dispatch({ type: "FRIEND_INVITE_REVOKE_REQUEST" }),
        _.Bo.del({ url: er.Rsh.FRIEND_INVITES, context: { location }, rejectWithError: (0, _.fT)() }).then((e) => {
            let { body: t } = e;
            h.h.dispatch({ type: "FRIEND_INVITE_REVOKE_SUCCESS", invites: t });
        })
    ),
    revokeFriendInvite: (e) => _.Bo.del({ url: er.Rsh.INVITE(e), rejectWithError: (0, _.fT)() }),
    async fetchFriendMembers(e) {
        try {
            let { body: t } = await J.A.get({
                url: er.Rsh.INVITE_FRIEND_MEMBERS(e),
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
        return J.A.delete({
            url: er.Rsh.INVITE(t),
            oldFormErrors: !0,
            trackedActionData: {
                event: a.NetworkActionNames.INVITE_REVOKE,
                properties: { uses: e.uses, max_uses: e.maxUses, max_age: e.maxAge, invite_type: e.type },
            },
            rejectWithError: (0, _.fT)(),
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
            A = (0, P.m0)(d),
            I = B.default.getSessionId(),
            p = Y.A.getReceivedInstallationIdForInviteCode(A),
            T = K.A.getInvite(d);
        if (null != T)
            ((i = T.guild_scheduled_event),
                (s = i?.id),
                (r = T.target_channel_id ?? void 0),
                (a = T.target_message_id ?? void 0));
        else {
            let e = (0, P.y$)(d);
            ((s = e.guildScheduledEventId), (r = e.targetChannelId), (a = e.targetMessageId));
        }
        let g = ((t = s), { ...c, invite_guild_scheduled_event_id: t }),
            N = Z.default.getCurrentUser();
        return N?.hasFlag(er.nhx.QUARANTINED)
            ? ((0, w.default)(), new Promise((e, t) => t(Error())))
            : (h.h.dispatch({ type: "INVITE_ACCEPT", code: d }),
              _.Bo.post({
                  url: er.Rsh.INVITE(A),
                  context: g,
                  oldFormErrors: !0,
                  body: { session_id: I, invite_instance_id: c.invite_instance_id, received_installation_id: p },
                  rejectWithError: (0, _.fT)(),
              }).then(
                  async (e) => {
                      (null != p && this.clearReceivedInstallationIdForInviteCode(A),
                          h.h.dispatch({ type: "INVITE_ACCEPT_SUCCESS", invite: e.body, code: d }));
                      let t = i ?? v.Ay.getGuildScheduledEvent(s),
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
                      return (u?.(c), e.body);
                  },
                  (e) => {
                      throw (
                          e.body?.code === er.t02.USER_GUILD_JOIN_LARGE_GUILD_UNDERAGE_DISALLOWED &&
                              (0, m.yO)(ea.w_.JOIN_LARGE_GUILD_UNDERAGE),
                          e.body?.code === er.t02.USER_GUILD_JOIN_AGE_RESTRICTED_IOS_DISALLOWED &&
                              (0, S.e)(T?.guild?.id),
                          h.h.dispatch({
                              type: "INVITE_ACCEPT_FAILURE",
                              code: d,
                              error: { message: e.body?.message, code: e.body?.code },
                          }),
                          new f.A(e)
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
                    let t = { ...e_(e), autoJoin: s };
                    eE(e.channel.id, t, i ?? []);
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
            let e = z.A.isFriend(c.id) ? V.A.getDMFromUserId(c.id) : null;
            null != e && eE(e, t);
            return;
        }
        if (null != d && d.features?.includes(er.GuildFeatures.HUB)) return void M.A.onOpenHubInvite(e);
        let u = e.flags ?? 0,
            _ = (0, o.Lt)(u, l.Q.IS_GUEST_INVITE) || (0, o.Lt)(u, l.Q.IS_APPLICATION_BYPASS);
        if (null != d && !_ && e.new_member && (0, b.h)(d)) return void (0, b.W)(d.id);
        if (null == s) return;
        let E = e_(e);
        (null != n && (E.transitionTo = n),
            null != r && (E.intent = r),
            null != i && (E.muteOnJoinVoiceChannel = i),
            null != a && (E.forceTransition = a),
            eE(s.id, E));
    },
    openNativeAppModal(e) {
        let t = (0, P.y$)(e),
            n = {
                installationId: B.default.getInstallationForTracking(),
                targetChannelId: t.targetChannelId,
                targetMessageId: t.targetMessageId,
                guildScheduledEventId: t.guildScheduledEventId,
            };
        C.A.openNativeAppModal(t.baseCode, er.e$_.INVITE_BROWSER, n);
    },
    transitionToInviteOnboarding(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            { transitionTo: n = x.pX } = t,
            i = (0, P.WU)({
                baseCode: e.code,
                targetChannelId: e.target_channel_id ?? void 0,
                targetMessageId: e.target_message_id ?? void 0,
                guildScheduledEventId: e.guild_scheduled_event?.id,
            });
        n(er.BVt.APP_WITH_INVITE_AND_GUILD_ONBOARDING(e.code), { search: (0, P.ys)(i) });
    },
    openApp(e, t, n, i, a) {
        let l,
            o = null != e ? (0, P.y$)(e) : null,
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
            ((l = (0, c.Ay)(e, {
                utmSource: a?.inviteType === 2 ? "friend_invite" : ec,
                fingerprint: n,
                installationId: B.default.getInstallationForTracking(),
                username: i,
                attemptId: t,
                event: o?.guildScheduledEventId,
                channel: A,
                message: E,
                didRegister: a?.didRegister === !0 ? "true" : void 0,
                iosFallbackLink: `https://discord.com/api/download/mobile?invite_code=${_}`,
            })),
                q.default.track(er.HAw.DEEP_LINK_CLICKED, {
                    fingerprint: (0, u.v)(n),
                    attempt_id: t,
                    source: ec,
                    invite_code: _,
                }));
        } else {
            let e = t ?? A;
            ("#" === (l = null != e ? er.BVt.INVITE_PROXY(e, E) : "")[0] && (l = l.slice(1)), (l = `discord://${l}`));
        }
        ee.A.launch(l, (t) => {
            h.h.dispatch(t ? { type: "INVITE_APP_OPENED", code: e } : { type: "INVITE_APP_NOT_OPENED", code: e });
        });
    },
    setReceivedInstallationIdForInviteCode(e, t) {
        h.h.dispatch({ type: "INSTANT_INVITE_RECEIVED_INSTALLATION_ID_SET", inviteCode: e, receivedInstallationId: t });
    },
    clearReceivedInstallationIdForInviteCode(e) {
        h.h.dispatch({ type: "INSTANT_INVITE_RECEIVED_INSTALLATION_ID_CLEAR", inviteCode: e });
    },
    trackInviteServerClicked: eI,
};
