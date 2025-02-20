var r = n(668530),
    i = n(197859),
    o = n(735471),
    a = n(902538),
    s = n(976396),
    l = n(360518),
    c = n(661338),
    u = n(252110),
    d = n(414629),
    f = n(882708),
    p = i && i.prototype,
    _ = l('species'),
    h = !1,
    m = o(r.PromiseRejectionEvent),
    g = a('Promise', function () {
        var e = s(i),
            t = e !== String(i);
        if ((!t && 66 === f) || (d && !(p.catch && p.finally))) return !0;
        if (!f || f < 51 || !/native code/.test(e)) {
            var n = new i(function (e) {
                    e(1);
                }),
                r = function (e) {
                    e(
                        function () {},
                        function () {}
                    );
                };
            if ((((n.constructor = {})[_] = r), !(h = n.then(function () {}) instanceof r))) return !0;
        }
        return !t && (c || u) && !m;
    });
e.exports = {
    CONSTRUCTOR: g,
    REJECTION_EVENT: m,
    SUBCLASSING: h
};
