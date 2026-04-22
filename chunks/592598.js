"use strict";
n.d(t, { A: () => f });
var r = n(311907),
    i = n(73153),
    s = n(256415),
    a = n(403362),
    o = n(93465),
    l = n(672396);
function u() {
    return { gameSettings: {}, notificationSettings: new Set() };
}
let d = u();
function c(e) {
    switch (e) {
        case l.KS.TextChat:
            return o.M.TEXT_CHAT;
        case l.KS.WelcomeNudge:
            return o.M.WELCOME_GENERAL;
        case l.KS.GoLiveNudge:
        case l.KS.GoLiveNonVoiceNudge:
            return o.M.GO_LIVE_NUDGE;
        case l.KS.NowPlayingNotification:
            return o.M.NOW_PLAYING;
        case l.KS.ClipsReminderNotification:
        case l.KS.ClipsNotification:
            return o.M.CLIPS;
        case l.KS.RequestToStream:
            return o.M.REQUEST_TO_STREAM;
        case l.KS.ActivityUserJoin:
        case l.KS.ActivityInvite:
        case l.KS.SendGameInvitesNotification:
            return o.M.GAME_ACTIVITY;
        case l.KS.IncomingCall:
        case l.KS.NewsNudge:
        case l.KS.OverlayCrashed:
            return null;
        default:
            (0, a.xb)(e);
    }
}
class _ extends r.Ay.PersistedStore {
    static displayName = "OverlaySettingsStore";
    static persistKey = "OverlaySettingsStore";
    initialize(e) {
        let t = u();
        (d = { ...t, ...(e ?? {}), notificationSettings: new Set(e?.notificationSettings ?? t.notificationSettings) }),
            this.waitFor(s.default);
    }
    getInitialOverlayState() {
        return {
            gameSettings: Object.fromEntries(
                Object.entries(d.gameSettings).map((e) => {
                    let [t, n] = e;
                    return [t, { limitedInteractionOverride: n.limitedInteractionOverride ?? null }];
                }),
            ),
            notificationSettings: Array.from(d.notificationSettings),
        };
    }
    getState() {
        return d;
    }
    isLimitedInteractionOverrideEnabled(e) {
        return null != e && (d.gameSettings[e]?.limitedInteractionOverride ?? !1);
    }
    isNotificationDisabledBySetting(e) {
        return d.notificationSettings.has(e);
    }
    isNotificationDisabled(e) {
        let t = c(e);
        return null != t && d.notificationSettings.has(t);
    }
    getDisabledNotifications() {
        return d.notificationSettings;
    }
    getDisabledSettingByNotificationType(e) {
        return c(e);
    }
}
let f = new _(i.h, {
    LOGOUT: function () {
        d = u();
    },
    OVERLAY_SET_LIMITED_INTERACTION_OVERRIDE: function (e) {
        let { applicationId: t, enabled: n } = e;
        return (d.gameSettings[t] = { limitedInteractionOverride: n }), !0;
    },
    OVERLAY_SET_NOTIFICATION_DISABLED_SETTING: function (e) {
        let { setting: t, disabled: n } = e;
        return (
            n ? d.notificationSettings.add(t) : d.notificationSettings.delete(t),
            (d.notificationSettings = new Set(d.notificationSettings)),
            !0
        );
    },
    OVERLAY_INITIALIZE: function (e) {
        let { overlayNotificationSettings: t } = e;
        d.notificationSettings = new Set(t.notificationSettings);
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
        d.gameSettings = { ...d.gameSettings, ...n };
    },
});
