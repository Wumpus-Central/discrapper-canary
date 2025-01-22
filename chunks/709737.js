r.d(n, {
    DC: function () {
        return c;
    },
    Js: function () {
        return d;
    },
    ZR: function () {
        return f;
    }
});
var i = r(200651);
r(192379);
var a = r(657707),
    o = r(297781),
    s = r(709054),
    l = r(528567);
r(814059);
var u = r(388032);
function c(e) {
    let { value: n, statisticId: r } = e,
        a = u.intl.formatToPlainString(u.t.yhdo8v, {
            value: n,
            statisticName: (0, l.C)(r)
        });
    return (0, i.jsx)(f, { text: a });
}
function d(e) {
    let { intervalStart: n, intervalEnd: r } = e,
        l = new Date(s.default.extractTimestamp(n)),
        c = new Date(s.default.extractTimestamp(r)),
        d = new Intl.DateTimeFormat(u.intl.currentLocale, {
            month: 'numeric',
            day: 'numeric'
        }).formatRange(l, c);
    return (0, i.jsx)(o.ej, {
        Icon: a.Que,
        text: d
    });
}
function f(e) {
    let { text: n } = e;
    return (0, i.jsx)(o.ej, {
        Icon: a.hAD,
        text: n
    });
}
