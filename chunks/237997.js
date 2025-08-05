let r;
(n.r(t), n.d(t, { default: () => eR }), n(388685), n(415506));
var i,
    a = n(442837),
    o = n(433517),
    s = n(570140),
    l = n(284737),
    c = n(490029),
    u = n(710845),
    d = n(454991),
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
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function A(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        ('function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                S(e, t, n[t]);
            }));
    }
    return e;
}
function N(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        (t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r));
    }
    return n;
}
function C(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : N(Object(t)).forEach(function (n) {
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
        for (r = 0; r < a.length; r++) ((n = a[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]));
    }
    return i;
}
function P(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        a = Object.keys(e);
    for (r = 0; r < a.length; r++) ((n = a[r]), t.indexOf(n) >= 0 || (i[n] = e[n]));
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
        customInviteMessage: void 0
    }),
    D = null,
    L = {},
    x = null,
    M = new Set(),
    k = !1,
    j = !1,
    U = !1,
    G = new Set(),
    B = !1,
    V = new u.Z('OverlayStore');
function F(e) {
    let t = L[e];
    return (null == t && (t = L[e] = A({}, w)), t);
}
let Z = A({}, w),
    H = new Set(['AUDIO_SET_INPUT_DEVICE', 'AUDIO_SET_INPUT_VOLUME', 'AUDIO_SET_LOCAL_VIDEO_DISABLED', 'AUDIO_SET_LOCAL_VOLUME', 'AUDIO_SET_MODE', 'AUDIO_SET_NOISE_CANCELLATION', 'AUDIO_SET_NOISE_SUPPRESSION', 'AUDIO_SET_OUTPUT_DEVICE', 'AUDIO_SET_OUTPUT_VOLUME', 'AUDIO_TOGGLE_LOCAL_MUTE', 'AUDIO_TOGGLE_SELF_DEAF', 'AUDIO_TOGGLE_SELF_MUTE', 'BILLING_SUBSCRIPTION_UPDATE_SUCCESS', 'CATEGORY_COLLAPSE', 'CATEGORY_EXPAND', 'CHANNEL_ACK', 'CHANNEL_PRELOAD', 'GIFT_CODE_REDEEM', 'GIFT_CODE_REDEEM_FAILURE', 'GIFT_CODE_REDEEM_SUCCESS', 'HOTSPOT_HIDE', 'INVITE_MODAL_CLOSE', 'LAYOUT_CREATE', 'LAYOUT_CREATE_WIDGETS', 'LAYOUT_DELETE_ALL_WIDGETS', 'LAYOUT_DELETE_WIDGET', 'LAYOUT_SET_PINNED', 'LAYOUT_SET_TOP_WIDGET', 'LAYOUT_UPDATE_WIDGET', 'LOAD_MESSAGES', 'LOAD_MESSAGES_FAILURE', 'LOAD_MESSAGES_SUCCESS', 'MEDIA_ENGINE_SET_GO_LIVE_SOURCE', 'OVERLAY_ACTIVATE_REGION', 'OVERLAY_DEACTIVATE_ALL_REGIONS', 'OVERLAY_MESSAGE_EVENT_ACTION', 'OVERLAY_SET_AVATAR_SIZE_MODE', 'OVERLAY_SET_CLICK_ZONES', 'OVERLAY_SET_DISPLAY_NAME_MODE', 'OVERLAY_SET_DISPLAY_USER_MODE', 'OVERLAY_SET_INPUT_LOCKED', 'OVERLAY_SET_NOTIFICATION_POSITION_MODE', 'OVERLAY_SET_DISABLE_CLICKABLE_REGIONS', 'OVERLAY_SET_SHOW_KEYBIND_INDICATORS', 'OVERLAY_SET_GAME_INVITE_NOTIFICATION', 'OVERLAY_SET_INVITE_MESSAGE', 'OVERLAY_SET_TEXT_WIDGET_OPACITY', 'OVERLAY_SET_ENABLED', 'OVERLAY_OAUTH2_AUTHORIZE_MODAL_OPEN', 'OVERLAY_OAUTH2_AUTHORIZE_MODAL_CLOSE', 'OVERLAY_TRACKED_GAME_UPDATE', 'PREMIUM_PAYMENT_ERROR_CLEAR', 'PREMIUM_PAYMENT_MODAL_CLOSE', 'PREMIUM_PAYMENT_MODAL_OPEN', 'PREMIUM_PAYMENT_SUBSCRIBE_FAIL', 'PREMIUM_PAYMENT_SUBSCRIBE_SUCCESS', 'PREMIUM_PAYMENT_UPDATE_FAIL', 'PREMIUM_PAYMENT_UPDATE_SUCCESS', 'PREMIUM_REQUIRED_MODAL_CLOSE', 'PREMIUM_REQUIRED_MODAL_OPEN', 'PURCHASE_CONFIRMATION_MODAL_CLOSE', 'PURCHASE_CONFIRMATION_MODAL_OPEN', 'SKU_PURCHASE_CLEAR_ERROR', 'SKU_PURCHASE_FAIL', 'SKU_PURCHASE_MODAL_CLOSE', 'SKU_PURCHASE_MODAL_OPEN', 'SKU_PURCHASE_PREVIEW_FETCH_SUCCESS', 'SKU_PURCHASE_SHOW_CONFIRMATION_STEP', 'SKU_PURCHASE_START', 'SKU_PURCHASE_SUCCESS', 'STREAM_CLOSE', 'STREAM_START', 'VOICE_CHANNEL_SELECT', 'USER_SETTINGS_PROTO_ENQUEUE_UPDATE', 'USER_SETTINGS_PROTO_LOAD_IF_NECESSARY']),
    Y = new Set([...H.values(), 'ACTIVITY_INVITE_MODAL_CLOSE', 'CALL_DELETE', 'CHANNEL_COLLAPSE', 'CHANNEL_SELECT', 'GUILD_SOUNDBOARD_SOUND_PLAY_LOCALLY', 'OVERLAY_CALL_PRIVATE_CHANNEL', 'OVERLAY_JOIN_GAME', 'OVERLAY_NOTIFICATION_EVENT', 'OVERLAY_SELECT_CALL', 'OVERLAY_SET_NOT_IDLE', 'OVERLAY_SOUNDBOARD_SOUNDS_FETCH_REQUEST', 'OVERLAY_WIDGET_CHANGED', 'SOUNDBOARD_SET_OVERLAY_ENABLED', 'STREAM_STOP']);
function W(e) {
    return (null == e.version && 1 === y.OVERLAY_VERSION) || e.version === y.OVERLAY_VERSION || (s.Z.dispatch({ type: 'OVERLAY_INCOMPATIBLE_APP' }), (0, c.zP)(), !1);
}
function K(e) {
    if (('OVERLAY_INITIALIZE' === e.type && W(e) && (U = !0), U)) {
        var t, n;
        switch (e.type) {
            case 'CHANNEL_CREATE':
            case 'THREAD_CREATE':
            case 'THREAD_UPDATE':
            case 'CHANNEL_DELETE':
            case 'THREAD_DELETE':
                let r = (0, _.kt)(e.channel);
                if (!_.AW.has(r.type)) break;
                s.Z.dispatch({
                    type: e.type,
                    channel: r
                });
                break;
            case 'CHANNEL_UPDATES':
                s.Z.dispatch({
                    type: e.type,
                    channels: e.channels.map((e) => (0, _.kt)(e))
                });
                break;
            case 'CONNECTION_OPEN_SUPPLEMENTAL':
                ((e.lazyPrivateChannels = (null != (t = e.lazyPrivateChannels) ? t : []).map((e) => (0, _.kt)(e))), s.Z.dispatch(e));
                break;
            case 'THREAD_LIST_SYNC':
                s.Z.dispatch(C(A({}, e), { threads: e.threads.map((e) => (0, _.kt)(e)) }));
                break;
            case 'GUILD_CREATE':
                let i = (e) => (0, _.kt)(e),
                    a = e.guild;
                switch (((a.threads = null == (n = a.threads) ? void 0 : n.map(i)), a.channels.op)) {
                    case 'full_sync':
                        a.channels.items = a.channels.items.map(i);
                        break;
                    case 'update':
                        a.channels.writes = a.channels.writes.map(i);
                        break;
                    default:
                        a.channels;
                }
                s.Z.dispatch({
                    type: 'GUILD_CREATE',
                    guild: a
                });
                break;
            case 'USER_SETTINGS_PROTO_UPDATE':
                s.Z.dispatch(
                    C(A({}, e), {
                        settings: {
                            proto: (0, f.kI)(e.settings.type, e.settings.proto),
                            type: e.settings.type
                        }
                    })
                );
                break;
            default:
                s.Z.dispatch(e);
        }
    }
}
function z(e) {
    e.isSwitchingAccount || (L = {});
}
function q(e) {
    e.userId in L && delete L[e.userId];
}
function X() {
    M.clear();
}
function Q(e) {
    let { focusedPID: t, trackedGames: n, overlayStoredSettings: r } = e;
    ((D = t),
        __OVERLAY__ &&
            (n.forEach((e) => {
                eT.set(e.pid, e);
            }),
            d.v.update({
                legacyEnabled: r.legacyEnabled,
                oopEnabled: r.oopEnabled
            })));
}
function J() {
    let e = Z.selectedGuildId,
        t = Z.selectedChannelId;
    if ((null == e || (m.ZP.hasChannels(e) && (null == t || m.ZP.hasSelectableChannel(e, t))) || ((e = null), (t = null)), null != t && null == h.Z.getChannel(t) && ((e = null), (t = null)), null == e && null == t && (e = E.Z.getGuildId()), null != e && null == t)) {
        let n = m.ZP.getDefaultChannel(e);
        null != n && (t = n.id);
    }
    ((Z.selectedGuildId = e), (Z.selectedChannelId = t));
}
function $() {
    if (!__OVERLAY__) return !1;
    let e = D === (0, y.getPID)(),
        t = M.has((0, y.getPID)()) || G.size > 0;
    e && t ? (0, l.T_)(window, !0) : (0, l.T_)(window, !1);
}
function ee() {}
function et(e) {
    let { locked: t, pid: n } = e;
    (t ? M.delete(n) : M.add(n), er(), $(), (B = !1));
}
function en(e) {
    let { region: t } = e;
    if (D !== (0, y.getPID)() || G.has(t)) return !1;
    G.add(t);
}
function er() {
    if (D !== (0, y.getPID)()) return !1;
    G.clear();
}
function ei(e) {
    let { pid: t } = e;
    ((D = t), $());
}
function ea(e) {
    let { guildId: t, channelId: n } = e;
    ((Z.selectedGuildId = t), (Z.selectedChannelId = n));
}
function eo(e) {
    let { callId: t } = e;
    x = t;
}
function es() {
    x = null;
}
function el() {
    if (__OVERLAY__) {
        let e = v.Z.windowSize();
        (0, y.validResolution)(e) || (B = !1);
    }
}
function ec(e) {
    B = e.isPreviewingInGame;
}
function eu(e) {
    let { mode: t } = e;
    Z.displayNameMode = t;
}
function ed(e) {
    let { mode: t } = e;
    Z.displayUserMode = t;
}
function ef(e) {
    let { mode: t } = e;
    Z.avatarSizeMode = t;
}
function e_(e) {
    let { mode: t } = e;
    Z.notificationPositionMode = t;
}
function ep(e) {
    let { disable: t } = e;
    Z.disableClickableRegions = t;
}
function eh(e) {
    let { shouldShow: t } = e;
    Z.showKeybindIndicators = t;
}
function em(e) {
    let { message: t } = e,
        n = Z.customInviteMessage !== t;
    return ((Z.customInviteMessage = t), n);
}
function eg(e) {
    let { opacity: t } = e,
        n = Z.textWidgetOpacity !== t;
    return ((Z.textWidgetOpacity = t), n);
}
function eE(e) {
    let { shouldShow: t } = e,
        n = Z.showGameInviteNotification !== t;
    return ((Z.showGameInviteNotification = t), n);
}
function eb() {
    Z.disableExternalLinkAlert = !0;
}
function ey() {
    k = !0;
}
function eO() {
    s.Z.addInterceptor((e) => {
        if (j || !Y.has(e.type)) return !1;
        if ('CHANNEL_SELECT' === e.type) {
            let { guildId: t, channelId: n } = e;
            return (
                null != n &&
                ((0, c.lW)({
                    type: I.BmY.DISPATCH,
                    pid: (0, y.getPID)(),
                    token: (0, y.getRPCAuthToken)(),
                    payloads: [
                        {
                            type: 'CHANNEL_PRELOAD',
                            guildId: t === I.ME ? null : t,
                            channelId: n,
                            context: I.e3s
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
            (0, c.lW)({
                type: I.BmY.DISPATCH,
                pid: (0, y.getPID)(),
                token: (0, y.getRPCAuthToken)(),
                payloads: [e]
            }),
            !H.has(e.type)
        );
    });
}
function ev(e) {
    let t = (0, y.getPID)();
    if (null == e.pid || e.pid === t)
        switch (e.type) {
            case I.BmY.STORAGE_SYNC:
                a.ZP.PersistedStore.initializeAll(e.states);
                break;
            case I.BmY.DISPATCH:
                null != e.payloads && ((j = !0), e.payloads.forEach((e) => K(e)), (j = !1));
        }
}
function eI() {
    (eO(),
        (0, c.Ty)(ev, (0, y.getRPCAuthToken)()),
        (0, c.$j)(),
        (0, c.lW)({
            type: I.BmY.CONNECT,
            pid: (0, y.getPID)(),
            token: (0, y.getRPCAuthToken)()
        }));
}
let eT = new Map();
function eS(e) {
    __OVERLAY__ && (null != e.trackedGame ? eT.set(e.pid, e.trackedGame) : eT.delete(e.pid));
}
function eA(e) {
    __OVERLAY__ &&
        d.v.update({
            legacyEnabled: e.legacyEnabled,
            oopEnabled: e.oopEnabled
        });
}
function eN(e) {
    M.delete(e.previousAssociatedGamePID);
}
class eC extends (i = a.ZP.PersistedStore) {
    initialize(e) {
        if (
            (this.waitFor(p.default),
            this.syncWith([p.default], () => {
                let e = p.default.getId();
                Z = null != e ? F(e) : A({}, w);
            }),
            __OVERLAY__)
        ) {
            if (b.isPlatformEmbedded) {
                let e = (0, O.M)();
                (null == e && V.error('Overlay module failed loaded'), (r = e));
            }
            M.delete((0, y.getPID)());
        }
        if (null != e) {
            L = e;
            let t = p.default.getId();
            null != t && (null == (Z = F(t)).textChatNotifications && (Z.textChatNotifications = w.textChatNotifications), null == Z.textWidgetOpacity && (Z.textWidgetOpacity = w.textWidgetOpacity), null == Z.disableClickableRegions && (Z.disableClickableRegions = w.disableClickableRegions));
        }
    }
    getState() {
        return L;
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
        return Z.selectedGuildId;
    }
    getSelectedChannelId() {
        return Z.selectedChannelId;
    }
    getSelectedCallId() {
        return x;
    }
    getDisplayUserMode() {
        return Z.displayUserMode;
    }
    getDisplayNameMode() {
        return Z.displayNameMode;
    }
    getAvatarSizeMode() {
        return Z.avatarSizeMode;
    }
    getNotificationPositionMode() {
        return Z.notificationPositionMode;
    }
    getTextChatNotificationMode() {
        return Z.textChatNotifications;
    }
    get showKeybindIndicators() {
        return null == Z.showKeybindIndicators || Z.showKeybindIndicators;
    }
    get showInviteNotification() {
        return null == Z.showGameInviteNotification || Z.showGameInviteNotification;
    }
    get disableClickableRegions() {
        return null != Z.disableClickableRegions && Z.disableClickableRegions;
    }
    get customInviteMessage() {
        return Z.customInviteMessage;
    }
    getDisableExternalLinkAlert() {
        return Z.disableExternalLinkAlert;
    }
    getFocusedPID() {
        return D;
    }
    get initialized() {
        return U;
    }
    get incompatibleApp() {
        return k;
    }
    getActiveRegions() {
        return G;
    }
    getTextWidgetOpacity() {
        return Z.textWidgetOpacity;
    }
    isPreviewingInGame() {
        return B;
    }
    getTrackedGame(e) {
        var t;
        return null != (t = eT.get(e)) ? t : null;
    }
}
(S(eC, 'displayName', 'OverlayStore'),
    S(eC, 'persistKey', 'OverlayStoreV2'),
    S(eC, 'migrations', [
        () => {
            let e = A({}, o.K.get('OverlayStore')),
                { pinnedWidgets: t, positions: n, sizes: r, v: i } = e,
                a = R(e, ['pinnedWidgets', 'positions', 'sizes', 'v']);
            return A({}, w, 5 === i ? a : null);
        },
        (e) => {
            let t = p.default.getId();
            return null == e || null == t ? {} : { [t]: A({}, e) };
        }
    ]));
let eR = new eC(s.Z, {
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
    OVERLAY_SET_ASSOCIATED_GAME: eN,
    OVERLAY_TRACKED_GAME_UPDATE: eS
});
