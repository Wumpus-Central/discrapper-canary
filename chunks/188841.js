n.d(i, { default: () => e });
var s = n(627968);
n(64700);
var a = n(158954),
    r = n(985018);
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
