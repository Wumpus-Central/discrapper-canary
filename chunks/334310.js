n.d(e, { A: () => u });
var i = n(405269),
    l = n(927813),
    a = n(403362),
    r = n(403918),
    s = n(985018);
let o = (t) => {
    let e = Date.now() + t;
    return (0, i.ro)(new Date(), new Date(e))
        ? s.intl.data.formatTime(e, { format: "short" })
        : s.intl.formatToPlainString(s.t.DN91Jz, { time: s.intl.data.formatTime(e, { format: "short" }) });
};
function u(t) {
    let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    switch (t) {
        case r.yt.TODAY:
            if (e) return `${s.intl.formatToPlainString(s.t.Rea2gR, { hours: 24 })} (${o(l.A.Millis.DAY)})`;
            return s.intl.string(s.t.GQmLrZ);
        case r.yt.HOURS_4:
            if (e) return `${s.intl.formatToPlainString(s.t.Rea2gR, { hours: 4 })} (${o(4 * l.A.Millis.HOUR)})`;
            return s.intl.formatToPlainString(s.t.Rea2gR, { hours: 4 });
        case r.yt.HOURS_1:
            if (e) return `${s.intl.formatToPlainString(s.t.Rea2gR, { hours: 1 })} (${o(l.A.Millis.HOUR)})`;
            return s.intl.formatToPlainString(s.t.Rea2gR, { hours: 1 });
        case r.yt.MINUTES_30:
            if (e) return `${s.intl.formatToPlainString(s.t.TS3eJb, { minutes: 30 })} (${o(30 * l.A.Millis.MINUTE)})`;
            return s.intl.formatToPlainString(s.t.TS3eJb, { minutes: 30 });
        case r.yt.DONT_CLEAR:
            return s.intl.string(s.t.bRn8cq);
        default:
            (0, a.xb)(t);
    }
}
