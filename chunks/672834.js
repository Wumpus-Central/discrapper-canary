"use strict";
n.d(t, { A: () => ek });
var i = n(627968),
    r = n(64700),
    l = n(311907),
    s = n(192308),
    a = n(821609),
    o = n(117723),
    c = n(442433),
    u = n(843472),
    d = n(956793),
    _ = n(401843),
    E = n(155718),
    A = n(626584),
    m = n(659859),
    I = n(785823),
    T = n(509536),
    N = n(615179),
    g = n(120120),
    p = n(379114),
    C = n(698441),
    f = n(484724),
    R = n(997509),
    h = n(850131),
    S = n(31051),
    O = n(659203),
    x = n(446028),
    M = n(302291),
    D = n(282224),
    P = n(976860),
    U = n(849736),
    y = n(63995),
    L = n(105530),
    v = n(353202),
    j = n(747926),
    k = n(336589),
    b = n(961350),
    G = n(470710),
    w = n(734057),
    B = n(71393),
    H = n(576705),
    F = n(290863),
    X = n(309010),
    q = n(287809),
    V = n(977997),
    K = n(203982),
    W = n(562153),
    Y = n(728458),
    z = n(661191),
    J = n(465364),
    Q = n(877923),
    Z = n(291812),
    $ = n(898401),
    ee = n(447215),
    et = n(97896),
    en = n(939344),
    ei = n(451483),
    er = n(855532),
    el = n(724382),
    es = n(333782),
    ea = n(441412),
    eo = n(624945),
    ec = n(986533),
    eu = n(394388),
    ed = n(320381),
    e_ = n(749795),
    eE = n(821241),
    eA = n(541171),
    em = n(229673),
    eI = n(494086),
    eT = n(734771),
    eN = n(753073),
    eg = n(640289),
    ep = n(293657),
    eC = n(269802),
    ef = n(576471),
    eR = n(933762),
    eh = n(840233),
    eS = n(536030),
    eO = n(912746),
    ex = n(817253),
    eM = n(911726),
    eD = n(904854),
    eP = n(652215),
    eU = n(502075),
    ey = n(985018);
function eL(e) {
    let { message: t, channel: n, compact: s } = e,
        { author: a } = t,
        { guild_id: o } = n,
        c = t.getChannelId(),
        u = (0, l.bG)([B.A], () => B.A.getGuild(o), [o]),
        d = r.useCallback(() => {
            null != u &&
                (0, T.K4)({
                    guildId: u.id,
                    location: { section: eP.JJy.CHANNEL_TEXT_AREA, object: eP.ZSU.BOOST_ANNOUNCEMENT_UPSELL },
                });
        }, [u]),
        _ = (0, ee.P)({ user: a, channelId: c, guildId: n.guild_id, messageId: t.id, stopPropagation: !0 });
    return (0, i.jsx)(eM.Ay, { message: t, compact: s, guild: u, usernameHook: _, onClickMessage: d });
}
function ev(e) {
    let { message: t, compact: n, channel: r } = e,
        l = (0, ee.P)({ user: t.author, channelId: r.id, guildId: r.guild_id, messageId: t.id });
    return (0, i.jsx)(ec.A, { message: t, compact: n, usernameHook: l });
}
let ej = Object.freeze({
        [eP.lAJ.DEFAULT]: void 0,
        [eP.lAJ.REPLY]: void 0,
        [eP.lAJ.CHAT_INPUT_COMMAND]: void 0,
        [eP.lAJ.CONTEXT_MENU_COMMAND]: void 0,
        [eP.lAJ.RECIPIENT_ADD]: function (e) {
            let { message: t, channel: n, compact: r } = e,
                { author: s } = t,
                a = t.getChannelId(),
                o = (0, l.bG)([q.default], () => q.default.getUser(t.mentions[0]), [t]),
                c = W.Ay.getName(null, a, o),
                u = (0, ee.P)({ user: s, channelId: a, guildId: n.guild_id, messageId: t.id }),
                d = (0, ee.P)({ user: o, channelId: a, guildId: n.guild_id, messageId: t.id });
            return n.isThread()
                ? (0, i.jsx)(eh.A, {
                      message: t,
                      channel: n,
                      compact: r,
                      targetUser: o,
                      actorUsernameHook: u,
                      targetUsernameHook: d,
                  })
                : (0, i.jsx)(eI.A, { message: t, compact: r, otherUsername: c, usernameHook: u, otherUsernameHook: d });
        },
        [eP.lAJ.RECIPIENT_REMOVE]: function (e) {
            let { message: t, channel: n, compact: r } = e,
                { author: s } = t,
                a = t.getChannelId(),
                o = (0, l.bG)([q.default], () => q.default.getUser(t.mentions[0]), [t]),
                c = (0, ee.P)({ user: s, channelId: a, guildId: n.guild_id, messageId: t.id }),
                u = (0, ee.P)({ user: o, channelId: a, guildId: n.guild_id, messageId: t.id });
            return n.isThread()
                ? (0, i.jsx)(eS.A, {
                      message: t,
                      channel: n,
                      compact: r,
                      targetUser: o,
                      actorUsernameHook: c,
                      targetUsernameHook: u,
                  })
                : null != o && o.id !== s.id
                  ? (0, i.jsx)(eT.A, {
                        message: t,
                        channel: n,
                        compact: r,
                        usernameHook: c,
                        otherUser: o,
                        otherUsernameHook: u,
                    })
                  : (0, i.jsx)(eT.A, { message: t, channel: n, usernameHook: c });
        },
        [eP.lAJ.CALL]: function (e) {
            let { message: t, compact: n, channel: s } = e,
                { id: a, author: o } = t,
                c = b.default.getId(),
                u = t.getChannelId(),
                _ = (0, l.bG)([G.A], () => G.A.isCallActive(u, a), [u, a]),
                E = (0, l.bG)([V.A], () => V.A.getVoiceState(eP.ME, c)),
                A = !_ && null != t.call && !t.call.participants.includes(c),
                m = _ && (null == E || E.channelId !== u),
                I = r.useCallback(() => d.default.selectVoiceChannel(u), [u]),
                T = (0, ee.P)({
                    user: o,
                    channelId: u,
                    guildId: s.guild_id,
                    messageId: t.id,
                    enableDisplayNameStyles: !0,
                });
            return (0, i.jsx)(en.A, {
                compact: n,
                message: t,
                missed: A,
                joinable: m,
                usernameHook: T,
                onClickJoinCall: I,
            });
        },
        [eP.lAJ.CHANNEL_NAME_CHANGE]: function (e) {
            let { message: t, compact: n, channel: r } = e,
                { author: l } = t,
                s = t.getChannelId(),
                a = (0, ee.P)({ user: l, channelId: s, guildId: r.guild_id, messageId: t.id });
            return (0, i.jsx)(es.A, { compact: n, message: t, usernameHook: a, isForumPost: r.isForumPost() });
        },
        [eP.lAJ.CHANNEL_ICON_CHANGE]: function (e) {
            let { message: t, compact: n, channel: r } = e,
                { author: l } = t,
                s = t.getChannelId(),
                a = (0, ee.P)({ user: l, channelId: s, guildId: r.guild_id, messageId: t.id });
            return (0, i.jsx)(er.A, { compact: n, message: t, usernameHook: a });
        },
        [eP.lAJ.CHANNEL_PINNED_MESSAGE]: function (e) {
            let { message: t, compact: n, channel: l } = e,
                { author: s } = t,
                a = t.getChannelId(),
                o = r.useCallback(() => {
                    if (X.A.getChannelId() !== a) {
                        let e = w.A.getChannel(a);
                        null != e && (0, P.uh)(e.guild_id, e.id);
                    }
                    setTimeout(() => K._.dispatch(eP.jej.TOGGLE_CHANNEL_PINS), 0);
                }, [a]),
                c = (0, ee.P)({ user: s, channelId: a, guildId: l.guild_id, messageId: t.id });
            return (0, i.jsx)(ea.A, { message: t, compact: n, usernameHook: c, onClickPins: __OVERLAY__ ? null : o });
        },
        [eP.lAJ.USER_JOIN]: function (e) {
            let { message: t, compact: n, channel: r } = e,
                { author: l } = t,
                s = t.getChannelId(),
                a = (0, ee.P)({ user: l, channelId: s, guildId: r.guild_id, messageId: t.id });
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(ex.A, { message: t, compact: n, usernameHook: a }),
                    (0, i.jsx)(k.I, { channel: r, message: t }),
                ],
            });
        },
        [eP.lAJ.GUILD_BOOST]: eL,
        [eP.lAJ.GUILD_BOOST_TIER_1]: eL,
        [eP.lAJ.GUILD_BOOST_TIER_2]: eL,
        [eP.lAJ.GUILD_BOOST_TIER_3]: eL,
        [eP.lAJ.CHANNEL_FOLLOW_ADD]: function (e) {
            let { message: t, compact: n, channel: r } = e,
                { author: l } = t,
                s = t.getChannelId(),
                a = (0, ee.P)({ user: l, channelId: s, guildId: r.guild_id, messageId: t.id });
            return (0, i.jsx)(ei.A, { message: t, compact: n, usernameHook: a });
        },
        [eP.lAJ.GUILD_STREAM]: function (e) {
            let { message: t, compact: n, channel: s } = e,
                {
                    author: a,
                    author: { id: o },
                    messageReference: c,
                } = t,
                u = t.getChannelId(),
                d = (0, l.bG)([F.A], () => F.A.findActivity(o, (e) => e.type === eP.$pd.PLAYING), [o]),
                E = (0, l.bG)([w.A], () => (null != c ? w.A.getChannel(c.channel_id) : null), [c]),
                A = c?.guild_id,
                m = (0, ee.P)({ user: a, channelId: u, guildId: s.guild_id, messageId: t.id }),
                I = r.useCallback(() => {
                    null != E &&
                        null != A &&
                        (0, _.Nl)({ streamType: eU.U4.GUILD, ownerId: o, channelId: E.id, guildId: A });
                }, [o, E, A]);
            return null != c && null != E && null != c.guild_id
                ? (0, i.jsx)(eA.A, {
                      message: t,
                      compact: n,
                      channel: E,
                      playingActivity: d,
                      onJoinStream: I,
                      usernameHook: m,
                  })
                : null;
        },
        [eP.lAJ.GUILD_DISCOVERY_DISQUALIFIED]: function (e) {
            let { message: t, compact: n } = e,
                r = t.getChannelId(),
                s = (0, l.bG)([w.A], () => w.A.getChannel(r), [r]),
                a = null != s ? s.getGuildId() : null;
            return (0, i.jsx)(ed.Rk, {
                message: t,
                compact: n,
                onClick: () => {
                    null != a && R.A.open(a, eP.BEX.ACCESS, eP.nd0.ACCESS_DISCOVERABLE);
                },
            });
        },
        [eP.lAJ.GUILD_DISCOVERY_REQUALIFIED]: ed.wj,
        [eP.lAJ.GUILD_DISCOVERY_GRACE_PERIOD_INITIAL_WARNING]: ed.Cq,
        [eP.lAJ.GUILD_DISCOVERY_GRACE_PERIOD_FINAL_WARNING]: ed.If,
        [eP.lAJ.THREAD_CREATED]: function (e) {
            let { message: t, channel: l, compact: a } = e,
                o = (0, ee.P)({ user: t.author, channelId: t.channel_id, guildId: l.guild_id, messageId: t.id }),
                u = r.useCallback(
                    async (e) => {
                        let n = t.messageReference?.channel_id;
                        if (null != n) {
                            await v.A.loadThread(n);
                            let t = w.A.getChannel(n);
                            null != t && (0, j.JA)(t, e.shiftKey);
                        }
                    },
                    [t],
                ),
                d = r.useCallback(() => {
                    (0, s.openModalLazy)(async () => {
                        let { default: e } = await Promise.all([n.e("34160"), n.e("70141")]).then(n.bind(n, 126768));
                        return (t) => (0, i.jsx)(e, { channel: l, ...t });
                    });
                }, [l]),
                _ = r.useCallback(
                    (e) => {
                        let r = w.A.getChannel(t.messageReference?.channel_id);
                        null != r &&
                            (0, c.L3)(e, async () => {
                                let { default: e } = await Promise.all([
                                    n.e("95834"),
                                    n.e("99011"),
                                    n.e("94989"),
                                    n.e("219"),
                                ]).then(n.bind(n, 44536));
                                return (t) => (0, i.jsx)(e, { ...t, channel: r });
                            });
                    },
                    [t],
                );
            return (0, i.jsx)(eR.A, {
                message: t,
                compact: a,
                usernameHook: o,
                onClickThread: u,
                onClickViewThreads: d,
                onContextMenuThread: _,
            });
        },
        [eP.lAJ.THREAD_STARTER_MESSAGE]: eO.A,
        [eP.lAJ.GUILD_INVITE_REMINDER]: void 0,
        [eP.lAJ.AUTO_MODERATION_ACTION]: function (e) {
            let { message: t, compact: n, channel: r } = e;
            return (0, I.ER)(t) ? (0, i.jsx)(et.A, { message: t, compact: n, channel: r }) : null;
        },
        [eP.lAJ.GUILD_INCIDENT_ALERT_MODE_ENABLED]: ev,
        [eP.lAJ.GUILD_INCIDENT_ALERT_MODE_DISABLED]: ev,
        [eP.lAJ.GUILD_INCIDENT_REPORT_RAID]: function (e) {
            let { message: t, compact: n, channel: r } = e,
                l = (0, ee.P)({ user: t.author, channelId: r.id, guildId: r.guild_id, messageId: t.id });
            return (0, i.jsx)(eE.A, { message: t, compact: n, channel: r, usernameHook: l });
        },
        [eP.lAJ.GUILD_INCIDENT_REPORT_FALSE_ALARM]: function (e) {
            let { message: t, compact: n, channel: r } = e,
                l = (0, ee.P)({ user: t.author, channelId: r.id, guildId: r.guild_id, messageId: t.id });
            return (0, i.jsx)(e_.A, { message: t, compact: n, channel: r, usernameHook: l });
        },
        [eP.lAJ.ROLE_SUBSCRIPTION_PURCHASE]: p.A,
        [eP.lAJ.PURCHASE_NOTIFICATION]: function (e) {
            let { message: t, channel: n, compact: r } = e;
            return t.purchaseNotification?.type === E.hE.GUILD_PRODUCT
                ? (0, i.jsx)(g.A, { message: t, channel: n, compact: r })
                : null;
        },
        [eP.lAJ.INTERACTION_PREMIUM_UPSELL]: void 0,
        [eP.lAJ.STAGE_START]: function (e) {
            let { message: t, channel: n, compact: r } = e,
                s = (0, ee.P)({ user: t.author, channelId: n.id, guildId: n.guild_id, messageId: t.id }),
                a = (0, l.bG)([C.Ay], () => C.Ay.getActiveEventByChannel(n.id), [n.id]);
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(eC.A, { message: t, compact: r, usernameHook: s }),
                    null != a && a.name === t.content ? (0, i.jsx)(f.A, { code: `${n.guild_id}-${a.id}` }) : null,
                ],
            });
        },
        [eP.lAJ.STAGE_END]: function (e) {
            let { message: t, channel: n, compact: r } = e,
                l = (0, ee.P)({ user: t.author, channelId: n.id, guildId: n.guild_id, messageId: t.id });
            return (0, i.jsx)(eN.A, { message: t, compact: r, usernameHook: l });
        },
        [eP.lAJ.STAGE_SPEAKER]: function (e) {
            let { message: t, channel: n, compact: r } = e,
                l = (0, ee.P)({ user: t.author, channelId: n.id, guildId: n.guild_id, messageId: t.id });
            return (0, i.jsx)(ep.A, { message: t, compact: r, usernameHook: l });
        },
        [eP.lAJ.STAGE_RAISE_HAND]: function (e) {
            let { message: t, channel: n, compact: r } = e,
                s = (0, ee.P)({ user: t.author, channelId: n.id, guildId: n.guild_id, messageId: t.id }),
                c = (0, l.bG)([H.A], () => H.A.can(eP.xBc.MUTE_MEMBERS, n)),
                d = (0, l.bG)([y.A], () => y.A.getParticipant(n.id, t.author.id)),
                _ =
                    new Date(z.default.extractTimestamp(t.id)).toISOString() ===
                    new Date(d?.voiceState?.requestToSpeakTimestamp ?? 0).toISOString(),
                E = c && d?.rtsState === L.zF.REQUESTED_TO_SPEAK && _;
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(eg.A, { message: t, compact: r, usernameHook: s }),
                    E
                        ? (0, i.jsx)(a.$, {
                              variant: "secondary",
                              onClick: () => {
                                  (0, U.lL)(n, t.author.id, !1), u.A.deleteMessage(n.id, t.id, !0);
                              },
                              text: ey.intl.string(ey.t.f0T7hI),
                              icon: o.L,
                          })
                        : null,
                ],
            });
        },
        [eP.lAJ.STAGE_TOPIC]: function (e) {
            let { message: t, channel: n, compact: r } = e,
                l = (0, ee.P)({ user: t.author, channelId: n.id, guildId: n.guild_id, messageId: t.id });
            return (0, i.jsx)(ef.A, { message: t, compact: r, usernameHook: l });
        },
        [eP.lAJ.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION]: x.A,
        [eP.lAJ.PRIVATE_CHANNEL_INTEGRATION_ADDED]: M.R,
        [eP.lAJ.PRIVATE_CHANNEL_INTEGRATION_REMOVED]: M.d,
        [eP.lAJ.PREMIUM_REFERRAL]: function (e) {
            let { message: t, compact: n } = e;
            return (0, i.jsx)(O.A, {
                userTrialOfferId: t.referralTrialOfferId,
                canRenderReferralEmbed: !0,
                compact: n,
            });
        },
        [eP.lAJ.GUILD_DEADCHAT_REVIVE_PROMPT]: void 0,
        [eP.lAJ.CUSTOM_GIFT]: void 0,
        [eP.lAJ.GUILD_GAMING_STATS_PROMPT]: void 0,
        [eP.lAJ.VOICE_HANGOUT_INVITE]: void 0,
        [eP.lAJ.POLL_RESULT]: h.A,
        [eP.lAJ.CHANGELOG]: void 0,
        [eP.lAJ.NITRO_NOTIFICATION]: function (e) {
            let { message: t, channel: n } = e;
            return (0, i.jsx)($.A, { message: t, channel: n });
        },
        [eP.lAJ.CHANNEL_LINKED_TO_LOBBY]: function (e) {
            let { message: t, channel: n, compact: r } = e;
            return (0, i.jsx)(el.A, { message: t, channel: n, compact: r });
        },
        [eP.lAJ.GIFTING_PROMPT]: function (e) {
            let { message: t, channel: n } = e,
                r = t.giftingPrompt,
                s = (0, l.bG)([q.default], () => q.default.getUser(r?.recipientUserId));
            return null == r || null == s
                ? null
                : (0, i.jsx)(Q.A, { giftIntentType: r.giftIntentType, recipientUser: s, channel: n });
        },
        [eP.lAJ.IN_GAME_MESSAGE_NUX]: function (e) {
            let { message: t, channel: n, compact: r } = e;
            return (0, i.jsx)(em.A, { message: t, channel: n, author: t.author, compact: r });
        },
        [eP.lAJ.GUILD_JOIN_REQUEST_ACCEPT_NOTIFICATION]: N.Z_,
        [eP.lAJ.GUILD_JOIN_REQUEST_REJECT_NOTIFICATION]: N.QN,
        [eP.lAJ.GUILD_JOIN_REQUEST_WITHDRAWN_NOTIFICATION]: N.ez,
        [eP.lAJ.HD_STREAMING_UPGRADED]: void 0,
        [eP.lAJ.EMOJI_ADDED]: function (e) {
            let { message: t, channel: n, compact: r } = e,
                l = (0, ee.P)({ user: t.author, channelId: n.id, guildId: n.guild_id, messageId: t.id });
            return (0, i.jsx)(m._W, { message: t, channel: n, compact: r, usernameHook: l });
        },
        [eP.lAJ.CHAT_WALLPAPER_SET]: void 0,
        [eP.lAJ.CHAT_WALLPAPER_REMOVED]: void 0,
        [eP.lAJ.REPORT_TO_MOD_BAN_USER]: D.A,
        [eP.lAJ.REPORT_TO_MOD_KICK_USER]: D.A,
        [eP.lAJ.REPORT_TO_MOD_TIMEOUT_USER]: D.A,
        [eP.lAJ.REPORT_TO_MOD_DELETED_MESSAGE]: D.A,
        [eP.lAJ.REPORT_TO_MOD_CLOSED_REPORT]: D.A,
        [eP.lAJ.PREMIUM_GROUP_INVITE]: function (e) {
            let { message: t, channel: n, compact: r } = e;
            return (0, i.jsx)(S.A, { message: t, channel: n, compact: r });
        },
        [eP.lAJ.VOICE_SESSION]: function (e) {
            let { message: t, channel: n, compact: r } = e;
            return (0, i.jsx)(eD.A, { message: t, channel: n, compact: r });
        },
        [eP.lAJ.GUILD_BOOST_UPSELL]: function (e) {
            let { message: t, channel: n } = e;
            return null == t.boostingPrompt ? null : (0, i.jsx)(eu.A, { boostingPrompt: t.boostingPrompt, channel: n });
        },
        [eP.lAJ.FRIEND_REQUEST_ACCEPTED]: function (e) {
            let { message: t, channel: n, compact: r } = e;
            return (0, i.jsx)(eo.A, { message: t, channel: n, compact: r });
        },
    }),
    ek = r.memo(function (e) {
        let { message: t, channel: n, compact: r, disableInteraction: l } = e,
            { type: s } = t,
            a = ej[s];
        if (null == a) {
            var o;
            return (
                (o = Error(`unknown message type ${t.type}`)),
                Y.A.captureException(o),
                new A.A("SystemMessage").error("", o),
                null
            );
        }
        return (0, i.jsx)(Z.Ay, {
            message: t,
            content: (0, J.Ay)(t).content,
            compact: r ?? !1,
            children: (0, i.jsx)(a, { message: t, channel: n, compact: r, disableInteraction: l }),
        });
    });
