"use strict";
n.r(t), n.d(t, { default: () => ea });
var i = n(17928),
    r = n(506774),
    s = n(228366),
    a = n(350723),
    o = n(996308),
    l = n(211753);
n(321073);
var u = n(941426),
    c = n(92277),
    d = n(9302),
    _ = n(635731),
    f = n(41984),
    h = n(127242);
let p = new u.Vy("LegacyOverlayClient"),
    E = "Heartbeat",
    m = new _.A(1e3),
    g = null,
    A = null;
function I() {
    null == A &&
        (A = setInterval(() => {
            if (null != g) {
                let e = Date.now() - g;
                e > 2e4 &&
                    (p.warn(`No heartbeat for ${Math.round(e / 1e3)}s - overlay may be unresponsive`), (g = null));
            }
        }, 1e4));
}
class T extends i.Ay.Store {
    static displayName = "OverlayRPCLogStore";
    initialize() {
        this.waitFor(h.A), h.A.hasRenderDebugMode(f.x7.LegacyOverlayLogging) && I();
    }
    getAllLogs() {
        return m;
    }
    getLogsByLevel(e) {
        return m.filter((t) => t.level === e);
    }
    getErrorLogs() {
        return m.filter((e) => "error" === e.level || "crash" === e.level);
    }
}
new T(s.h, {
    OVERLAY_RENDER_DEBUG_MODE: function (e) {
        let { enabled: t, mode: n } = e;
        return n === f.x7.LegacyOverlayLogging && (t ? I() : null != A && (clearInterval(A), (A = null))), !1;
    },
    OVERLAY_ADD_LOGS_BATCH: function (e) {
        let { logs: t } = e;
        return (
            t.forEach((e) =>
                (function (e) {
                    let { level: t, message: n, timestamp: i, context: r } = e;
                    if (!h.A.hasRenderDebugMode(f.x7.LegacyOverlayLogging) || __OVERLAY__) return !1;
                    if (
                        (m.push({ level: t, message: n, timestamp: i, context: r }),
                        n === E && (g = Date.now()),
                        n !== E)
                    )
                        switch (t) {
                            case "error":
                            case "crash":
                                p.error(n);
                                break;
                            case "warn":
                                p.warn(n);
                                break;
                            case "info":
                                p.info(n);
                                break;
                            default:
                                p.log(n);
                        }
                    return !0;
                })(e),
            ),
            !0
        );
    },
});
var S = n(652215);
let N = new u.Vy("LegacyOverlayLogger"),
    y = null,
    C = !1,
    v = null,
    O = {
        log: console.log.bind(console),
        info: console.info.bind(console),
        warn: console.warn.bind(console),
        error: console.error.bind(console),
    },
    R = 0;
async function b(e, t) {
    if (!__OVERLAY__) return void N.warn("sendLegacyOverlayLog called from main app context, logging locally instead");
    if (R > 10) return;
    let { level: n, message: i, context: r } = e,
        s = null;
    if (null != r)
        try {
            s = (0, c.g)(r);
        } catch (e) {
            try {
                s = { _error: "Failed to serialize context", _type: Object.prototype.toString.call(r) };
            } catch (e) {
                s = { _error: "Context not serializable" };
            }
        }
    let a = {
        type: S.kGV.LOG_MESSAGES,
        token: t,
        pid: (0, d.getPID)(),
        payload: { level: n, message: i, timestamp: Date.now(), context: s },
    };
    try {
        await o.tN(a), (R = 0);
    } catch (e) {
        ++R <= 3 &&
            (N.error(`Failed to send log to main app (failure ${R}):`, e),
            3 === R && N.error("Too many RPC send failures, suppressing further error logs"));
    }
}
function D(e) {
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
function L(e) {
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
var w = n(761821),
    M = n(95701),
    P = n(495544),
    x = n(734057),
    U = n(808728),
    k = n(38502),
    G = n(967198),
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
    Y = null,
    W = new Set(),
    K = !1,
    z = !1,
    $ = !1,
    q = new Set(),
    Z = !1;
function X(e) {
    let t = j[e];
    return null == t && (t = j[e] = { ...B }), t;
}
__OVERLAY__ &&
    (function (e) {
        if (__OVERLAY__) {
            if (C) return O.warn("Overlay logger already set up, skipping duplicate setup");
            (C = !0),
                (y = {
                    log: (t, n) => b({ level: "log", message: t, context: n }, e),
                    info: (t, n) => b({ level: "info", message: t, context: n }, e),
                    warn: (t, n) => b({ level: "warn", message: t, context: n }, e),
                    error: (t, n) => b({ level: "error", message: t, context: n }, e),
                    crash: (t, n) => b({ level: "crash", message: t, context: n }, e),
                }).info("Overlay logger initialized"),
                (console.log = function () {
                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    if ((O.log(...t), null != y))
                        try {
                            let e = D(t)
                                .map((e) => L(e))
                                .join(" ");
                            y.log(e);
                        } catch (e) {
                            O.error("[Logger Error]", e);
                        }
                }),
                (console.info = function () {
                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    if ((O.info(...t), null != y))
                        try {
                            let e = D(t)
                                .map((e) => L(e))
                                .join(" ");
                            y.info(e);
                        } catch (e) {
                            O.error("[Logger Error]", e);
                        }
                }),
                (console.warn = function () {
                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    if ((O.warn(...t), null != y))
                        try {
                            let e = D(t)
                                .map((e) => L(e))
                                .join(" ");
                            y.warn(e);
                        } catch (e) {
                            O.error("[Logger Error]", e);
                        }
                }),
                (console.error = function () {
                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    if ((O.error(...t), null != y))
                        try {
                            let e = D(t)
                                .map((e) => L(e))
                                .join(" ");
                            y.error(e);
                        } catch (e) {}
                }),
                window.addEventListener(
                    "error",
                    (e) => {
                        if (null != y)
                            try {
                                if (null != e.target && e.target !== window) {
                                    let t = e.target;
                                    y.error(`Resource failed to load: ${t.src || t.href || "unknown"}`, {
                                        type: "resource_error",
                                        tagName: t.tagName,
                                        src: t.src,
                                        href: t.href,
                                    });
                                } else
                                    y.crash(`Uncaught error: ${e.message}`, {
                                        message: e.message,
                                        filename: e.filename,
                                        lineno: e.lineno,
                                        colno: e.colno,
                                        error: e.error
                                            ? { name: e.error.name, message: e.error.message, stack: e.error.stack }
                                            : null,
                                    });
                            } catch (t) {
                                O.error("[Failed to log error]", t, e);
                            }
                    },
                    !0,
                ),
                window.addEventListener("unhandledrejection", (e) => {
                    if (null != y)
                        try {
                            let t = "Unhandled promise rejection",
                                n = {};
                            e.reason instanceof Error
                                ? ((t = `Unhandled promise rejection: ${e.reason.message}`),
                                  (n = { name: e.reason.name, message: e.reason.message, stack: e.reason.stack }))
                                : ("string" == typeof e.reason && (t = `Unhandled promise rejection: ${e.reason}`),
                                  (n = { reason: e.reason })),
                                y.crash(t, n);
                        } catch (t) {
                            O.error("[Failed to log rejection]", t, e);
                        }
                }),
                window.addEventListener("securitypolicyviolation", (e) => {
                    if (null != y)
                        try {
                            y.error("Security policy violation", {
                                violatedDirective: e.violatedDirective,
                                effectiveDirective: e.effectiveDirective,
                                blockedURI: e.blockedURI,
                                sourceFile: e.sourceFile,
                                lineNumber: e.lineNumber,
                                columnNumber: e.columnNumber,
                            });
                        } catch (t) {
                            O.error("[Failed to log security violation]", t, e);
                        }
                }),
                window.addEventListener("beforeunload", () => {
                    null != y && y.info("Overlay unloading"), null != v && clearInterval(v);
                }),
                (v = window.setInterval(() => {
                    if (null != y)
                        try {
                            y.log(E, {
                                timestamp: Date.now(),
                                memory: performance.memory
                                    ? {
                                          usedJSHeapSize: performance.memory.usedJSHeapSize,
                                          totalJSHeapSize: performance.memory.totalJSHeapSize,
                                      }
                                    : void 0,
                            });
                        } catch (e) {
                            O.error("[Heartbeat Error]", e);
                        }
                }, 1e4)),
                O.log("Overlay error handlers and console interception set up");
        }
    })((0, d.getRPCAuthToken)());
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
    let e = H === (0, d.getPID)(),
        t = W.has((0, d.getPID)()) || q.size > 0;
    e && t ? (0, a.XC)(window, !0) : (0, a.XC)(window, !1);
}
function en() {
    if (H !== (0, d.getPID)()) return !1;
    q.clear();
}
function ei(e) {
    let t = (0, d.getPID)();
    if (null == e.pid || e.pid === t)
        switch (e.type) {
            case S.kGV.STORAGE_SYNC:
                i.Ay.PersistedStore.initializeAll(e.states);
                break;
            case S.kGV.DISPATCH:
                null != e.payloads &&
                    ((z = !0),
                    e.payloads.forEach((e) =>
                        (function (e) {
                            if (
                                ("OVERLAY_INITIALIZE" === e.type &&
                                    ((null == e.version && 1 === d.OVERLAY_VERSION) ||
                                        e.version === d.OVERLAY_VERSION ||
                                        (s.h.dispatch({ type: "OVERLAY_INCOMPATIBLE_APP" }), (0, o.Zf)(), 0)) &&
                                    ($ = !0),
                                $)
                            )
                                switch (e.type) {
                                    case "CHANNEL_CREATE":
                                    case "THREAD_CREATE":
                                    case "THREAD_UPDATE":
                                    case "CHANNEL_DELETE":
                                    case "THREAD_DELETE":
                                        let t = (0, M.createChannelRecord)(e.channel);
                                        if (!M.A_.has(t.type)) break;
                                        s.h.dispatch({ type: e.type, channel: t });
                                        break;
                                    case "CHANNEL_UPDATES":
                                        s.h.dispatch({
                                            type: e.type,
                                            channels: e.channels.map((e) => (0, M.createChannelRecord)(e)),
                                        });
                                        break;
                                    case "CONNECTION_OPEN_SUPPLEMENTAL":
                                        (e.lazyPrivateChannels = (e.lazyPrivateChannels ?? []).map((e) =>
                                            (0, M.createChannelRecord)(e),
                                        )),
                                            s.h.dispatch(e);
                                        break;
                                    case "THREAD_LIST_SYNC":
                                        s.h.dispatch({
                                            ...e,
                                            threads: e.threads.map((e) => (0, M.createChannelRecord)(e)),
                                        });
                                        break;
                                    case "GUILD_CREATE":
                                        let n = (e) => (0, M.createChannelRecord)(e),
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
                                        s.h.dispatch({ type: "GUILD_CREATE", guild: i });
                                        break;
                                    case "USER_SETTINGS_PROTO_UPDATE":
                                        s.h.dispatch({
                                            ...e,
                                            settings: {
                                                proto: (0, w.Y5)(e.settings.type, e.settings.proto),
                                                type: e.settings.type,
                                            },
                                        });
                                        break;
                                    default:
                                        s.h.dispatch(e);
                                }
                        })(e),
                    ),
                    (z = !1));
        }
}
let er = new Map();
class es extends i.Ay.PersistedStore {
    static displayName = "OverlayStore";
    static persistKey = "OverlayStoreV2";
    static migrations = [
        () => {
            let { pinnedWidgets: e, positions: t, sizes: n, v: i, ...s } = { ...r.w.get("OverlayStore") };
            return { ...B, ...(5 === i ? s : null) };
        },
        (e) => {
            let t = P.default.getId();
            return null == e || null == t ? {} : { [t]: { ...e } };
        },
    ];
    initialize(e) {
        if (
            (this.waitFor(P.default, x.A, U.Ay, k.A, G.A, F.A),
            this.syncWith([P.default], () => {
                let e = P.default.getId();
                Q = null != e ? X(e) : { ...B };
            }),
            __OVERLAY__ && W.delete((0, d.getPID)()),
            null != e)
        ) {
            j = e;
            let t = P.default.getId();
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
        return !W.has(e);
    }
    isInstanceLocked() {
        return !W.has((0, d.getPID)());
    }
    isInstanceFocused() {
        return H === (0, d.getPID)();
    }
    isFocused(e) {
        return H === e;
    }
    isPinned(e) {
        let t = k.A.getLayout(d.OVERLAY_LAYOUT_ID);
        return (
            null != t &&
            null !=
                t.widgets.find((t) => {
                    let n = k.A.getWidget(t);
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
        return Y;
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
        return $;
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
let ea = new es(s.h, {
    LOGOUT: function (e) {
        e.isSwitchingAccount || (j = {});
    },
    MULTI_ACCOUNT_REMOVE_ACCOUNT: function (e) {
        e.userId in j && delete j[e.userId];
    },
    CONNECTION_CLOSED: function () {
        W.clear();
    },
    OVERLAY_START_SESSION: function () {
        s.h.addInterceptor((e) => {
            if (z || !ee.has(e.type)) return !1;
            if ("CHANNEL_SELECT" === e.type) {
                let { guildId: t, channelId: n } = e;
                return (
                    null != n &&
                    ((0, o.tN)({
                        type: S.kGV.DISPATCH,
                        pid: (0, d.getPID)(),
                        token: (0, d.getRPCAuthToken)(),
                        payloads: [
                            { type: "CHANNEL_PRELOAD", guildId: t === S.ME ? null : t, channelId: n, context: S.QCW },
                            { type: "OVERLAY_SELECT_CHANNEL", guildId: t, channelId: n },
                        ],
                    }),
                    !1)
                );
            }
            return (
                (0, o.tN)({
                    type: S.kGV.DISPATCH,
                    pid: (0, d.getPID)(),
                    token: (0, d.getRPCAuthToken)(),
                    payloads: [e],
                }),
                !J.has(e.type)
            );
        }),
            (0, o.QZ)(ei, (0, d.getRPCAuthToken)()),
            (0, o.Ng)(),
            (0, o.tN)({ type: S.kGV.CONNECT, pid: (0, d.getPID)(), token: (0, d.getRPCAuthToken)() });
    },
    OVERLAY_INITIALIZE: function (e) {
        let { focusedPID: t, trackedGames: n, overlayStoredSettings: i } = e;
        (H = t),
            __OVERLAY__ &&
                (n.forEach((e) => {
                    er.set(e.pid, e);
                }),
                l.x.update({ legacyEnabled: i.legacyEnabled, oopEnabled: i.oopEnabled }));
    },
    OVERLAY_READY: function () {
        let e = Q.selectedGuildId,
            t = Q.selectedChannelId;
        if (
            (null == e ||
                (U.Ay.hasChannels(e) && (null == t || U.Ay.hasSelectableChannel(e, t))) ||
                ((e = null), (t = null)),
            null != t && null == x.A.getChannel(t) && ((e = null), (t = null)),
            null == e && null == t && (e = G.A.getGuildId()),
            null != e && null == t)
        ) {
            let n = U.Ay.getDefaultChannel(e);
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
        Y = t;
    },
    CALL_DELETE: function () {
        Y = null;
    },
    LAYOUT_CREATE: function () {},
    OVERLAY_SET_ENABLED: function (e) {
        __OVERLAY__ && l.x.update({ legacyEnabled: e.legacyEnabled, oopEnabled: e.oopEnabled });
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
        t ? W.delete(n) : W.add(n), en(), et(), (Z = !1);
    },
    OVERLAY_ACTIVATE_REGION: function (e) {
        let { region: t } = e;
        if (H !== (0, d.getPID)() || q.has(t)) return !1;
        q.add(t);
    },
    OVERLAY_DEACTIVATE_ALL_REGIONS: en,
    OVERLAY_SET_PREVIEW_IN_GAME_MODE: function (e) {
        Z = e.isPreviewingInGame;
    },
    WINDOW_RESIZED: function () {
        if (__OVERLAY__) {
            let e = F.A.windowSize();
            (0, d.validResolution)(e) || (Z = !1);
        }
    },
    OVERLAY_SET_ASSOCIATED_GAME: function (e) {
        W.delete(e.previousAssociatedGamePID);
    },
    OVERLAY_TRACKED_GAME_UPDATE: function (e) {
        __OVERLAY__ && (null != e.trackedGame ? er.set(e.pid, e.trackedGame) : er.delete(e.pid));
    },
});
