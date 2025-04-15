n.d(t, { Z: () => u });
var r = n(55935),
    a = n(70956),
    i = n(823379),
    l = n(875425),
    o = n(388032);
let s = (e) => {
    let t = Date.now() + e;
    return (0, r.KC)(new Date(), new Date(t))
        ? o.NW.data.formatTime(t, { format: 'short' })
        : o.NW.formatToPlainString(o.t['sdRx+P'], {
              date: o.NW.data.formatRelativeTime(1, 'day', { numeric: 'auto' }),
              time: o.NW.data.formatTime(t, { format: 'short' })
          });
};
function u(e) {
    let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    switch (e) {
        case l.FO.TODAY:
            if (t) return ''.concat(o.NW.formatToPlainString(o.t.Rea2gY, { hours: 24 }), ' (').concat(s(a.Z.Millis.DAY), ')');
            return o.NW.string(o.t.GQmLra);
        case l.FO.HOURS_4:
            if (t) return ''.concat(o.NW.formatToPlainString(o.t.Rea2gY, { hours: 4 }), ' (').concat(s(4 * a.Z.Millis.HOUR), ')');
            return o.NW.formatToPlainString(o.t.Rea2gY, { hours: 4 });
        case l.FO.HOURS_1:
            if (t) return ''.concat(o.NW.formatToPlainString(o.t.Rea2gY, { hours: 1 }), ' (').concat(s(a.Z.Millis.HOUR), ')');
            return o.NW.formatToPlainString(o.t.Rea2gY, { hours: 1 });
        case l.FO.MINUTES_30:
            if (t) return ''.concat(o.NW.formatToPlainString(o.t.TS3eJS, { minutes: 30 }), ' (').concat(s(30 * a.Z.Millis.MINUTE), ')');
            return o.NW.formatToPlainString(o.t.TS3eJS, { minutes: 30 });
        case l.FO.DONT_CLEAR:
            return o.NW.string(o.t.bRn8cn);
        default:
            (0, i.vE)(e);
    }
}
