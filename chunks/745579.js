n.d(t, { Z: () => s });
var r = n(70956),
    a = n(823379),
    i = n(875425),
    l = n(388032);
let o = (e) => l.NW.data.formatTime(e, { format: 'short' });
function s(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    switch (e) {
        case i.FO.TODAY:
            if (t) return ''.concat(l.NW.formatToPlainString(l.t.Rea2gY, { hours: 24 }), ' (').concat(o(Date.now() + r.Z.Millis.DAY), ')');
            return l.NW.string(l.t.GQmLra);
        case i.FO.HOURS_4:
            if (t) return ''.concat(l.NW.formatToPlainString(l.t.Rea2gY, { hours: 4 }), ' (').concat(o(Date.now() + 4 * r.Z.Millis.HOUR), ')');
            return l.NW.formatToPlainString(l.t.Rea2gY, { hours: 4 });
        case i.FO.HOURS_1:
            if (t) return ''.concat(l.NW.formatToPlainString(l.t.Rea2gY, { hours: 1 }), ' (').concat(o(Date.now() + r.Z.Millis.HOUR), ')');
            return l.NW.formatToPlainString(l.t.Rea2gY, { hours: 1 });
        case i.FO.MINUTES_30:
            if (t) return ''.concat(l.NW.formatToPlainString(l.t.TS3eJS, { minutes: 30 }), ' (').concat(o(Date.now() + 30 * r.Z.Millis.MINUTE), ')');
            return l.NW.formatToPlainString(l.t.TS3eJS, { minutes: 30 });
        case i.FO.DONT_CLEAR:
            return l.NW.string(l.t.bRn8cn);
        default:
            (0, a.vE)(e);
    }
}
