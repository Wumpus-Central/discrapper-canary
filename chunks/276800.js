n.d(t, { Z: () => o });
var i = n(200651);
n(192379);
var s = n(774078),
    r = n(706454),
    l = n(388032);
function a(e) {
    return e.toLocaleString(r.default.locale, {
        minimumIntegerDigits: 2,
        useGrouping: !1
    });
}
let o = function (e) {
    let { endDate: t } = e,
        n = (0, s.Z)(t, 1000);
    return (0, i.jsx)(i.Fragment, {
        children:
            n.days > 0
                ? l.intl.formatToPlainString(l.t.f0QaSU, { days: n.days })
                : l.intl.formatToPlainString(l.t['3MT4MT'], {
                      hours: a(n.hours),
                      minutes: a(n.minutes),
                      seconds: a(n.seconds)
                  })
    });
};
