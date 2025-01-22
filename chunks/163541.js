var r = 800,
    i = 16,
    a = Date.now;
function o(e) {
    var n = 0,
        o = 0;
    return function () {
        var s = a(),
            l = i - (s - o);
        if (((o = s), l > 0)) {
            if (++n >= r) return arguments[0];
        } else n = 0;
        return e.apply(void 0, arguments);
    };
}
n.Z = o;
