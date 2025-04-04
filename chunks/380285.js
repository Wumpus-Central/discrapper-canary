var r = n(921413);
e.exports = function (e, t, n) {
    return function () {
        for (var o = new e(), a = arguments.length, i = 0; i < a; i++) {
            var s = arguments[i];
            n ? t(o, r(s)[0], s[1]) : t(o, s);
        }
        return o;
    };
};
