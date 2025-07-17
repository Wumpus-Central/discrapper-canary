n.d(i, { default: () => l });
var r = n(255367);
n(73800);
var a = n(82659),
    s = n(481060),
    e = n(388032);
function l(t) {
    let { onClose: i, onConfirmDelete: n, transitionState: l } = t;
    return (0, r.jsx)(a.u, {
        transitionState: l,
        'aria-label': e.intl.string(e.t['u/2TkZ']),
        onClose: i,
        title: e.intl.string(e.t['u/2TkZ']),
        actions: [
            {
                text: e.intl.string(e.t['ETE/oK']),
                variant: 'secondary',
                onClick: i
            },
            {
                text: e.intl.string(e.t.dO8DLC),
                variant: 'critical-primary',
                onClick: n
            }
        ],
        children: (0, r.jsx)(s.Text, {
            variant: 'text-md/normal',
            children: e.intl.string(e.t['9sgGbG'])
        })
    });
}
