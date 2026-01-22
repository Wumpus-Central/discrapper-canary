n.d(t, {
    A: () => v,
}),
    n(896048),
    n(446912);
var r,
    i = n(311907),
    a = n(73153),
    s = n(256415),
    o = n(403362),
    l = n(93465),
    c = n(672396);

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

function p(e, t) {
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

function _() {
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
    return (
        (m.gameSettings[t] = {
            limitedInteractionOverride: n,
        }),
        !0
    );
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
        case c.KS.TextChat:
            return l.M.TEXT_CHAT;
        case c.KS.WelcomeNudge:
            return l.M.WELCOME_GENERAL;
        case c.KS.GoLiveNudge:
        case c.KS.GoLiveNonVoiceNudge:
            return l.M.GO_LIVE_NUDGE;
        case c.KS.NowPlayingNotification:
            return l.M.NOW_PLAYING;
        case c.KS.StreamWatchNudge:
            return l.M.FRIEND_STREAM_WATCH_NUDGE;
        case c.KS.ClipsReminderNotification:
        case c.KS.ClipsNotification:
            return l.M.CLIPS;
        case c.KS.RequestToStream:
            return l.M.REQUEST_TO_STREAM;
        case c.KS.ActivityUserJoin:
        case c.KS.ActivityInvite:
        case c.KS.SendGameInvitesNotification:
            return l.M.GAME_ACTIVITY;
        case c.KS.IncomingCall:
        case c.KS.NewsNudge:
        case c.KS.KeybindIndicatorsNotification:
        case c.KS.OverlayCrashed:
            return null;
        default:
            (0, o.xb)(e);
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
                return [
                    n,
                    {
                        limitedInteractionOverride: null != (t = r.limitedInteractionOverride) ? t : void 0,
                    },
                ];
            }),
    );
    m.gameSettings = d({}, m.gameSettings, n);
}
class A extends (r = i.Ay.PersistedStore) {
    initialize(e) {
        var t;
        let n = h();
        (m = p(d({}, n, null != e ? e : {}), {
            notificationSettings: new Set(
                null != (t = null == e ? void 0 : e.notificationSettings) ? t : n.notificationSettings,
            ),
        })),
            this.waitFor(s.default);
    }
    getInitialOverlayState() {
        return {
            gameSettings: Object.fromEntries(
                Object.entries(m.gameSettings).map((e) => {
                    var t;
                    let [n, r] = e;
                    return [
                        n,
                        {
                            limitedInteractionOverride: null != (t = r.limitedInteractionOverride) ? t : null,
                        },
                    ];
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
        return null != e && null != (t = null == (n = m.gameSettings[e]) ? void 0 : n.limitedInteractionOverride) && t;
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
u(A, "displayName", "OverlaySettingsStore"), u(A, "persistKey", "OverlaySettingsStore");
let v = new A(a.h, {
    LOGOUT: _,
    OVERLAY_SET_LIMITED_INTERACTION_OVERRIDE: E,
    OVERLAY_SET_NOTIFICATION_DISABLED_SETTING: b,
    OVERLAY_INITIALIZE: O,
});
