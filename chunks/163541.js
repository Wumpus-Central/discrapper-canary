n.d(t, { Z: () => s });
var i = 800,
    r = 16,
    a = Date.now;
let s = function (e) {
    var t = 0,
        n = 0;
    return function () {
        var s = a(),
            o = r - (s - n);
        if (((n = s), o > 0)) {
            if (++t >= i) return arguments[0];
        } else t = 0;
        return e.apply(void 0, arguments);
    };
};
