var i = n(668530),
    r = n(197859),
    a = n(735471),
    s = n(902538),
    o = n(976396),
    l = n(360518),
    u = n(661338),
    c = n(252110),
    d = n(414629),
    f = n(882708),
    _ = r && r.prototype,
    p = l('species'),
    h = !1,
    m = a(i.PromiseRejectionEvent),
    g = s('Promise', function () {
        var e = o(r),
            t = e !== String(r);
        if ((!t && 66 === f) || (d && !(_.catch && _.finally))) return !0;
        if (!f || f < 51 || !/native code/.test(e)) {
            var n = new r(function (e) {
                    e(1);
                }),
                i = function (e) {
                    e(
                        function () {},
                        function () {}
                    );
                };
            if ((((n.constructor = {})[p] = i), !(h = n.then(function () {}) instanceof i))) return !0;
        }
        return !t && (u || c) && !m;
    });
e.exports = {
    CONSTRUCTOR: g,
    REJECTION_EVENT: m,
    SUBCLASSING: h
};
