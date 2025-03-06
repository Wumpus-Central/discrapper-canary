n.d(t, { Z: () => ee }), n(47120), n(230036), n(411104);
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
    _ = n(371651),
    p = n(449224),
    h = n(808506),
    g = n(237997),
    m = n(626135),
    E = n(998502),
    v = n(145597),
    b = n(830917),
    y = n(554174),
    O = n(938038),
    S = n(981631),
    I = n(987650);
function T(e, t, n) {
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
function N(e) {
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
                T(e, t, n[t]);
            });
    }
    return e;
}
function A(e, t) {
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
function C(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : A(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
let R = 3,
    P = !1,
    D = new i.Yd('OverlayUsageStatsManager');
P || (D.verbose = () => {});
class w {
    increment(e) {
        ++this.actions[e];
    }
    getAnalytics(e, t) {
        let n = this.actions[I.bv.Viewed],
            r = this.actions[I.bv.Clicked];
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
        T(this, 'actions', {
            [I.bv.Viewed]: 0,
            [I.bv.Clicked]: 0
        });
    }
}
class L {
    static makeEmptyGroupAnalytics() {
        return {
            [I.Vk.Nudge]: 0,
            [I.Vk.TextChat]: 0,
            [I.Vk.VoiceCall]: 0,
            [I.Vk.Activity]: 0,
            [I.Vk.Clips]: 0,
            [I.Vk.Other]: 0
        };
    }
    increment(e, t) {
        let n = this.groupCounters[t];
        if (null == n) {
            D.error('NotificationCounter: Unknown notification action: '.concat(t));
            return;
        }
        let r = (0, I.YK)(e);
        if (!(r in n)) {
            D.error('NotificationCounter: Unknown notification action: '.concat(e));
            return;
        }
        ++n[r], ++this.actionCounters[t];
        let i = this.counters[e];
        if (null == i) {
            D.error('NotificationCounter: Unknown notification type: '.concat(e));
            return;
        }
        i.increment(t);
    }
    getAnalytics() {
        let e = this.groupCounters[I.bv.Viewed],
            t = this.groupCounters[I.bv.Clicked];
        return {
            notices_viewed: this.actionCounters[I.bv.Viewed],
            notices_clicked: this.actionCounters[I.bv.Clicked],
            notice_nudge_viewed: e[I.Vk.Nudge],
            notice_text_chat_viewed: e[I.Vk.TextChat],
            notice_voice_call_viewed: e[I.Vk.VoiceCall],
            notice_activity_viewed: e[I.Vk.Activity],
            notice_clips_viewed: e[I.Vk.Clips],
            notice_other_viewed: e[I.Vk.Other],
            notice_nudge_clicked: t[I.Vk.Nudge],
            notice_text_chat_clicked: t[I.Vk.TextChat],
            notice_voice_call_clicked: t[I.Vk.VoiceCall],
            notice_activity_clicked: t[I.Vk.Activity],
            notice_clips_clicked: t[I.Vk.Clips],
            notice_other_clicked: t[I.Vk.Other]
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
        T(this, 'actionCounters', {
            [I.bv.Viewed]: 0,
            [I.bv.Clicked]: 0
        }),
            T(this, 'groupCounters', {
                [I.bv.Viewed]: L.makeEmptyGroupAnalytics(),
                [I.bv.Clicked]: L.makeEmptyGroupAnalytics()
            }),
            T(this, 'counters', {
                [I.n0.NewsNudge]: new w(),
                [I.n0.WelcomeNudge]: new w(),
                [I.n0.OopWelcomeNudge]: new w(),
                [I.n0.TextChat]: new w(),
                [I.n0.ActivityUserJoin]: new w(),
                [I.n0.ActivityInvite]: new w(),
                [I.n0.IncomingCall]: new w(),
                [I.n0.GoLiveNudge]: new w(),
                [I.n0.GoLiveNonVoiceNudge]: new w(),
                [I.n0.OverlayCrashed]: new w(),
                [I.n0.ClipsReminderNotification]: new w(),
                [I.n0.ClipsNotification]: new w(),
                [I.n0.KeybindIndicatorsNotification]: new w(),
                [I.n0.SendGameInvitesNotification]: new w(),
                [I.n0.NowPlayingNotification]: new w()
            });
    }
}
class x {
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
            case S.Odu.VOICE:
                return this.getByType(0);
            case S.Odu.TEXT:
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
        T(this, 'types', {
            0: x.makeEmptyAnalytics(),
            1: x.makeEmptyAnalytics()
        });
    }
}
class M {
    update() {
        let e = this.game,
            t = E.ZP.GetWindowFullscreenTypeByPid(e.pid, e.name, e.fullscreenType);
        if (t !== this.lastscreenType) {
            if (!(t in this.counters)) {
                D.error('ScreenTypeAnalytics: Unknown screen type: '.concat(t), t);
                return;
            }
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
        isNaN(o) && D.error('ScreenTypeAnalytics: Unknown most used screen type: '.concat(i), r);
        let s = O.c.getGameDisplayMode(null !== (e = this.game.name) && void 0 !== e ? e : this.game.id);
        O.c.setGameDisplayMode(null !== (t = this.game.name) && void 0 !== t ? t : this.game.id, a);
        let c = {
            screentype_unknown_duration: r[l.Jx.UNKNOWN],
            screentype_windowed_duration: r[l.Jx.WINDOWED],
            screentype_maximized_duration: r[l.Jx.MAXIMIZED],
            screentype_borderless_fullscreen_duration: r[l.Jx.BORDERLESS_FULLSCREEN],
            screentype_fullscreen_duration: r[l.Jx.FULLSCREEN],
            screentype_minimized_duration: r[l.Jx.MINIMIZED]
        };
        return C(N({}, c), {
            screentype_global_supported_duration: c.screentype_windowed_duration + c.screentype_maximized_duration + c.screentype_borderless_fullscreen_duration,
            screentype_global_unsupported_duration: c.screentype_fullscreen_duration,
            screentype_initial: l.Jx[this.game.fullscreenType],
            screentype_most_used: l.Jx[a],
            screentype_most_used_previous: null == s ? null : l.Jx[s],
            game_display_mode_is_adjustment_supported: E.ZP.GameDisplayModeIsGameSupported(this.game.name)
        });
    }
    destroy() {
        clearInterval(this.updateScreenInterval);
    }
    constructor(e) {
        T(this, 'game', void 0),
            T(this, 'counters', void 0),
            T(this, 'lastscreenType', void 0),
            T(this, 'updateScreenInterval', void 0),
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
function k() {
    try {
        return crypto.randomUUID();
    } catch (e) {
        return D.error('OverlayUsageStatsManager: Failed to generate UUID', e), (0, r.Z)();
    }
}
class j {
    static get debug() {
        return {
            gamesByPid: j.gamesByPid,
            gamesByName: j.gamesByName
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
            { oopEnabled: r, legacyEnabled: i } = _.default.getPerGameEnabledStatus(t),
            o = {
                legacy_override: !0 === i,
                enabled: r || i,
                quns_mode: this.getQunsName(l.Ng.QUNS_UNKNOWN)
            };
        if (null != t) {
            let { quns: e } = E.ZP.GetWindowFullscreenTypeExtraByPid(t.pid, t.gameName);
            o.quns_mode = this.getQunsName(e);
        }
        if (null == e) {
            let e = null != t ? _.default.getRenderMethod(t.pid) : null;
            return N({ original_method: null != e ? e : s.gl.Disabled }, o);
        }
        if (null == n) return N({ original_method: e }, o);
        let a = n.any_other_method;
        return N(C(N({}, n), { any_other_method: e !== a ? e : a }), o);
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
        let t = j.getGameName(e);
        if (j.ignoreGame(e) || null == t) return null;
        let n = new j(N({}, e));
        return (n.gameConcurrentGameCount = Object.values(j.gamesByPid).length), (j.gamesByPid[e.pid] = n), (j.gamesByName[t] = n), n;
    }
    static getByName(e) {
        var t;
        if (null == e) return null;
        let n =
            null ===
                (t = f.ZP.getRunningGames().find((t) => {
                    var n;
                    return (null === (n = t.name) || void 0 === n ? void 0 : n.toLowerCase()) === e.toLowerCase();
                })) || void 0 === t
                ? void 0
                : t.pid;
        return null != n ? j.gamesByPid[n] : null;
    }
    static getByPid(e) {
        return j.gamesByPid[e];
    }
    static async destroy(e) {
        let t = j.getGameName(e);
        if (j.ignoreGame(e) || null == t) return;
        let n = j.gamesByPid[e.pid];
        if (null != n) {
            n.screenAnalytics.destroy();
            let t = await n.getAnalytics();
            for (let e of (m.default.track(S.rMx.OVERLAY_USAGE_STATS, t.usage), t.notifications)) m.default.track(S.rMx.OVERLAY_USAGE_NOTIFICATION_STATS, e);
            D.verbose('OVERLAY_USAGE_STATS: '.concat(e.name), t), delete j.gamesByPid[e.pid];
        }
        delete j.gamesByName[t];
    }
    setOverlayMethod(e) {
        (this.overlayMethod = e),
            (this.overlayMethodStats = this.buildOverlayMethodStats(e, this.game)),
            D.verbose('setOverlayMethod', {
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
        let _ = null !== (n = this.overlayMethod) && void 0 !== n ? n : s.gl.Disabled,
            p = {
                setting_is_enabled: h.default.enabled,
                setting_method: this.getSettingMethod(),
                setting_display_user: g.default.getDisplayUserMode(),
                setting_display_name: g.default.getDisplayNameMode(),
                setting_avatar_size: g.default.getAvatarSizeMode(),
                setting_notification_position: g.default.getNotificationPositionMode(),
                setting_chat_notification: g.default.getTextChatNotificationMode()
            },
            m = (0, f.b6)(this.game),
            E = (0, d.G8)(this.game),
            v = null !== (r = this.overlayMethodStats) && void 0 !== r ? r : this.buildOverlayMethodStats(_, this.game),
            b = null != v.any_other_method ? s.gl[v.any_other_method] : null,
            y = m.enabledLegacy || m.enabledOOP;
        return {
            usage: C(
                N(
                    C(
                        N(
                            {
                                event_uuid: this.uuid,
                                overlay_usage_stats_version: R
                            },
                            this.notificationAnalytics.getAnalytics(),
                            this.widgetAnalytics.getAnalytics(),
                            this.screenAnalytics.getAnalytics(),
                            p
                        ),
                        {
                            overlay_status_game_enabled: y,
                            overlay_status_game_source: m.source,
                            game_name: null !== (i = E.gameName) && void 0 !== i ? i : null,
                            game_id: null !== (o = E.gameId) && void 0 !== o ? o : null,
                            game_exe: null !== (a = E.exe) && void 0 !== a ? a : null,
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
                            hardware_display_count: null !== (c = await (null === u.Z || void 0 === u.Z ? void 0 : null === (t = u.Z.hardware) || void 0 === t ? void 0 : null === (e = t.getDisplayCount) || void 0 === e ? void 0 : e.call(t))) && void 0 !== c ? c : null,
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
                    any_other_method: b
                }
            ),
            notifications: this.notificationAnalytics.getCounterAnalytics(this.uuid)
        };
    }
    setLocked(e) {
        e ? (this.unlockedTimer.stop(), ++this.uiLockedCount) : (this.unlockedTimer.start(), ++this.uiUnlockedCount);
    }
    static gameSetAllUnfocused() {
        for (let e of Object.values(j.gamesByPid)) e.gameFocusedTimer.stop();
    }
    static incrementConcurrentGameCount() {
        for (let e of Object.values(j.gamesByPid)) ++e.gameConcurrentGameCount;
    }
    gameSetFocused(e) {
        this.gameFocusedTimer.toggle(e), e && ++this.gameFocusChangedCount;
    }
    setSoundboardShown(e, t) {
        this.soundboardShownTimer.toggle(e), e && (++this.soundboardShownCount, t && ++this.soundboardKeepOpenCount);
    }
    static handleMuteToggled() {
        for (let e of Object.values(j.gamesByPid)) ++e.muteToggledCount;
    }
    static desktopSetFocused(e) {
        if (e !== j.desktopMainWindowHasFocus) {
            for (let t of Object.values(j.gamesByPid)) ++t.desktopFocusChangedCount, e && t.desktopFocusedTimer.toggle(e);
            j.desktopMainWindowHasFocus = e;
        }
    }
    static desktopMessageEvent(e) {
        for (let t of Object.values(j.gamesByPid))
            switch (e) {
                case 'ack':
                    ++t.desktopMessageAckCount;
                    break;
                case 'created':
                    ++t.desktopMessageCreateCount;
            }
    }
    static toggleRtcConnection(e) {
        for (let t of Object.values(j.gamesByPid)) t.rtcConnectionTimer.toggle(e);
    }
    constructor(e) {
        var t, n;
        T(this, 'game', void 0), T(this, 'uuid', void 0), T(this, 'overlayStatus', void 0), T(this, 'overlayMethod', void 0), T(this, 'overlayMethodStats', void 0), T(this, 'notificationAnalytics', void 0), T(this, 'widgetAnalytics', void 0), T(this, 'screenAnalytics', void 0), T(this, 'uiUnlockedCount', void 0), T(this, 'uiLockedCount', void 0), T(this, 'gameFocusChangedCount', void 0), T(this, 'gameConcurrentGameCount', void 0), T(this, 'overlayMessageAckCount', void 0), T(this, 'overlayMessageCreateCount', void 0), T(this, 'gameTimer', void 0), T(this, 'gameFocusedTimer', void 0), T(this, 'unlockedTimer', void 0), T(this, 'rtcConnectionTimer', void 0), T(this, 'desktopFocusedTimer', void 0), T(this, 'desktopFocusChangedCount', void 0), T(this, 'desktopMessageAckCount', void 0), T(this, 'desktopMessageCreateCount', void 0), T(this, 'soundboardShownTimer', void 0), T(this, 'soundboardShownCount', void 0), T(this, 'soundboardKeepOpenCount', void 0), T(this, 'muteToggledCount', void 0), T(this, '_successfullyShown', void 0), (this.game = e), (this.uuid = k()), (this.overlayMethod = null), (this.overlayMethodStats = null), (this.notificationAnalytics = new L()), (this.widgetAnalytics = new x()), (this.uiUnlockedCount = 0), (this.uiLockedCount = 0), (this.gameFocusChangedCount = 0), (this.gameConcurrentGameCount = 0), (this.overlayMessageAckCount = 0), (this.overlayMessageCreateCount = 0), (this.gameTimer = o.G9.startNew()), (this.gameFocusedTimer = new o.G9()), (this.unlockedTimer = new o.G9()), (this.rtcConnectionTimer = new o.G9()), (this.desktopFocusedTimer = new o.G9()), (this.desktopFocusChangedCount = 0), (this.desktopMessageAckCount = 0), (this.desktopMessageCreateCount = 0), (this.soundboardShownTimer = new o.G9()), (this.soundboardShownCount = 0), (this.soundboardKeepOpenCount = 0), (this.muteToggledCount = 0), (this._successfullyShown = !1), (this.screenAnalytics = new M(e)), (this.overlayStatus = (0, f.b6)(e)), (this.overlayMethod = null !== (n = null === (t = this.overlayStatus) || void 0 === t ? void 0 : t.overlayMethod) && void 0 !== n ? n : null), (this.overlayMethodStats = this.buildOverlayMethodStats(this.overlayMethod, e)), j.desktopMainWindowHasFocus && this.desktopFocusedTimer.start(), X.hasConnection() && this.rtcConnectionTimer.start();
    }
}
function U(e) {
    for (let t of (D.verbose('handleRunningGamesChange', e), e.added)) {
        j.incrementConcurrentGameCount();
        let e = j.create(t);
        D.verbose('handleRunningGamesChange added', t, e);
    }
    for (let t of e.removed) j.destroy(t), D.verbose('handleRunningGamesChange removed', t);
}
function G(e) {
    if (e.pid === v.DEV_PID) return;
    let t = j.getByPid(e.pid);
    if ((D.verbose('OVERLAY_SET_INPUT_LOCKED', t), null == t)) {
        D.error('OVERLAY_SET_INPUT_LOCKED: Unable to find game', e, j.debug);
        return;
    }
    t.setLocked(e.locked);
}
function B(e) {
    var t;
    if ((D.verbose('OVERLAY_NOTIFICATION_EVENT', e), null == e.gameName && null == e.gameId)) return;
    let n = j.getByName(null !== (t = e.gameName) && void 0 !== t ? t : e.gameId);
    if (null == n) {
        D.error('OVERLAY_NOTIFICATION_EVENT: Game not found.', e, j.debug);
        return;
    }
    n.notificationAnalytics.increment(e.notificationType, e.action);
}
function V(e) {
    var t;
    if ((D.verbose('OVERLAY_WIDGET_CHANGED', e), null == e.gameName && null == e.gameId)) return;
    let n = j.getByName(null !== (t = e.gameName) && void 0 !== t ? t : e.gameId);
    if (null == n) {
        D.error('OVERLAY_WIDGET_CHANGED: Game not found', e, j.debug);
        return;
    }
    let r = n.widgetAnalytics.getByWidget(e.widgetType);
    null != r && (r.initialized || ((r.initialized = !0), (r.pinned = e.pinned)), r.pinned !== e.pinned && ++r.pinnedToggledCount, (r.pinned = e.pinned), r.visibleDuration.toggle(e.visible));
}
function F(e) {
    if ((D.verbose('OVERLAY_FOCUSED', e), j.gameSetAllUnfocused(), null == e.pid || e.pid === v.DEV_PID)) return;
    let t = j.getByPid(e.pid);
    if (null == t) {
        D.error('OVERLAY_FOCUSED: Game not found', e, j.debug);
        return;
    }
    t.gameSetFocused(!0);
}
function Z(e) {
    var t;
    if ((D.verbose('SOUNDBOARD_SET_OVERLAY_ENABLED', e), e.pid === v.DEV_PID)) return;
    let n = j.getByPid(e.pid);
    if (null == n) {
        D.error('SOUNDBOARD_SET_OVERLAY_ENABLED: Game not found', e, j.debug);
        return;
    }
    n.setSoundboardShown(e.enabled, !!e.enabled && null !== (t = e.keepOpen) && void 0 !== t && t);
}
function H(e) {
    var t;
    if ((D.verbose('OVERLAY_MESSAGE_EVENT_ACTION', e), null == e.gameName && null == e.gameId)) return;
    let n = j.getByName(null !== (t = e.gameName) && void 0 !== t ? t : e.gameId);
    if (null == n) {
        D.error('OVERLAY_MESSAGE_EVENT_ACTION: Game not found', e, j.debug);
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
function W(e) {
    D.verbose('MESSAGE_ACKED', e), j.desktopMessageEvent('ack');
}
function Y(e) {
    e.message.state === S.yb.SENDING && j.desktopMessageEvent('created');
}
function K(e) {
    let t = (0, y.Z)();
    null != t && t !== v.DEV_PID && (D.verbose('AUDIO_TOGGLE_SELF_MUTE', e), j.handleMuteToggled());
}
function z(e) {
    D.verbose('WINDOW_FOCUS', e);
    let t = (0, b.UU)();
    if (e.windowId !== t) {
        D.verbose('WINDOW_FOCUS: Not main window', {
            action: e,
            mainWindowId: t
        });
        return;
    }
    j.desktopSetFocused(e.focused);
}
function q(e) {
    if (e.pid === v.DEV_PID) return;
    let t = j.getByPid(e.pid);
    if (null == t) {
        D.error('OVERLAY_SUCCESSFULLY_SHOWN: Game not found', e, j.debug);
        return;
    }
    t.successfullyShown = !0;
}
function Q(e) {
    let t = j.getByPid(e.pid);
    if (null == t) {
        D.error('OVERLAY_UPDATE_OVERLAY_METHOD: Game not found', e, j.debug);
        return;
    }
    e.overlayMethod !== s.gl.Disabled && (D.verbose('OVERLAY_UPDATE_OVERLAY_METHOD', e), t.setOverlayMethod(e.overlayMethod));
}
T(j, 'gamesByPid', {}), T(j, 'gamesByName', {}), T(j, 'desktopMainWindowHasFocus', document.hasFocus());
class X {
    static hasConnection() {
        return X.connections.size > 0;
    }
    static handleRTCConnectionState(e) {
        var t;
        let n = (null !== (t = e.channelId) && void 0 !== t ? t : 'unknown') + e.context;
        switch (e.state) {
            case S.hes.RTC_CONNECTED:
                X.connections.add(n);
                break;
            case S.hes.DISCONNECTED:
                X.connections.delete(n);
        }
        let r = X.hasConnection();
        X.previousHasConnection !== r && (j.toggleRtcConnection(r), (X.previousHasConnection = r));
    }
}
T(X, 'connections', new Set()), T(X, 'previousHasConnection', !1);
class J {
    static handleMessageAcked(e) {
        D.verbose('MESSAGE_ACKED', e);
        let t = p.Z.getGame();
        if (null == t) {
            D.error('Game not found.');
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
        if (e.message.state !== S.yb.SENDING) return;
        D.verbose('MESSAGE_CREATE', e, Error().stack);
        let t = p.Z.getGame();
        if (null == t) {
            D.error('Game not found.');
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
P &&
    !__OVERLAY__ &&
    setInterval(async () => {
        for (let e of Object.values(j.debug.gamesByName)) D.verbose('Game analytics', await e.getAnalytics());
    }, 5000);
class $ extends c.Z {
    constructor(...e) {
        super(...e),
            T(
                this,
                'actions',
                __OVERLAY__
                    ? {
                          MESSAGE_ACKED: J.handleMessageAcked,
                          MESSAGE_CREATE: J.handleMessageCreate
                      }
                    : {
                          OVERLAY_FOCUSED: F,
                          OVERLAY_NOTIFICATION_EVENT: B,
                          OVERLAY_SET_INPUT_LOCKED: G,
                          OVERLAY_WIDGET_CHANGED: V,
                          OVERLAY_MESSAGE_EVENT_ACTION: H,
                          RUNNING_GAMES_CHANGE: U,
                          SOUNDBOARD_SET_OVERLAY_ENABLED: Z,
                          MESSAGE_ACKED: W,
                          MESSAGE_CREATE: Y,
                          WINDOW_FOCUS: z,
                          RTC_CONNECTION_STATE: X.handleRTCConnectionState,
                          AUDIO_TOGGLE_SELF_MUTE: K,
                          OVERLAY_SUCCESSFULLY_SHOWN: q,
                          OVERLAY_UPDATE_OVERLAY_METHOD: Q
                      }
            );
    }
}
let ee = new $();
