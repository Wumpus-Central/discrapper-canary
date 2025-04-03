var r = n(67867),
    o = n(96403),
    a = n(223944),
    i = RangeError,
    s = String.fromCharCode,
    c = String.fromCodePoint,
    l = o([].join);
r(
    {
        target: 'String',
        stat: !0,
        arity: 1,
        forced: !!c && 1 !== c.length
    },
    {
        fromCodePoint: function (e) {
            for (var t, n = [], r = arguments.length, o = 0; r > o; ) {
                if (((t = +arguments[o++]), a(t, 1114111) !== t)) throw new i(t + ' is not a valid code point');
                n[o] = t < 65536 ? s(t) : s(((t -= 65536) >> 10) + 55296, (t % 1024) + 56320);
            }
            return l(n, '');
        }
    }
);
