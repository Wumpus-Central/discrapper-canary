n.d(t, { Z: () => a });
var r = 800,
    i = 16,
    o = Date.now;
let a = function (e) {
    var t = 0,
        n = 0;
    return function () {
        var a = o(),
            s = i - (a - n);
        if (((n = a), s > 0)) {
            if (++t >= r) return arguments[0];
        } else t = 0;
        return e.apply(void 0, arguments);
    };
};
