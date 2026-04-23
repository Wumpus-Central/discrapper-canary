n.d(t, { A: () => d });
var s = n(627968);
n(64700);
var l = n(821609),
    a = n(308528),
    i = n(928658),
    r = n(978914),
    c = n(985018);
function d(e) {
    let { channel: t, onReportClick: n, onReportSubmit: d, onMouseEnter: o, onMouseLeave: u } = e,
        { error: A, loaded: h, message: m } = (0, r.I)(t);
    if (null == m && (h || A)) return null;
    let g = () => {
        d?.(), a.A.closePrivateChannel(t.id);
    };
    return (0, s.jsx)(l.$, {
        variant: "critical-primary",
        size: "sm",
        disabled: null == m,
        onClick: (e) => {
            e.stopPropagation(), n?.(), null != m && (0, i.b8)(m, g);
        },
        onMouseEnter: o,
        onMouseLeave: u,
        text: c.intl.string(c.t.HHZmDn),
    });
}
