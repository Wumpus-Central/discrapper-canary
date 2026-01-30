n.d(t, {
    OW: () => h,
    _V: () => j,
    oO: () => y,
});
var r = n(499979),
    l = n(381849),
    a = n(985018),
    i = n(532063),
    o = n(367485),
    s = n(607374),
    c = n(862446),
    u = n(818952),
    d = n(443670),
    p = n(583623),
    m = n(620324),
    f = n(379043),
    O = n(979143);
let b = [r.pJ.HOURS, r.pJ.MINUTES];

function y(e) {
    let { unit: t, time: n } = (0, r.$l)(e, b),
        i = (0, l.i)();
    if (null == n)
        return a.intl.formatToPlainString(i.minutes, {
            minutes: 0,
        });
    let o = Math.round(n);
    return t === r.pJ.HOURS
        ? a.intl.formatToPlainString(i.hours, {
              hours: o,
          })
        : a.intl.formatToPlainString(i.minutes, {
              minutes: o,
          });
}

function h(e) {
    switch (e) {
        case 0:
            return f.A;
        case 1:
            return d.A;
        case 2:
            return o.A;
        case 3:
            return u.A;
        case 4:
            return m.A;
        case 5:
            return O.A;
        case 6:
            return p.A;
        case 7:
            return i.A;
        case 8:
            return c.A;
        default:
            return s.A;
    }
}

function j(e) {
    return Math.min(Math.max(Math.round(e / 10), 1), 9);
}
