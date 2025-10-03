n.r(t), n.d(t, { default: () => eR }), n(388685), n(415506);
var r,
    i = n(442837),
    a = n(433517),
    o = n(570140),
    s = n(284737),
    l = n(490029),
    c = n(710845),
    u = n(454991),
    d = n(48481),
    f = n(131704),
    _ = n(314897),
    p = n(592125),
    h = n(984933),
    m = n(355863),
    g = n(914010),
    E = n(358085),
    b = n(145597),
    y = n(372679),
    O = n(451478),
    v = n(981631),
    I = n(987650);
function T(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function S(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                T(e, t, n[t]);
            });
    }
    return e;
}
function A(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function C(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : A(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function N(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = R(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function R(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let P = Object.freeze({
        selectedGuildId: null,
        selectedChannelId: null,
        displayUserMode: v.OYC.ALWAYS,
        displayNameMode: v.wC$.ALWAYS,
        avatarSizeMode: v.ipw.LARGE,
        notificationPositionMode: v._vf.TOP_LEFT,
        textChatNotifications: v.Ypu.ENABLED,
        disableExternalLinkAlert: !1,
        disablePinTutorial: !1,
        showKeybindIndicators: !0,
        disableClickableRegions: !1,
        textWidgetOpacity: I.wF.LOWER,
        showGameInviteNotification: !0,
        customInviteMessage: void 0,
    }),
    w = null,
    D = {},
    L = null,
    x = new Set(),
    M = !1,
    j = null,
    k = !1,
    U = !1,
    G = new Set(),
    B = !1,
    Z = new c.Z("OverlayStore");
function F(e) {
    let t = D[e];
    return null == t && (t = D[e] = S({}, P)), t;
}
let V = S({}, P),
    H = new Set([
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
    Y = new Set([
        ...H.values(),
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
function W(e) {
    return (
        (null == e.version && 1 === b.OVERLAY_VERSION) ||
        e.version === b.OVERLAY_VERSION ||
        (o.Z.dispatch({ type: "OVERLAY_INCOMPATIBLE_APP" }), (0, l.zP)(), !1)
    );
}
function K(e) {
    if (("OVERLAY_INITIALIZE" === e.type && W(e) && (U = !0), U)) {
        var t, n;
        switch (e.type) {
            case "CHANNEL_CREATE":
            case "THREAD_CREATE":
            case "THREAD_UPDATE":
            case "CHANNEL_DELETE":
            case "THREAD_DELETE":
                let r = (0, f.kt)(e.channel);
                if (!f.AW.has(r.type)) break;
                o.Z.dispatch({
                    type: e.type,
                    channel: r,
                });
                break;
            case "CHANNEL_UPDATES":
                o.Z.dispatch({
                    type: e.type,
                    channels: e.channels.map((e) => (0, f.kt)(e)),
                });
                break;
            case "CONNECTION_OPEN_SUPPLEMENTAL":
                (e.lazyPrivateChannels = (null != (t = e.lazyPrivateChannels) ? t : []).map((e) => (0, f.kt)(e))),
                    o.Z.dispatch(e);
                break;
            case "THREAD_LIST_SYNC":
                o.Z.dispatch(C(S({}, e), { threads: e.threads.map((e) => (0, f.kt)(e)) }));
                break;
            case "GUILD_CREATE":
                let i = (e) => (0, f.kt)(e),
                    a = e.guild;
                switch (((a.threads = null == (n = a.threads) ? void 0 : n.map(i)), a.channels.op)) {
                    case "full_sync":
                        a.channels.items = a.channels.items.map(i);
                        break;
                    case "update":
                        a.channels.writes = a.channels.writes.map(i);
                        break;
                    default:
                        a.channels;
                }
                o.Z.dispatch({
                    type: "GUILD_CREATE",
                    guild: a,
                });
                break;
            case "USER_SETTINGS_PROTO_UPDATE":
                o.Z.dispatch(
                    C(S({}, e), {
                        settings: {
                            proto: (0, d.kI)(e.settings.type, e.settings.proto),
                            type: e.settings.type,
                        },
                    }),
                );
                break;
            default:
                o.Z.dispatch(e);
        }
    }
}
function z(e) {
    e.isSwitchingAccount || (D = {});
}
function q(e) {
    e.userId in D && delete D[e.userId];
}
function X() {
    x.clear();
}
function Q(e) {
    let { focusedPID: t, trackedGames: n, overlayStoredSettings: r } = e;
    (w = t),
        __OVERLAY__ &&
            (n.forEach((e) => {
                eT.set(e.pid, e);
            }),
            u.v.update({
                legacyEnabled: r.legacyEnabled,
                oopEnabled: r.oopEnabled,
            }));
}
function J() {
    let e = V.selectedGuildId,
        t = V.selectedChannelId;
    if (
        (null == e ||
            (h.ZP.hasChannels(e) && (null == t || h.ZP.hasSelectableChannel(e, t))) ||
            ((e = null), (t = null)),
        null != t && null == p.Z.getChannel(t) && ((e = null), (t = null)),
        null == e && null == t && (e = g.Z.getGuildId()),
        null != e && null == t)
    ) {
        let n = h.ZP.getDefaultChannel(e);
        null != n && (t = n.id);
    }
    (V.selectedGuildId = e), (V.selectedChannelId = t);
}
function $() {
    if (!__OVERLAY__) return !1;
    let e = w === (0, b.getPID)(),
        t = x.has((0, b.getPID)()) || G.size > 0;
    e && t ? (0, s.T_)(window, !0) : (0, s.T_)(window, !1);
}
function ee() {}
function et(e) {
    let { locked: t, pid: n } = e;
    t ? x.delete(n) : x.add(n), er(), $(), (B = !1);
}
function en(e) {
    let { region: t } = e;
    if (w !== (0, b.getPID)() || G.has(t)) return !1;
    G.add(t);
}
function er() {
    if (w !== (0, b.getPID)()) return !1;
    G.clear();
}
function ei(e) {
    let { pid: t } = e;
    (w = t), $();
}
function ea(e) {
    let { guildId: t, channelId: n } = e;
    (V.selectedGuildId = t), (V.selectedChannelId = n);
}
function eo(e) {
    let { callId: t } = e;
    L = t;
}
function es() {
    L = null;
}
function el() {
    if (__OVERLAY__) {
        let e = O.Z.windowSize();
        (0, b.validResolution)(e) || (B = !1);
    }
}
function ec(e) {
    B = e.isPreviewingInGame;
}
function eu(e) {
    let { mode: t } = e;
    V.displayNameMode = t;
}
function ed(e) {
    let { mode: t } = e;
    V.displayUserMode = t;
}
function ef(e) {
    let { mode: t } = e;
    V.avatarSizeMode = t;
}
function e_(e) {
    let { mode: t } = e;
    V.notificationPositionMode = t;
}
function ep(e) {
    let { disable: t } = e;
    V.disableClickableRegions = t;
}
function eh(e) {
    let { shouldShow: t } = e;
    V.showKeybindIndicators = t;
}
function em(e) {
    let { message: t } = e,
        n = V.customInviteMessage !== t;
    return (V.customInviteMessage = t), n;
}
function eg(e) {
    let { opacity: t } = e,
        n = V.textWidgetOpacity !== t;
    return (V.textWidgetOpacity = t), n;
}
function eE(e) {
    let { shouldShow: t } = e,
        n = V.showGameInviteNotification !== t;
    return (V.showGameInviteNotification = t), n;
}
function eb() {
    V.disableExternalLinkAlert = !0;
}
function ey() {
    M = !0;
}
function eO() {
    o.Z.addInterceptor((e) => {
        if (k || !Y.has(e.type)) return !1;
        if ("CHANNEL_SELECT" === e.type) {
            let { guildId: t, channelId: n } = e;
            return (
                null != n &&
                ((0, l.lW)({
                    type: v.BmY.DISPATCH,
                    pid: (0, b.getPID)(),
                    token: (0, b.getRPCAuthToken)(),
                    payloads: [
                        {
                            type: "CHANNEL_PRELOAD",
                            guildId: t === v.ME ? null : t,
                            channelId: n,
                            context: v.e3s,
                        },
                        {
                            type: "OVERLAY_SELECT_CHANNEL",
                            guildId: t,
                            channelId: n,
                        },
                    ],
                }),
                !1)
            );
        }
        return (
            (0, l.lW)({
                type: v.BmY.DISPATCH,
                pid: (0, b.getPID)(),
                token: (0, b.getRPCAuthToken)(),
                payloads: [e],
            }),
            !H.has(e.type)
        );
    });
}
function ev(e) {
    let t = (0, b.getPID)();
    if (null == e.pid || e.pid === t)
        switch (e.type) {
            case v.BmY.STORAGE_SYNC:
                i.ZP.PersistedStore.initializeAll(e.states);
                break;
            case v.BmY.DISPATCH:
                null != e.payloads && ((k = !0), e.payloads.forEach((e) => K(e)), (k = !1));
        }
}
function eI() {
    eO(),
        (0, l.Ty)(ev, (0, b.getRPCAuthToken)()),
        (0, l.$j)(),
        (0, l.lW)({
            type: v.BmY.CONNECT,
            pid: (0, b.getPID)(),
            token: (0, b.getRPCAuthToken)(),
        });
}
let eT = new Map();
function eS(e) {
    __OVERLAY__ && (null != e.trackedGame ? eT.set(e.pid, e.trackedGame) : eT.delete(e.pid));
}
function eA(e) {
    __OVERLAY__ &&
        u.v.update({
            legacyEnabled: e.legacyEnabled,
            oopEnabled: e.oopEnabled,
        });
}
function eC(e) {
    x.delete(e.previousAssociatedGamePID);
}
class eN extends (r = i.ZP.PersistedStore) {
    initialize(e) {
        if (
            (this.waitFor(_.default),
            this.syncWith([_.default], () => {
                let e = _.default.getId();
                V = null != e ? F(e) : S({}, P);
            }),
            __OVERLAY__)
        ) {
            if (E.isPlatformEmbedded) {
                let e = (0, y.M)();
                null == e && Z.error("Overlay module failed loaded"), (j = e);
            }
            x.delete((0, b.getPID)());
        }
        if (null != e) {
            D = e;
            let t = _.default.getId();
            null != t &&
                (null == (V = F(t)).textChatNotifications && (V.textChatNotifications = P.textChatNotifications),
                null == V.textWidgetOpacity && (V.textWidgetOpacity = P.textWidgetOpacity),
                null == V.disableClickableRegions && (V.disableClickableRegions = P.disableClickableRegions));
        }
    }
    getState() {
        return D;
    }
    isLocked(e) {
        return !x.has(e);
    }
    isInstanceLocked() {
        return !x.has((0, b.getPID)());
    }
    isInstanceFocused() {
        return w === (0, b.getPID)();
    }
    isFocused(e) {
        return w === e;
    }
    isPinned(e) {
        let t = m.Z.getLayout(b.OVERLAY_LAYOUT_ID);
        return (
            null != t &&
            null !=
                t.widgets.find((t) => {
                    let n = m.Z.getWidget(t);
                    return null != n && n.type === e && !!n.pinned;
                })
        );
    }
    getSelectedGuildId() {
        return V.selectedGuildId;
    }
    getSelectedChannelId() {
        return V.selectedChannelId;
    }
    getSelectedCallId() {
        return L;
    }
    getDisplayUserMode() {
        return V.displayUserMode;
    }
    getDisplayNameMode() {
        return V.displayNameMode;
    }
    getAvatarSizeMode() {
        return V.avatarSizeMode;
    }
    getNotificationPositionMode() {
        return V.notificationPositionMode;
    }
    get showKeybindIndicators() {
        return null == V.showKeybindIndicators || V.showKeybindIndicators;
    }
    get showInviteNotification() {
        return null == V.showGameInviteNotification || V.showGameInviteNotification;
    }
    get disableClickableRegions() {
        return null != V.disableClickableRegions && V.disableClickableRegions;
    }
    get customInviteMessage() {
        return V.customInviteMessage;
    }
    getDisableExternalLinkAlert() {
        return V.disableExternalLinkAlert;
    }
    getFocusedPID() {
        return w;
    }
    get initialized() {
        return U;
    }
    get incompatibleApp() {
        return M;
    }
    getActiveRegions() {
        return G;
    }
    getTextWidgetOpacity() {
        return V.textWidgetOpacity;
    }
    isPreviewingInGame() {
        return B;
    }
    getTrackedGame(e) {
        var t;
        return null != (t = eT.get(e)) ? t : null;
    }
}
T(eN, "displayName", "OverlayStore"),
    T(eN, "persistKey", "OverlayStoreV2"),
    T(eN, "migrations", [
        () => {
            let e = S({}, a.K.get("OverlayStore")),
                { pinnedWidgets: t, positions: n, sizes: r, v: i } = e,
                o = N(e, ["pinnedWidgets", "positions", "sizes", "v"]);
            return S({}, P, 5 === i ? o : null);
        },
        (e) => {
            let t = _.default.getId();
            return null == e || null == t ? {} : { [t]: S({}, e) };
        },
    ]);
let eR = new eN(o.Z, {
    LOGOUT: z,
    MULTI_ACCOUNT_REMOVE_ACCOUNT: q,
    CONNECTION_CLOSED: X,
    OVERLAY_START_SESSION: eI,
    OVERLAY_INITIALIZE: Q,
    OVERLAY_READY: J,
    OVERLAY_FOCUSED: ei,
    OVERLAY_SELECT_CHANNEL: ea,
    OVERLAY_SELECT_CALL: eo,
    CALL_DELETE: es,
    LAYOUT_CREATE: ee,
    OVERLAY_SET_ENABLED: eA,
    OVERLAY_SET_DISPLAY_NAME_MODE: eu,
    OVERLAY_SET_DISPLAY_USER_MODE: ed,
    OVERLAY_SET_AVATAR_SIZE_MODE: ef,
    OVERLAY_SET_NOTIFICATION_POSITION_MODE: e_,
    OVERLAY_SET_DISABLE_CLICKABLE_REGIONS: ep,
    OVERLAY_SET_SHOW_KEYBIND_INDICATORS: eh,
    OVERLAY_SET_INVITE_MESSAGE: em,
    OVERLAY_SET_GAME_INVITE_NOTIFICATION: eE,
    OVERLAY_SET_TEXT_WIDGET_OPACITY: eg,
    OVERLAY_DISABLE_EXTERNAL_LINK_ALERT: eb,
    OVERLAY_INCOMPATIBLE_APP: ey,
    OVERLAY_SET_INPUT_LOCKED: et,
    OVERLAY_ACTIVATE_REGION: en,
    OVERLAY_DEACTIVATE_ALL_REGIONS: er,
    OVERLAY_SET_PREVIEW_IN_GAME_MODE: ec,
    WINDOW_RESIZED: el,
    OVERLAY_SET_ASSOCIATED_GAME: eC,
    OVERLAY_TRACKED_GAME_UPDATE: eS,
});
