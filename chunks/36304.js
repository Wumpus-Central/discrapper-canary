n.d(e, { default: () => s });
var i = n(627968);
n(64700);
var d = n(158954),
    h = n(993719),
    b = n(362823),
    a = n(807880),
    r = n(985018);
function s(t) {
    let { onClose: e, transitionState: n } = t;
    return (0, i.jsx)(d.Modal, {
        title: r.intl.string(a.default["5wYjyW"]),
        transitionState: n,
        actions: [
            { text: r.intl.string(a.default["01Jl9Z"]), onClick: e, variant: "secondary" },
            {
                text: r.intl.string(a.default.DxcYYG),
                onClick: () => {
                    h.O(b.v.MUTE_TUTORIAL), e();
                },
            },
        ],
        onClose: e,
        children: r.intl.string(a.default.bGygJZ),
    });
}
