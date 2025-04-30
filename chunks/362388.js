var r = n(4609),
    i = Math.max;
e.exports = function (e, t, n) {
    return (
        (t = i(void 0 === t ? e.length - 1 : t, 0)),
        function () {
            for (var o = arguments, a = -1, s = i(o.length - t, 0), l = Array(s); ++a < s; ) l[a] = o[t + a];
            a = -1;
            for (var c = Array(t + 1); ++a < t; ) c[a] = o[a];
            return (c[t] = n(l)), r(e, this, c);
        }
    );
};
