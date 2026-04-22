n.d(i, { default: () => l });
var a = n(627968);
n(64700);
var r = n(189213),
    s = n(683071),
    e = n(985018);
function l(t) {
    let { roleName: i, onConfirmDelete: n, ...l } = t;
    return (0, a.jsx)(r.Modal, {
        ...l,
        size: "sm",
        title: e.intl.string(e.t.YWISbQ),
        subtitle: e.intl.format(e.t["9+nrUS"], { name: i }),
        actions: [
            { text: e.intl.string(e.t["ETE/oC"]), onClick: l.onClose, variant: "secondary" },
            {
                text: e.intl.string(e.t.oyYWHE),
                onClick: async () => {
                    await n(), await l.onClose();
                },
                variant: "primary",
            },
        ],
        children: (0, a.jsx)(s.w, { type: "warning", children: e.intl.string(e.t.lXk2SU) }),
    });
}
