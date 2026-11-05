(n.d(t, { A: () => eX }), n(801541), n(938796));
var i = n(889137),
    r = n(696292),
    a = n(665260),
    s = n(620632),
    l = n(765178),
    o = n(73153),
    d = n(155718),
    c = n(755364),
    u = n(870801),
    _ = n(149468),
    E = n(723176),
    A = n(154049),
    h = n(152685),
    f = n(354287);
n(695870);
var I = n(53677),
    p = n(76349),
    m = n(167189),
    g = n(486889),
    T = n(626584),
    S = n(390248),
    N = n(225123),
    C = n(607399),
    O = n(309010),
    R = n(967198),
    L = n(129230),
    y = n(652215);
function D(e, t) {
    L.default.track(y.HAw.APP_DIRECTORY_PROFILE_EMBED_SENT, {
        application_id: e,
        device_platform: C.Fr ? "mobile_web" : "desktop_web",
        guild_id: R.A.getGuildId(),
        channel_id: O.Ay.getChannelId(),
        section: t,
    });
}
var b = n(834757),
    v = n(753738),
    P = n(51271),
    M = n(844944),
    U = n(122906),
    w = n(21599),
    G = n(346542),
    x = n(279208),
    k = n(917878),
    F = n(433777),
    B = n(432005),
    V = n(521427),
    H = n(855986),
    j = n(69114),
    W = n(322683),
    Y = n(734057),
    K = n(498642),
    $ = n(544180);
let X = new T.A("MessageRoundtripTrackerStore");
function z(e) {
    return null != e.apiResponseTimestamp && null != e.gatewaySeenTimestamp;
}
function q(e) {
    let t = Y.A.getBasicChannel(e.channelId);
    if (null == t)
        return void X.warn(`Ignoring a messageData for channel ${e.channelId} because we can't find that channel.`);
    if (Math.random() > 0.1) return;
    let n = null == e.apiResponseTimestamp ? null : e.apiResponseTimestamp - e.initialSendTimestamp,
        i = null == e.gatewaySeenTimestamp ? null : e.gatewaySeenTimestamp - e.initialSendTimestamp,
        r = (0, W.O)();
    L.default.track(y.HAw.SEND_MESSAGE_ROUNDTRIP, {
        ...(0, j.A)(),
        api_latency_ms: n,
        gateway_latency_ms: i,
        channel_id: t.id,
        channel_type: t.type,
        guild_id: t.guild_id,
        guild_size: K.A.getMemberCount(t.guild_id),
        mobile_network_type: $.A.getType(),
        num_attachments: e.attachmentCount,
        ...(null != r && { mobile_signal_strength_level: r }),
    });
}
class Z extends H.Ay.Store {
    initialize() {
        this.waitFor(Y.A, K.A, $.A);
    }
    pendingMessages = new Map();
    recordMessageSendAttempt(e, t) {
        let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
            i = (n.attachments?.length ?? 0) + (n.attachmentsToUpload?.length ?? 0),
            r = {
                initialSendTimestamp: Date.now(),
                apiResponseTimestamp: null,
                gatewaySeenTimestamp: null,
                channelId: e,
                attachmentCount: i,
            };
        (this.pendingMessages.set(t, r),
            setTimeout(() => {
                let e = this.pendingMessages.get(t);
                null != e && (q(e), this.pendingMessages.delete(t));
            }, 3e4));
    }
    recordMessageSendApiResponse(e) {
        let t = this.pendingMessages.get(e);
        if (null != t) {
            let n = { ...t, apiResponseTimestamp: Date.now() };
            z(n) ? (q(n), this.pendingMessages.delete(e)) : this.pendingMessages.set(e, n);
        }
    }
    recordGatewayResponse(e) {
        let t = this.pendingMessages.get(e);
        if (null != t) {
            let n = { ...t, gatewaySeenTimestamp: Date.now() };
            z(n) ? (q(n), this.pendingMessages.delete(e)) : this.pendingMessages.set(e, n);
        }
    }
}
let Q = new Z(o.h, {
        MESSAGE_CREATE: function (e) {
            let { optimistic: t, message: n } = e,
                i = n.nonce;
            t || null == i || Q.recordGatewayResponse(i);
        },
    }),
    J = { init() {}, donateSentMessage(e, t) {}, deleteAllInteractions() {} };
var ee = n(963852),
    et = n(195880),
    en = n(488004),
    ei = n(491001),
    er = n(591563),
    ea = n(3137),
    es = n(969632),
    el = n(45787),
    eo = n(308528);
function ed(e) {
    if ("131" !== e) return null;
    let t = Y.A.getChannel(e);
    return null == t ? null : eo.A.ensurePrivateChannel(t.recipients);
}
var ec = n(561844),
    eu = n(710969);
n(853145);
var e_ = n(9842),
    eE = n(208284),
    eA = n(151282),
    eh = n(859403),
    ef = n(898578),
    eI = n(677413),
    ep = n(7909),
    em = n(935564),
    eg = n(616356),
    eT = n(46653);
n(580745);
var eS = n(71393),
    eN = n(299091),
    eC = n(596344),
    eO = n(576705),
    eR = n(290863),
    eL = n(218461),
    ey = n(101392),
    eD = n(287809),
    eb = n(927813),
    ev = n(45938),
    eP = n(975571),
    eM = n(722178),
    eU = n(811091),
    ew = n(292348),
    eG = n(157559),
    ex = n(768349),
    ek = n(401755),
    eF = n(381941),
    eB = n(792996);
let eV = new T.A("MessageActionCreators"),
    eH = new T.A("MessageQueue"),
    ej = !1;
class eW {
    completed = !1;
    markComplete() {
        this.completed = !0;
    }
}
function eY(e) {
    let {
            inviteKey: t,
            channelId: n,
            messageId: i,
            location: r,
            inviteAnalyticsMetadata: a,
            overrideProperties: s = {},
        } = e,
        l = eT.default.getId(),
        o = eN.A.getInvite(t),
        d = (0, w.y$)(t),
        c = null != o && (0, G.oK)(o),
        u = o?.target_application?.id;
    null != u && c && (0, f.KL)(u, ex.J.ACTIVITY_INVITE, l);
    let E = Y.A.getChannel(n);
    if (null != E) {
        let e = null;
        E.isMultiUserDM() ? (e = y.G2g.GDM_INVITE) : E.isPrivate() || (e = y.G2g.SERVER_INVITE);
        let t = {};
        if (null != o && o.state === y.elq.RESOLVED && null != o.channel) {
            let n = o.channel;
            ((t.invite_channel_id = n.id),
                (t.invite_guild_id = o.guild?.id),
                (t.invite_channel_type = n.type),
                null != o.inviter && (t.invite_inviter_id = o.inviter.id),
                null != o.target_application && (t.application_id = o.target_application.id));
            let i = eg.A.getLastActiveStream();
            if (null != i && i.channelId === n.id) {
                ((e = y.G2g.STREAM), (t.destination_user_id = i.ownerId));
                let n = (0, b.Ee)(i, eR.A);
                t.application_id = null != n ? n.id : null;
            }
        }
        (null != a &&
            (null != a.suggestionData &&
                ((t.is_suggested = a.suggestionData.isAffinitySuggestion),
                (t.row_num = a.suggestionData.rowNum),
                (t.num_total = a.suggestionData.numTotal),
                (t.num_affinity_connections = a.suggestionData.numAffinityConnections),
                (t.is_filtered = a.suggestionData.isFiltered)),
            (t.source = a.source)),
            (t = {
                ...t,
                location: r,
                invite_type: e,
                invite_code: d.baseCode,
                guild_id: E.getGuildId(),
                channel_id: E.id,
                message_id: i,
                send_type: y.gfq.DIRECT_MESSAGE,
                invite_guild_scheduled_event_id: d.guildScheduledEventId,
                invite_instance_id: (0, w._U)(d.baseCode, i) ?? null,
                ...s,
            }),
            _.Ay.trackWithMetadata(y.HAw.INVITE_SENT, t));
    } else {
        let e = {};
        null != o &&
            o.state === y.elq.RESOLVED &&
            null != o.inviter &&
            ((e.invite_inviter_id = o.inviter.id),
            null != o.target_application && (e.application_id = o.target_application.id),
            (e = {
                ...e,
                location: r,
                invite_type: y.G2g.FRIEND_INVITE,
                invite_code: d.baseCode,
                message_id: i,
                send_type: y.gfq.DIRECT_MESSAGE,
                invite_guild_scheduled_event_id: d.guildScheduledEventId,
                invite_instance_id: (0, w._U)(d.baseCode, i) ?? null,
                ...s,
            }),
            _.Ay.trackWithMetadata(y.HAw.INVITE_SENT, e));
    }
}
let eK = {
        [y.t02.SLOWMODE_RATE_LIMITED]: {
            messageName: "SLOWMODE_RATE_LIMITED",
            messageGetter: (e) => eB.intl.formatToPlainString(eB.t.IWntYg, { seconds: e.rateLimitPerUser }),
        },
        [y.t02.INVALID_MESSAGE_SEND_NO_MUTUAL_GUILDS]: {
            messageName: "INVALID_MESSAGE_SEND_NO_MUTUAL_GUILDS",
            messageGetter: (e) => {
                let t = eP.A.getArticleURL(y.MVz.DM_COULD_NOT_BE_DELIVERED),
                    n = e.rawRecipients ?? [];
                return e.isDM() && 1 === n.length && n.some((e) => e.bot)
                    ? eB.intl.formatToPlainString(eB.t.SkGL7l, { helpUrl: t })
                    : eB.intl.formatToPlainString(eB.t.llTkqr, { helpUrl: t });
            },
        },
        [y.t02.INVALID_MESSAGE_SEND_USER]: {
            messageName: "INVALID_MESSAGE_SEND_USER",
            messageGetter: () =>
                eB.intl.formatToPlainString(eB.t.SkGL7l, {
                    helpUrl: eP.A.getArticleURL(y.MVz.DM_COULD_NOT_BE_DELIVERED),
                }),
        },
        [y.t02.TOO_MANY_THREADS]: {
            messageName: "TOO_MANY_THREADS",
            messageGetter: (e) =>
                e.isForumLikeChannel() || e.isForumPost()
                    ? eB.intl.string(eB.t["/jUd2+"])
                    : eB.intl.string(eB.t["5EMPA7"]),
        },
        [y.t02.TOO_MANY_ANNOUNCEMENT_THREADS]: {
            messageName: "TOO_MANY_ANNOUNCEMENT_THREADS",
            messageGetter: () => eB.intl.string(eB.t["aY+lLC"]),
        },
        [y.t02.HARMFUL_LINK_MESSAGE_BLOCKED]: {
            messageName: "HARMFUL_LINK_MESSAGE_BLOCKED",
            messageGetter: () => eB.intl.formatToPlainString(eB.t.zSG3Qy, { helpUrl: y.X7G.HARMFUL_LINKS }),
        },
        [y.t02.HARMFUL_URL_BLOCKED]: {
            messageName: "HARMFUL_URL_BLOCKED",
            messageGetter: () => eB.intl.string(eB.t.WxX2Fd),
        },
        [y.t02.EMAIL_VERIFICATION_REQUIRED]: {
            messageName: "BOT_REQUIRES_EMAIL_VERIFICATION",
            messageGetter: () => eB.intl.string(eB.t.k1Cjqr),
        },
        [y.t02.GUILD_MESSAGE_UPDATE_RATE_LIMIT_EXCEEDED]: {
            messageName: "GUILD_MESSAGE_UPDATE_RATE_LIMIT_EXCEEDED",
            messageGetter: () => eB.intl.string(eB.t.Z5SUuv),
        },
        [y.t02.RATE_LIMIT_DM_OPEN]: {
            messageName: "BOT_DM_RATE_LIMITED",
            messageGetter: () => eB.intl.string(eB.t.E8nbNb),
        },
        [y.t02.SEND_MESSAGE_TEMPORARILY_DISABLED]: {
            messageName: "BOT_DM_SEND_MESSAGE_TEMPORARILY_DISABLED",
            messageGetter: () => eB.intl.string(eB.t.aRUbah),
        },
        [y.t02.INVALID_MESSAGE_SEND_GAME_FRIEND_DM]: {
            messageName: "BOT_DM_SEND_MESSAGE_INVALID_FOR_GAME_FRIEND",
            messageGetter: () => eB.intl.string(eB.t["/meGhR"]),
        },
        [y.t02.INVALID_MESSAGE_SEND_PROVISIONAL_ACCOUNT_OFFLINE]: {
            messageName: "BOT_DM_SEND_MESSAGE_INVALID_OFFLINE_PROVISIONAL_ACCOUNT",
            messageGetter: () => eB.intl.string(eB.t.Oc1Zjw),
        },
        [y.t02.TOTAL_ATTACHMENT_SIZE_TOO_LARGE]: {
            messageName: "TOTAL_ATTACHMENT_SIZE_TOO_LARGE",
            messageGetter: () => eB.intl.formatToPlainString(eB.t.DYFPg2, { maxSizeMb: ew.YK }),
        },
        [y.t02.CLOUD_UPLOAD_NOT_FOUND]: {
            messageName: "CLOUD_UPLOAD_NOT_FOUND",
            messageGetter: () => eB.intl.string(eB.t.bQldfH),
        },
        [y.t02.INVALID_PERMISSIONS]: {
            messageName: "INVALID_PERMISSIONS",
            messageGetter: () => eB.intl.string(eB.t.zl4Weq),
        },
    },
    e$ = {
        receiveMessage(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
            o.h.dispatch({
                type: "MESSAGE_CREATE",
                channelId: e,
                message: t,
                optimistic: n,
                sendMessageOptions: i,
                isPushNotification: !1,
            });
        },
        sendBotMessage(e, t, n, i) {
            (null != n &&
                _.Ay.trackWithMetadata(y.HAw.AUTOMATED_MESSAGE_RECEIVED, { message_author: "Clyde", message_name: n }),
                e$.receiveMessage(e, (0, ee.pO)({ messageId: i, channelId: e, content: t, loggingName: n })));
        },
        sendNitroSystemMessage(e, t, n) {
            let i = (0, ee.Ay)({
                channelId: e,
                nonce: n,
                type: y.lAJ.NITRO_NOTIFICATION,
                content: t,
                flags: y.pr7.EPHEMERAL,
                author: { id: "1", username: "Nitro Notification", discriminator: "0000", avatar: "nitro", bot: !0 },
            });
            e$.receiveMessage(e, { ...i, state: y.cmJ.SENT, channel_id: e }, !0);
        },
        sendGiftingPromptSystemMessage(e, t) {
            let n = (0, ee.Ay)({
                channelId: e,
                type: y.lAJ.GIFTING_PROMPT,
                content: "",
                flags: y.pr7.EPHEMERAL,
                author: {
                    id: "1",
                    username: "Gifting Prompt",
                    discriminator: "0000",
                    avatar: "gifting_prompt",
                    bot: !0,
                },
                giftingPrompt: t,
            });
            e$.receiveMessage(e, { ...n, state: y.cmJ.SENT }, !0);
        },
        sendClydeError(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                n = Y.A.getChannel(e);
            if (null == n) return;
            let i = eK[t];
            null == i
                ? e$.sendBotMessage(
                      e,
                      eB.intl.formatToPlainString(eB.t.SkGL7l, {
                          helpUrl: eP.A.getArticleURL(y.MVz.DM_COULD_NOT_BE_DELIVERED),
                      }),
                      `SEND_FAILED (${t})`,
                  )
                : e$.sendBotMessage(e, i.messageGetter(n), i.messageName);
        },
        sendExplicitMediaClydeError(e, t, n) {
            let r = Y.A.getChannel(e);
            if (null == r) return;
            let { message: a, messageName: s } = (0, i.YW)({ isDM: r.isDM(), isGDM: r.isGroupDM() })
                    .with({ isDM: !0 }, () => ({
                        message: eB.intl.string(eB.t["mktny/"]),
                        messageName: "BOT_DM_EXPLICIT_CONTENT",
                    }))
                    .with({ isDM: !1, isGDM: !0 }, () => ({
                        message: eB.intl.string(eB.t["mktny/"]),
                        messageName: "BOT_GDM_EXPLICIT_CONTENT",
                    }))
                    .otherwise(() => ({
                        message: eB.intl.string(eB.t.i4AbAS),
                        messageName: "BOT_GUILD_EXPLICIT_CONTENT",
                    })),
                l = (0, et.m)();
            (e$.sendBotMessage(e, a, s, l),
                (0, S.hv)({
                    action: S.rY.EXPLICIT_MEDIA_FALSE_POSITIVE_CLYDE_MESSAGE_SENT,
                    messageId: l,
                    channelId: e,
                    context: n,
                }),
                null != t &&
                    t.length > 0 &&
                    o.h.dispatch({
                        type: "MESSAGE_EXPLICIT_CONTENT_FP_CREATE",
                        messageId: l,
                        channelId: e,
                        attachments: t,
                    }));
        },
        truncateMessages(e, t, n) {
            o.h.dispatch({ type: "TRUNCATE_MESSAGES", channelId: e, truncateBottom: t, truncateTop: n });
        },
        clearChannel(e) {
            o.h.dispatch({ type: "CLEAR_MESSAGES", channelId: e });
        },
        jumpToPresent(e, t) {
            e$.trackJump(e, null, "Present");
            let n = { present: !0 };
            eC.A.hasPresent(e)
                ? o.h.dispatch({ type: "LOAD_MESSAGES_SUCCESS_CACHED", jump: n, channelId: e, limit: t })
                : e$.fetchMessages({ channelId: e, limit: t, jump: n });
        },
        trackJump(e, t, n, i) {
            _.Ay.trackWithMetadata(y.HAw.JUMP, { context: n, channel_id: e, message_id: t, ...i });
        },
        jumpToMessage(e) {
            let {
                channelId: t,
                messageId: n,
                flash: i = !1,
                offset: r,
                context: a,
                extraProperties: s = null,
                isPreload: l,
                returnMessageId: o,
                skipLocalFetch: d,
                jumpType: c,
                avoidInitialScroll: u,
                onJumpComplete: _,
                nitroPrefetchKey: E,
            } = e;
            return (
                "string" == typeof a && e$.trackJump(t, n, a, s),
                e$.fetchMessages({
                    channelId: t,
                    limit: 30,
                    jump: { messageId: n, flash: i, offset: r, returnMessageId: o, jumpType: c, onJumpComplete: _ },
                    isPreload: l,
                    skipLocalFetch: d,
                    avoidInitialScroll: u,
                    nitroPrefetchKey: E,
                })
            );
        },
        focusMessage(e) {
            let { channelId: t, messageId: n } = e;
            e$.fetchMessages({ channelId: t, limit: 30, focus: { messageId: n } });
        },
        async fetchMessage(e) {
            let { channelId: t, messageId: n } = e,
                i = await s.Bo.get({
                    url: y.Rsh.MESSAGES(t),
                    query: { limit: 1, around: n },
                    retries: 2,
                    oldFormErrors: !0,
                    rejectWithError: (0, s.fT)(),
                });
            if (i.body.length > 0) return (0, B.rh)(i.body[0]);
        },
        fetchMessages(e) {
            let t,
                {
                    channelId: n,
                    before: i,
                    after: r,
                    limit: a,
                    jump: l,
                    focus: d,
                    isPreload: u,
                    skipLocalFetch: _,
                    truncate: E,
                    forICYMI: A,
                    avoidInitialScroll: h,
                    feature: f,
                    fetchKey: I,
                    nitroPrefetchKey: p,
                } = e,
                m = Y.A.getChannel(n),
                g = N.A.isConnectedOrOverlay(),
                T = Date.now();
            if (null != m && m.type === y.rbe.GUILD_STORE) return !1;
            if (
                "131" === n ||
                (eV.log(`Fetching messages for ${n} between ${r} and ${i}. jump=${JSON.stringify(l)}`),
                e$._tryFetchMessagesCached({
                    channelId: n,
                    before: i,
                    after: r,
                    limit: a,
                    jump: l,
                    focus: d,
                    truncate: E,
                }))
            )
                return;
            (em.A.fetchMessages.recordStart(), k.A.recordChannelFetchStart(n, I ?? T, i, r, a));
            let S = l ?? void 0;
            null == S && null != d && (S = { ...d });
            let C = c.A.getOrCreate(n).loadStart(S);
            (c.A.commit(C), o.h.dispatch({ type: "LOAD_MESSAGES" }));
            let O = S?.messageId;
            null != p && (O = void 0);
            let R = new eW();
            return (
                _ || this.fetchLocalMessages(n, I ?? T, i, r, a, R),
                null != p && (t = { prefetchKey: p }),
                s.Bo.get({
                    url: y.Rsh.MESSAGES(n),
                    query: { before: i, after: r, limit: a, around: O, preload: u, feature: f },
                    headers: t,
                    retries: 2,
                    oldFormErrors: !0,
                    rejectWithError: (0, s.fT)(),
                }).then(
                    (e) => (
                        em.A.fetchMessages.recordEnd(),
                        em.A.dispatchMessages.measure(() => {
                            let t = e.body,
                                s = null != i,
                                d = null != r,
                                c = null == i && null == r,
                                u = null != O || (t.length === a && (s || c)),
                                _ = null != O || (d && t.length === a);
                            if (null != O) {
                                let e = Math.floor(a / 2),
                                    i = e + (a % 2),
                                    r = [
                                        O,
                                        ...t.map((e) => {
                                            let { id: t } = e;
                                            return t;
                                        }),
                                    ]
                                        .filter((e, t, n) => n.indexOf(e) === t)
                                        .sort(eU.default.compare)
                                        .indexOf(O);
                                if ((r < i - 1 && (u = !1), t.length - r < e && (_ = !1), _ && t.length > 0)) {
                                    let e = eL.Ay.lastMessageId(n);
                                    t[0].id === e && (_ = !1);
                                }
                            }
                            (eV.log(`Fetched ${t.length} messages for ${n} isBefore:${s} isAfter:${d}`),
                                R.markComplete(),
                                o.h.dispatch({
                                    type: "LOAD_MESSAGES_SUCCESS",
                                    channelId: n,
                                    messages: t,
                                    isBefore: s,
                                    isAfter: d,
                                    before: i,
                                    after: r,
                                    hasMoreBefore: u,
                                    hasMoreAfter: _,
                                    limit: a,
                                    jump: l,
                                    forICYMI: A,
                                    isStale: !g || N.A.lastTimeConnectedChanged() >= T,
                                    truncate: E,
                                    avoidInitialScroll: h,
                                    requestStartTime: T,
                                }),
                                k.A.recordChannelFetchedNetwork(n, I ?? T, i, r, a, t));
                        }),
                        !0
                    ),
                    () => (
                        eV.log(`Failed to fetch messages for ${n}`),
                        o.h.dispatch({ type: "LOAD_MESSAGES_FAILURE", channelId: n }),
                        !1
                    ),
                )
            );
        },
        async fetchLocalMessages(e, t, n, i, r, a) {
            let s = Y.A.getBasicChannel(e),
                l = c.A.getOrCreate(e),
                d = E.A.database();
            if (null == d || null == s || null != n || null != i) return void em.A.addLocalMessages(e, -1);
            if (l.ready && !l.cached) return void em.A.addLocalMessages(e, -2);
            let u = await (0, A.kk)(() => h.Ay.load(d, e, r));
            if (null == u) return void em.A.addLocalMessages(e, -3);
            if (
                (eV.log(
                    `fetched ${u.messages.length} messages from local database (channel_id: ${e}, remote_fetch_completed: ${a.completed})`,
                ),
                em.A.addLocalMessages(e, u.messages.length),
                !a.completed && u.messages.length > 0)
            ) {
                let a = u.messages.length >= r && u.connectionId === N.A.lastTimeConnectedChanged();
                (k.A.recordChannelFetchedLocal(e, t, n, i, r, u.messages),
                    o.h.dispatch({
                        type: "LOCAL_MESSAGES_LOADED",
                        guildId: s.guild_id,
                        channelId: e,
                        users: u.users,
                        members: u.members,
                        messages: u.messages,
                        stale: !a,
                    }));
            }
        },
        async fetchNewLocalMessages(e, t) {
            let n = Y.A.getBasicChannel(e),
                i = E.A.database();
            if (null == i || null == n) return;
            let r = c.A.getOrCreate(e);
            if (r.hasMoreAfter) return;
            let a = await (0, A.kk)(() => h.Ay.load(i, e, t));
            if (null == a) return;
            r = c.A.getOrCreate(e);
            let s = r.last()?.id,
                l = null == s ? a.messages : a.messages.filter((e) => eU.default.compare(e.id, s) > 0);
            (eV.log(`Fetched ${a.messages.length} messages from the cache after foregrounding. ${l.length} are new`),
                0 !== l.length &&
                    o.h.dispatch({
                        type: "LOCAL_MESSAGES_LOADED",
                        guildId: n.guild_id,
                        channelId: e,
                        users: a.users,
                        members: a.members,
                        messages: l,
                        stale: !0,
                        isForegroundCacheLoad: (0, ei.K)(),
                    }));
        },
        _tryFetchMessagesCached(e) {
            let { channelId: t, before: n, after: i, limit: r, jump: a, focus: s, truncate: l } = e,
                d = eC.A.getMessages(t);
            if (d.cached || !d.ready) return !1;
            if (a?.messageId != null || s?.messageId != null) {
                if (a?.messageId != null && d.has(a.messageId, !1))
                    return (
                        o.h.dispatch({
                            type: "LOAD_MESSAGES_SUCCESS_CACHED",
                            channelId: t,
                            jump: a,
                            limit: r,
                            truncate: l,
                        }),
                        !0
                    );
                if (s?.messageId != null)
                    if (d.has(s.messageId, !1))
                        return (
                            o.h.dispatch({
                                type: "LOAD_MESSAGES_SUCCESS_CACHED",
                                channelId: t,
                                focus: s,
                                limit: r,
                                truncate: l,
                            }),
                            !0
                        );
                    else a = { ...s };
                let e = a?.messageId != null ? eU.default.extractTimestamp(a?.messageId) : 0,
                    n = d.first(),
                    i = d.last();
                if (
                    (!d.hasMoreBefore && null != n && eU.default.extractTimestamp(n.id) >= e) ||
                    (!d.hasMoreAfter && null != i && eU.default.extractTimestamp(i.id) <= e) ||
                    (null != n &&
                        null != i &&
                        eU.default.extractTimestamp(n.id) < e &&
                        eU.default.extractTimestamp(i.id) > e)
                )
                    return (
                        o.h.dispatch({ type: "LOAD_MESSAGES_SUCCESS_CACHED", channelId: t, jump: a, limit: 30 }), !0
                    );
            } else if (null != n && d.hasBeforeCached(n))
                return (
                    o.h.dispatch({
                        type: "LOAD_MESSAGES_SUCCESS_CACHED",
                        channelId: t,
                        before: n,
                        limit: r,
                        truncate: l,
                    }),
                    !0
                );
            else if (null != i && d.hasAfterCached(i))
                return (
                    o.h.dispatch({
                        type: "LOAD_MESSAGES_SUCCESS_CACHED",
                        channelId: t,
                        after: i,
                        limit: r,
                        truncate: l,
                    }),
                    !0
                );
            return !1;
        },
        async sendMessage(e, t) {
            let n = !(arguments.length > 2) || void 0 === arguments[2] || arguments[2],
                i = arguments.length > 3 ? arguments[3] : void 0;
            if (t.reaction) return Promise.resolve();
            let r = await ed(e);
            if (null != r) return e$.sendMessage(r, t, n, i);
            let a = i.nonce ?? (0, et.m)();
            i = { ...i, nonce: a };
            let s = function () {
                return e$._sendMessage(e, t, i);
            };
            return (null == i.scheduledTimestamp && Q.recordMessageSendAttempt(e, a, i), eC.A.isReady(e))
                ? s()
                : n && "131" !== e
                  ? (eH.info(`Waiting for channel ${e} to be ready before sending.`),
                    new Promise((t, n) => {
                        eC.A.whenReady(e, () => {
                            (eH.info(`Channel ${e} is ready for sending now.`), s().then(t, n));
                        });
                    }))
                  : s();
        },
        getSendMessageOptionsForReply: (e) =>
            null == e
                ? {}
                : {
                      messageReference: {
                          guild_id: e.channel.getGuildId() ?? void 0,
                          channel_id: e.channel.id,
                          message_id: e.message.id,
                      },
                      allowedMentions: e.shouldMention ? void 0 : { parse: Object.values(y.uw8), replied_user: !1 },
                      mediaMention: e.mediaMention,
                  },
        getSendMessageOptionsForStickers(e) {
            let { isGif: t, stickers: n } = e;
            return null == n || 0 === n.length || t ? {} : { stickerIds: n };
        },
        getSendMessageOptionsForScheduledMessage(e) {
            let { scheduledTimestamp: t } = e;
            return null == t ? {} : { scheduledTimestamp: t };
        },
        getSendMessageOptions(e) {
            let t = e$.getSendMessageOptionsForReply(e.pendingReply),
                n = e$.getSendMessageOptionsForStickers({ ...e }),
                i = e$.getSendMessageOptionsForScheduledMessage({ ...e });
            return { ...t, ...n, ...i };
        },
        sendInvite(e, t, n, i, r) {
            let a = (0, x.A)(t);
            return (
                null != r &&
                    (a = `${r}
${a}`),
                e$._sendMessage(
                    e,
                    { content: a, tts: !1, validNonShortcutEmojis: [], invalidEmojis: [] },
                    { location: n, inviteAnalyticsMetadata: i },
                )
            );
        },
        sendActivityBookmark: (e, t, n, i) =>
            e$._sendMessage(
                e,
                { content: t, tts: !1, validNonShortcutEmojis: [], invalidEmojis: [] },
                { location: n, inviteAnalyticsMetadata: i },
            ),
        sendStickers(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
                i = arguments.length > 3 ? arguments[3] : void 0,
                r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
                a =
                    "string" == typeof n
                        ? { content: n, invalidEmojis: [], validNonShortcutEmojis: [], tts: r }
                        : { ...n, tts: n.tts ?? r };
            return e$._sendMessage(e, a, { ...i, stickerIds: t });
        },
        sendGreetMessage(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                { messageReference: i, allowedMentions: r } = n;
            return s.Bo.post({
                url: y.Rsh.MESSAGES_GREET(e),
                body: { sticker_ids: [t], allowed_mentions: r, message_reference: i },
                oldFormErrors: !0,
                rejectWithError: (0, s.fT)(),
                context: { location: eF.Hx.GREET },
            }).then(
                (n) => (
                    J.donateSentMessage(n.body.content, e),
                    e$.receiveMessage(e, n.body),
                    o.h.dispatch({ type: "STICKER_TRACK_USAGE", stickerIds: [t] }),
                    n
                ),
                (t) => {
                    throw (
                        eV.log("Failed to send greeting"),
                        429 !== t.status && e$.sendClydeError(e, t.body.code),
                        o.h.dispatch({ type: "MESSAGE_SEND_FAILED", messageId: t.body.id, channelId: e }),
                        t
                    );
                },
            );
        },
        sendPollMessage(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            return e$._sendMessage(
                e,
                { content: "", tts: !1, validNonShortcutEmojis: [], invalidEmojis: [] },
                { ...n, poll: t, location: eF.Hx.POLL_CREATION },
            );
        },
        validateMessage(e, t, n) {
            let i, r;
            return (
                e.some((e) => e.animated) && !eM.Ay.canUseAnimatedEmojis(t)
                    ? ((i = eB.intl.string(eB.t.msFJy8)), (r = "INVALID_ANIMATED_EMOJI_BODY"))
                    : eO.A.canWithPartialContext(y.xBc.USE_EXTERNAL_EMOJIS, { channelId: n })
                      ? ((i = eB.intl.string(eB.t.FzugNl)), (r = "INVALID_EXTERNAL_EMOJI_BODY_UPGRADE"))
                      : ((i = eB.intl.string(eB.t["Q87rI/"])), (r = "INVALID_EXTERNAL_EMOJI_BODY")),
                { errorMessage: i, errorMessageName: r }
            );
        },
        async _sendMessage(e, t, n) {
            let i,
                s = ed(e);
            if (null != s)
                return (
                    eH.info("Converting channel to a private channel"),
                    s.then(
                        (e) => (eH.info("Finished converting channel to a private channel"), e$._sendMessage(e, t, n)),
                    )
                );
            let l = t.content,
                { invalidEmojis: d, validNonShortcutEmojis: c, tts: E = !1 } = t,
                {
                    activityAction: A,
                    location: h,
                    inviteAnalyticsMetadata: T,
                    stickerIds: N,
                    messageReference: C,
                    allowedMentions: O,
                    poll: R,
                    sharedCustomTheme: b,
                    contentInventoryEntry: w,
                    attachments: G,
                    attachmentsToUpload: x,
                    onAttachmentUploadError: k,
                    announcementSendOptions: H,
                    checkpointCardType: j,
                    mediaMention: W,
                    scheduledTimestamp: K,
                } = n,
                $ = n.flags ?? 0,
                [X, z] = (0, eI.Ay)(l);
            X && ((l = z), ($ = (0, a.UI)($, y.pr7.SUPPRESS_NOTIFICATIONS)));
            let q = Y.A.getChannel(e),
                Z = eS.A.getGuild(q?.guild_id);
            (0, V.Zv)(Z, q, "_sendMessage") && ($ = (0, a.UI)($, y.pr7.IS_GUILD_OFFICIAL));
            let ei = !1,
                el = n.messageReference?.type === y.SH7.FORWARD;
            if (
                "" === l &&
                null == A &&
                null == N &&
                null == R &&
                null == b &&
                null == w &&
                !el &&
                (null == G || 0 === G.length) &&
                null == j &&
                (null == t.components || 0 === t.components.length)
            )
                if (null == x || !(x.length > 0)) return Promise.resolve();
                else ei = !0;
            let eo = null != C ? y.lAJ.REPLY : y.lAJ.DEFAULT,
                ep = n.nonce ?? (0, et.m)(),
                em = (0, ee.Ay)({
                    channelId: e,
                    content: l,
                    tts: E,
                    type: eo,
                    messageReference: C,
                    allowedMentions: O,
                    flags: 0 !== $ ? $ : void 0,
                    nonce: ep,
                    poll: (0, es.G8)(R),
                    sharedCustomTheme: b,
                    mediaMention: W,
                });
            if (
                (!1 !== n.eagerDispatch &&
                    null == K &&
                    ((0, er.iq)(e, em.id),
                    null != N && (em.sticker_items = N.map((e) => ef.A.getStickerById(e)).filter((e) => null != e)),
                    e$.receiveMessage(e, em, !0, n)),
                !ej && null != d && d.length > 0)
            ) {
                ej = !0;
                let t = eD.default.getCurrentUser(),
                    { errorMessage: n, errorMessageName: i } = e$.validateMessage(d, t, e);
                e$.sendBotMessage(e, n, i);
            }
            let eg = {
                type: null != H ? u.AZ.SEND_ANNOUNCEMENT : u.AZ.SEND,
                message: {
                    channelId: e,
                    content: l,
                    nonce: ep,
                    tts: E,
                    message_reference: C,
                    allowed_mentions: O,
                    flags: $,
                    analyticsLocation: h,
                },
            };
            if (
                (null != t.components && (eg.message.components = t.components),
                null != H &&
                    ((eg.message.create_thread = H.createThread),
                    (eg.message.title = H.threadName),
                    (eg.message.publish = H.publish ?? !1)),
                null != A)
            ) {
                let e,
                    { enabled: t } = eE.A.getConfig({
                        guildId: q?.guild_id ?? "",
                        location: "MessageActionCreators.sendMessage",
                    });
                if (!(t && A.type === y.xL.STREAM_REQUEST) && A?.activity == null)
                    return Promise.reject(Error("Activity is required unless it is a non-game stream request."));
                let n = A?.activity?.session_id;
                if (
                    null !=
                    (e =
                        A.type === y.xL.JOIN_REQUEST || (A.type === y.xL.STREAM_REQUEST && null != n) || null != n
                            ? n
                            : eT.default.getSessionId())
                ) {
                    let t = { type: A.type, session_id: e, target_user_id: A.targetUserId },
                        { activity: n } = A;
                    (n?.party != null && null != n.party.id && (t.party_id = n.party.id),
                        (eg.message.application_id = n?.application_id),
                        (eg.message.activity = t));
                }
            }
            if (
                (null != R && (eg.message.poll = R),
                null != b && (eg.message.shared_client_theme = b),
                null != N && (eg.message.sticker_ids = N),
                ea.A.isEnabled() && (eg.message.has_poggermode_enabled = !0),
                null != j && (eg.message.checkpoint_card_type = j),
                null != w && (eg.message.content_inventory_entry = w),
                null != W && (eg.message.media_mention = W),
                null != G && G.length > 0 && (eg.message.attachments = G),
                null != x && x.length > 0)
            )
                try {
                    let t = await (async function (e) {
                        let { channelId: t, message: n, items: i, shouldUploadFailureSendNotification: r } = e,
                            a = new F.A(),
                            s = (0, B.rh)({ ...n, id: a._file.id });
                        (a.on("start", (e) => {
                            o.h.dispatch({ type: "UPLOAD_START", channelId: t, file: e, message: s, uploader: a });
                        }),
                            a.on("progress", (e) => {
                                o.h.dispatch({ type: "UPLOAD_PROGRESS", channelId: t, file: e });
                            }),
                            a.on("error", (e, n, i, a) => {
                                o.h.dispatch({
                                    type: "UPLOAD_FAIL",
                                    channelId: t,
                                    file: e,
                                    messageId: s.id,
                                    shouldSendNotification: r,
                                });
                            }),
                            a.on("complete", (e) => {
                                a._aborted &&
                                    o.h.dispatch({ type: "UPLOAD_COMPLETE", channelId: t, file: e, aborted: !0 });
                            }));
                        let l = await a.uploadFiles(i);
                        if (!a._aborted) return { attachments: l, uploader: a };
                    })({
                        channelId: e,
                        nonce: ep,
                        items: x,
                        message: em,
                        shouldUploadFailureSendNotification: !n.doNotNotifyOnError && void 0,
                    });
                    if (null == t) return;
                    let r = t.attachments;
                    if (((i = t.uploader), ei && (null == r || 0 === r.length))) return;
                    null != r && (eg.message.attachments = r.map((e, t) => (0, ew.OW)(e, t)));
                } catch (r) {
                    let { file: e, code: t, reason: n, responseBody: i } = r;
                    ((0, en.O)({ fileItems: e.items, failureCode: t, errorMessage: n?.msg }), k?.(e, t, n, i));
                    return;
                }
            if (null != K)
                try {
                    let t = await (0, eA.pr)({ channelId: e, scheduledTimestamp: K, messageSendData: eg.message });
                    return (
                        null != i &&
                            o.h.dispatch({ type: "UPLOAD_COMPLETE", channelId: e, file: i._file, aborted: !1 }),
                        (0, eh.c_)(K),
                        t
                    );
                } catch (t) {
                    throw (
                        null != i &&
                            o.h.dispatch({
                                type: "UPLOAD_FAIL",
                                channelId: e,
                                file: i._file,
                                messageId: ep,
                                noSendFailed: !0,
                            }),
                        !0 !== n.doNotNotifyOnError && (0, eh.vh)(t),
                        t
                    );
                }
            return new Promise((t, a) => {
                let s = Date.now(),
                    d = u.Ay.length,
                    E = Math.floor(1e4 * Math.random());
                (eH.info(`Queueing message to be sent LogId:${E}`),
                    u.Ay.enqueue(
                        eg,
                        (E) => {
                            let A = Date.now() - s;
                            if (E.ok) {
                                var O, b, G, k, F, B, V;
                                let a;
                                (J.donateSentMessage(l, e),
                                    e$.receiveMessage(e, E.body, !0, {
                                        sendAnalytics: { duration: A, queueSize: d },
                                        poll: R,
                                    }));
                                let s = eU.default.cast(e),
                                    u = M.A.getRequest(s);
                                if (null != u) {
                                    let { guildId: t, userId: n, applicationStatus: i } = u;
                                    (0, P.cK)({
                                        guildId: t,
                                        channelId: e,
                                        messageId: E.body.id,
                                        joinRequestStatus: i,
                                        joinRequestUserId: n,
                                    });
                                }
                                (Q.recordMessageSendApiResponse(ep),
                                    o.h.dispatch({
                                        type: "SLOWMODE_RESET_COOLDOWN",
                                        slowmodeType: ey.R.SendMessage,
                                        channelId: e,
                                    }),
                                    o.h.dispatch({ type: "EMOJI_TRACK_USAGE", emojiUsed: c }),
                                    o.h.dispatch({ type: "STICKER_TRACK_USAGE", stickerIds: N }),
                                    o.h.dispatch({
                                        type: "LOCAL_MESSAGE_CREATE",
                                        message: { channel_id: e, author: eD.default.getCurrentUser() },
                                    }),
                                    (function (e) {
                                        let {
                                                content: t,
                                                channelId: n,
                                                messageId: i,
                                                location: a,
                                                inviteAnalyticsMetadata: s,
                                                overrideProperties: l = {},
                                            } = e,
                                            o = eT.default.getId();
                                        (0, g.Ay)(t).forEach((e) => {
                                            let { type: t, code: d, url: c } = e;
                                            if ((0, p.Yf)(t)) {
                                                let e = (0, p.kK)(t, d, c);
                                                if (null == e) return;
                                                let { applicationId: n } = e;
                                                switch (e.type) {
                                                    case m.I.APP_DIRECTORY_PROFILE:
                                                        (D(n), (0, f.KL)(d, ex.J.APP_DISCOVERY, o));
                                                        break;
                                                    case m.I.APP_DIRECTORY_STOREFRONT:
                                                        D(n, "storefront");
                                                        break;
                                                    case m.I.APP_DIRECTORY_STOREFRONT_SKU:
                                                        D(n, "storefront_sku");
                                                        break;
                                                    case m.I.ACTIVITY_BOOKMARK: {
                                                        let { params: t } = e;
                                                        (0, f.KL)(n, ex.J.ACTIVITY, t.referrerId ?? o, t.customId);
                                                        break;
                                                    }
                                                    case m.I.APP_OAUTH2_LINK:
                                                        ((0, f.KL)(n, ex.J.OAUTH, o),
                                                            _.Ay.trackWithMetadata(
                                                                y.HAw.APP_OAUTH2_LINK_EMBED_URL_SENT,
                                                                { application_id: n },
                                                            ));
                                                }
                                            } else
                                                switch (t) {
                                                    case m.I.INVITE:
                                                        eY({
                                                            inviteKey: d,
                                                            channelId: n,
                                                            messageId: i,
                                                            location: a,
                                                            inviteAnalyticsMetadata: s,
                                                            overrideProperties: l,
                                                        });
                                                        break;
                                                    case m.I.TEMPLATE: {
                                                        let e = U.A.getGuildTemplate(d);
                                                        if (null == e || e.state === ek.QB.RESOLVING) return;
                                                        _.Ay.trackWithMetadata(y.HAw.GUILD_TEMPLATE_LINK_SENT, {
                                                            guild_template_code: d,
                                                            guild_template_name: e.name,
                                                            guild_template_description: e.description,
                                                            guild_template_guild_id: e.sourceGuildId,
                                                        });
                                                        break;
                                                    }
                                                    case m.I.BUILD_OVERRIDE:
                                                    case m.I.EXPERIMENT:
                                                    case m.I.MANUAL_BUILD_OVERRIDE:
                                                    case m.I.EVENT:
                                                    case m.I.CHANNEL_LINK:
                                                        break;
                                                    case m.I.EMBEDDED_ACTIVITY_INVITE:
                                                        (0, f.KL)(d, ex.J.ACTIVITY_INVITE, o);
                                                        break;
                                                    case m.I.GUILD_PRODUCT:
                                                    case m.I.SERVER_SHOP:
                                                    case m.I.SOCIAL_LAYER_STOREFRONT:
                                                    case m.I.SOCIAL_LAYER_STOREFRONT_APP:
                                                        break;
                                                    case m.I.QUESTS_EMBED: {
                                                        let e = (0, eu.L4)(r.u.QUESTS_EMBED),
                                                            t = (0, eu.Gp)(r.u.QUESTS_EMBED, d);
                                                        (0, ec.av)({
                                                            questId: d,
                                                            event: y.HAw.QUEST_LINK_SHARED,
                                                            properties: {
                                                                metadata_sealed: null != e ? e : null,
                                                                traffic_metadata_sealed: t ?? null,
                                                            },
                                                            trackGuildAndChannelMetadata: !0,
                                                            sourceQuestContent: r.u.QUESTS_EMBED,
                                                        });
                                                        break;
                                                    }
                                                    case m.I.GAME_PROFILE:
                                                        L.default.track(y.HAw.GAME_PROFILE_LINK_EMBED_SENT, {
                                                            game_id: d,
                                                        });
                                                        break;
                                                    case m.I.USER_PROFILE:
                                                        _.Ay.trackWithMetadata(y.HAw.USER_PROFILE_LINK_EMBED_SENT, {
                                                            linked_user_id: d,
                                                            channel_id: n,
                                                            message_id: i,
                                                            location: a,
                                                            is_own_profile: d === o,
                                                        });
                                                        break;
                                                    case m.I.COLLECTIBLES_SHOP:
                                                    case m.I.GAME_SERVER_SHARE:
                                                    case m.I.GAME_ORGANIZATION_INVITE:
                                                        break;
                                                    default:
                                                        throw Error(`Unknown coded link type: ${t}`);
                                                }
                                        });
                                    })({
                                        content: l,
                                        channelId: e,
                                        messageId: E.body.id,
                                        location: h ?? "chat_input",
                                        inviteAnalyticsMetadata: T,
                                    }),
                                    (O = l),
                                    (b = E.body.id),
                                    (G = h ?? "chat_input"),
                                    (k = !!n.isGiftLinkSentOnBehalfOfUser),
                                    (0, ev.e7)(O).forEach((t) => {
                                        let n = Y.A.getChannel(e);
                                        null != n &&
                                            _.Ay.trackWithMetadata(y.HAw.GIFT_CODE_SENT, {
                                                location: G,
                                                gift_code: t,
                                                guild_id: n.getGuildId(),
                                                channel_id: n.id,
                                                channel_type: n.type,
                                                message_id: b,
                                                automatic_send: k,
                                            });
                                    }),
                                    null != n.gifMetadata &&
                                        ((F = n.gifMetadata),
                                        (B = E.body.id),
                                        (V = h ?? "chat_input"),
                                        null != (a = Y.A.getChannel(e)) &&
                                            L.default.track(y.HAw.MESSAGE_SENT_WITH_GIF, {
                                                location: V,
                                                message_id: B,
                                                gif_provider: F.gif_provider,
                                                load_id: F.load_id,
                                                source_object: F.source_object,
                                                gif_url: F.gif_url,
                                                gif_id: F.gif_id,
                                                ...(0, _.H$)(a.getGuildId()),
                                                ...(0, _.dI)(a),
                                            })),
                                    (function (e) {
                                        let {
                                            channelId: t,
                                            messageId: n,
                                            attachments: i,
                                            attachmentsToUpload: r,
                                            messageReference: a,
                                        } = e;
                                        if (i.length !== r.length) return;
                                        let s = Y.A.getChannel(t);
                                        if (null == s) return;
                                        let l = e_.A.getMessageByReference(a);
                                        r.forEach((e, r) => {
                                            let { clip: a } = e;
                                            if (null == a) return;
                                            let o =
                                                l.state === e_.a.LOADED &&
                                                l.message.attachments.some((e) => e.clip_remote_id === a.remoteClipId);
                                            L.default.track(y.HAw.CLIP_SHARED, {
                                                ...I.Zy(a),
                                                ...I.lc(),
                                                channel_id: t,
                                                guild_id: s.getGuildId(),
                                                channel_type: s.type,
                                                application_id: a.applicationId,
                                                clip_uuid: a.id,
                                                remote_clip_id: a.remoteClipId,
                                                message_id: n,
                                                attachment_id: i[r].id,
                                                is_distributed_clip_reply: o,
                                            });
                                        });
                                    })({
                                        channelId: e,
                                        messageId: E.body.id,
                                        attachments: E.body.attachments ?? [],
                                        attachmentsToUpload: x ?? [],
                                        messageReference: C,
                                    }),
                                    null != i &&
                                        o.h.dispatch({
                                            type: "UPLOAD_COMPLETE",
                                            channelId: e,
                                            file: i._file,
                                            aborted: !1,
                                        }),
                                    t(E));
                            } else {
                                let t;
                                eV.log("Failed to send message", {
                                    hasErr: E.hasErr,
                                    status: E.hasErr ? void 0 : E.status,
                                    code: E.hasErr ? void 0 : E.body?.code,
                                    error: E.hasErr ? E.err : void 0,
                                });
                                let r = !1;
                                if (E.hasErr) "ABORTED" === E.err.code && (r = !0);
                                else if (E.status >= 400 && E.status < 500 && E.body)
                                    if (E.body.code === y.t02.SLOWMODE_RATE_LIMITED) {
                                        let t = E.body.retry_after;
                                        null != t &&
                                            t > 0 &&
                                            o.h.dispatch({
                                                type: "SLOWMODE_SET_COOLDOWN",
                                                channelId: e,
                                                slowmodeType: ey.R.SendMessage,
                                                cooldownMs: t * eb.A.Millis.SECOND,
                                            });
                                    } else
                                        v.yf.has(E.body.code)
                                            ? o.h.dispatch({
                                                  type: "MESSAGE_SEND_FAILED_AUTOMOD",
                                                  messageData: eg,
                                                  errorResponseBody: { code: E.body.code, message: E.body.message },
                                              })
                                            : E.body.code === y.t02.POGGERMODE_TEMPORARILY_DISABLED
                                              ? o.h.dispatch({ type: "POGGERMODE_TEMPORARILY_DISABLED" })
                                              : E.body.code === y.t02.EXPLICIT_CONTENT
                                                ? (t = eF.ty.EXPLICIT_CONTENT)
                                                : null != R || el || null != w || e$.sendClydeError(e, E.body.code);
                                (r
                                    ? null != eC.A.getMessage(e, ep) && e$.deleteMessage(e, ep, !0)
                                    : (null != i &&
                                          o.h.dispatch({
                                              type: "UPLOAD_FAIL",
                                              channelId: e,
                                              file: i._file,
                                              messageId: ep,
                                              reason: t,
                                              noSendFailed: !0,
                                          }),
                                      E.hasErr ||
                                          t !== eF.ty.EXPLICIT_CONTENT ||
                                          e$.sendExplicitMediaClydeError(
                                              e,
                                              E.body?.attachments,
                                              S.SW.EXPLICIT_MEDIA_MESSAGE_SEND_BLOCKED,
                                          ),
                                      o.h.dispatch({
                                          type: "MESSAGE_SEND_FAILED",
                                          messageId: ep,
                                          channelId: e,
                                          shouldNotify: !n.doNotNotifyOnError,
                                          reason: t,
                                      }),
                                      (0, en.O)({
                                          failureCode: E.hasErr ? void 0 : E.status,
                                          errorMessage: E.hasErr ? E.err.message : void 0,
                                      }),
                                      u.Ay.cancelPendingSendRequests(e).forEach((e) => {
                                          (eV.log("Cancelling pending message", e.nonce),
                                              o.h.dispatch({
                                                  type: "MESSAGE_SEND_FAILED",
                                                  messageId: e.nonce,
                                                  channelId: e.channelId,
                                              }));
                                      })),
                                    a(E));
                            }
                        },
                        E,
                    ));
            });
        },
        startEditMessage(e, t, n, i) {
            o.h.dispatch({ type: "MESSAGE_START_EDIT", channelId: e, messageId: t, content: n, source: i });
        },
        startEditMessageRecord(e, t, n) {
            if ((0, a.Lt)(t.flags, y.pr7.IS_COMPONENTS_V2)) {
                let i = t.components.filter((e) => e.type === d.I5.TEXT_DISPLAY);
                if (i.length > 0) {
                    let r = i.map((e) => e.content).join("\n");
                    o.h.dispatch({ type: "MESSAGE_START_EDIT", channelId: e, messageId: t.id, content: r, source: n });
                    return;
                }
            }
            o.h.dispatch({ type: "MESSAGE_START_EDIT", channelId: e, messageId: t.id, content: t.content, source: n });
        },
        updateEditMessage(e, t, n) {
            o.h.dispatch({ type: "MESSAGE_UPDATE_EDIT", channelId: e, textValue: t, richValue: n });
        },
        endEditMessage(e, t) {
            o.h.dispatch({ type: "MESSAGE_END_EDIT", channelId: e, response: t });
        },
        async editMessage(e, t, n) {
            let i,
                { content: r, components: a } = n;
            await ep.A.unarchiveThreadIfNecessary(e);
            let s = (function (e, t) {
                    let n = eC.A.getMessage(e, t);
                    if (null == n || n.type !== y.lAJ.REPLY) return;
                    let i = e_.A.getMessageByReference(n.messageReference);
                    if (i.state === e_.a.LOADED && !n.mentions.includes(i.message.author.id))
                        return { parse: Object.values(y.uw8), replied_user: !1 };
                })(e, t),
                d = null != (i = eC.A.getMessage(e, t)) && i.hasFlag(y.pr7.CROSSPOSTED),
                c = { channelId: e, messageId: t, content: r, isCrossposted: d, allowed_mentions: s, components: a };
            u.Ay.enqueue({ type: u.AZ.EDIT, message: c }, (n) => {
                let i = !n.hasErr && v.yf.has(n.body.code);
                if (i) {
                    let e = { type: u.AZ.EDIT, message: c };
                    o.h.dispatch({
                        type: "MESSAGE_EDIT_FAILED_AUTOMOD",
                        messageData: e,
                        errorResponseBody: { code: n.body.code, message: n.body.message },
                    });
                }
                (n.hasErr
                    ? l.O.announce(eB.intl.string(eB.t.Atp7FP))
                    : i
                      ? l.O.announce(eB.intl.string(eB.t.Hym4ix))
                      : l.O.announce(eB.intl.string(eB.t["0x1HBD"])),
                    e$.endEditMessage(e, n.hasErr ? void 0 : n),
                    e$.focusMessage({ channelId: e, messageId: t }));
            });
        },
        async suppressEmbeds(e, t) {
            await ep.A.unarchiveThreadIfNecessary(e);
            let n = eC.A.getMessage(e, t);
            null != n &&
                s.Bo.patch({
                    url: y.Rsh.MESSAGE(e, t),
                    body: { flags: (0, a.lA)(n.flags, y.pr7.SUPPRESS_EMBEDS, !0) },
                    oldFormErrors: !0,
                    rejectWithError: (0, s.fT)(),
                });
        },
        async patchMessageGuildOfficial(e, t, n) {
            await ep.A.unarchiveThreadIfNecessary(e);
            let i = eC.A.getMessage(e, t);
            null != i &&
                s.Bo.patch({
                    url: y.Rsh.MESSAGE(e, t),
                    body: { flags: (0, a.lA)(i.flags, y.pr7.IS_GUILD_OFFICIAL, n) },
                    oldFormErrors: !0,
                    rejectWithError: (0, s.fT)(),
                });
        },
        patchMessageAttachments: async (e, t, n) => (
            await ep.A.unarchiveThreadIfNecessary(e),
            s.Bo.patch({
                url: y.Rsh.MESSAGE(e, t),
                body: { attachments: n },
                oldFormErrors: !0,
                rejectWithError: (0, s.fT)(),
            })
        ),
        async deleteMessage(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            function i() {
                o.h.dispatch({ type: "MESSAGE_DELETE", id: t, channelId: e, local: n }).then(() => {
                    l.O.announce(eB.intl.string(eB.t.RYMs7s));
                });
            }
            n
                ? i()
                : (await ep.A.unarchiveThreadIfNecessary(e),
                  s.Bo.del({ url: y.Rsh.MESSAGE(e, t), oldFormErrors: !0, rejectWithError: (0, s.fT)() }).then(() => {
                      i();
                  }));
        },
        dismissAutomatedMessage(e) {
            (null != e.loggingName &&
                _.Ay.trackWithMetadata(y.HAw.AUTOMATED_MESSAGE_DISMISSED, {
                    message_name: e.loggingName,
                    message_author: e.author.username,
                }),
                (0, el.np)(e.channel_id, e.id),
                this.deleteMessage(e.channel_id, e.id, !0));
        },
        revealMessage(e, t) {
            o.h.dispatch({ type: "MESSAGE_REVEAL", channelId: e, messageId: t });
        },
        async crosspostMessage(e, t) {
            try {
                return await s.Bo.post({
                    url: y.Rsh.MESSAGE_CROSSPOST(e, t),
                    oldFormErrors: !0,
                    failImmediatelyWhenRateLimited: !0,
                    rejectWithError: (0, s.fT)(),
                });
            } catch (t) {
                let e;
                ((e =
                    429 === t.status
                        ? eB.intl.formatToPlainString(eB.t["77cuqz"], {
                              retryAfter: Math.floor(t.body.retry_after / 60),
                          })
                        : eB.intl.string(eB.t.z2gyNF)),
                    eG.A.show({
                        title: eB.intl.string(eB.t.Vd1hs6),
                        body: e,
                        confirmText: eB.intl.string(eB.t.BddRzS),
                    }));
            }
        },
        trackInvite: eY,
    },
    eX = e$;
