var e = l(477900),
    i = l(582128),
    u = l(855986),
    a = l(189213),
    r = l(858899),
    s = l(192308),
    o = l(587895),
    d = l(664619),
    c = l(191850),
    p = l(792996);
function f(t) {
    let { project: n, ...l } = t,
        [s, f] = i.useState(!1),
        [g, h] = i.useState(null),
        A = (0, u.bG)([o.A], () => o.A.getApplication(n.application_id)?.name ?? n.name, [n.application_id, n.name]),
        b = p.intl.formatToPlainString(c.default.m8KWic, { app: A });
    return (0, e.jsx)(a.a, {
        ...l,
        role: "alertdialog",
        title: b,
        subtitle: p.intl.string("guild" === n.install_scope ? c.default["6upWvS"] : c.default.wve4kB),
        "aria-label": b,
        notice: null == g ? void 0 : { message: g, type: "critical", role: "alert" },
        actions: [
            { text: p.intl.string(p.t["ETE/oC"]), variant: "secondary", onClick: l.onClose },
            {
                text: p.intl.string(c.default.GqcQyH),
                variant: "critical-primary",
                loading: s,
                disabled: s,
                onClick: () => {
                    (async function () {
                        (f(!0), h(null));
                        let t = await (0, d.qt)(n);
                        (f(!1), t)
                            ? ((0, r.P0)({
                                  text: p.intl.formatToPlainString(c.default.b8LN7N, { app: A }),
                                  variant: "success",
                              }),
                              l.onClose())
                            : h(p.intl.string(c.default["rE/0SD"]));
                    })().catch(() => {});
                },
            },
        ],
    });
}
l.d(
    n,
    {},
    {
        A: function (t) {
            (0, s.qf)((n) => (0, e.jsx)(f, { ...n, ...t }));
        },
    },
);
