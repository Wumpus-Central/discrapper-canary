var r = n(101968),
    i = n(350714);
e.exports = function (e, t, n, a) {
    try {
        return a ? t(r(n)[0], n[1]) : t(n);
    } catch (t) {
        i(e, "throw", t);
    }
};
