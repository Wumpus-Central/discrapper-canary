r.d(n, {
    B: function () {
        return e_;
    }
});
var i = r(789020);
var a = r(411104);
var o = r(525654),
    s = r.n(o),
    l = r(990547),
    u = r(533800),
    c = r(39612),
    d = r(271579),
    f = r(756647),
    p = r(544891),
    h = r(570140),
    _ = r(479531),
    m = r(34756),
    g = r(595519),
    E = r(839426),
    v = r(895924),
    y = r(625128),
    b = r(972830),
    I = r(305325),
    T = r(63568),
    S = r(281956),
    A = r(931261),
    C = r(15274),
    N = r(924301),
    R = r(461014),
    O = r(82085),
    D = r(264229),
    x = r(652898),
    L = r(895886),
    w = r(143816),
    P = r(703656),
    M = r(922482),
    k = r(131704),
    U = r(314897),
    B = r(592125),
    G = r(984933),
    Z = r(271383),
    F = r(430824),
    V = r(607744),
    j = r(341165),
    H = r(496675),
    Y = r(914010),
    W = r(594174),
    K = r(626135),
    z = r(70956),
    q = r(630388),
    Q = r(573261),
    X = r(954824),
    J = r(749210),
    $ = r(872810),
    ee = r(981631),
    et = r(176505),
    en = r(70722),
    er = r(245335),
    ei = r(157925);
let ea = 'invite',
    eo = null;
function es(e) {
    var n, r, i, a, o, s;
    let l = {};
    switch (e.target_type) {
        case er.Iq.STREAM:
            (l.targetType = e.target_type), (l.targetUserId = null === (i = e.target_user) || void 0 === i ? void 0 : i.id);
            break;
        case er.Iq.EMBEDDED_APPLICATION:
            (l.targetType = e.target_type), (l.targetApplicationId = null === (a = e.target_application) || void 0 === a ? void 0 : a.id);
            break;
        case er.Iq.ROLE_SUBSCRIPTIONS_PURCHASE:
            l.targetType = e.target_type;
    }
    return (!(null != F.Z.getGuild(null === (n = e.guild) || void 0 === n ? void 0 : n.id)) || e.new_member) && null != e.channel && (0, k.zi)(e.channel.type) && (l.welcomeModalChannelId = e.channel.id), null != e.guild_scheduled_event && (l.guildScheduledEvent = e.guild_scheduled_event), (l.isGuestInvite = (0, q.yE)(null !== (o = e.flags) && void 0 !== o ? o : 0, u.$.IS_GUEST_INVITE)), (l.isApplicationBypassInvite = (0, q.yE)(null !== (s = e.flags) && void 0 !== s ? s : 0, u.$.IS_APPLICATION_BYPASS)), (l.inviterUserId = null === (r = e.inviter) || void 0 === r ? void 0 : r.id), l;
}
function el(e, n) {
    return {
        ...e,
        invite_guild_scheduled_event_id: n.guildScheduledEventId
    };
}
function eu(e, n, r) {
    var i, a;
    if ((null == r ? void 0 : r.targetType) === er.Iq.ROLE_SUBSCRIPTIONS_PURCHASE) return et.oC.ROLE_SUBSCRIPTIONS;
    if ((null == r ? void 0 : r.targetType) == null && !k.tx.has(n.type) && (0, A.s)(e)) return et.oC.GUILD_HOME;
    let o = B.Z.getChannel(n.id);
    return H.Z.can(ee.Plq.VIEW_CHANNEL, o) ? n.id : null !== (a = null === (i = G.ZP.getDefaultChannel(e, !0, ee.Plq.CREATE_INSTANT_INVITE)) || void 0 === i ? void 0 : i.id) && void 0 !== a ? a : n.id;
}
function ec(e, n) {
    let { type: r } = e,
        { transitionTo: i, welcomeModalChannelId: a, guildScheduledEvent: o } = null != n ? n : {},
        s = r === ee.d4z.GUILD_STAGE_VOICE,
        l = {
            source: w.Z.INVITE_ACCEPT,
            navigationReplace: !0
        };
    return null != a && (l.welcomeModalChannelId = a), s && (l.state = ei.Df), null != o && (l.guildScheduledEventId = o.id), (e) => (null != i ? i(e, l) : (0, P.uL)(e, l));
}
function ed(e) {
    let { guildId: n, channel: i, options: a, analyticsLocations: o = [] } = e,
        s = F.Z.getGuild(n),
        l = (0, T.K2)(n, 'invite') ? (null == s ? void 0 : s.hasFeature(ee.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL)) : (null == s ? void 0 : s.hasFeature(ee.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL)) && !(null == s ? void 0 : s.hasFeature(ee.oNc.PREVIEW_ENABLED)),
        { targetUserId: u, targetType: c, targetApplicationId: d, isGuestInvite: f, isApplicationBypassInvite: p } = null != a ? a : {};
    if (!f && !p && l && Y.Z.getGuildId() !== n) return;
    let { type: h } = i,
        _ = B.Z.getChannel(i.id),
        m = eu(n, i, a),
        y = h === ee.d4z.GUILD_STAGE_VOICE,
        A = ee.Z5c.CHANNEL(n, m);
    k.tx.has(h)
        ? (0, b.h)(() => {
              Promise.resolve()
                  .then(r.bind(r, 287734))
                  .then((e) => {
                      let { default: r } = e,
                          s = () => {
                              if (y) {
                                  (0, M.Cq)(i instanceof k.Sf ? i : (0, k.kt)(i)), (0, P.uL)(A);
                                  return;
                              }
                              r.selectVoiceChannel(m),
                                  c === er.Iq.STREAM &&
                                      null != u &&
                                      $.iV({
                                          streamType: en.lo.GUILD,
                                          ownerId: u,
                                          guildId: n,
                                          channelId: m
                                      }),
                                  c === er.Iq.EMBEDDED_APPLICATION &&
                                      null != d &&
                                      ((0, P.uL)(ee.Z5c.CHANNEL(null != n ? n : ee.ME, m)),
                                      (0, E.Z)({
                                          channelId: m,
                                          applicationId: d,
                                          intent: null == a ? void 0 : a.intent,
                                          inviterUserId: null == a ? void 0 : a.inviterUserId,
                                          analyticsLocations: o,
                                          commandOrigin: v.bB.CHAT
                                      }));
                          };
                      !f && (0, S.n)(n, [F.Z, V.Z, W.default, Z.ZP]) ? (0, I.hk)(n, s) : s();
                  });
          })
        : (0, g.l5)(_) &&
          c === er.Iq.EMBEDDED_APPLICATION &&
          null != d &&
          ((0, P.uL)(ee.Z5c.CHANNEL(null != n ? n : ee.ME, m)),
          (0, E.Z)({
              channelId: m,
              applicationId: d,
              intent: null == a ? void 0 : a.intent,
              inviterUserId: null == a ? void 0 : a.inviterUserId,
              analyticsLocations: o,
              commandOrigin: v.bB.CHAT
          })),
        ec(i, a)(A);
}
function ef(e) {
    let { guildScheduledEvent: n, welcomeModalChannelId: r } = e;
    if (null != n)
        (0, b.h)(() => {
            let e = { guildScheduledEventId: n.id };
            null != r && (e.welcomeModalChannelId = r), (0, C.P3)(n, e);
        });
}
function ep(e, n, r) {
    return h.Z.isDispatching()
        ? Promise.resolve().then(() => ep(e, n, r))
        : (h.Z.dispatch({
              type: 'INVITE_RESOLVE',
              code: e
          }),
          (0, x.Z)(e, n, r).then((e) => {
              let { invite: n, code: r, banned: i } = e;
              return (
                  null != n
                      ? h.Z.dispatch({
                            type: 'INVITE_RESOLVE_SUCCESS',
                            invite: n,
                            code: r
                        })
                      : h.Z.dispatch({
                            type: 'INVITE_RESOLVE_FAILURE',
                            code: r,
                            banned: i
                        }),
                  {
                      invite: n,
                      code: r
                  }
              );
          }));
}
let eh = function (e, n) {
        let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
        B.Z.addConditionalChangeListener(() => {
            var i;
            let a = B.Z.getChannel(e),
                o = W.default.getCurrentUser();
            return (
                null == a ||
                null == o ||
                ((!a.nsfw || !!o.nsfwAllowed) &&
                    ((null == n ? void 0 : n.guildScheduledEvent) != null
                        ? (ef(n), !1)
                        : (ed({
                              guildId: null !== (i = a.getGuildId()) && void 0 !== i ? i : ee.ME,
                              channel: a,
                              options: n,
                              analyticsLocations: r
                          }),
                          !1)))
            );
        });
    },
    e_ = async (e) => {
        let { guild_id: n, channel_id: r } = e;
        (0, N.xt)(e) && null != r ? eh(r) : await J.Z.transitionToGuildSync(n);
    };
n.Z = {
    resolveInvite: ep,
    getInviteContext: (e, n) => ({
        location: e,
        location_guild_id: null != n.guild ? n.guild.id : void 0,
        location_channel_id: null != n.channel ? n.channel.id : void 0,
        location_channel_type: null != n.channel ? n.channel.type : void 0
    }),
    async createInvite(e) {
        let n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            r = arguments.length > 2 ? arguments[2] : void 0;
        try {
            let { body: i } = await p.tn.post({
                url: ee.ANM.INSTANT_INVITES(e),
                body: n,
                context: { location: r },
                rejectWithError: !0
            });
            return (
                h.Z.dispatch({
                    type: 'INSTANT_INVITE_CREATE_SUCCESS',
                    channelId: e,
                    invite: i
                }),
                i
            );
        } catch (n) {
            throw (
                (h.Z.dispatch({
                    type: 'INSTANT_INVITE_CREATE_FAILURE',
                    channelId: e
                }),
                new _.Z(n))
            );
        }
    },
    async mobileCreateInvite(e, n) {
        let r = j.Z.getInvite(e.id);
        if (null != r && !r.isExpired()) return r.code;
        let i = { max_age: z.Z.Seconds.DAY },
            a = await this.createInvite(e.id, i, n).catch(() => h.Z.dispatch({ type: 'NATIVE_APP_INSTANT_INVITE_GDM_SHARE_FAILED' }));
        return null == a ? void 0 : a.code;
    },
    async getAllFriendInvites(e) {
        if ((await new Promise((e) => h.Z.wait(() => e(null))), j.Z.getFriendInvitesFetching())) return null != eo ? eo.then((e) => e.body) : Promise.reject(Error('Invalid friend invite fetch request'));
        (eo = p.tn.get({
            url: ee.ANM.FRIEND_INVITES,
            context: { location: e },
            rejectWithError: !1
        })),
            h.Z.dispatch({
                type: 'FRIEND_INVITES_FETCH_REQUEST',
                requestedAt: new Date()
            });
        let { body: n } = await eo;
        return (
            (eo = null),
            h.Z.dispatch({
                type: 'FRIEND_INVITES_FETCH_RESPONSE',
                receivedAt: new Date(),
                invites: n
            }),
            n
        );
    },
    createFriendInvite: (e, n) => (
        h.Z.dispatch({ type: 'FRIEND_INVITE_CREATE_REQUEST' }),
        p.tn
            .post({
                url: ee.ANM.FRIEND_INVITES,
                body: null != e ? e : {},
                context: { location: n },
                rejectWithError: !1
            })
            .then(
                (e) => {
                    let { body: n } = e;
                    return (
                        h.Z.dispatch({
                            type: 'FRIEND_INVITE_CREATE_SUCCESS',
                            invite: n
                        }),
                        n
                    );
                },
                (e) => {
                    throw (
                        (h.Z.dispatch({
                            type: 'FRIEND_INVITE_CREATE_FAILURE',
                            error: e
                        }),
                        e)
                    );
                }
            )
    ),
    revokeFriendInvites: () => (
        h.Z.dispatch({ type: 'FRIEND_INVITE_REVOKE_REQUEST' }),
        p.tn
            .del({
                url: ee.ANM.FRIEND_INVITES,
                context: { location },
                rejectWithError: !1
            })
            .then((e) => {
                let { body: n } = e;
                h.Z.dispatch({
                    type: 'FRIEND_INVITE_REVOKE_SUCCESS',
                    invites: n
                });
            })
    ),
    revokeFriendInvite: (e) =>
        p.tn.del({
            url: ee.ANM.INVITE(e),
            rejectWithError: !1
        }),
    clearInviteFromStore(e) {
        h.Z.dispatch({
            type: 'INSTANT_INVITE_CLEAR',
            channelId: e
        });
    },
    revokeInvite(e) {
        let { code: n, channel: r } = e;
        return Q.Z.delete({
            url: ee.ANM.INVITE(n),
            oldFormErrors: !0,
            trackedActionData: {
                event: l.NetworkActionNames.INVITE_REVOKE,
                properties: {
                    uses: e.uses,
                    max_uses: e.maxUses,
                    max_age: e.maxAge,
                    invite_type: e.type
                }
            },
            rejectWithError: !1
        }).then(() => {
            h.Z.dispatch({
                type: 'INSTANT_INVITE_REVOKE_SUCCESS',
                code: n,
                channelId: r.id
            });
        });
    },
    acceptInvite(e) {
        var n;
        let { inviteKey: i, context: a, callback: o, skipOnboarding: s } = e,
            l = (0, D.fU)(i),
            u = l.baseCode,
            c = U.default.getSessionId(),
            d = el(a, l),
            f = W.default.getCurrentUser();
        return null !== (n = null == f ? void 0 : f.hasFlag(ee.xW$.QUARANTINED)) && void 0 !== n && n
            ? ((0, L.default)(), new Promise((e, n) => n(Error())))
            : (h.Z.dispatch({
                  type: 'INVITE_ACCEPT',
                  code: u
              }),
              p.tn
                  .post({
                      url: ee.ANM.INVITE(u),
                      context: d,
                      oldFormErrors: !0,
                      body: { session_id: c },
                      rejectWithError: !1
                  })
                  .then(
                      async (e) => {
                          var n, i;
                          h.Z.dispatch({
                              type: 'INVITE_ACCEPT_SUCCESS',
                              invite: e.body,
                              code: u
                          });
                          let a = N.ZP.getGuildScheduledEvent(l.guildScheduledEventId),
                              c = {
                                  ...e.body,
                                  guild_scheduled_event: a
                              },
                              d = null !== (i = null == c ? void 0 : c.guild_id) && void 0 !== i ? i : null == c ? void 0 : null === (n = c.guild) || void 0 === n ? void 0 : n.id;
                          if (!s && null != d && c.new_member) {
                              let { default: e } = await Promise.resolve().then(r.bind(r, 17181));
                              await e({ guildId: d });
                          }
                          return null == o || o(c), e.body;
                      },
                      (e) => {
                          var n, r;
                          throw (
                              (h.Z.dispatch({
                                  type: 'INVITE_ACCEPT_FAILURE',
                                  code: u,
                                  error: {
                                      message: null === (n = e.body) || void 0 === n ? void 0 : n.message,
                                      code: null === (r = e.body) || void 0 === r ? void 0 : r.code
                                  }
                              }),
                              new m.Z(e))
                          );
                      }
                  ));
    },
    acceptInviteAndTransitionToInviteChannel(e) {
        let { inviteKey: n, context: r, analyticsLocations: i, callback: a, skipOnboarding: o } = e;
        return this.acceptInvite({
            inviteKey: n,
            context: r,
            skipOnboarding: o,
            callback: (e) => {
                if (null != e.channel) {
                    let n = es(e);
                    eh(e.channel.id, n, null != i ? i : []);
                }
                null != a && a(e);
            }
        });
    },
    transitionToInvite(e, n) {
        var r, i;
        let { channel: a, guild: o } = e;
        if (null != o && (null === (r = o.features) || void 0 === r ? void 0 : r.includes(ee.oNc.HUB))) {
            O.Z.onOpenHubInvite(e);
            return;
        }
        let s = (0, q.yE)(null !== (i = e.flags) && void 0 !== i ? i : 0, u.$.IS_APPLICATION_BYPASS);
        if (null != o && !s && (0, R.u)(o)) {
            (0, I.hk)(o.id);
            return;
        }
        if (null == a) return;
        let l = es(e);
        null != n && (l.transitionTo = n),
            ed({
                guildId: null != o ? o.id : ee.ME,
                channel: a,
                options: l
            });
    },
    transitionToInviteSync(e, n, r) {
        if (null != e.channel) {
            let i = es(e);
            this.transitionToInviteChannelSync(e.channel.id, {
                ...i,
                intent: r,
                transitionTo: n
            });
        }
    },
    openNativeAppModal(e) {
        y.Z.openNativeAppModal(e, ee.Etm.INVITE_BROWSER);
    },
    openApp(e, n, r, i, a) {
        var o, l;
        let u;
        let p = null != e ? (0, D.fU)(e) : null,
            _ = null == p ? void 0 : p.baseCode;
        if (
            (h.Z.dispatch({
                type: 'INVITE_APP_OPENING',
                code: e
            }),
            null != s().ua && s().ua.toLowerCase().indexOf('googlebot') > -1)
        ) {
            h.Z.dispatch({
                type: 'INVITE_APP_NOT_OPENED',
                code: e
            });
            return;
        }
        if ((null === (o = s().os) || void 0 === o ? void 0 : o.family) === 'Android' || (null === (l = s().os) || void 0 === l ? void 0 : l.family) === 'iOS') {
            let e = null != _ ? (0, c.z0)(_) : (0, c.Gk)(),
                n = (0, d.WS)();
            (u = (0, d.ZP)(e, {
                utmSource: 2 === a ? 'friend_invite' : ea,
                fingerprint: r,
                username: i,
                attemptId: n,
                event: null == p ? void 0 : p.guildScheduledEventId,
                iosFallbackLink: 'https://discord.com/api/download/mobile?invite_code='.concat(_)
            })),
                K.default.track(ee.rMx.DEEP_LINK_CLICKED, {
                    fingerprint: (0, f.K)(r),
                    attempt_id: n,
                    source: ea,
                    invite_code: _
                });
        } else '#' === (u = null != n ? ee.Z5c.INVITE_PROXY(n) : '')[0] && (u = u.slice(1)), (u = 'discord://'.concat(u));
        X.Z.launch(u, (n) => {
            h.Z.dispatch(
                n
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
