"use strict";
n.d(t, { A: () => eb });
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
    h = n(997509),
    R = n(850131),
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
    eh = n(808821),
    eR = n(933762),
    eS = n(840233),
    eO = n(536030),
    ex = n(912746),
    eM = n(817253),
    eD = n(911726),
    eP = n(904854),
    eU = n(652215),
    ey = n(502075),
    eL = n(985018);
function ev(e) {
    let { message: t, channel: n, compact: s } = e,
        { author: a } = t,
        { guild_id: o } = n,
        c = t.getChannelId(),
        u = (0, l.bG)([B.A], () => B.A.getGuild(o), [o]),
        d = r.useCallback(() => {
            null != u &&
                (0, T.K4)({
                    guildId: u.id,
                    location: { section: eU.JJy.CHANNEL_TEXT_AREA, object: eU.ZSU.BOOST_ANNOUNCEMENT_UPSELL },
                });
        }, [u]),
        _ = (0, ee.P)({ user: a, channelId: c, guildId: n.guild_id, messageId: t.id, stopPropagation: !0 });
    return (0, i.jsx)(eD.Ay, { message: t, compact: s, guild: u, usernameHook: _, onClickMessage: d });
}
function ej(e) {
    let { message: t, compact: n, channel: r } = e,
        l = (0, ee.P)({ user: t.author, channelId: r.id, guildId: r.guild_id, messageId: t.id });
    return (0, i.jsx)(ec.A, { message: t, compact: n, usernameHook: l });
}
let ek = Object.freeze({
        [eU.lAJ.DEFAULT]: void 0,
        [eU.lAJ.REPLY]: void 0,
        [eU.lAJ.CHAT_INPUT_COMMAND]: void 0,
        [eU.lAJ.CONTEXT_MENU_COMMAND]: void 0,
        [eU.lAJ.RECIPIENT_ADD]: function (e) {
            let { message: t, channel: n, compact: r } = e,
                { author: s } = t,
                a = t.getChannelId(),
                o = (0, l.bG)([q.default], () => q.default.getUser(t.mentions[0]), [t]),
                c = W.Ay.getName(null, a, o),
                u = (0, ee.P)({ user: s, channelId: a, guildId: n.guild_id, messageId: t.id }),
                d = (0, ee.P)({ user: o, channelId: a, guildId: n.guild_id, messageId: t.id });
            return n.isThread()
                ? (0, i.jsx)(eS.A, {
                      message: t,
                      channel: n,
                      compact: r,
                      targetUser: o,
                      actorUsernameHook: u,
                      targetUsernameHook: d,
                  })
                : (0, i.jsx)(eI.A, { message: t, compact: r, otherUsername: c, usernameHook: u, otherUsernameHook: d });
        },
        [eU.lAJ.RECIPIENT_REMOVE]: function (e) {
            let { message: t, channel: n, compact: r } = e,
                { author: s } = t,
                a = t.getChannelId(),
                o = (0, l.bG)([q.default], () => q.default.getUser(t.mentions[0]), [t]),
                c = (0, ee.P)({ user: s, channelId: a, guildId: n.guild_id, messageId: t.id }),
                u = (0, ee.P)({ user: o, channelId: a, guildId: n.guild_id, messageId: t.id });
            return n.isThread()
                ? (0, i.jsx)(eO.A, {
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
        [eU.lAJ.CALL]: function (e) {
            let { message: t, compact: n, channel: s } = e,
                { id: a, author: o } = t,
                c = b.default.getId(),
                u = t.getChannelId(),
                _ = (0, l.bG)([G.A], () => G.A.isCallActive(u, a), [u, a]),
                E = (0, l.bG)([V.A], () => V.A.getVoiceState(eU.ME, c)),
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
        [eU.lAJ.CHANNEL_NAME_CHANGE]: function (e) {
            let { message: t, compact: n, channel: r } = e,
                { author: l } = t,
                s = t.getChannelId(),
                a = (0, ee.P)({ user: l, channelId: s, guildId: r.guild_id, messageId: t.id });
            return (0, i.jsx)(es.A, { compact: n, message: t, usernameHook: a, isForumPost: r.isForumPost() });
        },
        [eU.lAJ.CHANNEL_ICON_CHANGE]: function (e) {
            let { message: t, compact: n, channel: r } = e,
                { author: l } = t,
                s = t.getChannelId(),
                a = (0, ee.P)({ user: l, channelId: s, guildId: r.guild_id, messageId: t.id });
            return (0, i.jsx)(er.A, { compact: n, message: t, usernameHook: a });
        },
        [eU.lAJ.CHANNEL_PINNED_MESSAGE]: function (e) {
            let { message: t, compact: n, channel: l } = e,
                { author: s } = t,
                a = t.getChannelId(),
                o = r.useCallback(() => {
                    if (X.A.getChannelId() !== a) {
                        let e = w.A.getChannel(a);
                        null != e && (0, P.uh)(e.guild_id, e.id);
                    }
                    setTimeout(() => K._.dispatch(eU.jej.TOGGLE_CHANNEL_PINS), 0);
                }, [a]),
                c = (0, ee.P)({ user: s, channelId: a, guildId: l.guild_id, messageId: t.id });
            return (0, i.jsx)(ea.A, { message: t, compact: n, usernameHook: c, onClickPins: __OVERLAY__ ? null : o });
        },
        [eU.lAJ.USER_JOIN]: function (e) {
            let { message: t, compact: n, channel: r } = e,
                { author: l } = t,
                s = t.getChannelId(),
                a = (0, ee.P)({ user: l, channelId: s, guildId: r.guild_id, messageId: t.id });
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(eM.A, { message: t, compact: n, usernameHook: a }),
                    (0, i.jsx)(k.I, { channel: r, message: t }),
                ],
            });
        },
        [eU.lAJ.GUILD_BOOST]: ev,
        [eU.lAJ.GUILD_BOOST_TIER_1]: ev,
        [eU.lAJ.GUILD_BOOST_TIER_2]: ev,
        [eU.lAJ.GUILD_BOOST_TIER_3]: ev,
        [eU.lAJ.CHANNEL_FOLLOW_ADD]: function (e) {
            let { message: t, compact: n, channel: r } = e,
                { author: l } = t,
                s = t.getChannelId(),
                a = (0, ee.P)({ user: l, channelId: s, guildId: r.guild_id, messageId: t.id });
            return (0, i.jsx)(ei.A, { message: t, compact: n, usernameHook: a });
        },
        [eU.lAJ.GUILD_STREAM]: function (e) {
            let { message: t, compact: n, channel: s } = e,
                {
                    author: a,
                    author: { id: o },
                    messageReference: c,
                } = t,
                u = t.getChannelId(),
                d = (0, l.bG)([F.A], () => F.A.findActivity(o, (e) => e.type === eU.$pd.PLAYING), [o]),
                E = (0, l.bG)([w.A], () => (null != c ? w.A.getChannel(c.channel_id) : null), [c]),
                A = c?.guild_id,
                m = (0, ee.P)({ user: a, channelId: u, guildId: s.guild_id, messageId: t.id }),
                I = r.useCallback(() => {
                    null != E &&
                        null != A &&
                        (0, _.Nl)({ streamType: ey.U4.GUILD, ownerId: o, channelId: E.id, guildId: A });
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
        [eU.lAJ.GUILD_DISCOVERY_DISQUALIFIED]: function (e) {
            let { message: t, compact: n } = e,
                r = t.getChannelId(),
                s = (0, l.bG)([w.A], () => w.A.getChannel(r), [r]),
                a = null != s ? s.getGuildId() : null;
            return (0, i.jsx)(ed.Rk, {
                message: t,
                compact: n,
                onClick: () => {
                    null != a && h.A.open(a, eU.BEX.ACCESS, eU.nd0.ACCESS_DISCOVERABLE);
                },
            });
        },
        [eU.lAJ.GUILD_DISCOVERY_REQUALIFIED]: ed.wj,
        [eU.lAJ.GUILD_DISCOVERY_GRACE_PERIOD_INITIAL_WARNING]: ed.Cq,
        [eU.lAJ.GUILD_DISCOVERY_GRACE_PERIOD_FINAL_WARNING]: ed.If,
        [eU.lAJ.THREAD_CREATED]: function (e) {
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
        [eU.lAJ.THREAD_STARTER_MESSAGE]: ex.A,
        [eU.lAJ.GUILD_INVITE_REMINDER]: void 0,
        [eU.lAJ.AUTO_MODERATION_ACTION]: function (e) {
            let { message: t, compact: n, channel: r } = e;
            return (0, I.ER)(t) ? (0, i.jsx)(et.A, { message: t, compact: n, channel: r }) : null;
        },
        [eU.lAJ.GUILD_INCIDENT_ALERT_MODE_ENABLED]: ej,
        [eU.lAJ.GUILD_INCIDENT_ALERT_MODE_DISABLED]: ej,
        [eU.lAJ.GUILD_INCIDENT_REPORT_RAID]: function (e) {
            let { message: t, compact: n, channel: r } = e,
                l = (0, ee.P)({ user: t.author, channelId: r.id, guildId: r.guild_id, messageId: t.id });
            return (0, i.jsx)(eE.A, { message: t, compact: n, channel: r, usernameHook: l });
        },
        [eU.lAJ.GUILD_INCIDENT_REPORT_FALSE_ALARM]: function (e) {
            let { message: t, compact: n, channel: r } = e,
                l = (0, ee.P)({ user: t.author, channelId: r.id, guildId: r.guild_id, messageId: t.id });
            return (0, i.jsx)(e_.A, { message: t, compact: n, channel: r, usernameHook: l });
        },
        [eU.lAJ.ROLE_SUBSCRIPTION_PURCHASE]: p.A,
        [eU.lAJ.PURCHASE_NOTIFICATION]: function (e) {
            let { message: t, channel: n, compact: r } = e;
            return t.purchaseNotification?.type === E.hE.GUILD_PRODUCT
                ? (0, i.jsx)(g.A, { message: t, channel: n, compact: r })
                : null;
        },
        [eU.lAJ.INTERACTION_PREMIUM_UPSELL]: void 0,
        [eU.lAJ.STAGE_START]: function (e) {
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
        [eU.lAJ.STAGE_END]: function (e) {
            let { message: t, channel: n, compact: r } = e,
                l = (0, ee.P)({ user: t.author, channelId: n.id, guildId: n.guild_id, messageId: t.id });
            return (0, i.jsx)(eN.A, { message: t, compact: r, usernameHook: l });
        },
        [eU.lAJ.STAGE_SPEAKER]: function (e) {
            let { message: t, channel: n, compact: r } = e,
                l = (0, ee.P)({ user: t.author, channelId: n.id, guildId: n.guild_id, messageId: t.id });
            return (0, i.jsx)(ep.A, { message: t, compact: r, usernameHook: l });
        },
        [eU.lAJ.STAGE_RAISE_HAND]: function (e) {
            let { message: t, channel: n, compact: r } = e,
                s = (0, ee.P)({ user: t.author, channelId: n.id, guildId: n.guild_id, messageId: t.id }),
                c = (0, l.bG)([H.A], () => H.A.can(eU.xBc.MUTE_MEMBERS, n)),
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
                              text: eL.intl.string(eL.t.f0T7hI),
                              icon: o.L,
                          })
                        : null,
                ],
            });
        },
        [eU.lAJ.STAGE_TOPIC]: function (e) {
            let { message: t, channel: n, compact: r } = e,
                l = (0, ee.P)({ user: t.author, channelId: n.id, guildId: n.guild_id, messageId: t.id });
            return (0, i.jsx)(ef.A, { message: t, compact: r, usernameHook: l });
        },
        [eU.lAJ.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION]: x.A,
        [eU.lAJ.PRIVATE_CHANNEL_INTEGRATION_ADDED]: M.R,
        [eU.lAJ.PRIVATE_CHANNEL_INTEGRATION_REMOVED]: M.d,
        [eU.lAJ.PREMIUM_REFERRAL]: function (e) {
            let { message: t, compact: n } = e;
            return (0, i.jsx)(O.A, {
                userTrialOfferId: t.referralTrialOfferId,
                canRenderReferralEmbed: !0,
                compact: n,
            });
        },
        [eU.lAJ.GUILD_DEADCHAT_REVIVE_PROMPT]: void 0,
        [eU.lAJ.CUSTOM_GIFT]: void 0,
        [eU.lAJ.GUILD_GAMING_STATS_PROMPT]: void 0,
        [eU.lAJ.VOICE_HANGOUT_INVITE]: void 0,
        [eU.lAJ.POLL_RESULT]: R.A,
        [eU.lAJ.CHANGELOG]: void 0,
        [eU.lAJ.NITRO_NOTIFICATION]: function (e) {
            let { message: t, channel: n } = e;
            return (0, i.jsx)($.A, { message: t, channel: n });
        },
        [eU.lAJ.CHANNEL_LINKED_TO_LOBBY]: function (e) {
            let { message: t, channel: n, compact: r } = e;
            return (0, i.jsx)(el.A, { message: t, channel: n, compact: r });
        },
        [eU.lAJ.GIFTING_PROMPT]: function (e) {
            let { message: t, channel: n } = e,
                r = t.giftingPrompt,
                s = (0, l.bG)([q.default], () => q.default.getUser(r?.recipientUserId));
            return null == r || null == s
                ? null
                : (0, i.jsx)(Q.A, { giftIntentType: r.giftIntentType, recipientUser: s, channel: n });
        },
        [eU.lAJ.IN_GAME_MESSAGE_NUX]: function (e) {
            let { message: t, channel: n, compact: r } = e;
            return (0, i.jsx)(em.A, { message: t, channel: n, author: t.author, compact: r });
        },
        [eU.lAJ.GUILD_JOIN_REQUEST_ACCEPT_NOTIFICATION]: N.Z_,
        [eU.lAJ.GUILD_JOIN_REQUEST_REJECT_NOTIFICATION]: N.QN,
        [eU.lAJ.GUILD_JOIN_REQUEST_WITHDRAWN_NOTIFICATION]: N.ez,
        [eU.lAJ.HD_STREAMING_UPGRADED]: void 0,
        [eU.lAJ.EMOJI_ADDED]: function (e) {
            let { message: t, channel: n, compact: r } = e,
                l = (0, ee.P)({ user: t.author, channelId: n.id, guildId: n.guild_id, messageId: t.id });
            return (0, i.jsx)(m._W, { message: t, channel: n, compact: r, usernameHook: l });
        },
        [eU.lAJ.CHAT_WALLPAPER_SET]: void 0,
        [eU.lAJ.CHAT_WALLPAPER_REMOVED]: void 0,
        [eU.lAJ.REPORT_TO_MOD_BAN_USER]: D.A,
        [eU.lAJ.REPORT_TO_MOD_KICK_USER]: D.A,
        [eU.lAJ.REPORT_TO_MOD_TIMEOUT_USER]: D.A,
        [eU.lAJ.REPORT_TO_MOD_DELETED_MESSAGE]: D.A,
        [eU.lAJ.REPORT_TO_MOD_CLOSED_REPORT]: D.A,
        [eU.lAJ.PREMIUM_GROUP_INVITE]: function (e) {
            let { message: t, channel: n, compact: r } = e;
            return (0, i.jsx)(S.A, { message: t, channel: n, compact: r });
        },
        [eU.lAJ.VOICE_SESSION]: function (e) {
            let { message: t, channel: n, compact: r } = e;
            return (0, i.jsx)(eP.A, { message: t, channel: n, compact: r });
        },
        [eU.lAJ.GUILD_BOOST_UPSELL]: function (e) {
            let { message: t, channel: n } = e;
            return null == t.boostingPrompt ? null : (0, i.jsx)(eu.A, { boostingPrompt: t.boostingPrompt, channel: n });
        },
        [eU.lAJ.FRIEND_REQUEST_ACCEPTED]: function (e) {
            let { message: t, channel: n, compact: r } = e;
            return (0, i.jsx)(eo.A, { message: t, channel: n, compact: r });
        },
        68: function (e) {
            let { message: t, compact: n } = e;
            return (0, i.jsx)(eh.A, { message: t, compact: n });
        },
    }),
    eb = r.memo(function (e) {
        let { message: t, channel: n, compact: r, disableInteraction: l } = e,
            { type: s } = t,
            a = ek[s];
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
