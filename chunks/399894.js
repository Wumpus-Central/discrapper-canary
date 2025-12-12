n.d(t, { Z: () => f });
var a = n(54381);
n(473749);
var r = n(120356),
    i = n.n(r),
    l = n(913527),
    s = n.n(l),
    o = n(28664),
    c = n(481060),
    d = n(70956),
    u = n(388032),
    m = n(95136);
let f = (e) => {
    let t,
        n,
        { rateLimitPerUser: r, slowmodeCooldownGuess: l, isBypassSlowmode: f, leadingIcon: h = !1 } = e;
    if (r >= d.Z.Seconds.HOUR) {
        let e = Math.floor(r / d.Z.Seconds.HOUR),
            t = Math.floor((r - e * d.Z.Seconds.HOUR) / d.Z.Seconds.MINUTE),
            a = r - e * d.Z.Seconds.HOUR - t * d.Z.Seconds.MINUTE;
        n = u.intl.formatToPlainString(u.t.oEwLez, {
            hours: e,
            minutes: t,
            seconds: a,
        });
    } else if (r >= 60) {
        let e = Math.floor(r / 60);
        n = u.intl.formatToPlainString(u.t.DARKYm, {
            minutes: e,
            seconds: r - 60 * e,
        });
    } else n = u.intl.formatToPlainString(u.t["9yE8Ga"], { seconds: r });
    if (!f && l > 0) {
        let e = s().duration(l);
        if (l > d.Z.Millis.HOUR) {
            let n = "".concat(e.minutes()).padStart(2, "0"),
                a = "".concat(e.seconds()).padStart(2, "0");
            t = "".concat(e.hours(), ":").concat(n, ":").concat(a);
        } else {
            let n = "".concat(e.seconds()).padStart(2, "0");
            t = "".concat(e.minutes(), ":").concat(n);
        }
    } else t = f ? u.intl.string(u.t.SSzXvQ) : u.intl.string(u.t.Icu3bf);
    let g = (0, a.jsx)(c.Text, {
            variant: "text-sm/normal",
            color: "text-muted",
            children: t,
        }),
        x = (0, a.jsx)(c.ANZ, {
            size: "xs",
            color: "currentColor",
            className: i()(m.slowModeIcon, { [m.leadingIcon]: h }),
        });
    return (0, a.jsx)(o.u, {
        text: n,
        children: (0, a.jsx)("div", {
            className: m.cooldownWrapper,
            children: h
                ? (0, a.jsxs)(a.Fragment, {
                      children: [x, g],
                  })
                : (0, a.jsxs)(a.Fragment, {
                      children: [g, x],
                  }),
        }),
    });
};
