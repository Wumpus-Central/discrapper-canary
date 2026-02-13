n.d(t, { A: () => eD });
var i = n(627968),
    l = n(64700),
    a = n(311907),
    r = n(397927),
    s = n(442433),
    o = n(843472),
    d = n(956793),
    c = n(401843),
    u = n(155718),
    m = n(151660),
    _ = n(626584),
    h = n(659859),
    p = n(785823),
    g = n(509536),
    A = n(615179),
    f = n(120120),
    x = n(379114),
    E = n(698441),
    C = n(484724),
    I = n(997509),
    T = n(850131),
    v = n(31051),
    N = n(659203),
    S = n(446028),
    b = n(302291),
    j = n(282224),
    y = n(976860),
    R = n(849736),
    L = n(63995),
    M = n(105530),
    O = n(353202),
    D = n(747926),
    P = n(336589),
    k = n(961350),
    U = n(470710),
    w = n(734057),
    G = n(71393),
    B = n(576705),
    F = n(290863),
    H = n(309010),
    V = n(287809),
    z = n(977997),
    W = n(203982),
    Y = n(562153),
    q = n(728458),
    K = n(661191),
    Q = n(465364),
    J = n(877923),
    X = n(291812),
    Z = n(898401),
    $ = n(447215),
    ee = n(97896),
    et = n(939344),
    en = n(451483),
    ei = n(855532),
    el = n(724382),
    ea = n(333782),
    er = n(441412),
    es = n(986533),
    eo = n(320381),
    ed = n(749795),
    ec = n(821241),
    eu = n(541171),
    em = n(229673),
    e_ = n(494086),
    eh = n(734771),
    ep = n(753073),
    eg = n(640289),
    eA = n(293657),
    ef = n(269802),
    ex = n(576471),
    eE = n(808821),
    eC = n(933762),
    eI = n(840233),
    eT = n(536030),
    ev = n(912746),
    eN = n(817253),
    eS = n(911726),
    eb = n(904854),
    ej = n(652215),
    ey = n(502075),
    eR = n(985018);
function eL(e) {
    let { message: t, channel: n, compact: r } = e,
        { author: s } = t,
        { guild_id: o } = n,
        d = t.getChannelId(),
        c = (0, a.bG)([G.A], () => G.A.getGuild(o), [o]),
        u = l.useCallback(() => {
            null != c &&
                (0, g.K)({
                    guildId: c.id,
                    location: { section: ej.JJy.CHANNEL_TEXT_AREA, object: ej.ZSU.BOOST_ANNOUNCEMENT_UPSELL },
                });
        }, [c]),
        m = (0, $.P)({ user: s, channelId: d, guildId: n.guild_id, messageId: t.id, stopPropagation: !0 });
    return (0, i.jsx)(eS.Ay, { message: t, compact: r, guild: c, usernameHook: m, onClickMessage: u });
}
function eM(e) {
    let { message: t, compact: n, channel: l } = e,
        a = (0, $.P)({ user: t.author, channelId: l.id, guildId: l.guild_id, messageId: t.id });
    return (0, i.jsx)(es.A, { message: t, compact: n, usernameHook: a });
}
let eO = Object.freeze({
        [ej.lAJ.DEFAULT]: void 0,
        [ej.lAJ.REPLY]: void 0,
        [ej.lAJ.CHAT_INPUT_COMMAND]: void 0,
        [ej.lAJ.CONTEXT_MENU_COMMAND]: void 0,
        [ej.lAJ.RECIPIENT_ADD]: function (e) {
            let { message: t, channel: n, compact: l } = e,
                { author: r } = t,
                s = t.getChannelId(),
                o = (0, a.bG)([V.default], () => V.default.getUser(t.mentions[0]), [t]),
                d = Y.Ay.getName(null, s, o),
                c = (0, $.P)({ user: r, channelId: s, guildId: n.guild_id, messageId: t.id }),
                u = (0, $.P)({ user: o, channelId: s, guildId: n.guild_id, messageId: t.id });
            return n.isThread()
                ? (0, i.jsx)(eI.A, {
                      message: t,
                      channel: n,
                      compact: l,
                      targetUser: o,
                      actorUsernameHook: c,
                      targetUsernameHook: u,
                  })
                : (0, i.jsx)(e_.A, { message: t, compact: l, otherUsername: d, usernameHook: c, otherUsernameHook: u });
        },
        [ej.lAJ.RECIPIENT_REMOVE]: function (e) {
            let { message: t, channel: n, compact: l } = e,
                { author: r } = t,
                s = t.getChannelId(),
                o = (0, a.bG)([V.default], () => V.default.getUser(t.mentions[0]), [t]),
                d = (0, $.P)({ user: r, channelId: s, guildId: n.guild_id, messageId: t.id }),
                c = (0, $.P)({ user: o, channelId: s, guildId: n.guild_id, messageId: t.id });
            return n.isThread()
                ? (0, i.jsx)(eT.A, {
                      message: t,
                      channel: n,
                      compact: l,
                      targetUser: o,
                      actorUsernameHook: d,
                      targetUsernameHook: c,
                  })
                : null != o && o.id !== r.id
                  ? (0, i.jsx)(eh.A, {
                        message: t,
                        channel: n,
                        compact: l,
                        usernameHook: d,
                        otherUser: o,
                        otherUsernameHook: c,
                    })
                  : (0, i.jsx)(eh.A, { message: t, channel: n, usernameHook: d });
        },
        [ej.lAJ.CALL]: function (e) {
            let { message: t, compact: n, channel: r } = e,
                { id: s, author: o } = t,
                c = k.default.getId(),
                u = t.getChannelId(),
                m = (0, a.bG)([U.A], () => U.A.isCallActive(u, s), [u, s]),
                _ = (0, a.bG)([z.A], () => z.A.getVoiceState(ej.ME, c)),
                h = !m && null != t.call && !t.call.participants.includes(c),
                p = m && (null == _ || _.channelId !== u),
                g = l.useCallback(() => d.default.selectVoiceChannel(u), [u]),
                A = (0, $.P)({
                    user: o,
                    channelId: u,
                    guildId: r.guild_id,
                    messageId: t.id,
                    enableDisplayNameStyles: !0,
                });
            return (0, i.jsx)(et.A, {
                compact: n,
                message: t,
                missed: h,
                joinable: p,
                usernameHook: A,
                onClickJoinCall: g,
            });
        },
        [ej.lAJ.CHANNEL_NAME_CHANGE]: function (e) {
            let { message: t, compact: n, channel: l } = e,
                { author: a } = t,
                r = t.getChannelId(),
                s = (0, $.P)({ user: a, channelId: r, guildId: l.guild_id, messageId: t.id });
            return (0, i.jsx)(ea.A, { compact: n, message: t, usernameHook: s, isForumPost: l.isForumPost() });
        },
        [ej.lAJ.CHANNEL_ICON_CHANGE]: function (e) {
            let { message: t, compact: n, channel: l } = e,
                { author: a } = t,
                r = t.getChannelId(),
                s = (0, $.P)({ user: a, channelId: r, guildId: l.guild_id, messageId: t.id });
            return (0, i.jsx)(ei.A, { compact: n, message: t, usernameHook: s });
        },
        [ej.lAJ.CHANNEL_PINNED_MESSAGE]: function (e) {
            let { message: t, compact: n, channel: a } = e,
                { author: r } = t,
                s = t.getChannelId(),
                o = l.useCallback(() => {
                    if (H.A.getChannelId() !== s) {
                        let e = w.A.getChannel(s);
                        null != e && (0, y.uh)(e.guild_id, e.id);
                    }
                    setTimeout(() => W._.dispatch(ej.jej.TOGGLE_CHANNEL_PINS), 0);
                }, [s]),
                d = (0, $.P)({ user: r, channelId: s, guildId: a.guild_id, messageId: t.id });
            return (0, i.jsx)(er.A, { message: t, compact: n, usernameHook: d, onClickPins: __OVERLAY__ ? null : o });
        },
        [ej.lAJ.USER_JOIN]: function (e) {
            let { message: t, compact: n, channel: l } = e,
                { author: a } = t,
                r = t.getChannelId(),
                s = (0, $.P)({ user: a, channelId: r, guildId: l.guild_id, messageId: t.id });
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(eN.A, { message: t, compact: n, usernameHook: s }),
                    (0, i.jsx)(P.I, { channel: l, message: t }),
                ],
            });
        },
        [ej.lAJ.GUILD_BOOST]: eL,
        [ej.lAJ.GUILD_BOOST_TIER_1]: eL,
        [ej.lAJ.GUILD_BOOST_TIER_2]: eL,
        [ej.lAJ.GUILD_BOOST_TIER_3]: eL,
        [ej.lAJ.CHANNEL_FOLLOW_ADD]: function (e) {
            let { message: t, compact: n, channel: l } = e,
                { author: a } = t,
                r = t.getChannelId(),
                s = (0, $.P)({ user: a, channelId: r, guildId: l.guild_id, messageId: t.id });
            return (0, i.jsx)(en.A, { message: t, compact: n, usernameHook: s });
        },
        [ej.lAJ.GUILD_STREAM]: function (e) {
            let { message: t, compact: n, channel: r } = e,
                {
                    author: s,
                    author: { id: o },
                    messageReference: d,
                } = t,
                u = t.getChannelId(),
                m = (0, a.bG)([F.A], () => F.A.findActivity(o, (e) => e.type === ej.$pd.PLAYING), [o]),
                _ = (0, a.bG)([w.A], () => (null != d ? w.A.getChannel(d.channel_id) : null), [d]),
                h = d?.guild_id,
                p = (0, $.P)({ user: s, channelId: u, guildId: r.guild_id, messageId: t.id }),
                g = l.useCallback(() => {
                    null != _ &&
                        null != h &&
                        (0, c.Nl)({ streamType: ey.U4.GUILD, ownerId: o, channelId: _.id, guildId: h });
                }, [o, _, h]);
            return null != d && null != _ && null != d.guild_id
                ? (0, i.jsx)(eu.A, {
                      message: t,
                      compact: n,
                      channel: _,
                      playingActivity: m,
                      onJoinStream: g,
                      usernameHook: p,
                  })
                : null;
        },
        [ej.lAJ.GUILD_DISCOVERY_DISQUALIFIED]: function (e) {
            let { message: t, compact: n } = e,
                l = t.getChannelId(),
                r = (0, a.bG)([w.A], () => w.A.getChannel(l), [l]),
                s = null != r ? r.getGuildId() : null;
            return (0, i.jsx)(eo.Rk, {
                message: t,
                compact: n,
                onClick: () => {
                    null != s && I.A.open(s, ej.BEX.ACCESS, ej.nd0.ACCESS_DISCOVERABLE);
                },
            });
        },
        [ej.lAJ.GUILD_DISCOVERY_REQUALIFIED]: eo.wj,
        [ej.lAJ.GUILD_DISCOVERY_GRACE_PERIOD_INITIAL_WARNING]: eo.Cq,
        [ej.lAJ.GUILD_DISCOVERY_GRACE_PERIOD_FINAL_WARNING]: eo.If,
        [ej.lAJ.THREAD_CREATED]: function (e) {
            let { message: t, channel: a, compact: o } = e,
                d = (0, $.P)({ user: t.author, channelId: t.channel_id, guildId: a.guild_id, messageId: t.id }),
                c = l.useCallback(
                    async (e) => {
                        let n = t.messageReference?.channel_id;
                        if (null != n) {
                            await O.A.loadThread(n);
                            let t = w.A.getChannel(n);
                            null != t && (0, D.JA)(t, e.shiftKey);
                        }
                    },
                    [t],
                ),
                u = l.useCallback(() => {
                    (0, r.mMO)(async () => {
                        let { default: e } = await Promise.all([n.e("34160"), n.e("86155")]).then(n.bind(n, 126768));
                        return (t) => (0, i.jsx)(e, { channel: a, ...t });
                    });
                }, [a]),
                m = l.useCallback(
                    (e) => {
                        let l = w.A.getChannel(t.messageReference?.channel_id);
                        null != l &&
                            (0, s.L3)(e, async () => {
                                let { default: e } = await Promise.all([n.e("99011"), n.e("78441"), n.e("43098")]).then(
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
                usernameHook: d,
                onClickThread: c,
                onClickViewThreads: u,
                onContextMenuThread: m,
            });
        },
        [ej.lAJ.THREAD_STARTER_MESSAGE]: ev.A,
        [ej.lAJ.GUILD_INVITE_REMINDER]: void 0,
        [ej.lAJ.AUTO_MODERATION_ACTION]: function (e) {
            let { message: t, compact: n, channel: l } = e;
            return (0, p.ER)(t) ? (0, i.jsx)(ee.A, { message: t, compact: n, channel: l }) : null;
        },
        [ej.lAJ.GUILD_INCIDENT_ALERT_MODE_ENABLED]: eM,
        [ej.lAJ.GUILD_INCIDENT_ALERT_MODE_DISABLED]: eM,
        [ej.lAJ.GUILD_INCIDENT_REPORT_RAID]: function (e) {
            let { message: t, compact: n, channel: l } = e,
                a = (0, $.P)({ user: t.author, channelId: l.id, guildId: l.guild_id, messageId: t.id });
            return (0, i.jsx)(ec.A, { message: t, compact: n, channel: l, usernameHook: a });
        },
        [ej.lAJ.GUILD_INCIDENT_REPORT_FALSE_ALARM]: function (e) {
            let { message: t, compact: n, channel: l } = e,
                a = (0, $.P)({ user: t.author, channelId: l.id, guildId: l.guild_id, messageId: t.id });
            return (0, i.jsx)(ed.A, { message: t, compact: n, channel: l, usernameHook: a });
        },
        [ej.lAJ.ROLE_SUBSCRIPTION_PURCHASE]: x.A,
        [ej.lAJ.PURCHASE_NOTIFICATION]: function (e) {
            let { message: t, channel: n, compact: l } = e;
            return t.purchaseNotification?.type === u.hE.GUILD_PRODUCT
                ? (0, i.jsx)(f.A, { message: t, channel: n, compact: l })
                : null;
        },
        [ej.lAJ.INTERACTION_PREMIUM_UPSELL]: void 0,
        [ej.lAJ.STAGE_START]: function (e) {
            let { message: t, channel: n, compact: l } = e,
                r = (0, $.P)({ user: t.author, channelId: n.id, guildId: n.guild_id, messageId: t.id }),
                s = (0, a.bG)([E.Ay], () => E.Ay.getActiveEventByChannel(n.id), [n.id]);
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(ef.A, { message: t, compact: l, usernameHook: r }),
                    null != s && s.name === t.content ? (0, i.jsx)(C.A, { code: `${n.guild_id}-${s.id}` }) : null,
                ],
            });
        },
        [ej.lAJ.STAGE_END]: function (e) {
            let { message: t, channel: n, compact: l } = e,
                a = (0, $.P)({ user: t.author, channelId: n.id, guildId: n.guild_id, messageId: t.id });
            return (0, i.jsx)(ep.A, { message: t, compact: l, usernameHook: a });
        },
        [ej.lAJ.STAGE_SPEAKER]: function (e) {
            let { message: t, channel: n, compact: l } = e,
                a = (0, $.P)({ user: t.author, channelId: n.id, guildId: n.guild_id, messageId: t.id });
            return (0, i.jsx)(eA.A, { message: t, compact: l, usernameHook: a });
        },
        [ej.lAJ.STAGE_RAISE_HAND]: function (e) {
            let { message: t, channel: n, compact: l } = e,
                s = (0, $.P)({ user: t.author, channelId: n.id, guildId: n.guild_id, messageId: t.id }),
                d = (0, a.bG)([B.A], () => B.A.can(ej.xBc.MUTE_MEMBERS, n)),
                c = (0, a.bG)([L.A], () => L.A.getParticipant(n.id, t.author.id)),
                u =
                    new Date(K.default.extractTimestamp(t.id)).toISOString() ===
                    new Date(c?.voiceState?.requestToSpeakTimestamp ?? 0).toISOString(),
                m = d && c?.rtsState === M.zF.REQUESTED_TO_SPEAK && u;
            return (0, i.jsxs)(i.Fragment, {
                children: [
                    (0, i.jsx)(eg.A, { message: t, compact: l, usernameHook: s }),
                    m
                        ? (0, i.jsx)(r.Button, {
                              variant: "secondary",
                              onClick: () => {
                                  (0, R.lL)(n, t.author.id, !1), o.A.deleteMessage(n.id, t.id, !0);
                              },
                              text: eR.intl.string(eR.t.f0T7hI),
                              icon: r.LvC,
                          })
                        : null,
                ],
            });
        },
        [ej.lAJ.STAGE_TOPIC]: function (e) {
            let { message: t, channel: n, compact: l } = e,
                a = (0, $.P)({ user: t.author, channelId: n.id, guildId: n.guild_id, messageId: t.id });
            return (0, i.jsx)(ex.A, { message: t, compact: l, usernameHook: a });
        },
        [ej.lAJ.GUILD_APPLICATION_PREMIUM_SUBSCRIPTION]: S.A,
        [ej.lAJ.PRIVATE_CHANNEL_INTEGRATION_ADDED]: b.R,
        [ej.lAJ.PRIVATE_CHANNEL_INTEGRATION_REMOVED]: b.d,
        [ej.lAJ.PREMIUM_REFERRAL]: function (e) {
            let { message: t, compact: n } = e;
            return (0, i.jsx)(N.A, {
                userTrialOfferId: t.referralTrialOfferId,
                canRenderReferralEmbed: !0,
                compact: n,
            });
        },
        [ej.lAJ.GUILD_DEADCHAT_REVIVE_PROMPT]: function (e) {
            let { message: t, channel: n, compact: l } = e;
            return (0, i.jsx)(m.A, { message: t, channel: n, compact: l });
        },
        [ej.lAJ.CUSTOM_GIFT]: void 0,
        [ej.lAJ.GUILD_GAMING_STATS_PROMPT]: void 0,
        [ej.lAJ.VOICE_HANGOUT_INVITE]: void 0,
        [ej.lAJ.POLL_RESULT]: T.A,
        [ej.lAJ.CHANGELOG]: void 0,
        [ej.lAJ.NITRO_NOTIFICATION]: function (e) {
            let { message: t, channel: n } = e;
            return (0, i.jsx)(Z.A, { message: t, channel: n });
        },
        [ej.lAJ.CHANNEL_LINKED_TO_LOBBY]: function (e) {
            let { message: t, channel: n, compact: l } = e;
            return (0, i.jsx)(el.A, { message: t, channel: n, compact: l });
        },
        [ej.lAJ.GIFTING_PROMPT]: function (e) {
            let { message: t, channel: n } = e,
                l = t.giftingPrompt,
                r = (0, a.bG)([V.default], () => V.default.getUser(l?.recipientUserId));
            return null == l || null == r
                ? null
                : (0, i.jsx)(J.A, { giftIntentType: l.giftIntentType, recipientUser: r, channel: n });
        },
        [ej.lAJ.IN_GAME_MESSAGE_NUX]: function (e) {
            let { message: t, channel: n, compact: l } = e;
            return (0, i.jsx)(em.A, { message: t, channel: n, author: t.author, compact: l });
        },
        [ej.lAJ.GUILD_JOIN_REQUEST_ACCEPT_NOTIFICATION]: A.Z_,
        [ej.lAJ.GUILD_JOIN_REQUEST_REJECT_NOTIFICATION]: A.QN,
        [ej.lAJ.GUILD_JOIN_REQUEST_WITHDRAWN_NOTIFICATION]: A.ez,
        [ej.lAJ.HD_STREAMING_UPGRADED]: void 0,
        [ej.lAJ.EMOJI_ADDED]: function (e) {
            let { message: t, channel: n, compact: l } = e,
                a = (0, $.P)({ user: t.author, channelId: n.id, guildId: n.guild_id, messageId: t.id });
            return (0, i.jsx)(h._W, { message: t, channel: n, compact: l, usernameHook: a });
        },
        [ej.lAJ.CHAT_WALLPAPER_SET]: void 0,
        [ej.lAJ.CHAT_WALLPAPER_REMOVED]: void 0,
        [ej.lAJ.REPORT_TO_MOD_BAN_USER]: j.A,
        [ej.lAJ.REPORT_TO_MOD_KICK_USER]: j.A,
        [ej.lAJ.REPORT_TO_MOD_TIMEOUT_USER]: j.A,
        [ej.lAJ.REPORT_TO_MOD_DELETED_MESSAGE]: j.A,
        [ej.lAJ.REPORT_TO_MOD_CLOSED_REPORT]: j.A,
        [ej.lAJ.PREMIUM_GROUP_INVITE]: function (e) {
            let { message: t, channel: n, compact: l } = e;
            return (0, i.jsx)(v.A, { message: t, channel: n, compact: l });
        },
        [ej.lAJ.VOICE_SESSION]: function (e) {
            let { message: t, channel: n, compact: l } = e;
            return (0, i.jsx)(eb.A, { message: t, channel: n, compact: l });
        },
        [ej.lAJ.GUILD_BOOST_UPSELL]: void 0,
        67: function (e) {
            let { message: t, compact: n } = e;
            return (0, i.jsx)(eE.A, { message: t, compact: n });
        },
    }),
    eD = l.memo(function (e) {
        let { message: t, channel: n, compact: l, disableInteraction: a } = e,
            { type: r } = t,
            s = eO[r];
        if (null == s) {
            var o;
            return (
                (o = Error(`unknown message type ${t.type}`)),
                q.A.captureException(o),
                new _.A("SystemMessage").error("", o),
                null
            );
        }
        return (0, i.jsx)(X.Ay, {
            message: t,
            content: (0, Q.Ay)(t).content,
            compact: l ?? !1,
            children: (0, i.jsx)(s, { message: t, channel: n, compact: l, disableInteraction: a }),
        });
    });
