var r = n(424353),
    o = n(57100),
    a = n(971428),
    i = n(417791),
    s = n(975378),
    c = n(394370),
    l = n(560103),
    u = n(253462),
    d = n(306983),
    p = o && o.prototype,
    h = c('species'),
    f = !1,
    m = a(r.PromiseRejectionEvent);
e.exports = {
    CONSTRUCTOR: i('Promise', function () {
        var e = s(o),
            t = e !== String(o);
        if ((!t && 66 === d) || (u && !(p.catch && p.finally))) return !0;
        if (!d || d < 51 || !/native code/.test(e)) {
            var n = new o(function (e) {
                    e(1);
                }),
                r = function (e) {
                    e(
                        function () {},
                        function () {}
                    );
                };
            if ((((n.constructor = {})[h] = r), !(f = n.then(function () {}) instanceof r))) return !0;
        }
        return !t && ('BROWSER' === l || 'DENO' === l) && !m;
    }),
    REJECTION_EVENT: m,
    SUBCLASSING: f
};
