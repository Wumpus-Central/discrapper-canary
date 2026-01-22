n.d(t, { A: () => c });
var r = n(627968);
n(64700);
var l = n(397927),
    i = n(308528),
    a = n(928658),
    s = n(978914),
    o = n(985018);
function c(e) {
    let { channel: t, onReportClick: n, onReportSubmit: c, onMouseEnter: u, onMouseLeave: d } = e,
        { error: f, loaded: p, message: h } = (0, s.I)(t);
    if (null == h && (p || f)) return null;
    let b = () => {
        null == c || c(), i.A.closePrivateChannel(t.id);
    };
    return (0, r.jsx)(l.Button, {
        variant: "critical-primary",
        size: "sm",
        disabled: null == h,
        onClick: (e) => {
            e.stopPropagation(), null == n || n(), null != h && (0, a.b8)(h, b);
        },
        onMouseEnter: u,
        onMouseLeave: d,
        text: o.intl.string(o.t.HHZmDn),
    });
}
