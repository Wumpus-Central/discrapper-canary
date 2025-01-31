n.d(t, { Z: () => m });
var i = n(200651);
n(192379);
var l = n(120356),
    r = n.n(l),
    a = n(913527),
    s = n.n(a),
    o = n(481060),
    c = n(70956),
    d = n(388032),
    u = n(991932);
let m = (e) => {
    let t,
        n,
        { rateLimitPerUser: l, slowmodeCooldownGuess: a, isBypassSlowmode: m, leadingIcon: h = !1 } = e;
    if (l >= c.Z.Seconds.HOUR) {
        let e = Math.floor(l / c.Z.Seconds.HOUR),
            t = Math.floor((l - e * c.Z.Seconds.HOUR) / c.Z.Seconds.MINUTE),
            i = l - e * c.Z.Seconds.HOUR - t * c.Z.Seconds.MINUTE;
        n = d.intl.formatToPlainString(d.t.oEwLe3, {
            hours: e,
            minutes: t,
            seconds: i
        });
    } else if (l >= 60) {
        let e = Math.floor(l / 60);
        n = d.intl.formatToPlainString(d.t.DARKYm, {
            minutes: e,
            seconds: l - 60 * e
        });
    } else n = d.intl.formatToPlainString(d.t['9yE8GR'], { seconds: l });
    if (!m && a > 0) {
        let e = s().duration(a);
        if (a > c.Z.Millis.HOUR) {
            let n = ''.concat(e.minutes()).padStart(2, '0'),
                i = ''.concat(e.seconds()).padStart(2, '0');
            t = ''.concat(e.hours(), ':').concat(n, ':').concat(i);
        } else {
            let n = ''.concat(e.seconds()).padStart(2, '0');
            t = ''.concat(e.minutes(), ':').concat(n);
        }
    } else t = m ? d.intl.string(d.t.SSzXvb) : d.intl.string(d.t.Icu3bW);
    let g = (0, i.jsx)(o.Text, {
            variant: 'text-sm/normal',
            color: 'text-muted',
            children: t
        }),
        x = (0, i.jsx)(o.ANZ, {
            size: 'xs',
            color: 'currentColor',
            className: r()(u.slowModeIcon, { [u.leadingIcon]: h })
        });
    return (0, i.jsx)(o.ua7, {
        text: n,
        children: (e) =>
            (0, i.jsx)('div', {
                className: u.cooldownWrapper,
                ...e,
                children: h
                    ? (0, i.jsxs)(i.Fragment, {
                          children: [x, g]
                      })
                    : (0, i.jsxs)(i.Fragment, {
                          children: [g, x]
                      })
            })
    });
};
