var r = i(147018),
    n = i(161581),
    a = i(197187),
    s = i(261987),
    o = 'WebAssembly',
    u = n[o],
    c = 7 !== Error('e', { cause: 7 }).cause,
    h = function (t, e) {
        var i = {};
        (i[t] = s(t, e, c)),
            r(
                {
                    global: !0,
                    constructor: !0,
                    arity: 1,
                    forced: c
                },
                i
            );
    },
    l = function (t, e) {
        if (u && u[t]) {
            var i = {};
            (i[t] = s(o + '.' + t, e, c)),
                r(
                    {
                        target: o,
                        stat: !0,
                        constructor: !0,
                        arity: 1,
                        forced: c
                    },
                    i
                );
        }
    };
h('Error', function (t) {
    return function (e) {
        return a(t, this, arguments);
    };
}),
    h('EvalError', function (t) {
        return function (e) {
            return a(t, this, arguments);
        };
    }),
    h('RangeError', function (t) {
        return function (e) {
            return a(t, this, arguments);
        };
    }),
    h('ReferenceError', function (t) {
        return function (e) {
            return a(t, this, arguments);
        };
    }),
    h('SyntaxError', function (t) {
        return function (e) {
            return a(t, this, arguments);
        };
    }),
    h('TypeError', function (t) {
        return function (e) {
            return a(t, this, arguments);
        };
    }),
    h('URIError', function (t) {
        return function (e) {
            return a(t, this, arguments);
        };
    }),
    l('CompileError', function (t) {
        return function (e) {
            return a(t, this, arguments);
        };
    }),
    l('LinkError', function (t) {
        return function (e) {
            return a(t, this, arguments);
        };
    }),
    l('RuntimeError', function (t) {
        return function (e) {
            return a(t, this, arguments);
        };
    });
