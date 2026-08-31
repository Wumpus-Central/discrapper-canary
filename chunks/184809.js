"use strict";
n.r(t), n.d(t, { default: () => es });
var i = n(17928),
    r = n(506774),
    a = n(228366),
    s = n(350723),
    l = n(996308),
    o = n(211753);
n(321073);
var d = n(941426),
    c = n(92277),
    u = n(9302),
    _ = n(635731),
    E = n(41984),
    A = n(127242);
let h = new d.Vy("LegacyOverlayClient"),
    I = "Heartbeat",
    f = new _.A(1e3),
    p = null,
    T = null;
function m() {
    null == T &&
        (T = setInterval(() => {
            if (null != p) {
                let e = Date.now() - p;
                e > 2e4 &&
                    (h.warn(`No heartbeat for ${Math.round(e / 1e3)}s - overlay may be unresponsive`), (p = null));
            }
        }, 1e4));
}
class g extends i.Ay.Store {
    static displayName = "OverlayRPCLogStore";
    initialize() {
        this.waitFor(A.A), A.A.hasRenderDebugMode(E.x7.LegacyOverlayLogging) && m();
    }
    getAllLogs() {
        return f;
    }
    getLogsByLevel(e) {
        return f.filter((t) => t.level === e);
    }
    getErrorLogs() {
        return f.filter((e) => "error" === e.level || "crash" === e.level);
    }
}
new g(a.h, {
    OVERLAY_RENDER_DEBUG_MODE: function (e) {
        let { enabled: t, mode: n } = e;
        return n === E.x7.LegacyOverlayLogging && (t ? m() : null != T && (clearInterval(T), (T = null))), !1;
    },
    OVERLAY_ADD_LOGS_BATCH: function (e) {
        let { logs: t } = e;
        return (
            t.forEach((e) =>
                (function (e) {
                    let { level: t, message: n, timestamp: i, context: r } = e;
                    if (!A.A.hasRenderDebugMode(E.x7.LegacyOverlayLogging) || __OVERLAY__) return !1;
                    if (
                        (f.push({ level: t, message: n, timestamp: i, context: r }),
                        n === I && (p = Date.now()),
                        n !== I)
                    )
                        switch (t) {
                            case "error":
                            case "crash":
                                h.error(n);
                                break;
                            case "warn":
                                h.warn(n);
                                break;
                            case "info":
                                h.info(n);
                                break;
                            default:
                                h.log(n);
                        }
                    return !0;
                })(e),
            ),
            !0
        );
    },
});
var S = n(652215);
let N = new d.Vy("LegacyOverlayLogger"),
    C = null,
    O = !1,
    R = null,
    L = {
        log: console.log.bind(console),
        info: console.info.bind(console),
        warn: console.warn.bind(console),
        error: console.error.bind(console),
    },
    y = 0;
async function D(e, t) {
    if (!__OVERLAY__) return void N.warn("sendLegacyOverlayLog called from main app context, logging locally instead");
    if (y > 10) return;
    let { level: n, message: i, context: r } = e,
        a = null;
    if (null != r)
        try {
            a = (0, c.g)(r);
        } catch (e) {
            try {
                a = { _error: "Failed to serialize context", _type: Object.prototype.toString.call(r) };
            } catch (e) {
                a = { _error: "Context not serializable" };
            }
        }
    let s = {
        type: S.kGV.LOG_MESSAGES,
        token: t,
        pid: (0, u.getPID)(),
        payload: { level: n, message: i, timestamp: Date.now(), context: a },
    };
    try {
        await l.tN(s), (y = 0);
    } catch (e) {
        ++y <= 3 &&
            (N.error(`Failed to send log to main app (failure ${y}):`, e),
            3 === y && N.error("Too many RPC send failures, suppressing further error logs"));
    }
}
function v(e) {
    if (0 === e.length) return e;
    let t = [];
    for (let n = 0; n < e.length; n++) {
        let i = e[n];
        if ("string" == typeof i && i.includes("%c")) {
            let e = i.replace(/%c/g, "");
            "" !== e.trim() && t.push(e), (n += (i.match(/%c/g) ?? []).length);
            continue;
        }
        ("string" == typeof i && /^\s*(font-weight|color|background|padding|margin|border)/.test(i)) || t.push(i);
    }
    return t;
}
function b(e) {
    if (null === e) return "null";
    if (void 0 === e) return "undefined";
    if ("string" == typeof e) return e;
    if ("number" == typeof e || "boolean" == typeof e) return String(e);
    if ("function" == typeof e) return `[Function: ${e.name || "anonymous"}]`;
    if (e instanceof Error) return `${e.name}: ${e.message}`;
    try {
        let t = new WeakSet();
        return JSON.stringify(e, (e, n) => {
            if ("object" == typeof n && null !== n) {
                if (t.has(n)) return "[Circular]";
                t.add(n);
            }
            return "function" == typeof n
                ? `[Function: ${n.name || "anonymous"}]`
                : "symbol" == typeof n
                  ? `[Symbol: ${n.toString()}]`
                  : n;
        });
    } catch (t) {
        try {
            return `[${Object.prototype.toString.call(e)}]`;
        } catch (e) {
            return "[Unserializable]";
        }
    }
}
var M = n(761821),
    P = n(95701),
    U = n(280450),
    w = n(734057),
    G = n(808728),
    x = n(38502),
    k = n(967198),
    F = n(531685),
    V = n(672396);
let B = Object.freeze({
        selectedGuildId: null,
        selectedChannelId: null,
        displayUserMode: S.f5z.ALWAYS,
        displayNameMode: S.pwA.ALWAYS,
        avatarSizeMode: S.OSZ.LARGE,
        notificationPositionMode: S.G6Q.TOP_LEFT,
        textChatNotifications: S.iXc.ENABLED,
        disableExternalLinkAlert: !1,
        disablePinTutorial: !1,
        disableClickableRegions: !1,
        textWidgetOpacity: V.Li.LOWER,
        showGameInviteNotification: !0,
        customInviteMessage: void 0,
    }),
    H = null,
    j = {},
    W = null,
    Y = new Set(),
    K = !1,
    $ = !1,
    z = !1,
    q = new Set(),
    Z = !1;
function X(e) {
    let t = j[e];
    return null == t && (t = j[e] = { ...B }), t;
}
__OVERLAY__ &&
    (function (e) {
        if (__OVERLAY__) {
            if (O) return L.warn("Overlay logger already set up, skipping duplicate setup");
            (O = !0),
                (C = {
                    log: (t, n) => D({ level: "log", message: t, context: n }, e),
                    info: (t, n) => D({ level: "info", message: t, context: n }, e),
                    warn: (t, n) => D({ level: "warn", message: t, context: n }, e),
                    error: (t, n) => D({ level: "error", message: t, context: n }, e),
                    crash: (t, n) => D({ level: "crash", message: t, context: n }, e),
                }).info("Overlay logger initialized"),
                (console.log = function () {
                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    if ((L.log(...t), null != C))
                        try {
                            let e = v(t)
                                .map((e) => b(e))
                                .join(" ");
                            C.log(e);
                        } catch (e) {
                            L.error("[Logger Error]", e);
                        }
                }),
                (console.info = function () {
                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    if ((L.info(...t), null != C))
                        try {
                            let e = v(t)
                                .map((e) => b(e))
                                .join(" ");
                            C.info(e);
                        } catch (e) {
                            L.error("[Logger Error]", e);
                        }
                }),
                (console.warn = function () {
                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    if ((L.warn(...t), null != C))
                        try {
                            let e = v(t)
                                .map((e) => b(e))
                                .join(" ");
                            C.warn(e);
                        } catch (e) {
                            L.error("[Logger Error]", e);
                        }
                }),
                (console.error = function () {
                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    if ((L.error(...t), null != C))
                        try {
                            let e = v(t)
                                .map((e) => b(e))
                                .join(" ");
                            C.error(e);
                        } catch (e) {}
                }),
                window.addEventListener(
                    "error",
                    (e) => {
                        if (null != C)
                            try {
                                if (null != e.target && e.target !== window) {
                                    let t = e.target;
                                    C.error(`Resource failed to load: ${t.src || t.href || "unknown"}`, {
                                        type: "resource_error",
                                        tagName: t.tagName,
                                        src: t.src,
                                        href: t.href,
                                    });
                                } else
                                    C.crash(`Uncaught error: ${e.message}`, {
                                        message: e.message,
                                        filename: e.filename,
                                        lineno: e.lineno,
                                        colno: e.colno,
                                        error: e.error
                                            ? { name: e.error.name, message: e.error.message, stack: e.error.stack }
                                            : null,
                                    });
                            } catch (t) {
                                L.error("[Failed to log error]", t, e);
                            }
                    },
                    !0,
                ),
                window.addEventListener("unhandledrejection", (e) => {
                    if (null != C)
                        try {
                            let t = "Unhandled promise rejection",
                                n = {};
                            e.reason instanceof Error
                                ? ((t = `Unhandled promise rejection: ${e.reason.message}`),
                                  (n = { name: e.reason.name, message: e.reason.message, stack: e.reason.stack }))
                                : ("string" == typeof e.reason && (t = `Unhandled promise rejection: ${e.reason}`),
                                  (n = { reason: e.reason })),
                                C.crash(t, n);
                        } catch (t) {
                            L.error("[Failed to log rejection]", t, e);
                        }
                }),
                window.addEventListener("securitypolicyviolation", (e) => {
                    if (null != C)
                        try {
                            C.error("Security policy violation", {
                                violatedDirective: e.violatedDirective,
                                effectiveDirective: e.effectiveDirective,
                                blockedURI: e.blockedURI,
                                sourceFile: e.sourceFile,
                                lineNumber: e.lineNumber,
                                columnNumber: e.columnNumber,
                            });
                        } catch (t) {
                            L.error("[Failed to log security violation]", t, e);
                        }
                }),
                window.addEventListener("beforeunload", () => {
                    null != C && C.info("Overlay unloading"), null != R && clearInterval(R);
                }),
                (R = window.setInterval(() => {
                    if (null != C)
                        try {
                            C.log(I, {
                                timestamp: Date.now(),
                                memory: performance.memory
                                    ? {
                                          usedJSHeapSize: performance.memory.usedJSHeapSize,
                                          totalJSHeapSize: performance.memory.totalJSHeapSize,
                                      }
                                    : void 0,
                            });
                        } catch (e) {
                            L.error("[Heartbeat Error]", e);
                        }
                }, 1e4)),
                L.log("Overlay error handlers and console interception set up");
        }
    })((0, u.getRPCAuthToken)());
let Q = { ...B },
    J = new Set([
        "AUDIO_SET_INPUT_DEVICE",
        "AUDIO_SET_INPUT_VOLUME",
        "AUDIO_SET_LOCAL_VIDEO_DISABLED",
        "AUDIO_SET_LOCAL_VOLUME",
        "AUDIO_SET_MODE",
        "AUDIO_SET_NOISE_CANCELLATION",
        "AUDIO_SET_NOISE_SUPPRESSION",
        "AUDIO_SET_OUTPUT_DEVICE",
        "AUDIO_SET_OUTPUT_VOLUME",
        "AUDIO_TOGGLE_LOCAL_MUTE",
        "AUDIO_TOGGLE_SELF_DEAF",
        "AUDIO_TOGGLE_SELF_MUTE",
        "BILLING_SUBSCRIPTION_UPDATE_SUCCESS",
        "CATEGORY_COLLAPSE",
        "CATEGORY_EXPAND",
        "CHANNEL_ACK",
        "CHANNEL_PRELOAD",
        "GIFT_CODE_REDEEM",
        "GIFT_CODE_REDEEM_FAILURE",
        "GIFT_CODE_REDEEM_SUCCESS",
        "HOTSPOT_HIDE",
        "INVITE_MODAL_CLOSE",
        "LAYOUT_CREATE",
        "LAYOUT_CREATE_WIDGETS",
        "LAYOUT_DELETE_ALL_WIDGETS",
        "LAYOUT_DELETE_WIDGET",
        "LAYOUT_SET_PINNED",
        "LAYOUT_SET_TOP_WIDGET",
        "LAYOUT_UPDATE_WIDGET",
        "LOAD_MESSAGES",
        "LOAD_MESSAGES_FAILURE",
        "LOAD_MESSAGES_SUCCESS",
        "MEDIA_ENGINE_SET_GO_LIVE_SOURCE",
        "OVERLAY_ACTIVATE_REGION",
        "OVERLAY_DEACTIVATE_ALL_REGIONS",
        "OVERLAY_MESSAGE_EVENT_ACTION",
        "OVERLAY_SET_AVATAR_SIZE_MODE",
        "OVERLAY_SET_CLICK_ZONES",
        "OVERLAY_SET_DISPLAY_NAME_MODE",
        "OVERLAY_SET_DISPLAY_USER_MODE",
        "OVERLAY_SET_INPUT_LOCKED",
        "OVERLAY_SET_NOTIFICATION_POSITION_MODE",
        "OVERLAY_SET_DISABLE_CLICKABLE_REGIONS",
        "OVERLAY_SET_GAME_INVITE_NOTIFICATION",
        "OVERLAY_SET_INVITE_MESSAGE",
        "OVERLAY_SET_TEXT_WIDGET_OPACITY",
        "OVERLAY_SET_ENABLED",
        "OVERLAY_OAUTH2_AUTHORIZE_MODAL_OPEN",
        "OVERLAY_OAUTH2_AUTHORIZE_MODAL_CLOSE",
        "OVERLAY_TRACKED_GAME_UPDATE",
        "PREMIUM_PAYMENT_ERROR_CLEAR",
        "PREMIUM_PAYMENT_MODAL_CLOSE",
        "PREMIUM_PAYMENT_MODAL_OPEN",
        "PREMIUM_PAYMENT_SUBSCRIBE_FAIL",
        "PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS",
        "PREMIUM_PAYMENT_UPDATE_FAIL",
        "PREMIUM_PAYMENT_UPDATE_SUCCESS",
        "PREMIUM_REQUIRED_MODAL_CLOSE",
        "PREMIUM_REQUIRED_MODAL_OPEN",
        "PURCHASE_CONFIRMATION_MODAL_CLOSE",
        "PURCHASE_CONFIRMATION_MODAL_OPEN",
        "SKU_PURCHASE_CLEAR_ERROR",
        "SKU_PURCHASE_FAIL",
        "SKU_PURCHASE_MODAL_CLOSE",
        "SKU_PURCHASE_MODAL_OPEN",
        "SKU_PURCHASE_SHOW_CONFIRMATION_STEP",
        "SKU_PURCHASE_START",
        "SKU_PURCHASE_SUCCESS",
        "STREAM_CLOSE",
        "STREAM_START",
        "VOICE_CHANNEL_SELECT",
        "USER_SETTINGS_PROTO_ENQUEUE_UPDATE",
        "USER_SETTINGS_PROTO_LOAD_IF_NECESSARY",
    ]),
    ee = new Set([
        ...J.values(),
        "ACTIVITY_INVITE_MODAL_CLOSE",
        "CALL_DELETE",
        "CHANNEL_COLLAPSE",
        "CHANNEL_SELECT",
        "GUILD_SOUNDBOARD_SOUND_PLAY_LOCALLY",
        "OVERLAY_CALL_PRIVATE_CHANNEL",
        "OVERLAY_JOIN_GAME",
        "OVERLAY_NOTIFICATION_EVENT",
        "OVERLAY_SELECT_CALL",
        "OVERLAY_SET_NOT_IDLE",
        "OVERLAY_SOUNDBOARD_SOUNDS_FETCH_REQUEST",
        "OVERLAY_WIDGET_CHANGED",
        "SOUNDBOARD_SET_OVERLAY_ENABLED",
        "STREAM_STOP",
    ]);
function et() {
    if (!__OVERLAY__) return !1;
    let e = H === (0, u.getPID)(),
        t = Y.has((0, u.getPID)()) || q.size > 0;
    e && t ? (0, s.XC)(window, !0) : (0, s.XC)(window, !1);
}
function en() {
    if (H !== (0, u.getPID)()) return !1;
    q.clear();
}
function ei(e) {
    let t = (0, u.getPID)();
    if (null == e.pid || e.pid === t)
        switch (e.type) {
            case S.kGV.STORAGE_SYNC:
                i.Ay.PersistedStore.initializeAll(e.states);
                break;
            case S.kGV.DISPATCH:
                null != e.payloads &&
                    (($ = !0),
                    e.payloads.forEach((e) =>
                        (function (e) {
                            if (
                                ("OVERLAY_INITIALIZE" === e.type &&
                                    ((null == e.version && 1 === u.OVERLAY_VERSION) ||
                                        e.version === u.OVERLAY_VERSION ||
                                        (a.h.dispatch({ type: "OVERLAY_INCOMPATIBLE_APP" }), (0, l.Zf)(), 0)) &&
                                    (z = !0),
                                z)
                            )
                                switch (e.type) {
                                    case "CHANNEL_CREATE":
                                    case "THREAD_CREATE":
                                    case "THREAD_UPDATE":
                                    case "CHANNEL_DELETE":
                                    case "THREAD_DELETE":
                                        let t = (0, P.createChannelRecord)(e.channel);
                                        if (!P.A_.has(t.type)) break;
                                        a.h.dispatch({ type: e.type, channel: t });
                                        break;
                                    case "CHANNEL_UPDATES":
                                        a.h.dispatch({
                                            type: e.type,
                                            channels: e.channels.map((e) => (0, P.createChannelRecord)(e)),
                                        });
                                        break;
                                    case "CONNECTION_OPEN_SUPPLEMENTAL":
                                        (e.lazyPrivateChannels = (e.lazyPrivateChannels ?? []).map((e) =>
                                            (0, P.createChannelRecord)(e),
                                        )),
                                            a.h.dispatch(e);
                                        break;
                                    case "THREAD_LIST_SYNC":
                                        a.h.dispatch({
                                            ...e,
                                            threads: e.threads.map((e) => (0, P.createChannelRecord)(e)),
                                        });
                                        break;
                                    case "GUILD_CREATE":
                                        let n = (e) => (0, P.createChannelRecord)(e),
                                            i = e.guild;
                                        switch (((i.threads = i.threads?.map(n)), i.channels.op)) {
                                            case "full_sync":
                                                i.channels.items = i.channels.items.map(n);
                                                break;
                                            case "update":
                                                i.channels.writes = i.channels.writes.map(n);
                                                break;
                                            default:
                                                i.channels;
                                        }
                                        a.h.dispatch({ type: "GUILD_CREATE", guild: i });
                                        break;
                                    case "USER_SETTINGS_PROTO_UPDATE":
                                        a.h.dispatch({
                                            ...e,
                                            settings: {
                                                proto: (0, M.Y5)(e.settings.type, e.settings.proto),
                                                type: e.settings.type,
                                            },
                                        });
                                        break;
                                    default:
                                        a.h.dispatch(e);
                                }
                        })(e),
                    ),
                    ($ = !1));
        }
}
let er = new Map();
class ea extends i.Ay.PersistedStore {
    static displayName = "OverlayStore";
    static persistKey = "OverlayStoreV2";
    static migrations = [
        () => {
            let { pinnedWidgets: e, positions: t, sizes: n, v: i, ...a } = { ...r.w.get("OverlayStore") };
            return { ...B, ...(5 === i ? a : null) };
        },
        (e) => {
            let t = U.default.getId();
            return null == e || null == t ? {} : { [t]: { ...e } };
        },
    ];
    initialize(e) {
        if (
            (this.waitFor(U.default, w.A, G.Ay, x.A, k.A, F.A),
            this.syncWith([U.default], () => {
                let e = U.default.getId();
                Q = null != e ? X(e) : { ...B };
            }),
            __OVERLAY__ && Y.delete((0, u.getPID)()),
            null != e)
        ) {
            j = e;
            let t = U.default.getId();
            null != t &&
                (null == (Q = X(t)).textChatNotifications && (Q.textChatNotifications = B.textChatNotifications),
                null == Q.textWidgetOpacity && (Q.textWidgetOpacity = B.textWidgetOpacity),
                null == Q.disableClickableRegions && (Q.disableClickableRegions = B.disableClickableRegions));
        }
    }
    getState() {
        return j;
    }
    isLocked(e) {
        return !Y.has(e);
    }
    isInstanceLocked() {
        return !Y.has((0, u.getPID)());
    }
    isInstanceFocused() {
        return H === (0, u.getPID)();
    }
    isFocused(e) {
        return H === e;
    }
    isPinned(e) {
        let t = x.A.getLayout(u.OVERLAY_LAYOUT_ID);
        return (
            null != t &&
            null !=
                t.widgets.find((t) => {
                    let n = x.A.getWidget(t);
                    return null != n && n.type === e && !!n.pinned;
                })
        );
    }
    getSelectedGuildId() {
        return Q.selectedGuildId;
    }
    getSelectedChannelId() {
        return Q.selectedChannelId;
    }
    getSelectedCallId() {
        return W;
    }
    getDisplayUserMode() {
        return Q.displayUserMode;
    }
    getDisplayNameMode() {
        return Q.displayNameMode;
    }
    getAvatarSizeMode() {
        return Q.avatarSizeMode;
    }
    getNotificationPositionMode() {
        return Q.notificationPositionMode;
    }
    get showInviteNotification() {
        return null == Q.showGameInviteNotification || Q.showGameInviteNotification;
    }
    get disableClickableRegions() {
        return null != Q.disableClickableRegions && Q.disableClickableRegions;
    }
    get customInviteMessage() {
        return Q.customInviteMessage;
    }
    getDisableExternalLinkAlert() {
        return Q.disableExternalLinkAlert;
    }
    getFocusedPID() {
        return H;
    }
    get initialized() {
        return z;
    }
    get incompatibleApp() {
        return K;
    }
    getActiveRegions() {
        return q;
    }
    getTextWidgetOpacity() {
        return Q.textWidgetOpacity;
    }
    isPreviewingInGame() {
        return Z;
    }
    getTrackedGame(e) {
        return er.get(e) ?? null;
    }
}
let es = new ea(a.h, {
    LOGOUT: function (e) {
        e.isSwitchingAccount || (j = {});
    },
    MULTI_ACCOUNT_REMOVE_ACCOUNT: function (e) {
        e.userId in j && delete j[e.userId];
    },
    CONNECTION_CLOSED: function () {
        Y.clear();
    },
    OVERLAY_START_SESSION: function () {
        a.h.addInterceptor((e) => {
            if ($ || !ee.has(e.type)) return !1;
            if ("CHANNEL_SELECT" === e.type) {
                let { guildId: t, channelId: n } = e;
                return (
                    null != n &&
                    ((0, l.tN)({
                        type: S.kGV.DISPATCH,
                        pid: (0, u.getPID)(),
                        token: (0, u.getRPCAuthToken)(),
                        payloads: [
                            { type: "CHANNEL_PRELOAD", guildId: t === S.ME ? null : t, channelId: n, context: S.QCW },
                            { type: "OVERLAY_SELECT_CHANNEL", guildId: t, channelId: n },
                        ],
                    }),
                    !1)
                );
            }
            return (
                (0, l.tN)({
                    type: S.kGV.DISPATCH,
                    pid: (0, u.getPID)(),
                    token: (0, u.getRPCAuthToken)(),
                    payloads: [e],
                }),
                !J.has(e.type)
            );
        }),
            (0, l.QZ)(ei, (0, u.getRPCAuthToken)()),
            (0, l.Ng)(),
            (0, l.tN)({ type: S.kGV.CONNECT, pid: (0, u.getPID)(), token: (0, u.getRPCAuthToken)() });
    },
    OVERLAY_INITIALIZE: function (e) {
        let { focusedPID: t, trackedGames: n, overlayStoredSettings: i } = e;
        (H = t),
            __OVERLAY__ &&
                (n.forEach((e) => {
                    er.set(e.pid, e);
                }),
                o.x.update({ legacyEnabled: i.legacyEnabled, oopEnabled: i.oopEnabled }));
    },
    OVERLAY_READY: function () {
        let e = Q.selectedGuildId,
            t = Q.selectedChannelId;
        if (
            (null == e ||
                (G.Ay.hasChannels(e) && (null == t || G.Ay.hasSelectableChannel(e, t))) ||
                ((e = null), (t = null)),
            null != t && null == w.A.getChannel(t) && ((e = null), (t = null)),
            null == e && null == t && (e = k.A.getGuildId()),
            null != e && null == t)
        ) {
            let n = G.Ay.getDefaultChannel(e);
            null != n && (t = n.id);
        }
        (Q.selectedGuildId = e), (Q.selectedChannelId = t);
    },
    OVERLAY_FOCUSED: function (e) {
        let { pid: t } = e;
        (H = t), et();
    },
    OVERLAY_SELECT_CHANNEL: function (e) {
        let { guildId: t, channelId: n } = e;
        (Q.selectedGuildId = t), (Q.selectedChannelId = n);
    },
    OVERLAY_SELECT_CALL: function (e) {
        let { callId: t } = e;
        W = t;
    },
    CALL_DELETE: function () {
        W = null;
    },
    LAYOUT_CREATE: function () {},
    OVERLAY_SET_ENABLED: function (e) {
        __OVERLAY__ && o.x.update({ legacyEnabled: e.legacyEnabled, oopEnabled: e.oopEnabled });
    },
    OVERLAY_SET_DISPLAY_NAME_MODE: function (e) {
        let { mode: t } = e;
        Q.displayNameMode = t;
    },
    OVERLAY_SET_DISPLAY_USER_MODE: function (e) {
        let { mode: t } = e;
        Q.displayUserMode = t;
    },
    OVERLAY_SET_AVATAR_SIZE_MODE: function (e) {
        let { mode: t } = e;
        Q.avatarSizeMode = t;
    },
    OVERLAY_SET_NOTIFICATION_POSITION_MODE: function (e) {
        let { mode: t } = e;
        Q.notificationPositionMode = t;
    },
    OVERLAY_SET_DISABLE_CLICKABLE_REGIONS: function (e) {
        let { disable: t } = e;
        Q.disableClickableRegions = t;
    },
    OVERLAY_SET_INVITE_MESSAGE: function (e) {
        let { message: t } = e,
            n = Q.customInviteMessage !== t;
        return (Q.customInviteMessage = t), n;
    },
    OVERLAY_SET_GAME_INVITE_NOTIFICATION: function (e) {
        let { shouldShow: t } = e,
            n = Q.showGameInviteNotification !== t;
        return (Q.showGameInviteNotification = t), n;
    },
    OVERLAY_SET_TEXT_WIDGET_OPACITY: function (e) {
        let { opacity: t } = e,
            n = Q.textWidgetOpacity !== t;
        return (Q.textWidgetOpacity = t), n;
    },
    OVERLAY_DISABLE_EXTERNAL_LINK_ALERT: function () {
        Q.disableExternalLinkAlert = !0;
    },
    OVERLAY_INCOMPATIBLE_APP: function () {
        K = !0;
    },
    OVERLAY_SET_INPUT_LOCKED: function (e) {
        let { locked: t, pid: n } = e;
        t ? Y.delete(n) : Y.add(n), en(), et(), (Z = !1);
    },
    OVERLAY_ACTIVATE_REGION: function (e) {
        let { region: t } = e;
        if (H !== (0, u.getPID)() || q.has(t)) return !1;
        q.add(t);
    },
    OVERLAY_DEACTIVATE_ALL_REGIONS: en,
    OVERLAY_SET_PREVIEW_IN_GAME_MODE: function (e) {
        Z = e.isPreviewingInGame;
    },
    WINDOW_RESIZED: function () {
        if (__OVERLAY__) {
            let e = F.A.windowSize();
            (0, u.validResolution)(e) || (Z = !1);
        }
    },
    OVERLAY_SET_ASSOCIATED_GAME: function (e) {
        Y.delete(e.previousAssociatedGamePID);
    },
    OVERLAY_TRACKED_GAME_UPDATE: function (e) {
        __OVERLAY__ && (null != e.trackedGame ? er.set(e.pid, e.trackedGame) : er.delete(e.pid));
    },
});
