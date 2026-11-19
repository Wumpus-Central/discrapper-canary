var a = n(443184),
    t = n(696016),
    i = n(683825),
    o = n(792996);
let r = new Intl.DateTimeFormat(void 0, { month: "short", day: "numeric", hour: "numeric", minute: "2-digit" });
function d(e) {
    if (null != e.name && "" !== e.name) return e.name;
    let l = e.decision?.signal;
    if (l?.type === t.Gy.GAME_EVENT) {
        let n = l.description ?? (0, a.PZ)(e.applicationId, t.Gy.GAME_EVENT, l.eventName);
        if (null != n) return n;
    }
    let n = e.activity?.details;
    return null != n && "" !== n
        ? n
        : o.intl.formatToPlainString(i.default.YMk5qU, { time: r.format(new Date(e.createdAt)) });
}
n.d(
    l,
    {},
    {
        J: function (e) {
            return null != e.name && "" !== e.name ? e : { ...e, name: d(e) };
        },
        l: d,
    },
);
