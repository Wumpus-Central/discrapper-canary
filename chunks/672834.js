n.d(t, { A: () => ej });
var i = n(627968),
    a = n(64700),
    l = n(311907),
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
    g = n(484724),
    C = n(997509),
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
    w = n(287809),
    V = n(977997),
    X = n(203982),
    q = n(562153),
    K = n(728458),
    Y = n(661191),
    z = n(465364),
    W = n(877923),
    J = n(291812),
    Q = n(898401),
    Z = n(447215),
    $ = n(97896),
    ee = n(939344),
    et = n(451483),
    en = n(855532),
    ei = n(724382),
    ea = n(333782),
    el = n(441412),
    er = n(986533),
    es = n(394388),
    eo = n(320381),
    ec = n(749795),
    ed = n(821241),
    eu = n(541171),
    e_ = n(229673),
    em = n(494086),
    eA = n(734771),
    eE = n(753073),
    eI = n(640289),
    eT = n(293657),
    ef = n(269802),
    eN = n(576471),
    eg = n(808821),
    eC = n(933762),
    eh = n(840233),
    ep = n(536030),
    ex = n(912746),
    eR = n(817253),
    eS = n(911726),
    eO = n(904854),
    eM = n(652215),
    eD = n(502075),
    eP = n(985018);
function eU(e) {
    let { message: t, channel: n, compact: r } = e,
        { author: s } = t,
        { guild_id: o } = n,
        c = t.getChannelId(),
        d = (0, l.bG)([G.A], () => G.A.getGuild(o), [o]),
        u = a.useCallback(() => {
            null != d &&
                (0, E.K4)({
                    guildId: d.id,
                    location: { section: eM.JJy.CHANNEL_TEXT_AREA, object: eM.ZSU.BOOST_ANNOUNCEMENT_UPSELL },
                });
        }, [d]),
        _ = (0, Z.P)({ user: s, channelId: c, guildId: n.guild_id, messageId: t.id, stopPropagation: !0 });
    return (0, i.jsx)(eS.Ay, { message: t, compact: r, guild: d, usernameHook: _, onClickMessage: u });
}
function ev(e) {
    let { message: t, compact: n, channel: a } = e,
        l = (0, Z.P)({ user: t.author, channelId: a.id, guildId: a.guild_id, messageId: t.id });
    return (0, i.jsx)(er.A, { message: t, compact: n, usernameHook: l });
}
let eL = Object.freeze({
        [eM.lAJ.DEFAULT]: void 0,
        [eM.lAJ.REPLY]: void 0,
        [eM.lAJ.CHAT_INPUT_COMMAND]: void 0,
        [eM.lAJ.CONTEXT_MENU_COMMAND]: void 0,
        [eM.lAJ.RECIPIENT_ADD]: function (e) {
            let { message: t, channel: n, compact: a } = e,
                { author: r } = t,
                s = t.getChannelId(),
                o = (0, l.bG)([w.default], () => w.default.getUser(t.mentions[0]), [t]),
                c = q.Ay.getName(null, s, o),
                d = (0, Z.P)({ user: r, channelId: s, guildId: n.guild_id, messageId: t.id }),
                u = (0, Z.P)({ user: o, channelId: s, guildId: n.guild_id, messageId: t.id });
            return n.isThread()
                ? (0, i.jsx)(eh.A, {
                      message: t,
                      channel: n,
                      compact: a,
                      targetUser: o,
                      actorUsernameHook: d,
                      targetUsernameHook: u,
                  })
                : (0, i.jsx)(em.A, { message: t, compact: a, otherUsername: c, usernameHook: d, otherUsernameHook: u });
        },
        [eM.lAJ.RECIPIENT_REMOVE]: function (e) {
            let { message: t, channel: n, compact: a } = e,
                { author: r } = t,
                s = t.getChannelId(),
                o = (0, l.bG)([w.default], () => w.default.getUser(t.mentions[0]), [t]),
                c = (0, Z.P)({ user: r, channelId: s, guildId: n.guild_id, messageId: t.id }),
                d = (0, Z.P)({ user: o, channelId: s, guildId: n.guild_id, messageId: t.id });
            return n.isThread()
                ? (0, i.jsx)(ep.A, {
                      message: t,
                      channel: n,
                      compact: a,
                      targetUser: o,
                      actorUsernameHook: c,
                      targetUsernameHook: d,
                  })
                : null != o && o.id !== r.id
                  ? (0, i.jsx)(eA.A, {
                        message: t,
                        channel: n,
                        compact: a,
                        usernameHook: c,
                        otherUser: o,
                        otherUsernameHook: d,
                    })
                  : (0, i.jsx)(eA.A, { message: t, channel: n, usernameHook: c });
        },
        [eM.lAJ.CALL]: function (e) {
            let { message: t, compact: n, channel: r } = e,
                { id: s, author: o } = t,
                d = y.default.getId(),
                u = t.getChannelId(),
                _ = (0, l.bG)([b.A], () => b.A.isCallActive(u, s), [u, s]),
                m = (0, l.bG)([V.A], () => V.A.getVoiceState(eM.ME, d)),
                A = !_ && null != t.call && !t.call.participants.includes(d),
                E = _ && (null == m || m.channelId !== u),
                I = a.useCallback(() => c.default.selectVoiceChannel(u), [u]),
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
        [eM.lAJ.CHANNEL_NAME_CHANGE]: function (e) {
            let { message: t, compact: n, channel: a } = e,
                { author: l } = t,
                r = t.getChannelId(),
                s = (0, Z.P)({ user: l, channelId: r, guildId: a.guild_id, messageId: t.id });
            return (0, i.jsx)(ea.A, { compact: n, message: t, usernameHook: s, isForumPost: a.isForumPost() });
        },
        [eM.lAJ.CHANNEL_ICON_CHANGE]: function (e) {
            let { message: t, compact: n, channel: a } = e,
                { author: l } = t,
                r = t.getChannelId(),
                s = (0, Z.P)({ user: l, channelId: r, guildId: a.guild_id, messageId: t.id });
            return (0, i.jsx)(en.A, { compact: n, message: t, usernameHook: s });
        },
        [eM.lAJ.CHANNEL_PINNED_MESSAGE]: function (e) {
            let { message: t, compact: n, channel: l } = e,
                { author: r } = t,
                s = t.getChannelId(),
                o = a.useCallback(() => {
                    if (H.A.getChannelId() !== s) {
                        let e = k.A.getChannel(s);
                        null != e && (0, M.uh)(e.guild_id, e.id);
                    }
                    setTimeout(() => X._.dispatch(eM.jej.TOGGLE_CHANNEL_PINS), 0);
                }, [s]),
                c = (0, Z.P)({ user: r, channelId: s, guildId: l.guild_id, messageId: t.id });
            return (0, i.jsx)(el.A, { message: t, compact: n, usernameHook: c, onClickPins: __OVERLAY__ ? null : o });
        },
        [eM.lAJ.USER_JOIN]: function (e) {
            let { message: t, compact: n, channel: a } = e,
                { author: l } = t,
                r = t.getChannelId(),
                s = (0, Z.P)({ user: l, channelId: r, guildId: a.guild_id, messageId: t.id });
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(eR.A, { message: t, compact: n, usernameHook: s }),
                    (0, i.jsx)(j.I, { channel: a, message: t }),
                ],
            });
        },
        [eM.lAJ.GUILD_BOOST]: eU,
        [eM.lAJ.GUILD_BOOST_TIER_1]: eU,
        [eM.lAJ.GUILD_BOOST_TIER_2]: eU,
        [eM.lAJ.GUILD_BOOST_TIER_3]: eU,
        [eM.lAJ.CHANNEL_FOLLOW_ADD]: function (e) {
            let { message: t, compact: n, channel: a } = e,
                { author: l } = t,
                r = t.getChannelId(),
                s = (0, Z.P)({ user: l, channelId: r, guildId: a.guild_id, messageId: t.id });
            return (0, i.jsx)(et.A, { message: t, compact: n, usernameHook: s });
        },
        [eM.lAJ.GUILD_STREAM]: function (e) {
            let { message: t, compact: n, channel: r } = e,
                {
                    author: s,
                    author: { id: o },
                    messageReference: c,
                } = t,
                u = t.getChannelId(),
                _ = (0, l.bG)([B.A], () => B.A.findActivity(o, (e) => e.type === eM.$pd.PLAYING), [o]),
                m = (0, l.bG)([k.A], () => (null != c ? k.A.getChannel(c.channel_id) : null), [c]),
                A = c?.guild_id,
                E = (0, Z.P)({ user: s, channelId: u, guildId: r.guild_id, messageId: t.id }),
                I = a.useCallback(() => {
                    null != m &&
                        null != A &&
                        (0, d.Nl)({ streamType: eD.U4.GUILD, ownerId: o, channelId: m.id, guildId: A });
                }, [o, m, A]);
            return null != c && null != m && null != c.guild_id
                ? (0, i.jsx)(eu.A, {
                      message: t,
                      compact: n,
                      channel: m,
                      playingActivity: _,
                      onJoinStream: I,
                      usernameHook: E,
                  })
                : null;
        },
        [eM.lAJ.GUILD_DISCOVERY_DISQUALIFIED]: function (e) {
            let { message: t, compact: n } = e,
                a = t.getChannelId(),
                r = (0, l.bG)([k.A], () => k.A.getChannel(a), [a]),
                s = null != r ? r.getGuildId() : null;
            return (0, i.jsx)(eo.Rk, {
                message: t,
                compact: n,
                onClick: () => {
                    null != s && C.A.open(s, eM.BEX.ACCESS, eM.nd0.ACCESS_DISCOVERABLE);
                },
            });
        },
        [eM.lAJ.GUILD_DISCOVERY_REQUALIFIED]: eo.wj,
        [eM.lAJ.GUILD_DISCOVERY_GRACE_PERIOD_INITIAL_WARNING]: eo.Cq,
        [eM.lAJ.GUILD_DISCOVERY_GRACE_PERIOD_FINAL_WARNING]: eo.If,
        [eM.lAJ.THREAD_CREATED]: function (e) {
            let { message: t, channel: l, compact: o } = e,
                c = (0, Z.P)({ user: t.author, channelId: t.channel_id, guildId: l.guild_id, messageId: t.id }),
                d = a.useCallback(
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
                u = a.useCallback(() => {
                    (0, r.mMO)(async () => {
                        let { default: e } = await Promise.all([n.e("34160"), n.e("95725")]).then(n.bind(n, 126768));
                        return (t) => (0, i.jsx)(e, { channel: l, ...t });
                    });
                }, [l]),
                _ = a.useCallback(
                    (e) => {
                        let a = k.A.getChannel(t.messageReference?.channel_id);
                        null != a &&
                            (0, s.L3)(e, async () => {
                                let { default: e } = await Promise.all([n.e("94989"), n.e("79417")]).then(
                                    n.bind(n, 44536),
                                );
                                return (t) => (0, i.jsx)(e, { ...t, channel: a });
                            });
                    },
                    [t],
                );
            return (0, i.jsx)(eC.A, {
                message: t,
                compact: o,
                usernameHook: c,
                onClickThread: d,
                onClickViewThreads: u,
                onContextMenuThread: _,
            });
        },
        [eM.lAJ.THREAD_STARTER_MESSAGE]: ex.A,
        [eM.lAJ.GUILD_INVITE_REMINDER]: void 0,
        [eM.lAJ.AUTO_MODERATION_ACTION]: function (e) {
            let { message: t, compact: n, channel: a } = e;
            return (0, A.ER)(t) ? (0, i.jsx)($.A, { message: t, compact: n, channel: a }) : null;
        },
        [eM.lAJ.GUILD_INCIDENT_ALERT_MODE_ENABLED]: ev,
        [eM.lAJ.GUILD_INCIDENT_ALERT_MODE_DISABLED]: ev,
        [eM.lAJ.GUILD_INCIDENT_REPORT_RAID]: function (e) {
            let { message: t, compact: n, channel: a } = e,
                l = (0, Z.P)({ user: t.author, channelId: a.id, guildId: a.guild_id, messageId: t.id });
            return (0, i.jsx)(ed.A, { message: t, compact: n, channel: a, usernameHook: l });
        },
        [eM.lAJ.GUILD_INCIDENT_REPORT_FALSE_ALARM]: function (e) {
            let { message: t, compact: n, channel: a } = e,
                l = (0, Z.P)({ user: t.author, channelId: a.id, guildId: a.guild_id, messageId: t.id });
            return (0, i.jsx)(ec.A, { message: t, compact: n, channel: a, usernameHook: l });
        },
        [eM.lAJ.ROLE_SUBSCRIPTION_PURCHASE]: f.A,
        [eM.lAJ.PURCHASE_NOTIFICATION]: function (e) {
            let { message: t, channel: n, compact: a } = e;
            return t.purchaseNotification?.type === u.hE.GUILD_PRODUCT
                ? (0, i.jsx)(T.A, { message: t, channel: n, compact: a })
                : null;
        },
        [eM.lAJ.INTERACTION_PREMIUM_UPSELL]: void 0,
        [eM.lAJ.STAGE_START]: function (e) {
            let { message: t, channel: n, compact: a } = e,
                r = (0, Z.P)({ user: t.author, channelId: n.id, guildId: n.guild_id, messageId: t.id }),
                s = (0, l.bG)([N.Ay], () => N.Ay.getActiveEventByChannel(n.id), [n.id]);
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(ef.A, { message: t, compact: a, usernameHook: r }),
                    null != s && s.name === t.content ? (0, i.jsx)(g.A, { code: `${n.guild_id}-${s.id}` }) : null,
                ],
            });
        },
        [eM.lAJ.STAGE_END]: function (e) {
            let { message: t, channel: n, compact: a } = e,
                l = (0, Z.P)({ user: t.author, channelId: n.id, guildId: n.guild_id, messageId: t.id });
            return (0, i.jsx)(eE.A, { message: t, compact: a, usernameHook: l });
        },
        [eM.lAJ.STAGE_SPEAKER]: function (e) {
            let { message: t, channel: n, compact: a } = e,
                l = (0, Z.P)({ user: t.author, channelId: n.id, guildId: n.guild_id, messageId: t.id });
            return (0, i.jsx)(eT.A, { message: t, compact: a, usernameHook: l });
        },
        [eM.lAJ.STAGE_RAISE_HAND]: function (e) {
            let { message: t, channel: n, compact: a } = e,
                s = (0, Z.P)({ user: t.author, channelId: n.id, guildId: n.guild_id, messageId: t.id }),
                c = (0, l.bG)([F.A], () => F.A.can(eM.xBc.MUTE_MEMBERS, n)),
                d = (0, l.bG)([P.A], () => P.A.getParticipant(n.id, t.author.id)),
                u =
                    new Date(Y.default.extractTimestamp(t.id)).toISOString() ===
                    new Date(d?.voiceState?.requestToSpeakTimestamp ?? 0).toISOString(),
                _ = c && d?.rtsState === U.zF.REQUESTED_TO_SPEAK && u;
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(eI.A, { message: t, compact: a, usernameHook: s }),
                    _
                        ? (0, i.jsx)(r.Button, {
                              variant: "secondary",
                              onClick: () => {
                                  (0, D.lL)(n, t.author.id, !1), o.A.deleteMessage(n.id, t.id, !0);
                              },
                              text: eP.intl.string(eP.t.f0T7hI),
                              icon: r.LvC,
                          })
                        : null,
                ],
            });
        },
        [eM.lAJ.STAGE_TOPIC]: function (e) {
            let { message: t, channel: n, compact: a } = e,
                l = (0, Z.P)({ user: t.author, channelId: n.id, guildId: n.guild_id, messageId: t.id });
            return (0, i.jsx)(eN.A, { message: t, compact: a, usernameHook: l });
        },
        [eM.lAJ.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION]: R.A,
        [eM.lAJ.PRIVATE_CHANNEL_INTEGRATION_ADDED]: S.R,
        [eM.lAJ.PRIVATE_CHANNEL_INTEGRATION_REMOVED]: S.d,
        [eM.lAJ.PREMIUM_REFERRAL]: function (e) {
            let { message: t, compact: n } = e;
            return (0, i.jsx)(x.A, {
                userTrialOfferId: t.referralTrialOfferId,
                canRenderReferralEmbed: !0,
                compact: n,
            });
        },
        [eM.lAJ.GUILD_DEADCHAT_REVIVE_PROMPT]: void 0,
        [eM.lAJ.CUSTOM_GIFT]: void 0,
        [eM.lAJ.GUILD_GAMING_STATS_PROMPT]: void 0,
        [eM.lAJ.VOICE_HANGOUT_INVITE]: void 0,
        [eM.lAJ.POLL_RESULT]: h.A,
        [eM.lAJ.CHANGELOG]: void 0,
        [eM.lAJ.NITRO_NOTIFICATION]: function (e) {
            let { message: t, channel: n } = e;
            return (0, i.jsx)(Q.A, { message: t, channel: n });
        },
        [eM.lAJ.CHANNEL_LINKED_TO_LOBBY]: function (e) {
            let { message: t, channel: n, compact: a } = e;
            return (0, i.jsx)(ei.A, { message: t, channel: n, compact: a });
        },
        [eM.lAJ.GIFTING_PROMPT]: function (e) {
            let { message: t, channel: n } = e,
                a = t.giftingPrompt,
                r = (0, l.bG)([w.default], () => w.default.getUser(a?.recipientUserId));
            return null == a || null == r
                ? null
                : (0, i.jsx)(W.A, { giftIntentType: a.giftIntentType, recipientUser: r, channel: n });
        },
        [eM.lAJ.IN_GAME_MESSAGE_NUX]: function (e) {
            let { message: t, channel: n, compact: a } = e;
            return (0, i.jsx)(e_.A, { message: t, channel: n, author: t.author, compact: a });
        },
        [eM.lAJ.GUILD_JOIN_REQUEST_ACCEPT_NOTIFICATION]: I.Z_,
        [eM.lAJ.GUILD_JOIN_REQUEST_REJECT_NOTIFICATION]: I.QN,
        [eM.lAJ.GUILD_JOIN_REQUEST_WITHDRAWN_NOTIFICATION]: I.ez,
        [eM.lAJ.HD_STREAMING_UPGRADED]: void 0,
        [eM.lAJ.EMOJI_ADDED]: function (e) {
            let { message: t, channel: n, compact: a } = e,
                l = (0, Z.P)({ user: t.author, channelId: n.id, guildId: n.guild_id, messageId: t.id });
            return (0, i.jsx)(m._W, { message: t, channel: n, compact: a, usernameHook: l });
        },
        [eM.lAJ.CHAT_WALLPAPER_SET]: void 0,
        [eM.lAJ.CHAT_WALLPAPER_REMOVED]: void 0,
        [eM.lAJ.REPORT_TO_MOD_BAN_USER]: O.A,
        [eM.lAJ.REPORT_TO_MOD_KICK_USER]: O.A,
        [eM.lAJ.REPORT_TO_MOD_TIMEOUT_USER]: O.A,
        [eM.lAJ.REPORT_TO_MOD_DELETED_MESSAGE]: O.A,
        [eM.lAJ.REPORT_TO_MOD_CLOSED_REPORT]: O.A,
        [eM.lAJ.PREMIUM_GROUP_INVITE]: function (e) {
            let { message: t, channel: n, compact: a } = e;
            return (0, i.jsx)(p.A, { message: t, channel: n, compact: a });
        },
        [eM.lAJ.VOICE_SESSION]: function (e) {
            let { message: t, channel: n, compact: a } = e;
            return (0, i.jsx)(eO.A, { message: t, channel: n, compact: a });
        },
        [eM.lAJ.GUILD_BOOST_UPSELL]: function (e) {
            let { message: t, channel: n } = e;
            return null == t.boostingPrompt ? null : (0, i.jsx)(es.A, { boostingPrompt: t.boostingPrompt, channel: n });
        },
        67: function (e) {
            let { message: t, compact: n } = e;
            return (0, i.jsx)(eg.A, { message: t, compact: n });
        },
    }),
    ej = a.memo(function (e) {
        let { message: t, channel: n, compact: a, disableInteraction: l } = e,
            { type: r } = t,
            s = eL[r];
        if (null == s) {
            var o;
            return (
                (o = Error(`unknown message type ${t.type}`)),
                K.A.captureException(o),
                new _.A("SystemMessage").error("", o),
                null
            );
        }
        return (0, i.jsx)(J.Ay, {
            message: t,
            content: (0, z.Ay)(t).content,
            compact: a ?? !1,
            children: (0, i.jsx)(s, { message: t, channel: n, compact: a, disableInteraction: l }),
        });
    });
