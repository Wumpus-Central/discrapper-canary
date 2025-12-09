n.r(t), n.d(t, { default: () => eT }), n(388685), n(415506);
var r,
    i = n(442837),
    a = n(433517),
    o = n(570140),
    s = n(284737),
    l = n(490029),
    c = n(454991),
    u = n(694260),
    d = n(48481),
    f = n(131704),
    p = n(314897),
    _ = n(592125),
    m = n(984933),
    h = n(355863),
    g = n(914010),
    E = n(145597),
    b = n(451478),
    y = n(981631),
    O = n(987650);
function v(e, t, n) {
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
                v(e, t, n[t]);
            });
    }
    return e;
}
function I(e, t) {
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
function T(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : I(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function A(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = C(e, t);
    if (Object.getOwnPropertySymbols) {
        var a = Object.getOwnPropertySymbols(e);
        for (r = 0; r < a.length; r++)
            (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function C(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) (n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
let N = Object.freeze({
        selectedGuildId: null,
        selectedChannelId: null,
        displayUserMode: y.OYC.ALWAYS,
        displayNameMode: y.wC$.ALWAYS,
        avatarSizeMode: y.ipw.LARGE,
        notificationPositionMode: y._vf.TOP_LEFT,
        textChatNotifications: y.Ypu.ENABLED,
        disableExternalLinkAlert: !1,
        disablePinTutorial: !1,
        showKeybindIndicators: !0,
        disableClickableRegions: !1,
        textWidgetOpacity: O.wF.LOWER,
        showGameInviteNotification: !0,
        customInviteMessage: void 0,
    }),
    P = null,
    R = {},
    D = null,
    w = new Set(),
    x = !1,
    L = !1,
    j = !1,
    M = new Set(),
    k = !1;
function U(e) {
    let t = R[e];
    return null == t && (t = R[e] = S({}, N)), t;
}
__OVERLAY__ && (0, u.m)((0, E.getRPCAuthToken)());
let G = S({}, N),
    Z = new Set([
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
    B = new Set([
        ...Z.values(),
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
function F(e) {
    return (
        (null == e.version && 1 === E.OVERLAY_VERSION) ||
        e.version === E.OVERLAY_VERSION ||
        (o.Z.dispatch({ type: "OVERLAY_INCOMPATIBLE_APP" }), (0, l.zP)(), !1)
    );
}
function V(e) {
    if (("OVERLAY_INITIALIZE" === e.type && F(e) && (j = !0), j)) {
        var t, n;
        switch (e.type) {
            case "CHANNEL_CREATE":
            case "THREAD_CREATE":
            case "THREAD_UPDATE":
            case "CHANNEL_DELETE":
            case "THREAD_DELETE":
                let r = (0, f.createChannelRecord)(e.channel);
                if (!f.AW.has(r.type)) break;
                o.Z.dispatch({
                    type: e.type,
                    channel: r,
                });
                break;
            case "CHANNEL_UPDATES":
                o.Z.dispatch({
                    type: e.type,
                    channels: e.channels.map((e) => (0, f.createChannelRecord)(e)),
                });
                break;
            case "CONNECTION_OPEN_SUPPLEMENTAL":
                (e.lazyPrivateChannels = (null != (t = e.lazyPrivateChannels) ? t : []).map((e) =>
                    (0, f.createChannelRecord)(e),
                )),
                    o.Z.dispatch(e);
                break;
            case "THREAD_LIST_SYNC":
                o.Z.dispatch(T(S({}, e), { threads: e.threads.map((e) => (0, f.createChannelRecord)(e)) }));
                break;
            case "GUILD_CREATE":
                let i = (e) => (0, f.createChannelRecord)(e),
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
                    T(S({}, e), {
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
function H(e) {
    e.isSwitchingAccount || (R = {});
}
function Y(e) {
    e.userId in R && delete R[e.userId];
}
function W() {
    w.clear();
}
function K(e) {
    let { focusedPID: t, trackedGames: n, overlayStoredSettings: r } = e;
    (P = t),
        __OVERLAY__ &&
            (n.forEach((e) => {
                ey.set(e.pid, e);
            }),
            c.v.update({
                legacyEnabled: r.legacyEnabled,
                oopEnabled: r.oopEnabled,
            }));
}
function z() {
    let e = G.selectedGuildId,
        t = G.selectedChannelId;
    if (
        (null == e ||
            (m.ZP.hasChannels(e) && (null == t || m.ZP.hasSelectableChannel(e, t))) ||
            ((e = null), (t = null)),
        null != t && null == _.Z.getChannel(t) && ((e = null), (t = null)),
        null == e && null == t && (e = g.Z.getGuildId()),
        null != e && null == t)
    ) {
        let n = m.ZP.getDefaultChannel(e);
        null != n && (t = n.id);
    }
    (G.selectedGuildId = e), (G.selectedChannelId = t);
}
function q() {
    if (!__OVERLAY__) return !1;
    let e = P === (0, E.getPID)(),
        t = w.has((0, E.getPID)()) || M.size > 0;
    e && t ? (0, s.T_)(window, !0) : (0, s.T_)(window, !1);
}
function Q() {}
function X(e) {
    let { locked: t, pid: n } = e;
    t ? w.delete(n) : w.add(n), $(), q(), (k = !1);
}
function J(e) {
    let { region: t } = e;
    if (P !== (0, E.getPID)() || M.has(t)) return !1;
    M.add(t);
}
function $() {
    if (P !== (0, E.getPID)()) return !1;
    M.clear();
}
function ee(e) {
    let { pid: t } = e;
    (P = t), q();
}
function et(e) {
    let { guildId: t, channelId: n } = e;
    (G.selectedGuildId = t), (G.selectedChannelId = n);
}
function en(e) {
    let { callId: t } = e;
    D = t;
}
function er() {
    D = null;
}
function ei() {
    if (__OVERLAY__) {
        let e = b.Z.windowSize();
        (0, E.validResolution)(e) || (k = !1);
    }
}
function ea(e) {
    k = e.isPreviewingInGame;
}
function eo(e) {
    let { mode: t } = e;
    G.displayNameMode = t;
}
function es(e) {
    let { mode: t } = e;
    G.displayUserMode = t;
}
function el(e) {
    let { mode: t } = e;
    G.avatarSizeMode = t;
}
function ec(e) {
    let { mode: t } = e;
    G.notificationPositionMode = t;
}
function eu(e) {
    let { disable: t } = e;
    G.disableClickableRegions = t;
}
function ed(e) {
    let { shouldShow: t } = e;
    G.showKeybindIndicators = t;
}
function ef(e) {
    let { message: t } = e,
        n = G.customInviteMessage !== t;
    return (G.customInviteMessage = t), n;
}
function ep(e) {
    let { opacity: t } = e,
        n = G.textWidgetOpacity !== t;
    return (G.textWidgetOpacity = t), n;
}
function e_(e) {
    let { shouldShow: t } = e,
        n = G.showGameInviteNotification !== t;
    return (G.showGameInviteNotification = t), n;
}
function em() {
    G.disableExternalLinkAlert = !0;
}
function eh() {
    x = !0;
}
function eg() {
    o.Z.addInterceptor((e) => {
        if (L || !B.has(e.type)) return !1;
        if ("CHANNEL_SELECT" === e.type) {
            let { guildId: t, channelId: n } = e;
            return (
                null != n &&
                ((0, l.lW)({
                    type: y.BmY.DISPATCH,
                    pid: (0, E.getPID)(),
                    token: (0, E.getRPCAuthToken)(),
                    payloads: [
                        {
                            type: "CHANNEL_PRELOAD",
                            guildId: t === y.ME ? null : t,
                            channelId: n,
                            context: y.e3s,
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
                type: y.BmY.DISPATCH,
                pid: (0, E.getPID)(),
                token: (0, E.getRPCAuthToken)(),
                payloads: [e],
            }),
            !Z.has(e.type)
        );
    });
}
function eE(e) {
    let t = (0, E.getPID)();
    if (null == e.pid || e.pid === t)
        switch (e.type) {
            case y.BmY.STORAGE_SYNC:
                i.ZP.PersistedStore.initializeAll(e.states);
                break;
            case y.BmY.DISPATCH:
                null != e.payloads && ((L = !0), e.payloads.forEach((e) => V(e)), (L = !1));
        }
}
function eb() {
    eg(),
        (0, l.Ty)(eE, (0, E.getRPCAuthToken)()),
        (0, l.$j)(),
        (0, l.lW)({
            type: y.BmY.CONNECT,
            pid: (0, E.getPID)(),
            token: (0, E.getRPCAuthToken)(),
        });
}
let ey = new Map();
function eO(e) {
    __OVERLAY__ && (null != e.trackedGame ? ey.set(e.pid, e.trackedGame) : ey.delete(e.pid));
}
function ev(e) {
    __OVERLAY__ &&
        c.v.update({
            legacyEnabled: e.legacyEnabled,
            oopEnabled: e.oopEnabled,
        });
}
function eS(e) {
    w.delete(e.previousAssociatedGamePID);
}
class eI extends (r = i.ZP.PersistedStore) {
    initialize(e) {
        if (
            (this.waitFor(p.default, _.Z, m.ZP, h.Z, g.Z, b.Z),
            this.syncWith([p.default], () => {
                let e = p.default.getId();
                G = null != e ? U(e) : S({}, N);
            }),
            __OVERLAY__ && w.delete((0, E.getPID)()),
            null != e)
        ) {
            R = e;
            let t = p.default.getId();
            null != t &&
                (null == (G = U(t)).textChatNotifications && (G.textChatNotifications = N.textChatNotifications),
                null == G.textWidgetOpacity && (G.textWidgetOpacity = N.textWidgetOpacity),
                null == G.disableClickableRegions && (G.disableClickableRegions = N.disableClickableRegions));
        }
    }
    getState() {
        return R;
    }
    isLocked(e) {
        return !w.has(e);
    }
    isInstanceLocked() {
        return !w.has((0, E.getPID)());
    }
    isInstanceFocused() {
        return P === (0, E.getPID)();
    }
    isFocused(e) {
        return P === e;
    }
    isPinned(e) {
        let t = h.Z.getLayout(E.OVERLAY_LAYOUT_ID);
        return (
            null != t &&
            null !=
                t.widgets.find((t) => {
                    let n = h.Z.getWidget(t);
                    return null != n && n.type === e && !!n.pinned;
                })
        );
    }
    getSelectedGuildId() {
        return G.selectedGuildId;
    }
    getSelectedChannelId() {
        return G.selectedChannelId;
    }
    getSelectedCallId() {
        return D;
    }
    getDisplayUserMode() {
        return G.displayUserMode;
    }
    getDisplayNameMode() {
        return G.displayNameMode;
    }
    getAvatarSizeMode() {
        return G.avatarSizeMode;
    }
    getNotificationPositionMode() {
        return G.notificationPositionMode;
    }
    get showKeybindIndicators() {
        return null == G.showKeybindIndicators || G.showKeybindIndicators;
    }
    get showInviteNotification() {
        return null == G.showGameInviteNotification || G.showGameInviteNotification;
    }
    get disableClickableRegions() {
        return null != G.disableClickableRegions && G.disableClickableRegions;
    }
    get customInviteMessage() {
        return G.customInviteMessage;
    }
    getDisableExternalLinkAlert() {
        return G.disableExternalLinkAlert;
    }
    getFocusedPID() {
        return P;
    }
    get initialized() {
        return j;
    }
    get incompatibleApp() {
        return x;
    }
    getActiveRegions() {
        return M;
    }
    getTextWidgetOpacity() {
        return G.textWidgetOpacity;
    }
    isPreviewingInGame() {
        return k;
    }
    getTrackedGame(e) {
        var t;
        return null != (t = ey.get(e)) ? t : null;
    }
}
v(eI, "displayName", "OverlayStore"),
    v(eI, "persistKey", "OverlayStoreV2"),
    v(eI, "migrations", [
        () => {
            let e = S({}, a.K.get("OverlayStore")),
                { pinnedWidgets: t, positions: n, sizes: r, v: i } = e,
                o = A(e, ["pinnedWidgets", "positions", "sizes", "v"]);
            return S({}, N, 5 === i ? o : null);
        },
        (e) => {
            let t = p.default.getId();
            return null == e || null == t ? {} : { [t]: S({}, e) };
        },
    ]);
let eT = new eI(o.Z, {
    LOGOUT: H,
    MULTI_ACCOUNT_REMOVE_ACCOUNT: Y,
    CONNECTION_CLOSED: W,
    OVERLAY_START_SESSION: eb,
    OVERLAY_INITIALIZE: K,
    OVERLAY_READY: z,
    OVERLAY_FOCUSED: ee,
    OVERLAY_SELECT_CHANNEL: et,
    OVERLAY_SELECT_CALL: en,
    CALL_DELETE: er,
    LAYOUT_CREATE: Q,
    OVERLAY_SET_ENABLED: ev,
    OVERLAY_SET_DISPLAY_NAME_MODE: eo,
    OVERLAY_SET_DISPLAY_USER_MODE: es,
    OVERLAY_SET_AVATAR_SIZE_MODE: el,
    OVERLAY_SET_NOTIFICATION_POSITION_MODE: ec,
    OVERLAY_SET_DISABLE_CLICKABLE_REGIONS: eu,
    OVERLAY_SET_SHOW_KEYBIND_INDICATORS: ed,
    OVERLAY_SET_INVITE_MESSAGE: ef,
    OVERLAY_SET_GAME_INVITE_NOTIFICATION: e_,
    OVERLAY_SET_TEXT_WIDGET_OPACITY: ep,
    OVERLAY_DISABLE_EXTERNAL_LINK_ALERT: em,
    OVERLAY_INCOMPATIBLE_APP: eh,
    OVERLAY_SET_INPUT_LOCKED: X,
    OVERLAY_ACTIVATE_REGION: J,
    OVERLAY_DEACTIVATE_ALL_REGIONS: $,
    OVERLAY_SET_PREVIEW_IN_GAME_MODE: ea,
    WINDOW_RESIZED: ei,
    OVERLAY_SET_ASSOCIATED_GAME: eS,
    OVERLAY_TRACKED_GAME_UPDATE: eO,
});
