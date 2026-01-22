e.exports = function (e) {
    return function (t, n, r) {
        for (var i = -1, a = Object(t), s = r(t), o = s.length; o--; ) {
            var l = s[e ? o : ++i];
            if (!1 === n(a[l], l, a)) break;
        }
        return t;
    };
};
