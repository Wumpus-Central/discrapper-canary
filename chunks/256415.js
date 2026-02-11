"use strict";
n.r(t), n.d(t, { default: () => eA });
var r = n(311907),
    i = n(506774),
    a = n(73153),
    s = n(350723),
    o = n(996308),
    l = n(211753),
    u = n(850524),
    c = n(761821),
    d = n(95701),
    _ = n(961350),
    f = n(734057),
    h = n(808728),
    p = n(555528),
    g = n(967198),
    E = n(9302),
    A = n(531685),
    I = n(652215),
    T = n(672396);
let y = Object.freeze({
        selectedGuildId: null,
        selectedChannelId: null,
        displayUserMode: I.f5z.ALWAYS,
        displayNameMode: I.pwA.ALWAYS,
        avatarSizeMode: I.OSZ.LARGE,
        notificationPositionMode: I.G6Q.TOP_LEFT,
        textChatNotifications: I.iXc.ENABLED,
        disableExternalLinkAlert: !1,
        disablePinTutorial: !1,
        showKeybindIndicators: !0,
        disableClickableRegions: !1,
        textWidgetOpacity: T.Li.LOWER,
        showGameInviteNotification: !0,
        customInviteMessage: void 0,
    }),
    S = null,
    v = {},
    C = null,
    b = new Set(),
    N = !1,
    R = !1,
    O = !1,
    D = new Set(),
    L = !1;
function w(e) {
    let t = v[e];
    return null == t && (t = v[e] = { ...y }), t;
}
__OVERLAY__ && (0, u.u)((0, E.getRPCAuthToken)());
let x = { ...y },
    P = new Set([
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
        "OVERLAY_SET_SHOW_KEYBIND_INDICATORS",
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
    M = new Set([
        ...P.values(),
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
function k(e) {
    return (
        (null == e.version && 1 === E.OVERLAY_VERSION) ||
        e.version === E.OVERLAY_VERSION ||
        (a.h.dispatch({ type: "OVERLAY_INCOMPATIBLE_APP" }), (0, o.Zf)(), !1)
    );
}
function U(e) {
    if (("OVERLAY_INITIALIZE" === e.type && k(e) && (O = !0), O))
        switch (e.type) {
            case "CHANNEL_CREATE":
            case "THREAD_CREATE":
            case "THREAD_UPDATE":
            case "CHANNEL_DELETE":
            case "THREAD_DELETE":
                let t = (0, d.createChannelRecord)(e.channel);
                if (!d.A_.has(t.type)) break;
                a.h.dispatch({ type: e.type, channel: t });
                break;
            case "CHANNEL_UPDATES":
                a.h.dispatch({ type: e.type, channels: e.channels.map((e) => (0, d.createChannelRecord)(e)) });
                break;
            case "CONNECTION_OPEN_SUPPLEMENTAL":
                (e.lazyPrivateChannels = (e.lazyPrivateChannels ?? []).map((e) => (0, d.createChannelRecord)(e))),
                    a.h.dispatch(e);
                break;
            case "THREAD_LIST_SYNC":
                a.h.dispatch({ ...e, threads: e.threads.map((e) => (0, d.createChannelRecord)(e)) });
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
                a.h.dispatch({ type: "GUILD_CREATE", guild: r });
                break;
            case "USER_SETTINGS_PROTO_UPDATE":
                a.h.dispatch({
                    ...e,
                    settings: { proto: (0, c.Y5)(e.settings.type, e.settings.proto), type: e.settings.type },
                });
                break;
            default:
                a.h.dispatch(e);
        }
}
function G(e) {
    e.isSwitchingAccount || (v = {});
}
function F(e) {
    e.userId in v && delete v[e.userId];
}
function V() {
    b.clear();
}
function B(e) {
    let { focusedPID: t, trackedGames: n, overlayStoredSettings: r } = e;
    (S = t),
        __OVERLAY__ &&
            (n.forEach((e) => {
                eh.set(e.pid, e);
            }),
            l.x.update({ legacyEnabled: r.legacyEnabled, oopEnabled: r.oopEnabled }));
}
function j() {
    let e = x.selectedGuildId,
        t = x.selectedChannelId;
    if (
        (null == e ||
            (h.Ay.hasChannels(e) && (null == t || h.Ay.hasSelectableChannel(e, t))) ||
            ((e = null), (t = null)),
        null != t && null == f.A.getChannel(t) && ((e = null), (t = null)),
        null == e && null == t && (e = g.A.getGuildId()),
        null != e && null == t)
    ) {
        let n = h.Ay.getDefaultChannel(e);
        null != n && (t = n.id);
    }
    (x.selectedGuildId = e), (x.selectedChannelId = t);
}
function H() {
    if (!__OVERLAY__) return !1;
    let e = S === (0, E.getPID)(),
        t = b.has((0, E.getPID)()) || D.size > 0;
    e && t ? (0, s.XC)(window, !0) : (0, s.XC)(window, !1);
}
function Y() {}
function W(e) {
    let { locked: t, pid: n } = e;
    t ? b.delete(n) : b.add(n), $(), H(), (L = !1);
}
function K(e) {
    let { region: t } = e;
    if (S !== (0, E.getPID)() || D.has(t)) return !1;
    D.add(t);
}
function $() {
    if (S !== (0, E.getPID)()) return !1;
    D.clear();
}
function z(e) {
    let { pid: t } = e;
    (S = t), H();
}
function q(e) {
    let { guildId: t, channelId: n } = e;
    (x.selectedGuildId = t), (x.selectedChannelId = n);
}
function X(e) {
    let { callId: t } = e;
    C = t;
}
function Z() {
    C = null;
}
function Q() {
    if (__OVERLAY__) {
        let e = A.A.windowSize();
        (0, E.validResolution)(e) || (L = !1);
    }
}
function J(e) {
    L = e.isPreviewingInGame;
}
function ee(e) {
    let { mode: t } = e;
    x.displayNameMode = t;
}
function et(e) {
    let { mode: t } = e;
    x.displayUserMode = t;
}
function en(e) {
    let { mode: t } = e;
    x.avatarSizeMode = t;
}
function er(e) {
    let { mode: t } = e;
    x.notificationPositionMode = t;
}
function ei(e) {
    let { disable: t } = e;
    x.disableClickableRegions = t;
}
function ea(e) {
    let { shouldShow: t } = e;
    x.showKeybindIndicators = t;
}
function es(e) {
    let { message: t } = e,
        n = x.customInviteMessage !== t;
    return (x.customInviteMessage = t), n;
}
function eo(e) {
    let { opacity: t } = e,
        n = x.textWidgetOpacity !== t;
    return (x.textWidgetOpacity = t), n;
}
function el(e) {
    let { shouldShow: t } = e,
        n = x.showGameInviteNotification !== t;
    return (x.showGameInviteNotification = t), n;
}
function eu() {
    x.disableExternalLinkAlert = !0;
}
function ec() {
    N = !0;
}
function ed() {
    a.h.addInterceptor((e) => {
        if (R || !M.has(e.type)) return !1;
        if ("CHANNEL_SELECT" === e.type) {
            let { guildId: t, channelId: n } = e;
            return (
                null != n &&
                ((0, o.tN)({
                    type: I.kGV.DISPATCH,
                    pid: (0, E.getPID)(),
                    token: (0, E.getRPCAuthToken)(),
                    payloads: [
                        { type: "CHANNEL_PRELOAD", guildId: t === I.ME ? null : t, channelId: n, context: I.QCW },
                        { type: "OVERLAY_SELECT_CHANNEL", guildId: t, channelId: n },
                    ],
                }),
                !1)
            );
        }
        return (
            (0, o.tN)({ type: I.kGV.DISPATCH, pid: (0, E.getPID)(), token: (0, E.getRPCAuthToken)(), payloads: [e] }),
            !P.has(e.type)
        );
    });
}
function e_(e) {
    let t = (0, E.getPID)();
    if (null == e.pid || e.pid === t)
        switch (e.type) {
            case I.kGV.STORAGE_SYNC:
                r.Ay.PersistedStore.initializeAll(e.states);
                break;
            case I.kGV.DISPATCH:
                null != e.payloads && ((R = !0), e.payloads.forEach((e) => U(e)), (R = !1));
        }
}
function ef() {
    ed(),
        (0, o.QZ)(e_, (0, E.getRPCAuthToken)()),
        (0, o.Ng)(),
        (0, o.tN)({ type: I.kGV.CONNECT, pid: (0, E.getPID)(), token: (0, E.getRPCAuthToken)() });
}
let eh = new Map();
function ep(e) {
    __OVERLAY__ && (null != e.trackedGame ? eh.set(e.pid, e.trackedGame) : eh.delete(e.pid));
}
function em(e) {
    __OVERLAY__ && l.x.update({ legacyEnabled: e.legacyEnabled, oopEnabled: e.oopEnabled });
}
function eg(e) {
    b.delete(e.previousAssociatedGamePID);
}
class eE extends r.Ay.PersistedStore {
    static displayName = "OverlayStore";
    static persistKey = "OverlayStoreV2";
    static migrations = [
        () => {
            let { pinnedWidgets: e, positions: t, sizes: n, v: r, ...a } = { ...i.w.get("OverlayStore") };
            return { ...y, ...(5 === r ? a : null) };
        },
        (e) => {
            let t = _.default.getId();
            return null == e || null == t ? {} : { [t]: { ...e } };
        },
    ];
    initialize(e) {
        if (
            (this.waitFor(_.default, f.A, h.Ay, p.A, g.A, A.A),
            this.syncWith([_.default], () => {
                let e = _.default.getId();
                x = null != e ? w(e) : { ...y };
            }),
            __OVERLAY__ && b.delete((0, E.getPID)()),
            null != e)
        ) {
            v = e;
            let t = _.default.getId();
            null != t &&
                (null == (x = w(t)).textChatNotifications && (x.textChatNotifications = y.textChatNotifications),
                null == x.textWidgetOpacity && (x.textWidgetOpacity = y.textWidgetOpacity),
                null == x.disableClickableRegions && (x.disableClickableRegions = y.disableClickableRegions));
        }
    }
    getState() {
        return v;
    }
    isLocked(e) {
        return !b.has(e);
    }
    isInstanceLocked() {
        return !b.has((0, E.getPID)());
    }
    isInstanceFocused() {
        return S === (0, E.getPID)();
    }
    isFocused(e) {
        return S === e;
    }
    isPinned(e) {
        let t = p.A.getLayout(E.OVERLAY_LAYOUT_ID);
        return (
            null != t &&
            null !=
                t.widgets.find((t) => {
                    let n = p.A.getWidget(t);
                    return null != n && n.type === e && !!n.pinned;
                })
        );
    }
    getSelectedGuildId() {
        return x.selectedGuildId;
    }
    getSelectedChannelId() {
        return x.selectedChannelId;
    }
    getSelectedCallId() {
        return C;
    }
    getDisplayUserMode() {
        return x.displayUserMode;
    }
    getDisplayNameMode() {
        return x.displayNameMode;
    }
    getAvatarSizeMode() {
        return x.avatarSizeMode;
    }
    getNotificationPositionMode() {
        return x.notificationPositionMode;
    }
    get showKeybindIndicators() {
        return null == x.showKeybindIndicators || x.showKeybindIndicators;
    }
    get showInviteNotification() {
        return null == x.showGameInviteNotification || x.showGameInviteNotification;
    }
    get disableClickableRegions() {
        return null != x.disableClickableRegions && x.disableClickableRegions;
    }
    get customInviteMessage() {
        return x.customInviteMessage;
    }
    getDisableExternalLinkAlert() {
        return x.disableExternalLinkAlert;
    }
    getFocusedPID() {
        return S;
    }
    get initialized() {
        return O;
    }
    get incompatibleApp() {
        return N;
    }
    getActiveRegions() {
        return D;
    }
    getTextWidgetOpacity() {
        return x.textWidgetOpacity;
    }
    isPreviewingInGame() {
        return L;
    }
    getTrackedGame(e) {
        return eh.get(e) ?? null;
    }
}
let eA = new eE(a.h, {
    LOGOUT: G,
    MULTI_ACCOUNT_REMOVE_ACCOUNT: F,
    CONNECTION_CLOSED: V,
    OVERLAY_START_SESSION: ef,
    OVERLAY_INITIALIZE: B,
    OVERLAY_READY: j,
    OVERLAY_FOCUSED: z,
    OVERLAY_SELECT_CHANNEL: q,
    OVERLAY_SELECT_CALL: X,
    CALL_DELETE: Z,
    LAYOUT_CREATE: Y,
    OVERLAY_SET_ENABLED: em,
    OVERLAY_SET_DISPLAY_NAME_MODE: ee,
    OVERLAY_SET_DISPLAY_USER_MODE: et,
    OVERLAY_SET_AVATAR_SIZE_MODE: en,
    OVERLAY_SET_NOTIFICATION_POSITION_MODE: er,
    OVERLAY_SET_DISABLE_CLICKABLE_REGIONS: ei,
    OVERLAY_SET_SHOW_KEYBIND_INDICATORS: ea,
    OVERLAY_SET_INVITE_MESSAGE: es,
    OVERLAY_SET_GAME_INVITE_NOTIFICATION: el,
    OVERLAY_SET_TEXT_WIDGET_OPACITY: eo,
    OVERLAY_DISABLE_EXTERNAL_LINK_ALERT: eu,
    OVERLAY_INCOMPATIBLE_APP: ec,
    OVERLAY_SET_INPUT_LOCKED: W,
    OVERLAY_ACTIVATE_REGION: K,
    OVERLAY_DEACTIVATE_ALL_REGIONS: $,
    OVERLAY_SET_PREVIEW_IN_GAME_MODE: J,
    WINDOW_RESIZED: Q,
    OVERLAY_SET_ASSOCIATED_GAME: eg,
    OVERLAY_TRACKED_GAME_UPDATE: ep,
});
