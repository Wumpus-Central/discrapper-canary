e.d(i, { default: () => d });
var n = e(477900);
e(582128);
var r = e(189213),
    a = e(834730),
    s = e(487329),
    l = e(375708);
function d(t) {
    let { onClose: i, transitionState: e } = t,
        d = (0, s.B1)(s.iy.STREAM_FULL)?.errorCode,
        o = l.intl.formatToPlainString(l.t.ejOT95, { errorCode: d });
    return (0, n.jsx)(r.a, {
        transitionState: e,
        title: l.intl.string(l.t.GzjdO5),
        subtitle: l.intl.string(l.t.VVZDBL),
        onClose: i,
        actions: [{ text: l.intl.string(l.t.BddRzS), variant: "primary", onClick: i }],
        children: (0, n.jsx)(a.E, { variant: "text-md/medium", selectable: !0, color: "text-muted", children: o }),
    });
}
