"use strict";
n.d(t, {
    C8: () => T,
    G4: () => m,
    Hr: () => l,
    I5: () => g,
    LZ: () => d,
    Mh: () => c,
    Mk: () => i,
    OL: () => _,
    TD: () => E,
    Tk: () => s,
    Wq: () => v,
    YI: () => u,
    Yl: () => o,
    Ys: () => f,
    hE: () => y,
    iS: () => S,
    in: () => A,
    kc: () => h,
    n4: () => p,
    qz: () => I,
    r2: () => r,
    wk: () => a,
});
var r = (function (e) {
        return (e[(e.ROLE = 0)] = "ROLE"), (e[(e.MEMBER = 1)] = "MEMBER"), e;
    })({}),
    i = (function (e) {
        return (e[(e.FIRST_BOOSTER = 0)] = "FIRST_BOOSTER"), e;
    })({}),
    s = (function (e) {
        return (
            (e[(e.UNVERIFIED = 1)] = "UNVERIFIED"),
            (e[(e.VERIFIED_TEEN = 2)] = "VERIFIED_TEEN"),
            (e[(e.VERIFIED_ADULT = 3)] = "VERIFIED_ADULT"),
            (e[(e.INFERRED_ADULT = 4)] = "INFERRED_ADULT"),
            (e[(e.CLIENT_ONLY_PENDING = 99999)] = "CLIENT_ONLY_PENDING"),
            e
        );
    })({}),
    a = (function (e) {
        return (
            (e[(e.UNKNOWN = 0)] = "UNKNOWN"),
            (e[(e.PUBLISHER = 1)] = "PUBLISHER"),
            (e[(e.DEVELOPER = 2)] = "DEVELOPER"),
            e
        );
    })({}),
    o = (function (e) {
        return (e.IOS = "ios"), (e.ANDROID = "android"), (e.WEB = "web"), e;
    })({}),
    l = (function (e) {
        return (e[(e.NONE = 0)] = "NONE"), (e[(e.NEW = 1)] = "NEW"), (e[(e.UPDATED = 2)] = "UPDATED"), e;
    })({}),
    u = (function (e) {
        return (e.VOICE_LAUNCHER = "voice_launcher"), (e.TEXT_LAUNCHER = "text_launcher"), e;
    })({}),
    c = (function (e) {
        return (e[(e.LINKED = 1)] = "LINKED"), (e[(e.OFFICIAL = 2)] = "OFFICIAL"), (e[(e.NVIDIA = 3)] = "NVIDIA"), e;
    })({}),
    d = (function (e) {
        return (e[(e.MEDIA_PROXY = 1)] = "MEDIA_PROXY"), (e[(e.YOUTUBE = 2)] = "YOUTUBE"), e;
    })({}),
    _ = (function (e) {
        return (
            (e[(e.GUILD = 0)] = "GUILD"),
            (e[(e.BOT_DM = 1)] = "BOT_DM"),
            (e[(e.PRIVATE_CHANNEL = 2)] = "PRIVATE_CHANNEL"),
            e
        );
    })({}),
    f = (function (e) {
        return (
            (e[(e.APP_HANDLER = 1)] = "APP_HANDLER"),
            (e[(e.DISCORD_LAUNCH_ACTIVITY = 2)] = "DISCORD_LAUNCH_ACTIVITY"),
            e
        );
    })({}),
    p = (function (e) {
        return (
            (e[(e.SUB_COMMAND = 1)] = "SUB_COMMAND"),
            (e[(e.SUB_COMMAND_GROUP = 2)] = "SUB_COMMAND_GROUP"),
            (e[(e.STRING = 3)] = "STRING"),
            (e[(e.INTEGER = 4)] = "INTEGER"),
            (e[(e.BOOLEAN = 5)] = "BOOLEAN"),
            (e[(e.USER = 6)] = "USER"),
            (e[(e.CHANNEL = 7)] = "CHANNEL"),
            (e[(e.ROLE = 8)] = "ROLE"),
            (e[(e.MENTIONABLE = 9)] = "MENTIONABLE"),
            (e[(e.NUMBER = 10)] = "NUMBER"),
            (e[(e.ATTACHMENT = 11)] = "ATTACHMENT"),
            e
        );
    })({}),
    h = (function (e) {
        return (
            (e[(e.CHAT = 1)] = "CHAT"),
            (e[(e.USER = 2)] = "USER"),
            (e[(e.MESSAGE = 3)] = "MESSAGE"),
            (e[(e.PRIMARY_ENTRY_POINT = 4)] = "PRIMARY_ENTRY_POINT"),
            e
        );
    })({}),
    m = (function (e) {
        return (
            (e[(e.APPLICATION_COMMAND = 2)] = "APPLICATION_COMMAND"),
            (e[(e.MESSAGE_COMPONENT = 3)] = "MESSAGE_COMPONENT"),
            (e[(e.APPLICATION_COMMAND_AUTOCOMPLETE = 4)] = "APPLICATION_COMMAND_AUTOCOMPLETE"),
            (e[(e.MODAL_SUBMIT = 5)] = "MODAL_SUBMIT"),
            e
        );
    })({}),
    E = (function (e) {
        return (
            (e[(e.UNKNOWN = 0)] = "UNKNOWN"),
            (e[(e.LOADING = 1)] = "LOADING"),
            (e[(e.LOADED_SUCCESS = 2)] = "LOADED_SUCCESS"),
            (e[(e.LOADED_NOT_FOUND = 3)] = "LOADED_NOT_FOUND"),
            e
        );
    })({}),
    g = (function (e) {
        return (
            (e[(e.UNKNOWN = -1)] = "UNKNOWN"),
            (e[(e.ACTION_ROW = 1)] = "ACTION_ROW"),
            (e[(e.BUTTON = 2)] = "BUTTON"),
            (e[(e.STRING_SELECT = 3)] = "STRING_SELECT"),
            (e[(e.TEXT_INPUT = 4)] = "TEXT_INPUT"),
            (e[(e.USER_SELECT = 5)] = "USER_SELECT"),
            (e[(e.ROLE_SELECT = 6)] = "ROLE_SELECT"),
            (e[(e.MENTIONABLE_SELECT = 7)] = "MENTIONABLE_SELECT"),
            (e[(e.CHANNEL_SELECT = 8)] = "CHANNEL_SELECT"),
            (e[(e.SECTION = 9)] = "SECTION"),
            (e[(e.TEXT_DISPLAY = 10)] = "TEXT_DISPLAY"),
            (e[(e.THUMBNAIL = 11)] = "THUMBNAIL"),
            (e[(e.MEDIA_GALLERY = 12)] = "MEDIA_GALLERY"),
            (e[(e.FILE = 13)] = "FILE"),
            (e[(e.SEPARATOR = 14)] = "SEPARATOR"),
            (e[(e.CONTENT_INVENTORY_ENTRY = 16)] = "CONTENT_INVENTORY_ENTRY"),
            (e[(e.CONTAINER = 17)] = "CONTAINER"),
            (e[(e.LABEL = 18)] = "LABEL"),
            (e[(e.FILE_UPLOAD = 19)] = "FILE_UPLOAD"),
            (e[(e.CHECKPOINT_CARD = 20)] = "CHECKPOINT_CARD"),
            (e[(e.RADIO_GROUP = 21)] = "RADIO_GROUP"),
            (e[(e.CHECKBOX_GROUP = 22)] = "CHECKBOX_GROUP"),
            (e[(e.CHECKBOX = 23)] = "CHECKBOX"),
            e
        );
    })({}),
    A = (function (e) {
        return (
            (e[(e.PRIMARY = 1)] = "PRIMARY"),
            (e[(e.SECONDARY = 2)] = "SECONDARY"),
            (e[(e.SUCCESS = 3)] = "SUCCESS"),
            (e[(e.DESTRUCTIVE = 4)] = "DESTRUCTIVE"),
            (e[(e.LINK = 5)] = "LINK"),
            (e[(e.PREMIUM = 6)] = "PREMIUM"),
            e
        );
    })({}),
    I = (function (e) {
        return (e[(e.SMALL = 1)] = "SMALL"), (e[(e.PARAGRAPH = 2)] = "PARAGRAPH"), e;
    })({}),
    T = (function (e) {
        return (e[(e.SMALL = 1)] = "SMALL"), (e[(e.LARGE = 2)] = "LARGE"), e;
    })({}),
    S = (function (e) {
        return (
            (e[(e.SUBSCRIPTION_PLAN = 1)] = "SUBSCRIPTION_PLAN"),
            (e[(e.ENTITLEMENT = 2)] = "ENTITLEMENT"),
            (e[(e.PREMIUM_LEGACY_UPGRADE_PROMOTION = 3)] = "PREMIUM_LEGACY_UPGRADE_PROMOTION"),
            (e[(e.PREMIUM_TRIAL = 4)] = "PREMIUM_TRIAL"),
            (e[(e.DEFAULT = 5)] = "DEFAULT"),
            e
        );
    })({}),
    y = (function (e) {
        return (e[(e.GUILD_PRODUCT = 0)] = "GUILD_PRODUCT"), e;
    })({}),
    v = (function (e) {
        return (e[(e.WEBAUTHN = 1)] = "WEBAUTHN"), (e[(e.TOTP = 2)] = "TOTP"), (e[(e.SMS = 3)] = "SMS"), e;
    })({});
