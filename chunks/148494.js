(n.d(t, { A: () => eX }), n(801541), n(938796));
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
    C = n(597643),
    O = n(607399),
    R = n(309010),
    L = n(967198),
    y = n(174459),
    D = n(652215);
function v(e, t) {
    y.default.track(D.HAw.APP_DIRECTORY_PROFILE_EMBED_SENT, {
        application_id: e,
        device_platform: O.Fr ? "mobile_web" : "desktop_web",
        guild_id: L.A.getGuildId(),
        channel_id: R.Ay.getChannelId(),
        section: t,
    });
}
var b = n(834757),
    M = n(753738),
    P = n(51271),
    U = n(844944),
    w = n(122906),
    G = n(842241),
    x = n(346542),
    k = n(279208),
    F = n(917878),
    B = n(395780),
    V = n(320095);
async function H(e) {
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
            o.h.dispatch({ type: "UPLOAD_FAIL", channelId: t, file: e, messageId: s.id, shouldSendNotification: r });
        }),
        a.on("complete", (e) => {
            a._aborted && o.h.dispatch({ type: "UPLOAD_COMPLETE", channelId: t, file: e, aborted: !0 });
        }));
    let l = await a.uploadFiles(i);
    if (!a._aborted) return { attachments: l, uploader: a };
}
var j = n(521427),
    W = n(17928),
    Y = n(69114),
    K = n(322683),
    $ = n(734057),
    z = n(498642),
    X = n(544180);
let q = new S.A("MessageRoundtripTrackerStore");
function Z(e) {
    return null != e.apiResponseTimestamp && null != e.gatewaySeenTimestamp;
}
function Q(e) {
    let t = $.A.getBasicChannel(e.channelId);
    if (null == t)
        return void q.warn(`Ignoring a messageData for channel ${e.channelId} because we can't find that channel.`);
    if (Math.random() > 0.1) return;
    let n = null == e.apiResponseTimestamp ? null : e.apiResponseTimestamp - e.initialSendTimestamp,
        i = null == e.gatewaySeenTimestamp ? null : e.gatewaySeenTimestamp - e.initialSendTimestamp,
        r = (0, K.O)();
    y.default.track(D.HAw.SEND_MESSAGE_ROUNDTRIP, {
        ...(0, Y.A)(),
        api_latency_ms: n,
        gateway_latency_ms: i,
        channel_id: t.id,
        channel_type: t.type,
        guild_id: t.guild_id,
        guild_size: z.A.getMemberCount(t.guild_id),
        mobile_network_type: X.A.getType(),
        num_attachments: e.attachmentCount,
        ...(null != r && { mobile_signal_strength_level: r }),
    });
}
class J extends W.Ay.Store {
    initialize() {
        this.waitFor($.A, z.A, X.A);
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
            Z(n) ? (Q(n), this.pendingMessages.delete(e)) : this.pendingMessages.set(e, n);
        }
    }
    recordGatewayResponse(e) {
        let t = this.pendingMessages.get(e);
        if (null != t) {
            let n = { ...t, gatewaySeenTimestamp: Date.now() };
            Z(n) ? (Q(n), this.pendingMessages.delete(e)) : this.pendingMessages.set(e, n);
        }
    }
}
let ee = new J(o.h, {
        MESSAGE_CREATE: function (e) {
            let { optimistic: t, message: n } = e,
                i = n.nonce;
            t || null == i || ee.recordGatewayResponse(i);
        },
    }),
    et = { init() {}, donateSentMessage(e, t) {}, deleteAllInteractions() {} };
var en = n(963852),
    ei = n(195880),
    er = n(488004),
    ea = n(491001),
    es = n(512599),
    el = n(3137),
    eo = n(969632),
    ed = n(45787),
    ec = n(308528);
function eu(e) {
    if (e !== f.E) return null;
    let t = $.A.getChannel(e);
    return null == t ? null : ec.A.ensurePrivateChannel(t.recipients);
}
var e_ = n(561844),
    eE = n(710969);
n(853145);
var eA = n(9842),
    eh = n(151282),
    eI = n(859403),
    ef = n(750385),
    ep = n(677413),
    eT = n(867455),
    em = n(464578),
    eg = n(616356),
    eS = n(280450);
n(580745);
var eN = n(71393),
    eC = n(299091),
    eO = n(232835),
    eR = n(576705),
    eL = n(290863),
    ey = n(573163),
    eD = n(101392),
    ev = n(287809),
    eb = n(927813),
    eM = n(45938),
    eP = n(975571),
    eU = n(158045),
    ew = n(935208),
    eG = n(292348),
    ex = n(157559),
    ek = n(768349),
    eF = n(401755),
    eB = n(381941),
    eV = n(375708);
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
    null != u && c && (0, I.KL)(u, ek.J.ACTIVITY_INVITE, l);
    let E = $.A.getChannel(n);
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
                let n = (0, b.Ee)(i, eL.A);
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
                let t = eP.A.getArticleURL(D.MVz.DM_COULD_NOT_BE_DELIVERED),
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
                    helpUrl: eP.A.getArticleURL(D.MVz.DM_COULD_NOT_BE_DELIVERED),
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
            (null != n &&
                _.Ay.trackWithMetadata(D.HAw.AUTOMATED_MESSAGE_RECEIVED, { message_author: "Clyde", message_name: n }),
                ez.receiveMessage(e, (0, en.pO)({ messageId: i, channelId: e, content: t, loggingName: n })));
        },
        sendNitroSystemMessage(e, t, n) {
            let i = (0, en.Ay)({
                channelId: e,
                nonce: n,
                type: D.lAJ.NITRO_NOTIFICATION,
                content: t,
                flags: D.pr7.EPHEMERAL,
                author: { id: D.oIV, username: "Nitro Notification", discriminator: D.h3J, avatar: "nitro", bot: !0 },
            });
            ez.receiveMessage(e, { ...i, state: D.cmJ.SENT, channel_id: e }, !0);
        },
        sendGiftingPromptSystemMessage(e, t) {
            let n = (0, en.Ay)({
                channelId: e,
                type: D.lAJ.GIFTING_PROMPT,
                content: "",
                flags: D.pr7.EPHEMERAL,
                author: {
                    id: D.oIV,
                    username: "Gifting Prompt",
                    discriminator: D.h3J,
                    avatar: "gifting_prompt",
                    bot: !0,
                },
                giftingPrompt: t,
            });
            ez.receiveMessage(e, { ...n, state: D.cmJ.SENT }, !0);
        },
        sendGuildBoostUpsellSystemMessage(e, t) {
            let n = (0, en.Ay)({
                channelId: e,
                type: D.lAJ.GUILD_BOOST_UPSELL,
                content: "",
                flags: D.pr7.EPHEMERAL,
                author: {
                    id: D.oIV,
                    username: "Guild Boost Upsell",
                    discriminator: D.h3J,
                    avatar: "guild_boost_upsell",
                    bot: !0,
                },
                boostingPrompt: t,
            });
            ez.receiveMessage(e, { ...n, state: D.cmJ.SENT }, !0);
        },
        sendClydeError(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                n = $.A.getChannel(e);
            if (null == n) return;
            let i = e$[t];
            null == i
                ? ez.sendBotMessage(
                      e,
                      eV.intl.formatToPlainString(eV.t.SkGL7l, {
                          helpUrl: eP.A.getArticleURL(D.MVz.DM_COULD_NOT_BE_DELIVERED),
                      }),
                      `SEND_FAILED (${t})`,
                  )
                : ez.sendBotMessage(e, i.messageGetter(n), i.messageName);
        },
        sendExplicitMediaClydeError(e, t, n) {
            let r = $.A.getChannel(e);
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
                l = (0, ei.m)();
            (ez.sendBotMessage(e, a, s, l),
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
            ez.trackJump(e, null, "Present");
            let n = { present: !0 };
            eO.A.hasPresent(e)
                ? o.h.dispatch({ type: "LOAD_MESSAGES_SUCCESS_CACHED", jump: n, channelId: e, limit: t })
                : ez.fetchMessages({ channelId: e, limit: t, jump: n });
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
            } = e;
            return (
                "string" == typeof a && ez.trackJump(t, n, a, s),
                ez.fetchMessages({
                    channelId: t,
                    limit: D.d7Q,
                    jump: { messageId: n, flash: i, offset: r, returnMessageId: o, jumpType: c, onJumpComplete: _ },
                    isPreload: l,
                    skipLocalFetch: d,
                    avoidInitialScroll: u,
                })
            );
        },
        focusMessage(e) {
            let { channelId: t, messageId: n } = e;
            ez.fetchMessages({ channelId: t, limit: D.d7Q, focus: { messageId: n } });
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
                p = $.A.getChannel(t),
                T = C.A.isConnectedOrOverlay(),
                m = Date.now();
            if (null != p && p.type === D.rbe.GUILD_STORE) return !1;
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
            (em.A.fetchMessages.recordStart(), F.A.recordChannelFetchStart(t, I ?? m, n, i, r));
            let g = a ?? void 0;
            null == g && null != l && (g = { ...l });
            let S = c.A.getOrCreate(t).loadStart(g);
            (c.A.commit(S), o.h.dispatch({ type: "LOAD_MESSAGES" }));
            let N = g?.messageId,
                O = new eY();
            return (
                u || this.fetchLocalMessages(t, I ?? m, n, i, r, O),
                s.Bo.get({
                    url: D.Rsh.MESSAGES(t),
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
                            (eH.log(`Fetched ${s.length} messages for ${t} isBefore:${l} isAfter:${d}`),
                                O.markComplete(),
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
                                    isStale: !T || C.A.lastTimeConnectedChanged() >= m,
                                    truncate: _,
                                    avoidInitialScroll: A,
                                    requestStartTime: m,
                                }),
                                F.A.recordChannelFetchedNetwork(t, I ?? m, n, i, r, s));
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
            let s = $.A.getBasicChannel(e),
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
            let n = $.A.getBasicChannel(e),
                i = E.A.database();
            if (null == i || null == n) return;
            let r = c.A.getOrCreate(e);
            if (r.hasMoreAfter) return;
            let a = await (0, A.kk)(() => h.Ay.load(i, e, t));
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
                        isForegroundCacheLoad: (0, ea.K)(),
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
                        o.h.dispatch({ type: "LOAD_MESSAGES_SUCCESS_CACHED", channelId: t, jump: a, limit: D.d7Q }), !0
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
            let r = await eu(e);
            if (null != r) return ez.sendMessage(r, t, n, i);
            let a = i.nonce ?? (0, ei.m)();
            i = { ...i, nonce: a };
            let s = function () {
                return ez._sendMessage(e, t, i);
            };
            return (null == i.scheduledTimestamp && ee.recordMessageSendAttempt(e, a, i), eO.A.isReady(e))
                ? s()
                : n && e !== f.E
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
            let t = ez.getSendMessageOptionsForReply(e.pendingReply),
                n = ez.getSendMessageOptionsForStickers({ ...e }),
                i = ez.getSendMessageOptionsForScheduledMessage({ ...e });
            return { ...t, ...n, ...i };
        },
        sendInvite(e, t, n, i, r) {
            let a = (0, k.A)(t);
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
                url: D.Rsh.MESSAGES_GREET(e),
                body: { sticker_ids: [t], allowed_mentions: r, message_reference: i },
                oldFormErrors: !0,
                rejectWithError: (0, s.fT)(),
                context: { location: eB.Hx.GREET },
            }).then(
                (n) => (
                    et.donateSentMessage(n.body.content, e),
                    ez.receiveMessage(e, n.body),
                    o.h.dispatch({ type: "STICKER_TRACK_USAGE", stickerIds: [t] }),
                    n
                ),
                (t) => {
                    throw (
                        eH.log("Failed to send greeting"),
                        429 !== t.status && ez.sendClydeError(e, t.body.code),
                        o.h.dispatch({ type: "MESSAGE_SEND_FAILED", messageId: t.body.id, channelId: e }),
                        t
                    );
                },
            );
        },
        sendPollMessage(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            return ez._sendMessage(
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
                s = eu(e);
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
                    messageReference: C,
                    allowedMentions: O,
                    poll: R,
                    sharedCustomTheme: L,
                    contentInventoryEntry: b,
                    attachments: G,
                    attachmentsToUpload: x,
                    onAttachmentUploadError: k,
                    announcementSendOptions: F,
                    withCheckpoint: B,
                    mediaMention: V,
                    scheduledTimestamp: W,
                } = n,
                Y = n.flags ?? 0,
                [K, z] = (0, ep.Ay)(l);
            K && ((l = z), (Y = (0, a.UI)(Y, D.pr7.SUPPRESS_NOTIFICATIONS)));
            let X = $.A.getChannel(e),
                q = eN.A.getGuild(X?.guild_id);
            (0, j.Zv)(q, X, "_sendMessage") && (Y = (0, a.UI)(Y, D.pr7.IS_GUILD_OFFICIAL));
            let Z = !1,
                Q = n.messageReference?.type === D.SH7.FORWARD;
            if (
                "" === l &&
                null == A &&
                null == S &&
                null == R &&
                null == L &&
                null == b &&
                !Q &&
                (null == G || 0 === G.length) &&
                !B &&
                (null == t.components || 0 === t.components.length)
            )
                if (null == x || !(x.length > 0)) return Promise.resolve();
                else Z = !0;
            let J = null != C ? D.lAJ.REPLY : D.lAJ.DEFAULT,
                ea = n.nonce ?? (0, ei.m)(),
                ed = (0, en.Ay)({
                    channelId: e,
                    content: l,
                    tts: E,
                    type: J,
                    messageReference: C,
                    allowedMentions: O,
                    flags: 0 !== Y ? Y : void 0,
                    nonce: ea,
                    poll: (0, eo.G8)(R),
                    sharedCustomTheme: L,
                    mediaMention: V,
                });
            if (
                (!1 !== n.eagerDispatch &&
                    null == W &&
                    ((0, es.iq)(e, ed.id),
                    null != S && (ed.sticker_items = S.map((e) => ef.A.getStickerById(e)).filter((e) => null != e)),
                    ez.receiveMessage(e, ed, !0, n)),
                !eW && null != d && d.length > 0)
            ) {
                eW = !0;
                let t = ev.default.getCurrentUser(),
                    { errorMessage: n, errorMessageName: i } = ez.validateMessage(d, t, e);
                ez.sendBotMessage(e, n, i);
            }
            let ec = {
                type: null != F ? u.AZ.SEND_ANNOUNCEMENT : u.AZ.SEND,
                message: {
                    channelId: e,
                    content: l,
                    nonce: ea,
                    tts: E,
                    message_reference: C,
                    allowed_mentions: O,
                    flags: Y,
                    analyticsLocation: h,
                },
            };
            if (
                (null != t.components && (ec.message.components = t.components),
                null != F &&
                    ((ec.message.create_thread = F.createThread),
                    (ec.message.title = F.threadName),
                    (ec.message.publish = F.publish ?? !1)),
                null != A)
            ) {
                let e,
                    t = A?.activity.session_id;
                if (
                    null !=
                    (e =
                        A.type === D.xL.JOIN_REQUEST || A.type === D.xL.STREAM_REQUEST || null != t
                            ? t
                            : eS.default.getSessionId())
                ) {
                    let t = { type: A.type, session_id: e, target_user_id: A.targetUserId },
                        { activity: n } = A;
                    (null != n.party && null != n.party.id && (t.party_id = n.party.id),
                        (ec.message.application_id = n.application_id),
                        (ec.message.activity = t));
                }
            }
            if (
                (null != R && (ec.message.poll = R),
                null != L && (ec.message.shared_client_theme = L),
                null != S && (ec.message.sticker_ids = S),
                el.A.isEnabled() && (ec.message.has_poggermode_enabled = !0),
                B && (ec.message.with_checkpoint = !0),
                null != b && (ec.message.content_inventory_entry = b),
                null != V && (ec.message.media_mention = V),
                null != G && G.length > 0 && (ec.message.attachments = G),
                null != x && x.length > 0)
            )
                try {
                    let t = await H({
                        channelId: e,
                        nonce: ea,
                        items: x,
                        message: ed,
                        shouldUploadFailureSendNotification: !n.doNotNotifyOnError && void 0,
                    });
                    if (null == t) return;
                    let r = t.attachments;
                    if (((i = t.uploader), Z && (null == r || 0 === r.length))) return;
                    null != r && (ec.message.attachments = r.map((e, t) => (0, eG.OW)(e, t)));
                } catch (r) {
                    let { file: e, code: t, reason: n, responseBody: i } = r;
                    ((0, er.O)({ fileItems: e.items, failureCode: t, errorMessage: n?.msg }), k?.(e, t, n, i));
                    return;
                }
            if (null != W)
                try {
                    let t = await (0, eh.pr)({ channelId: e, scheduledTimestamp: W, messageSendData: ec.message });
                    return (
                        null != i &&
                            o.h.dispatch({ type: "UPLOAD_COMPLETE", channelId: e, file: i._file, aborted: !1 }),
                        (0, eI.c_)(W),
                        t
                    );
                } catch (t) {
                    throw (
                        null != i &&
                            o.h.dispatch({
                                type: "UPLOAD_FAIL",
                                channelId: e,
                                file: i._file,
                                messageId: ea,
                                noSendFailed: !0,
                            }),
                        !0 !== n.doNotNotifyOnError && (0, eI.vh)(t),
                        t
                    );
                }
            return new Promise((t, a) => {
                let s = Date.now(),
                    d = u.Ay.length,
                    E = Math.floor(1e4 * Math.random());
                (ej.info(`Queueing message to be sent LogId:${E}`),
                    u.Ay.enqueue(
                        ec,
                        (E) => {
                            let A = Date.now() - s;
                            if (E.ok) {
                                var O, L, G, k, F, B, V;
                                let a;
                                (et.donateSentMessage(l, e),
                                    ez.receiveMessage(e, E.body, !0, {
                                        sendAnalytics: { duration: A, queueSize: d },
                                        poll: R,
                                    }));
                                let s = ew.default.cast(e),
                                    u = U.A.getRequest(s);
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
                                (ee.recordMessageSendApiResponse(ea),
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
                                                        (v(n), (0, I.KL)(d, ek.J.APP_DISCOVERY, o));
                                                        break;
                                                    case m.I.APP_DIRECTORY_STOREFRONT:
                                                        v(n, "storefront");
                                                        break;
                                                    case m.I.APP_DIRECTORY_STOREFRONT_SKU:
                                                        v(n, "storefront_sku");
                                                        break;
                                                    case m.I.ACTIVITY_BOOKMARK: {
                                                        let { params: t } = e;
                                                        (0, I.KL)(n, ek.J.ACTIVITY, t.referrerId ?? o, t.customId);
                                                        break;
                                                    }
                                                    case m.I.APP_OAUTH2_LINK:
                                                        ((0, I.KL)(n, ek.J.OAUTH, o),
                                                            _.Ay.trackWithMetadata(
                                                                D.HAw.APP_OAUTH2_LINK_EMBED_URL_SENT,
                                                                { application_id: n },
                                                            ));
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
                                                        let e = (0, eE.L4)(r.u.QUESTS_EMBED);
                                                        (0, e_.av)({
                                                            questId: d,
                                                            event: D.HAw.QUEST_LINK_SHARED,
                                                            properties: { metadata_sealed: null != e ? e : null },
                                                            trackGuildAndChannelMetadata: !0,
                                                            sourceQuestContent: r.u.QUESTS_EMBED,
                                                        });
                                                        break;
                                                    }
                                                    case m.I.GAME_PROFILE:
                                                        y.default.track(D.HAw.GAME_PROFILE_LINK_EMBED_SENT, {
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
                                        messageId: E.body.id,
                                        location: h ?? "chat_input",
                                        inviteAnalyticsMetadata: f,
                                    }),
                                    (O = l),
                                    (L = E.body.id),
                                    (G = h ?? "chat_input"),
                                    (k = !!n.isGiftLinkSentOnBehalfOfUser),
                                    (0, eM.e7)(O).forEach((t) => {
                                        let n = $.A.getChannel(e);
                                        null != n &&
                                            _.Ay.trackWithMetadata(D.HAw.GIFT_CODE_SENT, {
                                                location: G,
                                                gift_code: t,
                                                guild_id: n.getGuildId(),
                                                channel_id: n.id,
                                                channel_type: n.type,
                                                message_id: L,
                                                automatic_send: k,
                                            });
                                    }),
                                    null != n.gifMetadata &&
                                        ((F = n.gifMetadata),
                                        (B = E.body.id),
                                        (V = h ?? "chat_input"),
                                        null != (a = $.A.getChannel(e)) &&
                                            y.default.track(D.HAw.MESSAGE_SENT_WITH_GIF, {
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
                                        let s = $.A.getChannel(t);
                                        if (null == s) return;
                                        let l = eA.A.getMessageByReference(a);
                                        r.forEach((e, r) => {
                                            let { clip: a } = e;
                                            if (null == a) return;
                                            let o =
                                                l.state === eA.a.LOADED &&
                                                l.message.attachments.some((e) => e.clip_remote_id === a.remoteClipId);
                                            y.default.track(D.HAw.CLIP_SHARED, {
                                                ...p.Zy(a),
                                                ...p.lc(),
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
                                eH.log("Failed to send message", {
                                    hasErr: E.hasErr,
                                    status: E.status,
                                    code: E.body?.code,
                                    error: E.err,
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
                                                cooldownMs: t * eb.A.Millis.SECOND,
                                            });
                                    } else
                                        M.yf.has(E.body.code)
                                            ? o.h.dispatch({
                                                  type: "MESSAGE_SEND_FAILED_AUTOMOD",
                                                  messageData: ec,
                                                  errorResponseBody: { code: E.body.code, message: E.body.message },
                                              })
                                            : E.body.code === D.t02.POGGERMODE_TEMPORARILY_DISABLED
                                              ? o.h.dispatch({ type: "POGGERMODE_TEMPORARILY_DISABLED" })
                                              : E.body.code === D.t02.EXPLICIT_CONTENT
                                                ? (t = eB.ty.EXPLICIT_CONTENT)
                                                : null != R || Q || null != b || ez.sendClydeError(e, E.body.code);
                                (r
                                    ? null != eO.A.getMessage(e, ea) && ez.deleteMessage(e, ea, !0)
                                    : (null != i &&
                                          o.h.dispatch({
                                              type: "UPLOAD_FAIL",
                                              channelId: e,
                                              file: i._file,
                                              messageId: ea,
                                              reason: t,
                                              noSendFailed: !0,
                                          }),
                                      E.hasErr ||
                                          t !== eB.ty.EXPLICIT_CONTENT ||
                                          ez.sendExplicitMediaClydeError(
                                              e,
                                              E.body?.attachments,
                                              N.SW.EXPLICIT_MEDIA_MESSAGE_SEND_BLOCKED,
                                          ),
                                      o.h.dispatch({
                                          type: "MESSAGE_SEND_FAILED",
                                          messageId: ea,
                                          channelId: e,
                                          shouldNotify: !n.doNotNotifyOnError,
                                          reason: t,
                                      }),
                                      (0, er.O)({
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
            await eT.A.unarchiveThreadIfNecessary(e);
            let s = (function (e, t) {
                    let n = eO.A.getMessage(e, t);
                    if (null == n || n.type !== D.lAJ.REPLY) return;
                    let i = eA.A.getMessageByReference(n.messageReference);
                    if (i.state === eA.a.LOADED && !n.mentions.includes(i.message.author.id))
                        return { parse: Object.values(D.uw8), replied_user: !1 };
                })(e, t),
                d = null != (i = eO.A.getMessage(e, t)) && i.hasFlag(D.pr7.CROSSPOSTED),
                c = { channelId: e, messageId: t, content: r, isCrossposted: d, allowed_mentions: s, components: a };
            u.Ay.enqueue({ type: u.AZ.EDIT, message: c }, (n) => {
                let i = !n.hasErr && M.yf.has(n.body.code);
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
                    ez.endEditMessage(e, n.hasErr ? void 0 : n),
                    ez.focusMessage({ channelId: e, messageId: t }));
            });
        },
        async suppressEmbeds(e, t) {
            await eT.A.unarchiveThreadIfNecessary(e);
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
            await eT.A.unarchiveThreadIfNecessary(e);
            let i = eO.A.getMessage(e, t);
            null != i &&
                s.Bo.patch({
                    url: D.Rsh.MESSAGE(e, t),
                    body: { flags: (0, a.lA)(i.flags, D.pr7.IS_GUILD_OFFICIAL, n) },
                    oldFormErrors: !0,
                    rejectWithError: (0, s.fT)(),
                });
        },
        async patchMessageAttachments(e, t, n) {
            (await eT.A.unarchiveThreadIfNecessary(e),
                s.Bo.patch({
                    url: D.Rsh.MESSAGE(e, t),
                    body: { attachments: n },
                    oldFormErrors: !0,
                    rejectWithError: (0, s.fT)(),
                }));
        },
        async deleteMessage(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            function i() {
                o.h.dispatch({ type: "MESSAGE_DELETE", id: t, channelId: e }).then(() => {
                    l.O.announce(eV.intl.string(eV.t.RYMs7s));
                });
            }
            n
                ? i()
                : (await eT.A.unarchiveThreadIfNecessary(e),
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
                (0, ed.np)(e.channel_id, e.id),
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
    eX = ez;
