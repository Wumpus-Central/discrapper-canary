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
    s = n(95015),
    l = n(39612),
    c = n(271579),
    u = n(756647),
    d = n(544891),
    f = n(46973),
    p = n(570140),
    _ = n(479531),
    m = n(34756),
    h = n(595519),
    g = n(839426),
    E = n(758119),
    b = n(622822),
    y = n(895924),
    O = n(625128),
    v = n(972830),
    S = n(305325),
    I = n(281956),
    T = n(931261),
    A = n(15274),
    C = n(924301),
    N = n(461014),
    P = n(82085),
    R = n(264229),
    w = n(652898),
    D = n(895886),
    x = n(143816),
    L = n(703656),
    j = n(922482),
    M = n(131704),
    k = n(314897),
    U = n(592125),
    G = n(984933),
    Z = n(271383),
    B = n(430824),
    F = n(341165),
    V = n(496675),
    H = n(914010),
    Y = n(594174),
    W = n(626135),
    K = n(70956),
    z = n(573261),
    q = n(954824),
    Q = n(846027),
    X = n(749210),
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
    var t, n, r, i, a, l;
    let c = {};
    switch (e.target_type) {
        case er.Iq.STREAM:
            (c.targetType = e.target_type), (c.targetUserId = null == (r = e.target_user) ? void 0 : r.id);
            break;
        case er.Iq.EMBEDDED_APPLICATION:
            (c.targetType = e.target_type),
                (c.targetApplicationId = null == (i = e.target_application) ? void 0 : i.id);
            break;
        case er.Iq.ROLE_SUBSCRIPTIONS_PURCHASE:
            c.targetType = e.target_type;
    }
    return (
        (null == B.Z.getGuild(null == (t = e.guild) ? void 0 : t.id) || e.new_member) &&
            null != e.channel &&
            (0, M.zi)(e.channel.type) &&
            (c.welcomeModalChannelId = e.channel.id),
        null != e.guild_scheduled_event && (c.guildScheduledEvent = e.guild_scheduled_event),
        (c.isGuestInvite = (0, s.yE)(null != (a = e.flags) ? a : 0, o.$.IS_GUEST_INVITE)),
        (c.isApplicationBypassInvite = (0, s.yE)(null != (l = e.flags) ? l : 0, o.$.IS_APPLICATION_BYPASS)),
        (c.inviterUserId = null == (n = e.inviter) ? void 0 : n.id),
        c
    );
}
function ef(e, t) {
    return el(eo({}, e), { invite_guild_scheduled_event_id: t.guildScheduledEventId });
}
function ep(e, t, n) {
    var r, i;
    if ((null == n ? void 0 : n.targetType) === er.Iq.ROLE_SUBSCRIPTIONS_PURCHASE) return et.oC.ROLE_SUBSCRIPTIONS;
    if ((null == n ? void 0 : n.targetType) == null && !M.tx.has(t.type) && (0, T.s)(e)) return et.oC.GUILD_HOME;
    let a = U.Z.getChannel(t.id);
    return V.Z.can($.Plq.VIEW_CHANNEL, a)
        ? t.id
        : null != (i = null == (r = G.ZP.getDefaultChannel(e, !0, $.Plq.CREATE_INSTANT_INVITE)) ? void 0 : r.id)
          ? i
          : t.id;
}
function e_(e, t) {
    let { type: n } = e,
        { transitionTo: r, welcomeModalChannelId: i, guildScheduledEvent: a } = null != t ? t : {},
        o = n === $.d4z.GUILD_STAGE_VOICE,
        s = {
            source: x.Z.INVITE_ACCEPT,
            navigationReplace: !0,
        };
    return (
        null != i && (s.welcomeModalChannelId = i),
        o && (s.state = ei.Df),
        null != a && (s.guildScheduledEventId = a.id),
        (e) => (null != r ? r(e, s) : (0, L.uL)(e, s))
    );
}
function em(e) {
    let { guildId: t, channel: r, options: i, analyticsLocations: a = [] } = e,
        o = B.Z.getGuild(t),
        s = null == o ? void 0 : o.features.has($.GuildFeatures.MEMBER_VERIFICATION_MANUAL_APPROVAL),
        {
            targetUserId: l,
            targetType: c,
            targetApplicationId: u,
            isGuestInvite: d,
            isApplicationBypassInvite: p,
        } = null != i ? i : {};
    if (!d && !p && !(null == i ? void 0 : i.forceTransition) && s && H.Z.getGuildId() !== t) return;
    let { type: _ } = r,
        m = U.Z.getChannel(r.id),
        E = ep(t, r, i),
        b = _ === $.d4z.GUILD_STAGE_VOICE,
        O = $.Z5c.CHANNEL(t, E);
    M.tx.has(_)
        ? (0, v.h)(() => {
              Promise.resolve()
                  .then(n.bind(n, 287734))
                  .then((e) => {
                      let { default: n } = e,
                          o = () => {
                              if (b) {
                                  (0, j.Cq)(r instanceof M.Sf ? r : (0, M.createChannelRecord)(r)), (0, L.uL)(O);
                                  return;
                              }
                              (null == i ? void 0 : i.muteOnJoinVoiceChannel) && Q.Z.setSelfMute(f.Yn.DEFAULT, !0),
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
                                      (0, g.Z)({
                                          channelId: E,
                                          applicationId: u,
                                          intent: null == i ? void 0 : i.intent,
                                          inviterUserId: null == i ? void 0 : i.inviterUserId,
                                          analyticsLocations: a,
                                          commandOrigin: y.bB.CHAT,
                                      }));
                          };
                      !d && (0, I.n)(t, [B.Z, Y.default, Z.ZP]) ? (0, S.hk)(t, o) : o();
                  });
          })
        : (0, h.l5)(m) &&
          c === er.Iq.EMBEDDED_APPLICATION &&
          null != u &&
          ((0, L.uL)($.Z5c.CHANNEL(null != t ? t : $.ME, E)),
          (0, g.Z)({
              channelId: E,
              applicationId: u,
              intent: null == i ? void 0 : i.intent,
              inviterUserId: null == i ? void 0 : i.inviterUserId,
              analyticsLocations: a,
              commandOrigin: y.bB.CHAT,
          })),
        e_(r, i)(O);
}
function eh(e) {
    let { guildScheduledEvent: t, welcomeModalChannelId: n } = e;
    null != t &&
        (0, v.h)(() => {
            let e = { guildScheduledEventId: t.id };
            null != n && (e.welcomeModalChannelId = n), (0, A.P3)(t, e);
        });
}
function eg(e, t, n) {
    return p.Z.isDispatching()
        ? Promise.resolve().then(() => eg(e, t, n))
        : (p.Z.dispatch({
              type: "INVITE_RESOLVE",
              code: e,
          }),
          (0, w.Z)(e, t, n).then((e) => {
              let { invite: t, code: n, banned: r } = e;
              return (
                  null != t
                      ? p.Z.dispatch({
                            type: "INVITE_RESOLVE_SUCCESS",
                            invite: t,
                            code: n,
                        })
                      : p.Z.dispatch({
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
        U.Z.addConditionalChangeListener(() => {
            var r;
            let i = U.Z.getChannel(e),
                a = Y.default.getCurrentUser();
            return (
                null == i ||
                null == a ||
                (!((i.nsfw && !a.nsfwAllowed) || (i.isGuildVocal() && (0, b.RW)(e))) &&
                    ((null == t ? void 0 : t.guildScheduledEvent) != null
                        ? eh(t)
                        : em({
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
        (0, C.xt)(e) && null != n ? eE(n) : await X.Z.transitionToGuildSync(t);
    };
function ey(e, t) {
    var n;
    let { invite: r, action: i, inviter_id: a, invite_message_id: o } = e;
    W.default.track($.rMx.INVITE_EMBED_ACTIONED, {
        action: i,
        invite_code: r.code,
        invite_type: null == (n = r.type) ? void 0 : n.toString(),
        inviter_id: null != a ? a : null,
        invite_message_id: null != o ? o : null,
        location_stack: null != t ? t : null,
    });
}
function eO(e, t, n) {
    W.default.track($.rMx.INVITE_SERVER_CLICKED, {
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
            let { body: r } = await d.tn.post({
                url: $.ANM.INSTANT_INVITES(e),
                body: t,
                context: { location: n },
                rejectWithError: !0,
            });
            return (
                p.Z.dispatch({
                    type: "INSTANT_INVITE_CREATE_SUCCESS",
                    channelId: e,
                    invite: r,
                }),
                r
            );
        } catch (t) {
            throw (
                (p.Z.dispatch({
                    type: "INSTANT_INVITE_CREATE_FAILURE",
                    channelId: e,
                }),
                new _.Z(t))
            );
        }
    },
    async mobileCreateInvite(e, t) {
        let n = F.Z.getInvite(e.id);
        if (null != n && !n.isExpired()) return n.code;
        let r = { max_age: K.Z.Seconds.DAY },
            i = await this.createInvite(e.id, r, t).catch(() =>
                p.Z.dispatch({ type: "NATIVE_APP_INSTANT_INVITE_GDM_SHARE_FAILED" }),
            );
        return null == i ? void 0 : i.code;
    },
    async getAllFriendInvites(e) {
        if ((await new Promise((e) => p.Z.wait(() => e(null))), F.Z.getFriendInvitesFetching()))
            return null != eu ? eu.then((e) => e.body) : Promise.reject(Error("Invalid friend invite fetch request"));
        (eu = d.tn.get({
            url: $.ANM.FRIEND_INVITES,
            context: { location: e },
            rejectWithError: !1,
        })),
            p.Z.dispatch({
                type: "FRIEND_INVITES_FETCH_REQUEST",
                requestedAt: new Date(),
            });
        let { body: t } = await eu;
        return (
            (eu = null),
            p.Z.dispatch({
                type: "FRIEND_INVITES_FETCH_RESPONSE",
                receivedAt: new Date(),
                invites: t,
            }),
            t
        );
    },
    createFriendInvite: (e, t) => (
        p.Z.dispatch({ type: "FRIEND_INVITE_CREATE_REQUEST" }),
        d.tn
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
                        p.Z.dispatch({
                            type: "FRIEND_INVITE_CREATE_SUCCESS",
                            invite: t,
                        }),
                        t
                    );
                },
                (e) => {
                    throw (
                        (p.Z.dispatch({
                            type: "FRIEND_INVITE_CREATE_FAILURE",
                            error: e,
                        }),
                        e)
                    );
                },
            )
    ),
    revokeFriendInvites: () => (
        p.Z.dispatch({ type: "FRIEND_INVITE_REVOKE_REQUEST" }),
        d.tn
            .del({
                url: $.ANM.FRIEND_INVITES,
                context: { location },
                rejectWithError: !1,
            })
            .then((e) => {
                let { body: t } = e;
                p.Z.dispatch({
                    type: "FRIEND_INVITE_REVOKE_SUCCESS",
                    invites: t,
                });
            })
    ),
    revokeFriendInvite: (e) =>
        d.tn.del({
            url: $.ANM.INVITE(e),
            rejectWithError: !1,
        }),
    async fetchFriendMembers(e) {
        try {
            let { body: t } = await d.tn.get({
                url: $.ANM.INVITE_FRIEND_MEMBERS(e),
                rejectWithError: !0,
            });
            p.Z.dispatch({
                type: "INVITE_FRIEND_MEMBERS_FETCH_SUCCESS",
                code: e,
                friendMemberIds: t.friend_member_ids,
            });
        } catch (t) {
            p.Z.dispatch({
                type: "INVITE_FRIEND_MEMBERS_FETCH_FAILURE",
                code: e,
            });
        }
    },
    clearInviteFromStore(e) {
        p.Z.dispatch({
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
            p.Z.dispatch({
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
            u = ef(i, s),
            f = Y.default.getCurrentUser();
        return null != (t = null == f ? void 0 : f.hasFlag($.xW$.QUARANTINED)) && t
            ? ((0, D.default)(), new Promise((e, t) => t(Error())))
            : (0, b.hO)(i.location_guild_id)
              ? ((0, E.mN)(ee.L0.JOIN_LARGE_GUILD_UNDERAGE), new Promise((e, t) => t(Error())))
              : (p.Z.dispatch({
                    type: "INVITE_ACCEPT",
                    code: l,
                }),
                d.tn
                    .post({
                        url: $.ANM.INVITE(l),
                        context: u,
                        oldFormErrors: !0,
                        body: { session_id: c },
                        rejectWithError: !1,
                    })
                    .then(
                        async (e) => {
                            var t, r;
                            p.Z.dispatch({
                                type: "INVITE_ACCEPT_SUCCESS",
                                invite: e.body,
                                code: l,
                            });
                            let i = C.ZP.getGuildScheduledEvent(s.guildScheduledEventId),
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
                                    (0, E.mN)(ee.L0.JOIN_LARGE_GUILD_UNDERAGE),
                                p.Z.dispatch({
                                    type: "INVITE_ACCEPT_FAILURE",
                                    code: l,
                                    error: {
                                        message: null == (n = e.body) ? void 0 : n.message,
                                        code: null == (r = e.body) ? void 0 : r.code,
                                    },
                                }),
                                new m.Z(e))
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
        let { channel: a, guild: l } = e;
        if (null != l && (null == (r = l.features) ? void 0 : r.includes($.GuildFeatures.HUB)))
            return void P.Z.onOpenHubInvite(e);
        let c = (0, s.yE)(null != (i = e.flags) ? i : 0, o.$.IS_APPLICATION_BYPASS);
        if (null != l && !c && (0, N.u)(l)) return void (0, N._)(l.id);
        if (null == a) return;
        let u = ed(e);
        null != t && (u.transitionTo = t),
            null != n && (u.muteOnJoinVoiceChannel = n),
            em({
                guildId: null != l ? l.id : $.ME,
                channel: a,
                options: u,
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
        O.Z.openNativeAppModal(e, $.Etm.INVITE_BROWSER);
    },
    openApp(e, t, n, r, a) {
        var o, s;
        let d,
            f = null != e ? (0, R.fU)(e) : null,
            _ = null == f ? void 0 : f.baseCode;
        if (
            (p.Z.dispatch({
                type: "INVITE_APP_OPENING",
                code: e,
            }),
            null != i().ua && i().ua.toLowerCase().indexOf("googlebot") > -1)
        )
            return void p.Z.dispatch({
                type: "INVITE_APP_NOT_OPENED",
                code: e,
            });
        if (
            (null == (o = i().os) ? void 0 : o.family) === "Android" ||
            (null == (s = i().os) ? void 0 : s.family) === "iOS"
        ) {
            let e = null != _ ? (0, l.z0)(_) : (0, l.Gk)(),
                t = (0, c.WS)();
            (d = (0, c.ZP)(e, {
                utmSource: 2 === a ? "friend_invite" : ec,
                fingerprint: n,
                username: r,
                attemptId: t,
                event: null == f ? void 0 : f.guildScheduledEventId,
                iosFallbackLink: "https://discord.com/api/download/mobile?invite_code=".concat(_),
            })),
                W.default.track($.rMx.DEEP_LINK_CLICKED, {
                    fingerprint: (0, u.K)(n),
                    attempt_id: t,
                    source: ec,
                    invite_code: _,
                });
        } else
            "#" === (d = null != t ? $.Z5c.INVITE_PROXY(t) : "")[0] && (d = d.slice(1)), (d = "discord://".concat(d));
        q.Z.launch(d, (t) => {
            p.Z.dispatch(
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
