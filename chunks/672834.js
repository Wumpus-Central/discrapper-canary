n.d(t, { A: () => ey });
var i = n(627968),
    l = n(64700),
    a = n(311907),
    r = n(397927),
    s = n(442433),
    o = n(843472),
    c = n(956793),
    d = n(401843),
    u = n(155718),
    _ = n(626584),
    m = n(659859),
    A = n(785823),
    E = n(509536),
    I = n(615179),
    T = n(120120),
    f = n(379114),
    N = n(698441),
    C = n(484724),
    g = n(997509),
    h = n(850131),
    p = n(31051),
    x = n(659203),
    R = n(446028),
    S = n(302291),
    O = n(282224),
    M = n(976860),
    D = n(849736),
    P = n(63995),
    U = n(105530),
    v = n(353202),
    L = n(747926),
    j = n(336589),
    y = n(961350),
    b = n(470710),
    k = n(734057),
    G = n(71393),
    F = n(576705),
    B = n(290863),
    H = n(309010),
    V = n(287809),
    w = n(977997),
    X = n(203982),
    q = n(562153),
    K = n(728458),
    z = n(661191),
    Y = n(465364),
    J = n(877923),
    W = n(291812),
    Q = n(898401),
    Z = n(447215),
    $ = n(97896),
    ee = n(939344),
    et = n(451483),
    en = n(855532),
    ei = n(724382),
    el = n(333782),
    ea = n(441412),
    er = n(624945),
    es = n(986533),
    eo = n(394388),
    ec = n(320381),
    ed = n(749795),
    eu = n(821241),
    e_ = n(541171),
    em = n(229673),
    eA = n(494086),
    eE = n(734771),
    eI = n(753073),
    eT = n(640289),
    ef = n(293657),
    eN = n(269802),
    eC = n(576471),
    eg = n(808821),
    eh = n(933762),
    ep = n(840233),
    ex = n(536030),
    eR = n(912746),
    eS = n(817253),
    eO = n(911726),
    eM = n(904854),
    eD = n(652215),
    eP = n(502075),
    eU = n(985018);
function ev(e) {
    let { message: t, channel: n, compact: r } = e,
        { author: s } = t,
        { guild_id: o } = n,
        c = t.getChannelId(),
        d = (0, a.bG)([G.A], () => G.A.getGuild(o), [o]),
        u = l.useCallback(() => {
            null != d &&
                (0, E.K4)({
                    guildId: d.id,
                    location: { section: eD.JJy.CHANNEL_TEXT_AREA, object: eD.ZSU.BOOST_ANNOUNCEMENT_UPSELL },
                });
        }, [d]),
        _ = (0, Z.P)({ user: s, channelId: c, guildId: n.guild_id, messageId: t.id, stopPropagation: !0 });
    return (0, i.jsx)(eO.Ay, { message: t, compact: r, guild: d, usernameHook: _, onClickMessage: u });
}
function eL(e) {
    let { message: t, compact: n, channel: l } = e,
        a = (0, Z.P)({ user: t.author, channelId: l.id, guildId: l.guild_id, messageId: t.id });
    return (0, i.jsx)(es.A, { message: t, compact: n, usernameHook: a });
}
let ej = Object.freeze({
        [eD.lAJ.DEFAULT]: void 0,
        [eD.lAJ.REPLY]: void 0,
        [eD.lAJ.CHAT_INPUT_COMMAND]: void 0,
        [eD.lAJ.CONTEXT_MENU_COMMAND]: void 0,
        [eD.lAJ.RECIPIENT_ADD]: function (e) {
            let { message: t, channel: n, compact: l } = e,
                { author: r } = t,
                s = t.getChannelId(),
                o = (0, a.bG)([V.default], () => V.default.getUser(t.mentions[0]), [t]),
                c = q.Ay.getName(null, s, o),
                d = (0, Z.P)({ user: r, channelId: s, guildId: n.guild_id, messageId: t.id }),
                u = (0, Z.P)({ user: o, channelId: s, guildId: n.guild_id, messageId: t.id });
            return n.isThread()
                ? (0, i.jsx)(ep.A, {
                      message: t,
                      channel: n,
                      compact: l,
                      targetUser: o,
                      actorUsernameHook: d,
                      targetUsernameHook: u,
                  })
                : (0, i.jsx)(eA.A, { message: t, compact: l, otherUsername: c, usernameHook: d, otherUsernameHook: u });
        },
        [eD.lAJ.RECIPIENT_REMOVE]: function (e) {
            let { message: t, channel: n, compact: l } = e,
                { author: r } = t,
                s = t.getChannelId(),
                o = (0, a.bG)([V.default], () => V.default.getUser(t.mentions[0]), [t]),
                c = (0, Z.P)({ user: r, channelId: s, guildId: n.guild_id, messageId: t.id }),
                d = (0, Z.P)({ user: o, channelId: s, guildId: n.guild_id, messageId: t.id });
            return n.isThread()
                ? (0, i.jsx)(ex.A, {
                      message: t,
                      channel: n,
                      compact: l,
                      targetUser: o,
                      actorUsernameHook: c,
                      targetUsernameHook: d,
                  })
                : null != o && o.id !== r.id
                  ? (0, i.jsx)(eE.A, {
                        message: t,
                        channel: n,
                        compact: l,
                        usernameHook: c,
                        otherUser: o,
                        otherUsernameHook: d,
                    })
                  : (0, i.jsx)(eE.A, { message: t, channel: n, usernameHook: c });
        },
        [eD.lAJ.CALL]: function (e) {
            let { message: t, compact: n, channel: r } = e,
                { id: s, author: o } = t,
                d = y.default.getId(),
                u = t.getChannelId(),
                _ = (0, a.bG)([b.A], () => b.A.isCallActive(u, s), [u, s]),
                m = (0, a.bG)([w.A], () => w.A.getVoiceState(eD.ME, d)),
                A = !_ && null != t.call && !t.call.participants.includes(d),
                E = _ && (null == m || m.channelId !== u),
                I = l.useCallback(() => c.default.selectVoiceChannel(u), [u]),
                T = (0, Z.P)({
                    user: o,
                    channelId: u,
                    guildId: r.guild_id,
                    messageId: t.id,
                    enableDisplayNameStyles: !0,
                });
            return (0, i.jsx)(ee.A, {
                compact: n,
                message: t,
                missed: A,
                joinable: E,
                usernameHook: T,
                onClickJoinCall: I,
            });
        },
        [eD.lAJ.CHANNEL_NAME_CHANGE]: function (e) {
            let { message: t, compact: n, channel: l } = e,
                { author: a } = t,
                r = t.getChannelId(),
                s = (0, Z.P)({ user: a, channelId: r, guildId: l.guild_id, messageId: t.id });
            return (0, i.jsx)(el.A, { compact: n, message: t, usernameHook: s, isForumPost: l.isForumPost() });
        },
        [eD.lAJ.CHANNEL_ICON_CHANGE]: function (e) {
            let { message: t, compact: n, channel: l } = e,
                { author: a } = t,
                r = t.getChannelId(),
                s = (0, Z.P)({ user: a, channelId: r, guildId: l.guild_id, messageId: t.id });
            return (0, i.jsx)(en.A, { compact: n, message: t, usernameHook: s });
        },
        [eD.lAJ.CHANNEL_PINNED_MESSAGE]: function (e) {
            let { message: t, compact: n, channel: a } = e,
                { author: r } = t,
                s = t.getChannelId(),
                o = l.useCallback(() => {
                    if (H.A.getChannelId() !== s) {
                        let e = k.A.getChannel(s);
                        null != e && (0, M.uh)(e.guild_id, e.id);
                    }
                    setTimeout(() => X._.dispatch(eD.jej.TOGGLE_CHANNEL_PINS), 0);
                }, [s]),
                c = (0, Z.P)({ user: r, channelId: s, guildId: a.guild_id, messageId: t.id });
            return (0, i.jsx)(ea.A, { message: t, compact: n, usernameHook: c, onClickPins: __OVERLAY__ ? null : o });
        },
        [eD.lAJ.USER_JOIN]: function (e) {
            let { message: t, compact: n, channel: l } = e,
                { author: a } = t,
                r = t.getChannelId(),
                s = (0, Z.P)({ user: a, channelId: r, guildId: l.guild_id, messageId: t.id });
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(eS.A, { message: t, compact: n, usernameHook: s }),
                    (0, i.jsx)(j.I, { channel: l, message: t }),
                ],
            });
        },
        [eD.lAJ.GUILD_BOOST]: ev,
        [eD.lAJ.GUILD_BOOST_TIER_1]: ev,
        [eD.lAJ.GUILD_BOOST_TIER_2]: ev,
        [eD.lAJ.GUILD_BOOST_TIER_3]: ev,
        [eD.lAJ.CHANNEL_FOLLOW_ADD]: function (e) {
            let { message: t, compact: n, channel: l } = e,
                { author: a } = t,
                r = t.getChannelId(),
                s = (0, Z.P)({ user: a, channelId: r, guildId: l.guild_id, messageId: t.id });
            return (0, i.jsx)(et.A, { message: t, compact: n, usernameHook: s });
        },
        [eD.lAJ.GUILD_STREAM]: function (e) {
            let { message: t, compact: n, channel: r } = e,
                {
                    author: s,
                    author: { id: o },
                    messageReference: c,
                } = t,
                u = t.getChannelId(),
                _ = (0, a.bG)([B.A], () => B.A.findActivity(o, (e) => e.type === eD.$pd.PLAYING), [o]),
                m = (0, a.bG)([k.A], () => (null != c ? k.A.getChannel(c.channel_id) : null), [c]),
                A = c?.guild_id,
                E = (0, Z.P)({ user: s, channelId: u, guildId: r.guild_id, messageId: t.id }),
                I = l.useCallback(() => {
                    null != m &&
                        null != A &&
                        (0, d.Nl)({ streamType: eP.U4.GUILD, ownerId: o, channelId: m.id, guildId: A });
                }, [o, m, A]);
            return null != c && null != m && null != c.guild_id
                ? (0, i.jsx)(e_.A, {
                      message: t,
                      compact: n,
                      channel: m,
                      playingActivity: _,
                      onJoinStream: I,
                      usernameHook: E,
                  })
                : null;
        },
        [eD.lAJ.GUILD_DISCOVERY_DISQUALIFIED]: function (e) {
            let { message: t, compact: n } = e,
                l = t.getChannelId(),
                r = (0, a.bG)([k.A], () => k.A.getChannel(l), [l]),
                s = null != r ? r.getGuildId() : null;
            return (0, i.jsx)(ec.Rk, {
                message: t,
                compact: n,
                onClick: () => {
                    null != s && g.A.open(s, eD.BEX.ACCESS, eD.nd0.ACCESS_DISCOVERABLE);
                },
            });
        },
        [eD.lAJ.GUILD_DISCOVERY_REQUALIFIED]: ec.wj,
        [eD.lAJ.GUILD_DISCOVERY_GRACE_PERIOD_INITIAL_WARNING]: ec.Cq,
        [eD.lAJ.GUILD_DISCOVERY_GRACE_PERIOD_FINAL_WARNING]: ec.If,
        [eD.lAJ.THREAD_CREATED]: function (e) {
            let { message: t, channel: a, compact: o } = e,
                c = (0, Z.P)({ user: t.author, channelId: t.channel_id, guildId: a.guild_id, messageId: t.id }),
                d = l.useCallback(
                    async (e) => {
                        let n = t.messageReference?.channel_id;
                        if (null != n) {
                            await v.A.loadThread(n);
                            let t = k.A.getChannel(n);
                            null != t && (0, L.JA)(t, e.shiftKey);
                        }
                    },
                    [t],
                ),
                u = l.useCallback(() => {
                    (0, r.mMO)(async () => {
                        let { default: e } = await Promise.all([n.e("34160"), n.e("95725")]).then(n.bind(n, 126768));
                        return (t) => (0, i.jsx)(e, { channel: a, ...t });
                    });
                }, [a]),
                _ = l.useCallback(
                    (e) => {
                        let l = k.A.getChannel(t.messageReference?.channel_id);
                        null != l &&
                            (0, s.L3)(e, async () => {
                                let { default: e } = await Promise.all([n.e("94989"), n.e("79417")]).then(
                                    n.bind(n, 44536),
                                );
                                return (t) => (0, i.jsx)(e, { ...t, channel: l });
                            });
                    },
                    [t],
                );
            return (0, i.jsx)(eh.A, {
                message: t,
                compact: o,
                usernameHook: c,
                onClickThread: d,
                onClickViewThreads: u,
                onContextMenuThread: _,
            });
        },
        [eD.lAJ.THREAD_STARTER_MESSAGE]: eR.A,
        [eD.lAJ.GUILD_INVITE_REMINDER]: void 0,
        [eD.lAJ.AUTO_MODERATION_ACTION]: function (e) {
            let { message: t, compact: n, channel: l } = e;
            return (0, A.ER)(t) ? (0, i.jsx)($.A, { message: t, compact: n, channel: l }) : null;
        },
        [eD.lAJ.GUILD_INCIDENT_ALERT_MODE_ENABLED]: eL,
        [eD.lAJ.GUILD_INCIDENT_ALERT_MODE_DISABLED]: eL,
        [eD.lAJ.GUILD_INCIDENT_REPORT_RAID]: function (e) {
            let { message: t, compact: n, channel: l } = e,
                a = (0, Z.P)({ user: t.author, channelId: l.id, guildId: l.guild_id, messageId: t.id });
            return (0, i.jsx)(eu.A, { message: t, compact: n, channel: l, usernameHook: a });
        },
        [eD.lAJ.GUILD_INCIDENT_REPORT_FALSE_ALARM]: function (e) {
            let { message: t, compact: n, channel: l } = e,
                a = (0, Z.P)({ user: t.author, channelId: l.id, guildId: l.guild_id, messageId: t.id });
            return (0, i.jsx)(ed.A, { message: t, compact: n, channel: l, usernameHook: a });
        },
        [eD.lAJ.ROLE_SUBSCRIPTION_PURCHASE]: f.A,
        [eD.lAJ.PURCHASE_NOTIFICATION]: function (e) {
            let { message: t, channel: n, compact: l } = e;
            return t.purchaseNotification?.type === u.hE.GUILD_PRODUCT
                ? (0, i.jsx)(T.A, { message: t, channel: n, compact: l })
                : null;
        },
        [eD.lAJ.INTERACTION_PREMIUM_UPSELL]: void 0,
        [eD.lAJ.STAGE_START]: function (e) {
            let { message: t, channel: n, compact: l } = e,
                r = (0, Z.P)({ user: t.author, channelId: n.id, guildId: n.guild_id, messageId: t.id }),
                s = (0, a.bG)([N.Ay], () => N.Ay.getActiveEventByChannel(n.id), [n.id]);
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(eN.A, { message: t, compact: l, usernameHook: r }),
                    null != s && s.name === t.content ? (0, i.jsx)(C.A, { code: `${n.guild_id}-${s.id}` }) : null,
                ],
            });
        },
        [eD.lAJ.STAGE_END]: function (e) {
            let { message: t, channel: n, compact: l } = e,
                a = (0, Z.P)({ user: t.author, channelId: n.id, guildId: n.guild_id, messageId: t.id });
            return (0, i.jsx)(eI.A, { message: t, compact: l, usernameHook: a });
        },
        [eD.lAJ.STAGE_SPEAKER]: function (e) {
            let { message: t, channel: n, compact: l } = e,
                a = (0, Z.P)({ user: t.author, channelId: n.id, guildId: n.guild_id, messageId: t.id });
            return (0, i.jsx)(ef.A, { message: t, compact: l, usernameHook: a });
        },
        [eD.lAJ.STAGE_RAISE_HAND]: function (e) {
            let { message: t, channel: n, compact: l } = e,
                s = (0, Z.P)({ user: t.author, channelId: n.id, guildId: n.guild_id, messageId: t.id }),
                c = (0, a.bG)([F.A], () => F.A.can(eD.xBc.MUTE_MEMBERS, n)),
                d = (0, a.bG)([P.A], () => P.A.getParticipant(n.id, t.author.id)),
                u =
                    new Date(z.default.extractTimestamp(t.id)).toISOString() ===
                    new Date(d?.voiceState?.requestToSpeakTimestamp ?? 0).toISOString(),
                _ = c && d?.rtsState === U.zF.REQUESTED_TO_SPEAK && u;
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(eT.A, { message: t, compact: l, usernameHook: s }),
                    _
                        ? (0, i.jsx)(r.Button, {
                              variant: "secondary",
                              onClick: () => {
                                  (0, D.lL)(n, t.author.id, !1), o.A.deleteMessage(n.id, t.id, !0);
                              },
                              text: eU.intl.string(eU.t.f0T7hI),
                              icon: r.LvC,
                          })
                        : null,
                ],
            });
        },
        [eD.lAJ.STAGE_TOPIC]: function (e) {
            let { message: t, channel: n, compact: l } = e,
                a = (0, Z.P)({ user: t.author, channelId: n.id, guildId: n.guild_id, messageId: t.id });
            return (0, i.jsx)(eC.A, { message: t, compact: l, usernameHook: a });
        },
        [eD.lAJ.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION]: R.A,
        [eD.lAJ.PRIVATE_CHANNEL_INTEGRATION_ADDED]: S.R,
        [eD.lAJ.PRIVATE_CHANNEL_INTEGRATION_REMOVED]: S.d,
        [eD.lAJ.PREMIUM_REFERRAL]: function (e) {
            let { message: t, compact: n } = e;
            return (0, i.jsx)(x.A, {
                userTrialOfferId: t.referralTrialOfferId,
                canRenderReferralEmbed: !0,
                compact: n,
            });
        },
        [eD.lAJ.GUILD_DEADCHAT_REVIVE_PROMPT]: void 0,
        [eD.lAJ.CUSTOM_GIFT]: void 0,
        [eD.lAJ.GUILD_GAMING_STATS_PROMPT]: void 0,
        [eD.lAJ.VOICE_HANGOUT_INVITE]: void 0,
        [eD.lAJ.POLL_RESULT]: h.A,
        [eD.lAJ.CHANGELOG]: void 0,
        [eD.lAJ.NITRO_NOTIFICATION]: function (e) {
            let { message: t, channel: n } = e;
            return (0, i.jsx)(Q.A, { message: t, channel: n });
        },
        [eD.lAJ.CHANNEL_LINKED_TO_LOBBY]: function (e) {
            let { message: t, channel: n, compact: l } = e;
            return (0, i.jsx)(ei.A, { message: t, channel: n, compact: l });
        },
        [eD.lAJ.GIFTING_PROMPT]: function (e) {
            let { message: t, channel: n } = e,
                l = t.giftingPrompt,
                r = (0, a.bG)([V.default], () => V.default.getUser(l?.recipientUserId));
            return null == l || null == r
                ? null
                : (0, i.jsx)(J.A, { giftIntentType: l.giftIntentType, recipientUser: r, channel: n });
        },
        [eD.lAJ.IN_GAME_MESSAGE_NUX]: function (e) {
            let { message: t, channel: n, compact: l } = e;
            return (0, i.jsx)(em.A, { message: t, channel: n, author: t.author, compact: l });
        },
        [eD.lAJ.GUILD_JOIN_REQUEST_ACCEPT_NOTIFICATION]: I.Z_,
        [eD.lAJ.GUILD_JOIN_REQUEST_REJECT_NOTIFICATION]: I.QN,
        [eD.lAJ.GUILD_JOIN_REQUEST_WITHDRAWN_NOTIFICATION]: I.ez,
        [eD.lAJ.HD_STREAMING_UPGRADED]: void 0,
        [eD.lAJ.EMOJI_ADDED]: function (e) {
            let { message: t, channel: n, compact: l } = e,
                a = (0, Z.P)({ user: t.author, channelId: n.id, guildId: n.guild_id, messageId: t.id });
            return (0, i.jsx)(m._W, { message: t, channel: n, compact: l, usernameHook: a });
        },
        [eD.lAJ.CHAT_WALLPAPER_SET]: void 0,
        [eD.lAJ.CHAT_WALLPAPER_REMOVED]: void 0,
        [eD.lAJ.REPORT_TO_MOD_BAN_USER]: O.A,
        [eD.lAJ.REPORT_TO_MOD_KICK_USER]: O.A,
        [eD.lAJ.REPORT_TO_MOD_TIMEOUT_USER]: O.A,
        [eD.lAJ.REPORT_TO_MOD_DELETED_MESSAGE]: O.A,
        [eD.lAJ.REPORT_TO_MOD_CLOSED_REPORT]: O.A,
        [eD.lAJ.PREMIUM_GROUP_INVITE]: function (e) {
            let { message: t, channel: n, compact: l } = e;
            return (0, i.jsx)(p.A, { message: t, channel: n, compact: l });
        },
        [eD.lAJ.VOICE_SESSION]: function (e) {
            let { message: t, channel: n, compact: l } = e;
            return (0, i.jsx)(eM.A, { message: t, channel: n, compact: l });
        },
        [eD.lAJ.GUILD_BOOST_UPSELL]: function (e) {
            let { message: t, channel: n } = e;
            return null == t.boostingPrompt ? null : (0, i.jsx)(eo.A, { boostingPrompt: t.boostingPrompt, channel: n });
        },
        [eD.lAJ.FRIEND_REQUEST_ACCEPTED]: function (e) {
            let { message: t, channel: n, compact: l } = e;
            return (0, i.jsx)(er.A, { message: t, channel: n, compact: l });
        },
        68: function (e) {
            let { message: t, compact: n } = e;
            return (0, i.jsx)(eg.A, { message: t, compact: n });
        },
    }),
    ey = l.memo(function (e) {
        let { message: t, channel: n, compact: l, disableInteraction: a } = e,
            { type: r } = t,
            s = ej[r];
        if (null == s) {
            var o;
            return (
                (o = Error(`unknown message type ${t.type}`)),
                K.A.captureException(o),
                new _.A("SystemMessage").error("", o),
                null
            );
        }
        return (0, i.jsx)(W.Ay, {
            message: t,
            content: (0, Y.Ay)(t).content,
            compact: l ?? !1,
            children: (0, i.jsx)(s, { message: t, channel: n, compact: l, disableInteraction: a }),
        });
    });
