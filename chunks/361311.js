l.d(t, { A: () => o });
var s = l(627968);
l(64700);
var n = l(397927),
    i = l(429913),
    a = l(102876),
    r = l(985018);
function o(e) {
    let { applicationIds: t } = e,
        l = (0, i.A)(t).filter((e) => null != e);
    if (0 === l.length) return null;
    let o = null;
    if (1 === l.length)
        o = r.intl.format(r.t.wQ6urw, { applicationName: () => (0, s.jsx)(a.A, { application: l[0] }, l[0].id) });
    else if (2 === l.length)
        o = r.intl.format(r.t.C98CSN, {
            applicationName: () => (0, s.jsx)(a.A, { application: l[0] }, l[0].id),
            applicationName2: () => (0, s.jsx)(a.A, { application: l[1] }, l[1].id),
        });
    else {
        let e = l[l.length - 1],
            t = l.slice(0, -1);
        o = r.intl.format(r.t.UxpwAh, {
            applications: () => t.map((e) => (0, s.jsx)(a.A, { application: e, useComma: !0 }, e.id)),
            applicationNameLast: () => (0, s.jsx)(a.A, { application: e }, e.id),
        });
    }
    return (0, s.jsx)(n.Text, { variant: "text-sm/normal", children: o });
}
