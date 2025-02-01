n.d(t, {
    B: () => ef,
    Z: () => e_
}),
    n(789020),
    n(411104);
var i = n(525654),
    r = n.n(i),
    a = n(990547),
    s = n(533800),
    o = n(39612),
    l = n(271579),
    u = n(756647),
    c = n(544891),
    d = n(570140),
    f = n(479531),
    _ = n(34756),
    p = n(595519),
    h = n(839426),
    m = n(895924),
    g = n(625128),
    E = n(972830),
    v = n(305325),
    y = n(63568),
    I = n(281956),
    T = n(931261),
    b = n(15274),
    S = n(924301),
    A = n(461014),
    N = n(82085),
    C = n(264229),
    R = n(652898),
    O = n(895886),
    D = n(143816),
    x = n(703656),
    L = n(922482),
    P = n(131704),
    w = n(314897),
    M = n(592125),
    k = n(984933),
    U = n(271383),
    G = n(430824),
    B = n(607744),
    Z = n(341165),
    F = n(496675),
    V = n(914010),
    j = n(594174),
    H = n(626135),
    Y = n(70956),
    W = n(630388),
    K = n(573261),
    z = n(954824),
    q = n(749210),
    Q = n(872810),
    X = n(981631),
    J = n(176505),
    $ = n(70722),
    ee = n(245335),
    et = n(157925);
let en = 'invite',
    ei = null;
function er(e) {
    var t, n, i, r, a, o;
    let l = {};
    switch (e.target_type) {
        case ee.Iq.STREAM:
            (l.targetType = e.target_type), (l.targetUserId = null === (i = e.target_user) || void 0 === i ? void 0 : i.id);
            break;
        case ee.Iq.EMBEDDED_APPLICATION:
            (l.targetType = e.target_type), (l.targetApplicationId = null === (r = e.target_application) || void 0 === r ? void 0 : r.id);
            break;
        case ee.Iq.ROLE_SUBSCRIPTIONS_PURCHASE:
            l.targetType = e.target_type;
    }
    return (!(null != G.Z.getGuild(null === (t = e.guild) || void 0 === t ? void 0 : t.id)) || e.new_member) && null != e.channel && (0, P.zi)(e.channel.type) && (l.welcomeModalChannelId = e.channel.id), null != e.guild_scheduled_event && (l.guildScheduledEvent = e.guild_scheduled_event), (l.isGuestInvite = (0, W.yE)(null !== (a = e.flags) && void 0 !== a ? a : 0, s.$.IS_GUEST_INVITE)), (l.isApplicationBypassInvite = (0, W.yE)(null !== (o = e.flags) && void 0 !== o ? o : 0, s.$.IS_APPLICATION_BYPASS)), (l.inviterUserId = null === (n = e.inviter) || void 0 === n ? void 0 : n.id), l;
}
function ea(e, t) {
    return {
        ...e,
        invite_guild_scheduled_event_id: t.guildScheduledEventId
    };
}
function es(e, t, n) {
    var i, r;
    if ((null == n ? void 0 : n.targetType) === ee.Iq.ROLE_SUBSCRIPTIONS_PURCHASE) return J.oC.ROLE_SUBSCRIPTIONS;
    if ((null == n ? void 0 : n.targetType) == null && !P.tx.has(t.type) && (0, T.s)(e)) return J.oC.GUILD_HOME;
    let a = M.Z.getChannel(t.id);
    return F.Z.can(X.Plq.VIEW_CHANNEL, a) ? t.id : null !== (r = null === (i = k.ZP.getDefaultChannel(e, !0, X.Plq.CREATE_INSTANT_INVITE)) || void 0 === i ? void 0 : i.id) && void 0 !== r ? r : t.id;
}
function eo(e, t) {
    let { type: n } = e,
        { transitionTo: i, welcomeModalChannelId: r, guildScheduledEvent: a } = null != t ? t : {},
        s = n === X.d4z.GUILD_STAGE_VOICE,
        o = {
            source: D.Z.INVITE_ACCEPT,
            navigationReplace: !0
        };
    return null != r && (o.welcomeModalChannelId = r), s && (o.state = et.Df), null != a && (o.guildScheduledEventId = a.id), (e) => (null != i ? i(e, o) : (0, x.uL)(e, o));
}
function el(e) {
    let { guildId: t, channel: i, options: r, analyticsLocations: a = [] } = e,
        s = G.Z.getGuild(t),
        o = (0, y.K2)(t, 'invite') ? (null == s ? void 0 : s.hasFeature(X.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL)) : (null == s ? void 0 : s.hasFeature(X.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL)) && !(null == s ? void 0 : s.hasFeature(X.oNc.PREVIEW_ENABLED)),
        { targetUserId: l, targetType: u, targetApplicationId: c, isGuestInvite: d, isApplicationBypassInvite: f } = null != r ? r : {};
    if (!d && !f && !(null == r ? void 0 : r.forceTransition) && o && V.Z.getGuildId() !== t) return;
    let { type: _ } = i,
        g = M.Z.getChannel(i.id),
        T = es(t, i, r),
        b = _ === X.d4z.GUILD_STAGE_VOICE,
        S = X.Z5c.CHANNEL(t, T);
    P.tx.has(_)
        ? (0, E.h)(() => {
              Promise.resolve()
                  .then(n.bind(n, 287734))
                  .then((e) => {
                      let { default: n } = e,
                          s = () => {
                              if (b) {
                                  (0, L.Cq)(i instanceof P.Sf ? i : (0, P.kt)(i)), (0, x.uL)(S);
                                  return;
                              }
                              n.selectVoiceChannel(T),
                                  u === ee.Iq.STREAM &&
                                      null != l &&
                                      Q.iV({
                                          streamType: $.lo.GUILD,
                                          ownerId: l,
                                          guildId: t,
                                          channelId: T
                                      }),
                                  u === ee.Iq.EMBEDDED_APPLICATION &&
                                      null != c &&
                                      ((0, x.uL)(X.Z5c.CHANNEL(null != t ? t : X.ME, T)),
                                      (0, h.Z)({
                                          channelId: T,
                                          applicationId: c,
                                          intent: null == r ? void 0 : r.intent,
                                          inviterUserId: null == r ? void 0 : r.inviterUserId,
                                          analyticsLocations: a,
                                          commandOrigin: m.bB.CHAT
                                      }));
                          };
                      !d && (0, I.n)(t, [G.Z, B.Z, j.default, U.ZP]) ? (0, v.hk)(t, s) : s();
                  });
          })
        : (0, p.l5)(g) &&
          u === ee.Iq.EMBEDDED_APPLICATION &&
          null != c &&
          ((0, x.uL)(X.Z5c.CHANNEL(null != t ? t : X.ME, T)),
          (0, h.Z)({
              channelId: T,
              applicationId: c,
              intent: null == r ? void 0 : r.intent,
              inviterUserId: null == r ? void 0 : r.inviterUserId,
              analyticsLocations: a,
              commandOrigin: m.bB.CHAT
          })),
        eo(i, r)(S);
}
function eu(e) {
    let { guildScheduledEvent: t, welcomeModalChannelId: n } = e;
    null != t &&
        (0, E.h)(() => {
            let e = { guildScheduledEventId: t.id };
            null != n && (e.welcomeModalChannelId = n), (0, b.P3)(t, e);
        });
}
function ec(e, t, n) {
    return d.Z.isDispatching()
        ? Promise.resolve().then(() => ec(e, t, n))
        : (d.Z.dispatch({
              type: 'INVITE_RESOLVE',
              code: e
          }),
          (0, R.Z)(e, t, n).then((e) => {
              let { invite: t, code: n, banned: i } = e;
              return (
                  null != t
                      ? d.Z.dispatch({
                            type: 'INVITE_RESOLVE_SUCCESS',
                            invite: t,
                            code: n
                        })
                      : d.Z.dispatch({
                            type: 'INVITE_RESOLVE_FAILURE',
                            code: n,
                            banned: i
                        }),
                  {
                      invite: t,
                      code: n
                  }
              );
          }));
}
let ed = function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
        M.Z.addConditionalChangeListener(() => {
            var i;
            let r = M.Z.getChannel(e),
                a = j.default.getCurrentUser();
            return (
                null == r ||
                null == a ||
                ((!r.nsfw || !!a.nsfwAllowed) &&
                    ((null == t ? void 0 : t.guildScheduledEvent) != null
                        ? eu(t)
                        : el({
                              guildId: null !== (i = r.getGuildId()) && void 0 !== i ? i : X.ME,
                              channel: r,
                              options: t,
                              analyticsLocations: n
                          }),
                    !1))
            );
        });
    },
    ef = async (e) => {
        let { guild_id: t, channel_id: n } = e;
        (0, S.xt)(e) && null != n ? ed(n) : await q.Z.transitionToGuildSync(t);
    },
    e_ = {
        resolveInvite: ec,
        getInviteContext: (e, t) => ({
            location: e,
            location_guild_id: null != t.guild ? t.guild.id : void 0,
            location_channel_id: null != t.channel ? t.channel.id : void 0,
            location_channel_type: null != t.channel ? t.channel.type : void 0
        }),
        async createInvite(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                n = arguments.length > 2 ? arguments[2] : void 0;
            try {
                let { body: i } = await c.tn.post({
                    url: X.ANM.INSTANT_INVITES(e),
                    body: t,
                    context: { location: n },
                    rejectWithError: !0
                });
                return (
                    d.Z.dispatch({
                        type: 'INSTANT_INVITE_CREATE_SUCCESS',
                        channelId: e,
                        invite: i
                    }),
                    i
                );
            } catch (t) {
                throw (
                    (d.Z.dispatch({
                        type: 'INSTANT_INVITE_CREATE_FAILURE',
                        channelId: e
                    }),
                    new f.Z(t))
                );
            }
        },
        async mobileCreateInvite(e, t) {
            let n = Z.Z.getInvite(e.id);
            if (null != n && !n.isExpired()) return n.code;
            let i = { max_age: Y.Z.Seconds.DAY },
                r = await this.createInvite(e.id, i, t).catch(() => d.Z.dispatch({ type: 'NATIVE_APP_INSTANT_INVITE_GDM_SHARE_FAILED' }));
            return null == r ? void 0 : r.code;
        },
        async getAllFriendInvites(e) {
            if ((await new Promise((e) => d.Z.wait(() => e(null))), Z.Z.getFriendInvitesFetching())) return null != ei ? ei.then((e) => e.body) : Promise.reject(Error('Invalid friend invite fetch request'));
            (ei = c.tn.get({
                url: X.ANM.FRIEND_INVITES,
                context: { location: e },
                rejectWithError: !1
            })),
                d.Z.dispatch({
                    type: 'FRIEND_INVITES_FETCH_REQUEST',
                    requestedAt: new Date()
                });
            let { body: t } = await ei;
            return (
                (ei = null),
                d.Z.dispatch({
                    type: 'FRIEND_INVITES_FETCH_RESPONSE',
                    receivedAt: new Date(),
                    invites: t
                }),
                t
            );
        },
        createFriendInvite: (e, t) => (
            d.Z.dispatch({ type: 'FRIEND_INVITE_CREATE_REQUEST' }),
            c.tn
                .post({
                    url: X.ANM.FRIEND_INVITES,
                    body: null != e ? e : {},
                    context: { location: t },
                    rejectWithError: !1
                })
                .then(
                    (e) => {
                        let { body: t } = e;
                        return (
                            d.Z.dispatch({
                                type: 'FRIEND_INVITE_CREATE_SUCCESS',
                                invite: t
                            }),
                            t
                        );
                    },
                    (e) => {
                        throw (
                            (d.Z.dispatch({
                                type: 'FRIEND_INVITE_CREATE_FAILURE',
                                error: e
                            }),
                            e)
                        );
                    }
                )
        ),
        revokeFriendInvites: () => (
            d.Z.dispatch({ type: 'FRIEND_INVITE_REVOKE_REQUEST' }),
            c.tn
                .del({
                    url: X.ANM.FRIEND_INVITES,
                    context: { location },
                    rejectWithError: !1
                })
                .then((e) => {
                    let { body: t } = e;
                    d.Z.dispatch({
                        type: 'FRIEND_INVITE_REVOKE_SUCCESS',
                        invites: t
                    });
                })
        ),
        revokeFriendInvite: (e) =>
            c.tn.del({
                url: X.ANM.INVITE(e),
                rejectWithError: !1
            }),
        clearInviteFromStore(e) {
            d.Z.dispatch({
                type: 'INSTANT_INVITE_CLEAR',
                channelId: e
            });
        },
        revokeInvite(e) {
            let { code: t, channel: n } = e;
            return K.Z.delete({
                url: X.ANM.INVITE(t),
                oldFormErrors: !0,
                trackedActionData: {
                    event: a.NetworkActionNames.INVITE_REVOKE,
                    properties: {
                        uses: e.uses,
                        max_uses: e.maxUses,
                        max_age: e.maxAge,
                        invite_type: e.type
                    }
                },
                rejectWithError: !1
            }).then(() => {
                d.Z.dispatch({
                    type: 'INSTANT_INVITE_REVOKE_SUCCESS',
                    code: t,
                    channelId: n.id
                });
            });
        },
        acceptInvite(e) {
            var t;
            let { inviteKey: i, context: r, callback: a, skipOnboarding: s } = e,
                o = (0, C.fU)(i),
                l = o.baseCode,
                u = w.default.getSessionId(),
                f = ea(r, o),
                p = j.default.getCurrentUser();
            return null !== (t = null == p ? void 0 : p.hasFlag(X.xW$.QUARANTINED)) && void 0 !== t && t
                ? ((0, O.default)(), new Promise((e, t) => t(Error())))
                : (d.Z.dispatch({
                      type: 'INVITE_ACCEPT',
                      code: l
                  }),
                  c.tn
                      .post({
                          url: X.ANM.INVITE(l),
                          context: f,
                          oldFormErrors: !0,
                          body: { session_id: u },
                          rejectWithError: !1
                      })
                      .then(
                          async (e) => {
                              var t, i;
                              d.Z.dispatch({
                                  type: 'INVITE_ACCEPT_SUCCESS',
                                  invite: e.body,
                                  code: l
                              });
                              let r = S.ZP.getGuildScheduledEvent(o.guildScheduledEventId),
                                  u = {
                                      ...e.body,
                                      guild_scheduled_event: r
                                  },
                                  c = null !== (i = null == u ? void 0 : u.guild_id) && void 0 !== i ? i : null == u ? void 0 : null === (t = u.guild) || void 0 === t ? void 0 : t.id;
                              if (!s && null != c && u.new_member) {
                                  let { default: e } = await Promise.resolve().then(n.bind(n, 17181));
                                  await e({ guildId: c });
                              }
                              return null == a || a(u), e.body;
                          },
                          (e) => {
                              var t, n;
                              throw (
                                  (d.Z.dispatch({
                                      type: 'INVITE_ACCEPT_FAILURE',
                                      code: l,
                                      error: {
                                          message: null === (t = e.body) || void 0 === t ? void 0 : t.message,
                                          code: null === (n = e.body) || void 0 === n ? void 0 : n.code
                                      }
                                  }),
                                  new _.Z(e))
                              );
                          }
                      ));
        },
        acceptInviteAndTransitionToInviteChannel(e) {
            let { inviteKey: t, context: n, analyticsLocations: i, callback: r, skipOnboarding: a } = e;
            return this.acceptInvite({
                inviteKey: t,
                context: n,
                skipOnboarding: a,
                callback: (e) => {
                    if (null != e.channel) {
                        let t = er(e);
                        ed(e.channel.id, t, null != i ? i : []);
                    }
                    null != r && r(e);
                }
            });
        },
        transitionToInvite(e, t) {
            var n, i;
            let { channel: r, guild: a } = e;
            if (null != a && (null === (n = a.features) || void 0 === n ? void 0 : n.includes(X.oNc.HUB))) {
                N.Z.onOpenHubInvite(e);
                return;
            }
            let o = (0, W.yE)(null !== (i = e.flags) && void 0 !== i ? i : 0, s.$.IS_APPLICATION_BYPASS);
            if (null != a && !o && (0, A.u)(a)) {
                (0, A._)(a.id);
                return;
            }
            if (null == r) return;
            let l = er(e);
            null != t && (l.transitionTo = t),
                el({
                    guildId: null != a ? a.id : X.ME,
                    channel: r,
                    options: l
                });
        },
        transitionToInviteSync(e, t, n) {
            if (null != e.channel) {
                let i = er(e);
                this.transitionToInviteChannelSync(e.channel.id, {
                    ...i,
                    intent: n,
                    transitionTo: t,
                    forceTransition: !0
                });
            }
        },
        openNativeAppModal(e) {
            g.Z.openNativeAppModal(e, X.Etm.INVITE_BROWSER);
        },
        openApp(e, t, n, i, a) {
            var s, c;
            let f;
            let _ = null != e ? (0, C.fU)(e) : null,
                p = null == _ ? void 0 : _.baseCode;
            if (
                (d.Z.dispatch({
                    type: 'INVITE_APP_OPENING',
                    code: e
                }),
                null != r().ua && r().ua.toLowerCase().indexOf('googlebot') > -1)
            ) {
                d.Z.dispatch({
                    type: 'INVITE_APP_NOT_OPENED',
                    code: e
                });
                return;
            }
            if ((null === (s = r().os) || void 0 === s ? void 0 : s.family) === 'Android' || (null === (c = r().os) || void 0 === c ? void 0 : c.family) === 'iOS') {
                let e = null != p ? (0, o.z0)(p) : (0, o.Gk)(),
                    t = (0, l.WS)();
                (f = (0, l.ZP)(e, {
                    utmSource: 2 === a ? 'friend_invite' : en,
                    fingerprint: n,
                    username: i,
                    attemptId: t,
                    event: null == _ ? void 0 : _.guildScheduledEventId,
                    iosFallbackLink: 'https://discord.com/api/download/mobile?invite_code='.concat(p)
                })),
                    H.default.track(X.rMx.DEEP_LINK_CLICKED, {
                        fingerprint: (0, u.K)(n),
                        attempt_id: t,
                        source: en,
                        invite_code: p
                    });
            } else '#' === (f = null != t ? X.Z5c.INVITE_PROXY(t) : '')[0] && (f = f.slice(1)), (f = 'discord://'.concat(f));
            z.Z.launch(f, (t) => {
                d.Z.dispatch(
                    t
                        ? {
                              type: 'INVITE_APP_OPENED',
                              code: e
                          }
                        : {
                              type: 'INVITE_APP_NOT_OPENED',
                              code: e
                          }
                );
            });
        },
        transitionToInviteChannelSync: ed
    };
