n.d(t, { A: () => h });
var l = n(627968);
n(64700);
var r = n(503698),
    a = n.n(r),
    i = n(989349),
    s = n.n(i),
    c = n(990078),
    o = n(397927),
    d = n(927813),
    u = n(985018),
    m = n(612605);
let h = (e) => {
    let t,
        n,
        { rateLimitPerUser: r, slowmodeCooldownGuess: i, isBypassSlowmode: h, leadingIcon: f = !1 } = e;
    if (r >= d.A.Seconds.HOUR) {
        let e = Math.floor(r / d.A.Seconds.HOUR),
            t = Math.floor((r - e * d.A.Seconds.HOUR) / d.A.Seconds.MINUTE),
            l = r - e * d.A.Seconds.HOUR - t * d.A.Seconds.MINUTE;
        n = u.intl.formatToPlainString(u.t.oEwLez, {
            hours: e,
            minutes: t,
            seconds: l,
        });
    } else if (r >= 60) {
        let e = Math.floor(r / 60);
        n = u.intl.formatToPlainString(u.t.DARKYm, {
            minutes: e,
            seconds: r - 60 * e,
        });
    } else n = u.intl.formatToPlainString(u.t["9yE8Ga"], { seconds: r });
    if (!h && i > 0) {
        let e = s().duration(i);
        if (i > d.A.Millis.HOUR) {
            let n = "".concat(e.minutes()).padStart(2, "0"),
                l = "".concat(e.seconds()).padStart(2, "0");
            t = "".concat(e.hours(), ":").concat(n, ":").concat(l);
        } else {
            let n = "".concat(e.seconds()).padStart(2, "0");
            t = "".concat(e.minutes(), ":").concat(n);
        }
    } else t = h ? u.intl.string(u.t.SSzXvQ) : u.intl.string(u.t.Icu3bf);
    let g = (0, l.jsx)(o.Text, {
            variant: "text-sm/normal",
            color: "text-muted",
            children: t,
        }),
        x = (0, l.jsx)(o.xbX, {
            size: "xs",
            color: "currentColor",
            className: a()(m.Eq, { [m.iE]: f }),
        });
    return (0, l.jsx)(c.m, {
        text: n,
        children: (0, l.jsx)("div", {
            className: m.ns,
            children: f
                ? (0, l.jsxs)(l.Fragment, {
                      children: [x, g],
                  })
                : (0, l.jsxs)(l.Fragment, {
                      children: [g, x],
                  }),
        }),
    });
};
