n.d(e, { Z: () => u });
var l = n(55935),
    r = n(70956),
    a = n(823379),
    i = n(875425),
    o = n(388032);
let s = (t) => {
    let e = Date.now() + t;
    return (0, l.KC)(new Date(), new Date(e))
        ? o.intl.data.formatTime(e, { format: 'short' })
        : o.intl.formatToPlainString(o.t['sdRx+P'], {
              date: o.intl.data.formatRelativeTime(1, 'day', { numeric: 'auto' }),
              time: o.intl.data.formatTime(e, { format: 'short' })
          });
};
function u(t) {
    let e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
    switch (t) {
        case i.FO.TODAY:
            if (e) return ''.concat(o.intl.formatToPlainString(o.t.Rea2gY, { hours: 24 }), ' (').concat(s(r.Z.Millis.DAY), ')');
            return o.intl.string(o.t.GQmLra);
        case i.FO.HOURS_4:
            if (e) return ''.concat(o.intl.formatToPlainString(o.t.Rea2gY, { hours: 4 }), ' (').concat(s(4 * r.Z.Millis.HOUR), ')');
            return o.intl.formatToPlainString(o.t.Rea2gY, { hours: 4 });
        case i.FO.HOURS_1:
            if (e) return ''.concat(o.intl.formatToPlainString(o.t.Rea2gY, { hours: 1 }), ' (').concat(s(r.Z.Millis.HOUR), ')');
            return o.intl.formatToPlainString(o.t.Rea2gY, { hours: 1 });
        case i.FO.MINUTES_30:
            if (e) return ''.concat(o.intl.formatToPlainString(o.t.TS3eJS, { minutes: 30 }), ' (').concat(s(30 * r.Z.Millis.MINUTE), ')');
            return o.intl.formatToPlainString(o.t.TS3eJS, { minutes: 30 });
        case i.FO.DONT_CLEAR:
            return o.intl.string(o.t.bRn8cn);
        default:
            (0, a.vE)(t);
    }
}
