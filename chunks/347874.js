r.d(n, {
    Fx: function () {
        return d;
    },
    I6: function () {
        return f;
    },
    hl: function () {
        return p;
    }
});
var i = r(146150),
    a = r(707908),
    o = r(686942),
    s = r(812975),
    l = r(695170),
    u = r(713267),
    c = r(68808);
function d(e) {
    for (var n = [], r = Object.keys(e), a = 0, u = r; a < u.length; a++) {
        var c = u[a];
        !(0, o.q9)(s.DY, c) && n.push(c), (0, l.J_)(e[c]) && !(0, l.qb)(e[c]) && n.push(c);
    }
    if (n.length) throw Error('Invalid options: ' + n.join(', '));
    return (0, i.pi)({}, e);
}
function f(e) {
    var n = (0, i.pi)((0, i.pi)({}, s.WN), d(e));
    if (((0, o.EN)(n.byeaster) && (n.freq = s.Ci.YEARLY), !((0, o.EN)(n.freq) && s.Ci.FREQUENCIES[n.freq]))) throw Error('Invalid frequency: '.concat(n.freq, ' ').concat(e.freq));
    if ((!n.dtstart && (n.dtstart = new Date(new Date().setMilliseconds(0))), (0, o.EN)(n.wkst) ? (0, o.hj)(n.wkst) || (n.wkst = n.wkst.weekday) : (n.wkst = s.Ci.MO.weekday), (0, o.EN)(n.bysetpos))) {
        (0, o.hj)(n.bysetpos) && (n.bysetpos = [n.bysetpos]);
        for (var r = 0; r < n.bysetpos.length; r++) {
            var a = n.bysetpos[r];
            if (0 === a || !(a >= -366 && a <= 366)) throw Error('bysetpos must be between 1 and 366, or between -366 and -1');
        }
    }
    if (!(n.byweekno || (0, o.Dw)(n.byweekno) || (0, o.Dw)(n.byyearday) || n.bymonthday || (0, o.Dw)(n.bymonthday) || (0, o.EN)(n.byweekday) || (0, o.EN)(n.byeaster)))
        switch (n.freq) {
            case s.Ci.YEARLY:
                !n.bymonth && (n.bymonth = n.dtstart.getUTCMonth() + 1), (n.bymonthday = n.dtstart.getUTCDate());
                break;
            case s.Ci.MONTHLY:
                n.bymonthday = n.dtstart.getUTCDate();
                break;
            case s.Ci.WEEKLY:
                n.byweekday = [(0, l.FO)(n.dtstart)];
        }
    if (((0, o.EN)(n.bymonth) && !(0, o.kJ)(n.bymonth) && (n.bymonth = [n.bymonth]), (0, o.EN)(n.byyearday) && !(0, o.kJ)(n.byyearday) && (0, o.hj)(n.byyearday) && (n.byyearday = [n.byyearday]), (0, o.EN)(n.bymonthday))) {
        if ((0, o.kJ)(n.bymonthday)) {
            for (var c = [], f = [], r = 0; r < n.bymonthday.length; r++) {
                var a = n.bymonthday[r];
                a > 0 ? c.push(a) : a < 0 && f.push(a);
            }
            (n.bymonthday = c), (n.bynmonthday = f);
        } else n.bymonthday < 0 ? ((n.bynmonthday = [n.bymonthday]), (n.bymonthday = [])) : ((n.bynmonthday = []), (n.bymonthday = [n.bymonthday]));
    } else (n.bymonthday = []), (n.bynmonthday = []);
    if (((0, o.EN)(n.byweekno) && !(0, o.kJ)(n.byweekno) && (n.byweekno = [n.byweekno]), (0, o.EN)(n.byweekday))) {
        if ((0, o.hj)(n.byweekday)) (n.byweekday = [n.byweekday]), (n.bynweekday = null);
        else if ((0, o.xs)(n.byweekday)) (n.byweekday = [u.O.fromStr(n.byweekday).weekday]), (n.bynweekday = null);
        else if (n.byweekday instanceof u.O) !n.byweekday.n || n.freq > s.Ci.MONTHLY ? ((n.byweekday = [n.byweekday.weekday]), (n.bynweekday = null)) : ((n.bynweekday = [[n.byweekday.weekday, n.byweekday.n]]), (n.byweekday = null));
        else {
            for (var p = [], h = [], r = 0; r < n.byweekday.length; r++) {
                var _ = n.byweekday[r];
                if ((0, o.hj)(_)) {
                    p.push(_);
                    continue;
                }
                if ((0, o.xs)(_)) {
                    p.push(u.O.fromStr(_).weekday);
                    continue;
                }
                !_.n || n.freq > s.Ci.MONTHLY ? p.push(_.weekday) : h.push([_.weekday, _.n]);
            }
            (n.byweekday = (0, o.Dw)(p) ? p : null), (n.bynweekday = (0, o.Dw)(h) ? h : null);
        }
    } else n.bynweekday = null;
    return (0, o.EN)(n.byhour) ? (0, o.hj)(n.byhour) && (n.byhour = [n.byhour]) : (n.byhour = n.freq < s.Ci.HOURLY ? [n.dtstart.getUTCHours()] : null), (0, o.EN)(n.byminute) ? (0, o.hj)(n.byminute) && (n.byminute = [n.byminute]) : (n.byminute = n.freq < s.Ci.MINUTELY ? [n.dtstart.getUTCMinutes()] : null), (0, o.EN)(n.bysecond) ? (0, o.hj)(n.bysecond) && (n.bysecond = [n.bysecond]) : (n.bysecond = n.freq < s.Ci.SECONDLY ? [n.dtstart.getUTCSeconds()] : null), { parsedOptions: n };
}
function p(e) {
    var n = e.dtstart.getTime() % 1000;
    if (!(0, a.e)(e.freq)) return [];
    var r = [];
    return (
        e.byhour.forEach(function (i) {
            e.byminute.forEach(function (a) {
                e.bysecond.forEach(function (e) {
                    r.push(new c.q(i, a, e, n));
                });
            });
        }),
        r
    );
}
