function t(e, t, n, i, r) {
    return (
        r(e, function (e, r, a) {
            n = i ? ((i = !1), e) : t(n, e, r, a);
        }),
        n
    );
}
e.exports = t;
