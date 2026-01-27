n.d(t, {
    A: () => eD,
}),
    n(65821);
var r = n(627968),
    i = n(64700),
    l = n(311907),
    a = n(397927),
    s = n(442433),
    o = n(843472),
    c = n(956793),
    u = n(401843),
    d = n(155718),
    p = n(151660),
    m = n(626584),
    f = n(659859),
    g = n(785823),
    h = n(509536),
    _ = n(615179),
    b = n(120120),
    A = n(379114),
    y = n(698441),
    v = n(484724),
    x = n(997509),
    O = n(850131),
    E = n(31051),
    j = n(659203),
    C = n(446028),
    I = n(302291),
    S = n(282224),
    T = n(976860),
    N = n(849736),
    P = n(63995),
    w = n(105530),
    R = n(353202),
    D = n(747926),
    L = n(336589),
    M = n(961350),
    k = n(470710),
    U = n(734057),
    G = n(71393),
    B = n(576705),
    F = n(290863),
    H = n(309010),
    V = n(287809),
    z = n(977997),
    W = n(203982),
    K = n(562153),
    Y = n(728458),
    q = n(661191),
    J = n(465364),
    Q = n(877923),
    Z = n(291812),
    X = n(898401),
    $ = n(447215),
    ee = n(97896),
    et = n(939344),
    en = n(451483),
    er = n(855532),
    ei = n(724382),
    el = n(333782),
    ea = n(441412),
    es = n(986533),
    eo = n(320381),
    ec = n(749795),
    eu = n(821241),
    ed = n(541171),
    ep = n(229673),
    em = n(494086),
    ef = n(734771),
    eg = n(753073),
    eh = n(640289),
    e_ = n(293657),
    eb = n(269802),
    eA = n(576471),
    ey = n(808821),
    ev = n(933762),
    ex = n(840233),
    eO = n(536030),
    eE = n(912746),
    ej = n(817253),
    eC = n(911726),
    eI = n(652215),
    eS = n(502075),
    eT = n(985018);

function eN(e) {
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
                var r;
                (r = n[t]),
                    t in e
                        ? Object.defineProperty(e, t, {
                              value: r,
                              enumerable: !0,
                              configurable: !0,
                              writable: !0,
                          })
                        : (e[t] = r);
            });
    }
    return e;
}

function eP(e) {
    let { message: t, channel: n, compact: a } = e,
        { author: s } = t,
        { guild_id: o } = n,
        c = t.getChannelId(),
        u = (0, l.bG)([G.A], () => G.A.getGuild(o), [o]),
        d = i.useCallback(() => {
            null != u &&
                (0, h.K)({
                    guildId: u.id,
                    location: {
                        section: eI.JJy.CHANNEL_TEXT_AREA,
                        object: eI.ZSU.BOOST_ANNOUNCEMENT_UPSELL,
                    },
                });
        }, [u]),
        p = (0, $.P)({
            user: s,
            channelId: c,
            guildId: n.guild_id,
            messageId: t.id,
            stopPropagation: !0,
        });
    return (0, r.jsx)(eC.Ay, {
        message: t,
        compact: a,
        guild: u,
        usernameHook: p,
        onClickMessage: d,
    });
}

function ew(e) {
    let { message: t, compact: n, channel: i } = e,
        l = (0, $.P)({
            user: t.author,
            channelId: i.id,
            guildId: i.guild_id,
            messageId: t.id,
        });
    return (0, r.jsx)(es.A, {
        message: t,
        compact: n,
        usernameHook: l,
    });
}
let eR = Object.freeze({
        [eI.lAJ.DEFAULT]: void 0,
        [eI.lAJ.REPLY]: void 0,
        [eI.lAJ.CHAT_INPUT_COMMAND]: void 0,
        [eI.lAJ.CONTEXT_MENU_COMMAND]: void 0,
        [eI.lAJ.RECIPIENT_ADD]: function (e) {
            let { message: t, channel: n, compact: i } = e,
                { author: a } = t,
                s = t.getChannelId(),
                o = (0, l.bG)([V.default], () => V.default.getUser(t.mentions[0]), [t]),
                c = K.Ay.getName(null, s, o),
                u = (0, $.P)({
                    user: a,
                    channelId: s,
                    guildId: n.guild_id,
                    messageId: t.id,
                }),
                d = (0, $.P)({
                    user: o,
                    channelId: s,
                    guildId: n.guild_id,
                    messageId: t.id,
                });
            return n.isThread()
                ? (0, r.jsx)(ex.A, {
                      message: t,
                      channel: n,
                      compact: i,
                      targetUser: o,
                      actorUsernameHook: u,
                      targetUsernameHook: d,
                  })
                : (0, r.jsx)(em.A, {
                      message: t,
                      compact: i,
                      otherUsername: c,
                      usernameHook: u,
                      otherUsernameHook: d,
                  });
        },
        [eI.lAJ.RECIPIENT_REMOVE]: function (e) {
            let { message: t, channel: n, compact: i } = e,
                { author: a } = t,
                s = t.getChannelId(),
                o = (0, l.bG)([V.default], () => V.default.getUser(t.mentions[0]), [t]),
                c = (0, $.P)({
                    user: a,
                    channelId: s,
                    guildId: n.guild_id,
                    messageId: t.id,
                }),
                u = (0, $.P)({
                    user: o,
                    channelId: s,
                    guildId: n.guild_id,
                    messageId: t.id,
                });
            return n.isThread()
                ? (0, r.jsx)(eO.A, {
                      message: t,
                      channel: n,
                      compact: i,
                      targetUser: o,
                      actorUsernameHook: c,
                      targetUsernameHook: u,
                  })
                : null != o && o.id !== a.id
                  ? (0, r.jsx)(ef.A, {
                        message: t,
                        channel: n,
                        compact: i,
                        usernameHook: c,
                        otherUser: o,
                        otherUsernameHook: u,
                    })
                  : (0, r.jsx)(ef.A, {
                        message: t,
                        channel: n,
                        usernameHook: c,
                    });
        },
        [eI.lAJ.CALL]: function (e) {
            let { message: t, compact: n, channel: a } = e,
                { id: s, author: o } = t,
                u = M.default.getId(),
                d = t.getChannelId(),
                p = (0, l.bG)([k.A], () => k.A.isCallActive(d, s), [d, s]),
                m = (0, l.bG)([z.A], () => z.A.getVoiceState(eI.ME, u)),
                f = !p && null != t.call && !t.call.participants.includes(u),
                g = p && (null == m || m.channelId !== d),
                h = i.useCallback(() => c.default.selectVoiceChannel(d), [d]),
                _ = (0, $.P)({
                    user: o,
                    channelId: d,
                    guildId: a.guild_id,
                    messageId: t.id,
                    enableDisplayNameStyles: !0,
                });
            return (0, r.jsx)(et.A, {
                compact: n,
                message: t,
                missed: f,
                joinable: g,
                usernameHook: _,
                onClickJoinCall: h,
            });
        },
        [eI.lAJ.CHANNEL_NAME_CHANGE]: function (e) {
            let { message: t, compact: n, channel: i } = e,
                { author: l } = t,
                a = t.getChannelId(),
                s = (0, $.P)({
                    user: l,
                    channelId: a,
                    guildId: i.guild_id,
                    messageId: t.id,
                });
            return (0, r.jsx)(el.A, {
                compact: n,
                message: t,
                usernameHook: s,
                isForumPost: i.isForumPost(),
            });
        },
        [eI.lAJ.CHANNEL_ICON_CHANGE]: function (e) {
            let { message: t, compact: n, channel: i } = e,
                { author: l } = t,
                a = t.getChannelId(),
                s = (0, $.P)({
                    user: l,
                    channelId: a,
                    guildId: i.guild_id,
                    messageId: t.id,
                });
            return (0, r.jsx)(er.A, {
                compact: n,
                message: t,
                usernameHook: s,
            });
        },
        [eI.lAJ.CHANNEL_PINNED_MESSAGE]: function (e) {
            let { message: t, compact: n, channel: l } = e,
                { author: a } = t,
                s = t.getChannelId(),
                o = i.useCallback(() => {
                    if (H.A.getChannelId() !== s) {
                        let e = U.A.getChannel(s);
                        null != e && (0, T.uh)(e.guild_id, e.id);
                    }
                    setTimeout(() => W._.dispatch(eI.jej.TOGGLE_CHANNEL_PINS), 0);
                }, [s]),
                c = (0, $.P)({
                    user: a,
                    channelId: s,
                    guildId: l.guild_id,
                    messageId: t.id,
                });
            return (0, r.jsx)(ea.A, {
                message: t,
                compact: n,
                usernameHook: c,
                onClickPins: __OVERLAY__ ? null : o,
            });
        },
        [eI.lAJ.USER_JOIN]: function (e) {
            let { message: t, compact: n, channel: i } = e,
                { author: l } = t,
                a = t.getChannelId(),
                s = (0, $.P)({
                    user: l,
                    channelId: a,
                    guildId: i.guild_id,
                    messageId: t.id,
                });
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(ej.A, {
                        message: t,
                        compact: n,
                        usernameHook: s,
                    }),
                    (0, r.jsx)(L.I, {
                        channel: i,
                        message: t,
                    }),
                ],
            });
        },
        [eI.lAJ.GUILD_BOOST]: eP,
        [eI.lAJ.GUILD_BOOST_TIER_1]: eP,
        [eI.lAJ.GUILD_BOOST_TIER_2]: eP,
        [eI.lAJ.GUILD_BOOST_TIER_3]: eP,
        [eI.lAJ.CHANNEL_FOLLOW_ADD]: function (e) {
            let { message: t, compact: n, channel: i } = e,
                { author: l } = t,
                a = t.getChannelId(),
                s = (0, $.P)({
                    user: l,
                    channelId: a,
                    guildId: i.guild_id,
                    messageId: t.id,
                });
            return (0, r.jsx)(en.A, {
                message: t,
                compact: n,
                usernameHook: s,
            });
        },
        [eI.lAJ.GUILD_STREAM]: function (e) {
            let { message: t, compact: n, channel: a } = e,
                {
                    author: s,
                    author: { id: o },
                    messageReference: c,
                } = t,
                d = t.getChannelId(),
                p = (0, l.bG)([F.A], () => F.A.findActivity(o, (e) => e.type === eI.$pd.PLAYING), [o]),
                m = (0, l.bG)([U.A], () => (null != c ? U.A.getChannel(c.channel_id) : null), [c]),
                f = null == c ? void 0 : c.guild_id,
                g = (0, $.P)({
                    user: s,
                    channelId: d,
                    guildId: a.guild_id,
                    messageId: t.id,
                }),
                h = i.useCallback(() => {
                    null != m &&
                        null != f &&
                        (0, u.Nl)({
                            streamType: eS.U4.GUILD,
                            ownerId: o,
                            channelId: m.id,
                            guildId: f,
                        });
                }, [o, m, f]);
            return null != c && null != m && null != c.guild_id
                ? (0, r.jsx)(ed.A, {
                      message: t,
                      compact: n,
                      channel: m,
                      playingActivity: p,
                      onJoinStream: h,
                      usernameHook: g,
                  })
                : null;
        },
        [eI.lAJ.GUILD_DISCOVERY_DISQUALIFIED]: function (e) {
            let { message: t, compact: n } = e,
                i = t.getChannelId(),
                a = (0, l.bG)([U.A], () => U.A.getChannel(i), [i]),
                s = null != a ? a.getGuildId() : null;
            return (0, r.jsx)(eo.Rk, {
                message: t,
                compact: n,
                onClick: () => {
                    null != s && x.A.open(s, eI.BEX.ACCESS, eI.nd0.ACCESS_DISCOVERABLE);
                },
            });
        },
        [eI.lAJ.GUILD_DISCOVERY_REQUALIFIED]: eo.wj,
        [eI.lAJ.GUILD_DISCOVERY_GRACE_PERIOD_INITIAL_WARNING]: eo.Cq,
        [eI.lAJ.GUILD_DISCOVERY_GRACE_PERIOD_FINAL_WARNING]: eo.If,
        [eI.lAJ.THREAD_CREATED]: function (e) {
            let { message: t, channel: l, compact: o } = e,
                c = (0, $.P)({
                    user: t.author,
                    channelId: t.channel_id,
                    guildId: l.guild_id,
                    messageId: t.id,
                }),
                u = i.useCallback(
                    async (e) => {
                        var n;
                        let r = null == (n = t.messageReference) ? void 0 : n.channel_id;
                        if (null != r) {
                            await R.A.loadThread(r);
                            let t = U.A.getChannel(r);
                            null != t && (0, D.JA)(t, e.shiftKey);
                        }
                    },
                    [t],
                ),
                d = i.useCallback(() => {
                    (0, a.mMO)(async () => {
                        let { default: e } = await Promise.all([n.e("34160"), n.e("86155")]).then(n.bind(n, 126768));
                        return (t) =>
                            (0, r.jsx)(
                                e,
                                eN(
                                    {
                                        channel: l,
                                    },
                                    t,
                                ),
                            );
                    });
                }, [l]),
                p = i.useCallback(
                    (e) => {
                        var i;
                        let l = U.A.getChannel(null == (i = t.messageReference) ? void 0 : i.channel_id);
                        null != l &&
                            (0, s.L3)(e, async () => {
                                let { default: e } = await Promise.all([n.e("99011"), n.e("88974"), n.e("86901")]).then(
                                    n.bind(n, 44536),
                                );
                                return (t) => {
                                    var n, i;
                                    return (0, r.jsx)(
                                        e,
                                        ((n = eN({}, t)),
                                        (i = i =
                                            {
                                                channel: l,
                                            }),
                                        Object.getOwnPropertyDescriptors
                                            ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(i))
                                            : (function (e, t) {
                                                  var n = Object.keys(e);
                                                  if (Object.getOwnPropertySymbols) {
                                                      var r = Object.getOwnPropertySymbols(e);
                                                      n.push.apply(n, r);
                                                  }
                                                  return n;
                                              })(Object(i)).forEach(function (e) {
                                                  Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(i, e));
                                              }),
                                        n),
                                    );
                                };
                            });
                    },
                    [t],
                );
            return (0, r.jsx)(ev.A, {
                message: t,
                compact: o,
                usernameHook: c,
                onClickThread: u,
                onClickViewThreads: d,
                onContextMenuThread: p,
            });
        },
        [eI.lAJ.THREAD_STARTER_MESSAGE]: eE.A,
        [eI.lAJ.GUILD_INVITE_REMINDER]: void 0,
        [eI.lAJ.AUTO_MODERATION_ACTION]: function (e) {
            let { message: t, compact: n, channel: i } = e;
            return (0, g.ER)(t)
                ? (0, r.jsx)(ee.A, {
                      message: t,
                      compact: n,
                      channel: i,
                  })
                : null;
        },
        [eI.lAJ.GUILD_INCIDENT_ALERT_MODE_ENABLED]: ew,
        [eI.lAJ.GUILD_INCIDENT_ALERT_MODE_DISABLED]: ew,
        [eI.lAJ.GUILD_INCIDENT_REPORT_RAID]: function (e) {
            let { message: t, compact: n, channel: i } = e,
                l = (0, $.P)({
                    user: t.author,
                    channelId: i.id,
                    guildId: i.guild_id,
                    messageId: t.id,
                });
            return (0, r.jsx)(eu.A, {
                message: t,
                compact: n,
                channel: i,
                usernameHook: l,
            });
        },
        [eI.lAJ.GUILD_INCIDENT_REPORT_FALSE_ALARM]: function (e) {
            let { message: t, compact: n, channel: i } = e,
                l = (0, $.P)({
                    user: t.author,
                    channelId: i.id,
                    guildId: i.guild_id,
                    messageId: t.id,
                });
            return (0, r.jsx)(ec.A, {
                message: t,
                compact: n,
                channel: i,
                usernameHook: l,
            });
        },
        [eI.lAJ.ROLE_SUBSCRIPTION_PURCHASE]: A.A,
        [eI.lAJ.PURCHASE_NOTIFICATION]: function (e) {
            var t;
            let { message: n, channel: i, compact: l } = e;
            return (null == (t = n.purchaseNotification) ? void 0 : t.type) === d.hE.GUILD_PRODUCT
                ? (0, r.jsx)(b.A, {
                      message: n,
                      channel: i,
                      compact: l,
                  })
                : null;
        },
        [eI.lAJ.INTERACTION_PREMIUM_UPSELL]: void 0,
        [eI.lAJ.STAGE_START]: function (e) {
            let { message: t, channel: n, compact: i } = e,
                a = (0, $.P)({
                    user: t.author,
                    channelId: n.id,
                    guildId: n.guild_id,
                    messageId: t.id,
                }),
                s = (0, l.bG)([y.Ay], () => y.Ay.getActiveEventByChannel(n.id), [n.id]);
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(eb.A, {
                        message: t,
                        compact: i,
                        usernameHook: a,
                    }),
                    null != s && s.name === t.content
                        ? (0, r.jsx)(v.A, {
                              code: "".concat(n.guild_id, "-").concat(s.id),
                          })
                        : null,
                ],
            });
        },
        [eI.lAJ.STAGE_END]: function (e) {
            let { message: t, channel: n, compact: i } = e,
                l = (0, $.P)({
                    user: t.author,
                    channelId: n.id,
                    guildId: n.guild_id,
                    messageId: t.id,
                });
            return (0, r.jsx)(eg.A, {
                message: t,
                compact: i,
                usernameHook: l,
            });
        },
        [eI.lAJ.STAGE_SPEAKER]: function (e) {
            let { message: t, channel: n, compact: i } = e,
                l = (0, $.P)({
                    user: t.author,
                    channelId: n.id,
                    guildId: n.guild_id,
                    messageId: t.id,
                });
            return (0, r.jsx)(e_.A, {
                message: t,
                compact: i,
                usernameHook: l,
            });
        },
        [eI.lAJ.STAGE_RAISE_HAND]: function (e) {
            var t, n;
            let { message: i, channel: s, compact: c } = e,
                u = (0, $.P)({
                    user: i.author,
                    channelId: s.id,
                    guildId: s.guild_id,
                    messageId: i.id,
                }),
                d = (0, l.bG)([B.A], () => B.A.can(eI.xBc.MUTE_MEMBERS, s)),
                p = (0, l.bG)([P.A], () => P.A.getParticipant(s.id, i.author.id)),
                m =
                    new Date(q.default.extractTimestamp(i.id)).toISOString() ===
                    new Date(
                        null != (t = null == p || null == (n = p.voiceState) ? void 0 : n.requestToSpeakTimestamp)
                            ? t
                            : 0,
                    ).toISOString(),
                f = d && (null == p ? void 0 : p.rtsState) === w.zF.REQUESTED_TO_SPEAK && m;
            return (0, r.jsxs)(r.Fragment, {
                children: [
                    (0, r.jsx)(eh.A, {
                        message: i,
                        compact: c,
                        usernameHook: u,
                    }),
                    f
                        ? (0, r.jsx)(a.Button, {
                              variant: "secondary",
                              onClick: () => {
                                  (0, N.lL)(s, i.author.id, !1), o.A.deleteMessage(s.id, i.id, !0);
                              },
                              text: eT.intl.string(eT.t.f0T7hI),
                              icon: a.LvC,
                          })
                        : null,
                ],
            });
        },
        [eI.lAJ.STAGE_TOPIC]: function (e) {
            let { message: t, channel: n, compact: i } = e,
                l = (0, $.P)({
                    user: t.author,
                    channelId: n.id,
                    guildId: n.guild_id,
                    messageId: t.id,
                });
            return (0, r.jsx)(eA.A, {
                message: t,
                compact: i,
                usernameHook: l,
            });
        },
        [eI.lAJ.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION]: C.A,
        [eI.lAJ.PRIVATE_CHANNEL_INTEGRATION_ADDED]: I.R,
        [eI.lAJ.PRIVATE_CHANNEL_INTEGRATION_REMOVED]: I.d,
        [eI.lAJ.PREMIUM_REFERRAL]: function (e) {
            let { message: t, compact: n } = e;
            return (0, r.jsx)(j.A, {
                userTrialOfferId: t.referralTrialOfferId,
                canRenderReferralEmbed: !0,
                compact: n,
            });
        },
        [eI.lAJ.GUILD_DEADCHAT_REVIVE_PROMPT]: function (e) {
            let { message: t, channel: n, compact: i } = e;
            return (0, r.jsx)(p.A, {
                message: t,
                channel: n,
                compact: i,
            });
        },
        [eI.lAJ.CUSTOM_GIFT]: void 0,
        [eI.lAJ.GUILD_GAMING_STATS_PROMPT]: void 0,
        [eI.lAJ.VOICE_HANGOUT_INVITE]: void 0,
        [eI.lAJ.POLL_RESULT]: O.A,
        [eI.lAJ.CHANGELOG]: void 0,
        [eI.lAJ.NITRO_NOTIFICATION]: function (e) {
            let { message: t, channel: n } = e;
            return (0, r.jsx)(X.A, {
                message: t,
                channel: n,
            });
        },
        [eI.lAJ.CHANNEL_LINKED_TO_LOBBY]: function (e) {
            let { message: t, channel: n, compact: i } = e;
            return (0, r.jsx)(ei.A, {
                message: t,
                channel: n,
                compact: i,
            });
        },
        [eI.lAJ.GIFTING_PROMPT]: function (e) {
            let { message: t, channel: n } = e,
                i = t.giftingPrompt,
                a = (0, l.bG)([V.default], () => V.default.getUser(null == i ? void 0 : i.recipientUserId));
            return null == i || null == a
                ? null
                : (0, r.jsx)(Q.A, {
                      giftIntentType: i.giftIntentType,
                      recipientUser: a,
                      channel: n,
                  });
        },
        [eI.lAJ.IN_GAME_MESSAGE_NUX]: function (e) {
            let { message: t, channel: n, compact: i } = e;
            return (0, r.jsx)(ep.A, {
                message: t,
                channel: n,
                author: t.author,
                compact: i,
            });
        },
        [eI.lAJ.GUILD_JOIN_REQUEST_ACCEPT_NOTIFICATION]: _.Z_,
        [eI.lAJ.GUILD_JOIN_REQUEST_REJECT_NOTIFICATION]: _.QN,
        [eI.lAJ.GUILD_JOIN_REQUEST_WITHDRAWN_NOTIFICATION]: _.ez,
        [eI.lAJ.HD_STREAMING_UPGRADED]: void 0,
        [eI.lAJ.EMOJI_ADDED]: function (e) {
            let { message: t, channel: n, compact: i } = e,
                l = (0, $.P)({
                    user: t.author,
                    channelId: n.id,
                    guildId: n.guild_id,
                    messageId: t.id,
                });
            return (0, r.jsx)(f._W, {
                message: t,
                channel: n,
                compact: i,
                usernameHook: l,
            });
        },
        [eI.lAJ.CHAT_WALLPAPER_SET]: void 0,
        [eI.lAJ.CHAT_WALLPAPER_REMOVED]: void 0,
        [eI.lAJ.REPORT_TO_MOD_BAN_USER]: S.A,
        [eI.lAJ.REPORT_TO_MOD_KICK_USER]: S.A,
        [eI.lAJ.REPORT_TO_MOD_TIMEOUT_USER]: S.A,
        [eI.lAJ.REPORT_TO_MOD_DELETED_MESSAGE]: S.A,
        [eI.lAJ.REPORT_TO_MOD_CLOSED_REPORT]: S.A,
        [eI.lAJ.PREMIUM_GROUP_INVITE]: function (e) {
            let { message: t, channel: n, compact: i } = e;
            return (0, r.jsx)(E.A, {
                message: t,
                channel: n,
                compact: i,
            });
        },
        [eI.lAJ.VOICE_SESSION]: void 0,
        66: function (e) {
            let { message: t, compact: n } = e;
            return (0, r.jsx)(ey.A, {
                message: t,
                compact: n,
            });
        },
    }),
    eD = i.memo(function (e) {
        let { message: t, channel: n, compact: i, disableInteraction: l } = e,
            { type: a } = t,
            s = eR[a];
        if (null == s) {
            var o;
            return (
                (o = Error("unknown message type ".concat(t.type))),
                Y.A.captureException(o),
                new m.A("SystemMessage").error("", o),
                null
            );
        }
        return (0, r.jsx)(Z.Ay, {
            message: t,
            content: (0, J.Ay)(t).content,
            compact: null != i && i,
            children: (0, r.jsx)(s, {
                message: t,
                channel: n,
                compact: i,
                disableInteraction: l,
            }),
        });
    });
