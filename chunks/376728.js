"use strict";
n.d(t, { Pq: () => ep, rq: () => eh, Ay: () => eE, he: () => ef }), n(938796);
var i = n(481613),
    r = n.n(i),
    s = n(562708),
    a = n(607399),
    o = n(821418),
    l = n(665260),
    u = n(400253),
    c = n(742821),
    d = n(80703),
    _ = n(636537),
    h = n(459838),
    f = n(933681),
    p = n(228366),
    E = n(181658),
    m = n(178253),
    g = n(811024);
function A(e) {
    let { channelId: t, applicationId: n, intent: i, inviterUserId: r, analyticsLocations: s, commandOrigin: a } = e;
    p.h.dispatch({
        type: "EMBEDDED_ACTIVITY_DEFERRED_OPEN",
        channelId: t,
        applicationId: n,
        intent: i,
        inviterUserId: r,
        analyticsLocations: s,
        commandOrigin: a,
    });
}
var I = n(612200),
    T = n(323073),
    S = n(392054),
    y = n(197111),
    C = n(507263),
    N = n(202384),
    v = n(51758),
    R = n(473529),
    O = n(707592),
    b = n(698441),
    D = n(610101),
    L = n(224536),
    w = n(842241),
    M = n(970163),
    P = n(700241),
    x = n(824865),
    k = n(976860),
    U = n(790535),
    G = n(95701),
    F = n(495544),
    V = n(734057),
    B = n(808728),
    j = n(696451),
    H = n(71393),
    Y = n(958590),
    W = n(299091),
    K = n(576705),
    $ = n(967198),
    z = n(287809),
    q = n(174459),
    Z = n(927813),
    X = n(499785),
    Q = n(877062),
    J = n(827343),
    ee = n(66834),
    et = n(401843),
    en = n(652215),
    ei = n(204925),
    er = n(746080),
    es = n(325278),
    ea = n(172799),
    eo = n(516607);
let el = "invite",
    eu = null;
function ec(e) {
    let t = {};
    switch (e.target_type) {
        case ea.yV.STREAM:
            (t.targetType = e.target_type), (t.targetUserId = e.target_user?.id);
            break;
        case ea.yV.EMBEDDED_APPLICATION:
            (t.targetType = e.target_type), (t.targetApplicationId = e.target_application?.id);
            break;
        case ea.yV.ROLE_SUBSCRIPTIONS_PURCHASE:
            t.targetType = e.target_type;
    }
    let n = null == H.A.getGuild(e.guild?.id) || e.new_member;
    return (
        n && null != e.channel && (0, G.ke)(e.channel.type) && (t.welcomeModalChannelId = e.channel.id),
        null != e.guild_scheduled_event && (t.guildScheduledEvent = e.guild_scheduled_event),
        (t.isGuestInvite = (0, l.Lt)(e.flags ?? 0, o.Q.IS_GUEST_INVITE)),
        (t.isApplicationBypassInvite = (0, l.Lt)(e.flags ?? 0, o.Q.IS_APPLICATION_BYPASS)),
        (t.inviterUserId = e.inviter?.id),
        n || (t.forceTransition = !0),
        null != e.target_channel_id &&
            ((t.targetChannelId = e.target_channel_id),
            null != e.target_message_id && (t.targetMessageId = e.target_message_id)),
        t
    );
}
function ed(e) {
    let { guildId: t, channel: i, options: r, analyticsLocations: s = [] } = e,
        a = H.A.getGuild(t),
        o = a?.features.has(en.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL),
        {
            targetUserId: l,
            targetType: u,
            targetApplicationId: c,
            isGuestInvite: d,
            isApplicationBypassInvite: _,
        } = r ?? {};
    if (!d && !_ && !r?.forceTransition && o && $.A.getGuildId() !== t) return;
    let { type: f } = i,
        p = V.A.getChannel(i.id),
        E = (function (e, t, n) {
            if (n?.targetType === ea.yV.ROLE_SUBSCRIPTIONS_PURCHASE) return er.VV.ROLE_SUBSCRIPTIONS;
            let i = n?.targetChannelId;
            if (null != i) {
                let e = V.A.getChannel(i);
                if (null != e && K.A.can((0, G.TA)(e.type), e)) return i;
            }
            if (n?.targetType == null && !(0, G.QE)(t.type) && (0, R.K)(e)) return er.VV.GUILD_HOME;
            let r = V.A.getChannel(t.id),
                s = (0, G.TA)(t.type);
            return K.A.can(s, r) ? t.id : (B.Ay.getDefaultChannel(e, !0, en.xBc.CREATE_INSTANT_INVITE)?.id ?? t.id);
        })(t, i, r),
        m = f === en.rbe.GUILD_STAGE_VOICE,
        I = r?.targetChannelId != null && E === r.targetChannelId,
        T = I ? r?.targetMessageId : void 0,
        y = en.BVt.CHANNEL(t, E, T);
    E === i.id && (0, G.QE)(f) && r?.autoJoin !== !1
        ? (0, C.B)(() => {
              Promise.resolve()
                  .then(n.bind(n, 730852))
                  .then((e) => {
                      let { default: n } = e,
                          a = () => {
                              if (m) {
                                  (0, U.av)(i instanceof G.YB ? i : (0, G.createChannelRecord)(i)), (0, k.pX)(y);
                                  return;
                              }
                              r?.muteOnJoinVoiceChannel && J.A.setSelfMute(h.x.DEFAULT, !0),
                                  n.selectVoiceChannel(E),
                                  u === ea.yV.STREAM &&
                                      null != l &&
                                      et.Nl({ streamType: es.U4.GUILD, ownerId: l, guildId: t, channelId: E }),
                                  u === ea.yV.EMBEDDED_APPLICATION &&
                                      null != c &&
                                      ((0, k.pX)(en.BVt.CHANNEL(t ?? en.ME, E)),
                                      A({
                                          channelId: E,
                                          applicationId: c,
                                          intent: r?.intent,
                                          inviterUserId: r?.inviterUserId,
                                          analyticsLocations: s,
                                          commandOrigin: S.iw.CHAT,
                                      }));
                          };
                      !d && (0, v.V)(t, [H.A, z.default, j.Ay]) ? (0, N.Ze)(t, a) : a();
                  });
          })
        : (0, g.AX)(p) &&
          u === ea.yV.EMBEDDED_APPLICATION &&
          null != c &&
          ((0, k.pX)(en.BVt.CHANNEL(t ?? en.ME, E)),
          A({
              channelId: E,
              applicationId: c,
              intent: r?.intent,
              inviterUserId: r?.inviterUserId,
              analyticsLocations: s,
              commandOrigin: S.iw.CHAT,
          })),
        (function (e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                { type: i } = e,
                { transitionTo: r, welcomeModalChannelId: s, guildScheduledEvent: a } = t ?? {},
                o = i === en.rbe.GUILD_STAGE_VOICE,
                l = { source: x.A.INVITE_ACCEPT, navigationReplace: !0 };
            return (
                n && (l.openChannel = !0),
                null != s && (l.welcomeModalChannelId = s),
                o && (l.state = { stageInviteKey: eo.J2 }),
                null != a && (l.guildScheduledEventId = a.id),
                (e) => (null != r ? r(e, l) : (0, k.pX)(e, l))
            );
        })(
            i,
            r,
            I,
        )(y);
}
function e_(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
    V.A.addConditionalChangeListener(() => {
        let i = V.A.getChannel(e),
            r = z.default.getCurrentUser();
        return (
            null == i ||
            null == r ||
            (!(
                (i.nsfw && !r.nsfwAllowed) ||
                (i.isGuildVocalOrThread() && (0, T.Tv)(e)) ||
                (i.isGuildVocalOrThread() && 0)
            ) &&
                (t?.guildScheduledEvent != null
                    ? !(function (e) {
                          let { guildScheduledEvent: t, welcomeModalChannelId: n } = e;
                          null != t &&
                              (0, C.B)(() => {
                                  let e = { guildScheduledEventId: t.id };
                                  null != n && (e.welcomeModalChannelId = n), (0, O.Ul)(t, e);
                              });
                      })(t)
                    : ed({ guildId: i.getGuildId() ?? en.ME, channel: i, options: t, analyticsLocations: n }),
                !1))
        );
    });
}
async function eh(e) {
    let { guild_id: t, channel_id: n } = e;
    (0, b.Fd)(e) && null != n ? e_(n) : await ee.A.transitionToGuildSync(t);
}
function ef(e, t) {
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
    q.default.track(en.HAw.INVITE_EMBED_ACTIONED, {
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
function ep(e, t, n) {
    q.default.track(en.HAw.INVITE_SERVER_CLICKED, { guild_id: e, action: t, location_stack: n ?? null });
}
let eE = {
    resolveInvite: function e(t, n, i) {
        return p.h.isDispatching()
            ? Promise.resolve().then(() => e(t, n, i))
            : (p.h.dispatch({ type: "INVITE_RESOLVE", code: t }),
              (0, M.A)(t, n, i).then((e) => {
                  let { invite: t, code: n, banned: i } = e;
                  return (
                      null != t
                          ? p.h.dispatch({ type: "INVITE_RESOLVE_SUCCESS", invite: t, code: n })
                          : p.h.dispatch({ type: "INVITE_RESOLVE_FAILURE", code: n, banned: i }),
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
                url: en.Rsh.INSTANT_INVITES(e),
                body: i,
                context: { location: n },
                rejectWithError: !0,
            });
            return p.h.dispatch({ type: "INSTANT_INVITE_CREATE_SUCCESS", channelId: e, invite: r }), r;
        } catch (t) {
            throw (p.h.dispatch({ type: "INSTANT_INVITE_CREATE_FAILURE", channelId: e }), new E.A(t));
        }
    },
    async mobileCreateInvite(e, t) {
        let n = Y.A.getInvite(e.id);
        if (null != n && !n.isExpired()) return n.code;
        let i = { max_age: Z.A.Seconds.DAY },
            r = await this.createInvite(e.id, i, t).catch(() =>
                p.h.dispatch({ type: "NATIVE_APP_INSTANT_INVITE_GDM_SHARE_FAILED" }),
            );
        return r?.code;
    },
    async getAllFriendInvites(e) {
        if ((await new Promise((e) => p.h.wait(() => e(null))), Y.A.getFriendInvitesFetching()))
            return null != eu ? eu.then((e) => e.body) : Promise.reject(Error("Invalid friend invite fetch request"));
        (eu = _.Bo.get({ url: en.Rsh.FRIEND_INVITES, context: { location: e }, rejectWithError: !1 })),
            p.h.dispatch({ type: "FRIEND_INVITES_FETCH_REQUEST", requestedAt: new Date() });
        let { body: t } = await eu;
        return (
            (eu = null), p.h.dispatch({ type: "FRIEND_INVITES_FETCH_RESPONSE", receivedAt: new Date(), invites: t }), t
        );
    },
    createFriendInvite: (e, t) => (
        p.h.dispatch({ type: "FRIEND_INVITE_CREATE_REQUEST" }),
        _.Bo.post({ url: en.Rsh.FRIEND_INVITES, body: e ?? {}, context: { location: t }, rejectWithError: !1 }).then(
            (e) => {
                let { body: t } = e;
                return p.h.dispatch({ type: "FRIEND_INVITE_CREATE_SUCCESS", invite: t }), t;
            },
            (e) => {
                throw (p.h.dispatch({ type: "FRIEND_INVITE_CREATE_FAILURE", error: e }), e);
            },
        )
    ),
    revokeFriendInvites: () => (
        p.h.dispatch({ type: "FRIEND_INVITE_REVOKE_REQUEST" }),
        _.Bo.del({ url: en.Rsh.FRIEND_INVITES, context: { location }, rejectWithError: !1 }).then((e) => {
            let { body: t } = e;
            p.h.dispatch({ type: "FRIEND_INVITE_REVOKE_SUCCESS", invites: t });
        })
    ),
    revokeFriendInvite: (e) => _.Bo.del({ url: en.Rsh.INVITE(e), rejectWithError: !1 }),
    async fetchFriendMembers(e) {
        try {
            let { body: t } = await X.A.get({
                url: en.Rsh.INVITE_FRIEND_MEMBERS(e),
                trackedActionData: {
                    event: s.NetworkActionNames.INVITE_FRIEND_MEMBERS_FETCH,
                    properties: (t) => (0, f.e0)({ code: e, friend_count: t?.body?.friend_member_ids?.length ?? 0 }),
                },
                rejectWithError: !0,
            });
            p.h.dispatch({
                type: "INVITE_FRIEND_MEMBERS_FETCH_SUCCESS",
                code: e,
                friendMemberIds: t.friend_member_ids,
            });
        } catch (t) {
            p.h.dispatch({ type: "INVITE_FRIEND_MEMBERS_FETCH_FAILURE", code: e });
        }
    },
    clearInviteFromStore(e) {
        p.h.dispatch({ type: "INSTANT_INVITE_CLEAR", channelId: e });
    },
    revokeInvite(e) {
        let { code: t, channel: n } = e;
        return X.A.delete({
            url: en.Rsh.INVITE(t),
            oldFormErrors: !0,
            trackedActionData: {
                event: s.NetworkActionNames.INVITE_REVOKE,
                properties: { uses: e.uses, max_uses: e.maxUses, max_age: e.maxAge, invite_type: e.type },
            },
            rejectWithError: !1,
        }).then(() => {
            p.h.dispatch({ type: "INSTANT_INVITE_REVOKE_SUCCESS", code: t, channelId: n.id });
        });
    },
    acceptInvite(e) {
        var t;
        let i,
            r,
            s,
            a,
            { inviteKey: u, context: c, callback: d, skipOnboarding: h } = e,
            f = (0, w.m0)(u),
            E = F.default.getSessionId(),
            g = Y.A.getReceivedInstallationIdForInviteCode(f),
            A = W.A.getInvite(u);
        if (null != A)
            (i = A.guild_scheduled_event),
                (a = i?.id),
                (r = A.target_channel_id ?? void 0),
                (s = A.target_message_id ?? void 0);
        else {
            let e = (0, w.y$)(u);
            (a = e.guildScheduledEventId), (r = e.targetChannelId), (s = e.targetMessageId);
        }
        let T = ((t = a), { ...c, invite_guild_scheduled_event_id: t }),
            S = z.default.getCurrentUser();
        return S?.hasFlag(en.nhx.QUARANTINED)
            ? ((0, P.default)(), new Promise((e, t) => t(Error())))
            : (p.h.dispatch({ type: "INVITE_ACCEPT", code: u }),
              _.Bo.post({
                  url: en.Rsh.INVITE(f),
                  context: T,
                  oldFormErrors: !0,
                  body: { session_id: E, invite_instance_id: c.invite_instance_id, received_installation_id: g },
                  rejectWithError: !1,
              }).then(
                  async (e) => {
                      null != g && this.clearReceivedInstallationIdForInviteCode(f),
                          p.h.dispatch({ type: "INVITE_ACCEPT_SUCCESS", invite: e.body, code: u });
                      let t = i ?? b.Ay.getGuildScheduledEvent(a),
                          c = {
                              ...e.body,
                              guild_scheduled_event: t,
                              target_channel_id: e.body.target_channel_id ?? r,
                              target_message_id: e.body.target_message_id ?? s,
                          },
                          _ = c?.guild_id ?? c?.guild?.id,
                          E = (0, l.Lt)(c.flags ?? 0, o.Q.IS_GUEST_INVITE);
                      if (!h && !E && null != _ && c.new_member && !c.show_verification_form) {
                          let { default: e } = await Promise.resolve().then(n.bind(n, 608401));
                          await e({ guildId: _ });
                      }
                      return d?.(c), e.body;
                  },
                  (e) => {
                      throw (
                          (e.body?.code === en.t02.USER_GUILD_JOIN_LARGE_GUILD_UNDERAGE_DISALLOWED &&
                              (0, I.yO)(ei.w_.JOIN_LARGE_GUILD_UNDERAGE),
                          p.h.dispatch({
                              type: "INVITE_ACCEPT_FAILURE",
                              code: u,
                              error: { message: e.body?.message, code: e.body?.code },
                          }),
                          new m.A(e))
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
                    let t = { ...ec(e), autoJoin: a };
                    e_(e.channel.id, t, i ?? []);
                }
                null != r && r(e);
            },
        });
    },
    transitionToInvite(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            { transitionTo: n, muteOnJoinVoiceChannel: i } = t,
            { channel: r, guild: s } = e;
        if (null != s && s.features?.includes(en.GuildFeatures.HUB)) return void L.A.onOpenHubInvite(e);
        let a = e.flags ?? 0,
            u = (0, l.Lt)(a, o.Q.IS_GUEST_INVITE) || (0, l.Lt)(a, o.Q.IS_APPLICATION_BYPASS);
        if (null != s && !u && e.new_member && (0, D.h)(s)) return void (0, D.W)(s.id);
        if (null == r) return;
        let c = ec(e);
        null != n && (c.transitionTo = n),
            null != i && (c.muteOnJoinVoiceChannel = i),
            ed({ guildId: null != s ? s.id : en.ME, channel: r, options: c });
    },
    transitionToInviteSync(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            { transitionTo: n, intent: i } = t;
        if (null != e.channel) {
            let t = ec(e);
            this.transitionToInviteChannelSync(e.channel.id, { ...t, intent: i, transitionTo: n, forceTransition: !0 });
        }
    },
    openNativeAppModal(e) {
        let t = (0, w.y$)(e),
            n = {
                installationId: F.default.getInstallationForTracking(),
                targetChannelId: t.targetChannelId,
                targetMessageId: t.targetMessageId,
                guildScheduledEventId: t.guildScheduledEventId,
            };
        y.A.openNativeAppModal(t.baseCode, en.e$_.INVITE_BROWSER, n);
    },
    transitionToInviteOnboarding(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            { transitionTo: n = k.pX } = t,
            i = (0, w.WU)({
                baseCode: e.code,
                targetChannelId: e.target_channel_id ?? void 0,
                targetMessageId: e.target_message_id ?? void 0,
                guildScheduledEventId: e.guild_scheduled_event?.id,
            });
        n(en.BVt.APP_WITH_INVITE_AND_GUILD_ONBOARDING(e.code), { search: (0, w.ys)(i) });
    },
    openApp(e, t, n, i, s) {
        let o,
            l = null != e ? (0, w.y$)(e) : null,
            _ = l?.baseCode,
            h = l?.targetMessageId,
            f = l?.targetChannelId;
        if (
            (p.h.dispatch({ type: "INVITE_APP_OPENING", code: e }),
            null != r().ua && r().ua.toLowerCase().indexOf("googlebot") > -1)
        )
            return void p.h.dispatch({ type: "INVITE_APP_NOT_OPENED", code: e });
        if (r().os?.family === "Android" || r().os?.family === "iOS" || a.v1) {
            let e = null != _ ? (0, u.jN)(_) : (0, u.BH)(),
                t = (0, c.I_)();
            (o = (0, c.Ay)(e, {
                utmSource: 2 === s ? "friend_invite" : el,
                fingerprint: n,
                installationId: F.default.getInstallationForTracking(),
                username: i,
                attemptId: t,
                event: l?.guildScheduledEventId,
                channel: f,
                message: h,
                iosFallbackLink: `https://discord.com/api/download/mobile?invite_code=${_}`,
            })),
                q.default.track(en.HAw.DEEP_LINK_CLICKED, {
                    fingerprint: (0, d.v)(n),
                    attempt_id: t,
                    source: el,
                    invite_code: _,
                });
        } else {
            let e = t ?? f;
            "#" === (o = null != e ? en.BVt.INVITE_PROXY(e, h) : "")[0] && (o = o.slice(1)), (o = `discord://${o}`);
        }
        Q.A.launch(o, (t) => {
            p.h.dispatch(t ? { type: "INVITE_APP_OPENED", code: e } : { type: "INVITE_APP_NOT_OPENED", code: e });
        });
    },
    setReceivedInstallationIdForInviteCode(e, t) {
        p.h.dispatch({ type: "INSTANT_INVITE_RECEIVED_INSTALLATION_ID_SET", inviteCode: e, receivedInstallationId: t });
    },
    clearReceivedInstallationIdForInviteCode(e) {
        p.h.dispatch({ type: "INSTANT_INVITE_RECEIVED_INSTALLATION_ID_CLEAR", inviteCode: e });
    },
    transitionToInviteChannelSync: e_,
    trackInviteServerClicked: ep,
};
