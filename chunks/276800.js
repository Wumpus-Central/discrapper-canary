var i = n(200651);
n(192379);
var s = n(774078),
    r = n(706454),
    a = n(388032);
function l(e) {
    return e.toLocaleString(r.default.locale, {
        minimumIntegerDigits: 2,
        useGrouping: !1
    });
}
t.Z = function (e) {
    let { endDate: t } = e,
        n = (0, s.Z)(t, 1000);
    return (0, i.jsx)(i.Fragment, {
        children:
            n.days > 0
                ? a.intl.formatToPlainString(a.t.f0QaSU, { days: n.days })
                : a.intl.formatToPlainString(a.t['3MT4MT'], {
                      hours: l(n.hours),
                      minutes: l(n.minutes),
                      seconds: l(n.seconds)
                  })
    });
};
