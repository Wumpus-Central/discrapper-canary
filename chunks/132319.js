a.d(e, { J: () => s, l: () => r });
var n = a(374816),
    t = a(696016),
    i = a(185973),
    d = a(105292);
let o = new Intl.DateTimeFormat(void 0, { month: "short", day: "numeric", hour: "numeric", minute: "2-digit" });
function r(l) {
    if (null != l.name && "" !== l.name) return l.name;
    let e = l.decision?.signal;
    if (e?.type === t.Gy.GAME_EVENT) {
        let a = e.description ?? (0, n.PZ)(l.applicationId, t.Gy.GAME_EVENT, e.eventName);
        if (null != a) return a;
    }
    let a = l.activity?.details;
    return null != a && "" !== a
        ? a
        : d.intl.formatToPlainString(i.default.YMk5qU, { time: o.format(new Date(l.createdAt)) });
}
function s(l) {
    return null != l.name && "" !== l.name ? l : { ...l, name: r(l) };
}
