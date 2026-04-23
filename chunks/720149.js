"use strict";
n.d(t, { A: () => e$ }), n(801541), n(938796);
var i = n(889137),
    r = n(696292),
    s = n(665260),
    a = n(636537),
    o = n(765178),
    l = n(228366),
    d = n(155718),
    _ = n(292446),
    u = n(884384),
    c = n(58149),
    E = n(723176),
    h = n(154049),
    m = n(586660),
    f = n(121401),
    g = n(909338),
    p = n(354287),
    A = n(695870),
    I = n(167189),
    T = n(833291),
    S = n(626584),
    N = n(390248),
    C = n(885918),
    R = n(366853),
    O = n(607399),
    y = n(309010),
    v = n(967198),
    D = n(954571),
    L = n(652215);
function b(e, t) {
    D.default.track(L.HAw.APP_DIRECTORY_PROFILE_EMBED_SENT, {
        application_id: e,
        device_platform: O.Fr ? "mobile_web" : "desktop_web",
        guild_id: v.A.getGuildId(),
        channel_id: y.A.getChannelId(),
        section: t,
    });
}
var w = n(834757),
    P = n(753738),
    k = n(51271),
    M = n(844944),
    U = n(122906),
    x = n(21599),
    G = n(346542),
    V = n(279208),
    F = n(917878),
    B = n(425059),
    H = n(320095);
async function j(e) {
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
var Y = n(780574),
    K = n(17928),
    z = n(69114),
    $ = n(322683),
    q = n(734057),
    X = n(498642),
    Z = n(544180);
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
        r = (0, $.O)();
    D.default.track(L.HAw.SEND_MESSAGE_ROUNDTRIP, {
        ...(0, z.A)(),
        api_latency_ms: n,
        gateway_latency_ms: i,
        channel_id: t.id,
        channel_type: t.type,
        guild_id: t.guild_id,
        guild_size: X.A.getMemberCount(t.guild_id),
        mobile_network_type: Z.A.getType(),
        num_attachments: e.attachmentCount,
        ...(null != r && { mobile_signal_strength_level: r }),
    });
}
class et extends K.Ay.Store {
    initialize() {
        this.waitFor(q.A, X.A, Z.A);
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
    (0, c.zV)(L.HAw.SEND_MESSAGE_FAILURE, { failure_code: i, error_message: n, attachment_mimetypes: t });
}
var eo = n(491001),
    el = n(512599),
    ed = n(3137),
    e_ = n(969632),
    eu = n(308528);
function ec(e) {
    if (e !== A.E) return null;
    let t = q.A.getChannel(e);
    return null == t ? null : eu.A.ensurePrivateChannel(t.recipients);
}
var eE = n(561844),
    eh = n(710969);
n(853145);
var em = n(9842),
    ef = n(750385),
    eg = n(677413),
    ep = n(867455),
    eA = n(464578),
    eI = n(616356),
    eT = n(495544);
n(580745);
var eS = n(71393),
    eN = n(299091),
    eC = n(232835),
    eR = n(576705),
    eO = n(290863),
    ey = n(222823),
    ev = n(101392),
    eD = n(287809),
    eL = n(927813),
    eb = n(45938),
    ew = n(975571),
    eP = n(927578),
    ek = n(935208),
    eM = n(292348),
    eU = n(157559),
    ex = n(768349),
    eG = n(401755),
    eV = n(381941),
    eF = n(985018);
let eB = new S.A("MessageActionCreators"),
    eH = new S.A("MessageQueue"),
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
            inviteAnalyticsMetadata: s,
            overrideProperties: a = {},
        } = e,
        o = eT.default.getId(),
        l = eN.A.getInvite(t),
        d = (0, x.y$)(t),
        _ = null != l && (0, G.oK)(l),
        u = l?.target_application?.id;
    null != u && _ && (0, p.KL)(u, ex.J.ACTIVITY_INVITE, o);
    let E = q.A.getChannel(n);
    if (null != E) {
        let e = null;
        E.isMultiUserDM() ? (e = L.G2g.GDM_INVITE) : E.isPrivate() || (e = L.G2g.SERVER_INVITE);
        let t = {};
        if (null != l && l.state === L.elq.RESOLVED && null != l.channel) {
            let n = l.channel;
            (t.invite_channel_id = n.id),
                (t.invite_guild_id = l.guild?.id),
                (t.invite_channel_type = n.type),
                null != l.inviter && (t.invite_inviter_id = l.inviter.id),
                null != l.target_application && (t.application_id = l.target_application.id);
            let i = eI.A.getLastActiveStream();
            if (null != i && i.channelId === n.id) {
                (e = L.G2g.STREAM), (t.destination_user_id = i.ownerId);
                let n = (0, w.Ee)(i, eO.A);
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
                invite_code: d.baseCode,
                guild_id: E.getGuildId(),
                channel_id: E.id,
                message_id: i,
                send_type: L.gfq.DIRECT_MESSAGE,
                invite_guild_scheduled_event_id: d.guildScheduledEventId,
                invite_instance_id: (0, x._U)(d.baseCode, i) ?? null,
                ...a,
            }),
            c.Ay.trackWithMetadata(L.HAw.INVITE_SENT, t);
    } else {
        let e = {};
        null != l &&
            l.state === L.elq.RESOLVED &&
            null != l.inviter &&
            ((e.invite_inviter_id = l.inviter.id),
            null != l.target_application && (e.application_id = l.target_application.id),
            (e = {
                ...e,
                location: r,
                invite_type: L.G2g.FRIEND_INVITE,
                invite_code: d.baseCode,
                message_id: i,
                send_type: L.gfq.DIRECT_MESSAGE,
                invite_guild_scheduled_event_id: d.guildScheduledEventId,
                invite_instance_id: (0, x._U)(d.baseCode, i) ?? null,
                ...a,
            }),
            c.Ay.trackWithMetadata(L.HAw.INVITE_SENT, e));
    }
}
let eK = {
        [L.t02.SLOWMODE_RATE_LIMITED]: {
            messageName: "SLOWMODE_RATE_LIMITED",
            messageGetter: (e) => eF.intl.formatToPlainString(eF.t.IWntYg, { seconds: e.rateLimitPerUser }),
        },
        [L.t02.INVALID_MESSAGE_SEND_NO_MUTUAL_GUILDS]: {
            messageName: "INVALID_MESSAGE_SEND_NO_MUTUAL_GUILDS",
            messageGetter: () => {
                let e = ew.A.getArticleURL(L.MVz.DM_COULD_NOT_BE_DELIVERED),
                    { enabled: t } = W.getConfig({ location: "sendClydeError" });
                return t
                    ? eF.intl.formatToPlainString(eF.t.llTkqr, { helpUrl: e })
                    : eF.intl.formatToPlainString(eF.t.SkGL7l, { helpUrl: e });
            },
        },
        [L.t02.INVALID_MESSAGE_SEND_USER]: {
            messageName: "INVALID_MESSAGE_SEND_USER",
            messageGetter: () =>
                eF.intl.formatToPlainString(eF.t.SkGL7l, {
                    helpUrl: ew.A.getArticleURL(L.MVz.DM_COULD_NOT_BE_DELIVERED),
                }),
        },
        [L.t02.TOO_MANY_THREADS]: {
            messageName: "TOO_MANY_THREADS",
            messageGetter: (e) =>
                e.isForumLikeChannel() || e.isForumPost()
                    ? eF.intl.string(eF.t["/jUd2+"])
                    : eF.intl.string(eF.t["5EMPA7"]),
        },
        [L.t02.TOO_MANY_ANNOUNCEMENT_THREADS]: {
            messageName: "TOO_MANY_ANNOUNCEMENT_THREADS",
            messageGetter: () => eF.intl.string(eF.t["aY+lLC"]),
        },
        [L.t02.HARMFUL_LINK_MESSAGE_BLOCKED]: {
            messageName: "HARMFUL_LINK_MESSAGE_BLOCKED",
            messageGetter: () => eF.intl.formatToPlainString(eF.t.zSG3Qy, { helpUrl: L.X7G.HARMFUL_LINKS }),
        },
        [L.t02.HARMFUL_URL_BLOCKED]: {
            messageName: "HARMFUL_URL_BLOCKED",
            messageGetter: () => eF.intl.string(eF.t.WxX2Fd),
        },
        [L.t02.EMAIL_VERIFICATION_REQUIRED]: {
            messageName: "BOT_REQUIRES_EMAIL_VERIFICATION",
            messageGetter: () => eF.intl.string(eF.t.k1Cjqr),
        },
        [L.t02.GUILD_MESSAGE_UPDATE_RATE_LIMIT_EXCEEDED]: {
            messageName: "GUILD_MESSAGE_UPDATE_RATE_LIMIT_EXCEEDED",
            messageGetter: () => eF.intl.string(eF.t.Z5SUuv),
        },
        [L.t02.RATE_LIMIT_DM_OPEN]: {
            messageName: "BOT_DM_RATE_LIMITED",
            messageGetter: () => eF.intl.string(eF.t.E8nbNb),
        },
        [L.t02.SEND_MESSAGE_TEMPORARILY_DISABLED]: {
            messageName: "BOT_DM_SEND_MESSAGE_TEMPORARILY_DISABLED",
            messageGetter: () => eF.intl.string(eF.t.aRUbah),
        },
        [L.t02.INVALID_MESSAGE_SEND_GAME_FRIEND_DM]: {
            messageName: "BOT_DM_SEND_MESSAGE_INVALID_FOR_GAME_FRIEND",
            messageGetter: () => eF.intl.string(eF.t["/meGhR"]),
        },
        [L.t02.INVALID_MESSAGE_SEND_PROVISIONAL_ACCOUNT_OFFLINE]: {
            messageName: "BOT_DM_SEND_MESSAGE_INVALID_OFFLINE_PROVISIONAL_ACCOUNT",
            messageGetter: () => eF.intl.string(eF.t.Oc1Zjw),
        },
        [L.t02.TOTAL_ATTACHMENT_SIZE_TOO_LARGE]: {
            messageName: "TOTAL_ATTACHMENT_SIZE_TOO_LARGE",
            messageGetter: () => eF.intl.formatToPlainString(eF.t.DYFPg2, { maxSizeMb: eM.YK }),
        },
        [L.t02.CLOUD_UPLOAD_NOT_FOUND]: {
            messageName: "CLOUD_UPLOAD_NOT_FOUND",
            messageGetter: () => eF.intl.string(eF.t.bQldfH),
        },
        [L.t02.INVALID_PERMISSIONS]: {
            messageName: "INVALID_PERMISSIONS",
            messageGetter: () => eF.intl.string(eF.t.zl4Weq),
        },
    },
    ez = {
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
                c.Ay.trackWithMetadata(L.HAw.AUTOMATED_MESSAGE_RECEIVED, { message_author: "Clyde", message_name: n }),
                ez.receiveMessage(e, (0, er.pO)({ messageId: i, channelId: e, content: t, loggingName: n }));
        },
        sendNitroSystemMessage(e, t, n) {
            let i = (0, er.Ay)({
                channelId: e,
                nonce: n,
                type: L.lAJ.NITRO_NOTIFICATION,
                content: t,
                flags: L.pr7.EPHEMERAL,
                author: { id: L.oIV, username: "Nitro Notification", discriminator: L.h3J, avatar: "nitro", bot: !0 },
            });
            ez.receiveMessage(e, { ...i, state: L.cmJ.SENT, channel_id: e }, !0);
        },
        sendGiftingPromptSystemMessage(e, t) {
            let n = (0, er.Ay)({
                channelId: e,
                type: L.lAJ.GIFTING_PROMPT,
                content: "",
                flags: L.pr7.EPHEMERAL,
                author: {
                    id: L.oIV,
                    username: "Gifting Prompt",
                    discriminator: L.h3J,
                    avatar: "gifting_prompt",
                    bot: !0,
                },
                giftingPrompt: t,
            });
            ez.receiveMessage(e, { ...n, state: L.cmJ.SENT }, !0);
        },
        sendGuildBoostUpsellSystemMessage(e, t) {
            let n = (0, er.Ay)({
                channelId: e,
                type: L.lAJ.GUILD_BOOST_UPSELL,
                content: "",
                flags: L.pr7.EPHEMERAL,
                author: {
                    id: L.oIV,
                    username: "Guild Boost Upsell",
                    discriminator: L.h3J,
                    avatar: "guild_boost_upsell",
                    bot: !0,
                },
                boostingPrompt: t,
            });
            ez.receiveMessage(e, { ...n, state: L.cmJ.SENT }, !0);
        },
        sendClydeError(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                n = q.A.getChannel(e);
            if (null == n) return;
            let i = eK[t];
            null == i
                ? ez.sendBotMessage(
                      e,
                      eF.intl.formatToPlainString(eF.t.SkGL7l, {
                          helpUrl: ew.A.getArticleURL(L.MVz.DM_COULD_NOT_BE_DELIVERED),
                      }),
                      `SEND_FAILED (${t})`,
                  )
                : ez.sendBotMessage(e, i.messageGetter(n), i.messageName);
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
            ez.sendBotMessage(e, s, a, o),
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
            ez.trackJump(e, null, "Present");
            let n = { present: !0 };
            eC.A.hasPresent(e)
                ? l.h.dispatch({ type: "LOAD_MESSAGES_SUCCESS_CACHED", jump: n, channelId: e, limit: t })
                : ez.fetchMessages({ channelId: e, limit: t, jump: n });
        },
        trackJump(e, t, n, i) {
            c.Ay.trackWithMetadata(L.HAw.JUMP, { context: n, channel_id: e, message_id: t, ...i });
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
                skipLocalFetch: d,
                jumpType: _,
                avoidInitialScroll: u,
            } = e;
            return (
                "string" == typeof s && ez.trackJump(t, n, s, a),
                ez.fetchMessages({
                    channelId: t,
                    limit: L.d7Q,
                    jump: { messageId: n, flash: i, offset: r, returnMessageId: l, jumpType: _ },
                    isPreload: o,
                    skipLocalFetch: d,
                    avoidInitialScroll: u,
                })
            );
        },
        focusMessage(e) {
            let { channelId: t, messageId: n } = e;
            ez.fetchMessages({ channelId: t, limit: L.d7Q, focus: { messageId: n } });
        },
        async fetchMessage(e) {
            let { channelId: t, messageId: n } = e,
                i = await a.Bo.get({
                    url: L.Rsh.MESSAGES(t),
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
                    isPreload: d,
                    skipLocalFetch: u,
                    truncate: c,
                    forICYMI: E,
                    avoidInitialScroll: h,
                    feature: m,
                    fetchKey: f,
                } = e,
                g = q.A.getChannel(t),
                p = R.A.isConnectedOrOverlay(),
                I = Date.now();
            if (null != g && g.type === L.rbe.GUILD_STORE) return !1;
            if (
                t === A.E ||
                (eB.log(`Fetching messages for ${t} between ${i} and ${n}. jump=${JSON.stringify(s)}`),
                ez._tryFetchMessagesCached({
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
            eA.A.fetchMessages.recordStart(), F.A.recordChannelFetchStart(t, f ?? I, n, i, r);
            let T = s ?? void 0;
            null == T && null != o && (T = { ...o });
            let S = _.A.getOrCreate(t).loadStart(T);
            _.A.commit(S), l.h.dispatch({ type: "LOAD_MESSAGES" });
            let N = T?.messageId,
                C = new eW();
            return (
                u || this.fetchLocalMessages(t, f ?? I, n, i, r, C),
                a.Bo.get({
                    url: L.Rsh.MESSAGES(t),
                    query: { before: n, after: i, limit: r, around: N, preload: d, feature: m },
                    retries: 2,
                    oldFormErrors: !0,
                    rejectWithError: !1,
                }).then(
                    (e) => (
                        eA.A.fetchMessages.recordEnd(),
                        eA.A.dispatchMessages.measure(() => {
                            let a = e.body,
                                o = null != n,
                                d = null != i,
                                _ = null == n && null == i,
                                u = null != N || (a.length === r && (o || _)),
                                m = null != N || (d && a.length === r);
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
                            eB.log(`Fetched ${a.length} messages for ${t} isBefore:${o} isAfter:${d}`),
                                C.markComplete(),
                                l.h.dispatch({
                                    type: "LOAD_MESSAGES_SUCCESS",
                                    channelId: t,
                                    messages: a,
                                    isBefore: o,
                                    isAfter: d,
                                    hasMoreBefore: u,
                                    hasMoreAfter: m,
                                    limit: r,
                                    jump: s,
                                    forICYMI: E,
                                    isStale: !p || R.A.lastTimeConnectedChanged() >= I,
                                    truncate: c,
                                    avoidInitialScroll: h,
                                }),
                                F.A.recordChannelFetchedNetwork(t, f ?? I, n, i, r, a);
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
                o = _.A.getOrCreate(e),
                d = E.A.database();
            if (null == d || null == a || null != n || null != i) return void eA.A.addLocalMessages(e, -1);
            if (o.ready && !o.cached) return void eA.A.addLocalMessages(e, -2);
            let u = await (0, h.kk)(() => m.Ay.load(d, e, r));
            if (null == u) return void eA.A.addLocalMessages(e, -3);
            if (
                (eB.log(
                    `fetched ${u.messages.length} messages from local database (channel_id: ${e}, remote_fetch_completed: ${s.completed})`,
                ),
                eA.A.addLocalMessages(e, u.messages.length),
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
            let r = _.A.getOrCreate(e);
            if (r.hasMoreAfter) return;
            let s = await (0, h.kk)(() => m.Ay.load(i, e, t));
            if (null == s) return;
            r = _.A.getOrCreate(e);
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
                d = eC.A.getMessages(t);
            if (d.cached || !d.ready) return !1;
            if (s?.messageId != null || a?.messageId != null) {
                if (s?.messageId != null && d.has(s.messageId, !1))
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
                    if (d.has(a.messageId, !1))
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
                    n = d.first(),
                    i = d.last();
                if (
                    (!d.hasMoreBefore && null != n && ek.default.extractTimestamp(n.id) >= e) ||
                    (!d.hasMoreAfter && null != i && ek.default.extractTimestamp(i.id) <= e) ||
                    (null != n &&
                        null != i &&
                        ek.default.extractTimestamp(n.id) < e &&
                        ek.default.extractTimestamp(i.id) > e)
                )
                    return (
                        l.h.dispatch({ type: "LOAD_MESSAGES_SUCCESS_CACHED", channelId: t, jump: s, limit: L.d7Q }), !0
                    );
            } else if (null != n && d.hasBeforeCached(n))
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
            else if (null != i && d.hasAfterCached(i))
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
            if (null != r) return ez.sendMessage(r, t, n, i);
            let s = i.nonce ?? (0, es.m)();
            return (
                (i = { ...i, nonce: s }),
                (en.recordMessageSendAttempt(e, s, i), eC.A.isReady(e))
                    ? ez._sendMessage(e, t, i)
                    : n && e !== A.E
                      ? (eH.info(`Waiting for channel ${e} to be ready before sending.`),
                        new Promise((n, r) => {
                            eC.A.whenReady(e, () => {
                                eH.info(`Channel ${e} is ready for sending now.`), ez._sendMessage(e, t, i).then(n, r);
                            });
                        }))
                      : ez._sendMessage(e, t, i)
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
                      allowedMentions: e.shouldMention ? void 0 : { parse: Object.values(L.uw8), replied_user: !1 },
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
            let s = (0, V.A)(t);
            return (
                null != r &&
                    (s = `${r}
${s}`),
                ez._sendMessage(
                    e,
                    { content: s, tts: !1, validNonShortcutEmojis: [], invalidEmojis: [] },
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
                r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
            return ez._sendMessage(
                e,
                { content: n, invalidEmojis: [], validNonShortcutEmojis: [], tts: r },
                { ...i, stickerIds: t },
            );
        },
        sendGreetMessage(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                { messageReference: i, allowedMentions: r } = n;
            return a.Bo.post({
                url: L.Rsh.MESSAGES_GREET(e),
                body: { sticker_ids: [t], allowed_mentions: r, message_reference: i },
                oldFormErrors: !0,
                rejectWithError: !1,
                context: { location: eV.Hx.GREET },
            }).then(
                (n) => (
                    ei.donateSentMessage(n.body.content, e),
                    ez.receiveMessage(e, n.body),
                    l.h.dispatch({ type: "STICKER_TRACK_USAGE", stickerIds: [t] }),
                    n
                ),
                (t) => {
                    throw (
                        (eB.log("Failed to send greeting"),
                        429 !== t.status && ez.sendClydeError(e, t.body.code),
                        l.h.dispatch({ type: "MESSAGE_SEND_FAILED", messageId: t.body.id, channelId: e }),
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
                e.some((e) => e.animated) && !eP.Ay.canUseAnimatedEmojis(t)
                    ? ((i = eF.intl.string(eF.t.msFJy8)), (r = "INVALID_ANIMATED_EMOJI_BODY"))
                    : eR.A.canWithPartialContext(L.xBc.USE_EXTERNAL_EMOJIS, { channelId: n })
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
                        eH.info("Finished converting channel to a private channel"), ez._sendMessage(e, t, n);
                    })
                );
            let o = t.content,
                { invalidEmojis: d, validNonShortcutEmojis: _, tts: E = !1 } = t,
                {
                    activityAction: h,
                    location: m,
                    inviteAnalyticsMetadata: A,
                    stickerIds: S,
                    messageReference: R,
                    allowedMentions: O,
                    poll: y,
                    sharedCustomTheme: v,
                    contentInventoryEntry: w,
                    attachments: x,
                    attachmentsToUpload: G,
                    onAttachmentUploadError: V,
                    announcementSendOptions: F,
                    withCheckpoint: B,
                } = n,
                W = n.flags ?? 0,
                [K, z] = (0, eg.A)(o);
            K && ((o = z), (W = (0, s.UI)(W, L.pr7.SUPPRESS_NOTIFICATIONS)));
            let $ = q.A.getChannel(e),
                X = eS.A.getGuild($?.guild_id);
            (0, Y.Qz)(X, $, "_sendMessage") && (W = (0, s.UI)(W, L.pr7.IS_GUILD_OFFICIAL));
            let Z = !1,
                Q = n.messageReference?.type === L.SH7.FORWARD;
            if (
                "" === o &&
                null == h &&
                null == S &&
                null == y &&
                null == v &&
                null == w &&
                !Q &&
                (null == x || 0 === x.length) &&
                !B &&
                (null == t.components || 0 === t.components.length)
            )
                if (null == G || !(G.length > 0)) return Promise.resolve();
                else Z = !0;
            let J = null != R ? L.lAJ.REPLY : L.lAJ.DEFAULT,
                ee = n.nonce ?? (0, es.m)(),
                et = (0, er.Ay)({
                    channelId: e,
                    content: o,
                    tts: E,
                    type: J,
                    messageReference: R,
                    allowedMentions: O,
                    flags: 0 !== W ? W : void 0,
                    nonce: ee,
                    poll: (0, e_.G8)(y),
                    sharedCustomTheme: v,
                });
            if (
                (!1 !== n.eagerDispatch &&
                    ((0, el.iq)(e, et.id),
                    null != S && (et.sticker_items = S.map((e) => ef.A.getStickerById(e)).filter((e) => null != e)),
                    ez.receiveMessage(e, et, !0, n)),
                !ej && null != d && d.length > 0)
            ) {
                ej = !0;
                let t = eD.default.getCurrentUser(),
                    { errorMessage: n, errorMessageName: i } = ez.validateMessage(d, t, e);
                ez.sendBotMessage(e, n, i);
            }
            let eo = {
                type: null != F ? u.AZ.SEND_ANNOUNCEMENT : u.AZ.SEND,
                message: {
                    channelId: e,
                    content: o,
                    nonce: ee,
                    tts: E,
                    message_reference: R,
                    allowed_mentions: O,
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
                        h.type === L.xL.JOIN_REQUEST || h.type === L.xL.STREAM_REQUEST || null != t
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
                null != v && (eo.message.shared_client_theme = v),
                null != S && (eo.message.sticker_ids = S),
                ed.A.isEnabled() && (eo.message.has_poggermode_enabled = !0),
                B && (eo.message.with_checkpoint = !0),
                null != w && (eo.message.content_inventory_entry = w),
                null != x && x.length > 0 && (eo.message.attachments = x),
                null != G && G.length > 0)
            )
                try {
                    let t = await j({
                        channelId: e,
                        nonce: ee,
                        items: G,
                        message: et,
                        shouldUploadFailureSendNotification: !n.doNotNotifyOnError && void 0,
                    });
                    if (null == t) return;
                    let r = t.attachments;
                    if (((i = t.uploader), Z && (null == r || 0 === r.length))) return;
                    null != r && (eo.message.attachments = r.map((e, t) => (0, eM.OW)(e, t)));
                } catch (r) {
                    let { file: e, code: t, reason: n, responseBody: i } = r;
                    ea({ fileItems: e.items, failureCode: t, errorMessage: n?.msg }), V?.(e, t, n, i);
                    return;
                }
            return new Promise((t, s) => {
                let a = Date.now(),
                    d = u.Ay.length,
                    E = Math.floor(1e4 * Math.random());
                eH.info(`Queueing message to be sent LogId:${E}`),
                    u.Ay.enqueue(
                        eo,
                        (h) => {
                            let R = Date.now() - a;
                            if (h.ok) {
                                var O, v, x, G, V, F, B;
                                let s;
                                ei.donateSentMessage(o, e),
                                    ez.receiveMessage(e, h.body, !0, {
                                        sendAnalytics: { duration: R, queueSize: d },
                                        poll: y,
                                    }),
                                    null != n.alsoForwardToChannelId &&
                                        C.A.sendForward((0, H.rh)(h.body), n.alsoForwardToChannelId)
                                            .then(() => {
                                                !(function (e) {
                                                    let {
                                                        referencedMessageId: t,
                                                        guildId: n,
                                                        channelId: i,
                                                        destinationChannelId: r,
                                                    } = e;
                                                    D.default.track(L.HAw.MESSAGE_ALSO_SEND_TO_CHANNEL_SENT, {
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
                                    u = M.A.getRequest(a);
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
                                        slowmodeType: ev.R.SendMessage,
                                        channelId: e,
                                    }),
                                    l.h.dispatch({ type: "EMOJI_TRACK_USAGE", emojiUsed: _ }),
                                    l.h.dispatch({ type: "STICKER_TRACK_USAGE", stickerIds: S }),
                                    l.h.dispatch({
                                        type: "LOCAL_MESSAGE_CREATE",
                                        message: { channel_id: e, author: eD.default.getCurrentUser() },
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
                                            let { type: t, code: d, url: _ } = e;
                                            if (t === I.I.INVITE)
                                                eY({
                                                    inviteKey: d,
                                                    channelId: n,
                                                    messageId: i,
                                                    location: s,
                                                    inviteAnalyticsMetadata: a,
                                                    overrideProperties: o,
                                                });
                                            else if (t === I.I.TEMPLATE) {
                                                let e = U.A.getGuildTemplate(d);
                                                if (null == e || e.state === eG.QB.RESOLVING) return;
                                                c.Ay.trackWithMetadata(L.HAw.GUILD_TEMPLATE_LINK_SENT, {
                                                    guild_template_code: d,
                                                    guild_template_name: e.name,
                                                    guild_template_description: e.description,
                                                    guild_template_guild_id: e.sourceGuildId,
                                                });
                                            } else if (t === I.I.BUILD_OVERRIDE);
                                            else if (t === I.I.EXPERIMENT);
                                            else if (t === I.I.MANUAL_BUILD_OVERRIDE);
                                            else if (t === I.I.EVENT);
                                            else if (t === I.I.CHANNEL_LINK);
                                            else if (t === I.I.APP_DIRECTORY_PROFILE)
                                                b(d), (0, p.KL)(d, ex.J.APP_DISCOVERY, l);
                                            else if (t === I.I.APP_DIRECTORY_STOREFRONT) b(d, "storefront");
                                            else if (t === I.I.APP_DIRECTORY_STOREFRONT_SKU) {
                                                let e = (0, f.u)(d);
                                                null != e && b(e.applicationId, "storefront_sku");
                                            } else if (t === I.I.ACTIVITY_BOOKMARK) {
                                                let e = (0, g.N)(_);
                                                (0, p.KL)(d, ex.J.ACTIVITY, e.referrerId ?? l, e.customId);
                                            } else if (t === I.I.EMBEDDED_ACTIVITY_INVITE)
                                                (0, p.KL)(d, ex.J.ACTIVITY_INVITE, l);
                                            else if (t === I.I.GUILD_PRODUCT);
                                            else if (t === I.I.SERVER_SHOP);
                                            else if (t === I.I.SOCIAL_LAYER_STOREFRONT);
                                            else if (t === I.I.QUESTS_EMBED) {
                                                let e = (0, eh.L4)(r.u.QUESTS_EMBED);
                                                (0, eE.av)({
                                                    questId: d,
                                                    event: L.HAw.QUEST_LINK_SHARED,
                                                    properties: { metadata_sealed: null != e ? e : null },
                                                    trackGuildAndChannelMetadata: !0,
                                                    sourceQuestContent: r.u.QUESTS_EMBED,
                                                });
                                            } else if (t === I.I.APP_OAUTH2_LINK)
                                                c.Ay.trackWithMetadata(L.HAw.APP_OAUTH2_LINK_EMBED_URL_SENT, {
                                                    application_id: d,
                                                }),
                                                    (0, p.KL)(d, ex.J.OAUTH, l);
                                            else if (t === I.I.COLLECTIBLES_SHOP);
                                            else throw Error(`Unknown coded link type: ${t}`);
                                        });
                                    })({
                                        content: o,
                                        channelId: e,
                                        messageId: h.body.id,
                                        location: m ?? "chat_input",
                                        inviteAnalyticsMetadata: A,
                                    }),
                                    (O = o),
                                    (v = h.body.id),
                                    (x = m ?? "chat_input"),
                                    (G = !!n.isGiftLinkSentOnBehalfOfUser),
                                    (0, eb.e7)(O).forEach((t) => {
                                        let n = q.A.getChannel(e);
                                        null != n &&
                                            c.Ay.trackWithMetadata(L.HAw.GIFT_CODE_SENT, {
                                                location: x,
                                                gift_code: t,
                                                guild_id: n.getGuildId(),
                                                channel_id: n.id,
                                                channel_type: n.type,
                                                message_id: v,
                                                automatic_send: G,
                                            });
                                    }),
                                    null != n.gifMetadata &&
                                        ((V = n.gifMetadata),
                                        (F = h.body.id),
                                        (B = m ?? "chat_input"),
                                        null != (s = q.A.getChannel(e)) &&
                                            D.default.track(L.HAw.MESSAGE_SENT_WITH_GIF, {
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
                                    if (h.body.code === L.t02.SLOWMODE_RATE_LIMITED) {
                                        let t = h.body.retry_after;
                                        null != t &&
                                            t > 0 &&
                                            l.h.dispatch({
                                                type: "SLOWMODE_SET_COOLDOWN",
                                                channelId: e,
                                                slowmodeType: ev.R.SendMessage,
                                                cooldownMs: t * eL.A.Millis.SECOND,
                                            });
                                    } else
                                        P.yf.has(h.body.code)
                                            ? l.h.dispatch({
                                                  type: "MESSAGE_SEND_FAILED_AUTOMOD",
                                                  messageData: eo,
                                                  errorResponseBody: { code: h.body.code, message: h.body.message },
                                              })
                                            : h.body.code === L.t02.POGGERMODE_TEMPORARILY_DISABLED
                                              ? l.h.dispatch({ type: "POGGERMODE_TEMPORARILY_DISABLED" })
                                              : h.body.code === L.t02.EXPLICIT_CONTENT
                                                ? (t = eV.ty.EXPLICIT_CONTENT)
                                                : null != y || Q || null != w || ez.sendClydeError(e, h.body.code);
                                r
                                    ? ez.deleteMessage(e, ee, !0)
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
                                          ez.sendExplicitMediaClydeError(
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
            if ((0, s.Lt)(t.flags, L.pr7.IS_COMPONENTS_V2)) {
                let i = t.components.filter((e) => e.type === d.I5.TEXT_DISPLAY);
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
            await ep.A.unarchiveThreadIfNecessary(e);
            let a = (function (e, t) {
                    let n = eC.A.getMessage(e, t);
                    if (null == n || n.type !== L.lAJ.REPLY) return;
                    let i = em.A.getMessageByReference(n.messageReference);
                    if (i.state === em.a.LOADED && !n.mentions.includes(i.message.author.id))
                        return { parse: Object.values(L.uw8), replied_user: !1 };
                })(e, t),
                d = null != (i = eC.A.getMessage(e, t)) && i.hasFlag(L.pr7.CROSSPOSTED),
                _ = { channelId: e, messageId: t, content: r, isCrossposted: d, allowed_mentions: a, components: s };
            u.Ay.enqueue({ type: u.AZ.EDIT, message: _ }, (n) => {
                let i = !n.hasErr && P.yf.has(n.body.code);
                if (i) {
                    let e = { type: u.AZ.EDIT, message: _ };
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
                    ez.endEditMessage(e, n.hasErr ? void 0 : n),
                    ez.focusMessage({ channelId: e, messageId: t });
            });
        },
        async suppressEmbeds(e, t) {
            await ep.A.unarchiveThreadIfNecessary(e);
            let n = eC.A.getMessage(e, t);
            null != n &&
                a.Bo.patch({
                    url: L.Rsh.MESSAGE(e, t),
                    body: { flags: (0, s.lA)(n.flags, L.pr7.SUPPRESS_EMBEDS, !0) },
                    oldFormErrors: !0,
                    rejectWithError: !1,
                });
        },
        async patchMessageGuildOfficial(e, t, n) {
            await ep.A.unarchiveThreadIfNecessary(e);
            let i = eC.A.getMessage(e, t);
            null != i &&
                a.Bo.patch({
                    url: L.Rsh.MESSAGE(e, t),
                    body: { flags: (0, s.lA)(i.flags, L.pr7.IS_GUILD_OFFICIAL, n) },
                    oldFormErrors: !0,
                    rejectWithError: !1,
                });
        },
        async patchMessageAttachments(e, t, n) {
            await ep.A.unarchiveThreadIfNecessary(e),
                a.Bo.patch({
                    url: L.Rsh.MESSAGE(e, t),
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
                : (await ep.A.unarchiveThreadIfNecessary(e),
                  a.Bo.del({ url: L.Rsh.MESSAGE(e, t), oldFormErrors: !0, rejectWithError: !1 }).then(() => {
                      i();
                  }));
        },
        dismissAutomatedMessage(e) {
            null != e.loggingName &&
                c.Ay.trackWithMetadata(L.HAw.AUTOMATED_MESSAGE_DISMISSED, {
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
                    url: L.Rsh.MESSAGE_CROSSPOST(e, t),
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
                    eU.A.show({
                        title: eF.intl.string(eF.t.Vd1hs6),
                        body: e,
                        confirmText: eF.intl.string(eF.t.BddRzS),
                    });
            }
        },
        trackInvite: eY,
    },
    e$ = ez;
