"use strict";
n.d(t, { A: () => ej });
var i = n(627968),
    r = n(64700),
    s = n(311907),
    l = n(397927),
    a = n(442433),
    c = n(843472),
    o = n(956793),
    u = n(401843),
    d = n(155718),
    _ = n(626584),
    E = n(659859),
    A = n(785823),
    m = n(509536),
    I = n(615179),
    T = n(120120),
    g = n(379114),
    N = n(698441),
    f = n(484724),
    p = n(997509),
    C = n(850131),
    h = n(31051),
    S = n(659203),
    R = n(446028),
    x = n(302291),
    O = n(282224),
    M = n(976860),
    D = n(849736),
    U = n(63995),
    P = n(105530),
    L = n(353202),
    v = n(747926),
    y = n(336589),
    j = n(961350),
    k = n(470710),
    b = n(734057),
    G = n(71393),
    H = n(576705),
    F = n(290863),
    w = n(309010),
    B = n(287809),
    V = n(977997),
    X = n(203982),
    q = n(562153),
    K = n(728458),
    Y = n(661191),
    W = n(465364),
    J = n(877923),
    z = n(291812),
    Q = n(898401),
    Z = n(447215),
    $ = n(97896),
    ee = n(939344),
    et = n(451483),
    en = n(855532),
    ei = n(724382),
    er = n(333782),
    es = n(441412),
    el = n(624945),
    ea = n(986533),
    ec = n(394388),
    eo = n(320381),
    eu = n(749795),
    ed = n(821241),
    e_ = n(541171),
    eE = n(229673),
    eA = n(494086),
    em = n(734771),
    eI = n(753073),
    eT = n(640289),
    eg = n(293657),
    eN = n(269802),
    ef = n(576471),
    ep = n(808821),
    eC = n(933762),
    eh = n(840233),
    eS = n(536030),
    eR = n(912746),
    ex = n(817253),
    eO = n(911726),
    eM = n(904854),
    eD = n(652215),
    eU = n(502075),
    eP = n(985018);
function eL(e) {
    let { message: t, channel: n, compact: l } = e,
        { author: a } = t,
        { guild_id: c } = n,
        o = t.getChannelId(),
        u = (0, s.bG)([G.A], () => G.A.getGuild(c), [c]),
        d = r.useCallback(() => {
            null != u &&
                (0, m.K4)({
                    guildId: u.id,
                    location: { section: eD.JJy.CHANNEL_TEXT_AREA, object: eD.ZSU.BOOST_ANNOUNCEMENT_UPSELL },
                });
        }, [u]),
        _ = (0, Z.P)({ user: a, channelId: o, guildId: n.guild_id, messageId: t.id, stopPropagation: !0 });
    return (0, i.jsx)(eO.Ay, { message: t, compact: l, guild: u, usernameHook: _, onClickMessage: d });
}
function ev(e) {
    let { message: t, compact: n, channel: r } = e,
        s = (0, Z.P)({ user: t.author, channelId: r.id, guildId: r.guild_id, messageId: t.id });
    return (0, i.jsx)(ea.A, { message: t, compact: n, usernameHook: s });
}
let ey = Object.freeze({
        [eD.lAJ.DEFAULT]: void 0,
        [eD.lAJ.REPLY]: void 0,
        [eD.lAJ.CHAT_INPUT_COMMAND]: void 0,
        [eD.lAJ.CONTEXT_MENU_COMMAND]: void 0,
        [eD.lAJ.RECIPIENT_ADD]: function (e) {
            let { message: t, channel: n, compact: r } = e,
                { author: l } = t,
                a = t.getChannelId(),
                c = (0, s.bG)([B.default], () => B.default.getUser(t.mentions[0]), [t]),
                o = q.Ay.getName(null, a, c),
                u = (0, Z.P)({ user: l, channelId: a, guildId: n.guild_id, messageId: t.id }),
                d = (0, Z.P)({ user: c, channelId: a, guildId: n.guild_id, messageId: t.id });
            return n.isThread()
                ? (0, i.jsx)(eh.A, {
                      message: t,
                      channel: n,
                      compact: r,
                      targetUser: c,
                      actorUsernameHook: u,
                      targetUsernameHook: d,
                  })
                : (0, i.jsx)(eA.A, { message: t, compact: r, otherUsername: o, usernameHook: u, otherUsernameHook: d });
        },
        [eD.lAJ.RECIPIENT_REMOVE]: function (e) {
            let { message: t, channel: n, compact: r } = e,
                { author: l } = t,
                a = t.getChannelId(),
                c = (0, s.bG)([B.default], () => B.default.getUser(t.mentions[0]), [t]),
                o = (0, Z.P)({ user: l, channelId: a, guildId: n.guild_id, messageId: t.id }),
                u = (0, Z.P)({ user: c, channelId: a, guildId: n.guild_id, messageId: t.id });
            return n.isThread()
                ? (0, i.jsx)(eS.A, {
                      message: t,
                      channel: n,
                      compact: r,
                      targetUser: c,
                      actorUsernameHook: o,
                      targetUsernameHook: u,
                  })
                : null != c && c.id !== l.id
                  ? (0, i.jsx)(em.A, {
                        message: t,
                        channel: n,
                        compact: r,
                        usernameHook: o,
                        otherUser: c,
                        otherUsernameHook: u,
                    })
                  : (0, i.jsx)(em.A, { message: t, channel: n, usernameHook: o });
        },
        [eD.lAJ.CALL]: function (e) {
            let { message: t, compact: n, channel: l } = e,
                { id: a, author: c } = t,
                u = j.default.getId(),
                d = t.getChannelId(),
                _ = (0, s.bG)([k.A], () => k.A.isCallActive(d, a), [d, a]),
                E = (0, s.bG)([V.A], () => V.A.getVoiceState(eD.ME, u)),
                A = !_ && null != t.call && !t.call.participants.includes(u),
                m = _ && (null == E || E.channelId !== d),
                I = r.useCallback(() => o.default.selectVoiceChannel(d), [d]),
                T = (0, Z.P)({
                    user: c,
                    channelId: d,
                    guildId: l.guild_id,
                    messageId: t.id,
                    enableDisplayNameStyles: !0,
                });
            return (0, i.jsx)(ee.A, {
                compact: n,
                message: t,
                missed: A,
                joinable: m,
                usernameHook: T,
                onClickJoinCall: I,
            });
        },
        [eD.lAJ.CHANNEL_NAME_CHANGE]: function (e) {
            let { message: t, compact: n, channel: r } = e,
                { author: s } = t,
                l = t.getChannelId(),
                a = (0, Z.P)({ user: s, channelId: l, guildId: r.guild_id, messageId: t.id });
            return (0, i.jsx)(er.A, { compact: n, message: t, usernameHook: a, isForumPost: r.isForumPost() });
        },
        [eD.lAJ.CHANNEL_ICON_CHANGE]: function (e) {
            let { message: t, compact: n, channel: r } = e,
                { author: s } = t,
                l = t.getChannelId(),
                a = (0, Z.P)({ user: s, channelId: l, guildId: r.guild_id, messageId: t.id });
            return (0, i.jsx)(en.A, { compact: n, message: t, usernameHook: a });
        },
        [eD.lAJ.CHANNEL_PINNED_MESSAGE]: function (e) {
            let { message: t, compact: n, channel: s } = e,
                { author: l } = t,
                a = t.getChannelId(),
                c = r.useCallback(() => {
                    if (w.A.getChannelId() !== a) {
                        let e = b.A.getChannel(a);
                        null != e && (0, M.uh)(e.guild_id, e.id);
                    }
                    setTimeout(() => X._.dispatch(eD.jej.TOGGLE_CHANNEL_PINS), 0);
                }, [a]),
                o = (0, Z.P)({ user: l, channelId: a, guildId: s.guild_id, messageId: t.id });
            return (0, i.jsx)(es.A, { message: t, compact: n, usernameHook: o, onClickPins: __OVERLAY__ ? null : c });
        },
        [eD.lAJ.USER_JOIN]: function (e) {
            let { message: t, compact: n, channel: r } = e,
                { author: s } = t,
                l = t.getChannelId(),
                a = (0, Z.P)({ user: s, channelId: l, guildId: r.guild_id, messageId: t.id });
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(ex.A, { message: t, compact: n, usernameHook: a }),
                    (0, i.jsx)(y.I, { channel: r, message: t }),
                ],
            });
        },
        [eD.lAJ.GUILD_BOOST]: eL,
        [eD.lAJ.GUILD_BOOST_TIER_1]: eL,
        [eD.lAJ.GUILD_BOOST_TIER_2]: eL,
        [eD.lAJ.GUILD_BOOST_TIER_3]: eL,
        [eD.lAJ.CHANNEL_FOLLOW_ADD]: function (e) {
            let { message: t, compact: n, channel: r } = e,
                { author: s } = t,
                l = t.getChannelId(),
                a = (0, Z.P)({ user: s, channelId: l, guildId: r.guild_id, messageId: t.id });
            return (0, i.jsx)(et.A, { message: t, compact: n, usernameHook: a });
        },
        [eD.lAJ.GUILD_STREAM]: function (e) {
            let { message: t, compact: n, channel: l } = e,
                {
                    author: a,
                    author: { id: c },
                    messageReference: o,
                } = t,
                d = t.getChannelId(),
                _ = (0, s.bG)([F.A], () => F.A.findActivity(c, (e) => e.type === eD.$pd.PLAYING), [c]),
                E = (0, s.bG)([b.A], () => (null != o ? b.A.getChannel(o.channel_id) : null), [o]),
                A = o?.guild_id,
                m = (0, Z.P)({ user: a, channelId: d, guildId: l.guild_id, messageId: t.id }),
                I = r.useCallback(() => {
                    null != E &&
                        null != A &&
                        (0, u.Nl)({ streamType: eU.U4.GUILD, ownerId: c, channelId: E.id, guildId: A });
                }, [c, E, A]);
            return null != o && null != E && null != o.guild_id
                ? (0, i.jsx)(e_.A, {
                      message: t,
                      compact: n,
                      channel: E,
                      playingActivity: _,
                      onJoinStream: I,
                      usernameHook: m,
                  })
                : null;
        },
        [eD.lAJ.GUILD_DISCOVERY_DISQUALIFIED]: function (e) {
            let { message: t, compact: n } = e,
                r = t.getChannelId(),
                l = (0, s.bG)([b.A], () => b.A.getChannel(r), [r]),
                a = null != l ? l.getGuildId() : null;
            return (0, i.jsx)(eo.Rk, {
                message: t,
                compact: n,
                onClick: () => {
                    null != a && p.A.open(a, eD.BEX.ACCESS, eD.nd0.ACCESS_DISCOVERABLE);
                },
            });
        },
        [eD.lAJ.GUILD_DISCOVERY_REQUALIFIED]: eo.wj,
        [eD.lAJ.GUILD_DISCOVERY_GRACE_PERIOD_INITIAL_WARNING]: eo.Cq,
        [eD.lAJ.GUILD_DISCOVERY_GRACE_PERIOD_FINAL_WARNING]: eo.If,
        [eD.lAJ.THREAD_CREATED]: function (e) {
            let { message: t, channel: s, compact: c } = e,
                o = (0, Z.P)({ user: t.author, channelId: t.channel_id, guildId: s.guild_id, messageId: t.id }),
                u = r.useCallback(
                    async (e) => {
                        let n = t.messageReference?.channel_id;
                        if (null != n) {
                            await L.A.loadThread(n);
                            let t = b.A.getChannel(n);
                            null != t && (0, v.JA)(t, e.shiftKey);
                        }
                    },
                    [t],
                ),
                d = r.useCallback(() => {
                    (0, l.mMO)(async () => {
                        let { default: e } = await Promise.all([n.e("34160"), n.e("95725")]).then(n.bind(n, 126768));
                        return (t) => (0, i.jsx)(e, { channel: s, ...t });
                    });
                }, [s]),
                _ = r.useCallback(
                    (e) => {
                        let r = b.A.getChannel(t.messageReference?.channel_id);
                        null != r &&
                            (0, a.L3)(e, async () => {
                                let { default: e } = await Promise.all([n.e("94989"), n.e("1798")]).then(
                                    n.bind(n, 44536),
                                );
                                return (t) => (0, i.jsx)(e, { ...t, channel: r });
                            });
                    },
                    [t],
                );
            return (0, i.jsx)(eC.A, {
                message: t,
                compact: c,
                usernameHook: o,
                onClickThread: u,
                onClickViewThreads: d,
                onContextMenuThread: _,
            });
        },
        [eD.lAJ.THREAD_STARTER_MESSAGE]: eR.A,
        [eD.lAJ.GUILD_INVITE_REMINDER]: void 0,
        [eD.lAJ.AUTO_MODERATION_ACTION]: function (e) {
            let { message: t, compact: n, channel: r } = e;
            return (0, A.ER)(t) ? (0, i.jsx)($.A, { message: t, compact: n, channel: r }) : null;
        },
        [eD.lAJ.GUILD_INCIDENT_ALERT_MODE_ENABLED]: ev,
        [eD.lAJ.GUILD_INCIDENT_ALERT_MODE_DISABLED]: ev,
        [eD.lAJ.GUILD_INCIDENT_REPORT_RAID]: function (e) {
            let { message: t, compact: n, channel: r } = e,
                s = (0, Z.P)({ user: t.author, channelId: r.id, guildId: r.guild_id, messageId: t.id });
            return (0, i.jsx)(ed.A, { message: t, compact: n, channel: r, usernameHook: s });
        },
        [eD.lAJ.GUILD_INCIDENT_REPORT_FALSE_ALARM]: function (e) {
            let { message: t, compact: n, channel: r } = e,
                s = (0, Z.P)({ user: t.author, channelId: r.id, guildId: r.guild_id, messageId: t.id });
            return (0, i.jsx)(eu.A, { message: t, compact: n, channel: r, usernameHook: s });
        },
        [eD.lAJ.ROLE_SUBSCRIPTION_PURCHASE]: g.A,
        [eD.lAJ.PURCHASE_NOTIFICATION]: function (e) {
            let { message: t, channel: n, compact: r } = e;
            return t.purchaseNotification?.type === d.hE.GUILD_PRODUCT
                ? (0, i.jsx)(T.A, { message: t, channel: n, compact: r })
                : null;
        },
        [eD.lAJ.INTERACTION_PREMIUM_UPSELL]: void 0,
        [eD.lAJ.STAGE_START]: function (e) {
            let { message: t, channel: n, compact: r } = e,
                l = (0, Z.P)({ user: t.author, channelId: n.id, guildId: n.guild_id, messageId: t.id }),
                a = (0, s.bG)([N.Ay], () => N.Ay.getActiveEventByChannel(n.id), [n.id]);
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(eN.A, { message: t, compact: r, usernameHook: l }),
                    null != a && a.name === t.content ? (0, i.jsx)(f.A, { code: `${n.guild_id}-${a.id}` }) : null,
                ],
            });
        },
        [eD.lAJ.STAGE_END]: function (e) {
            let { message: t, channel: n, compact: r } = e,
                s = (0, Z.P)({ user: t.author, channelId: n.id, guildId: n.guild_id, messageId: t.id });
            return (0, i.jsx)(eI.A, { message: t, compact: r, usernameHook: s });
        },
        [eD.lAJ.STAGE_SPEAKER]: function (e) {
            let { message: t, channel: n, compact: r } = e,
                s = (0, Z.P)({ user: t.author, channelId: n.id, guildId: n.guild_id, messageId: t.id });
            return (0, i.jsx)(eg.A, { message: t, compact: r, usernameHook: s });
        },
        [eD.lAJ.STAGE_RAISE_HAND]: function (e) {
            let { message: t, channel: n, compact: r } = e,
                a = (0, Z.P)({ user: t.author, channelId: n.id, guildId: n.guild_id, messageId: t.id }),
                o = (0, s.bG)([H.A], () => H.A.can(eD.xBc.MUTE_MEMBERS, n)),
                u = (0, s.bG)([U.A], () => U.A.getParticipant(n.id, t.author.id)),
                d =
                    new Date(Y.default.extractTimestamp(t.id)).toISOString() ===
                    new Date(u?.voiceState?.requestToSpeakTimestamp ?? 0).toISOString(),
                _ = o && u?.rtsState === P.zF.REQUESTED_TO_SPEAK && d;
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(eT.A, { message: t, compact: r, usernameHook: a }),
                    _
                        ? (0, i.jsx)(l.Button, {
                              variant: "secondary",
                              onClick: () => {
                                  (0, D.lL)(n, t.author.id, !1), c.A.deleteMessage(n.id, t.id, !0);
                              },
                              text: eP.intl.string(eP.t.f0T7hI),
                              icon: l.LvC,
                          })
                        : null,
                ],
            });
        },
        [eD.lAJ.STAGE_TOPIC]: function (e) {
            let { message: t, channel: n, compact: r } = e,
                s = (0, Z.P)({ user: t.author, channelId: n.id, guildId: n.guild_id, messageId: t.id });
            return (0, i.jsx)(ef.A, { message: t, compact: r, usernameHook: s });
        },
        [eD.lAJ.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION]: R.A,
        [eD.lAJ.PRIVATE_CHANNEL_INTEGRATION_ADDED]: x.R,
        [eD.lAJ.PRIVATE_CHANNEL_INTEGRATION_REMOVED]: x.d,
        [eD.lAJ.PREMIUM_REFERRAL]: function (e) {
            let { message: t, compact: n } = e;
            return (0, i.jsx)(S.A, {
                userTrialOfferId: t.referralTrialOfferId,
                canRenderReferralEmbed: !0,
                compact: n,
            });
        },
        [eD.lAJ.GUILD_DEADCHAT_REVIVE_PROMPT]: void 0,
        [eD.lAJ.CUSTOM_GIFT]: void 0,
        [eD.lAJ.GUILD_GAMING_STATS_PROMPT]: void 0,
        [eD.lAJ.VOICE_HANGOUT_INVITE]: void 0,
        [eD.lAJ.POLL_RESULT]: C.A,
        [eD.lAJ.CHANGELOG]: void 0,
        [eD.lAJ.NITRO_NOTIFICATION]: function (e) {
            let { message: t, channel: n } = e;
            return (0, i.jsx)(Q.A, { message: t, channel: n });
        },
        [eD.lAJ.CHANNEL_LINKED_TO_LOBBY]: function (e) {
            let { message: t, channel: n, compact: r } = e;
            return (0, i.jsx)(ei.A, { message: t, channel: n, compact: r });
        },
        [eD.lAJ.GIFTING_PROMPT]: function (e) {
            let { message: t, channel: n } = e,
                r = t.giftingPrompt,
                l = (0, s.bG)([B.default], () => B.default.getUser(r?.recipientUserId));
            return null == r || null == l
                ? null
                : (0, i.jsx)(J.A, { giftIntentType: r.giftIntentType, recipientUser: l, channel: n });
        },
        [eD.lAJ.IN_GAME_MESSAGE_NUX]: function (e) {
            let { message: t, channel: n, compact: r } = e;
            return (0, i.jsx)(eE.A, { message: t, channel: n, author: t.author, compact: r });
        },
        [eD.lAJ.GUILD_JOIN_REQUEST_ACCEPT_NOTIFICATION]: I.Z_,
        [eD.lAJ.GUILD_JOIN_REQUEST_REJECT_NOTIFICATION]: I.QN,
        [eD.lAJ.GUILD_JOIN_REQUEST_WITHDRAWN_NOTIFICATION]: I.ez,
        [eD.lAJ.HD_STREAMING_UPGRADED]: void 0,
        [eD.lAJ.EMOJI_ADDED]: function (e) {
            let { message: t, channel: n, compact: r } = e,
                s = (0, Z.P)({ user: t.author, channelId: n.id, guildId: n.guild_id, messageId: t.id });
            return (0, i.jsx)(E._W, { message: t, channel: n, compact: r, usernameHook: s });
        },
        [eD.lAJ.CHAT_WALLPAPER_SET]: void 0,
        [eD.lAJ.CHAT_WALLPAPER_REMOVED]: void 0,
        [eD.lAJ.REPORT_TO_MOD_BAN_USER]: O.A,
        [eD.lAJ.REPORT_TO_MOD_KICK_USER]: O.A,
        [eD.lAJ.REPORT_TO_MOD_TIMEOUT_USER]: O.A,
        [eD.lAJ.REPORT_TO_MOD_DELETED_MESSAGE]: O.A,
        [eD.lAJ.REPORT_TO_MOD_CLOSED_REPORT]: O.A,
        [eD.lAJ.PREMIUM_GROUP_INVITE]: function (e) {
            let { message: t, channel: n, compact: r } = e;
            return (0, i.jsx)(h.A, { message: t, channel: n, compact: r });
        },
        [eD.lAJ.VOICE_SESSION]: function (e) {
            let { message: t, channel: n, compact: r } = e;
            return (0, i.jsx)(eM.A, { message: t, channel: n, compact: r });
        },
        [eD.lAJ.GUILD_BOOST_UPSELL]: function (e) {
            let { message: t, channel: n } = e;
            return null == t.boostingPrompt ? null : (0, i.jsx)(ec.A, { boostingPrompt: t.boostingPrompt, channel: n });
        },
        [eD.lAJ.FRIEND_REQUEST_ACCEPTED]: function (e) {
            let { message: t, channel: n, compact: r } = e;
            return (0, i.jsx)(el.A, { message: t, channel: n, compact: r });
        },
        68: function (e) {
            let { message: t, compact: n } = e;
            return (0, i.jsx)(ep.A, { message: t, compact: n });
        },
    }),
    ej = r.memo(function (e) {
        let { message: t, channel: n, compact: r, disableInteraction: s } = e,
            { type: l } = t,
            a = ey[l];
        if (null == a) {
            var c;
            return (
                (c = Error(`unknown message type ${t.type}`)),
                K.A.captureException(c),
                new _.A("SystemMessage").error("", c),
                null
            );
        }
        return (0, i.jsx)(z.Ay, {
            message: t,
            content: (0, W.Ay)(t).content,
            compact: r ?? !1,
            children: (0, i.jsx)(a, { message: t, channel: n, compact: r, disableInteraction: s }),
        });
    });
