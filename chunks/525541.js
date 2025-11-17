n.d(t, { Z: () => u });
var i = n(54381);
n(473749);
var r = n(481060),
    l = n(493683),
    a = n(726521),
    o = n(213010),
    s = n(718538),
    c = n(388032);
function u(e) {
    let {
            otherUserId: t,
            channel: n,
            buttonText: u,
            buttonSize: d = "sm",
            navigateAwayOnReportSuccess: p = !0,
            onReportClick: h,
            onReportSubmit: f,
            onMouseEnter: m,
            onMouseLeave: g,
        } = e,
        b = (0, o.Q)(t),
        y = (0, s.V)(n.id, t);
    if (!b || null == y) return null;
    let C = () => {
        null == f || f(), l.Z.closePrivateChannel(n.id, p);
    };
    return (0, i.jsx)(r.Button, {
        size: d,
        variant: "critical-primary",
        disabled: null == y,
        onClick: () => {
            null == h || h(), (0, a.WL)(y, C);
        },
        onMouseEnter: m,
        onMouseLeave: g,
        text: null != u ? u : c.intl.string(c.t.HHZmDn),
    });
}
