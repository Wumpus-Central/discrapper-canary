var i = n(67867),
    r = n(96403),
    a = n(223944),
    s = RangeError,
    o = String.fromCharCode,
    l = String.fromCodePoint,
    u = r([].join);
i(
    {
        target: 'String',
        stat: !0,
        arity: 1,
        forced: !!l && 1 !== l.length
    },
    {
        fromCodePoint: function (e) {
            for (var t, n = [], i = arguments.length, r = 0; i > r; ) {
                if (((t = +arguments[r++]), a(t, 1114111) !== t)) throw new s(t + ' is not a valid code point');
                n[r] = t < 65536 ? o(t) : o(((t -= 65536) >> 10) + 55296, (t % 1024) + 56320);
            }
            return u(n, '');
        }
    }
);
