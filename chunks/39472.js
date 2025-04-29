t.exports = {
    getRemovalRange: function (t, e, r, n, i) {
        var o,
            a = r.split(' ');
        a = a.map(function (t, e) {
            if ('forward' === i) {
                if (e > 0) return ' ' + t;
            } else if (e < a.length - 1) return t + ' ';
            return t;
        });
        for (var u = n, s = null, c = null, l = 0; l < a.length; l++) {
            if (t < (o = u + a[l].length) && u < e) null !== s || (s = u), (c = o);
            else if (null !== s) break;
            u = o;
        }
        var f = n + r.length,
            p = s === n,
            h = c === f;
        return (
            ((!p && h) || (p && !h)) && ('forward' === i ? c !== f && c++ : s !== n && s--),
            {
                start: s,
                end: c
            }
        );
    }
};
