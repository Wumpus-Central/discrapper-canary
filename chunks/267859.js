l.d(t, { A: () => o });
var n = l(405269),
    i = l(927813),
    r = l(403362),
    a = l(403918),
    s = l(985018);
let u = (e) => {
    let t = Date.now() + e;
    return (0, n.ro)(new Date(), new Date(t))
        ? s.intl.formatToPlainString(s.t["+3jw2j"], { time: s.intl.data.formatTime(t, { format: "short" }) })
        : s.intl.formatToPlainString(s.t["/Avy4C"], { time: s.intl.data.formatTime(t, { format: "short" }) });
};
function o(e) {
    switch (e) {
        case a.yt.TODAY:
            return u(i.A.Millis.DAY);
        case a.yt.HOURS_4:
            return u(4 * i.A.Millis.HOUR);
        case a.yt.HOURS_1:
            return u(+i.A.Millis.HOUR);
        case a.yt.MINUTES_30:
            return u(30 * i.A.Millis.MINUTE);
        case a.yt.DONT_CLEAR:
            return s.intl.string(s.t.bRn8cq);
        default:
            (0, r.xb)(e);
    }
}
