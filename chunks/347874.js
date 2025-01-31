n.d(t, {
    Fx: () => c,
    I6: () => d,
    hl: () => f
});
var i = n(146150),
    r = n(707908),
    a = n(686942),
    s = n(812975),
    o = n(695170),
    l = n(713267),
    u = n(68808);
function c(e) {
    for (var t = [], n = Object.keys(e), r = 0, l = n; r < l.length; r++) {
        var u = l[r];
        (0, a.q9)(s.DY, u) || t.push(u), (0, o.J_)(e[u]) && !(0, o.qb)(e[u]) && t.push(u);
    }
    if (t.length) throw Error('Invalid options: ' + t.join(', '));
    return (0, i.pi)({}, e);
}
function d(e) {
    var t = (0, i.pi)((0, i.pi)({}, s.WN), c(e));
    if (((0, a.EN)(t.byeaster) && (t.freq = s.Ci.YEARLY), !((0, a.EN)(t.freq) && s.Ci.FREQUENCIES[t.freq]))) throw Error('Invalid frequency: '.concat(t.freq, ' ').concat(e.freq));
    if ((t.dtstart || (t.dtstart = new Date(new Date().setMilliseconds(0))), (0, a.EN)(t.wkst) ? (0, a.hj)(t.wkst) || (t.wkst = t.wkst.weekday) : (t.wkst = s.Ci.MO.weekday), (0, a.EN)(t.bysetpos))) {
        (0, a.hj)(t.bysetpos) && (t.bysetpos = [t.bysetpos]);
        for (var n = 0; n < t.bysetpos.length; n++) {
            var r = t.bysetpos[n];
            if (0 === r || !(r >= -366 && r <= 366)) throw Error('bysetpos must be between 1 and 366, or between -366 and -1');
        }
    }
    if (!(t.byweekno || (0, a.Dw)(t.byweekno) || (0, a.Dw)(t.byyearday) || t.bymonthday || (0, a.Dw)(t.bymonthday) || (0, a.EN)(t.byweekday) || (0, a.EN)(t.byeaster)))
        switch (t.freq) {
            case s.Ci.YEARLY:
                t.bymonth || (t.bymonth = t.dtstart.getUTCMonth() + 1), (t.bymonthday = t.dtstart.getUTCDate());
                break;
            case s.Ci.MONTHLY:
                t.bymonthday = t.dtstart.getUTCDate();
                break;
            case s.Ci.WEEKLY:
                t.byweekday = [(0, o.FO)(t.dtstart)];
        }
    if (((0, a.EN)(t.bymonth) && !(0, a.kJ)(t.bymonth) && (t.bymonth = [t.bymonth]), (0, a.EN)(t.byyearday) && !(0, a.kJ)(t.byyearday) && (0, a.hj)(t.byyearday) && (t.byyearday = [t.byyearday]), (0, a.EN)(t.bymonthday))) {
        if ((0, a.kJ)(t.bymonthday)) {
            for (var u = [], d = [], n = 0; n < t.bymonthday.length; n++) {
                var r = t.bymonthday[n];
                r > 0 ? u.push(r) : r < 0 && d.push(r);
            }
            (t.bymonthday = u), (t.bynmonthday = d);
        } else t.bymonthday < 0 ? ((t.bynmonthday = [t.bymonthday]), (t.bymonthday = [])) : ((t.bynmonthday = []), (t.bymonthday = [t.bymonthday]));
    } else (t.bymonthday = []), (t.bynmonthday = []);
    if (((0, a.EN)(t.byweekno) && !(0, a.kJ)(t.byweekno) && (t.byweekno = [t.byweekno]), (0, a.EN)(t.byweekday))) {
        if ((0, a.hj)(t.byweekday)) (t.byweekday = [t.byweekday]), (t.bynweekday = null);
        else if ((0, a.xs)(t.byweekday)) (t.byweekday = [l.O.fromStr(t.byweekday).weekday]), (t.bynweekday = null);
        else if (t.byweekday instanceof l.O) !t.byweekday.n || t.freq > s.Ci.MONTHLY ? ((t.byweekday = [t.byweekday.weekday]), (t.bynweekday = null)) : ((t.bynweekday = [[t.byweekday.weekday, t.byweekday.n]]), (t.byweekday = null));
        else {
            for (var f = [], _ = [], n = 0; n < t.byweekday.length; n++) {
                var p = t.byweekday[n];
                if ((0, a.hj)(p)) {
                    f.push(p);
                    continue;
                }
                if ((0, a.xs)(p)) {
                    f.push(l.O.fromStr(p).weekday);
                    continue;
                }
                !p.n || t.freq > s.Ci.MONTHLY ? f.push(p.weekday) : _.push([p.weekday, p.n]);
            }
            (t.byweekday = (0, a.Dw)(f) ? f : null), (t.bynweekday = (0, a.Dw)(_) ? _ : null);
        }
    } else t.bynweekday = null;
    return (0, a.EN)(t.byhour) ? (0, a.hj)(t.byhour) && (t.byhour = [t.byhour]) : (t.byhour = t.freq < s.Ci.HOURLY ? [t.dtstart.getUTCHours()] : null), (0, a.EN)(t.byminute) ? (0, a.hj)(t.byminute) && (t.byminute = [t.byminute]) : (t.byminute = t.freq < s.Ci.MINUTELY ? [t.dtstart.getUTCMinutes()] : null), (0, a.EN)(t.bysecond) ? (0, a.hj)(t.bysecond) && (t.bysecond = [t.bysecond]) : (t.bysecond = t.freq < s.Ci.SECONDLY ? [t.dtstart.getUTCSeconds()] : null), { parsedOptions: t };
}
function f(e) {
    var t = e.dtstart.getTime() % 1000;
    if (!(0, r.e)(e.freq)) return [];
    var n = [];
    return (
        e.byhour.forEach(function (i) {
            e.byminute.forEach(function (r) {
                e.bysecond.forEach(function (e) {
                    n.push(new u.q(i, r, e, t));
                });
            });
        }),
        n
    );
}
