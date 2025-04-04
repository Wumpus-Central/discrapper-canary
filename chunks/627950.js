var e = n(185156),
    o = n(268571),
    i = n(825677),
    u = n(271221);
t.exports = function (t) {
    var r = e(this),
        n = u(t);
    return (
        !(o(r) > n.size) &&
        !1 !==
            i(
                r,
                function (t) {
                    if (!n.includes(t)) return !1;
                },
                !0
            )
    );
};
