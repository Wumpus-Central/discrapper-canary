n.d(t, { Z: () => s });
var r = n(55935),
    i = n(70956),
    l = n(823379),
    a = n(875425),
    o = n(388032);
let u = (e) => {
    let t = Date.now() + e;
    return (0, r.KC)(new Date(), new Date(t))
        ? o.intl.formatToPlainString(o.t["+3jw2j"], { time: o.intl.data.formatTime(t, { format: "short" }) })
        : o.intl.formatToPlainString(o.t["/Avy4C"], { time: o.intl.data.formatTime(t, { format: "short" }) });
};
function s(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    switch (e) {
        case a.FO.TODAY:
            if (t) return u(i.Z.Millis.DAY);
            return o.intl.string(o.t.TOEOae);
        case a.FO.HOURS_4:
            if (t) return u(4 * i.Z.Millis.HOUR);
            return o.intl.formatToPlainString(o.t.YizuvW, { hours: 4 });
        case a.FO.HOURS_1:
            if (t) return u(+i.Z.Millis.HOUR);
            return o.intl.formatToPlainString(o.t.YizuvW, { hours: 1 });
        case a.FO.MINUTES_30:
            if (t) return u(30 * i.Z.Millis.MINUTE);
            return o.intl.formatToPlainString(o.t["/XUoq5"], { minutes: 30 });
        case a.FO.DONT_CLEAR:
            return o.intl.string(o.t.bRn8cq);
        default:
            (0, l.vE)(e);
    }
}
