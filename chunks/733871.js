var r = n(67867),
    i = n(875604),
    o = n(646948),
    a = n(600385),
    s = n(221446),
    l = n(224106),
    c = n(948634),
    u = n(241777),
    d = n(353991),
    f = n(972554),
    p = n(730427),
    _ = n(104210),
    h = n(360518)('toStringTag'),
    m = Error,
    g = [].push,
    E = function (e, t) {
        var n,
            r = i(v, this);
        a ? (n = a(new m(), r ? o(this) : v)) : c((n = r ? this : l(v)), h, 'Error'), void 0 !== t && c(n, 'message', _(t)), f(n, E, n.stack, 1), arguments.length > 2 && d(n, arguments[2]);
        var s = [];
        return p(e, g, { that: s }), c(n, 'errors', s), n;
    };
a ? a(E, m) : s(E, m, { name: !0 });
var v = (E.prototype = l(m.prototype, {
    constructor: u(1, E),
    message: u(1, ''),
    name: u(1, 'AggregateError')
}));
r(
    {
        global: !0,
        constructor: !0,
        arity: 2
    },
    { AggregateError: E }
);
