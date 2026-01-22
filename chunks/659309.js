n.d(i, {
    default: () => e,
});
var s = n(627968);
n(64700);
var a = n(158954),
    r = n(985018);

function e(t) {
    let { transitionState: i, onClose: n } = t;
    return (0, s.jsx)(a.Modal, {
        size: "sm",
        transitionState: i,
        onClose: n,
        title: r.intl.string(r.t["iE/uSw"]),
        subtitle: r.intl.string(r.t.G6SnvT),
        actions: [
            {
                variant: "primary",
                onClick: () => n(),
                text: r.intl.string(r.t.cpT0Cq),
            },
        ],
    });
}
