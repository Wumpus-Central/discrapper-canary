e.exports = function (e) {
    return function (t, n, r) {
        for (var i = -1, a = Object(t), o = r(t), s = o.length; s--; ) {
            var l = o[e ? s : ++i];
            if (!1 === n(a[l], l, a)) break;
        }
        return t;
    };
};
