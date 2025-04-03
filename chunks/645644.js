n.d(t, { Z: () => en }), n(47120), n(230036), n(411104);
var r = n(772848),
    i = n(259443),
    o = n(379649),
    a = n(570140),
    s = n(615287),
    l = n(593472),
    c = n(147913),
    u = n(579806),
    d = n(581567),
    f = n(594190),
    _ = n(486016),
    p = n(371651),
    h = n(624864),
    m = n(449224),
    g = n(808506),
    E = n(237997),
    b = n(626135),
    y = n(998502),
    v = n(145597),
    O = n(830917),
    I = n(554174),
    S = n(938038),
    T = n(981631),
    N = n(987650);
function A(e, t, n) {
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
function C(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            r.forEach(function (t) {
                A(e, t, n[t]);
            });
    }
    return e;
}
function R(e, t) {
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
function P(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : R(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let w = 3,
    D = !1,
    L = new i.Yd('OverlayUsageStatsManager');
D || (L.verbose = () => {});
class x {
    increment(e) {
        ++this.actions[e];
    }
    getAnalytics(e, t) {
        let n = this.actions[N.bv.Viewed],
            r = this.actions[N.bv.Clicked];
        return 0 === n && 0 === r
            ? null
            : {
                  event_uuid: t,
                  notification_type: e,
                  viewed_count: n,
                  clicked_count: r
              };
    }
    constructor() {
        A(this, 'actions', {
            [N.bv.Viewed]: 0,
            [N.bv.Clicked]: 0
        });
    }
}
class M {
    static makeEmptyGroupAnalytics() {
        return {
            [N.Vk.Nudge]: 0,
            [N.Vk.TextChat]: 0,
            [N.Vk.VoiceCall]: 0,
            [N.Vk.Activity]: 0,
            [N.Vk.Clips]: 0,
            [N.Vk.Other]: 0
        };
    }
    increment(e, t) {
        let n = this.groupCounters[t];
        if (null == n) return void L.error('NotificationCounter: Unknown notification action: '.concat(t));
        let r = (0, N.YK)(e);
        if (!(r in n)) return void L.error('NotificationCounter: Unknown notification action: '.concat(e));
        ++n[r], ++this.actionCounters[t];
        let i = this.counters[e];
        if (null == i) return void L.error('NotificationCounter: Unknown notification type: '.concat(e));
        i.increment(t);
    }
    getAnalytics() {
        let e = this.groupCounters[N.bv.Viewed],
            t = this.groupCounters[N.bv.Clicked];
        return {
            notices_viewed: this.actionCounters[N.bv.Viewed],
            notices_clicked: this.actionCounters[N.bv.Clicked],
            notice_nudge_viewed: e[N.Vk.Nudge],
            notice_text_chat_viewed: e[N.Vk.TextChat],
            notice_voice_call_viewed: e[N.Vk.VoiceCall],
            notice_activity_viewed: e[N.Vk.Activity],
            notice_clips_viewed: e[N.Vk.Clips],
            notice_other_viewed: e[N.Vk.Other],
            notice_nudge_clicked: t[N.Vk.Nudge],
            notice_text_chat_clicked: t[N.Vk.TextChat],
            notice_voice_call_clicked: t[N.Vk.VoiceCall],
            notice_activity_clicked: t[N.Vk.Activity],
            notice_clips_clicked: t[N.Vk.Clips],
            notice_other_clicked: t[N.Vk.Other]
        };
    }
    getCounterAnalytics(e) {
        return Object.entries(this.counters)
            .map((t) => {
                let [n, r] = t;
                return r.getAnalytics(n, e);
            })
            .filter((e) => null != e);
    }
    constructor() {
        A(this, 'actionCounters', {
            [N.bv.Viewed]: 0,
            [N.bv.Clicked]: 0
        }),
            A(this, 'groupCounters', {
                [N.bv.Viewed]: M.makeEmptyGroupAnalytics(),
                [N.bv.Clicked]: M.makeEmptyGroupAnalytics()
            }),
            A(this, 'counters', {
                [N.n0.NewsNudge]: new x(),
                [N.n0.WelcomeNudge]: new x(),
                [N.n0.OopWelcomeNudge]: new x(),
                [N.n0.TextChat]: new x(),
                [N.n0.ActivityUserJoin]: new x(),
                [N.n0.ActivityInvite]: new x(),
                [N.n0.IncomingCall]: new x(),
                [N.n0.GoLiveNudge]: new x(),
                [N.n0.GoLiveNonVoiceNudge]: new x(),
                [N.n0.OverlayCrashed]: new x(),
                [N.n0.ClipsReminderNotification]: new x(),
                [N.n0.ClipsNotification]: new x(),
                [N.n0.KeybindIndicatorsNotification]: new x(),
                [N.n0.SendGameInvitesNotification]: new x(),
                [N.n0.NowPlayingNotification]: new x()
            });
    }
}
class k {
    static makeEmptyAnalytics() {
        return {
            initialized: !1,
            pinnedToggledCount: 0,
            visibleDuration: new o.G9(),
            pinned: !1
        };
    }
    getByType(e) {
        return this.types[e];
    }
    getByWidget(e) {
        switch (e) {
            case T.Odu.VOICE:
                return this.getByType(0);
            case T.Odu.TEXT:
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
        A(this, 'types', {
            0: k.makeEmptyAnalytics(),
            1: k.makeEmptyAnalytics()
        });
    }
}
class j {
    update() {
        let e = this.game,
            t = y.ZP.GetWindowFullscreenTypeByPid(e.pid, e.name, e.fullscreenType);
        if (t !== this.lastscreenType) {
            if (!(t in this.counters)) return void L.error('ScreenTypeAnalytics: Unknown screen type: '.concat(t), t);
            this.counters[t].start(), null != this.lastscreenType && this.counters[this.lastscreenType].stop(), (this.lastscreenType = t);
        }
    }
    getAnalytics() {
        var e, t;
        let n = (e) => this.counters[e].elapsed().asMilliseconds(),
            r = {
                [l.Jx.UNKNOWN]: n(l.Jx.UNKNOWN),
                [l.Jx.WINDOWED]: n(l.Jx.WINDOWED),
                [l.Jx.MAXIMIZED]: n(l.Jx.MAXIMIZED),
                [l.Jx.BORDERLESS_FULLSCREEN]: n(l.Jx.BORDERLESS_FULLSCREEN),
                [l.Jx.FULLSCREEN]: n(l.Jx.FULLSCREEN),
                [l.Jx.MINIMIZED]: n(l.Jx.MINIMIZED)
            },
            i = Object.entries(r).sort((e, t) => {
                let [n, r] = e,
                    [i, o] = t;
                return o - r;
            })[0],
            o = parseInt(i[0], 10),
            a = isNaN(o) ? l.Jx.UNKNOWN : o;
        isNaN(o) && L.error('ScreenTypeAnalytics: Unknown most used screen type: '.concat(i), r);
        let s = S.c.getGameDisplayMode(null != (e = this.game.name) ? e : this.game.id);
        S.c.setGameDisplayMode(null != (t = this.game.name) ? t : this.game.id, a);
        let c = {
            screentype_unknown_duration: r[l.Jx.UNKNOWN],
            screentype_windowed_duration: r[l.Jx.WINDOWED],
            screentype_maximized_duration: r[l.Jx.MAXIMIZED],
            screentype_borderless_fullscreen_duration: r[l.Jx.BORDERLESS_FULLSCREEN],
            screentype_fullscreen_duration: r[l.Jx.FULLSCREEN],
            screentype_minimized_duration: r[l.Jx.MINIMIZED]
        };
        return P(C({}, c), {
            screentype_global_supported_duration: c.screentype_windowed_duration + c.screentype_maximized_duration + c.screentype_borderless_fullscreen_duration,
            screentype_global_unsupported_duration: c.screentype_fullscreen_duration,
            screentype_initial: l.Jx[this.game.fullscreenType],
            screentype_most_used: l.Jx[a],
            screentype_most_used_previous: null == s ? null : l.Jx[s],
            game_display_mode_is_adjustment_supported: y.ZP.GameDisplayModeIsGameSupported(this.game.name)
        });
    }
    destroy() {
        clearInterval(this.updateScreenInterval);
    }
    constructor(e) {
        A(this, 'game', void 0),
            A(this, 'counters', void 0),
            A(this, 'lastscreenType', void 0),
            A(this, 'updateScreenInterval', void 0),
            (this.game = e),
            (this.counters = {
                [l.Jx.UNKNOWN]: new o.G9(),
                [l.Jx.WINDOWED]: new o.G9(),
                [l.Jx.MAXIMIZED]: new o.G9(),
                [l.Jx.BORDERLESS_FULLSCREEN]: new o.G9(),
                [l.Jx.FULLSCREEN]: new o.G9(),
                [l.Jx.MINIMIZED]: new o.G9()
            }),
            (this.lastscreenType = void 0),
            this.update(),
            (this.updateScreenInterval = setInterval(() => this.update(), 10000));
    }
}
function U() {
    try {
        return crypto.randomUUID();
    } catch (e) {
        return L.error('OverlayUsageStatsManager: Failed to generate UUID', e), (0, r.Z)();
    }
}
class G {
    static get debug() {
        return {
            gamesByPid: G.gamesByPid,
            gamesByName: G.gamesByName
        };
    }
    set successfullyShown(e) {
        this._successfullyShown = e;
    }
    getQunsName(e) {
        let t = null != e ? e : l.Ng.QUNS_UNKNOWN;
        return l.Ng[t];
    }
    buildOverlayMethodStats(e, t) {
        let n = this.overlayMethodStats,
            { oopEnabled: r, legacyEnabled: i } = p.default.getPerGameEnabledStatus(t),
            o = {
                legacy_override: !0 === i,
                enabled: r || i,
                quns_mode: this.getQunsName(l.Ng.QUNS_UNKNOWN)
            };
        if (null != t) {
            let { quns: e } = y.ZP.GetWindowFullscreenTypeExtraByPid(t.pid, t.gameName);
            o.quns_mode = this.getQunsName(e);
        }
        if (null == e) {
            let e = null != t ? p.default.getRenderMethod(t.pid) : null;
            return C({ original_method: null != e ? e : s.gl.Disabled }, o);
        }
        if (null == n) return C({ original_method: e }, o);
        let a = n.any_other_method;
        return C(P(C({}, n), { any_other_method: e !== a ? e : a }), o);
    }
    static getGameName(e) {
        var t, n;
        return null != (n = null != (t = e.name) ? t : e.id) ? n : null;
    }
    static ignoreGame(e) {
        var t;
        return null != (t = e.isLauncher) && t;
    }
    static create(e) {
        let t = G.getGameName(e);
        if (G.ignoreGame(e) || null == t) return null;
        let n = new G(C({}, e));
        return (n.gameConcurrentGameCount = Object.values(G.gamesByPid).length), (G.gamesByPid[e.pid] = n), (G.gamesByName[t] = n), n;
    }
    static getByName(e) {
        var t;
        if (null == e) return null;
        let n =
            null ==
            (t = f.ZP.getRunningGames().find((t) => {
                var n;
                return (null == (n = t.name) ? void 0 : n.toLowerCase()) === e.toLowerCase();
            }))
                ? void 0
                : t.pid;
        return null != n ? G.gamesByPid[n] : null;
    }
    static getByPid(e) {
        return G.gamesByPid[e];
    }
    static async destroy(e) {
        let t = G.getGameName(e);
        if (G.ignoreGame(e) || null == t) return;
        let n = G.gamesByPid[e.pid];
        if (null != n) {
            n.screenAnalytics.destroy();
            let t = await n.getAnalytics();
            for (let e of (b.default.track(T.rMx.OVERLAY_USAGE_STATS, t.usage), t.notifications)) b.default.track(T.rMx.OVERLAY_USAGE_NOTIFICATION_STATS, e);
            L.verbose('OVERLAY_USAGE_STATS: '.concat(e.name), t), delete G.gamesByPid[e.pid];
        }
        delete G.gamesByName[t];
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
        return null == this.overlayMethod ? s.gl[s.gl.Disabled] : s.gl[this.overlayMethod];
    }
    async getAnalytics() {
        var e, t, n, r, i, o, a, l, c;
        let p = null != (n = this.overlayMethod) ? n : s.gl.Disabled,
            m = {
                setting_is_enabled: g.default.enabled,
                setting_method: this.getSettingMethod(),
                setting_display_user: E.default.getDisplayUserMode(),
                setting_display_name: E.default.getDisplayNameMode(),
                setting_avatar_size: E.default.getAvatarSizeMode(),
                setting_notification_position: E.default.getNotificationPositionMode(),
                setting_chat_notification: h.Z.isNotificationDisabled(_.OverlayNotificationDisabledSetting.TEXT_CHAT) ? 'DISABLED' : 'ENABLED'
            },
            b = (0, f.b6)(this.game),
            y = (0, d.G8)(this.game),
            v = null != (r = this.overlayMethodStats) ? r : this.buildOverlayMethodStats(p, this.game),
            O = null != v.any_other_method ? s.gl[v.any_other_method] : null,
            I = b.enabledLegacy || b.enabledOOP;
        return {
            usage: P(
                C(
                    P(
                        C(
                            {
                                event_uuid: this.uuid,
                                overlay_usage_stats_version: w
                            },
                            this.notificationAnalytics.getAnalytics(),
                            this.widgetAnalytics.getAnalytics(),
                            this.screenAnalytics.getAnalytics(),
                            m
                        ),
                        {
                            overlay_status_game_enabled: I,
                            overlay_status_game_source: b.source,
                            game_name: null != (i = y.gameName) ? i : null,
                            game_id: null != (o = y.gameId) ? o : null,
                            game_exe: null != (a = y.exe) ? a : null,
                            game_elevated: this.game.elevated,
                            game_is_launcher: null != (l = this.game.isLauncher) && l,
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
                            hardware_display_count: null != (c = await (null === u.Z || void 0 === u.Z || null == (t = u.Z.hardware) || null == (e = t.getDisplayCount) ? void 0 : e.call(t))) ? c : null,
                            message_ack_count: this.overlayMessageAckCount,
                            message_created_count: this.overlayMessageCreateCount,
                            desktop_message_ack_count: this.desktopMessageAckCount,
                            desktop_message_created_count: this.desktopMessageCreateCount,
                            desktop_focused_duration: this.desktopFocusedTimer.elapsed().asMilliseconds(),
                            desktop_focused_change_count: this.desktopFocusChangedCount,
                            rtc_connection_duration: this.rtcConnectionTimer.elapsed().asMilliseconds(),
                            mute_toggled_count: this.muteToggledCount,
                            overlay_successfully_shown: this._successfullyShown
                        }
                    ),
                    v
                ),
                {
                    original_method: s.gl[v.original_method],
                    any_other_method: O
                }
            ),
            notifications: this.notificationAnalytics.getCounterAnalytics(this.uuid)
        };
    }
    setLocked(e) {
        e ? (this.unlockedTimer.stop(), ++this.uiLockedCount) : (this.unlockedTimer.start(), ++this.uiUnlockedCount);
    }
    static gameSetAllUnfocused() {
        for (let e of Object.values(G.gamesByPid)) e.gameFocusedTimer.stop();
    }
    static incrementConcurrentGameCount() {
        for (let e of Object.values(G.gamesByPid)) ++e.gameConcurrentGameCount;
    }
    gameSetFocused(e) {
        this.gameFocusedTimer.toggle(e), e && ++this.gameFocusChangedCount;
    }
    setSoundboardShown(e, t) {
        this.soundboardShownTimer.toggle(e), e && (++this.soundboardShownCount, t && ++this.soundboardKeepOpenCount);
    }
    static handleMuteToggled() {
        for (let e of Object.values(G.gamesByPid)) ++e.muteToggledCount;
    }
    static desktopSetFocused(e) {
        if (e !== G.desktopMainWindowHasFocus) {
            for (let t of Object.values(G.gamesByPid)) ++t.desktopFocusChangedCount, e && t.desktopFocusedTimer.toggle(e);
            G.desktopMainWindowHasFocus = e;
        }
    }
    static desktopMessageEvent(e) {
        for (let t of Object.values(G.gamesByPid))
            switch (e) {
                case 'ack':
                    ++t.desktopMessageAckCount;
                    break;
                case 'created':
                    ++t.desktopMessageCreateCount;
            }
    }
    static toggleRtcConnection(e) {
        for (let t of Object.values(G.gamesByPid)) t.rtcConnectionTimer.toggle(e);
    }
    constructor(e) {
        var t, n;
        A(this, 'game', void 0), A(this, 'uuid', void 0), A(this, 'overlayStatus', void 0), A(this, 'overlayMethod', void 0), A(this, 'overlayMethodStats', void 0), A(this, 'notificationAnalytics', void 0), A(this, 'widgetAnalytics', void 0), A(this, 'screenAnalytics', void 0), A(this, 'uiUnlockedCount', void 0), A(this, 'uiLockedCount', void 0), A(this, 'gameFocusChangedCount', void 0), A(this, 'gameConcurrentGameCount', void 0), A(this, 'overlayMessageAckCount', void 0), A(this, 'overlayMessageCreateCount', void 0), A(this, 'gameTimer', void 0), A(this, 'gameFocusedTimer', void 0), A(this, 'unlockedTimer', void 0), A(this, 'rtcConnectionTimer', void 0), A(this, 'desktopFocusedTimer', void 0), A(this, 'desktopFocusChangedCount', void 0), A(this, 'desktopMessageAckCount', void 0), A(this, 'desktopMessageCreateCount', void 0), A(this, 'soundboardShownTimer', void 0), A(this, 'soundboardShownCount', void 0), A(this, 'soundboardKeepOpenCount', void 0), A(this, 'muteToggledCount', void 0), A(this, '_successfullyShown', void 0), (this.game = e), (this.uuid = U()), (this.overlayMethod = null), (this.overlayMethodStats = null), (this.notificationAnalytics = new M()), (this.widgetAnalytics = new k()), (this.uiUnlockedCount = 0), (this.uiLockedCount = 0), (this.gameFocusChangedCount = 0), (this.gameConcurrentGameCount = 0), (this.overlayMessageAckCount = 0), (this.overlayMessageCreateCount = 0), (this.gameTimer = o.G9.startNew()), (this.gameFocusedTimer = new o.G9()), (this.unlockedTimer = new o.G9()), (this.rtcConnectionTimer = new o.G9()), (this.desktopFocusedTimer = new o.G9()), (this.desktopFocusChangedCount = 0), (this.desktopMessageAckCount = 0), (this.desktopMessageCreateCount = 0), (this.soundboardShownTimer = new o.G9()), (this.soundboardShownCount = 0), (this.soundboardKeepOpenCount = 0), (this.muteToggledCount = 0), (this._successfullyShown = !1), (this.screenAnalytics = new j(e)), (this.overlayStatus = (0, f.b6)(e)), (this.overlayMethod = null != (n = null == (t = this.overlayStatus) ? void 0 : t.overlayMethod) ? n : null), (this.overlayMethodStats = this.buildOverlayMethodStats(this.overlayMethod, e)), G.desktopMainWindowHasFocus && this.desktopFocusedTimer.start(), $.hasConnection() && this.rtcConnectionTimer.start();
    }
}
function B(e) {
    for (let t of (L.verbose('handleRunningGamesChange', e), e.added)) {
        G.incrementConcurrentGameCount();
        let e = G.create(t);
        L.verbose('handleRunningGamesChange added', t, e);
    }
    for (let t of e.removed) G.destroy(t), L.verbose('handleRunningGamesChange removed', t);
}
function F(e) {
    if (e.pid === v.DEV_PID) return;
    let t = G.getByPid(e.pid);
    if ((L.verbose('OVERLAY_SET_INPUT_LOCKED', t), null == t)) return void L.error('OVERLAY_SET_INPUT_LOCKED: Unable to find game', e, G.debug);
    t.setLocked(e.locked);
}
function V(e) {
    var t;
    if ((L.verbose('OVERLAY_NOTIFICATION_EVENT', e), null == e.gameName && null == e.gameId)) return;
    let n = G.getByName(null != (t = e.gameName) ? t : e.gameId);
    if (null == n) return void L.error('OVERLAY_NOTIFICATION_EVENT: Game not found.', e, G.debug);
    n.notificationAnalytics.increment(e.notificationType, e.action);
}
function Z(e) {
    var t;
    if ((L.verbose('OVERLAY_WIDGET_CHANGED', e), null == e.gameName && null == e.gameId)) return;
    let n = G.getByName(null != (t = e.gameName) ? t : e.gameId);
    if (null == n) return void L.error('OVERLAY_WIDGET_CHANGED: Game not found', e, G.debug);
    let r = n.widgetAnalytics.getByWidget(e.widgetType);
    null != r && (r.initialized || ((r.initialized = !0), (r.pinned = e.pinned)), r.pinned !== e.pinned && ++r.pinnedToggledCount, (r.pinned = e.pinned), r.visibleDuration.toggle(e.visible));
}
function H(e) {
    if ((L.verbose('OVERLAY_FOCUSED', e), G.gameSetAllUnfocused(), null == e.pid || e.pid === v.DEV_PID)) return;
    let t = G.getByPid(e.pid);
    if (null == t) return void L.error('OVERLAY_FOCUSED: Game not found', e, G.debug);
    t.gameSetFocused(!0);
}
function W(e) {
    var t;
    if ((L.verbose('SOUNDBOARD_SET_OVERLAY_ENABLED', e), e.pid === v.DEV_PID)) return;
    let n = G.getByPid(e.pid);
    if (null == n) return void L.error('SOUNDBOARD_SET_OVERLAY_ENABLED: Game not found', e, G.debug);
    n.setSoundboardShown(e.enabled, !!e.enabled && null != (t = e.keepOpen) && t);
}
function Y(e) {
    var t;
    if ((L.verbose('OVERLAY_MESSAGE_EVENT_ACTION', e), null == e.gameName && null == e.gameId)) return;
    let n = G.getByName(null != (t = e.gameName) ? t : e.gameId);
    if (null == n) return void L.error('OVERLAY_MESSAGE_EVENT_ACTION: Game not found', e, G.debug);
    switch (e.eventType) {
        case 'ack':
            ++n.overlayMessageAckCount;
            break;
        case 'create':
            ++n.overlayMessageCreateCount;
    }
}
function K(e) {
    L.verbose('MESSAGE_ACKED', e), G.desktopMessageEvent('ack');
}
function z(e) {
    e.message.state === T.yb.SENDING && G.desktopMessageEvent('created');
}
function q(e) {
    let t = (0, I.Z)();
    null != t && t !== v.DEV_PID && (L.verbose('AUDIO_TOGGLE_SELF_MUTE', e), G.handleMuteToggled());
}
function Q(e) {
    L.verbose('WINDOW_FOCUS', e);
    let t = (0, O.UU)();
    if (e.windowId !== t)
        return void L.verbose('WINDOW_FOCUS: Not main window', {
            action: e,
            mainWindowId: t
        });
    G.desktopSetFocused(e.focused);
}
function X(e) {
    if (e.pid === v.DEV_PID) return;
    let t = G.getByPid(e.pid);
    if (null == t) return void L.error('OVERLAY_SUCCESSFULLY_SHOWN: Game not found', e, G.debug);
    t.successfullyShown = !0;
}
function J(e) {
    let t = G.getByPid(e.pid);
    if (null == t) return void L.error('OVERLAY_UPDATE_OVERLAY_METHOD: Game not found', e, G.debug);
    e.overlayMethod !== s.gl.Disabled && (L.verbose('OVERLAY_UPDATE_OVERLAY_METHOD', e), t.setOverlayMethod(e.overlayMethod));
}
A(G, 'gamesByPid', {}), A(G, 'gamesByName', {}), A(G, 'desktopMainWindowHasFocus', document.hasFocus());
class $ {
    static hasConnection() {
        return $.connections.size > 0;
    }
    static handleRTCConnectionState(e) {
        var t;
        let n = (null != (t = e.channelId) ? t : 'unknown') + e.context;
        switch (e.state) {
            case T.hes.RTC_CONNECTED:
                $.connections.add(n);
                break;
            case T.hes.DISCONNECTED:
                $.connections.delete(n);
        }
        let r = $.hasConnection();
        $.previousHasConnection !== r && (G.toggleRtcConnection(r), ($.previousHasConnection = r));
    }
}
A($, 'connections', new Set()), A($, 'previousHasConnection', !1);
class ee {
    static handleMessageAcked(e) {
        L.verbose('MESSAGE_ACKED', e);
        let t = m.Z.getGame();
        if (null == t) return void L.error('Game not found.');
        a.Z.dispatch({
            type: 'OVERLAY_MESSAGE_EVENT_ACTION',
            eventType: 'ack',
            gameName: t.name,
            gameId: t.id
        });
    }
    static handleMessageCreate(e) {
        if (e.message.state !== T.yb.SENDING) return;
        L.verbose('MESSAGE_CREATE', e, Error().stack);
        let t = m.Z.getGame();
        if (null == t) return void L.error('Game not found.');
        a.Z.dispatch({
            type: 'OVERLAY_MESSAGE_EVENT_ACTION',
            eventType: 'create',
            gameName: t.name,
            gameId: t.id
        });
    }
}
D &&
    !__OVERLAY__ &&
    setInterval(async () => {
        for (let e of Object.values(G.debug.gamesByName)) L.verbose('Game analytics', await e.getAnalytics());
    }, 5000);
class et extends c.Z {
    constructor(...e) {
        super(...e),
            A(
                this,
                'actions',
                __OVERLAY__
                    ? {
                          MESSAGE_ACKED: ee.handleMessageAcked,
                          MESSAGE_CREATE: ee.handleMessageCreate
                      }
                    : {
                          OVERLAY_FOCUSED: H,
                          OVERLAY_NOTIFICATION_EVENT: V,
                          OVERLAY_SET_INPUT_LOCKED: F,
                          OVERLAY_WIDGET_CHANGED: Z,
                          OVERLAY_MESSAGE_EVENT_ACTION: Y,
                          RUNNING_GAMES_CHANGE: B,
                          SOUNDBOARD_SET_OVERLAY_ENABLED: W,
                          MESSAGE_ACKED: K,
                          MESSAGE_CREATE: z,
                          WINDOW_FOCUS: Q,
                          RTC_CONNECTION_STATE: $.handleRTCConnectionState,
                          AUDIO_TOGGLE_SELF_MUTE: q,
                          OVERLAY_SUCCESSFULLY_SHOWN: X,
                          OVERLAY_UPDATE_OVERLAY_METHOD: J
                      }
            );
    }
}
let en = new et();
