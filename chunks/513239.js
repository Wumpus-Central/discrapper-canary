n.d(i, { default: () => e });
var s = n(951288);
n(647438);
var r = n(82659),
    a = n(388032);
function e(t) {
    let { onClose: i, transitionState: n } = t;
    return (0, s.jsx)(r.Modal, {
        transitionState: n,
        size: "sm",
        title: a.intl.string(a.t.wLrh09),
        subtitle: a.intl.string(a.t.DW9yJi),
        actions: [
            {
                text: a.intl.string(a.t.BddRzc),
                variant: "primary",
                onClick: i,
            },
        ],
        onClose: i,
    });
}
