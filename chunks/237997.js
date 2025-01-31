n.d(t, { Z: () => eE }), n(47120), n(411104);
var i,
    r = n(442837),
    a = n(433517),
    s = n(570140),
    o = n(284737),
    l = n(490029),
    u = n(48481),
    c = n(131704),
    d = n(314897),
    f = n(592125),
    _ = n(984933),
    p = n(355863),
    h = n(914010),
    m = n(358085),
    g = n(998502),
    E = n(145597),
    v = n(451478),
    y = n(981631),
    I = n(987650);
function b(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
let T = Object.freeze({
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
        textWidgetOpacity: I.wF.LOWER,
        showGameInviteNotification: !0,
        customInviteMessage: void 0
    }),
    S = null,
    A = {},
    N = null,
    C = new Set(),
    R = !1,
    O = null,
    D = !1,
    x = !1,
    L = new Set(),
    P = !1;
function w(e) {
    let t = A[e];
    return null == t && (t = A[e] = { ...T }), t;
}
let M = { ...T },
    k = new Set(['AUDIO_SET_INPUT_DEVICE', 'AUDIO_SET_INPUT_VOLUME', 'AUDIO_SET_LOCAL_VIDEO_DISABLED', 'AUDIO_SET_LOCAL_VOLUME', 'AUDIO_SET_MODE', 'AUDIO_SET_NOISE_CANCELLATION', 'AUDIO_SET_NOISE_SUPPRESSION', 'AUDIO_SET_OUTPUT_DEVICE', 'AUDIO_SET_OUTPUT_VOLUME', 'AUDIO_TOGGLE_LOCAL_MUTE', 'AUDIO_TOGGLE_SELF_DEAF', 'AUDIO_TOGGLE_SELF_MUTE', 'BILLING_SUBSCRIPTION_UPDATE_SUCCESS', 'CATEGORY_COLLAPSE', 'CATEGORY_EXPAND', 'CHANNEL_ACK', 'CHANNEL_PRELOAD', 'GIFT_CODE_REDEEM', 'GIFT_CODE_REDEEM_FAILURE', 'GIFT_CODE_REDEEM_SUCCESS', 'HOTSPOT_HIDE', 'INVITE_MODAL_CLOSE', 'LAYOUT_CREATE', 'LAYOUT_CREATE_WIDGETS', 'LAYOUT_DELETE_ALL_WIDGETS', 'LAYOUT_DELETE_WIDGET', 'LAYOUT_SET_PINNED', 'LAYOUT_SET_TOP_WIDGET', 'LAYOUT_UPDATE_WIDGET', 'LOAD_MESSAGES', 'LOAD_MESSAGES_FAILURE', 'LOAD_MESSAGES_SUCCESS', 'MEDIA_ENGINE_SET_GO_LIVE_SOURCE', 'OVERLAY_ACTIVATE_REGION', 'OVERLAY_DEACTIVATE_ALL_REGIONS', 'OVERLAY_MESSAGE_EVENT_ACTION', 'OVERLAY_SET_AVATAR_SIZE_MODE', 'OVERLAY_SET_CLICK_ZONES', 'OVERLAY_SET_DISPLAY_NAME_MODE', 'OVERLAY_SET_DISPLAY_USER_MODE', 'OVERLAY_SET_INPUT_LOCKED', 'OVERLAY_SET_NOTIFICATION_POSITION_MODE', 'OVERLAY_SET_TEXT_CHAT_NOTIFICATION_MODE', 'OVERLAY_SET_SHOW_KEYBIND_INDICATORS', 'OVERLAY_SET_GAME_INVITE_NOTIFICATION', 'OVERLAY_SET_INVITE_MESSAGE', 'OVERLAY_SET_TEXT_WIDGET_OPACITY', 'OVERLAY_OAUTH2_AUTHORIZE_MODAL_OPEN', 'OVERLAY_OAUTH2_AUTHORIZE_MODAL_CLOSE', 'PREMIUM_PAYMENT_ERROR_CLEAR', 'PREMIUM_PAYMENT_MODAL_CLOSE', 'PREMIUM_PAYMENT_MODAL_OPEN', 'PREMIUM_PAYMENT_SUBSCRIBE_FAIL', 'PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS', 'PREMIUM_PAYMENT_UPDATE_FAIL', 'PREMIUM_PAYMENT_UPDATE_SUCCESS', 'PREMIUM_REQUIRED_MODAL_CLOSE', 'PREMIUM_REQUIRED_MODAL_OPEN', 'PURCHASE_CONFIRMATION_MODAL_CLOSE', 'PURCHASE_CONFIRMATION_MODAL_OPEN', 'SKU_PURCHASE_CLEAR_ERROR', 'SKU_PURCHASE_FAIL', 'SKU_PURCHASE_MODAL_CLOSE', 'SKU_PURCHASE_MODAL_OPEN', 'SKU_PURCHASE_PREVIEW_FETCH_SUCCESS', 'SKU_PURCHASE_SHOW_CONFIRMATION_STEP', 'SKU_PURCHASE_START', 'SKU_PURCHASE_SUCCESS', 'STREAM_CLOSE', 'STREAM_START', 'VOICE_CHANNEL_SELECT', 'USER_SETTINGS_PROTO_ENQUEUE_UPDATE', 'USER_SETTINGS_PROTO_LOAD_IF_NECESSARY']),
    U = new Set([...k.values(), 'ACTIVITY_INVITE_MODAL_CLOSE', 'CALL_DELETE', 'CHANNEL_COLLAPSE', 'CHANNEL_SELECT', 'GUILD_SOUNDBOARD_SOUND_PLAY_LOCALLY', 'OVERLAY_CALL_PRIVATE_CHANNEL', 'OVERLAY_JOIN_GAME', 'OVERLAY_NOTIFICATION_EVENT', 'OVERLAY_SELECT_CALL', 'OVERLAY_SET_NOT_IDLE', 'OVERLAY_SOUNDBOARD_SOUNDS_FETCH_REQUEST', 'OVERLAY_WIDGET_CHANGED', 'SOUNDBOARD_SET_OVERLAY_ENABLED', 'STREAM_STOP']);
function G(e) {
    return (null == e.version && 1 === E.Tq) || e.version === E.Tq || (s.Z.dispatch({ type: 'OVERLAY_INCOMPATIBLE_APP' }), (0, l.zP)(), !1);
}
function B(e) {
    if (('OVERLAY_INITIALIZE' === e.type && G(e) && (x = !0), x)) {
        var t, n, i, r, a;
        switch (e.type) {
            case 'CHANNEL_CREATE':
            case 'THREAD_CREATE':
            case 'THREAD_UPDATE':
            case 'CHANNEL_DELETE':
            case 'THREAD_DELETE':
                let o = (0, c.kt)(e.channel);
                if (!c.AW.has(o.type)) break;
                s.Z.dispatch({
                    type: e.type,
                    channel: o
                });
                break;
            case 'CHANNEL_UPDATES':
                s.Z.dispatch({
                    type: e.type,
                    channels: e.channels.map((e) => (0, c.kt)(e))
                });
                break;
            case 'CONNECTION_OPEN_SUPPLEMENTAL':
                (e.lazyPrivateChannels = (null !== (t = e.lazyPrivateChannels) && void 0 !== t ? t : []).map((e) => (0, c.kt)(e))), s.Z.dispatch(e);
                break;
            case 'THREAD_LIST_SYNC':
                s.Z.dispatch({
                    ...e,
                    threads: e.threads.map((e) => (0, c.kt)(e))
                });
                break;
            case 'GUILD_CREATE':
                let l = (e) => (0, c.kt)(e),
                    d = e.guild;
                (d.channels = null !== (r = null === (n = d.channels) || void 0 === n ? void 0 : n.map(l)) && void 0 !== r ? r : null),
                    (d.threads = null === (i = d.threads) || void 0 === i ? void 0 : i.map(l)),
                    null != d.channelUpdates && (d.channelUpdates.writes = null === (a = d.channelUpdates.writes) || void 0 === a ? void 0 : a.map(l)),
                    s.Z.dispatch({
                        type: 'GUILD_CREATE',
                        guild: d
                    });
                break;
            case 'USER_SETTINGS_PROTO_UPDATE':
                s.Z.dispatch({
                    ...e,
                    settings: {
                        proto: (0, u.kI)(e.settings.type, e.settings.proto),
                        type: e.settings.type
                    }
                });
                break;
            default:
                s.Z.dispatch(e);
        }
    }
}
function Z(e) {
    e.isSwitchingAccount || (A = {});
}
function F(e) {
    e.userId in A && delete A[e.userId];
}
function V() {
    C.clear();
}
function j(e) {
    let { focusedPID: t } = e;
    S = t;
}
function H() {
    let e = M.selectedGuildId,
        t = M.selectedChannelId;
    if ((null == e || (_.ZP.hasChannels(e) && (null == t || _.ZP.hasSelectableChannel(e, t))) || ((e = null), (t = null)), null != t && null == f.Z.getChannel(t) && ((e = null), (t = null)), null == e && null == t && (e = h.Z.getGuildId()), null != e && null == t)) {
        let n = _.ZP.getDefaultChannel(e);
        null != n && (t = n.id);
    }
    (M.selectedGuildId = e), (M.selectedChannelId = t);
}
function Y() {
    if (!__OVERLAY__) return !1;
    let e = S === (0, E.QF)(),
        t = C.has((0, E.QF)()) || L.size > 0;
    e && t ? (0, o.T_)(window, !0) : (0, o.T_)(window, !1);
}
function W() {}
function K(e) {
    let { locked: t, pid: n } = e;
    t ? C.delete(n) : C.add(n), q(), Y(), (P = !1);
}
function z(e) {
    let { region: t } = e;
    if (S !== (0, E.QF)() || L.has(t)) return !1;
    L.add(t);
}
function q() {
    if (S !== (0, E.QF)()) return !1;
    L.clear();
}
function Q(e) {
    let { pid: t } = e;
    (S = t), Y();
}
function X(e) {
    let { guildId: t, channelId: n } = e;
    (M.selectedGuildId = t), (M.selectedChannelId = n);
}
function J(e) {
    let { callId: t } = e;
    N = t;
}
function $() {
    N = null;
}
function ee() {
    if (__OVERLAY__) {
        let e = v.Z.windowSize();
        (0, E.Te)(e) || (P = !1);
    }
}
function et(e) {
    P = e.isPreviewingInGame;
}
function en(e) {
    let { mode: t } = e;
    M.displayNameMode = t;
}
function ei(e) {
    let { mode: t } = e;
    M.displayUserMode = t;
}
function er(e) {
    let { mode: t } = e;
    M.avatarSizeMode = t;
}
function ea(e) {
    let { mode: t } = e;
    M.notificationPositionMode = t;
}
function es(e) {
    let { mode: t } = e;
    M.textChatNotifications = t;
}
function eo(e) {
    let { shouldShow: t } = e;
    M.showKeybindIndicators = t;
}
function el(e) {
    let { message: t } = e,
        n = M.customInviteMessage !== t;
    return (M.customInviteMessage = t), n;
}
function eu(e) {
    let { opacity: t } = e,
        n = M.textWidgetOpacity !== t;
    return (M.textWidgetOpacity = t), n;
}
function ec(e) {
    let { shouldShow: t } = e,
        n = M.showGameInviteNotification !== t;
    return (M.showGameInviteNotification = t), n;
}
function ed() {
    M.disableExternalLinkAlert = !0;
}
function ef() {
    R = !0;
}
function e_() {
    s.Z.addInterceptor((e) => {
        if (D || !U.has(e.type)) return !1;
        if ('CHANNEL_SELECT' === e.type) {
            let { guildId: t, channelId: n } = e;
            return (
                null != n &&
                ((0, l.lW)({
                    type: y.BmY.DISPATCH,
                    pid: (0, E.QF)(),
                    token: (0, E.Ht)(),
                    payloads: [
                        {
                            type: 'CHANNEL_PRELOAD',
                            guildId: t === y.ME ? null : t,
                            channelId: n,
                            context: y.e3s
                        },
                        {
                            type: 'OVERLAY_SELECT_CHANNEL',
                            guildId: t,
                            channelId: n
                        }
                    ]
                }),
                !1)
            );
        }
        return (
            (0, l.lW)({
                type: y.BmY.DISPATCH,
                pid: (0, E.QF)(),
                token: (0, E.Ht)(),
                payloads: [e]
            }),
            !k.has(e.type)
        );
    });
}
function ep(e) {
    let t = (0, E.QF)();
    if (null == e.pid || e.pid === t)
        switch (e.type) {
            case y.BmY.STORAGE_SYNC:
                r.ZP.PersistedStore.initializeAll(e.states);
                break;
            case y.BmY.DISPATCH:
                null != e.payloads && ((D = !0), e.payloads.forEach((e) => B(e)), (D = !1));
        }
}
function eh() {
    e_(),
        (0, l.Ty)(ep, (0, E.Ht)()),
        (0, l.$j)(),
        (0, l.lW)({
            type: y.BmY.CONNECT,
            pid: (0, E.QF)(),
            token: (0, E.Ht)()
        });
}
function em(e) {
    C.delete(e.previousAssociatedGamePID);
}
class eg extends (i = r.ZP.PersistedStore) {
    initialize(e) {
        if (
            (this.waitFor(d.default),
            this.syncWith([d.default], () => {
                let e = d.default.getId();
                M = null != e ? w(e) : { ...T };
            }),
            __OVERLAY__ && (m.isPlatformEmbedded && (O = g.ZP.requireModule('discord_overlay2')), C.delete((0, E.QF)())),
            null != e)
        ) {
            A = e;
            let t = d.default.getId();
            null != t && (null == (M = w(t)).textChatNotifications && (M.textChatNotifications = T.textChatNotifications), null == M.textWidgetOpacity && (M.textWidgetOpacity = T.textWidgetOpacity));
        }
    }
    getState() {
        return A;
    }
    isLocked(e) {
        return !C.has(e);
    }
    isInstanceLocked() {
        return !C.has((0, E.QF)());
    }
    isInstanceFocused() {
        return S === (0, E.QF)();
    }
    isFocused(e) {
        return S === e;
    }
    isPinned(e) {
        let t = p.Z.getLayout(E.qU);
        return (
            null != t &&
            null !=
                t.widgets.find((t) => {
                    let n = p.Z.getWidget(t);
                    return null != n && n.type === e && !!n.pinned;
                })
        );
    }
    getSelectedGuildId() {
        return M.selectedGuildId;
    }
    getSelectedChannelId() {
        return M.selectedChannelId;
    }
    getSelectedCallId() {
        return N;
    }
    getDisplayUserMode() {
        return M.displayUserMode;
    }
    getDisplayNameMode() {
        return M.displayNameMode;
    }
    getAvatarSizeMode() {
        return M.avatarSizeMode;
    }
    getNotificationPositionMode() {
        return M.notificationPositionMode;
    }
    getTextChatNotificationMode() {
        return M.notificationPositionMode === y._vf.DISABLED ? y.Ypu.DISABLED : M.textChatNotifications;
    }
    get showKeybindIndicators() {
        return null == M.showKeybindIndicators || M.showKeybindIndicators;
    }
    get showInviteNotification() {
        return null == M.showGameInviteNotification || M.showGameInviteNotification;
    }
    get customInviteMessage() {
        return M.customInviteMessage;
    }
    getDisableExternalLinkAlert() {
        return M.disableExternalLinkAlert;
    }
    getFocusedPID() {
        return S;
    }
    get initialized() {
        return x;
    }
    get incompatibleApp() {
        return R;
    }
    getActiveRegions() {
        return L;
    }
    getTextWidgetOpacity() {
        return M.textWidgetOpacity;
    }
    isPreviewingInGame() {
        return P;
    }
}
b(eg, 'displayName', 'OverlayStore'),
    b(eg, 'persistKey', 'OverlayStoreV2'),
    b(eg, 'migrations', [
        () => {
            let { pinnedWidgets: e, positions: t, sizes: n, v: i, ...r } = { ...a.K.get('OverlayStore') };
            return {
                ...T,
                ...(5 === i ? r : null)
            };
        },
        (e) => {
            let t = d.default.getId();
            return null == e || null == t ? {} : { [t]: { ...e } };
        }
    ]);
let eE = new eg(s.Z, {
    LOGOUT: Z,
    MULTI_ACCOUNT_REMOVE_ACCOUNT: F,
    CONNECTION_CLOSED: V,
    OVERLAY_START_SESSION: eh,
    OVERLAY_INITIALIZE: j,
    OVERLAY_READY: H,
    OVERLAY_FOCUSED: Q,
    OVERLAY_SELECT_CHANNEL: X,
    OVERLAY_SELECT_CALL: J,
    CALL_DELETE: $,
    LAYOUT_CREATE: W,
    OVERLAY_SET_DISPLAY_NAME_MODE: en,
    OVERLAY_SET_DISPLAY_USER_MODE: ei,
    OVERLAY_SET_AVATAR_SIZE_MODE: er,
    OVERLAY_SET_NOTIFICATION_POSITION_MODE: ea,
    OVERLAY_SET_TEXT_CHAT_NOTIFICATION_MODE: es,
    OVERLAY_SET_SHOW_KEYBIND_INDICATORS: eo,
    OVERLAY_SET_INVITE_MESSAGE: el,
    OVERLAY_SET_GAME_INVITE_NOTIFICATION: ec,
    OVERLAY_SET_TEXT_WIDGET_OPACITY: eu,
    OVERLAY_DISABLE_EXTERNAL_LINK_ALERT: ed,
    OVERLAY_INCOMPATIBLE_APP: ef,
    OVERLAY_SET_INPUT_LOCKED: K,
    OVERLAY_ACTIVATE_REGION: z,
    OVERLAY_DEACTIVATE_ALL_REGIONS: q,
    OVERLAY_SET_PREVIEW_IN_GAME_MODE: et,
    WINDOW_RESIZED: ee,
    OVERLAY_SET_ASSOCIATED_GAME: em
});
