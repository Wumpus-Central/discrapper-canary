var i = r(668530),
    a = Object.defineProperty;
e.exports = function (e, n) {
    try {
        a(i, e, {
            value: n,
            configurable: !0,
            writable: !0
        });
    } catch (r) {
        i[e] = n;
    }
    return n;
};
