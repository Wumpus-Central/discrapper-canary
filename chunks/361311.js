a.d(t, { A: () => o });
var n = a(627968);
a(64700);
var i = a(834730),
    l = a(429913),
    r = a(102876),
    d = a(985018);
function o(e) {
    let { applicationIds: t } = e,
        a = (0, l.A)(t).filter((e) => null != e);
    if (0 === a.length) return null;
    let o = null;
    if (1 === a.length)
        o = d.intl.format(d.t.wQ6urw, { applicationName: () => (0, n.jsx)(r.A, { application: a[0] }, a[0].id) });
    else if (2 === a.length)
        o = d.intl.format(d.t.C98CSN, {
            applicationName: () => (0, n.jsx)(r.A, { application: a[0] }, a[0].id),
            applicationName2: () => (0, n.jsx)(r.A, { application: a[1] }, a[1].id),
        });
    else {
        let e = a[a.length - 1],
            t = a.slice(0, -1);
        o = d.intl.format(d.t.UxpwAh, {
            applications: () => t.map((e) => (0, n.jsx)(r.A, { application: e, useComma: !0 }, e.id)),
            applicationNameLast: () => (0, n.jsx)(r.A, { application: e }, e.id),
        });
    }
    return (0, n.jsx)(i.E, { variant: "text-sm/normal", children: o });
}
