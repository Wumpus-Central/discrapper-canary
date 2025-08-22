n.d(t, { Z: () => u });
var r = n(951288);
n(647438);
var i = n(481060),
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
        _ = (0, s.V)(n.id, t);
    if (!b || null == _) return null;
    let y = () => {
        null == f || f(), l.Z.closePrivateChannel(n.id, p);
    };
    return (0, r.jsx)(i.zxk, {
        size: d,
        variant: "critical-primary",
        disabled: null == _,
        onClick: () => {
            null == h || h(), (0, a.WL)(_, y);
        },
        onMouseEnter: m,
        onMouseLeave: g,
        text: null != u ? u : c.intl.string(c.t.HHZmDg),
    });
}
