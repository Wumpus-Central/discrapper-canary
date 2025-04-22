n.d(t, { Z: () => i });
var l = n(823379),
    a = n(875425),
    r = n(388032);
function i(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    switch (e) {
        case a.FO.TODAY:
            if (t) return r.intl.formatToPlainString(r.t.Yizuvb, { hours: 24 });
            return r.intl.string(r.t.TOEOaW);
        case a.FO.HOURS_4:
            return r.intl.formatToPlainString(r.t.Yizuvb, { hours: 4 });
        case a.FO.HOURS_1:
            return r.intl.formatToPlainString(r.t.Yizuvb, { hours: 1 });
        case a.FO.MINUTES_30:
            return r.intl.formatToPlainString(r.t['/XUoq6'], { minutes: 30 });
        case a.FO.DONT_CLEAR:
            return r.intl.string(r.t.bRn8cn);
        default:
            (0, l.vE)(e);
    }
}
