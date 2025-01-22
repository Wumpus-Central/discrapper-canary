var i = r(668530),
    a = r(197859),
    o = r(735471),
    s = r(902538),
    l = r(976396),
    u = r(360518),
    c = r(661338),
    d = r(252110),
    f = r(414629),
    p = r(882708),
    h = a && a.prototype,
    _ = u('species'),
    m = !1,
    g = o(i.PromiseRejectionEvent),
    E = s('Promise', function () {
        var e = l(a),
            n = e !== String(a);
        if ((!n && 66 === p) || (f && !(h.catch && h.finally))) return !0;
        if (!p || p < 51 || !/native code/.test(e)) {
            var r = new a(function (e) {
                    e(1);
                }),
                i = function (e) {
                    e(
                        function () {},
                        function () {}
                    );
                };
            if ((((r.constructor = {})[_] = i), !(m = r.then(function () {}) instanceof i))) return !0;
        }
        return !n && (c || d) && !g;
    });
e.exports = {
    CONSTRUCTOR: E,
    REJECTION_EVENT: g,
    SUBCLASSING: m
};
