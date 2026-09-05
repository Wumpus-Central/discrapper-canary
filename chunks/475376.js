n.d(i, { default: () => d });
var a = n(477900);
n(582128);
var s = n(189213),
    e = n(277861),
    r = n(78637),
    l = n(375708);
function d(t) {
    let { transitionState: i, onClose: n } = t;
    return (0, a.jsx)(s.Modal, {
        size: "md",
        title: l.intl.string(r.default["+c5sxg"]),
        subtitle: l.intl.string(r.default["RFLH++"]),
        actions: [
            {
                text: l.intl.string(r.default.Z61nkt),
                variant: "secondary",
                onClick: () => {
                    n(), (0, e.Vq)();
                },
            },
            { text: l.intl.string(l.t["NX+WJN"]), variant: "primary", onClick: n },
        ],
        transitionState: i,
        onClose: n,
    });
}
