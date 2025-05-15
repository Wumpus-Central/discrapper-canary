n.d(t, { Z: () => u });
var r = n(255367);
n(73800);
var i = n(481060),
    l = n(493683),
    a = n(726521),
    o = n(213010),
    s = n(718538),
    c = n(388032);
function u(e) {
    let { otherUserId: t, channel: n, buttonSize: u = i.PhG.TINY, className: d, buttonText: p, navigateAwayOnReportSuccess: h = !0, onReportClick: f, onReportSubmit: m, onMouseEnter: g, onMouseLeave: b } = e,
        _ = (0, o.Q)(t),
        C = (0, s.V)(n.id, t);
    if (!_ || null == C) return null;
    let x = () => {
        null == m || m(), l.Z.closePrivateChannel(n.id, h);
    };
    return (0, r.jsx)(i.zxk, {
        className: d,
        size: u,
        color: i.zxk.Colors.RED,
        disabled: null == C,
        onClick: () => {
            null == f || f(), (0, a.WL)(C, x);
        },
        onMouseEnter: g,
        onMouseLeave: b,
        children: null != p ? p : c.intl.string(c.t.HHZmDg)
    });
}
