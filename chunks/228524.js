var r = n(557939),
    i = n(257943),
    a = n(860511),
    s = n(410323),
    o = n(210140),
    l = n(339626),
    c = n(524152),
    u = n(304880),
    d = n(485155),
    f = n(517771),
    p = a.Symbol,
    _ = p && p.prototype;
if (i && l(p) && (!("description" in _) || void 0 !== p().description)) {
    var h = {},
        m = function () {
            var e = arguments.length < 1 || void 0 === arguments[0] ? void 0 : u(arguments[0]),
                t = c(_, this) ? new p(e) : void 0 === e ? p() : p(e);
            return "" === e && (h[t] = !0), t;
        };
    f(m, p), (m.prototype = _), (_.constructor = m);
    var g = "Symbol(description detection)" === String(p("description detection")),
        E = s(_.valueOf),
        b = s(_.toString),
        y = /^Symbol\((.*)\)[^)]+$/,
        O = s("".replace),
        A = s("".slice);
    d(_, "description", {
        configurable: !0,
        get: function () {
            var e = E(this);
            if (o(h, e)) return "";
            var t = b(e),
                n = g ? A(t, 7, -1) : O(t, y, "$1");
            return "" === n ? void 0 : n;
        },
    }),
        r(
            {
                global: !0,
                constructor: !0,
                forced: !0,
            },
            {
                Symbol: m,
            },
        );
}
