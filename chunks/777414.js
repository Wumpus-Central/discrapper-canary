"use strict";
n.d(t, { A: () => ee });
var r = n(835245),
    i = n(499979),
    a = n(73153),
    s = n(56562),
    o = n(439372),
    l = n(77729),
    u = n(626584),
    c = n(973522),
    d = n(15285),
    _ = n(41984),
    f = n(833551),
    h = n(592598),
    p = n(157257),
    g = n(242286),
    E = n(256415),
    A = n(954571),
    I = n(837921),
    T = n(9302),
    y = n(365971),
    S = n(427603),
    v = n(710093),
    C = n(652215),
    b = n(672396);
let N = 7,
    R = !1,
    O = new u.A("OverlayUsageStatsManager");
R || (O.verbose = () => {});
class D {
    actions = { [b.uj.Viewed]: 0, [b.uj.Clicked]: 0 };
    increment(e) {
        ++this.actions[e];
    }
    getAnalytics(e, t) {
        let n = this.actions[b.uj.Viewed],
            r = this.actions[b.uj.Clicked];
        return 0 === n && 0 === r ? null : { event_uuid: t, notification_type: e, viewed_count: n, clicked_count: r };
    }
}
class L {
    actionCounters = { [b.uj.Viewed]: 0, [b.uj.Clicked]: 0 };
    groupCounters = { [b.uj.Viewed]: L.makeEmptyGroupAnalytics(), [b.uj.Clicked]: L.makeEmptyGroupAnalytics() };
    counters = L.makeCounters();
    static makeEmptyGroupAnalytics() {
        return {
            [b.BR.Nudge]: 0,
            [b.BR.TextChat]: 0,
            [b.BR.VoiceCall]: 0,
            [b.BR.Activity]: 0,
            [b.BR.Clips]: 0,
            [b.BR.Other]: 0,
        };
    }
    static makeCounters() {
        let e = {},
            t = Object.values(b.KS);
        for (let n of t) e[n] = new D();
        if (Object.keys(e).length !== t.length) throw Error("NotificationAnalytics: Failed to make counters");
        return e;
    }
    increment(e, t) {
        let n = this.groupCounters[t];
        if (null == n) return void O.error(`NotificationCounter: Unknown notification action: ${t}`);
        let r = (0, b.Vo)(e);
        if (!(r in n)) return void O.error(`NotificationCounter: Unknown notification action: ${e}`);
        ++n[r], ++this.actionCounters[t];
        let i = this.counters[e];
        null == i ? O.error(`NotificationCounter: Unknown notification type: ${e}`) : i.increment(t);
    }
    getAnalytics() {
        let e = this.groupCounters[b.uj.Viewed],
            t = this.groupCounters[b.uj.Clicked];
        return {
            notices_viewed: this.actionCounters[b.uj.Viewed],
            notices_clicked: this.actionCounters[b.uj.Clicked],
            notice_nudge_viewed: e[b.BR.Nudge],
            notice_text_chat_viewed: e[b.BR.TextChat],
            notice_voice_call_viewed: e[b.BR.VoiceCall],
            notice_activity_viewed: e[b.BR.Activity],
            notice_clips_viewed: e[b.BR.Clips],
            notice_other_viewed: e[b.BR.Other],
            notice_nudge_clicked: t[b.BR.Nudge],
            notice_text_chat_clicked: t[b.BR.TextChat],
            notice_voice_call_clicked: t[b.BR.VoiceCall],
            notice_activity_clicked: t[b.BR.Activity],
            notice_clips_clicked: t[b.BR.Clips],
            notice_other_clicked: t[b.BR.Other],
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
class w {
    types = { 0: w.makeEmptyAnalytics(), 1: w.makeEmptyAnalytics() };
    static makeEmptyAnalytics() {
        return { initialized: !1, pinnedToggledCount: 0, visibleDuration: new i.W0(), pinned: !1 };
    }
    getByType(e) {
        return this.types[e];
    }
    getByWidget(e) {
        switch (e) {
            case C.uss.VOICE:
                return this.getByType(0);
            case C.uss.TEXT:
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
class x {
    game;
    counters = {
        [s.aI.UNKNOWN]: new i.W0(),
        [s.aI.WINDOWED]: new i.W0(),
        [s.aI.MAXIMIZED]: new i.W0(),
        [s.aI.BORDERLESS_FULLSCREEN]: new i.W0(),
        [s.aI.FULLSCREEN]: new i.W0(),
        [s.aI.MINIMIZED]: new i.W0(),
    };
    lastscreenType = void 0;
    updateScreenInterval;
    constructor(e) {
        (this.game = e), this.update(), (this.updateScreenInterval = setInterval(() => this.update(), 1e4));
    }
    update() {
        let e = this.game,
            t = I.Ay.GetWindowFullscreenTypeByPid(e.pid, e.name, e.fullscreenType);
        if (t !== this.lastscreenType) {
            if (!(t in this.counters)) {
                let n = f.default.getTrackedGameByPid(e.pid);
                O.error(`ScreenTypeAnalytics: Unknown screen type for ${this.game.name}: ${t}`, {
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
                [s.aI.UNKNOWN]: e(s.aI.UNKNOWN),
                [s.aI.WINDOWED]: e(s.aI.WINDOWED),
                [s.aI.MAXIMIZED]: e(s.aI.MAXIMIZED),
                [s.aI.BORDERLESS_FULLSCREEN]: e(s.aI.BORDERLESS_FULLSCREEN),
                [s.aI.FULLSCREEN]: e(s.aI.FULLSCREEN),
                [s.aI.MINIMIZED]: e(s.aI.MINIMIZED),
            },
            n = Object.entries(t).sort((e, t) => {
                let [n, r] = e,
                    [i, a] = t;
                return a - r;
            })[0],
            r = parseInt(n[0], 10),
            i = isNaN(r) ? s.aI.UNKNOWN : r;
        isNaN(r) && O.error(`ScreenTypeAnalytics: Unknown most used screen type: ${n}`, t);
        let a = v.R.getGameDisplayMode(this.game.name ?? this.game.id);
        v.R.setGameDisplayMode(this.game.name ?? this.game.id, i);
        let o = {
            screentype_unknown_duration: t[s.aI.UNKNOWN],
            screentype_windowed_duration: t[s.aI.WINDOWED],
            screentype_maximized_duration: t[s.aI.MAXIMIZED],
            screentype_borderless_fullscreen_duration: t[s.aI.BORDERLESS_FULLSCREEN],
            screentype_fullscreen_duration: t[s.aI.FULLSCREEN],
            screentype_minimized_duration: t[s.aI.MINIMIZED],
        };
        return {
            ...o,
            screentype_global_supported_duration:
                o.screentype_windowed_duration +
                o.screentype_maximized_duration +
                o.screentype_borderless_fullscreen_duration,
            screentype_global_unsupported_duration: o.screentype_fullscreen_duration,
            screentype_initial: s.aI[this.game.fullscreenType],
            screentype_most_used: s.aI[i],
            screentype_most_used_previous: null == a ? null : s.aI[a],
            screentype_last: s.aI[this.lastscreenType ?? s.aI.UNKNOWN],
            game_display_mode_is_adjustment_supported: I.Ay.GameDisplayModeIsGameSupported(this.game.name),
        };
    }
    destroy() {
        clearInterval(this.updateScreenInterval);
    }
}
function P() {
    try {
        return crypto.randomUUID();
    } catch (e) {
        return O.error("OverlayUsageStatsManager: Failed to generate UUID", e), (0, r.A)();
    }
}
class M {
    game;
    static gamesByPid = {};
    static gamesByName = {};
    static get debug() {
        return { gamesByPid: M.gamesByPid, gamesByName: M.gamesByName };
    }
    static desktopMainWindowHasFocus = document.hasFocus();
    uuid = P();
    overlayStatus;
    overlayMethod = null;
    overlayMethodStats = null;
    overlayState = null;
    overlayStateRaw = null;
    overlayStateReason = null;
    overlayStateRawReason = null;
    notificationAnalytics = new L();
    widgetAnalytics = new w();
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
            (this.screenAnalytics = new x(e)),
            (this.overlayStatus = (0, d.hw)(e)),
            (this.overlayMethod = this.overlayStatus?.overlayMethod ?? null),
            (this.overlayMethodStats = this.buildOverlayMethodStats(this.overlayMethod, e)),
            M.desktopMainWindowHasFocus && this.desktopFocusedTimer.start(),
            Z.hasConnection() && this.rtcConnectionTimer.start();
    }
    getQunsName(e) {
        let t = e ?? s.YL.QUNS_UNKNOWN;
        return s.YL[t];
    }
    buildOverlayMethodStats(e, t) {
        let n = this.overlayMethodStats,
            { oopEnabled: r, legacyEnabled: i } = f.default.getPerGameEnabledStatus(t),
            a = {
                legacy_override: !0 === i,
                enabled: r || i,
                quns_mode: this.getQunsName(s.YL.QUNS_UNKNOWN),
                current_method: e,
            };
        if (null != t) {
            let { quns: e } = I.Ay.GetWindowFullscreenTypeExtraByPid(t.pid, t.gameName);
            a.quns_mode = this.getQunsName(e);
        }
        if (null == e)
            return { original_method: (null != t ? f.default.getRenderMethod(t.pid) : null) ?? _.Ue.Disabled, ...a };
        if (null == n) return { original_method: e, ...a };
        let o = e !== n.original_method ? e : void 0;
        return { ...n, any_other_method: o ?? n.any_other_method, ...a };
    }
    static getGameName(e) {
        return e.name ?? e.id ?? null;
    }
    static ignoreGame(e) {
        return e.isLauncher ?? !1;
    }
    static create(e) {
        let t = M.getGameName(e);
        if (M.ignoreGame(e) || null == t) return null;
        let n = new M({ ...e });
        return (
            (n.gameConcurrentGameCount = Object.values(M.gamesByPid).length),
            (M.gamesByPid[e.pid] = n),
            (M.gamesByName[t] = n),
            n
        );
    }
    static getByName(e) {
        if (null == e) return null;
        let t = d.Ay.getRunningGames().find((t) => {
            let n = (0, d.Zh)(t);
            return n.name?.toLowerCase() === e.toLowerCase();
        })?.pid;
        return null != t ? M.gamesByPid[t] : null;
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
            for (let e of (A.default.track(C.HAw.OVERLAY_USAGE_STATS, t.usage), t.notifications))
                A.default.track(C.HAw.OVERLAY_USAGE_NOTIFICATION_STATS, e);
            O.verbose(`OVERLAY_USAGE_STATS: ${e.name}`, t), delete M.gamesByPid[e.pid];
        }
        delete M.gamesByName[t];
    }
    setOverlayMethod(e) {
        (this.overlayMethod = e),
            (this.overlayMethodStats = this.buildOverlayMethodStats(e, this.game)),
            O.verbose("setOverlayMethod", {
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
                setting_is_enabled: g.default.enabled,
                setting_method: this.getSettingMethod(),
                setting_display_user: E.default.getDisplayUserMode(),
                setting_display_name: E.default.getDisplayNameMode(),
                setting_avatar_size: E.default.getAvatarSizeMode(),
                setting_notification_position: E.default.getNotificationPositionMode(),
                setting_chat_notification: h.A.isNotificationDisabled(b.KS.TextChat) ? "DISABLED" : "ENABLED",
            },
            n = (0, d.hw)(this.game),
            r = (0, c.wH)(this.game),
            i = this.overlayMethodStats ?? this.buildOverlayMethodStats(e, this.game),
            a = null != i.any_other_method ? _.Ue[i.any_other_method] : null,
            s = null != i.current_method ? _.Ue[i.current_method] : null,
            o = n.enabledLegacy || n.enabledOOP;
        return {
            usage: {
                event_uuid: this.uuid,
                overlay_usage_stats_version: N,
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
                any_other_method: a,
                current_method: s,
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
            for (let t of Object.values(M.gamesByPid)) ++t.desktopFocusChangedCount, t.desktopFocusedTimer.toggle(e);
            M.desktopMainWindowHasFocus = e;
        }
    }
    static desktopMessageEvent(e) {
        for (let t of Object.values(M.gamesByPid))
            switch (e) {
                case "ack":
                    ++t.desktopMessageAckCount;
                    break;
                case "created":
                    ++t.desktopMessageCreateCount;
            }
    }
    static toggleRtcConnection(e) {
        for (let t of Object.values(M.gamesByPid)) t.rtcConnectionTimer.toggle(e);
    }
}
function k() {
    let e = g.default.getFocusedPID();
    if (null == e || e === T.UNSET_PID || !f.default.isOverlayOOPEnabledForPid(e)) return null;
    let t = f.default.getTrackedGameByPid(e);
    return null == t || null == t.gameName || null == t.applicationId || t.state !== _.AR.OVERLAY_RENDERING
        ? null
        : { gameName: t.gameName, gameId: t.applicationId };
}
function U(e) {
    for (let t of (O.verbose("handleRunningGamesChange", e), e.added)) {
        if (null != M.getByPid(t.pid)) {
            O.verbose("handleRunningGamesChange added", t, "already tracked");
            continue;
        }
        M.incrementConcurrentGameCount();
        let e = M.create(t);
        O.verbose("handleRunningGamesChange added", t, e);
    }
    for (let t of e.removed) M.destroy(t), O.verbose("handleRunningGamesChange removed", t);
}
function G(e) {
    if (e.pid === T.DEV_PID) return;
    let t = M.getByPid(e.pid);
    (O.verbose("OVERLAY_SET_INPUT_LOCKED", t), null == t)
        ? O.error("OVERLAY_SET_INPUT_LOCKED: Unable to find game", e, M.debug)
        : t.setLocked(e.locked);
}
function F(e) {
    if ((O.verbose("OVERLAY_NOTIFICATION_EVENT", e), null == e.gameName && null == e.gameId)) return;
    let t = M.getByName(e.gameName ?? e.gameId);
    null == t
        ? O.error("OVERLAY_NOTIFICATION_EVENT: Game not found.", e, M.debug)
        : t.notificationAnalytics.increment(e.notificationType, e.action);
}
function V(e) {
    if ((O.verbose("OVERLAY_WIDGET_CHANGED", e), null == e.gameName && null == e.gameId)) return;
    let t = M.getByName(e.gameName ?? e.gameId);
    if (null == t) return void O.error("OVERLAY_WIDGET_CHANGED: Game not found", e, M.debug);
    let n = t.widgetAnalytics.getByWidget(e.widgetType);
    null != n &&
        (n.initialized || ((n.initialized = !0), (n.pinned = e.pinned)),
        n.pinned !== e.pinned && ++n.pinnedToggledCount,
        (n.pinned = e.pinned),
        n.visibleDuration.toggle(e.visible));
}
function B(e) {
    if (
        (O.verbose("OVERLAY_FOCUSED", e),
        M.gameSetAllUnfocused(),
        null == e.pid || e.pid === T.DEV_PID || e.pid === T.UNSET_PID)
    )
        return;
    let t = M.getByPid(e.pid);
    null == t ? O.error("OVERLAY_FOCUSED: Game not found", e, M.debug) : t.gameSetFocused(!0);
}
function j(e) {
    if ((O.verbose("SOUNDBOARD_SET_OVERLAY_ENABLED", e), e.pid === T.DEV_PID)) return;
    let t = M.getByPid(e.pid);
    null == t
        ? O.error("SOUNDBOARD_SET_OVERLAY_ENABLED: Game not found", e, M.debug)
        : t.setSoundboardShown(e.enabled, !!e.enabled && (e.keepOpen ?? !1));
}
function H(e) {
    if ((O.verbose("OVERLAY_MESSAGE_EVENT_ACTION", e), null == e.gameName && null == e.gameId)) return;
    let t = M.getByName(e.gameName ?? e.gameId);
    if (null == t) return void O.error("OVERLAY_MESSAGE_EVENT_ACTION: Game not found", e, M.debug);
    switch (e.eventType) {
        case "ack":
            ++t.overlayMessageAckCount;
            break;
        case "create":
            ++t.overlayMessageCreateCount;
    }
}
function Y(e) {
    O.verbose("MESSAGE_ACKED", e);
    let t = k();
    null == t
        ? M.desktopMessageEvent("ack")
        : a.h.dispatch({
              type: "OVERLAY_MESSAGE_EVENT_ACTION",
              eventType: "ack",
              gameName: t.gameName,
              gameId: t.gameId,
          });
}
function W(e) {
    if (e.message.state !== C.cmJ.SENDING) return;
    O.verbose("MESSAGE_CREATE", e, Error().stack);
    let t = k();
    null == t
        ? M.desktopMessageEvent("created")
        : a.h.dispatch({
              type: "OVERLAY_MESSAGE_EVENT_ACTION",
              eventType: "create",
              gameName: t.gameName,
              gameId: t.gameId,
          });
}
function K(e) {
    let t = (0, S.A)();
    null != t &&
        t !== T.DEV_PID &&
        t !== T.UNSET_PID &&
        (O.verbose("AUDIO_TOGGLE_SELF_MUTE", e), M.handleMuteToggled());
}
function $(e) {
    O.verbose("WINDOW_FOCUS", e);
    let t = (0, y.Xg)();
    e.windowId !== t
        ? O.verbose("WINDOW_FOCUS: Not main window", { action: e, mainWindowId: t })
        : M.desktopSetFocused(e.focused);
}
function z(e) {
    if (e.pid === T.DEV_PID || e.pid === T.UNSET_PID) return;
    let t = M.getByPid(e.pid);
    null == t ? O.error("OVERLAY_SUCCESSFULLY_SHOWN: Game not found", e, M.debug) : (t.successfullyShown = !0);
}
function q(e) {
    let t = M.getByPid(e.pid);
    null == t
        ? O.error("OVERLAY_UPDATE_OVERLAY_METHOD: Game not found", e, M.debug)
        : e.overlayMethod !== _.Ue.Disabled &&
          (O.verbose("OVERLAY_UPDATE_OVERLAY_METHOD", e), t.setOverlayMethod(e.overlayMethod));
}
function X(e) {
    let t = M.getByPid(e.pid);
    if (null == t) return void O.error("OVERLAY_TRACK_STATE_CHANGED: Game not found", e, M.debug);
    if (e.newState !== _.AR.OVERLAY_TEARING_DOWN) {
        if (e.reason.includes("Unknown fullscreen type")) return void t.setOverlayState(e.newState, e.reason, !0);
        t.setOverlayState(e.newState, e.reason, !1);
    }
}
class Z {
    static connections = new Set();
    static previousHasConnection = !1;
    static hasConnection() {
        return Z.connections.size > 0;
    }
    static handleRTCConnectionState(e) {
        let t = (e.channelId ?? "unknown") + e.context;
        switch (e.state) {
            case C.S7L.RTC_CONNECTED:
                Z.connections.add(t);
                break;
            case C.S7L.DISCONNECTED:
                Z.connections.delete(t);
        }
        let n = Z.hasConnection();
        Z.previousHasConnection !== n && (M.toggleRtcConnection(n), (Z.previousHasConnection = n));
    }
}
class Q {
    static handleMessageAcked(e) {
        O.verbose("MESSAGE_ACKED", e);
        let t = p.A.getGame();
        null == t
            ? O.error("Game not found.")
            : a.h.dispatch({ type: "OVERLAY_MESSAGE_EVENT_ACTION", eventType: "ack", gameName: t.name, gameId: t.id });
    }
    static handleMessageCreate(e) {
        if (e.message.state !== C.cmJ.SENDING) return;
        O.verbose("MESSAGE_CREATE", e, Error().stack);
        let t = p.A.getGame();
        null == t
            ? O.error("Game not found.")
            : a.h.dispatch({
                  type: "OVERLAY_MESSAGE_EVENT_ACTION",
                  eventType: "create",
                  gameName: t.name,
                  gameId: t.id,
              });
    }
}
R &&
    !__OVERLAY__ &&
    setInterval(async () => {
        for (let e of Object.values(M.debug.gamesByName)) O.verbose("Game analytics", await e.getAnalytics());
    }, 5e3);
class J extends o.A {
    actions = __OVERLAY__
        ? { MESSAGE_ACKED: Q.handleMessageAcked, MESSAGE_CREATE: Q.handleMessageCreate }
        : {
              OVERLAY_FOCUSED: B,
              OVERLAY_NOTIFICATION_EVENT: F,
              OVERLAY_SET_INPUT_LOCKED: G,
              OVERLAY_WIDGET_CHANGED: V,
              OVERLAY_MESSAGE_EVENT_ACTION: H,
              RUNNING_GAMES_CHANGE: U,
              SOUNDBOARD_SET_OVERLAY_ENABLED: j,
              MESSAGE_ACKED: Y,
              MESSAGE_CREATE: W,
              WINDOW_FOCUS: $,
              RTC_CONNECTION_STATE: Z.handleRTCConnectionState,
              AUDIO_TOGGLE_SELF_MUTE: K,
              OVERLAY_SUCCESSFULLY_SHOWN: z,
              OVERLAY_UPDATE_OVERLAY_METHOD: q,
              OVERLAY_TRACK_STATE_CHANGED: X,
          };
}
let ee = new J();
