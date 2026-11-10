var n = l(477900);
l(582128);
var i = l(834730),
    a = l(429913),
    r = l(102876),
    s = l(792996);
l.d(
    t,
    {},
    {
        A: function (e) {
            let { applicationIds: t } = e,
                l = (0, a.A)(t).filter((e) => null != e);
            if (0 === l.length) return null;
            let u = null;
            if (1 === l.length)
                u = s.intl.format(s.t.wQ6urw, {
                    applicationName: () => (0, n.jsx)(r.A, { application: l[0] }, l[0].id),
                });
            else if (2 === l.length)
                u = s.intl.format(s.t.C98CSN, {
                    applicationName: () => (0, n.jsx)(r.A, { application: l[0] }, l[0].id),
                    applicationName2: () => (0, n.jsx)(r.A, { application: l[1] }, l[1].id),
                });
            else {
                let e = l[l.length - 1],
                    t = l.slice(0, -1);
                u = s.intl.format(s.t.UxpwAh, {
                    applications: () => t.map((e) => (0, n.jsx)(r.A, { application: e, useComma: !0 }, e.id)),
                    applicationNameLast: () => (0, n.jsx)(r.A, { application: e }, e.id),
                });
            }
            return (0, n.jsx)(i.E, { variant: "body-sm/normal", children: u });
        },
    },
);
