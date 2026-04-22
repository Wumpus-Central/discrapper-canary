r.d(t, { Y5: () => a });
var n = r(322811),
    s = r(374372);
function a(e, t, r) {
    let a = (function (e, t, r) {
            var s, a;
            let l,
                u,
                d = e.getDay();
            switch (r) {
                case "this":
                    return i(e, t);
                case "last":
                    return o(e, t);
                case "next":
                    if (d == n.Bw.SUNDAY) return t == n.Bw.SUNDAY ? 7 : t;
                    if (d == n.Bw.SATURDAY) {
                        if (t == n.Bw.SATURDAY) return 7;
                        if (t == n.Bw.SUNDAY) return 8;
                        return 1 + t;
                    }
                    if (t < d && t != n.Bw.SUNDAY) return i(e, t);
                    return i(e, t) + 7;
            }
            return (l = o((s = e), (a = t))), (u = i(s, a)) < -l ? u : l;
        })(e.getDateWithAdjustedTimezone(), t, r),
        l = new s.BP(e);
    return (l = l.addDurationAsImplied({ day: a })).assign("weekday", t), l;
}
function i(e, t) {
    let r = t - e.getDay();
    return r < 0 && (r += 7), r;
}
function o(e, t) {
    let r = t - e.getDay();
    return r >= 0 && (r -= 7), r;
}
