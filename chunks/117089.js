r.d(n, {
    D: function () {
        return o;
    }
});
var i = r(812975),
    a = r(686942);
function o(e, n, r, o, s, l) {
    var u = {
            lastyear: e,
            lastmonth: n,
            nwdaymask: []
        },
        c = [];
    if (l.freq === i.Ci.YEARLY) {
        if ((0, a.cS)(l.bymonth)) c = [[0, r]];
        else for (var d = 0; d < l.bymonth.length; d++) (n = l.bymonth[d]), c.push(o.slice(n - 1, n + 1));
    } else l.freq === i.Ci.MONTHLY && (c = [o.slice(n - 1, n + 1)]);
    if ((0, a.cS)(c)) return u;
    u.nwdaymask = (0, a.rx)(0, r);
    for (var d = 0; d < c.length; d++) {
        for (var f = c[d], p = f[0], h = f[1] - 1, _ = 0; _ < l.bynweekday.length; _++) {
            var m = void 0,
                g = l.bynweekday[_],
                E = g[0],
                v = g[1];
            v < 0 ? ((m = h + (v + 1) * 7), (m -= (0, a.Vy)(s[m] - E, 7))) : ((m = p + (v - 1) * 7), (m += (0, a.Vy)(7 - s[m] + E, 7))), p <= m && m <= h && (u.nwdaymask[m] = 1);
        }
    }
    return u;
}
