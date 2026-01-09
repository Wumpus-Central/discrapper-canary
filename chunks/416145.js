n.d(t, {
    I_: () => l,
    ME: () => s,
    ST: () => c,
    Z5: () => p,
    Ze: () => d,
    o_: () => u,
});
var r = n(860911),
    i = n(188785),
    a = n(979007),
    o = n(688357);
let s = "@me",
    l = "@favorites",
    c = "@inbox",
    u = "@guilds-empty-nux",
    d = [s, l, u, c],
    f = Object.freeze({
        INDEX: "/",
        APP: "/app",
        APP_WITH_INVITE_AND_GUILD_ONBOARDING: (e) => "/app/invite-with-guild-onboarding/".concat(e),
        APP_WITH_GIFT_CODE: (e) => "/app/gifts/".concat(e),
        ACTIVITY: "/activity",
        ACTIVITIES: "/activities",
        ACTIVITIES_HAPPENING_NOW: "/activities/happening-now",
        ACTIVITY_DETAILS: (e) => "/activities/".concat(e),
        APPLICATION_LIBRARY: "/library",
        APPLICATION_LIBRARY_INVENTORY: "/library/inventory",
        APPLICATION_LIBRARY_ACTION: (e, t) => "/library/".concat(e, "/").concat(t),
        APPLICATION_LIBRARY_SETTINGS: "/library/settings",
        APPLICATION_STORE: "/store",
        APPLICATION_STORE_LISTING_SKU: (e, t) => "/store/skus/".concat(e).concat(null != t ? "/".concat(t) : ""),
        APPLICATION_STORE_LISTING_APPLICATION: (e, t) =>
            "/store/applications/".concat(e).concat(null != t ? "/".concat(t) : ""),
        BILLING_PREFIX: "/billing",
        BILLING_LOGIN_HANDOFF: "/billing/login/handoff",
        BILLING_PREMIUM_SUBSCRIBE: "/billing/premium/subscribe",
        BILLING_PAYMENT_SOURCES_CREATE: "/billing/payment-sources/create",
        BILLING_PREMIUM_SWITCH_PLAN: "/billing/premium/switch-plan",
        BILLING_GUILD_SUBSCRIPTIONS_PURCHASE: "/billing/guild-subscriptions/purchase",
        BILLING_PAYMENTS: "/billing/payments",
        BILLING_PROMOTION_REDEMPTION: (e) => "/billing/promotions/".concat(e),
        BILLING_PROMOTION_REDEMPTION_GENERIC: "/billing/promotions",
        BILLING_PROMOTION_DIRECT_FULFILLMENT_REDEMPTION: (e, t) =>
            "/billing/partner-promotions/".concat(e, "/").concat(t),
        NOTIFICATIONS: "/notifications",
        FRIENDS: "/channels/@me",
        ME: "/channels/@me",
        MESSAGE_REQUESTS: "/message-requests",
        CHANNEL: (e, t, n) => {
            let r = null == t ? "/channels/".concat(e || s) : "/channels/".concat(e || s, "/").concat(t);
            return null == n ? r : "".concat(r, "/").concat(n);
        },
        CHANNEL_THREAD_VIEW: (e, t, n, r) => {
            let i = "/channels/".concat(e, "/").concat(t, "/threads/").concat(n);
            return null == r ? i : "".concat(i, "/").concat(r);
        },
        VOICE_CHAT_CHANNEL_PARTIAL: (e, t, n) => {
            let r = "/voice/".concat(e, "/").concat(t);
            return null == n ? r : "".concat(r, "/").concat(n);
        },
        LOGIN: "/login",
        LOGIN_HANDOFF: "/login/handoff",
        LOGIN_ONE_TIME: "/login/one-time",
        REGISTER: "/register",
        DEFAULT_LOGGED_OUT: i.a ? "/register" : "/login",
        INVITE: (e) => "/invite/".concat(e),
        INVITE_LOGIN: (e) => "/invite/".concat(e, "/login"),
        INVITE_REGISTER: (e) => "/invite/".concat(e, "/register"),
        INVITE_PROXY: (e) => "/invite-proxy/".concat(e),
        GUILD_TEMPLATE: (e) => "/template/".concat(e),
        GUILD_TEMPLATE_LOGIN: (e) => "/template/".concat(e, "/login"),
        GIFT_CODE: (e) => "/gifts/".concat(e),
        GIFT_CODE_LOGIN: (e) => "/gifts/".concat(e, "/login"),
        WELCOME: (e, t) =>
            null != t ? "/welcome/".concat(null != e ? e : s, "/").concat(t) : "/welcome/".concat(null != e ? e : s),
        VERIFY: "/verify",
        VERIFY_REQUEST: "/verify-request",
        RESET: "/reset",
        APPS: "/apps",
        ACTIVATE: "/activate",
        ACTIVATE_HANDOFF: "/activate/handoff",
        CONNECTION_LINK: (e) => "/connections/".concat(e, "/link"),
        CONNECTION_LINK_AUTHORIZE: (e) => "/connections/".concat(e, "/link-authorize"),
        CONNECTIONS_SUCCESS: (e) => "/connections/".concat(e, "/success"),
        CONNECTIONS_ERROR: (e) => "/connections/".concat(e, "/error"),
        CONNECTIONS: (e) => "/connections/".concat(e),
        CONNECTIONS_AUTHORIZE_CONTINUE: (e) => "/connections/".concat(e, "/authorize-continue"),
        CONNECT_AUTHORIZE: "/connect/authorize",
        OAUTH2_AUTHORIZE: "/oauth2/authorize",
        OAUTH2_AUTHORIZED: "/oauth2/authorized",
        OAUTH2_ERROR: "/oauth2/error",
        SETTINGS: (e, t) => "/settings/".concat(e).concat(null != t ? "/".concat(t) : ""),
        SNOWSGIVING: "/snowsgiving",
        PLAYGROUND: (e, t) => {
            let n = "/playground";
            return null != e && ((n += "/".concat(e)), null != t && (n += "/".concat(t))), n;
        },
        CHANGELOGS: (e) => "/settings/changelogs".concat(null != e ? "/".concat(e) : ""),
        USERS: (e) => "/users/".concat(e),
        GUILD_CREATE: "/guilds/create",
        DISABLE_EMAIL_NOTIFICATIONS: "/disable-email-notifications",
        DISABLE_SERVER_HIGHLIGHT_NOTIFICATIONS: "/disable-server-highlight-notifications",
        USER_GUILD_NOTIFICATION_SETTINGS: (e) => "/guilds/".concat(e, "/notification-settings"),
        AUTHORIZE_IP: "/authorize-ip",
        REJECT_IP: "/reject-ip",
        REJECT_MFA: "/reject-mfa",
        AUTHORIZE_PAYMENT: "/authorize-payment",
        HANDOFF: "/handoff",
        DOMAIN_MIGRATION: "/domain-migration",
        XBOX_EDU: "/connections/xbox/intro",
        XBOX_PIN: "/connections/xbox/pin",
        DOWNLOAD_QR_CODE_REDIRECT: "/download-qr-code",
        BILLING_POPUP_BRIDGE_CALLBACK: "/billing/popup-bridge/callback",
        OAUTH2_WHITELIST_ACCEPT: "/oauth2/allowlist/accept",
        GUILD_DISCOVERY: "/guild-discovery",
        GLOBAL_DISCOVERY: "/discovery",
        QUEST_HOME: "/discovery/quests",
        QUEST_HOME_V2: "/quest-home",
        GLOBAL_DISCOVERY_SERVERS: "/discovery/servers",
        GLOBAL_DISCOVERY_APPS: "/discovery/applications",
        GLOBAL_DISCOVERY_APPS_CATEGORY: (e) => "/discovery/applications/categories/".concat(e),
        GLOBAL_DISCOVERY_APPS_PROFILE: (e) => "/discovery/applications/".concat(e),
        GLOBAL_DISCOVERY_APPS_PROFILE_SECTION: (e, t) => "/discovery/applications/".concat(e, "/").concat(t),
        GLOBAL_DISCOVERY_APPS_PROFILE_STORE_SKU: (e, t) =>
            "/discovery/applications/".concat(e, "/").concat(a.GlobalDiscoveryAppsSections.STORE, "/").concat(t),
        GLOBAL_DISCOVERY_APPS_SEARCH: "/discovery/applications/search",
        GUILD_MEMBER_VERIFICATION: (e) => "/member-verification/".concat(e),
        GUILD_MEMBER_VERIFICATION_FOR_HUB: (e, t) =>
            "/member-verification-for-hub/".concat(e).concat(null != t ? "/".concat(t) : ""),
        POPOUT_WINDOW: "/popout",
        UPCOMING_STAGES: (e, t) => "/guild-stages/".concat(e).concat(null != t ? "/".concat(t) : ""),
        VERIFY_HUB_EMAIL: "/verify-hub-email",
        OPEN_APP_FROM_EMAIL: "/open-app-from-email",
        BILLING_MANAGE_SUBSCRIPTION: "/billing/premium/manage",
        BILLING_MANAGE_SUBSCRIPTION_WITH_DEEP_LINK: (e, t) =>
            "/billing/premium/manage?deep_link_type=".concat(e).concat(null != t ? "&load_id=".concat(t) : ""),
        BILLING_STANDALONE_CHECKOUT_PAGE: (e, t, n, r, i, a) =>
            "/billing/premium/subscribe?plan_id="
                .concat(e, "&gift=")
                .concat(t, "&load_id=")
                .concat(n)
                .concat(null != r ? "&payment_method_type=".concat(r) : "")
                .concat(null != i ? "&deep_link_type=".concat(i) : "")
                .concat(null != a ? "&use_preset_offer=".concat(a) : ""),
        BILLING_STANDALONE_GUILD_BOOST_CHECKOUT_PAGE: (e, t, n) =>
            "/billing/guild-subscriptions/purchase?guild_id="
                .concat(e)
                .concat(null != t ? "&deep_link_type=".concat(t) : "")
                .concat(null != n ? "&load_id=".concat(n) : ""),
        GUILD_BOOSTING_MARKETING: (e) => "/guilds/".concat(e, "/premium-guild-subscriptions"),
        GUILD_SETTINGS: (e, t, n) => {
            let r = "/guilds/".concat(e, "/settings").concat(null != t ? "/".concat(t) : "");
            return null == n ? r : "".concat(r, "/").concat(n);
        },
        PICK_GUILD_SETTINGS: (e, t, n) => {
            let r = "/guilds/settings".concat(null != e ? "/".concat(e) : ""),
                i = null == t ? r : "".concat(r, "/").concat(t);
            return "".concat(i).concat(null != n ? "?feature=".concat(n) : "");
        },
        GUILD_EVENT_DETAILS: (e, t, n) => "/events/".concat(e, "/").concat(t) + (null != n ? "/".concat(n) : ""),
        FEATURE: (e) => "/feature/".concat(e),
        GUILD_FEATURE: (e, t) => "/feature/".concat(e, "/").concat(t),
        GUILD_JOIN_REQUEST: (e, t) => "/guilds/".concat(e, "/requests/").concat(t),
        MOBILE_WEB_HANDOFF: "/mweb-handoff",
        APPLICATION_DIRECTORY: "/application-directory",
        APPLICATION_DIRECTORY_PROFILE: (e) => "/application-directory/".concat(e),
        APPLICATION_DIRECTORY_PROFILE_SECTION: (e, t) => "/application-directory/".concat(e, "/").concat(t),
        APPLICATION_DIRECTORY_PROFILE_STORE_SKU: (e, t) =>
            "/application-directory/".concat(e, "/").concat(o.c.STORE, "/").concat(t),
        APPLICATION_DIRECTORY_SEARCH: "/application-directory/search",
        FAMILY_CENTER: "/family-center",
        SERVER_SHOP: (e) => "/channels/".concat(e, "/shop"),
        CHANNELS_GAME_SHOP: (e, t, n, r) => {
            let i = "/channels/".concat(e, "/game-shop");
            return (
                (i += "/".concat(null != t ? t : 0)),
                null != n && ((i += "/".concat(n)), null != r && (i += "/".concat(r))),
                i
            );
        },
        GAME_SHOP: (e, t, n) => {
            let r = "/game-shop/".concat(e);
            return null != t && ((r += "/".concat(t)), null != n && (r += "/".concat(n))), r;
        },
        GUILD_PRODUCT: (e, t) => "/channels/".concat(e, "/shop/").concat(t),
        REPORT: "/report",
        REPORT_SECOND_LOOK: "/report-review",
        COLLECTIBLES_SHOP: "/shop",
        COLLECTIBLES_SHOP_WITH_TAB: (e) => "/shop?tab=".concat(e),
        COLLECTIBLES_SHOP_PRODUCT_DETAIL: (e) => "/shop/product/".concat(e),
        NITRO_HOME: "/store",
        ACCOUNT_STANDING: "/account-standing",
        CHANNEL_SUMMARIES: (e) => "/channels/".concat(e, "/summaries"),
        CHANNEL_SUMMARY: (e, t) => "/channels/".concat(e, "/summaries/").concat(t),
        USER_SUMMARIES: "/users/@me/summaries",
        QUESTS: (e) => "/quests/".concat(e),
        ACCOUNT_REVERT: (e) => "/wasntme/".concat(e),
        POWERUP_STORE: (e) => "/channels/".concat(e, "/boosts"),
        CONFERENCE_MODE: "/conference-mode",
        CONFERENCE_MODE_VOICE: (e, t) => "/conference-mode/voice/".concat(e, "/").concat(t),
        QUEST_PREVIEW: (e) => "/quest-preview/".concat(e),
        QUEST_PREVIEW_TOOL_2: (e) => "/quest-home?tab=preview_tool&quest_id=".concat(e),
        ICYMI: "/icymi",
    }),
    p = (0, r.Ft)(f, [":", "?", "@"]);
