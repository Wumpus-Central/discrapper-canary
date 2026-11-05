var n = a(443184),
    t = a(696016),
    i = a(683825),
    o = a(792996);
let d = new Intl.DateTimeFormat(void 0, { month: "short", day: "numeric", hour: "numeric", minute: "2-digit" });
function c(e) {
    if (null != e.name && "" !== e.name) return e.name;
    let l = e.decision?.signal;
    if (l?.type === t.Gy.GAME_EVENT) {
        let a = l.description ?? (0, n.PZ)(e.applicationId, t.Gy.GAME_EVENT, l.eventName);
        if (null != a) return a;
    }
    let a = e.activity?.details;
    return null != a && "" !== a
        ? a
        : o.intl.formatToPlainString(i.default.YMk5qU, { time: d.format(new Date(e.createdAt)) });
}
a.d(
    l,
    {},
    {
        J: function (e) {
            return null != e.name && "" !== e.name ? e : { ...e, name: c(e) };
        },
        l: c,
    },
);
