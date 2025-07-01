var r = n(98405),
    i = n(127849),
    a = n(636881),
    o = n(163641),
    s = 'WebAssembly',
    l = i[s],
    c = 7 !== Error('e', { cause: 7 }).cause,
    u = function (e, t) {
        var n = {};
        ((n[e] = o(e, t, c)),
            r(
                {
                    global: !0,
                    constructor: !0,
                    arity: 1,
                    forced: c
                },
                n
            ));
    },
    d = function (e, t) {
        if (l && l[e]) {
            var n = {};
            ((n[e] = o(s + '.' + e, t, c)),
                r(
                    {
                        target: s,
                        stat: !0,
                        constructor: !0,
                        arity: 1,
                        forced: c
                    },
                    n
                ));
        }
    };
(u('Error', function (e) {
    return function (t) {
        return a(e, this, arguments);
    };
}),
    u('EvalError', function (e) {
        return function (t) {
            return a(e, this, arguments);
        };
    }),
    u('RangeError', function (e) {
        return function (t) {
            return a(e, this, arguments);
        };
    }),
    u('ReferenceError', function (e) {
        return function (t) {
            return a(e, this, arguments);
        };
    }),
    u('SyntaxError', function (e) {
        return function (t) {
            return a(e, this, arguments);
        };
    }),
    u('TypeError', function (e) {
        return function (t) {
            return a(e, this, arguments);
        };
    }),
    u('URIError', function (e) {
        return function (t) {
            return a(e, this, arguments);
        };
    }),
    d('CompileError', function (e) {
        return function (t) {
            return a(e, this, arguments);
        };
    }),
    d('LinkError', function (e) {
        return function (t) {
            return a(e, this, arguments);
        };
    }),
    d('RuntimeError', function (e) {
        return function (t) {
            return a(e, this, arguments);
        };
    }));
