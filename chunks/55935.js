n.d(t, {
    Hg: () => b,
    KC: () => m,
    QX: () => N,
    TD: () => A,
    Xf: () => y,
    Y4: () => v,
    _w: () => g,
    vc: () => E,
    wY: () => h
});
var i = n(913527),
    r = n.n(i),
    a = n(232551),
    s = n(710845),
    o = n(706454),
    l = n(695346),
    u = n(388032);
let c = new s.Z('DateUtils'),
    d = 60000,
    f = 86400000,
    _ = Object.create(null);
function p(e) {
    let t = !(arguments.length > 1) || void 0 === arguments[1] || arguments[1],
        n = e;
    'string' == typeof e || 'number' == typeof e || e instanceof Date || (c.error('Invalid date given to startOfDay', { d: e }), (n = new Date()));
    let i = new Date(n),
        r = i.getTime();
    return t || (r -= i.getTimezoneOffset() * d), Math.floor(r / f) * f;
}
function h(e, t) {
    return Math.floor((p(e, !1) - p(t, !1)) / f);
}
function m(e, t) {
    return Math.abs(+e - +t) <= f && e.getDate() === t.getDate();
}
function g(e, t, n) {
    return Math.abs(e.valueOf() - t.valueOf()) < n;
}
function E(e, t) {
    let n = I(e).locale(),
        i = l.hg.getSetting(),
        r = ''.concat(n, ':').concat(t, ':').concat(i),
        s = _[r];
    return null == s && (s = _[r] = (0, a.Z)(t)), s(T(e));
}
function v(e) {
    let t;
    let n = r().localeData(),
        i = r()(),
        a = h(T(e), i.toDate());
    return a < -1 ? E(e, 'L LT') : ((t = a < 0 ? 'lastDay' : a < 1 ? 'sameDay' : a < 2 ? 'nextDay' : 'sameElse'), E(e, n.calendar(t, I(e), i)));
}
function y(e) {
    let t = r().localeData(),
        n = r()(),
        i = h(T(e), n.toDate());
    return 0 === i ? E(e, 'LT') : -1 === i ? E(e, t.calendar('lastDay', I(e), n)) : i > -7 ? E(e, 'dddd') : E(e, 'L');
}
function I(e) {
    return r().isMoment(e) ? e : r()(e);
}
function T(e) {
    return r().isMoment(e) ? e.toDate() : e;
}
function b(e) {
    let t;
    let n = r().localeData(),
        i = new Date(),
        a = h(e, i);
    return 'sameElse' == (t = a < -1 ? 'sameElse' : a < 0 ? 'lastDay' : a < 1 ? 'sameDay' : a < 2 ? 'nextDay' : 'sameElse') ? E(e, 'LLL') : E(e, n.calendar(t, r()(e), r()(i)));
}
o.default.addChangeListener(() => {
    _ = Object.create(null);
});
let S = [
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
function A(e, t) {
    let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
        i = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: n ? 1 : 0
        };
    if (e > t || (n && Number(e) + 1200 > Number(t))) return i;
    let r = Number(t) - Number(e);
    return (
        S.forEach((e) => {
            let { key: t, millisecondsInUnit: n } = e;
            (i[t] = Math.floor(r / n)), (r -= i[t] * n);
        }),
        i
    );
}
function N(e, t) {
    return e.days > 0
        ? u.intl.formatToPlainString(t.days, {
              days: e.days,
              hours: e.hours
          })
        : e.hours > 0
          ? u.intl.formatToPlainString(t.hours, {
                hours: e.hours,
                minutes: e.minutes
            })
          : u.intl.formatToPlainString(t.minutes, { minutes: Math.max(1, e.minutes) });
}
