n.d(t, { Z: () => s });
var r = n(70956),
    a = n(823379),
    i = n(875425),
    o = n(388032);
let l = (e) => o.NW.data.formatTime(e, { format: 'short' });
function s(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    switch (e) {
        case i.FO.TODAY:
            if (t) return ''.concat(o.NW.formatToPlainString(o.t.Rea2gY, { hours: 24 }), ' (').concat(l(Date.now() + r.Z.Millis.DAY), ')');
            return o.NW.string(o.t.GQmLra);
        case i.FO.HOURS_4:
            if (t) return ''.concat(o.NW.formatToPlainString(o.t.Rea2gY, { hours: 4 }), ' (').concat(l(Date.now() + 4 * r.Z.Millis.HOUR), ')');
            return o.NW.formatToPlainString(o.t.Rea2gY, { hours: 4 });
        case i.FO.HOURS_1:
            if (t) return ''.concat(o.NW.formatToPlainString(o.t.Rea2gY, { hours: 1 }), ' (').concat(l(Date.now() + r.Z.Millis.HOUR), ')');
            return o.NW.formatToPlainString(o.t.Rea2gY, { hours: 1 });
        case i.FO.MINUTES_30:
            if (t) return ''.concat(o.NW.formatToPlainString(o.t.TS3eJS, { minutes: 30 }), ' (').concat(l(Date.now() + 30 * r.Z.Millis.MINUTE), ')');
            return o.NW.formatToPlainString(o.t.TS3eJS, { minutes: 30 });
        case i.FO.DONT_CLEAR:
            return o.NW.string(o.t.bRn8cn);
        default:
            (0, a.vE)(e);
    }
}
