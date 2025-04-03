var r = n(161581),
    i = n(955903),
    o = n(354848),
    a = n(474180),
    s = n(943329),
    l = n(641236),
    c = n(531379),
    u = n(42024),
    d = n(992051),
    f = n(106295),
    _ = i && i.prototype,
    p = l('species'),
    h = !1,
    m = o(r.PromiseRejectionEvent);
e.exports = {
    CONSTRUCTOR: a('Promise', function () {
        var e = s(i),
            t = e !== String(i);
        if ((!t && 66 === f) || (d && !(_.catch && _.finally))) return !0;
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
            if ((((n.constructor = {})[p] = r), !(h = n.then(function () {}) instanceof r))) return !0;
        }
        return !t && (c || u) && !m;
    }),
    REJECTION_EVENT: m,
    SUBCLASSING: h
};
