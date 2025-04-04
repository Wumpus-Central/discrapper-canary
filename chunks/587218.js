var r = a(127849),
    n = Object.defineProperty;
t.exports = function (t, e) {
    try {
        n(r, t, {
            value: e,
            configurable: !0,
            writable: !0
        });
    } catch (a) {
        r[t] = e;
    }
    return e;
};
