n.d(i, { default: () => e });
var a = n(54381);
n(473749);
var r = n(793030),
    s = n(481060),
    l = n(388032);
function e(t) {
    let { onClose: i, onConfirmDelete: n, transitionState: e } = t;
    return (0, a.jsx)(r.Modal, {
        transitionState: e,
        "aria-label": l.intl.string(l.t["u/2TkU"]),
        onClose: i,
        title: l.intl.string(l.t["u/2TkU"]),
        actions: [
            {
                text: l.intl.string(l.t["ETE/oC"]),
                variant: "secondary",
                onClick: i,
            },
            {
                text: l.intl.string(l.t.dO8DLI),
                variant: "critical-primary",
                onClick: n,
            },
        ],
        children: (0, a.jsx)(s.Text, {
            variant: "text-md/normal",
            children: l.intl.string(l.t["9sgGbL"]),
        }),
    });
}
