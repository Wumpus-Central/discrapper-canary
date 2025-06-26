var n = r(98405),
    i = r(46015),
    s = r(201390),
    a = RangeError,
    o = String.fromCharCode,
    u = String.fromCodePoint,
    h = i([].join);
n(
    {
        target: 'String',
        stat: !0,
        arity: 1,
        forced: !!u && 1 !== u.length
    },
    {
        fromCodePoint: function (t) {
            for (var e, r = [], n = arguments.length, i = 0; n > i; ) {
                if (((e = +arguments[i++]), s(e, 1114111) !== e)) throw new a(e + ' is not a valid code point');
                r[i] = e < 65536 ? o(e) : o(((e -= 65536) >> 10) + 55296, (e % 1024) + 56320);
            }
            return h(r, '');
        }
    }
);
