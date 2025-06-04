n.d(t, {
    Bk: () => em,
    CB: () => eE,
    ZP: () => eb,
    r$: () => eg
}),
    n(997841),
    n(415506);
var r = n(525654),
    i = n.n(r),
    o = n(990547),
    a = n(533800),
    s = n(39612),
    l = n(271579),
    c = n(756647),
    u = n(544891),
    d = n(46973),
    f = n(570140),
    _ = n(479531),
    p = n(34756),
    h = n(595519),
    m = n(839426),
    g = n(895924),
    E = n(625128),
    b = n(972830),
    y = n(305325),
    O = n(281956),
    v = n(931261),
    I = n(15274),
    S = n(924301),
    T = n(461014),
    A = n(82085),
    N = n(264229),
    C = n(652898),
    P = n(895886),
    R = n(143816),
    w = n(703656),
    D = n(922482),
    L = n(131704),
    x = n(314897),
    k = n(592125),
    M = n(984933),
    j = n(271383),
    U = n(430824),
    G = n(341165),
    B = n(496675),
    F = n(914010),
    V = n(594174),
    Z = n(626135),
    H = n(70956),
    Y = n(630388),
    W = n(573261),
    K = n(954824),
    z = n(846027),
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
            (l.targetType = e.target_type), (l.targetUserId = null == (r = e.target_user) ? void 0 : r.id);
            break;
        case ee.Iq.EMBEDDED_APPLICATION:
            (l.targetType = e.target_type), (l.targetApplicationId = null == (i = e.target_application) ? void 0 : i.id);
            break;
        case ee.Iq.ROLE_SUBSCRIPTIONS_PURCHASE:
            l.targetType = e.target_type;
    }
    return (null == U.Z.getGuild(null == (t = e.guild) ? void 0 : t.id) || e.new_member) && null != e.channel && (0, L.zi)(e.channel.type) && (l.welcomeModalChannelId = e.channel.id), null != e.guild_scheduled_event && (l.guildScheduledEvent = e.guild_scheduled_event), (l.isGuestInvite = (0, Y.yE)(null != (o = e.flags) ? o : 0, a.$.IS_GUEST_INVITE)), (l.isApplicationBypassInvite = (0, Y.yE)(null != (s = e.flags) ? s : 0, a.$.IS_APPLICATION_BYPASS)), (l.inviterUserId = null == (n = e.inviter) ? void 0 : n.id), l;
}
function ec(e, t) {
    return eo(er({}, e), { invite_guild_scheduled_event_id: t.guildScheduledEventId });
}
function eu(e, t, n) {
    var r, i;
    if ((null == n ? void 0 : n.targetType) === ee.Iq.ROLE_SUBSCRIPTIONS_PURCHASE) return J.oC.ROLE_SUBSCRIPTIONS;
    if ((null == n ? void 0 : n.targetType) == null && !L.tx.has(t.type) && (0, v.s)(e)) return J.oC.GUILD_HOME;
    let o = k.Z.getChannel(t.id);
    return B.Z.can(X.Plq.VIEW_CHANNEL, o) ? t.id : null != (i = null == (r = M.ZP.getDefaultChannel(e, !0, X.Plq.CREATE_INSTANT_INVITE)) ? void 0 : r.id) ? i : t.id;
}
function ed(e, t) {
    let { type: n } = e,
        { transitionTo: r, welcomeModalChannelId: i, guildScheduledEvent: o } = null != t ? t : {},
        a = n === X.d4z.GUILD_STAGE_VOICE,
        s = {
            source: R.Z.INVITE_ACCEPT,
            navigationReplace: !0
        };
    return null != i && (s.welcomeModalChannelId = i), a && (s.state = et.Df), null != o && (s.guildScheduledEventId = o.id), (e) => (null != r ? r(e, s) : (0, w.uL)(e, s));
}
function ef(e) {
    let { guildId: t, channel: r, options: i, analyticsLocations: o = [] } = e,
        a = U.Z.getGuild(t),
        s = null == a ? void 0 : a.hasFeature(X.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL),
        { targetUserId: l, targetType: c, targetApplicationId: u, isGuestInvite: f, isApplicationBypassInvite: _ } = null != i ? i : {};
    if (!f && !_ && !(null == i ? void 0 : i.forceTransition) && s && F.Z.getGuildId() !== t) return;
    let { type: p } = r,
        E = k.Z.getChannel(r.id),
        v = eu(t, r, i),
        I = p === X.d4z.GUILD_STAGE_VOICE,
        S = X.Z5c.CHANNEL(t, v);
    L.tx.has(p)
        ? (0, b.h)(() => {
              Promise.resolve()
                  .then(n.bind(n, 287734))
                  .then((e) => {
                      let { default: n } = e,
                          a = () => {
                              if (I) {
                                  (0, D.Cq)(r instanceof L.Sf ? r : (0, L.kt)(r)), (0, w.uL)(S);
                                  return;
                              }
                              (null == i ? void 0 : i.muteOnJoinVoiceChannel) && z.Z.setSelfMute(d.Yn.DEFAULT, !0),
                                  n.selectVoiceChannel(v),
                                  c === ee.Iq.STREAM &&
                                      null != l &&
                                      Q.iV({
                                          streamType: $.lo.GUILD,
                                          ownerId: l,
                                          guildId: t,
                                          channelId: v
                                      }),
                                  c === ee.Iq.EMBEDDED_APPLICATION &&
                                      null != u &&
                                      ((0, w.uL)(X.Z5c.CHANNEL(null != t ? t : X.ME, v)),
                                      (0, m.Z)({
                                          channelId: v,
                                          applicationId: u,
                                          intent: null == i ? void 0 : i.intent,
                                          inviterUserId: null == i ? void 0 : i.inviterUserId,
                                          analyticsLocations: o,
                                          commandOrigin: g.bB.CHAT
                                      }));
                          };
                      !f && (0, O.n)(t, [U.Z, V.default, j.ZP]) ? (0, y.hk)(t, a) : a();
                  });
          })
        : (0, h.l5)(E) &&
          c === ee.Iq.EMBEDDED_APPLICATION &&
          null != u &&
          ((0, w.uL)(X.Z5c.CHANNEL(null != t ? t : X.ME, v)),
          (0, m.Z)({
              channelId: v,
              applicationId: u,
              intent: null == i ? void 0 : i.intent,
              inviterUserId: null == i ? void 0 : i.inviterUserId,
              analyticsLocations: o,
              commandOrigin: g.bB.CHAT
          })),
        ed(r, i)(S);
}
function e_(e) {
    let { guildScheduledEvent: t, welcomeModalChannelId: n } = e;
    null != t &&
        (0, b.h)(() => {
            let e = { guildScheduledEventId: t.id };
            null != n && (e.welcomeModalChannelId = n), (0, I.P3)(t, e);
        });
}
function ep(e, t, n) {
    return f.Z.isDispatching()
        ? Promise.resolve().then(() => ep(e, t, n))
        : (f.Z.dispatch({
              type: 'INVITE_RESOLVE',
              code: e
          }),
          (0, C.Z)(e, t, n).then((e) => {
              let { invite: t, code: n, banned: r } = e;
              return (
                  null != t
                      ? f.Z.dispatch({
                            type: 'INVITE_RESOLVE_SUCCESS',
                            invite: t,
                            code: n
                        })
                      : f.Z.dispatch({
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
        k.Z.addConditionalChangeListener(() => {
            var r;
            let i = k.Z.getChannel(e),
                o = V.default.getCurrentUser();
            return (
                null == i ||
                null == o ||
                ((!i.nsfw || !!o.nsfwAllowed) &&
                    ((null == t ? void 0 : t.guildScheduledEvent) != null
                        ? e_(t)
                        : ef({
                              guildId: null != (r = i.getGuildId()) ? r : X.ME,
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
        (0, S.xt)(e) && null != n ? eh(n) : await q.Z.transitionToGuildSync(t);
    };
function eg(e, t) {
    var n;
    let { invite: r, action: i, inviter_id: o, invite_message_id: a } = e;
    Z.default.track(X.rMx.INVITE_EMBED_ACTIONED, {
        action: i,
        invite_code: r.code,
        invite_type: null == (n = r.type) ? void 0 : n.toString(),
        inviter_id: null != o ? o : null,
        invite_message_id: null != a ? a : null,
        location_stack: null != t ? t : null
    });
}
function eE(e, t, n) {
    Z.default.track(X.rMx.INVITE_SERVER_CLICKED, {
        guild_id: e,
        action: t,
        location_stack: null != n ? n : null
    });
}
let eb = {
    resolveInvite: ep,
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
                f.Z.dispatch({
                    type: 'INSTANT_INVITE_CREATE_SUCCESS',
                    channelId: e,
                    invite: r
                }),
                r
            );
        } catch (t) {
            throw (
                (f.Z.dispatch({
                    type: 'INSTANT_INVITE_CREATE_FAILURE',
                    channelId: e
                }),
                new _.Z(t))
            );
        }
    },
    async mobileCreateInvite(e, t) {
        let n = G.Z.getInvite(e.id);
        if (null != n && !n.isExpired()) return n.code;
        let r = { max_age: H.Z.Seconds.DAY },
            i = await this.createInvite(e.id, r, t).catch(() => f.Z.dispatch({ type: 'NATIVE_APP_INSTANT_INVITE_GDM_SHARE_FAILED' }));
        return null == i ? void 0 : i.code;
    },
    async getAllFriendInvites(e) {
        if ((await new Promise((e) => f.Z.wait(() => e(null))), G.Z.getFriendInvitesFetching())) return null != es ? es.then((e) => e.body) : Promise.reject(Error('Invalid friend invite fetch request'));
        (es = u.tn.get({
            url: X.ANM.FRIEND_INVITES,
            context: { location: e },
            rejectWithError: !1
        })),
            f.Z.dispatch({
                type: 'FRIEND_INVITES_FETCH_REQUEST',
                requestedAt: new Date()
            });
        let { body: t } = await es;
        return (
            (es = null),
            f.Z.dispatch({
                type: 'FRIEND_INVITES_FETCH_RESPONSE',
                receivedAt: new Date(),
                invites: t
            }),
            t
        );
    },
    createFriendInvite: (e, t) => (
        f.Z.dispatch({ type: 'FRIEND_INVITE_CREATE_REQUEST' }),
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
                        f.Z.dispatch({
                            type: 'FRIEND_INVITE_CREATE_SUCCESS',
                            invite: t
                        }),
                        t
                    );
                },
                (e) => {
                    throw (
                        (f.Z.dispatch({
                            type: 'FRIEND_INVITE_CREATE_FAILURE',
                            error: e
                        }),
                        e)
                    );
                }
            )
    ),
    revokeFriendInvites: () => (
        f.Z.dispatch({ type: 'FRIEND_INVITE_REVOKE_REQUEST' }),
        u.tn
            .del({
                url: X.ANM.FRIEND_INVITES,
                context: { location },
                rejectWithError: !1
            })
            .then((e) => {
                let { body: t } = e;
                f.Z.dispatch({
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
        f.Z.dispatch({
            type: 'INSTANT_INVITE_CLEAR',
            channelId: e
        });
    },
    revokeInvite(e) {
        let { code: t, channel: n } = e;
        return W.Z.delete({
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
            f.Z.dispatch({
                type: 'INSTANT_INVITE_REVOKE_SUCCESS',
                code: t,
                channelId: n.id
            });
        });
    },
    acceptInvite(e) {
        var t;
        let { inviteKey: r, context: i, callback: o, skipOnboarding: a } = e,
            s = (0, N.fU)(r),
            l = s.baseCode,
            c = x.default.getSessionId(),
            d = ec(i, s),
            _ = V.default.getCurrentUser();
        return null != (t = null == _ ? void 0 : _.hasFlag(X.xW$.QUARANTINED)) && t
            ? ((0, P.default)(), new Promise((e, t) => t(Error())))
            : (f.Z.dispatch({
                  type: 'INVITE_ACCEPT',
                  code: l
              }),
              u.tn
                  .post({
                      url: X.ANM.INVITE(l),
                      context: d,
                      oldFormErrors: !0,
                      body: { session_id: c },
                      rejectWithError: !1
                  })
                  .then(
                      async (e) => {
                          var t, r;
                          f.Z.dispatch({
                              type: 'INVITE_ACCEPT_SUCCESS',
                              invite: e.body,
                              code: l
                          });
                          let i = S.ZP.getGuildScheduledEvent(s.guildScheduledEventId),
                              c = eo(er({}, e.body), { guild_scheduled_event: i }),
                              u = null != (r = null == c ? void 0 : c.guild_id) ? r : null == c || null == (t = c.guild) ? void 0 : t.id;
                          if (!a && null != u && c.new_member) {
                              let { default: e } = await Promise.resolve().then(n.bind(n, 17181));
                              await e({ guildId: u });
                          }
                          return null == o || o(c), e.body;
                      },
                      (e) => {
                          var t, n;
                          throw (
                              (f.Z.dispatch({
                                  type: 'INVITE_ACCEPT_FAILURE',
                                  code: l,
                                  error: {
                                      message: null == (t = e.body) ? void 0 : t.message,
                                      code: null == (n = e.body) ? void 0 : n.code
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
    transitionToInvite(e, t, n) {
        var r, i;
        let { channel: o, guild: s } = e;
        if (null != s && (null == (r = s.features) ? void 0 : r.includes(X.oNc.HUB))) return void A.Z.onOpenHubInvite(e);
        let l = (0, Y.yE)(null != (i = e.flags) ? i : 0, a.$.IS_APPLICATION_BYPASS);
        if (null != s && !l && (0, T.u)(s)) return void (0, T._)(s.id);
        if (null == o) return;
        let c = el(e);
        null != t && (c.transitionTo = t),
            null != n && (c.muteOnJoinVoiceChannel = n),
            ef({
                guildId: null != s ? s.id : X.ME,
                channel: o,
                options: c
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
        E.Z.openNativeAppModal(e, X.Etm.INVITE_BROWSER);
    },
    openApp(e, t, n, r, o) {
        var a, u;
        let d,
            _ = null != e ? (0, N.fU)(e) : null,
            p = null == _ ? void 0 : _.baseCode;
        if (
            (f.Z.dispatch({
                type: 'INVITE_APP_OPENING',
                code: e
            }),
            null != i().ua && i().ua.toLowerCase().indexOf('googlebot') > -1)
        )
            return void f.Z.dispatch({
                type: 'INVITE_APP_NOT_OPENED',
                code: e
            });
        if ((null == (a = i().os) ? void 0 : a.family) === 'Android' || (null == (u = i().os) ? void 0 : u.family) === 'iOS') {
            let e = null != p ? (0, s.z0)(p) : (0, s.Gk)(),
                t = (0, l.WS)();
            (d = (0, l.ZP)(e, {
                utmSource: 2 === o ? 'friend_invite' : ea,
                fingerprint: n,
                username: r,
                attemptId: t,
                event: null == _ ? void 0 : _.guildScheduledEventId,
                iosFallbackLink: 'https://discord.com/api/download/mobile?invite_code='.concat(p)
            })),
                Z.default.track(X.rMx.DEEP_LINK_CLICKED, {
                    fingerprint: (0, c.K)(n),
                    attempt_id: t,
                    source: ea,
                    invite_code: p
                });
        } else '#' === (d = null != t ? X.Z5c.INVITE_PROXY(t) : '')[0] && (d = d.slice(1)), (d = 'discord://'.concat(d));
        K.Z.launch(d, (t) => {
            f.Z.dispatch(
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
    transitionToInviteChannelSync: eh,
    trackInviteServerClicked: eE
};
