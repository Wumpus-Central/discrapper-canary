n.d(t, {
    A: () => ts,
}),
    n(65821);
var r = n(627968),
    i = n(64700),
    a = n(311907),
    s = n(397927),
    o = n(442433),
    l = n(843472),
    c = n(956793),
    u = n(401843),
    d = n(155718),
    f = n(730174),
    p = n(151660),
    _ = n(626584),
    h = n(659859),
    m = n(785823),
    g = n(509536),
    E = n(615179),
    b = n(120120),
    y = n(379114),
    O = n(698441),
    A = n(484724),
    v = n(997509),
    S = n(850131),
    I = n(31051),
    T = n(659203),
    C = n(446028),
    N = n(302291),
    R = n(282224),
    w = n(976860),
    P = n(849736),
    D = n(63995),
    x = n(105530),
    L = n(353202),
    j = n(747926),
    M = n(336589),
    k = n(961350),
    U = n(470710),
    G = n(734057),
    V = n(71393),
    F = n(576705),
    B = n(290863),
    H = n(309010),
    Y = n(287809),
    W = n(977997),
    K = n(203982),
    z = n(562153),
    q = n(728458),
    X = n(661191),
    Z = n(465364),
    Q = n(877923),
    $ = n(291812),
    J = n(898401),
    ee = n(447215),
    et = n(97896),
    en = n(939344),
    er = n(451483),
    ei = n(855532),
    ea = n(724382),
    es = n(333782),
    eo = n(441412),
    el = n(986533),
    ec = n(320381),
    eu = n(749795),
    ed = n(821241),
    ef = n(541171),
    ep = n(229673),
    e_ = n(494086),
    eh = n(734771),
    em = n(753073),
    eg = n(640289),
    eE = n(293657),
    eb = n(269802),
    ey = n(576471),
    eO = n(808821),
    eA = n(933762),
    ev = n(840233),
    eS = n(536030),
    eI = n(912746),
    eT = n(817253),
    eC = n(911726),
    eN = n(652215),
    eR = n(502075),
    ew = n(985018);

function eP(e, t, n) {
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

function eD(e) {
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
                eP(e, t, n[t]);
            });
    }
    return e;
}

function ex(e, t) {
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

function eL(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : ex(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function ej(e) {
    q.A.captureException(e), new _.A("SystemMessage").error("", e);
}

function eM(e) {
    let { message: t, compact: n, channel: s } = e,
        { id: o, author: l } = t,
        u = k.default.getId(),
        d = t.getChannelId(),
        f = (0, a.bG)([U.A], () => U.A.isCallActive(d, o), [d, o]),
        p = (0, a.bG)([W.A], () => W.A.getVoiceState(eN.ME, u)),
        _ = !f && null != t.call && !t.call.participants.includes(u),
        h = f && (null == p || p.channelId !== d),
        m = i.useCallback(() => c.default.selectVoiceChannel(d), [d]),
        g = (0, ee.P)({
            user: l,
            channelId: d,
            guildId: s.guild_id,
            messageId: t.id,
            enableDisplayNameStyles: !0,
        });
    return (0, r.jsx)(en.A, {
        compact: n,
        message: t,
        missed: _,
        joinable: h,
        usernameHook: g,
        onClickJoinCall: m,
    });
}

function ek(e) {
    let { message: t, compact: n, channel: i } = e,
        { author: a } = t,
        s = t.getChannelId(),
        o = (0, ee.P)({
            user: a,
            channelId: s,
            guildId: i.guild_id,
            messageId: t.id,
        });
    return (0, r.jsx)(es.A, {
        compact: n,
        message: t,
        usernameHook: o,
        isForumPost: i.isForumPost(),
    });
}

function eU(e) {
    let { message: t, compact: n, channel: i } = e,
        { author: a } = t,
        s = t.getChannelId(),
        o = (0, ee.P)({
            user: a,
            channelId: s,
            guildId: i.guild_id,
            messageId: t.id,
        });
    return (0, r.jsx)(ei.A, {
        compact: n,
        message: t,
        usernameHook: o,
    });
}

function eG(e) {
    let { message: t, compact: n, channel: a } = e,
        { author: s } = t,
        o = t.getChannelId(),
        l = i.useCallback(() => {
            if (H.A.getChannelId() !== o) {
                let e = G.A.getChannel(o);
                null != e && (0, w.uh)(e.guild_id, e.id);
            }
            setTimeout(() => K._.dispatch(eN.jej.TOGGLE_CHANNEL_PINS), 0);
        }, [o]),
        c = (0, ee.P)({
            user: s,
            channelId: o,
            guildId: a.guild_id,
            messageId: t.id,
        });
    return (0, r.jsx)(eo.A, {
        message: t,
        compact: n,
        usernameHook: c,
        onClickPins: __OVERLAY__ ? null : l,
    });
}

function eV(e) {
    let { message: t, channel: n, compact: i } = e,
        { author: s } = t,
        o = t.getChannelId(),
        l = (0, a.bG)([Y.default], () => Y.default.getUser(t.mentions[0]), [t]),
        c = z.Ay.getName(null, o, l),
        u = (0, ee.P)({
            user: s,
            channelId: o,
            guildId: n.guild_id,
            messageId: t.id,
        }),
        d = (0, ee.P)({
            user: l,
            channelId: o,
            guildId: n.guild_id,
            messageId: t.id,
        });
    return n.isThread()
        ? (0, r.jsx)(ev.A, {
              message: t,
              channel: n,
              compact: i,
              targetUser: l,
              actorUsernameHook: u,
              targetUsernameHook: d,
          })
        : (0, r.jsx)(e_.A, {
              message: t,
              compact: i,
              otherUsername: c,
              usernameHook: u,
              otherUsernameHook: d,
          });
}

function eF(e) {
    let { message: t, channel: a, compact: l } = e,
        c = (0, ee.P)({
            user: t.author,
            channelId: t.channel_id,
            guildId: a.guild_id,
            messageId: t.id,
        }),
        u = i.useCallback(
            async (e) => {
                var n;
                let r = null == (n = t.messageReference) ? void 0 : n.channel_id;
                if (null != r) {
                    await L.A.loadThread(r);
                    let t = G.A.getChannel(r);
                    null != t && (0, j.JA)(t, e.shiftKey);
                }
            },
            [t],
        ),
        d = i.useCallback(() => {
            (0, s.mMO)(async () => {
                let { default: e } = await Promise.all([n.e("34160"), n.e("86155")]).then(n.bind(n, 126768));
                return (t) =>
                    (0, r.jsx)(
                        e,
                        eD(
                            {
                                channel: a,
                            },
                            t,
                        ),
                    );
            });
        }, [a]),
        f = i.useCallback(
            (e) => {
                var i;
                let a = G.A.getChannel(null == (i = t.messageReference) ? void 0 : i.channel_id);
                null != a &&
                    (0, o.L3)(e, async () => {
                        let { default: e } = await Promise.all([n.e("99011"), n.e("88974"), n.e("98865")]).then(
                            n.bind(n, 44536),
                        );
                        return (t) =>
                            (0, r.jsx)(
                                e,
                                eL(eD({}, t), {
                                    channel: a,
                                }),
                            );
                    });
            },
            [t],
        );
    return (0, r.jsx)(eA.A, {
        message: t,
        compact: l,
        usernameHook: c,
        onClickThread: u,
        onClickViewThreads: d,
        onContextMenuThread: f,
    });
}

function eB(e) {
    let { message: t, channel: n, compact: i } = e,
        { author: s } = t,
        o = t.getChannelId(),
        l = (0, a.bG)([Y.default], () => Y.default.getUser(t.mentions[0]), [t]),
        c = (0, ee.P)({
            user: s,
            channelId: o,
            guildId: n.guild_id,
            messageId: t.id,
        }),
        u = (0, ee.P)({
            user: l,
            channelId: o,
            guildId: n.guild_id,
            messageId: t.id,
        });
    return n.isThread()
        ? (0, r.jsx)(eS.A, {
              message: t,
              channel: n,
              compact: i,
              targetUser: l,
              actorUsernameHook: c,
              targetUsernameHook: u,
          })
        : null != l && l.id !== s.id
          ? (0, r.jsx)(eh.A, {
                message: t,
                channel: n,
                compact: i,
                usernameHook: c,
                otherUser: l,
                otherUsernameHook: u,
            })
          : (0, r.jsx)(eh.A, {
                message: t,
                channel: n,
                usernameHook: c,
            });
}

function eH(e) {
    let { message: t, compact: n, channel: i } = e,
        { author: a } = t,
        s = t.getChannelId(),
        o = (0, ee.P)({
            user: a,
            channelId: s,
            guildId: i.guild_id,
            messageId: t.id,
        });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(eT.A, {
                message: t,
                compact: n,
                usernameHook: o,
            }),
            (0, r.jsx)(M.I, {
                channel: i,
                message: t,
            }),
        ],
    });
}

function eY(e) {
    let { message: t, channel: n, compact: s } = e,
        { author: o } = t,
        { guild_id: l } = n,
        c = t.getChannelId(),
        u = (0, a.bG)([V.A], () => V.A.getGuild(l), [l]),
        d = i.useCallback(() => {
            null != u &&
                (0, g.K)({
                    guildId: u.id,
                    location: {
                        section: eN.JJy.CHANNEL_TEXT_AREA,
                        object: eN.ZSU.BOOST_ANNOUNCEMENT_UPSELL,
                    },
                });
        }, [u]),
        f = (0, ee.P)({
            user: o,
            channelId: c,
            guildId: n.guild_id,
            messageId: t.id,
            stopPropagation: !0,
        });
    return (0, r.jsx)(eC.Ay, {
        message: t,
        compact: s,
        guild: u,
        usernameHook: f,
        onClickMessage: d,
    });
}

function eW(e) {
    let { message: t, compact: n, channel: i } = e,
        { author: a } = t,
        s = t.getChannelId(),
        o = (0, ee.P)({
            user: a,
            channelId: s,
            guildId: i.guild_id,
            messageId: t.id,
        });
    return (0, r.jsx)(er.A, {
        message: t,
        compact: n,
        usernameHook: o,
    });
}

function eK(e) {
    let { message: t, compact: n, channel: s } = e,
        {
            author: o,
            author: { id: l },
            messageReference: c,
        } = t,
        d = t.getChannelId(),
        f = (0, a.bG)([B.A], () => B.A.findActivity(l, (e) => e.type === eN.$pd.PLAYING), [l]),
        p = (0, a.bG)([G.A], () => (null != c ? G.A.getChannel(c.channel_id) : null), [c]),
        _ = null == c ? void 0 : c.guild_id,
        h = (0, ee.P)({
            user: o,
            channelId: d,
            guildId: s.guild_id,
            messageId: t.id,
        }),
        m = i.useCallback(() => {
            null != p &&
                null != _ &&
                (0, u.Nl)({
                    streamType: eR.U4.GUILD,
                    ownerId: l,
                    channelId: p.id,
                    guildId: _,
                });
        }, [l, p, _]);
    return null != c && null != p && null != c.guild_id
        ? (0, r.jsx)(ef.A, {
              message: t,
              compact: n,
              channel: p,
              playingActivity: f,
              onJoinStream: m,
              usernameHook: h,
          })
        : null;
}

function ez(e) {
    let { message: t, compact: n } = e,
        i = t.getChannelId(),
        s = (0, a.bG)([G.A], () => G.A.getChannel(i), [i]),
        o = null != s ? s.getGuildId() : null,
        l = () => {
            null != o && v.A.open(o, eN.BEX.ACCESS, eN.nd0.ACCESS_DISCOVERABLE);
        };
    return (0, r.jsx)(ec.Rk, {
        message: t,
        compact: n,
        onClick: l,
    });
}

function eq(e) {
    let { message: t, compact: n, channel: i } = e;
    return (0, m.ER)(t)
        ? (0, r.jsx)(et.A, {
              message: t,
              compact: n,
              channel: i,
          })
        : null;
}

function eX(e) {
    let { message: t, compact: n, channel: i } = e,
        a = (0, ee.P)({
            user: t.author,
            channelId: i.id,
            guildId: i.guild_id,
            messageId: t.id,
        });
    return (0, r.jsx)(el.A, {
        message: t,
        compact: n,
        usernameHook: a,
    });
}

function eZ(e) {
    let { message: t, compact: n, channel: i } = e,
        a = (0, ee.P)({
            user: t.author,
            channelId: i.id,
            guildId: i.guild_id,
            messageId: t.id,
        });
    return (0, r.jsx)(ed.A, {
        message: t,
        compact: n,
        channel: i,
        usernameHook: a,
    });
}

function eQ(e) {
    let { message: t, compact: n, channel: i } = e,
        a = (0, ee.P)({
            user: t.author,
            channelId: i.id,
            guildId: i.guild_id,
            messageId: t.id,
        });
    return (0, r.jsx)(eu.A, {
        message: t,
        compact: n,
        channel: i,
        usernameHook: a,
    });
}

function e$(e) {
    let { message: t, channel: n, compact: i } = e,
        s = (0, ee.P)({
            user: t.author,
            channelId: n.id,
            guildId: n.guild_id,
            messageId: t.id,
        }),
        o = (0, a.bG)([O.Ay], () => O.Ay.getActiveEventByChannel(n.id), [n.id]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(eb.A, {
                message: t,
                compact: i,
                usernameHook: s,
            }),
            null != o && o.name === t.content
                ? (0, r.jsx)(A.A, {
                      code: "".concat(n.guild_id, "-").concat(o.id),
                  })
                : null,
        ],
    });
}

function eJ(e) {
    let { message: t, channel: n, compact: i } = e,
        a = (0, ee.P)({
            user: t.author,
            channelId: n.id,
            guildId: n.guild_id,
            messageId: t.id,
        });
    return (0, r.jsx)(em.A, {
        message: t,
        compact: i,
        usernameHook: a,
    });
}

function e0(e) {
    let { message: t, channel: n, compact: i } = e,
        a = (0, ee.P)({
            user: t.author,
            channelId: n.id,
            guildId: n.guild_id,
            messageId: t.id,
        });
    return (0, r.jsx)(ey.A, {
        message: t,
        compact: i,
        usernameHook: a,
    });
}

function e1(e) {
    let { message: t, channel: n, compact: i } = e,
        a = (0, ee.P)({
            user: t.author,
            channelId: n.id,
            guildId: n.guild_id,
            messageId: t.id,
        });
    return (0, r.jsx)(eE.A, {
        message: t,
        compact: i,
        usernameHook: a,
    });
}

function e2(e) {
    var t, n;
    let { message: i, channel: o, compact: c } = e,
        u = (0, ee.P)({
            user: i.author,
            channelId: o.id,
            guildId: o.guild_id,
            messageId: i.id,
        }),
        d = (0, a.bG)([F.A], () => F.A.can(eN.xBc.MUTE_MEMBERS, o)),
        f = () => {
            (0, P.lL)(o, i.author.id, !1), l.A.deleteMessage(o.id, i.id, !0);
        },
        p = (0, a.bG)([D.A], () => D.A.getParticipant(o.id, i.author.id)),
        _ =
            new Date(X.default.extractTimestamp(i.id)).toISOString() ===
            new Date(
                null != (t = null == p || null == (n = p.voiceState) ? void 0 : n.requestToSpeakTimestamp) ? t : 0,
            ).toISOString(),
        h = d && (null == p ? void 0 : p.rtsState) === x.zF.REQUESTED_TO_SPEAK && _;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(eg.A, {
                message: i,
                compact: c,
                usernameHook: u,
            }),
            h
                ? (0, r.jsx)(s.Button, {
                      variant: "secondary",
                      onClick: f,
                      text: ew.intl.string(ew.t.f0T7hI),
                      icon: s.LvC,
                  })
                : null,
        ],
    });
}

function e3(e) {
    let { message: t, channel: n, compact: i } = e;
    return (0, r.jsx)(p.A, {
        message: t,
        channel: n,
        compact: i,
    });
}

function e6(e) {
    let { message: t, channel: n, compact: i } = e;
    return (0, r.jsx)(f.A, {
        message: t,
        channel: n,
        compact: i,
    });
}

function e4(e) {
    var t;
    let { message: n, channel: i, compact: a } = e;
    return (null == (t = n.purchaseNotification) ? void 0 : t.type) === d.hE.GUILD_PRODUCT
        ? (0, r.jsx)(b.A, {
              message: n,
              channel: i,
              compact: a,
          })
        : null;
}

function e5(e) {
    let { message: t, channel: n } = e;
    return (0, r.jsx)(J.A, {
        message: t,
        channel: n,
    });
}

function e7(e) {
    let { message: t, channel: n } = e,
        i = t.giftingPrompt,
        s = (0, a.bG)([Y.default], () => Y.default.getUser(null == i ? void 0 : i.recipientUserId));
    return null == i || null == s
        ? null
        : (0, r.jsx)(Q.A, {
              giftIntentType: i.giftIntentType,
              recipientUser: s,
              channel: n,
          });
}

function e8(e) {
    let { message: t, channel: n, compact: i } = e;
    return (0, r.jsx)(ea.A, {
        message: t,
        channel: n,
        compact: i,
    });
}

function e9(e) {
    let { message: t, channel: n, compact: i } = e;
    return (0, r.jsx)(ep.A, {
        message: t,
        channel: n,
        author: t.author,
        compact: i,
    });
}

function te(e) {
    let { message: t, compact: n } = e;
    return (0, r.jsx)(T.A, {
        userTrialOfferId: t.referralTrialOfferId,
        canRenderReferralEmbed: !0,
        compact: n,
    });
}

function tt(e) {
    let { message: t, channel: n, compact: i } = e,
        a = (0, ee.P)({
            user: t.author,
            channelId: n.id,
            guildId: n.guild_id,
            messageId: t.id,
        });
    return (0, r.jsx)(h._W, {
        message: t,
        channel: n,
        compact: i,
        usernameHook: a,
    });
}

function tn(e) {
    let { message: t, compact: n } = e;
    return (0, r.jsx)(eO.A, {
        message: t,
        compact: n,
    });
}

function tr(e) {
    let { message: t, channel: n, compact: i } = e;
    return (0, r.jsx)(I.A, {
        message: t,
        channel: n,
        compact: i,
    });
}
let ti = Object.freeze({
    [eN.lAJ.DEFAULT]: void 0,
    [eN.lAJ.REPLY]: void 0,
    [eN.lAJ.CHAT_INPUT_COMMAND]: void 0,
    [eN.lAJ.CONTEXT_MENU_COMMAND]: void 0,
    [eN.lAJ.RECIPIENT_ADD]: eV,
    [eN.lAJ.RECIPIENT_REMOVE]: eB,
    [eN.lAJ.CALL]: eM,
    [eN.lAJ.CHANNEL_NAME_CHANGE]: ek,
    [eN.lAJ.CHANNEL_ICON_CHANGE]: eU,
    [eN.lAJ.CHANNEL_PINNED_MESSAGE]: eG,
    [eN.lAJ.USER_JOIN]: eH,
    [eN.lAJ.GUILD_BOOST]: eY,
    [eN.lAJ.GUILD_BOOST_TIER_1]: eY,
    [eN.lAJ.GUILD_BOOST_TIER_2]: eY,
    [eN.lAJ.GUILD_BOOST_TIER_3]: eY,
    [eN.lAJ.CHANNEL_FOLLOW_ADD]: eW,
    [eN.lAJ.GUILD_STREAM]: eK,
    [eN.lAJ.GUILD_DISCOVERY_DISQUALIFIED]: ez,
    [eN.lAJ.GUILD_DISCOVERY_REQUALIFIED]: ec.wj,
    [eN.lAJ.GUILD_DISCOVERY_GRACE_PERIOD_INITIAL_WARNING]: ec.Cq,
    [eN.lAJ.GUILD_DISCOVERY_GRACE_PERIOD_FINAL_WARNING]: ec.If,
    [eN.lAJ.THREAD_CREATED]: eF,
    [eN.lAJ.THREAD_STARTER_MESSAGE]: eI.A,
    [eN.lAJ.GUILD_INVITE_REMINDER]: void 0,
    [eN.lAJ.AUTO_MODERATION_ACTION]: eq,
    [eN.lAJ.GUILD_INCIDENT_ALERT_MODE_ENABLED]: eX,
    [eN.lAJ.GUILD_INCIDENT_ALERT_MODE_DISABLED]: eX,
    [eN.lAJ.GUILD_INCIDENT_REPORT_RAID]: eZ,
    [eN.lAJ.GUILD_INCIDENT_REPORT_FALSE_ALARM]: eQ,
    [eN.lAJ.ROLE_SUBSCRIPTION_PURCHASE]: y.A,
    [eN.lAJ.PURCHASE_NOTIFICATION]: e4,
    [eN.lAJ.INTERACTION_PREMIUM_UPSELL]: void 0,
    [eN.lAJ.STAGE_START]: e$,
    [eN.lAJ.STAGE_END]: eJ,
    [eN.lAJ.STAGE_SPEAKER]: e1,
    [eN.lAJ.STAGE_RAISE_HAND]: e2,
    [eN.lAJ.STAGE_TOPIC]: e0,
    [eN.lAJ.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION]: C.A,
    [eN.lAJ.PRIVATE_CHANNEL_INTEGRATION_ADDED]: N.R,
    [eN.lAJ.PRIVATE_CHANNEL_INTEGRATION_REMOVED]: N.d,
    [eN.lAJ.PREMIUM_REFERRAL]: te,
    [eN.lAJ.GUILD_DEADCHAT_REVIVE_PROMPT]: e3,
    [eN.lAJ.CUSTOM_GIFT]: void 0,
    [eN.lAJ.GUILD_GAMING_STATS_PROMPT]: e6,
    [eN.lAJ.VOICE_HANGOUT_INVITE]: void 0,
    [eN.lAJ.POLL_RESULT]: S.A,
    [eN.lAJ.CHANGELOG]: void 0,
    [eN.lAJ.NITRO_NOTIFICATION]: e5,
    [eN.lAJ.CHANNEL_LINKED_TO_LOBBY]: e8,
    [eN.lAJ.GIFTING_PROMPT]: e7,
    [eN.lAJ.IN_GAME_MESSAGE_NUX]: e9,
    [eN.lAJ.GUILD_JOIN_REQUEST_ACCEPT_NOTIFICATION]: E.Z_,
    [eN.lAJ.GUILD_JOIN_REQUEST_REJECT_NOTIFICATION]: E.QN,
    [eN.lAJ.GUILD_JOIN_REQUEST_WITHDRAWN_NOTIFICATION]: E.ez,
    [eN.lAJ.HD_STREAMING_UPGRADED]: void 0,
    [eN.lAJ.EMOJI_ADDED]: tt,
    [eN.lAJ.CHAT_WALLPAPER_SET]: void 0,
    [eN.lAJ.CHAT_WALLPAPER_REMOVED]: void 0,
    [eN.lAJ.REPORT_TO_MOD_BAN_USER]: R.A,
    [eN.lAJ.REPORT_TO_MOD_KICK_USER]: R.A,
    [eN.lAJ.REPORT_TO_MOD_TIMEOUT_USER]: R.A,
    [eN.lAJ.REPORT_TO_MOD_DELETED_MESSAGE]: R.A,
    [eN.lAJ.REPORT_TO_MOD_CLOSED_REPORT]: R.A,
    [eN.lAJ.PREMIUM_GROUP_INVITE]: tr,
    [eN.lAJ.VOICE_SESSION]: void 0,
    66: tn,
});

function ta(e) {
    let { message: t, channel: n, compact: i, disableInteraction: a } = e,
        { type: s } = t,
        o = ti[s];
    return null == o
        ? (ej(Error("unknown message type ".concat(t.type))), null)
        : (0, r.jsx)($.Ay, {
              message: t,
              content: (0, Z.Ay)(t).content,
              compact: null != i && i,
              children: (0, r.jsx)(o, {
                  message: t,
                  channel: n,
                  compact: i,
                  disableInteraction: a,
              }),
          });
}
let ts = i.memo(ta);
