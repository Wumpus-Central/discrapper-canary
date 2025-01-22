var i = r(161581),
    a = r(955903),
    o = r(354848),
    s = r(474180),
    l = r(943329),
    u = r(641236),
    c = r(531379),
    d = r(42024),
    f = r(992051),
    p = r(106295),
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
