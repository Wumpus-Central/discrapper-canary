n.d(t, { Z: () => i });
let i = function (e) {
    return function (t, n, i) {
        for (var r = -1, a = Object(t), s = i(t), o = s.length; o--; ) {
            var l = s[e ? o : ++r];
            if (!1 === n(a[l], l, a)) break;
        }
        return t;
    };
};
