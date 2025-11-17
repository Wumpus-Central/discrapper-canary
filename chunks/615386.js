e.exports = {
    getRemovalRange: function (e, t, n, r, i) {
        var a,
            o = n.split(" ");
        o = o.map(function (e, t) {
            if ("forward" === i) {
                if (t > 0) return " " + e;
            } else if (t < o.length - 1) return e + " ";
            return e;
        });
        for (var s = r, l = null, c = null, u = 0; u < o.length; u++) {
            if (e < (a = s + o[u].length) && s < t) null !== l || (l = s), (c = a);
            else if (null !== l) break;
            s = a;
        }
        var d = r + n.length,
            f = l === r,
            _ = c === d;
        return (
            ((!f && _) || (f && !_)) && ("forward" === i ? c !== d && c++ : l !== r && l--),
            {
                start: l,
                end: c,
            }
        );
    },
};
