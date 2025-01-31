n.d(t, { kG: () => a });
var i = n(259630),
    r = n(816552);
function a(e, t, n) {
    if ((void 0 === n && (n = Error), !e)) throw new n(t);
}
(0, r.H)(
    function () {
        for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
        return new ((e = Intl.NumberFormat).bind.apply(e, (0, i.ev)([void 0], t, !1)))();
    },
    { strategy: r.A.variadic }
),
    (0, r.H)(
        function () {
            for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
            return new ((e = Intl.DateTimeFormat).bind.apply(e, (0, i.ev)([void 0], t, !1)))();
        },
        { strategy: r.A.variadic }
    ),
    (0, r.H)(
        function () {
            for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
            return new ((e = Intl.PluralRules).bind.apply(e, (0, i.ev)([void 0], t, !1)))();
        },
        { strategy: r.A.variadic }
    ),
    (0, r.H)(
        function () {
            for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
            return new ((e = Intl.Locale).bind.apply(e, (0, i.ev)([void 0], t, !1)))();
        },
        { strategy: r.A.variadic }
    ),
    (0, r.H)(
        function () {
            for (var e, t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
            return new ((e = Intl.ListFormat).bind.apply(e, (0, i.ev)([void 0], t, !1)))();
        },
        { strategy: r.A.variadic }
    );
