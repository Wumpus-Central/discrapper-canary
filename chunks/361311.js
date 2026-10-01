t.d(l, { A: () => u });
var s = t(477900);
t(582128);
var n = t(834730),
    i = t(429913),
    a = t(102876),
    r = t(375708);
function u(e) {
    let { applicationIds: l } = e,
        t = (0, i.A)(l).filter((e) => null != e);
    if (0 === t.length) return null;
    let u = null;
    if (1 === t.length)
        u = r.intl.format(r.t.wQ6urw, { applicationName: () => (0, s.jsx)(a.A, { application: t[0] }, t[0].id) });
    else if (2 === t.length)
        u = r.intl.format(r.t.C98CSN, {
            applicationName: () => (0, s.jsx)(a.A, { application: t[0] }, t[0].id),
            applicationName2: () => (0, s.jsx)(a.A, { application: t[1] }, t[1].id),
        });
    else {
        let e = t[t.length - 1],
            l = t.slice(0, -1);
        u = r.intl.format(r.t.UxpwAh, {
            applications: () => l.map((e) => (0, s.jsx)(a.A, { application: e, useComma: !0 }, e.id)),
            applicationNameLast: () => (0, s.jsx)(a.A, { application: e }, e.id),
        });
    }
    return (0, s.jsx)(n.E, { variant: "text-sm/normal", children: u });
}
