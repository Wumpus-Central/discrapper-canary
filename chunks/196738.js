n.d(i, { default: () => e });
var s = n(255367);
n(73800);
var a = n(82659),
    r = n(388032);
function e(t) {
    let { onClose: i, transitionState: n } = t;
    return (0, s.jsx)(a.Modal, {
        transitionState: n,
        size: "sm",
        title: r.intl.string(r.t.C5biFx),
        subtitle: r.intl.string(r.t["3Dy1Rk"]),
        onClose: i,
        actions: [
            {
                variant: "primary",
                text: r.intl.string(r.t.BddRzc),
                onClick: i,
            },
        ],
    });
}
