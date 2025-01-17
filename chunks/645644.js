var i,
    a = r(47120);
var s = r(411104);
var o = r(259443),
    l = r(379649),
    u = r(570140),
    c = r(615287),
    d = r(593472),
    f = r(147913),
    _ = r(579806),
    h = r(581567),
    p = r(594190),
    m = r(371651),
    g = r(449224),
    E = r(808506),
    v = r(237997),
    I = r(626135),
    T = r(998502),
    b = r(145597),
    y = r(830917),
    S = r(554174),
    A = r(938038),
    N = r(981631),
    C = r(987650);
function R(e, n, r) {
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
let O = 3,
    D = !1,
    L = new o.Yd('OverlayUsageStatsManager');
!D && (L.verbose = () => {});
class x {
    increment(e) {
        ++this.actions[e];
    }
    getAnalytics(e, n) {
        let r = this.actions[C.bv.Viewed],
            i = this.actions[C.bv.Clicked];
        return 0 === r && 0 === i
            ? null
            : {
                  event_uuid: n,
                  notification_type: e,
                  viewed_count: r,
                  clicked_count: i
              };
    }
    constructor() {
        R(this, 'actions', {
            [C.bv.Viewed]: 0,
            [C.bv.Clicked]: 0
        });
    }
}
class w {
    static makeEmptyGroupAnalytics() {
        return {
            [C.Vk.Nudge]: 0,
            [C.Vk.TextChat]: 0,
            [C.Vk.VoiceCall]: 0,
            [C.Vk.Activity]: 0,
            [C.Vk.Clips]: 0,
            [C.Vk.Other]: 0
        };
    }
    increment(e, n) {
        let r = this.groupCounters[n];
        if (null == r) {
            L.error('NotificationCounter: Unknown notification action: '.concat(n));
            return;
        }
        let i = (0, C.YK)(e);
        if (!(i in r)) {
            L.error('NotificationCounter: Unknown notification action: '.concat(e));
            return;
        }
        ++r[i], ++this.actionCounters[n];
        let a = this.counters[e];
        if (null == a) {
            L.error('NotificationCounter: Unknown notification type: '.concat(e));
            return;
        }
        a.increment(n);
    }
    getAnalytics() {
        let e = this.groupCounters[C.bv.Viewed],
            n = this.groupCounters[C.bv.Clicked];
        return {
            notices_viewed: this.actionCounters[C.bv.Viewed],
            notices_clicked: this.actionCounters[C.bv.Clicked],
            notice_nudge_viewed: e[C.Vk.Nudge],
            notice_text_chat_viewed: e[C.Vk.TextChat],
            notice_voice_call_viewed: e[C.Vk.VoiceCall],
            notice_activity_viewed: e[C.Vk.Activity],
            notice_clips_viewed: e[C.Vk.Clips],
            notice_other_viewed: e[C.Vk.Other],
            notice_nudge_clicked: n[C.Vk.Nudge],
            notice_text_chat_clicked: n[C.Vk.TextChat],
            notice_voice_call_clicked: n[C.Vk.VoiceCall],
            notice_activity_clicked: n[C.Vk.Activity],
            notice_clips_clicked: n[C.Vk.Clips],
            notice_other_clicked: n[C.Vk.Other]
        };
    }
    getCounterAnalytics(e) {
        return Object.entries(this.counters)
            .map((n) => {
                let [r, i] = n;
                return i.getAnalytics(r, e);
            })
            .filter((e) => null != e);
    }
    constructor() {
        R(this, 'actionCounters', {
            [C.bv.Viewed]: 0,
            [C.bv.Clicked]: 0
        }),
            R(this, 'groupCounters', {
                [C.bv.Viewed]: w.makeEmptyGroupAnalytics(),
                [C.bv.Clicked]: w.makeEmptyGroupAnalytics()
            }),
            R(this, 'counters', {
                [C.n0.NewsNudge]: new x(),
                [C.n0.WelcomeNudge]: new x(),
                [C.n0.TextChat]: new x(),
                [C.n0.ActivityUserJoin]: new x(),
                [C.n0.ActivityInvite]: new x(),
                [C.n0.IncomingCall]: new x(),
                [C.n0.GoLiveNudge]: new x(),
                [C.n0.GoLiveNonVoiceNudge]: new x(),
                [C.n0.OverlayCrashed]: new x(),
                [C.n0.ClipsReminderNotification]: new x(),
                [C.n0.ClipsNotification]: new x(),
                [C.n0.KeybindIndicatorsNotification]: new x(),
                [C.n0.SendGameInvitesNotification]: new x()
            });
    }
}
!(function (e) {
    (e[(e.Voice = 0)] = 'Voice'), (e[(e.Text = 1)] = 'Text');
})(i || (i = {}));
class P {
    static makeEmptyAnalytics() {
        return {
            initialized: !1,
            pinnedToggledCount: 0,
            visibleDuration: new l.G9(),
            pinned: !1
        };
    }
    getByType(e) {
        return this.types[e];
    }
    getByWidget(e) {
        switch (e) {
            case N.Odu.VOICE:
                return this.getByType(0);
            case N.Odu.TEXT:
                return this.getByType(1);
            default:
                return null;
        }
    }
    getAnalytics() {
        let e = this.types[0],
            n = this.types[1];
        return {
            widget_voice_pin_toggle_count: e.pinnedToggledCount,
            widget_voice_visible_duration: e.visibleDuration.elapsed().asMilliseconds(),
            widget_voice_pinned: e.pinned,
            widget_text_pin_toggle_count: n.pinnedToggledCount,
            widget_text_visible_duration: n.visibleDuration.elapsed().asMilliseconds(),
            widget_text_pinned: n.pinned
        };
    }
    constructor() {
        R(this, 'types', {
            0: P.makeEmptyAnalytics(),
            1: P.makeEmptyAnalytics()
        });
    }
}
class M {
    update() {
        let e = this.game,
            n = T.ZP.GetWindowFullscreenTypeByPid(e.pid, e.name, e.fullscreenType);
        if (n !== this.lastscreenType) {
            if (!(n in this.counters)) {
                L.error('ScreenTypeAnalytics: Unknown screen type: '.concat(n), n);
                return;
            }
            this.counters[n].start(), null != this.lastscreenType && this.counters[this.lastscreenType].stop(), (this.lastscreenType = n);
        }
    }
    getAnalytics() {
        var e, n;
        let r = (e) => this.counters[e].elapsed().asMilliseconds(),
            i = {
                [d.Jx.UNKNOWN]: r(d.Jx.UNKNOWN),
                [d.Jx.WINDOWED]: r(d.Jx.WINDOWED),
                [d.Jx.MAXIMIZED]: r(d.Jx.MAXIMIZED),
                [d.Jx.BORDERLESS_FULLSCREEN]: r(d.Jx.BORDERLESS_FULLSCREEN),
                [d.Jx.FULLSCREEN]: r(d.Jx.FULLSCREEN),
                [d.Jx.MINIMIZED]: r(d.Jx.MINIMIZED)
            },
            a = Object.entries(i).sort((e, n) => {
                let [r, i] = e,
                    [a, s] = n;
                return s - i;
            })[0],
            s = parseInt(a[0], 10),
            o = isNaN(s) ? d.Jx.UNKNOWN : s;
        isNaN(s) && L.error('ScreenTypeAnalytics: Unknown most used screen type: '.concat(a), i);
        let l = A.c.getGameDisplayMode(null !== (e = this.game.name) && void 0 !== e ? e : this.game.id);
        A.c.setGameDisplayMode(null !== (n = this.game.name) && void 0 !== n ? n : this.game.id, o);
        let u = {
            screentype_unknown_duration: i[d.Jx.UNKNOWN],
            screentype_windowed_duration: i[d.Jx.WINDOWED],
            screentype_maximized_duration: i[d.Jx.MAXIMIZED],
            screentype_borderless_fullscreen_duration: i[d.Jx.BORDERLESS_FULLSCREEN],
            screentype_fullscreen_duration: i[d.Jx.FULLSCREEN],
            screentype_minimized_duration: i[d.Jx.MINIMIZED]
        };
        return {
            ...u,
            screentype_global_supported_duration: u.screentype_windowed_duration + u.screentype_maximized_duration + u.screentype_borderless_fullscreen_duration,
            screentype_global_unsupported_duration: u.screentype_fullscreen_duration,
            screentype_initial: d.Jx[this.game.fullscreenType],
            screentype_most_used: d.Jx[o],
            screentype_most_used_previous: null == l ? null : d.Jx[l],
            game_display_mode_is_adjustment_supported: T.ZP.GameDisplayModeIsGameSupported(this.game.name)
        };
    }
    destroy() {
        clearInterval(this.updateScreenInterval);
    }
    constructor(e) {
        R(this, 'game', void 0),
            R(this, 'counters', void 0),
            R(this, 'lastscreenType', void 0),
            R(this, 'updateScreenInterval', void 0),
            (this.game = e),
            (this.counters = {
                [d.Jx.UNKNOWN]: new l.G9(),
                [d.Jx.WINDOWED]: new l.G9(),
                [d.Jx.MAXIMIZED]: new l.G9(),
                [d.Jx.BORDERLESS_FULLSCREEN]: new l.G9(),
                [d.Jx.FULLSCREEN]: new l.G9(),
                [d.Jx.MINIMIZED]: new l.G9()
            }),
            (this.lastscreenType = void 0),
            this.update(),
            (this.updateScreenInterval = setInterval(() => this.update(), 10000));
    }
}
class k {
    static get debug() {
        return {
            gamesByPid: k.gamesByPid,
            gamesByName: k.gamesByName
        };
    }
    set successfullyShown(e) {
        this._successfullyShown = e;
    }
    getQunsName(e) {
        let n = null != e ? e : d.Ng.QUNS_UNKNOWN;
        return d.Ng[n];
    }
    buildOverlayMethodStats(e, n) {
        let r = this.overlayMethodStats,
            { enabled: i, legacyEnabled: a } = m.Z.getEnabledStatus(),
            s = {
                legacy_override: !0 === a,
                enabled: i,
                quns_mode: this.getQunsName(d.Ng.QUNS_UNKNOWN)
            };
        if (null != n) {
            let { quns: e } = T.ZP.GetWindowFullscreenTypeExtraByPid(n.pid, n.gameName);
            s.quns_mode = this.getQunsName(e);
        }
        if (null == e) {
            let e = null != n ? m.Z.getRenderMethod(n.pid) : null;
            return {
                original_method: null != e ? e : c.gl.Disabled,
                ...s
            };
        }
        if (null == r)
            return {
                original_method: e,
                ...s
            };
        let o = r.any_other_method;
        return {
            ...r,
            any_other_method: e !== o ? e : o,
            ...s
        };
    }
    static getGameName(e) {
        var n, r;
        return null !== (r = null !== (n = e.name) && void 0 !== n ? n : e.id) && void 0 !== r ? r : null;
    }
    static ignoreGame(e) {
        var n;
        return null !== (n = e.isLauncher) && void 0 !== n && n;
    }
    static create(e) {
        let n = k.getGameName(e);
        if (k.ignoreGame(e) || null == n) return null;
        let r = new k({ ...e });
        return (r.gameConcurrentGameCount = Object.values(k.gamesByPid).length), (k.gamesByPid[e.pid] = r), (k.gamesByName[n] = r), r;
    }
    static getByName(e) {
        var n;
        if (null == e) return null;
        let r =
            null ===
                (n = p.ZP.getRunningGames().find((n) => {
                    var r;
                    return (null === (r = n.name) || void 0 === r ? void 0 : r.toLowerCase()) === e.toLowerCase();
                })) || void 0 === n
                ? void 0
                : n.pid;
        return null != r ? k.gamesByPid[r] : null;
    }
    static getByPid(e) {
        return k.gamesByPid[e];
    }
    static async destroy(e) {
        let n = k.getGameName(e);
        if (k.ignoreGame(e) || null == n) return;
        let r = k.gamesByPid[e.pid];
        if (null != r) {
            r.screenAnalytics.destroy();
            let n = await r.getAnalytics();
            for (let e of (I.default.track(N.rMx.OVERLAY_USAGE_STATS, n.usage), n.notifications)) I.default.track(N.rMx.OVERLAY_USAGE_NOTIFICATION_STATS, e);
            L.verbose('OVERLAY_USAGE_STATS: '.concat(e.name), n), delete k.gamesByPid[e.pid];
        }
        delete k.gamesByName[n];
    }
    setOverlayMethod(e) {
        (this.overlayMethod = e),
            (this.overlayMethodStats = this.buildOverlayMethodStats(e, this.game)),
            L.verbose('setOverlayMethod', {
                method: e,
                game: this.game,
                overlayStatus: this.overlayStatus,
                overlayMethodStats: this.overlayMethodStats
            });
    }
    getSettingMethod() {
        return null == this.overlayMethod ? c.gl[c.gl.Disabled] : c.gl[this.overlayMethod];
    }
    async getAnalytics() {
        var e, n, r, i, a, s, o, l, u;
        let d = null !== (r = this.overlayMethod) && void 0 !== r ? r : c.gl.Disabled,
            f = {
                setting_is_enabled: E.Z.enabled,
                setting_method: this.getSettingMethod(),
                setting_display_user: v.Z.getDisplayUserMode(),
                setting_display_name: v.Z.getDisplayNameMode(),
                setting_avatar_size: v.Z.getAvatarSizeMode(),
                setting_notification_position: v.Z.getNotificationPositionMode(),
                setting_chat_notification: v.Z.getTextChatNotificationMode()
            },
            m = (0, p.b6)(this.game),
            g = (0, h.G8)(this.game),
            I = null !== (i = this.overlayMethodStats) && void 0 !== i ? i : this.buildOverlayMethodStats(d, this.game),
            T = null != I.any_other_method ? c.gl[I.any_other_method] : null;
        return {
            usage: {
                event_uuid: this.uuid,
                overlay_usage_stats_version: O,
                ...this.notificationAnalytics.getAnalytics(),
                ...this.widgetAnalytics.getAnalytics(),
                ...this.screenAnalytics.getAnalytics(),
                ...f,
                overlay_status_game_enabled: m.enabled,
                overlay_status_game_source: m.source,
                game_name: null !== (a = g.gameName) && void 0 !== a ? a : null,
                game_id: null !== (s = g.gameId) && void 0 !== s ? s : null,
                game_exe: null !== (o = g.exe) && void 0 !== o ? o : null,
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
                hardware_display_count: null !== (u = await (null === _.Z || void 0 === _.Z ? void 0 : null === (n = _.Z.hardware) || void 0 === n ? void 0 : null === (e = n.getDisplayCount) || void 0 === e ? void 0 : e.call(n))) && void 0 !== u ? u : null,
                message_ack_count: this.overlayMessageAckCount,
                message_created_count: this.overlayMessageCreateCount,
                desktop_message_ack_count: this.desktopMessageAckCount,
                desktop_message_created_count: this.desktopMessageCreateCount,
                desktop_focused_duration: this.desktopFocusedTimer.elapsed().asMilliseconds(),
                desktop_focused_change_count: this.desktopFocusChangedCount,
                rtc_connection_duration: this.rtcConnectionTimer.elapsed().asMilliseconds(),
                mute_toggled_count: this.muteToggledCount,
                overlay_successfully_shown: this._successfullyShown,
                ...I,
                original_method: c.gl[I.original_method],
                any_other_method: T
            },
            notifications: this.notificationAnalytics.getCounterAnalytics(this.uuid)
        };
    }
    setLocked(e) {
        e ? (this.unlockedTimer.stop(), ++this.uiLockedCount) : (this.unlockedTimer.start(), ++this.uiUnlockedCount);
    }
    static gameSetAllUnfocused() {
        for (let e of Object.values(k.gamesByPid)) e.gameFocusedTimer.stop();
    }
    static incrementConcurrentGameCount() {
        for (let e of Object.values(k.gamesByPid)) ++e.gameConcurrentGameCount;
    }
    gameSetFocused(e) {
        this.gameFocusedTimer.toggle(e), e && ++this.gameFocusChangedCount;
    }
    setSoundboardShown(e, n) {
        this.soundboardShownTimer.toggle(e), e && (++this.soundboardShownCount, n && ++this.soundboardKeepOpenCount);
    }
    static handleMuteToggled() {
        for (let e of Object.values(k.gamesByPid)) ++e.muteToggledCount;
    }
    static desktopSetFocused(e) {
        if (e !== k.desktopMainWindowHasFocus) {
            for (let n of Object.values(k.gamesByPid)) ++n.desktopFocusChangedCount, e && n.desktopFocusedTimer.toggle(e);
            k.desktopMainWindowHasFocus = e;
        }
    }
    static desktopMessageEvent(e) {
        for (let n of Object.values(k.gamesByPid))
            switch (e) {
                case 'ack':
                    ++n.desktopMessageAckCount;
                    break;
                case 'created':
                    ++n.desktopMessageCreateCount;
            }
    }
    static toggleRtcConnection(e) {
        for (let n of Object.values(k.gamesByPid)) n.rtcConnectionTimer.toggle(e);
    }
    constructor(e) {
        var n, r;
        R(this, 'game', void 0), R(this, 'uuid', void 0), R(this, 'overlayStatus', void 0), R(this, 'overlayMethod', void 0), R(this, 'overlayMethodStats', void 0), R(this, 'notificationAnalytics', void 0), R(this, 'widgetAnalytics', void 0), R(this, 'screenAnalytics', void 0), R(this, 'uiUnlockedCount', void 0), R(this, 'uiLockedCount', void 0), R(this, 'gameFocusChangedCount', void 0), R(this, 'gameConcurrentGameCount', void 0), R(this, 'overlayMessageAckCount', void 0), R(this, 'overlayMessageCreateCount', void 0), R(this, 'gameTimer', void 0), R(this, 'gameFocusedTimer', void 0), R(this, 'unlockedTimer', void 0), R(this, 'rtcConnectionTimer', void 0), R(this, 'desktopFocusedTimer', void 0), R(this, 'desktopFocusChangedCount', void 0), R(this, 'desktopMessageAckCount', void 0), R(this, 'desktopMessageCreateCount', void 0), R(this, 'soundboardShownTimer', void 0), R(this, 'soundboardShownCount', void 0), R(this, 'soundboardKeepOpenCount', void 0), R(this, 'muteToggledCount', void 0), R(this, '_successfullyShown', void 0), (this.game = e), (this.uuid = crypto.randomUUID()), (this.overlayMethod = null), (this.overlayMethodStats = null), (this.notificationAnalytics = new w()), (this.widgetAnalytics = new P()), (this.uiUnlockedCount = 0), (this.uiLockedCount = 0), (this.gameFocusChangedCount = 0), (this.gameConcurrentGameCount = 0), (this.overlayMessageAckCount = 0), (this.overlayMessageCreateCount = 0), (this.gameTimer = l.G9.startNew()), (this.gameFocusedTimer = new l.G9()), (this.unlockedTimer = new l.G9()), (this.rtcConnectionTimer = new l.G9()), (this.desktopFocusedTimer = new l.G9()), (this.desktopFocusChangedCount = 0), (this.desktopMessageAckCount = 0), (this.desktopMessageCreateCount = 0), (this.soundboardShownTimer = new l.G9()), (this.soundboardShownCount = 0), (this.soundboardKeepOpenCount = 0), (this.muteToggledCount = 0), (this._successfullyShown = !1), (this.screenAnalytics = new M(e)), (this.overlayStatus = (0, p.b6)(e)), (this.overlayMethod = null !== (r = null === (n = this.overlayStatus) || void 0 === n ? void 0 : n.overlayMethod) && void 0 !== r ? r : null), (this.overlayMethodStats = this.buildOverlayMethodStats(this.overlayMethod, e)), k.desktopMainWindowHasFocus && this.desktopFocusedTimer.start(), Q.hasConnection() && this.rtcConnectionTimer.start();
    }
}
function U(e) {
    for (let n of (L.verbose('handleRunningGamesChange', e), e.added)) {
        k.incrementConcurrentGameCount();
        let e = k.create(n);
        L.verbose('handleRunningGamesChange added', n, e);
    }
    for (let n of e.removed) k.destroy(n), L.verbose('handleRunningGamesChange removed', n);
}
function B(e) {
    if (e.pid === b.Js) return;
    let n = k.getByPid(e.pid);
    if ((L.verbose('OVERLAY_SET_INPUT_LOCKED', n), null == n)) {
        L.error('OVERLAY_SET_INPUT_LOCKED: Unable to find game', e, k.debug);
        return;
    }
    n.setLocked(e.locked);
}
function G(e) {
    var n;
    if ((L.verbose('OVERLAY_NOTIFICATION_EVENT', e), null == e.gameName && null == e.gameId)) return;
    let r = k.getByName(null !== (n = e.gameName) && void 0 !== n ? n : e.gameId);
    if (null == r) {
        L.error('OVERLAY_NOTIFICATION_EVENT: Game not found.', e, k.debug);
        return;
    }
    r.notificationAnalytics.increment(e.notificationType, e.action);
}
function Z(e) {
    var n;
    if ((L.verbose('OVERLAY_WIDGET_CHANGED', e), null == e.gameName && null == e.gameId)) return;
    let r = k.getByName(null !== (n = e.gameName) && void 0 !== n ? n : e.gameId);
    if (null == r) {
        L.error('OVERLAY_WIDGET_CHANGED: Game not found', e, k.debug);
        return;
    }
    let i = r.widgetAnalytics.getByWidget(e.widgetType);
    if (null != i) !i.initialized && ((i.initialized = !0), (i.pinned = e.pinned)), i.pinned !== e.pinned && ++i.pinnedToggledCount, (i.pinned = e.pinned), i.visibleDuration.toggle(e.visible);
}
function F(e) {
    if ((L.verbose('OVERLAY_FOCUSED', e), k.gameSetAllUnfocused(), null == e.pid || e.pid === b.Js)) return;
    let n = k.getByPid(e.pid);
    if (null == n) {
        L.error('OVERLAY_FOCUSED: Game not found', e, k.debug);
        return;
    }
    n.gameSetFocused(!0);
}
function V(e) {
    var n;
    if ((L.verbose('SOUNDBOARD_SET_OVERLAY_ENABLED', e), e.pid === b.Js)) return;
    let r = k.getByPid(e.pid);
    if (null == r) {
        L.error('SOUNDBOARD_SET_OVERLAY_ENABLED: Game not found', e, k.debug);
        return;
    }
    r.setSoundboardShown(e.enabled, !!e.enabled && null !== (n = e.keepOpen) && void 0 !== n && n);
}
function j(e) {
    var n;
    if ((L.verbose('OVERLAY_MESSAGE_EVENT_ACTION', e), null == e.gameName && null == e.gameId)) return;
    let r = k.getByName(null !== (n = e.gameName) && void 0 !== n ? n : e.gameId);
    if (null == r) {
        L.error('OVERLAY_MESSAGE_EVENT_ACTION: Game not found', e, k.debug);
        return;
    }
    switch (e.eventType) {
        case 'ack':
            ++r.overlayMessageAckCount;
            break;
        case 'create':
            ++r.overlayMessageCreateCount;
    }
}
function H(e) {
    L.verbose('MESSAGE_ACKED', e), k.desktopMessageEvent('ack');
}
function Y(e) {
    e.message.state === N.yb.SENDING && k.desktopMessageEvent('created');
}
function W(e) {
    let n = (0, S.Z)();
    null != n && n !== b.Js && (L.verbose('AUDIO_TOGGLE_SELF_MUTE', e), k.handleMuteToggled());
}
function K(e) {
    L.verbose('WINDOW_FOCUS', e);
    let n = (0, y.UU)();
    if (e.windowId !== n) {
        L.verbose('WINDOW_FOCUS: Not main window', {
            action: e,
            mainWindowId: n
        });
        return;
    }
    k.desktopSetFocused(e.focused);
}
function z(e) {
    if (e.pid === b.Js) return;
    let n = k.getByPid(e.pid);
    if (null == n) {
        L.error('OVERLAY_SUCCESSFULLY_SHOWN: Game not found', e, k.debug);
        return;
    }
    n.successfullyShown = !0;
}
function q(e) {
    let n = k.getByPid(e.pid);
    if (null == n) {
        L.error('OVERLAY_UPDATE_OVERLAY_METHOD: Game not found', e, k.debug);
        return;
    }
    if (e.overlayMethod !== c.gl.Disabled) L.verbose('OVERLAY_UPDATE_OVERLAY_METHOD', e), n.setOverlayMethod(e.overlayMethod);
}
R(k, 'gamesByPid', {}), R(k, 'gamesByName', {}), R(k, 'desktopMainWindowHasFocus', document.hasFocus());
class Q {
    static hasConnection() {
        return Q.connections.size > 0;
    }
    static handleRTCConnectionState(e) {
        var n;
        let r = (null !== (n = e.channelId) && void 0 !== n ? n : 'unknown') + e.context;
        switch (e.state) {
            case N.hes.RTC_CONNECTED:
                Q.connections.add(r);
                break;
            case N.hes.DISCONNECTED:
                Q.connections.delete(r);
        }
        let i = Q.hasConnection();
        Q.previousHasConnection !== i && (k.toggleRtcConnection(i), (Q.previousHasConnection = i));
    }
}
R(Q, 'connections', new Set()), R(Q, 'previousHasConnection', !1);
class X {
    static handleMessageAcked(e) {
        L.verbose('MESSAGE_ACKED', e);
        let n = g.Z.getGame();
        if (null == n) {
            L.error('Game not found.');
            return;
        }
        u.Z.dispatch({
            type: 'OVERLAY_MESSAGE_EVENT_ACTION',
            eventType: 'ack',
            gameName: n.name,
            gameId: n.id
        });
    }
    static handleMessageCreate(e) {
        if (e.message.state !== N.yb.SENDING) return;
        L.verbose('MESSAGE_CREATE', e, Error().stack);
        let n = g.Z.getGame();
        if (null == n) {
            L.error('Game not found.');
            return;
        }
        u.Z.dispatch({
            type: 'OVERLAY_MESSAGE_EVENT_ACTION',
            eventType: 'create',
            gameName: n.name,
            gameId: n.id
        });
    }
}
D &&
    !__OVERLAY__ &&
    setInterval(async () => {
        for (let e of Object.values(k.debug.gamesByName)) L.verbose('Game analytics', await e.getAnalytics());
    }, 5000);
class J extends f.Z {
    constructor(...e) {
        super(...e),
            R(
                this,
                'actions',
                __OVERLAY__
                    ? {
                          MESSAGE_ACKED: X.handleMessageAcked,
                          MESSAGE_CREATE: X.handleMessageCreate
                      }
                    : {
                          OVERLAY_FOCUSED: F,
                          OVERLAY_NOTIFICATION_EVENT: G,
                          OVERLAY_SET_INPUT_LOCKED: B,
                          OVERLAY_WIDGET_CHANGED: Z,
                          OVERLAY_MESSAGE_EVENT_ACTION: j,
                          RUNNING_GAMES_CHANGE: U,
                          SOUNDBOARD_SET_OVERLAY_ENABLED: V,
                          MESSAGE_ACKED: H,
                          MESSAGE_CREATE: Y,
                          WINDOW_FOCUS: K,
                          RTC_CONNECTION_STATE: Q.handleRTCConnectionState,
                          AUDIO_TOGGLE_SELF_MUTE: W,
                          OVERLAY_SUCCESSFULLY_SHOWN: z,
                          OVERLAY_UPDATE_OVERLAY_METHOD: q
                      }
            );
    }
}
n.Z = new J();
