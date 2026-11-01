(n.d(t, { Pq: () => eh, rq: () => eE, Ay: () => ef, he: () => eA }), n(938796));
var i = n(481613),
    r = n.n(i),
    a = n(562708),
    s = n(607399),
    l = n(821418),
    o = n(294630),
    d = n(665260),
    c = n(400253),
    u = n(742821),
    _ = n(80703),
    E = n(636537),
    A = n(205693),
    h = n(933681),
    f = n(73153),
    I = n(181658),
    p = n(178253),
    T = n(811024);
function m(e) {
    let { channelId: t, applicationId: n, intent: i, inviterUserId: r, analyticsLocations: a, commandOrigin: s } = e;
    f.h.dispatch({
        type: "EMBEDDED_ACTIVITY_DEFERRED_OPEN",
        channelId: t,
        applicationId: n,
        intent: i,
        inviterUserId: r,
        analyticsLocations: a,
        commandOrigin: s,
    });
}
var g = n(612200),
    S = n(323073),
    N = n(45645),
    C = n(392054),
    O = n(197111),
    R = n(507263),
    L = n(202384),
    y = n(51758),
    D = n(473529),
    v = n(707592),
    b = n(698441),
    P = n(610101),
    M = n(224536),
    U = n(21599),
    w = n(970163),
    G = n(700241),
    x = n(824865),
    k = n(976860),
    F = n(747376),
    B = n(95701),
    V = n(280450),
    H = n(734057),
    j = n(808728),
    W = n(696451),
    Y = n(71393),
    K = n(958590),
    $ = n(299091),
    z = n(576705),
    X = n(994500),
    q = n(967198),
    Z = n(287809),
    Q = n(174459),
    J = n(927813),
    ee = n(499785),
    et = n(877062),
    en = n(66834),
    ei = n(401843),
    er = n(652215),
    ea = n(204925),
    es = n(746080),
    el = n(325278),
    eo = n(516607);
let ed = "invite",
    ec = null;
function eu(e) {
    let t = {};
    switch (e.target_type) {
        case o.y.STREAM:
            ((t.targetType = e.target_type), (t.targetUserId = e.target_user?.id));
            break;
        case o.y.EMBEDDED_APPLICATION:
            ((t.targetType = e.target_type), (t.targetApplicationId = e.target_application?.id));
            break;
        case o.y.ROLE_SUBSCRIPTIONS_PURCHASE:
            t.targetType = e.target_type;
    }
    let n = null == Y.A.getGuild(e.guild?.id) || e.new_member;
    return (
        n && null != e.channel && (0, B.ke)(e.channel.type) && (t.welcomeModalChannelId = e.channel.id),
        null != e.guild_scheduled_event && (t.guildScheduledEvent = e.guild_scheduled_event),
        (t.isGuestInvite = (0, d.Lt)(e.flags ?? 0, l.Q.IS_GUEST_INVITE)),
        (t.isApplicationBypassInvite = (0, d.Lt)(e.flags ?? 0, l.Q.IS_APPLICATION_BYPASS)),
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
    H.A.addConditionalChangeListener(() => {
        let r = H.A.getChannel(e),
            a = Z.default.getCurrentUser();
        return (
            null == r ||
            null == a ||
            (!(
                (r.nsfw && !a.nsfwAllowed) ||
                (r.isGuildVocalOrThread() && (0, S.Tv)(e)) ||
                (r.isGuildVocalOrThread() && 0)
            ) &&
                (t?.guildScheduledEvent != null
                    ? !(function (e) {
                          let { guildScheduledEvent: t, welcomeModalChannelId: n } = e;
                          null != t &&
                              (0, R.B)(() => {
                                  let e = { guildScheduledEventId: t.id };
                                  (null != n && (e.welcomeModalChannelId = n), (0, v.Ul)(t, e));
                              });
                      })(t)
                    : !(function (e) {
                          let { guildId: t, channel: i, options: r, analyticsLocations: a = [] } = e,
                              s = Y.A.getGuild(t),
                              l = s?.features.has(er.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL),
                              {
                                  targetUserId: d,
                                  targetType: c,
                                  targetApplicationId: u,
                                  isGuestInvite: _,
                                  isApplicationBypassInvite: E,
                              } = r ?? {};
                          if (!_ && !E && !r?.forceTransition && l && q.A.getGuildId() !== t) return;
                          let { type: h } = i,
                              f = H.A.getChannel(i.id),
                              I = (function (e, t, n) {
                                  if (n?.targetType === o.y.ROLE_SUBSCRIPTIONS_PURCHASE)
                                      return es.VV.ROLE_SUBSCRIPTIONS;
                                  let i = n?.targetChannelId;
                                  if (null != i) {
                                      let e = H.A.getChannel(i);
                                      if (null != e && z.A.can((0, B.TA)(e.type), e)) return i;
                                  }
                                  if (n?.targetType == null && !(0, B.QE)(t.type) && (0, D.K)(e))
                                      return es.VV.GUILD_HOME;
                                  let r = H.A.getChannel(t.id),
                                      a = (0, B.TA)(t.type);
                                  return z.A.can(a, r)
                                      ? t.id
                                      : (j.Ay.getDefaultChannel(e, !0, er.xBc.CREATE_INSTANT_INVITE)?.id ?? t.id);
                              })(t, i, r),
                              p = h === er.rbe.GUILD_STAGE_VOICE,
                              g = r?.targetChannelId != null && I === r.targetChannelId,
                              S = g ? r?.targetMessageId : void 0,
                              N = er.BVt.CHANNEL(t, I, S);
                          (I === i.id && (0, B.QE)(h) && r?.autoJoin !== !1
                              ? (0, R.B)(() => {
                                    Promise.all([
                                        Promise.resolve().then(n.bind(n, 730852)),
                                        Promise.resolve().then(n.bind(n, 827343)),
                                    ]).then((e) => {
                                        let [{ default: n }, { default: s }] = e,
                                            l = () => {
                                                if (p) {
                                                    ((0, F.av)(i instanceof B.YB ? i : (0, B.createChannelRecord)(i)),
                                                        (0, k.pX)(N));
                                                    return;
                                                }
                                                (r?.muteOnJoinVoiceChannel && s.setSelfMute(A.x.DEFAULT, !0),
                                                    n.selectVoiceChannel(I),
                                                    c === o.y.STREAM &&
                                                        null != d &&
                                                        ei.Nl({
                                                            streamType: el.U4.GUILD,
                                                            ownerId: d,
                                                            guildId: t,
                                                            channelId: I,
                                                        }),
                                                    c === o.y.EMBEDDED_APPLICATION &&
                                                        null != u &&
                                                        ((0, k.pX)(er.BVt.CHANNEL(t ?? er.ME, I)),
                                                        m({
                                                            channelId: I,
                                                            applicationId: u,
                                                            intent: r?.intent,
                                                            inviterUserId: r?.inviterUserId,
                                                            analyticsLocations: a,
                                                            commandOrigin: C.iw.CHAT,
                                                        })));
                                            };
                                        !_ && (0, y.V)(t, [Y.A, Z.default, W.Ay]) ? (0, L.Ze)(t, l) : l();
                                    });
                                })
                              : (0, T.AX)(f) &&
                                c === o.y.EMBEDDED_APPLICATION &&
                                null != u &&
                                ((0, k.pX)(er.BVt.CHANNEL(t ?? er.ME, I)),
                                m({
                                    channelId: I,
                                    applicationId: u,
                                    intent: r?.intent,
                                    inviterUserId: r?.inviterUserId,
                                    analyticsLocations: a,
                                    commandOrigin: C.iw.CHAT,
                                })),
                              (function (e, t) {
                                  let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                                      { type: i } = e,
                                      { transitionTo: r, welcomeModalChannelId: a, guildScheduledEvent: s } = t ?? {},
                                      l = i === er.rbe.GUILD_STAGE_VOICE,
                                      o = { source: x.A.INVITE_ACCEPT, navigationReplace: !0 };
                                  return (
                                      n && (o.openChannel = !0),
                                      null != a && (o.welcomeModalChannelId = a),
                                      l && (o.state = { stageInviteKey: eo.J2 }),
                                      null != s && (o.guildScheduledEventId = s.id),
                                      (e) => (null != r ? r(e, o) : (0, k.pX)(e, o))
                                  );
                              })(
                                  i,
                                  r,
                                  g,
                              )(N));
                      })({ guildId: r.getGuildId() ?? er.ME, channel: r, options: t, analyticsLocations: i }),
                !1))
        );
    });
}
async function eE(e) {
    let { guild_id: t, channel_id: n } = e;
    (0, b.Fd)(e) && null != n ? e_(n) : await en.A.transitionToGuildSync(t);
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
    Q.default.track(er.HAw.INVITE_EMBED_ACTIONED, {
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
    Q.default.track(er.HAw.INVITE_SERVER_CLICKED, { guild_id: e, action: t, location_stack: n ?? null });
}
let ef = {
    resolveInvite: function e(t, n, i) {
        return f.h.isDispatching()
            ? Promise.resolve().then(() => e(t, n, i))
            : (f.h.dispatch({ type: "INVITE_RESOLVE", code: t }),
              (0, w.A)(t, n, i).then((e) => {
                  let { invite: t, code: n, banned: i } = e;
                  return (
                      null != t
                          ? f.h.dispatch({ type: "INVITE_RESOLVE_SUCCESS", invite: t, code: n })
                          : f.h.dispatch({ type: "INVITE_RESOLVE_FAILURE", code: n, banned: i }),
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
            let { body: r } = await E.Bo.post({
                url: er.Rsh.INSTANT_INVITES(e),
                body: i,
                context: { location: n },
                rejectWithError: !0,
            });
            return (f.h.dispatch({ type: "INSTANT_INVITE_CREATE_SUCCESS", channelId: e, invite: r }), r);
        } catch (t) {
            throw (f.h.dispatch({ type: "INSTANT_INVITE_CREATE_FAILURE", channelId: e }), new I.A(t));
        }
    },
    async mobileCreateInvite(e, t) {
        let n = K.A.getInvite(e.id);
        if (null != n && !n.isExpired()) return n.code;
        let i = { max_age: J.A.Seconds.DAY },
            r = await this.createInvite(e.id, i, t).catch(() =>
                f.h.dispatch({ type: "NATIVE_APP_INSTANT_INVITE_GDM_SHARE_FAILED" }),
            );
        return r?.code;
    },
    async getAllFriendInvites(e) {
        if (K.A.getFriendInvitesFetching())
            return null != ec ? ec.then((e) => e.body) : Promise.reject(Error("Invalid friend invite fetch request"));
        ((ec = E.Bo.get({ url: er.Rsh.FRIEND_INVITES, context: { location: e }, rejectWithError: (0, E.fT)() })),
            f.h.dispatch({ type: "FRIEND_INVITES_FETCH_REQUEST", requestedAt: new Date() }));
        let { body: t } = await ec;
        return (
            (ec = null), f.h.dispatch({ type: "FRIEND_INVITES_FETCH_RESPONSE", receivedAt: new Date(), invites: t }), t
        );
    },
    createFriendInvite: (e, t) => (
        f.h.dispatch({ type: "FRIEND_INVITE_CREATE_REQUEST" }),
        E.Bo.post({
            url: er.Rsh.FRIEND_INVITES,
            body: e ?? {},
            context: { location: t },
            rejectWithError: (0, E.fT)(),
        }).then(
            (e) => {
                let { body: t } = e;
                return (f.h.dispatch({ type: "FRIEND_INVITE_CREATE_SUCCESS", invite: t }), t);
            },
            (e) => {
                throw (f.h.dispatch({ type: "FRIEND_INVITE_CREATE_FAILURE", error: e }), e);
            },
        )
    ),
    revokeFriendInvites: () => (
        f.h.dispatch({ type: "FRIEND_INVITE_REVOKE_REQUEST" }),
        E.Bo.del({ url: er.Rsh.FRIEND_INVITES, context: { location }, rejectWithError: (0, E.fT)() }).then((e) => {
            let { body: t } = e;
            f.h.dispatch({ type: "FRIEND_INVITE_REVOKE_SUCCESS", invites: t });
        })
    ),
    revokeFriendInvite: (e) => E.Bo.del({ url: er.Rsh.INVITE(e), rejectWithError: (0, E.fT)() }),
    async fetchFriendMembers(e) {
        try {
            let { body: t } = await ee.A.get({
                url: er.Rsh.INVITE_FRIEND_MEMBERS(e),
                trackedActionData: {
                    event: a.NetworkActionNames.INVITE_FRIEND_MEMBERS_FETCH,
                    properties: (t) => (0, h.e0)({ code: e, friend_count: t?.body?.friend_member_ids?.length ?? 0 }),
                },
                rejectWithError: !0,
            });
            f.h.dispatch({
                type: "INVITE_FRIEND_MEMBERS_FETCH_SUCCESS",
                code: e,
                friendMemberIds: t.friend_member_ids,
            });
        } catch (t) {
            f.h.dispatch({ type: "INVITE_FRIEND_MEMBERS_FETCH_FAILURE", code: e });
        }
    },
    clearInviteFromStore(e) {
        f.h.dispatch({ type: "INSTANT_INVITE_CLEAR", channelId: e });
    },
    revokeInvite(e) {
        let { code: t, channel: n } = e;
        return ee.A.delete({
            url: er.Rsh.INVITE(t),
            oldFormErrors: !0,
            trackedActionData: {
                event: a.NetworkActionNames.INVITE_REVOKE,
                properties: { uses: e.uses, max_uses: e.maxUses, max_age: e.maxAge, invite_type: e.type },
            },
            rejectWithError: (0, E.fT)(),
        }).then(() => {
            f.h.dispatch({ type: "INSTANT_INVITE_REVOKE_SUCCESS", code: t, channelId: n.id });
        });
    },
    acceptInvite(e) {
        var t;
        let i,
            r,
            a,
            s,
            { inviteKey: o, context: c, callback: u, skipOnboarding: _ } = e,
            A = (0, U.m0)(o),
            h = V.default.getSessionId(),
            I = K.A.getReceivedInstallationIdForInviteCode(A),
            T = $.A.getInvite(o);
        if (null != T)
            ((i = T.guild_scheduled_event),
                (s = i?.id),
                (r = T.target_channel_id ?? void 0),
                (a = T.target_message_id ?? void 0));
        else {
            let e = (0, U.y$)(o);
            ((s = e.guildScheduledEventId), (r = e.targetChannelId), (a = e.targetMessageId));
        }
        let m = ((t = s), { ...c, invite_guild_scheduled_event_id: t }),
            S = Z.default.getCurrentUser();
        return S?.hasFlag(er.nhx.QUARANTINED)
            ? ((0, G.default)(), new Promise((e, t) => t(Error())))
            : (f.h.dispatch({ type: "INVITE_ACCEPT", code: o }),
              E.Bo.post({
                  url: er.Rsh.INVITE(A),
                  context: m,
                  oldFormErrors: !0,
                  body: { session_id: h, invite_instance_id: c.invite_instance_id, received_installation_id: I },
                  rejectWithError: (0, E.fT)(),
              }).then(
                  async (e) => {
                      (null != I && this.clearReceivedInstallationIdForInviteCode(A),
                          f.h.dispatch({ type: "INVITE_ACCEPT_SUCCESS", invite: e.body, code: o }));
                      let t = i ?? b.Ay.getGuildScheduledEvent(s),
                          c = {
                              ...e.body,
                              guild_scheduled_event: t,
                              target_channel_id: e.body.target_channel_id ?? r,
                              target_message_id: e.body.target_message_id ?? a,
                          },
                          E = c?.guild_id ?? c?.guild?.id,
                          h = (0, d.Lt)(c.flags ?? 0, l.Q.IS_GUEST_INVITE);
                      if (!_ && !h && null != E && c.new_member && !c.show_verification_form) {
                          let { default: e } = await Promise.resolve().then(n.bind(n, 608401));
                          await e({ guildId: E });
                      }
                      return (u?.(c), e.body);
                  },
                  (e) => {
                      throw (
                          e.body?.code === er.t02.USER_GUILD_JOIN_LARGE_GUILD_UNDERAGE_DISALLOWED &&
                              (0, g.yO)(ea.w_.JOIN_LARGE_GUILD_UNDERAGE),
                          e.body?.code === er.t02.USER_GUILD_JOIN_AGE_RESTRICTED_IOS_DISALLOWED &&
                              (0, N.e)(T?.guild?.id),
                          f.h.dispatch({
                              type: "INVITE_ACCEPT_FAILURE",
                              code: o,
                              error: { message: e.body?.message, code: e.body?.code },
                          }),
                          new p.A(e)
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
            { channel: s, guild: o, inviter: c } = e;
        if (null == s && null == o && null != c) {
            let e = X.A.isFriend(c.id) ? H.A.getDMFromUserId(c.id) : null;
            null != e && e_(e, t);
            return;
        }
        if (null != o && o.features?.includes(er.GuildFeatures.HUB)) return void M.A.onOpenHubInvite(e);
        let u = e.flags ?? 0,
            _ = (0, d.Lt)(u, l.Q.IS_GUEST_INVITE) || (0, d.Lt)(u, l.Q.IS_APPLICATION_BYPASS);
        if (null != o && !_ && e.new_member && (0, P.h)(o)) return void (0, P.W)(o.id);
        if (null == s) return;
        let E = eu(e);
        (null != n && (E.transitionTo = n),
            null != r && (E.intent = r),
            null != i && (E.muteOnJoinVoiceChannel = i),
            null != a && (E.forceTransition = a),
            e_(s.id, E));
    },
    openNativeAppModal(e) {
        let t = (0, U.y$)(e),
            n = {
                installationId: V.default.getInstallationForTracking(),
                targetChannelId: t.targetChannelId,
                targetMessageId: t.targetMessageId,
                guildScheduledEventId: t.guildScheduledEventId,
            };
        O.A.openNativeAppModal(t.baseCode, er.e$_.INVITE_BROWSER, n);
    },
    transitionToInviteOnboarding(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            { transitionTo: n = k.pX } = t,
            i = (0, U.WU)({
                baseCode: e.code,
                targetChannelId: e.target_channel_id ?? void 0,
                targetMessageId: e.target_message_id ?? void 0,
                guildScheduledEventId: e.guild_scheduled_event?.id,
            });
        n(er.BVt.APP_WITH_INVITE_AND_GUILD_ONBOARDING(e.code), { search: (0, U.ys)(i) });
    },
    openApp(e, t, n, i, a) {
        let l,
            o = null != e ? (0, U.y$)(e) : null,
            d = o?.baseCode,
            E = o?.targetMessageId,
            A = o?.targetChannelId;
        if (
            (f.h.dispatch({ type: "INVITE_APP_OPENING", code: e }),
            null != r().ua && r().ua.toLowerCase().indexOf("googlebot") > -1)
        )
            return void f.h.dispatch({ type: "INVITE_APP_NOT_OPENED", code: e });
        if (r().os?.family === "Android" || r().os?.family === "iOS" || s.v1) {
            let e = null != d ? (0, c.jN)(d) : (0, c.BH)(),
                t = (0, u.I_)();
            ((l = (0, u.Ay)(e, {
                utmSource: a?.inviteType === 2 ? "friend_invite" : ed,
                fingerprint: n,
                installationId: V.default.getInstallationForTracking(),
                username: i,
                attemptId: t,
                event: o?.guildScheduledEventId,
                channel: A,
                message: E,
                didRegister: a?.didRegister === !0 ? "true" : void 0,
                iosFallbackLink: `https://discord.com/api/download/mobile?invite_code=${d}`,
            })),
                Q.default.track(er.HAw.DEEP_LINK_CLICKED, {
                    fingerprint: (0, _.v)(n),
                    attempt_id: t,
                    source: ed,
                    invite_code: d,
                }));
        } else {
            let e = t ?? A;
            ("#" === (l = null != e ? er.BVt.INVITE_PROXY(e, E) : "")[0] && (l = l.slice(1)), (l = `discord://${l}`));
        }
        et.A.launch(l, (t) => {
            f.h.dispatch(t ? { type: "INVITE_APP_OPENED", code: e } : { type: "INVITE_APP_NOT_OPENED", code: e });
        });
    },
    setReceivedInstallationIdForInviteCode(e, t) {
        f.h.dispatch({ type: "INSTANT_INVITE_RECEIVED_INSTALLATION_ID_SET", inviteCode: e, receivedInstallationId: t });
    },
    clearReceivedInstallationIdForInviteCode(e) {
        f.h.dispatch({ type: "INSTANT_INVITE_RECEIVED_INSTALLATION_ID_CLEAR", inviteCode: e });
    },
    trackInviteServerClicked: eh,
};
