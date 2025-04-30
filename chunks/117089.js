n.d(t, { D: () => o });
var r = n(812975),
    i = n(686942);
function o(e, t, n, o, a, s) {
    var l = {
            lastyear: e,
            lastmonth: t,
            nwdaymask: []
        },
        c = [];
    if (s.freq === r.Ci.YEARLY)
        if ((0, i.cS)(s.bymonth)) c = [[0, n]];
        else for (var u = 0; u < s.bymonth.length; u++) (t = s.bymonth[u]), c.push(o.slice(t - 1, t + 1));
    else s.freq === r.Ci.MONTHLY && (c = [o.slice(t - 1, t + 1)]);
    if ((0, i.cS)(c)) return l;
    l.nwdaymask = (0, i.rx)(0, n);
    for (var u = 0; u < c.length; u++)
        for (var d = c[u], f = d[0], _ = d[1] - 1, p = 0; p < s.bynweekday.length; p++) {
            var h = void 0,
                m = s.bynweekday[p],
                g = m[0],
                E = m[1];
            E < 0 ? ((h = _ + (E + 1) * 7), (h -= (0, i.Vy)(a[h] - g, 7))) : ((h = f + (E - 1) * 7), (h += (0, i.Vy)(7 - a[h] + g, 7))), f <= h && h <= _ && (l.nwdaymask[h] = 1);
        }
    return l;
}
