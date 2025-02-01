var t = 800,
    n = 16,
    i = Date.now;
function r(e) {
    var r = 0,
        a = 0;
    return function () {
        var s = i(),
            o = n - (s - a);
        if (((a = s), o > 0)) {
            if (++r >= t) return arguments[0];
        } else r = 0;
        return e.apply(void 0, arguments);
    };
}
e.exports = r;
