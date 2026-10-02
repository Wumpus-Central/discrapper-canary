(n.r(t), n.d(t, { default: () => Z }));
var i = n(17928),
    r = n(506774),
    a = n(73153),
    s = n(350723),
    l = n(996308),
    o = n(211753);
n(321073);
var d = n(941426),
    c = n(92277),
    u = n(9302),
    _ = n(652215);
let E = new d.Vy("LegacyOverlayLogger"),
    A = null,
    h = !1,
    I = null,
    f = {
        log: console.log.bind(console),
        info: console.info.bind(console),
        warn: console.warn.bind(console),
        error: console.error.bind(console),
    },
    p = 0;
async function T(e, t) {
    if (!__OVERLAY__) return void E.warn("sendLegacyOverlayLog called from main app context, logging locally instead");
    if (p > 10) return;
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
        type: _.kGV.LOG_MESSAGES,
        token: t,
        pid: (0, u.getPID)(),
        payload: { level: n, message: i, timestamp: Date.now(), context: a },
    };
    try {
        (await l.tN(s), (p = 0));
    } catch (e) {
        ++p <= 3 &&
            (E.error(`Failed to send log to main app (failure ${p}):`, e),
            3 === p && E.error("Too many RPC send failures, suppressing further error logs"));
    }
}
function m(e) {
    if (0 === e.length) return e;
    let t = [];
    for (let n = 0; n < e.length; n++) {
        let i = e[n];
        if ("string" == typeof i && i.includes("%c")) {
            let e = i.replace(/%c/g, "");
            ("" !== e.trim() && t.push(e), (n += (i.match(/%c/g) ?? []).length));
            continue;
        }
        ("string" == typeof i && /^\s*(font-weight|color|background|padding|margin|border)/.test(i)) || t.push(i);
    }
    return t;
}
function g(e) {
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
var S = n(761821),
    N = n(95701),
    C = n(280450),
    O = n(734057),
    R = n(808728),
    L = n(38502),
    y = n(967198),
    D = n(531685),
    v = n(672396);
let b = Object.freeze({
        selectedGuildId: null,
        selectedChannelId: null,
        displayUserMode: _.f5z.ALWAYS,
        displayNameMode: _.pwA.ALWAYS,
        avatarSizeMode: _.OSZ.LARGE,
        notificationPositionMode: _.G6Q.TOP_LEFT,
        textChatNotifications: _.iXc.ENABLED,
        disableExternalLinkAlert: !1,
        disablePinTutorial: !1,
        disableClickableRegions: !1,
        textWidgetOpacity: v.Li.LOWER,
        showGameInviteNotification: !0,
        customInviteMessage: void 0,
    }),
    M = null,
    P = {},
    U = null,
    w = new Set(),
    G = !1,
    x = !1,
    k = !1,
    F = new Set(),
    B = !1;
function V(e) {
    let t = P[e];
    return (null == t && (t = P[e] = { ...b }), t);
}
__OVERLAY__ &&
    (function (e) {
        if (__OVERLAY__) {
            if (h) return f.warn("Overlay logger already set up, skipping duplicate setup");
            ((h = !0),
                (A = {
                    log: (t, n) => T({ level: "log", message: t, context: n }, e),
                    info: (t, n) => T({ level: "info", message: t, context: n }, e),
                    warn: (t, n) => T({ level: "warn", message: t, context: n }, e),
                    error: (t, n) => T({ level: "error", message: t, context: n }, e),
                    crash: (t, n) => T({ level: "crash", message: t, context: n }, e),
                }).info("Overlay logger initialized"),
                (console.log = function () {
                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    if ((f.log(...t), null != A))
                        try {
                            let e = m(t)
                                .map((e) => g(e))
                                .join(" ");
                            A.log(e);
                        } catch (e) {
                            f.error("[Logger Error]", e);
                        }
                }),
                (console.info = function () {
                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    if ((f.info(...t), null != A))
                        try {
                            let e = m(t)
                                .map((e) => g(e))
                                .join(" ");
                            A.info(e);
                        } catch (e) {
                            f.error("[Logger Error]", e);
                        }
                }),
                (console.warn = function () {
                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    if ((f.warn(...t), null != A))
                        try {
                            let e = m(t)
                                .map((e) => g(e))
                                .join(" ");
                            A.warn(e);
                        } catch (e) {
                            f.error("[Logger Error]", e);
                        }
                }),
                (console.error = function () {
                    for (var e = arguments.length, t = Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    if ((f.error(...t), null != A))
                        try {
                            let e = m(t)
                                .map((e) => g(e))
                                .join(" ");
                            A.error(e);
                        } catch (e) {}
                }),
                window.addEventListener(
                    "error",
                    (e) => {
                        if (null != A)
                            try {
                                if (null != e.target && e.target !== window) {
                                    let t = e.target;
                                    A.error(`Resource failed to load: ${t.src || t.href || "unknown"}`, {
                                        type: "resource_error",
                                        tagName: t.tagName,
                                        src: t.src,
                                        href: t.href,
                                    });
                                } else
                                    A.crash(`Uncaught error: ${e.message}`, {
                                        message: e.message,
                                        filename: e.filename,
                                        lineno: e.lineno,
                                        colno: e.colno,
                                        error: e.error
                                            ? { name: e.error.name, message: e.error.message, stack: e.error.stack }
                                            : null,
                                    });
                            } catch (t) {
                                f.error("[Failed to log error]", t, e);
                            }
                    },
                    !0,
                ),
                window.addEventListener("unhandledrejection", (e) => {
                    if (null != A)
                        try {
                            let t = "Unhandled promise rejection",
                                n = {};
                            (e.reason instanceof Error
                                ? ((t = `Unhandled promise rejection: ${e.reason.message}`),
                                  (n = { name: e.reason.name, message: e.reason.message, stack: e.reason.stack }))
                                : ("string" == typeof e.reason && (t = `Unhandled promise rejection: ${e.reason}`),
                                  (n = { reason: e.reason })),
                                A.crash(t, n));
                        } catch (t) {
                            f.error("[Failed to log rejection]", t, e);
                        }
                }),
                window.addEventListener("securitypolicyviolation", (e) => {
                    if (null != A)
                        try {
                            A.error("Security policy violation", {
                                violatedDirective: e.violatedDirective,
                                effectiveDirective: e.effectiveDirective,
                                blockedURI: e.blockedURI,
                                sourceFile: e.sourceFile,
                                lineNumber: e.lineNumber,
                                columnNumber: e.columnNumber,
                            });
                        } catch (t) {
                            f.error("[Failed to log security violation]", t, e);
                        }
                }),
                window.addEventListener("beforeunload", () => {
                    (null != A && A.info("Overlay unloading"), null != I && clearInterval(I));
                }),
                (I = window.setInterval(() => {
                    if (null != A)
                        try {
                            A.log("Heartbeat", {
                                timestamp: Date.now(),
                                memory: performance.memory
                                    ? {
                                          usedJSHeapSize: performance.memory.usedJSHeapSize,
                                          totalJSHeapSize: performance.memory.totalJSHeapSize,
                                      }
                                    : void 0,
                            });
                        } catch (e) {
                            f.error("[Heartbeat Error]", e);
                        }
                }, 1e4)),
                f.log("Overlay error handlers and console interception set up"));
        }
    })((0, u.getRPCAuthToken)());
let H = { ...b },
    j = new Set([
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
    W = new Set([
        ...j.values(),
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
function Y() {
    if (!__OVERLAY__) return !1;
    let e = M === (0, u.getPID)(),
        t = w.has((0, u.getPID)()) || F.size > 0;
    e && t ? (0, s.XC)(window, !0) : (0, s.XC)(window, !1);
}
function K() {
    if (M !== (0, u.getPID)()) return !1;
    F.clear();
}
function $(e) {
    let t = (0, u.getPID)();
    if (null == e.pid || e.pid === t)
        switch (e.type) {
            case _.kGV.STORAGE_SYNC:
                i.Ay.PersistedStore.initializeAll(e.states);
                break;
            case _.kGV.DISPATCH:
                null != e.payloads &&
                    ((x = !0),
                    e.payloads.forEach((e) =>
                        (function (e) {
                            if (
                                ("OVERLAY_INITIALIZE" === e.type &&
                                    ((null == e.version && 1 === u.OVERLAY_VERSION) ||
                                        e.version === u.OVERLAY_VERSION ||
                                        (a.h.dispatch({ type: "OVERLAY_INCOMPATIBLE_APP" }), (0, l.Zf)(), 0)) &&
                                    (k = !0),
                                k)
                            )
                                switch (e.type) {
                                    case "CHANNEL_CREATE":
                                    case "THREAD_CREATE":
                                    case "THREAD_UPDATE":
                                    case "CHANNEL_DELETE":
                                    case "THREAD_DELETE":
                                        let t = (0, N.createChannelRecord)(e.channel);
                                        if (!N.A_.has(t.type)) break;
                                        a.h.dispatch({ type: e.type, channel: t });
                                        break;
                                    case "CHANNEL_UPDATES":
                                        a.h.dispatch({
                                            type: e.type,
                                            channels: e.channels.map((e) => (0, N.createChannelRecord)(e)),
                                        });
                                        break;
                                    case "CONNECTION_OPEN_SUPPLEMENTAL":
                                        ((e.lazyPrivateChannels = (e.lazyPrivateChannels ?? []).map((e) =>
                                            (0, N.createChannelRecord)(e),
                                        )),
                                            a.h.dispatch(e));
                                        break;
                                    case "THREAD_LIST_SYNC":
                                        a.h.dispatch({
                                            ...e,
                                            threads: e.threads.map((e) => (0, N.createChannelRecord)(e)),
                                        });
                                        break;
                                    case "GUILD_CREATE":
                                        let n = (e) => (0, N.createChannelRecord)(e),
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
                                                proto: (0, S.Y5)(e.settings.type, e.settings.proto),
                                                type: e.settings.type,
                                            },
                                        });
                                        break;
                                    default:
                                        a.h.dispatch(e);
                                }
                        })(e),
                    ),
                    (x = !1));
        }
}
let z = new Map();
class X extends i.Ay.PersistedStore {
    static displayName = "OverlayStore";
    static persistKey = "OverlayStoreV2";
    static migrations = [
        () => {
            let { pinnedWidgets: e, positions: t, sizes: n, v: i, ...a } = { ...r.w.get("OverlayStore") };
            return { ...b, ...(5 === i ? a : null) };
        },
        (e) => {
            let t = C.default.getId();
            return null == e || null == t ? {} : { [t]: { ...e } };
        },
    ];
    initialize(e) {
        if (
            (this.waitFor(C.default, O.A, R.Ay, L.A, y.A, D.A),
            this.syncWith([C.default], () => {
                let e = C.default.getId();
                H = null != e ? V(e) : { ...b };
            }),
            __OVERLAY__ && w.delete((0, u.getPID)()),
            null != e)
        ) {
            P = e;
            let t = C.default.getId();
            null != t &&
                (null == (H = V(t)).textChatNotifications && (H.textChatNotifications = b.textChatNotifications),
                null == H.textWidgetOpacity && (H.textWidgetOpacity = b.textWidgetOpacity),
                null == H.disableClickableRegions && (H.disableClickableRegions = b.disableClickableRegions));
        }
    }
    getState() {
        return P;
    }
    isLocked(e) {
        return !w.has(e);
    }
    isInstanceLocked() {
        return !w.has((0, u.getPID)());
    }
    isInstanceFocused() {
        return M === (0, u.getPID)();
    }
    isFocused(e) {
        return M === e;
    }
    isPinned(e) {
        let t = L.A.getLayout(u.OVERLAY_LAYOUT_ID);
        return (
            null != t &&
            null !=
                t.widgets.find((t) => {
                    let n = L.A.getWidget(t);
                    return null != n && n.type === e && !!n.pinned;
                })
        );
    }
    getSelectedGuildId() {
        return H.selectedGuildId;
    }
    getSelectedChannelId() {
        return H.selectedChannelId;
    }
    getSelectedCallId() {
        return U;
    }
    getDisplayUserMode() {
        return H.displayUserMode;
    }
    getDisplayNameMode() {
        return H.displayNameMode;
    }
    getAvatarSizeMode() {
        return H.avatarSizeMode;
    }
    getNotificationPositionMode() {
        return H.notificationPositionMode;
    }
    get showInviteNotification() {
        return null == H.showGameInviteNotification || H.showGameInviteNotification;
    }
    get disableClickableRegions() {
        return null != H.disableClickableRegions && H.disableClickableRegions;
    }
    get customInviteMessage() {
        return H.customInviteMessage;
    }
    getDisableExternalLinkAlert() {
        return H.disableExternalLinkAlert;
    }
    getFocusedPID() {
        return M;
    }
    get initialized() {
        return k;
    }
    get incompatibleApp() {
        return G;
    }
    getActiveRegions() {
        return F;
    }
    getTextWidgetOpacity() {
        return H.textWidgetOpacity;
    }
    isPreviewingInGame() {
        return B;
    }
    getTrackedGame(e) {
        return z.get(e) ?? null;
    }
}
let Z = new X(a.h, {
    LOGOUT: function (e) {
        e.isSwitchingAccount || (P = {});
    },
    MULTI_ACCOUNT_REMOVE_ACCOUNT: function (e) {
        e.userId in P && delete P[e.userId];
    },
    CONNECTION_CLOSED: function () {
        w.clear();
    },
    OVERLAY_START_SESSION: function () {
        (a.h.addInterceptor((e) => {
            if (x || !W.has(e.type)) return !1;
            if ("CHANNEL_SELECT" === e.type) {
                let { guildId: t, channelId: n } = e;
                return (
                    null != n &&
                    ((0, l.tN)({
                        type: _.kGV.DISPATCH,
                        pid: (0, u.getPID)(),
                        token: (0, u.getRPCAuthToken)(),
                        payloads: [
                            { type: "CHANNEL_PRELOAD", guildId: t === _.ME ? null : t, channelId: n, context: _.QCW },
                            { type: "OVERLAY_SELECT_CHANNEL", guildId: t, channelId: n },
                        ],
                    }),
                    !1)
                );
            }
            return (
                (0, l.tN)({
                    type: _.kGV.DISPATCH,
                    pid: (0, u.getPID)(),
                    token: (0, u.getRPCAuthToken)(),
                    payloads: [e],
                }),
                !j.has(e.type)
            );
        }),
            (0, l.QZ)($, (0, u.getRPCAuthToken)()),
            (0, l.Ng)(),
            (0, l.tN)({ type: _.kGV.CONNECT, pid: (0, u.getPID)(), token: (0, u.getRPCAuthToken)() }));
    },
    OVERLAY_INITIALIZE: function (e) {
        let { focusedPID: t, trackedGames: n, overlayStoredSettings: i } = e;
        ((M = t),
            __OVERLAY__ &&
                (n.forEach((e) => {
                    z.set(e.pid, e);
                }),
                o.x.update({ legacyEnabled: i.legacyEnabled, oopEnabled: i.oopEnabled })));
    },
    OVERLAY_READY: function () {
        let e = H.selectedGuildId,
            t = H.selectedChannelId;
        if (
            (null == e ||
                (R.Ay.hasChannels(e) && (null == t || R.Ay.hasSelectableChannel(e, t))) ||
                ((e = null), (t = null)),
            null != t && null == O.A.getChannel(t) && ((e = null), (t = null)),
            null == e && null == t && (e = y.A.getGuildId()),
            null != e && null == t)
        ) {
            let n = R.Ay.getDefaultChannel(e);
            null != n && (t = n.id);
        }
        ((H.selectedGuildId = e), (H.selectedChannelId = t));
    },
    OVERLAY_FOCUSED: function (e) {
        let { pid: t } = e;
        ((M = t), Y());
    },
    OVERLAY_SELECT_CHANNEL: function (e) {
        let { guildId: t, channelId: n } = e;
        ((H.selectedGuildId = t), (H.selectedChannelId = n));
    },
    OVERLAY_SELECT_CALL: function (e) {
        let { callId: t } = e;
        U = t;
    },
    CALL_DELETE: function () {
        U = null;
    },
    LAYOUT_CREATE: function () {},
    OVERLAY_SET_ENABLED: function (e) {
        __OVERLAY__ && o.x.update({ legacyEnabled: e.legacyEnabled, oopEnabled: e.oopEnabled });
    },
    OVERLAY_SET_DISPLAY_NAME_MODE: function (e) {
        let { mode: t } = e;
        H.displayNameMode = t;
    },
    OVERLAY_SET_DISPLAY_USER_MODE: function (e) {
        let { mode: t } = e;
        H.displayUserMode = t;
    },
    OVERLAY_SET_AVATAR_SIZE_MODE: function (e) {
        let { mode: t } = e;
        H.avatarSizeMode = t;
    },
    OVERLAY_SET_NOTIFICATION_POSITION_MODE: function (e) {
        let { mode: t } = e;
        H.notificationPositionMode = t;
    },
    OVERLAY_SET_DISABLE_CLICKABLE_REGIONS: function (e) {
        let { disable: t } = e;
        H.disableClickableRegions = t;
    },
    OVERLAY_SET_INVITE_MESSAGE: function (e) {
        let { message: t } = e,
            n = H.customInviteMessage !== t;
        return ((H.customInviteMessage = t), n);
    },
    OVERLAY_SET_GAME_INVITE_NOTIFICATION: function (e) {
        let { shouldShow: t } = e,
            n = H.showGameInviteNotification !== t;
        return ((H.showGameInviteNotification = t), n);
    },
    OVERLAY_SET_TEXT_WIDGET_OPACITY: function (e) {
        let { opacity: t } = e,
            n = H.textWidgetOpacity !== t;
        return ((H.textWidgetOpacity = t), n);
    },
    OVERLAY_DISABLE_EXTERNAL_LINK_ALERT: function () {
        H.disableExternalLinkAlert = !0;
    },
    OVERLAY_INCOMPATIBLE_APP: function () {
        G = !0;
    },
    OVERLAY_SET_INPUT_LOCKED: function (e) {
        let { locked: t, pid: n } = e;
        (t ? w.delete(n) : w.add(n), K(), Y(), (B = !1));
    },
    OVERLAY_ACTIVATE_REGION: function (e) {
        let { region: t } = e;
        if (M !== (0, u.getPID)() || F.has(t)) return !1;
        F.add(t);
    },
    OVERLAY_DEACTIVATE_ALL_REGIONS: K,
    OVERLAY_SET_PREVIEW_IN_GAME_MODE: function (e) {
        B = e.isPreviewingInGame;
    },
    WINDOW_RESIZED: function () {
        if (__OVERLAY__) {
            let e = D.A.windowSize();
            (0, u.validResolution)(e) || (B = !1);
        }
    },
    OVERLAY_SET_ASSOCIATED_GAME: function (e) {
        w.delete(e.previousAssociatedGamePID);
    },
    OVERLAY_TRACKED_GAME_UPDATE: function (e) {
        __OVERLAY__ && (null != e.trackedGame ? z.set(e.pid, e.trackedGame) : z.delete(e.pid));
    },
});
