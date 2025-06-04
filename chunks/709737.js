n.d(t, {
    DC: () => c,
    Js: () => u,
    ZR: () => d
});
var r = n(255367);
n(73800);
var i = n(657707),
    o = n(297781),
    a = n(709054),
    s = n(528567);
n(814059);
var l = n(388032);
function c(e) {
    let { value: t, statisticId: n } = e,
        i = l.intl.formatToPlainString(l.t.yhdo8v, {
            value: t,
            statisticName: (0, s.C)(n)
        });
    return (0, r.jsx)(d, { text: i });
}
function u(e) {
    let { intervalStart: t, intervalEnd: n } = e,
        s = new Date(a.default.extractTimestamp(t)),
        c = new Date(a.default.extractTimestamp(n)),
        u = new Intl.DateTimeFormat(l.intl.currentLocale, {
            month: 'numeric',
            day: 'numeric'
        }).formatRange(s, c);
    return (0, r.jsx)(o.ej, {
        Icon: i.Que,
        text: u
    });
}
function d(e) {
    let { text: t } = e;
    return (0, r.jsx)(o.ej, {
        Icon: i.hAD,
        text: t
    });
}
