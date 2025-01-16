var a = n(200651);
n(192379);
var i = n(120356),
    r = n.n(i),
    l = n(913527),
    s = n.n(l),
    o = n(481060),
    c = n(70956),
    d = n(388032),
    u = n(991932);
t.Z = (e) => {
    let t,
        n,
        { rateLimitPerUser: i, slowmodeCooldownGuess: l, isBypassSlowmode: m, leadingIcon: h = !1 } = e;
    if (i >= c.Z.Seconds.HOUR) {
        let e = Math.floor(i / c.Z.Seconds.HOUR),
            t = Math.floor((i - e * c.Z.Seconds.HOUR) / c.Z.Seconds.MINUTE),
            a = i - e * c.Z.Seconds.HOUR - t * c.Z.Seconds.MINUTE;
        n = d.intl.formatToPlainString(d.t.oEwLe3, {
            hours: e,
            minutes: t,
            seconds: a
        });
    } else if (i >= 60) {
        let e = Math.floor(i / 60);
        n = d.intl.formatToPlainString(d.t.DARKYm, {
            minutes: e,
            seconds: i - 60 * e
        });
    } else n = d.intl.formatToPlainString(d.t['9yE8GR'], { seconds: i });
    if (!m && l > 0) {
        let e = s().duration(l);
        if (l > c.Z.Millis.HOUR) {
            let n = ''.concat(e.minutes()).padStart(2, '0'),
                a = ''.concat(e.seconds()).padStart(2, '0');
            t = ''.concat(e.hours(), ':').concat(n, ':').concat(a);
        } else {
            let n = ''.concat(e.seconds()).padStart(2, '0');
            t = ''.concat(e.minutes(), ':').concat(n);
        }
    } else t = m ? d.intl.string(d.t.SSzXvb) : d.intl.string(d.t.Icu3bW);
    let g = (0, a.jsx)(o.Text, {
            variant: 'text-sm/normal',
            color: 'text-muted',
            children: t
        }),
        x = (0, a.jsx)(o.TimerIcon, {
            size: 'xs',
            color: 'currentColor',
            className: r()(u.slowModeIcon, { [u.leadingIcon]: h })
        });
    return (0, a.jsx)(o.Tooltip, {
        text: n,
        children: (e) =>
            (0, a.jsx)('div', {
                className: u.cooldownWrapper,
                ...e,
                children: h
                    ? (0, a.jsxs)(a.Fragment, {
                          children: [x, g]
                      })
                    : (0, a.jsxs)(a.Fragment, {
                          children: [g, x]
                      })
            })
    });
};
