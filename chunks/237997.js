n.r(t), n.d(t, { default: () => eP }), n(388685), n(415506);
var r,
    i = n(442837),
    a = n(433517),
    o = n(570140),
    s = n(284737),
    l = n(490029),
    c = n(710845),
    u = n(454991),
    d = n(694260),
    f = n(48481),
    _ = n(131704),
    p = n(314897),
    h = n(592125),
    m = n(984933),
    g = n(355863),
    E = n(914010),
    b = n(358085),
    y = n(145597),
    O = n(372679),
    v = n(451478),
    I = n(981631),
    T = n(987650);
function S(e, t, n) {
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
function A(e) {
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
                S(e, t, n[t]);
            });
    }
    return e;
}
function C(e, t) {
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
function N(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : C(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function R(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = P(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function P(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let w = Object.freeze({
        selectedGuildId: null,
        selectedChannelId: null,
        displayUserMode: I.OYC.ALWAYS,
        displayNameMode: I.wC$.ALWAYS,
        avatarSizeMode: I.ipw.LARGE,
        notificationPositionMode: I._vf.TOP_LEFT,
        textChatNotifications: I.Ypu.ENABLED,
        disableExternalLinkAlert: !1,
        disablePinTutorial: !1,
        showKeybindIndicators: !0,
        disableClickableRegions: !1,
        textWidgetOpacity: T.wF.LOWER,
        showGameInviteNotification: !0,
        customInviteMessage: void 0,
    }),
    D = null,
    x = {},
    L = null,
    M = new Set(),
    j = !1,
    k = null,
    U = !1,
    G = !1,
    B = new Set(),
    Z = !1,
    F = new c.Z("OverlayStore");
function V(e) {
    let t = x[e];
    return null == t && (t = x[e] = A({}, w)), t;
}
__OVERLAY__ && (0, d.m)((0, y.getRPCAuthToken)());
let H = A({}, w),
    Y = new Set([
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
    W = new Set([
        ...Y.values(),
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
function K(e) {
    return (
        (null == e.version && 1 === y.OVERLAY_VERSION) ||
        e.version === y.OVERLAY_VERSION ||
        (o.Z.dispatch({ type: "OVERLAY_INCOMPATIBLE_APP" }), (0, l.zP)(), !1)
    );
}
function z(e) {
    if (("OVERLAY_INITIALIZE" === e.type && K(e) && (G = !0), G)) {
        var t, n;
        switch (e.type) {
            case "CHANNEL_CREATE":
            case "THREAD_CREATE":
            case "THREAD_UPDATE":
            case "CHANNEL_DELETE":
            case "THREAD_DELETE":
                let r = (0, _.createChannelRecord)(e.channel);
                if (!_.AW.has(r.type)) break;
                o.Z.dispatch({
                    type: e.type,
                    channel: r,
                });
                break;
            case "CHANNEL_UPDATES":
                o.Z.dispatch({
                    type: e.type,
                    channels: e.channels.map((e) => (0, _.createChannelRecord)(e)),
                });
                break;
            case "CONNECTION_OPEN_SUPPLEMENTAL":
                (e.lazyPrivateChannels = (null != (t = e.lazyPrivateChannels) ? t : []).map((e) =>
                    (0, _.createChannelRecord)(e),
                )),
                    o.Z.dispatch(e);
                break;
            case "THREAD_LIST_SYNC":
                o.Z.dispatch(N(A({}, e), { threads: e.threads.map((e) => (0, _.createChannelRecord)(e)) }));
                break;
            case "GUILD_CREATE":
                let i = (e) => (0, _.createChannelRecord)(e),
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
                    N(A({}, e), {
                        settings: {
                            proto: (0, f.kI)(e.settings.type, e.settings.proto),
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
function q(e) {
    e.isSwitchingAccount || (x = {});
}
function X(e) {
    e.userId in x && delete x[e.userId];
}
function Q() {
    M.clear();
}
function J(e) {
    let { focusedPID: t, trackedGames: n, overlayStoredSettings: r } = e;
    (D = t),
        __OVERLAY__ &&
            (n.forEach((e) => {
                eS.set(e.pid, e);
            }),
            u.v.update({
                legacyEnabled: r.legacyEnabled,
                oopEnabled: r.oopEnabled,
            }));
}
function $() {
    let e = H.selectedGuildId,
        t = H.selectedChannelId;
    if (
        (null == e ||
            (m.ZP.hasChannels(e) && (null == t || m.ZP.hasSelectableChannel(e, t))) ||
            ((e = null), (t = null)),
        null != t && null == h.Z.getChannel(t) && ((e = null), (t = null)),
        null == e && null == t && (e = E.Z.getGuildId()),
        null != e && null == t)
    ) {
        let n = m.ZP.getDefaultChannel(e);
        null != n && (t = n.id);
    }
    (H.selectedGuildId = e), (H.selectedChannelId = t);
}
function ee() {
    if (!__OVERLAY__) return !1;
    let e = D === (0, y.getPID)(),
        t = M.has((0, y.getPID)()) || B.size > 0;
    e && t ? (0, s.T_)(window, !0) : (0, s.T_)(window, !1);
}
function et() {}
function en(e) {
    let { locked: t, pid: n } = e;
    t ? M.delete(n) : M.add(n), ei(), ee(), (Z = !1);
}
function er(e) {
    let { region: t } = e;
    if (D !== (0, y.getPID)() || B.has(t)) return !1;
    B.add(t);
}
function ei() {
    if (D !== (0, y.getPID)()) return !1;
    B.clear();
}
function ea(e) {
    let { pid: t } = e;
    (D = t), ee();
}
function eo(e) {
    let { guildId: t, channelId: n } = e;
    (H.selectedGuildId = t), (H.selectedChannelId = n);
}
function es(e) {
    let { callId: t } = e;
    L = t;
}
function el() {
    L = null;
}
function ec() {
    if (__OVERLAY__) {
        let e = v.Z.windowSize();
        (0, y.validResolution)(e) || (Z = !1);
    }
}
function eu(e) {
    Z = e.isPreviewingInGame;
}
function ed(e) {
    let { mode: t } = e;
    H.displayNameMode = t;
}
function ef(e) {
    let { mode: t } = e;
    H.displayUserMode = t;
}
function e_(e) {
    let { mode: t } = e;
    H.avatarSizeMode = t;
}
function ep(e) {
    let { mode: t } = e;
    H.notificationPositionMode = t;
}
function eh(e) {
    let { disable: t } = e;
    H.disableClickableRegions = t;
}
function em(e) {
    let { shouldShow: t } = e;
    H.showKeybindIndicators = t;
}
function eg(e) {
    let { message: t } = e,
        n = H.customInviteMessage !== t;
    return (H.customInviteMessage = t), n;
}
function eE(e) {
    let { opacity: t } = e,
        n = H.textWidgetOpacity !== t;
    return (H.textWidgetOpacity = t), n;
}
function eb(e) {
    let { shouldShow: t } = e,
        n = H.showGameInviteNotification !== t;
    return (H.showGameInviteNotification = t), n;
}
function ey() {
    H.disableExternalLinkAlert = !0;
}
function eO() {
    j = !0;
}
function ev() {
    o.Z.addInterceptor((e) => {
        if (U || !W.has(e.type)) return !1;
        if ("CHANNEL_SELECT" === e.type) {
            let { guildId: t, channelId: n } = e;
            return (
                null != n &&
                ((0, l.lW)({
                    type: I.BmY.DISPATCH,
                    pid: (0, y.getPID)(),
                    token: (0, y.getRPCAuthToken)(),
                    payloads: [
                        {
                            type: "CHANNEL_PRELOAD",
                            guildId: t === I.ME ? null : t,
                            channelId: n,
                            context: I.e3s,
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
                type: I.BmY.DISPATCH,
                pid: (0, y.getPID)(),
                token: (0, y.getRPCAuthToken)(),
                payloads: [e],
            }),
            !Y.has(e.type)
        );
    });
}
function eI(e) {
    let t = (0, y.getPID)();
    if (null == e.pid || e.pid === t)
        switch (e.type) {
            case I.BmY.STORAGE_SYNC:
                i.ZP.PersistedStore.initializeAll(e.states);
                break;
            case I.BmY.DISPATCH:
                null != e.payloads && ((U = !0), e.payloads.forEach((e) => z(e)), (U = !1));
        }
}
function eT() {
    ev(),
        (0, l.Ty)(eI, (0, y.getRPCAuthToken)()),
        (0, l.$j)(),
        (0, l.lW)({
            type: I.BmY.CONNECT,
            pid: (0, y.getPID)(),
            token: (0, y.getRPCAuthToken)(),
        });
}
let eS = new Map();
function eA(e) {
    __OVERLAY__ && (null != e.trackedGame ? eS.set(e.pid, e.trackedGame) : eS.delete(e.pid));
}
function eC(e) {
    __OVERLAY__ &&
        u.v.update({
            legacyEnabled: e.legacyEnabled,
            oopEnabled: e.oopEnabled,
        });
}
function eN(e) {
    M.delete(e.previousAssociatedGamePID);
}
class eR extends (r = i.ZP.PersistedStore) {
    initialize(e) {
        if (
            (this.waitFor(p.default, h.Z, m.ZP, g.Z, E.Z, v.Z),
            this.syncWith([p.default], () => {
                let e = p.default.getId();
                H = null != e ? V(e) : A({}, w);
            }),
            __OVERLAY__)
        ) {
            if (b.isPlatformEmbedded) {
                let e = (0, O.M)();
                null == e && F.error("Overlay module failed loaded"), (k = e);
            }
            M.delete((0, y.getPID)());
        }
        if (null != e) {
            x = e;
            let t = p.default.getId();
            null != t &&
                (null == (H = V(t)).textChatNotifications && (H.textChatNotifications = w.textChatNotifications),
                null == H.textWidgetOpacity && (H.textWidgetOpacity = w.textWidgetOpacity),
                null == H.disableClickableRegions && (H.disableClickableRegions = w.disableClickableRegions));
        }
    }
    getState() {
        return x;
    }
    isLocked(e) {
        return !M.has(e);
    }
    isInstanceLocked() {
        return !M.has((0, y.getPID)());
    }
    isInstanceFocused() {
        return D === (0, y.getPID)();
    }
    isFocused(e) {
        return D === e;
    }
    isPinned(e) {
        let t = g.Z.getLayout(y.OVERLAY_LAYOUT_ID);
        return (
            null != t &&
            null !=
                t.widgets.find((t) => {
                    let n = g.Z.getWidget(t);
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
        return L;
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
    get showKeybindIndicators() {
        return null == H.showKeybindIndicators || H.showKeybindIndicators;
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
        return D;
    }
    get initialized() {
        return G;
    }
    get incompatibleApp() {
        return j;
    }
    getActiveRegions() {
        return B;
    }
    getTextWidgetOpacity() {
        return H.textWidgetOpacity;
    }
    isPreviewingInGame() {
        return Z;
    }
    getTrackedGame(e) {
        var t;
        return null != (t = eS.get(e)) ? t : null;
    }
}
S(eR, "displayName", "OverlayStore"),
    S(eR, "persistKey", "OverlayStoreV2"),
    S(eR, "migrations", [
        () => {
            let e = A({}, a.K.get("OverlayStore")),
                { pinnedWidgets: t, positions: n, sizes: r, v: i } = e,
                o = R(e, ["pinnedWidgets", "positions", "sizes", "v"]);
            return A({}, w, 5 === i ? o : null);
        },
        (e) => {
            let t = p.default.getId();
            return null == e || null == t ? {} : { [t]: A({}, e) };
        },
    ]);
let eP = new eR(o.Z, {
    LOGOUT: q,
    MULTI_ACCOUNT_REMOVE_ACCOUNT: X,
    CONNECTION_CLOSED: Q,
    OVERLAY_START_SESSION: eT,
    OVERLAY_INITIALIZE: J,
    OVERLAY_READY: $,
    OVERLAY_FOCUSED: ea,
    OVERLAY_SELECT_CHANNEL: eo,
    OVERLAY_SELECT_CALL: es,
    CALL_DELETE: el,
    LAYOUT_CREATE: et,
    OVERLAY_SET_ENABLED: eC,
    OVERLAY_SET_DISPLAY_NAME_MODE: ed,
    OVERLAY_SET_DISPLAY_USER_MODE: ef,
    OVERLAY_SET_AVATAR_SIZE_MODE: e_,
    OVERLAY_SET_NOTIFICATION_POSITION_MODE: ep,
    OVERLAY_SET_DISABLE_CLICKABLE_REGIONS: eh,
    OVERLAY_SET_SHOW_KEYBIND_INDICATORS: em,
    OVERLAY_SET_INVITE_MESSAGE: eg,
    OVERLAY_SET_GAME_INVITE_NOTIFICATION: eb,
    OVERLAY_SET_TEXT_WIDGET_OPACITY: eE,
    OVERLAY_DISABLE_EXTERNAL_LINK_ALERT: ey,
    OVERLAY_INCOMPATIBLE_APP: eO,
    OVERLAY_SET_INPUT_LOCKED: en,
    OVERLAY_ACTIVATE_REGION: er,
    OVERLAY_DEACTIVATE_ALL_REGIONS: ei,
    OVERLAY_SET_PREVIEW_IN_GAME_MODE: eu,
    WINDOW_RESIZED: ec,
    OVERLAY_SET_ASSOCIATED_GAME: eN,
    OVERLAY_TRACKED_GAME_UPDATE: eA,
});
