"use strict";
var r = n(834647),
    a = n(715804),
    o = n(517480),
    i = n(740628),
    s = n(286087),
    l = n(991207),
    c = n(180734),
    u = n(426261),
    d = n(163583),
    p = n(31448),
    h = n(554987),
    f = n(977188),
    m = n(61748)("toStringTag"),
    y = Error,
    v = [].push,
    g = function (e, t) {
        var n,
            r = a(b, this);
        i ? (n = i(new y(), r ? o(this) : b)) : c((n = r ? this : l(b)), m, "Error"),
            void 0 !== t && c(n, "message", f(t)),
            p(n, g, n.stack, 1),
            arguments.length > 2 && d(n, arguments[2]);
        var s = [];
        return h(e, v, { that: s }), c(n, "errors", s), n;
    };
i ? i(g, y) : s(g, y, { name: !0 });
var b = (g.prototype = l(y.prototype, { constructor: u(1, g), message: u(1, ""), name: u(1, "AggregateError") }));
r({ global: !0, constructor: !0, arity: 2 }, { AggregateError: g });
