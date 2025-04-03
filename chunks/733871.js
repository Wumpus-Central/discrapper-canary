var r = n(67867),
    o = n(875604),
    a = n(646948),
    i = n(600385),
    s = n(221446),
    c = n(224106),
    l = n(948634),
    u = n(241777),
    d = n(353991),
    p = n(972554),
    h = n(730427),
    f = n(104210),
    m = n(360518)('toStringTag'),
    y = Error,
    v = [].push,
    g = function (e, t) {
        var n,
            r = o(b, this);
        i ? (n = i(new y(), r ? a(this) : b)) : l((n = r ? this : c(b)), m, 'Error'), void 0 !== t && l(n, 'message', f(t)), p(n, g, n.stack, 1), arguments.length > 2 && d(n, arguments[2]);
        var s = [];
        return h(e, v, { that: s }), l(n, 'errors', s), n;
    };
i ? i(g, y) : s(g, y, { name: !0 });
var b = (g.prototype = c(y.prototype, {
    constructor: u(1, g),
    message: u(1, ''),
    name: u(1, 'AggregateError')
}));
r(
    {
        global: !0,
        constructor: !0,
        arity: 2
    },
    { AggregateError: g }
);
