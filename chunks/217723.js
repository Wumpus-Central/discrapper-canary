(i.d(n, { default: () => l }), i(388685));
var a = i(255367),
    s = i(73800),
    c = i(82659),
    e = i(388032);
function l(t) {
    let { transitionState: n, onConfirm: i, onClose: l, onDismiss: o } = t,
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
                l();
            }
        },
        p = () => (o(), l());
    return (0, a.jsx)(c.Modal, {
        transitionState: n,
        onClose: p,
        title: e.intl.string(e.t['66tnnp']),
        subtitle: e.intl.string(e.t['c/k4SU']),
        actions: [
            {
                text: e.intl.string(e.t['ETE/oK']),
                onClick: p,
                variant: 'secondary'
            },
            {
                text: e.intl.string(e.t['cY+Ooa']),
                onClick: d,
                loading: r
            }
        ]
    });
}
