n.d(t, { Z: () => I }), n(388685), n(467055);
var r,
    i = n(442837),
    a = n(570140),
    o = n(237997),
    s = n(823379),
    l = n(486016),
    c = n(987650);
function u(e, t, n) {
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
function d(e) {
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
                u(e, t, n[t]);
            });
    }
    return e;
}
function f(e, t) {
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
function _(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : f(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function p() {
    return g();
}
function h() {
    return {
        gameSettings: {},
        notificationSettings: new Set(),
    };
}
let m = h();
function g() {
    m = h();
}
function E(e) {
    let { applicationId: t, enabled: n } = e;
    return (m.gameSettings[t] = { limitedInteractionOverride: n }), !0;
}
function b(e) {
    let { setting: t, disabled: n } = e;
    return (
        n ? m.notificationSettings.add(t) : m.notificationSettings.delete(t),
        (m.notificationSettings = new Set(m.notificationSettings)),
        !0
    );
}
function y(e) {
    switch (e) {
        case c.n0.TextChat:
            return l.i.TEXT_CHAT;
        case c.n0.WelcomeNudge:
            return l.i.WELCOME_GENERAL;
        case c.n0.GoLiveNudge:
        case c.n0.GoLiveNonVoiceNudge:
            return l.i.GO_LIVE_NUDGE;
        case c.n0.NowPlayingNotification:
            return l.i.NOW_PLAYING;
        case c.n0.StreamWatchNudge:
            return l.i.FRIEND_STREAM_WATCH_NUDGE;
        case c.n0.ClipsReminderNotification:
        case c.n0.ClipsNotification:
            return l.i.CLIPS;
        case c.n0.RequestToStream:
            return l.i.REQUEST_TO_STREAM;
        case c.n0.ActivityUserJoin:
        case c.n0.ActivityInvite:
        case c.n0.SendGameInvitesNotification:
            return l.i.GAME_ACTIVITY;
        case c.n0.IncomingCall:
        case c.n0.NewsNudge:
        case c.n0.KeybindIndicatorsNotification:
        case c.n0.OverlayCrashed:
            return null;
        default:
            (0, s.vE)(e);
    }
}
function O(e) {
    let { overlayNotificationSettings: t } = e;
    m.notificationSettings = new Set(t.notificationSettings);
    let n = Object.fromEntries(
        Object.entries(t.gameSettings)
            .filter((e) => {
                let [t, n] = e;
                return null != n.limitedInteractionOverride;
            })
            .map((e) => {
                var t;
                let [n, r] = e;
                return [n, { limitedInteractionOverride: null != (t = r.limitedInteractionOverride) ? t : void 0 }];
            }),
    );
    m.gameSettings = d({}, m.gameSettings, n);
}
class v extends (r = i.ZP.PersistedStore) {
    initialize(e) {
        var t;
        let n = h();
        (m = _(d({}, n, null != e ? e : {}), {
            notificationSettings: new Set(
                null != (t = null == e ? void 0 : e.notificationSettings) ? t : n.notificationSettings,
            ),
        })),
            this.waitFor(o.default);
    }
    getInitialOverlayState() {
        return {
            gameSettings: Object.fromEntries(
                Object.entries(m.gameSettings).map((e) => {
                    var t;
                    let [n, r] = e;
                    return [n, { limitedInteractionOverride: null != (t = r.limitedInteractionOverride) ? t : null }];
                }),
            ),
            notificationSettings: Array.from(m.notificationSettings),
        };
    }
    getState() {
        return m;
    }
    isLimitedInteractionOverrideEnabled(e) {
        var t, n;
        return null != e && null != (n = null == (t = m.gameSettings[e]) ? void 0 : t.limitedInteractionOverride) && n;
    }
    isNotificationDisabledBySetting(e) {
        return m.notificationSettings.has(e);
    }
    isNotificationDisabled(e) {
        let t = y(e);
        return null != t && m.notificationSettings.has(t);
    }
    getDisabledNotifications() {
        return m.notificationSettings;
    }
    getDisabledSettingByNotificationType(e) {
        return y(e);
    }
}
u(v, "displayName", "OverlaySettingsStore"), u(v, "persistKey", "OverlaySettingsStore");
let I = new v(a.Z, {
    LOGOUT: p,
    OVERLAY_SET_LIMITED_INTERACTION_OVERRIDE: E,
    OVERLAY_SET_NOTIFICATION_DISABLED_SETTING: b,
    OVERLAY_INITIALIZE: O,
});
