"use strict";
n.d(t, { A: () => e$ }), n(801541), n(938796);
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
    g = n(892768),
    A = n(167189),
    I = n(833291),
    T = n(626584),
    S = n(390248),
    y = n(885918),
    N = n(587626),
    v = n(607399),
    C = n(309010),
    R = n(967198),
    O = n(174459),
    b = n(652215);
function D(e, t) {
    O.default.track(b.HAw.APP_DIRECTORY_PROFILE_EMBED_SENT, {
        application_id: e,
        device_platform: v.Fr ? "mobile_web" : "desktop_web",
        guild_id: R.A.getGuildId(),
        channel_id: C.A.getChannelId(),
        section: t,
    });
}
var L = n(834757),
    w = n(753738),
    M = n(51271),
    P = n(844944),
    x = n(122906),
    k = n(842241),
    U = n(346542),
    G = n(279208),
    F = n(917878),
    V = n(395780),
    B = n(320095);
async function H(e) {
    let { channelId: t, message: n, items: i, shouldUploadFailureSendNotification: r } = e,
        s = new V.A(),
        a = (0, B.rh)({ ...n, id: s._file.id });
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
let j = (0, n(945810).mj)({
    kind: "user",
    name: "2026-02-dm-error-message",
    defaultConfig: { enabled: !1 },
    variations: { 1: { enabled: !0 } },
});
var Y = n(521427),
    W = n(17928),
    K = n(69114),
    $ = n(322683),
    z = n(734057),
    q = n(498642),
    X = n(544180);
let Z = new T.A("MessageRoundtripTrackerStore");
function Q(e) {
    return null != e.apiResponseTimestamp && null != e.gatewaySeenTimestamp;
}
function J(e) {
    let t = z.A.getBasicChannel(e.channelId);
    if (null == t)
        return void Z.warn(`Ignoring a messageData for channel ${e.channelId} because we can't find that channel.`);
    if (Math.random() > 0.1) return;
    let n = null == e.apiResponseTimestamp ? null : e.apiResponseTimestamp - e.initialSendTimestamp,
        i = null == e.gatewaySeenTimestamp ? null : e.gatewaySeenTimestamp - e.initialSendTimestamp,
        r = (0, $.O)();
    O.default.track(b.HAw.SEND_MESSAGE_ROUNDTRIP, {
        ...(0, K.A)(),
        api_latency_ms: n,
        gateway_latency_ms: i,
        channel_id: t.id,
        channel_type: t.type,
        guild_id: t.guild_id,
        guild_size: q.A.getMemberCount(t.guild_id),
        mobile_network_type: X.A.getType(),
        num_attachments: e.attachmentCount,
        ...(null != r && { mobile_signal_strength_level: r }),
    });
}
class ee extends W.Ay.Store {
    initialize() {
        this.waitFor(z.A, q.A, X.A);
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
let et = new ee(l.h, {
        MESSAGE_CREATE: function (e) {
            let { optimistic: t, message: n } = e,
                i = n.nonce;
            t || null == i || et.recordGatewayResponse(i);
        },
    }),
    en = { init() {}, donateSentMessage(e, t) {}, deleteAllInteractions() {} };
var ei = n(963852),
    er = n(195880);
function es(e) {
    let t = null != e.fileItems ? e.fileItems.map((e) => e.mimeType ?? "unknown") : [],
        n = e.errorMessage ?? void 0,
        i = e.failureCode ?? void 0;
    (0, _.zV)(b.HAw.SEND_MESSAGE_FAILURE, { failure_code: i, error_message: n, attachment_mimetypes: t });
}
var ea = n(491001),
    eo = n(512599),
    el = n(3137),
    eu = n(969632),
    ec = n(308528);
function ed(e) {
    if (e !== m.E) return null;
    let t = z.A.getChannel(e);
    return null == t ? null : ec.A.ensurePrivateChannel(t.recipients);
}
var e_ = n(561844),
    eh = n(710969);
n(853145);
var ef = n(9842),
    ep = n(750385),
    eE = n(677413),
    em = n(867455),
    eg = n(464578),
    eA = n(616356),
    eI = n(495544);
n(580745);
var eT = n(71393),
    eS = n(299091),
    ey = n(232835),
    eN = n(576705),
    ev = n(290863),
    eC = n(222823),
    eR = n(101392),
    eO = n(287809),
    eb = n(927813),
    eD = n(45938),
    eL = n(975571),
    ew = n(428262),
    eM = n(935208),
    eP = n(292348),
    ex = n(157559),
    ek = n(768349),
    eU = n(401755),
    eG = n(381941),
    eF = n(375708);
let eV = new T.A("MessageActionCreators"),
    eB = new T.A("MessageQueue"),
    eH = !1;
class ej {
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
        o = eI.default.getId(),
        l = eS.A.getInvite(t),
        u = (0, k.y$)(t),
        c = null != l && (0, U.oK)(l),
        d = l?.target_application?.id;
    null != d && c && (0, E.KL)(d, ek.J.ACTIVITY_INVITE, o);
    let h = z.A.getChannel(n);
    if (null != h) {
        let e = null;
        h.isMultiUserDM() ? (e = b.G2g.GDM_INVITE) : h.isPrivate() || (e = b.G2g.SERVER_INVITE);
        let t = {};
        if (null != l && l.state === b.elq.RESOLVED && null != l.channel) {
            let n = l.channel;
            (t.invite_channel_id = n.id),
                (t.invite_guild_id = l.guild?.id),
                (t.invite_channel_type = n.type),
                null != l.inviter && (t.invite_inviter_id = l.inviter.id),
                null != l.target_application && (t.application_id = l.target_application.id);
            let i = eA.A.getLastActiveStream();
            if (null != i && i.channelId === n.id) {
                (e = b.G2g.STREAM), (t.destination_user_id = i.ownerId);
                let n = (0, L.Ee)(i, ev.A);
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
                send_type: b.gfq.DIRECT_MESSAGE,
                invite_guild_scheduled_event_id: u.guildScheduledEventId,
                invite_instance_id: (0, k._U)(u.baseCode, i) ?? null,
                ...a,
            }),
            _.Ay.trackWithMetadata(b.HAw.INVITE_SENT, t);
    } else {
        let e = {};
        null != l &&
            l.state === b.elq.RESOLVED &&
            null != l.inviter &&
            ((e.invite_inviter_id = l.inviter.id),
            null != l.target_application && (e.application_id = l.target_application.id),
            (e = {
                ...e,
                location: r,
                invite_type: b.G2g.FRIEND_INVITE,
                invite_code: u.baseCode,
                message_id: i,
                send_type: b.gfq.DIRECT_MESSAGE,
                invite_guild_scheduled_event_id: u.guildScheduledEventId,
                invite_instance_id: (0, k._U)(u.baseCode, i) ?? null,
                ...a,
            }),
            _.Ay.trackWithMetadata(b.HAw.INVITE_SENT, e));
    }
}
let eW = {
        [b.t02.SLOWMODE_RATE_LIMITED]: {
            messageName: "SLOWMODE_RATE_LIMITED",
            messageGetter: (e) => eF.intl.formatToPlainString(eF.t.IWntYg, { seconds: e.rateLimitPerUser }),
        },
        [b.t02.INVALID_MESSAGE_SEND_NO_MUTUAL_GUILDS]: {
            messageName: "INVALID_MESSAGE_SEND_NO_MUTUAL_GUILDS",
            messageGetter: (e) => {
                let t = eL.A.getArticleURL(b.MVz.DM_COULD_NOT_BE_DELIVERED),
                    n = e.rawRecipients ?? [];
                if (e.isDM() && 1 === n.length && n.some((e) => e.bot))
                    return eF.intl.formatToPlainString(eF.t.SkGL7l, { helpUrl: t });
                let { enabled: i } = j.getConfig({ location: "sendClydeError" });
                return i
                    ? eF.intl.formatToPlainString(eF.t.llTkqr, { helpUrl: t })
                    : eF.intl.formatToPlainString(eF.t.SkGL7l, { helpUrl: t });
            },
        },
        [b.t02.INVALID_MESSAGE_SEND_USER]: {
            messageName: "INVALID_MESSAGE_SEND_USER",
            messageGetter: () =>
                eF.intl.formatToPlainString(eF.t.SkGL7l, {
                    helpUrl: eL.A.getArticleURL(b.MVz.DM_COULD_NOT_BE_DELIVERED),
                }),
        },
        [b.t02.TOO_MANY_THREADS]: {
            messageName: "TOO_MANY_THREADS",
            messageGetter: (e) =>
                e.isForumLikeChannel() || e.isForumPost()
                    ? eF.intl.string(eF.t["/jUd2+"])
                    : eF.intl.string(eF.t["5EMPA7"]),
        },
        [b.t02.TOO_MANY_ANNOUNCEMENT_THREADS]: {
            messageName: "TOO_MANY_ANNOUNCEMENT_THREADS",
            messageGetter: () => eF.intl.string(eF.t["aY+lLC"]),
        },
        [b.t02.HARMFUL_LINK_MESSAGE_BLOCKED]: {
            messageName: "HARMFUL_LINK_MESSAGE_BLOCKED",
            messageGetter: () => eF.intl.formatToPlainString(eF.t.zSG3Qy, { helpUrl: b.X7G.HARMFUL_LINKS }),
        },
        [b.t02.HARMFUL_URL_BLOCKED]: {
            messageName: "HARMFUL_URL_BLOCKED",
            messageGetter: () => eF.intl.string(eF.t.WxX2Fd),
        },
        [b.t02.EMAIL_VERIFICATION_REQUIRED]: {
            messageName: "BOT_REQUIRES_EMAIL_VERIFICATION",
            messageGetter: () => eF.intl.string(eF.t.k1Cjqr),
        },
        [b.t02.GUILD_MESSAGE_UPDATE_RATE_LIMIT_EXCEEDED]: {
            messageName: "GUILD_MESSAGE_UPDATE_RATE_LIMIT_EXCEEDED",
            messageGetter: () => eF.intl.string(eF.t.Z5SUuv),
        },
        [b.t02.RATE_LIMIT_DM_OPEN]: {
            messageName: "BOT_DM_RATE_LIMITED",
            messageGetter: () => eF.intl.string(eF.t.E8nbNb),
        },
        [b.t02.SEND_MESSAGE_TEMPORARILY_DISABLED]: {
            messageName: "BOT_DM_SEND_MESSAGE_TEMPORARILY_DISABLED",
            messageGetter: () => eF.intl.string(eF.t.aRUbah),
        },
        [b.t02.INVALID_MESSAGE_SEND_GAME_FRIEND_DM]: {
            messageName: "BOT_DM_SEND_MESSAGE_INVALID_FOR_GAME_FRIEND",
            messageGetter: () => eF.intl.string(eF.t["/meGhR"]),
        },
        [b.t02.INVALID_MESSAGE_SEND_PROVISIONAL_ACCOUNT_OFFLINE]: {
            messageName: "BOT_DM_SEND_MESSAGE_INVALID_OFFLINE_PROVISIONAL_ACCOUNT",
            messageGetter: () => eF.intl.string(eF.t.Oc1Zjw),
        },
        [b.t02.TOTAL_ATTACHMENT_SIZE_TOO_LARGE]: {
            messageName: "TOTAL_ATTACHMENT_SIZE_TOO_LARGE",
            messageGetter: () => eF.intl.formatToPlainString(eF.t.DYFPg2, { maxSizeMb: eP.YK }),
        },
        [b.t02.CLOUD_UPLOAD_NOT_FOUND]: {
            messageName: "CLOUD_UPLOAD_NOT_FOUND",
            messageGetter: () => eF.intl.string(eF.t.bQldfH),
        },
        [b.t02.INVALID_PERMISSIONS]: {
            messageName: "INVALID_PERMISSIONS",
            messageGetter: () => eF.intl.string(eF.t.zl4Weq),
        },
    },
    eK = {
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
                _.Ay.trackWithMetadata(b.HAw.AUTOMATED_MESSAGE_RECEIVED, { message_author: "Clyde", message_name: n }),
                eK.receiveMessage(e, (0, ei.pO)({ messageId: i, channelId: e, content: t, loggingName: n }));
        },
        sendNitroSystemMessage(e, t, n) {
            let i = (0, ei.Ay)({
                channelId: e,
                nonce: n,
                type: b.lAJ.NITRO_NOTIFICATION,
                content: t,
                flags: b.pr7.EPHEMERAL,
                author: { id: b.oIV, username: "Nitro Notification", discriminator: b.h3J, avatar: "nitro", bot: !0 },
            });
            eK.receiveMessage(e, { ...i, state: b.cmJ.SENT, channel_id: e }, !0);
        },
        sendGiftingPromptSystemMessage(e, t) {
            let n = (0, ei.Ay)({
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
            eK.receiveMessage(e, { ...n, state: b.cmJ.SENT }, !0);
        },
        sendGuildBoostUpsellSystemMessage(e, t) {
            let n = (0, ei.Ay)({
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
            eK.receiveMessage(e, { ...n, state: b.cmJ.SENT }, !0);
        },
        sendClydeError(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                n = z.A.getChannel(e);
            if (null == n) return;
            let i = eW[t];
            null == i
                ? eK.sendBotMessage(
                      e,
                      eF.intl.formatToPlainString(eF.t.SkGL7l, {
                          helpUrl: eL.A.getArticleURL(b.MVz.DM_COULD_NOT_BE_DELIVERED),
                      }),
                      `SEND_FAILED (${t})`,
                  )
                : eK.sendBotMessage(e, i.messageGetter(n), i.messageName);
        },
        sendExplicitMediaClydeError(e, t, n) {
            let r = z.A.getChannel(e);
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
                o = (0, er.m)();
            eK.sendBotMessage(e, s, a, o),
                (0, S.hv)({
                    action: S.rY.EXPLICIT_MEDIA_FALSE_POSITIVE_CLYDE_MESSAGE_SENT,
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
            eK.trackJump(e, null, "Present");
            let n = { present: !0 };
            ey.A.hasPresent(e)
                ? l.h.dispatch({ type: "LOAD_MESSAGES_SUCCESS_CACHED", jump: n, channelId: e, limit: t })
                : eK.fetchMessages({ channelId: e, limit: t, jump: n });
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
                context: s,
                extraProperties: a = null,
                isPreload: o,
                returnMessageId: l,
                skipLocalFetch: u,
                jumpType: c,
                avoidInitialScroll: d,
            } = e;
            return (
                "string" == typeof s && eK.trackJump(t, n, s, a),
                eK.fetchMessages({
                    channelId: t,
                    limit: b.d7Q,
                    jump: { messageId: n, flash: i, offset: r, returnMessageId: l, jumpType: c },
                    isPreload: o,
                    skipLocalFetch: u,
                    avoidInitialScroll: d,
                })
            );
        },
        focusMessage(e) {
            let { channelId: t, messageId: n } = e;
            eK.fetchMessages({ channelId: t, limit: b.d7Q, focus: { messageId: n } });
        },
        async fetchMessage(e) {
            let { channelId: t, messageId: n } = e,
                i = await a.Bo.get({
                    url: b.Rsh.MESSAGES(t),
                    query: { limit: 1, around: n },
                    retries: 2,
                    oldFormErrors: !0,
                    rejectWithError: !1,
                });
            if (i.body.length > 0) return (0, B.rh)(i.body[0]);
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
                g = z.A.getChannel(t),
                A = N.A.isConnectedOrOverlay(),
                I = Date.now();
            if (null != g && g.type === b.rbe.GUILD_STORE) return !1;
            if (
                t === m.E ||
                (eV.log(`Fetching messages for ${t} between ${i} and ${n}. jump=${JSON.stringify(s)}`),
                eK._tryFetchMessagesCached({
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
            eg.A.fetchMessages.recordStart(), F.A.recordChannelFetchStart(t, E ?? I, n, i, r);
            let T = s ?? void 0;
            null == T && null != o && (T = { ...o });
            let S = c.A.getOrCreate(t).loadStart(T);
            c.A.commit(S), l.h.dispatch({ type: "LOAD_MESSAGES" });
            let y = T?.messageId,
                v = new ej();
            return (
                d || this.fetchLocalMessages(t, E ?? I, n, i, r, v),
                a.Bo.get({
                    url: b.Rsh.MESSAGES(t),
                    query: { before: n, after: i, limit: r, around: y, preload: u, feature: p },
                    retries: 2,
                    oldFormErrors: !0,
                    rejectWithError: !1,
                }).then(
                    (e) => (
                        eg.A.fetchMessages.recordEnd(),
                        eg.A.dispatchMessages.measure(() => {
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
                                        .sort(eM.default.compare)
                                        .indexOf(y);
                                if ((i < n - 1 && (d = !1), a.length - i < e && (p = !1), p && a.length > 0)) {
                                    let e = eC.Ay.lastMessageId(t);
                                    a[0].id === e && (p = !1);
                                }
                            }
                            eV.log(`Fetched ${a.length} messages for ${t} isBefore:${o} isAfter:${u}`),
                                v.markComplete(),
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
                                    isStale: !A || N.A.lastTimeConnectedChanged() >= I,
                                    truncate: _,
                                    avoidInitialScroll: f,
                                }),
                                F.A.recordChannelFetchedNetwork(t, E ?? I, n, i, r, a);
                        }),
                        !0
                    ),
                    () => (
                        eV.log(`Failed to fetch messages for ${t}`),
                        l.h.dispatch({ type: "LOAD_MESSAGES_FAILURE", channelId: t }),
                        !1
                    ),
                )
            );
        },
        async fetchLocalMessages(e, t, n, i, r, s) {
            let a = z.A.getBasicChannel(e),
                o = c.A.getOrCreate(e),
                u = h.A.database();
            if (null == u || null == a || null != n || null != i) return void eg.A.addLocalMessages(e, -1);
            if (o.ready && !o.cached) return void eg.A.addLocalMessages(e, -2);
            let d = await (0, f.kk)(() => p.Ay.load(u, e, r));
            if (null == d) return void eg.A.addLocalMessages(e, -3);
            if (
                (eV.log(
                    `fetched ${d.messages.length} messages from local database (channel_id: ${e}, remote_fetch_completed: ${s.completed})`,
                ),
                eg.A.addLocalMessages(e, d.messages.length),
                !s.completed && d.messages.length > 0)
            ) {
                let s = d.messages.length >= r && d.connectionId === N.A.lastTimeConnectedChanged();
                F.A.recordChannelFetchedLocal(e, t, n, i, r, d.messages),
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
            let n = z.A.getBasicChannel(e),
                i = h.A.database();
            if (null == i || null == n) return;
            let r = c.A.getOrCreate(e);
            if (r.hasMoreAfter) return;
            let s = await (0, f.kk)(() => p.Ay.load(i, e, t));
            if (null == s) return;
            r = c.A.getOrCreate(e);
            let a = r.last()?.id,
                o = null == a ? s.messages : s.messages.filter((e) => eM.default.compare(e.id, a) > 0);
            eV.log(`Fetched ${s.messages.length} messages from the cache after foregrounding. ${o.length} are new`),
                0 !== o.length &&
                    l.h.dispatch({
                        type: "LOCAL_MESSAGES_LOADED",
                        guildId: n.guild_id,
                        channelId: e,
                        users: s.users,
                        members: s.members,
                        messages: o,
                        stale: !0,
                        isForegroundCacheLoad: (0, ea.K)(),
                    });
        },
        _tryFetchMessagesCached(e) {
            let { channelId: t, before: n, after: i, limit: r, jump: s, focus: a, truncate: o } = e,
                u = ey.A.getMessages(t);
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
                let e = s?.messageId != null ? eM.default.extractTimestamp(s?.messageId) : 0,
                    n = u.first(),
                    i = u.last();
                if (
                    (!u.hasMoreBefore && null != n && eM.default.extractTimestamp(n.id) >= e) ||
                    (!u.hasMoreAfter && null != i && eM.default.extractTimestamp(i.id) <= e) ||
                    (null != n &&
                        null != i &&
                        eM.default.extractTimestamp(n.id) < e &&
                        eM.default.extractTimestamp(i.id) > e)
                )
                    return (
                        l.h.dispatch({ type: "LOAD_MESSAGES_SUCCESS_CACHED", channelId: t, jump: s, limit: b.d7Q }), !0
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
            let r = await ed(e);
            if (null != r) return eK.sendMessage(r, t, n, i);
            let s = i.nonce ?? (0, er.m)();
            return (
                (i = { ...i, nonce: s }),
                (et.recordMessageSendAttempt(e, s, i), ey.A.isReady(e))
                    ? eK._sendMessage(e, t, i)
                    : n && e !== m.E
                      ? (eB.info(`Waiting for channel ${e} to be ready before sending.`),
                        new Promise((n, r) => {
                            ey.A.whenReady(e, () => {
                                eB.info(`Channel ${e} is ready for sending now.`), eK._sendMessage(e, t, i).then(n, r);
                            });
                        }))
                      : eK._sendMessage(e, t, i)
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
            let t = eK.getSendMessageOptionsForReply(e.pendingReply),
                n = eK.getSendMessageOptionsForStickers({ ...e }),
                i = eK.getSendMessageOptionsForScheduledMessage({ ...e }),
                r = eK.getSendMessageOptionsForAlsoForwardToChannel({ ...e });
            return { ...t, ...n, ...i, ...r };
        },
        sendInvite(e, t, n, i, r) {
            let s = (0, G.A)(t);
            return (
                null != r &&
                    (s = `${r}
${s}`),
                eK._sendMessage(
                    e,
                    { content: s, tts: !1, validNonShortcutEmojis: [], invalidEmojis: [] },
                    { location: n, inviteAnalyticsMetadata: i },
                )
            );
        },
        sendActivityBookmark: (e, t, n, i) =>
            eK._sendMessage(
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
            return eK._sendMessage(e, s, { ...i, stickerIds: t });
        },
        sendGreetMessage(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                { messageReference: i, allowedMentions: r } = n;
            return a.Bo.post({
                url: b.Rsh.MESSAGES_GREET(e),
                body: { sticker_ids: [t], allowed_mentions: r, message_reference: i },
                oldFormErrors: !0,
                rejectWithError: !1,
                context: { location: eG.Hx.GREET },
            }).then(
                (n) => (
                    en.donateSentMessage(n.body.content, e),
                    eK.receiveMessage(e, n.body),
                    l.h.dispatch({ type: "STICKER_TRACK_USAGE", stickerIds: [t] }),
                    n
                ),
                (t) => {
                    throw (
                        (eV.log("Failed to send greeting"),
                        429 !== t.status && eK.sendClydeError(e, t.body.code),
                        l.h.dispatch({ type: "MESSAGE_SEND_FAILED", messageId: t.body.id, channelId: e }),
                        t)
                    );
                },
            );
        },
        sendPollMessage(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            return eK._sendMessage(
                e,
                { content: "", tts: !1, validNonShortcutEmojis: [], invalidEmojis: [] },
                { ...n, poll: t, location: eG.Hx.POLL_CREATION },
            );
        },
        validateMessage(e, t, n) {
            let i, r;
            return (
                e.some((e) => e.animated) && !ew.Ay.canUseAnimatedEmojis(t)
                    ? ((i = eF.intl.string(eF.t.msFJy8)), (r = "INVALID_ANIMATED_EMOJI_BODY"))
                    : eN.A.canWithPartialContext(b.xBc.USE_EXTERNAL_EMOJIS, { channelId: n })
                      ? ((i = eF.intl.string(eF.t.FzugNl)), (r = "INVALID_EXTERNAL_EMOJI_BODY_UPGRADE"))
                      : ((i = eF.intl.string(eF.t["Q87rI/"])), (r = "INVALID_EXTERNAL_EMOJI_BODY")),
                { errorMessage: i, errorMessageName: r }
            );
        },
        async _sendMessage(e, t, n) {
            let i,
                a = ed(e);
            if (null != a)
                return (
                    eB.info("Converting channel to a private channel"),
                    a.then(
                        (e) => (eB.info("Finished converting channel to a private channel"), eK._sendMessage(e, t, n)),
                    )
                );
            let o = t.content,
                { invalidEmojis: u, validNonShortcutEmojis: c, tts: h = !1 } = t,
                {
                    activityAction: f,
                    location: p,
                    inviteAnalyticsMetadata: m,
                    stickerIds: T,
                    messageReference: N,
                    allowedMentions: v,
                    poll: C,
                    sharedCustomTheme: R,
                    contentInventoryEntry: L,
                    attachments: k,
                    attachmentsToUpload: U,
                    onAttachmentUploadError: G,
                    announcementSendOptions: F,
                    withCheckpoint: V,
                    mediaMention: j,
                } = n,
                W = n.flags ?? 0,
                [K, $] = (0, eE.A)(o);
            K && ((o = $), (W = (0, s.UI)(W, b.pr7.SUPPRESS_NOTIFICATIONS)));
            let q = z.A.getChannel(e),
                X = eT.A.getGuild(q?.guild_id);
            (0, Y.Qz)(X, q, "_sendMessage") && (W = (0, s.UI)(W, b.pr7.IS_GUILD_OFFICIAL));
            let Z = !1,
                Q = n.messageReference?.type === b.SH7.FORWARD;
            if (
                "" === o &&
                null == f &&
                null == T &&
                null == C &&
                null == R &&
                null == L &&
                !Q &&
                (null == k || 0 === k.length) &&
                !V &&
                (null == t.components || 0 === t.components.length)
            )
                if (null == U || !(U.length > 0)) return Promise.resolve();
                else Z = !0;
            let J = null != N ? b.lAJ.REPLY : b.lAJ.DEFAULT,
                ee = n.nonce ?? (0, er.m)(),
                ea = (0, ei.Ay)({
                    channelId: e,
                    content: o,
                    tts: h,
                    type: J,
                    messageReference: N,
                    allowedMentions: v,
                    flags: 0 !== W ? W : void 0,
                    nonce: ee,
                    poll: (0, eu.G8)(C),
                    sharedCustomTheme: R,
                    mediaMention: j,
                });
            if (
                (!1 !== n.eagerDispatch &&
                    ((0, eo.iq)(e, ea.id),
                    null != T && (ea.sticker_items = T.map((e) => ep.A.getStickerById(e)).filter((e) => null != e)),
                    eK.receiveMessage(e, ea, !0, n)),
                !eH && null != u && u.length > 0)
            ) {
                eH = !0;
                let t = eO.default.getCurrentUser(),
                    { errorMessage: n, errorMessageName: i } = eK.validateMessage(u, t, e);
                eK.sendBotMessage(e, n, i);
            }
            let ec = {
                type: null != F ? d.AZ.SEND_ANNOUNCEMENT : d.AZ.SEND,
                message: {
                    channelId: e,
                    content: o,
                    nonce: ee,
                    tts: h,
                    message_reference: N,
                    allowed_mentions: v,
                    flags: W,
                    analyticsLocation: p,
                },
            };
            if (
                (null != t.components && (ec.message.components = t.components),
                null != F &&
                    ((ec.message.create_thread = F.createThread),
                    (ec.message.title = F.threadName),
                    (ec.message.publish = F.publish ?? !1)),
                null != f)
            ) {
                let e,
                    t = f?.activity.session_id;
                if (
                    null !=
                    (e =
                        f.type === b.xL.JOIN_REQUEST || f.type === b.xL.STREAM_REQUEST || null != t
                            ? t
                            : eI.default.getSessionId())
                ) {
                    let t = { type: f.type, session_id: e, target_user_id: f.targetUserId },
                        { activity: n } = f;
                    null != n.party && null != n.party.id && (t.party_id = n.party.id),
                        (ec.message.application_id = n.application_id),
                        (ec.message.activity = t);
                }
            }
            if (
                (null != C && (ec.message.poll = C),
                null != R && (ec.message.shared_client_theme = R),
                null != T && (ec.message.sticker_ids = T),
                el.A.isEnabled() && (ec.message.has_poggermode_enabled = !0),
                V && (ec.message.with_checkpoint = !0),
                null != L && (ec.message.content_inventory_entry = L),
                null != j && (ec.message.media_mention = j),
                null != k && k.length > 0 && (ec.message.attachments = k),
                null != U && U.length > 0)
            )
                try {
                    let t = await H({
                        channelId: e,
                        nonce: ee,
                        items: U,
                        message: ea,
                        shouldUploadFailureSendNotification: !n.doNotNotifyOnError && void 0,
                    });
                    if (null == t) return;
                    let r = t.attachments;
                    if (((i = t.uploader), Z && (null == r || 0 === r.length))) return;
                    null != r && (ec.message.attachments = r.map((e, t) => (0, eP.OW)(e, t)));
                } catch (r) {
                    let { file: e, code: t, reason: n, responseBody: i } = r;
                    es({ fileItems: e.items, failureCode: t, errorMessage: n?.msg }), G?.(e, t, n, i);
                    return;
                }
            return new Promise((t, s) => {
                let a = Date.now(),
                    u = d.Ay.length,
                    h = Math.floor(1e4 * Math.random());
                eB.info(`Queueing message to be sent LogId:${h}`),
                    d.Ay.enqueue(
                        ec,
                        (f) => {
                            let N = Date.now() - a;
                            if (f.ok) {
                                var v, R, k, U, G, F, V;
                                let s;
                                en.donateSentMessage(o, e),
                                    eK.receiveMessage(e, f.body, !0, {
                                        sendAnalytics: { duration: N, queueSize: u },
                                        poll: C,
                                    }),
                                    null != n.alsoForwardToChannelId &&
                                        y.A.sendForward((0, B.rh)(f.body), n.alsoForwardToChannelId)
                                            .then(() => {
                                                !(function (e) {
                                                    let {
                                                        referencedMessageId: t,
                                                        guildId: n,
                                                        channelId: i,
                                                        destinationChannelId: r,
                                                    } = e;
                                                    O.default.track(b.HAw.MESSAGE_ALSO_SEND_TO_CHANNEL_SENT, {
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
                                                eV.log(
                                                    `Failed to forward thread message to parent channel LogId:${h}`,
                                                    {
                                                        referencedMessageId: f.body?.id,
                                                        channelId: e,
                                                        destinationChannelId: n.alsoForwardToChannelId,
                                                        error: t.toString(),
                                                    },
                                                );
                                            });
                                let a = eM.default.cast(e),
                                    d = P.A.getRequest(a);
                                if (null != d) {
                                    let { guildId: t, userId: n, applicationStatus: i } = d;
                                    (0, M.cK)({
                                        guildId: t,
                                        channelId: e,
                                        messageId: f.body.id,
                                        joinRequestStatus: i,
                                        joinRequestUserId: n,
                                    });
                                }
                                et.recordMessageSendApiResponse(ee),
                                    l.h.dispatch({
                                        type: "SLOWMODE_RESET_COOLDOWN",
                                        slowmodeType: eR.R.SendMessage,
                                        channelId: e,
                                    }),
                                    l.h.dispatch({ type: "EMOJI_TRACK_USAGE", emojiUsed: c }),
                                    l.h.dispatch({ type: "STICKER_TRACK_USAGE", stickerIds: T }),
                                    l.h.dispatch({
                                        type: "LOCAL_MESSAGE_CREATE",
                                        message: { channel_id: e, author: eO.default.getCurrentUser() },
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
                                            l = eI.default.getId();
                                        (0, I.Ay)(t).forEach((e) => {
                                            let { type: t, code: u, url: c } = e;
                                            if ((0, g.Yf)(t)) {
                                                let e = (0, g.kK)(t, u, c);
                                                if (null == e) return;
                                                let { applicationId: n } = e;
                                                if (e.type === A.I.APP_DIRECTORY_PROFILE)
                                                    D(n), (0, E.KL)(u, ek.J.APP_DISCOVERY, l);
                                                else if (e.type === A.I.APP_DIRECTORY_STOREFRONT) D(n, "storefront");
                                                else if (e.type === A.I.APP_DIRECTORY_STOREFRONT_SKU)
                                                    D(n, "storefront_sku");
                                                else if (e.type === A.I.ACTIVITY_BOOKMARK) {
                                                    let { params: t } = e;
                                                    (0, E.KL)(n, ek.J.ACTIVITY, t.referrerId ?? l, t.customId);
                                                } else
                                                    e.type === A.I.APP_OAUTH2_LINK &&
                                                        ((0, E.KL)(n, ek.J.OAUTH, l),
                                                        _.Ay.trackWithMetadata(b.HAw.APP_OAUTH2_LINK_EMBED_URL_SENT, {
                                                            application_id: n,
                                                        }));
                                            } else if (t === A.I.INVITE)
                                                eY({
                                                    inviteKey: u,
                                                    channelId: n,
                                                    messageId: i,
                                                    location: s,
                                                    inviteAnalyticsMetadata: a,
                                                    overrideProperties: o,
                                                });
                                            else if (t === A.I.TEMPLATE) {
                                                let e = x.A.getGuildTemplate(u);
                                                if (null == e || e.state === eU.QB.RESOLVING) return;
                                                _.Ay.trackWithMetadata(b.HAw.GUILD_TEMPLATE_LINK_SENT, {
                                                    guild_template_code: u,
                                                    guild_template_name: e.name,
                                                    guild_template_description: e.description,
                                                    guild_template_guild_id: e.sourceGuildId,
                                                });
                                            } else if (t === A.I.BUILD_OVERRIDE);
                                            else if (t === A.I.EXPERIMENT);
                                            else if (t === A.I.MANUAL_BUILD_OVERRIDE);
                                            else if (t === A.I.EVENT);
                                            else if (t === A.I.CHANNEL_LINK);
                                            else if (t === A.I.EMBEDDED_ACTIVITY_INVITE)
                                                (0, E.KL)(u, ek.J.ACTIVITY_INVITE, l);
                                            else if (t === A.I.GUILD_PRODUCT);
                                            else if (t === A.I.SERVER_SHOP);
                                            else if (
                                                t === A.I.SOCIAL_LAYER_STOREFRONT ||
                                                t === A.I.SOCIAL_LAYER_STOREFRONT_APP
                                            );
                                            else if (t === A.I.QUESTS_EMBED) {
                                                let e = (0, eh.L4)(r.u.QUESTS_EMBED);
                                                (0, e_.av)({
                                                    questId: u,
                                                    event: b.HAw.QUEST_LINK_SHARED,
                                                    properties: { metadata_sealed: null != e ? e : null },
                                                    trackGuildAndChannelMetadata: !0,
                                                    sourceQuestContent: r.u.QUESTS_EMBED,
                                                });
                                            } else if (t === A.I.COLLECTIBLES_SHOP);
                                            else throw Error(`Unknown coded link type: ${t}`);
                                        });
                                    })({
                                        content: o,
                                        channelId: e,
                                        messageId: f.body.id,
                                        location: p ?? "chat_input",
                                        inviteAnalyticsMetadata: m,
                                    }),
                                    (v = o),
                                    (R = f.body.id),
                                    (k = p ?? "chat_input"),
                                    (U = !!n.isGiftLinkSentOnBehalfOfUser),
                                    (0, eD.e7)(v).forEach((t) => {
                                        let n = z.A.getChannel(e);
                                        null != n &&
                                            _.Ay.trackWithMetadata(b.HAw.GIFT_CODE_SENT, {
                                                location: k,
                                                gift_code: t,
                                                guild_id: n.getGuildId(),
                                                channel_id: n.id,
                                                channel_type: n.type,
                                                message_id: R,
                                                automatic_send: U,
                                            });
                                    }),
                                    null != n.gifMetadata &&
                                        ((G = n.gifMetadata),
                                        (F = f.body.id),
                                        (V = p ?? "chat_input"),
                                        null != (s = z.A.getChannel(e)) &&
                                            O.default.track(b.HAw.MESSAGE_SENT_WITH_GIF, {
                                                location: V,
                                                message_id: F,
                                                gif_provider: G.gif_provider,
                                                load_id: G.load_id,
                                                source_object: G.source_object,
                                                gif_url: G.gif_url,
                                                gif_id: G.gif_id,
                                                ...(0, _.H$)(s.getGuildId()),
                                                ...(0, _.dI)(s),
                                            })),
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
                                eV.log("Failed to send message", {
                                    hasErr: f.hasErr,
                                    status: f.status,
                                    code: f.body?.code,
                                    error: f.err,
                                });
                                let r = !1;
                                if (f.hasErr) "ABORTED" === f.err.code && (r = !0);
                                else if (f.status >= 400 && f.status < 500 && f.body)
                                    if (f.body.code === b.t02.SLOWMODE_RATE_LIMITED) {
                                        let t = f.body.retry_after;
                                        null != t &&
                                            t > 0 &&
                                            l.h.dispatch({
                                                type: "SLOWMODE_SET_COOLDOWN",
                                                channelId: e,
                                                slowmodeType: eR.R.SendMessage,
                                                cooldownMs: t * eb.A.Millis.SECOND,
                                            });
                                    } else
                                        w.yf.has(f.body.code)
                                            ? l.h.dispatch({
                                                  type: "MESSAGE_SEND_FAILED_AUTOMOD",
                                                  messageData: ec,
                                                  errorResponseBody: { code: f.body.code, message: f.body.message },
                                              })
                                            : f.body.code === b.t02.POGGERMODE_TEMPORARILY_DISABLED
                                              ? l.h.dispatch({ type: "POGGERMODE_TEMPORARILY_DISABLED" })
                                              : f.body.code === b.t02.EXPLICIT_CONTENT
                                                ? (t = eG.ty.EXPLICIT_CONTENT)
                                                : null != C || Q || null != L || eK.sendClydeError(e, f.body.code);
                                r
                                    ? eK.deleteMessage(e, ee, !0)
                                    : (null != i &&
                                          l.h.dispatch({
                                              type: "UPLOAD_FAIL",
                                              channelId: e,
                                              file: i._file,
                                              messageId: ee,
                                              reason: t,
                                              noSendFailed: !0,
                                          }),
                                      f.hasErr ||
                                          t !== eG.ty.EXPLICIT_CONTENT ||
                                          eK.sendExplicitMediaClydeError(
                                              e,
                                              f.body?.attachments,
                                              S.SW.EXPLICIT_MEDIA_MESSAGE_SEND_BLOCKED,
                                          ),
                                      l.h.dispatch({
                                          type: "MESSAGE_SEND_FAILED",
                                          messageId: ee,
                                          channelId: e,
                                          shouldNotify: !n.doNotNotifyOnError,
                                          reason: t,
                                      }),
                                      es({
                                          failureCode: f.hasErr ? void 0 : f.status,
                                          errorMessage: f.hasErr ? f.err.message : void 0,
                                      }),
                                      d.Ay.cancelPendingSendRequests(e).forEach((e) => {
                                          eV.log("Cancelling pending message", e.nonce),
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
            if ((0, s.Lt)(t.flags, b.pr7.IS_COMPONENTS_V2)) {
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
            await em.A.unarchiveThreadIfNecessary(e);
            let a = (function (e, t) {
                    let n = ey.A.getMessage(e, t);
                    if (null == n || n.type !== b.lAJ.REPLY) return;
                    let i = ef.A.getMessageByReference(n.messageReference);
                    if (i.state === ef.a.LOADED && !n.mentions.includes(i.message.author.id))
                        return { parse: Object.values(b.uw8), replied_user: !1 };
                })(e, t),
                u = null != (i = ey.A.getMessage(e, t)) && i.hasFlag(b.pr7.CROSSPOSTED),
                c = { channelId: e, messageId: t, content: r, isCrossposted: u, allowed_mentions: a, components: s };
            d.Ay.enqueue({ type: d.AZ.EDIT, message: c }, (n) => {
                let i = !n.hasErr && w.yf.has(n.body.code);
                if (i) {
                    let e = { type: d.AZ.EDIT, message: c };
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
                    eK.endEditMessage(e, n.hasErr ? void 0 : n),
                    eK.focusMessage({ channelId: e, messageId: t });
            });
        },
        async suppressEmbeds(e, t) {
            await em.A.unarchiveThreadIfNecessary(e);
            let n = ey.A.getMessage(e, t);
            null != n &&
                a.Bo.patch({
                    url: b.Rsh.MESSAGE(e, t),
                    body: { flags: (0, s.lA)(n.flags, b.pr7.SUPPRESS_EMBEDS, !0) },
                    oldFormErrors: !0,
                    rejectWithError: !1,
                });
        },
        async patchMessageGuildOfficial(e, t, n) {
            await em.A.unarchiveThreadIfNecessary(e);
            let i = ey.A.getMessage(e, t);
            null != i &&
                a.Bo.patch({
                    url: b.Rsh.MESSAGE(e, t),
                    body: { flags: (0, s.lA)(i.flags, b.pr7.IS_GUILD_OFFICIAL, n) },
                    oldFormErrors: !0,
                    rejectWithError: !1,
                });
        },
        async patchMessageAttachments(e, t, n) {
            await em.A.unarchiveThreadIfNecessary(e),
                a.Bo.patch({
                    url: b.Rsh.MESSAGE(e, t),
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
                : (await em.A.unarchiveThreadIfNecessary(e),
                  a.Bo.del({ url: b.Rsh.MESSAGE(e, t), oldFormErrors: !0, rejectWithError: !1 }).then(() => {
                      i();
                  }));
        },
        dismissAutomatedMessage(e) {
            null != e.loggingName &&
                _.Ay.trackWithMetadata(b.HAw.AUTOMATED_MESSAGE_DISMISSED, {
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
                    url: b.Rsh.MESSAGE_CROSSPOST(e, t),
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
                    ex.A.show({
                        title: eF.intl.string(eF.t.Vd1hs6),
                        body: e,
                        confirmText: eF.intl.string(eF.t.BddRzS),
                    });
            }
        },
        trackInvite: eY,
    },
    e$ = eK;
