"use strict";
n.d(t, { A: () => E });
var i = n(17928),
    r = n(228366),
    s = n(256415),
    a = n(403362),
    o = n(93465),
    l = n(672396);
function d() {
    return { gameSettings: {}, notificationSettings: new Set() };
}
let _ = d();
function u(e) {
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
class c extends i.Ay.PersistedStore {
    static displayName = "OverlaySettingsStore";
    static persistKey = "OverlaySettingsStore";
    initialize(e) {
        let t = d();
        (_ = { ...t, ...(e ?? {}), notificationSettings: new Set(e?.notificationSettings ?? t.notificationSettings) }),
            this.waitFor(s.default);
    }
    getInitialOverlayState() {
        return {
            gameSettings: Object.fromEntries(
                Object.entries(_.gameSettings).map((e) => {
                    let [t, n] = e;
                    return [t, { limitedInteractionOverride: n.limitedInteractionOverride ?? null }];
                }),
            ),
            notificationSettings: Array.from(_.notificationSettings),
        };
    }
    getState() {
        return _;
    }
    isLimitedInteractionOverrideEnabled(e) {
        return null != e && (_.gameSettings[e]?.limitedInteractionOverride ?? !1);
    }
    isNotificationDisabledBySetting(e) {
        return _.notificationSettings.has(e);
    }
    isNotificationDisabled(e) {
        let t = u(e);
        return null != t && _.notificationSettings.has(t);
    }
    getDisabledNotifications() {
        return _.notificationSettings;
    }
    getDisabledSettingByNotificationType(e) {
        return u(e);
    }
}
let E = new c(r.h, {
    LOGOUT: function () {
        _ = d();
    },
    OVERLAY_SET_LIMITED_INTERACTION_OVERRIDE: function (e) {
        let { applicationId: t, enabled: n } = e;
        return (_.gameSettings[t] = { limitedInteractionOverride: n }), !0;
    },
    OVERLAY_SET_NOTIFICATION_DISABLED_SETTING: function (e) {
        let { setting: t, disabled: n } = e;
        return (
            n ? _.notificationSettings.add(t) : _.notificationSettings.delete(t),
            (_.notificationSettings = new Set(_.notificationSettings)),
            !0
        );
    },
    OVERLAY_INITIALIZE: function (e) {
        let { overlayNotificationSettings: t } = e;
        _.notificationSettings = new Set(t.notificationSettings);
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
        _.gameSettings = { ..._.gameSettings, ...n };
    },
});
