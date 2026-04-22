"use strict";
n.d(t, { A: () => X });
var r = n(835245),
    i = n(499979),
    s = n(73153),
    a = n(56562),
    o = n(439372),
    l = n(77729),
    u = n(626584),
    d = n(973522),
    c = n(15285),
    _ = n(41984),
    f = n(833551),
    E = n(592598),
    h = n(157257),
    p = n(242286),
    m = n(256415),
    g = n(954571),
    A = n(837921),
    I = n(9302),
    T = n(365971),
    S = n(427603),
    y = n(710093),
    N = n(652215),
    O = n(672396);
let R = new u.A("OverlayUsageStatsManager");
R.verbose = () => {};
class v {
    actions = { [O.uj.Viewed]: 0, [O.uj.Clicked]: 0 };
    increment(e) {
        ++this.actions[e];
    }
    getAnalytics(e, t) {
        let n = this.actions[O.uj.Viewed],
            r = this.actions[O.uj.Clicked];
        return 0 === n && 0 === r ? null : { event_uuid: t, notification_type: e, viewed_count: n, clicked_count: r };
    }
}
class C {
    actionCounters = { [O.uj.Viewed]: 0, [O.uj.Clicked]: 0 };
    groupCounters = { [O.uj.Viewed]: C.makeEmptyGroupAnalytics(), [O.uj.Clicked]: C.makeEmptyGroupAnalytics() };
    counters = C.makeCounters();
    static makeEmptyGroupAnalytics() {
        return {
            [O.BR.Nudge]: 0,
            [O.BR.TextChat]: 0,
            [O.BR.VoiceCall]: 0,
            [O.BR.Activity]: 0,
            [O.BR.Clips]: 0,
            [O.BR.Other]: 0,
        };
    }
    static makeCounters() {
        let e = {},
            t = Object.values(O.KS);
        for (let n of t) e[n] = new v();
        if (Object.keys(e).length !== t.length) throw Error("NotificationAnalytics: Failed to make counters");
        return e;
    }
    increment(e, t) {
        let n = this.groupCounters[t];
        if (null == n) return void R.error(`NotificationCounter: Unknown notification action: ${t}`);
        let r = (0, O.Vo)(e);
        if (!(r in n)) return void R.error(`NotificationCounter: Unknown notification action: ${e}`);
        ++n[r], ++this.actionCounters[t];
        let i = this.counters[e];
        null == i ? R.error(`NotificationCounter: Unknown notification type: ${e}`) : i.increment(t);
    }
    getAnalytics() {
        let e = this.groupCounters[O.uj.Viewed],
            t = this.groupCounters[O.uj.Clicked];
        return {
            notices_viewed: this.actionCounters[O.uj.Viewed],
            notices_clicked: this.actionCounters[O.uj.Clicked],
            notice_nudge_viewed: e[O.BR.Nudge],
            notice_text_chat_viewed: e[O.BR.TextChat],
            notice_voice_call_viewed: e[O.BR.VoiceCall],
            notice_activity_viewed: e[O.BR.Activity],
            notice_clips_viewed: e[O.BR.Clips],
            notice_other_viewed: e[O.BR.Other],
            notice_nudge_clicked: t[O.BR.Nudge],
            notice_text_chat_clicked: t[O.BR.TextChat],
            notice_voice_call_clicked: t[O.BR.VoiceCall],
            notice_activity_clicked: t[O.BR.Activity],
            notice_clips_clicked: t[O.BR.Clips],
            notice_other_clicked: t[O.BR.Other],
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
}
class b {
    types = { 0: b.makeEmptyAnalytics(), 1: b.makeEmptyAnalytics() };
    static makeEmptyAnalytics() {
        return { initialized: !1, pinnedToggledCount: 0, visibleDuration: new i.W0(), pinned: !1 };
    }
    getByType(e) {
        return this.types[e];
    }
    getByWidget(e) {
        switch (e) {
            case N.uss.VOICE:
                return this.getByType(0);
            case N.uss.TEXT:
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
}
class D {
    game;
    counters = {
        [a.aI.UNKNOWN]: new i.W0(),
        [a.aI.WINDOWED]: new i.W0(),
        [a.aI.MAXIMIZED]: new i.W0(),
        [a.aI.BORDERLESS_FULLSCREEN]: new i.W0(),
        [a.aI.FULLSCREEN]: new i.W0(),
        [a.aI.MINIMIZED]: new i.W0(),
    };
    lastscreenType = void 0;
    updateScreenInterval;
    constructor(e) {
        (this.game = e), this.update(), (this.updateScreenInterval = setInterval(() => this.update(), 1e4));
    }
    update() {
        let e = this.game,
            t = A.Ay.GetWindowFullscreenTypeByPid(e.pid, e.name, e.fullscreenType);
        if (t !== this.lastscreenType) {
            if (!(t in this.counters)) {
                let n = f.default.getTrackedGameByPid(e.pid);
                R.error(`ScreenTypeAnalytics: Unknown screen type for ${this.game.name}: ${t}`, {
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
        let e = (e) => this.counters[e].elapsed().asMilliseconds(),
            t = {
                [a.aI.UNKNOWN]: e(a.aI.UNKNOWN),
                [a.aI.WINDOWED]: e(a.aI.WINDOWED),
                [a.aI.MAXIMIZED]: e(a.aI.MAXIMIZED),
                [a.aI.BORDERLESS_FULLSCREEN]: e(a.aI.BORDERLESS_FULLSCREEN),
                [a.aI.FULLSCREEN]: e(a.aI.FULLSCREEN),
                [a.aI.MINIMIZED]: e(a.aI.MINIMIZED),
            },
            n = Object.entries(t).sort((e, t) => {
                let [n, r] = e,
                    [i, s] = t;
                return s - r;
            })[0],
            r = parseInt(n[0], 10),
            i = isNaN(r) ? a.aI.UNKNOWN : r;
        isNaN(r) && R.error(`ScreenTypeAnalytics: Unknown most used screen type: ${n}`, t);
        let s = y.R.getGameDisplayMode(this.game.name ?? this.game.id);
        y.R.setGameDisplayMode(this.game.name ?? this.game.id, i);
        let o = {
            screentype_unknown_duration: t[a.aI.UNKNOWN],
            screentype_windowed_duration: t[a.aI.WINDOWED],
            screentype_maximized_duration: t[a.aI.MAXIMIZED],
            screentype_borderless_fullscreen_duration: t[a.aI.BORDERLESS_FULLSCREEN],
            screentype_fullscreen_duration: t[a.aI.FULLSCREEN],
            screentype_minimized_duration: t[a.aI.MINIMIZED],
        };
        return {
            ...o,
            screentype_global_supported_duration:
                o.screentype_windowed_duration +
                o.screentype_maximized_duration +
                o.screentype_borderless_fullscreen_duration,
            screentype_global_unsupported_duration: o.screentype_fullscreen_duration,
            screentype_initial: a.aI[this.game.fullscreenType],
            screentype_most_used: a.aI[i],
            screentype_most_used_previous: null == s ? null : a.aI[s],
            screentype_last: a.aI[this.lastscreenType ?? a.aI.UNKNOWN],
            game_display_mode_is_adjustment_supported: A.Ay.GameDisplayModeIsGameSupported(this.game.name),
        };
    }
    destroy() {
        clearInterval(this.updateScreenInterval);
    }
}
class L {
    game;
    static gamesByPid = {};
    static gamesByName = {};
    static get debug() {
        return { gamesByPid: L.gamesByPid, gamesByName: L.gamesByName };
    }
    static desktopMainWindowHasFocus = document.hasFocus();
    uuid = (function () {
        try {
            return crypto.randomUUID();
        } catch (e) {
            return R.error("OverlayUsageStatsManager: Failed to generate UUID", e), (0, r.A)();
        }
    })();
    overlayStatus;
    overlayMethod = null;
    overlayMethodStats = null;
    overlayState = null;
    overlayStateRaw = null;
    overlayStateReason = null;
    overlayStateRawReason = null;
    notificationAnalytics = new C();
    widgetAnalytics = new b();
    screenAnalytics;
    uiUnlockedCount = 0;
    uiLockedCount = 0;
    gameFocusChangedCount = 0;
    gameConcurrentGameCount = 0;
    overlayMessageAckCount = 0;
    overlayMessageCreateCount = 0;
    gameTimer = i.W0.startNew();
    gameFocusedTimer = new i.W0();
    unlockedTimer = new i.W0();
    rtcConnectionTimer = new i.W0();
    desktopFocusedTimer = new i.W0();
    desktopFocusChangedCount = 0;
    desktopMessageAckCount = 0;
    desktopMessageCreateCount = 0;
    soundboardShownTimer = new i.W0();
    soundboardShownCount = 0;
    soundboardKeepOpenCount = 0;
    muteToggledCount = 0;
    _successfullyShown = !1;
    set successfullyShown(e) {
        this._successfullyShown = e;
    }
    constructor(e) {
        (this.game = e),
            (this.screenAnalytics = new D(e)),
            (this.overlayStatus = (0, c.hw)(e)),
            (this.overlayMethod = this.overlayStatus?.overlayMethod ?? null),
            (this.overlayMethodStats = this.buildOverlayMethodStats(this.overlayMethod, e)),
            L.desktopMainWindowHasFocus && this.desktopFocusedTimer.start(),
            $.hasConnection() && this.rtcConnectionTimer.start();
    }
    getQunsName(e) {
        let t = e ?? a.YL.QUNS_UNKNOWN;
        return a.YL[t];
    }
    buildOverlayMethodStats(e, t) {
        let n = this.overlayMethodStats,
            { oopEnabled: r, legacyEnabled: i } = f.default.getPerGameEnabledStatus(t),
            s = {
                legacy_override: !0 === i,
                enabled: r || i,
                quns_mode: this.getQunsName(a.YL.QUNS_UNKNOWN),
                current_method: e,
            };
        if (null != t) {
            let { quns: e } = A.Ay.GetWindowFullscreenTypeExtraByPid(t.pid, t.gameName);
            s.quns_mode = this.getQunsName(e);
        }
        if (null == e)
            return { original_method: (null != t ? f.default.getRenderMethod(t.pid) : null) ?? _.Ue.Disabled, ...s };
        if (null == n) return { original_method: e, ...s };
        let o = e !== n.original_method ? e : void 0;
        return { ...n, any_other_method: o ?? n.any_other_method, ...s };
    }
    static getGameName(e) {
        return e.name ?? e.id ?? null;
    }
    static ignoreGame(e) {
        return e.isLauncher ?? !1;
    }
    static create(e) {
        let t = L.getGameName(e);
        if (L.ignoreGame(e) || null == t) return null;
        let n = new L({ ...e });
        return (
            (n.gameConcurrentGameCount = Object.values(L.gamesByPid).length),
            (L.gamesByPid[e.pid] = n),
            (L.gamesByName[t] = n),
            n
        );
    }
    static getByName(e) {
        if (null == e) return null;
        let t = c.Ay.getRunningGames().find((t) => {
            let n = (0, c.Zh)(t);
            return n.name?.toLowerCase() === e.toLowerCase();
        })?.pid;
        return null != t ? L.gamesByPid[t] : null;
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
            for (let e of (g.default.track(N.HAw.OVERLAY_USAGE_STATS, t.usage), t.notifications))
                g.default.track(N.HAw.OVERLAY_USAGE_NOTIFICATION_STATS, e);
            R.verbose(`OVERLAY_USAGE_STATS: ${e.name}`, t), delete L.gamesByPid[e.pid];
        }
        delete L.gamesByName[t];
    }
    setOverlayMethod(e) {
        (this.overlayMethod = e),
            (this.overlayMethodStats = this.buildOverlayMethodStats(e, this.game)),
            R.verbose("setOverlayMethod", {
                method: e,
                game: this.game,
                overlayStatus: this.overlayStatus,
                overlayMethodStats: this.overlayMethodStats,
            });
    }
    setOverlayState(e, t, n) {
        n || ((this.overlayState = e), (this.overlayStateReason = t)),
            (this.overlayStateRaw = e),
            (this.overlayStateRawReason = t);
    }
    getSettingMethod() {
        return null == this.overlayMethod ? _.Ue[_.Ue.Disabled] : _.Ue[this.overlayMethod];
    }
    async getAnalytics() {
        let e = this.overlayMethod ?? _.Ue.Disabled,
            t = {
                setting_is_enabled: p.default.enabled,
                setting_method: this.getSettingMethod(),
                setting_display_user: m.default.getDisplayUserMode(),
                setting_display_name: m.default.getDisplayNameMode(),
                setting_avatar_size: m.default.getAvatarSizeMode(),
                setting_notification_position: m.default.getNotificationPositionMode(),
                setting_chat_notification: E.A.isNotificationDisabled(O.KS.TextChat) ? "DISABLED" : "ENABLED",
            },
            n = (0, c.hw)(this.game),
            r = (0, d.wH)(this.game),
            i = this.overlayMethodStats ?? this.buildOverlayMethodStats(e, this.game),
            s = null != i.any_other_method ? _.Ue[i.any_other_method] : null,
            a = null != i.current_method ? _.Ue[i.current_method] : null,
            o = n.enabledLegacy || n.enabledOOP;
        return {
            usage: {
                event_uuid: this.uuid,
                overlay_usage_stats_version: 7,
                ...this.notificationAnalytics.getAnalytics(),
                ...this.widgetAnalytics.getAnalytics(),
                ...this.screenAnalytics.getAnalytics(),
                ...t,
                overlay_status_game_enabled: o,
                overlay_status_game_source: n.source,
                game_name: r.gameName ?? null,
                game_id: r.gameId ?? null,
                game_exe: r.exe ?? null,
                game_elevated: this.game.elevated,
                game_is_launcher: this.game.isLauncher ?? !1,
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
                hardware_display_count: (await l.A?.hardware?.getDisplayCount?.()) ?? null,
                message_ack_count: this.overlayMessageAckCount,
                message_created_count: this.overlayMessageCreateCount,
                desktop_message_ack_count: this.desktopMessageAckCount,
                desktop_message_created_count: this.desktopMessageCreateCount,
                desktop_focused_duration: this.desktopFocusedTimer.elapsed().asMilliseconds(),
                desktop_focused_change_count: this.desktopFocusChangedCount,
                rtc_connection_duration: this.rtcConnectionTimer.elapsed().asMilliseconds(),
                mute_toggled_count: this.muteToggledCount,
                overlay_successfully_shown: this._successfullyShown,
                ...i,
                original_method: _.Ue[i.original_method],
                any_other_method: s,
                current_method: a,
                last_overlay_state: this.overlayState,
                last_overlay_state_raw: this.overlayStateRaw,
                last_overlay_state_reason: this.overlayStateReason,
                last_overlay_state_raw_reason: this.overlayStateRawReason,
            },
            notifications: this.notificationAnalytics.getCounterAnalytics(this.uuid),
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
            for (let t of Object.values(L.gamesByPid)) ++t.desktopFocusChangedCount, t.desktopFocusedTimer.toggle(e);
            L.desktopMainWindowHasFocus = e;
        }
    }
    static desktopMessageEvent(e) {
        for (let t of Object.values(L.gamesByPid))
            switch (e) {
                case "ack":
                    ++t.desktopMessageAckCount;
                    break;
                case "created":
                    ++t.desktopMessageCreateCount;
            }
    }
    static toggleRtcConnection(e) {
        for (let t of Object.values(L.gamesByPid)) t.rtcConnectionTimer.toggle(e);
    }
}
function w() {
    let e = p.default.getFocusedPID();
    if (null == e || e === I.UNSET_PID || !f.default.isOverlayOOPEnabledForPid(e)) return null;
    let t = f.default.getTrackedGameByPid(e);
    return null == t || null == t.gameName || null == t.applicationId || t.state !== _.AR.OVERLAY_RENDERING
        ? null
        : { gameName: t.gameName, gameId: t.applicationId };
}
function M(e) {
    for (let t of (R.verbose("handleRunningGamesChange", e), e.added)) {
        if (null != L.getByPid(t.pid)) {
            R.verbose("handleRunningGamesChange added", t, "already tracked");
            continue;
        }
        L.incrementConcurrentGameCount();
        let e = L.create(t);
        R.verbose("handleRunningGamesChange added", t, e);
    }
    for (let t of e.removed) L.destroy(t), R.verbose("handleRunningGamesChange removed", t);
}
function P(e) {
    if (e.pid === I.DEV_PID) return;
    let t = L.getByPid(e.pid);
    (R.verbose("OVERLAY_SET_INPUT_LOCKED", t), null == t)
        ? R.error("OVERLAY_SET_INPUT_LOCKED: Unable to find game", e, L.debug)
        : t.setLocked(e.locked);
}
function U(e) {
    if ((R.verbose("OVERLAY_NOTIFICATION_EVENT", e), null == e.gameName && null == e.gameId)) return;
    let t = L.getByName(e.gameName ?? e.gameId);
    null == t
        ? R.error("OVERLAY_NOTIFICATION_EVENT: Game not found.", e, L.debug)
        : t.notificationAnalytics.increment(e.notificationType, e.action);
}
function k(e) {
    if ((R.verbose("OVERLAY_WIDGET_CHANGED", e), null == e.gameName && null == e.gameId)) return;
    let t = L.getByName(e.gameName ?? e.gameId);
    if (null == t) return void R.error("OVERLAY_WIDGET_CHANGED: Game not found", e, L.debug);
    let n = t.widgetAnalytics.getByWidget(e.widgetType);
    null != n &&
        (n.initialized || ((n.initialized = !0), (n.pinned = e.pinned)),
        n.pinned !== e.pinned && ++n.pinnedToggledCount,
        (n.pinned = e.pinned),
        n.visibleDuration.toggle(e.visible));
}
function x(e) {
    if (
        (R.verbose("OVERLAY_FOCUSED", e),
        L.gameSetAllUnfocused(),
        null == e.pid || e.pid === I.DEV_PID || e.pid === I.UNSET_PID)
    )
        return;
    let t = L.getByPid(e.pid);
    null == t ? R.error("OVERLAY_FOCUSED: Game not found", e, L.debug) : t.gameSetFocused(!0);
}
function G(e) {
    if ((R.verbose("SOUNDBOARD_SET_OVERLAY_ENABLED", e), e.pid === I.DEV_PID)) return;
    let t = L.getByPid(e.pid);
    null == t
        ? R.error("SOUNDBOARD_SET_OVERLAY_ENABLED: Game not found", e, L.debug)
        : t.setSoundboardShown(e.enabled, !!e.enabled && (e.keepOpen ?? !1));
}
function V(e) {
    if ((R.verbose("OVERLAY_MESSAGE_EVENT_ACTION", e), null == e.gameName && null == e.gameId)) return;
    let t = L.getByName(e.gameName ?? e.gameId);
    if (null == t) return void R.error("OVERLAY_MESSAGE_EVENT_ACTION: Game not found", e, L.debug);
    switch (e.eventType) {
        case "ack":
            ++t.overlayMessageAckCount;
            break;
        case "create":
            ++t.overlayMessageCreateCount;
    }
}
function F(e) {
    R.verbose("MESSAGE_ACKED", e);
    let t = w();
    null == t
        ? L.desktopMessageEvent("ack")
        : s.h.dispatch({
              type: "OVERLAY_MESSAGE_EVENT_ACTION",
              eventType: "ack",
              gameName: t.gameName,
              gameId: t.gameId,
          });
}
function B(e) {
    if (e.message.state !== N.cmJ.SENDING) return;
    R.verbose("MESSAGE_CREATE", e, Error().stack);
    let t = w();
    null == t
        ? L.desktopMessageEvent("created")
        : s.h.dispatch({
              type: "OVERLAY_MESSAGE_EVENT_ACTION",
              eventType: "create",
              gameName: t.gameName,
              gameId: t.gameId,
          });
}
function H(e) {
    let t = (0, S.A)();
    null != t &&
        t !== I.DEV_PID &&
        t !== I.UNSET_PID &&
        (R.verbose("AUDIO_TOGGLE_SELF_MUTE", e), L.handleMuteToggled());
}
function Y(e) {
    R.verbose("WINDOW_FOCUS", e);
    let t = (0, T.Xg)();
    e.windowId !== t
        ? R.verbose("WINDOW_FOCUS: Not main window", { action: e, mainWindowId: t })
        : L.desktopSetFocused(e.focused);
}
function W(e) {
    if (e.pid === I.DEV_PID || e.pid === I.UNSET_PID) return;
    let t = L.getByPid(e.pid);
    null == t ? R.error("OVERLAY_SUCCESSFULLY_SHOWN: Game not found", e, L.debug) : (t.successfullyShown = !0);
}
function j(e) {
    let t = L.getByPid(e.pid);
    null == t
        ? R.error("OVERLAY_UPDATE_OVERLAY_METHOD: Game not found", e, L.debug)
        : e.overlayMethod !== _.Ue.Disabled &&
          (R.verbose("OVERLAY_UPDATE_OVERLAY_METHOD", e), t.setOverlayMethod(e.overlayMethod));
}
function K(e) {
    let t = L.getByPid(e.pid);
    if (null == t) return void R.error("OVERLAY_TRACK_STATE_CHANGED: Game not found", e, L.debug);
    if (e.newState !== _.AR.OVERLAY_TEARING_DOWN) {
        if (e.reason.includes("Unknown fullscreen type")) return void t.setOverlayState(e.newState, e.reason, !0);
        t.setOverlayState(e.newState, e.reason, !1);
    }
}
class $ {
    static connections = new Set();
    static previousHasConnection = !1;
    static hasConnection() {
        return $.connections.size > 0;
    }
    static handleRTCConnectionState(e) {
        let t = (e.channelId ?? "unknown") + e.context;
        switch (e.state) {
            case N.S7L.RTC_CONNECTED:
                $.connections.add(t);
                break;
            case N.S7L.DISCONNECTED:
                $.connections.delete(t);
        }
        let n = $.hasConnection();
        $.previousHasConnection !== n && (L.toggleRtcConnection(n), ($.previousHasConnection = n));
    }
}
class z {
    static handleMessageAcked(e) {
        R.verbose("MESSAGE_ACKED", e);
        let t = h.A.getGame();
        null == t
            ? R.error("Game not found.")
            : s.h.dispatch({ type: "OVERLAY_MESSAGE_EVENT_ACTION", eventType: "ack", gameName: t.name, gameId: t.id });
    }
    static handleMessageCreate(e) {
        if (e.message.state !== N.cmJ.SENDING) return;
        R.verbose("MESSAGE_CREATE", e, Error().stack);
        let t = h.A.getGame();
        null == t
            ? R.error("Game not found.")
            : s.h.dispatch({
                  type: "OVERLAY_MESSAGE_EVENT_ACTION",
                  eventType: "create",
                  gameName: t.name,
                  gameId: t.id,
              });
    }
}
class q extends o.A {
    actions = __OVERLAY__
        ? { MESSAGE_ACKED: z.handleMessageAcked, MESSAGE_CREATE: z.handleMessageCreate }
        : {
              OVERLAY_FOCUSED: x,
              OVERLAY_NOTIFICATION_EVENT: U,
              OVERLAY_SET_INPUT_LOCKED: P,
              OVERLAY_WIDGET_CHANGED: k,
              OVERLAY_MESSAGE_EVENT_ACTION: V,
              RUNNING_GAMES_CHANGE: M,
              SOUNDBOARD_SET_OVERLAY_ENABLED: G,
              MESSAGE_ACKED: F,
              MESSAGE_CREATE: B,
              WINDOW_FOCUS: Y,
              RTC_CONNECTION_STATE: $.handleRTCConnectionState,
              AUDIO_TOGGLE_SELF_MUTE: H,
              OVERLAY_SUCCESSFULLY_SHOWN: W,
              OVERLAY_UPDATE_OVERLAY_METHOD: j,
              OVERLAY_TRACK_STATE_CHANGED: K,
          };
}
let X = new q();
