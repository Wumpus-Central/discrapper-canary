n.d(t, { Z: () => u });
var a = n(55935),
    r = n(70956),
    l = n(823379),
    i = n(875425),
    o = n(388032);
let s = (e) => {
    let t = Date.now() + e;
    return (0, a.KC)(new Date(), new Date(t))
        ? o.NW.data.formatTime(t, { format: 'short' })
        : o.NW.formatToPlainString(o.t['sdRx+P'], {
              date: o.NW.data.formatRelativeTime(1, 'day', { numeric: 'auto' }),
              time: o.NW.data.formatTime(t, { format: 'short' })
          });
};
function u(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    switch (e) {
        case i.FO.TODAY:
            if (t) return ''.concat(o.NW.formatToPlainString(o.t.Rea2gY, { hours: 24 }), ' (').concat(s(r.Z.Millis.DAY), ')');
            return o.NW.string(o.t.GQmLra);
        case i.FO.HOURS_4:
            if (t) return ''.concat(o.NW.formatToPlainString(o.t.Rea2gY, { hours: 4 }), ' (').concat(s(4 * r.Z.Millis.HOUR), ')');
            return o.NW.formatToPlainString(o.t.Rea2gY, { hours: 4 });
        case i.FO.HOURS_1:
            if (t) return ''.concat(o.NW.formatToPlainString(o.t.Rea2gY, { hours: 1 }), ' (').concat(s(r.Z.Millis.HOUR), ')');
            return o.NW.formatToPlainString(o.t.Rea2gY, { hours: 1 });
        case i.FO.MINUTES_30:
            if (t) return ''.concat(o.NW.formatToPlainString(o.t.TS3eJS, { minutes: 30 }), ' (').concat(s(30 * r.Z.Millis.MINUTE), ')');
            return o.NW.formatToPlainString(o.t.TS3eJS, { minutes: 30 });
        case i.FO.DONT_CLEAR:
            return o.NW.string(o.t.bRn8cn);
        default:
            (0, l.vE)(e);
    }
}
