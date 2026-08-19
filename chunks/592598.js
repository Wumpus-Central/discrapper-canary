"use strict";
n.d(t, { A: () => E });
var i = n(17928),
    r = n(228366),
    a = n(184809),
    s = n(403362),
    l = n(93465),
    o = n(672396);
function d() {
    return { gameSettings: {}, notificationSettings: new Set() };
}
let c = d();
function u(e) {
    switch (e) {
        case o.KS.TextChat:
            return l.M.TEXT_CHAT;
        case o.KS.WelcomeNudge:
            return l.M.WELCOME_GENERAL;
        case o.KS.GoLiveNudge:
        case o.KS.GoLiveNonVoiceNudge:
            return l.M.GO_LIVE_NUDGE;
        case o.KS.NowPlayingNotification:
            return l.M.NOW_PLAYING;
        case o.KS.ClipsReminderNotification:
        case o.KS.ClipsNotification:
        case o.KS.ClipsDebugFeaturesEnabled:
        case o.KS.ClipsDebugAutoSignal:
        case o.KS.ClipsDebugSaveSuccess:
        case o.KS.ClipsDebugSaveError:
        case o.KS.ClipsDebugSaveNoOp:
        case o.KS.ClipsDebugSaveTimeout:
            return l.M.CLIPS;
        case o.KS.RequestToStream:
            return l.M.REQUEST_TO_STREAM;
        case o.KS.ActivityUserJoin:
        case o.KS.ActivityInvite:
        case o.KS.SendGameInvitesNotification:
            return l.M.GAME_ACTIVITY;
        case o.KS.IncomingCall:
        case o.KS.NewsNudge:
        case o.KS.OverlayCrashed:
            return null;
        default:
            (0, s.xb)(e);
    }
}
class _ extends i.Ay.PersistedStore {
    static displayName = "OverlaySettingsStore";
    static persistKey = "OverlaySettingsStore";
    initialize(e) {
        let t = d();
        (c = { ...t, ...(e ?? {}), notificationSettings: new Set(e?.notificationSettings ?? t.notificationSettings) }),
            this.waitFor(a.default);
    }
    getInitialOverlayState() {
        return {
            gameSettings: Object.fromEntries(
                Object.entries(c.gameSettings).map((e) => {
                    let [t, n] = e;
                    return [t, { limitedInteractionOverride: n.limitedInteractionOverride ?? null }];
                }),
            ),
            notificationSettings: Array.from(c.notificationSettings),
        };
    }
    getState() {
        return c;
    }
    isLimitedInteractionOverrideEnabled(e) {
        return null != e && (c.gameSettings[e]?.limitedInteractionOverride ?? !1);
    }
    isNotificationDisabledBySetting(e) {
        return c.notificationSettings.has(e);
    }
    isNotificationDisabled(e) {
        let t = u(e);
        return null != t && c.notificationSettings.has(t);
    }
    getDisabledNotifications() {
        return c.notificationSettings;
    }
    getDisabledSettingByNotificationType(e) {
        return u(e);
    }
}
let E = new _(r.h, {
    LOGOUT: function () {
        c = d();
    },
    OVERLAY_SET_LIMITED_INTERACTION_OVERRIDE: function (e) {
        let { applicationId: t, enabled: n } = e;
        return (c.gameSettings[t] = { limitedInteractionOverride: n }), !0;
    },
    OVERLAY_SET_NOTIFICATION_DISABLED_SETTING: function (e) {
        let { setting: t, disabled: n } = e;
        return (
            n ? c.notificationSettings.add(t) : c.notificationSettings.delete(t),
            (c.notificationSettings = new Set(c.notificationSettings)),
            !0
        );
    },
    OVERLAY_INITIALIZE: function (e) {
        let { overlayNotificationSettings: t } = e;
        c.notificationSettings = new Set(t.notificationSettings);
        let n = Object.fromEntries(
            Object.entries(t.gameSettings)
                .filter((e) => {
                    let [t, n] = e;
                    return null != n.limitedInteractionOverride;
                })
                .map((e) => {
                    let [t, n] = e;
                    return [t, { limitedInteractionOverride: n.limitedInteractionOverride ?? void 0 }];
                }),
        );
        c.gameSettings = { ...c.gameSettings, ...n };
    },
});
