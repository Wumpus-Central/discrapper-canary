n.r(t), n.d(t, { default: () => eI }), n(896048), n(65821);
var r,
    i = n(311907),
    a = n(506774),
    s = n(73153),
    o = n(350723),
    l = n(996308),
    c = n(211753),
    u = n(850524),
    d = n(761821),
    f = n(95701),
    p = n(961350),
    _ = n(734057),
    h = n(808728),
    m = n(555528),
    g = n(967198),
    E = n(9302),
    b = n(531685),
    y = n(652215),
    O = n(672396);
function A(e, t, n) {
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
function v(e) {
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
                A(e, t, n[t]);
            });
    }
    return e;
}
function S(e, t) {
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
function I(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : S(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function T(e, t) {
    if (null == e) return {};
    var n,
        r,
        i,
        a = {};
    if ("u" > typeof Reflect && Reflect.ownKeys) {
        for (i = 0, n = Reflect.ownKeys(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
        return a;
    }
    if (((a = C(e, t)), Object.getOwnPropertySymbols))
        for (i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
            (r = n[i]), !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (a[r] = e[r]);
    return a;
}
function C(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.getOwnPropertyNames(e);
    for (r = 0; r < a.length; r++)
        (n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    return i;
}
let N = Object.freeze({
        selectedGuildId: null,
        selectedChannelId: null,
        displayUserMode: y.f5z.ALWAYS,
        displayNameMode: y.pwA.ALWAYS,
        avatarSizeMode: y.OSZ.LARGE,
        notificationPositionMode: y.G6Q.TOP_LEFT,
        textChatNotifications: y.iXc.ENABLED,
        disableExternalLinkAlert: !1,
        disablePinTutorial: !1,
        showKeybindIndicators: !0,
        disableClickableRegions: !1,
        textWidgetOpacity: O.Li.LOWER,
        showGameInviteNotification: !0,
        customInviteMessage: void 0,
    }),
    R = null,
    w = {},
    P = null,
    D = new Set(),
    x = !1,
    L = !1,
    j = !1,
    M = new Set(),
    k = !1;
function U(e) {
    let t = w[e];
    return null == t && (t = w[e] = v({}, N)), t;
}
__OVERLAY__ && (0, u.u)((0, E.getRPCAuthToken)());
let G = v({}, N),
    V = new Set([
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
    F = new Set([
        ...V.values(),
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
function B(e) {
    return (
        (null == e.version && 1 === E.OVERLAY_VERSION) ||
        e.version === E.OVERLAY_VERSION ||
        (s.h.dispatch({ type: "OVERLAY_INCOMPATIBLE_APP" }), (0, l.Zf)(), !1)
    );
}
function H(e) {
    if (("OVERLAY_INITIALIZE" === e.type && B(e) && (j = !0), j)) {
        var t, n;
        switch (e.type) {
            case "CHANNEL_CREATE":
            case "THREAD_CREATE":
            case "THREAD_UPDATE":
            case "CHANNEL_DELETE":
            case "THREAD_DELETE":
                let r = (0, f.createChannelRecord)(e.channel);
                if (!f.A_.has(r.type)) break;
                s.h.dispatch({
                    type: e.type,
                    channel: r,
                });
                break;
            case "CHANNEL_UPDATES":
                s.h.dispatch({
                    type: e.type,
                    channels: e.channels.map((e) => (0, f.createChannelRecord)(e)),
                });
                break;
            case "CONNECTION_OPEN_SUPPLEMENTAL":
                (e.lazyPrivateChannels = (null != (t = e.lazyPrivateChannels) ? t : []).map((e) =>
                    (0, f.createChannelRecord)(e),
                )),
                    s.h.dispatch(e);
                break;
            case "THREAD_LIST_SYNC":
                s.h.dispatch(I(v({}, e), { threads: e.threads.map((e) => (0, f.createChannelRecord)(e)) }));
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
                s.h.dispatch({
                    type: "GUILD_CREATE",
                    guild: a,
                });
                break;
            case "USER_SETTINGS_PROTO_UPDATE":
                s.h.dispatch(
                    I(v({}, e), {
                        settings: {
                            proto: (0, d.Y5)(e.settings.type, e.settings.proto),
                            type: e.settings.type,
                        },
                    }),
                );
                break;
            default:
                s.h.dispatch(e);
        }
    }
}
function Y(e) {
    e.isSwitchingAccount || (w = {});
}
function W(e) {
    e.userId in w && delete w[e.userId];
}
function K() {
    D.clear();
}
function z(e) {
    let { focusedPID: t, trackedGames: n, overlayStoredSettings: r } = e;
    (R = t),
        __OVERLAY__ &&
            (n.forEach((e) => {
                ey.set(e.pid, e);
            }),
            c.x.update({
                legacyEnabled: r.legacyEnabled,
                oopEnabled: r.oopEnabled,
            }));
}
function q() {
    let e = G.selectedGuildId,
        t = G.selectedChannelId;
    if (
        (null == e ||
            (h.Ay.hasChannels(e) && (null == t || h.Ay.hasSelectableChannel(e, t))) ||
            ((e = null), (t = null)),
        null != t && null == _.A.getChannel(t) && ((e = null), (t = null)),
        null == e && null == t && (e = g.A.getGuildId()),
        null != e && null == t)
    ) {
        let n = h.Ay.getDefaultChannel(e);
        null != n && (t = n.id);
    }
    (G.selectedGuildId = e), (G.selectedChannelId = t);
}
function X() {
    if (!__OVERLAY__) return !1;
    let e = R === (0, E.getPID)(),
        t = D.has((0, E.getPID)()) || M.size > 0;
    e && t ? (0, o.XC)(window, !0) : (0, o.XC)(window, !1);
}
function Z() {}
function Q(e) {
    let { locked: t, pid: n } = e;
    t ? D.delete(n) : D.add(n), J(), X(), (k = !1);
}
function $(e) {
    let { region: t } = e;
    if (R !== (0, E.getPID)() || M.has(t)) return !1;
    M.add(t);
}
function J() {
    if (R !== (0, E.getPID)()) return !1;
    M.clear();
}
function ee(e) {
    let { pid: t } = e;
    (R = t), X();
}
function et(e) {
    let { guildId: t, channelId: n } = e;
    (G.selectedGuildId = t), (G.selectedChannelId = n);
}
function en(e) {
    let { callId: t } = e;
    P = t;
}
function er() {
    P = null;
}
function ei() {
    if (__OVERLAY__) {
        let e = b.A.windowSize();
        (0, E.validResolution)(e) || (k = !1);
    }
}
function ea(e) {
    k = e.isPreviewingInGame;
}
function es(e) {
    let { mode: t } = e;
    G.displayNameMode = t;
}
function eo(e) {
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
function eh() {
    G.disableExternalLinkAlert = !0;
}
function em() {
    x = !0;
}
function eg() {
    s.h.addInterceptor((e) => {
        if (L || !F.has(e.type)) return !1;
        if ("CHANNEL_SELECT" === e.type) {
            let { guildId: t, channelId: n } = e;
            return (
                null != n &&
                ((0, l.tN)({
                    type: y.kGV.DISPATCH,
                    pid: (0, E.getPID)(),
                    token: (0, E.getRPCAuthToken)(),
                    payloads: [
                        {
                            type: "CHANNEL_PRELOAD",
                            guildId: t === y.ME ? null : t,
                            channelId: n,
                            context: y.QCW,
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
            (0, l.tN)({
                type: y.kGV.DISPATCH,
                pid: (0, E.getPID)(),
                token: (0, E.getRPCAuthToken)(),
                payloads: [e],
            }),
            !V.has(e.type)
        );
    });
}
function eE(e) {
    let t = (0, E.getPID)();
    if (null == e.pid || e.pid === t)
        switch (e.type) {
            case y.kGV.STORAGE_SYNC:
                i.Ay.PersistedStore.initializeAll(e.states);
                break;
            case y.kGV.DISPATCH:
                null != e.payloads && ((L = !0), e.payloads.forEach((e) => H(e)), (L = !1));
        }
}
function eb() {
    eg(),
        (0, l.QZ)(eE, (0, E.getRPCAuthToken)()),
        (0, l.Ng)(),
        (0, l.tN)({
            type: y.kGV.CONNECT,
            pid: (0, E.getPID)(),
            token: (0, E.getRPCAuthToken)(),
        });
}
let ey = new Map();
function eO(e) {
    __OVERLAY__ && (null != e.trackedGame ? ey.set(e.pid, e.trackedGame) : ey.delete(e.pid));
}
function eA(e) {
    __OVERLAY__ &&
        c.x.update({
            legacyEnabled: e.legacyEnabled,
            oopEnabled: e.oopEnabled,
        });
}
function ev(e) {
    D.delete(e.previousAssociatedGamePID);
}
class eS extends (r = i.Ay.PersistedStore) {
    initialize(e) {
        if (
            (this.waitFor(p.default, _.A, h.Ay, m.A, g.A, b.A),
            this.syncWith([p.default], () => {
                let e = p.default.getId();
                G = null != e ? U(e) : v({}, N);
            }),
            __OVERLAY__ && D.delete((0, E.getPID)()),
            null != e)
        ) {
            w = e;
            let t = p.default.getId();
            null != t &&
                (null == (G = U(t)).textChatNotifications && (G.textChatNotifications = N.textChatNotifications),
                null == G.textWidgetOpacity && (G.textWidgetOpacity = N.textWidgetOpacity),
                null == G.disableClickableRegions && (G.disableClickableRegions = N.disableClickableRegions));
        }
    }
    getState() {
        return w;
    }
    isLocked(e) {
        return !D.has(e);
    }
    isInstanceLocked() {
        return !D.has((0, E.getPID)());
    }
    isInstanceFocused() {
        return R === (0, E.getPID)();
    }
    isFocused(e) {
        return R === e;
    }
    isPinned(e) {
        let t = m.A.getLayout(E.OVERLAY_LAYOUT_ID);
        return (
            null != t &&
            null !=
                t.widgets.find((t) => {
                    let n = m.A.getWidget(t);
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
        return P;
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
        return R;
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
A(eS, "displayName", "OverlayStore"),
    A(eS, "persistKey", "OverlayStoreV2"),
    A(eS, "migrations", [
        () => {
            let e = v({}, a.w.get("OverlayStore")),
                { pinnedWidgets: t, positions: n, sizes: r, v: i } = e,
                s = T(e, ["pinnedWidgets", "positions", "sizes", "v"]);
            return v({}, N, 5 === i ? s : null);
        },
        (e) => {
            let t = p.default.getId();
            return null == e || null == t ? {} : { [t]: v({}, e) };
        },
    ]);
let eI = new eS(s.h, {
    LOGOUT: Y,
    MULTI_ACCOUNT_REMOVE_ACCOUNT: W,
    CONNECTION_CLOSED: K,
    OVERLAY_START_SESSION: eb,
    OVERLAY_INITIALIZE: z,
    OVERLAY_READY: q,
    OVERLAY_FOCUSED: ee,
    OVERLAY_SELECT_CHANNEL: et,
    OVERLAY_SELECT_CALL: en,
    CALL_DELETE: er,
    LAYOUT_CREATE: Z,
    OVERLAY_SET_ENABLED: eA,
    OVERLAY_SET_DISPLAY_NAME_MODE: es,
    OVERLAY_SET_DISPLAY_USER_MODE: eo,
    OVERLAY_SET_AVATAR_SIZE_MODE: el,
    OVERLAY_SET_NOTIFICATION_POSITION_MODE: ec,
    OVERLAY_SET_DISABLE_CLICKABLE_REGIONS: eu,
    OVERLAY_SET_SHOW_KEYBIND_INDICATORS: ed,
    OVERLAY_SET_INVITE_MESSAGE: ef,
    OVERLAY_SET_GAME_INVITE_NOTIFICATION: e_,
    OVERLAY_SET_TEXT_WIDGET_OPACITY: ep,
    OVERLAY_DISABLE_EXTERNAL_LINK_ALERT: eh,
    OVERLAY_INCOMPATIBLE_APP: em,
    OVERLAY_SET_INPUT_LOCKED: Q,
    OVERLAY_ACTIVATE_REGION: $,
    OVERLAY_DEACTIVATE_ALL_REGIONS: J,
    OVERLAY_SET_PREVIEW_IN_GAME_MODE: ea,
    WINDOW_RESIZED: ei,
    OVERLAY_SET_ASSOCIATED_GAME: ev,
    OVERLAY_TRACKED_GAME_UPDATE: eO,
});
