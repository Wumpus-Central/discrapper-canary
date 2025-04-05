n.d(t, { Z: () => o });
var r = n(823379),
    a = n(875425),
    i = n(388032);
function o(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    switch (e) {
        case a.FO.TODAY:
            if (t) return i.NW.formatToPlainString(i.t.Yizuvb, { hours: 24 });
            return i.NW.string(i.t.TOEOaW);
        case a.FO.HOURS_4:
            return i.NW.formatToPlainString(i.t.Yizuvb, { hours: 4 });
        case a.FO.HOURS_1:
            return i.NW.formatToPlainString(i.t.Yizuvb, { hours: 1 });
        case a.FO.MINUTES_30:
            return i.NW.formatToPlainString(i.t['/XUoq6'], { minutes: 30 });
        case a.FO.DONT_CLEAR:
            return i.NW.string(i.t.bRn8cn);
        default:
            (0, r.vE)(e);
    }
}
