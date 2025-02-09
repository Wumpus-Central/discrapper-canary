n.d(t, {
    DC: () => d,
    Js: () => c,
    ZR: () => u
});
var l = n(200651);
n(192379);
var i = n(657707),
    r = n(297781),
    a = n(709054),
    s = n(528567);
n(814059);
var o = n(388032);
function d(e) {
    let { value: t, statisticId: n } = e,
        i = o.intl.formatToPlainString(o.t.yhdo8v, {
            value: t,
            statisticName: (0, s.C)(n)
        });
    return (0, l.jsx)(u, { text: i });
}
function c(e) {
    let { intervalStart: t, intervalEnd: n } = e,
        s = new Date(a.default.extractTimestamp(t)),
        d = new Date(a.default.extractTimestamp(n)),
        c = new Intl.DateTimeFormat(o.intl.currentLocale, {
            month: 'numeric',
            day: 'numeric'
        }).formatRange(s, d);
    return (0, l.jsx)(r.ej, {
        Icon: i.Que,
        text: c
    });
}
function u(e) {
    let { text: t } = e;
    return (0, l.jsx)(r.ej, {
        Icon: i.hAD,
        text: t
    });
}
