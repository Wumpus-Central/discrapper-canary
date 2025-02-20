n.d(t, {
    DC: () => c,
    Js: () => d,
    ZR: () => u
});
var r = n(200651);
n(192379);
var l = n(657707),
    i = n(297781),
    a = n(709054),
    o = n(528567);
n(814059);
var s = n(388032);
function c(e) {
    let { value: t, statisticId: n } = e,
        l = s.NW.formatToPlainString(s.t.yhdo8v, {
            value: t,
            statisticName: (0, o.C)(n)
        });
    return (0, r.jsx)(u, { text: l });
}
function d(e) {
    let { intervalStart: t, intervalEnd: n } = e,
        o = new Date(a.default.extractTimestamp(t)),
        c = new Date(a.default.extractTimestamp(n)),
        d = new Intl.DateTimeFormat(s.NW.currentLocale, {
            month: 'numeric',
            day: 'numeric'
        }).formatRange(o, c);
    return (0, r.jsx)(i.ej, {
        Icon: l.Que,
        text: d
    });
}
function u(e) {
    let { text: t } = e;
    return (0, r.jsx)(i.ej, {
        Icon: l.hAD,
        text: t
    });
}
