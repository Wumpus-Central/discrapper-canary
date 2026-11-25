var l = n(477900);
n(582128);
var i = n(834730),
    r = n(429913),
    u = n(102876),
    a = n(792996);
n.d(
    t,
    {},
    {
        A: function (e) {
            let { applicationIds: t } = e,
                n = (0, r.A)(t).filter((e) => null != e);
            if (0 === n.length) return null;
            let s = null;
            if (1 === n.length)
                s = a.intl.format(a.t.wQ6urw, {
                    applicationName: () => (0, l.jsx)(u.A, { application: n[0] }, n[0].id),
                });
            else if (2 === n.length)
                s = a.intl.format(a.t.C98CSN, {
                    applicationName: () => (0, l.jsx)(u.A, { application: n[0] }, n[0].id),
                    applicationName2: () => (0, l.jsx)(u.A, { application: n[1] }, n[1].id),
                });
            else {
                let e = n[n.length - 1],
                    t = n.slice(0, -1);
                s = a.intl.format(a.t.UxpwAh, {
                    applications: () => t.map((e) => (0, l.jsx)(u.A, { application: e, useComma: !0 }, e.id)),
                    applicationNameLast: () => (0, l.jsx)(u.A, { application: e }, e.id),
                });
            }
            return (0, l.jsx)(i.E, { variant: "body-sm/normal", children: s });
        },
    },
);
