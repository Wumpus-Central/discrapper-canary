(n.d(t, { A: () => ez }), n(801541), n(938796));
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
    f = n(152685),
    h = n(354287);
n(695870);
var I = n(53677),
    p = n(409617),
    m = n(76349),
    T = n(167189),
    g = n(486889),
    S = n(626584),
    N = n(390248),
    C = n(225123),
    O = n(607399),
    R = n(309010),
    L = n(967198),
    y = n(129230),
    D = n(652215);
function b(e, t) {
    y.default.track(D.HAw.APP_DIRECTORY_PROFILE_EMBED_SENT, {
        application_id: e,
        device_platform: O.Fr ? "mobile_web" : "desktop_web",
        guild_id: L.A.getGuildId(),
        channel_id: R.Ay.getChannelId(),
        section: t,
    });
}
var v = n(834757),
    P = n(753738),
    M = n(51271),
    U = n(844944),
    w = n(122906),
    G = n(21599),
    x = n(346542),
    k = n(279208),
    F = n(917878),
    B = n(433777),
    V = n(432005),
    H = n(521427),
    j = n(855986),
    W = n(69114),
    Y = n(322683),
    K = n(734057),
    $ = n(498642),
    X = n(544180);
let z = new S.A("MessageRoundtripTrackerStore");
function q(e) {
    return null != e.apiResponseTimestamp && null != e.gatewaySeenTimestamp;
}
function Q(e) {
    let t = K.A.getBasicChannel(e.channelId);
    if (null == t)
        return void z.warn(`Ignoring a messageData for channel ${e.channelId} because we can't find that channel.`);
    if (Math.random() > 0.1) return;
    let n = null == e.apiResponseTimestamp ? null : e.apiResponseTimestamp - e.initialSendTimestamp,
        i = null == e.gatewaySeenTimestamp ? null : e.gatewaySeenTimestamp - e.initialSendTimestamp,
        r = (0, Y.O)();
    y.default.track(D.HAw.SEND_MESSAGE_ROUNDTRIP, {
        ...(0, W.A)(),
        api_latency_ms: n,
        gateway_latency_ms: i,
        channel_id: t.id,
        channel_type: t.type,
        guild_id: t.guild_id,
        guild_size: $.A.getMemberCount(t.guild_id),
        mobile_network_type: X.A.getType(),
        num_attachments: e.attachmentCount,
        ...(null != r && { mobile_signal_strength_level: r }),
    });
}
class J extends j.Ay.Store {
    initialize() {
        this.waitFor(K.A, $.A, X.A);
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
                null != e && (Q(e), this.pendingMessages.delete(t));
            }, 3e4));
    }
    recordMessageSendApiResponse(e) {
        let t = this.pendingMessages.get(e);
        if (null != t) {
            let n = { ...t, apiResponseTimestamp: Date.now() };
            q(n) ? (Q(n), this.pendingMessages.delete(e)) : this.pendingMessages.set(e, n);
        }
    }
    recordGatewayResponse(e) {
        let t = this.pendingMessages.get(e);
        if (null != t) {
            let n = { ...t, gatewaySeenTimestamp: Date.now() };
            q(n) ? (Q(n), this.pendingMessages.delete(e)) : this.pendingMessages.set(e, n);
        }
    }
}
let Z = new J(o.h, {
        MESSAGE_CREATE: function (e) {
            let { optimistic: t, message: n } = e,
                i = n.nonce;
            t || null == i || Z.recordGatewayResponse(i);
        },
    }),
    ee = { init() {}, donateSentMessage(e, t) {}, deleteAllInteractions() {} };
var et = n(963852),
    en = n(195880),
    ei = n(488004),
    er = n(491001),
    ea = n(591563),
    es = n(3137),
    el = n(969632),
    eo = n(45787),
    ed = n(308528);
function ec(e) {
    if ("131" !== e) return null;
    let t = K.A.getChannel(e);
    return null == t ? null : ed.A.ensurePrivateChannel(t.recipients);
}
var eu = n(561844),
    e_ = n(710969);
n(853145);
var eE = n(9842),
    eA = n(208284),
    ef = n(151282),
    eh = n(859403),
    eI = n(898578),
    ep = n(677413),
    em = n(7909),
    eT = n(935564),
    eg = n(616356),
    eS = n(46653);
n(580745);
var eN = n(71393),
    eC = n(299091),
    eO = n(596344),
    eR = n(576705),
    eL = n(290863),
    ey = n(218461),
    eD = n(101392),
    eb = n(287809),
    ev = n(927813),
    eP = n(45938),
    eM = n(975571),
    eU = n(448645),
    ew = n(811091),
    eG = n(292348),
    ex = n(157559),
    ek = n(768349),
    eF = n(401755),
    eB = n(381941),
    eV = n(792996);
let eH = new S.A("MessageActionCreators"),
    ej = new S.A("MessageQueue"),
    eW = !1;
class eY {
    completed = !1;
    markComplete() {
        this.completed = !0;
    }
}
function eK(e) {
    let {
            inviteKey: t,
            channelId: n,
            messageId: i,
            location: r,
            inviteAnalyticsMetadata: a,
            overrideProperties: s = {},
        } = e,
        l = eS.default.getId(),
        o = eC.A.getInvite(t),
        d = (0, G.y$)(t),
        c = null != o && (0, x.oK)(o),
        u = o?.target_application?.id;
    null != u && c && (0, h.KL)(u, ek.J.ACTIVITY_INVITE, l);
    let E = K.A.getChannel(n);
    if (null != E) {
        let e = null;
        E.isMultiUserDM() ? (e = D.G2g.GDM_INVITE) : E.isPrivate() || (e = D.G2g.SERVER_INVITE);
        let t = {};
        if (null != o && o.state === D.elq.RESOLVED && null != o.channel) {
            let n = o.channel;
            ((t.invite_channel_id = n.id),
                (t.invite_guild_id = o.guild?.id),
                (t.invite_channel_type = n.type),
                null != o.inviter && (t.invite_inviter_id = o.inviter.id),
                null != o.target_application && (t.application_id = o.target_application.id));
            let i = eg.A.getLastActiveStream();
            if (null != i && i.channelId === n.id) {
                ((e = D.G2g.STREAM), (t.destination_user_id = i.ownerId));
                let n = (0, v.Ee)(i, eL.A);
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
                send_type: D.gfq.DIRECT_MESSAGE,
                invite_guild_scheduled_event_id: d.guildScheduledEventId,
                invite_instance_id: (0, G._U)(d.baseCode, i) ?? null,
                ...s,
            }),
            _.Ay.trackWithMetadata(D.HAw.INVITE_SENT, t));
    } else {
        let e = {};
        null != o &&
            o.state === D.elq.RESOLVED &&
            null != o.inviter &&
            ((e.invite_inviter_id = o.inviter.id),
            null != o.target_application && (e.application_id = o.target_application.id),
            (e = {
                ...e,
                location: r,
                invite_type: D.G2g.FRIEND_INVITE,
                invite_code: d.baseCode,
                message_id: i,
                send_type: D.gfq.DIRECT_MESSAGE,
                invite_guild_scheduled_event_id: d.guildScheduledEventId,
                invite_instance_id: (0, G._U)(d.baseCode, i) ?? null,
                ...s,
            }),
            _.Ay.trackWithMetadata(D.HAw.INVITE_SENT, e));
    }
}
let e$ = {
        [D.t02.SLOWMODE_RATE_LIMITED]: {
            messageName: "SLOWMODE_RATE_LIMITED",
            messageGetter: (e) => eV.intl.formatToPlainString(eV.t.IWntYg, { seconds: e.rateLimitPerUser }),
        },
        [D.t02.INVALID_MESSAGE_SEND_NO_MUTUAL_GUILDS]: {
            messageName: "INVALID_MESSAGE_SEND_NO_MUTUAL_GUILDS",
            messageGetter: (e) => {
                let t = eM.A.getArticleURL(D.MVz.DM_COULD_NOT_BE_DELIVERED),
                    n = e.rawRecipients ?? [];
                return e.isDM() && 1 === n.length && n.some((e) => e.bot)
                    ? eV.intl.formatToPlainString(eV.t.SkGL7l, { helpUrl: t })
                    : eV.intl.formatToPlainString(eV.t.llTkqr, { helpUrl: t });
            },
        },
        [D.t02.INVALID_MESSAGE_SEND_USER]: {
            messageName: "INVALID_MESSAGE_SEND_USER",
            messageGetter: () =>
                eV.intl.formatToPlainString(eV.t.SkGL7l, {
                    helpUrl: eM.A.getArticleURL(D.MVz.DM_COULD_NOT_BE_DELIVERED),
                }),
        },
        [D.t02.TOO_MANY_THREADS]: {
            messageName: "TOO_MANY_THREADS",
            messageGetter: (e) =>
                e.isForumLikeChannel() || e.isForumPost()
                    ? eV.intl.string(eV.t["/jUd2+"])
                    : eV.intl.string(eV.t["5EMPA7"]),
        },
        [D.t02.TOO_MANY_ANNOUNCEMENT_THREADS]: {
            messageName: "TOO_MANY_ANNOUNCEMENT_THREADS",
            messageGetter: () => eV.intl.string(eV.t["aY+lLC"]),
        },
        [D.t02.HARMFUL_LINK_MESSAGE_BLOCKED]: {
            messageName: "HARMFUL_LINK_MESSAGE_BLOCKED",
            messageGetter: () => eV.intl.formatToPlainString(eV.t.zSG3Qy, { helpUrl: D.X7G.HARMFUL_LINKS }),
        },
        [D.t02.HARMFUL_URL_BLOCKED]: {
            messageName: "HARMFUL_URL_BLOCKED",
            messageGetter: () => eV.intl.string(eV.t.WxX2Fd),
        },
        [D.t02.EMAIL_VERIFICATION_REQUIRED]: {
            messageName: "BOT_REQUIRES_EMAIL_VERIFICATION",
            messageGetter: () => eV.intl.string(eV.t.k1Cjqr),
        },
        [D.t02.GUILD_MESSAGE_UPDATE_RATE_LIMIT_EXCEEDED]: {
            messageName: "GUILD_MESSAGE_UPDATE_RATE_LIMIT_EXCEEDED",
            messageGetter: () => eV.intl.string(eV.t.Z5SUuv),
        },
        [D.t02.RATE_LIMIT_DM_OPEN]: {
            messageName: "BOT_DM_RATE_LIMITED",
            messageGetter: () => eV.intl.string(eV.t.E8nbNb),
        },
        [D.t02.SEND_MESSAGE_TEMPORARILY_DISABLED]: {
            messageName: "BOT_DM_SEND_MESSAGE_TEMPORARILY_DISABLED",
            messageGetter: () => eV.intl.string(eV.t.aRUbah),
        },
        [D.t02.INVALID_MESSAGE_SEND_GAME_FRIEND_DM]: {
            messageName: "BOT_DM_SEND_MESSAGE_INVALID_FOR_GAME_FRIEND",
            messageGetter: () => eV.intl.string(eV.t["/meGhR"]),
        },
        [D.t02.INVALID_MESSAGE_SEND_PROVISIONAL_ACCOUNT_OFFLINE]: {
            messageName: "BOT_DM_SEND_MESSAGE_INVALID_OFFLINE_PROVISIONAL_ACCOUNT",
            messageGetter: () => eV.intl.string(eV.t.Oc1Zjw),
        },
        [D.t02.TOTAL_ATTACHMENT_SIZE_TOO_LARGE]: {
            messageName: "TOTAL_ATTACHMENT_SIZE_TOO_LARGE",
            messageGetter: () => eV.intl.formatToPlainString(eV.t.DYFPg2, { maxSizeMb: eG.YK }),
        },
        [D.t02.CLOUD_UPLOAD_NOT_FOUND]: {
            messageName: "CLOUD_UPLOAD_NOT_FOUND",
            messageGetter: () => eV.intl.string(eV.t.bQldfH),
        },
        [D.t02.INVALID_PERMISSIONS]: {
            messageName: "INVALID_PERMISSIONS",
            messageGetter: () => eV.intl.string(eV.t.zl4Weq),
        },
    },
    eX = {
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
                _.Ay.trackWithMetadata(D.HAw.AUTOMATED_MESSAGE_RECEIVED, { message_author: "Clyde", message_name: n }),
                eX.receiveMessage(e, (0, et.pO)({ messageId: i, channelId: e, content: t, loggingName: n })));
        },
        sendNitroSystemMessage(e, t, n) {
            let i = (0, et.Ay)({
                channelId: e,
                nonce: n,
                type: D.lAJ.NITRO_NOTIFICATION,
                content: t,
                flags: D.pr7.EPHEMERAL,
                author: { id: "1", username: "Nitro Notification", discriminator: "0000", avatar: "nitro", bot: !0 },
            });
            eX.receiveMessage(e, { ...i, state: D.cmJ.SENT, channel_id: e }, !0);
        },
        sendGiftingPromptSystemMessage(e, t) {
            let n = (0, et.Ay)({
                channelId: e,
                type: D.lAJ.GIFTING_PROMPT,
                content: "",
                flags: D.pr7.EPHEMERAL,
                author: {
                    id: "1",
                    username: "Gifting Prompt",
                    discriminator: "0000",
                    avatar: "gifting_prompt",
                    bot: !0,
                },
                giftingPrompt: t,
            });
            eX.receiveMessage(e, { ...n, state: D.cmJ.SENT }, !0);
        },
        sendClydeError(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                n = K.A.getChannel(e);
            if (null == n) return;
            let i = e$[t];
            null == i
                ? eX.sendBotMessage(
                      e,
                      eV.intl.formatToPlainString(eV.t.SkGL7l, {
                          helpUrl: eM.A.getArticleURL(D.MVz.DM_COULD_NOT_BE_DELIVERED),
                      }),
                      `SEND_FAILED (${t})`,
                  )
                : eX.sendBotMessage(e, i.messageGetter(n), i.messageName);
        },
        sendExplicitMediaClydeError(e, t, n) {
            let r = K.A.getChannel(e);
            if (null == r) return;
            let { message: a, messageName: s } = (0, i.YW)({ isDM: r.isDM(), isGDM: r.isGroupDM() })
                    .with({ isDM: !0 }, () => ({
                        message: eV.intl.string(eV.t["mktny/"]),
                        messageName: "BOT_DM_EXPLICIT_CONTENT",
                    }))
                    .with({ isDM: !1, isGDM: !0 }, () => ({
                        message: eV.intl.string(eV.t["mktny/"]),
                        messageName: "BOT_GDM_EXPLICIT_CONTENT",
                    }))
                    .otherwise(() => ({
                        message: eV.intl.string(eV.t.i4AbAS),
                        messageName: "BOT_GUILD_EXPLICIT_CONTENT",
                    })),
                l = (0, en.m)();
            (eX.sendBotMessage(e, a, s, l),
                (0, N.hv)({
                    action: N.rY.EXPLICIT_MEDIA_FALSE_POSITIVE_CLYDE_MESSAGE_SENT,
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
            eX.trackJump(e, null, "Present");
            let n = { present: !0 };
            eO.A.hasPresent(e)
                ? o.h.dispatch({ type: "LOAD_MESSAGES_SUCCESS_CACHED", jump: n, channelId: e, limit: t })
                : eX.fetchMessages({ channelId: e, limit: t, jump: n });
        },
        trackJump(e, t, n, i) {
            _.Ay.trackWithMetadata(D.HAw.JUMP, { context: n, channel_id: e, message_id: t, ...i });
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
                "string" == typeof a && eX.trackJump(t, n, a, s),
                eX.fetchMessages({
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
            eX.fetchMessages({ channelId: t, limit: 30, focus: { messageId: n } });
        },
        async fetchMessage(e) {
            let { channelId: t, messageId: n } = e,
                i = await s.Bo.get({
                    url: D.Rsh.MESSAGES(t),
                    query: { limit: 1, around: n },
                    retries: 2,
                    oldFormErrors: !0,
                    rejectWithError: (0, s.fT)(),
                });
            if (i.body.length > 0) return (0, V.rh)(i.body[0]);
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
                    avoidInitialScroll: f,
                    feature: h,
                    fetchKey: I,
                    nitroPrefetchKey: p,
                } = e,
                m = K.A.getChannel(n),
                T = C.A.isConnectedOrOverlay(),
                g = Date.now();
            if (null != m && m.type === D.rbe.GUILD_STORE) return !1;
            if (
                "131" === n ||
                (eH.log(`Fetching messages for ${n} between ${r} and ${i}. jump=${JSON.stringify(l)}`),
                eX._tryFetchMessagesCached({
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
            (eT.A.fetchMessages.recordStart(), F.A.recordChannelFetchStart(n, I ?? g, i, r, a));
            let S = l ?? void 0;
            null == S && null != d && (S = { ...d });
            let N = c.A.getOrCreate(n).loadStart(S);
            (c.A.commit(N), o.h.dispatch({ type: "LOAD_MESSAGES" }));
            let O = S?.messageId;
            null != p && (O = void 0);
            let R = new eY();
            return (
                _ || this.fetchLocalMessages(n, I ?? g, i, r, a, R),
                null != p && (t = { prefetchKey: p }),
                s.Bo.get({
                    url: D.Rsh.MESSAGES(n),
                    query: { before: i, after: r, limit: a, around: O, preload: u, feature: h },
                    headers: t,
                    retries: 2,
                    oldFormErrors: !0,
                    rejectWithError: (0, s.fT)(),
                }).then(
                    (e) => (
                        eT.A.fetchMessages.recordEnd(),
                        eT.A.dispatchMessages.measure(() => {
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
                                        .sort(ew.default.compare)
                                        .indexOf(O);
                                if ((r < i - 1 && (u = !1), t.length - r < e && (_ = !1), _ && t.length > 0)) {
                                    let e = ey.Ay.lastMessageId(n);
                                    t[0].id === e && (_ = !1);
                                }
                            }
                            (eH.log(`Fetched ${t.length} messages for ${n} isBefore:${s} isAfter:${d}`),
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
                                    isStale: !T || C.A.lastTimeConnectedChanged() >= g,
                                    truncate: E,
                                    avoidInitialScroll: f,
                                    requestStartTime: g,
                                }),
                                F.A.recordChannelFetchedNetwork(n, I ?? g, i, r, a, t));
                        }),
                        !0
                    ),
                    () => (
                        eH.log(`Failed to fetch messages for ${n}`),
                        o.h.dispatch({ type: "LOAD_MESSAGES_FAILURE", channelId: n }),
                        !1
                    ),
                )
            );
        },
        async fetchLocalMessages(e, t, n, i, r, a) {
            let s = K.A.getBasicChannel(e),
                l = c.A.getOrCreate(e),
                d = E.A.database();
            if (null == d || null == s || null != n || null != i) return void eT.A.addLocalMessages(e, -1);
            if (l.ready && !l.cached) return void eT.A.addLocalMessages(e, -2);
            let u = await (0, A.kk)(() => f.Ay.load(d, e, r));
            if (null == u) return void eT.A.addLocalMessages(e, -3);
            if (
                (eH.log(
                    `fetched ${u.messages.length} messages from local database (channel_id: ${e}, remote_fetch_completed: ${a.completed})`,
                ),
                eT.A.addLocalMessages(e, u.messages.length),
                !a.completed && u.messages.length > 0)
            ) {
                let a = u.messages.length >= r && u.connectionId === C.A.lastTimeConnectedChanged();
                (F.A.recordChannelFetchedLocal(e, t, n, i, r, u.messages),
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
            let n = K.A.getBasicChannel(e),
                i = E.A.database();
            if (null == i || null == n) return;
            let r = c.A.getOrCreate(e);
            if (r.hasMoreAfter) return;
            let a = await (0, A.kk)(() => f.Ay.load(i, e, t));
            if (null == a) return;
            r = c.A.getOrCreate(e);
            let s = r.last()?.id,
                l = null == s ? a.messages : a.messages.filter((e) => ew.default.compare(e.id, s) > 0);
            (eH.log(`Fetched ${a.messages.length} messages from the cache after foregrounding. ${l.length} are new`),
                0 !== l.length &&
                    o.h.dispatch({
                        type: "LOCAL_MESSAGES_LOADED",
                        guildId: n.guild_id,
                        channelId: e,
                        users: a.users,
                        members: a.members,
                        messages: l,
                        stale: !0,
                        isForegroundCacheLoad: (0, er.K)(),
                    }));
        },
        _tryFetchMessagesCached(e) {
            let { channelId: t, before: n, after: i, limit: r, jump: a, focus: s, truncate: l } = e,
                d = eO.A.getMessages(t);
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
                let e = a?.messageId != null ? ew.default.extractTimestamp(a?.messageId) : 0,
                    n = d.first(),
                    i = d.last();
                if (
                    (!d.hasMoreBefore && null != n && ew.default.extractTimestamp(n.id) >= e) ||
                    (!d.hasMoreAfter && null != i && ew.default.extractTimestamp(i.id) <= e) ||
                    (null != n &&
                        null != i &&
                        ew.default.extractTimestamp(n.id) < e &&
                        ew.default.extractTimestamp(i.id) > e)
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
            let r = await ec(e);
            if (null != r) return eX.sendMessage(r, t, n, i);
            let a = i.nonce ?? (0, en.m)();
            i = { ...i, nonce: a };
            let s = function () {
                return eX._sendMessage(e, t, i);
            };
            return (null == i.scheduledTimestamp && Z.recordMessageSendAttempt(e, a, i), eO.A.isReady(e))
                ? s()
                : n && "131" !== e
                  ? (ej.info(`Waiting for channel ${e} to be ready before sending.`),
                    new Promise((t, n) => {
                        eO.A.whenReady(e, () => {
                            (ej.info(`Channel ${e} is ready for sending now.`), s().then(t, n));
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
                      allowedMentions: e.shouldMention ? void 0 : { parse: Object.values(D.uw8), replied_user: !1 },
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
            let t = eX.getSendMessageOptionsForReply(e.pendingReply),
                n = eX.getSendMessageOptionsForStickers({ ...e }),
                i = eX.getSendMessageOptionsForScheduledMessage({ ...e });
            return { ...t, ...n, ...i };
        },
        sendInvite(e, t, n, i, r) {
            let a = (0, k.A)(t);
            return (
                null != r &&
                    (a = `${r}
${a}`),
                eX._sendMessage(
                    e,
                    { content: a, tts: !1, validNonShortcutEmojis: [], invalidEmojis: [] },
                    { location: n, inviteAnalyticsMetadata: i },
                )
            );
        },
        sendActivityBookmark: (e, t, n, i) =>
            eX._sendMessage(
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
            return eX._sendMessage(e, a, { ...i, stickerIds: t });
        },
        sendGreetMessage(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                { messageReference: i, allowedMentions: r } = n;
            return s.Bo.post({
                url: D.Rsh.MESSAGES_GREET(e),
                body: { sticker_ids: [t], allowed_mentions: r, message_reference: i },
                oldFormErrors: !0,
                rejectWithError: (0, s.fT)(),
                context: { location: eB.Hx.GREET },
            }).then(
                (n) => (
                    ee.donateSentMessage(n.body.content, e),
                    eX.receiveMessage(e, n.body),
                    o.h.dispatch({ type: "STICKER_TRACK_USAGE", stickerIds: [t] }),
                    n
                ),
                (t) => {
                    throw (
                        eH.log("Failed to send greeting"),
                        429 !== t.status && eX.sendClydeError(e, t.body.code),
                        o.h.dispatch({ type: "MESSAGE_SEND_FAILED", messageId: t.body.id, channelId: e }),
                        t
                    );
                },
            );
        },
        sendPollMessage(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            return eX._sendMessage(
                e,
                { content: "", tts: !1, validNonShortcutEmojis: [], invalidEmojis: [] },
                { ...n, poll: t, location: eB.Hx.POLL_CREATION },
            );
        },
        validateMessage(e, t, n) {
            let i, r;
            return (
                e.some((e) => e.animated) && !eU.Ay.canUseAnimatedEmojis(t)
                    ? ((i = eV.intl.string(eV.t.msFJy8)), (r = "INVALID_ANIMATED_EMOJI_BODY"))
                    : eR.A.canWithPartialContext(D.xBc.USE_EXTERNAL_EMOJIS, { channelId: n })
                      ? ((i = eV.intl.string(eV.t.FzugNl)), (r = "INVALID_EXTERNAL_EMOJI_BODY_UPGRADE"))
                      : ((i = eV.intl.string(eV.t["Q87rI/"])), (r = "INVALID_EXTERNAL_EMOJI_BODY")),
                { errorMessage: i, errorMessageName: r }
            );
        },
        async _sendMessage(e, t, n) {
            let i,
                s = ec(e);
            if (null != s)
                return (
                    ej.info("Converting channel to a private channel"),
                    s.then(
                        (e) => (ej.info("Finished converting channel to a private channel"), eX._sendMessage(e, t, n)),
                    )
                );
            let l = t.content,
                { invalidEmojis: d, validNonShortcutEmojis: c, tts: E = !1 } = t,
                {
                    activityAction: A,
                    location: f,
                    inviteAnalyticsMetadata: S,
                    stickerIds: C,
                    messageReference: O,
                    allowedMentions: R,
                    poll: L,
                    sharedCustomTheme: v,
                    contentInventoryEntry: G,
                    attachments: x,
                    attachmentsToUpload: k,
                    onAttachmentUploadError: F,
                    announcementSendOptions: j,
                    checkpointCardType: W,
                    mediaMention: Y,
                    scheduledTimestamp: $,
                } = n,
                X = n.flags ?? 0,
                [z, q] = (0, ep.Ay)(l);
            z && ((l = q), (X = (0, a.UI)(X, D.pr7.SUPPRESS_NOTIFICATIONS)));
            let Q = K.A.getChannel(e),
                J = eN.A.getGuild(Q?.guild_id);
            (0, H.Zv)(J, Q, "_sendMessage") && (X = (0, a.UI)(X, D.pr7.IS_GUILD_OFFICIAL));
            let er = !1,
                eo = n.messageReference?.type === D.SH7.FORWARD;
            if (
                "" === l &&
                null == A &&
                null == C &&
                null == L &&
                null == v &&
                null == G &&
                !eo &&
                (null == x || 0 === x.length) &&
                null == W &&
                (null == t.components || 0 === t.components.length)
            )
                if (null == k || !(k.length > 0)) return Promise.resolve();
                else er = !0;
            let ed = null != O ? D.lAJ.REPLY : D.lAJ.DEFAULT,
                em = n.nonce ?? (0, en.m)(),
                eT = (0, et.Ay)({
                    channelId: e,
                    content: l,
                    tts: E,
                    type: ed,
                    messageReference: O,
                    allowedMentions: R,
                    flags: 0 !== X ? X : void 0,
                    nonce: em,
                    poll: (0, el.G8)(L),
                    sharedCustomTheme: v,
                    mediaMention: Y,
                });
            if (
                (!1 !== n.eagerDispatch &&
                    null == $ &&
                    ((0, ea.iq)(e, eT.id),
                    null != C && (eT.sticker_items = C.map((e) => eI.A.getStickerById(e)).filter((e) => null != e)),
                    eX.receiveMessage(e, eT, !0, n)),
                !eW && null != d && d.length > 0)
            ) {
                eW = !0;
                let t = eb.default.getCurrentUser(),
                    { errorMessage: n, errorMessageName: i } = eX.validateMessage(d, t, e);
                eX.sendBotMessage(e, n, i);
            }
            let eg = {
                type: null != j ? u.AZ.SEND_ANNOUNCEMENT : u.AZ.SEND,
                message: {
                    channelId: e,
                    content: l,
                    nonce: em,
                    tts: E,
                    message_reference: O,
                    allowed_mentions: R,
                    flags: X,
                    analyticsLocation: f,
                },
            };
            if (
                (null != t.components && (eg.message.components = t.components),
                null != j &&
                    ((eg.message.create_thread = j.createThread),
                    (eg.message.title = j.threadName),
                    (eg.message.publish = j.publish ?? !1)),
                null != A)
            ) {
                let e,
                    { enabled: t } = eA.A.getConfig({
                        guildId: Q?.guild_id ?? "",
                        location: "MessageActionCreators.sendMessage",
                    });
                if (!(t && A.type === D.xL.STREAM_REQUEST) && A?.activity == null)
                    return Promise.reject(Error("Activity is required unless it is a non-game stream request."));
                let n = A?.activity?.session_id;
                if (
                    null !=
                    (e =
                        A.type === D.xL.JOIN_REQUEST || (A.type === D.xL.STREAM_REQUEST && null != n) || null != n
                            ? n
                            : eS.default.getSessionId())
                ) {
                    let t = { type: A.type, session_id: e, target_user_id: A.targetUserId },
                        { activity: n } = A;
                    (n?.party != null && null != n.party.id && (t.party_id = n.party.id),
                        (eg.message.application_id = n?.application_id),
                        (eg.message.activity = t));
                }
            }
            if (
                (null != L && (eg.message.poll = L),
                null != v && (eg.message.shared_client_theme = v),
                null != C && (eg.message.sticker_ids = C),
                es.A.isEnabled() && (eg.message.has_poggermode_enabled = !0),
                null != W && (eg.message.checkpoint_card_type = W),
                null != G && (eg.message.content_inventory_entry = G),
                null != Y && (eg.message.media_mention = Y),
                null != x && x.length > 0 && (eg.message.attachments = x),
                null != k && k.length > 0)
            )
                try {
                    let t = await (async function (e) {
                        let { channelId: t, message: n, items: i, shouldUploadFailureSendNotification: r } = e,
                            a = new B.A(),
                            s = (0, V.rh)({ ...n, id: a._file.id });
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
                        nonce: em,
                        items: k,
                        message: eT,
                        shouldUploadFailureSendNotification: !n.doNotNotifyOnError && void 0,
                    });
                    if (null == t) return;
                    let r = t.attachments;
                    if (((i = t.uploader), er && (null == r || 0 === r.length))) return;
                    null != r && (eg.message.attachments = r.map((e, t) => (0, eG.OW)(e, t)));
                } catch (r) {
                    let { file: e, code: t, reason: n, responseBody: i } = r;
                    ((0, ei.O)({ fileItems: e.items, failureCode: t, errorMessage: n?.msg }), F?.(e, t, n, i));
                    return;
                }
            if (null != $)
                try {
                    let t = await (0, ef.pr)({ channelId: e, scheduledTimestamp: $, messageSendData: eg.message });
                    return (
                        null != i &&
                            o.h.dispatch({ type: "UPLOAD_COMPLETE", channelId: e, file: i._file, aborted: !1 }),
                        (0, eh.c_)($),
                        t
                    );
                } catch (t) {
                    throw (
                        null != i &&
                            o.h.dispatch({
                                type: "UPLOAD_FAIL",
                                channelId: e,
                                file: i._file,
                                messageId: em,
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
                (ej.info(`Queueing message to be sent LogId:${E}`),
                    u.Ay.enqueue(
                        eg,
                        (E) => {
                            let A = Date.now() - s;
                            if (E.ok) {
                                var R, v, x, F, B, V, H;
                                let a;
                                (ee.donateSentMessage(l, e),
                                    eX.receiveMessage(e, E.body, !0, {
                                        sendAnalytics: { duration: A, queueSize: d },
                                        poll: L,
                                    }));
                                let s = ew.default.cast(e),
                                    u = U.A.getRequest(s);
                                if (null != u) {
                                    let { guildId: t, userId: n, applicationStatus: i } = u;
                                    (0, M.cK)({
                                        guildId: t,
                                        channelId: e,
                                        messageId: E.body.id,
                                        joinRequestStatus: i,
                                        joinRequestUserId: n,
                                    });
                                }
                                (Z.recordMessageSendApiResponse(em),
                                    o.h.dispatch({
                                        type: "SLOWMODE_RESET_COOLDOWN",
                                        slowmodeType: eD.R.SendMessage,
                                        channelId: e,
                                    }),
                                    o.h.dispatch({ type: "EMOJI_TRACK_USAGE", emojiUsed: c }),
                                    o.h.dispatch({ type: "STICKER_TRACK_USAGE", stickerIds: C }),
                                    o.h.dispatch({
                                        type: "LOCAL_MESSAGE_CREATE",
                                        message: { channel_id: e, author: eb.default.getCurrentUser() },
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
                                            o = eS.default.getId();
                                        (0, g.Ay)(t).forEach((e) => {
                                            let { type: t, code: d, url: c } = e;
                                            if ((0, m.Yf)(t)) {
                                                let e = (0, m.kK)(t, d, c);
                                                if (null == e) return;
                                                let { applicationId: n } = e;
                                                switch (e.type) {
                                                    case T.I.APP_DIRECTORY_PROFILE:
                                                        (b(n), (0, h.KL)(d, ek.J.APP_DISCOVERY, o));
                                                        break;
                                                    case T.I.APP_DIRECTORY_STOREFRONT:
                                                        b(n, "storefront");
                                                        break;
                                                    case T.I.APP_DIRECTORY_STOREFRONT_SKU:
                                                        b(n, "storefront_sku");
                                                        break;
                                                    case T.I.ACTIVITY_BOOKMARK: {
                                                        let { params: t } = e;
                                                        (0, h.KL)(n, ek.J.ACTIVITY, t.referrerId ?? o, t.customId);
                                                        break;
                                                    }
                                                    case T.I.APP_OAUTH2_LINK:
                                                        ((0, h.KL)(n, ek.J.OAUTH, o),
                                                            _.Ay.trackWithMetadata(
                                                                D.HAw.APP_OAUTH2_LINK_EMBED_URL_SENT,
                                                                { application_id: n },
                                                            ));
                                                }
                                            } else
                                                switch (t) {
                                                    case T.I.INVITE:
                                                        eK({
                                                            inviteKey: d,
                                                            channelId: n,
                                                            messageId: i,
                                                            location: a,
                                                            inviteAnalyticsMetadata: s,
                                                            overrideProperties: l,
                                                        });
                                                        break;
                                                    case T.I.TEMPLATE: {
                                                        let e = w.A.getGuildTemplate(d);
                                                        if (null == e || e.state === eF.QB.RESOLVING) return;
                                                        _.Ay.trackWithMetadata(D.HAw.GUILD_TEMPLATE_LINK_SENT, {
                                                            guild_template_code: d,
                                                            guild_template_name: e.name,
                                                            guild_template_description: e.description,
                                                            guild_template_guild_id: e.sourceGuildId,
                                                        });
                                                        break;
                                                    }
                                                    case T.I.BUILD_OVERRIDE:
                                                    case T.I.EXPERIMENT:
                                                    case T.I.MANUAL_BUILD_OVERRIDE:
                                                    case T.I.EVENT:
                                                    case T.I.CHANNEL_LINK:
                                                        break;
                                                    case T.I.EMBEDDED_ACTIVITY_INVITE:
                                                        (0, h.KL)(d, ek.J.ACTIVITY_INVITE, o);
                                                        break;
                                                    case T.I.GUILD_PRODUCT:
                                                    case T.I.SERVER_SHOP:
                                                    case T.I.SOCIAL_LAYER_STOREFRONT:
                                                    case T.I.SOCIAL_LAYER_STOREFRONT_APP:
                                                        break;
                                                    case T.I.QUESTS_EMBED: {
                                                        let e = (0, e_.L4)(r.u.QUESTS_EMBED),
                                                            t = (0, e_.Gp)(r.u.QUESTS_EMBED, d);
                                                        (0, eu.av)({
                                                            questId: d,
                                                            event: D.HAw.QUEST_LINK_SHARED,
                                                            properties: {
                                                                metadata_sealed: null != e ? e : null,
                                                                traffic_metadata_sealed: t ?? null,
                                                            },
                                                            trackGuildAndChannelMetadata: !0,
                                                            sourceQuestContent: r.u.QUESTS_EMBED,
                                                        });
                                                        break;
                                                    }
                                                    case T.I.GAME_PROFILE:
                                                        y.default.track(D.HAw.GAME_PROFILE_LINK_EMBED_SENT, {
                                                            game_id: d,
                                                        });
                                                        break;
                                                    case T.I.USER_PROFILE:
                                                        _.Ay.trackWithMetadata(D.HAw.USER_PROFILE_LINK_EMBED_SENT, {
                                                            linked_user_id: d,
                                                            channel_id: n,
                                                            message_id: i,
                                                            location: a,
                                                            is_own_profile: d === o,
                                                        });
                                                        break;
                                                    case T.I.COLLECTIBLES_SHOP:
                                                    case T.I.GAME_SERVER_SHARE:
                                                    case T.I.GAME_ORGANIZATION_INVITE:
                                                    case T.I.CONJURE_PROJECT:
                                                    case T.I.USER_WISHLIST:
                                                        break;
                                                    default:
                                                        throw Error(`Unknown coded link type: ${t}`);
                                                }
                                        });
                                    })({
                                        content: l,
                                        channelId: e,
                                        messageId: E.body.id,
                                        location: f ?? "chat_input",
                                        inviteAnalyticsMetadata: S,
                                    }),
                                    (R = l),
                                    (v = E.body.id),
                                    (x = f ?? "chat_input"),
                                    (F = !!n.isGiftLinkSentOnBehalfOfUser),
                                    (0, eP.e7)(R).forEach((t) => {
                                        let n = K.A.getChannel(e);
                                        null != n &&
                                            _.Ay.trackWithMetadata(D.HAw.GIFT_CODE_SENT, {
                                                location: x,
                                                gift_code: t,
                                                guild_id: n.getGuildId(),
                                                channel_id: n.id,
                                                channel_type: n.type,
                                                message_id: v,
                                                automatic_send: F,
                                            });
                                    }),
                                    null != n.gifMetadata &&
                                        ((B = n.gifMetadata),
                                        (V = E.body.id),
                                        (H = f ?? "chat_input"),
                                        null != (a = K.A.getChannel(e)) &&
                                            y.default.track(D.HAw.MESSAGE_SENT_WITH_GIF, {
                                                location: H,
                                                message_id: V,
                                                gif_provider: B.gif_provider,
                                                load_id: B.load_id,
                                                source_object: B.source_object,
                                                gif_url: B.gif_url,
                                                gif_id: B.gif_id,
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
                                        if (
                                            (r.some((e) => {
                                                let { clip: t } = e;
                                                return t?.clipMethod === "manual";
                                            }) && (0, p.K)("manual_sent", n),
                                            i.length !== r.length)
                                        )
                                            return;
                                        let s = K.A.getChannel(t);
                                        if (null == s) return;
                                        let l = eE.A.getMessageByReference(a);
                                        r.forEach((e, r) => {
                                            let { clip: a } = e;
                                            if (null == a) return;
                                            let o =
                                                l.state === eE.a.LOADED &&
                                                l.message.attachments.some((e) => e.clip_remote_id === a.remoteClipId);
                                            y.default.track(D.HAw.CLIP_SHARED, {
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
                                        attachmentsToUpload: k ?? [],
                                        messageReference: O,
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
                                eH.log("Failed to send message", {
                                    hasErr: E.hasErr,
                                    status: E.hasErr ? void 0 : E.status,
                                    code: E.hasErr ? void 0 : E.body?.code,
                                    error: E.hasErr ? E.err : void 0,
                                });
                                let r = !1;
                                if (E.hasErr) "ABORTED" === E.err.code && (r = !0);
                                else if (E.status >= 400 && E.status < 500 && E.body)
                                    if (E.body.code === D.t02.SLOWMODE_RATE_LIMITED) {
                                        let t = E.body.retry_after;
                                        null != t &&
                                            t > 0 &&
                                            o.h.dispatch({
                                                type: "SLOWMODE_SET_COOLDOWN",
                                                channelId: e,
                                                slowmodeType: eD.R.SendMessage,
                                                cooldownMs: t * ev.A.Millis.SECOND,
                                            });
                                    } else
                                        P.yf.has(E.body.code)
                                            ? o.h.dispatch({
                                                  type: "MESSAGE_SEND_FAILED_AUTOMOD",
                                                  messageData: eg,
                                                  errorResponseBody: { code: E.body.code, message: E.body.message },
                                              })
                                            : E.body.code === D.t02.POGGERMODE_TEMPORARILY_DISABLED
                                              ? o.h.dispatch({ type: "POGGERMODE_TEMPORARILY_DISABLED" })
                                              : E.body.code === D.t02.EXPLICIT_CONTENT
                                                ? (t = eB.ty.EXPLICIT_CONTENT)
                                                : null != L || eo || null != G || eX.sendClydeError(e, E.body.code);
                                (r
                                    ? null != eO.A.getMessage(e, em) && eX.deleteMessage(e, em, !0)
                                    : (null != i &&
                                          o.h.dispatch({
                                              type: "UPLOAD_FAIL",
                                              channelId: e,
                                              file: i._file,
                                              messageId: em,
                                              reason: t,
                                              noSendFailed: !0,
                                          }),
                                      E.hasErr ||
                                          t !== eB.ty.EXPLICIT_CONTENT ||
                                          eX.sendExplicitMediaClydeError(
                                              e,
                                              E.body?.attachments,
                                              N.SW.EXPLICIT_MEDIA_MESSAGE_SEND_BLOCKED,
                                          ),
                                      o.h.dispatch({
                                          type: "MESSAGE_SEND_FAILED",
                                          messageId: em,
                                          channelId: e,
                                          shouldNotify: !n.doNotNotifyOnError,
                                          reason: t,
                                      }),
                                      (0, ei.O)({
                                          failureCode: E.hasErr ? void 0 : E.status,
                                          errorMessage: E.hasErr ? E.err.message : void 0,
                                      }),
                                      u.Ay.cancelPendingSendRequests(e).forEach((e) => {
                                          (eH.log("Cancelling pending message", e.nonce),
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
            if ((0, a.Lt)(t.flags, D.pr7.IS_COMPONENTS_V2)) {
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
            await em.A.unarchiveThreadIfNecessary(e);
            let s = (function (e, t) {
                    let n = eO.A.getMessage(e, t);
                    if (null == n || n.type !== D.lAJ.REPLY) return;
                    let i = eE.A.getMessageByReference(n.messageReference);
                    if (i.state === eE.a.LOADED && !n.mentions.includes(i.message.author.id))
                        return { parse: Object.values(D.uw8), replied_user: !1 };
                })(e, t),
                d = null != (i = eO.A.getMessage(e, t)) && i.hasFlag(D.pr7.CROSSPOSTED),
                c = { channelId: e, messageId: t, content: r, isCrossposted: d, allowed_mentions: s, components: a };
            u.Ay.enqueue({ type: u.AZ.EDIT, message: c }, (n) => {
                let i = !n.hasErr && P.yf.has(n.body.code);
                if (i) {
                    let e = { type: u.AZ.EDIT, message: c };
                    o.h.dispatch({
                        type: "MESSAGE_EDIT_FAILED_AUTOMOD",
                        messageData: e,
                        errorResponseBody: { code: n.body.code, message: n.body.message },
                    });
                }
                (n.hasErr
                    ? l.O.announce(eV.intl.string(eV.t.Atp7FP))
                    : i
                      ? l.O.announce(eV.intl.string(eV.t.Hym4ix))
                      : l.O.announce(eV.intl.string(eV.t["0x1HBD"])),
                    eX.endEditMessage(e, n.hasErr ? void 0 : n),
                    eX.focusMessage({ channelId: e, messageId: t }));
            });
        },
        async suppressEmbeds(e, t) {
            await em.A.unarchiveThreadIfNecessary(e);
            let n = eO.A.getMessage(e, t);
            null != n &&
                s.Bo.patch({
                    url: D.Rsh.MESSAGE(e, t),
                    body: { flags: (0, a.lA)(n.flags, D.pr7.SUPPRESS_EMBEDS, !0) },
                    oldFormErrors: !0,
                    rejectWithError: (0, s.fT)(),
                });
        },
        async patchMessageGuildOfficial(e, t, n) {
            await em.A.unarchiveThreadIfNecessary(e);
            let i = eO.A.getMessage(e, t);
            null != i &&
                s.Bo.patch({
                    url: D.Rsh.MESSAGE(e, t),
                    body: { flags: (0, a.lA)(i.flags, D.pr7.IS_GUILD_OFFICIAL, n) },
                    oldFormErrors: !0,
                    rejectWithError: (0, s.fT)(),
                });
        },
        patchMessageAttachments: async (e, t, n) => (
            await em.A.unarchiveThreadIfNecessary(e),
            s.Bo.patch({
                url: D.Rsh.MESSAGE(e, t),
                body: { attachments: n },
                oldFormErrors: !0,
                rejectWithError: (0, s.fT)(),
            })
        ),
        async deleteMessage(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            function i() {
                o.h.dispatch({ type: "MESSAGE_DELETE", id: t, channelId: e, local: n }).then(() => {
                    l.O.announce(eV.intl.string(eV.t.RYMs7s));
                });
            }
            n
                ? i()
                : (await em.A.unarchiveThreadIfNecessary(e),
                  s.Bo.del({ url: D.Rsh.MESSAGE(e, t), oldFormErrors: !0, rejectWithError: (0, s.fT)() }).then(() => {
                      i();
                  }));
        },
        dismissAutomatedMessage(e) {
            (null != e.loggingName &&
                _.Ay.trackWithMetadata(D.HAw.AUTOMATED_MESSAGE_DISMISSED, {
                    message_name: e.loggingName,
                    message_author: e.author.username,
                }),
                (0, eo.np)(e.channel_id, e.id),
                this.deleteMessage(e.channel_id, e.id, !0));
        },
        revealMessage(e, t) {
            o.h.dispatch({ type: "MESSAGE_REVEAL", channelId: e, messageId: t });
        },
        async crosspostMessage(e, t) {
            try {
                return await s.Bo.post({
                    url: D.Rsh.MESSAGE_CROSSPOST(e, t),
                    oldFormErrors: !0,
                    failImmediatelyWhenRateLimited: !0,
                    rejectWithError: (0, s.fT)(),
                });
            } catch (t) {
                let e;
                ((e =
                    429 === t.status
                        ? eV.intl.formatToPlainString(eV.t["77cuqz"], {
                              retryAfter: Math.floor(t.body.retry_after / 60),
                          })
                        : eV.intl.string(eV.t.z2gyNF)),
                    ex.A.show({
                        title: eV.intl.string(eV.t.Vd1hs6),
                        body: e,
                        confirmText: eV.intl.string(eV.t.BddRzS),
                    }));
            }
        },
        trackInvite: eK,
    },
    ez = eX;
