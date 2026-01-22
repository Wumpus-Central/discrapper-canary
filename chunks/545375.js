var r = n(860511),
    i = n(36935),
    a = n(339626),
    s = n(521351),
    o = n(997159),
    l = n(380744),
    c = n(676528),
    u = n(105712),
    d = n(123166),
    f = i && i.prototype,
    p = l("species"),
    _ = !1,
    h = a(r.PromiseRejectionEvent);
e.exports = {
    CONSTRUCTOR: s("Promise", function () {
        var e = o(i),
            t = e !== String(i);
        if ((!t && 66 === d) || (u && !(f.catch && f.finally))) return !0;
        if (!d || d < 51 || !/native code/.test(e)) {
            var n = new i(function (e) {
                    e(1);
                }),
                r = function (e) {
                    e(
                        function () {},
                        function () {},
                    );
                };
            if ((((n.constructor = {})[p] = r), !(_ = n.then(function () {}) instanceof r))) return !0;
        }
        return !t && ("BROWSER" === c || "DENO" === c) && !h;
    }),
    REJECTION_EVENT: h,
    SUBCLASSING: _,
};
