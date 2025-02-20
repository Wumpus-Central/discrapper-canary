var r = a(147018),
    n = a(161581),
    o = a(197187),
    _ = a(261987),
    i = 'WebAssembly',
    c = n[i],
    s = 7 !== Error('e', { cause: 7 }).cause,
    E = function (t, e) {
        var a = {};
        (a[t] = _(t, e, s)),
            r(
                {
                    global: !0,
                    constructor: !0,
                    arity: 1,
                    forced: s
                },
                a
            );
    },
    l = function (t, e) {
        if (c && c[t]) {
            var a = {};
            (a[t] = _(i + '.' + t, e, s)),
                r(
                    {
                        target: i,
                        stat: !0,
                        constructor: !0,
                        arity: 1,
                        forced: s
                    },
                    a
                );
        }
    };
E('Error', function (t) {
    return function (e) {
        return o(t, this, arguments);
    };
}),
    E('EvalError', function (t) {
        return function (e) {
            return o(t, this, arguments);
        };
    }),
    E('RangeError', function (t) {
        return function (e) {
            return o(t, this, arguments);
        };
    }),
    E('ReferenceError', function (t) {
        return function (e) {
            return o(t, this, arguments);
        };
    }),
    E('SyntaxError', function (t) {
        return function (e) {
            return o(t, this, arguments);
        };
    }),
    E('TypeError', function (t) {
        return function (e) {
            return o(t, this, arguments);
        };
    }),
    E('URIError', function (t) {
        return function (e) {
            return o(t, this, arguments);
        };
    }),
    l('CompileError', function (t) {
        return function (e) {
            return o(t, this, arguments);
        };
    }),
    l('LinkError', function (t) {
        return function (e) {
            return o(t, this, arguments);
        };
    }),
    l('RuntimeError', function (t) {
        return function (e) {
            return o(t, this, arguments);
        };
    });
