var i, a, o, s, l, u, c;
function d(e, n) {
    let { sound_id: r, emoji_id: i, emoji_name: a, user_id: o, available: s, ...l } = e;
    return {
        ...l,
        soundId: r,
        guildId: n,
        emojiId: i,
        emojiName: a,
        userId: o,
        available: null == s || s
    };
}
function f(e) {
    let { soundId: n, guildId: r, emojiId: i, emojiName: a, userId: o, ...s } = e;
    return {
        ...s,
        sound_id: n,
        guild_id: r,
        emoji_id: i,
        emoji_name: a,
        user_id: o
    };
}
r.d(n, {
    H$: function () {
        return s;
    },
    MW: function () {
        return o;
    },
    Pb: function () {
        return i;
    },
    QL: function () {
        return f;
    },
    YQ: function () {
        return c;
    },
    bg: function () {
        return l;
    },
    jy: function () {
        return a;
    },
    o3: function () {
        return d;
    },
    vB: function () {
        return u;
    }
}),
    !(function (e) {
        (e[(e.NONE = 0)] = 'NONE'), (e[(e.PLAY = 1)] = 'PLAY'), (e[(e.ADD = 2)] = 'ADD'), (e[(e.SOUNDMOJI = 3)] = 'SOUNDMOJI');
    })(i || (i = {})),
    !(function (e) {
        (e.ENTRY = 'entry_sound'), (e.EXIT = 'exit_sound'), (e.DEFAULT = 'default');
    })(a || (a = {})),
    !(function (e) {
        (e.ADDED = 'added'), (e.UPDATED = 'updated'), (e.REMOVED = 'removed');
    })(o || (o = {})),
    !(function (e) {
        (e.DEFAULT = 'default'), (e.CUSTOM = 'custom');
    })(s || (s = {})),
    !(function (e) {
        (e[(e.FAVORITES = 0)] = 'FAVORITES'), (e[(e.RECENTLY_HEARD = 1)] = 'RECENTLY_HEARD'), (e[(e.FREQUENTLY_USED = 2)] = 'FREQUENTLY_USED'), (e[(e.GUILD = 3)] = 'GUILD'), (e[(e.DEFAULTS = 4)] = 'DEFAULTS'), (e[(e.SEARCH = 5)] = 'SEARCH');
    })(l || (l = {})),
    !(function (e) {
        (e[(e.SOUND = 0)] = 'SOUND'), (e[(e.ADD_SOUND = 1)] = 'ADD_SOUND');
    })(u || (u = {})),
    !(function (e) {
        (e[(e.GIFT_CODE = 0)] = 'GIFT_CODE'), (e[(e.SOUNDBOARD = 1)] = 'SOUNDBOARD'), (e[(e.JOINED_VOICE_CHANNEL = 2)] = 'JOINED_VOICE_CHANNEL'), (e[(e.SOUNDMOJI = 3)] = 'SOUNDMOJI');
    })(c || (c = {}));
