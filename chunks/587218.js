var e = r(127849),
    o = Object.defineProperty;
t.exports = function (t, n) {
    try {
        o(e, t, {
            value: n,
            configurable: !0,
            writable: !0
        });
    } catch (r) {
        e[t] = n;
    }
    return n;
};
