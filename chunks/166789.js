e.d(i, { default: () => d });
var n = e(627968);
e(64700);
var r = e(189213),
    a = e(834730),
    l = e(487329),
    s = e(985018);
function d(t) {
    let { onClose: i, transitionState: e } = t,
        d = (0, l.B1)(l.iy.STREAM_FULL)?.errorCode,
        o = s.intl.formatToPlainString(s.t.ejOT95, { errorCode: d });
    return (0, n.jsx)(r.Modal, {
        transitionState: e,
        title: s.intl.string(s.t.GzjdO5),
        subtitle: s.intl.string(s.t.VVZDBL),
        onClose: i,
        actions: [{ text: s.intl.string(s.t.BddRzS), variant: "primary", onClick: i }],
        children: (0, n.jsx)(a.E, { variant: "text-md/medium", selectable: !0, color: "text-muted", children: o }),
    });
}
