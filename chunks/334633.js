n.d(t, { Rv: () => a });
var r = n(894186),
    i = n(86465);
function a(e, t, n) {
    let r = o(e.getDateWithAdjustedTimezone(), t, n),
        a = new i.L(e);
    return (a = a.addDurationAsImplied({ day: r })).assign("weekday", t), a;
}
function o(e, t, n) {
    let i = e.getDay();
    switch (n) {
        case "this":
            return l(e, t);
        case "last":
            return c(e, t);
        case "next":
            if (i == r.OG.SUNDAY) return t == r.OG.SUNDAY ? 7 : t;
            if (i == r.OG.SATURDAY) {
                if (t == r.OG.SATURDAY) return 7;
                if (t == r.OG.SUNDAY) return 8;
                return 1 + t;
            }
            if (t < i && t != r.OG.SUNDAY) return l(e, t);
            return l(e, t) + 7;
    }
    return s(e, t);
}
function s(e, t) {
    let n = c(e, t),
        r = l(e, t);
    return r < -n ? r : n;
}
function l(e, t) {
    let n = t - e.getDay();
    return n < 0 && (n += 7), n;
}
function c(e, t) {
    let n = t - e.getDay();
    return n >= 0 && (n -= 7), n;
}
