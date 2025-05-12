t.d(n, {
    b: () => p,
    s: () => f
}),
    t(388685);
var o = t(255367),
    r = t(73800),
    c = t(392711),
    i = t(481060),
    a = t(388032),
    l = t(771627);
let s = [() => a.intl.string(a.t.madJdH), () => a.intl.string(a.t.NYmfoK), () => a.intl.string(a.t.R2PaCg), () => a.intl.string(a.t.laSR8v), () => a.intl.string(a.t.DnsJEx)],
    d = [() => a.intl.string(a.t.nFSbeH), () => a.intl.string(a.t.gTcxOz), () => a.intl.string(a.t['8T0wYm']), () => a.intl.string(a.t.BIHl1t), () => a.intl.string(a.t.jhBm09)];
function u(e) {
    let { heading: n, bodyText: t, children: r } = e;
    return (0, o.jsxs)('div', {
        className: l.empty,
        children: [
            (0, o.jsxs)('div', {
                className: l.textContainer,
                children: [
                    (0, o.jsx)(i.X6q, {
                        variant: 'heading-md/medium',
                        color: 'header-primary',
                        children: n
                    }),
                    (0, o.jsx)(i.Text, {
                        variant: 'text-sm/normal',
                        color: 'header-secondary',
                        children: t
                    })
                ]
            }),
            r
        ]
    });
}
function f() {
    let e = a.intl.string(a.t.RnD2yc),
        [n] = r.useState(() => {
            var e;
            return (null != (e = (0, c.sample)(s)) ? e : s[0])();
        });
    return (0, o.jsx)(u, {
        heading: e,
        bodyText: n
    });
}
function p() {
    let e = a.intl.string(a.t.bFgqYG),
        [n] = r.useState(() => {
            var e;
            return (null != (e = (0, c.sample)(d)) ? e : d[0])();
        });
    return (0, o.jsx)(u, {
        heading: e,
        bodyText: n
    });
}
