n.d(t, { Z: () => er }), n(388685), n(415506), n(642613);
var r = n(772848),
    i = n(379649),
    a = n(570140),
    o = n(593472),
    s = n(147913),
    l = n(579806),
    c = n(710845),
    u = n(581567),
    d = n(594190),
    f = n(837268),
    _ = n(371651),
    p = n(624864),
    h = n(449224),
    m = n(808506),
    g = n(237997),
    E = n(626135),
    b = n(998502),
    y = n(145597),
    O = n(830917),
    v = n(554174),
    I = n(938038),
    T = n(981631),
    S = n(987650);
function A(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0,
              })
            : (e[t] = n),
        e
    );
}
function C(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            r = Object.keys(n);
        "function" == typeof Object.getOwnPropertySymbols &&
            (r = r.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                }),
            )),
            r.forEach(function (t) {
                A(e, t, n[t]);
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
function R(e, t) {
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
let P = 6,
    D = !1,
    w = new c.Z("OverlayUsageStatsManager");
D || (w.verbose = () => {});
class L {
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
                  clicked_count: r,
              };
    }
    constructor() {
        A(this, "actions", {
            [S.bv.Viewed]: 0,
            [S.bv.Clicked]: 0,
        });
    }
}
class x {
    static makeEmptyGroupAnalytics() {
        return {
            [S.Vk.Nudge]: 0,
            [S.Vk.TextChat]: 0,
            [S.Vk.VoiceCall]: 0,
            [S.Vk.Activity]: 0,
            [S.Vk.Clips]: 0,
            [S.Vk.Other]: 0,
        };
    }
    static makeCounters() {
        let e = {},
            t = Object.values(S.n0);
        for (let n of t) e[n] = new L();
        if (Object.keys(e).length !== t.length) throw Error("NotificationAnalytics: Failed to make counters");
        return e;
    }
    increment(e, t) {
        let n = this.groupCounters[t];
        if (null == n) return void w.error("NotificationCounter: Unknown notification action: ".concat(t));
        let r = (0, S.YK)(e);
        if (!(r in n)) return void w.error("NotificationCounter: Unknown notification action: ".concat(e));
        ++n[r], ++this.actionCounters[t];
        let i = this.counters[e];
        if (null == i) return void w.error("NotificationCounter: Unknown notification type: ".concat(e));
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
            notice_other_clicked: t[S.Vk.Other],
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
        A(this, "actionCounters", {
            [S.bv.Viewed]: 0,
            [S.bv.Clicked]: 0,
        }),
            A(this, "groupCounters", {
                [S.bv.Viewed]: x.makeEmptyGroupAnalytics(),
                [S.bv.Clicked]: x.makeEmptyGroupAnalytics(),
            }),
            A(this, "counters", x.makeCounters());
    }
}
class M {
    static makeEmptyAnalytics() {
        return {
            initialized: !1,
            pinnedToggledCount: 0,
            visibleDuration: new i.G9(),
            pinned: !1,
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
            widget_text_pinned: t.pinned,
        };
    }
    constructor() {
        A(this, "types", {
            0: M.makeEmptyAnalytics(),
            1: M.makeEmptyAnalytics(),
        });
    }
}
class k {
    update() {
        let e = this.game,
            t = b.ZP.GetWindowFullscreenTypeByPid(e.pid, e.name, e.fullscreenType);
        if (t !== this.lastscreenType) {
            if (!(t in this.counters)) {
                let n = _.default.getTrackedGameByPid(e.pid);
                w.error("ScreenTypeAnalytics: Unknown screen type for ".concat(this.game.name, ": ").concat(t), {
                    rawGame: this.game,
                    overlayTrackedGame: n,
                });
                return;
            }
            this.counters[t].start(),
                null != this.lastscreenType && this.counters[this.lastscreenType].stop(),
                (this.lastscreenType = t);
        }
    }
    getAnalytics() {
        var e, t;
        let n = (e) => this.counters[e].elapsed().asMilliseconds(),
            r = {
                [o.Jx.UNKNOWN]: n(o.Jx.UNKNOWN),
                [o.Jx.WINDOWED]: n(o.Jx.WINDOWED),
                [o.Jx.MAXIMIZED]: n(o.Jx.MAXIMIZED),
                [o.Jx.BORDERLESS_FULLSCREEN]: n(o.Jx.BORDERLESS_FULLSCREEN),
                [o.Jx.FULLSCREEN]: n(o.Jx.FULLSCREEN),
                [o.Jx.MINIMIZED]: n(o.Jx.MINIMIZED),
            },
            i = Object.entries(r).sort((e, t) => {
                let [n, r] = e,
                    [i, a] = t;
                return a - r;
            })[0],
            a = parseInt(i[0], 10),
            s = isNaN(a) ? o.Jx.UNKNOWN : a;
        isNaN(a) && w.error("ScreenTypeAnalytics: Unknown most used screen type: ".concat(i), r);
        let l = I.c.getGameDisplayMode(null != (e = this.game.name) ? e : this.game.id);
        I.c.setGameDisplayMode(null != (t = this.game.name) ? t : this.game.id, s);
        let c = {
            screentype_unknown_duration: r[o.Jx.UNKNOWN],
            screentype_windowed_duration: r[o.Jx.WINDOWED],
            screentype_maximized_duration: r[o.Jx.MAXIMIZED],
            screentype_borderless_fullscreen_duration: r[o.Jx.BORDERLESS_FULLSCREEN],
            screentype_fullscreen_duration: r[o.Jx.FULLSCREEN],
            screentype_minimized_duration: r[o.Jx.MINIMIZED],
        };
        return R(C({}, c), {
            screentype_global_supported_duration:
                c.screentype_windowed_duration +
                c.screentype_maximized_duration +
                c.screentype_borderless_fullscreen_duration,
            screentype_global_unsupported_duration: c.screentype_fullscreen_duration,
            screentype_initial: o.Jx[this.game.fullscreenType],
            screentype_most_used: o.Jx[s],
            screentype_most_used_previous: null == l ? null : o.Jx[l],
            game_display_mode_is_adjustment_supported: b.ZP.GameDisplayModeIsGameSupported(this.game.name),
        });
    }
    destroy() {
        clearInterval(this.updateScreenInterval);
    }
    constructor(e) {
        A(this, "game", void 0),
            A(this, "counters", void 0),
            A(this, "lastscreenType", void 0),
            A(this, "updateScreenInterval", void 0),
            (this.game = e),
            (this.counters = {
                [o.Jx.UNKNOWN]: new i.G9(),
                [o.Jx.WINDOWED]: new i.G9(),
                [o.Jx.MAXIMIZED]: new i.G9(),
                [o.Jx.BORDERLESS_FULLSCREEN]: new i.G9(),
                [o.Jx.FULLSCREEN]: new i.G9(),
                [o.Jx.MINIMIZED]: new i.G9(),
            }),
            (this.lastscreenType = void 0),
            this.update(),
            (this.updateScreenInterval = setInterval(() => this.update(), 10000));
    }
}
function j() {
    try {
        return crypto.randomUUID();
    } catch (e) {
        return w.error("OverlayUsageStatsManager: Failed to generate UUID", e), (0, r.Z)();
    }
}
class U {
    static get debug() {
        return {
            gamesByPid: U.gamesByPid,
            gamesByName: U.gamesByName,
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
            { oopEnabled: r, legacyEnabled: i } = _.default.getPerGameEnabledStatus(t),
            a = {
                legacy_override: !0 === i,
                enabled: r || i,
                quns_mode: this.getQunsName(o.Ng.QUNS_UNKNOWN),
                current_method: e,
            };
        if (null != t) {
            let { quns: e } = b.ZP.GetWindowFullscreenTypeExtraByPid(t.pid, t.gameName);
            a.quns_mode = this.getQunsName(e);
        }
        if (null == e) {
            let e = null != t ? _.default.getRenderMethod(t.pid) : null;
            return C({ original_method: null != e ? e : f.gl.Disabled }, a);
        }
        if (null == n) return C({ original_method: e }, a);
        let s = e !== n.original_method ? e : void 0;
        return C(R(C({}, n), { any_other_method: null != s ? s : n.any_other_method }), a);
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
        let t = U.getGameName(e);
        if (U.ignoreGame(e) || null == t) return null;
        let n = new U(C({}, e));
        return (
            (n.gameConcurrentGameCount = Object.values(U.gamesByPid).length),
            (U.gamesByPid[e.pid] = n),
            (U.gamesByName[t] = n),
            n
        );
    }
    static getByName(e) {
        var t;
        if (null == e) return null;
        let n =
            null ==
            (t = d.ZP.getRunningGames().find((t) => {
                var n;
                return (null == (n = (0, d.ow)(t).name) ? void 0 : n.toLowerCase()) === e.toLowerCase();
            }))
                ? void 0
                : t.pid;
        return null != n ? U.gamesByPid[n] : null;
    }
    static getByPid(e) {
        return U.gamesByPid[e];
    }
    static async destroy(e) {
        let t = U.getGameName(e);
        if (U.ignoreGame(e) || null == t) return;
        let n = U.gamesByPid[e.pid];
        if (null != n) {
            n.screenAnalytics.destroy();
            let t = await n.getAnalytics();
            for (let e of (E.default.track(T.rMx.OVERLAY_USAGE_STATS, t.usage), t.notifications))
                E.default.track(T.rMx.OVERLAY_USAGE_NOTIFICATION_STATS, e);
            w.verbose("OVERLAY_USAGE_STATS: ".concat(e.name), t), delete U.gamesByPid[e.pid];
        }
        delete U.gamesByName[t];
    }
    setOverlayMethod(e) {
        (this.overlayMethod = e),
            (this.overlayMethodStats = this.buildOverlayMethodStats(e, this.game)),
            w.verbose("setOverlayMethod", {
                method: e,
                game: this.game,
                overlayStatus: this.overlayStatus,
                overlayMethodStats: this.overlayMethodStats,
            });
    }
    setOverlayState(e) {
        (this.overlayState = e), (this.overlayStateRaw = e);
    }
    setOverlayStateRawOnly(e) {
        this.overlayStateRaw = e;
    }
    getSettingMethod() {
        return null == this.overlayMethod ? f.gl[f.gl.Disabled] : f.gl[this.overlayMethod];
    }
    async getAnalytics() {
        var e, t, n, r, i, a, o, s, c;
        let _ = null != (n = this.overlayMethod) ? n : f.gl.Disabled,
            h = {
                setting_is_enabled: m.default.enabled,
                setting_method: this.getSettingMethod(),
                setting_display_user: g.default.getDisplayUserMode(),
                setting_display_name: g.default.getDisplayNameMode(),
                setting_avatar_size: g.default.getAvatarSizeMode(),
                setting_notification_position: g.default.getNotificationPositionMode(),
                setting_chat_notification: p.Z.isNotificationDisabled(S.n0.TextChat) ? "DISABLED" : "ENABLED",
            },
            E = (0, d.b6)(this.game),
            b = (0, u.G8)(this.game),
            y = null != (r = this.overlayMethodStats) ? r : this.buildOverlayMethodStats(_, this.game),
            O = null != y.any_other_method ? f.gl[y.any_other_method] : null,
            v = null != y.current_method ? f.gl[y.current_method] : null,
            I = E.enabledLegacy || E.enabledOOP;
        return {
            usage: R(
                C(
                    R(
                        C(
                            {
                                event_uuid: this.uuid,
                                overlay_usage_stats_version: P,
                            },
                            this.notificationAnalytics.getAnalytics(),
                            this.widgetAnalytics.getAnalytics(),
                            this.screenAnalytics.getAnalytics(),
                            h,
                        ),
                        {
                            overlay_status_game_enabled: I,
                            overlay_status_game_source: E.source,
                            game_name: null != (i = b.gameName) ? i : null,
                            game_id: null != (a = b.gameId) ? a : null,
                            game_exe: null != (o = b.exe) ? o : null,
                            game_elevated: this.game.elevated,
                            game_is_launcher: null != (s = this.game.isLauncher) && s,
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
                            hardware_display_count:
                                null !=
                                (c = await (null === l.Z ||
                                void 0 === l.Z ||
                                null == (t = l.Z.hardware) ||
                                null == (e = t.getDisplayCount)
                                    ? void 0
                                    : e.call(t)))
                                    ? c
                                    : null,
                            message_ack_count: this.overlayMessageAckCount,
                            message_created_count: this.overlayMessageCreateCount,
                            desktop_message_ack_count: this.desktopMessageAckCount,
                            desktop_message_created_count: this.desktopMessageCreateCount,
                            desktop_focused_duration: this.desktopFocusedTimer.elapsed().asMilliseconds(),
                            desktop_focused_change_count: this.desktopFocusChangedCount,
                            rtc_connection_duration: this.rtcConnectionTimer.elapsed().asMilliseconds(),
                            mute_toggled_count: this.muteToggledCount,
                            overlay_successfully_shown: this._successfullyShown,
                        },
                    ),
                    y,
                ),
                {
                    original_method: f.gl[y.original_method],
                    any_other_method: O,
                    current_method: v,
                    last_overlay_state: this.overlayState,
                    last_overlay_state_raw: this.overlayStateRaw,
                },
            ),
            notifications: this.notificationAnalytics.getCounterAnalytics(this.uuid),
        };
    }
    setLocked(e) {
        e ? (this.unlockedTimer.stop(), ++this.uiLockedCount) : (this.unlockedTimer.start(), ++this.uiUnlockedCount);
    }
    static gameSetAllUnfocused() {
        for (let e of Object.values(U.gamesByPid)) e.gameFocusedTimer.stop();
    }
    static incrementConcurrentGameCount() {
        for (let e of Object.values(U.gamesByPid)) ++e.gameConcurrentGameCount;
    }
    gameSetFocused(e) {
        this.gameFocusedTimer.toggle(e), e && ++this.gameFocusChangedCount;
    }
    setSoundboardShown(e, t) {
        this.soundboardShownTimer.toggle(e), e && (++this.soundboardShownCount, t && ++this.soundboardKeepOpenCount);
    }
    static handleMuteToggled() {
        for (let e of Object.values(U.gamesByPid)) ++e.muteToggledCount;
    }
    static desktopSetFocused(e) {
        if (e !== U.desktopMainWindowHasFocus) {
            for (let t of Object.values(U.gamesByPid)) ++t.desktopFocusChangedCount, t.desktopFocusedTimer.toggle(e);
            U.desktopMainWindowHasFocus = e;
        }
    }
    static desktopMessageEvent(e) {
        for (let t of Object.values(U.gamesByPid))
            switch (e) {
                case "ack":
                    ++t.desktopMessageAckCount;
                    break;
                case "created":
                    ++t.desktopMessageCreateCount;
            }
    }
    static toggleRtcConnection(e) {
        for (let t of Object.values(U.gamesByPid)) t.rtcConnectionTimer.toggle(e);
    }
    constructor(e) {
        var t, n;
        A(this, "game", void 0),
            A(this, "uuid", void 0),
            A(this, "overlayStatus", void 0),
            A(this, "overlayMethod", void 0),
            A(this, "overlayMethodStats", void 0),
            A(this, "overlayState", void 0),
            A(this, "overlayStateRaw", void 0),
            A(this, "notificationAnalytics", void 0),
            A(this, "widgetAnalytics", void 0),
            A(this, "screenAnalytics", void 0),
            A(this, "uiUnlockedCount", void 0),
            A(this, "uiLockedCount", void 0),
            A(this, "gameFocusChangedCount", void 0),
            A(this, "gameConcurrentGameCount", void 0),
            A(this, "overlayMessageAckCount", void 0),
            A(this, "overlayMessageCreateCount", void 0),
            A(this, "gameTimer", void 0),
            A(this, "gameFocusedTimer", void 0),
            A(this, "unlockedTimer", void 0),
            A(this, "rtcConnectionTimer", void 0),
            A(this, "desktopFocusedTimer", void 0),
            A(this, "desktopFocusChangedCount", void 0),
            A(this, "desktopMessageAckCount", void 0),
            A(this, "desktopMessageCreateCount", void 0),
            A(this, "soundboardShownTimer", void 0),
            A(this, "soundboardShownCount", void 0),
            A(this, "soundboardKeepOpenCount", void 0),
            A(this, "muteToggledCount", void 0),
            A(this, "_successfullyShown", void 0),
            (this.game = e),
            (this.uuid = j()),
            (this.overlayMethod = null),
            (this.overlayMethodStats = null),
            (this.overlayState = null),
            (this.overlayStateRaw = null),
            (this.notificationAnalytics = new x()),
            (this.widgetAnalytics = new M()),
            (this.uiUnlockedCount = 0),
            (this.uiLockedCount = 0),
            (this.gameFocusChangedCount = 0),
            (this.gameConcurrentGameCount = 0),
            (this.overlayMessageAckCount = 0),
            (this.overlayMessageCreateCount = 0),
            (this.gameTimer = i.G9.startNew()),
            (this.gameFocusedTimer = new i.G9()),
            (this.unlockedTimer = new i.G9()),
            (this.rtcConnectionTimer = new i.G9()),
            (this.desktopFocusedTimer = new i.G9()),
            (this.desktopFocusChangedCount = 0),
            (this.desktopMessageAckCount = 0),
            (this.desktopMessageCreateCount = 0),
            (this.soundboardShownTimer = new i.G9()),
            (this.soundboardShownCount = 0),
            (this.soundboardKeepOpenCount = 0),
            (this.muteToggledCount = 0),
            (this._successfullyShown = !1),
            (this.screenAnalytics = new k(e)),
            (this.overlayStatus = (0, d.b6)(e)),
            (this.overlayMethod = null != (n = null == (t = this.overlayStatus) ? void 0 : t.overlayMethod) ? n : null),
            (this.overlayMethodStats = this.buildOverlayMethodStats(this.overlayMethod, e)),
            U.desktopMainWindowHasFocus && this.desktopFocusedTimer.start(),
            ee.hasConnection() && this.rtcConnectionTimer.start();
    }
}
function G() {
    let e = m.default.getFocusedPID();
    if (null == e || e === y.UNSET_PID || !_.default.isOverlayOOPEnabledForPid(e)) return null;
    let t = _.default.getTrackedGameByPid(e);
    return null == t || null == t.gameName || null == t.applicationId || t.state !== f.mM.OVERLAY_RENDERING
        ? null
        : {
              gameName: t.gameName,
              gameId: t.applicationId,
          };
}
function B(e) {
    for (let t of (w.verbose("handleRunningGamesChange", e), e.added)) {
        if (null != U.getByPid(t.pid)) {
            w.verbose("handleRunningGamesChange added", t, "already tracked");
            continue;
        }
        U.incrementConcurrentGameCount();
        let e = U.create(t);
        w.verbose("handleRunningGamesChange added", t, e);
    }
    for (let t of e.removed) U.destroy(t), w.verbose("handleRunningGamesChange removed", t);
}
function Z(e) {
    if (e.pid === y.DEV_PID) return;
    let t = U.getByPid(e.pid);
    if ((w.verbose("OVERLAY_SET_INPUT_LOCKED", t), null == t))
        return void w.error("OVERLAY_SET_INPUT_LOCKED: Unable to find game", e, U.debug);
    t.setLocked(e.locked);
}
function F(e) {
    var t;
    if ((w.verbose("OVERLAY_NOTIFICATION_EVENT", e), null == e.gameName && null == e.gameId)) return;
    let n = U.getByName(null != (t = e.gameName) ? t : e.gameId);
    if (null == n) return void w.error("OVERLAY_NOTIFICATION_EVENT: Game not found.", e, U.debug);
    n.notificationAnalytics.increment(e.notificationType, e.action);
}
function V(e) {
    var t;
    if ((w.verbose("OVERLAY_WIDGET_CHANGED", e), null == e.gameName && null == e.gameId)) return;
    let n = U.getByName(null != (t = e.gameName) ? t : e.gameId);
    if (null == n) return void w.error("OVERLAY_WIDGET_CHANGED: Game not found", e, U.debug);
    let r = n.widgetAnalytics.getByWidget(e.widgetType);
    null != r &&
        (r.initialized || ((r.initialized = !0), (r.pinned = e.pinned)),
        r.pinned !== e.pinned && ++r.pinnedToggledCount,
        (r.pinned = e.pinned),
        r.visibleDuration.toggle(e.visible));
}
function H(e) {
    if (
        (w.verbose("OVERLAY_FOCUSED", e),
        U.gameSetAllUnfocused(),
        null == e.pid || e.pid === y.DEV_PID || e.pid === y.UNSET_PID)
    )
        return;
    let t = U.getByPid(e.pid);
    if (null == t) return void w.error("OVERLAY_FOCUSED: Game not found", e, U.debug);
    t.gameSetFocused(!0);
}
function Y(e) {
    var t;
    if ((w.verbose("SOUNDBOARD_SET_OVERLAY_ENABLED", e), e.pid === y.DEV_PID)) return;
    let n = U.getByPid(e.pid);
    if (null == n) return void w.error("SOUNDBOARD_SET_OVERLAY_ENABLED: Game not found", e, U.debug);
    n.setSoundboardShown(e.enabled, !!e.enabled && null != (t = e.keepOpen) && t);
}
function W(e) {
    var t;
    if ((w.verbose("OVERLAY_MESSAGE_EVENT_ACTION", e), null == e.gameName && null == e.gameId)) return;
    let n = U.getByName(null != (t = e.gameName) ? t : e.gameId);
    if (null == n) return void w.error("OVERLAY_MESSAGE_EVENT_ACTION: Game not found", e, U.debug);
    switch (e.eventType) {
        case "ack":
            ++n.overlayMessageAckCount;
            break;
        case "create":
            ++n.overlayMessageCreateCount;
    }
}
function K(e) {
    w.verbose("MESSAGE_ACKED", e);
    let t = G();
    if (null == t) return void U.desktopMessageEvent("ack");
    a.Z.dispatch({
        type: "OVERLAY_MESSAGE_EVENT_ACTION",
        eventType: "ack",
        gameName: t.gameName,
        gameId: t.gameId,
    });
}
function z(e) {
    if (e.message.state !== T.yb.SENDING) return;
    w.verbose("MESSAGE_CREATE", e, Error().stack);
    let t = G();
    if (null == t) return void U.desktopMessageEvent("created");
    a.Z.dispatch({
        type: "OVERLAY_MESSAGE_EVENT_ACTION",
        eventType: "create",
        gameName: t.gameName,
        gameId: t.gameId,
    });
}
function q(e) {
    let t = (0, v.Z)();
    null != t &&
        t !== y.DEV_PID &&
        t !== y.UNSET_PID &&
        (w.verbose("AUDIO_TOGGLE_SELF_MUTE", e), U.handleMuteToggled());
}
function X(e) {
    w.verbose("WINDOW_FOCUS", e);
    let t = (0, O.UU)();
    if (e.windowId !== t)
        return void w.verbose("WINDOW_FOCUS: Not main window", {
            action: e,
            mainWindowId: t,
        });
    U.desktopSetFocused(e.focused);
}
function Q(e) {
    if (e.pid === y.DEV_PID || e.pid === y.UNSET_PID) return;
    let t = U.getByPid(e.pid);
    if (null == t) return void w.error("OVERLAY_SUCCESSFULLY_SHOWN: Game not found", e, U.debug);
    t.successfullyShown = !0;
}
function J(e) {
    let t = U.getByPid(e.pid);
    if (null == t) return void w.error("OVERLAY_UPDATE_OVERLAY_METHOD: Game not found", e, U.debug);
    e.overlayMethod !== f.gl.Disabled &&
        (w.verbose("OVERLAY_UPDATE_OVERLAY_METHOD", e), t.setOverlayMethod(e.overlayMethod));
}
function $(e) {
    let t = U.getByPid(e.pid);
    if (null == t) return void w.error("OVERLAY_TRACK_STATE_CHANGED: Game not found", e, U.debug);
    if (e.newState !== f.mM.OVERLAY_TEARING_DOWN) {
        if (e.reason.includes("Unknown fullscreen type")) return void t.setOverlayStateRawOnly(e.newState);
        t.setOverlayState(e.newState);
    }
}
A(U, "gamesByPid", {}), A(U, "gamesByName", {}), A(U, "desktopMainWindowHasFocus", document.hasFocus());
class ee {
    static hasConnection() {
        return ee.connections.size > 0;
    }
    static handleRTCConnectionState(e) {
        var t;
        let n = (null != (t = e.channelId) ? t : "unknown") + e.context;
        switch (e.state) {
            case T.hes.RTC_CONNECTED:
                ee.connections.add(n);
                break;
            case T.hes.DISCONNECTED:
                ee.connections.delete(n);
        }
        let r = ee.hasConnection();
        ee.previousHasConnection !== r && (U.toggleRtcConnection(r), (ee.previousHasConnection = r));
    }
}
A(ee, "connections", new Set()), A(ee, "previousHasConnection", !1);
class et {
    static handleMessageAcked(e) {
        w.verbose("MESSAGE_ACKED", e);
        let t = h.Z.getGame();
        if (null == t) return void w.error("Game not found.");
        a.Z.dispatch({
            type: "OVERLAY_MESSAGE_EVENT_ACTION",
            eventType: "ack",
            gameName: t.name,
            gameId: t.id,
        });
    }
    static handleMessageCreate(e) {
        if (e.message.state !== T.yb.SENDING) return;
        w.verbose("MESSAGE_CREATE", e, Error().stack);
        let t = h.Z.getGame();
        if (null == t) return void w.error("Game not found.");
        a.Z.dispatch({
            type: "OVERLAY_MESSAGE_EVENT_ACTION",
            eventType: "create",
            gameName: t.name,
            gameId: t.id,
        });
    }
}
D &&
    !__OVERLAY__ &&
    setInterval(async () => {
        for (let e of Object.values(U.debug.gamesByName)) w.verbose("Game analytics", await e.getAnalytics());
    }, 5000);
class en extends s.Z {
    constructor(...e) {
        super(...e),
            A(
                this,
                "actions",
                __OVERLAY__
                    ? {
                          MESSAGE_ACKED: et.handleMessageAcked,
                          MESSAGE_CREATE: et.handleMessageCreate,
                      }
                    : {
                          OVERLAY_FOCUSED: H,
                          OVERLAY_NOTIFICATION_EVENT: F,
                          OVERLAY_SET_INPUT_LOCKED: Z,
                          OVERLAY_WIDGET_CHANGED: V,
                          OVERLAY_MESSAGE_EVENT_ACTION: W,
                          RUNNING_GAMES_CHANGE: B,
                          SOUNDBOARD_SET_OVERLAY_ENABLED: Y,
                          MESSAGE_ACKED: K,
                          MESSAGE_CREATE: z,
                          WINDOW_FOCUS: X,
                          RTC_CONNECTION_STATE: ee.handleRTCConnectionState,
                          AUDIO_TOGGLE_SELF_MUTE: q,
                          OVERLAY_SUCCESSFULLY_SHOWN: Q,
                          OVERLAY_UPDATE_OVERLAY_METHOD: J,
                          OVERLAY_TRACK_STATE_CHANGED: $,
                      },
            );
    }
}
let er = new en();
