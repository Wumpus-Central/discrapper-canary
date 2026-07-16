"use strict";
n.d(t, { A: () => eq }), n(801541), n(938796);
var i = n(889137),
    r = n(696292),
    a = n(665260),
    s = n(636537),
    l = n(765178),
    o = n(228366),
    d = n(155718),
    c = n(292446),
    u = n(779185),
    _ = n(95561),
    E = n(723176),
    A = n(154049),
    h = n(586660),
    I = n(354287),
    f = n(695870),
    p = n(53677),
    T = n(892768),
    m = n(167189),
    g = n(833291),
    S = n(626584),
    N = n(390248),
    C = n(885918),
    R = n(341662),
    O = n(617710),
    L = n(607399),
    y = n(309010),
    D = n(967198),
    v = n(174459),
    b = n(652215);
function M(e, t) {
    v.default.track(b.HAw.APP_DIRECTORY_PROFILE_EMBED_SENT, {
        application_id: e,
        device_platform: L.Fr ? "mobile_web" : "desktop_web",
        guild_id: D.A.getGuildId(),
        channel_id: y.Ay.getChannelId(),
        section: t,
    });
}
var P = n(834757),
    U = n(753738),
    w = n(51271),
    G = n(844944),
    x = n(122906),
    k = n(842241),
    F = n(346542),
    V = n(279208),
    B = n(917878),
    H = n(395780),
    j = n(320095);
async function W(e) {
    let { channelId: t, message: n, items: i, shouldUploadFailureSendNotification: r } = e,
        a = new H.A(),
        s = (0, j.rh)({ ...n, id: a._file.id });
    a.on("start", (e) => {
        o.h.dispatch({ type: "UPLOAD_START", channelId: t, file: e, message: s, uploader: a });
    }),
        a.on("progress", (e) => {
            o.h.dispatch({ type: "UPLOAD_PROGRESS", channelId: t, file: e });
        }),
        a.on("error", (e, n, i, a) => {
            o.h.dispatch({ type: "UPLOAD_FAIL", channelId: t, file: e, messageId: s.id, shouldSendNotification: r });
        }),
        a.on("complete", (e) => {
            a._aborted && o.h.dispatch({ type: "UPLOAD_COMPLETE", channelId: t, file: e, aborted: !0 });
        });
    let l = await a.uploadFiles(i);
    if (!a._aborted) return { attachments: l, uploader: a };
}
var Y = n(521427),
    K = n(17928),
    $ = n(69114),
    z = n(322683),
    q = n(734057),
    Z = n(498642),
    X = n(544180);
let Q = new S.A("MessageRoundtripTrackerStore");
function J(e) {
    return null != e.apiResponseTimestamp && null != e.gatewaySeenTimestamp;
}
function ee(e) {
    let t = q.A.getBasicChannel(e.channelId);
    if (null == t)
        return void Q.warn(`Ignoring a messageData for channel ${e.channelId} because we can't find that channel.`);
    if (Math.random() > 0.1) return;
    let n = null == e.apiResponseTimestamp ? null : e.apiResponseTimestamp - e.initialSendTimestamp,
        i = null == e.gatewaySeenTimestamp ? null : e.gatewaySeenTimestamp - e.initialSendTimestamp,
        r = (0, z.O)();
    v.default.track(b.HAw.SEND_MESSAGE_ROUNDTRIP, {
        ...(0, $.A)(),
        api_latency_ms: n,
        gateway_latency_ms: i,
        channel_id: t.id,
        channel_type: t.type,
        guild_id: t.guild_id,
        guild_size: Z.A.getMemberCount(t.guild_id),
        mobile_network_type: X.A.getType(),
        num_attachments: e.attachmentCount,
        ...(null != r && { mobile_signal_strength_level: r }),
    });
}
class et extends K.Ay.Store {
    initialize() {
        this.waitFor(q.A, Z.A, X.A);
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
        this.pendingMessages.set(t, r),
            setTimeout(() => {
                let e = this.pendingMessages.get(t);
                null != e && (ee(e), this.pendingMessages.delete(t));
            }, 3e4);
    }
    recordMessageSendApiResponse(e) {
        let t = this.pendingMessages.get(e);
        if (null != t) {
            let n = { ...t, apiResponseTimestamp: Date.now() };
            J(n) ? (ee(n), this.pendingMessages.delete(e)) : this.pendingMessages.set(e, n);
        }
    }
    recordGatewayResponse(e) {
        let t = this.pendingMessages.get(e);
        if (null != t) {
            let n = { ...t, gatewaySeenTimestamp: Date.now() };
            J(n) ? (ee(n), this.pendingMessages.delete(e)) : this.pendingMessages.set(e, n);
        }
    }
}
let en = new et(o.h, {
        MESSAGE_CREATE: function (e) {
            let { optimistic: t, message: n } = e,
                i = n.nonce;
            t || null == i || en.recordGatewayResponse(i);
        },
    }),
    ei = { init() {}, donateSentMessage(e, t) {}, deleteAllInteractions() {} };
var er = n(963852),
    ea = n(195880);
function es(e) {
    let t = null != e.fileItems ? e.fileItems.map((e) => e.mimeType ?? "unknown") : [],
        n = e.errorMessage ?? void 0,
        i = e.failureCode ?? void 0;
    (0, _.zV)(b.HAw.SEND_MESSAGE_FAILURE, { failure_code: i, error_message: n, attachment_mimetypes: t });
}
var el = n(491001),
    eo = n(512599),
    ed = n(3137),
    ec = n(969632),
    eu = n(45787),
    e_ = n(308528);
function eE(e) {
    if (e !== f.E) return null;
    let t = q.A.getChannel(e);
    return null == t ? null : e_.A.ensurePrivateChannel(t.recipients);
}
var eA = n(561844),
    eh = n(710969);
n(853145);
var eI = n(9842),
    ef = n(750385),
    ep = n(677413),
    eT = n(867455),
    em = n(464578),
    eg = n(616356),
    eS = n(280450);
n(580745);
var eN = n(71393),
    eC = n(299091),
    eR = n(232835),
    eO = n(576705),
    eL = n(290863),
    ey = n(568548),
    eD = n(101392),
    ev = n(287809),
    eb = n(927813),
    eM = n(45938),
    eP = n(975571),
    eU = n(428262),
    ew = n(935208),
    eG = n(292348),
    ex = n(157559),
    ek = n(768349),
    eF = n(401755),
    eV = n(381941),
    eB = n(375708);
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
        d = (0, k.y$)(t),
        c = null != o && (0, F.oK)(o),
        u = o?.target_application?.id;
    null != u && c && (0, I.KL)(u, ek.J.ACTIVITY_INVITE, l);
    let E = q.A.getChannel(n);
    if (null != E) {
        let e = null;
        E.isMultiUserDM() ? (e = b.G2g.GDM_INVITE) : E.isPrivate() || (e = b.G2g.SERVER_INVITE);
        let t = {};
        if (null != o && o.state === b.elq.RESOLVED && null != o.channel) {
            let n = o.channel;
            (t.invite_channel_id = n.id),
                (t.invite_guild_id = o.guild?.id),
                (t.invite_channel_type = n.type),
                null != o.inviter && (t.invite_inviter_id = o.inviter.id),
                null != o.target_application && (t.application_id = o.target_application.id);
            let i = eg.A.getLastActiveStream();
            if (null != i && i.channelId === n.id) {
                (e = b.G2g.STREAM), (t.destination_user_id = i.ownerId);
                let n = (0, P.Ee)(i, eL.A);
                t.application_id = null != n ? n.id : null;
            }
        }
        null != a &&
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
                send_type: b.gfq.DIRECT_MESSAGE,
                invite_guild_scheduled_event_id: d.guildScheduledEventId,
                invite_instance_id: (0, k._U)(d.baseCode, i) ?? null,
                ...s,
            }),
            _.Ay.trackWithMetadata(b.HAw.INVITE_SENT, t);
    } else {
        let e = {};
        null != o &&
            o.state === b.elq.RESOLVED &&
            null != o.inviter &&
            ((e.invite_inviter_id = o.inviter.id),
            null != o.target_application && (e.application_id = o.target_application.id),
            (e = {
                ...e,
                location: r,
                invite_type: b.G2g.FRIEND_INVITE,
                invite_code: d.baseCode,
                message_id: i,
                send_type: b.gfq.DIRECT_MESSAGE,
                invite_guild_scheduled_event_id: d.guildScheduledEventId,
                invite_instance_id: (0, k._U)(d.baseCode, i) ?? null,
                ...s,
            }),
            _.Ay.trackWithMetadata(b.HAw.INVITE_SENT, e));
    }
}
let e$ = {
        [b.t02.SLOWMODE_RATE_LIMITED]: {
            messageName: "SLOWMODE_RATE_LIMITED",
            messageGetter: (e) => eB.intl.formatToPlainString(eB.t.IWntYg, { seconds: e.rateLimitPerUser }),
        },
        [b.t02.INVALID_MESSAGE_SEND_NO_MUTUAL_GUILDS]: {
            messageName: "INVALID_MESSAGE_SEND_NO_MUTUAL_GUILDS",
            messageGetter: (e) => {
                let t = eP.A.getArticleURL(b.MVz.DM_COULD_NOT_BE_DELIVERED),
                    n = e.rawRecipients ?? [];
                return e.isDM() && 1 === n.length && n.some((e) => e.bot)
                    ? eB.intl.formatToPlainString(eB.t.SkGL7l, { helpUrl: t })
                    : eB.intl.formatToPlainString(eB.t.llTkqr, { helpUrl: t });
            },
        },
        [b.t02.INVALID_MESSAGE_SEND_USER]: {
            messageName: "INVALID_MESSAGE_SEND_USER",
            messageGetter: () =>
                eB.intl.formatToPlainString(eB.t.SkGL7l, {
                    helpUrl: eP.A.getArticleURL(b.MVz.DM_COULD_NOT_BE_DELIVERED),
                }),
        },
        [b.t02.TOO_MANY_THREADS]: {
            messageName: "TOO_MANY_THREADS",
            messageGetter: (e) =>
                e.isForumLikeChannel() || e.isForumPost()
                    ? eB.intl.string(eB.t["/jUd2+"])
                    : eB.intl.string(eB.t["5EMPA7"]),
        },
        [b.t02.TOO_MANY_ANNOUNCEMENT_THREADS]: {
            messageName: "TOO_MANY_ANNOUNCEMENT_THREADS",
            messageGetter: () => eB.intl.string(eB.t["aY+lLC"]),
        },
        [b.t02.HARMFUL_LINK_MESSAGE_BLOCKED]: {
            messageName: "HARMFUL_LINK_MESSAGE_BLOCKED",
            messageGetter: () => eB.intl.formatToPlainString(eB.t.zSG3Qy, { helpUrl: b.X7G.HARMFUL_LINKS }),
        },
        [b.t02.HARMFUL_URL_BLOCKED]: {
            messageName: "HARMFUL_URL_BLOCKED",
            messageGetter: () => eB.intl.string(eB.t.WxX2Fd),
        },
        [b.t02.EMAIL_VERIFICATION_REQUIRED]: {
            messageName: "BOT_REQUIRES_EMAIL_VERIFICATION",
            messageGetter: () => eB.intl.string(eB.t.k1Cjqr),
        },
        [b.t02.GUILD_MESSAGE_UPDATE_RATE_LIMIT_EXCEEDED]: {
            messageName: "GUILD_MESSAGE_UPDATE_RATE_LIMIT_EXCEEDED",
            messageGetter: () => eB.intl.string(eB.t.Z5SUuv),
        },
        [b.t02.RATE_LIMIT_DM_OPEN]: {
            messageName: "BOT_DM_RATE_LIMITED",
            messageGetter: () => eB.intl.string(eB.t.E8nbNb),
        },
        [b.t02.SEND_MESSAGE_TEMPORARILY_DISABLED]: {
            messageName: "BOT_DM_SEND_MESSAGE_TEMPORARILY_DISABLED",
            messageGetter: () => eB.intl.string(eB.t.aRUbah),
        },
        [b.t02.INVALID_MESSAGE_SEND_GAME_FRIEND_DM]: {
            messageName: "BOT_DM_SEND_MESSAGE_INVALID_FOR_GAME_FRIEND",
            messageGetter: () => eB.intl.string(eB.t["/meGhR"]),
        },
        [b.t02.INVALID_MESSAGE_SEND_PROVISIONAL_ACCOUNT_OFFLINE]: {
            messageName: "BOT_DM_SEND_MESSAGE_INVALID_OFFLINE_PROVISIONAL_ACCOUNT",
            messageGetter: () => eB.intl.string(eB.t.Oc1Zjw),
        },
        [b.t02.TOTAL_ATTACHMENT_SIZE_TOO_LARGE]: {
            messageName: "TOTAL_ATTACHMENT_SIZE_TOO_LARGE",
            messageGetter: () => eB.intl.formatToPlainString(eB.t.DYFPg2, { maxSizeMb: eG.YK }),
        },
        [b.t02.CLOUD_UPLOAD_NOT_FOUND]: {
            messageName: "CLOUD_UPLOAD_NOT_FOUND",
            messageGetter: () => eB.intl.string(eB.t.bQldfH),
        },
        [b.t02.INVALID_PERMISSIONS]: {
            messageName: "INVALID_PERMISSIONS",
            messageGetter: () => eB.intl.string(eB.t.zl4Weq),
        },
    },
    ez = {
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
            null != n &&
                _.Ay.trackWithMetadata(b.HAw.AUTOMATED_MESSAGE_RECEIVED, { message_author: "Clyde", message_name: n }),
                ez.receiveMessage(e, (0, er.pO)({ messageId: i, channelId: e, content: t, loggingName: n }));
        },
        sendNitroSystemMessage(e, t, n) {
            let i = (0, er.Ay)({
                channelId: e,
                nonce: n,
                type: b.lAJ.NITRO_NOTIFICATION,
                content: t,
                flags: b.pr7.EPHEMERAL,
                author: { id: b.oIV, username: "Nitro Notification", discriminator: b.h3J, avatar: "nitro", bot: !0 },
            });
            ez.receiveMessage(e, { ...i, state: b.cmJ.SENT, channel_id: e }, !0);
        },
        sendGiftingPromptSystemMessage(e, t) {
            let n = (0, er.Ay)({
                channelId: e,
                type: b.lAJ.GIFTING_PROMPT,
                content: "",
                flags: b.pr7.EPHEMERAL,
                author: {
                    id: b.oIV,
                    username: "Gifting Prompt",
                    discriminator: b.h3J,
                    avatar: "gifting_prompt",
                    bot: !0,
                },
                giftingPrompt: t,
            });
            ez.receiveMessage(e, { ...n, state: b.cmJ.SENT }, !0);
        },
        sendGuildBoostUpsellSystemMessage(e, t) {
            let n = (0, er.Ay)({
                channelId: e,
                type: b.lAJ.GUILD_BOOST_UPSELL,
                content: "",
                flags: b.pr7.EPHEMERAL,
                author: {
                    id: b.oIV,
                    username: "Guild Boost Upsell",
                    discriminator: b.h3J,
                    avatar: "guild_boost_upsell",
                    bot: !0,
                },
                boostingPrompt: t,
            });
            ez.receiveMessage(e, { ...n, state: b.cmJ.SENT }, !0);
        },
        sendClydeError(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                n = q.A.getChannel(e);
            if (null == n) return;
            let i = e$[t];
            null == i
                ? ez.sendBotMessage(
                      e,
                      eB.intl.formatToPlainString(eB.t.SkGL7l, {
                          helpUrl: eP.A.getArticleURL(b.MVz.DM_COULD_NOT_BE_DELIVERED),
                      }),
                      `SEND_FAILED (${t})`,
                  )
                : ez.sendBotMessage(e, i.messageGetter(n), i.messageName);
        },
        sendExplicitMediaClydeError(e, t, n) {
            let r = q.A.getChannel(e);
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
                l = (0, ea.m)();
            ez.sendBotMessage(e, a, s, l),
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
                    });
        },
        truncateMessages(e, t, n) {
            o.h.dispatch({ type: "TRUNCATE_MESSAGES", channelId: e, truncateBottom: t, truncateTop: n });
        },
        clearChannel(e) {
            o.h.dispatch({ type: "CLEAR_MESSAGES", channelId: e });
        },
        jumpToPresent(e, t) {
            ez.trackJump(e, null, "Present");
            let n = { present: !0 };
            eR.A.hasPresent(e)
                ? o.h.dispatch({ type: "LOAD_MESSAGES_SUCCESS_CACHED", jump: n, channelId: e, limit: t })
                : ez.fetchMessages({ channelId: e, limit: t, jump: n });
        },
        trackJump(e, t, n, i) {
            _.Ay.trackWithMetadata(b.HAw.JUMP, { context: n, channel_id: e, message_id: t, ...i });
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
            } = e;
            return (
                "string" == typeof a && ez.trackJump(t, n, a, s),
                ez.fetchMessages({
                    channelId: t,
                    limit: b.d7Q,
                    jump: { messageId: n, flash: i, offset: r, returnMessageId: o, jumpType: c, onJumpComplete: _ },
                    isPreload: l,
                    skipLocalFetch: d,
                    avoidInitialScroll: u,
                })
            );
        },
        focusMessage(e) {
            let { channelId: t, messageId: n } = e;
            ez.fetchMessages({ channelId: t, limit: b.d7Q, focus: { messageId: n } });
        },
        async fetchMessage(e) {
            let { channelId: t, messageId: n } = e,
                i = await s.Bo.get({
                    url: b.Rsh.MESSAGES(t),
                    query: { limit: 1, around: n },
                    retries: 2,
                    oldFormErrors: !0,
                    rejectWithError: (0, s.fT)(),
                });
            if (i.body.length > 0) return (0, j.rh)(i.body[0]);
        },
        fetchMessages(e) {
            let {
                    channelId: t,
                    before: n,
                    after: i,
                    limit: r,
                    jump: a,
                    focus: l,
                    isPreload: d,
                    skipLocalFetch: u,
                    truncate: _,
                    forICYMI: E,
                    avoidInitialScroll: A,
                    feature: h,
                    fetchKey: I,
                } = e,
                p = q.A.getChannel(t),
                T = O.A.isConnectedOrOverlay(),
                m = Date.now();
            if (null != p && p.type === b.rbe.GUILD_STORE) return !1;
            if (
                t === f.E ||
                (eH.log(`Fetching messages for ${t} between ${i} and ${n}. jump=${JSON.stringify(a)}`),
                ez._tryFetchMessagesCached({
                    channelId: t,
                    before: n,
                    after: i,
                    limit: r,
                    jump: a,
                    focus: l,
                    truncate: _,
                }))
            )
                return;
            em.A.fetchMessages.recordStart(), B.A.recordChannelFetchStart(t, I ?? m, n, i, r);
            let g = a ?? void 0;
            null == g && null != l && (g = { ...l });
            let S = c.A.getOrCreate(t).loadStart(g);
            c.A.commit(S), o.h.dispatch({ type: "LOAD_MESSAGES" });
            let N = g?.messageId,
                C = new eY();
            return (
                u || this.fetchLocalMessages(t, I ?? m, n, i, r, C),
                s.Bo.get({
                    url: b.Rsh.MESSAGES(t),
                    query: { before: n, after: i, limit: r, around: N, preload: d, feature: h },
                    retries: 2,
                    oldFormErrors: !0,
                    rejectWithError: (0, s.fT)(),
                }).then(
                    (e) => (
                        em.A.fetchMessages.recordEnd(),
                        em.A.dispatchMessages.measure(() => {
                            let s = e.body,
                                l = null != n,
                                d = null != i,
                                c = null == n && null == i,
                                u = null != N || (s.length === r && (l || c)),
                                h = null != N || (d && s.length === r);
                            if (null != N) {
                                let e = Math.floor(r / 2),
                                    n = e + (r % 2),
                                    i = [
                                        N,
                                        ...s.map((e) => {
                                            let { id: t } = e;
                                            return t;
                                        }),
                                    ]
                                        .filter((e, t, n) => n.indexOf(e) === t)
                                        .sort(ew.default.compare)
                                        .indexOf(N);
                                if ((i < n - 1 && (u = !1), s.length - i < e && (h = !1), h && s.length > 0)) {
                                    let e = ey.Ay.lastMessageId(t);
                                    s[0].id === e && (h = !1);
                                }
                            }
                            eH.log(`Fetched ${s.length} messages for ${t} isBefore:${l} isAfter:${d}`),
                                C.markComplete(),
                                o.h.dispatch({
                                    type: "LOAD_MESSAGES_SUCCESS",
                                    channelId: t,
                                    messages: s,
                                    isBefore: l,
                                    isAfter: d,
                                    hasMoreBefore: u,
                                    hasMoreAfter: h,
                                    limit: r,
                                    jump: a,
                                    forICYMI: E,
                                    isStale: !T || O.A.lastTimeConnectedChanged() >= m,
                                    truncate: _,
                                    avoidInitialScroll: A,
                                }),
                                B.A.recordChannelFetchedNetwork(t, I ?? m, n, i, r, s);
                        }),
                        !0
                    ),
                    () => (
                        eH.log(`Failed to fetch messages for ${t}`),
                        o.h.dispatch({ type: "LOAD_MESSAGES_FAILURE", channelId: t }),
                        !1
                    ),
                )
            );
        },
        async fetchLocalMessages(e, t, n, i, r, a) {
            let s = q.A.getBasicChannel(e),
                l = c.A.getOrCreate(e),
                d = E.A.database();
            if (null == d || null == s || null != n || null != i) return void em.A.addLocalMessages(e, -1);
            if (l.ready && !l.cached) return void em.A.addLocalMessages(e, -2);
            let u = await (0, A.kk)(() => h.Ay.load(d, e, r));
            if (null == u) return void em.A.addLocalMessages(e, -3);
            if (
                (eH.log(
                    `fetched ${u.messages.length} messages from local database (channel_id: ${e}, remote_fetch_completed: ${a.completed})`,
                ),
                em.A.addLocalMessages(e, u.messages.length),
                !a.completed && u.messages.length > 0)
            ) {
                let a = u.messages.length >= r && u.connectionId === O.A.lastTimeConnectedChanged();
                B.A.recordChannelFetchedLocal(e, t, n, i, r, u.messages),
                    o.h.dispatch({
                        type: "LOCAL_MESSAGES_LOADED",
                        guildId: s.guild_id,
                        channelId: e,
                        users: u.users,
                        members: u.members,
                        messages: u.messages,
                        stale: !a,
                    });
            }
        },
        async fetchNewLocalMessages(e, t) {
            let n = q.A.getBasicChannel(e),
                i = E.A.database();
            if (null == i || null == n) return;
            let r = c.A.getOrCreate(e);
            if (r.hasMoreAfter) return;
            let a = await (0, A.kk)(() => h.Ay.load(i, e, t));
            if (null == a) return;
            r = c.A.getOrCreate(e);
            let s = r.last()?.id,
                l = null == s ? a.messages : a.messages.filter((e) => ew.default.compare(e.id, s) > 0);
            eH.log(`Fetched ${a.messages.length} messages from the cache after foregrounding. ${l.length} are new`),
                0 !== l.length &&
                    o.h.dispatch({
                        type: "LOCAL_MESSAGES_LOADED",
                        guildId: n.guild_id,
                        channelId: e,
                        users: a.users,
                        members: a.members,
                        messages: l,
                        stale: !0,
                        isForegroundCacheLoad: (0, el.K)(),
                    });
        },
        _tryFetchMessagesCached(e) {
            let { channelId: t, before: n, after: i, limit: r, jump: a, focus: s, truncate: l } = e,
                d = eR.A.getMessages(t);
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
                        o.h.dispatch({ type: "LOAD_MESSAGES_SUCCESS_CACHED", channelId: t, jump: a, limit: b.d7Q }), !0
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
            let r = await eE(e);
            if (null != r) return ez.sendMessage(r, t, n, i);
            let a = i.nonce ?? (0, ea.m)();
            i = { ...i, nonce: a };
            let s = function () {
                return ez._sendMessage(e, t, i);
            };
            return (en.recordMessageSendAttempt(e, a, i), eR.A.isReady(e))
                ? s()
                : n && e !== f.E
                  ? (ej.info(`Waiting for channel ${e} to be ready before sending.`),
                    new Promise((t, n) => {
                        eR.A.whenReady(e, () => {
                            ej.info(`Channel ${e} is ready for sending now.`), s().then(t, n);
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
                      allowedMentions: e.shouldMention ? void 0 : { parse: Object.values(b.uw8), replied_user: !1 },
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
        getSendMessageOptionsForAlsoForwardToChannel: (e) => ({ alsoForwardToChannelId: e.alsoForwardToChannelId }),
        getSendMessageOptions(e) {
            let t = ez.getSendMessageOptionsForReply(e.pendingReply),
                n = ez.getSendMessageOptionsForStickers({ ...e }),
                i = ez.getSendMessageOptionsForScheduledMessage({ ...e }),
                r = ez.getSendMessageOptionsForAlsoForwardToChannel({ ...e });
            return { ...t, ...n, ...i, ...r };
        },
        sendInvite(e, t, n, i, r) {
            let a = (0, V.A)(t);
            return (
                null != r &&
                    (a = `${r}
${a}`),
                ez._sendMessage(
                    e,
                    { content: a, tts: !1, validNonShortcutEmojis: [], invalidEmojis: [] },
                    { location: n, inviteAnalyticsMetadata: i },
                )
            );
        },
        sendActivityBookmark: (e, t, n, i) =>
            ez._sendMessage(
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
            return ez._sendMessage(e, a, { ...i, stickerIds: t });
        },
        sendGreetMessage(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                { messageReference: i, allowedMentions: r } = n;
            return s.Bo.post({
                url: b.Rsh.MESSAGES_GREET(e),
                body: { sticker_ids: [t], allowed_mentions: r, message_reference: i },
                oldFormErrors: !0,
                rejectWithError: (0, s.fT)(),
                context: { location: eV.Hx.GREET },
            }).then(
                (n) => (
                    ei.donateSentMessage(n.body.content, e),
                    ez.receiveMessage(e, n.body),
                    o.h.dispatch({ type: "STICKER_TRACK_USAGE", stickerIds: [t] }),
                    n
                ),
                (t) => {
                    throw (
                        (eH.log("Failed to send greeting"),
                        429 !== t.status && ez.sendClydeError(e, t.body.code),
                        o.h.dispatch({ type: "MESSAGE_SEND_FAILED", messageId: t.body.id, channelId: e }),
                        t)
                    );
                },
            );
        },
        sendPollMessage(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            return ez._sendMessage(
                e,
                { content: "", tts: !1, validNonShortcutEmojis: [], invalidEmojis: [] },
                { ...n, poll: t, location: eV.Hx.POLL_CREATION },
            );
        },
        validateMessage(e, t, n) {
            let i, r;
            return (
                e.some((e) => e.animated) && !eU.Ay.canUseAnimatedEmojis(t)
                    ? ((i = eB.intl.string(eB.t.msFJy8)), (r = "INVALID_ANIMATED_EMOJI_BODY"))
                    : eO.A.canWithPartialContext(b.xBc.USE_EXTERNAL_EMOJIS, { channelId: n })
                      ? ((i = eB.intl.string(eB.t.FzugNl)), (r = "INVALID_EXTERNAL_EMOJI_BODY_UPGRADE"))
                      : ((i = eB.intl.string(eB.t["Q87rI/"])), (r = "INVALID_EXTERNAL_EMOJI_BODY")),
                { errorMessage: i, errorMessageName: r }
            );
        },
        async _sendMessage(e, t, n) {
            let i,
                s = eE(e);
            if (null != s)
                return (
                    ej.info("Converting channel to a private channel"),
                    s.then(
                        (e) => (ej.info("Finished converting channel to a private channel"), ez._sendMessage(e, t, n)),
                    )
                );
            let l = t.content,
                { invalidEmojis: d, validNonShortcutEmojis: c, tts: E = !1 } = t,
                {
                    activityAction: A,
                    location: h,
                    inviteAnalyticsMetadata: f,
                    stickerIds: S,
                    messageReference: O,
                    allowedMentions: L,
                    poll: y,
                    sharedCustomTheme: D,
                    contentInventoryEntry: P,
                    attachments: k,
                    attachmentsToUpload: F,
                    onAttachmentUploadError: V,
                    announcementSendOptions: B,
                    withCheckpoint: H,
                    mediaMention: K,
                } = n,
                $ = n.flags ?? 0,
                [z, Z] = (0, ep.A)(l);
            z && ((l = Z), ($ = (0, a.UI)($, b.pr7.SUPPRESS_NOTIFICATIONS)));
            let X = q.A.getChannel(e),
                Q = eN.A.getGuild(X?.guild_id);
            (0, Y.Zv)(Q, X, "_sendMessage") && ($ = (0, a.UI)($, b.pr7.IS_GUILD_OFFICIAL));
            let J = !1,
                ee = n.messageReference?.type === b.SH7.FORWARD;
            if (
                "" === l &&
                null == A &&
                null == S &&
                null == y &&
                null == D &&
                null == P &&
                !ee &&
                (null == k || 0 === k.length) &&
                !H &&
                (null == t.components || 0 === t.components.length)
            )
                if (null == F || !(F.length > 0)) return Promise.resolve();
                else J = !0;
            let et = null != O ? b.lAJ.REPLY : b.lAJ.DEFAULT,
                el = n.nonce ?? (0, ea.m)(),
                eu = (0, er.Ay)({
                    channelId: e,
                    content: l,
                    tts: E,
                    type: et,
                    messageReference: O,
                    allowedMentions: L,
                    flags: 0 !== $ ? $ : void 0,
                    nonce: el,
                    poll: (0, ec.G8)(y),
                    sharedCustomTheme: D,
                    mediaMention: K,
                });
            if (
                (!1 !== n.eagerDispatch &&
                    ((0, eo.iq)(e, eu.id),
                    null != S && (eu.sticker_items = S.map((e) => ef.A.getStickerById(e)).filter((e) => null != e)),
                    ez.receiveMessage(e, eu, !0, n)),
                !eW && null != d && d.length > 0)
            ) {
                eW = !0;
                let t = ev.default.getCurrentUser(),
                    { errorMessage: n, errorMessageName: i } = ez.validateMessage(d, t, e);
                ez.sendBotMessage(e, n, i);
            }
            let e_ = {
                type: null != B ? u.AZ.SEND_ANNOUNCEMENT : u.AZ.SEND,
                message: {
                    channelId: e,
                    content: l,
                    nonce: el,
                    tts: E,
                    message_reference: O,
                    allowed_mentions: L,
                    flags: $,
                    analyticsLocation: h,
                },
            };
            if (
                (null != t.components && (e_.message.components = t.components),
                null != B &&
                    ((e_.message.create_thread = B.createThread),
                    (e_.message.title = B.threadName),
                    (e_.message.publish = B.publish ?? !1)),
                null != A)
            ) {
                let e,
                    t = A?.activity.session_id;
                if (
                    null !=
                    (e =
                        A.type === b.xL.JOIN_REQUEST || A.type === b.xL.STREAM_REQUEST || null != t
                            ? t
                            : eS.default.getSessionId())
                ) {
                    let t = { type: A.type, session_id: e, target_user_id: A.targetUserId },
                        { activity: n } = A;
                    null != n.party && null != n.party.id && (t.party_id = n.party.id),
                        (e_.message.application_id = n.application_id),
                        (e_.message.activity = t);
                }
            }
            if (
                (null != y && (e_.message.poll = y),
                null != D && (e_.message.shared_client_theme = D),
                null != S && (e_.message.sticker_ids = S),
                ed.A.isEnabled() && (e_.message.has_poggermode_enabled = !0),
                H && (e_.message.with_checkpoint = !0),
                null != P && (e_.message.content_inventory_entry = P),
                null != K && (e_.message.media_mention = K),
                null != k && k.length > 0 && (e_.message.attachments = k),
                null != F && F.length > 0)
            )
                try {
                    let t = await W({
                        channelId: e,
                        nonce: el,
                        items: F,
                        message: eu,
                        shouldUploadFailureSendNotification: !n.doNotNotifyOnError && void 0,
                    });
                    if (null == t) return;
                    let r = t.attachments;
                    if (((i = t.uploader), J && (null == r || 0 === r.length))) return;
                    null != r && (e_.message.attachments = r.map((e, t) => (0, eG.OW)(e, t)));
                } catch (r) {
                    let { file: e, code: t, reason: n, responseBody: i } = r;
                    es({ fileItems: e.items, failureCode: t, errorMessage: n?.msg }), V?.(e, t, n, i);
                    return;
                }
            return new Promise((t, a) => {
                let s = Date.now(),
                    d = u.Ay.length,
                    E = Math.floor(1e4 * Math.random());
                ej.info(`Queueing message to be sent LogId:${E}`),
                    u.Ay.enqueue(
                        e_,
                        (A) => {
                            let L = Date.now() - s;
                            if (A.ok) {
                                var D, k, V, B, H, W, Y;
                                let a;
                                ei.donateSentMessage(l, e),
                                    ez.receiveMessage(e, A.body, !0, {
                                        sendAnalytics: { duration: L, queueSize: d },
                                        poll: y,
                                    }),
                                    null != n.alsoForwardToChannelId &&
                                        C.A.sendForward((0, j.rh)(A.body), n.alsoForwardToChannelId)
                                            .then(() => {
                                                !(function (e) {
                                                    let {
                                                        referencedMessageId: t,
                                                        guildId: n,
                                                        channelId: i,
                                                        destinationChannelId: r,
                                                    } = e;
                                                    v.default.track(b.HAw.MESSAGE_ALSO_SEND_TO_CHANNEL_SENT, {
                                                        referenced_message_id: t,
                                                        guild_id: n,
                                                        channel_id: i,
                                                        destination_channel_id: r,
                                                    });
                                                })({
                                                    referencedMessageId: A.body?.id,
                                                    guildId: A.body?.guild_id,
                                                    channelId: A.body?.channel_id,
                                                    destinationChannelId: n.alsoForwardToChannelId,
                                                });
                                            })
                                            .catch((t) => {
                                                eH.log(
                                                    `Failed to forward thread message to parent channel LogId:${E}`,
                                                    {
                                                        referencedMessageId: A.body?.id,
                                                        channelId: e,
                                                        destinationChannelId: n.alsoForwardToChannelId,
                                                        error: t.toString(),
                                                    },
                                                );
                                            });
                                let s = ew.default.cast(e),
                                    u = G.A.getRequest(s);
                                if (null != u) {
                                    let { guildId: t, userId: n, applicationStatus: i } = u;
                                    (0, w.cK)({
                                        guildId: t,
                                        channelId: e,
                                        messageId: A.body.id,
                                        joinRequestStatus: i,
                                        joinRequestUserId: n,
                                    });
                                }
                                en.recordMessageSendApiResponse(el),
                                    o.h.dispatch({
                                        type: "SLOWMODE_RESET_COOLDOWN",
                                        slowmodeType: eD.R.SendMessage,
                                        channelId: e,
                                    }),
                                    o.h.dispatch({ type: "EMOJI_TRACK_USAGE", emojiUsed: c }),
                                    o.h.dispatch({ type: "STICKER_TRACK_USAGE", stickerIds: S }),
                                    o.h.dispatch({
                                        type: "LOCAL_MESSAGE_CREATE",
                                        message: { channel_id: e, author: ev.default.getCurrentUser() },
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
                                            if ((0, T.Yf)(t)) {
                                                let e = (0, T.kK)(t, d, c);
                                                if (null == e) return;
                                                let { applicationId: n } = e;
                                                switch (e.type) {
                                                    case m.I.APP_DIRECTORY_PROFILE:
                                                        M(n), (0, I.KL)(d, ek.J.APP_DISCOVERY, o);
                                                        break;
                                                    case m.I.APP_DIRECTORY_STOREFRONT:
                                                        M(n, "storefront");
                                                        break;
                                                    case m.I.APP_DIRECTORY_STOREFRONT_SKU:
                                                        M(n, "storefront_sku");
                                                        break;
                                                    case m.I.ACTIVITY_BOOKMARK: {
                                                        let { params: t } = e;
                                                        (0, I.KL)(n, ek.J.ACTIVITY, t.referrerId ?? o, t.customId);
                                                        break;
                                                    }
                                                    case m.I.APP_OAUTH2_LINK:
                                                        (0, I.KL)(n, ek.J.OAUTH, o),
                                                            _.Ay.trackWithMetadata(
                                                                b.HAw.APP_OAUTH2_LINK_EMBED_URL_SENT,
                                                                { application_id: n },
                                                            );
                                                }
                                            } else
                                                switch (t) {
                                                    case m.I.INVITE:
                                                        eK({
                                                            inviteKey: d,
                                                            channelId: n,
                                                            messageId: i,
                                                            location: a,
                                                            inviteAnalyticsMetadata: s,
                                                            overrideProperties: l,
                                                        });
                                                        break;
                                                    case m.I.TEMPLATE: {
                                                        let e = x.A.getGuildTemplate(d);
                                                        if (null == e || e.state === eF.QB.RESOLVING) return;
                                                        _.Ay.trackWithMetadata(b.HAw.GUILD_TEMPLATE_LINK_SENT, {
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
                                                        (0, I.KL)(d, ek.J.ACTIVITY_INVITE, o);
                                                        break;
                                                    case m.I.GUILD_PRODUCT:
                                                    case m.I.SERVER_SHOP:
                                                    case m.I.SOCIAL_LAYER_STOREFRONT:
                                                    case m.I.SOCIAL_LAYER_STOREFRONT_APP:
                                                        break;
                                                    case m.I.QUESTS_EMBED: {
                                                        let e = (0, eh.L4)(r.u.QUESTS_EMBED);
                                                        (0, eA.av)({
                                                            questId: d,
                                                            event: b.HAw.QUEST_LINK_SHARED,
                                                            properties: { metadata_sealed: null != e ? e : null },
                                                            trackGuildAndChannelMetadata: !0,
                                                            sourceQuestContent: r.u.QUESTS_EMBED,
                                                        });
                                                        break;
                                                    }
                                                    case m.I.GAME_PROFILE:
                                                        if (!R.A.getConfig({ location: "trackCodedLinks" }).enabled)
                                                            break;
                                                        v.default.track(b.HAw.GAME_PROFILE_LINK_EMBED_SENT, {
                                                            game_id: d,
                                                        });
                                                        break;
                                                    case m.I.COLLECTIBLES_SHOP:
                                                        break;
                                                    default:
                                                        throw Error(`Unknown coded link type: ${t}`);
                                                }
                                        });
                                    })({
                                        content: l,
                                        channelId: e,
                                        messageId: A.body.id,
                                        location: h ?? "chat_input",
                                        inviteAnalyticsMetadata: f,
                                    }),
                                    (D = l),
                                    (k = A.body.id),
                                    (V = h ?? "chat_input"),
                                    (B = !!n.isGiftLinkSentOnBehalfOfUser),
                                    (0, eM.e7)(D).forEach((t) => {
                                        let n = q.A.getChannel(e);
                                        null != n &&
                                            _.Ay.trackWithMetadata(b.HAw.GIFT_CODE_SENT, {
                                                location: V,
                                                gift_code: t,
                                                guild_id: n.getGuildId(),
                                                channel_id: n.id,
                                                channel_type: n.type,
                                                message_id: k,
                                                automatic_send: B,
                                            });
                                    }),
                                    null != n.gifMetadata &&
                                        ((H = n.gifMetadata),
                                        (W = A.body.id),
                                        (Y = h ?? "chat_input"),
                                        null != (a = q.A.getChannel(e)) &&
                                            v.default.track(b.HAw.MESSAGE_SENT_WITH_GIF, {
                                                location: Y,
                                                message_id: W,
                                                gif_provider: H.gif_provider,
                                                load_id: H.load_id,
                                                source_object: H.source_object,
                                                gif_url: H.gif_url,
                                                gif_id: H.gif_id,
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
                                        let s = q.A.getChannel(t);
                                        if (null == s) return;
                                        let l = eI.A.getMessageByReference(a);
                                        r.forEach((e, r) => {
                                            let { clip: a } = e;
                                            if (null == a) return;
                                            let o =
                                                l.state === eI.a.LOADED &&
                                                l.message.attachments.some((e) => e.clip_remote_id === a.remoteClipId);
                                            v.default.track(b.HAw.CLIP_SHARED, {
                                                ...p.Zy(a),
                                                ...p.lc("trackClipsShared"),
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
                                        messageId: A.body.id,
                                        attachments: A.body.attachments ?? [],
                                        attachmentsToUpload: F ?? [],
                                        messageReference: O,
                                    }),
                                    null != i &&
                                        o.h.dispatch({
                                            type: "UPLOAD_COMPLETE",
                                            channelId: e,
                                            file: i._file,
                                            aborted: !1,
                                        }),
                                    t(A);
                            } else {
                                let t;
                                eH.log("Failed to send message", {
                                    hasErr: A.hasErr,
                                    status: A.status,
                                    code: A.body?.code,
                                    error: A.err,
                                });
                                let r = !1;
                                if (A.hasErr) "ABORTED" === A.err.code && (r = !0);
                                else if (A.status >= 400 && A.status < 500 && A.body)
                                    if (A.body.code === b.t02.SLOWMODE_RATE_LIMITED) {
                                        let t = A.body.retry_after;
                                        null != t &&
                                            t > 0 &&
                                            o.h.dispatch({
                                                type: "SLOWMODE_SET_COOLDOWN",
                                                channelId: e,
                                                slowmodeType: eD.R.SendMessage,
                                                cooldownMs: t * eb.A.Millis.SECOND,
                                            });
                                    } else
                                        U.yf.has(A.body.code)
                                            ? o.h.dispatch({
                                                  type: "MESSAGE_SEND_FAILED_AUTOMOD",
                                                  messageData: e_,
                                                  errorResponseBody: { code: A.body.code, message: A.body.message },
                                              })
                                            : A.body.code === b.t02.POGGERMODE_TEMPORARILY_DISABLED
                                              ? o.h.dispatch({ type: "POGGERMODE_TEMPORARILY_DISABLED" })
                                              : A.body.code === b.t02.EXPLICIT_CONTENT
                                                ? (t = eV.ty.EXPLICIT_CONTENT)
                                                : null != y || ee || null != P || ez.sendClydeError(e, A.body.code);
                                r
                                    ? ez.deleteMessage(e, el, !0)
                                    : (null != i &&
                                          o.h.dispatch({
                                              type: "UPLOAD_FAIL",
                                              channelId: e,
                                              file: i._file,
                                              messageId: el,
                                              reason: t,
                                              noSendFailed: !0,
                                          }),
                                      A.hasErr ||
                                          t !== eV.ty.EXPLICIT_CONTENT ||
                                          ez.sendExplicitMediaClydeError(
                                              e,
                                              A.body?.attachments,
                                              N.SW.EXPLICIT_MEDIA_MESSAGE_SEND_BLOCKED,
                                          ),
                                      o.h.dispatch({
                                          type: "MESSAGE_SEND_FAILED",
                                          messageId: el,
                                          channelId: e,
                                          shouldNotify: !n.doNotNotifyOnError,
                                          reason: t,
                                      }),
                                      es({
                                          failureCode: A.hasErr ? void 0 : A.status,
                                          errorMessage: A.hasErr ? A.err.message : void 0,
                                      }),
                                      u.Ay.cancelPendingSendRequests(e).forEach((e) => {
                                          eH.log("Cancelling pending message", e.nonce),
                                              o.h.dispatch({
                                                  type: "MESSAGE_SEND_FAILED",
                                                  messageId: e.nonce,
                                                  channelId: e.channelId,
                                              });
                                      })),
                                    a(A);
                            }
                        },
                        E,
                    );
            });
        },
        startEditMessage(e, t, n, i) {
            o.h.dispatch({ type: "MESSAGE_START_EDIT", channelId: e, messageId: t, content: n, source: i });
        },
        startEditMessageRecord(e, t, n) {
            if ((0, a.Lt)(t.flags, b.pr7.IS_COMPONENTS_V2)) {
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
            await eT.A.unarchiveThreadIfNecessary(e);
            let s = (function (e, t) {
                    let n = eR.A.getMessage(e, t);
                    if (null == n || n.type !== b.lAJ.REPLY) return;
                    let i = eI.A.getMessageByReference(n.messageReference);
                    if (i.state === eI.a.LOADED && !n.mentions.includes(i.message.author.id))
                        return { parse: Object.values(b.uw8), replied_user: !1 };
                })(e, t),
                d = null != (i = eR.A.getMessage(e, t)) && i.hasFlag(b.pr7.CROSSPOSTED),
                c = { channelId: e, messageId: t, content: r, isCrossposted: d, allowed_mentions: s, components: a };
            u.Ay.enqueue({ type: u.AZ.EDIT, message: c }, (n) => {
                let i = !n.hasErr && U.yf.has(n.body.code);
                if (i) {
                    let e = { type: u.AZ.EDIT, message: c };
                    o.h.dispatch({
                        type: "MESSAGE_EDIT_FAILED_AUTOMOD",
                        messageData: e,
                        errorResponseBody: { code: n.body.code, message: n.body.message },
                    });
                }
                n.hasErr
                    ? l.O.announce(eB.intl.string(eB.t.Atp7FP))
                    : i
                      ? l.O.announce(eB.intl.string(eB.t.Hym4ix))
                      : l.O.announce(eB.intl.string(eB.t["0x1HBD"])),
                    ez.endEditMessage(e, n.hasErr ? void 0 : n),
                    ez.focusMessage({ channelId: e, messageId: t });
            });
        },
        async suppressEmbeds(e, t) {
            await eT.A.unarchiveThreadIfNecessary(e);
            let n = eR.A.getMessage(e, t);
            null != n &&
                s.Bo.patch({
                    url: b.Rsh.MESSAGE(e, t),
                    body: { flags: (0, a.lA)(n.flags, b.pr7.SUPPRESS_EMBEDS, !0) },
                    oldFormErrors: !0,
                    rejectWithError: (0, s.fT)(),
                });
        },
        async patchMessageGuildOfficial(e, t, n) {
            await eT.A.unarchiveThreadIfNecessary(e);
            let i = eR.A.getMessage(e, t);
            null != i &&
                s.Bo.patch({
                    url: b.Rsh.MESSAGE(e, t),
                    body: { flags: (0, a.lA)(i.flags, b.pr7.IS_GUILD_OFFICIAL, n) },
                    oldFormErrors: !0,
                    rejectWithError: (0, s.fT)(),
                });
        },
        async patchMessageAttachments(e, t, n) {
            await eT.A.unarchiveThreadIfNecessary(e),
                s.Bo.patch({
                    url: b.Rsh.MESSAGE(e, t),
                    body: { attachments: n },
                    oldFormErrors: !0,
                    rejectWithError: (0, s.fT)(),
                });
        },
        async deleteMessage(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            function i() {
                o.h.dispatch({ type: "MESSAGE_DELETE", id: t, channelId: e }).then(() => {
                    l.O.announce(eB.intl.string(eB.t.RYMs7s));
                });
            }
            n
                ? i()
                : (await eT.A.unarchiveThreadIfNecessary(e),
                  s.Bo.del({ url: b.Rsh.MESSAGE(e, t), oldFormErrors: !0, rejectWithError: (0, s.fT)() }).then(() => {
                      i();
                  }));
        },
        dismissAutomatedMessage(e) {
            null != e.loggingName &&
                _.Ay.trackWithMetadata(b.HAw.AUTOMATED_MESSAGE_DISMISSED, {
                    message_name: e.loggingName,
                    message_author: e.author.username,
                }),
                (0, eu.np)(e.channel_id, e.id),
                this.deleteMessage(e.channel_id, e.id, !0);
        },
        revealMessage(e, t) {
            o.h.dispatch({ type: "MESSAGE_REVEAL", channelId: e, messageId: t });
        },
        async crosspostMessage(e, t) {
            try {
                return await s.Bo.post({
                    url: b.Rsh.MESSAGE_CROSSPOST(e, t),
                    oldFormErrors: !0,
                    failImmediatelyWhenRateLimited: !0,
                    rejectWithError: (0, s.fT)(),
                });
            } catch (t) {
                let e;
                (e =
                    429 === t.status
                        ? eB.intl.formatToPlainString(eB.t["77cuqz"], {
                              retryAfter: Math.floor(t.body.retry_after / 60),
                          })
                        : eB.intl.string(eB.t.z2gyNF)),
                    ex.A.show({
                        title: eB.intl.string(eB.t.Vd1hs6),
                        body: e,
                        confirmText: eB.intl.string(eB.t.BddRzS),
                    });
            }
        },
        trackInvite: eK,
    },
    eq = ez;
