var i = r(67867),
    a = r(875604),
    o = r(646948),
    s = r(600385),
    l = r(221446),
    u = r(224106),
    c = r(948634),
    d = r(241777),
    f = r(353991),
    p = r(972554),
    h = r(730427),
    _ = r(104210),
    m = r(360518)('toStringTag'),
    g = Error,
    E = [].push,
    v = function (e, n) {
        var r,
            i = a(y, this);
        s ? (r = s(new g(), i ? o(this) : y)) : c((r = i ? this : u(y)), m, 'Error'), void 0 !== n && c(r, 'message', _(n)), p(r, v, r.stack, 1), arguments.length > 2 && f(r, arguments[2]);
        var l = [];
        return h(e, E, { that: l }), c(r, 'errors', l), r;
    };
s ? s(v, g) : l(v, g, { name: !0 });
var y = (v.prototype = u(g.prototype, {
    constructor: d(1, v),
    message: d(1, ''),
    name: d(1, 'AggregateError')
}));
i(
    {
        global: !0,
        constructor: !0,
        arity: 2
    },
    { AggregateError: v }
);
