n.d(t, {
    Bk: () => eE,
    CB: () => ey,
    ZP: () => ev,
    r$: () => eb
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
    v = n(63568),
    O = n(281956),
    I = n(931261),
    S = n(15274),
    T = n(924301),
    N = n(461014),
    A = n(82085),
    C = n(264229),
    R = n(652898),
    P = n(895886),
    w = n(143816),
    D = n(703656),
    L = n(922482),
    x = n(131704),
    M = n(314897),
    k = n(592125),
    j = n(984933),
    U = n(271383),
    G = n(430824),
    B = n(607744),
    F = n(341165),
    V = n(496675),
    Z = n(914010),
    H = n(594174),
    W = n(626135),
    Y = n(70956),
    K = n(630388),
    z = n(573261),
    q = n(954824),
    Q = n(846027),
    X = n(749210),
    J = n(872810),
    $ = n(981631),
    ee = n(176505),
    et = n(70722),
    en = n(245335),
    er = n(157925);
function ei(e, t, n) {
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
function eo(e) {
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
                ei(e, t, n[t]);
            });
    }
    return e;
}
function ea(e, t) {
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
function es(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : ea(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let el = 'invite',
    ec = null;
function eu(e) {
    var t, n, r, i, o, s;
    let l = {};
    switch (e.target_type) {
        case en.Iq.STREAM:
            (l.targetType = e.target_type), (l.targetUserId = null == (r = e.target_user) ? void 0 : r.id);
            break;
        case en.Iq.EMBEDDED_APPLICATION:
            (l.targetType = e.target_type), (l.targetApplicationId = null == (i = e.target_application) ? void 0 : i.id);
            break;
        case en.Iq.ROLE_SUBSCRIPTIONS_PURCHASE:
            l.targetType = e.target_type;
    }
    return (null == G.Z.getGuild(null == (t = e.guild) ? void 0 : t.id) || e.new_member) && null != e.channel && (0, x.zi)(e.channel.type) && (l.welcomeModalChannelId = e.channel.id), null != e.guild_scheduled_event && (l.guildScheduledEvent = e.guild_scheduled_event), (l.isGuestInvite = (0, K.yE)(null != (o = e.flags) ? o : 0, a.$.IS_GUEST_INVITE)), (l.isApplicationBypassInvite = (0, K.yE)(null != (s = e.flags) ? s : 0, a.$.IS_APPLICATION_BYPASS)), (l.inviterUserId = null == (n = e.inviter) ? void 0 : n.id), l;
}
function ed(e, t) {
    return es(eo({}, e), { invite_guild_scheduled_event_id: t.guildScheduledEventId });
}
function ef(e, t, n) {
    var r, i;
    if ((null == n ? void 0 : n.targetType) === en.Iq.ROLE_SUBSCRIPTIONS_PURCHASE) return ee.oC.ROLE_SUBSCRIPTIONS;
    if ((null == n ? void 0 : n.targetType) == null && !x.tx.has(t.type) && (0, I.s)(e)) return ee.oC.GUILD_HOME;
    let o = k.Z.getChannel(t.id);
    return V.Z.can($.Plq.VIEW_CHANNEL, o) ? t.id : null != (i = null == (r = j.ZP.getDefaultChannel(e, !0, $.Plq.CREATE_INSTANT_INVITE)) ? void 0 : r.id) ? i : t.id;
}
function e_(e, t) {
    let { type: n } = e,
        { transitionTo: r, welcomeModalChannelId: i, guildScheduledEvent: o } = null != t ? t : {},
        a = n === $.d4z.GUILD_STAGE_VOICE,
        s = {
            source: w.Z.INVITE_ACCEPT,
            navigationReplace: !0
        };
    return null != i && (s.welcomeModalChannelId = i), a && (s.state = er.Df), null != o && (s.guildScheduledEventId = o.id), (e) => (null != r ? r(e, s) : (0, D.uL)(e, s));
}
function ep(e) {
    let { guildId: t, channel: r, options: i, analyticsLocations: o = [] } = e,
        a = G.Z.getGuild(t),
        s = (0, v.K2)(t, 'invite') ? (null == a ? void 0 : a.hasFeature($.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL)) : (null == a ? void 0 : a.hasFeature($.oNc.MEMBER_VERIFICATION_MANUAL_APPROVAL)) && !(null == a ? void 0 : a.hasFeature($.oNc.PREVIEW_ENABLED)),
        { targetUserId: l, targetType: c, targetApplicationId: u, isGuestInvite: f, isApplicationBypassInvite: _ } = null != i ? i : {};
    if (!f && !_ && !(null == i ? void 0 : i.forceTransition) && s && Z.Z.getGuildId() !== t) return;
    let { type: p } = r,
        E = k.Z.getChannel(r.id),
        I = ef(t, r, i),
        S = p === $.d4z.GUILD_STAGE_VOICE,
        T = $.Z5c.CHANNEL(t, I);
    x.tx.has(p)
        ? (0, b.h)(() => {
              Promise.resolve()
                  .then(n.bind(n, 287734))
                  .then((e) => {
                      let { default: n } = e,
                          a = () => {
                              if (S) {
                                  (0, L.Cq)(r instanceof x.Sf ? r : (0, x.kt)(r)), (0, D.uL)(T);
                                  return;
                              }
                              (null == i ? void 0 : i.muteOnJoinVoiceChannel) && Q.Z.setSelfMute(d.Yn.DEFAULT, !0),
                                  n.selectVoiceChannel(I),
                                  c === en.Iq.STREAM &&
                                      null != l &&
                                      J.iV({
                                          streamType: et.lo.GUILD,
                                          ownerId: l,
                                          guildId: t,
                                          channelId: I
                                      }),
                                  c === en.Iq.EMBEDDED_APPLICATION &&
                                      null != u &&
                                      ((0, D.uL)($.Z5c.CHANNEL(null != t ? t : $.ME, I)),
                                      (0, m.Z)({
                                          channelId: I,
                                          applicationId: u,
                                          intent: null == i ? void 0 : i.intent,
                                          inviterUserId: null == i ? void 0 : i.inviterUserId,
                                          analyticsLocations: o,
                                          commandOrigin: g.bB.CHAT
                                      }));
                          };
                      !f && (0, O.n)(t, [G.Z, B.Z, H.default, U.ZP]) ? (0, y.hk)(t, a) : a();
                  });
          })
        : (0, h.l5)(E) &&
          c === en.Iq.EMBEDDED_APPLICATION &&
          null != u &&
          ((0, D.uL)($.Z5c.CHANNEL(null != t ? t : $.ME, I)),
          (0, m.Z)({
              channelId: I,
              applicationId: u,
              intent: null == i ? void 0 : i.intent,
              inviterUserId: null == i ? void 0 : i.inviterUserId,
              analyticsLocations: o,
              commandOrigin: g.bB.CHAT
          })),
        e_(r, i)(T);
}
function eh(e) {
    let { guildScheduledEvent: t, welcomeModalChannelId: n } = e;
    null != t &&
        (0, b.h)(() => {
            let e = { guildScheduledEventId: t.id };
            null != n && (e.welcomeModalChannelId = n), (0, S.P3)(t, e);
        });
}
function em(e, t, n) {
    return f.Z.isDispatching()
        ? Promise.resolve().then(() => em(e, t, n))
        : (f.Z.dispatch({
              type: 'INVITE_RESOLVE',
              code: e
          }),
          (0, R.Z)(e, t, n).then((e) => {
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
let eg = function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
        k.Z.addConditionalChangeListener(() => {
            var r;
            let i = k.Z.getChannel(e),
                o = H.default.getCurrentUser();
            return (
                null == i ||
                null == o ||
                ((!i.nsfw || !!o.nsfwAllowed) &&
                    ((null == t ? void 0 : t.guildScheduledEvent) != null
                        ? eh(t)
                        : ep({
                              guildId: null != (r = i.getGuildId()) ? r : $.ME,
                              channel: i,
                              options: t,
                              analyticsLocations: n
                          }),
                    !1))
            );
        });
    },
    eE = async (e) => {
        let { guild_id: t, channel_id: n } = e;
        (0, T.xt)(e) && null != n ? eg(n) : await X.Z.transitionToGuildSync(t);
    };
function eb(e, t, n) {
    var r;
    W.default.track($.rMx.INVITE_EMBED_ACTIONED, {
        action: t,
        invite_code: e.code,
        invite_type: null == (r = e.type) ? void 0 : r.toString(),
        location_stack: null != n ? n : null
    });
}
function ey(e, t, n) {
    W.default.track($.rMx.INVITE_SERVER_CLICKED, {
        guild_id: e,
        action: t,
        location_stack: null != n ? n : null
    });
}
let ev = {
    resolveInvite: em,
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
                url: $.ANM.INSTANT_INVITES(e),
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
        let n = F.Z.getInvite(e.id);
        if (null != n && !n.isExpired()) return n.code;
        let r = { max_age: Y.Z.Seconds.DAY },
            i = await this.createInvite(e.id, r, t).catch(() => f.Z.dispatch({ type: 'NATIVE_APP_INSTANT_INVITE_GDM_SHARE_FAILED' }));
        return null == i ? void 0 : i.code;
    },
    async getAllFriendInvites(e) {
        if ((await new Promise((e) => f.Z.wait(() => e(null))), F.Z.getFriendInvitesFetching())) return null != ec ? ec.then((e) => e.body) : Promise.reject(Error('Invalid friend invite fetch request'));
        (ec = u.tn.get({
            url: $.ANM.FRIEND_INVITES,
            context: { location: e },
            rejectWithError: !1
        })),
            f.Z.dispatch({
                type: 'FRIEND_INVITES_FETCH_REQUEST',
                requestedAt: new Date()
            });
        let { body: t } = await ec;
        return (
            (ec = null),
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
                url: $.ANM.FRIEND_INVITES,
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
                url: $.ANM.FRIEND_INVITES,
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
            url: $.ANM.INVITE(e),
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
        return z.Z.delete({
            url: $.ANM.INVITE(t),
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
            s = (0, C.fU)(r),
            l = s.baseCode,
            c = M.default.getSessionId(),
            d = ed(i, s),
            _ = H.default.getCurrentUser();
        return null != (t = null == _ ? void 0 : _.hasFlag($.xW$.QUARANTINED)) && t
            ? ((0, P.default)(), new Promise((e, t) => t(Error())))
            : (f.Z.dispatch({
                  type: 'INVITE_ACCEPT',
                  code: l
              }),
              u.tn
                  .post({
                      url: $.ANM.INVITE(l),
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
                          let i = T.ZP.getGuildScheduledEvent(s.guildScheduledEventId),
                              c = es(eo({}, e.body), { guild_scheduled_event: i }),
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
                    let t = eu(e);
                    eg(e.channel.id, t, null != r ? r : []);
                }
                null != i && i(e);
            }
        });
    },
    transitionToInvite(e, t, n) {
        var r, i;
        let { channel: o, guild: s } = e;
        if (null != s && (null == (r = s.features) ? void 0 : r.includes($.oNc.HUB))) return void A.Z.onOpenHubInvite(e);
        let l = (0, K.yE)(null != (i = e.flags) ? i : 0, a.$.IS_APPLICATION_BYPASS);
        if (null != s && !l && (0, N.u)(s)) return void (0, N._)(s.id);
        if (null == o) return;
        let c = eu(e);
        null != t && (c.transitionTo = t),
            null != n && (c.muteOnJoinVoiceChannel = n),
            ep({
                guildId: null != s ? s.id : $.ME,
                channel: o,
                options: c
            });
    },
    transitionToInviteSync(e, t, n) {
        if (null != e.channel) {
            let r = eu(e);
            this.transitionToInviteChannelSync(
                e.channel.id,
                es(eo({}, r), {
                    intent: n,
                    transitionTo: t,
                    forceTransition: !0
                })
            );
        }
    },
    openNativeAppModal(e) {
        E.Z.openNativeAppModal(e, $.Etm.INVITE_BROWSER);
    },
    openApp(e, t, n, r, o) {
        var a, u;
        let d,
            _ = null != e ? (0, C.fU)(e) : null,
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
                utmSource: 2 === o ? 'friend_invite' : el,
                fingerprint: n,
                username: r,
                attemptId: t,
                event: null == _ ? void 0 : _.guildScheduledEventId,
                iosFallbackLink: 'https://discord.com/api/download/mobile?invite_code='.concat(p)
            })),
                W.default.track($.rMx.DEEP_LINK_CLICKED, {
                    fingerprint: (0, c.K)(n),
                    attempt_id: t,
                    source: el,
                    invite_code: p
                });
        } else '#' === (d = null != t ? $.Z5c.INVITE_PROXY(t) : '')[0] && (d = d.slice(1)), (d = 'discord://'.concat(d));
        q.Z.launch(d, (t) => {
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
    transitionToInviteChannelSync: eg,
    trackInviteServerClicked: ey
};
