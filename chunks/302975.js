n.d(t, {
    A: () => u,
});
var r = n(627968);
n(64700);
var l = n(397927),
    i = n(308528),
    a = n(928658),
    s = n(623075),
    o = n(977347),
    c = n(985018);

function u(e) {
    let {
            otherUserId: t,
            channel: n,
            buttonText: u,
            buttonSize: d = "sm",
            navigateAwayOnReportSuccess: f = !0,
            onReportClick: p,
            onReportSubmit: h,
            onMouseEnter: b,
            onMouseLeave: g,
        } = e,
        m = (0, s.V)(t),
        A = (0, o.D)(n.id, t);
    if (!m || null == A) return null;
    let y = () => {
        null == h || h(), i.A.closePrivateChannel(n.id, f);
    };
    return (0, r.jsx)(l.Button, {
        size: d,
        variant: "critical-primary",
        disabled: null == A,
        onClick: () => {
            null == p || p(), (0, a.b8)(A, y);
        },
        onMouseEnter: b,
        onMouseLeave: g,
        text: null != u ? u : c.intl.string(c.t.HHZmDn),
    });
}
