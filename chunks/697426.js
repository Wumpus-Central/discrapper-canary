n.d(t, {
    H$: () => s,
    MW: () => a,
    Pb: () => i,
    QL: () => l,
    YQ: () => d,
    bg: () => u,
    jy: () => r,
    o3: () => o,
    vB: () => c
});
var i = (function (e) {
        return (e[(e.NONE = 0)] = 'NONE'), (e[(e.PLAY = 1)] = 'PLAY'), (e[(e.ADD = 2)] = 'ADD'), (e[(e.SOUNDMOJI = 3)] = 'SOUNDMOJI'), e;
    })({}),
    r = (function (e) {
        return (e.ENTRY = 'entry_sound'), (e.EXIT = 'exit_sound'), (e.DEFAULT = 'default'), e;
    })({}),
    a = (function (e) {
        return (e.ADDED = 'added'), (e.UPDATED = 'updated'), (e.REMOVED = 'removed'), e;
    })({}),
    s = (function (e) {
        return (e.DEFAULT = 'default'), (e.CUSTOM = 'custom'), e;
    })({});
function o(e, t) {
    let { sound_id: n, emoji_id: i, emoji_name: r, user_id: a, available: s, ...o } = e;
    return {
        ...o,
        soundId: n,
        guildId: t,
        emojiId: i,
        emojiName: r,
        userId: a,
        available: null == s || s
    };
}
function l(e) {
    let { soundId: t, guildId: n, emojiId: i, emojiName: r, userId: a, ...s } = e;
    return {
        ...s,
        sound_id: t,
        guild_id: n,
        emoji_id: i,
        emoji_name: r,
        user_id: a
    };
}
var u = (function (e) {
        return (e[(e.FAVORITES = 0)] = 'FAVORITES'), (e[(e.RECENTLY_HEARD = 1)] = 'RECENTLY_HEARD'), (e[(e.FREQUENTLY_USED = 2)] = 'FREQUENTLY_USED'), (e[(e.GUILD = 3)] = 'GUILD'), (e[(e.DEFAULTS = 4)] = 'DEFAULTS'), (e[(e.SEARCH = 5)] = 'SEARCH'), e;
    })({}),
    c = (function (e) {
        return (e[(e.SOUND = 0)] = 'SOUND'), (e[(e.ADD_SOUND = 1)] = 'ADD_SOUND'), e;
    })({}),
    d = (function (e) {
        return (e[(e.GIFT_CODE = 0)] = 'GIFT_CODE'), (e[(e.SOUNDBOARD = 1)] = 'SOUNDBOARD'), (e[(e.JOINED_VOICE_CHANNEL = 2)] = 'JOINED_VOICE_CHANNEL'), (e[(e.SOUNDMOJI = 3)] = 'SOUNDMOJI'), e;
    })({});
