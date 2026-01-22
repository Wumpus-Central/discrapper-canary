var r = n(250594),
    i = n(273761),
    a = n(503199);
e.exports = function (e) {
    for (
        var t = r(this),
            n = a(t),
            s = arguments.length,
            o = i(s > 1 ? arguments[1] : void 0, n),
            l = s > 2 ? arguments[2] : void 0,
            c = void 0 === l ? n : i(l, n);
        c > o;
    )
        t[o++] = e;
    return t;
};
