n.d(t, {
    Y5: () => a,
});
var r = n(322811),
    i = n(374372);

function a(e, t, n) {
    let r = s(e.getDateWithAdjustedTimezone(), t, n),
        a = new i.BP(e);
    return (
        (a = a.addDurationAsImplied({
            day: r,
        })).assign("weekday", t),
        a
    );
}

function s(e, t, n) {
    let i = e.getDay();
    switch (n) {
        case "this":
            return l(e, t);
        case "last":
            return c(e, t);
        case "next":
            if (i == r.Bw.SUNDAY) return t == r.Bw.SUNDAY ? 7 : t;
            if (i == r.Bw.SATURDAY) {
                if (t == r.Bw.SATURDAY) return 7;
                if (t == r.Bw.SUNDAY) return 8;
                return 1 + t;
            }
            if (t < i && t != r.Bw.SUNDAY) return l(e, t);
            return l(e, t) + 7;
    }
    return o(e, t);
}

function o(e, t) {
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
