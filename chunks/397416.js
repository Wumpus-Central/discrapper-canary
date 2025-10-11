n.d(t, { Z: () => u });
var r = n(55935),
    i = n(70956),
    l = n(823379),
    a = n(875425),
    o = n(388032);
let s = (e) => {
    let t = Date.now() + e;
    return (0, r.KC)(new Date(), new Date(t))
        ? o.intl.formatToPlainString(o.t["+3jw2t"], { time: o.intl.data.formatTime(t, { format: "short" }) })
        : o.intl.formatToPlainString(o.t["/Avy4O"], { time: o.intl.data.formatTime(t, { format: "short" }) });
};
function u(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    switch (e) {
        case a.FO.TODAY:
            if (t) return s(i.Z.Millis.DAY);
            return o.intl.string(o.t.TOEOaW);
        case a.FO.HOURS_4:
            if (t) return s(4 * i.Z.Millis.HOUR);
            return o.intl.formatToPlainString(o.t.Yizuvb, { hours: 4 });
        case a.FO.HOURS_1:
            if (t) return s(+i.Z.Millis.HOUR);
            return o.intl.formatToPlainString(o.t.Yizuvb, { hours: 1 });
        case a.FO.MINUTES_30:
            if (t) return s(30 * i.Z.Millis.MINUTE);
            return o.intl.formatToPlainString(o.t["/XUoq6"], { minutes: 30 });
        case a.FO.DONT_CLEAR:
            return o.intl.string(o.t.bRn8cn);
        default:
            (0, l.vE)(e);
    }
}
