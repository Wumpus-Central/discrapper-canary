"use strict";
n.r(t), n.d(t, { default: () => V });
var r = n(311907),
    i = n(506774),
    s = n(73153),
    a = n(350723),
    o = n(996308),
    l = n(211753),
    u = n(850524),
    c = n(761821),
    d = n(95701),
    _ = n(961350),
    f = n(734057),
    p = n(808728),
    h = n(555528),
    E = n(967198),
    m = n(9302),
    g = n(531685),
    A = n(652215),
    I = n(672396);
let T = Object.freeze({
        selectedGuildId: null,
        selectedChannelId: null,
        displayUserMode: A.f5z.ALWAYS,
        displayNameMode: A.pwA.ALWAYS,
        avatarSizeMode: A.OSZ.LARGE,
        notificationPositionMode: A.G6Q.TOP_LEFT,
        textChatNotifications: A.iXc.ENABLED,
        disableExternalLinkAlert: !1,
        disablePinTutorial: !1,
        disableClickableRegions: !1,
        textWidgetOpacity: I.Li.LOWER,
        showGameInviteNotification: !0,
        customInviteMessage: void 0,
    }),
    S = null,
    y = {},
    N = null,
    v = new Set(),
    C = !1,
    O = !1,
    R = !1,
    b = new Set(),
    D = !1;
function L(e) {
    let t = y[e];
    return null == t && (t = y[e] = { ...T }), t;
}
__OVERLAY__ && (0, u.u)((0, m.getRPCAuthToken)());
let w = { ...T },
    M = new Set([
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
        "SKU_PURCHASE_PREVIEW_FETCH_SUCCESS",
        "SKU_PURCHASE_SHOW_CONFIRMATION_STEP",
        "SKU_PURCHASE_START",
        "SKU_PURCHASE_SUCCESS",
        "STREAM_CLOSE",
        "STREAM_START",
        "VOICE_CHANNEL_SELECT",
        "USER_SETTINGS_PROTO_ENQUEUE_UPDATE",
        "USER_SETTINGS_PROTO_LOAD_IF_NECESSARY",
    ]),
    P = new Set([
        ...M.values(),
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
function x() {
    if (!__OVERLAY__) return !1;
    let e = S === (0, m.getPID)(),
        t = v.has((0, m.getPID)()) || b.size > 0;
    e && t ? (0, a.XC)(window, !0) : (0, a.XC)(window, !1);
}
function k() {
    if (S !== (0, m.getPID)()) return !1;
    b.clear();
}
function U(e) {
    let t = (0, m.getPID)();
    if (null == e.pid || e.pid === t)
        switch (e.type) {
            case A.kGV.STORAGE_SYNC:
                r.Ay.PersistedStore.initializeAll(e.states);
                break;
            case A.kGV.DISPATCH:
                null != e.payloads &&
                    ((O = !0),
                    e.payloads.forEach((e) =>
                        (function (e) {
                            if (
                                ("OVERLAY_INITIALIZE" === e.type &&
                                    ((null == e.version && 1 === m.OVERLAY_VERSION) ||
                                        e.version === m.OVERLAY_VERSION ||
                                        (s.h.dispatch({ type: "OVERLAY_INCOMPATIBLE_APP" }), (0, o.Zf)(), 0)) &&
                                    (R = !0),
                                R)
                            )
                                switch (e.type) {
                                    case "CHANNEL_CREATE":
                                    case "THREAD_CREATE":
                                    case "THREAD_UPDATE":
                                    case "CHANNEL_DELETE":
                                    case "THREAD_DELETE":
                                        let t = (0, d.createChannelRecord)(e.channel);
                                        if (!d.A_.has(t.type)) break;
                                        s.h.dispatch({ type: e.type, channel: t });
                                        break;
                                    case "CHANNEL_UPDATES":
                                        s.h.dispatch({
                                            type: e.type,
                                            channels: e.channels.map((e) => (0, d.createChannelRecord)(e)),
                                        });
                                        break;
                                    case "CONNECTION_OPEN_SUPPLEMENTAL":
                                        (e.lazyPrivateChannels = (e.lazyPrivateChannels ?? []).map((e) =>
                                            (0, d.createChannelRecord)(e),
                                        )),
                                            s.h.dispatch(e);
                                        break;
                                    case "THREAD_LIST_SYNC":
                                        s.h.dispatch({
                                            ...e,
                                            threads: e.threads.map((e) => (0, d.createChannelRecord)(e)),
                                        });
                                        break;
                                    case "GUILD_CREATE":
                                        let n = (e) => (0, d.createChannelRecord)(e),
                                            r = e.guild;
                                        switch (((r.threads = r.threads?.map(n)), r.channels.op)) {
                                            case "full_sync":
                                                r.channels.items = r.channels.items.map(n);
                                                break;
                                            case "update":
                                                r.channels.writes = r.channels.writes.map(n);
                                                break;
                                            default:
                                                r.channels;
                                        }
                                        s.h.dispatch({ type: "GUILD_CREATE", guild: r });
                                        break;
                                    case "USER_SETTINGS_PROTO_UPDATE":
                                        s.h.dispatch({
                                            ...e,
                                            settings: {
                                                proto: (0, c.Y5)(e.settings.type, e.settings.proto),
                                                type: e.settings.type,
                                            },
                                        });
                                        break;
                                    default:
                                        s.h.dispatch(e);
                                }
                        })(e),
                    ),
                    (O = !1));
        }
}
let G = new Map();
class F extends r.Ay.PersistedStore {
    static displayName = "OverlayStore";
    static persistKey = "OverlayStoreV2";
    static migrations = [
        () => {
            let { pinnedWidgets: e, positions: t, sizes: n, v: r, ...s } = { ...i.w.get("OverlayStore") };
            return { ...T, ...(5 === r ? s : null) };
        },
        (e) => {
            let t = _.default.getId();
            return null == e || null == t ? {} : { [t]: { ...e } };
        },
    ];
    initialize(e) {
        if (
            (this.waitFor(_.default, f.A, p.Ay, h.A, E.A, g.A),
            this.syncWith([_.default], () => {
                let e = _.default.getId();
                w = null != e ? L(e) : { ...T };
            }),
            __OVERLAY__ && v.delete((0, m.getPID)()),
            null != e)
        ) {
            y = e;
            let t = _.default.getId();
            null != t &&
                (null == (w = L(t)).textChatNotifications && (w.textChatNotifications = T.textChatNotifications),
                null == w.textWidgetOpacity && (w.textWidgetOpacity = T.textWidgetOpacity),
                null == w.disableClickableRegions && (w.disableClickableRegions = T.disableClickableRegions));
        }
    }
    getState() {
        return y;
    }
    isLocked(e) {
        return !v.has(e);
    }
    isInstanceLocked() {
        return !v.has((0, m.getPID)());
    }
    isInstanceFocused() {
        return S === (0, m.getPID)();
    }
    isFocused(e) {
        return S === e;
    }
    isPinned(e) {
        let t = h.A.getLayout(m.OVERLAY_LAYOUT_ID);
        return (
            null != t &&
            null !=
                t.widgets.find((t) => {
                    let n = h.A.getWidget(t);
                    return null != n && n.type === e && !!n.pinned;
                })
        );
    }
    getSelectedGuildId() {
        return w.selectedGuildId;
    }
    getSelectedChannelId() {
        return w.selectedChannelId;
    }
    getSelectedCallId() {
        return N;
    }
    getDisplayUserMode() {
        return w.displayUserMode;
    }
    getDisplayNameMode() {
        return w.displayNameMode;
    }
    getAvatarSizeMode() {
        return w.avatarSizeMode;
    }
    getNotificationPositionMode() {
        return w.notificationPositionMode;
    }
    get showInviteNotification() {
        return null == w.showGameInviteNotification || w.showGameInviteNotification;
    }
    get disableClickableRegions() {
        return null != w.disableClickableRegions && w.disableClickableRegions;
    }
    get customInviteMessage() {
        return w.customInviteMessage;
    }
    getDisableExternalLinkAlert() {
        return w.disableExternalLinkAlert;
    }
    getFocusedPID() {
        return S;
    }
    get initialized() {
        return R;
    }
    get incompatibleApp() {
        return C;
    }
    getActiveRegions() {
        return b;
    }
    getTextWidgetOpacity() {
        return w.textWidgetOpacity;
    }
    isPreviewingInGame() {
        return D;
    }
    getTrackedGame(e) {
        return G.get(e) ?? null;
    }
}
let V = new F(s.h, {
    LOGOUT: function (e) {
        e.isSwitchingAccount || (y = {});
    },
    MULTI_ACCOUNT_REMOVE_ACCOUNT: function (e) {
        e.userId in y && delete y[e.userId];
    },
    CONNECTION_CLOSED: function () {
        v.clear();
    },
    OVERLAY_START_SESSION: function () {
        s.h.addInterceptor((e) => {
            if (O || !P.has(e.type)) return !1;
            if ("CHANNEL_SELECT" === e.type) {
                let { guildId: t, channelId: n } = e;
                return (
                    null != n &&
                    ((0, o.tN)({
                        type: A.kGV.DISPATCH,
                        pid: (0, m.getPID)(),
                        token: (0, m.getRPCAuthToken)(),
                        payloads: [
                            { type: "CHANNEL_PRELOAD", guildId: t === A.ME ? null : t, channelId: n, context: A.QCW },
                            { type: "OVERLAY_SELECT_CHANNEL", guildId: t, channelId: n },
                        ],
                    }),
                    !1)
                );
            }
            return (
                (0, o.tN)({
                    type: A.kGV.DISPATCH,
                    pid: (0, m.getPID)(),
                    token: (0, m.getRPCAuthToken)(),
                    payloads: [e],
                }),
                !M.has(e.type)
            );
        }),
            (0, o.QZ)(U, (0, m.getRPCAuthToken)()),
            (0, o.Ng)(),
            (0, o.tN)({ type: A.kGV.CONNECT, pid: (0, m.getPID)(), token: (0, m.getRPCAuthToken)() });
    },
    OVERLAY_INITIALIZE: function (e) {
        let { focusedPID: t, trackedGames: n, overlayStoredSettings: r } = e;
        (S = t),
            __OVERLAY__ &&
                (n.forEach((e) => {
                    G.set(e.pid, e);
                }),
                l.x.update({ legacyEnabled: r.legacyEnabled, oopEnabled: r.oopEnabled }));
    },
    OVERLAY_READY: function () {
        let e = w.selectedGuildId,
            t = w.selectedChannelId;
        if (
            (null == e ||
                (p.Ay.hasChannels(e) && (null == t || p.Ay.hasSelectableChannel(e, t))) ||
                ((e = null), (t = null)),
            null != t && null == f.A.getChannel(t) && ((e = null), (t = null)),
            null == e && null == t && (e = E.A.getGuildId()),
            null != e && null == t)
        ) {
            let n = p.Ay.getDefaultChannel(e);
            null != n && (t = n.id);
        }
        (w.selectedGuildId = e), (w.selectedChannelId = t);
    },
    OVERLAY_FOCUSED: function (e) {
        let { pid: t } = e;
        (S = t), x();
    },
    OVERLAY_SELECT_CHANNEL: function (e) {
        let { guildId: t, channelId: n } = e;
        (w.selectedGuildId = t), (w.selectedChannelId = n);
    },
    OVERLAY_SELECT_CALL: function (e) {
        let { callId: t } = e;
        N = t;
    },
    CALL_DELETE: function () {
        N = null;
    },
    LAYOUT_CREATE: function () {},
    OVERLAY_SET_ENABLED: function (e) {
        __OVERLAY__ && l.x.update({ legacyEnabled: e.legacyEnabled, oopEnabled: e.oopEnabled });
    },
    OVERLAY_SET_DISPLAY_NAME_MODE: function (e) {
        let { mode: t } = e;
        w.displayNameMode = t;
    },
    OVERLAY_SET_DISPLAY_USER_MODE: function (e) {
        let { mode: t } = e;
        w.displayUserMode = t;
    },
    OVERLAY_SET_AVATAR_SIZE_MODE: function (e) {
        let { mode: t } = e;
        w.avatarSizeMode = t;
    },
    OVERLAY_SET_NOTIFICATION_POSITION_MODE: function (e) {
        let { mode: t } = e;
        w.notificationPositionMode = t;
    },
    OVERLAY_SET_DISABLE_CLICKABLE_REGIONS: function (e) {
        let { disable: t } = e;
        w.disableClickableRegions = t;
    },
    OVERLAY_SET_INVITE_MESSAGE: function (e) {
        let { message: t } = e,
            n = w.customInviteMessage !== t;
        return (w.customInviteMessage = t), n;
    },
    OVERLAY_SET_GAME_INVITE_NOTIFICATION: function (e) {
        let { shouldShow: t } = e,
            n = w.showGameInviteNotification !== t;
        return (w.showGameInviteNotification = t), n;
    },
    OVERLAY_SET_TEXT_WIDGET_OPACITY: function (e) {
        let { opacity: t } = e,
            n = w.textWidgetOpacity !== t;
        return (w.textWidgetOpacity = t), n;
    },
    OVERLAY_DISABLE_EXTERNAL_LINK_ALERT: function () {
        w.disableExternalLinkAlert = !0;
    },
    OVERLAY_INCOMPATIBLE_APP: function () {
        C = !0;
    },
    OVERLAY_SET_INPUT_LOCKED: function (e) {
        let { locked: t, pid: n } = e;
        t ? v.delete(n) : v.add(n), k(), x(), (D = !1);
    },
    OVERLAY_ACTIVATE_REGION: function (e) {
        let { region: t } = e;
        if (S !== (0, m.getPID)() || b.has(t)) return !1;
        b.add(t);
    },
    OVERLAY_DEACTIVATE_ALL_REGIONS: k,
    OVERLAY_SET_PREVIEW_IN_GAME_MODE: function (e) {
        D = e.isPreviewingInGame;
    },
    WINDOW_RESIZED: function () {
        if (__OVERLAY__) {
            let e = g.A.windowSize();
            (0, m.validResolution)(e) || (D = !1);
        }
    },
    OVERLAY_SET_ASSOCIATED_GAME: function (e) {
        v.delete(e.previousAssociatedGamePID);
    },
    OVERLAY_TRACKED_GAME_UPDATE: function (e) {
        __OVERLAY__ && (null != e.trackedGame ? G.set(e.pid, e.trackedGame) : G.delete(e.pid));
    },
});
