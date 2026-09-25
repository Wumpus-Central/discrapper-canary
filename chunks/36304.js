n.d(i, { default: () => d });
var a = n(477900);
n(582128);
var e = n(189213),
    l = n(993719),
    s = n(362823),
    r = n(573549),
    c = n(375708);
function d(t) {
    let { onClose: i, transitionState: n } = t;
    return (0, a.jsx)(e.a, {
        title: c.intl.string(r.default["5wYjyW"]),
        transitionState: n,
        actions: [
            { text: c.intl.string(r.default["01Jl9Z"]), onClick: i, variant: "secondary" },
            {
                text: c.intl.string(r.default.DxcYYG),
                onClick: () => {
                    (l.O(s.v.MUTE_TUTORIAL), i());
                },
            },
        ],
        onClose: i,
        children: c.intl.string(r.default.bGygJZ),
    });
}
