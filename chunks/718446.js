n.r(t), n.d(t, { parseSettingsUrl: () => E, settingsPathToRoute: () => d, trackParseSettingsUrl: () => _ });
var i = n(492462),
    r = n(174459),
    a = n(780964),
    s = n(355097),
    l = n(652215);
let o = /[_\s]|%20/g;
function d(e) {
    let t = e.split("/");
    return l.BVt.SETTINGS(t[0], t[1]);
}
function c(e) {
    return null == e ? "" : e.toLowerCase().replace(o, "-");
}
function u(e) {
    return Object.values(s.od).includes(e);
}
function _(e, t) {
    let { target: n, path: i } = e;
    null == n
        ? r.default.track(l.HAw.USER_SETTINGS_URL_PARSING_FAILED, {
              user_settings_url_origin: t,
              user_settings_url_path: i,
          })
        : r.default.track(l.HAw.USER_SETTINGS_URL_PARSED, { user_settings_url_path: i, user_settings_url_origin: t });
}
function E(e) {
    let { path: t, search: n } = e,
        [, , r, l] = t.split("?")[0].split("/"),
        o = c(r),
        d = [o, c(l)].filter(Boolean).join("/"),
        _ = {
            [s.od.ACCOUNT]: a.X.ACCOUNT_PANEL,
            [s.od.ACCOUNT_STANDING]: a.X.ACCOUNT_STANDING_CATEGORY,
            [s.od.ACCOUNT_ACCOUNT_STANDING]: a.X.ACCOUNT_STANDING_CATEGORY,
            [s.od.PROFILE_CUSTOMIZATION]: a.X.PROFILE_PANEL,
            [s.od.CONTENT_AND_SOCIAL]: a.X.MESSAGING_PERMISSIONS_PANEL,
            [s.od.CONNECTED_GAMES]: a.X.CONNECTED_GAMES_CATEGORY,
            [s.od.CONTENT_AND_SOCIAL_CONNECTED_GAMES]: a.X.CONNECTED_GAMES_CATEGORY,
            [s.od.DATA_AND_PRIVACY]: a.X.DATA_AND_PRIVACY_PANEL,
            [s.od.PRIVACY_AND_SAFETY]: a.X.DATA_AND_PRIVACY_PANEL,
            [s.od.FAMILY_CENTER]: a.X.FAMILY_CENTER_PANEL,
            [s.od.SESSIONS]: a.X.SESSIONS_PANEL,
            [s.od.AUTHORIZED_APPS]: a.X.AUTHORIZED_APPS_CATEGORY,
            [s.od.CONNECTIONS]: a.X.CONNECTIONS_CATEGORY,
            [s.od.CLIPS]: a.X.CLIPS_PANEL,
            [s.od.PREMIUM]: a.X.NITRO_PANEL,
            [s.od.GUILD_BOOSTING]: a.X.PREMIUM_GUILD_SUBSCRIPTIONS_PANEL,
            [s.od.SUBSCRIPTIONS]: a.X.SUBSCRIPTIONS_PANEL,
            [s.od.SUBSCRIPTIONS_ROLE_SUBSCRIPTIONS]: a.X.SUBSCRIPTIONS_PANEL,
            [s.od.INVENTORY]: a.X.GIFT_PANEL,
            [s.od.BILLING]: a.X.BILLING_PANEL,
            [s.od.APPEARANCE]: a.X.APPEARANCE_PANEL,
            [s.od.ACCESSIBILITY]: a.X.ACCESSIBILITY_PANEL,
            [s.od.VOICE]: a.X.VOICE_AND_VIDEO_PANEL,
            [s.od.POGGERMODE]: a.X.POGGERMODE_PANEL,
            [s.od.TEXT]: a.X.APPEARANCE_MESSAGES_CATEGORY,
            [s.od.NOTIFICATIONS]: a.X.NOTIFICATIONS_PANEL,
            [s.od.EMAILS]: a.X.NOTIFICATIONS_EMAIL_CATEGORY,
            [s.od.NOTIFICATIONS_EMAILS]: a.X.NOTIFICATIONS_EMAIL_CATEGORY,
            [s.od.KEYBINDS]: a.X.SYSTEM_CUSTOM_KEYBINDS_CATEGORY,
            [s.od.SYSTEM]: a.X.SYSTEM_PANEL,
            [s.od.LANGUAGE]: a.X.LANGUAGE_AND_TIME_PANEL,
            [s.od.WINDOWS]: a.X.SYSTEM_PANEL,
            [s.od.LINUX]: a.X.SYSTEM_PANEL,
            [s.od.STREAMER_MODE]: a.X.STREAMER_MODE_CATEGORY,
            [s.od.ADVANCED]: a.X.DEVELOPER_PANEL,
            [s.od.ACTIVITY_PRIVACY]: a.X.ACTIVITY_PRIVACY_PANEL,
            [s.od.REGISTERED_GAMES]: a.X.REGISTERED_GAMES_PANEL,
            [s.od.OVERLAY]: a.X.OVERLAY_PANEL,
            [s.od.EXPERIMENTS]: a.X.EXPERIMENTS_PANEL,
            [s.od.DEVELOPER_OPTIONS]: a.X.DEVELOPER_OPTIONS_PANEL,
        };
    return {
        target: (u(d) ? _[d] : void 0) ?? (u(o) ? _[o] : void 0),
        path: d,
        params: (0, i.parse)(n ?? location.search),
    };
}
