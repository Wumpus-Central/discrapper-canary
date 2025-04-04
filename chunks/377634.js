var e = n(185156),
    o = n(506887).has,
    i = n(268571),
    u = n(271221),
    s = n(825677),
    c = n(871959),
    f = n(272763);
t.exports = function (t) {
    var r = e(this),
        n = u(t);
    if (i(r) <= n.size)
        return (
            !1 !==
            s(
                r,
                function (t) {
                    if (n.includes(t)) return !1;
                },
                !0
            )
        );
    var a = n.getIterator();
    return (
        !1 !==
        c(a, function (t) {
            if (o(r, t)) return f(a, 'normal', !1);
        })
    );
};
