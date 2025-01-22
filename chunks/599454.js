var i = r(67867),
    a = r(96403),
    o = r(223944),
    s = RangeError,
    l = String.fromCharCode,
    u = String.fromCodePoint,
    c = a([].join);
i(
    {
        target: 'String',
        stat: !0,
        arity: 1,
        forced: !!u && 1 !== u.length
    },
    {
        fromCodePoint: function (e) {
            for (var n, r = [], i = arguments.length, a = 0; i > a; ) {
                if (((n = +arguments[a++]), o(n, 1114111) !== n)) throw new s(n + ' is not a valid code point');
                r[a] = n < 65536 ? l(n) : l(((n -= 65536) >> 10) + 55296, (n % 1024) + 56320);
            }
            return c(r, '');
        }
    }
);
