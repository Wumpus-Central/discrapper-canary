var r = n(390446),
    i = n(552982),
    a = n(708996),
    s = n(533786);
e.exports = function (e) {
    return function (t) {
        var n = i((t = s(t))) ? a(t) : void 0,
            o = n ? n[0] : t.charAt(0),
            l = n ? r(n, 1).join("") : t.slice(1);
        return o[e]() + l;
    };
};
