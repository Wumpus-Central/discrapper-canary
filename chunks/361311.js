i.d(l, { A: () => d });
var t = i(477900);
i(582128);
var n = i(834730),
    a = i(429913),
    s = i(102876),
    r = i(105292);
function d(e) {
    let { applicationIds: l } = e,
        i = (0, a.A)(l).filter((e) => null != e);
    if (0 === i.length) return null;
    let d = null;
    if (1 === i.length)
        d = r.intl.format(r.t.wQ6urw, { applicationName: () => (0, t.jsx)(s.A, { application: i[0] }, i[0].id) });
    else if (2 === i.length)
        d = r.intl.format(r.t.C98CSN, {
            applicationName: () => (0, t.jsx)(s.A, { application: i[0] }, i[0].id),
            applicationName2: () => (0, t.jsx)(s.A, { application: i[1] }, i[1].id),
        });
    else {
        let e = i[i.length - 1],
            l = i.slice(0, -1);
        d = r.intl.format(r.t.UxpwAh, {
            applications: () => l.map((e) => (0, t.jsx)(s.A, { application: e, useComma: !0 }, e.id)),
            applicationNameLast: () => (0, t.jsx)(s.A, { application: e }, e.id),
        });
    }
    return (0, t.jsx)(n.E, { variant: "text-sm/normal", children: d });
}
