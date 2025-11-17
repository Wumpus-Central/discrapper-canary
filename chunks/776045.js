i.d(n, { default: () => r }), i(388685), i(539854);
var a = i(54381),
    l = i(473749),
    s = i(793030),
    e = i(388032);
function r(t) {
    let { transitionState: n, onClose: i, title: r, body: c, cta: o, closeLabel: u, onConfirm: d } = t,
        [p, h] = l.useState(!1),
        k = async () => {
            h(!0);
            try {
                await d(), i();
            } finally {
                h(!1);
            }
        },
        y = null != r ? r : e.intl.string(e.t.D94rwS),
        C = [];
    return (
        null != u &&
            C.push({
                variant: "secondary",
                text: u,
                onClick: i,
            }),
        C.push({
            variant: "primary",
            text: o,
            onClick: k,
            loading: p,
        }),
        (0, a.jsx)(s.Modal, {
            title: y,
            actions: C,
            transitionState: n,
            onClose: i,
            children: c,
        })
    );
}
