e.d(n, { default: () => c });
var i = e(627968);
e(64700);
var a = e(158954),
    d = e(993719),
    s = e(362823),
    l = e(807880),
    r = e(985018);
function c(t) {
    let { onClose: n, transitionState: e } = t;
    return (0, i.jsx)(a.Modal, {
        title: r.intl.string(l.default["5wYjyW"]),
        transitionState: e,
        actions: [
            { text: r.intl.string(l.default["01Jl9Z"]), onClick: n, variant: "secondary" },
            {
                text: r.intl.string(l.default.DxcYYG),
                onClick: () => {
                    d.O(s.v.MUTE_TUTORIAL), n();
                },
            },
        ],
        onClose: n,
        children: r.intl.string(l.default.bGygJZ),
    });
}
