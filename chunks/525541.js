n.d(t, { Z: () => u });
var r = n(255367);
n(73800);
var i = n(755721),
    l = n(493683),
    a = n(726521),
    o = n(213010),
    s = n(718538),
    c = n(388032);
function u(e) {
    let { otherUserId: t, channel: n, buttonSize: u = i.Ph.TINY, className: d, buttonText: p, navigateAwayOnReportSuccess: h = !0, onReportClick: f, onReportSubmit: m, onMouseEnter: g, onMouseLeave: b } = e,
        _ = (0, o.Q)(t),
        y = (0, s.V)(n.id, t);
    if (!_ || null == y) return null;
    let C = () => {
        (null == m || m(), l.Z.closePrivateChannel(n.id, h));
    };
    return (0, r.jsx)(i.zx, {
        className: d,
        size: u,
        color: i.zx.Colors.RED,
        disabled: null == y,
        onClick: () => {
            (null == f || f(), (0, a.WL)(y, C));
        },
        onMouseEnter: g,
        onMouseLeave: b,
        children: null != p ? p : c.intl.string(c.t.HHZmDg)
    });
}
