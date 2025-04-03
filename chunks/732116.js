var r = n(668530),
    o = n(197859),
    a = n(735471),
    i = n(902538),
    s = n(976396),
    c = n(360518),
    l = n(661338),
    u = n(252110),
    d = n(414629),
    p = n(882708),
    h = o && o.prototype,
    f = c('species'),
    m = !1,
    y = a(r.PromiseRejectionEvent);
e.exports = {
    CONSTRUCTOR: i('Promise', function () {
        var e = s(o),
            t = e !== String(o);
        if ((!t && 66 === p) || (d && !(h.catch && h.finally))) return !0;
        if (!p || p < 51 || !/native code/.test(e)) {
            var n = new o(function (e) {
                    e(1);
                }),
                r = function (e) {
                    e(
                        function () {},
                        function () {}
                    );
                };
            if ((((n.constructor = {})[f] = r), !(m = n.then(function () {}) instanceof r))) return !0;
        }
        return !t && (l || u) && !y;
    }),
    REJECTION_EVENT: y,
    SUBCLASSING: m
};
