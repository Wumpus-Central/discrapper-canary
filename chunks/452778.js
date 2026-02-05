"use strict";
n.d(t, { A: () => h });
var l = n(627968);
n(64700);
var i = n(503698),
    s = n.n(i),
    a = n(989349),
    r = n.n(a),
    o = n(990078),
    d = n(397927),
    c = n(927813),
    u = n(985018),
    m = n(612605);
let h = (e) => {
    let t,
        n,
        { rateLimitPerUser: i, slowmodeCooldownGuess: a, isBypassSlowmode: h, leadingIcon: x = !1 } = e;
    if (i >= c.A.Seconds.HOUR) {
        let e = Math.floor(i / c.A.Seconds.HOUR),
            t = Math.floor((i - e * c.A.Seconds.HOUR) / c.A.Seconds.MINUTE),
            l = i - e * c.A.Seconds.HOUR - t * c.A.Seconds.MINUTE;
        n = u.intl.formatToPlainString(u.t.oEwLez, { hours: e, minutes: t, seconds: l });
    } else if (i >= 60) {
        let e = Math.floor(i / 60);
        n = u.intl.formatToPlainString(u.t.DARKYm, { minutes: e, seconds: i - 60 * e });
    } else n = u.intl.formatToPlainString(u.t["9yE8Ga"], { seconds: i });
    if (!h && a > 0) {
        let e = r().duration(a);
        if (a > c.A.Millis.HOUR) {
            let n = `${e.minutes()}`.padStart(2, "0"),
                l = `${e.seconds()}`.padStart(2, "0");
            t = `${e.hours()}:${n}:${l}`;
        } else {
            let n = `${e.seconds()}`.padStart(2, "0");
            t = `${e.minutes()}:${n}`;
        }
    } else t = h ? u.intl.string(u.t.SSzXvQ) : u.intl.string(u.t.Icu3bf);
    let g = (0, l.jsx)(d.Text, { variant: "text-sm/normal", color: "text-muted", children: t }),
        f = (0, l.jsx)(d.xbX, { size: "xs", color: "currentColor", className: s()(m.Eq, { [m.iE]: x }) });
    return (0, l.jsx)(o.m, {
        text: n,
        children: (0, l.jsx)("div", {
            className: m.ns,
            children: x ? (0, l.jsxs)(l.Fragment, { children: [f, g] }) : (0, l.jsxs)(l.Fragment, { children: [g, f] }),
        }),
    });
};
