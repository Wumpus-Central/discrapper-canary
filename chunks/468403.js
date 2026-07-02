n.d(i, { default: () => c });
var a = n(627968),
    r = n(64700),
    s = n(189213),
    e = n(834730),
    l = n(375708);
function c(t) {
    let { onConfirm: i, onClose: n, transitionState: c } = t,
        o = r.useCallback(() => {
            i(), n();
        }, [i, n]);
    return (0, a.jsx)(s.Modal, {
        title: l.intl.string(l.t["5yF7e1"]),
        size: "sm",
        onClose: n,
        transitionState: c,
        actions: [
            { variant: "secondary", text: l.intl.string(l.t["ETE/oC"]), onClick: n },
            { variant: "critical-primary", text: l.intl.string(l.t.R9GHya), onClick: o },
        ],
        children: (0, a.jsx)(e.E, { variant: "text-md/normal", children: l.intl.string(l.t.nmBUv7) }),
    });
}
