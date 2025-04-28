var e = r(98405),
    o = r(127849),
    i = r(636881),
    u = r(163641),
    c = 'WebAssembly',
    a = o[c],
    f = 7 !== Error('e', { cause: 7 }).cause,
    s = function (t, n) {
        var r = {};
        (r[t] = u(t, n, f)),
            e(
                {
                    global: !0,
                    constructor: !0,
                    arity: 1,
                    forced: f
                },
                r
            );
    },
    l = function (t, n) {
        if (a && a[t]) {
            var r = {};
            (r[t] = u(c + '.' + t, n, f)),
                e(
                    {
                        target: c,
                        stat: !0,
                        constructor: !0,
                        arity: 1,
                        forced: f
                    },
                    r
                );
        }
    };
s('Error', function (t) {
    return function (n) {
        return i(t, this, arguments);
    };
}),
    s('EvalError', function (t) {
        return function (n) {
            return i(t, this, arguments);
        };
    }),
    s('RangeError', function (t) {
        return function (n) {
            return i(t, this, arguments);
        };
    }),
    s('ReferenceError', function (t) {
        return function (n) {
            return i(t, this, arguments);
        };
    }),
    s('SyntaxError', function (t) {
        return function (n) {
            return i(t, this, arguments);
        };
    }),
    s('TypeError', function (t) {
        return function (n) {
            return i(t, this, arguments);
        };
    }),
    s('URIError', function (t) {
        return function (n) {
            return i(t, this, arguments);
        };
    }),
    l('CompileError', function (t) {
        return function (n) {
            return i(t, this, arguments);
        };
    }),
    l('LinkError', function (t) {
        return function (n) {
            return i(t, this, arguments);
        };
    }),
    l('RuntimeError', function (t) {
        return function (n) {
            return i(t, this, arguments);
        };
    });
