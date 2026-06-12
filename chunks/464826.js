e.exports = function (e, t, n, i, r) {
    return (
        r(e, function (e, r, s) {
            n = i ? ((i = !1), e) : t(n, e, r, s);
        }),
        n
    );
};
