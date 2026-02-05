"use strict";
t.exports = {
    getRemovalRange: function (t, e, r, n, i) {
        var o,
            a = r.split(" ");
        a = a.map(function (t, e) {
            if ("forward" === i) {
                if (e > 0) return " " + t;
            } else if (e < a.length - 1) return t + " ";
            return t;
        });
        for (var s = n, u = null, c = null, l = 0; l < a.length; l++) {
            if (t < (o = s + a[l].length) && s < e) null !== u || (u = s), (c = o);
            else if (null !== u) break;
            s = o;
        }
        var f = n + r.length,
            p = u === n,
            h = c === f;
        return ((!p && h) || (p && !h)) && ("forward" === i ? c !== f && c++ : u !== n && u--), { start: u, end: c };
    },
};
