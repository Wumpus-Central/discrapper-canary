"use strict";
n.d(t, { A: () => eZ }), n(801541), n(938796);
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
    g = n(721779),
    S = n(626584),
    N = n(390248),
    C = n(885918),
    O = n(597643),
    R = n(607399),
    L = n(309010),
    y = n(967198),
    D = n(174459),
    v = n(652215);
function b(e, t) {
    D.default.track(v.HAw.APP_DIRECTORY_PROFILE_EMBED_SENT, {
        application_id: e,
        device_platform: R.Fr ? "mobile_web" : "desktop_web",
        guild_id: y.A.getGuildId(),
        channel_id: L.Ay.getChannelId(),
        section: t,
    });
}
var M = n(834757),
    P = n(753738),
    U = n(51271),
    w = n(844944),
    G = n(122906),
    x = n(842241),
    k = n(346542),
    F = n(279208),
    V = n(917878),
    B = n(395780),
    H = n(320095);
async function j(e) {
    let { channelId: t, message: n, items: i, shouldUploadFailureSendNotification: r } = e,
        a = new B.A(),
        s = (0, H.rh)({ ...n, id: a._file.id });
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
var W = n(521427),
    Y = n(17928),
    K = n(69114),
    $ = n(322683),
    z = n(734057),
    q = n(498642),
    Z = n(544180);
let X = new S.A("MessageRoundtripTrackerStore");
function Q(e) {
    return null != e.apiResponseTimestamp && null != e.gatewaySeenTimestamp;
}
function J(e) {
    let t = z.A.getBasicChannel(e.channelId);
    if (null == t)
        return void X.warn(`Ignoring a messageData for channel ${e.channelId} because we can't find that channel.`);
    if (Math.random() > 0.1) return;
    let n = null == e.apiResponseTimestamp ? null : e.apiResponseTimestamp - e.initialSendTimestamp,
        i = null == e.gatewaySeenTimestamp ? null : e.gatewaySeenTimestamp - e.initialSendTimestamp,
        r = (0, $.O)();
    D.default.track(v.HAw.SEND_MESSAGE_ROUNDTRIP, {
        ...(0, K.A)(),
        api_latency_ms: n,
        gateway_latency_ms: i,
        channel_id: t.id,
        channel_type: t.type,
        guild_id: t.guild_id,
        guild_size: q.A.getMemberCount(t.guild_id),
        mobile_network_type: Z.A.getType(),
        num_attachments: e.attachmentCount,
        ...(null != r && { mobile_signal_strength_level: r }),
    });
}
class ee extends Y.Ay.Store {
    initialize() {
        this.waitFor(z.A, q.A, Z.A);
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
                null != e && (J(e), this.pendingMessages.delete(t));
            }, 3e4);
    }
    recordMessageSendApiResponse(e) {
        let t = this.pendingMessages.get(e);
        if (null != t) {
            let n = { ...t, apiResponseTimestamp: Date.now() };
            Q(n) ? (J(n), this.pendingMessages.delete(e)) : this.pendingMessages.set(e, n);
        }
    }
    recordGatewayResponse(e) {
        let t = this.pendingMessages.get(e);
        if (null != t) {
            let n = { ...t, gatewaySeenTimestamp: Date.now() };
            Q(n) ? (J(n), this.pendingMessages.delete(e)) : this.pendingMessages.set(e, n);
        }
    }
}
let et = new ee(o.h, {
        MESSAGE_CREATE: function (e) {
            let { optimistic: t, message: n } = e,
                i = n.nonce;
            t || null == i || et.recordGatewayResponse(i);
        },
    }),
    en = { init() {}, donateSentMessage(e, t) {}, deleteAllInteractions() {} };
var ei = n(963852),
    er = n(195880),
    ea = n(488004),
    es = n(491001),
    el = n(512599),
    eo = n(3137),
    ed = n(969632),
    ec = n(45787),
    eu = n(308528);
function e_(e) {
    if (e !== f.E) return null;
    let t = z.A.getChannel(e);
    return null == t ? null : eu.A.ensurePrivateChannel(t.recipients);
}
var eE = n(561844),
    eA = n(710969);
n(853145);
var eh = n(9842),
    eI = n(151282),
    ef = n(859403),
    ep = n(750385),
    eT = n(677413),
    em = n(867455),
    eg = n(464578),
    eS = n(616356),
    eN = n(280450);
n(580745);
var eC = n(71393),
    eO = n(299091),
    eR = n(232835),
    eL = n(576705),
    ey = n(290863),
    eD = n(573163),
    ev = n(101392),
    eb = n(287809),
    eM = n(927813),
    eP = n(45938),
    eU = n(975571),
    ew = n(158045),
    eG = n(935208),
    ex = n(292348),
    ek = n(157559),
    eF = n(768349),
    eV = n(401755),
    eB = n(381941),
    eH = n(375708);
let ej = new S.A("MessageActionCreators"),
    eW = new S.A("MessageQueue"),
    eY = !1;
class eK {
    completed = !1;
    markComplete() {
        this.completed = !0;
    }
}
function e$(e) {
    let {
            inviteKey: t,
            channelId: n,
            messageId: i,
            location: r,
            inviteAnalyticsMetadata: a,
            overrideProperties: s = {},
        } = e,
        l = eN.default.getId(),
        o = eO.A.getInvite(t),
        d = (0, x.y$)(t),
        c = null != o && (0, k.oK)(o),
        u = o?.target_application?.id;
    null != u && c && (0, I.KL)(u, eF.J.ACTIVITY_INVITE, l);
    let E = z.A.getChannel(n);
    if (null != E) {
        let e = null;
        E.isMultiUserDM() ? (e = v.G2g.GDM_INVITE) : E.isPrivate() || (e = v.G2g.SERVER_INVITE);
        let t = {};
        if (null != o && o.state === v.elq.RESOLVED && null != o.channel) {
            let n = o.channel;
            (t.invite_channel_id = n.id),
                (t.invite_guild_id = o.guild?.id),
                (t.invite_channel_type = n.type),
                null != o.inviter && (t.invite_inviter_id = o.inviter.id),
                null != o.target_application && (t.application_id = o.target_application.id);
            let i = eS.A.getLastActiveStream();
            if (null != i && i.channelId === n.id) {
                (e = v.G2g.STREAM), (t.destination_user_id = i.ownerId);
                let n = (0, M.Ee)(i, ey.A);
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
                send_type: v.gfq.DIRECT_MESSAGE,
                invite_guild_scheduled_event_id: d.guildScheduledEventId,
                invite_instance_id: (0, x._U)(d.baseCode, i) ?? null,
                ...s,
            }),
            _.Ay.trackWithMetadata(v.HAw.INVITE_SENT, t);
    } else {
        let e = {};
        null != o &&
            o.state === v.elq.RESOLVED &&
            null != o.inviter &&
            ((e.invite_inviter_id = o.inviter.id),
            null != o.target_application && (e.application_id = o.target_application.id),
            (e = {
                ...e,
                location: r,
                invite_type: v.G2g.FRIEND_INVITE,
                invite_code: d.baseCode,
                message_id: i,
                send_type: v.gfq.DIRECT_MESSAGE,
                invite_guild_scheduled_event_id: d.guildScheduledEventId,
                invite_instance_id: (0, x._U)(d.baseCode, i) ?? null,
                ...s,
            }),
            _.Ay.trackWithMetadata(v.HAw.INVITE_SENT, e));
    }
}
let ez = {
        [v.t02.SLOWMODE_RATE_LIMITED]: {
            messageName: "SLOWMODE_RATE_LIMITED",
            messageGetter: (e) => eH.intl.formatToPlainString(eH.t.IWntYg, { seconds: e.rateLimitPerUser }),
        },
        [v.t02.INVALID_MESSAGE_SEND_NO_MUTUAL_GUILDS]: {
            messageName: "INVALID_MESSAGE_SEND_NO_MUTUAL_GUILDS",
            messageGetter: (e) => {
                let t = eU.A.getArticleURL(v.MVz.DM_COULD_NOT_BE_DELIVERED),
                    n = e.rawRecipients ?? [];
                return e.isDM() && 1 === n.length && n.some((e) => e.bot)
                    ? eH.intl.formatToPlainString(eH.t.SkGL7l, { helpUrl: t })
                    : eH.intl.formatToPlainString(eH.t.llTkqr, { helpUrl: t });
            },
        },
        [v.t02.INVALID_MESSAGE_SEND_USER]: {
            messageName: "INVALID_MESSAGE_SEND_USER",
            messageGetter: () =>
                eH.intl.formatToPlainString(eH.t.SkGL7l, {
                    helpUrl: eU.A.getArticleURL(v.MVz.DM_COULD_NOT_BE_DELIVERED),
                }),
        },
        [v.t02.TOO_MANY_THREADS]: {
            messageName: "TOO_MANY_THREADS",
            messageGetter: (e) =>
                e.isForumLikeChannel() || e.isForumPost()
                    ? eH.intl.string(eH.t["/jUd2+"])
                    : eH.intl.string(eH.t["5EMPA7"]),
        },
        [v.t02.TOO_MANY_ANNOUNCEMENT_THREADS]: {
            messageName: "TOO_MANY_ANNOUNCEMENT_THREADS",
            messageGetter: () => eH.intl.string(eH.t["aY+lLC"]),
        },
        [v.t02.HARMFUL_LINK_MESSAGE_BLOCKED]: {
            messageName: "HARMFUL_LINK_MESSAGE_BLOCKED",
            messageGetter: () => eH.intl.formatToPlainString(eH.t.zSG3Qy, { helpUrl: v.X7G.HARMFUL_LINKS }),
        },
        [v.t02.HARMFUL_URL_BLOCKED]: {
            messageName: "HARMFUL_URL_BLOCKED",
            messageGetter: () => eH.intl.string(eH.t.WxX2Fd),
        },
        [v.t02.EMAIL_VERIFICATION_REQUIRED]: {
            messageName: "BOT_REQUIRES_EMAIL_VERIFICATION",
            messageGetter: () => eH.intl.string(eH.t.k1Cjqr),
        },
        [v.t02.GUILD_MESSAGE_UPDATE_RATE_LIMIT_EXCEEDED]: {
            messageName: "GUILD_MESSAGE_UPDATE_RATE_LIMIT_EXCEEDED",
            messageGetter: () => eH.intl.string(eH.t.Z5SUuv),
        },
        [v.t02.RATE_LIMIT_DM_OPEN]: {
            messageName: "BOT_DM_RATE_LIMITED",
            messageGetter: () => eH.intl.string(eH.t.E8nbNb),
        },
        [v.t02.SEND_MESSAGE_TEMPORARILY_DISABLED]: {
            messageName: "BOT_DM_SEND_MESSAGE_TEMPORARILY_DISABLED",
            messageGetter: () => eH.intl.string(eH.t.aRUbah),
        },
        [v.t02.INVALID_MESSAGE_SEND_GAME_FRIEND_DM]: {
            messageName: "BOT_DM_SEND_MESSAGE_INVALID_FOR_GAME_FRIEND",
            messageGetter: () => eH.intl.string(eH.t["/meGhR"]),
        },
        [v.t02.INVALID_MESSAGE_SEND_PROVISIONAL_ACCOUNT_OFFLINE]: {
            messageName: "BOT_DM_SEND_MESSAGE_INVALID_OFFLINE_PROVISIONAL_ACCOUNT",
            messageGetter: () => eH.intl.string(eH.t.Oc1Zjw),
        },
        [v.t02.TOTAL_ATTACHMENT_SIZE_TOO_LARGE]: {
            messageName: "TOTAL_ATTACHMENT_SIZE_TOO_LARGE",
            messageGetter: () => eH.intl.formatToPlainString(eH.t.DYFPg2, { maxSizeMb: ex.YK }),
        },
        [v.t02.CLOUD_UPLOAD_NOT_FOUND]: {
            messageName: "CLOUD_UPLOAD_NOT_FOUND",
            messageGetter: () => eH.intl.string(eH.t.bQldfH),
        },
        [v.t02.INVALID_PERMISSIONS]: {
            messageName: "INVALID_PERMISSIONS",
            messageGetter: () => eH.intl.string(eH.t.zl4Weq),
        },
    },
    eq = {
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
                _.Ay.trackWithMetadata(v.HAw.AUTOMATED_MESSAGE_RECEIVED, { message_author: "Clyde", message_name: n }),
                eq.receiveMessage(e, (0, ei.pO)({ messageId: i, channelId: e, content: t, loggingName: n }));
        },
        sendNitroSystemMessage(e, t, n) {
            let i = (0, ei.Ay)({
                channelId: e,
                nonce: n,
                type: v.lAJ.NITRO_NOTIFICATION,
                content: t,
                flags: v.pr7.EPHEMERAL,
                author: { id: v.oIV, username: "Nitro Notification", discriminator: v.h3J, avatar: "nitro", bot: !0 },
            });
            eq.receiveMessage(e, { ...i, state: v.cmJ.SENT, channel_id: e }, !0);
        },
        sendGiftingPromptSystemMessage(e, t) {
            let n = (0, ei.Ay)({
                channelId: e,
                type: v.lAJ.GIFTING_PROMPT,
                content: "",
                flags: v.pr7.EPHEMERAL,
                author: {
                    id: v.oIV,
                    username: "Gifting Prompt",
                    discriminator: v.h3J,
                    avatar: "gifting_prompt",
                    bot: !0,
                },
                giftingPrompt: t,
            });
            eq.receiveMessage(e, { ...n, state: v.cmJ.SENT }, !0);
        },
        sendGuildBoostUpsellSystemMessage(e, t) {
            let n = (0, ei.Ay)({
                channelId: e,
                type: v.lAJ.GUILD_BOOST_UPSELL,
                content: "",
                flags: v.pr7.EPHEMERAL,
                author: {
                    id: v.oIV,
                    username: "Guild Boost Upsell",
                    discriminator: v.h3J,
                    avatar: "guild_boost_upsell",
                    bot: !0,
                },
                boostingPrompt: t,
            });
            eq.receiveMessage(e, { ...n, state: v.cmJ.SENT }, !0);
        },
        sendClydeError(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                n = z.A.getChannel(e);
            if (null == n) return;
            let i = ez[t];
            null == i
                ? eq.sendBotMessage(
                      e,
                      eH.intl.formatToPlainString(eH.t.SkGL7l, {
                          helpUrl: eU.A.getArticleURL(v.MVz.DM_COULD_NOT_BE_DELIVERED),
                      }),
                      `SEND_FAILED (${t})`,
                  )
                : eq.sendBotMessage(e, i.messageGetter(n), i.messageName);
        },
        sendExplicitMediaClydeError(e, t, n) {
            let r = z.A.getChannel(e);
            if (null == r) return;
            let { message: a, messageName: s } = (0, i.YW)({ isDM: r.isDM(), isGDM: r.isGroupDM() })
                    .with({ isDM: !0 }, () => ({
                        message: eH.intl.string(eH.t["mktny/"]),
                        messageName: "BOT_DM_EXPLICIT_CONTENT",
                    }))
                    .with({ isDM: !1, isGDM: !0 }, () => ({
                        message: eH.intl.string(eH.t["mktny/"]),
                        messageName: "BOT_GDM_EXPLICIT_CONTENT",
                    }))
                    .otherwise(() => ({
                        message: eH.intl.string(eH.t.i4AbAS),
                        messageName: "BOT_GUILD_EXPLICIT_CONTENT",
                    })),
                l = (0, er.m)();
            eq.sendBotMessage(e, a, s, l),
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
            eq.trackJump(e, null, "Present");
            let n = { present: !0 };
            eR.A.hasPresent(e)
                ? o.h.dispatch({ type: "LOAD_MESSAGES_SUCCESS_CACHED", jump: n, channelId: e, limit: t })
                : eq.fetchMessages({ channelId: e, limit: t, jump: n });
        },
        trackJump(e, t, n, i) {
            _.Ay.trackWithMetadata(v.HAw.JUMP, { context: n, channel_id: e, message_id: t, ...i });
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
                "string" == typeof a && eq.trackJump(t, n, a, s),
                eq.fetchMessages({
                    channelId: t,
                    limit: v.d7Q,
                    jump: { messageId: n, flash: i, offset: r, returnMessageId: o, jumpType: c, onJumpComplete: _ },
                    isPreload: l,
                    skipLocalFetch: d,
                    avoidInitialScroll: u,
                })
            );
        },
        focusMessage(e) {
            let { channelId: t, messageId: n } = e;
            eq.fetchMessages({ channelId: t, limit: v.d7Q, focus: { messageId: n } });
        },
        async fetchMessage(e) {
            let { channelId: t, messageId: n } = e,
                i = await s.Bo.get({
                    url: v.Rsh.MESSAGES(t),
                    query: { limit: 1, around: n },
                    retries: 2,
                    oldFormErrors: !0,
                    rejectWithError: (0, s.fT)(),
                });
            if (i.body.length > 0) return (0, H.rh)(i.body[0]);
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
                p = z.A.getChannel(t),
                T = O.A.isConnectedOrOverlay(),
                m = Date.now();
            if (null != p && p.type === v.rbe.GUILD_STORE) return !1;
            if (
                t === f.E ||
                (ej.log(`Fetching messages for ${t} between ${i} and ${n}. jump=${JSON.stringify(a)}`),
                eq._tryFetchMessagesCached({
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
            eg.A.fetchMessages.recordStart(), V.A.recordChannelFetchStart(t, I ?? m, n, i, r);
            let g = a ?? void 0;
            null == g && null != l && (g = { ...l });
            let S = c.A.getOrCreate(t).loadStart(g);
            c.A.commit(S), o.h.dispatch({ type: "LOAD_MESSAGES" });
            let N = g?.messageId,
                C = new eK();
            return (
                u || this.fetchLocalMessages(t, I ?? m, n, i, r, C),
                s.Bo.get({
                    url: v.Rsh.MESSAGES(t),
                    query: { before: n, after: i, limit: r, around: N, preload: d, feature: h },
                    retries: 2,
                    oldFormErrors: !0,
                    rejectWithError: (0, s.fT)(),
                }).then(
                    (e) => (
                        eg.A.fetchMessages.recordEnd(),
                        eg.A.dispatchMessages.measure(() => {
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
                                        .sort(eG.default.compare)
                                        .indexOf(N);
                                if ((i < n - 1 && (u = !1), s.length - i < e && (h = !1), h && s.length > 0)) {
                                    let e = eD.Ay.lastMessageId(t);
                                    s[0].id === e && (h = !1);
                                }
                            }
                            ej.log(`Fetched ${s.length} messages for ${t} isBefore:${l} isAfter:${d}`),
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
                                V.A.recordChannelFetchedNetwork(t, I ?? m, n, i, r, s);
                        }),
                        !0
                    ),
                    () => (
                        ej.log(`Failed to fetch messages for ${t}`),
                        o.h.dispatch({ type: "LOAD_MESSAGES_FAILURE", channelId: t }),
                        !1
                    ),
                )
            );
        },
        async fetchLocalMessages(e, t, n, i, r, a) {
            let s = z.A.getBasicChannel(e),
                l = c.A.getOrCreate(e),
                d = E.A.database();
            if (null == d || null == s || null != n || null != i) return void eg.A.addLocalMessages(e, -1);
            if (l.ready && !l.cached) return void eg.A.addLocalMessages(e, -2);
            let u = await (0, A.kk)(() => h.Ay.load(d, e, r));
            if (null == u) return void eg.A.addLocalMessages(e, -3);
            if (
                (ej.log(
                    `fetched ${u.messages.length} messages from local database (channel_id: ${e}, remote_fetch_completed: ${a.completed})`,
                ),
                eg.A.addLocalMessages(e, u.messages.length),
                !a.completed && u.messages.length > 0)
            ) {
                let a = u.messages.length >= r && u.connectionId === O.A.lastTimeConnectedChanged();
                V.A.recordChannelFetchedLocal(e, t, n, i, r, u.messages),
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
            let n = z.A.getBasicChannel(e),
                i = E.A.database();
            if (null == i || null == n) return;
            let r = c.A.getOrCreate(e);
            if (r.hasMoreAfter) return;
            let a = await (0, A.kk)(() => h.Ay.load(i, e, t));
            if (null == a) return;
            r = c.A.getOrCreate(e);
            let s = r.last()?.id,
                l = null == s ? a.messages : a.messages.filter((e) => eG.default.compare(e.id, s) > 0);
            ej.log(`Fetched ${a.messages.length} messages from the cache after foregrounding. ${l.length} are new`),
                0 !== l.length &&
                    o.h.dispatch({
                        type: "LOCAL_MESSAGES_LOADED",
                        guildId: n.guild_id,
                        channelId: e,
                        users: a.users,
                        members: a.members,
                        messages: l,
                        stale: !0,
                        isForegroundCacheLoad: (0, es.K)(),
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
                let e = a?.messageId != null ? eG.default.extractTimestamp(a?.messageId) : 0,
                    n = d.first(),
                    i = d.last();
                if (
                    (!d.hasMoreBefore && null != n && eG.default.extractTimestamp(n.id) >= e) ||
                    (!d.hasMoreAfter && null != i && eG.default.extractTimestamp(i.id) <= e) ||
                    (null != n &&
                        null != i &&
                        eG.default.extractTimestamp(n.id) < e &&
                        eG.default.extractTimestamp(i.id) > e)
                )
                    return (
                        o.h.dispatch({ type: "LOAD_MESSAGES_SUCCESS_CACHED", channelId: t, jump: a, limit: v.d7Q }), !0
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
            let r = await e_(e);
            if (null != r) return eq.sendMessage(r, t, n, i);
            let a = i.nonce ?? (0, er.m)();
            i = { ...i, nonce: a };
            let s = function () {
                return eq._sendMessage(e, t, i);
            };
            return (null == i.scheduledTimestamp && et.recordMessageSendAttempt(e, a, i), eR.A.isReady(e))
                ? s()
                : n && e !== f.E
                  ? (eW.info(`Waiting for channel ${e} to be ready before sending.`),
                    new Promise((t, n) => {
                        eR.A.whenReady(e, () => {
                            eW.info(`Channel ${e} is ready for sending now.`), s().then(t, n);
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
                      allowedMentions: e.shouldMention ? void 0 : { parse: Object.values(v.uw8), replied_user: !1 },
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
            let t = eq.getSendMessageOptionsForReply(e.pendingReply),
                n = eq.getSendMessageOptionsForStickers({ ...e }),
                i = eq.getSendMessageOptionsForScheduledMessage({ ...e }),
                r = eq.getSendMessageOptionsForAlsoForwardToChannel({ ...e });
            return { ...t, ...n, ...i, ...r };
        },
        sendInvite(e, t, n, i, r) {
            let a = (0, F.A)(t);
            return (
                null != r &&
                    (a = `${r}
${a}`),
                eq._sendMessage(
                    e,
                    { content: a, tts: !1, validNonShortcutEmojis: [], invalidEmojis: [] },
                    { location: n, inviteAnalyticsMetadata: i },
                )
            );
        },
        sendActivityBookmark: (e, t, n, i) =>
            eq._sendMessage(
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
            return eq._sendMessage(e, a, { ...i, stickerIds: t });
        },
        sendGreetMessage(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                { messageReference: i, allowedMentions: r } = n;
            return s.Bo.post({
                url: v.Rsh.MESSAGES_GREET(e),
                body: { sticker_ids: [t], allowed_mentions: r, message_reference: i },
                oldFormErrors: !0,
                rejectWithError: (0, s.fT)(),
                context: { location: eB.Hx.GREET },
            }).then(
                (n) => (
                    en.donateSentMessage(n.body.content, e),
                    eq.receiveMessage(e, n.body),
                    o.h.dispatch({ type: "STICKER_TRACK_USAGE", stickerIds: [t] }),
                    n
                ),
                (t) => {
                    throw (
                        (ej.log("Failed to send greeting"),
                        429 !== t.status && eq.sendClydeError(e, t.body.code),
                        o.h.dispatch({ type: "MESSAGE_SEND_FAILED", messageId: t.body.id, channelId: e }),
                        t)
                    );
                },
            );
        },
        sendPollMessage(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            return eq._sendMessage(
                e,
                { content: "", tts: !1, validNonShortcutEmojis: [], invalidEmojis: [] },
                { ...n, poll: t, location: eB.Hx.POLL_CREATION },
            );
        },
        validateMessage(e, t, n) {
            let i, r;
            return (
                e.some((e) => e.animated) && !ew.Ay.canUseAnimatedEmojis(t)
                    ? ((i = eH.intl.string(eH.t.msFJy8)), (r = "INVALID_ANIMATED_EMOJI_BODY"))
                    : eL.A.canWithPartialContext(v.xBc.USE_EXTERNAL_EMOJIS, { channelId: n })
                      ? ((i = eH.intl.string(eH.t.FzugNl)), (r = "INVALID_EXTERNAL_EMOJI_BODY_UPGRADE"))
                      : ((i = eH.intl.string(eH.t["Q87rI/"])), (r = "INVALID_EXTERNAL_EMOJI_BODY")),
                { errorMessage: i, errorMessageName: r }
            );
        },
        async _sendMessage(e, t, n) {
            let i,
                s = e_(e);
            if (null != s)
                return (
                    eW.info("Converting channel to a private channel"),
                    s.then(
                        (e) => (eW.info("Finished converting channel to a private channel"), eq._sendMessage(e, t, n)),
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
                    allowedMentions: R,
                    poll: L,
                    sharedCustomTheme: y,
                    contentInventoryEntry: M,
                    attachments: x,
                    attachmentsToUpload: k,
                    onAttachmentUploadError: F,
                    announcementSendOptions: V,
                    withCheckpoint: B,
                    mediaMention: Y,
                    scheduledTimestamp: K,
                } = n,
                $ = n.flags ?? 0,
                [q, Z] = (0, eT.Ay)(l);
            q && ((l = Z), ($ = (0, a.UI)($, v.pr7.SUPPRESS_NOTIFICATIONS)));
            let X = z.A.getChannel(e),
                Q = eC.A.getGuild(X?.guild_id);
            (0, W.Zv)(Q, X, "_sendMessage") && ($ = (0, a.UI)($, v.pr7.IS_GUILD_OFFICIAL));
            let J = !1,
                ee = n.messageReference?.type === v.SH7.FORWARD;
            if (
                "" === l &&
                null == A &&
                null == S &&
                null == L &&
                null == y &&
                null == M &&
                !ee &&
                (null == x || 0 === x.length) &&
                !B &&
                (null == t.components || 0 === t.components.length)
            )
                if (null == k || !(k.length > 0)) return Promise.resolve();
                else J = !0;
            let es = null != O ? v.lAJ.REPLY : v.lAJ.DEFAULT,
                ec = n.nonce ?? (0, er.m)(),
                eu = (0, ei.Ay)({
                    channelId: e,
                    content: l,
                    tts: E,
                    type: es,
                    messageReference: O,
                    allowedMentions: R,
                    flags: 0 !== $ ? $ : void 0,
                    nonce: ec,
                    poll: (0, ed.G8)(L),
                    sharedCustomTheme: y,
                    mediaMention: Y,
                });
            if (
                (!1 !== n.eagerDispatch &&
                    null == K &&
                    ((0, el.iq)(e, eu.id),
                    null != S && (eu.sticker_items = S.map((e) => ep.A.getStickerById(e)).filter((e) => null != e)),
                    eq.receiveMessage(e, eu, !0, n)),
                !eY && null != d && d.length > 0)
            ) {
                eY = !0;
                let t = eb.default.getCurrentUser(),
                    { errorMessage: n, errorMessageName: i } = eq.validateMessage(d, t, e);
                eq.sendBotMessage(e, n, i);
            }
            let em = {
                type: null != V ? u.AZ.SEND_ANNOUNCEMENT : u.AZ.SEND,
                message: {
                    channelId: e,
                    content: l,
                    nonce: ec,
                    tts: E,
                    message_reference: O,
                    allowed_mentions: R,
                    flags: $,
                    analyticsLocation: h,
                },
            };
            if (
                (null != t.components && (em.message.components = t.components),
                null != V &&
                    ((em.message.create_thread = V.createThread),
                    (em.message.title = V.threadName),
                    (em.message.publish = V.publish ?? !1)),
                null != A)
            ) {
                let e,
                    t = A?.activity.session_id;
                if (
                    null !=
                    (e =
                        A.type === v.xL.JOIN_REQUEST || A.type === v.xL.STREAM_REQUEST || null != t
                            ? t
                            : eN.default.getSessionId())
                ) {
                    let t = { type: A.type, session_id: e, target_user_id: A.targetUserId },
                        { activity: n } = A;
                    null != n.party && null != n.party.id && (t.party_id = n.party.id),
                        (em.message.application_id = n.application_id),
                        (em.message.activity = t);
                }
            }
            if (
                (null != L && (em.message.poll = L),
                null != y && (em.message.shared_client_theme = y),
                null != S && (em.message.sticker_ids = S),
                eo.A.isEnabled() && (em.message.has_poggermode_enabled = !0),
                B && (em.message.with_checkpoint = !0),
                null != M && (em.message.content_inventory_entry = M),
                null != Y && (em.message.media_mention = Y),
                null != x && x.length > 0 && (em.message.attachments = x),
                null != k && k.length > 0)
            )
                try {
                    let t = await j({
                        channelId: e,
                        nonce: ec,
                        items: k,
                        message: eu,
                        shouldUploadFailureSendNotification: !n.doNotNotifyOnError && void 0,
                    });
                    if (null == t) return;
                    let r = t.attachments;
                    if (((i = t.uploader), J && (null == r || 0 === r.length))) return;
                    null != r && (em.message.attachments = r.map((e, t) => (0, ex.OW)(e, t)));
                } catch (r) {
                    let { file: e, code: t, reason: n, responseBody: i } = r;
                    (0, ea.O)({ fileItems: e.items, failureCode: t, errorMessage: n?.msg }), F?.(e, t, n, i);
                    return;
                }
            if (null != K)
                try {
                    let t = await (0, eI.pr)({ channelId: e, scheduledTimestamp: K, messageSendData: em.message });
                    return (
                        null != i &&
                            o.h.dispatch({ type: "UPLOAD_COMPLETE", channelId: e, file: i._file, aborted: !1 }),
                        (0, ef.c_)(K),
                        t
                    );
                } catch (t) {
                    throw (
                        (null != i &&
                            o.h.dispatch({
                                type: "UPLOAD_FAIL",
                                channelId: e,
                                file: i._file,
                                messageId: ec,
                                noSendFailed: !0,
                            }),
                        !0 !== n.doNotNotifyOnError && (0, ef.vh)(t),
                        t)
                    );
                }
            return new Promise((t, a) => {
                let s = Date.now(),
                    d = u.Ay.length,
                    E = Math.floor(1e4 * Math.random());
                eW.info(`Queueing message to be sent LogId:${E}`),
                    u.Ay.enqueue(
                        em,
                        (A) => {
                            let R = Date.now() - s;
                            if (A.ok) {
                                var y, x, F, V, B, j, W;
                                let a;
                                en.donateSentMessage(l, e),
                                    eq.receiveMessage(e, A.body, !0, {
                                        sendAnalytics: { duration: R, queueSize: d },
                                        poll: L,
                                    }),
                                    null != n.alsoForwardToChannelId &&
                                        C.A.sendForward((0, H.rh)(A.body), n.alsoForwardToChannelId)
                                            .then(() => {
                                                !(function (e) {
                                                    let {
                                                        referencedMessageId: t,
                                                        guildId: n,
                                                        channelId: i,
                                                        destinationChannelId: r,
                                                    } = e;
                                                    D.default.track(v.HAw.MESSAGE_ALSO_SEND_TO_CHANNEL_SENT, {
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
                                                ej.log(
                                                    `Failed to forward thread message to parent channel LogId:${E}`,
                                                    {
                                                        referencedMessageId: A.body?.id,
                                                        channelId: e,
                                                        destinationChannelId: n.alsoForwardToChannelId,
                                                        error: t.toString(),
                                                    },
                                                );
                                            });
                                let s = eG.default.cast(e),
                                    u = w.A.getRequest(s);
                                if (null != u) {
                                    let { guildId: t, userId: n, applicationStatus: i } = u;
                                    (0, U.cK)({
                                        guildId: t,
                                        channelId: e,
                                        messageId: A.body.id,
                                        joinRequestStatus: i,
                                        joinRequestUserId: n,
                                    });
                                }
                                et.recordMessageSendApiResponse(ec),
                                    o.h.dispatch({
                                        type: "SLOWMODE_RESET_COOLDOWN",
                                        slowmodeType: ev.R.SendMessage,
                                        channelId: e,
                                    }),
                                    o.h.dispatch({ type: "EMOJI_TRACK_USAGE", emojiUsed: c }),
                                    o.h.dispatch({ type: "STICKER_TRACK_USAGE", stickerIds: S }),
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
                                            o = eN.default.getId();
                                        (0, g.Ay)(t).forEach((e) => {
                                            let { type: t, code: d, url: c } = e;
                                            if ((0, T.Yf)(t)) {
                                                let e = (0, T.kK)(t, d, c);
                                                if (null == e) return;
                                                let { applicationId: n } = e;
                                                switch (e.type) {
                                                    case m.I.APP_DIRECTORY_PROFILE:
                                                        b(n), (0, I.KL)(d, eF.J.APP_DISCOVERY, o);
                                                        break;
                                                    case m.I.APP_DIRECTORY_STOREFRONT:
                                                        b(n, "storefront");
                                                        break;
                                                    case m.I.APP_DIRECTORY_STOREFRONT_SKU:
                                                        b(n, "storefront_sku");
                                                        break;
                                                    case m.I.ACTIVITY_BOOKMARK: {
                                                        let { params: t } = e;
                                                        (0, I.KL)(n, eF.J.ACTIVITY, t.referrerId ?? o, t.customId);
                                                        break;
                                                    }
                                                    case m.I.APP_OAUTH2_LINK:
                                                        (0, I.KL)(n, eF.J.OAUTH, o),
                                                            _.Ay.trackWithMetadata(
                                                                v.HAw.APP_OAUTH2_LINK_EMBED_URL_SENT,
                                                                { application_id: n },
                                                            );
                                                }
                                            } else
                                                switch (t) {
                                                    case m.I.INVITE:
                                                        e$({
                                                            inviteKey: d,
                                                            channelId: n,
                                                            messageId: i,
                                                            location: a,
                                                            inviteAnalyticsMetadata: s,
                                                            overrideProperties: l,
                                                        });
                                                        break;
                                                    case m.I.TEMPLATE: {
                                                        let e = G.A.getGuildTemplate(d);
                                                        if (null == e || e.state === eV.QB.RESOLVING) return;
                                                        _.Ay.trackWithMetadata(v.HAw.GUILD_TEMPLATE_LINK_SENT, {
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
                                                        (0, I.KL)(d, eF.J.ACTIVITY_INVITE, o);
                                                        break;
                                                    case m.I.GUILD_PRODUCT:
                                                    case m.I.SERVER_SHOP:
                                                    case m.I.SOCIAL_LAYER_STOREFRONT:
                                                    case m.I.SOCIAL_LAYER_STOREFRONT_APP:
                                                        break;
                                                    case m.I.QUESTS_EMBED: {
                                                        let e = (0, eA.L4)(r.u.QUESTS_EMBED);
                                                        (0, eE.av)({
                                                            questId: d,
                                                            event: v.HAw.QUEST_LINK_SHARED,
                                                            properties: { metadata_sealed: null != e ? e : null },
                                                            trackGuildAndChannelMetadata: !0,
                                                            sourceQuestContent: r.u.QUESTS_EMBED,
                                                        });
                                                        break;
                                                    }
                                                    case m.I.GAME_PROFILE:
                                                        D.default.track(v.HAw.GAME_PROFILE_LINK_EMBED_SENT, {
                                                            game_id: d,
                                                        });
                                                        break;
                                                    case m.I.COLLECTIBLES_SHOP:
                                                    case m.I.GAME_SERVER_SHARE:
                                                    case m.I.USER_PROFILE:
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
                                    (y = l),
                                    (x = A.body.id),
                                    (F = h ?? "chat_input"),
                                    (V = !!n.isGiftLinkSentOnBehalfOfUser),
                                    (0, eP.e7)(y).forEach((t) => {
                                        let n = z.A.getChannel(e);
                                        null != n &&
                                            _.Ay.trackWithMetadata(v.HAw.GIFT_CODE_SENT, {
                                                location: F,
                                                gift_code: t,
                                                guild_id: n.getGuildId(),
                                                channel_id: n.id,
                                                channel_type: n.type,
                                                message_id: x,
                                                automatic_send: V,
                                            });
                                    }),
                                    null != n.gifMetadata &&
                                        ((B = n.gifMetadata),
                                        (j = A.body.id),
                                        (W = h ?? "chat_input"),
                                        null != (a = z.A.getChannel(e)) &&
                                            D.default.track(v.HAw.MESSAGE_SENT_WITH_GIF, {
                                                location: W,
                                                message_id: j,
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
                                        if (i.length !== r.length) return;
                                        let s = z.A.getChannel(t);
                                        if (null == s) return;
                                        let l = eh.A.getMessageByReference(a);
                                        r.forEach((e, r) => {
                                            let { clip: a } = e;
                                            if (null == a) return;
                                            let o =
                                                l.state === eh.a.LOADED &&
                                                l.message.attachments.some((e) => e.clip_remote_id === a.remoteClipId);
                                            D.default.track(v.HAw.CLIP_SHARED, {
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
                                    t(A);
                            } else {
                                let t;
                                ej.log("Failed to send message", {
                                    hasErr: A.hasErr,
                                    status: A.status,
                                    code: A.body?.code,
                                    error: A.err,
                                });
                                let r = !1;
                                if (A.hasErr) "ABORTED" === A.err.code && (r = !0);
                                else if (A.status >= 400 && A.status < 500 && A.body)
                                    if (A.body.code === v.t02.SLOWMODE_RATE_LIMITED) {
                                        let t = A.body.retry_after;
                                        null != t &&
                                            t > 0 &&
                                            o.h.dispatch({
                                                type: "SLOWMODE_SET_COOLDOWN",
                                                channelId: e,
                                                slowmodeType: ev.R.SendMessage,
                                                cooldownMs: t * eM.A.Millis.SECOND,
                                            });
                                    } else
                                        P.yf.has(A.body.code)
                                            ? o.h.dispatch({
                                                  type: "MESSAGE_SEND_FAILED_AUTOMOD",
                                                  messageData: em,
                                                  errorResponseBody: { code: A.body.code, message: A.body.message },
                                              })
                                            : A.body.code === v.t02.POGGERMODE_TEMPORARILY_DISABLED
                                              ? o.h.dispatch({ type: "POGGERMODE_TEMPORARILY_DISABLED" })
                                              : A.body.code === v.t02.EXPLICIT_CONTENT
                                                ? (t = eB.ty.EXPLICIT_CONTENT)
                                                : null != L || ee || null != M || eq.sendClydeError(e, A.body.code);
                                r
                                    ? null != eR.A.getMessage(e, ec) && eq.deleteMessage(e, ec, !0)
                                    : (null != i &&
                                          o.h.dispatch({
                                              type: "UPLOAD_FAIL",
                                              channelId: e,
                                              file: i._file,
                                              messageId: ec,
                                              reason: t,
                                              noSendFailed: !0,
                                          }),
                                      A.hasErr ||
                                          t !== eB.ty.EXPLICIT_CONTENT ||
                                          eq.sendExplicitMediaClydeError(
                                              e,
                                              A.body?.attachments,
                                              N.SW.EXPLICIT_MEDIA_MESSAGE_SEND_BLOCKED,
                                          ),
                                      o.h.dispatch({
                                          type: "MESSAGE_SEND_FAILED",
                                          messageId: ec,
                                          channelId: e,
                                          shouldNotify: !n.doNotNotifyOnError,
                                          reason: t,
                                      }),
                                      (0, ea.O)({
                                          failureCode: A.hasErr ? void 0 : A.status,
                                          errorMessage: A.hasErr ? A.err.message : void 0,
                                      }),
                                      u.Ay.cancelPendingSendRequests(e).forEach((e) => {
                                          ej.log("Cancelling pending message", e.nonce),
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
            if ((0, a.Lt)(t.flags, v.pr7.IS_COMPONENTS_V2)) {
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
                    let n = eR.A.getMessage(e, t);
                    if (null == n || n.type !== v.lAJ.REPLY) return;
                    let i = eh.A.getMessageByReference(n.messageReference);
                    if (i.state === eh.a.LOADED && !n.mentions.includes(i.message.author.id))
                        return { parse: Object.values(v.uw8), replied_user: !1 };
                })(e, t),
                d = null != (i = eR.A.getMessage(e, t)) && i.hasFlag(v.pr7.CROSSPOSTED),
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
                n.hasErr
                    ? l.O.announce(eH.intl.string(eH.t.Atp7FP))
                    : i
                      ? l.O.announce(eH.intl.string(eH.t.Hym4ix))
                      : l.O.announce(eH.intl.string(eH.t["0x1HBD"])),
                    eq.endEditMessage(e, n.hasErr ? void 0 : n),
                    eq.focusMessage({ channelId: e, messageId: t });
            });
        },
        async suppressEmbeds(e, t) {
            await em.A.unarchiveThreadIfNecessary(e);
            let n = eR.A.getMessage(e, t);
            null != n &&
                s.Bo.patch({
                    url: v.Rsh.MESSAGE(e, t),
                    body: { flags: (0, a.lA)(n.flags, v.pr7.SUPPRESS_EMBEDS, !0) },
                    oldFormErrors: !0,
                    rejectWithError: (0, s.fT)(),
                });
        },
        async patchMessageGuildOfficial(e, t, n) {
            await em.A.unarchiveThreadIfNecessary(e);
            let i = eR.A.getMessage(e, t);
            null != i &&
                s.Bo.patch({
                    url: v.Rsh.MESSAGE(e, t),
                    body: { flags: (0, a.lA)(i.flags, v.pr7.IS_GUILD_OFFICIAL, n) },
                    oldFormErrors: !0,
                    rejectWithError: (0, s.fT)(),
                });
        },
        async patchMessageAttachments(e, t, n) {
            await em.A.unarchiveThreadIfNecessary(e),
                s.Bo.patch({
                    url: v.Rsh.MESSAGE(e, t),
                    body: { attachments: n },
                    oldFormErrors: !0,
                    rejectWithError: (0, s.fT)(),
                });
        },
        async deleteMessage(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            function i() {
                o.h.dispatch({ type: "MESSAGE_DELETE", id: t, channelId: e }).then(() => {
                    l.O.announce(eH.intl.string(eH.t.RYMs7s));
                });
            }
            n
                ? i()
                : (await em.A.unarchiveThreadIfNecessary(e),
                  s.Bo.del({ url: v.Rsh.MESSAGE(e, t), oldFormErrors: !0, rejectWithError: (0, s.fT)() }).then(() => {
                      i();
                  }));
        },
        dismissAutomatedMessage(e) {
            null != e.loggingName &&
                _.Ay.trackWithMetadata(v.HAw.AUTOMATED_MESSAGE_DISMISSED, {
                    message_name: e.loggingName,
                    message_author: e.author.username,
                }),
                (0, ec.np)(e.channel_id, e.id),
                this.deleteMessage(e.channel_id, e.id, !0);
        },
        revealMessage(e, t) {
            o.h.dispatch({ type: "MESSAGE_REVEAL", channelId: e, messageId: t });
        },
        async crosspostMessage(e, t) {
            try {
                return await s.Bo.post({
                    url: v.Rsh.MESSAGE_CROSSPOST(e, t),
                    oldFormErrors: !0,
                    failImmediatelyWhenRateLimited: !0,
                    rejectWithError: (0, s.fT)(),
                });
            } catch (t) {
                let e;
                (e =
                    429 === t.status
                        ? eH.intl.formatToPlainString(eH.t["77cuqz"], {
                              retryAfter: Math.floor(t.body.retry_after / 60),
                          })
                        : eH.intl.string(eH.t.z2gyNF)),
                    ek.A.show({
                        title: eH.intl.string(eH.t.Vd1hs6),
                        body: e,
                        confirmText: eH.intl.string(eH.t.BddRzS),
                    });
            }
        },
        trackInvite: e$,
    },
    eZ = eq;
