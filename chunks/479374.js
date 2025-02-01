var i = n(161581),
    r = n(955903),
    a = n(354848),
    s = n(474180),
    o = n(943329),
    l = n(641236),
    u = n(531379),
    c = n(42024),
    d = n(992051),
    f = n(106295),
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
