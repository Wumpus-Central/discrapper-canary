n.d(t, { A: () => c });
var i = n(627968);
n(64700);
var l = n(397927),
    a = n(308528),
    s = n(928658),
    r = n(978914),
    o = n(985018);
function c(e) {
    let { channel: t, onReportClick: n, onReportSubmit: c, onMouseEnter: d, onMouseLeave: u } = e,
        { error: h, loaded: m, message: A } = (0, r.I)(t);
    if (null == A && (m || h)) return null;
    let p = () => {
        c?.(), a.A.closePrivateChannel(t.id);
    };
    return (0, i.jsx)(l.Button, {
        variant: "critical-primary",
        size: "sm",
        disabled: null == A,
        onClick: (e) => {
            e.stopPropagation(), n?.(), null != A && (0, s.b8)(A, p);
        },
        onMouseEnter: d,
        onMouseLeave: u,
        text: o.intl.string(o.t.HHZmDn),
    });
}
