var i = n(67867),
    r = n(875604),
    a = n(646948),
    s = n(600385),
    o = n(221446),
    l = n(224106),
    u = n(948634),
    c = n(241777),
    d = n(353991),
    f = n(972554),
    _ = n(730427),
    p = n(104210),
    h = n(360518)('toStringTag'),
    m = Error,
    g = [].push,
    E = function (e, t) {
        var n,
            i = r(v, this);
        s ? (n = s(new m(), i ? a(this) : v)) : u((n = i ? this : l(v)), h, 'Error'), void 0 !== t && u(n, 'message', p(t)), f(n, E, n.stack, 1), arguments.length > 2 && d(n, arguments[2]);
        var o = [];
        return _(e, g, { that: o }), u(n, 'errors', o), n;
    };
s ? s(E, m) : o(E, m, { name: !0 });
var v = (E.prototype = l(m.prototype, {
    constructor: c(1, E),
    message: c(1, ''),
    name: c(1, 'AggregateError')
}));
i(
    {
        global: !0,
        constructor: !0,
        arity: 2
    },
    { AggregateError: E }
);
