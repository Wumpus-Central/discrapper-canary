var i,
    a = r(47120);
var s = r(411104);
var o = r(442837),
    l = r(433517),
    u = r(570140),
    c = r(284737),
    d = r(490029),
    f = r(48481),
    _ = r(131704),
    h = r(314897),
    p = r(592125),
    m = r(984933),
    g = r(355863),
    E = r(914010),
    v = r(358085),
    I = r(998502),
    T = r(145597),
    b = r(451478),
    y = r(981631),
    S = r(987650);
function A(e, n, r) {
    return (
        n in e
            ? Object.defineProperty(e, n, {
                  value: r,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[n] = r),
        e
    );
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
        textWidgetOpacity: S.wF.LOWER
    }),
    C = null,
    R = {},
    O = null,
    D = new Set(),
    L = !1,
    x = null,
    w = !1,
    P = !1,
    M = new Set(),
    k = !1;
function U(e) {
    let n = R[e];
    return null == n && (n = R[e] = { ...N }), n;
}
let B = { ...N },
    G = new Set(['AUDIO_SET_INPUT_DEVICE', 'AUDIO_SET_INPUT_VOLUME', 'AUDIO_SET_LOCAL_VIDEO_DISABLED', 'AUDIO_SET_LOCAL_VOLUME', 'AUDIO_SET_MODE', 'AUDIO_SET_NOISE_CANCELLATION', 'AUDIO_SET_NOISE_SUPPRESSION', 'AUDIO_SET_OUTPUT_DEVICE', 'AUDIO_SET_OUTPUT_VOLUME', 'AUDIO_TOGGLE_LOCAL_MUTE', 'AUDIO_TOGGLE_SELF_DEAF', 'AUDIO_TOGGLE_SELF_MUTE', 'BILLING_SUBSCRIPTION_UPDATE_SUCCESS', 'CATEGORY_COLLAPSE', 'CATEGORY_EXPAND', 'CHANNEL_ACK', 'CHANNEL_PRELOAD', 'GIFT_CODE_REDEEM', 'GIFT_CODE_REDEEM_FAILURE', 'GIFT_CODE_REDEEM_SUCCESS', 'HOTSPOT_HIDE', 'INVITE_MODAL_CLOSE', 'LAYOUT_CREATE', 'LAYOUT_CREATE_WIDGETS', 'LAYOUT_DELETE_ALL_WIDGETS', 'LAYOUT_DELETE_WIDGET', 'LAYOUT_SET_PINNED', 'LAYOUT_SET_TOP_WIDGET', 'LAYOUT_UPDATE_WIDGET', 'LOAD_MESSAGES', 'LOAD_MESSAGES_FAILURE', 'LOAD_MESSAGES_SUCCESS', 'MEDIA_ENGINE_SET_GO_LIVE_SOURCE', 'OVERLAY_ACTIVATE_REGION', 'OVERLAY_DEACTIVATE_ALL_REGIONS', 'OVERLAY_MESSAGE_EVENT_ACTION', 'OVERLAY_SET_AVATAR_SIZE_MODE', 'OVERLAY_SET_CLICK_ZONES', 'OVERLAY_SET_DISPLAY_NAME_MODE', 'OVERLAY_SET_DISPLAY_USER_MODE', 'OVERLAY_SET_INPUT_LOCKED', 'OVERLAY_SET_NOTIFICATION_POSITION_MODE', 'OVERLAY_SET_TEXT_CHAT_NOTIFICATION_MODE', 'OVERLAY_SET_SHOW_KEYBIND_INDICATORS', 'OVERLAY_SET_TEXT_WIDGET_OPACITY', 'OVERLAY_NOTIFY_READY_TO_SHOW', 'OVERLAY_OAUTH2_AUTHORIZE_MODAL_OPEN', 'OVERLAY_OAUTH2_AUTHORIZE_MODAL_CLOSE', 'PREMIUM_PAYMENT_ERROR_CLEAR', 'PREMIUM_PAYMENT_MODAL_CLOSE', 'PREMIUM_PAYMENT_MODAL_OPEN', 'PREMIUM_PAYMENT_SUBSCRIBE_FAIL', 'PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS', 'PREMIUM_PAYMENT_UPDATE_FAIL', 'PREMIUM_PAYMENT_UPDATE_SUCCESS', 'PREMIUM_REQUIRED_MODAL_CLOSE', 'PREMIUM_REQUIRED_MODAL_OPEN', 'PURCHASE_CONFIRMATION_MODAL_CLOSE', 'PURCHASE_CONFIRMATION_MODAL_OPEN', 'SKU_PURCHASE_CLEAR_ERROR', 'SKU_PURCHASE_FAIL', 'SKU_PURCHASE_MODAL_CLOSE', 'SKU_PURCHASE_MODAL_OPEN', 'SKU_PURCHASE_PREVIEW_FETCH_SUCCESS', 'SKU_PURCHASE_SHOW_CONFIRMATION_STEP', 'SKU_PURCHASE_START', 'SKU_PURCHASE_SUCCESS', 'STREAM_CLOSE', 'STREAM_START', 'VOICE_CHANNEL_SELECT', 'USER_SETTINGS_PROTO_ENQUEUE_UPDATE', 'USER_SETTINGS_PROTO_LOAD_IF_NECESSARY']),
    Z = new Set([...G.values(), 'ACTIVITY_INVITE_MODAL_CLOSE', 'CALL_DELETE', 'CHANNEL_COLLAPSE', 'CHANNEL_SELECT', 'GUILD_SOUNDBOARD_SOUND_PLAY_LOCALLY', 'OVERLAY_CALL_PRIVATE_CHANNEL', 'OVERLAY_JOIN_GAME', 'OVERLAY_NOTIFICATION_EVENT', 'OVERLAY_SELECT_CALL', 'OVERLAY_SET_NOT_IDLE', 'OVERLAY_SOUNDBOARD_SOUNDS_FETCH_REQUEST', 'OVERLAY_WIDGET_CHANGED', 'SOUNDBOARD_SET_OVERLAY_ENABLED', 'STREAM_STOP']);
function F(e) {
    return (null == e.version && 1 === T.Tq) || e.version === T.Tq || (u.Z.dispatch({ type: 'OVERLAY_INCOMPATIBLE_APP' }), (0, d.zP)(), !1);
}
function V(e) {
    if (('OVERLAY_INITIALIZE' === e.type && F(e) && (P = !0), P)) {
        var n, r, i, a, s;
        switch (e.type) {
            case 'CHANNEL_CREATE':
            case 'THREAD_CREATE':
            case 'THREAD_UPDATE':
            case 'CHANNEL_DELETE':
            case 'THREAD_DELETE':
                let o = (0, _.kt)(e.channel);
                if (!_.AW.has(o.type)) break;
                u.Z.dispatch({
                    type: e.type,
                    channel: o
                });
                break;
            case 'CHANNEL_UPDATES':
                u.Z.dispatch({
                    type: e.type,
                    channels: e.channels.map((e) => (0, _.kt)(e))
                });
                break;
            case 'CONNECTION_OPEN_SUPPLEMENTAL':
                (e.lazyPrivateChannels = (null !== (n = e.lazyPrivateChannels) && void 0 !== n ? n : []).map((e) => (0, _.kt)(e))), u.Z.dispatch(e);
                break;
            case 'THREAD_LIST_SYNC':
                u.Z.dispatch({
                    ...e,
                    threads: e.threads.map((e) => (0, _.kt)(e))
                });
                break;
            case 'GUILD_CREATE':
                let l = (e) => (0, _.kt)(e),
                    c = e.guild;
                (c.channels = null !== (a = null === (r = c.channels) || void 0 === r ? void 0 : r.map(l)) && void 0 !== a ? a : null),
                    (c.threads = null === (i = c.threads) || void 0 === i ? void 0 : i.map(l)),
                    null != c.channelUpdates && (c.channelUpdates.writes = null === (s = c.channelUpdates.writes) || void 0 === s ? void 0 : s.map(l)),
                    u.Z.dispatch({
                        type: 'GUILD_CREATE',
                        guild: c
                    });
                break;
            case 'USER_SETTINGS_PROTO_UPDATE':
                u.Z.dispatch({
                    ...e,
                    settings: {
                        proto: (0, f.kI)(e.settings.type, e.settings.proto),
                        type: e.settings.type
                    }
                });
                break;
            default:
                u.Z.dispatch(e);
        }
    }
}
function j(e) {
    !e.isSwitchingAccount && (R = {});
}
function H(e) {
    e.userId in R && delete R[e.userId];
}
function Y() {
    D.clear();
}
function W(e) {
    let { focusedPID: n } = e;
    C = n;
}
function K() {
    let e = B.selectedGuildId,
        n = B.selectedChannelId;
    if ((null != e && (!m.ZP.hasChannels(e) || (null != n && !m.ZP.hasSelectableChannel(e, n))) && ((e = null), (n = null)), null != n && null == p.Z.getChannel(n) && ((e = null), (n = null)), null == e && null == n && (e = E.Z.getGuildId()), null != e && null == n)) {
        let r = m.ZP.getDefaultChannel(e);
        null != r && (n = r.id);
    }
    (B.selectedGuildId = e), (B.selectedChannelId = n);
}
function z() {
    if (!__OVERLAY__) return !1;
    let e = C === (0, T.QF)(),
        n = D.has((0, T.QF)()) || M.size > 0;
    e && n ? (0, c.T_)(window, !0) : (0, c.T_)(window, !1);
}
function q() {}
function Q(e) {
    let { locked: n, pid: r } = e;
    n ? D.delete(r) : D.add(r), J(), z(), (k = !1);
}
function X(e) {
    let { region: n } = e;
    if (C !== (0, T.QF)() || M.has(n)) return !1;
    M.add(n);
}
function J() {
    if (C !== (0, T.QF)()) return !1;
    M.clear();
}
function $(e) {
    let { pid: n } = e;
    (C = n), z();
}
function ee(e) {
    let { guildId: n, channelId: r } = e;
    (B.selectedGuildId = n), (B.selectedChannelId = r);
}
function et(e) {
    let { callId: n } = e;
    O = n;
}
function en() {
    O = null;
}
function er() {
    if (__OVERLAY__) {
        let e = b.Z.windowSize();
        !(0, T.Te)(e) && (k = !1);
    }
}
function ei(e) {
    k = e.isPreviewingInGame;
}
function ea(e) {
    let { mode: n } = e;
    B.displayNameMode = n;
}
function es(e) {
    let { mode: n } = e;
    B.displayUserMode = n;
}
function eo(e) {
    let { mode: n } = e;
    B.avatarSizeMode = n;
}
function el(e) {
    let { mode: n } = e;
    B.notificationPositionMode = n;
}
function eu(e) {
    let { mode: n } = e;
    B.textChatNotifications = n;
}
function ec(e) {
    let { shouldShow: n } = e;
    B.showKeybindIndicators = n;
}
function ed(e) {
    let { opacity: n } = e,
        r = B.textWidgetOpacity !== n;
    return (B.textWidgetOpacity = n), r;
}
function ef() {
    B.disableExternalLinkAlert = !0;
}
function e_() {
    L = !0;
}
function eh() {
    u.Z.addInterceptor((e) => {
        if (w || !Z.has(e.type)) return !1;
        if ('CHANNEL_SELECT' === e.type) {
            let { guildId: n, channelId: r } = e;
            return (
                null != r &&
                ((0, d.lW)({
                    type: y.BmY.DISPATCH,
                    pid: (0, T.QF)(),
                    token: (0, T.Ht)(),
                    payloads: [
                        {
                            type: 'CHANNEL_PRELOAD',
                            guildId: n === y.ME ? null : n,
                            channelId: r,
                            context: y.e3s
                        },
                        {
                            type: 'OVERLAY_SELECT_CHANNEL',
                            guildId: n,
                            channelId: r
                        }
                    ]
                }),
                !1)
            );
        }
        return (
            (0, d.lW)({
                type: y.BmY.DISPATCH,
                pid: (0, T.QF)(),
                token: (0, T.Ht)(),
                payloads: [e]
            }),
            !G.has(e.type)
        );
    });
}
function ep(e) {
    let n = (0, T.QF)();
    if (null == e.pid || e.pid === n)
        switch (e.type) {
            case y.BmY.STORAGE_SYNC:
                o.ZP.PersistedStore.initializeAll(e.states);
                break;
            case y.BmY.DISPATCH:
                null != e.payloads && ((w = !0), e.payloads.forEach((e) => V(e)), (w = !1));
        }
}
function em() {
    eh(),
        (0, d.Ty)(ep, (0, T.Ht)()),
        (0, d.$j)(),
        (0, d.lW)({
            type: y.BmY.CONNECT,
            pid: (0, T.QF)(),
            token: (0, T.Ht)()
        });
}
function eg(e) {
    D.delete(e.previousAssociatedGamePID);
}
class eE extends (i = o.ZP.PersistedStore) {
    initialize(e) {
        if (
            (this.waitFor(h.default),
            this.syncWith([h.default], () => {
                let e = h.default.getId();
                B = null != e ? U(e) : { ...N };
            }),
            __OVERLAY__ && (v.isPlatformEmbedded && (x = I.ZP.requireModule('discord_overlay2')), D.delete((0, T.QF)())),
            null != e)
        ) {
            R = e;
            let n = h.default.getId();
            null != n && (null == (B = U(n)).textChatNotifications && (B.textChatNotifications = N.textChatNotifications), null == B.textWidgetOpacity && (B.textWidgetOpacity = N.textWidgetOpacity));
        }
    }
    getState() {
        return R;
    }
    isLocked(e) {
        return !D.has(e);
    }
    isInstanceLocked() {
        return !D.has((0, T.QF)());
    }
    isInstanceFocused() {
        return C === (0, T.QF)();
    }
    isFocused(e) {
        return C === e;
    }
    isPinned(e) {
        let n = g.Z.getLayout(T.qU);
        return (
            null != n &&
            null !=
                n.widgets.find((n) => {
                    let r = g.Z.getWidget(n);
                    return (null != r && r.type === e && !!r.pinned) || !1;
                })
        );
    }
    getSelectedGuildId() {
        return B.selectedGuildId;
    }
    getSelectedChannelId() {
        return B.selectedChannelId;
    }
    getSelectedCallId() {
        return O;
    }
    getDisplayUserMode() {
        return B.displayUserMode;
    }
    getDisplayNameMode() {
        return B.displayNameMode;
    }
    getAvatarSizeMode() {
        return B.avatarSizeMode;
    }
    getNotificationPositionMode() {
        return B.notificationPositionMode;
    }
    getTextChatNotificationMode() {
        return B.notificationPositionMode === y._vf.DISABLED ? y.Ypu.DISABLED : B.textChatNotifications;
    }
    get showKeybindIndicators() {
        return null == B.showKeybindIndicators || B.showKeybindIndicators;
    }
    getDisableExternalLinkAlert() {
        return B.disableExternalLinkAlert;
    }
    getFocusedPID() {
        return C;
    }
    get initialized() {
        return P;
    }
    get incompatibleApp() {
        return L;
    }
    getActiveRegions() {
        return M;
    }
    getTextWidgetOpacity() {
        return B.textWidgetOpacity;
    }
    isPreviewingInGame() {
        return k;
    }
}
A(eE, 'displayName', 'OverlayStore'),
    A(eE, 'persistKey', 'OverlayStoreV2'),
    A(eE, 'migrations', [
        () => {
            let { pinnedWidgets: e, positions: n, sizes: r, v: i, ...a } = { ...l.K.get('OverlayStore') };
            return {
                ...N,
                ...(5 === i ? a : null)
            };
        },
        (e) => {
            let n = h.default.getId();
            return null == e || null == n ? {} : { [n]: { ...e } };
        }
    ]),
    (n.Z = new eE(u.Z, {
        LOGOUT: j,
        MULTI_ACCOUNT_REMOVE_ACCOUNT: H,
        CONNECTION_CLOSED: Y,
        OVERLAY_START_SESSION: em,
        OVERLAY_INITIALIZE: W,
        OVERLAY_READY: K,
        OVERLAY_FOCUSED: $,
        OVERLAY_SELECT_CHANNEL: ee,
        OVERLAY_SELECT_CALL: et,
        CALL_DELETE: en,
        LAYOUT_CREATE: q,
        OVERLAY_SET_DISPLAY_NAME_MODE: ea,
        OVERLAY_SET_DISPLAY_USER_MODE: es,
        OVERLAY_SET_AVATAR_SIZE_MODE: eo,
        OVERLAY_SET_NOTIFICATION_POSITION_MODE: el,
        OVERLAY_SET_TEXT_CHAT_NOTIFICATION_MODE: eu,
        OVERLAY_SET_SHOW_KEYBIND_INDICATORS: ec,
        OVERLAY_SET_TEXT_WIDGET_OPACITY: ed,
        OVERLAY_DISABLE_EXTERNAL_LINK_ALERT: ef,
        OVERLAY_INCOMPATIBLE_APP: e_,
        OVERLAY_SET_INPUT_LOCKED: Q,
        OVERLAY_ACTIVATE_REGION: X,
        OVERLAY_DEACTIVATE_ALL_REGIONS: J,
        OVERLAY_SET_PREVIEW_IN_GAME_MODE: ei,
        WINDOW_RESIZED: er,
        OVERLAY_SET_ASSOCIATED_GAME: eg
    }));
