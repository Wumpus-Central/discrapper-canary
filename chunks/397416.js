n.d(t, { Z: () => i });
var l = n(823379),
    r = n(875425),
    a = n(388032);
function i(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    switch (e) {
        case r.FO.TODAY:
            if (t) return a.intl.formatToPlainString(a.t.Yizuvb, { hours: 24 });
            return a.intl.string(a.t.TOEOaW);
        case r.FO.HOURS_4:
            return a.intl.formatToPlainString(a.t.Yizuvb, { hours: 4 });
        case r.FO.HOURS_1:
            return a.intl.formatToPlainString(a.t.Yizuvb, { hours: 1 });
        case r.FO.MINUTES_30:
            return a.intl.formatToPlainString(a.t['/XUoq6'], { minutes: 30 });
        case r.FO.DONT_CLEAR:
            return a.intl.string(a.t.bRn8cn);
        default:
            (0, l.vE)(e);
    }
}
