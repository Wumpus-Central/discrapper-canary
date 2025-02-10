let i;
n.d(t, { Z: () => eI }), n(47120), n(411104);
var r,
    a = n(442837),
    s = n(433517),
    o = n(570140),
    l = n(284737),
    u = n(490029),
    c = n(710845),
    d = n(48481),
    f = n(131704),
    _ = n(314897),
    p = n(592125),
    h = n(984933),
    m = n(355863),
    g = n(914010),
    E = n(358085),
    v = n(145597),
    y = n(372679),
    I = n(451478),
    T = n(981631),
    b = n(987650);
function S(e, t, n) {
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
let A = Object.freeze({
        selectedGuildId: null,
        selectedChannelId: null,
        displayUserMode: T.OYC.ALWAYS,
        displayNameMode: T.wC$.ALWAYS,
        avatarSizeMode: T.ipw.LARGE,
        notificationPositionMode: T._vf.TOP_LEFT,
        textChatNotifications: T.Ypu.ENABLED,
        disableExternalLinkAlert: !1,
        disablePinTutorial: !1,
        showKeybindIndicators: !0,
        disableClickableRegions: !1,
        textWidgetOpacity: b.wF.LOWER,
        showGameInviteNotification: !0,
        customInviteMessage: void 0
    }),
    N = null,
    C = {},
    R = null,
    O = new Set(),
    D = !1,
    L = !1,
    x = !1,
    P = new Set(),
    w = !1,
    M = new c.Z('OverlayStore');
function k(e) {
    let t = C[e];
    return null == t && (t = C[e] = { ...A }), t;
}
let U = { ...A },
    G = new Set(['AUDIO_SET_INPUT_DEVICE', 'AUDIO_SET_INPUT_VOLUME', 'AUDIO_SET_LOCAL_VIDEO_DISABLED', 'AUDIO_SET_LOCAL_VOLUME', 'AUDIO_SET_MODE', 'AUDIO_SET_NOISE_CANCELLATION', 'AUDIO_SET_NOISE_SUPPRESSION', 'AUDIO_SET_OUTPUT_DEVICE', 'AUDIO_SET_OUTPUT_VOLUME', 'AUDIO_TOGGLE_LOCAL_MUTE', 'AUDIO_TOGGLE_SELF_DEAF', 'AUDIO_TOGGLE_SELF_MUTE', 'BILLING_SUBSCRIPTION_UPDATE_SUCCESS', 'CATEGORY_COLLAPSE', 'CATEGORY_EXPAND', 'CHANNEL_ACK', 'CHANNEL_PRELOAD', 'GIFT_CODE_REDEEM', 'GIFT_CODE_REDEEM_FAILURE', 'GIFT_CODE_REDEEM_SUCCESS', 'HOTSPOT_HIDE', 'INVITE_MODAL_CLOSE', 'LAYOUT_CREATE', 'LAYOUT_CREATE_WIDGETS', 'LAYOUT_DELETE_ALL_WIDGETS', 'LAYOUT_DELETE_WIDGET', 'LAYOUT_SET_PINNED', 'LAYOUT_SET_TOP_WIDGET', 'LAYOUT_UPDATE_WIDGET', 'LOAD_MESSAGES', 'LOAD_MESSAGES_FAILURE', 'LOAD_MESSAGES_SUCCESS', 'MEDIA_ENGINE_SET_GO_LIVE_SOURCE', 'OVERLAY_ACTIVATE_REGION', 'OVERLAY_DEACTIVATE_ALL_REGIONS', 'OVERLAY_MESSAGE_EVENT_ACTION', 'OVERLAY_SET_AVATAR_SIZE_MODE', 'OVERLAY_SET_CLICK_ZONES', 'OVERLAY_SET_DISPLAY_NAME_MODE', 'OVERLAY_SET_DISPLAY_USER_MODE', 'OVERLAY_SET_INPUT_LOCKED', 'OVERLAY_SET_NOTIFICATION_POSITION_MODE', 'OVERLAY_SET_TEXT_CHAT_NOTIFICATION_MODE', 'OVERLAY_SET_DISABLE_CLICKABLE_REGIONS', 'OVERLAY_SET_SHOW_KEYBIND_INDICATORS', 'OVERLAY_SET_GAME_INVITE_NOTIFICATION', 'OVERLAY_SET_INVITE_MESSAGE', 'OVERLAY_SET_TEXT_WIDGET_OPACITY', 'OVERLAY_OAUTH2_AUTHORIZE_MODAL_OPEN', 'OVERLAY_OAUTH2_AUTHORIZE_MODAL_CLOSE', 'PREMIUM_PAYMENT_ERROR_CLEAR', 'PREMIUM_PAYMENT_MODAL_CLOSE', 'PREMIUM_PAYMENT_MODAL_OPEN', 'PREMIUM_PAYMENT_SUBSCRIBE_FAIL', 'PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS', 'PREMIUM_PAYMENT_UPDATE_FAIL', 'PREMIUM_PAYMENT_UPDATE_SUCCESS', 'PREMIUM_REQUIRED_MODAL_CLOSE', 'PREMIUM_REQUIRED_MODAL_OPEN', 'PURCHASE_CONFIRMATION_MODAL_CLOSE', 'PURCHASE_CONFIRMATION_MODAL_OPEN', 'SKU_PURCHASE_CLEAR_ERROR', 'SKU_PURCHASE_FAIL', 'SKU_PURCHASE_MODAL_CLOSE', 'SKU_PURCHASE_MODAL_OPEN', 'SKU_PURCHASE_PREVIEW_FETCH_SUCCESS', 'SKU_PURCHASE_SHOW_CONFIRMATION_STEP', 'SKU_PURCHASE_START', 'SKU_PURCHASE_SUCCESS', 'STREAM_CLOSE', 'STREAM_START', 'VOICE_CHANNEL_SELECT', 'USER_SETTINGS_PROTO_ENQUEUE_UPDATE', 'USER_SETTINGS_PROTO_LOAD_IF_NECESSARY']),
    B = new Set([...G.values(), 'ACTIVITY_INVITE_MODAL_CLOSE', 'CALL_DELETE', 'CHANNEL_COLLAPSE', 'CHANNEL_SELECT', 'GUILD_SOUNDBOARD_SOUND_PLAY_LOCALLY', 'OVERLAY_CALL_PRIVATE_CHANNEL', 'OVERLAY_JOIN_GAME', 'OVERLAY_NOTIFICATION_EVENT', 'OVERLAY_SELECT_CALL', 'OVERLAY_SET_NOT_IDLE', 'OVERLAY_SOUNDBOARD_SOUNDS_FETCH_REQUEST', 'OVERLAY_WIDGET_CHANGED', 'SOUNDBOARD_SET_OVERLAY_ENABLED', 'STREAM_STOP']);
function Z(e) {
    return (null == e.version && 1 === v.Tq) || e.version === v.Tq || (o.Z.dispatch({ type: 'OVERLAY_INCOMPATIBLE_APP' }), (0, u.zP)(), !1);
}
function F(e) {
    if (('OVERLAY_INITIALIZE' === e.type && Z(e) && (x = !0), x)) {
        var t, n, i, r, a;
        switch (e.type) {
            case 'CHANNEL_CREATE':
            case 'THREAD_CREATE':
            case 'THREAD_UPDATE':
            case 'CHANNEL_DELETE':
            case 'THREAD_DELETE':
                let s = (0, f.kt)(e.channel);
                if (!f.AW.has(s.type)) break;
                o.Z.dispatch({
                    type: e.type,
                    channel: s
                });
                break;
            case 'CHANNEL_UPDATES':
                o.Z.dispatch({
                    type: e.type,
                    channels: e.channels.map((e) => (0, f.kt)(e))
                });
                break;
            case 'CONNECTION_OPEN_SUPPLEMENTAL':
                (e.lazyPrivateChannels = (null !== (t = e.lazyPrivateChannels) && void 0 !== t ? t : []).map((e) => (0, f.kt)(e))), o.Z.dispatch(e);
                break;
            case 'THREAD_LIST_SYNC':
                o.Z.dispatch({
                    ...e,
                    threads: e.threads.map((e) => (0, f.kt)(e))
                });
                break;
            case 'GUILD_CREATE':
                let l = (e) => (0, f.kt)(e),
                    u = e.guild;
                (u.channels = null !== (r = null === (n = u.channels) || void 0 === n ? void 0 : n.map(l)) && void 0 !== r ? r : null),
                    (u.threads = null === (i = u.threads) || void 0 === i ? void 0 : i.map(l)),
                    null != u.channelUpdates && (u.channelUpdates.writes = null === (a = u.channelUpdates.writes) || void 0 === a ? void 0 : a.map(l)),
                    o.Z.dispatch({
                        type: 'GUILD_CREATE',
                        guild: u
                    });
                break;
            case 'USER_SETTINGS_PROTO_UPDATE':
                o.Z.dispatch({
                    ...e,
                    settings: {
                        proto: (0, d.kI)(e.settings.type, e.settings.proto),
                        type: e.settings.type
                    }
                });
                break;
            default:
                o.Z.dispatch(e);
        }
    }
}
function V(e) {
    e.isSwitchingAccount || (C = {});
}
function j(e) {
    e.userId in C && delete C[e.userId];
}
function H() {
    O.clear();
}
function Y(e) {
    let { focusedPID: t } = e;
    N = t;
}
function W() {
    let e = U.selectedGuildId,
        t = U.selectedChannelId;
    if ((null == e || (h.ZP.hasChannels(e) && (null == t || h.ZP.hasSelectableChannel(e, t))) || ((e = null), (t = null)), null != t && null == p.Z.getChannel(t) && ((e = null), (t = null)), null == e && null == t && (e = g.Z.getGuildId()), null != e && null == t)) {
        let n = h.ZP.getDefaultChannel(e);
        null != n && (t = n.id);
    }
    (U.selectedGuildId = e), (U.selectedChannelId = t);
}
function K() {
    if (!__OVERLAY__) return !1;
    let e = N === (0, v.QF)(),
        t = O.has((0, v.QF)()) || P.size > 0;
    e && t ? (0, l.T_)(window, !0) : (0, l.T_)(window, !1);
}
function z() {}
function q(e) {
    let { locked: t, pid: n } = e;
    t ? O.delete(n) : O.add(n), X(), K(), (w = !1);
}
function Q(e) {
    let { region: t } = e;
    if (N !== (0, v.QF)() || P.has(t)) return !1;
    P.add(t);
}
function X() {
    if (N !== (0, v.QF)()) return !1;
    P.clear();
}
function J(e) {
    let { pid: t } = e;
    (N = t), K();
}
function $(e) {
    let { guildId: t, channelId: n } = e;
    (U.selectedGuildId = t), (U.selectedChannelId = n);
}
function ee(e) {
    let { callId: t } = e;
    R = t;
}
function et() {
    R = null;
}
function en() {
    if (__OVERLAY__) {
        let e = I.Z.windowSize();
        (0, v.Te)(e) || (w = !1);
    }
}
function ei(e) {
    w = e.isPreviewingInGame;
}
function er(e) {
    let { mode: t } = e;
    U.displayNameMode = t;
}
function ea(e) {
    let { mode: t } = e;
    U.displayUserMode = t;
}
function es(e) {
    let { mode: t } = e;
    U.avatarSizeMode = t;
}
function eo(e) {
    let { mode: t } = e;
    U.notificationPositionMode = t;
}
function el(e) {
    let { mode: t } = e;
    U.textChatNotifications = t;
}
function eu(e) {
    let { disable: t } = e;
    U.disableClickableRegions = t;
}
function ec(e) {
    let { shouldShow: t } = e;
    U.showKeybindIndicators = t;
}
function ed(e) {
    let { message: t } = e,
        n = U.customInviteMessage !== t;
    return (U.customInviteMessage = t), n;
}
function ef(e) {
    let { opacity: t } = e,
        n = U.textWidgetOpacity !== t;
    return (U.textWidgetOpacity = t), n;
}
function e_(e) {
    let { shouldShow: t } = e,
        n = U.showGameInviteNotification !== t;
    return (U.showGameInviteNotification = t), n;
}
function ep() {
    U.disableExternalLinkAlert = !0;
}
function eh() {
    D = !0;
}
function em() {
    o.Z.addInterceptor((e) => {
        if (L || !B.has(e.type)) return !1;
        if ('CHANNEL_SELECT' === e.type) {
            let { guildId: t, channelId: n } = e;
            return (
                null != n &&
                ((0, u.lW)({
                    type: T.BmY.DISPATCH,
                    pid: (0, v.QF)(),
                    token: (0, v.Ht)(),
                    payloads: [
                        {
                            type: 'CHANNEL_PRELOAD',
                            guildId: t === T.ME ? null : t,
                            channelId: n,
                            context: T.e3s
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
            (0, u.lW)({
                type: T.BmY.DISPATCH,
                pid: (0, v.QF)(),
                token: (0, v.Ht)(),
                payloads: [e]
            }),
            !G.has(e.type)
        );
    });
}
function eg(e) {
    let t = (0, v.QF)();
    if (null == e.pid || e.pid === t)
        switch (e.type) {
            case T.BmY.STORAGE_SYNC:
                a.ZP.PersistedStore.initializeAll(e.states);
                break;
            case T.BmY.DISPATCH:
                null != e.payloads && ((L = !0), e.payloads.forEach((e) => F(e)), (L = !1));
        }
}
function eE() {
    em(),
        (0, u.Ty)(eg, (0, v.Ht)()),
        (0, u.$j)(),
        (0, u.lW)({
            type: T.BmY.CONNECT,
            pid: (0, v.QF)(),
            token: (0, v.Ht)()
        });
}
function ev(e) {
    O.delete(e.previousAssociatedGamePID);
}
class ey extends (r = a.ZP.PersistedStore) {
    initialize(e) {
        if (
            (this.waitFor(_.default),
            this.syncWith([_.default], () => {
                let e = _.default.getId();
                U = null != e ? k(e) : { ...A };
            }),
            __OVERLAY__)
        ) {
            if (E.isPlatformEmbedded) {
                let e = (0, y.M)();
                null == e && M.error('Overlay module failed loaded'), (i = e);
            }
            O.delete((0, v.QF)());
        }
        if (null != e) {
            C = e;
            let t = _.default.getId();
            null != t && (null == (U = k(t)).textChatNotifications && (U.textChatNotifications = A.textChatNotifications), null == U.textWidgetOpacity && (U.textWidgetOpacity = A.textWidgetOpacity), null == U.disableClickableRegions && (U.disableClickableRegions = A.disableClickableRegions));
        }
    }
    getState() {
        return C;
    }
    isLocked(e) {
        return !O.has(e);
    }
    isInstanceLocked() {
        return !O.has((0, v.QF)());
    }
    isInstanceFocused() {
        return N === (0, v.QF)();
    }
    isFocused(e) {
        return N === e;
    }
    isPinned(e) {
        let t = m.Z.getLayout(v.qU);
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
        return U.selectedGuildId;
    }
    getSelectedChannelId() {
        return U.selectedChannelId;
    }
    getSelectedCallId() {
        return R;
    }
    getDisplayUserMode() {
        return U.displayUserMode;
    }
    getDisplayNameMode() {
        return U.displayNameMode;
    }
    getAvatarSizeMode() {
        return U.avatarSizeMode;
    }
    getNotificationPositionMode() {
        return U.notificationPositionMode;
    }
    getTextChatNotificationMode() {
        return U.notificationPositionMode === T._vf.DISABLED ? T.Ypu.DISABLED : U.textChatNotifications;
    }
    get showKeybindIndicators() {
        return null == U.showKeybindIndicators || U.showKeybindIndicators;
    }
    get showInviteNotification() {
        return null == U.showGameInviteNotification || U.showGameInviteNotification;
    }
    get disableClickableRegions() {
        return null != U.disableClickableRegions && U.disableClickableRegions;
    }
    get customInviteMessage() {
        return U.customInviteMessage;
    }
    getDisableExternalLinkAlert() {
        return U.disableExternalLinkAlert;
    }
    getFocusedPID() {
        return N;
    }
    get initialized() {
        return x;
    }
    get incompatibleApp() {
        return D;
    }
    getActiveRegions() {
        return P;
    }
    getTextWidgetOpacity() {
        return U.textWidgetOpacity;
    }
    isPreviewingInGame() {
        return w;
    }
}
S(ey, 'displayName', 'OverlayStore'),
    S(ey, 'persistKey', 'OverlayStoreV2'),
    S(ey, 'migrations', [
        () => {
            let { pinnedWidgets: e, positions: t, sizes: n, v: i, ...r } = { ...s.K.get('OverlayStore') };
            return {
                ...A,
                ...(5 === i ? r : null)
            };
        },
        (e) => {
            let t = _.default.getId();
            return null == e || null == t ? {} : { [t]: { ...e } };
        }
    ]);
let eI = new ey(o.Z, {
    LOGOUT: V,
    MULTI_ACCOUNT_REMOVE_ACCOUNT: j,
    CONNECTION_CLOSED: H,
    OVERLAY_START_SESSION: eE,
    OVERLAY_INITIALIZE: Y,
    OVERLAY_READY: W,
    OVERLAY_FOCUSED: J,
    OVERLAY_SELECT_CHANNEL: $,
    OVERLAY_SELECT_CALL: ee,
    CALL_DELETE: et,
    LAYOUT_CREATE: z,
    OVERLAY_SET_DISPLAY_NAME_MODE: er,
    OVERLAY_SET_DISPLAY_USER_MODE: ea,
    OVERLAY_SET_AVATAR_SIZE_MODE: es,
    OVERLAY_SET_NOTIFICATION_POSITION_MODE: eo,
    OVERLAY_SET_TEXT_CHAT_NOTIFICATION_MODE: el,
    OVERLAY_SET_DISABLE_CLICKABLE_REGIONS: eu,
    OVERLAY_SET_SHOW_KEYBIND_INDICATORS: ec,
    OVERLAY_SET_INVITE_MESSAGE: ed,
    OVERLAY_SET_GAME_INVITE_NOTIFICATION: e_,
    OVERLAY_SET_TEXT_WIDGET_OPACITY: ef,
    OVERLAY_DISABLE_EXTERNAL_LINK_ALERT: ep,
    OVERLAY_INCOMPATIBLE_APP: eh,
    OVERLAY_SET_INPUT_LOCKED: q,
    OVERLAY_ACTIVATE_REGION: Q,
    OVERLAY_DEACTIVATE_ALL_REGIONS: X,
    OVERLAY_SET_PREVIEW_IN_GAME_MODE: ei,
    WINDOW_RESIZED: en,
    OVERLAY_SET_ASSOCIATED_GAME: ev
});
