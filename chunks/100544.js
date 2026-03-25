"use strict";
n.d(t, { CT: () => a, W6: () => s, WM: () => u, XY: () => o, g6: () => i, gi: () => c, j_: () => l });
var r = n(592819),
    i = (function (e) {
        return (e.INACTIVE = "inactive"), (e.BACKGROUND = "background"), (e.ACTIVE = "active"), e;
    })({}),
    s = (function (e) {
        return (
            (e.INVITE = "invite"),
            (e.GUILD_TEMPLATE = "guild-template"),
            (e.CHANNEL = "channel"),
            (e.GIFT_CODE = "gift-code"),
            (e.MESSAGE = "message"),
            (e.OAUTH2_AUTHORIZE = "oauth2-authorize"),
            (e.ONE_TIME_LOGIN = "one-time-login"),
            (e.APP_DIRECTORY_PROFILE = "app-directory-profile"),
            (e.PROMOTIONS = "promotions"),
            (e.FEATURE_PROMO_URL = "promo-url"),
            (e.NONE = "none"),
            (e.REMOTE_AUTH = "remote-auth"),
            (e.USER_PROFILE = "user-profile"),
            (e.BUILD_OVERRIDE = "build-override"),
            (e.CONTACT_SYNC = "contact-sync"),
            (e.ADD_FRIENDS = "add-friends"),
            (e.COMPOSE_MESSAGE = "compose-message"),
            (e.GUILD_EVENT_DETAILS = "guild-event-details"),
            (e.FRIENDS = "friends"),
            (e.EDIT_PROFILE = "edit-profile"),
            (e.MOBILE_WEB_HANDOFF = "mobile-web-handoff"),
            (e.USER_CONNECTIONS_CALLBACK = "user-connections-callback"),
            (e.VOICE_CHANNEL = "voice-channel"),
            (e.GUILD_HOME = "guild-home"),
            (e.USER_CONNECTIONS_LINK_CALLBACK = "user-connections-link-callback"),
            (e.SESSION_MANAGEMENT = "session-management"),
            (e.CONNECTIONS = "connections"),
            (e.GUILD_SETTINGS = "guild-settings"),
            (e.GUILD_SETTINGS_PICKER = "guild-settings-picker"),
            (e.ACTIVATE_DEVICE = "activate-device"),
            (e.FAMILY_CENTER = "family-center"),
            (e.SHARE = "share"),
            (e.CREATE_VOICE_INVITE = "create_voice_invite"),
            (e.SEND_VOICE_HANGOUT_WAVE = "send_voice_hangout_wave"),
            (e.ACCOUNT_STANDING = "account-standing"),
            (e.MOBILE_NATIVE_UPDATE = "mobile-native-update"),
            (e.SHOP = "shop"),
            (e.MOBILE_WEB_REDIRECT_CHECKOUT = "mobile-web-redirect-checkout"),
            (e.AUTHORIZED_APPS = "authorized-apps"),
            (e.DAVE_PROTOCOL_VERIFICATION = "dave-protocol-verification"),
            (e.ICYMI = "icymi"),
            (e.QUESTS = "quests"),
            (e.GIFT = "gift"),
            (e.NITRO_HOME = "store"),
            (e.ACTIVITY = "activity"),
            (e.CONNECTED_GAMES = "connected-games"),
            (e.BOOST_MARKETING = "boost-marketing"),
            (e.BOOST_SETTINGS = "boost-settings"),
            (e.QUEST_PREVIEW_TOOL = "quest-preview-tool"),
            (e.SUBSCRIPTION_SETTINGS = "subscription-settings"),
            (e.GAME_UPDATE = "game-update"),
            e
        );
    })({});
let a = "CacheStoreLazy",
    o = "CacheStoreChannelsLazy",
    l = "CacheStore";
var u = (function (e) {
    return (
        (e.NONE = "none"),
        (e.SLIDE_UP = "slide-up"),
        (e.SLIDE_IN = "slide-in"),
        (e.SLIDE_OUT = "slide-out"),
        (e.SLIDE_IN_OUT = "slide-in-out"),
        (e.SLIDE_IN_OUT_REVERSE = "slide-in-out-reverse"),
        (e.FADE = "fade"),
        e
    );
})({});
Object.freeze({ START: { x: 0, y: 0 }, END: { x: 1, y: 0 } }),
    Object.freeze({ START: { x: 0, y: 0 }, END: { x: 0, y: 1 } });
let c = {
    PREMIUM_TIER_0: [
        r.Ay.unsafe_rawColors.PREMIUM_TIER_0_PURPLE_FOR_GRADIENTS,
        r.Ay.unsafe_rawColors.PREMIUM_TIER_0_BLUE_FOR_GRADIENTS,
    ],
    PREMIUM_TIER_1: [
        r.Ay.unsafe_rawColors.PREMIUM_TIER_1_DARK_BLUE_FOR_GRADIENTS,
        r.Ay.unsafe_rawColors.PREMIUM_TIER_1_BLUE_FOR_GRADIENTS,
    ],
    PREMIUM_TIER_2: [
        r.Ay.unsafe_rawColors.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS,
        r.Ay.unsafe_rawColors.PREMIUM_TIER_2_PINK_FOR_GRADIENTS,
    ],
    PREMIUM_TIER_2_TRI_COLOR: [
        r.Ay.unsafe_rawColors.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS,
        r.Ay.unsafe_rawColors.PREMIUM_TIER_2_PURPLE_FOR_GRADIENTS_2,
        r.Ay.unsafe_rawColors.PREMIUM_TIER_2_PINK_FOR_GRADIENTS,
    ],
    PREMIUM_GUILD: [
        r.Ay.unsafe_rawColors.GUILD_BOOSTING_BLUE_FOR_GRADIENTS,
        r.Ay.unsafe_rawColors.GUILD_BOOSTING_PURPLE_FOR_GRADIENTS,
    ],
    PREMIUM_TIER_0_PERK_CARD: ["#3736BB", "#4670E8", "#8377EB", "#E782F1", "#DF90AF"],
    PREMIUM_TIER_2_OFFER_COLOR: [r.Ay.unsafe_rawColors.BLURPLE_50, r.Ay.unsafe_rawColors.PINK_60],
};
