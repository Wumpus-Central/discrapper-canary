"use strict";
n.r(t), n.d(t, { parseSettingsUrl: () => f, settingsPathToRoute: () => c, trackParseSettingsUrl: () => h });
var i = n(492462),
    r = n(174459),
    s = n(780964),
    a = n(358776),
    o = n(355097),
    l = n(652215);
let u = /[_\s]|%20/g;
function c(e) {
    let t = e.split("/");
    return l.BVt.SETTINGS(t[0], t[1]);
}
function d(e) {
    return null == e ? "" : e.toLowerCase().replace(u, "-");
}
function _(e) {
    return Object.values(o.od).includes(e);
}
function h(e, t) {
    let { target: n, path: i } = e;
    null == n
        ? r.default.track(l.HAw.USER_SETTINGS_URL_PARSING_FAILED, {
              user_settings_url_origin: t,
              user_settings_url_path: i,
          })
        : r.default.track(l.HAw.USER_SETTINGS_URL_PARSED, { user_settings_url_path: i, user_settings_url_origin: t });
}
function f(e) {
    let t,
        { path: n, search: r } = e,
        [, , l, u] = n.split("?")[0].split("/"),
        c = d(l),
        h = [c, d(u)].filter(Boolean).join("/"),
        f =
            ((t = (0, a.Bv)("UserSection")),
            {
                [o.od.ACCOUNT]: s.X.ACCOUNT_PANEL,
                [o.od.ACCOUNT_STANDING]: s.X.ACCOUNT_STANDING_CATEGORY,
                [o.od.ACCOUNT_ACCOUNT_STANDING]: s.X.ACCOUNT_STANDING_CATEGORY,
                [o.od.PROFILE_CUSTOMIZATION]: s.X.PROFILE_PANEL,
                [o.od.CONTENT_AND_SOCIAL]: t ? s.X.MESSAGING_PERMISSIONS_PANEL : s.X.CONTENT_AND_SOCIAL_PANEL,
                [o.od.CONNECTED_GAMES]: s.X.CONNECTED_GAMES_CATEGORY,
                [o.od.CONTENT_AND_SOCIAL_CONNECTED_GAMES]: s.X.CONNECTED_GAMES_CATEGORY,
                [o.od.DATA_AND_PRIVACY]: s.X.DATA_AND_PRIVACY_PANEL,
                [o.od.PRIVACY_AND_SAFETY]: s.X.DATA_AND_PRIVACY_PANEL,
                [o.od.FAMILY_CENTER]: s.X.FAMILY_CENTER_PANEL,
                [o.od.SESSIONS]: s.X.SESSIONS_PANEL,
                [o.od.AUTHORIZED_APPS]: t ? s.X.AUTHORIZED_APPS_CATEGORY : s.X.AUTHORIZED_APPS_PANEL,
                [o.od.CONNECTIONS]: t ? s.X.CONNECTIONS_CATEGORY : s.X.CONNECTIONS_PANEL,
                [o.od.CLIPS]: s.X.CLIPS_PANEL,
                [o.od.PREMIUM]: s.X.NITRO_PANEL,
                [o.od.GUILD_BOOSTING]: s.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL,
                [o.od.SUBSCRIPTIONS]: s.X.SUBSCRIPTIONS_PANEL,
                [o.od.SUBSCRIPTIONS_ROLE_SUBSCRIPTIONS]: s.X.SUBSCRIPTIONS_PANEL,
                [o.od.INVENTORY]: s.X.GIFT_PANEL,
                [o.od.BILLING]: s.X.BILLING_PANEL,
                [o.od.APPEARANCE]: s.X.APPEARANCE_PANEL,
                [o.od.ACCESSIBILITY]: s.X.ACCESSIBILITY_PANEL,
                [o.od.VOICE]: s.X.VOICE_AND_VIDEO_PANEL,
                [o.od.POGGERMODE]: s.X.POGGERMODE_PANEL,
                [o.od.TEXT]: s.X.APPEARANCE_MESSAGES_CATEGORY,
                [o.od.NOTIFICATIONS]: s.X.NOTIFICATIONS_PANEL,
                [o.od.EMAILS]: s.X.NOTIFICATIONS_EMAIL_CATEGORY,
                [o.od.NOTIFICATIONS_EMAILS]: s.X.NOTIFICATIONS_EMAIL_CATEGORY,
                [o.od.KEYBINDS]: s.X.KEYBINDS_PANEL,
                [o.od.LANGUAGE]: s.X.LANGUAGE_AND_TIME_PANEL,
                [o.od.WINDOWS]: s.X.WINDOWS_PANEL,
                [o.od.LINUX]: s.X.LINUX_PANEL,
                [o.od.STREAMER_MODE]: s.X.STREAMER_MODE_CATEGORY,
                [o.od.ADVANCED]: s.X.DEVELOPER_PANEL,
                [o.od.ACTIVITY_PRIVACY]: s.X.ACTIVITY_PRIVACY_PANEL,
                [o.od.REGISTERED_GAMES]: s.X.REGISTERED_GAMES_PANEL,
                [o.od.OVERLAY]: s.X.OVERLAY_PANEL,
                [o.od.EXPERIMENTS]: s.X.EXPERIMENTS_PANEL,
                [o.od.DEVELOPER_OPTIONS]: s.X.DEVELOPER_OPTIONS_PANEL,
            });
    return {
        target: (_(h) ? f[h] : void 0) ?? (_(c) ? f[c] : void 0),
        path: h,
        params: (0, i.parse)(r ?? location.search),
    };
}
