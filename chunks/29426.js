var n = 800,
    r = 16,
    i = Date.now;
function a(e) {
    var a = 0,
        o = 0;
    return function () {
        var s = i(),
            l = r - (s - o);
        if (((o = s), l > 0)) {
            if (++a >= n) return arguments[0];
        } else a = 0;
        return e.apply(void 0, arguments);
    };
}
e.exports = a;
