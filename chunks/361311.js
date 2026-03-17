"use strict";
n.d(t, { A: () => o });
var i = n(627968);
n(64700);
var s = n(397927),
    l = n(429913),
    a = n(102876),
    r = n(985018);
function o(e) {
    let { applicationIds: t } = e,
        n = (0, l.A)(t).filter((e) => null != e);
    if (0 === n.length) return null;
    let o = null;
    if (1 === n.length)
        o = r.intl.format(r.t.wQ6urw, { applicationName: () => (0, i.jsx)(a.A, { application: n[0] }, n[0].id) });
    else if (2 === n.length)
        o = r.intl.format(r.t.C98CSN, {
            applicationName: () => (0, i.jsx)(a.A, { application: n[0] }, n[0].id),
            applicationName2: () => (0, i.jsx)(a.A, { application: n[1] }, n[1].id),
        });
    else {
        let e = n[n.length - 1],
            t = n.slice(0, -1);
        o = r.intl.format(r.t.UxpwAh, {
            applications: () => t.map((e) => (0, i.jsx)(a.A, { application: e, useComma: !0 }, e.id)),
            applicationNameLast: () => (0, i.jsx)(a.A, { application: e }, e.id),
        });
    }
    return (0, i.jsx)(s.Text, { variant: "text-sm/normal", children: o });
}
