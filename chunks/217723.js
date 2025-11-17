i.d(n, { default: () => o }), i(388685);
var a = i(54381),
    s = i(473749),
    c = i(793030),
    e = i(388032);
function o(t) {
    let { transitionState: n, onConfirm: i, onClose: o, onDismiss: l } = t,
        [r, u] = s.useState(!1),
        d = async () => {
            if (!r) {
                u(!0);
                try {
                    await i();
                } catch (t) {
                } finally {
                    u(!1);
                }
                o();
            }
        },
        k = () => (l(), o());
    return (0, a.jsx)(c.Modal, {
        transitionState: n,
        onClose: k,
        title: e.intl.string(e.t["66tnno"]),
        subtitle: e.intl.string(e.t["c/k4SW"]),
        actions: [
            {
                text: e.intl.string(e.t["ETE/oC"]),
                onClick: k,
                variant: "secondary",
            },
            {
                text: e.intl.string(e.t["cY+Oob"]),
                onClick: d,
                loading: r,
            },
        ],
    });
}
