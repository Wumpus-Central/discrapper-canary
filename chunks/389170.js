e.d(i, { default: () => d });
var n = e(627968);
e(64700);
var r = e(732955),
    a = e(397927),
    l = e(487329),
    s = e(985018);
function d(t) {
    var i;
    let { onClose: e, transitionState: d } = t,
        o = null == (i = (0, l.B1)(l.iy.STREAM_FULL)) ? void 0 : i.errorCode,
        c = s.intl.formatToPlainString(s.t.ejOT95, { errorCode: o });
    return (0, n.jsx)(r.aFV, {
        transitionState: d,
        title: s.intl.string(s.t.GzjdO5),
        subtitle: s.intl.string(s.t.VVZDBL),
        onClose: e,
        actions: [
            {
                text: s.intl.string(s.t.BddRzS),
                variant: "primary",
                onClick: e,
            },
        ],
        children: (0, n.jsx)(a.Text, {
            variant: "text-md/medium",
            selectable: !0,
            color: "text-muted",
            children: c,
        }),
    });
}
