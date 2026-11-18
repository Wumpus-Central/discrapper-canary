var e = l(477900);
l(582128);
var i = l(189213),
    a = l(858899),
    u = l(331322),
    r = l(834730),
    s = l(192308),
    o = l(158350),
    d = l(653036),
    c = l(191850),
    p = l(792996);
function f(t) {
    let { project: n, transitionState: l, onClose: s } = t,
        f = (0, o.A)(n),
        { appName: g, rows: h, keptChannels: _, pending: m, error: b } = f;
    return (0, e.jsx)(i.a, {
        transitionState: l,
        onClose: s,
        role: "alertdialog",
        title: p.intl.formatToPlainString(c.default.cAxBIL, { app: g }),
        size: "sm",
        notice: null == b ? void 0 : { type: "critical", message: b, role: "alert" },
        actions: [
            { text: p.intl.string(p.t["ETE/oC"]), variant: "secondary", onClick: s, disabled: m },
            {
                text: p.intl.string(c.default.VAb6aE),
                variant: "critical-primary",
                onClick: async function () {
                    let t = await f.submit();
                    null != t && ((0, a.P0)({ text: t, variant: "success" }), s());
                },
                loading: m,
                disabled: m,
            },
        ],
        children: (0, e.jsxs)(u.B, {
            gap: 12,
            children: [
                (0, e.jsx)(d.A, { rows: h }),
                null != _ ? (0, e.jsx)(r.E, { variant: "body-sm/normal", color: "text-muted", children: _ }) : null,
            ],
        }),
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
