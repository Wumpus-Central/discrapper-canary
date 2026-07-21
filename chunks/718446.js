"use strict";
n.r(t), n.d(t, { parseSettingsUrl: () => A, settingsPathToRoute: () => c, trackParseSettingsUrl: () => E });
var i = n(492462),
    r = n(174459),
    a = n(780964),
    s = n(358776),
    l = n(355097),
    o = n(652215);
let d = /[_\s]|%20/g;
function c(e) {
    let t = e.split("/");
    return o.BVt.SETTINGS(t[0], t[1]);
}
function u(e) {
    return null == e ? "" : e.toLowerCase().replace(d, "-");
}
function _(e) {
    return Object.values(l.od).includes(e);
}
function E(e, t) {
    let { target: n, path: i } = e;
    null == n
        ? r.default.track(o.HAw.USER_SETTINGS_URL_PARSING_FAILED, {
              user_settings_url_origin: t,
              user_settings_url_path: i,
          })
        : r.default.track(o.HAw.USER_SETTINGS_URL_PARSED, { user_settings_url_path: i, user_settings_url_origin: t });
}
function A(e) {
    let t,
        { path: n, search: r } = e,
        [, , o, d] = n.split("?")[0].split("/"),
        c = u(o),
        E = [c, u(d)].filter(Boolean).join("/"),
        A =
            ((t = (0, s.Bv)("UserSection")),
            {
                [l.od.ACCOUNT]: a.X.ACCOUNT_PANEL,
                [l.od.ACCOUNT_STANDING]: a.X.ACCOUNT_STANDING_CATEGORY,
                [l.od.ACCOUNT_ACCOUNT_STANDING]: a.X.ACCOUNT_STANDING_CATEGORY,
                [l.od.PROFILE_CUSTOMIZATION]: a.X.PROFILE_PANEL,
                [l.od.CONTENT_AND_SOCIAL]: t ? a.X.MESSAGING_PERMISSIONS_PANEL : a.X.CONTENT_AND_SOCIAL_PANEL,
                [l.od.CONNECTED_GAMES]: a.X.CONNECTED_GAMES_CATEGORY,
                [l.od.CONTENT_AND_SOCIAL_CONNECTED_GAMES]: a.X.CONNECTED_GAMES_CATEGORY,
                [l.od.DATA_AND_PRIVACY]: a.X.DATA_AND_PRIVACY_PANEL,
                [l.od.PRIVACY_AND_SAFETY]: a.X.DATA_AND_PRIVACY_PANEL,
                [l.od.FAMILY_CENTER]: a.X.FAMILY_CENTER_PANEL,
                [l.od.SESSIONS]: a.X.SESSIONS_PANEL,
                [l.od.AUTHORIZED_APPS]: t ? a.X.AUTHORIZED_APPS_CATEGORY : a.X.AUTHORIZED_APPS_PANEL,
                [l.od.CONNECTIONS]: t ? a.X.CONNECTIONS_CATEGORY : a.X.CONNECTIONS_PANEL,
                [l.od.CLIPS]: a.X.CLIPS_PANEL,
                [l.od.PREMIUM]: a.X.NITRO_PANEL,
                [l.od.GUILD_BOOSTING]: a.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL,
                [l.od.SUBSCRIPTIONS]: a.X.SUBSCRIPTIONS_PANEL,
                [l.od.SUBSCRIPTIONS_ROLE_SUBSCRIPTIONS]: a.X.SUBSCRIPTIONS_PANEL,
                [l.od.INVENTORY]: a.X.GIFT_PANEL,
                [l.od.BILLING]: a.X.BILLING_PANEL,
                [l.od.APPEARANCE]: a.X.APPEARANCE_PANEL,
                [l.od.ACCESSIBILITY]: a.X.ACCESSIBILITY_PANEL,
                [l.od.VOICE]: a.X.VOICE_AND_VIDEO_PANEL,
                [l.od.POGGERMODE]: a.X.POGGERMODE_PANEL,
                [l.od.TEXT]: a.X.APPEARANCE_MESSAGES_CATEGORY,
                [l.od.NOTIFICATIONS]: a.X.NOTIFICATIONS_PANEL,
                [l.od.EMAILS]: a.X.NOTIFICATIONS_EMAIL_CATEGORY,
                [l.od.NOTIFICATIONS_EMAILS]: a.X.NOTIFICATIONS_EMAIL_CATEGORY,
                [l.od.KEYBINDS]: a.X.SYSTEM_CUSTOM_KEYBINDS_CATEGORY,
                [l.od.SYSTEM]: a.X.SYSTEM_PANEL,
                [l.od.LANGUAGE]: a.X.LANGUAGE_AND_TIME_PANEL,
                [l.od.WINDOWS]: a.X.SYSTEM_PANEL,
                [l.od.LINUX]: a.X.SYSTEM_PANEL,
                [l.od.STREAMER_MODE]: a.X.STREAMER_MODE_CATEGORY,
                [l.od.ADVANCED]: a.X.DEVELOPER_PANEL,
                [l.od.ACTIVITY_PRIVACY]: a.X.ACTIVITY_PRIVACY_PANEL,
                [l.od.REGISTERED_GAMES]: a.X.REGISTERED_GAMES_PANEL,
                [l.od.OVERLAY]: a.X.OVERLAY_PANEL,
                [l.od.EXPERIMENTS]: a.X.EXPERIMENTS_PANEL,
                [l.od.DEVELOPER_OPTIONS]: a.X.DEVELOPER_OPTIONS_PANEL,
            });
    return {
        target: (_(E) ? A[E] : void 0) ?? (_(c) ? A[c] : void 0),
        path: E,
        params: (0, i.parse)(r ?? location.search),
    };
}
