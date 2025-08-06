e.exports = {
    getRemovalRange: function (e, t, n, r, i) {
        var o,
            a = n.split(' ');
        a = a.map(function (e, t) {
            if ('forward' === i) {
                if (t > 0) return ' ' + e;
            } else if (t < a.length - 1) return e + ' ';
            return e;
        });
        for (var s = r, l = null, c = null, u = 0; u < a.length; u++) {
            if (e < (o = s + a[u].length) && s < t) (null !== l || (l = s), (c = o));
            else if (null !== l) break;
            s = o;
        }
        var d = r + n.length,
            f = l === r,
            _ = c === d;
        return (
            ((!f && _) || (f && !_)) && ('forward' === i ? c !== d && c++ : l !== r && l--),
            {
                start: l,
                end: c
            }
        );
    }
};
