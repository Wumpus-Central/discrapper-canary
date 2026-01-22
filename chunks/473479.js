e.exports = {
    getRemovalRange: function (e, t, n, r, i) {
        var a,
            s = n.split(" ");
        s = s.map(function (e, t) {
            if ("forward" === i) {
                if (t > 0) return " " + e;
            } else if (t < s.length - 1) return e + " ";
            return e;
        });
        for (var o = r, l = null, c = null, u = 0; u < s.length; u++) {
            if (e < (a = o + s[u].length) && o < t) null !== l || (l = o), (c = a);
            else if (null !== l) break;
            o = a;
        }
        var d = r + n.length,
            f = l === r,
            p = c === d;
        return (
            ((!f && p) || (f && !p)) && ("forward" === i ? c !== d && c++ : l !== r && l--),
            {
                start: l,
                end: c,
            }
        );
    },
};
