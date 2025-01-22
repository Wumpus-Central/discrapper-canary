r.d(n, {
    kG: function () {
        return l;
    }
});
var i = r(259630),
    a = r(816552);
function o(e, n, r, i) {
    !e.get(n) && e.set(n, Object.create(null)), (e.get(n)[r] = i);
}
function s(e, n) {
    for (var r = [], i = 2; i < arguments.length; i++) r[i - 2] = arguments[i];
    var a = e.get(n);
    if (!a) throw TypeError(''.concat(n, ' InternalSlot has not been initialized'));
    return r.reduce(function (e, n) {
        return (e[n] = a[n]), e;
    }, Object.create(null));
}
function l(e, n, r) {
    if ((void 0 === r && (r = Error), !e)) throw new r(n);
}
(0, a.H)(
    function () {
        for (var e, n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
        return new ((e = Intl.NumberFormat).bind.apply(e, (0, i.ev)([void 0], n, !1)))();
    },
    { strategy: a.A.variadic }
),
    (0, a.H)(
        function () {
            for (var e, n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
            return new ((e = Intl.DateTimeFormat).bind.apply(e, (0, i.ev)([void 0], n, !1)))();
        },
        { strategy: a.A.variadic }
    ),
    (0, a.H)(
        function () {
            for (var e, n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
            return new ((e = Intl.PluralRules).bind.apply(e, (0, i.ev)([void 0], n, !1)))();
        },
        { strategy: a.A.variadic }
    ),
    (0, a.H)(
        function () {
            for (var e, n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
            return new ((e = Intl.Locale).bind.apply(e, (0, i.ev)([void 0], n, !1)))();
        },
        { strategy: a.A.variadic }
    ),
    (0, a.H)(
        function () {
            for (var e, n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
            return new ((e = Intl.ListFormat).bind.apply(e, (0, i.ev)([void 0], n, !1)))();
        },
        { strategy: a.A.variadic }
    );
