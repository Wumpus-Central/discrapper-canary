n.d(i, { default: () => e });
var s = n(54381);
n(473749);
var a = n(793030),
    r = n(388032);
function e(t) {
    let { onClose: i, transitionState: n } = t;
    return (0, s.jsx)(a.Modal, {
        transitionState: n,
        size: "sm",
        title: r.intl.string(r.t.C5biF4),
        subtitle: r.intl.string(r.t["3Dy1Rh"]),
        onClose: i,
        actions: [
            {
                variant: "primary",
                text: r.intl.string(r.t.BddRzS),
                onClick: i,
            },
        ],
    });
}
