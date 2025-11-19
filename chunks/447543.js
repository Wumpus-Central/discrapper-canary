n.d(t, {
    Bk: () => eb,
    CB: () => eO,
    ZP: () => ev,
    r$: () => ey,
}),
    n(997841),
    n(415506);
var r = n(525654),
    i = n.n(r),
    a = n(990547),
    o = n(533800),
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
    g = n(758119),
    E = n(622822),
    b = n(895924),
    y = n(625128),
    O = n(972830),
    v = n(305325),
    I = n(281956),
    T = n(931261),
    S = n(15274),
    A = n(924301),
    C = n(461014),
    N = n(82085),
    R = n(264229),
    P = n(652898),
    D = n(895886),
    w = n(143816),
    L = n(703656),
    x = n(922482),
    M = n(131704),
    k = n(314897),
    j = n(592125),
    U = n(984933),
    G = n(271383),
    B = n(430824),
    Z = n(341165),
    F = n(496675),
    V = n(914010),
    H = n(594174),
    Y = n(626135),
    W = n(70956),
    K = n(630388),
    z = n(573261),
    q = n(954824),
    X = n(846027),
    Q = n(749210),
    J = n(872810),
    $ = n(981631),
    ee = n(723359),
    et = n(176505),
    en = n(70722),
    er = n(245335),
    ei = n(157925);
function ea(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function eo(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                ea(e, t, n[t]);
            });
    }
    return e;
}
function es(e, t) {
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
function el(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : es(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let ec = "invite",
    eu = null;
function ed(e) {
    var t, n, r, i, a, s;
    let l = {};
    switch (e.target_type) {
        case er.Iq.STREAM:
            (l.targetType = e.target_type), (l.targetUserId = null == (r = e.target_user) ? void 0 : r.id);
            break;
        case er.Iq.EMBEDDED_APPLICATION:
            (l.targetType = e.target_type),
                (l.targetApplicationId = null == (i = e.target_application) ? void 0 : i.id);
            break;
        case er.Iq.ROLE_SUBSCRIPTIONS_PURCHASE:
            l.targetType = e.target_type;
    }
    return (
        (null == B.Z.getGuild(null == (t = e.guild) ? void 0 : t.id) || e.new_member) &&
            null != e.channel &&
            (0, M.zi)(e.channel.type) &&
            (l.welcomeModalChannelId = e.channel.id),
        null != e.guild_scheduled_event && (l.guildScheduledEvent = e.guild_scheduled_event),
        (l.isGuestInvite = (0, K.yE)(null != (a = e.flags) ? a : 0, o.$.IS_GUEST_INVITE)),
        (l.isApplicationBypassInvite = (0, K.yE)(null != (s = e.flags) ? s : 0, o.$.IS_APPLICATION_BYPASS)),
        (l.inviterUserId = null == (n = e.inviter) ? void 0 : n.id),
        l
    );
}
function ef(e, t) {
    return el(eo({}, e), { invite_guild_scheduled_event_id: t.guildScheduledEventId });
}
function e_(e, t, n) {
    var r, i;
    if ((null == n ? void 0 : n.targetType) === er.Iq.ROLE_SUBSCRIPTIONS_PURCHASE) return et.oC.ROLE_SUBSCRIPTIONS;
    if ((null == n ? void 0 : n.targetType) == null && !M.tx.has(t.type) && (0, T.s)(e)) return et.oC.GUILD_HOME;
    let a = j.Z.getChannel(t.id);
    return F.Z.can($.Plq.VIEW_CHANNEL, a)
        ? t.id
        : null != (i = null == (r = U.ZP.getDefaultChannel(e, !0, $.Plq.CREATE_INSTANT_INVITE)) ? void 0 : r.id)
          ? i
          : t.id;
}
function ep(e, t) {
    let { type: n } = e,
        { transitionTo: r, welcomeModalChannelId: i, guildScheduledEvent: a } = null != t ? t : {},
        o = n === $.d4z.GUILD_STAGE_VOICE,
        s = {
            source: w.Z.INVITE_ACCEPT,
            navigationReplace: !0,
        };
    return (
        null != i && (s.welcomeModalChannelId = i),
        o && (s.state = ei.Df),
        null != a && (s.guildScheduledEventId = a.id),
        (e) => (null != r ? r(e, s) : (0, L.uL)(e, s))
    );
}
function eh(e) {
    let { guildId: t, channel: r, options: i, analyticsLocations: a = [] } = e,
        o = B.Z.getGuild(t),
        s = null == o ? void 0 : o.features.has($.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL),
        {
            targetUserId: l,
            targetType: c,
            targetApplicationId: u,
            isGuestInvite: f,
            isApplicationBypassInvite: _,
        } = null != i ? i : {};
    if (!f && !_ && !(null == i ? void 0 : i.forceTransition) && s && V.Z.getGuildId() !== t) return;
    let { type: p } = r,
        g = j.Z.getChannel(r.id),
        E = e_(t, r, i),
        y = p === $.d4z.GUILD_STAGE_VOICE,
        T = $.Z5c.CHANNEL(t, E);
    M.tx.has(p)
        ? (0, O.h)(() => {
              Promise.resolve()
                  .then(n.bind(n, 287734))
                  .then((e) => {
                      let { default: n } = e,
                          o = () => {
                              if (y) {
                                  (0, x.Cq)(r instanceof M.Sf ? r : (0, M.createChannelRecord)(r)), (0, L.uL)(T);
                                  return;
                              }
                              (null == i ? void 0 : i.muteOnJoinVoiceChannel) && X.Z.setSelfMute(d.Yn.DEFAULT, !0),
                                  n.selectVoiceChannel(E),
                                  c === er.Iq.STREAM &&
                                      null != l &&
                                      J.iV({
                                          streamType: en.lo.GUILD,
                                          ownerId: l,
                                          guildId: t,
                                          channelId: E,
                                      }),
                                  c === er.Iq.EMBEDDED_APPLICATION &&
                                      null != u &&
                                      ((0, L.uL)($.Z5c.CHANNEL(null != t ? t : $.ME, E)),
                                      (0, m.Z)({
                                          channelId: E,
                                          applicationId: u,
                                          intent: null == i ? void 0 : i.intent,
                                          inviterUserId: null == i ? void 0 : i.inviterUserId,
                                          analyticsLocations: a,
                                          commandOrigin: b.bB.CHAT,
                                      }));
                          };
                      !f && (0, I.n)(t, [B.Z, H.default, G.ZP]) ? (0, v.hk)(t, o) : o();
                  });
          })
        : (0, h.l5)(g) &&
          c === er.Iq.EMBEDDED_APPLICATION &&
          null != u &&
          ((0, L.uL)($.Z5c.CHANNEL(null != t ? t : $.ME, E)),
          (0, m.Z)({
              channelId: E,
              applicationId: u,
              intent: null == i ? void 0 : i.intent,
              inviterUserId: null == i ? void 0 : i.inviterUserId,
              analyticsLocations: a,
              commandOrigin: b.bB.CHAT,
          })),
        ep(r, i)(T);
}
function em(e) {
    let { guildScheduledEvent: t, welcomeModalChannelId: n } = e;
    null != t &&
        (0, O.h)(() => {
            let e = { guildScheduledEventId: t.id };
            null != n && (e.welcomeModalChannelId = n), (0, S.P3)(t, e);
        });
}
function eg(e, t, n) {
    return f.Z.isDispatching()
        ? Promise.resolve().then(() => eg(e, t, n))
        : (f.Z.dispatch({
              type: "INVITE_RESOLVE",
              code: e,
          }),
          (0, P.Z)(e, t, n).then((e) => {
              let { invite: t, code: n, banned: r } = e;
              return (
                  null != t
                      ? f.Z.dispatch({
                            type: "INVITE_RESOLVE_SUCCESS",
                            invite: t,
                            code: n,
                        })
                      : f.Z.dispatch({
                            type: "INVITE_RESOLVE_FAILURE",
                            code: n,
                            banned: r,
                        }),
                  {
                      invite: t,
                      code: n,
                  }
              );
          }));
}
let eE = function (e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
        j.Z.addConditionalChangeListener(() => {
            var r;
            let i = j.Z.getChannel(e),
                a = H.default.getCurrentUser();
            return (
                null == i ||
                null == a ||
                (!((i.nsfw && !a.nsfwAllowed) || (i.isGuildVocal() && (0, E.RW)(e))) &&
                    ((null == t ? void 0 : t.guildScheduledEvent) != null
                        ? em(t)
                        : eh({
                              guildId: null != (r = i.getGuildId()) ? r : $.ME,
                              channel: i,
                              options: t,
                              analyticsLocations: n,
                          }),
                    !1))
            );
        });
    },
    eb = async (e) => {
        let { guild_id: t, channel_id: n } = e;
        (0, A.xt)(e) && null != n ? eE(n) : await Q.Z.transitionToGuildSync(t);
    };
function ey(e, t) {
    var n;
    let { invite: r, action: i, inviter_id: a, invite_message_id: o } = e;
    Y.default.track($.rMx.INVITE_EMBED_ACTIONED, {
        action: i,
        invite_code: r.code,
        invite_type: null == (n = r.type) ? void 0 : n.toString(),
        inviter_id: null != a ? a : null,
        invite_message_id: null != o ? o : null,
        location_stack: null != t ? t : null,
    });
}
function eO(e, t, n) {
    Y.default.track($.rMx.INVITE_SERVER_CLICKED, {
        guild_id: e,
        action: t,
        location_stack: null != n ? n : null,
    });
}
let ev = {
    resolveInvite: eg,
    getInviteContext: (e, t) => ({
        location: e,
        location_guild_id: null != t.guild ? t.guild.id : void 0,
        location_channel_id: null != t.channel ? t.channel.id : void 0,
        location_channel_type: null != t.channel ? t.channel.type : void 0,
    }),
    async createInvite(e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            n = arguments.length > 2 ? arguments[2] : void 0;
        try {
            let { body: r } = await u.tn.post({
                url: $.ANM.INSTANT_INVITES(e),
                body: t,
                context: { location: n },
                rejectWithError: !0,
            });
            return (
                f.Z.dispatch({
                    type: "INSTANT_INVITE_CREATE_SUCCESS",
                    channelId: e,
                    invite: r,
                }),
                r
            );
        } catch (t) {
            throw (
                (f.Z.dispatch({
                    type: "INSTANT_INVITE_CREATE_FAILURE",
                    channelId: e,
                }),
                new _.Z(t))
            );
        }
    },
    async mobileCreateInvite(e, t) {
        let n = Z.Z.getInvite(e.id);
        if (null != n && !n.isExpired()) return n.code;
        let r = { max_age: W.Z.Seconds.DAY },
            i = await this.createInvite(e.id, r, t).catch(() =>
                f.Z.dispatch({ type: "NATIVE_APP_INSTANT_INVITE_GDM_SHARE_FAILED" }),
            );
        return null == i ? void 0 : i.code;
    },
    async getAllFriendInvites(e) {
        if ((await new Promise((e) => f.Z.wait(() => e(null))), Z.Z.getFriendInvitesFetching()))
            return null != eu ? eu.then((e) => e.body) : Promise.reject(Error("Invalid friend invite fetch request"));
        (eu = u.tn.get({
            url: $.ANM.FRIEND_INVITES,
            context: { location: e },
            rejectWithError: !1,
        })),
            f.Z.dispatch({
                type: "FRIEND_INVITES_FETCH_REQUEST",
                requestedAt: new Date(),
            });
        let { body: t } = await eu;
        return (
            (eu = null),
            f.Z.dispatch({
                type: "FRIEND_INVITES_FETCH_RESPONSE",
                receivedAt: new Date(),
                invites: t,
            }),
            t
        );
    },
    createFriendInvite: (e, t) => (
        f.Z.dispatch({ type: "FRIEND_INVITE_CREATE_REQUEST" }),
        u.tn
            .post({
                url: $.ANM.FRIEND_INVITES,
                body: null != e ? e : {},
                context: { location: t },
                rejectWithError: !1,
            })
            .then(
                (e) => {
                    let { body: t } = e;
                    return (
                        f.Z.dispatch({
                            type: "FRIEND_INVITE_CREATE_SUCCESS",
                            invite: t,
                        }),
                        t
                    );
                },
                (e) => {
                    throw (
                        (f.Z.dispatch({
                            type: "FRIEND_INVITE_CREATE_FAILURE",
                            error: e,
                        }),
                        e)
                    );
                },
            )
    ),
    revokeFriendInvites: () => (
        f.Z.dispatch({ type: "FRIEND_INVITE_REVOKE_REQUEST" }),
        u.tn
            .del({
                url: $.ANM.FRIEND_INVITES,
                context: { location },
                rejectWithError: !1,
            })
            .then((e) => {
                let { body: t } = e;
                f.Z.dispatch({
                    type: "FRIEND_INVITE_REVOKE_SUCCESS",
                    invites: t,
                });
            })
    ),
    revokeFriendInvite: (e) =>
        u.tn.del({
            url: $.ANM.INVITE(e),
            rejectWithError: !1,
        }),
    clearInviteFromStore(e) {
        f.Z.dispatch({
            type: "INSTANT_INVITE_CLEAR",
            channelId: e,
        });
    },
    revokeInvite(e) {
        let { code: t, channel: n } = e;
        return z.Z.delete({
            url: $.ANM.INVITE(t),
            oldFormErrors: !0,
            trackedActionData: {
                event: a.NetworkActionNames.INVITE_REVOKE,
                properties: {
                    uses: e.uses,
                    max_uses: e.maxUses,
                    max_age: e.maxAge,
                    invite_type: e.type,
                },
            },
            rejectWithError: !1,
        }).then(() => {
            f.Z.dispatch({
                type: "INSTANT_INVITE_REVOKE_SUCCESS",
                code: t,
                channelId: n.id,
            });
        });
    },
    acceptInvite(e) {
        var t;
        let { inviteKey: r, context: i, callback: a, skipOnboarding: o } = e,
            s = (0, R.fU)(r),
            l = s.baseCode,
            c = k.default.getSessionId(),
            d = ef(i, s),
            _ = H.default.getCurrentUser();
        return null != (t = null == _ ? void 0 : _.hasFlag($.xW$.QUARANTINED)) && t
            ? ((0, D.default)(), new Promise((e, t) => t(Error())))
            : (0, E.hO)(i.location_guild_id)
              ? ((0, g.mN)(ee.L0.JOIN_LARGE_GUILD_UNDERAGE), new Promise((e, t) => t(Error())))
              : (f.Z.dispatch({
                    type: "INVITE_ACCEPT",
                    code: l,
                }),
                u.tn
                    .post({
                        url: $.ANM.INVITE(l),
                        context: d,
                        oldFormErrors: !0,
                        body: { session_id: c },
                        rejectWithError: !1,
                    })
                    .then(
                        async (e) => {
                            var t, r;
                            f.Z.dispatch({
                                type: "INVITE_ACCEPT_SUCCESS",
                                invite: e.body,
                                code: l,
                            });
                            let i = A.ZP.getGuildScheduledEvent(s.guildScheduledEventId),
                                c = el(eo({}, e.body), { guild_scheduled_event: i }),
                                u =
                                    null != (r = null == c ? void 0 : c.guild_id)
                                        ? r
                                        : null == c || null == (t = c.guild)
                                          ? void 0
                                          : t.id;
                            if (!o && null != u && c.new_member) {
                                let { default: e } = await Promise.resolve().then(n.bind(n, 17181));
                                await e({ guildId: u });
                            }
                            return null == a || a(c), e.body;
                        },
                        (e) => {
                            var t, n, r;
                            throw (
                                ((null == (t = e.body) ? void 0 : t.code) ===
                                    $.evJ.USER_GUILD_JOIN_LARGE_GUILD_UNDERAGE_DISALLOWED &&
                                    (0, g.mN)(ee.L0.JOIN_LARGE_GUILD_UNDERAGE),
                                f.Z.dispatch({
                                    type: "INVITE_ACCEPT_FAILURE",
                                    code: l,
                                    error: {
                                        message: null == (n = e.body) ? void 0 : n.message,
                                        code: null == (r = e.body) ? void 0 : r.code,
                                    },
                                }),
                                new p.Z(e))
                            );
                        },
                    ));
    },
    acceptInviteAndTransitionToInviteChannel(e) {
        let { inviteKey: t, context: n, analyticsLocations: r, callback: i, skipOnboarding: a } = e;
        return this.acceptInvite({
            inviteKey: t,
            context: n,
            skipOnboarding: a,
            callback: (e) => {
                if (null != e.channel) {
                    let t = ed(e);
                    eE(e.channel.id, t, null != r ? r : []);
                }
                null != i && i(e);
            },
        });
    },
    transitionToInvite(e, t, n) {
        var r, i;
        let { channel: a, guild: s } = e;
        if (null != s && (null == (r = s.features) ? void 0 : r.includes($.GuildFeatures.HUB)))
            return void N.Z.onOpenHubInvite(e);
        let l = (0, K.yE)(null != (i = e.flags) ? i : 0, o.$.IS_APPLICATION_BYPASS);
        if (null != s && !l && (0, C.u)(s)) return void (0, C._)(s.id);
        if (null == a) return;
        let c = ed(e);
        null != t && (c.transitionTo = t),
            null != n && (c.muteOnJoinVoiceChannel = n),
            eh({
                guildId: null != s ? s.id : $.ME,
                channel: a,
                options: c,
            });
    },
    transitionToInviteSync(e, t, n) {
        if (null != e.channel) {
            let r = ed(e);
            this.transitionToInviteChannelSync(
                e.channel.id,
                el(eo({}, r), {
                    intent: n,
                    transitionTo: t,
                    forceTransition: !0,
                }),
            );
        }
    },
    openNativeAppModal(e) {
        y.Z.openNativeAppModal(e, $.Etm.INVITE_BROWSER);
    },
    openApp(e, t, n, r, a) {
        var o, u;
        let d,
            _ = null != e ? (0, R.fU)(e) : null,
            p = null == _ ? void 0 : _.baseCode;
        if (
            (f.Z.dispatch({
                type: "INVITE_APP_OPENING",
                code: e,
            }),
            null != i().ua && i().ua.toLowerCase().indexOf("googlebot") > -1)
        )
            return void f.Z.dispatch({
                type: "INVITE_APP_NOT_OPENED",
                code: e,
            });
        if (
            (null == (o = i().os) ? void 0 : o.family) === "Android" ||
            (null == (u = i().os) ? void 0 : u.family) === "iOS"
        ) {
            let e = null != p ? (0, s.z0)(p) : (0, s.Gk)(),
                t = (0, l.WS)();
            (d = (0, l.ZP)(e, {
                utmSource: 2 === a ? "friend_invite" : ec,
                fingerprint: n,
                username: r,
                attemptId: t,
                event: null == _ ? void 0 : _.guildScheduledEventId,
                iosFallbackLink: "https://discord.com/api/download/mobile?invite_code=".concat(p),
            })),
                Y.default.track($.rMx.DEEP_LINK_CLICKED, {
                    fingerprint: (0, c.K)(n),
                    attempt_id: t,
                    source: ec,
                    invite_code: p,
                });
        } else
            "#" === (d = null != t ? $.Z5c.INVITE_PROXY(t) : "")[0] && (d = d.slice(1)), (d = "discord://".concat(d));
        q.Z.launch(d, (t) => {
            f.Z.dispatch(
                t
                    ? {
                          type: "INVITE_APP_OPENED",
                          code: e,
                      }
                    : {
                          type: "INVITE_APP_NOT_OPENED",
                          code: e,
                      },
            );
        });
    },
    transitionToInviteChannelSync: eE,
    trackInviteServerClicked: eO,
};
