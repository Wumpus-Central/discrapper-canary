var e = n(477900),
    i = n(582128),
    a = n(189213),
    u = n(331322),
    r = n(834730),
    s = n(192308),
    o = n(233470),
    d = n(733791),
    c = n(936508),
    p = n(199267),
    f = n(706935),
    g = n(191850),
    h = n(792996);
function A(t) {
    let { project: l, target: n, otherTargets: s, ...c } = t,
        [p, A] = i.useState(!1),
        [b, _] = i.useState(null),
        m = (0, d.fI)(n, s),
        P = (0, d.Mi)(n);
    return (0, e.jsx)(a.a, {
        ...c,
        role: "alertdialog",
        title: h.intl.formatToPlainString(g.default.CJBhb2, { name: n.projectName }),
        subtitle: (0, d.J)(n, s),
        notice: null == b ? void 0 : { message: b, type: "critical", role: "alert" },
        actions: [
            { text: h.intl.string(h.t["ETE/oC"]), variant: "secondary", onClick: c.onClose },
            {
                text: h.intl.string(g.default.aC42bN),
                variant: "critical-primary",
                loading: p,
                disabled: p,
                onClick: () => {
                    (async function () {
                        (A(!0), _(null));
                        let t = await (0, o.xx)(l.id).catch(() => null);
                        (A(!1), t?.ok !== !0) ? _(h.intl.string(g.default["0XDHob"])) : c.onClose();
                    })().catch(() => {});
                },
            },
        ],
        children: (0, e.jsxs)(u.B, {
            gap: 12,
            children: [
                (0, e.jsx)(f.Ay, { items: m }),
                null != P ? (0, e.jsx)(r.E, { variant: "body-sm/normal", color: "text-muted", children: P }) : null,
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
                let t = (0, d.zu)(l);
                (0, s.qf)((i) => (0, e.jsx)(A, { ...i, project: l, target: n, otherTargets: t }));
                return;
            }
            let a = (0, c.hJ)(l, n);
            (0, s.qf)((t) => (0, e.jsx)(p.A, { ...t, target: a }));
        },
    },
);
