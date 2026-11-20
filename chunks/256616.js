var l = i(477900),
    n = i(582128),
    e = i(855986),
    s = i(189213),
    c = i(858899),
    o = i(192308),
    r = i(587895),
    u = i(664619),
    p = i(191850),
    d = i(792996);
function f(t) {
    let { project: a, ...i } = t,
        [o, f] = n.useState(!1),
        [g, m] = n.useState(null),
        b = (0, e.bG)([r.A], () => r.A.getApplication(a.application_id)?.name ?? a.name, [a.application_id, a.name]),
        k = d.intl.formatToPlainString(p.default.m8KWic, { app: b });
    return (0, l.jsx)(s.a, {
        ...i,
        role: "alertdialog",
        title: k,
        subtitle: d.intl.string("guild" === a.install_scope ? p.default["6upWvS"] : p.default.wve4kB),
        "aria-label": k,
        notice: null == g ? void 0 : { message: g, type: "critical", role: "alert" },
        actions: [
            { text: d.intl.string(d.t["ETE/oC"]), variant: "secondary", onClick: i.onClose },
            {
                text: d.intl.string(p.default.GqcQyH),
                variant: "critical-primary",
                loading: o,
                disabled: o,
                onClick: () => {
                    (async function () {
                        (f(!0), m(null));
                        let t = await (0, u.qt)(a);
                        (f(!1), t)
                            ? ((0, c.P0)({
                                  text: d.intl.formatToPlainString(p.default.b8LN7N, { app: b }),
                                  variant: "success",
                              }),
                              i.onClose())
                            : m(d.intl.string(p.default["rE/0SD"]));
                    })().catch(() => {});
                },
            },
        ],
    });
}
i.d(
    a,
    {},
    {
        A: function (t) {
            (0, o.qf)((a) => (0, l.jsx)(f, { ...a, ...t }));
        },
    },
);
