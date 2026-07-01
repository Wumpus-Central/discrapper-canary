"use strict";
n.d(t, { A: () => eq }), n(801541), n(938796);
var i = n(889137),
    r = n(696292),
    s = n(665260),
    a = n(636537),
    o = n(765178),
    l = n(228366),
    u = n(155718),
    c = n(292446),
    d = n(779185),
    _ = n(95561),
    h = n(723176),
    f = n(154049),
    p = n(586660),
    E = n(354287),
    m = n(695870),
    g = n(53677),
    A = n(892768),
    I = n(167189),
    T = n(833291),
    S = n(626584),
    y = n(390248),
    C = n(885918),
    N = n(341662),
    v = n(617710),
    R = n(607399),
    O = n(309010),
    b = n(967198),
    D = n(174459),
    L = n(652215);
function w(e, t) {
    D.default.track(L.HAw.APP_DIRECTORY_PROFILE_EMBED_SENT, {
        application_id: e,
        device_platform: R.Fr ? "mobile_web" : "desktop_web",
        guild_id: b.A.getGuildId(),
        channel_id: O.A.getChannelId(),
        section: t,
    });
}
var M = n(834757),
    P = n(753738),
    x = n(51271),
    k = n(844944),
    U = n(122906),
    G = n(842241),
    F = n(346542),
    V = n(279208),
    B = n(917878),
    j = n(395780),
    H = n(320095);
async function Y(e) {
    let { channelId: t, message: n, items: i, shouldUploadFailureSendNotification: r } = e,
        s = new j.A(),
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
var W = n(521427),
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
    D.default.track(L.HAw.SEND_MESSAGE_ROUNDTRIP, {
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
    (0, _.zV)(L.HAw.SEND_MESSAGE_FAILURE, { failure_code: i, error_message: n, attachment_mimetypes: t });
}
var eo = n(491001),
    el = n(512599),
    eu = n(3137),
    ec = n(969632),
    ed = n(45787),
    e_ = n(308528);
function eh(e) {
    if (e !== m.E) return null;
    let t = q.A.getChannel(e);
    return null == t ? null : e_.A.ensurePrivateChannel(t.recipients);
}
var ef = n(561844),
    ep = n(710969);
n(853145);
var eE = n(9842),
    em = n(750385),
    eg = n(677413),
    eA = n(867455),
    eI = n(464578),
    eT = n(616356),
    eS = n(495544);
n(580745);
var ey = n(71393),
    eC = n(299091),
    eN = n(232835),
    ev = n(576705),
    eR = n(290863),
    eO = n(568548),
    eb = n(101392),
    eD = n(287809),
    eL = n(927813),
    ew = n(45938),
    eM = n(975571),
    eP = n(428262),
    ex = n(935208),
    ek = n(292348),
    eU = n(157559),
    eG = n(768349),
    eF = n(401755),
    eV = n(381941),
    eB = n(375708);
let ej = new S.A("MessageActionCreators"),
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
        o = eS.default.getId(),
        l = eC.A.getInvite(t),
        u = (0, G.y$)(t),
        c = null != l && (0, F.oK)(l),
        d = l?.target_application?.id;
    null != d && c && (0, E.KL)(d, eG.J.ACTIVITY_INVITE, o);
    let h = q.A.getChannel(n);
    if (null != h) {
        let e = null;
        h.isMultiUserDM() ? (e = L.G2g.GDM_INVITE) : h.isPrivate() || (e = L.G2g.SERVER_INVITE);
        let t = {};
        if (null != l && l.state === L.elq.RESOLVED && null != l.channel) {
            let n = l.channel;
            (t.invite_channel_id = n.id),
                (t.invite_guild_id = l.guild?.id),
                (t.invite_channel_type = n.type),
                null != l.inviter && (t.invite_inviter_id = l.inviter.id),
                null != l.target_application && (t.application_id = l.target_application.id);
            let i = eT.A.getLastActiveStream();
            if (null != i && i.channelId === n.id) {
                (e = L.G2g.STREAM), (t.destination_user_id = i.ownerId);
                let n = (0, M.Ee)(i, eR.A);
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
                invite_code: u.baseCode,
                guild_id: h.getGuildId(),
                channel_id: h.id,
                message_id: i,
                send_type: L.gfq.DIRECT_MESSAGE,
                invite_guild_scheduled_event_id: u.guildScheduledEventId,
                invite_instance_id: (0, G._U)(u.baseCode, i) ?? null,
                ...a,
            }),
            _.Ay.trackWithMetadata(L.HAw.INVITE_SENT, t);
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
                invite_code: u.baseCode,
                message_id: i,
                send_type: L.gfq.DIRECT_MESSAGE,
                invite_guild_scheduled_event_id: u.guildScheduledEventId,
                invite_instance_id: (0, G._U)(u.baseCode, i) ?? null,
                ...a,
            }),
            _.Ay.trackWithMetadata(L.HAw.INVITE_SENT, e));
    }
}
let e$ = {
        [L.t02.SLOWMODE_RATE_LIMITED]: {
            messageName: "SLOWMODE_RATE_LIMITED",
            messageGetter: (e) => eB.intl.formatToPlainString(eB.t.IWntYg, { seconds: e.rateLimitPerUser }),
        },
        [L.t02.INVALID_MESSAGE_SEND_NO_MUTUAL_GUILDS]: {
            messageName: "INVALID_MESSAGE_SEND_NO_MUTUAL_GUILDS",
            messageGetter: (e) => {
                let t = eM.A.getArticleURL(L.MVz.DM_COULD_NOT_BE_DELIVERED),
                    n = e.rawRecipients ?? [];
                return e.isDM() && 1 === n.length && n.some((e) => e.bot)
                    ? eB.intl.formatToPlainString(eB.t.SkGL7l, { helpUrl: t })
                    : eB.intl.formatToPlainString(eB.t.llTkqr, { helpUrl: t });
            },
        },
        [L.t02.INVALID_MESSAGE_SEND_USER]: {
            messageName: "INVALID_MESSAGE_SEND_USER",
            messageGetter: () =>
                eB.intl.formatToPlainString(eB.t.SkGL7l, {
                    helpUrl: eM.A.getArticleURL(L.MVz.DM_COULD_NOT_BE_DELIVERED),
                }),
        },
        [L.t02.TOO_MANY_THREADS]: {
            messageName: "TOO_MANY_THREADS",
            messageGetter: (e) =>
                e.isForumLikeChannel() || e.isForumPost()
                    ? eB.intl.string(eB.t["/jUd2+"])
                    : eB.intl.string(eB.t["5EMPA7"]),
        },
        [L.t02.TOO_MANY_ANNOUNCEMENT_THREADS]: {
            messageName: "TOO_MANY_ANNOUNCEMENT_THREADS",
            messageGetter: () => eB.intl.string(eB.t["aY+lLC"]),
        },
        [L.t02.HARMFUL_LINK_MESSAGE_BLOCKED]: {
            messageName: "HARMFUL_LINK_MESSAGE_BLOCKED",
            messageGetter: () => eB.intl.formatToPlainString(eB.t.zSG3Qy, { helpUrl: L.X7G.HARMFUL_LINKS }),
        },
        [L.t02.HARMFUL_URL_BLOCKED]: {
            messageName: "HARMFUL_URL_BLOCKED",
            messageGetter: () => eB.intl.string(eB.t.WxX2Fd),
        },
        [L.t02.EMAIL_VERIFICATION_REQUIRED]: {
            messageName: "BOT_REQUIRES_EMAIL_VERIFICATION",
            messageGetter: () => eB.intl.string(eB.t.k1Cjqr),
        },
        [L.t02.GUILD_MESSAGE_UPDATE_RATE_LIMIT_EXCEEDED]: {
            messageName: "GUILD_MESSAGE_UPDATE_RATE_LIMIT_EXCEEDED",
            messageGetter: () => eB.intl.string(eB.t.Z5SUuv),
        },
        [L.t02.RATE_LIMIT_DM_OPEN]: {
            messageName: "BOT_DM_RATE_LIMITED",
            messageGetter: () => eB.intl.string(eB.t.E8nbNb),
        },
        [L.t02.SEND_MESSAGE_TEMPORARILY_DISABLED]: {
            messageName: "BOT_DM_SEND_MESSAGE_TEMPORARILY_DISABLED",
            messageGetter: () => eB.intl.string(eB.t.aRUbah),
        },
        [L.t02.INVALID_MESSAGE_SEND_GAME_FRIEND_DM]: {
            messageName: "BOT_DM_SEND_MESSAGE_INVALID_FOR_GAME_FRIEND",
            messageGetter: () => eB.intl.string(eB.t["/meGhR"]),
        },
        [L.t02.INVALID_MESSAGE_SEND_PROVISIONAL_ACCOUNT_OFFLINE]: {
            messageName: "BOT_DM_SEND_MESSAGE_INVALID_OFFLINE_PROVISIONAL_ACCOUNT",
            messageGetter: () => eB.intl.string(eB.t.Oc1Zjw),
        },
        [L.t02.TOTAL_ATTACHMENT_SIZE_TOO_LARGE]: {
            messageName: "TOTAL_ATTACHMENT_SIZE_TOO_LARGE",
            messageGetter: () => eB.intl.formatToPlainString(eB.t.DYFPg2, { maxSizeMb: ek.YK }),
        },
        [L.t02.CLOUD_UPLOAD_NOT_FOUND]: {
            messageName: "CLOUD_UPLOAD_NOT_FOUND",
            messageGetter: () => eB.intl.string(eB.t.bQldfH),
        },
        [L.t02.INVALID_PERMISSIONS]: {
            messageName: "INVALID_PERMISSIONS",
            messageGetter: () => eB.intl.string(eB.t.zl4Weq),
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
                _.Ay.trackWithMetadata(L.HAw.AUTOMATED_MESSAGE_RECEIVED, { message_author: "Clyde", message_name: n }),
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
            let i = e$[t];
            null == i
                ? ez.sendBotMessage(
                      e,
                      eB.intl.formatToPlainString(eB.t.SkGL7l, {
                          helpUrl: eM.A.getArticleURL(L.MVz.DM_COULD_NOT_BE_DELIVERED),
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
                o = (0, es.m)();
            ez.sendBotMessage(e, s, a, o),
                (0, y.hv)({
                    action: y.rY.EXPLICIT_MEDIA_FALSE_POSITIVE_CLYDE_MESSAGE_SENT,
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
            eN.A.hasPresent(e)
                ? l.h.dispatch({ type: "LOAD_MESSAGES_SUCCESS_CACHED", jump: n, channelId: e, limit: t })
                : ez.fetchMessages({ channelId: e, limit: t, jump: n });
        },
        trackJump(e, t, n, i) {
            _.Ay.trackWithMetadata(L.HAw.JUMP, { context: n, channel_id: e, message_id: t, ...i });
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
                skipLocalFetch: u,
                jumpType: c,
                avoidInitialScroll: d,
                onJumpComplete: _,
            } = e;
            return (
                "string" == typeof s && ez.trackJump(t, n, s, a),
                ez.fetchMessages({
                    channelId: t,
                    limit: L.d7Q,
                    jump: { messageId: n, flash: i, offset: r, returnMessageId: l, jumpType: c, onJumpComplete: _ },
                    isPreload: o,
                    skipLocalFetch: u,
                    avoidInitialScroll: d,
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
                    isPreload: u,
                    skipLocalFetch: d,
                    truncate: _,
                    forICYMI: h,
                    avoidInitialScroll: f,
                    feature: p,
                    fetchKey: E,
                } = e,
                g = q.A.getChannel(t),
                A = v.A.isConnectedOrOverlay(),
                I = Date.now();
            if (null != g && g.type === L.rbe.GUILD_STORE) return !1;
            if (
                t === m.E ||
                (ej.log(`Fetching messages for ${t} between ${i} and ${n}. jump=${JSON.stringify(s)}`),
                ez._tryFetchMessagesCached({
                    channelId: t,
                    before: n,
                    after: i,
                    limit: r,
                    jump: s,
                    focus: o,
                    truncate: _,
                }))
            )
                return;
            eI.A.fetchMessages.recordStart(), B.A.recordChannelFetchStart(t, E ?? I, n, i, r);
            let T = s ?? void 0;
            null == T && null != o && (T = { ...o });
            let S = c.A.getOrCreate(t).loadStart(T);
            c.A.commit(S), l.h.dispatch({ type: "LOAD_MESSAGES" });
            let y = T?.messageId,
                C = new eW();
            return (
                d || this.fetchLocalMessages(t, E ?? I, n, i, r, C),
                a.Bo.get({
                    url: L.Rsh.MESSAGES(t),
                    query: { before: n, after: i, limit: r, around: y, preload: u, feature: p },
                    retries: 2,
                    oldFormErrors: !0,
                    rejectWithError: !1,
                }).then(
                    (e) => (
                        eI.A.fetchMessages.recordEnd(),
                        eI.A.dispatchMessages.measure(() => {
                            let a = e.body,
                                o = null != n,
                                u = null != i,
                                c = null == n && null == i,
                                d = null != y || (a.length === r && (o || c)),
                                p = null != y || (u && a.length === r);
                            if (null != y) {
                                let e = Math.floor(r / 2),
                                    n = e + (r % 2),
                                    i = [
                                        y,
                                        ...a.map((e) => {
                                            let { id: t } = e;
                                            return t;
                                        }),
                                    ]
                                        .filter((e, t, n) => n.indexOf(e) === t)
                                        .sort(ex.default.compare)
                                        .indexOf(y);
                                if ((i < n - 1 && (d = !1), a.length - i < e && (p = !1), p && a.length > 0)) {
                                    let e = eO.Ay.lastMessageId(t);
                                    a[0].id === e && (p = !1);
                                }
                            }
                            ej.log(`Fetched ${a.length} messages for ${t} isBefore:${o} isAfter:${u}`),
                                C.markComplete(),
                                l.h.dispatch({
                                    type: "LOAD_MESSAGES_SUCCESS",
                                    channelId: t,
                                    messages: a,
                                    isBefore: o,
                                    isAfter: u,
                                    hasMoreBefore: d,
                                    hasMoreAfter: p,
                                    limit: r,
                                    jump: s,
                                    forICYMI: h,
                                    isStale: !A || v.A.lastTimeConnectedChanged() >= I,
                                    truncate: _,
                                    avoidInitialScroll: f,
                                }),
                                B.A.recordChannelFetchedNetwork(t, E ?? I, n, i, r, a);
                        }),
                        !0
                    ),
                    () => (
                        ej.log(`Failed to fetch messages for ${t}`),
                        l.h.dispatch({ type: "LOAD_MESSAGES_FAILURE", channelId: t }),
                        !1
                    ),
                )
            );
        },
        async fetchLocalMessages(e, t, n, i, r, s) {
            let a = q.A.getBasicChannel(e),
                o = c.A.getOrCreate(e),
                u = h.A.database();
            if (null == u || null == a || null != n || null != i) return void eI.A.addLocalMessages(e, -1);
            if (o.ready && !o.cached) return void eI.A.addLocalMessages(e, -2);
            let d = await (0, f.kk)(() => p.Ay.load(u, e, r));
            if (null == d) return void eI.A.addLocalMessages(e, -3);
            if (
                (ej.log(
                    `fetched ${d.messages.length} messages from local database (channel_id: ${e}, remote_fetch_completed: ${s.completed})`,
                ),
                eI.A.addLocalMessages(e, d.messages.length),
                !s.completed && d.messages.length > 0)
            ) {
                let s = d.messages.length >= r && d.connectionId === v.A.lastTimeConnectedChanged();
                B.A.recordChannelFetchedLocal(e, t, n, i, r, d.messages),
                    l.h.dispatch({
                        type: "LOCAL_MESSAGES_LOADED",
                        guildId: a.guild_id,
                        channelId: e,
                        users: d.users,
                        members: d.members,
                        messages: d.messages,
                        stale: !s,
                    });
            }
        },
        async fetchNewLocalMessages(e, t) {
            let n = q.A.getBasicChannel(e),
                i = h.A.database();
            if (null == i || null == n) return;
            let r = c.A.getOrCreate(e);
            if (r.hasMoreAfter) return;
            let s = await (0, f.kk)(() => p.Ay.load(i, e, t));
            if (null == s) return;
            r = c.A.getOrCreate(e);
            let a = r.last()?.id,
                o = null == a ? s.messages : s.messages.filter((e) => ex.default.compare(e.id, a) > 0);
            ej.log(`Fetched ${s.messages.length} messages from the cache after foregrounding. ${o.length} are new`),
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
                u = eN.A.getMessages(t);
            if (u.cached || !u.ready) return !1;
            if (s?.messageId != null || a?.messageId != null) {
                if (s?.messageId != null && u.has(s.messageId, !1))
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
                    if (u.has(a.messageId, !1))
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
                let e = s?.messageId != null ? ex.default.extractTimestamp(s?.messageId) : 0,
                    n = u.first(),
                    i = u.last();
                if (
                    (!u.hasMoreBefore && null != n && ex.default.extractTimestamp(n.id) >= e) ||
                    (!u.hasMoreAfter && null != i && ex.default.extractTimestamp(i.id) <= e) ||
                    (null != n &&
                        null != i &&
                        ex.default.extractTimestamp(n.id) < e &&
                        ex.default.extractTimestamp(i.id) > e)
                )
                    return (
                        l.h.dispatch({ type: "LOAD_MESSAGES_SUCCESS_CACHED", channelId: t, jump: s, limit: L.d7Q }), !0
                    );
            } else if (null != n && u.hasBeforeCached(n))
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
            else if (null != i && u.hasAfterCached(i))
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
            let r = await eh(e);
            if (null != r) return ez.sendMessage(r, t, n, i);
            let s = i.nonce ?? (0, es.m)();
            i = { ...i, nonce: s };
            let a = function () {
                return ez._sendMessage(e, t, i);
            };
            return (en.recordMessageSendAttempt(e, s, i), eN.A.isReady(e))
                ? a()
                : n && e !== m.E
                  ? (eH.info(`Waiting for channel ${e} to be ready before sending.`),
                    new Promise((t, n) => {
                        eN.A.whenReady(e, () => {
                            eH.info(`Channel ${e} is ready for sending now.`), a().then(t, n);
                        });
                    }))
                  : a();
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
                r = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
                s =
                    "string" == typeof n
                        ? { content: n, invalidEmojis: [], validNonShortcutEmojis: [], tts: r }
                        : { ...n, tts: n.tts ?? r };
            return ez._sendMessage(e, s, { ...i, stickerIds: t });
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
                        (ej.log("Failed to send greeting"),
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
                    ? ((i = eB.intl.string(eB.t.msFJy8)), (r = "INVALID_ANIMATED_EMOJI_BODY"))
                    : ev.A.canWithPartialContext(L.xBc.USE_EXTERNAL_EMOJIS, { channelId: n })
                      ? ((i = eB.intl.string(eB.t.FzugNl)), (r = "INVALID_EXTERNAL_EMOJI_BODY_UPGRADE"))
                      : ((i = eB.intl.string(eB.t["Q87rI/"])), (r = "INVALID_EXTERNAL_EMOJI_BODY")),
                { errorMessage: i, errorMessageName: r }
            );
        },
        async _sendMessage(e, t, n) {
            let i,
                a = eh(e);
            if (null != a)
                return (
                    eH.info("Converting channel to a private channel"),
                    a.then(
                        (e) => (eH.info("Finished converting channel to a private channel"), ez._sendMessage(e, t, n)),
                    )
                );
            let o = t.content,
                { invalidEmojis: u, validNonShortcutEmojis: c, tts: h = !1 } = t,
                {
                    activityAction: f,
                    location: p,
                    inviteAnalyticsMetadata: m,
                    stickerIds: S,
                    messageReference: v,
                    allowedMentions: R,
                    poll: O,
                    sharedCustomTheme: b,
                    contentInventoryEntry: M,
                    attachments: G,
                    attachmentsToUpload: F,
                    onAttachmentUploadError: V,
                    announcementSendOptions: B,
                    withCheckpoint: j,
                    mediaMention: K,
                } = n,
                $ = n.flags ?? 0,
                [z, Z] = (0, eg.A)(o);
            z && ((o = Z), ($ = (0, s.UI)($, L.pr7.SUPPRESS_NOTIFICATIONS)));
            let X = q.A.getChannel(e),
                Q = ey.A.getGuild(X?.guild_id);
            (0, W.Zv)(Q, X, "_sendMessage") && ($ = (0, s.UI)($, L.pr7.IS_GUILD_OFFICIAL));
            let J = !1,
                ee = n.messageReference?.type === L.SH7.FORWARD;
            if (
                "" === o &&
                null == f &&
                null == S &&
                null == O &&
                null == b &&
                null == M &&
                !ee &&
                (null == G || 0 === G.length) &&
                !j &&
                (null == t.components || 0 === t.components.length)
            )
                if (null == F || !(F.length > 0)) return Promise.resolve();
                else J = !0;
            let et = null != v ? L.lAJ.REPLY : L.lAJ.DEFAULT,
                eo = n.nonce ?? (0, es.m)(),
                ed = (0, er.Ay)({
                    channelId: e,
                    content: o,
                    tts: h,
                    type: et,
                    messageReference: v,
                    allowedMentions: R,
                    flags: 0 !== $ ? $ : void 0,
                    nonce: eo,
                    poll: (0, ec.G8)(O),
                    sharedCustomTheme: b,
                    mediaMention: K,
                });
            if (
                (!1 !== n.eagerDispatch &&
                    ((0, el.iq)(e, ed.id),
                    null != S && (ed.sticker_items = S.map((e) => em.A.getStickerById(e)).filter((e) => null != e)),
                    ez.receiveMessage(e, ed, !0, n)),
                !eY && null != u && u.length > 0)
            ) {
                eY = !0;
                let t = eD.default.getCurrentUser(),
                    { errorMessage: n, errorMessageName: i } = ez.validateMessage(u, t, e);
                ez.sendBotMessage(e, n, i);
            }
            let e_ = {
                type: null != B ? d.AZ.SEND_ANNOUNCEMENT : d.AZ.SEND,
                message: {
                    channelId: e,
                    content: o,
                    nonce: eo,
                    tts: h,
                    message_reference: v,
                    allowed_mentions: R,
                    flags: $,
                    analyticsLocation: p,
                },
            };
            if (
                (null != t.components && (e_.message.components = t.components),
                null != B &&
                    ((e_.message.create_thread = B.createThread),
                    (e_.message.title = B.threadName),
                    (e_.message.publish = B.publish ?? !1)),
                null != f)
            ) {
                let e,
                    t = f?.activity.session_id;
                if (
                    null !=
                    (e =
                        f.type === L.xL.JOIN_REQUEST || f.type === L.xL.STREAM_REQUEST || null != t
                            ? t
                            : eS.default.getSessionId())
                ) {
                    let t = { type: f.type, session_id: e, target_user_id: f.targetUserId },
                        { activity: n } = f;
                    null != n.party && null != n.party.id && (t.party_id = n.party.id),
                        (e_.message.application_id = n.application_id),
                        (e_.message.activity = t);
                }
            }
            if (
                (null != O && (e_.message.poll = O),
                null != b && (e_.message.shared_client_theme = b),
                null != S && (e_.message.sticker_ids = S),
                eu.A.isEnabled() && (e_.message.has_poggermode_enabled = !0),
                j && (e_.message.with_checkpoint = !0),
                null != M && (e_.message.content_inventory_entry = M),
                null != K && (e_.message.media_mention = K),
                null != G && G.length > 0 && (e_.message.attachments = G),
                null != F && F.length > 0)
            )
                try {
                    let t = await Y({
                        channelId: e,
                        nonce: eo,
                        items: F,
                        message: ed,
                        shouldUploadFailureSendNotification: !n.doNotNotifyOnError && void 0,
                    });
                    if (null == t) return;
                    let r = t.attachments;
                    if (((i = t.uploader), J && (null == r || 0 === r.length))) return;
                    null != r && (e_.message.attachments = r.map((e, t) => (0, ek.OW)(e, t)));
                } catch (r) {
                    let { file: e, code: t, reason: n, responseBody: i } = r;
                    ea({ fileItems: e.items, failureCode: t, errorMessage: n?.msg }), V?.(e, t, n, i);
                    return;
                }
            return new Promise((t, s) => {
                let a = Date.now(),
                    u = d.Ay.length,
                    h = Math.floor(1e4 * Math.random());
                eH.info(`Queueing message to be sent LogId:${h}`),
                    d.Ay.enqueue(
                        e_,
                        (f) => {
                            let v = Date.now() - a;
                            if (f.ok) {
                                var R, b, G, V, B, j, Y;
                                let s;
                                ei.donateSentMessage(o, e),
                                    ez.receiveMessage(e, f.body, !0, {
                                        sendAnalytics: { duration: v, queueSize: u },
                                        poll: O,
                                    }),
                                    null != n.alsoForwardToChannelId &&
                                        C.A.sendForward((0, H.rh)(f.body), n.alsoForwardToChannelId)
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
                                                    referencedMessageId: f.body?.id,
                                                    guildId: f.body?.guild_id,
                                                    channelId: f.body?.channel_id,
                                                    destinationChannelId: n.alsoForwardToChannelId,
                                                });
                                            })
                                            .catch((t) => {
                                                ej.log(
                                                    `Failed to forward thread message to parent channel LogId:${h}`,
                                                    {
                                                        referencedMessageId: f.body?.id,
                                                        channelId: e,
                                                        destinationChannelId: n.alsoForwardToChannelId,
                                                        error: t.toString(),
                                                    },
                                                );
                                            });
                                let a = ex.default.cast(e),
                                    d = k.A.getRequest(a);
                                if (null != d) {
                                    let { guildId: t, userId: n, applicationStatus: i } = d;
                                    (0, x.cK)({
                                        guildId: t,
                                        channelId: e,
                                        messageId: f.body.id,
                                        joinRequestStatus: i,
                                        joinRequestUserId: n,
                                    });
                                }
                                en.recordMessageSendApiResponse(eo),
                                    l.h.dispatch({
                                        type: "SLOWMODE_RESET_COOLDOWN",
                                        slowmodeType: eb.R.SendMessage,
                                        channelId: e,
                                    }),
                                    l.h.dispatch({ type: "EMOJI_TRACK_USAGE", emojiUsed: c }),
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
                                            l = eS.default.getId();
                                        (0, T.Ay)(t).forEach((e) => {
                                            let { type: t, code: u, url: c } = e;
                                            if ((0, A.Yf)(t)) {
                                                let e = (0, A.kK)(t, u, c);
                                                if (null == e) return;
                                                let { applicationId: n } = e;
                                                switch (e.type) {
                                                    case I.I.APP_DIRECTORY_PROFILE:
                                                        w(n), (0, E.KL)(u, eG.J.APP_DISCOVERY, l);
                                                        break;
                                                    case I.I.APP_DIRECTORY_STOREFRONT:
                                                        w(n, "storefront");
                                                        break;
                                                    case I.I.APP_DIRECTORY_STOREFRONT_SKU:
                                                        w(n, "storefront_sku");
                                                        break;
                                                    case I.I.ACTIVITY_BOOKMARK: {
                                                        let { params: t } = e;
                                                        (0, E.KL)(n, eG.J.ACTIVITY, t.referrerId ?? l, t.customId);
                                                        break;
                                                    }
                                                    case I.I.APP_OAUTH2_LINK:
                                                        (0, E.KL)(n, eG.J.OAUTH, l),
                                                            _.Ay.trackWithMetadata(
                                                                L.HAw.APP_OAUTH2_LINK_EMBED_URL_SENT,
                                                                { application_id: n },
                                                            );
                                                }
                                            } else
                                                switch (t) {
                                                    case I.I.INVITE:
                                                        eK({
                                                            inviteKey: u,
                                                            channelId: n,
                                                            messageId: i,
                                                            location: s,
                                                            inviteAnalyticsMetadata: a,
                                                            overrideProperties: o,
                                                        });
                                                        break;
                                                    case I.I.TEMPLATE: {
                                                        let e = U.A.getGuildTemplate(u);
                                                        if (null == e || e.state === eF.QB.RESOLVING) return;
                                                        _.Ay.trackWithMetadata(L.HAw.GUILD_TEMPLATE_LINK_SENT, {
                                                            guild_template_code: u,
                                                            guild_template_name: e.name,
                                                            guild_template_description: e.description,
                                                            guild_template_guild_id: e.sourceGuildId,
                                                        });
                                                        break;
                                                    }
                                                    case I.I.BUILD_OVERRIDE:
                                                    case I.I.EXPERIMENT:
                                                    case I.I.MANUAL_BUILD_OVERRIDE:
                                                    case I.I.EVENT:
                                                    case I.I.CHANNEL_LINK:
                                                        break;
                                                    case I.I.EMBEDDED_ACTIVITY_INVITE:
                                                        (0, E.KL)(u, eG.J.ACTIVITY_INVITE, l);
                                                        break;
                                                    case I.I.GUILD_PRODUCT:
                                                    case I.I.SERVER_SHOP:
                                                    case I.I.SOCIAL_LAYER_STOREFRONT:
                                                    case I.I.SOCIAL_LAYER_STOREFRONT_APP:
                                                        break;
                                                    case I.I.QUESTS_EMBED: {
                                                        let e = (0, ep.L4)(r.u.QUESTS_EMBED);
                                                        (0, ef.av)({
                                                            questId: u,
                                                            event: L.HAw.QUEST_LINK_SHARED,
                                                            properties: { metadata_sealed: null != e ? e : null },
                                                            trackGuildAndChannelMetadata: !0,
                                                            sourceQuestContent: r.u.QUESTS_EMBED,
                                                        });
                                                        break;
                                                    }
                                                    case I.I.GAME_PROFILE:
                                                        if (!N.A.getConfig({ location: "trackCodedLinks" }).enabled)
                                                            break;
                                                        D.default.track(L.HAw.GAME_PROFILE_LINK_EMBED_SENT, {
                                                            game_id: u,
                                                        });
                                                        break;
                                                    case I.I.COLLECTIBLES_SHOP:
                                                        break;
                                                    default:
                                                        throw Error(`Unknown coded link type: ${t}`);
                                                }
                                        });
                                    })({
                                        content: o,
                                        channelId: e,
                                        messageId: f.body.id,
                                        location: p ?? "chat_input",
                                        inviteAnalyticsMetadata: m,
                                    }),
                                    (R = o),
                                    (b = f.body.id),
                                    (G = p ?? "chat_input"),
                                    (V = !!n.isGiftLinkSentOnBehalfOfUser),
                                    (0, ew.e7)(R).forEach((t) => {
                                        let n = q.A.getChannel(e);
                                        null != n &&
                                            _.Ay.trackWithMetadata(L.HAw.GIFT_CODE_SENT, {
                                                location: G,
                                                gift_code: t,
                                                guild_id: n.getGuildId(),
                                                channel_id: n.id,
                                                channel_type: n.type,
                                                message_id: b,
                                                automatic_send: V,
                                            });
                                    }),
                                    null != n.gifMetadata &&
                                        ((B = n.gifMetadata),
                                        (j = f.body.id),
                                        (Y = p ?? "chat_input"),
                                        null != (s = q.A.getChannel(e)) &&
                                            D.default.track(L.HAw.MESSAGE_SENT_WITH_GIF, {
                                                location: Y,
                                                message_id: j,
                                                gif_provider: B.gif_provider,
                                                load_id: B.load_id,
                                                source_object: B.source_object,
                                                gif_url: B.gif_url,
                                                gif_id: B.gif_id,
                                                ...(0, _.H$)(s.getGuildId()),
                                                ...(0, _.dI)(s),
                                            })),
                                    (function (e) {
                                        let { channelId: t, messageId: n, attachments: i, attachmentsToUpload: r } = e;
                                        if (i.length !== r.length) return;
                                        let s = q.A.getChannel(t);
                                        null != s &&
                                            r.forEach((e, r) => {
                                                let { clip: a } = e;
                                                null != a &&
                                                    D.default.track(L.HAw.CLIP_SHARED, {
                                                        ...g.Zy(a),
                                                        ...g.lc("trackClipsShared"),
                                                        channel_id: t,
                                                        guild_id: s.getGuildId(),
                                                        channel_type: s.type,
                                                        application_id: a.applicationId,
                                                        clip_uuid: a.id,
                                                        remote_clip_id: a.remoteClipId,
                                                        message_id: n,
                                                        attachment_id: i[r].id,
                                                    });
                                            });
                                    })({
                                        channelId: e,
                                        messageId: f.body.id,
                                        attachments: f.body.attachments ?? [],
                                        attachmentsToUpload: F ?? [],
                                    }),
                                    null != i &&
                                        l.h.dispatch({
                                            type: "UPLOAD_COMPLETE",
                                            channelId: e,
                                            file: i._file,
                                            aborted: !1,
                                        }),
                                    t(f);
                            } else {
                                let t;
                                ej.log("Failed to send message", {
                                    hasErr: f.hasErr,
                                    status: f.status,
                                    code: f.body?.code,
                                    error: f.err,
                                });
                                let r = !1;
                                if (f.hasErr) "ABORTED" === f.err.code && (r = !0);
                                else if (f.status >= 400 && f.status < 500 && f.body)
                                    if (f.body.code === L.t02.SLOWMODE_RATE_LIMITED) {
                                        let t = f.body.retry_after;
                                        null != t &&
                                            t > 0 &&
                                            l.h.dispatch({
                                                type: "SLOWMODE_SET_COOLDOWN",
                                                channelId: e,
                                                slowmodeType: eb.R.SendMessage,
                                                cooldownMs: t * eL.A.Millis.SECOND,
                                            });
                                    } else
                                        P.yf.has(f.body.code)
                                            ? l.h.dispatch({
                                                  type: "MESSAGE_SEND_FAILED_AUTOMOD",
                                                  messageData: e_,
                                                  errorResponseBody: { code: f.body.code, message: f.body.message },
                                              })
                                            : f.body.code === L.t02.POGGERMODE_TEMPORARILY_DISABLED
                                              ? l.h.dispatch({ type: "POGGERMODE_TEMPORARILY_DISABLED" })
                                              : f.body.code === L.t02.EXPLICIT_CONTENT
                                                ? (t = eV.ty.EXPLICIT_CONTENT)
                                                : null != O || ee || null != M || ez.sendClydeError(e, f.body.code);
                                r
                                    ? ez.deleteMessage(e, eo, !0)
                                    : (null != i &&
                                          l.h.dispatch({
                                              type: "UPLOAD_FAIL",
                                              channelId: e,
                                              file: i._file,
                                              messageId: eo,
                                              reason: t,
                                              noSendFailed: !0,
                                          }),
                                      f.hasErr ||
                                          t !== eV.ty.EXPLICIT_CONTENT ||
                                          ez.sendExplicitMediaClydeError(
                                              e,
                                              f.body?.attachments,
                                              y.SW.EXPLICIT_MEDIA_MESSAGE_SEND_BLOCKED,
                                          ),
                                      l.h.dispatch({
                                          type: "MESSAGE_SEND_FAILED",
                                          messageId: eo,
                                          channelId: e,
                                          shouldNotify: !n.doNotNotifyOnError,
                                          reason: t,
                                      }),
                                      ea({
                                          failureCode: f.hasErr ? void 0 : f.status,
                                          errorMessage: f.hasErr ? f.err.message : void 0,
                                      }),
                                      d.Ay.cancelPendingSendRequests(e).forEach((e) => {
                                          ej.log("Cancelling pending message", e.nonce),
                                              l.h.dispatch({
                                                  type: "MESSAGE_SEND_FAILED",
                                                  messageId: e.nonce,
                                                  channelId: e.channelId,
                                              });
                                      })),
                                    s(f);
                            }
                        },
                        h,
                    );
            });
        },
        startEditMessage(e, t, n, i) {
            l.h.dispatch({ type: "MESSAGE_START_EDIT", channelId: e, messageId: t, content: n, source: i });
        },
        startEditMessageRecord(e, t, n) {
            if ((0, s.Lt)(t.flags, L.pr7.IS_COMPONENTS_V2)) {
                let i = t.components.filter((e) => e.type === u.I5.TEXT_DISPLAY);
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
                    let n = eN.A.getMessage(e, t);
                    if (null == n || n.type !== L.lAJ.REPLY) return;
                    let i = eE.A.getMessageByReference(n.messageReference);
                    if (i.state === eE.a.LOADED && !n.mentions.includes(i.message.author.id))
                        return { parse: Object.values(L.uw8), replied_user: !1 };
                })(e, t),
                u = null != (i = eN.A.getMessage(e, t)) && i.hasFlag(L.pr7.CROSSPOSTED),
                c = { channelId: e, messageId: t, content: r, isCrossposted: u, allowed_mentions: a, components: s };
            d.Ay.enqueue({ type: d.AZ.EDIT, message: c }, (n) => {
                let i = !n.hasErr && P.yf.has(n.body.code);
                if (i) {
                    let e = { type: d.AZ.EDIT, message: c };
                    l.h.dispatch({
                        type: "MESSAGE_EDIT_FAILED_AUTOMOD",
                        messageData: e,
                        errorResponseBody: { code: n.body.code, message: n.body.message },
                    });
                }
                n.hasErr
                    ? o.O.announce(eB.intl.string(eB.t.Atp7FP))
                    : i
                      ? o.O.announce(eB.intl.string(eB.t.Hym4ix))
                      : o.O.announce(eB.intl.string(eB.t["0x1HBD"])),
                    ez.endEditMessage(e, n.hasErr ? void 0 : n),
                    ez.focusMessage({ channelId: e, messageId: t });
            });
        },
        async suppressEmbeds(e, t) {
            await eA.A.unarchiveThreadIfNecessary(e);
            let n = eN.A.getMessage(e, t);
            null != n &&
                a.Bo.patch({
                    url: L.Rsh.MESSAGE(e, t),
                    body: { flags: (0, s.lA)(n.flags, L.pr7.SUPPRESS_EMBEDS, !0) },
                    oldFormErrors: !0,
                    rejectWithError: !1,
                });
        },
        async patchMessageGuildOfficial(e, t, n) {
            await eA.A.unarchiveThreadIfNecessary(e);
            let i = eN.A.getMessage(e, t);
            null != i &&
                a.Bo.patch({
                    url: L.Rsh.MESSAGE(e, t),
                    body: { flags: (0, s.lA)(i.flags, L.pr7.IS_GUILD_OFFICIAL, n) },
                    oldFormErrors: !0,
                    rejectWithError: !1,
                });
        },
        async patchMessageAttachments(e, t, n) {
            await eA.A.unarchiveThreadIfNecessary(e),
                a.Bo.patch({
                    url: L.Rsh.MESSAGE(e, t),
                    body: { attachments: n },
                    oldFormErrors: !0,
                    rejectWithError: !1,
                });
        },
        async deleteMessage(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            function i() {
                l.h.dispatch({ type: "MESSAGE_DELETE", id: t, channelId: e }).then(() => {
                    o.O.announce(eB.intl.string(eB.t.RYMs7s));
                });
            }
            n
                ? i()
                : (await eA.A.unarchiveThreadIfNecessary(e),
                  a.Bo.del({ url: L.Rsh.MESSAGE(e, t), oldFormErrors: !0, rejectWithError: !1 }).then(() => {
                      i();
                  }));
        },
        dismissAutomatedMessage(e) {
            null != e.loggingName &&
                _.Ay.trackWithMetadata(L.HAw.AUTOMATED_MESSAGE_DISMISSED, {
                    message_name: e.loggingName,
                    message_author: e.author.username,
                }),
                (0, ed.np)(e.channel_id, e.id),
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
                        ? eB.intl.formatToPlainString(eB.t["77cuqz"], {
                              retryAfter: Math.floor(t.body.retry_after / 60),
                          })
                        : eB.intl.string(eB.t.z2gyNF)),
                    eU.A.show({
                        title: eB.intl.string(eB.t.Vd1hs6),
                        body: e,
                        confirmText: eB.intl.string(eB.t.BddRzS),
                    });
            }
        },
        trackInvite: eK,
    },
    eq = ez;
