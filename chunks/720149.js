"use strict";
n.d(t, { A: () => ez }), n(801541), n(938796);
var i = n(889137),
    r = n(696292),
    s = n(665260),
    a = n(636537),
    o = n(765178),
    l = n(228366),
    _ = n(155718),
    d = n(292446),
    u = n(884384),
    c = n(58149),
    E = n(723176),
    h = n(154049),
    m = n(586660),
    f = n(121401),
    g = n(909338),
    A = n(354287),
    I = n(695870),
    p = n(167189),
    T = n(833291),
    S = n(626584),
    N = n(390248),
    O = n(885918),
    R = n(446458),
    C = n(607399),
    y = n(309010),
    D = n(967198),
    L = n(954571),
    v = n(652215);
function w(e, t) {
    L.default.track(v.HAw.APP_DIRECTORY_PROFILE_EMBED_SENT, {
        application_id: e,
        device_platform: C.Fr ? "mobile_web" : "desktop_web",
        guild_id: D.A.getGuildId(),
        channel_id: y.A.getChannelId(),
        section: t,
    });
}
var P = n(834757),
    b = n(753738),
    k = n(51271),
    U = n(844944),
    M = n(122906),
    G = n(21599),
    x = n(346542),
    V = n(279208),
    F = n(917878),
    B = n(425059),
    H = n(320095);
async function Y(e) {
    let { channelId: t, message: n, items: i, shouldUploadFailureSendNotification: r } = e,
        s = new B.A(),
        a = (0, H.rh)({ ...n, id: s._file.id });
    s.on("start", (e) => {
        l.h.dispatch({ type: "UPLOAD_START", channelId: t, file: e, message: a, uploader: s });
    }),
        s.on("progress", (e) => {
            l.h.dispatch({ type: "UPLOAD_PROGRESS", channelId: t, file: e });
        }),
        s.on("error", (e, n, i, s) => {
            l.h.dispatch({ type: "UPLOAD_FAIL", channelId: t, file: e, messageId: a.id, shouldSendNotification: r });
        }),
        s.on("complete", (e) => {
            s._aborted && l.h.dispatch({ type: "UPLOAD_COMPLETE", channelId: t, file: e, aborted: !0 });
        });
    let o = await s.uploadFiles(i);
    if (!s._aborted) return { attachments: o, uploader: s };
}
let W = (0, n(945810).mj)({
    kind: "user",
    name: "2026-02-dm-error-message",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var K = n(780574),
    j = n(17928),
    $ = n(69114),
    z = n(322683),
    q = n(734057),
    X = n(498642),
    Q = n(544180);
let J = new S.A("MessageRoundtripTrackerStore");
function Z(e) {
    return null != e.apiResponseTimestamp && null != e.gatewaySeenTimestamp;
}
function ee(e) {
    let t = q.A.getBasicChannel(e.channelId);
    if (null == t)
        return void J.warn(`Ignoring a messageData for channel ${e.channelId} because we can't find that channel.`);
    if (Math.random() > 0.1) return;
    let n = null == e.apiResponseTimestamp ? null : e.apiResponseTimestamp - e.initialSendTimestamp,
        i = null == e.gatewaySeenTimestamp ? null : e.gatewaySeenTimestamp - e.initialSendTimestamp,
        r = (0, z.O)();
    L.default.track(v.HAw.SEND_MESSAGE_ROUNDTRIP, {
        ...(0, $.A)(),
        api_latency_ms: n,
        gateway_latency_ms: i,
        channel_id: t.id,
        channel_type: t.type,
        guild_id: t.guild_id,
        guild_size: X.A.getMemberCount(t.guild_id),
        mobile_network_type: Q.A.getType(),
        num_attachments: e.attachmentCount,
        ...(null != r && { mobile_signal_strength_level: r }),
    });
}
class et extends j.Ay.Store {
    initialize() {
        this.waitFor(q.A, X.A, Q.A);
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
            Z(n) ? (ee(n), this.pendingMessages.delete(e)) : this.pendingMessages.set(e, n);
        }
    }
    recordGatewayResponse(e) {
        let t = this.pendingMessages.get(e);
        if (null != t) {
            let n = { ...t, gatewaySeenTimestamp: Date.now() };
            Z(n) ? (ee(n), this.pendingMessages.delete(e)) : this.pendingMessages.set(e, n);
        }
    }
}
let en = new et(l.h, {
        MESSAGE_CREATE: function (e) {
            let { optimistic: t, message: n } = e,
                i = n.nonce;
            t || null == i || en.recordGatewayResponse(i);
        },
    }),
    ei = { init() {}, donateSentMessage(e, t) {}, deleteAllInteractions() {} };
var er = n(963852),
    es = n(195880);
function ea(e) {
    let t = null != e.fileItems ? e.fileItems.map((e) => e.mimeType ?? "unknown") : [],
        n = e.errorMessage ?? void 0,
        i = e.failureCode ?? void 0;
    (0, c.zV)(v.HAw.SEND_MESSAGE_FAILURE, { failure_code: i, error_message: n, attachment_mimetypes: t });
}
var eo = n(491001),
    el = n(512599),
    e_ = n(3137),
    ed = n(969632),
    eu = n(308528);
function ec(e) {
    if (e !== I.E) return null;
    let t = q.A.getChannel(e);
    return null == t ? null : eu.A.ensurePrivateChannel(t.recipients);
}
var eE = n(561844),
    eh = n(710969);
n(853145);
var em = n(9842),
    ef = n(750385),
    eg = n(677413),
    eA = n(867455),
    eI = n(464578),
    ep = n(616356),
    eT = n(495544);
n(580745);
var eS = n(71393),
    eN = n(299091),
    eO = n(232835),
    eR = n(576705),
    eC = n(290863),
    ey = n(222823),
    eD = n(101392),
    eL = n(287809),
    ev = n(927813),
    ew = n(45938),
    eP = n(975571),
    eb = n(927578),
    ek = n(935208),
    eU = n(292348),
    eM = n(157559),
    eG = n(768349),
    ex = n(401755),
    eV = n(381941),
    eF = n(985018);
let eB = new S.A("MessageActionCreators"),
    eH = new S.A("MessageQueue"),
    eY = !1;
class eW {
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
            inviteAnalyticsMetadata: s,
            overrideProperties: a = {},
        } = e,
        o = eT.default.getId(),
        l = eN.A.getInvite(t),
        _ = (0, G.y$)(t),
        d = null != l && (0, x.oK)(l),
        u = l?.target_application?.id;
    null != u && d && (0, A.KL)(u, eG.J.ACTIVITY_INVITE, o);
    let E = q.A.getChannel(n);
    if (null != E) {
        let e = null;
        E.isMultiUserDM() ? (e = v.G2g.GDM_INVITE) : E.isPrivate() || (e = v.G2g.SERVER_INVITE);
        let t = {};
        if (null != l && l.state === v.elq.RESOLVED && null != l.channel) {
            let n = l.channel;
            (t.invite_channel_id = n.id),
                (t.invite_guild_id = l.guild?.id),
                (t.invite_channel_type = n.type),
                null != l.inviter && (t.invite_inviter_id = l.inviter.id),
                null != l.target_application && (t.application_id = l.target_application.id);
            let i = ep.A.getLastActiveStream();
            if (null != i && i.channelId === n.id) {
                (e = v.G2g.STREAM), (t.destination_user_id = i.ownerId);
                let n = (0, P.Ee)(i, eC.A);
                t.application_id = null != n ? n.id : null;
            }
        }
        null != s &&
            (null != s.suggestionData &&
                ((t.is_suggested = s.suggestionData.isAffinitySuggestion),
                (t.row_num = s.suggestionData.rowNum),
                (t.num_total = s.suggestionData.numTotal),
                (t.num_affinity_connections = s.suggestionData.numAffinityConnections),
                (t.is_filtered = s.suggestionData.isFiltered)),
            (t.source = s.source)),
            (t = {
                ...t,
                location: r,
                invite_type: e,
                invite_code: _.baseCode,
                guild_id: E.getGuildId(),
                channel_id: E.id,
                message_id: i,
                send_type: v.gfq.DIRECT_MESSAGE,
                invite_guild_scheduled_event_id: _.guildScheduledEventId,
                invite_instance_id: (0, G._U)(_.baseCode, i) ?? null,
                ...a,
            }),
            c.Ay.trackWithMetadata(v.HAw.INVITE_SENT, t);
    } else {
        let e = {};
        null != l &&
            l.state === v.elq.RESOLVED &&
            null != l.inviter &&
            ((e.invite_inviter_id = l.inviter.id),
            null != l.target_application && (e.application_id = l.target_application.id),
            (e = {
                ...e,
                location: r,
                invite_type: v.G2g.FRIEND_INVITE,
                invite_code: _.baseCode,
                message_id: i,
                send_type: v.gfq.DIRECT_MESSAGE,
                invite_guild_scheduled_event_id: _.guildScheduledEventId,
                invite_instance_id: (0, G._U)(_.baseCode, i) ?? null,
                ...a,
            }),
            c.Ay.trackWithMetadata(v.HAw.INVITE_SENT, e));
    }
}
let ej = {
        [v.t02.SLOWMODE_RATE_LIMITED]: {
            messageName: "SLOWMODE_RATE_LIMITED",
            messageGetter: (e) => eF.intl.formatToPlainString(eF.t.IWntYg, { seconds: e.rateLimitPerUser }),
        },
        [v.t02.INVALID_MESSAGE_SEND_NO_MUTUAL_GUILDS]: {
            messageName: "INVALID_MESSAGE_SEND_NO_MUTUAL_GUILDS",
            messageGetter: () => {
                let e = eP.A.getArticleURL(v.MVz.DM_COULD_NOT_BE_DELIVERED),
                    { enabled: t } = W.getConfig({ location: "sendClydeError" });
                return t
                    ? eF.intl.formatToPlainString(eF.t.llTkqr, { helpUrl: e })
                    : eF.intl.formatToPlainString(eF.t.SkGL7l, { helpUrl: e });
            },
        },
        [v.t02.INVALID_MESSAGE_SEND_USER]: {
            messageName: "INVALID_MESSAGE_SEND_USER",
            messageGetter: () =>
                eF.intl.formatToPlainString(eF.t.SkGL7l, {
                    helpUrl: eP.A.getArticleURL(v.MVz.DM_COULD_NOT_BE_DELIVERED),
                }),
        },
        [v.t02.TOO_MANY_THREADS]: {
            messageName: "TOO_MANY_THREADS",
            messageGetter: (e) =>
                e.isForumLikeChannel() || e.isForumPost()
                    ? eF.intl.string(eF.t["/jUd2+"])
                    : eF.intl.string(eF.t["5EMPA7"]),
        },
        [v.t02.TOO_MANY_ANNOUNCEMENT_THREADS]: {
            messageName: "TOO_MANY_ANNOUNCEMENT_THREADS",
            messageGetter: () => eF.intl.string(eF.t["aY+lLC"]),
        },
        [v.t02.HARMFUL_LINK_MESSAGE_BLOCKED]: {
            messageName: "HARMFUL_LINK_MESSAGE_BLOCKED",
            messageGetter: () => eF.intl.formatToPlainString(eF.t.zSG3Qy, { helpUrl: v.X7G.HARMFUL_LINKS }),
        },
        [v.t02.HARMFUL_URL_BLOCKED]: {
            messageName: "HARMFUL_URL_BLOCKED",
            messageGetter: () => eF.intl.string(eF.t.WxX2Fd),
        },
        [v.t02.EMAIL_VERIFICATION_REQUIRED]: {
            messageName: "BOT_REQUIRES_EMAIL_VERIFICATION",
            messageGetter: () => eF.intl.string(eF.t.k1Cjqr),
        },
        [v.t02.GUILD_MESSAGE_UPDATE_RATE_LIMIT_EXCEEDED]: {
            messageName: "GUILD_MESSAGE_UPDATE_RATE_LIMIT_EXCEEDED",
            messageGetter: () => eF.intl.string(eF.t.Z5SUuv),
        },
        [v.t02.RATE_LIMIT_DM_OPEN]: {
            messageName: "BOT_DM_RATE_LIMITED",
            messageGetter: () => eF.intl.string(eF.t.E8nbNb),
        },
        [v.t02.SEND_MESSAGE_TEMPORARILY_DISABLED]: {
            messageName: "BOT_DM_SEND_MESSAGE_TEMPORARILY_DISABLED",
            messageGetter: () => eF.intl.string(eF.t.aRUbah),
        },
        [v.t02.INVALID_MESSAGE_SEND_GAME_FRIEND_DM]: {
            messageName: "BOT_DM_SEND_MESSAGE_INVALID_FOR_GAME_FRIEND",
            messageGetter: () => eF.intl.string(eF.t["/meGhR"]),
        },
        [v.t02.INVALID_MESSAGE_SEND_PROVISIONAL_ACCOUNT_OFFLINE]: {
            messageName: "BOT_DM_SEND_MESSAGE_INVALID_OFFLINE_PROVISIONAL_ACCOUNT",
            messageGetter: () => eF.intl.string(eF.t.Oc1Zjw),
        },
        [v.t02.TOTAL_ATTACHMENT_SIZE_TOO_LARGE]: {
            messageName: "TOTAL_ATTACHMENT_SIZE_TOO_LARGE",
            messageGetter: () => eF.intl.formatToPlainString(eF.t.DYFPg2, { maxSizeMb: eU.YK }),
        },
        [v.t02.CLOUD_UPLOAD_NOT_FOUND]: {
            messageName: "CLOUD_UPLOAD_NOT_FOUND",
            messageGetter: () => eF.intl.string(eF.t.bQldfH),
        },
        [v.t02.INVALID_PERMISSIONS]: {
            messageName: "INVALID_PERMISSIONS",
            messageGetter: () => eF.intl.string(eF.t.zl4Weq),
        },
    },
    e$ = {
        receiveMessage(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
            l.h.dispatch({
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
                c.Ay.trackWithMetadata(v.HAw.AUTOMATED_MESSAGE_RECEIVED, { message_author: "Clyde", message_name: n }),
                e$.receiveMessage(e, (0, er.pO)({ messageId: i, channelId: e, content: t, loggingName: n }));
        },
        sendNitroSystemMessage(e, t, n) {
            let i = (0, er.Ay)({
                channelId: e,
                nonce: n,
                type: v.lAJ.NITRO_NOTIFICATION,
                content: t,
                flags: v.pr7.EPHEMERAL,
                author: { id: v.oIV, username: "Nitro Notification", discriminator: v.h3J, avatar: "nitro", bot: !0 },
            });
            e$.receiveMessage(e, { ...i, state: v.cmJ.SENT, channel_id: e }, !0);
        },
        sendGiftingPromptSystemMessage(e, t) {
            let n = (0, er.Ay)({
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
            e$.receiveMessage(e, { ...n, state: v.cmJ.SENT }, !0);
        },
        sendGuildBoostUpsellSystemMessage(e, t) {
            let n = (0, er.Ay)({
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
            e$.receiveMessage(e, { ...n, state: v.cmJ.SENT }, !0);
        },
        sendClydeError(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                n = q.A.getChannel(e);
            if (null == n) return;
            let i = ej[t];
            null == i
                ? e$.sendBotMessage(
                      e,
                      eF.intl.formatToPlainString(eF.t.SkGL7l, {
                          helpUrl: eP.A.getArticleURL(v.MVz.DM_COULD_NOT_BE_DELIVERED),
                      }),
                      `SEND_FAILED (${t})`,
                  )
                : e$.sendBotMessage(e, i.messageGetter(n), i.messageName);
        },
        sendExplicitMediaClydeError(e, t, n) {
            let r = q.A.getChannel(e);
            if (null == r) return;
            let { message: s, messageName: a } = (0, i.YW)({ isDM: r.isDM(), isGDM: r.isGroupDM() })
                    .with({ isDM: !0 }, () => ({
                        message: eF.intl.string(eF.t["mktny/"]),
                        messageName: "BOT_DM_EXPLICIT_CONTENT",
                    }))
                    .with({ isDM: !1, isGDM: !0 }, () => ({
                        message: eF.intl.string(eF.t["mktny/"]),
                        messageName: "BOT_GDM_EXPLICIT_CONTENT",
                    }))
                    .otherwise(() => ({
                        message: eF.intl.string(eF.t.i4AbAS),
                        messageName: "BOT_GUILD_EXPLICIT_CONTENT",
                    })),
                o = (0, es.m)();
            e$.sendBotMessage(e, s, a, o),
                (0, N.hv)({
                    action: N.rY.EXPLICIT_MEDIA_FALSE_POSITIVE_CLYDE_MESSAGE_SENT,
                    messageId: o,
                    channelId: e,
                    context: n,
                }),
                null != t &&
                    t.length > 0 &&
                    l.h.dispatch({
                        type: "MESSAGE_EXPLICIT_CONTENT_FP_CREATE",
                        messageId: o,
                        channelId: e,
                        attachments: t,
                    });
        },
        truncateMessages(e, t, n) {
            l.h.dispatch({ type: "TRUNCATE_MESSAGES", channelId: e, truncateBottom: t, truncateTop: n });
        },
        clearChannel(e) {
            l.h.dispatch({ type: "CLEAR_MESSAGES", channelId: e });
        },
        jumpToPresent(e, t) {
            e$.trackJump(e, null, "Present");
            let n = { present: !0 };
            eO.A.hasPresent(e)
                ? l.h.dispatch({ type: "LOAD_MESSAGES_SUCCESS_CACHED", jump: n, channelId: e, limit: t })
                : e$.fetchMessages({ channelId: e, limit: t, jump: n });
        },
        trackJump(e, t, n, i) {
            c.Ay.trackWithMetadata(v.HAw.JUMP, { context: n, channel_id: e, message_id: t, ...i });
        },
        jumpToMessage(e) {
            let {
                channelId: t,
                messageId: n,
                flash: i = !1,
                offset: r,
                context: s,
                extraProperties: a = null,
                isPreload: o,
                returnMessageId: l,
                skipLocalFetch: _,
                jumpType: d,
                avoidInitialScroll: u,
            } = e;
            return (
                "string" == typeof s && e$.trackJump(t, n, s, a),
                e$.fetchMessages({
                    channelId: t,
                    limit: v.d7Q,
                    jump: { messageId: n, flash: i, offset: r, returnMessageId: l, jumpType: d },
                    isPreload: o,
                    skipLocalFetch: _,
                    avoidInitialScroll: u,
                })
            );
        },
        focusMessage(e) {
            let { channelId: t, messageId: n } = e;
            e$.fetchMessages({ channelId: t, limit: v.d7Q, focus: { messageId: n } });
        },
        async fetchMessage(e) {
            let { channelId: t, messageId: n } = e,
                i = await a.Bo.get({
                    url: v.Rsh.MESSAGES(t),
                    query: { limit: 1, around: n },
                    retries: 2,
                    oldFormErrors: !0,
                    rejectWithError: !1,
                });
            if (i.body.length > 0) return (0, H.rh)(i.body[0]);
        },
        fetchMessages(e) {
            let {
                    channelId: t,
                    before: n,
                    after: i,
                    limit: r,
                    jump: s,
                    focus: o,
                    isPreload: _,
                    skipLocalFetch: u,
                    truncate: c,
                    forICYMI: E,
                    avoidInitialScroll: h,
                    feature: m,
                    fetchKey: f,
                } = e,
                g = q.A.getChannel(t),
                A = R.A.isConnectedOrOverlay(),
                p = Date.now();
            if (null != g && g.type === v.rbe.GUILD_STORE) return !1;
            if (
                t === I.E ||
                (eB.log(`Fetching messages for ${t} between ${i} and ${n}. jump=${JSON.stringify(s)}`),
                e$._tryFetchMessagesCached({
                    channelId: t,
                    before: n,
                    after: i,
                    limit: r,
                    jump: s,
                    focus: o,
                    truncate: c,
                }))
            )
                return;
            eI.A.fetchMessages.recordStart(), F.A.recordChannelFetchStart(t, f ?? p, n, i, r);
            let T = s ?? void 0;
            null == T && null != o && (T = { ...o });
            let S = d.A.getOrCreate(t).loadStart(T);
            d.A.commit(S), l.h.dispatch({ type: "LOAD_MESSAGES" });
            let N = T?.messageId,
                O = new eW();
            return (
                u || this.fetchLocalMessages(t, f ?? p, n, i, r, O),
                a.Bo.get({
                    url: v.Rsh.MESSAGES(t),
                    query: { before: n, after: i, limit: r, around: N, preload: _, feature: m },
                    retries: 2,
                    oldFormErrors: !0,
                    rejectWithError: !1,
                }).then(
                    (e) => (
                        eI.A.fetchMessages.recordEnd(),
                        eI.A.dispatchMessages.measure(() => {
                            let a = e.body,
                                o = null != n,
                                _ = null != i,
                                d = null == n && null == i,
                                u = null != N || (a.length === r && (o || d)),
                                m = null != N || (_ && a.length === r);
                            if (null != N) {
                                let e = Math.floor(r / 2),
                                    n = e + (r % 2),
                                    i = [
                                        N,
                                        ...a.map((e) => {
                                            let { id: t } = e;
                                            return t;
                                        }),
                                    ]
                                        .filter((e, t, n) => n.indexOf(e) === t)
                                        .sort(ek.default.compare)
                                        .indexOf(N);
                                if ((i < n - 1 && (u = !1), a.length - i < e && (m = !1), m && a.length > 0)) {
                                    let e = ey.Ay.lastMessageId(t);
                                    a[0].id === e && (m = !1);
                                }
                            }
                            eB.log(`Fetched ${a.length} messages for ${t} isBefore:${o} isAfter:${_}`),
                                O.markComplete(),
                                l.h.dispatch({
                                    type: "LOAD_MESSAGES_SUCCESS",
                                    channelId: t,
                                    messages: a,
                                    isBefore: o,
                                    isAfter: _,
                                    hasMoreBefore: u,
                                    hasMoreAfter: m,
                                    limit: r,
                                    jump: s,
                                    forICYMI: E,
                                    isStale: !A || R.A.lastTimeConnectedChanged() >= p,
                                    truncate: c,
                                    avoidInitialScroll: h,
                                }),
                                F.A.recordChannelFetchedNetwork(t, f ?? p, n, i, r, a);
                        }),
                        !0
                    ),
                    () => (
                        eB.log(`Failed to fetch messages for ${t}`),
                        l.h.dispatch({ type: "LOAD_MESSAGES_FAILURE", channelId: t }),
                        !1
                    ),
                )
            );
        },
        async fetchLocalMessages(e, t, n, i, r, s) {
            let a = q.A.getBasicChannel(e),
                o = d.A.getOrCreate(e),
                _ = E.A.database();
            if (null == _ || null == a || null != n || null != i) return void eI.A.addLocalMessages(e, -1);
            if (o.ready && !o.cached) return void eI.A.addLocalMessages(e, -2);
            let u = await (0, h.kk)(() => m.Ay.load(_, e, r));
            if (null == u) return void eI.A.addLocalMessages(e, -3);
            if (
                (eB.log(
                    `fetched ${u.messages.length} messages from local database (channel_id: ${e}, remote_fetch_completed: ${s.completed})`,
                ),
                eI.A.addLocalMessages(e, u.messages.length),
                !s.completed && u.messages.length > 0)
            ) {
                let s = u.messages.length >= r && u.connectionId === R.A.lastTimeConnectedChanged();
                F.A.recordChannelFetchedLocal(e, t, n, i, r, u.messages),
                    l.h.dispatch({
                        type: "LOCAL_MESSAGES_LOADED",
                        guildId: a.guild_id,
                        channelId: e,
                        users: u.users,
                        members: u.members,
                        messages: u.messages,
                        stale: !s,
                    });
            }
        },
        async fetchNewLocalMessages(e, t) {
            let n = q.A.getBasicChannel(e),
                i = E.A.database();
            if (null == i || null == n) return;
            let r = d.A.getOrCreate(e);
            if (r.hasMoreAfter) return;
            let s = await (0, h.kk)(() => m.Ay.load(i, e, t));
            if (null == s) return;
            r = d.A.getOrCreate(e);
            let a = r.last()?.id,
                o = null == a ? s.messages : s.messages.filter((e) => ek.default.compare(e.id, a) > 0);
            eB.log(`Fetched ${s.messages.length} messages from the cache after foregrounding. ${o.length} are new`),
                0 !== o.length &&
                    l.h.dispatch({
                        type: "LOCAL_MESSAGES_LOADED",
                        guildId: n.guild_id,
                        channelId: e,
                        users: s.users,
                        members: s.members,
                        messages: o,
                        stale: !0,
                        isForegroundCacheLoad: (0, eo.K)(),
                    });
        },
        _tryFetchMessagesCached(e) {
            let { channelId: t, before: n, after: i, limit: r, jump: s, focus: a, truncate: o } = e,
                _ = eO.A.getMessages(t);
            if (_.cached || !_.ready) return !1;
            if (s?.messageId != null || a?.messageId != null) {
                if (s?.messageId != null && _.has(s.messageId, !1))
                    return (
                        l.h.dispatch({
                            type: "LOAD_MESSAGES_SUCCESS_CACHED",
                            channelId: t,
                            jump: s,
                            limit: r,
                            truncate: o,
                        }),
                        !0
                    );
                if (a?.messageId != null)
                    if (_.has(a.messageId, !1))
                        return (
                            l.h.dispatch({
                                type: "LOAD_MESSAGES_SUCCESS_CACHED",
                                channelId: t,
                                focus: a,
                                limit: r,
                                truncate: o,
                            }),
                            !0
                        );
                    else s = { ...a };
                let e = s?.messageId != null ? ek.default.extractTimestamp(s?.messageId) : 0,
                    n = _.first(),
                    i = _.last();
                if (
                    (!_.hasMoreBefore && null != n && ek.default.extractTimestamp(n.id) >= e) ||
                    (!_.hasMoreAfter && null != i && ek.default.extractTimestamp(i.id) <= e) ||
                    (null != n &&
                        null != i &&
                        ek.default.extractTimestamp(n.id) < e &&
                        ek.default.extractTimestamp(i.id) > e)
                )
                    return (
                        l.h.dispatch({ type: "LOAD_MESSAGES_SUCCESS_CACHED", channelId: t, jump: s, limit: v.d7Q }), !0
                    );
            } else if (null != n && _.hasBeforeCached(n))
                return (
                    l.h.dispatch({
                        type: "LOAD_MESSAGES_SUCCESS_CACHED",
                        channelId: t,
                        before: n,
                        limit: r,
                        truncate: o,
                    }),
                    !0
                );
            else if (null != i && _.hasAfterCached(i))
                return (
                    l.h.dispatch({
                        type: "LOAD_MESSAGES_SUCCESS_CACHED",
                        channelId: t,
                        after: i,
                        limit: r,
                        truncate: o,
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
            if (null != r) return e$.sendMessage(r, t, n, i);
            let s = i.nonce ?? (0, es.m)();
            return (
                (i = { ...i, nonce: s }),
                (en.recordMessageSendAttempt(e, s, i), eO.A.isReady(e))
                    ? e$._sendMessage(e, t, i)
                    : n && e !== I.E
                      ? (eH.info(`Waiting for channel ${e} to be ready before sending.`),
                        new Promise((n, r) => {
                            eO.A.whenReady(e, () => {
                                eH.info(`Channel ${e} is ready for sending now.`), e$._sendMessage(e, t, i).then(n, r);
                            });
                        }))
                      : e$._sendMessage(e, t, i)
            );
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
            let t = e$.getSendMessageOptionsForReply(e.pendingReply),
                n = e$.getSendMessageOptionsForStickers({ ...e }),
                i = e$.getSendMessageOptionsForScheduledMessage({ ...e }),
                r = e$.getSendMessageOptionsForAlsoForwardToChannel({ ...e });
            return { ...t, ...n, ...i, ...r };
        },
        sendInvite(e, t, n, i, r) {
            let s = (0, V.A)(t);
            return (
                null != r &&
                    (s = `${r}
${s}`),
                e$._sendMessage(
                    e,
                    { content: s, tts: !1, validNonShortcutEmojis: [], invalidEmojis: [] },
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
                r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            return e$._sendMessage(
                e,
                { content: n, invalidEmojis: [], validNonShortcutEmojis: [], tts: r },
                { ...i, stickerIds: t },
            );
        },
        sendGreetMessage(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                { messageReference: i, allowedMentions: r } = n;
            return a.Bo.post({
                url: v.Rsh.MESSAGES_GREET(e),
                body: { sticker_ids: [t], allowed_mentions: r, message_reference: i },
                oldFormErrors: !0,
                rejectWithError: !1,
                context: { location: eV.Hx.GREET },
            }).then(
                (n) => (
                    ei.donateSentMessage(n.body.content, e),
                    e$.receiveMessage(e, n.body),
                    l.h.dispatch({ type: "STICKER_TRACK_USAGE", stickerIds: [t] }),
                    n
                ),
                (t) => {
                    throw (
                        (eB.log("Failed to send greeting"),
                        429 !== t.status && e$.sendClydeError(e, t.body.code),
                        l.h.dispatch({ type: "MESSAGE_SEND_FAILED", messageId: t.body.id, channelId: e }),
                        t)
                    );
                },
            );
        },
        sendPollMessage(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            return e$._sendMessage(
                e,
                { content: "", tts: !1, validNonShortcutEmojis: [], invalidEmojis: [] },
                { ...n, poll: t, location: eV.Hx.POLL_CREATION },
            );
        },
        validateMessage(e, t, n) {
            let i, r;
            return (
                e.some((e) => e.animated) && !eb.Ay.canUseAnimatedEmojis(t)
                    ? ((i = eF.intl.string(eF.t.msFJy8)), (r = "INVALID_ANIMATED_EMOJI_BODY"))
                    : eR.A.canWithPartialContext(v.xBc.USE_EXTERNAL_EMOJIS, { channelId: n })
                      ? ((i = eF.intl.string(eF.t.FzugNl)), (r = "INVALID_EXTERNAL_EMOJI_BODY_UPGRADE"))
                      : ((i = eF.intl.string(eF.t["Q87rI/"])), (r = "INVALID_EXTERNAL_EMOJI_BODY")),
                { errorMessage: i, errorMessageName: r }
            );
        },
        async _sendMessage(e, t, n) {
            let i,
                a = ec(e);
            if (null != a)
                return (
                    eH.info("Converting channel to a private channel"),
                    a.then((e) => {
                        eH.info("Finished converting channel to a private channel"), e$._sendMessage(e, t, n);
                    })
                );
            let o = t.content,
                { invalidEmojis: _, validNonShortcutEmojis: d, tts: E = !1 } = t,
                {
                    activityAction: h,
                    location: m,
                    inviteAnalyticsMetadata: I,
                    stickerIds: S,
                    messageReference: R,
                    allowedMentions: C,
                    poll: y,
                    sharedCustomTheme: D,
                    contentInventoryEntry: P,
                    attachments: G,
                    attachmentsToUpload: x,
                    onAttachmentUploadError: V,
                    announcementSendOptions: F,
                    withCheckpoint: B,
                } = n,
                W = n.flags ?? 0,
                [j, $] = (0, eg.A)(o);
            j && ((o = $), (W = (0, s.UI)(W, v.pr7.SUPPRESS_NOTIFICATIONS)));
            let z = q.A.getChannel(e),
                X = eS.A.getGuild(z?.guild_id);
            (0, K.Qz)(X, z, "_sendMessage") && (W = (0, s.UI)(W, v.pr7.IS_GUILD_OFFICIAL));
            let Q = !1,
                J = n.messageReference?.type === v.SH7.FORWARD;
            if (
                "" === o &&
                null == h &&
                null == S &&
                null == y &&
                null == D &&
                null == P &&
                !J &&
                (null == G || 0 === G.length) &&
                !B &&
                (null == t.components || 0 === t.components.length)
            )
                if (null == x || !(x.length > 0)) return Promise.resolve();
                else Q = !0;
            let Z = null != R ? v.lAJ.REPLY : v.lAJ.DEFAULT,
                ee = n.nonce ?? (0, es.m)(),
                et = (0, er.Ay)({
                    channelId: e,
                    content: o,
                    tts: E,
                    type: Z,
                    messageReference: R,
                    allowedMentions: C,
                    flags: 0 !== W ? W : void 0,
                    nonce: ee,
                    poll: (0, ed.G8)(y),
                    sharedCustomTheme: D,
                });
            if (
                (!1 !== n.eagerDispatch &&
                    ((0, el.iq)(e, et.id),
                    null != S && (et.sticker_items = S.map((e) => ef.A.getStickerById(e)).filter((e) => null != e)),
                    e$.receiveMessage(e, et, !0, n)),
                !eY && null != _ && _.length > 0)
            ) {
                eY = !0;
                let t = eL.default.getCurrentUser(),
                    { errorMessage: n, errorMessageName: i } = e$.validateMessage(_, t, e);
                e$.sendBotMessage(e, n, i);
            }
            let eo = {
                type: null != F ? u.AZ.SEND_ANNOUNCEMENT : u.AZ.SEND,
                message: {
                    channelId: e,
                    content: o,
                    nonce: ee,
                    tts: E,
                    message_reference: R,
                    allowed_mentions: C,
                    flags: W,
                    analyticsLocation: m,
                },
            };
            if (
                (null != t.components && (eo.message.components = t.components),
                null != F &&
                    ((eo.message.create_thread = F.createThread),
                    (eo.message.title = F.threadName),
                    (eo.message.publish = F.publish ?? !1)),
                null != h)
            ) {
                let e,
                    t = h?.activity.session_id;
                if (
                    null !=
                    (e =
                        h.type === v.xL.JOIN_REQUEST || h.type === v.xL.STREAM_REQUEST || null != t
                            ? t
                            : eT.default.getSessionId())
                ) {
                    let t = { type: h.type, session_id: e, target_user_id: h.targetUserId },
                        { activity: n } = h;
                    null != n.party && null != n.party.id && (t.party_id = n.party.id),
                        (eo.message.application_id = n.application_id),
                        (eo.message.activity = t);
                }
            }
            if (
                (null != y && (eo.message.poll = y),
                null != D && (eo.message.shared_client_theme = D),
                null != S && (eo.message.sticker_ids = S),
                e_.A.isEnabled() && (eo.message.has_poggermode_enabled = !0),
                B && (eo.message.with_checkpoint = !0),
                null != P && (eo.message.content_inventory_entry = P),
                null != G && G.length > 0 && (eo.message.attachments = G),
                null != x && x.length > 0)
            )
                try {
                    let t = await Y({
                        channelId: e,
                        nonce: ee,
                        items: x,
                        message: et,
                        shouldUploadFailureSendNotification: !n.doNotNotifyOnError && void 0,
                    });
                    if (null == t) return;
                    let r = t.attachments;
                    if (((i = t.uploader), Q && (null == r || 0 === r.length))) return;
                    null != r && (eo.message.attachments = r.map((e, t) => (0, eU.OW)(e, t)));
                } catch (r) {
                    let { file: e, code: t, reason: n, responseBody: i } = r;
                    ea({ fileItems: e.items, failureCode: t, errorMessage: n?.msg }), V?.(e, t, n, i);
                    return;
                }
            return new Promise((t, s) => {
                let a = Date.now(),
                    _ = u.Ay.length,
                    E = Math.floor(1e4 * Math.random());
                eH.info(`Queueing message to be sent LogId:${E}`),
                    u.Ay.enqueue(
                        eo,
                        (h) => {
                            let R = Date.now() - a;
                            if (h.ok) {
                                var C, D, G, x, V, F, B;
                                let s;
                                ei.donateSentMessage(o, e),
                                    e$.receiveMessage(e, h.body, !0, {
                                        sendAnalytics: { duration: R, queueSize: _ },
                                        poll: y,
                                    }),
                                    null != n.alsoForwardToChannelId &&
                                        O.A.sendForward((0, H.rh)(h.body), n.alsoForwardToChannelId)
                                            .then(() => {
                                                !(function (e) {
                                                    let {
                                                        referencedMessageId: t,
                                                        guildId: n,
                                                        channelId: i,
                                                        destinationChannelId: r,
                                                    } = e;
                                                    L.default.track(v.HAw.MESSAGE_ALSO_SEND_TO_CHANNEL_SENT, {
                                                        referenced_message_id: t,
                                                        guild_id: n,
                                                        channel_id: i,
                                                        destination_channel_id: r,
                                                    });
                                                })({
                                                    referencedMessageId: h.body?.id,
                                                    guildId: h.body?.guild_id,
                                                    channelId: h.body?.channel_id,
                                                    destinationChannelId: n.alsoForwardToChannelId,
                                                });
                                            })
                                            .catch((t) => {
                                                eB.log(
                                                    `Failed to forward thread message to parent channel LogId:${E}`,
                                                    {
                                                        referencedMessageId: h.body?.id,
                                                        channelId: e,
                                                        destinationChannelId: n.alsoForwardToChannelId,
                                                        error: t.toString(),
                                                    },
                                                );
                                            });
                                let a = ek.default.cast(e),
                                    u = U.A.getRequest(a);
                                if (null != u) {
                                    let { guildId: t, userId: n, applicationStatus: i } = u;
                                    (0, k.cK)({
                                        guildId: t,
                                        channelId: e,
                                        messageId: h.body.id,
                                        joinRequestStatus: i,
                                        joinRequestUserId: n,
                                    });
                                }
                                en.recordMessageSendApiResponse(ee),
                                    l.h.dispatch({
                                        type: "SLOWMODE_RESET_COOLDOWN",
                                        slowmodeType: eD.R.SendMessage,
                                        channelId: e,
                                    }),
                                    l.h.dispatch({ type: "EMOJI_TRACK_USAGE", emojiUsed: d }),
                                    l.h.dispatch({ type: "STICKER_TRACK_USAGE", stickerIds: S }),
                                    l.h.dispatch({
                                        type: "LOCAL_MESSAGE_CREATE",
                                        message: { channel_id: e, author: eL.default.getCurrentUser() },
                                    }),
                                    (function (e) {
                                        let {
                                                content: t,
                                                channelId: n,
                                                messageId: i,
                                                location: s,
                                                inviteAnalyticsMetadata: a,
                                                overrideProperties: o = {},
                                            } = e,
                                            l = eT.default.getId();
                                        (0, T.Ay)(t).forEach((e) => {
                                            let { type: t, code: _, url: d } = e;
                                            if (t === p.I.INVITE)
                                                eK({
                                                    inviteKey: _,
                                                    channelId: n,
                                                    messageId: i,
                                                    location: s,
                                                    inviteAnalyticsMetadata: a,
                                                    overrideProperties: o,
                                                });
                                            else if (t === p.I.TEMPLATE) {
                                                let e = M.A.getGuildTemplate(_);
                                                if (null == e || e.state === ex.QB.RESOLVING) return;
                                                c.Ay.trackWithMetadata(v.HAw.GUILD_TEMPLATE_LINK_SENT, {
                                                    guild_template_code: _,
                                                    guild_template_name: e.name,
                                                    guild_template_description: e.description,
                                                    guild_template_guild_id: e.sourceGuildId,
                                                });
                                            } else if (t === p.I.BUILD_OVERRIDE);
                                            else if (t === p.I.EXPERIMENT);
                                            else if (t === p.I.MANUAL_BUILD_OVERRIDE);
                                            else if (t === p.I.EVENT);
                                            else if (t === p.I.CHANNEL_LINK);
                                            else if (t === p.I.APP_DIRECTORY_PROFILE)
                                                w(_), (0, A.KL)(_, eG.J.APP_DISCOVERY, l);
                                            else if (t === p.I.APP_DIRECTORY_STOREFRONT) w(_, "storefront");
                                            else if (t === p.I.APP_DIRECTORY_STOREFRONT_SKU) {
                                                let e = (0, f.u)(_);
                                                null != e && w(e.applicationId, "storefront_sku");
                                            } else if (t === p.I.ACTIVITY_BOOKMARK) {
                                                let e = (0, g.N)(d);
                                                (0, A.KL)(_, eG.J.ACTIVITY, e.referrerId ?? l, e.customId);
                                            } else if (t === p.I.EMBEDDED_ACTIVITY_INVITE)
                                                (0, A.KL)(_, eG.J.ACTIVITY_INVITE, l);
                                            else if (t === p.I.GUILD_PRODUCT);
                                            else if (t === p.I.SERVER_SHOP);
                                            else if (t === p.I.SOCIAL_LAYER_STOREFRONT);
                                            else if (t === p.I.QUESTS_EMBED) {
                                                let e = (0, eh.L4)(r.u.QUESTS_EMBED);
                                                (0, eE.av)({
                                                    questId: _,
                                                    event: v.HAw.QUEST_LINK_SHARED,
                                                    properties: { metadata_sealed: null != e ? e : null },
                                                    trackGuildAndChannelMetadata: !0,
                                                    sourceQuestContent: r.u.QUESTS_EMBED,
                                                });
                                            } else if (t === p.I.APP_OAUTH2_LINK)
                                                c.Ay.trackWithMetadata(v.HAw.APP_OAUTH2_LINK_EMBED_URL_SENT, {
                                                    application_id: _,
                                                }),
                                                    (0, A.KL)(_, eG.J.OAUTH, l);
                                            else if (t === p.I.COLLECTIBLES_SHOP);
                                            else throw Error(`Unknown coded link type: ${t}`);
                                        });
                                    })({
                                        content: o,
                                        channelId: e,
                                        messageId: h.body.id,
                                        location: m ?? "chat_input",
                                        inviteAnalyticsMetadata: I,
                                    }),
                                    (C = o),
                                    (D = h.body.id),
                                    (G = m ?? "chat_input"),
                                    (x = !!n.isGiftLinkSentOnBehalfOfUser),
                                    (0, ew.e7)(C).forEach((t) => {
                                        let n = q.A.getChannel(e);
                                        null != n &&
                                            c.Ay.trackWithMetadata(v.HAw.GIFT_CODE_SENT, {
                                                location: G,
                                                gift_code: t,
                                                guild_id: n.getGuildId(),
                                                channel_id: n.id,
                                                channel_type: n.type,
                                                message_id: D,
                                                automatic_send: x,
                                            });
                                    }),
                                    null != n.gifMetadata &&
                                        ((V = n.gifMetadata),
                                        (F = h.body.id),
                                        (B = m ?? "chat_input"),
                                        null != (s = q.A.getChannel(e)) &&
                                            L.default.track(v.HAw.MESSAGE_SENT_WITH_GIF, {
                                                location: B,
                                                message_id: F,
                                                gif_provider: V.gif_provider,
                                                load_id: V.load_id,
                                                source_object: V.source_object,
                                                gif_url: V.gif_url,
                                                gif_id: V.gif_id,
                                                ...(0, c.H$)(s.getGuildId()),
                                                ...(0, c.dI)(s),
                                            })),
                                    null != i &&
                                        l.h.dispatch({
                                            type: "UPLOAD_COMPLETE",
                                            channelId: e,
                                            file: i._file,
                                            aborted: !1,
                                        }),
                                    t(h);
                            } else {
                                let t;
                                eB.log("Failed to send message", {
                                    hasErr: h.hasErr,
                                    status: h.status,
                                    code: h.body?.code,
                                    error: h.err,
                                });
                                let r = !1;
                                if (h.hasErr) "ABORTED" === h.err.code && (r = !0);
                                else if (h.status >= 400 && h.status < 500 && h.body)
                                    if (h.body.code === v.t02.SLOWMODE_RATE_LIMITED) {
                                        let t = h.body.retry_after;
                                        null != t &&
                                            t > 0 &&
                                            l.h.dispatch({
                                                type: "SLOWMODE_SET_COOLDOWN",
                                                channelId: e,
                                                slowmodeType: eD.R.SendMessage,
                                                cooldownMs: t * ev.A.Millis.SECOND,
                                            });
                                    } else
                                        b.yf.has(h.body.code)
                                            ? l.h.dispatch({
                                                  type: "MESSAGE_SEND_FAILED_AUTOMOD",
                                                  messageData: eo,
                                                  errorResponseBody: { code: h.body.code, message: h.body.message },
                                              })
                                            : h.body.code === v.t02.POGGERMODE_TEMPORARILY_DISABLED
                                              ? l.h.dispatch({ type: "POGGERMODE_TEMPORARILY_DISABLED" })
                                              : h.body.code === v.t02.EXPLICIT_CONTENT
                                                ? (t = eV.ty.EXPLICIT_CONTENT)
                                                : null != y || J || null != P || e$.sendClydeError(e, h.body.code);
                                r
                                    ? e$.deleteMessage(e, ee, !0)
                                    : (null != i &&
                                          l.h.dispatch({
                                              type: "UPLOAD_FAIL",
                                              channelId: e,
                                              file: i._file,
                                              messageId: ee,
                                              reason: t,
                                              noSendFailed: !0,
                                          }),
                                      h.hasErr ||
                                          t !== eV.ty.EXPLICIT_CONTENT ||
                                          e$.sendExplicitMediaClydeError(
                                              e,
                                              h.body?.attachments,
                                              N.SW.EXPLICIT_MEDIA_MESSAGE_SEND_BLOCKED,
                                          ),
                                      l.h.dispatch({
                                          type: "MESSAGE_SEND_FAILED",
                                          messageId: ee,
                                          channelId: e,
                                          shouldNotify: !n.doNotNotifyOnError,
                                          reason: t,
                                      }),
                                      ea({
                                          failureCode: h.hasErr ? void 0 : h.status,
                                          errorMessage: h.hasErr ? h.err.message : void 0,
                                      }),
                                      u.Ay.cancelPendingSendRequests(e).forEach((e) => {
                                          eB.log("Cancelling pending message", e.nonce),
                                              l.h.dispatch({
                                                  type: "MESSAGE_SEND_FAILED",
                                                  messageId: e.nonce,
                                                  channelId: e.channelId,
                                              });
                                      })),
                                    s(h);
                            }
                        },
                        E,
                    );
            });
        },
        startEditMessage(e, t, n, i) {
            l.h.dispatch({ type: "MESSAGE_START_EDIT", channelId: e, messageId: t, content: n, source: i });
        },
        startEditMessageRecord(e, t, n) {
            if ((0, s.Lt)(t.flags, v.pr7.IS_COMPONENTS_V2)) {
                let i = t.components.filter((e) => e.type === _.I5.TEXT_DISPLAY);
                if (i.length > 0) {
                    let r = i.map((e) => e.content).join("\n");
                    l.h.dispatch({ type: "MESSAGE_START_EDIT", channelId: e, messageId: t.id, content: r, source: n });
                    return;
                }
            }
            l.h.dispatch({ type: "MESSAGE_START_EDIT", channelId: e, messageId: t.id, content: t.content, source: n });
        },
        updateEditMessage(e, t, n) {
            l.h.dispatch({ type: "MESSAGE_UPDATE_EDIT", channelId: e, textValue: t, richValue: n });
        },
        endEditMessage(e, t) {
            l.h.dispatch({ type: "MESSAGE_END_EDIT", channelId: e, response: t });
        },
        async editMessage(e, t, n) {
            let i,
                { content: r, components: s } = n;
            await eA.A.unarchiveThreadIfNecessary(e);
            let a = (function (e, t) {
                    let n = eO.A.getMessage(e, t);
                    if (null == n || n.type !== v.lAJ.REPLY) return;
                    let i = em.A.getMessageByReference(n.messageReference);
                    if (i.state === em.a.LOADED && !n.mentions.includes(i.message.author.id))
                        return { parse: Object.values(v.uw8), replied_user: !1 };
                })(e, t),
                _ = null != (i = eO.A.getMessage(e, t)) && i.hasFlag(v.pr7.CROSSPOSTED),
                d = { channelId: e, messageId: t, content: r, isCrossposted: _, allowed_mentions: a, components: s };
            u.Ay.enqueue({ type: u.AZ.EDIT, message: d }, (n) => {
                let i = !n.hasErr && b.yf.has(n.body.code);
                if (i) {
                    let e = { type: u.AZ.EDIT, message: d };
                    l.h.dispatch({
                        type: "MESSAGE_EDIT_FAILED_AUTOMOD",
                        messageData: e,
                        errorResponseBody: { code: n.body.code, message: n.body.message },
                    });
                }
                n.hasErr
                    ? o.O.announce(eF.intl.string(eF.t.Atp7FP))
                    : i
                      ? o.O.announce(eF.intl.string(eF.t.Hym4ix))
                      : o.O.announce(eF.intl.string(eF.t["0x1HBD"])),
                    e$.endEditMessage(e, n.hasErr ? void 0 : n),
                    e$.focusMessage({ channelId: e, messageId: t });
            });
        },
        async suppressEmbeds(e, t) {
            await eA.A.unarchiveThreadIfNecessary(e);
            let n = eO.A.getMessage(e, t);
            null != n &&
                a.Bo.patch({
                    url: v.Rsh.MESSAGE(e, t),
                    body: { flags: (0, s.lA)(n.flags, v.pr7.SUPPRESS_EMBEDS, !0) },
                    oldFormErrors: !0,
                    rejectWithError: !1,
                });
        },
        async patchMessageGuildOfficial(e, t, n) {
            await eA.A.unarchiveThreadIfNecessary(e);
            let i = eO.A.getMessage(e, t);
            null != i &&
                a.Bo.patch({
                    url: v.Rsh.MESSAGE(e, t),
                    body: { flags: (0, s.lA)(i.flags, v.pr7.IS_GUILD_OFFICIAL, n) },
                    oldFormErrors: !0,
                    rejectWithError: !1,
                });
        },
        async patchMessageAttachments(e, t, n) {
            await eA.A.unarchiveThreadIfNecessary(e),
                a.Bo.patch({
                    url: v.Rsh.MESSAGE(e, t),
                    body: { attachments: n },
                    oldFormErrors: !0,
                    rejectWithError: !1,
                });
        },
        async deleteMessage(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                i = () => {
                    l.h.dispatch({ type: "MESSAGE_DELETE", id: t, channelId: e }).then(() => {
                        o.O.announce(eF.intl.string(eF.t.RYMs7s));
                    });
                };
            n
                ? i()
                : (await eA.A.unarchiveThreadIfNecessary(e),
                  a.Bo.del({ url: v.Rsh.MESSAGE(e, t), oldFormErrors: !0, rejectWithError: !1 }).then(() => {
                      i();
                  }));
        },
        dismissAutomatedMessage(e) {
            null != e.loggingName &&
                c.Ay.trackWithMetadata(v.HAw.AUTOMATED_MESSAGE_DISMISSED, {
                    message_name: e.loggingName,
                    message_author: e.author.username,
                }),
                this.deleteMessage(e.channel_id, e.id, !0);
        },
        revealMessage(e, t) {
            l.h.dispatch({ type: "MESSAGE_REVEAL", channelId: e, messageId: t });
        },
        async crosspostMessage(e, t) {
            try {
                return await a.Bo.post({
                    url: v.Rsh.MESSAGE_CROSSPOST(e, t),
                    oldFormErrors: !0,
                    failImmediatelyWhenRateLimited: !0,
                    rejectWithError: !1,
                });
            } catch (t) {
                let e;
                (e =
                    429 === t.status
                        ? eF.intl.formatToPlainString(eF.t["77cuqz"], {
                              retryAfter: Math.floor(t.body.retry_after / 60),
                          })
                        : eF.intl.string(eF.t.z2gyNF)),
                    eM.A.show({
                        title: eF.intl.string(eF.t.Vd1hs6),
                        body: e,
                        confirmText: eF.intl.string(eF.t.BddRzS),
                    });
            }
        },
        trackInvite: eK,
    },
    ez = e$;
