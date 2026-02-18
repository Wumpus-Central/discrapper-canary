"use strict";
n.r(t), n.d(t, { default: () => eE });
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
    m = n(967198),
    E = n(9302),
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
    v = null,
    N = new Set(),
    C = !1,
    b = !1,
    R = !1,
    O = new Set(),
    D = !1;
function L(e) {
    let t = y[e];
    return null == t && (t = y[e] = { ...T }), t;
}
__OVERLAY__ && (0, u.u)((0, E.getRPCAuthToken)());
let w = { ...T },
    x = new Set([
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
    M = new Set([
        ...x.values(),
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
function P(e) {
    return (
        (null == e.version && 1 === E.OVERLAY_VERSION) ||
        e.version === E.OVERLAY_VERSION ||
        (s.h.dispatch({ type: "OVERLAY_INCOMPATIBLE_APP" }), (0, o.Zf)(), !1)
    );
}
function k(e) {
    if (("OVERLAY_INITIALIZE" === e.type && P(e) && (R = !0), R))
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
                s.h.dispatch({ type: e.type, channels: e.channels.map((e) => (0, d.createChannelRecord)(e)) });
                break;
            case "CONNECTION_OPEN_SUPPLEMENTAL":
                (e.lazyPrivateChannels = (e.lazyPrivateChannels ?? []).map((e) => (0, d.createChannelRecord)(e))),
                    s.h.dispatch(e);
                break;
            case "THREAD_LIST_SYNC":
                s.h.dispatch({ ...e, threads: e.threads.map((e) => (0, d.createChannelRecord)(e)) });
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
                    settings: { proto: (0, c.Y5)(e.settings.type, e.settings.proto), type: e.settings.type },
                });
                break;
            default:
                s.h.dispatch(e);
        }
}
function U(e) {
    e.isSwitchingAccount || (y = {});
}
function G(e) {
    e.userId in y && delete y[e.userId];
}
function F() {
    N.clear();
}
function V(e) {
    let { focusedPID: t, trackedGames: n, overlayStoredSettings: r } = e;
    (S = t),
        __OVERLAY__ &&
            (n.forEach((e) => {
                e_.set(e.pid, e);
            }),
            l.x.update({ legacyEnabled: r.legacyEnabled, oopEnabled: r.oopEnabled }));
}
function B() {
    let e = w.selectedGuildId,
        t = w.selectedChannelId;
    if (
        (null == e ||
            (p.Ay.hasChannels(e) && (null == t || p.Ay.hasSelectableChannel(e, t))) ||
            ((e = null), (t = null)),
        null != t && null == f.A.getChannel(t) && ((e = null), (t = null)),
        null == e && null == t && (e = m.A.getGuildId()),
        null != e && null == t)
    ) {
        let n = p.Ay.getDefaultChannel(e);
        null != n && (t = n.id);
    }
    (w.selectedGuildId = e), (w.selectedChannelId = t);
}
function H() {
    if (!__OVERLAY__) return !1;
    let e = S === (0, E.getPID)(),
        t = N.has((0, E.getPID)()) || O.size > 0;
    e && t ? (0, a.XC)(window, !0) : (0, a.XC)(window, !1);
}
function j() {}
function Y(e) {
    let { locked: t, pid: n } = e;
    t ? N.delete(n) : N.add(n), K(), H(), (D = !1);
}
function W(e) {
    let { region: t } = e;
    if (S !== (0, E.getPID)() || O.has(t)) return !1;
    O.add(t);
}
function K() {
    if (S !== (0, E.getPID)()) return !1;
    O.clear();
}
function z(e) {
    let { pid: t } = e;
    (S = t), H();
}
function $(e) {
    let { guildId: t, channelId: n } = e;
    (w.selectedGuildId = t), (w.selectedChannelId = n);
}
function q(e) {
    let { callId: t } = e;
    v = t;
}
function Z() {
    v = null;
}
function X() {
    if (__OVERLAY__) {
        let e = g.A.windowSize();
        (0, E.validResolution)(e) || (D = !1);
    }
}
function Q(e) {
    D = e.isPreviewingInGame;
}
function J(e) {
    let { mode: t } = e;
    w.displayNameMode = t;
}
function ee(e) {
    let { mode: t } = e;
    w.displayUserMode = t;
}
function et(e) {
    let { mode: t } = e;
    w.avatarSizeMode = t;
}
function en(e) {
    let { mode: t } = e;
    w.notificationPositionMode = t;
}
function er(e) {
    let { disable: t } = e;
    w.disableClickableRegions = t;
}
function ei(e) {
    let { message: t } = e,
        n = w.customInviteMessage !== t;
    return (w.customInviteMessage = t), n;
}
function es(e) {
    let { opacity: t } = e,
        n = w.textWidgetOpacity !== t;
    return (w.textWidgetOpacity = t), n;
}
function ea(e) {
    let { shouldShow: t } = e,
        n = w.showGameInviteNotification !== t;
    return (w.showGameInviteNotification = t), n;
}
function eo() {
    w.disableExternalLinkAlert = !0;
}
function el() {
    C = !0;
}
function eu() {
    s.h.addInterceptor((e) => {
        if (b || !M.has(e.type)) return !1;
        if ("CHANNEL_SELECT" === e.type) {
            let { guildId: t, channelId: n } = e;
            return (
                null != n &&
                ((0, o.tN)({
                    type: A.kGV.DISPATCH,
                    pid: (0, E.getPID)(),
                    token: (0, E.getRPCAuthToken)(),
                    payloads: [
                        { type: "CHANNEL_PRELOAD", guildId: t === A.ME ? null : t, channelId: n, context: A.QCW },
                        { type: "OVERLAY_SELECT_CHANNEL", guildId: t, channelId: n },
                    ],
                }),
                !1)
            );
        }
        return (
            (0, o.tN)({ type: A.kGV.DISPATCH, pid: (0, E.getPID)(), token: (0, E.getRPCAuthToken)(), payloads: [e] }),
            !x.has(e.type)
        );
    });
}
function ec(e) {
    let t = (0, E.getPID)();
    if (null == e.pid || e.pid === t)
        switch (e.type) {
            case A.kGV.STORAGE_SYNC:
                r.Ay.PersistedStore.initializeAll(e.states);
                break;
            case A.kGV.DISPATCH:
                null != e.payloads && ((b = !0), e.payloads.forEach((e) => k(e)), (b = !1));
        }
}
function ed() {
    eu(),
        (0, o.QZ)(ec, (0, E.getRPCAuthToken)()),
        (0, o.Ng)(),
        (0, o.tN)({ type: A.kGV.CONNECT, pid: (0, E.getPID)(), token: (0, E.getRPCAuthToken)() });
}
let e_ = new Map();
function ef(e) {
    __OVERLAY__ && (null != e.trackedGame ? e_.set(e.pid, e.trackedGame) : e_.delete(e.pid));
}
function ep(e) {
    __OVERLAY__ && l.x.update({ legacyEnabled: e.legacyEnabled, oopEnabled: e.oopEnabled });
}
function eh(e) {
    N.delete(e.previousAssociatedGamePID);
}
class em extends r.Ay.PersistedStore {
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
            (this.waitFor(_.default, f.A, p.Ay, h.A, m.A, g.A),
            this.syncWith([_.default], () => {
                let e = _.default.getId();
                w = null != e ? L(e) : { ...T };
            }),
            __OVERLAY__ && N.delete((0, E.getPID)()),
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
        return !N.has(e);
    }
    isInstanceLocked() {
        return !N.has((0, E.getPID)());
    }
    isInstanceFocused() {
        return S === (0, E.getPID)();
    }
    isFocused(e) {
        return S === e;
    }
    isPinned(e) {
        let t = h.A.getLayout(E.OVERLAY_LAYOUT_ID);
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
        return v;
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
        return O;
    }
    getTextWidgetOpacity() {
        return w.textWidgetOpacity;
    }
    isPreviewingInGame() {
        return D;
    }
    getTrackedGame(e) {
        return e_.get(e) ?? null;
    }
}
let eE = new em(s.h, {
    LOGOUT: U,
    MULTI_ACCOUNT_REMOVE_ACCOUNT: G,
    CONNECTION_CLOSED: F,
    OVERLAY_START_SESSION: ed,
    OVERLAY_INITIALIZE: V,
    OVERLAY_READY: B,
    OVERLAY_FOCUSED: z,
    OVERLAY_SELECT_CHANNEL: $,
    OVERLAY_SELECT_CALL: q,
    CALL_DELETE: Z,
    LAYOUT_CREATE: j,
    OVERLAY_SET_ENABLED: ep,
    OVERLAY_SET_DISPLAY_NAME_MODE: J,
    OVERLAY_SET_DISPLAY_USER_MODE: ee,
    OVERLAY_SET_AVATAR_SIZE_MODE: et,
    OVERLAY_SET_NOTIFICATION_POSITION_MODE: en,
    OVERLAY_SET_DISABLE_CLICKABLE_REGIONS: er,
    OVERLAY_SET_INVITE_MESSAGE: ei,
    OVERLAY_SET_GAME_INVITE_NOTIFICATION: ea,
    OVERLAY_SET_TEXT_WIDGET_OPACITY: es,
    OVERLAY_DISABLE_EXTERNAL_LINK_ALERT: eo,
    OVERLAY_INCOMPATIBLE_APP: el,
    OVERLAY_SET_INPUT_LOCKED: Y,
    OVERLAY_ACTIVATE_REGION: W,
    OVERLAY_DEACTIVATE_ALL_REGIONS: K,
    OVERLAY_SET_PREVIEW_IN_GAME_MODE: Q,
    WINDOW_RESIZED: X,
    OVERLAY_SET_ASSOCIATED_GAME: eh,
    OVERLAY_TRACKED_GAME_UPDATE: ef,
});
