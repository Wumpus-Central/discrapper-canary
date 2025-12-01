n.d(t, { D: () => a });
var r = n(812975),
    i = n(686942);
function a(e, t, n, a, o, s) {
    var l = {
            lastyear: e,
            lastmonth: t,
            nwdaymask: [],
        },
        c = [];
    if (s.freq === r.Ci.YEARLY)
        if ((0, i.cS)(s.bymonth)) c = [[0, n]];
        else for (var u = 0; u < s.bymonth.length; u++) (t = s.bymonth[u]), c.push(a.slice(t - 1, t + 1));
    else s.freq === r.Ci.MONTHLY && (c = [a.slice(t - 1, t + 1)]);
    if ((0, i.cS)(c)) return l;
    l.nwdaymask = (0, i.rx)(0, n);
    for (var u = 0; u < c.length; u++)
        for (var d = c[u], f = d[0], p = d[1] - 1, _ = 0; _ < s.bynweekday.length; _++) {
            var m = void 0,
                h = s.bynweekday[_],
                g = h[0],
                E = h[1];
            E < 0
                ? ((m = p + (E + 1) * 7), (m -= (0, i.Vy)(o[m] - g, 7)))
                : ((m = f + (E - 1) * 7), (m += (0, i.Vy)(7 - o[m] + g, 7))),
                f <= m && m <= p && (l.nwdaymask[m] = 1);
        }
    return l;
}
