"use strict";
n.d(t, { A: () => g });
var l = n(627968);
n(64700);
var a = n(503698),
    s = n.n(a),
    i = n(989349),
    r = n.n(i),
    o = n(990078),
    d = n(834730),
    c = n(291747),
    u = n(927813),
    m = n(985018),
    h = n(935090);
let g = (e) => {
    let t,
        n,
        { rateLimitPerUser: a, slowmodeCooldownGuess: i, isBypassSlowmode: g, leadingIcon: x = !1 } = e;
    if (a >= u.A.Seconds.HOUR) {
        let e = Math.floor(a / u.A.Seconds.HOUR),
            t = Math.floor((a - e * u.A.Seconds.HOUR) / u.A.Seconds.MINUTE),
            l = a - e * u.A.Seconds.HOUR - t * u.A.Seconds.MINUTE;
        n = m.intl.formatToPlainString(m.t.oEwLez, { hours: e, minutes: t, seconds: l });
    } else if (a >= 60) {
        let e = Math.floor(a / 60);
        n = m.intl.formatToPlainString(m.t.DARKYm, { minutes: e, seconds: a - 60 * e });
    } else n = m.intl.formatToPlainString(m.t["9yE8Ga"], { seconds: a });
    if (!g && i > 0) {
        let e = r().duration(i);
        if (i > u.A.Millis.HOUR) {
            let n = `${e.minutes()}`.padStart(2, "0"),
                l = `${e.seconds()}`.padStart(2, "0");
            t = `${e.hours()}:${n}:${l}`;
        } else {
            let n = `${e.seconds()}`.padStart(2, "0");
            t = `${e.minutes()}:${n}`;
        }
    } else t = g ? m.intl.string(m.t.SSzXvQ) : m.intl.string(m.t.Icu3bf);
    let f = (0, l.jsx)(d.E, { variant: "text-sm/normal", color: "text-muted", children: t }),
        _ = (0, l.jsx)(c.x, { size: "xs", color: "currentColor", className: s()(h.Eq, { [h.iE]: x }) });
    return (0, l.jsx)(o.m, {
        text: n,
        children: (0, l.jsx)("div", {
            className: h.ns,
            children: x ? (0, l.jsxs)(l.Fragment, { children: [_, f] }) : (0, l.jsxs)(l.Fragment, { children: [f, _] }),
        }),
    });
};
