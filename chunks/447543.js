n.d(t, {
    B: () => em,
    Z: () => eg
}),
    n(789020),
    n(411104);
var r = n(525654),
    i = n.n(r),
    o = n(990547),
    a = n(533800),
    s = n(39612),
    l = n(271579),
    c = n(756647),
    u = n(544891),
    d = n(570140),
    f = n(479531),
    p = n(34756),
    _ = n(595519),
    h = n(839426),
    m = n(895924),
    g = n(625128),
    E = n(972830),
    v = n(305325),
    b = n(63568),
    y = n(281956),
    O = n(931261),
    S = n(15274),
    I = n(924301),
    T = n(461014),
    N = n(82085),
    A = n(264229),
    C = n(652898),
    R = n(895886),
    P = n(143816),
    w = n(703656),
    D = n(922482),
    x = n(131704),
    L = n(314897),
    M = n(592125),
    k = n(984933),
    j = n(271383),
    U = n(430824),
    G = n(607744),
    B = n(341165),
    Z = n(496675),
    F = n(914010),
    V = n(594174),
    H = n(626135),
    W = n(70956),
    Y = n(630388),
    K = n(573261),
    z = n(954824),
    q = n(749210),
    Q = n(872810),
    X = n(981631),
    J = n(176505),
    $ = n(70722),
    ee = n(245335),
    et = n(157925);
function en(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function er(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                en(e, t, n[t]);
            });
    }
    return e;
}
function ei(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function eo(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : ei(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let ea = 'invite',
    es = null;
function el(e) {
    var t, n, r, i, o, s;
    let l = {};
    switch (e.target_type) {
        case ee.Iq.STREAM:
            (l.targetType = e.target_type), (l.targetUserId = null === (r = e.target_user) || void 0 === r ? void 0 : r.id);
            break;
        case ee.Iq.EMBEDDED_APPLICATION:
            (l.targetType = e.target_type), (l.targetApplicationId = null === (i = e.target_application) || void 0 === i ? void 0 : i.id);
            break;
        case ee.Iq.ROLE_SUBSCRIPTIONS_PURCHASE:
            l.targetType = e.target_type;
    }
    return (null == U.Z.getGuild(null === (t = e.guild) || void 0 === t ? void 0 : t.id) || e.new_member) && null != e.channel && (0, x.zi)(e.channel.type) && (l.welcomeModalChannelId = e.channel.id), null != e.guild_scheduled_event && (l.guildScheduledEvent = e.guild_scheduled_event), (l.isGuestInvite = (0, Y.yE)(null !== (o = e.flags) && void 0 !== o ? o : 0, a.$.IS_GUEST_INVITE)), (l.isApplicationBypassInvite = (0, Y.yE)(null !== (s = e.flags) && void 0 !== s ? s : 0, a.$.IS_APPLICATION_BYPASS)), (l.inviterUserId = null === (n = e.inviter) || void 0 === n ? void 0 : n.id), l;
}
function ec(e, t) {
    return eo(er({}, e), { invite_guild_scheduled_event_id: t.guildScheduledEventId });
}
function eu(e, t, n) {
    var r, i;
    if ((null == n ? void 0 : n.targetType) === ee.Iq.ROLE_SUBSCRIPTIONS_PURCHASE) return J.oC.ROLE_SUBSCRIPTIONS;
    if ((null == n ? void 0 : n.targetType) == null && !x.tx.has(t.type) && (0, O.s)(e)) return J.oC.GUILD_HOME;
    let o = M.Z.getChannel(t.id);
    return Z.Z.can(X.Plq.VIEW_CHANNEL, o) ? t.id : null !== (i = null === (r = k.ZP.getDefaultChannel(e, !0, X.Plq.CREATE_INSTANT_INVITE)) || void 0 === r ? void 0 : r.id) && void 0 !== i ? i : t.id;
}
function ed(e, t) {
    let { type: n } = e,
        { transitionTo: r, welcomeModalChannelId: i, guildScheduledEvent: o } = null != t ? t : {},
        a = n === X.d4z.GUILD_STAGE_VOICE,
        s = {
            source: P.Z.INVITE_ACCEPT,
            navigationReplace: !0
        };
    return null != i && (s.welcomeModalChannelId = i), a && (s.state = et.Df), null != o && (s.guildScheduledEventId = o.id), (e) => (null != r ? r(e, s) : (0, w.uL)(e, s));
}
function ef(e) {
    let { guildId: t, channel: r, options: i, analyticsLocations: o = [] } = e,
        a = U.Z.getGuild(t),
        s = (0, b.K2)(t, 'invite') ? (null == a ? void 0 : a.hasFeature(X.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL)) : (null == a ? void 0 : a.hasFeature(X.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL)) && !(null == a ? void 0 : a.hasFeature(X.oNc.PREVIEW_ENABLED)),
        { targetUserId: l, targetType: c, targetApplicationId: u, isGuestInvite: d, isApplicationBypassInvite: f } = null != i ? i : {};
    if (!d && !f && !(null == i ? void 0 : i.forceTransition) && s && F.Z.getGuildId() !== t) return;
    let { type: p } = r,
        g = M.Z.getChannel(r.id),
        O = eu(t, r, i),
        S = p === X.d4z.GUILD_STAGE_VOICE,
        I = X.Z5c.CHANNEL(t, O);
    x.tx.has(p)
        ? (0, E.h)(() => {
              Promise.resolve()
                  .then(n.bind(n, 287734))
                  .then((e) => {
                      let { default: n } = e,
                          a = () => {
                              if (S) {
                                  (0, D.Cq)(r instanceof x.Sf ? r : (0, x.kt)(r)), (0, w.uL)(I);
                                  return;
                              }
                              n.selectVoiceChannel(O),
                                  c === ee.Iq.STREAM &&
                                      null != l &&
                                      Q.iV({
                                          streamType: $.lo.GUILD,
                                          ownerId: l,
                                          guildId: t,
                                          channelId: O
                                      }),
                                  c === ee.Iq.EMBEDDED_APPLICATION &&
                                      null != u &&
                                      ((0, w.uL)(X.Z5c.CHANNEL(null != t ? t : X.ME, O)),
                                      (0, h.Z)({
                                          channelId: O,
                                          applicationId: u,
                                          intent: null == i ? void 0 : i.intent,
                                          inviterUserId: null == i ? void 0 : i.inviterUserId,
                                          analyticsLocations: o,
                                          commandOrigin: m.bB.CHAT
                                      }));
                          };
                      !d && (0, y.n)(t, [U.Z, G.Z, V.default, j.ZP]) ? (0, v.hk)(t, a) : a();
                  });
          })
        : (0, _.l5)(g) &&
          c === ee.Iq.EMBEDDED_APPLICATION &&
          null != u &&
          ((0, w.uL)(X.Z5c.CHANNEL(null != t ? t : X.ME, O)),
          (0, h.Z)({
              channelId: O,
              applicationId: u,
              intent: null == i ? void 0 : i.intent,
              inviterUserId: null == i ? void 0 : i.inviterUserId,
              analyticsLocations: o,
              commandOrigin: m.bB.CHAT
          })),
        ed(r, i)(I);
}
function ep(e) {
    let { guildScheduledEvent: t, welcomeModalChannelId: n } = e;
    null != t &&
        (0, E.h)(() => {
            let e = { guildScheduledEventId: t.id };
            null != n && (e.welcomeModalChannelId = n), (0, S.P3)(t, e);
        });
}
function e_(e, t, n) {
    return d.Z.isDispatching()
        ? Promise.resolve().then(() => e_(e, t, n))
        : (d.Z.dispatch({
              type: 'INVITE_RESOLVE',
              code: e
          }),
          (0, C.Z)(e, t, n).then((e) => {
              let { invite: t, code: n, banned: r } = e;
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
                            banned: r
                        }),
                  {
                      invite: t,
                      code: n
                  }
              );
          }));
}
let eh = function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
        M.Z.addConditionalChangeListener(() => {
            var r;
            let i = M.Z.getChannel(e),
                o = V.default.getCurrentUser();
            return (
                null == i ||
                null == o ||
                ((!i.nsfw || !!o.nsfwAllowed) &&
                    ((null == t ? void 0 : t.guildScheduledEvent) != null
                        ? ep(t)
                        : ef({
                              guildId: null !== (r = i.getGuildId()) && void 0 !== r ? r : X.ME,
                              channel: i,
                              options: t,
                              analyticsLocations: n
                          }),
                    !1))
            );
        });
    },
    em = async (e) => {
        let { guild_id: t, channel_id: n } = e;
        (0, I.xt)(e) && null != n ? eh(n) : await q.Z.transitionToGuildSync(t);
    },
    eg = {
        resolveInvite: e_,
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
                let { body: r } = await u.tn.post({
                    url: X.ANM.INSTANT_INVITES(e),
                    body: t,
                    context: { location: n },
                    rejectWithError: !0
                });
                return (
                    d.Z.dispatch({
                        type: 'INSTANT_INVITE_CREATE_SUCCESS',
                        channelId: e,
                        invite: r
                    }),
                    r
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
            let n = B.Z.getInvite(e.id);
            if (null != n && !n.isExpired()) return n.code;
            let r = { max_age: W.Z.Seconds.DAY },
                i = await this.createInvite(e.id, r, t).catch(() => d.Z.dispatch({ type: 'NATIVE_APP_INSTANT_INVITE_GDM_SHARE_FAILED' }));
            return null == i ? void 0 : i.code;
        },
        async getAllFriendInvites(e) {
            if ((await new Promise((e) => d.Z.wait(() => e(null))), B.Z.getFriendInvitesFetching())) return null != es ? es.then((e) => e.body) : Promise.reject(Error('Invalid friend invite fetch request'));
            (es = u.tn.get({
                url: X.ANM.FRIEND_INVITES,
                context: { location: e },
                rejectWithError: !1
            })),
                d.Z.dispatch({
                    type: 'FRIEND_INVITES_FETCH_REQUEST',
                    requestedAt: new Date()
                });
            let { body: t } = await es;
            return (
                (es = null),
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
            u.tn
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
            u.tn
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
            u.tn.del({
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
                    event: o.NetworkActionNames.INVITE_REVOKE,
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
            let { inviteKey: r, context: i, callback: o, skipOnboarding: a } = e,
                s = (0, A.fU)(r),
                l = s.baseCode,
                c = L.default.getSessionId(),
                f = ec(i, s),
                _ = V.default.getCurrentUser();
            return null !== (t = null == _ ? void 0 : _.hasFlag(X.xW$.QUARANTINED)) && void 0 !== t && t
                ? ((0, R.default)(), new Promise((e, t) => t(Error())))
                : (d.Z.dispatch({
                      type: 'INVITE_ACCEPT',
                      code: l
                  }),
                  u.tn
                      .post({
                          url: X.ANM.INVITE(l),
                          context: f,
                          oldFormErrors: !0,
                          body: { session_id: c },
                          rejectWithError: !1
                      })
                      .then(
                          async (e) => {
                              var t, r;
                              d.Z.dispatch({
                                  type: 'INVITE_ACCEPT_SUCCESS',
                                  invite: e.body,
                                  code: l
                              });
                              let i = I.ZP.getGuildScheduledEvent(s.guildScheduledEventId),
                                  c = eo(er({}, e.body), { guild_scheduled_event: i }),
                                  u = null !== (r = null == c ? void 0 : c.guild_id) && void 0 !== r ? r : null == c ? void 0 : null === (t = c.guild) || void 0 === t ? void 0 : t.id;
                              if (!a && null != u && c.new_member) {
                                  let { default: e } = await Promise.resolve().then(n.bind(n, 17181));
                                  await e({ guildId: u });
                              }
                              return null == o || o(c), e.body;
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
                                  new p.Z(e))
                              );
                          }
                      ));
        },
        acceptInviteAndTransitionToInviteChannel(e) {
            let { inviteKey: t, context: n, analyticsLocations: r, callback: i, skipOnboarding: o } = e;
            return this.acceptInvite({
                inviteKey: t,
                context: n,
                skipOnboarding: o,
                callback: (e) => {
                    if (null != e.channel) {
                        let t = el(e);
                        eh(e.channel.id, t, null != r ? r : []);
                    }
                    null != i && i(e);
                }
            });
        },
        transitionToInvite(e, t) {
            var n, r;
            let { channel: i, guild: o } = e;
            if (null != o && (null === (n = o.features) || void 0 === n ? void 0 : n.includes(X.oNc.HUB))) {
                N.Z.onOpenHubInvite(e);
                return;
            }
            let s = (0, Y.yE)(null !== (r = e.flags) && void 0 !== r ? r : 0, a.$.IS_APPLICATION_BYPASS);
            if (null != o && !s && (0, T.u)(o)) {
                (0, T._)(o.id);
                return;
            }
            if (null == i) return;
            let l = el(e);
            null != t && (l.transitionTo = t),
                ef({
                    guildId: null != o ? o.id : X.ME,
                    channel: i,
                    options: l
                });
        },
        transitionToInviteSync(e, t, n) {
            if (null != e.channel) {
                let r = el(e);
                this.transitionToInviteChannelSync(
                    e.channel.id,
                    eo(er({}, r), {
                        intent: n,
                        transitionTo: t,
                        forceTransition: !0
                    })
                );
            }
        },
        openNativeAppModal(e) {
            g.Z.openNativeAppModal(e, X.Etm.INVITE_BROWSER);
        },
        openApp(e, t, n, r, o) {
            var a, u;
            let f;
            let p = null != e ? (0, A.fU)(e) : null,
                _ = null == p ? void 0 : p.baseCode;
            if (
                (d.Z.dispatch({
                    type: 'INVITE_APP_OPENING',
                    code: e
                }),
                null != i().ua && i().ua.toLowerCase().indexOf('googlebot') > -1)
            ) {
                d.Z.dispatch({
                    type: 'INVITE_APP_NOT_OPENED',
                    code: e
                });
                return;
            }
            if ((null === (a = i().os) || void 0 === a ? void 0 : a.family) === 'Android' || (null === (u = i().os) || void 0 === u ? void 0 : u.family) === 'iOS') {
                let e = null != _ ? (0, s.z0)(_) : (0, s.Gk)(),
                    t = (0, l.WS)();
                (f = (0, l.ZP)(e, {
                    utmSource: 2 === o ? 'friend_invite' : ea,
                    fingerprint: n,
                    username: r,
                    attemptId: t,
                    event: null == p ? void 0 : p.guildScheduledEventId,
                    iosFallbackLink: 'https://discord.com/api/download/mobile?invite_code='.concat(_)
                })),
                    H.default.track(X.rMx.DEEP_LINK_CLICKED, {
                        fingerprint: (0, c.K)(n),
                        attempt_id: t,
                        source: ea,
                        invite_code: _
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
        transitionToInviteChannelSync: eh
    };
