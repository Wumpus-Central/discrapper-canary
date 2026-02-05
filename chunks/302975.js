n.d(t, { A: () => d });
var i = n(627968);
n(64700);
var l = n(397927),
    a = n(308528),
    s = n(928658),
    r = n(623075),
    o = n(977347),
    c = n(985018);
function d(e) {
    let {
            otherUserId: t,
            channel: n,
            buttonText: d,
            buttonSize: u = "sm",
            navigateAwayOnReportSuccess: h = !0,
            onReportClick: m,
            onReportSubmit: A,
            onMouseEnter: p,
            onMouseLeave: g,
        } = e,
        f = (0, r.V)(t),
        _ = (0, o.D)(n.id, t);
    if (!f || null == _) return null;
    let E = () => {
        A?.(), a.A.closePrivateChannel(n.id, h);
    };
    return (0, i.jsx)(l.Button, {
        size: u,
        variant: "critical-primary",
        disabled: null == _,
        onClick: () => {
            m?.(), (0, s.b8)(_, E);
        },
        onMouseEnter: p,
        onMouseLeave: g,
        text: null != d ? d : c.intl.string(c.t.HHZmDn),
    });
}
