function r(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
function i(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = null != arguments[t] ? arguments[t] : {},
            i = Object.keys(n);
        'function' == typeof Object.getOwnPropertySymbols &&
            (i = i.concat(
                Object.getOwnPropertySymbols(n).filter(function (e) {
                    return Object.getOwnPropertyDescriptor(n, e).enumerable;
                })
            )),
            i.forEach(function (t) {
                r(e, t, n[t]);
            });
    }
    return e;
}
function o(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
        var r = Object.getOwnPropertySymbols(e);
        t &&
            (r = r.filter(function (t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
    }
    return n;
}
function a(e, t) {
    return (
        (t = null != t ? t : {}),
        Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : o(Object(t)).forEach(function (n) {
                  Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n));
              }),
        e
    );
}
function s(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = l(e, t);
    if (Object.getOwnPropertySymbols) {
        var o = Object.getOwnPropertySymbols(e);
        for (r = 0; r < o.length; r++) (n = o[r]), !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n]);
    }
    return i;
}
function l(e, t) {
    if (null == e) return {};
    var n,
        r,
        i = {},
        o = Object.keys(e);
    for (r = 0; r < o.length; r++) (n = o[r]), t.indexOf(n) >= 0 || (i[n] = e[n]);
    return i;
}
n.d(t, {
    H$: () => f,
    MW: () => d,
    Pb: () => c,
    QL: () => p,
    YQ: () => g,
    bg: () => h,
    jy: () => u,
    o3: () => _,
    vB: () => m
});
var c = (function (e) {
        return (e[(e.NONE = 0)] = 'NONE'), (e[(e.PLAY = 1)] = 'PLAY'), (e[(e.ADD = 2)] = 'ADD'), (e[(e.SOUNDMOJI = 3)] = 'SOUNDMOJI'), e;
    })({}),
    u = (function (e) {
        return (e.ENTRY = 'entry_sound'), (e.EXIT = 'exit_sound'), (e.DEFAULT = 'default'), e;
    })({}),
    d = (function (e) {
        return (e.ADDED = 'added'), (e.UPDATED = 'updated'), (e.REMOVED = 'removed'), e;
    })({}),
    f = (function (e) {
        return (e.DEFAULT = 'default'), (e.CUSTOM = 'custom'), e;
    })({});
function _(e, t) {
    var { sound_id: n, emoji_id: r, emoji_name: o, user_id: l, available: c } = e;
    return a(i({}, s(e, ['sound_id', 'emoji_id', 'emoji_name', 'user_id', 'available'])), {
        soundId: n,
        guildId: t,
        emojiId: r,
        emojiName: o,
        userId: l,
        available: null == c || c
    });
}
function p(e) {
    var { soundId: t, guildId: n, emojiId: r, emojiName: o, userId: l } = e;
    return a(i({}, s(e, ['soundId', 'guildId', 'emojiId', 'emojiName', 'userId'])), {
        sound_id: t,
        guild_id: n,
        emoji_id: r,
        emoji_name: o,
        user_id: l
    });
}
var h = (function (e) {
        return (e[(e.FAVORITES = 0)] = 'FAVORITES'), (e[(e.RECENTLY_HEARD = 1)] = 'RECENTLY_HEARD'), (e[(e.FREQUENTLY_USED = 2)] = 'FREQUENTLY_USED'), (e[(e.GUILD = 3)] = 'GUILD'), (e[(e.DEFAULTS = 4)] = 'DEFAULTS'), (e[(e.SEARCH = 5)] = 'SEARCH'), e;
    })({}),
    m = (function (e) {
        return (e[(e.SOUND = 0)] = 'SOUND'), (e[(e.ADD_SOUND = 1)] = 'ADD_SOUND'), (e[(e.SHOW_ALL = 2)] = 'SHOW_ALL'), e;
    })({}),
    g = (function (e) {
        return (e[(e.GIFT_CODE = 0)] = 'GIFT_CODE'), (e[(e.SOUNDBOARD = 1)] = 'SOUNDBOARD'), (e[(e.JOINED_VOICE_CHANNEL = 2)] = 'JOINED_VOICE_CHANNEL'), (e[(e.SOUNDMOJI = 3)] = 'SOUNDMOJI'), e;
    })({});
