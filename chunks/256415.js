n.r(t), n.d(t, { default: () => x });
var i = n(17928),
    r = n(506774),
    l = n(228366),
    a = n(350723),
    s = n(996308),
    o = n(211753),
    d = n(876156),
    u = n(761821),
    c = n(95701),
    h = n(495544),
    E = n(734057),
    _ = n(808728),
    p = n(38502),
    A = n(967198),
    f = n(9302),
    g = n(531685),
    I = n(652215),
    T = n(672396);
let S = Object.freeze({
        selectedGuildId: null,
        selectedChannelId: null,
        displayUserMode: I.f5z.ALWAYS,
        displayNameMode: I.pwA.ALWAYS,
        avatarSizeMode: I.OSZ.LARGE,
        notificationPositionMode: I.G6Q.TOP_LEFT,
        textChatNotifications: I.iXc.ENABLED,
        disableExternalLinkAlert: !1,
        disablePinTutorial: !1,
        disableClickableRegions: !1,
        textWidgetOpacity: T.Li.LOWER,
        showGameInviteNotification: !0,
        customInviteMessage: void 0,
    }),
    m = null,
    O = {},
    C = null,
    N = new Set(),
    y = !1,
    R = !1,
    L = !1,
    v = new Set(),
    D = !1;
function b(e) {
    let t = O[e];
    return null == t && (t = O[e] = { ...S }), t;
}
__OVERLAY__ && (0, d.u)((0, f.getRPCAuthToken)());
let U = { ...S },
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
function w() {
    if (!__OVERLAY__) return !1;
    let e = m === (0, f.getPID)(),
        t = N.has((0, f.getPID)()) || v.size > 0;
    e && t ? (0, a.XC)(window, !0) : (0, a.XC)(window, !1);
}
function G() {
    if (m !== (0, f.getPID)()) return !1;
    v.clear();
}
function F(e) {
    let t = (0, f.getPID)();
    if (null == e.pid || e.pid === t)
        switch (e.type) {
            case I.kGV.STORAGE_SYNC:
                i.Ay.PersistedStore.initializeAll(e.states);
                break;
            case I.kGV.DISPATCH:
                null != e.payloads &&
                    ((R = !0),
                    e.payloads.forEach((e) =>
                        (function (e) {
                            if (
                                ("OVERLAY_INITIALIZE" === e.type &&
                                    ((null == e.version && 1 === f.OVERLAY_VERSION) ||
                                        e.version === f.OVERLAY_VERSION ||
                                        (l.h.dispatch({ type: "OVERLAY_INCOMPATIBLE_APP" }), (0, s.Zf)(), 0)) &&
                                    (L = !0),
                                L)
                            )
                                switch (e.type) {
                                    case "CHANNEL_CREATE":
                                    case "THREAD_CREATE":
                                    case "THREAD_UPDATE":
                                    case "CHANNEL_DELETE":
                                    case "THREAD_DELETE":
                                        let t = (0, c.createChannelRecord)(e.channel);
                                        if (!c.A_.has(t.type)) break;
                                        l.h.dispatch({ type: e.type, channel: t });
                                        break;
                                    case "CHANNEL_UPDATES":
                                        l.h.dispatch({
                                            type: e.type,
                                            channels: e.channels.map((e) => (0, c.createChannelRecord)(e)),
                                        });
                                        break;
                                    case "CONNECTION_OPEN_SUPPLEMENTAL":
                                        (e.lazyPrivateChannels = (e.lazyPrivateChannels ?? []).map((e) =>
                                            (0, c.createChannelRecord)(e),
                                        )),
                                            l.h.dispatch(e);
                                        break;
                                    case "THREAD_LIST_SYNC":
                                        l.h.dispatch({
                                            ...e,
                                            threads: e.threads.map((e) => (0, c.createChannelRecord)(e)),
                                        });
                                        break;
                                    case "GUILD_CREATE":
                                        let n = (e) => (0, c.createChannelRecord)(e),
                                            i = e.guild;
                                        switch (((i.threads = i.threads?.map(n)), i.channels.op)) {
                                            case "full_sync":
                                                i.channels.items = i.channels.items.map(n);
                                                break;
                                            case "update":
                                                i.channels.writes = i.channels.writes.map(n);
                                                break;
                                            default:
                                                i.channels;
                                        }
                                        l.h.dispatch({ type: "GUILD_CREATE", guild: i });
                                        break;
                                    case "USER_SETTINGS_PROTO_UPDATE":
                                        l.h.dispatch({
                                            ...e,
                                            settings: {
                                                proto: (0, u.Y5)(e.settings.type, e.settings.proto),
                                                type: e.settings.type,
                                            },
                                        });
                                        break;
                                    default:
                                        l.h.dispatch(e);
                                }
                        })(e),
                    ),
                    (R = !1));
        }
}
let V = new Map();
class k extends i.Ay.PersistedStore {
    static displayName = "OverlayStore";
    static persistKey = "OverlayStoreV2";
    static migrations = [
        () => {
            let { pinnedWidgets: e, positions: t, sizes: n, v: i, ...l } = { ...r.w.get("OverlayStore") };
            return { ...S, ...(5 === i ? l : null) };
        },
        (e) => {
            let t = h.default.getId();
            return null == e || null == t ? {} : { [t]: { ...e } };
        },
    ];
    initialize(e) {
        if (
            (this.waitFor(h.default, E.A, _.Ay, p.A, A.A, g.A),
            this.syncWith([h.default], () => {
                let e = h.default.getId();
                U = null != e ? b(e) : { ...S };
            }),
            __OVERLAY__ && N.delete((0, f.getPID)()),
            null != e)
        ) {
            O = e;
            let t = h.default.getId();
            null != t &&
                (null == (U = b(t)).textChatNotifications && (U.textChatNotifications = S.textChatNotifications),
                null == U.textWidgetOpacity && (U.textWidgetOpacity = S.textWidgetOpacity),
                null == U.disableClickableRegions && (U.disableClickableRegions = S.disableClickableRegions));
        }
    }
    getState() {
        return O;
    }
    isLocked(e) {
        return !N.has(e);
    }
    isInstanceLocked() {
        return !N.has((0, f.getPID)());
    }
    isInstanceFocused() {
        return m === (0, f.getPID)();
    }
    isFocused(e) {
        return m === e;
    }
    isPinned(e) {
        let t = p.A.getLayout(f.OVERLAY_LAYOUT_ID);
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
        return U.selectedGuildId;
    }
    getSelectedChannelId() {
        return U.selectedChannelId;
    }
    getSelectedCallId() {
        return C;
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
        return m;
    }
    get initialized() {
        return L;
    }
    get incompatibleApp() {
        return y;
    }
    getActiveRegions() {
        return v;
    }
    getTextWidgetOpacity() {
        return U.textWidgetOpacity;
    }
    isPreviewingInGame() {
        return D;
    }
    getTrackedGame(e) {
        return V.get(e) ?? null;
    }
}
let x = new k(l.h, {
    LOGOUT: function (e) {
        e.isSwitchingAccount || (O = {});
    },
    MULTI_ACCOUNT_REMOVE_ACCOUNT: function (e) {
        e.userId in O && delete O[e.userId];
    },
    CONNECTION_CLOSED: function () {
        N.clear();
    },
    OVERLAY_START_SESSION: function () {
        l.h.addInterceptor((e) => {
            if (R || !M.has(e.type)) return !1;
            if ("CHANNEL_SELECT" === e.type) {
                let { guildId: t, channelId: n } = e;
                return (
                    null != n &&
                    ((0, s.tN)({
                        type: I.kGV.DISPATCH,
                        pid: (0, f.getPID)(),
                        token: (0, f.getRPCAuthToken)(),
                        payloads: [
                            { type: "CHANNEL_PRELOAD", guildId: t === I.ME ? null : t, channelId: n, context: I.QCW },
                            { type: "OVERLAY_SELECT_CHANNEL", guildId: t, channelId: n },
                        ],
                    }),
                    !1)
                );
            }
            return (
                (0, s.tN)({
                    type: I.kGV.DISPATCH,
                    pid: (0, f.getPID)(),
                    token: (0, f.getRPCAuthToken)(),
                    payloads: [e],
                }),
                !P.has(e.type)
            );
        }),
            (0, s.QZ)(F, (0, f.getRPCAuthToken)()),
            (0, s.Ng)(),
            (0, s.tN)({ type: I.kGV.CONNECT, pid: (0, f.getPID)(), token: (0, f.getRPCAuthToken)() });
    },
    OVERLAY_INITIALIZE: function (e) {
        let { focusedPID: t, trackedGames: n, overlayStoredSettings: i } = e;
        (m = t),
            __OVERLAY__ &&
                (n.forEach((e) => {
                    V.set(e.pid, e);
                }),
                o.x.update({ legacyEnabled: i.legacyEnabled, oopEnabled: i.oopEnabled }));
    },
    OVERLAY_READY: function () {
        let e = U.selectedGuildId,
            t = U.selectedChannelId;
        if (
            (null == e ||
                (_.Ay.hasChannels(e) && (null == t || _.Ay.hasSelectableChannel(e, t))) ||
                ((e = null), (t = null)),
            null != t && null == E.A.getChannel(t) && ((e = null), (t = null)),
            null == e && null == t && (e = A.A.getGuildId()),
            null != e && null == t)
        ) {
            let n = _.Ay.getDefaultChannel(e);
            null != n && (t = n.id);
        }
        (U.selectedGuildId = e), (U.selectedChannelId = t);
    },
    OVERLAY_FOCUSED: function (e) {
        let { pid: t } = e;
        (m = t), w();
    },
    OVERLAY_SELECT_CHANNEL: function (e) {
        let { guildId: t, channelId: n } = e;
        (U.selectedGuildId = t), (U.selectedChannelId = n);
    },
    OVERLAY_SELECT_CALL: function (e) {
        let { callId: t } = e;
        C = t;
    },
    CALL_DELETE: function () {
        C = null;
    },
    LAYOUT_CREATE: function () {},
    OVERLAY_SET_ENABLED: function (e) {
        __OVERLAY__ && o.x.update({ legacyEnabled: e.legacyEnabled, oopEnabled: e.oopEnabled });
    },
    OVERLAY_SET_DISPLAY_NAME_MODE: function (e) {
        let { mode: t } = e;
        U.displayNameMode = t;
    },
    OVERLAY_SET_DISPLAY_USER_MODE: function (e) {
        let { mode: t } = e;
        U.displayUserMode = t;
    },
    OVERLAY_SET_AVATAR_SIZE_MODE: function (e) {
        let { mode: t } = e;
        U.avatarSizeMode = t;
    },
    OVERLAY_SET_NOTIFICATION_POSITION_MODE: function (e) {
        let { mode: t } = e;
        U.notificationPositionMode = t;
    },
    OVERLAY_SET_DISABLE_CLICKABLE_REGIONS: function (e) {
        let { disable: t } = e;
        U.disableClickableRegions = t;
    },
    OVERLAY_SET_INVITE_MESSAGE: function (e) {
        let { message: t } = e,
            n = U.customInviteMessage !== t;
        return (U.customInviteMessage = t), n;
    },
    OVERLAY_SET_GAME_INVITE_NOTIFICATION: function (e) {
        let { shouldShow: t } = e,
            n = U.showGameInviteNotification !== t;
        return (U.showGameInviteNotification = t), n;
    },
    OVERLAY_SET_TEXT_WIDGET_OPACITY: function (e) {
        let { opacity: t } = e,
            n = U.textWidgetOpacity !== t;
        return (U.textWidgetOpacity = t), n;
    },
    OVERLAY_DISABLE_EXTERNAL_LINK_ALERT: function () {
        U.disableExternalLinkAlert = !0;
    },
    OVERLAY_INCOMPATIBLE_APP: function () {
        y = !0;
    },
    OVERLAY_SET_INPUT_LOCKED: function (e) {
        let { locked: t, pid: n } = e;
        t ? N.delete(n) : N.add(n), G(), w(), (D = !1);
    },
    OVERLAY_ACTIVATE_REGION: function (e) {
        let { region: t } = e;
        if (m !== (0, f.getPID)() || v.has(t)) return !1;
        v.add(t);
    },
    OVERLAY_DEACTIVATE_ALL_REGIONS: G,
    OVERLAY_SET_PREVIEW_IN_GAME_MODE: function (e) {
        D = e.isPreviewingInGame;
    },
    WINDOW_RESIZED: function () {
        if (__OVERLAY__) {
            let e = g.A.windowSize();
            (0, f.validResolution)(e) || (D = !1);
        }
    },
    OVERLAY_SET_ASSOCIATED_GAME: function (e) {
        N.delete(e.previousAssociatedGamePID);
    },
    OVERLAY_TRACKED_GAME_UPDATE: function (e) {
        __OVERLAY__ && (null != e.trackedGame ? V.set(e.pid, e.trackedGame) : V.delete(e.pid));
    },
});
