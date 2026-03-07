n.d(t, { A: () => eD });
var i = n(627968),
    l = n(64700),
    a = n(311907),
    r = n(397927),
    s = n(442433),
    o = n(843472),
    c = n(956793),
    d = n(401843),
    u = n(155718),
    m = n(626584),
    _ = n(659859),
    A = n(785823),
    E = n(509536),
    f = n(615179),
    h = n(120120),
    g = n(379114),
    p = n(698441),
    x = n(484724),
    C = n(997509),
    I = n(850131),
    T = n(31051),
    N = n(659203),
    S = n(446028),
    R = n(302291),
    v = n(282224),
    O = n(976860),
    M = n(849736),
    j = n(63995),
    b = n(105530),
    y = n(353202),
    L = n(747926),
    D = n(336589),
    U = n(961350),
    P = n(470710),
    k = n(734057),
    G = n(71393),
    w = n(576705),
    F = n(290863),
    H = n(309010),
    B = n(287809),
    V = n(977997),
    z = n(203982),
    J = n(562153),
    K = n(728458),
    W = n(661191),
    Y = n(465364),
    Q = n(877923),
    Z = n(291812),
    X = n(898401),
    q = n(447215),
    $ = n(97896),
    ee = n(939344),
    et = n(451483),
    en = n(855532),
    ei = n(724382),
    el = n(333782),
    ea = n(441412),
    er = n(986533),
    es = n(394388),
    eo = n(320381),
    ec = n(749795),
    ed = n(821241),
    eu = n(541171),
    em = n(229673),
    e_ = n(494086),
    eA = n(734771),
    eE = n(753073),
    ef = n(640289),
    eh = n(293657),
    eg = n(269802),
    ep = n(576471),
    ex = n(808821),
    eC = n(933762),
    eI = n(840233),
    eT = n(536030),
    eN = n(912746),
    eS = n(817253),
    eR = n(911726),
    ev = n(904854),
    eO = n(652215),
    eM = n(502075),
    ej = n(985018);
function eb(e) {
    let { message: t, channel: n, compact: r } = e,
        { author: s } = t,
        { guild_id: o } = n,
        c = t.getChannelId(),
        d = (0, a.bG)([G.A], () => G.A.getGuild(o), [o]),
        u = l.useCallback(() => {
            null != d &&
                (0, E.K)({
                    guildId: d.id,
                    location: { section: eO.JJy.CHANNEL_TEXT_AREA, object: eO.ZSU.BOOST_ANNOUNCEMENT_UPSELL },
                });
        }, [d]),
        m = (0, q.P)({ user: s, channelId: c, guildId: n.guild_id, messageId: t.id, stopPropagation: !0 });
    return (0, i.jsx)(eR.Ay, { message: t, compact: r, guild: d, usernameHook: m, onClickMessage: u });
}
function ey(e) {
    let { message: t, compact: n, channel: l } = e,
        a = (0, q.P)({ user: t.author, channelId: l.id, guildId: l.guild_id, messageId: t.id });
    return (0, i.jsx)(er.A, { message: t, compact: n, usernameHook: a });
}
let eL = Object.freeze({
        [eO.lAJ.DEFAULT]: void 0,
        [eO.lAJ.REPLY]: void 0,
        [eO.lAJ.CHAT_INPUT_COMMAND]: void 0,
        [eO.lAJ.CONTEXT_MENU_COMMAND]: void 0,
        [eO.lAJ.RECIPIENT_ADD]: function (e) {
            let { message: t, channel: n, compact: l } = e,
                { author: r } = t,
                s = t.getChannelId(),
                o = (0, a.bG)([B.default], () => B.default.getUser(t.mentions[0]), [t]),
                c = J.Ay.getName(null, s, o),
                d = (0, q.P)({ user: r, channelId: s, guildId: n.guild_id, messageId: t.id }),
                u = (0, q.P)({ user: o, channelId: s, guildId: n.guild_id, messageId: t.id });
            return n.isThread()
                ? (0, i.jsx)(eI.A, {
                      message: t,
                      channel: n,
                      compact: l,
                      targetUser: o,
                      actorUsernameHook: d,
                      targetUsernameHook: u,
                  })
                : (0, i.jsx)(e_.A, { message: t, compact: l, otherUsername: c, usernameHook: d, otherUsernameHook: u });
        },
        [eO.lAJ.RECIPIENT_REMOVE]: function (e) {
            let { message: t, channel: n, compact: l } = e,
                { author: r } = t,
                s = t.getChannelId(),
                o = (0, a.bG)([B.default], () => B.default.getUser(t.mentions[0]), [t]),
                c = (0, q.P)({ user: r, channelId: s, guildId: n.guild_id, messageId: t.id }),
                d = (0, q.P)({ user: o, channelId: s, guildId: n.guild_id, messageId: t.id });
            return n.isThread()
                ? (0, i.jsx)(eT.A, {
                      message: t,
                      channel: n,
                      compact: l,
                      targetUser: o,
                      actorUsernameHook: c,
                      targetUsernameHook: d,
                  })
                : null != o && o.id !== r.id
                  ? (0, i.jsx)(eA.A, {
                        message: t,
                        channel: n,
                        compact: l,
                        usernameHook: c,
                        otherUser: o,
                        otherUsernameHook: d,
                    })
                  : (0, i.jsx)(eA.A, { message: t, channel: n, usernameHook: c });
        },
        [eO.lAJ.CALL]: function (e) {
            let { message: t, compact: n, channel: r } = e,
                { id: s, author: o } = t,
                d = U.default.getId(),
                u = t.getChannelId(),
                m = (0, a.bG)([P.A], () => P.A.isCallActive(u, s), [u, s]),
                _ = (0, a.bG)([V.A], () => V.A.getVoiceState(eO.ME, d)),
                A = !m && null != t.call && !t.call.participants.includes(d),
                E = m && (null == _ || _.channelId !== u),
                f = l.useCallback(() => c.default.selectVoiceChannel(u), [u]),
                h = (0, q.P)({
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
                usernameHook: h,
                onClickJoinCall: f,
            });
        },
        [eO.lAJ.CHANNEL_NAME_CHANGE]: function (e) {
            let { message: t, compact: n, channel: l } = e,
                { author: a } = t,
                r = t.getChannelId(),
                s = (0, q.P)({ user: a, channelId: r, guildId: l.guild_id, messageId: t.id });
            return (0, i.jsx)(el.A, { compact: n, message: t, usernameHook: s, isForumPost: l.isForumPost() });
        },
        [eO.lAJ.CHANNEL_ICON_CHANGE]: function (e) {
            let { message: t, compact: n, channel: l } = e,
                { author: a } = t,
                r = t.getChannelId(),
                s = (0, q.P)({ user: a, channelId: r, guildId: l.guild_id, messageId: t.id });
            return (0, i.jsx)(en.A, { compact: n, message: t, usernameHook: s });
        },
        [eO.lAJ.CHANNEL_PINNED_MESSAGE]: function (e) {
            let { message: t, compact: n, channel: a } = e,
                { author: r } = t,
                s = t.getChannelId(),
                o = l.useCallback(() => {
                    if (H.A.getChannelId() !== s) {
                        let e = k.A.getChannel(s);
                        null != e && (0, O.uh)(e.guild_id, e.id);
                    }
                    setTimeout(() => z._.dispatch(eO.jej.TOGGLE_CHANNEL_PINS), 0);
                }, [s]),
                c = (0, q.P)({ user: r, channelId: s, guildId: a.guild_id, messageId: t.id });
            return (0, i.jsx)(ea.A, { message: t, compact: n, usernameHook: c, onClickPins: __OVERLAY__ ? null : o });
        },
        [eO.lAJ.USER_JOIN]: function (e) {
            let { message: t, compact: n, channel: l } = e,
                { author: a } = t,
                r = t.getChannelId(),
                s = (0, q.P)({ user: a, channelId: r, guildId: l.guild_id, messageId: t.id });
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(eS.A, { message: t, compact: n, usernameHook: s }),
                    (0, i.jsx)(D.I, { channel: l, message: t }),
                ],
            });
        },
        [eO.lAJ.GUILD_BOOST]: eb,
        [eO.lAJ.GUILD_BOOST_TIER_1]: eb,
        [eO.lAJ.GUILD_BOOST_TIER_2]: eb,
        [eO.lAJ.GUILD_BOOST_TIER_3]: eb,
        [eO.lAJ.CHANNEL_FOLLOW_ADD]: function (e) {
            let { message: t, compact: n, channel: l } = e,
                { author: a } = t,
                r = t.getChannelId(),
                s = (0, q.P)({ user: a, channelId: r, guildId: l.guild_id, messageId: t.id });
            return (0, i.jsx)(et.A, { message: t, compact: n, usernameHook: s });
        },
        [eO.lAJ.GUILD_STREAM]: function (e) {
            let { message: t, compact: n, channel: r } = e,
                {
                    author: s,
                    author: { id: o },
                    messageReference: c,
                } = t,
                u = t.getChannelId(),
                m = (0, a.bG)([F.A], () => F.A.findActivity(o, (e) => e.type === eO.$pd.PLAYING), [o]),
                _ = (0, a.bG)([k.A], () => (null != c ? k.A.getChannel(c.channel_id) : null), [c]),
                A = c?.guild_id,
                E = (0, q.P)({ user: s, channelId: u, guildId: r.guild_id, messageId: t.id }),
                f = l.useCallback(() => {
                    null != _ &&
                        null != A &&
                        (0, d.Nl)({ streamType: eM.U4.GUILD, ownerId: o, channelId: _.id, guildId: A });
                }, [o, _, A]);
            return null != c && null != _ && null != c.guild_id
                ? (0, i.jsx)(eu.A, {
                      message: t,
                      compact: n,
                      channel: _,
                      playingActivity: m,
                      onJoinStream: f,
                      usernameHook: E,
                  })
                : null;
        },
        [eO.lAJ.GUILD_DISCOVERY_DISQUALIFIED]: function (e) {
            let { message: t, compact: n } = e,
                l = t.getChannelId(),
                r = (0, a.bG)([k.A], () => k.A.getChannel(l), [l]),
                s = null != r ? r.getGuildId() : null;
            return (0, i.jsx)(eo.Rk, {
                message: t,
                compact: n,
                onClick: () => {
                    null != s && C.A.open(s, eO.BEX.ACCESS, eO.nd0.ACCESS_DISCOVERABLE);
                },
            });
        },
        [eO.lAJ.GUILD_DISCOVERY_REQUALIFIED]: eo.wj,
        [eO.lAJ.GUILD_DISCOVERY_GRACE_PERIOD_INITIAL_WARNING]: eo.Cq,
        [eO.lAJ.GUILD_DISCOVERY_GRACE_PERIOD_FINAL_WARNING]: eo.If,
        [eO.lAJ.THREAD_CREATED]: function (e) {
            let { message: t, channel: a, compact: o } = e,
                c = (0, q.P)({ user: t.author, channelId: t.channel_id, guildId: a.guild_id, messageId: t.id }),
                d = l.useCallback(
                    async (e) => {
                        let n = t.messageReference?.channel_id;
                        if (null != n) {
                            await y.A.loadThread(n);
                            let t = k.A.getChannel(n);
                            null != t && (0, L.JA)(t, e.shiftKey);
                        }
                    },
                    [t],
                ),
                u = l.useCallback(() => {
                    (0, r.mMO)(async () => {
                        let { default: e } = await Promise.all([n.e("34160"), n.e("55191")]).then(n.bind(n, 126768));
                        return (t) => (0, i.jsx)(e, { channel: a, ...t });
                    });
                }, [a]),
                m = l.useCallback(
                    (e) => {
                        let l = k.A.getChannel(t.messageReference?.channel_id);
                        null != l &&
                            (0, s.L3)(e, async () => {
                                let { default: e } = await Promise.all([n.e("94989"), n.e("23016")]).then(
                                    n.bind(n, 44536),
                                );
                                return (t) => (0, i.jsx)(e, { ...t, channel: l });
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
                onContextMenuThread: m,
            });
        },
        [eO.lAJ.THREAD_STARTER_MESSAGE]: eN.A,
        [eO.lAJ.GUILD_INVITE_REMINDER]: void 0,
        [eO.lAJ.AUTO_MODERATION_ACTION]: function (e) {
            let { message: t, compact: n, channel: l } = e;
            return (0, A.ER)(t) ? (0, i.jsx)($.A, { message: t, compact: n, channel: l }) : null;
        },
        [eO.lAJ.GUILD_INCIDENT_ALERT_MODE_ENABLED]: ey,
        [eO.lAJ.GUILD_INCIDENT_ALERT_MODE_DISABLED]: ey,
        [eO.lAJ.GUILD_INCIDENT_REPORT_RAID]: function (e) {
            let { message: t, compact: n, channel: l } = e,
                a = (0, q.P)({ user: t.author, channelId: l.id, guildId: l.guild_id, messageId: t.id });
            return (0, i.jsx)(ed.A, { message: t, compact: n, channel: l, usernameHook: a });
        },
        [eO.lAJ.GUILD_INCIDENT_REPORT_FALSE_ALARM]: function (e) {
            let { message: t, compact: n, channel: l } = e,
                a = (0, q.P)({ user: t.author, channelId: l.id, guildId: l.guild_id, messageId: t.id });
            return (0, i.jsx)(ec.A, { message: t, compact: n, channel: l, usernameHook: a });
        },
        [eO.lAJ.ROLE_SUBSCRIPTION_PURCHASE]: g.A,
        [eO.lAJ.PURCHASE_NOTIFICATION]: function (e) {
            let { message: t, channel: n, compact: l } = e;
            return t.purchaseNotification?.type === u.hE.GUILD_PRODUCT
                ? (0, i.jsx)(h.A, { message: t, channel: n, compact: l })
                : null;
        },
        [eO.lAJ.INTERACTION_PREMIUM_UPSELL]: void 0,
        [eO.lAJ.STAGE_START]: function (e) {
            let { message: t, channel: n, compact: l } = e,
                r = (0, q.P)({ user: t.author, channelId: n.id, guildId: n.guild_id, messageId: t.id }),
                s = (0, a.bG)([p.Ay], () => p.Ay.getActiveEventByChannel(n.id), [n.id]);
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(eg.A, { message: t, compact: l, usernameHook: r }),
                    null != s && s.name === t.content ? (0, i.jsx)(x.A, { code: `${n.guild_id}-${s.id}` }) : null,
                ],
            });
        },
        [eO.lAJ.STAGE_END]: function (e) {
            let { message: t, channel: n, compact: l } = e,
                a = (0, q.P)({ user: t.author, channelId: n.id, guildId: n.guild_id, messageId: t.id });
            return (0, i.jsx)(eE.A, { message: t, compact: l, usernameHook: a });
        },
        [eO.lAJ.STAGE_SPEAKER]: function (e) {
            let { message: t, channel: n, compact: l } = e,
                a = (0, q.P)({ user: t.author, channelId: n.id, guildId: n.guild_id, messageId: t.id });
            return (0, i.jsx)(eh.A, { message: t, compact: l, usernameHook: a });
        },
        [eO.lAJ.STAGE_RAISE_HAND]: function (e) {
            let { message: t, channel: n, compact: l } = e,
                s = (0, q.P)({ user: t.author, channelId: n.id, guildId: n.guild_id, messageId: t.id }),
                c = (0, a.bG)([w.A], () => w.A.can(eO.xBc.MUTE_MEMBERS, n)),
                d = (0, a.bG)([j.A], () => j.A.getParticipant(n.id, t.author.id)),
                u =
                    new Date(W.default.extractTimestamp(t.id)).toISOString() ===
                    new Date(d?.voiceState?.requestToSpeakTimestamp ?? 0).toISOString(),
                m = c && d?.rtsState === b.zF.REQUESTED_TO_SPEAK && u;
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(ef.A, { message: t, compact: l, usernameHook: s }),
                    m
                        ? (0, i.jsx)(r.Button, {
                              variant: "secondary",
                              onClick: () => {
                                  (0, M.lL)(n, t.author.id, !1), o.A.deleteMessage(n.id, t.id, !0);
                              },
                              text: ej.intl.string(ej.t.f0T7hI),
                              icon: r.LvC,
                          })
                        : null,
                ],
            });
        },
        [eO.lAJ.STAGE_TOPIC]: function (e) {
            let { message: t, channel: n, compact: l } = e,
                a = (0, q.P)({ user: t.author, channelId: n.id, guildId: n.guild_id, messageId: t.id });
            return (0, i.jsx)(ep.A, { message: t, compact: l, usernameHook: a });
        },
        [eO.lAJ.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION]: S.A,
        [eO.lAJ.PRIVATE_CHANNEL_INTEGRATION_ADDED]: R.R,
        [eO.lAJ.PRIVATE_CHANNEL_INTEGRATION_REMOVED]: R.d,
        [eO.lAJ.PREMIUM_REFERRAL]: function (e) {
            let { message: t, compact: n } = e;
            return (0, i.jsx)(N.A, {
                userTrialOfferId: t.referralTrialOfferId,
                canRenderReferralEmbed: !0,
                compact: n,
            });
        },
        [eO.lAJ.GUILD_DEADCHAT_REVIVE_PROMPT]: void 0,
        [eO.lAJ.CUSTOM_GIFT]: void 0,
        [eO.lAJ.GUILD_GAMING_STATS_PROMPT]: void 0,
        [eO.lAJ.VOICE_HANGOUT_INVITE]: void 0,
        [eO.lAJ.POLL_RESULT]: I.A,
        [eO.lAJ.CHANGELOG]: void 0,
        [eO.lAJ.NITRO_NOTIFICATION]: function (e) {
            let { message: t, channel: n } = e;
            return (0, i.jsx)(X.A, { message: t, channel: n });
        },
        [eO.lAJ.CHANNEL_LINKED_TO_LOBBY]: function (e) {
            let { message: t, channel: n, compact: l } = e;
            return (0, i.jsx)(ei.A, { message: t, channel: n, compact: l });
        },
        [eO.lAJ.GIFTING_PROMPT]: function (e) {
            let { message: t, channel: n } = e,
                l = t.giftingPrompt,
                r = (0, a.bG)([B.default], () => B.default.getUser(l?.recipientUserId));
            return null == l || null == r
                ? null
                : (0, i.jsx)(Q.A, { giftIntentType: l.giftIntentType, recipientUser: r, channel: n });
        },
        [eO.lAJ.IN_GAME_MESSAGE_NUX]: function (e) {
            let { message: t, channel: n, compact: l } = e;
            return (0, i.jsx)(em.A, { message: t, channel: n, author: t.author, compact: l });
        },
        [eO.lAJ.GUILD_JOIN_REQUEST_ACCEPT_NOTIFICATION]: f.Z_,
        [eO.lAJ.GUILD_JOIN_REQUEST_REJECT_NOTIFICATION]: f.QN,
        [eO.lAJ.GUILD_JOIN_REQUEST_WITHDRAWN_NOTIFICATION]: f.ez,
        [eO.lAJ.HD_STREAMING_UPGRADED]: void 0,
        [eO.lAJ.EMOJI_ADDED]: function (e) {
            let { message: t, channel: n, compact: l } = e,
                a = (0, q.P)({ user: t.author, channelId: n.id, guildId: n.guild_id, messageId: t.id });
            return (0, i.jsx)(_._W, { message: t, channel: n, compact: l, usernameHook: a });
        },
        [eO.lAJ.CHAT_WALLPAPER_SET]: void 0,
        [eO.lAJ.CHAT_WALLPAPER_REMOVED]: void 0,
        [eO.lAJ.REPORT_TO_MOD_BAN_USER]: v.A,
        [eO.lAJ.REPORT_TO_MOD_KICK_USER]: v.A,
        [eO.lAJ.REPORT_TO_MOD_TIMEOUT_USER]: v.A,
        [eO.lAJ.REPORT_TO_MOD_DELETED_MESSAGE]: v.A,
        [eO.lAJ.REPORT_TO_MOD_CLOSED_REPORT]: v.A,
        [eO.lAJ.PREMIUM_GROUP_INVITE]: function (e) {
            let { message: t, channel: n, compact: l } = e;
            return (0, i.jsx)(T.A, { message: t, channel: n, compact: l });
        },
        [eO.lAJ.VOICE_SESSION]: function (e) {
            let { message: t, channel: n, compact: l } = e;
            return (0, i.jsx)(ev.A, { message: t, channel: n, compact: l });
        },
        [eO.lAJ.GUILD_BOOST_UPSELL]: function (e) {
            let { message: t, channel: n } = e;
            return null == t.boostingPrompt ? null : (0, i.jsx)(es.A, { boostingPrompt: t.boostingPrompt, channel: n });
        },
        67: function (e) {
            let { message: t, compact: n } = e;
            return (0, i.jsx)(ex.A, { message: t, compact: n });
        },
    }),
    eD = l.memo(function (e) {
        let { message: t, channel: n, compact: l, disableInteraction: a } = e,
            { type: r } = t,
            s = eL[r];
        if (null == s) {
            var o;
            return (
                (o = Error(`unknown message type ${t.type}`)),
                K.A.captureException(o),
                new m.A("SystemMessage").error("", o),
                null
            );
        }
        return (0, i.jsx)(Z.Ay, {
            message: t,
            content: (0, Y.Ay)(t).content,
            compact: l ?? !1,
            children: (0, i.jsx)(s, { message: t, channel: n, compact: l, disableInteraction: a }),
        });
    });
