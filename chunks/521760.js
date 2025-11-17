n.d(i, { default: () => e });
var s = n(54381);
n(473749);
var a = n(793030),
    r = n(388032);
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
