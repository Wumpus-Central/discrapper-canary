n.d(i, {
    default: () => e,
});
var s = n(627968);
n(64700);
var r = n(158954),
    a = n(985018);

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
