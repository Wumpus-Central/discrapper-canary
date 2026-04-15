n.d(i, { default: () => e });
var a = n(627968);
n(64700);
var r = n(732955),
    s = n(985018);
function e(t) {
    let { roleName: i, onConfirmDelete: n, ...e } = t;
    return (0, a.jsx)(r.aFV, {
        ...e,
        size: "sm",
        title: s.intl.string(s.t.YWISbQ),
        subtitle: s.intl.format(s.t["9+nrUS"], { name: i }),
        actions: [
            { text: s.intl.string(s.t["ETE/oC"]), onClick: e.onClose, variant: "secondary" },
            {
                text: s.intl.string(s.t.oyYWHE),
                onClick: async () => {
                    await n(), await e.onClose();
                },
                variant: "primary",
            },
        ],
        children: (0, a.jsx)(r.wx6, { type: "warning", children: s.intl.string(s.t.lXk2SU) }),
    });
}
