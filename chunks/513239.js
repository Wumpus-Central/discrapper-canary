n.d(i, { default: () => e });
var s = n(54381);
n(473749);
var r = n(793030),
    a = n(388032);
function e(t) {
    let { onClose: i, transitionState: n } = t;
    return (0, s.jsx)(r.Modal, {
        transitionState: n,
        size: "sm",
        title: a.intl.string(a.t.wLrh03),
        subtitle: a.intl.string(a.t.DW9yJj),
        actions: [
            {
                text: a.intl.string(a.t.BddRzS),
                variant: "primary",
                onClick: i,
            },
        ],
        onClose: i,
    });
}
