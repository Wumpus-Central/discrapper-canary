"use strict";
n.r(t), n.d(t, { parseSettingsUrl: () => f, settingsPathToRoute: () => u, trackParseSettingsUrl: () => _ });
var r = n(492462),
    i = n(954571),
    s = n(780964),
    a = n(355097),
    o = n(652215);
let l = /[_\s]|%20/g;
function u(e) {
    let t = e.split("/");
    return o.BVt.SETTINGS(t[0], t[1]);
}
function d(e) {
    return null == e ? "" : e.toLowerCase().replace(l, "-");
}
function c(e) {
    return Object.values(a.od).includes(e);
}
function _(e, t) {
    let { target: n, path: r } = e;
    null == n
        ? i.default.track(o.HAw.USER_SETTINGS_URL_PARSING_FAILED, {
              user_settings_url_origin: t,
              user_settings_url_path: r,
          })
        : i.default.track(o.HAw.USER_SETTINGS_URL_PARSED, { user_settings_url_path: r, user_settings_url_origin: t });
}
function f(e) {
    let { path: t, search: n } = e,
        [, , i, o] = t.split("?")[0].split("/"),
        l = d(i),
        u = [l, d(o)].filter(Boolean).join("/"),
        _ = {
            [a.od.ACCOUNT]: s.X.ACCOUNT_PANEL,
            [a.od.ACCOUNT_STANDING]: s.X.ACCOUNT_STANDING_CATEGORY,
            [a.od.ACCOUNT_ACCOUNT_STANDING]: s.X.ACCOUNT_STANDING_CATEGORY,
            [a.od.PROFILE_CUSTOMIZATION]: s.X.PROFILE_PANEL,
            [a.od.CONTENT_AND_SOCIAL]: s.X.CONTENT_AND_SOCIAL_PANEL,
            [a.od.CONNECTED_GAMES]: s.X.CONTENT_AND_SOCIAL_CONNECTED_GAMES_CATEGORY,
            [a.od.CONTENT_AND_SOCIAL_CONNECTED_GAMES]: s.X.CONTENT_AND_SOCIAL_CONNECTED_GAMES_CATEGORY,
            [a.od.DATA_AND_PRIVACY]: s.X.DATA_AND_PRIVACY_PANEL,
            [a.od.PRIVACY_AND_SAFETY]: s.X.DATA_AND_PRIVACY_PANEL,
            [a.od.FAMILY_CENTER]: s.X.FAMILY_CENTER_PANEL,
            [a.od.SESSIONS]: s.X.SESSIONS_PANEL,
            [a.od.AUTHORIZED_APPS]: s.X.AUTHORIZED_APPS_PANEL,
            [a.od.CONNECTIONS]: s.X.CONNECTIONS_PANEL,
            [a.od.CLIPS]: s.X.CLIPS_PANEL,
            [a.od.PREMIUM]: s.X.NITRO_PANEL,
            [a.od.GUILD_BOOSTING]: s.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL,
            [a.od.SUBSCRIPTIONS]: s.X.SUBSCRIPTIONS_PANEL,
            [a.od.SUBSCRIPTIONS_ROLE_SUBSCRIPTIONS]: s.X.SUBSCRIPTIONS_PANEL,
            [a.od.INVENTORY]: s.X.GIFT_PANEL,
            [a.od.BILLING]: s.X.BILLING_PANEL,
            [a.od.APPEARANCE]: s.X.APPEARANCE_PANEL,
            [a.od.ACCESSIBILITY]: s.X.ACCESSIBILITY_PANEL,
            [a.od.VOICE]: s.X.VOICE_AND_VIDEO_PANEL,
            [a.od.POGGERMODE]: s.X.POGGERMODE_PANEL,
            [a.od.TEXT]: s.X.APPEARANCE_MESSAGES_CATEGORY,
            [a.od.NOTIFICATIONS]: s.X.NOTIFICATIONS_PANEL,
            [a.od.EMAILS]: s.X.NOTIFICATIONS_EMAIL_CATEGORY,
            [a.od.NOTIFICATIONS_EMAILS]: s.X.NOTIFICATIONS_EMAIL_CATEGORY,
            [a.od.KEYBINDS]: s.X.KEYBINDS_PANEL,
            [a.od.LANGUAGE]: s.X.LANGUAGE_AND_TIME_PANEL,
            [a.od.WINDOWS]: s.X.WINDOWS_PANEL,
            [a.od.LINUX]: s.X.LINUX_PANEL,
            [a.od.STREAMER_MODE]: s.X.STREAMER_MODE_CATEGORY,
            [a.od.ADVANCED]: s.X.DEVELOPER_PANEL,
            [a.od.ACTIVITY_PRIVACY]: s.X.ACTIVITY_PRIVACY_PANEL,
            [a.od.REGISTERED_GAMES]: s.X.REGISTERED_GAMES_PANEL,
            [a.od.OVERLAY]: s.X.OVERLAY_PANEL,
            [a.od.EXPERIMENTS]: s.X.EXPERIMENTS_PANEL,
            [a.od.DEVELOPER_OPTIONS]: s.X.DEVELOPER_OPTIONS_PANEL,
        };
    return {
        target: (c(u) ? _[u] : void 0) ?? (c(l) ? _[l] : void 0),
        path: u,
        params: (0, r.parse)(n ?? location.search),
    };
}
