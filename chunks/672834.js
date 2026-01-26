n.d(t, {
    A: () => ti,
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
    f = n(151660),
    p = n(626584),
    _ = n(659859),
    h = n(785823),
    m = n(509536),
    g = n(615179),
    E = n(120120),
    y = n(379114),
    b = n(698441),
    O = n(484724),
    v = n(997509),
    A = n(850131),
    I = n(31051),
    S = n(659203),
    T = n(446028),
    C = n(302291),
    N = n(282224),
    w = n(976860),
    R = n(849736),
    P = n(63995),
    D = n(105530),
    x = n(353202),
    L = n(747926),
    j = n(336589),
    M = n(961350),
    k = n(470710),
    U = n(734057),
    G = n(71393),
    V = n(576705),
    F = n(290863),
    B = n(309010),
    H = n(287809),
    Y = n(977997),
    W = n(203982),
    K = n(562153),
    z = n(728458),
    q = n(661191),
    Z = n(465364),
    X = n(877923),
    Q = n(291812),
    J = n(898401),
    $ = n(447215),
    ee = n(97896),
    et = n(939344),
    en = n(451483),
    er = n(855532),
    ei = n(724382),
    ea = n(333782),
    es = n(441412),
    eo = n(986533),
    el = n(320381),
    ec = n(749795),
    eu = n(821241),
    ed = n(541171),
    ef = n(229673),
    ep = n(494086),
    e_ = n(734771),
    eh = n(753073),
    em = n(640289),
    eg = n(293657),
    eE = n(269802),
    ey = n(576471),
    eb = n(808821),
    eO = n(933762),
    ev = n(840233),
    eA = n(536030),
    eI = n(912746),
    eS = n(817253),
    eT = n(911726),
    eC = n(652215),
    eN = n(502075),
    ew = n(985018);

function eR(e, t, n) {
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

function eP(e) {
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
                eR(e, t, n[t]);
            });
    }
    return e;
}

function eD(e, t) {
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

function ex(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : eD(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}

function eL(e) {
    z.A.captureException(e), new p.A("SystemMessage").error("", e);
}

function ej(e) {
    let { message: t, compact: n, channel: s } = e,
        { id: o, author: l } = t,
        u = M.default.getId(),
        d = t.getChannelId(),
        f = (0, a.bG)([k.A], () => k.A.isCallActive(d, o), [d, o]),
        p = (0, a.bG)([Y.A], () => Y.A.getVoiceState(eC.ME, u)),
        _ = !f && null != t.call && !t.call.participants.includes(u),
        h = f && (null == p || p.channelId !== d),
        m = i.useCallback(() => c.default.selectVoiceChannel(d), [d]),
        g = (0, $.P)({
            user: l,
            channelId: d,
            guildId: s.guild_id,
            messageId: t.id,
            enableDisplayNameStyles: !0,
        });
    return (0, r.jsx)(et.A, {
        compact: n,
        message: t,
        missed: _,
        joinable: h,
        usernameHook: g,
        onClickJoinCall: m,
    });
}

function eM(e) {
    let { message: t, compact: n, channel: i } = e,
        { author: a } = t,
        s = t.getChannelId(),
        o = (0, $.P)({
            user: a,
            channelId: s,
            guildId: i.guild_id,
            messageId: t.id,
        });
    return (0, r.jsx)(ea.A, {
        compact: n,
        message: t,
        usernameHook: o,
        isForumPost: i.isForumPost(),
    });
}

function ek(e) {
    let { message: t, compact: n, channel: i } = e,
        { author: a } = t,
        s = t.getChannelId(),
        o = (0, $.P)({
            user: a,
            channelId: s,
            guildId: i.guild_id,
            messageId: t.id,
        });
    return (0, r.jsx)(er.A, {
        compact: n,
        message: t,
        usernameHook: o,
    });
}

function eU(e) {
    let { message: t, compact: n, channel: a } = e,
        { author: s } = t,
        o = t.getChannelId(),
        l = i.useCallback(() => {
            if (B.A.getChannelId() !== o) {
                let e = U.A.getChannel(o);
                null != e && (0, w.uh)(e.guild_id, e.id);
            }
            setTimeout(() => W._.dispatch(eC.jej.TOGGLE_CHANNEL_PINS), 0);
        }, [o]),
        c = (0, $.P)({
            user: s,
            channelId: o,
            guildId: a.guild_id,
            messageId: t.id,
        });
    return (0, r.jsx)(es.A, {
        message: t,
        compact: n,
        usernameHook: c,
        onClickPins: __OVERLAY__ ? null : l,
    });
}

function eG(e) {
    let { message: t, channel: n, compact: i } = e,
        { author: s } = t,
        o = t.getChannelId(),
        l = (0, a.bG)([H.default], () => H.default.getUser(t.mentions[0]), [t]),
        c = K.Ay.getName(null, o, l),
        u = (0, $.P)({
            user: s,
            channelId: o,
            guildId: n.guild_id,
            messageId: t.id,
        }),
        d = (0, $.P)({
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
        : (0, r.jsx)(ep.A, {
              message: t,
              compact: i,
              otherUsername: c,
              usernameHook: u,
              otherUsernameHook: d,
          });
}

function eV(e) {
    let { message: t, channel: a, compact: l } = e,
        c = (0, $.P)({
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
                    await x.A.loadThread(r);
                    let t = U.A.getChannel(r);
                    null != t && (0, L.JA)(t, e.shiftKey);
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
                        eP(
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
                let a = U.A.getChannel(null == (i = t.messageReference) ? void 0 : i.channel_id);
                null != a &&
                    (0, o.L3)(e, async () => {
                        let { default: e } = await Promise.all([n.e("99011"), n.e("88974"), n.e("9282")]).then(
                            n.bind(n, 44536),
                        );
                        return (t) =>
                            (0, r.jsx)(
                                e,
                                ex(eP({}, t), {
                                    channel: a,
                                }),
                            );
                    });
            },
            [t],
        );
    return (0, r.jsx)(eO.A, {
        message: t,
        compact: l,
        usernameHook: c,
        onClickThread: u,
        onClickViewThreads: d,
        onContextMenuThread: f,
    });
}

function eF(e) {
    let { message: t, channel: n, compact: i } = e,
        { author: s } = t,
        o = t.getChannelId(),
        l = (0, a.bG)([H.default], () => H.default.getUser(t.mentions[0]), [t]),
        c = (0, $.P)({
            user: s,
            channelId: o,
            guildId: n.guild_id,
            messageId: t.id,
        }),
        u = (0, $.P)({
            user: l,
            channelId: o,
            guildId: n.guild_id,
            messageId: t.id,
        });
    return n.isThread()
        ? (0, r.jsx)(eA.A, {
              message: t,
              channel: n,
              compact: i,
              targetUser: l,
              actorUsernameHook: c,
              targetUsernameHook: u,
          })
        : null != l && l.id !== s.id
          ? (0, r.jsx)(e_.A, {
                message: t,
                channel: n,
                compact: i,
                usernameHook: c,
                otherUser: l,
                otherUsernameHook: u,
            })
          : (0, r.jsx)(e_.A, {
                message: t,
                channel: n,
                usernameHook: c,
            });
}

function eB(e) {
    let { message: t, compact: n, channel: i } = e,
        { author: a } = t,
        s = t.getChannelId(),
        o = (0, $.P)({
            user: a,
            channelId: s,
            guildId: i.guild_id,
            messageId: t.id,
        });
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(eS.A, {
                message: t,
                compact: n,
                usernameHook: o,
            }),
            (0, r.jsx)(j.I, {
                channel: i,
                message: t,
            }),
        ],
    });
}

function eH(e) {
    let { message: t, channel: n, compact: s } = e,
        { author: o } = t,
        { guild_id: l } = n,
        c = t.getChannelId(),
        u = (0, a.bG)([G.A], () => G.A.getGuild(l), [l]),
        d = i.useCallback(() => {
            null != u &&
                (0, m.K)({
                    guildId: u.id,
                    location: {
                        section: eC.JJy.CHANNEL_TEXT_AREA,
                        object: eC.ZSU.BOOST_ANNOUNCEMENT_UPSELL,
                    },
                });
        }, [u]),
        f = (0, $.P)({
            user: o,
            channelId: c,
            guildId: n.guild_id,
            messageId: t.id,
            stopPropagation: !0,
        });
    return (0, r.jsx)(eT.Ay, {
        message: t,
        compact: s,
        guild: u,
        usernameHook: f,
        onClickMessage: d,
    });
}

function eY(e) {
    let { message: t, compact: n, channel: i } = e,
        { author: a } = t,
        s = t.getChannelId(),
        o = (0, $.P)({
            user: a,
            channelId: s,
            guildId: i.guild_id,
            messageId: t.id,
        });
    return (0, r.jsx)(en.A, {
        message: t,
        compact: n,
        usernameHook: o,
    });
}

function eW(e) {
    let { message: t, compact: n, channel: s } = e,
        {
            author: o,
            author: { id: l },
            messageReference: c,
        } = t,
        d = t.getChannelId(),
        f = (0, a.bG)([F.A], () => F.A.findActivity(l, (e) => e.type === eC.$pd.PLAYING), [l]),
        p = (0, a.bG)([U.A], () => (null != c ? U.A.getChannel(c.channel_id) : null), [c]),
        _ = null == c ? void 0 : c.guild_id,
        h = (0, $.P)({
            user: o,
            channelId: d,
            guildId: s.guild_id,
            messageId: t.id,
        }),
        m = i.useCallback(() => {
            null != p &&
                null != _ &&
                (0, u.Nl)({
                    streamType: eN.U4.GUILD,
                    ownerId: l,
                    channelId: p.id,
                    guildId: _,
                });
        }, [l, p, _]);
    return null != c && null != p && null != c.guild_id
        ? (0, r.jsx)(ed.A, {
              message: t,
              compact: n,
              channel: p,
              playingActivity: f,
              onJoinStream: m,
              usernameHook: h,
          })
        : null;
}

function eK(e) {
    let { message: t, compact: n } = e,
        i = t.getChannelId(),
        s = (0, a.bG)([U.A], () => U.A.getChannel(i), [i]),
        o = null != s ? s.getGuildId() : null,
        l = () => {
            null != o && v.A.open(o, eC.BEX.ACCESS, eC.nd0.ACCESS_DISCOVERABLE);
        };
    return (0, r.jsx)(el.Rk, {
        message: t,
        compact: n,
        onClick: l,
    });
}

function ez(e) {
    let { message: t, compact: n, channel: i } = e;
    return (0, h.ER)(t)
        ? (0, r.jsx)(ee.A, {
              message: t,
              compact: n,
              channel: i,
          })
        : null;
}

function eq(e) {
    let { message: t, compact: n, channel: i } = e,
        a = (0, $.P)({
            user: t.author,
            channelId: i.id,
            guildId: i.guild_id,
            messageId: t.id,
        });
    return (0, r.jsx)(eo.A, {
        message: t,
        compact: n,
        usernameHook: a,
    });
}

function eZ(e) {
    let { message: t, compact: n, channel: i } = e,
        a = (0, $.P)({
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

function eX(e) {
    let { message: t, compact: n, channel: i } = e,
        a = (0, $.P)({
            user: t.author,
            channelId: i.id,
            guildId: i.guild_id,
            messageId: t.id,
        });
    return (0, r.jsx)(ec.A, {
        message: t,
        compact: n,
        channel: i,
        usernameHook: a,
    });
}

function eQ(e) {
    let { message: t, channel: n, compact: i } = e,
        s = (0, $.P)({
            user: t.author,
            channelId: n.id,
            guildId: n.guild_id,
            messageId: t.id,
        }),
        o = (0, a.bG)([b.Ay], () => b.Ay.getActiveEventByChannel(n.id), [n.id]);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(eE.A, {
                message: t,
                compact: i,
                usernameHook: s,
            }),
            null != o && o.name === t.content
                ? (0, r.jsx)(O.A, {
                      code: "".concat(n.guild_id, "-").concat(o.id),
                  })
                : null,
        ],
    });
}

function eJ(e) {
    let { message: t, channel: n, compact: i } = e,
        a = (0, $.P)({
            user: t.author,
            channelId: n.id,
            guildId: n.guild_id,
            messageId: t.id,
        });
    return (0, r.jsx)(eh.A, {
        message: t,
        compact: i,
        usernameHook: a,
    });
}

function e$(e) {
    let { message: t, channel: n, compact: i } = e,
        a = (0, $.P)({
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

function e0(e) {
    let { message: t, channel: n, compact: i } = e,
        a = (0, $.P)({
            user: t.author,
            channelId: n.id,
            guildId: n.guild_id,
            messageId: t.id,
        });
    return (0, r.jsx)(eg.A, {
        message: t,
        compact: i,
        usernameHook: a,
    });
}

function e1(e) {
    var t, n;
    let { message: i, channel: o, compact: c } = e,
        u = (0, $.P)({
            user: i.author,
            channelId: o.id,
            guildId: o.guild_id,
            messageId: i.id,
        }),
        d = (0, a.bG)([V.A], () => V.A.can(eC.xBc.MUTE_MEMBERS, o)),
        f = () => {
            (0, R.lL)(o, i.author.id, !1), l.A.deleteMessage(o.id, i.id, !0);
        },
        p = (0, a.bG)([P.A], () => P.A.getParticipant(o.id, i.author.id)),
        _ =
            new Date(q.default.extractTimestamp(i.id)).toISOString() ===
            new Date(
                null != (t = null == p || null == (n = p.voiceState) ? void 0 : n.requestToSpeakTimestamp) ? t : 0,
            ).toISOString(),
        h = d && (null == p ? void 0 : p.rtsState) === D.zF.REQUESTED_TO_SPEAK && _;
    return (0, r.jsxs)(r.Fragment, {
        children: [
            (0, r.jsx)(em.A, {
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

function e2(e) {
    let { message: t, channel: n, compact: i } = e;
    return (0, r.jsx)(f.A, {
        message: t,
        channel: n,
        compact: i,
    });
}

function e3(e) {
    var t;
    let { message: n, channel: i, compact: a } = e;
    return (null == (t = n.purchaseNotification) ? void 0 : t.type) === d.hE.GUILD_PRODUCT
        ? (0, r.jsx)(E.A, {
              message: n,
              channel: i,
              compact: a,
          })
        : null;
}

function e6(e) {
    let { message: t, channel: n } = e;
    return (0, r.jsx)(J.A, {
        message: t,
        channel: n,
    });
}

function e4(e) {
    let { message: t, channel: n } = e,
        i = t.giftingPrompt,
        s = (0, a.bG)([H.default], () => H.default.getUser(null == i ? void 0 : i.recipientUserId));
    return null == i || null == s
        ? null
        : (0, r.jsx)(X.A, {
              giftIntentType: i.giftIntentType,
              recipientUser: s,
              channel: n,
          });
}

function e5(e) {
    let { message: t, channel: n, compact: i } = e;
    return (0, r.jsx)(ei.A, {
        message: t,
        channel: n,
        compact: i,
    });
}

function e7(e) {
    let { message: t, channel: n, compact: i } = e;
    return (0, r.jsx)(ef.A, {
        message: t,
        channel: n,
        author: t.author,
        compact: i,
    });
}

function e8(e) {
    let { message: t, compact: n } = e;
    return (0, r.jsx)(S.A, {
        userTrialOfferId: t.referralTrialOfferId,
        canRenderReferralEmbed: !0,
        compact: n,
    });
}

function e9(e) {
    let { message: t, channel: n, compact: i } = e,
        a = (0, $.P)({
            user: t.author,
            channelId: n.id,
            guildId: n.guild_id,
            messageId: t.id,
        });
    return (0, r.jsx)(_._W, {
        message: t,
        channel: n,
        compact: i,
        usernameHook: a,
    });
}

function te(e) {
    let { message: t, compact: n } = e;
    return (0, r.jsx)(eb.A, {
        message: t,
        compact: n,
    });
}

function tt(e) {
    let { message: t, channel: n, compact: i } = e;
    return (0, r.jsx)(I.A, {
        message: t,
        channel: n,
        compact: i,
    });
}
let tn = Object.freeze({
    [eC.lAJ.DEFAULT]: void 0,
    [eC.lAJ.REPLY]: void 0,
    [eC.lAJ.CHAT_INPUT_COMMAND]: void 0,
    [eC.lAJ.CONTEXT_MENU_COMMAND]: void 0,
    [eC.lAJ.RECIPIENT_ADD]: eG,
    [eC.lAJ.RECIPIENT_REMOVE]: eF,
    [eC.lAJ.CALL]: ej,
    [eC.lAJ.CHANNEL_NAME_CHANGE]: eM,
    [eC.lAJ.CHANNEL_ICON_CHANGE]: ek,
    [eC.lAJ.CHANNEL_PINNED_MESSAGE]: eU,
    [eC.lAJ.USER_JOIN]: eB,
    [eC.lAJ.GUILD_BOOST]: eH,
    [eC.lAJ.GUILD_BOOST_TIER_1]: eH,
    [eC.lAJ.GUILD_BOOST_TIER_2]: eH,
    [eC.lAJ.GUILD_BOOST_TIER_3]: eH,
    [eC.lAJ.CHANNEL_FOLLOW_ADD]: eY,
    [eC.lAJ.GUILD_STREAM]: eW,
    [eC.lAJ.GUILD_DISCOVERY_DISQUALIFIED]: eK,
    [eC.lAJ.GUILD_DISCOVERY_REQUALIFIED]: el.wj,
    [eC.lAJ.GUILD_DISCOVERY_GRACE_PERIOD_INITIAL_WARNING]: el.Cq,
    [eC.lAJ.GUILD_DISCOVERY_GRACE_PERIOD_FINAL_WARNING]: el.If,
    [eC.lAJ.THREAD_CREATED]: eV,
    [eC.lAJ.THREAD_STARTER_MESSAGE]: eI.A,
    [eC.lAJ.GUILD_INVITE_REMINDER]: void 0,
    [eC.lAJ.AUTO_MODERATION_ACTION]: ez,
    [eC.lAJ.GUILD_INCIDENT_ALERT_MODE_ENABLED]: eq,
    [eC.lAJ.GUILD_INCIDENT_ALERT_MODE_DISABLED]: eq,
    [eC.lAJ.GUILD_INCIDENT_REPORT_RAID]: eZ,
    [eC.lAJ.GUILD_INCIDENT_REPORT_FALSE_ALARM]: eX,
    [eC.lAJ.ROLE_SUBSCRIPTION_PURCHASE]: y.A,
    [eC.lAJ.PURCHASE_NOTIFICATION]: e3,
    [eC.lAJ.INTERACTION_PREMIUM_UPSELL]: void 0,
    [eC.lAJ.STAGE_START]: eQ,
    [eC.lAJ.STAGE_END]: eJ,
    [eC.lAJ.STAGE_SPEAKER]: e0,
    [eC.lAJ.STAGE_RAISE_HAND]: e1,
    [eC.lAJ.STAGE_TOPIC]: e$,
    [eC.lAJ.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION]: T.A,
    [eC.lAJ.PRIVATE_CHANNEL_INTEGRATION_ADDED]: C.R,
    [eC.lAJ.PRIVATE_CHANNEL_INTEGRATION_REMOVED]: C.d,
    [eC.lAJ.PREMIUM_REFERRAL]: e8,
    [eC.lAJ.GUILD_DEADCHAT_REVIVE_PROMPT]: e2,
    [eC.lAJ.CUSTOM_GIFT]: void 0,
    [eC.lAJ.GUILD_GAMING_STATS_PROMPT]: void 0,
    [eC.lAJ.VOICE_HANGOUT_INVITE]: void 0,
    [eC.lAJ.POLL_RESULT]: A.A,
    [eC.lAJ.CHANGELOG]: void 0,
    [eC.lAJ.NITRO_NOTIFICATION]: e6,
    [eC.lAJ.CHANNEL_LINKED_TO_LOBBY]: e5,
    [eC.lAJ.GIFTING_PROMPT]: e4,
    [eC.lAJ.IN_GAME_MESSAGE_NUX]: e7,
    [eC.lAJ.GUILD_JOIN_REQUEST_ACCEPT_NOTIFICATION]: g.Z_,
    [eC.lAJ.GUILD_JOIN_REQUEST_REJECT_NOTIFICATION]: g.QN,
    [eC.lAJ.GUILD_JOIN_REQUEST_WITHDRAWN_NOTIFICATION]: g.ez,
    [eC.lAJ.HD_STREAMING_UPGRADED]: void 0,
    [eC.lAJ.EMOJI_ADDED]: e9,
    [eC.lAJ.CHAT_WALLPAPER_SET]: void 0,
    [eC.lAJ.CHAT_WALLPAPER_REMOVED]: void 0,
    [eC.lAJ.REPORT_TO_MOD_BAN_USER]: N.A,
    [eC.lAJ.REPORT_TO_MOD_KICK_USER]: N.A,
    [eC.lAJ.REPORT_TO_MOD_TIMEOUT_USER]: N.A,
    [eC.lAJ.REPORT_TO_MOD_DELETED_MESSAGE]: N.A,
    [eC.lAJ.REPORT_TO_MOD_CLOSED_REPORT]: N.A,
    [eC.lAJ.PREMIUM_GROUP_INVITE]: tt,
    [eC.lAJ.VOICE_SESSION]: void 0,
    66: te,
});

function tr(e) {
    let { message: t, channel: n, compact: i, disableInteraction: a } = e,
        { type: s } = t,
        o = tn[s];
    return null == o
        ? (eL(Error("unknown message type ".concat(t.type))), null)
        : (0, r.jsx)(Q.Ay, {
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
let ti = i.memo(tr);
