r.d(t, { Z: () => n });
let n = function (e) {
    return function (t, r, n) {
        for (var o = -1, a = Object(t), i = n(t), l = i.length; l--; ) {
            var s = i[e ? l : ++o];
            if (!1 === r(a[s], s, a)) break;
        }
        return t;
    };
};
