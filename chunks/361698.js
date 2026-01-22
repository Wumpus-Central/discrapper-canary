n.d(i, { default: () => r });
var s = n(627968);
n(64700);
var a = n(158954),
    e = n(985018);
function r(t) {
    let { transitionState: i, onClose: n } = t;
    return (0, s.jsx)(a.Modal, {
        transitionState: i,
        title: e.intl.string(e.t.elyVbv),
        onClose: n,
        actions: [
            {
                text: e.intl.string(e.t.BddRzS),
                variant: "primary",
                onClick: n,
            },
        ],
        subtitle: e.intl.string(e.t.nIeRep),
    });
}
