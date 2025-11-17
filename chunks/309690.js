n.d(i, { default: () => d });
var e = n(54381);
n(473749);
var r = n(159691),
    a = n(481060),
    l = n(458725),
    s = n(388032);
function d(t) {
    var i;
    let { onClose: n, transitionState: d } = t,
        o = null == (i = (0, l.hp)(l.u.STREAM_FULL)) ? void 0 : i.errorCode,
        u = s.intl.formatToPlainString(s.t.ejOT95, { errorCode: o });
    return (0, e.jsx)(r.u_l, {
        transitionState: d,
        title: s.intl.string(s.t.GzjdO5),
        subtitle: s.intl.string(s.t.VVZDBL),
        onClose: n,
        actions: [
            {
                text: s.intl.string(s.t.BddRzS),
                variant: "primary",
                onClick: n,
            },
        ],
        children: (0, e.jsx)(a.Text, {
            variant: "text-md/medium",
            selectable: !0,
            color: "text-muted",
            children: u,
        }),
    });
}
