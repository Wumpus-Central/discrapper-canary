var e = n(477900),
    i = n(582128),
    a = n(189213),
    u = n(331322),
    r = n(834730),
    s = n(192308),
    c = n(233470),
    o = n(733791),
    d = n(936508),
    f = n(199267),
    g = n(706935),
    A = n(258576),
    h = n(792996);
function C(t) {
    let { project: l, target: n, otherTargets: s, ...d } = t,
        [f, C] = i.useState(!1),
        [m, v] = i.useState(null),
        x = (0, o.fI)(n, s),
        b = (0, o.Mi)(n);
    return (0, e.jsx)(a.a, {
        ...d,
        role: "alertdialog",
        title: h.intl.formatToPlainString(A.default.CJBhb2, { name: n.projectName }),
        subtitle: (0, o.J)(n, s),
        notice: null == m ? void 0 : { message: m, type: "critical", role: "alert" },
        actions: [
            { text: h.intl.string(h.t["ETE/oC"]), variant: "secondary", onClick: d.onClose },
            {
                text: h.intl.string(A.default.aC42bN),
                variant: "critical-primary",
                loading: f,
                disabled: f,
                onClick: () => {
                    (async function () {
                        (C(!0), v(null));
                        let t = await (0, c.xx)(l.id).catch(() => null);
                        (C(!1), t?.ok !== !0) ? v(h.intl.string(A.default["0XDHob"])) : d.onClose();
                    })().catch(() => {});
                },
            },
        ],
        children: (0, e.jsxs)(u.B, {
            gap: 12,
            children: [
                (0, e.jsx)(g.Ay, { items: x }),
                null != b ? (0, e.jsx)(r.E, { variant: "body-sm/normal", color: "text-muted", children: b }) : null,
            ],
        }),
    });
}
n.d(
    l,
    {},
    {
        A: function (t) {
            let { project: l, target: n, action: i } = t;
            if ("delete" === i) {
                let t = (0, o.zu)(l);
                (0, s.qf)((i) => (0, e.jsx)(C, { ...i, project: l, target: n, otherTargets: t }));
                return;
            }
            let a = (0, d.hJ)(l, n);
            (0, s.qf)((t) => (0, e.jsx)(f.A, { ...t, target: a }));
        },
    },
);
