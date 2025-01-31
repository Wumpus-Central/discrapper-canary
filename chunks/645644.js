n.d(t, { Z: () => q }), n(47120), n(411104);
var i = n(259443),
    r = n(379649),
    a = n(570140),
    s = n(615287),
    o = n(593472),
    l = n(147913),
    u = n(579806),
    c = n(581567),
    d = n(594190),
    f = n(371651),
    _ = n(449224),
    p = n(808506),
    h = n(237997),
    m = n(626135),
    g = n(998502),
    E = n(145597),
    v = n(830917),
    y = n(554174),
    I = n(938038),
    b = n(981631),
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
let A = 3,
    N = !1,
    C = new i.Yd('OverlayUsageStatsManager');
N || (C.verbose = () => {});
class R {
    increment(e) {
        ++this.actions[e];
    }
    getAnalytics(e, t) {
        let n = this.actions[T.bv.Viewed],
            i = this.actions[T.bv.Clicked];
        return 0 === n && 0 === i
            ? null
            : {
                  event_uuid: t,
                  notification_type: e,
                  viewed_count: n,
                  clicked_count: i
              };
    }
    constructor() {
        S(this, 'actions', {
            [T.bv.Viewed]: 0,
            [T.bv.Clicked]: 0
        });
    }
}
class O {
    static makeEmptyGroupAnalytics() {
        return {
            [T.Vk.Nudge]: 0,
            [T.Vk.TextChat]: 0,
            [T.Vk.VoiceCall]: 0,
            [T.Vk.Activity]: 0,
            [T.Vk.Clips]: 0,
            [T.Vk.Other]: 0
        };
    }
    increment(e, t) {
        let n = this.groupCounters[t];
        if (null == n) {
            C.error('NotificationCounter: Unknown notification action: '.concat(t));
            return;
        }
        let i = (0, T.YK)(e);
        if (!(i in n)) {
            C.error('NotificationCounter: Unknown notification action: '.concat(e));
            return;
        }
        ++n[i], ++this.actionCounters[t];
        let r = this.counters[e];
        if (null == r) {
            C.error('NotificationCounter: Unknown notification type: '.concat(e));
            return;
        }
        r.increment(t);
    }
    getAnalytics() {
        let e = this.groupCounters[T.bv.Viewed],
            t = this.groupCounters[T.bv.Clicked];
        return {
            notices_viewed: this.actionCounters[T.bv.Viewed],
            notices_clicked: this.actionCounters[T.bv.Clicked],
            notice_nudge_viewed: e[T.Vk.Nudge],
            notice_text_chat_viewed: e[T.Vk.TextChat],
            notice_voice_call_viewed: e[T.Vk.VoiceCall],
            notice_activity_viewed: e[T.Vk.Activity],
            notice_clips_viewed: e[T.Vk.Clips],
            notice_other_viewed: e[T.Vk.Other],
            notice_nudge_clicked: t[T.Vk.Nudge],
            notice_text_chat_clicked: t[T.Vk.TextChat],
            notice_voice_call_clicked: t[T.Vk.VoiceCall],
            notice_activity_clicked: t[T.Vk.Activity],
            notice_clips_clicked: t[T.Vk.Clips],
            notice_other_clicked: t[T.Vk.Other]
        };
    }
    getCounterAnalytics(e) {
        return Object.entries(this.counters)
            .map((t) => {
                let [n, i] = t;
                return i.getAnalytics(n, e);
            })
            .filter((e) => null != e);
    }
    constructor() {
        S(this, 'actionCounters', {
            [T.bv.Viewed]: 0,
            [T.bv.Clicked]: 0
        }),
            S(this, 'groupCounters', {
                [T.bv.Viewed]: O.makeEmptyGroupAnalytics(),
                [T.bv.Clicked]: O.makeEmptyGroupAnalytics()
            }),
            S(this, 'counters', {
                [T.n0.NewsNudge]: new R(),
                [T.n0.WelcomeNudge]: new R(),
                [T.n0.TextChat]: new R(),
                [T.n0.ActivityUserJoin]: new R(),
                [T.n0.ActivityInvite]: new R(),
                [T.n0.IncomingCall]: new R(),
                [T.n0.GoLiveNudge]: new R(),
                [T.n0.GoLiveNonVoiceNudge]: new R(),
                [T.n0.OverlayCrashed]: new R(),
                [T.n0.ClipsReminderNotification]: new R(),
                [T.n0.ClipsNotification]: new R(),
                [T.n0.KeybindIndicatorsNotification]: new R(),
                [T.n0.SendGameInvitesNotification]: new R()
            });
    }
}
class D {
    static makeEmptyAnalytics() {
        return {
            initialized: !1,
            pinnedToggledCount: 0,
            visibleDuration: new r.G9(),
            pinned: !1
        };
    }
    getByType(e) {
        return this.types[e];
    }
    getByWidget(e) {
        switch (e) {
            case b.Odu.VOICE:
                return this.getByType(0);
            case b.Odu.TEXT:
                return this.getByType(1);
            default:
                return null;
        }
    }
    getAnalytics() {
        let e = this.types[0],
            t = this.types[1];
        return {
            widget_voice_pin_toggle_count: e.pinnedToggledCount,
            widget_voice_visible_duration: e.visibleDuration.elapsed().asMilliseconds(),
            widget_voice_pinned: e.pinned,
            widget_text_pin_toggle_count: t.pinnedToggledCount,
            widget_text_visible_duration: t.visibleDuration.elapsed().asMilliseconds(),
            widget_text_pinned: t.pinned
        };
    }
    constructor() {
        S(this, 'types', {
            0: D.makeEmptyAnalytics(),
            1: D.makeEmptyAnalytics()
        });
    }
}
class x {
    update() {
        let e = this.game,
            t = g.ZP.GetWindowFullscreenTypeByPid(e.pid, e.name, e.fullscreenType);
        if (t !== this.lastscreenType) {
            if (!(t in this.counters)) {
                C.error('ScreenTypeAnalytics: Unknown screen type: '.concat(t), t);
                return;
            }
            this.counters[t].start(), null != this.lastscreenType && this.counters[this.lastscreenType].stop(), (this.lastscreenType = t);
        }
    }
    getAnalytics() {
        var e, t;
        let n = (e) => this.counters[e].elapsed().asMilliseconds(),
            i = {
                [o.Jx.UNKNOWN]: n(o.Jx.UNKNOWN),
                [o.Jx.WINDOWED]: n(o.Jx.WINDOWED),
                [o.Jx.MAXIMIZED]: n(o.Jx.MAXIMIZED),
                [o.Jx.BORDERLESS_FULLSCREEN]: n(o.Jx.BORDERLESS_FULLSCREEN),
                [o.Jx.FULLSCREEN]: n(o.Jx.FULLSCREEN),
                [o.Jx.MINIMIZED]: n(o.Jx.MINIMIZED)
            },
            r = Object.entries(i).sort((e, t) => {
                let [n, i] = e,
                    [r, a] = t;
                return a - i;
            })[0],
            a = parseInt(r[0], 10),
            s = isNaN(a) ? o.Jx.UNKNOWN : a;
        isNaN(a) && C.error('ScreenTypeAnalytics: Unknown most used screen type: '.concat(r), i);
        let l = I.c.getGameDisplayMode(null !== (e = this.game.name) && void 0 !== e ? e : this.game.id);
        I.c.setGameDisplayMode(null !== (t = this.game.name) && void 0 !== t ? t : this.game.id, s);
        let u = {
            screentype_unknown_duration: i[o.Jx.UNKNOWN],
            screentype_windowed_duration: i[o.Jx.WINDOWED],
            screentype_maximized_duration: i[o.Jx.MAXIMIZED],
            screentype_borderless_fullscreen_duration: i[o.Jx.BORDERLESS_FULLSCREEN],
            screentype_fullscreen_duration: i[o.Jx.FULLSCREEN],
            screentype_minimized_duration: i[o.Jx.MINIMIZED]
        };
        return {
            ...u,
            screentype_global_supported_duration: u.screentype_windowed_duration + u.screentype_maximized_duration + u.screentype_borderless_fullscreen_duration,
            screentype_global_unsupported_duration: u.screentype_fullscreen_duration,
            screentype_initial: o.Jx[this.game.fullscreenType],
            screentype_most_used: o.Jx[s],
            screentype_most_used_previous: null == l ? null : o.Jx[l],
            game_display_mode_is_adjustment_supported: g.ZP.GameDisplayModeIsGameSupported(this.game.name)
        };
    }
    destroy() {
        clearInterval(this.updateScreenInterval);
    }
    constructor(e) {
        S(this, 'game', void 0),
            S(this, 'counters', void 0),
            S(this, 'lastscreenType', void 0),
            S(this, 'updateScreenInterval', void 0),
            (this.game = e),
            (this.counters = {
                [o.Jx.UNKNOWN]: new r.G9(),
                [o.Jx.WINDOWED]: new r.G9(),
                [o.Jx.MAXIMIZED]: new r.G9(),
                [o.Jx.BORDERLESS_FULLSCREEN]: new r.G9(),
                [o.Jx.FULLSCREEN]: new r.G9(),
                [o.Jx.MINIMIZED]: new r.G9()
            }),
            (this.lastscreenType = void 0),
            this.update(),
            (this.updateScreenInterval = setInterval(() => this.update(), 10000));
    }
}
class L {
    static get debug() {
        return {
            gamesByPid: L.gamesByPid,
            gamesByName: L.gamesByName
        };
    }
    set successfullyShown(e) {
        this._successfullyShown = e;
    }
    getQunsName(e) {
        let t = null != e ? e : o.Ng.QUNS_UNKNOWN;
        return o.Ng[t];
    }
    buildOverlayMethodStats(e, t) {
        let n = this.overlayMethodStats,
            { enabled: i, legacyEnabled: r } = f.Z.getEnabledStatus(),
            a = {
                legacy_override: !0 === r,
                enabled: i,
                quns_mode: this.getQunsName(o.Ng.QUNS_UNKNOWN)
            };
        if (null != t) {
            let { quns: e } = g.ZP.GetWindowFullscreenTypeExtraByPid(t.pid, t.gameName);
            a.quns_mode = this.getQunsName(e);
        }
        if (null == e) {
            let e = null != t ? f.Z.getRenderMethod(t.pid) : null;
            return {
                original_method: null != e ? e : s.gl.Disabled,
                ...a
            };
        }
        if (null == n)
            return {
                original_method: e,
                ...a
            };
        let l = n.any_other_method;
        return {
            ...n,
            any_other_method: e !== l ? e : l,
            ...a
        };
    }
    static getGameName(e) {
        var t, n;
        return null !== (n = null !== (t = e.name) && void 0 !== t ? t : e.id) && void 0 !== n ? n : null;
    }
    static ignoreGame(e) {
        var t;
        return null !== (t = e.isLauncher) && void 0 !== t && t;
    }
    static create(e) {
        let t = L.getGameName(e);
        if (L.ignoreGame(e) || null == t) return null;
        let n = new L({ ...e });
        return (n.gameConcurrentGameCount = Object.values(L.gamesByPid).length), (L.gamesByPid[e.pid] = n), (L.gamesByName[t] = n), n;
    }
    static getByName(e) {
        var t;
        if (null == e) return null;
        let n =
            null ===
                (t = d.ZP.getRunningGames().find((t) => {
                    var n;
                    return (null === (n = t.name) || void 0 === n ? void 0 : n.toLowerCase()) === e.toLowerCase();
                })) || void 0 === t
                ? void 0
                : t.pid;
        return null != n ? L.gamesByPid[n] : null;
    }
    static getByPid(e) {
        return L.gamesByPid[e];
    }
    static async destroy(e) {
        let t = L.getGameName(e);
        if (L.ignoreGame(e) || null == t) return;
        let n = L.gamesByPid[e.pid];
        if (null != n) {
            n.screenAnalytics.destroy();
            let t = await n.getAnalytics();
            for (let e of (m.default.track(b.rMx.OVERLAY_USAGE_STATS, t.usage), t.notifications)) m.default.track(b.rMx.OVERLAY_USAGE_NOTIFICATION_STATS, e);
            C.verbose('OVERLAY_USAGE_STATS: '.concat(e.name), t), delete L.gamesByPid[e.pid];
        }
        delete L.gamesByName[t];
    }
    setOverlayMethod(e) {
        (this.overlayMethod = e),
            (this.overlayMethodStats = this.buildOverlayMethodStats(e, this.game)),
            C.verbose('setOverlayMethod', {
                method: e,
                game: this.game,
                overlayStatus: this.overlayStatus,
                overlayMethodStats: this.overlayMethodStats
            });
    }
    getSettingMethod() {
        return null == this.overlayMethod ? s.gl[s.gl.Disabled] : s.gl[this.overlayMethod];
    }
    async getAnalytics() {
        var e, t, n, i, r, a, o, l, f;
        let _ = null !== (n = this.overlayMethod) && void 0 !== n ? n : s.gl.Disabled,
            m = {
                setting_is_enabled: p.Z.enabled,
                setting_method: this.getSettingMethod(),
                setting_display_user: h.Z.getDisplayUserMode(),
                setting_display_name: h.Z.getDisplayNameMode(),
                setting_avatar_size: h.Z.getAvatarSizeMode(),
                setting_notification_position: h.Z.getNotificationPositionMode(),
                setting_chat_notification: h.Z.getTextChatNotificationMode()
            },
            g = (0, d.b6)(this.game),
            E = (0, c.G8)(this.game),
            v = null !== (i = this.overlayMethodStats) && void 0 !== i ? i : this.buildOverlayMethodStats(_, this.game),
            y = null != v.any_other_method ? s.gl[v.any_other_method] : null;
        return {
            usage: {
                event_uuid: this.uuid,
                overlay_usage_stats_version: A,
                ...this.notificationAnalytics.getAnalytics(),
                ...this.widgetAnalytics.getAnalytics(),
                ...this.screenAnalytics.getAnalytics(),
                ...m,
                overlay_status_game_enabled: g.enabled,
                overlay_status_game_source: g.source,
                game_name: null !== (r = E.gameName) && void 0 !== r ? r : null,
                game_id: null !== (a = E.gameId) && void 0 !== a ? a : null,
                game_exe: null !== (o = E.exe) && void 0 !== o ? o : null,
                game_elevated: this.game.elevated,
                game_is_launcher: null !== (l = this.game.isLauncher) && void 0 !== l && l,
                game_duration: this.gameTimer.elapsed().asMilliseconds(),
                game_focused_duration: this.gameFocusedTimer.elapsed().asMilliseconds(),
                game_focused_change_count: this.gameFocusChangedCount,
                game_concurrent_game_count: this.gameConcurrentGameCount,
                ui_unlocked_duration: this.unlockedTimer.elapsed().asMilliseconds(),
                ui_unlocked_count: this.uiUnlockedCount,
                ui_locked_count: this.uiLockedCount,
                soundboard_shown_duration: this.soundboardShownTimer.elapsed().asMilliseconds(),
                soundboard_shown_count: this.soundboardShownCount,
                soundboard_keep_open_count: this.soundboardKeepOpenCount,
                hardware_display_count: null !== (f = await (null === u.Z || void 0 === u.Z ? void 0 : null === (t = u.Z.hardware) || void 0 === t ? void 0 : null === (e = t.getDisplayCount) || void 0 === e ? void 0 : e.call(t))) && void 0 !== f ? f : null,
                message_ack_count: this.overlayMessageAckCount,
                message_created_count: this.overlayMessageCreateCount,
                desktop_message_ack_count: this.desktopMessageAckCount,
                desktop_message_created_count: this.desktopMessageCreateCount,
                desktop_focused_duration: this.desktopFocusedTimer.elapsed().asMilliseconds(),
                desktop_focused_change_count: this.desktopFocusChangedCount,
                rtc_connection_duration: this.rtcConnectionTimer.elapsed().asMilliseconds(),
                mute_toggled_count: this.muteToggledCount,
                overlay_successfully_shown: this._successfullyShown,
                ...v,
                original_method: s.gl[v.original_method],
                any_other_method: y
            },
            notifications: this.notificationAnalytics.getCounterAnalytics(this.uuid)
        };
    }
    setLocked(e) {
        e ? (this.unlockedTimer.stop(), ++this.uiLockedCount) : (this.unlockedTimer.start(), ++this.uiUnlockedCount);
    }
    static gameSetAllUnfocused() {
        for (let e of Object.values(L.gamesByPid)) e.gameFocusedTimer.stop();
    }
    static incrementConcurrentGameCount() {
        for (let e of Object.values(L.gamesByPid)) ++e.gameConcurrentGameCount;
    }
    gameSetFocused(e) {
        this.gameFocusedTimer.toggle(e), e && ++this.gameFocusChangedCount;
    }
    setSoundboardShown(e, t) {
        this.soundboardShownTimer.toggle(e), e && (++this.soundboardShownCount, t && ++this.soundboardKeepOpenCount);
    }
    static handleMuteToggled() {
        for (let e of Object.values(L.gamesByPid)) ++e.muteToggledCount;
    }
    static desktopSetFocused(e) {
        if (e !== L.desktopMainWindowHasFocus) {
            for (let t of Object.values(L.gamesByPid)) ++t.desktopFocusChangedCount, e && t.desktopFocusedTimer.toggle(e);
            L.desktopMainWindowHasFocus = e;
        }
    }
    static desktopMessageEvent(e) {
        for (let t of Object.values(L.gamesByPid))
            switch (e) {
                case 'ack':
                    ++t.desktopMessageAckCount;
                    break;
                case 'created':
                    ++t.desktopMessageCreateCount;
            }
    }
    static toggleRtcConnection(e) {
        for (let t of Object.values(L.gamesByPid)) t.rtcConnectionTimer.toggle(e);
    }
    constructor(e) {
        var t, n;
        S(this, 'game', void 0), S(this, 'uuid', void 0), S(this, 'overlayStatus', void 0), S(this, 'overlayMethod', void 0), S(this, 'overlayMethodStats', void 0), S(this, 'notificationAnalytics', void 0), S(this, 'widgetAnalytics', void 0), S(this, 'screenAnalytics', void 0), S(this, 'uiUnlockedCount', void 0), S(this, 'uiLockedCount', void 0), S(this, 'gameFocusChangedCount', void 0), S(this, 'gameConcurrentGameCount', void 0), S(this, 'overlayMessageAckCount', void 0), S(this, 'overlayMessageCreateCount', void 0), S(this, 'gameTimer', void 0), S(this, 'gameFocusedTimer', void 0), S(this, 'unlockedTimer', void 0), S(this, 'rtcConnectionTimer', void 0), S(this, 'desktopFocusedTimer', void 0), S(this, 'desktopFocusChangedCount', void 0), S(this, 'desktopMessageAckCount', void 0), S(this, 'desktopMessageCreateCount', void 0), S(this, 'soundboardShownTimer', void 0), S(this, 'soundboardShownCount', void 0), S(this, 'soundboardKeepOpenCount', void 0), S(this, 'muteToggledCount', void 0), S(this, '_successfullyShown', void 0), (this.game = e), (this.uuid = crypto.randomUUID()), (this.overlayMethod = null), (this.overlayMethodStats = null), (this.notificationAnalytics = new O()), (this.widgetAnalytics = new D()), (this.uiUnlockedCount = 0), (this.uiLockedCount = 0), (this.gameFocusChangedCount = 0), (this.gameConcurrentGameCount = 0), (this.overlayMessageAckCount = 0), (this.overlayMessageCreateCount = 0), (this.gameTimer = r.G9.startNew()), (this.gameFocusedTimer = new r.G9()), (this.unlockedTimer = new r.G9()), (this.rtcConnectionTimer = new r.G9()), (this.desktopFocusedTimer = new r.G9()), (this.desktopFocusChangedCount = 0), (this.desktopMessageAckCount = 0), (this.desktopMessageCreateCount = 0), (this.soundboardShownTimer = new r.G9()), (this.soundboardShownCount = 0), (this.soundboardKeepOpenCount = 0), (this.muteToggledCount = 0), (this._successfullyShown = !1), (this.screenAnalytics = new x(e)), (this.overlayStatus = (0, d.b6)(e)), (this.overlayMethod = null !== (n = null === (t = this.overlayStatus) || void 0 === t ? void 0 : t.overlayMethod) && void 0 !== n ? n : null), (this.overlayMethodStats = this.buildOverlayMethodStats(this.overlayMethod, e)), L.desktopMainWindowHasFocus && this.desktopFocusedTimer.start(), W.hasConnection() && this.rtcConnectionTimer.start();
    }
}
function P(e) {
    for (let t of (C.verbose('handleRunningGamesChange', e), e.added)) {
        L.incrementConcurrentGameCount();
        let e = L.create(t);
        C.verbose('handleRunningGamesChange added', t, e);
    }
    for (let t of e.removed) L.destroy(t), C.verbose('handleRunningGamesChange removed', t);
}
function w(e) {
    if (e.pid === E.Js) return;
    let t = L.getByPid(e.pid);
    if ((C.verbose('OVERLAY_SET_INPUT_LOCKED', t), null == t)) {
        C.error('OVERLAY_SET_INPUT_LOCKED: Unable to find game', e, L.debug);
        return;
    }
    t.setLocked(e.locked);
}
function M(e) {
    var t;
    if ((C.verbose('OVERLAY_NOTIFICATION_EVENT', e), null == e.gameName && null == e.gameId)) return;
    let n = L.getByName(null !== (t = e.gameName) && void 0 !== t ? t : e.gameId);
    if (null == n) {
        C.error('OVERLAY_NOTIFICATION_EVENT: Game not found.', e, L.debug);
        return;
    }
    n.notificationAnalytics.increment(e.notificationType, e.action);
}
function k(e) {
    var t;
    if ((C.verbose('OVERLAY_WIDGET_CHANGED', e), null == e.gameName && null == e.gameId)) return;
    let n = L.getByName(null !== (t = e.gameName) && void 0 !== t ? t : e.gameId);
    if (null == n) {
        C.error('OVERLAY_WIDGET_CHANGED: Game not found', e, L.debug);
        return;
    }
    let i = n.widgetAnalytics.getByWidget(e.widgetType);
    null != i && (i.initialized || ((i.initialized = !0), (i.pinned = e.pinned)), i.pinned !== e.pinned && ++i.pinnedToggledCount, (i.pinned = e.pinned), i.visibleDuration.toggle(e.visible));
}
function U(e) {
    if ((C.verbose('OVERLAY_FOCUSED', e), L.gameSetAllUnfocused(), null == e.pid || e.pid === E.Js)) return;
    let t = L.getByPid(e.pid);
    if (null == t) {
        C.error('OVERLAY_FOCUSED: Game not found', e, L.debug);
        return;
    }
    t.gameSetFocused(!0);
}
function G(e) {
    var t;
    if ((C.verbose('SOUNDBOARD_SET_OVERLAY_ENABLED', e), e.pid === E.Js)) return;
    let n = L.getByPid(e.pid);
    if (null == n) {
        C.error('SOUNDBOARD_SET_OVERLAY_ENABLED: Game not found', e, L.debug);
        return;
    }
    n.setSoundboardShown(e.enabled, !!e.enabled && null !== (t = e.keepOpen) && void 0 !== t && t);
}
function B(e) {
    var t;
    if ((C.verbose('OVERLAY_MESSAGE_EVENT_ACTION', e), null == e.gameName && null == e.gameId)) return;
    let n = L.getByName(null !== (t = e.gameName) && void 0 !== t ? t : e.gameId);
    if (null == n) {
        C.error('OVERLAY_MESSAGE_EVENT_ACTION: Game not found', e, L.debug);
        return;
    }
    switch (e.eventType) {
        case 'ack':
            ++n.overlayMessageAckCount;
            break;
        case 'create':
            ++n.overlayMessageCreateCount;
    }
}
function Z(e) {
    C.verbose('MESSAGE_ACKED', e), L.desktopMessageEvent('ack');
}
function F(e) {
    e.message.state === b.yb.SENDING && L.desktopMessageEvent('created');
}
function V(e) {
    let t = (0, y.Z)();
    null != t && t !== E.Js && (C.verbose('AUDIO_TOGGLE_SELF_MUTE', e), L.handleMuteToggled());
}
function j(e) {
    C.verbose('WINDOW_FOCUS', e);
    let t = (0, v.UU)();
    if (e.windowId !== t) {
        C.verbose('WINDOW_FOCUS: Not main window', {
            action: e,
            mainWindowId: t
        });
        return;
    }
    L.desktopSetFocused(e.focused);
}
function H(e) {
    if (e.pid === E.Js) return;
    let t = L.getByPid(e.pid);
    if (null == t) {
        C.error('OVERLAY_SUCCESSFULLY_SHOWN: Game not found', e, L.debug);
        return;
    }
    t.successfullyShown = !0;
}
function Y(e) {
    let t = L.getByPid(e.pid);
    if (null == t) {
        C.error('OVERLAY_UPDATE_OVERLAY_METHOD: Game not found', e, L.debug);
        return;
    }
    e.overlayMethod !== s.gl.Disabled && (C.verbose('OVERLAY_UPDATE_OVERLAY_METHOD', e), t.setOverlayMethod(e.overlayMethod));
}
S(L, 'gamesByPid', {}), S(L, 'gamesByName', {}), S(L, 'desktopMainWindowHasFocus', document.hasFocus());
class W {
    static hasConnection() {
        return W.connections.size > 0;
    }
    static handleRTCConnectionState(e) {
        var t;
        let n = (null !== (t = e.channelId) && void 0 !== t ? t : 'unknown') + e.context;
        switch (e.state) {
            case b.hes.RTC_CONNECTED:
                W.connections.add(n);
                break;
            case b.hes.DISCONNECTED:
                W.connections.delete(n);
        }
        let i = W.hasConnection();
        W.previousHasConnection !== i && (L.toggleRtcConnection(i), (W.previousHasConnection = i));
    }
}
S(W, 'connections', new Set()), S(W, 'previousHasConnection', !1);
class K {
    static handleMessageAcked(e) {
        C.verbose('MESSAGE_ACKED', e);
        let t = _.Z.getGame();
        if (null == t) {
            C.error('Game not found.');
            return;
        }
        a.Z.dispatch({
            type: 'OVERLAY_MESSAGE_EVENT_ACTION',
            eventType: 'ack',
            gameName: t.name,
            gameId: t.id
        });
    }
    static handleMessageCreate(e) {
        if (e.message.state !== b.yb.SENDING) return;
        C.verbose('MESSAGE_CREATE', e, Error().stack);
        let t = _.Z.getGame();
        if (null == t) {
            C.error('Game not found.');
            return;
        }
        a.Z.dispatch({
            type: 'OVERLAY_MESSAGE_EVENT_ACTION',
            eventType: 'create',
            gameName: t.name,
            gameId: t.id
        });
    }
}
N &&
    !__OVERLAY__ &&
    setInterval(async () => {
        for (let e of Object.values(L.debug.gamesByName)) C.verbose('Game analytics', await e.getAnalytics());
    }, 5000);
class z extends l.Z {
    constructor(...e) {
        super(...e),
            S(
                this,
                'actions',
                __OVERLAY__
                    ? {
                          MESSAGE_ACKED: K.handleMessageAcked,
                          MESSAGE_CREATE: K.handleMessageCreate
                      }
                    : {
                          OVERLAY_FOCUSED: U,
                          OVERLAY_NOTIFICATION_EVENT: M,
                          OVERLAY_SET_INPUT_LOCKED: w,
                          OVERLAY_WIDGET_CHANGED: k,
                          OVERLAY_MESSAGE_EVENT_ACTION: B,
                          RUNNING_GAMES_CHANGE: P,
                          SOUNDBOARD_SET_OVERLAY_ENABLED: G,
                          MESSAGE_ACKED: Z,
                          MESSAGE_CREATE: F,
                          WINDOW_FOCUS: j,
                          RTC_CONNECTION_STATE: W.handleRTCConnectionState,
                          AUDIO_TOGGLE_SELF_MUTE: V,
                          OVERLAY_SUCCESSFULLY_SHOWN: H,
                          OVERLAY_UPDATE_OVERLAY_METHOD: Y
                      }
            );
    }
}
let q = new z();
