var n = e(610475),
    o = e(208909).has,
    s = e(433979),
    i = e(500968),
    u = e(587822),
    c = e(349674),
    a = e(858534);
t.exports = function (t) {
    var r = n(this),
        e = i(t);
    if (s(r) <= e.size)
        return (
            !1 !==
            u(
                r,
                function (t) {
                    if (e.includes(t)) return !1;
                },
                !0,
            )
        );
    var f = e.getIterator();
    return (
        !1 !==
        c(f, function (t) {
            if (o(r, t)) return a(f, "normal", !1);
        })
    );
};
