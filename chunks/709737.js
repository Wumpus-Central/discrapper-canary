r.d(t, {
    DC: () => c,
    Js: () => u,
    ZR: () => d
});
var n = r(200651);
r(192379);
var a = r(657707),
    o = r(297781),
    i = r(709054),
    l = r(528567);
r(814059);
var s = r(388032);
function c(e) {
    let { value: t, statisticId: r } = e,
        a = s.NW.formatToPlainString(s.t.yhdo8v, {
            value: t,
            statisticName: (0, l.C)(r)
        });
    return (0, n.jsx)(d, { text: a });
}
function u(e) {
    let { intervalStart: t, intervalEnd: r } = e,
        l = new Date(i.default.extractTimestamp(t)),
        c = new Date(i.default.extractTimestamp(r)),
        u = new Intl.DateTimeFormat(s.NW.currentLocale, {
            month: 'numeric',
            day: 'numeric'
        }).formatRange(l, c);
    return (0, n.jsx)(o.ej, {
        Icon: a.Que,
        text: u
    });
}
function d(e) {
    let { text: t } = e;
    return (0, n.jsx)(o.ej, {
        Icon: a.hAD,
        text: t
    });
}
