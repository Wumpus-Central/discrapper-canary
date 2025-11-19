n.d(t, { Z: () => h });
var r = n(54381);
n(473749);
var i = n(120356),
    a = n.n(i),
    l = n(913527),
    s = n.n(l),
    o = n(28664),
    c = n(481060),
    d = n(70956),
    u = n(388032),
    m = n(944400);
let h = (e) => {
    let t,
        n,
        { rateLimitPerUser: i, slowmodeCooldownGuess: l, isBypassSlowmode: h, leadingIcon: g = !1 } = e;
    if (i >= d.Z.Seconds.HOUR) {
        let e = Math.floor(i / d.Z.Seconds.HOUR),
            t = Math.floor((i - e * d.Z.Seconds.HOUR) / d.Z.Seconds.MINUTE),
            r = i - e * d.Z.Seconds.HOUR - t * d.Z.Seconds.MINUTE;
        n = u.intl.formatToPlainString(u.t.oEwLez, {
            hours: e,
            minutes: t,
            seconds: r,
        });
    } else if (i >= 60) {
        let e = Math.floor(i / 60);
        n = u.intl.formatToPlainString(u.t.DARKYm, {
            minutes: e,
            seconds: i - 60 * e,
        });
    } else n = u.intl.formatToPlainString(u.t["9yE8Ga"], { seconds: i });
    if (!h && l > 0) {
        let e = s().duration(l);
        if (l > d.Z.Millis.HOUR) {
            let n = "".concat(e.minutes()).padStart(2, "0"),
                r = "".concat(e.seconds()).padStart(2, "0");
            t = "".concat(e.hours(), ":").concat(n, ":").concat(r);
        } else {
            let n = "".concat(e.seconds()).padStart(2, "0");
            t = "".concat(e.minutes(), ":").concat(n);
        }
    } else t = h ? u.intl.string(u.t.SSzXvQ) : u.intl.string(u.t.Icu3bf);
    let f = (0, r.jsx)(c.Text, {
            variant: "text-sm/normal",
            color: "text-muted",
            children: t,
        }),
        x = (0, r.jsx)(c.ANZ, {
            size: "xs",
            color: "currentColor",
            className: a()(m.slowModeIcon, { [m.leadingIcon]: g }),
        });
    return (0, r.jsx)(o.u, {
        text: n,
        children: (0, r.jsx)("div", {
            className: m.cooldownWrapper,
            children: g
                ? (0, r.jsxs)(r.Fragment, {
                      children: [x, f],
                  })
                : (0, r.jsxs)(r.Fragment, {
                      children: [f, x],
                  }),
        }),
    });
};
