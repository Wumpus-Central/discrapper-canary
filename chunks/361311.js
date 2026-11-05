var i = l(477900);
l(582128);
var a = l(834730),
    s = l(429913),
    n = l(102876),
    r = l(792996);
l.d(
    t,
    {},
    {
        A: function (e) {
            let { applicationIds: t } = e,
                l = (0, s.A)(t).filter((e) => null != e);
            if (0 === l.length) return null;
            let d = null;
            if (1 === l.length)
                d = r.intl.format(r.t.wQ6urw, {
                    applicationName: () => (0, i.jsx)(n.A, { application: l[0] }, l[0].id),
                });
            else if (2 === l.length)
                d = r.intl.format(r.t.C98CSN, {
                    applicationName: () => (0, i.jsx)(n.A, { application: l[0] }, l[0].id),
                    applicationName2: () => (0, i.jsx)(n.A, { application: l[1] }, l[1].id),
                });
            else {
                let e = l[l.length - 1],
                    t = l.slice(0, -1);
                d = r.intl.format(r.t.UxpwAh, {
                    applications: () => t.map((e) => (0, i.jsx)(n.A, { application: e, useComma: !0 }, e.id)),
                    applicationNameLast: () => (0, i.jsx)(n.A, { application: e }, e.id),
                });
            }
            return (0, i.jsx)(a.E, { variant: "body-sm/normal", children: d });
        },
    },
);
