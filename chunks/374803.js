"use strict";
n.d(t, {
    DB: () => u,
    VN: () => r,
    Vf: () => i,
    Ze: () => o,
    e: () => d,
    eP: () => s,
    kc: () => c,
    lg: () => l,
    xS: () => a,
});
var r = (function (e) {
        return (
            (e[(e.DENY = 0)] = "DENY"),
            (e[(e.ALLOW_EVERYONE = 1)] = "ALLOW_EVERYONE"),
            (e[(e.ALLOW_EVERYONE_OR_HERE = 2)] = "ALLOW_EVERYONE_OR_HERE"),
            e
        );
    })({}),
    i = (function (e) {
        return (
            (e[(e.DENY = 0)] = "DENY"),
            (e[(e.ALLOW_CHANNEL = 1)] = "ALLOW_CHANNEL"),
            (e[(e.ALLOW_GUILD = 2)] = "ALLOW_GUILD"),
            e
        );
    })({}),
    s = (function (e) {
        return (
            (e[(e.DENY = 0)] = "DENY"),
            (e[(e.ALLOW_MENTIONABLE = 1)] = "ALLOW_MENTIONABLE"),
            (e[(e.ALLOW_ALL = 2)] = "ALLOW_ALL"),
            e
        );
    })({}),
    a = (function (e) {
        return (e[(e.DENY = 0)] = "DENY"), (e[(e.ALLOW_SELECTABLE = 1)] = "ALLOW_SELECTABLE"), e;
    })({}),
    o = (function (e) {
        return (
            (e[(e.DISABLED = 0)] = "DISABLED"),
            (e[(e.OLD_BUILT_INS = 1)] = "OLD_BUILT_INS"),
            (e[(e.NEW_TEXT_ONLY = 2)] = "NEW_TEXT_ONLY"),
            (e[(e.NEW = 3)] = "NEW"),
            e
        );
    })({}),
    l = (function (e) {
        return (e[(e.INSERT = 0)] = "INSERT"), (e[(e.SEND = 1)] = "SEND"), e;
    })({}),
    u = (function (e) {
        return (
            (e.MENTIONS = "MENTIONS"),
            (e.CHANNELS = "CHANNELS"),
            (e.EMOJIS_AND_STICKERS = "EMOJIS_AND_STICKERS"),
            (e.REACTIONS = "REACTIONS"),
            (e.STICKERS = "STICKERS"),
            (e.GIFS = "GIFS"),
            (e.LEGACY_COMMANDS = "LEGACY_COMMANDS"),
            (e.COMMANDS = "COMMANDS"),
            (e.COMMAND_OPTIONS = "COMMAND_OPTIONS"),
            (e.CHOICES = "CHOICES"),
            (e.GAME = "GAME"),
            (e.TIMESTAMPS = "TIMESTAMPS"),
            e
        );
    })({}),
    c = (function (e) {
        return (
            (e.MENTION = "MENTION"),
            (e.CHANNEL = "CHANNEL"),
            (e.EMOJI = "EMOJI"),
            (e.STICKER = "STICKER"),
            (e.SOUNDMOJI = "SOUNDMOJI"),
            (e.REACTION = "REACTION"),
            (e.GIF = "GIF"),
            (e.COMMAND = "COMMAND"),
            (e.COMMAND_OPTION = "COMMAND_OPTION"),
            (e.COMMAND_SUGGESTION = "COMMAND_SUGGESTION"),
            (e.CHOICE = "CHOICE"),
            (e.EMOJI_UPSELL = "EMOJI_UPSELL"),
            (e.GAME_MENTION = "GAME_MENTION"),
            (e.TIMESTAMP = "TIMESTAMP"),
            e
        );
    })({}),
    d = (function (e) {
        return (
            (e[(e.AUTO = 0)] = "AUTO"),
            (e[(e.AUTO_WHEN_FILTERED = 1)] = "AUTO_WHEN_FILTERED"),
            (e[(e.MANUAL = 2)] = "MANUAL"),
            e
        );
    })({});
