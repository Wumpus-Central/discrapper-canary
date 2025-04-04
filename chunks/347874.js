n.d(t, {
    Fx: () => u,
    I6: () => d,
    hl: () => f
});
var r = n(146150),
    i = n(707908),
    o = n(686942),
    a = n(812975),
    s = n(695170),
    l = n(713267),
    c = n(68808);
function u(e) {
    for (var t = [], n = Object.keys(e), i = 0, l = n; i < l.length; i++) {
        var c = l[i];
        (0, o.q9)(a.DY, c) || t.push(c), (0, s.J_)(e[c]) && !(0, s.qb)(e[c]) && t.push(c);
    }
    if (t.length) throw Error('Invalid options: ' + t.join(', '));
    return (0, r.pi)({}, e);
}
function d(e) {
    var t = (0, r.pi)((0, r.pi)({}, a.WN), u(e));
    if (((0, o.EN)(t.byeaster) && (t.freq = a.Ci.YEARLY), !((0, o.EN)(t.freq) && a.Ci.FREQUENCIES[t.freq]))) throw Error('Invalid frequency: '.concat(t.freq, ' ').concat(e.freq));
    if ((t.dtstart || (t.dtstart = new Date(new Date().setMilliseconds(0))), (0, o.EN)(t.wkst) ? (0, o.hj)(t.wkst) || (t.wkst = t.wkst.weekday) : (t.wkst = a.Ci.MO.weekday), (0, o.EN)(t.bysetpos))) {
        (0, o.hj)(t.bysetpos) && (t.bysetpos = [t.bysetpos]);
        for (var n = 0; n < t.bysetpos.length; n++) {
            var i = t.bysetpos[n];
            if (0 === i || !(i >= -366 && i <= 366)) throw Error('bysetpos must be between 1 and 366, or between -366 and -1');
        }
    }
    if (!(t.byweekno || (0, o.Dw)(t.byweekno) || (0, o.Dw)(t.byyearday) || t.bymonthday || (0, o.Dw)(t.bymonthday) || (0, o.EN)(t.byweekday) || (0, o.EN)(t.byeaster)))
        switch (t.freq) {
            case a.Ci.YEARLY:
                t.bymonth || (t.bymonth = t.dtstart.getUTCMonth() + 1), (t.bymonthday = t.dtstart.getUTCDate());
                break;
            case a.Ci.MONTHLY:
                t.bymonthday = t.dtstart.getUTCDate();
                break;
            case a.Ci.WEEKLY:
                t.byweekday = [(0, s.FO)(t.dtstart)];
        }
    if (((0, o.EN)(t.bymonth) && !(0, o.kJ)(t.bymonth) && (t.bymonth = [t.bymonth]), (0, o.EN)(t.byyearday) && !(0, o.kJ)(t.byyearday) && (0, o.hj)(t.byyearday) && (t.byyearday = [t.byyearday]), (0, o.EN)(t.bymonthday)))
        if ((0, o.kJ)(t.bymonthday)) {
            for (var c = [], d = [], n = 0; n < t.bymonthday.length; n++) {
                var i = t.bymonthday[n];
                i > 0 ? c.push(i) : i < 0 && d.push(i);
            }
            (t.bymonthday = c), (t.bynmonthday = d);
        } else t.bymonthday < 0 ? ((t.bynmonthday = [t.bymonthday]), (t.bymonthday = [])) : ((t.bynmonthday = []), (t.bymonthday = [t.bymonthday]));
    else (t.bymonthday = []), (t.bynmonthday = []);
    if (((0, o.EN)(t.byweekno) && !(0, o.kJ)(t.byweekno) && (t.byweekno = [t.byweekno]), (0, o.EN)(t.byweekday)))
        if ((0, o.hj)(t.byweekday)) (t.byweekday = [t.byweekday]), (t.bynweekday = null);
        else if ((0, o.xs)(t.byweekday)) (t.byweekday = [l.O.fromStr(t.byweekday).weekday]), (t.bynweekday = null);
        else if (t.byweekday instanceof l.O) !t.byweekday.n || t.freq > a.Ci.MONTHLY ? ((t.byweekday = [t.byweekday.weekday]), (t.bynweekday = null)) : ((t.bynweekday = [[t.byweekday.weekday, t.byweekday.n]]), (t.byweekday = null));
        else {
            for (var f = [], _ = [], n = 0; n < t.byweekday.length; n++) {
                var p = t.byweekday[n];
                if ((0, o.hj)(p)) {
                    f.push(p);
                    continue;
                }
                if ((0, o.xs)(p)) {
                    f.push(l.O.fromStr(p).weekday);
                    continue;
                }
                !p.n || t.freq > a.Ci.MONTHLY ? f.push(p.weekday) : _.push([p.weekday, p.n]);
            }
            (t.byweekday = (0, o.Dw)(f) ? f : null), (t.bynweekday = (0, o.Dw)(_) ? _ : null);
        }
    else t.bynweekday = null;
    return (0, o.EN)(t.byhour) ? (0, o.hj)(t.byhour) && (t.byhour = [t.byhour]) : (t.byhour = t.freq < a.Ci.HOURLY ? [t.dtstart.getUTCHours()] : null), (0, o.EN)(t.byminute) ? (0, o.hj)(t.byminute) && (t.byminute = [t.byminute]) : (t.byminute = t.freq < a.Ci.MINUTELY ? [t.dtstart.getUTCMinutes()] : null), (0, o.EN)(t.bysecond) ? (0, o.hj)(t.bysecond) && (t.bysecond = [t.bysecond]) : (t.bysecond = t.freq < a.Ci.SECONDLY ? [t.dtstart.getUTCSeconds()] : null), { parsedOptions: t };
}
function f(e) {
    var t = e.dtstart.getTime() % 1000;
    if (!(0, i.e)(e.freq)) return [];
    var n = [];
    return (
        e.byhour.forEach(function (r) {
            e.byminute.forEach(function (i) {
                e.bysecond.forEach(function (e) {
                    n.push(new c.q(r, i, e, t));
                });
            });
        }),
        n
    );
}
