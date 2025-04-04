var r = n(220159),
    o = n(658538),
    a = n(709583),
    i = n(578079),
    s = n(629814),
    c = n(425184),
    l = n(285007),
    u = n(132812),
    d = n(590731),
    p = n(108943),
    h = n(795462),
    f = n(471442),
    m = n(394370)('toStringTag'),
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
