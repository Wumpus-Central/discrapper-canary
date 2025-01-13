r.d(n, {
    Hg: function () {
        return A;
    },
    KC: function () {
        return E;
    },
    QX: function () {
        return R;
    },
    TD: function () {
        return C;
    },
    Xf: function () {
        return b;
    },
    Y4: function () {
        return T;
    },
    _w: function () {
        return v;
    },
    vc: function () {
        return I;
    },
    wY: function () {
        return g;
    }
});
var i = r(913527),
    a = r.n(i),
    s = r(232551),
    o = r(710845),
    l = r(706454),
    u = r(695346),
    c = r(388032);
let d = new o.Z('DateUtils'),
    f = 60000,
    _ = 3600000,
    h = 86400000,
    p = Object.create(null);
function m(e) {
    let n = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        r = e;
    'string' != typeof e && 'number' != typeof e && !(e instanceof Date) && (d.error('Invalid date given to startOfDay', { d: e }), (r = new Date()));
    let i = new Date(r),
        a = i.getTime();
    return !n && (a -= i.getTimezoneOffset() * f), Math.floor(a / h) * h;
}
function g(e, n) {
    return Math.floor((m(e, !1) - m(n, !1)) / h);
}
l.default.addChangeListener(() => {
    p = Object.create(null);
});
function E(e, n) {
    return Math.abs(+e - +n) <= h && e.getDate() === n.getDate();
}
function v(e, n, r) {
    return Math.abs(e.valueOf() - n.valueOf()) < r;
}
function I(e, n) {
    let r = y(e).locale(),
        i = u.hg.getSetting(),
        a = ''.concat(r, ':').concat(n, ':').concat(i),
        o = p[a];
    return null == o && (o = p[a] = (0, s.Z)(n)), o(S(e));
}
function T(e) {
    let n;
    let r = a().localeData(),
        i = a()(),
        s = g(S(e), i.toDate());
    return s < -1 ? I(e, 'L LT') : ((n = s < 0 ? 'lastDay' : s < 1 ? 'sameDay' : s < 2 ? 'nextDay' : 'sameElse'), I(e, r.calendar(n, y(e), i)));
}
function b(e) {
    let n = a().localeData(),
        r = a()(),
        i = g(S(e), r.toDate());
    if (0 === i) return I(e, 'LT');
    if (-1 === i) return I(e, n.calendar('lastDay', y(e), r));
    if (i > -7) return I(e, 'dddd');
    return I(e, 'L');
}
function y(e) {
    return a().isMoment(e) ? e : a()(e);
}
function S(e) {
    return a().isMoment(e) ? e.toDate() : e;
}
function A(e) {
    let n;
    let r = a().localeData(),
        i = new Date(),
        s = g(e, i);
    return 'sameElse' == (n = s < -1 ? 'sameElse' : s < 0 ? 'lastDay' : s < 1 ? 'sameDay' : s < 2 ? 'nextDay' : 'sameElse') ? I(e, 'LLL') : I(e, r.calendar(n, a()(e), a()(i)));
}
let N = [
    {
        key: 'days',
        millisecondsInUnit: 86400000
    },
    {
        key: 'hours',
        millisecondsInUnit: 3600000
    },
    {
        key: 'minutes',
        millisecondsInUnit: 60000
    },
    {
        key: 'seconds',
        millisecondsInUnit: 1000
    }
];
function C(e, n) {
    let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: r ? 1 : 0
        };
    if (e > n || (r && Number(e) + 1200 > Number(n))) return i;
    let a = Number(n) - Number(e);
    return (
        N.forEach((e) => {
            let { key: n, millisecondsInUnit: r } = e;
            (i[n] = Math.floor(a / r)), (a -= i[n] * r);
        }),
        i
    );
}
function R(e, n) {
    return e.days > 0
        ? c.intl.formatToPlainString(n.days, {
              days: e.days,
              hours: e.hours
          })
        : e.hours > 0
          ? c.intl.formatToPlainString(n.hours, {
                hours: e.hours,
                minutes: e.minutes
            })
          : c.intl.formatToPlainString(n.minutes, { minutes: Math.max(1, e.minutes) });
}
