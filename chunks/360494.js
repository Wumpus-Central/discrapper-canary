i.d(n, { default: () => l });
var a = i(477900);
i(582128);
var s = i(189213),
    e = i(683071),
    r = i(105292);
function l(t) {
    let { roleName: n, onConfirmDelete: i, ...l } = t;
    return (0, a.jsx)(s.a, {
        ...l,
        size: "sm",
        title: r.intl.string(r.t.YWISbQ),
        subtitle: r.intl.format(r.t["9+nrUS"], { name: n }),
        actions: [
            { text: r.intl.string(r.t["ETE/oC"]), onClick: l.onClose, variant: "secondary" },
            {
                text: r.intl.string(r.t.oyYWHE),
                onClick: async () => {
                    (await i(), await l.onClose());
                },
                variant: "primary",
            },
        ],
        children: (0, a.jsx)(e.w, { type: "warning", message: r.intl.string(r.t.lXk2SU), role: "none" }),
    });
}
