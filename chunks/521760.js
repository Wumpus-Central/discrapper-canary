n.d(i, { default: () => e });
var s = n(951288);
n(647438);
var a = n(793030),
    r = n(388032);
function e(t) {
    let { transitionState: i, onClose: n } = t;
    return (0, s.jsx)(a.Modal, {
        size: "sm",
        transitionState: i,
        onClose: n,
        title: r.intl.string(r.t["iE/uS0"]),
        subtitle: r.intl.string(r.t.G6Snvb),
        actions: [
            {
                variant: "primary",
                onClick: () => n(),
                text: r.intl.string(r.t.cpT0Cg),
            },
        ],
    });
}
