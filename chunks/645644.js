n.d(t, { Z: () => J }), n(47120), n(230036), n(411104);
var r = n(259443),
    i = n(379649),
    o = n(570140),
    a = n(615287),
    s = n(593472),
    l = n(147913),
    c = n(579806),
    u = n(581567),
    d = n(594190),
    f = n(371651),
    p = n(449224),
    _ = n(808506),
    h = n(237997),
    m = n(626135),
    g = n(998502),
    E = n(145597),
    v = n(830917),
    b = n(554174),
    y = n(938038),
    O = n(981631),
    S = n(987650);
function I(e, t, n) {
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
function T(e) {
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
                I(e, t, n[t]);
            });
    }
    return e;
}
function N(e, t) {
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
function A(e, t) {
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
let C = 3,
    R = !1,
    P = new r.Yd('OverlayUsageStatsManager');
R || (P.verbose = () => {});
class w {
    increment(e) {
        ++this.actions[e];
    }
    getAnalytics(e, t) {
        let n = this.actions[S.bv.Viewed],
            r = this.actions[S.bv.Clicked];
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
        I(this, 'actions', {
            [S.bv.Viewed]: 0,
            [S.bv.Clicked]: 0
        });
    }
}
class D {
    static makeEmptyGroupAnalytics() {
        return {
            [S.Vk.Nudge]: 0,
            [S.Vk.TextChat]: 0,
            [S.Vk.VoiceCall]: 0,
            [S.Vk.Activity]: 0,
            [S.Vk.Clips]: 0,
            [S.Vk.Other]: 0
        };
    }
    increment(e, t) {
        let n = this.groupCounters[t];
        if (null == n) {
            P.error('NotificationCounter: Unknown notification action: '.concat(t));
            return;
        }
        let r = (0, S.YK)(e);
        if (!(r in n)) {
            P.error('NotificationCounter: Unknown notification action: '.concat(e));
            return;
        }
        ++n[r], ++this.actionCounters[t];
        let i = this.counters[e];
        if (null == i) {
            P.error('NotificationCounter: Unknown notification type: '.concat(e));
            return;
        }
        i.increment(t);
    }
    getAnalytics() {
        let e = this.groupCounters[S.bv.Viewed],
            t = this.groupCounters[S.bv.Clicked];
        return {
            notices_viewed: this.actionCounters[S.bv.Viewed],
            notices_clicked: this.actionCounters[S.bv.Clicked],
            notice_nudge_viewed: e[S.Vk.Nudge],
            notice_text_chat_viewed: e[S.Vk.TextChat],
            notice_voice_call_viewed: e[S.Vk.VoiceCall],
            notice_activity_viewed: e[S.Vk.Activity],
            notice_clips_viewed: e[S.Vk.Clips],
            notice_other_viewed: e[S.Vk.Other],
            notice_nudge_clicked: t[S.Vk.Nudge],
            notice_text_chat_clicked: t[S.Vk.TextChat],
            notice_voice_call_clicked: t[S.Vk.VoiceCall],
            notice_activity_clicked: t[S.Vk.Activity],
            notice_clips_clicked: t[S.Vk.Clips],
            notice_other_clicked: t[S.Vk.Other]
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
        I(this, 'actionCounters', {
            [S.bv.Viewed]: 0,
            [S.bv.Clicked]: 0
        }),
            I(this, 'groupCounters', {
                [S.bv.Viewed]: D.makeEmptyGroupAnalytics(),
                [S.bv.Clicked]: D.makeEmptyGroupAnalytics()
            }),
            I(this, 'counters', {
                [S.n0.NewsNudge]: new w(),
                [S.n0.WelcomeNudge]: new w(),
                [S.n0.OopWelcomeNudge]: new w(),
                [S.n0.TextChat]: new w(),
                [S.n0.ActivityUserJoin]: new w(),
                [S.n0.ActivityInvite]: new w(),
                [S.n0.IncomingCall]: new w(),
                [S.n0.GoLiveNudge]: new w(),
                [S.n0.GoLiveNonVoiceNudge]: new w(),
                [S.n0.OverlayCrashed]: new w(),
                [S.n0.ClipsReminderNotification]: new w(),
                [S.n0.ClipsNotification]: new w(),
                [S.n0.KeybindIndicatorsNotification]: new w(),
                [S.n0.SendGameInvitesNotification]: new w()
            });
    }
}
class x {
    static makeEmptyAnalytics() {
        return {
            initialized: !1,
            pinnedToggledCount: 0,
            visibleDuration: new i.G9(),
            pinned: !1
        };
    }
    getByType(e) {
        return this.types[e];
    }
    getByWidget(e) {
        switch (e) {
            case O.Odu.VOICE:
                return this.getByType(0);
            case O.Odu.TEXT:
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
        I(this, 'types', {
            0: x.makeEmptyAnalytics(),
            1: x.makeEmptyAnalytics()
        });
    }
}
class L {
    update() {
        let e = this.game,
            t = g.ZP.GetWindowFullscreenTypeByPid(e.pid, e.name, e.fullscreenType);
        if (t !== this.lastscreenType) {
            if (!(t in this.counters)) {
                P.error('ScreenTypeAnalytics: Unknown screen type: '.concat(t), t);
                return;
            }
            this.counters[t].start(), null != this.lastscreenType && this.counters[this.lastscreenType].stop(), (this.lastscreenType = t);
        }
    }
    getAnalytics() {
        var e, t;
        let n = (e) => this.counters[e].elapsed().asMilliseconds(),
            r = {
                [s.Jx.UNKNOWN]: n(s.Jx.UNKNOWN),
                [s.Jx.WINDOWED]: n(s.Jx.WINDOWED),
                [s.Jx.MAXIMIZED]: n(s.Jx.MAXIMIZED),
                [s.Jx.BORDERLESS_FULLSCREEN]: n(s.Jx.BORDERLESS_FULLSCREEN),
                [s.Jx.FULLSCREEN]: n(s.Jx.FULLSCREEN),
                [s.Jx.MINIMIZED]: n(s.Jx.MINIMIZED)
            },
            i = Object.entries(r).sort((e, t) => {
                let [n, r] = e,
                    [i, o] = t;
                return o - r;
            })[0],
            o = parseInt(i[0], 10),
            a = isNaN(o) ? s.Jx.UNKNOWN : o;
        isNaN(o) && P.error('ScreenTypeAnalytics: Unknown most used screen type: '.concat(i), r);
        let l = y.c.getGameDisplayMode(null !== (e = this.game.name) && void 0 !== e ? e : this.game.id);
        y.c.setGameDisplayMode(null !== (t = this.game.name) && void 0 !== t ? t : this.game.id, a);
        let c = {
            screentype_unknown_duration: r[s.Jx.UNKNOWN],
            screentype_windowed_duration: r[s.Jx.WINDOWED],
            screentype_maximized_duration: r[s.Jx.MAXIMIZED],
            screentype_borderless_fullscreen_duration: r[s.Jx.BORDERLESS_FULLSCREEN],
            screentype_fullscreen_duration: r[s.Jx.FULLSCREEN],
            screentype_minimized_duration: r[s.Jx.MINIMIZED]
        };
        return A(T({}, c), {
            screentype_global_supported_duration: c.screentype_windowed_duration + c.screentype_maximized_duration + c.screentype_borderless_fullscreen_duration,
            screentype_global_unsupported_duration: c.screentype_fullscreen_duration,
            screentype_initial: s.Jx[this.game.fullscreenType],
            screentype_most_used: s.Jx[a],
            screentype_most_used_previous: null == l ? null : s.Jx[l],
            game_display_mode_is_adjustment_supported: g.ZP.GameDisplayModeIsGameSupported(this.game.name)
        });
    }
    destroy() {
        clearInterval(this.updateScreenInterval);
    }
    constructor(e) {
        I(this, 'game', void 0),
            I(this, 'counters', void 0),
            I(this, 'lastscreenType', void 0),
            I(this, 'updateScreenInterval', void 0),
            (this.game = e),
            (this.counters = {
                [s.Jx.UNKNOWN]: new i.G9(),
                [s.Jx.WINDOWED]: new i.G9(),
                [s.Jx.MAXIMIZED]: new i.G9(),
                [s.Jx.BORDERLESS_FULLSCREEN]: new i.G9(),
                [s.Jx.FULLSCREEN]: new i.G9(),
                [s.Jx.MINIMIZED]: new i.G9()
            }),
            (this.lastscreenType = void 0),
            this.update(),
            (this.updateScreenInterval = setInterval(() => this.update(), 10000));
    }
}
class M {
    static get debug() {
        return {
            gamesByPid: M.gamesByPid,
            gamesByName: M.gamesByName
        };
    }
    set successfullyShown(e) {
        this._successfullyShown = e;
    }
    getQunsName(e) {
        let t = null != e ? e : s.Ng.QUNS_UNKNOWN;
        return s.Ng[t];
    }
    buildOverlayMethodStats(e, t) {
        let n = this.overlayMethodStats,
            { oopEnabled: r, legacyEnabled: i } = f.default.getPerGameEnabledStatus(t),
            o = {
                legacy_override: !0 === i,
                enabled: r || i,
                quns_mode: this.getQunsName(s.Ng.QUNS_UNKNOWN)
            };
        if (null != t) {
            let { quns: e } = g.ZP.GetWindowFullscreenTypeExtraByPid(t.pid, t.gameName);
            o.quns_mode = this.getQunsName(e);
        }
        if (null == e) {
            let e = null != t ? f.default.getRenderMethod(t.pid) : null;
            return T({ original_method: null != e ? e : a.gl.Disabled }, o);
        }
        if (null == n) return T({ original_method: e }, o);
        let l = n.any_other_method;
        return T(A(T({}, n), { any_other_method: e !== l ? e : l }), o);
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
        let t = M.getGameName(e);
        if (M.ignoreGame(e) || null == t) return null;
        let n = new M(T({}, e));
        return (n.gameConcurrentGameCount = Object.values(M.gamesByPid).length), (M.gamesByPid[e.pid] = n), (M.gamesByName[t] = n), n;
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
        return null != n ? M.gamesByPid[n] : null;
    }
    static getByPid(e) {
        return M.gamesByPid[e];
    }
    static async destroy(e) {
        let t = M.getGameName(e);
        if (M.ignoreGame(e) || null == t) return;
        let n = M.gamesByPid[e.pid];
        if (null != n) {
            n.screenAnalytics.destroy();
            let t = await n.getAnalytics();
            for (let e of (m.default.track(O.rMx.OVERLAY_USAGE_STATS, t.usage), t.notifications)) m.default.track(O.rMx.OVERLAY_USAGE_NOTIFICATION_STATS, e);
            P.verbose('OVERLAY_USAGE_STATS: '.concat(e.name), t), delete M.gamesByPid[e.pid];
        }
        delete M.gamesByName[t];
    }
    setOverlayMethod(e) {
        (this.overlayMethod = e),
            (this.overlayMethodStats = this.buildOverlayMethodStats(e, this.game)),
            P.verbose('setOverlayMethod', {
                method: e,
                game: this.game,
                overlayStatus: this.overlayStatus,
                overlayMethodStats: this.overlayMethodStats
            });
    }
    getSettingMethod() {
        return null == this.overlayMethod ? a.gl[a.gl.Disabled] : a.gl[this.overlayMethod];
    }
    async getAnalytics() {
        var e, t, n, r, i, o, s, l, f;
        let p = null !== (n = this.overlayMethod) && void 0 !== n ? n : a.gl.Disabled,
            m = {
                setting_is_enabled: _.Z.enabled,
                setting_method: this.getSettingMethod(),
                setting_display_user: h.Z.getDisplayUserMode(),
                setting_display_name: h.Z.getDisplayNameMode(),
                setting_avatar_size: h.Z.getAvatarSizeMode(),
                setting_notification_position: h.Z.getNotificationPositionMode(),
                setting_chat_notification: h.Z.getTextChatNotificationMode()
            },
            g = (0, d.b6)(this.game),
            E = (0, u.G8)(this.game),
            v = null !== (r = this.overlayMethodStats) && void 0 !== r ? r : this.buildOverlayMethodStats(p, this.game),
            b = null != v.any_other_method ? a.gl[v.any_other_method] : null,
            y = g.enabledLegacy || g.enabledOOP;
        return {
            usage: A(
                T(
                    A(
                        T(
                            {
                                event_uuid: this.uuid,
                                overlay_usage_stats_version: C
                            },
                            this.notificationAnalytics.getAnalytics(),
                            this.widgetAnalytics.getAnalytics(),
                            this.screenAnalytics.getAnalytics(),
                            m
                        ),
                        {
                            overlay_status_game_enabled: y,
                            overlay_status_game_source: g.source,
                            game_name: null !== (i = E.gameName) && void 0 !== i ? i : null,
                            game_id: null !== (o = E.gameId) && void 0 !== o ? o : null,
                            game_exe: null !== (s = E.exe) && void 0 !== s ? s : null,
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
                            hardware_display_count: null !== (f = await (null === c.Z || void 0 === c.Z ? void 0 : null === (t = c.Z.hardware) || void 0 === t ? void 0 : null === (e = t.getDisplayCount) || void 0 === e ? void 0 : e.call(t))) && void 0 !== f ? f : null,
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
                    original_method: a.gl[v.original_method],
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
        for (let e of Object.values(M.gamesByPid)) e.gameFocusedTimer.stop();
    }
    static incrementConcurrentGameCount() {
        for (let e of Object.values(M.gamesByPid)) ++e.gameConcurrentGameCount;
    }
    gameSetFocused(e) {
        this.gameFocusedTimer.toggle(e), e && ++this.gameFocusChangedCount;
    }
    setSoundboardShown(e, t) {
        this.soundboardShownTimer.toggle(e), e && (++this.soundboardShownCount, t && ++this.soundboardKeepOpenCount);
    }
    static handleMuteToggled() {
        for (let e of Object.values(M.gamesByPid)) ++e.muteToggledCount;
    }
    static desktopSetFocused(e) {
        if (e !== M.desktopMainWindowHasFocus) {
            for (let t of Object.values(M.gamesByPid)) ++t.desktopFocusChangedCount, e && t.desktopFocusedTimer.toggle(e);
            M.desktopMainWindowHasFocus = e;
        }
    }
    static desktopMessageEvent(e) {
        for (let t of Object.values(M.gamesByPid))
            switch (e) {
                case 'ack':
                    ++t.desktopMessageAckCount;
                    break;
                case 'created':
                    ++t.desktopMessageCreateCount;
            }
    }
    static toggleRtcConnection(e) {
        for (let t of Object.values(M.gamesByPid)) t.rtcConnectionTimer.toggle(e);
    }
    constructor(e) {
        var t, n;
        I(this, 'game', void 0), I(this, 'uuid', void 0), I(this, 'overlayStatus', void 0), I(this, 'overlayMethod', void 0), I(this, 'overlayMethodStats', void 0), I(this, 'notificationAnalytics', void 0), I(this, 'widgetAnalytics', void 0), I(this, 'screenAnalytics', void 0), I(this, 'uiUnlockedCount', void 0), I(this, 'uiLockedCount', void 0), I(this, 'gameFocusChangedCount', void 0), I(this, 'gameConcurrentGameCount', void 0), I(this, 'overlayMessageAckCount', void 0), I(this, 'overlayMessageCreateCount', void 0), I(this, 'gameTimer', void 0), I(this, 'gameFocusedTimer', void 0), I(this, 'unlockedTimer', void 0), I(this, 'rtcConnectionTimer', void 0), I(this, 'desktopFocusedTimer', void 0), I(this, 'desktopFocusChangedCount', void 0), I(this, 'desktopMessageAckCount', void 0), I(this, 'desktopMessageCreateCount', void 0), I(this, 'soundboardShownTimer', void 0), I(this, 'soundboardShownCount', void 0), I(this, 'soundboardKeepOpenCount', void 0), I(this, 'muteToggledCount', void 0), I(this, '_successfullyShown', void 0), (this.game = e), (this.uuid = crypto.randomUUID()), (this.overlayMethod = null), (this.overlayMethodStats = null), (this.notificationAnalytics = new D()), (this.widgetAnalytics = new x()), (this.uiUnlockedCount = 0), (this.uiLockedCount = 0), (this.gameFocusChangedCount = 0), (this.gameConcurrentGameCount = 0), (this.overlayMessageAckCount = 0), (this.overlayMessageCreateCount = 0), (this.gameTimer = i.G9.startNew()), (this.gameFocusedTimer = new i.G9()), (this.unlockedTimer = new i.G9()), (this.rtcConnectionTimer = new i.G9()), (this.desktopFocusedTimer = new i.G9()), (this.desktopFocusChangedCount = 0), (this.desktopMessageAckCount = 0), (this.desktopMessageCreateCount = 0), (this.soundboardShownTimer = new i.G9()), (this.soundboardShownCount = 0), (this.soundboardKeepOpenCount = 0), (this.muteToggledCount = 0), (this._successfullyShown = !1), (this.screenAnalytics = new L(e)), (this.overlayStatus = (0, d.b6)(e)), (this.overlayMethod = null !== (n = null === (t = this.overlayStatus) || void 0 === t ? void 0 : t.overlayMethod) && void 0 !== n ? n : null), (this.overlayMethodStats = this.buildOverlayMethodStats(this.overlayMethod, e)), M.desktopMainWindowHasFocus && this.desktopFocusedTimer.start(), q.hasConnection() && this.rtcConnectionTimer.start();
    }
}
function k(e) {
    for (let t of (P.verbose('handleRunningGamesChange', e), e.added)) {
        M.incrementConcurrentGameCount();
        let e = M.create(t);
        P.verbose('handleRunningGamesChange added', t, e);
    }
    for (let t of e.removed) M.destroy(t), P.verbose('handleRunningGamesChange removed', t);
}
function j(e) {
    if (e.pid === E.Js) return;
    let t = M.getByPid(e.pid);
    if ((P.verbose('OVERLAY_SET_INPUT_LOCKED', t), null == t)) {
        P.error('OVERLAY_SET_INPUT_LOCKED: Unable to find game', e, M.debug);
        return;
    }
    t.setLocked(e.locked);
}
function U(e) {
    var t;
    if ((P.verbose('OVERLAY_NOTIFICATION_EVENT', e), null == e.gameName && null == e.gameId)) return;
    let n = M.getByName(null !== (t = e.gameName) && void 0 !== t ? t : e.gameId);
    if (null == n) {
        P.error('OVERLAY_NOTIFICATION_EVENT: Game not found.', e, M.debug);
        return;
    }
    n.notificationAnalytics.increment(e.notificationType, e.action);
}
function G(e) {
    var t;
    if ((P.verbose('OVERLAY_WIDGET_CHANGED', e), null == e.gameName && null == e.gameId)) return;
    let n = M.getByName(null !== (t = e.gameName) && void 0 !== t ? t : e.gameId);
    if (null == n) {
        P.error('OVERLAY_WIDGET_CHANGED: Game not found', e, M.debug);
        return;
    }
    let r = n.widgetAnalytics.getByWidget(e.widgetType);
    null != r && (r.initialized || ((r.initialized = !0), (r.pinned = e.pinned)), r.pinned !== e.pinned && ++r.pinnedToggledCount, (r.pinned = e.pinned), r.visibleDuration.toggle(e.visible));
}
function B(e) {
    if ((P.verbose('OVERLAY_FOCUSED', e), M.gameSetAllUnfocused(), null == e.pid || e.pid === E.Js)) return;
    let t = M.getByPid(e.pid);
    if (null == t) {
        P.error('OVERLAY_FOCUSED: Game not found', e, M.debug);
        return;
    }
    t.gameSetFocused(!0);
}
function Z(e) {
    var t;
    if ((P.verbose('SOUNDBOARD_SET_OVERLAY_ENABLED', e), e.pid === E.Js)) return;
    let n = M.getByPid(e.pid);
    if (null == n) {
        P.error('SOUNDBOARD_SET_OVERLAY_ENABLED: Game not found', e, M.debug);
        return;
    }
    n.setSoundboardShown(e.enabled, !!e.enabled && null !== (t = e.keepOpen) && void 0 !== t && t);
}
function F(e) {
    var t;
    if ((P.verbose('OVERLAY_MESSAGE_EVENT_ACTION', e), null == e.gameName && null == e.gameId)) return;
    let n = M.getByName(null !== (t = e.gameName) && void 0 !== t ? t : e.gameId);
    if (null == n) {
        P.error('OVERLAY_MESSAGE_EVENT_ACTION: Game not found', e, M.debug);
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
function V(e) {
    P.verbose('MESSAGE_ACKED', e), M.desktopMessageEvent('ack');
}
function H(e) {
    e.message.state === O.yb.SENDING && M.desktopMessageEvent('created');
}
function W(e) {
    let t = (0, b.Z)();
    null != t && t !== E.Js && (P.verbose('AUDIO_TOGGLE_SELF_MUTE', e), M.handleMuteToggled());
}
function Y(e) {
    P.verbose('WINDOW_FOCUS', e);
    let t = (0, v.UU)();
    if (e.windowId !== t) {
        P.verbose('WINDOW_FOCUS: Not main window', {
            action: e,
            mainWindowId: t
        });
        return;
    }
    M.desktopSetFocused(e.focused);
}
function K(e) {
    if (e.pid === E.Js) return;
    let t = M.getByPid(e.pid);
    if (null == t) {
        P.error('OVERLAY_SUCCESSFULLY_SHOWN: Game not found', e, M.debug);
        return;
    }
    t.successfullyShown = !0;
}
function z(e) {
    let t = M.getByPid(e.pid);
    if (null == t) {
        P.error('OVERLAY_UPDATE_OVERLAY_METHOD: Game not found', e, M.debug);
        return;
    }
    e.overlayMethod !== a.gl.Disabled && (P.verbose('OVERLAY_UPDATE_OVERLAY_METHOD', e), t.setOverlayMethod(e.overlayMethod));
}
I(M, 'gamesByPid', {}), I(M, 'gamesByName', {}), I(M, 'desktopMainWindowHasFocus', document.hasFocus());
class q {
    static hasConnection() {
        return q.connections.size > 0;
    }
    static handleRTCConnectionState(e) {
        var t;
        let n = (null !== (t = e.channelId) && void 0 !== t ? t : 'unknown') + e.context;
        switch (e.state) {
            case O.hes.RTC_CONNECTED:
                q.connections.add(n);
                break;
            case O.hes.DISCONNECTED:
                q.connections.delete(n);
        }
        let r = q.hasConnection();
        q.previousHasConnection !== r && (M.toggleRtcConnection(r), (q.previousHasConnection = r));
    }
}
I(q, 'connections', new Set()), I(q, 'previousHasConnection', !1);
class Q {
    static handleMessageAcked(e) {
        P.verbose('MESSAGE_ACKED', e);
        let t = p.Z.getGame();
        if (null == t) {
            P.error('Game not found.');
            return;
        }
        o.Z.dispatch({
            type: 'OVERLAY_MESSAGE_EVENT_ACTION',
            eventType: 'ack',
            gameName: t.name,
            gameId: t.id
        });
    }
    static handleMessageCreate(e) {
        if (e.message.state !== O.yb.SENDING) return;
        P.verbose('MESSAGE_CREATE', e, Error().stack);
        let t = p.Z.getGame();
        if (null == t) {
            P.error('Game not found.');
            return;
        }
        o.Z.dispatch({
            type: 'OVERLAY_MESSAGE_EVENT_ACTION',
            eventType: 'create',
            gameName: t.name,
            gameId: t.id
        });
    }
}
R &&
    !__OVERLAY__ &&
    setInterval(async () => {
        for (let e of Object.values(M.debug.gamesByName)) P.verbose('Game analytics', await e.getAnalytics());
    }, 5000);
class X extends l.Z {
    constructor(...e) {
        super(...e),
            I(
                this,
                'actions',
                __OVERLAY__
                    ? {
                          MESSAGE_ACKED: Q.handleMessageAcked,
                          MESSAGE_CREATE: Q.handleMessageCreate
                      }
                    : {
                          OVERLAY_FOCUSED: B,
                          OVERLAY_NOTIFICATION_EVENT: U,
                          OVERLAY_SET_INPUT_LOCKED: j,
                          OVERLAY_WIDGET_CHANGED: G,
                          OVERLAY_MESSAGE_EVENT_ACTION: F,
                          RUNNING_GAMES_CHANGE: k,
                          SOUNDBOARD_SET_OVERLAY_ENABLED: Z,
                          MESSAGE_ACKED: V,
                          MESSAGE_CREATE: H,
                          WINDOW_FOCUS: Y,
                          RTC_CONNECTION_STATE: q.handleRTCConnectionState,
                          AUDIO_TOGGLE_SELF_MUTE: W,
                          OVERLAY_SUCCESSFULLY_SHOWN: K,
                          OVERLAY_UPDATE_OVERLAY_METHOD: z
                      }
            );
    }
}
let J = new X();
