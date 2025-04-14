n.d(t, { Z: () => u });
var r = n(200651);
n(192379);
var i = n(481060),
    l = n(493683),
    o = n(726521),
    a = n(213010),
    s = n(718538),
    c = n(388032);
function u(e) {
    let { otherUserId: t, channel: n, buttonSize: u = i.PhG.TINY, className: d, buttonText: p, navigateAwayOnReportSuccess: h = !0, onReportClick: f, onReportSubmit: m, onMouseEnter: g, onMouseLeave: b } = e,
        y = (0, a.Q)(t),
        _ = (0, s.V)(n.id, t);
    if (!y || null == _) return null;
    let C = () => {
        null == m || m(), l.Z.closePrivateChannel(n.id, h);
    };
    return (0, r.jsx)(i.zxk, {
        className: d,
        size: u,
        color: i.zxk.Colors.RED,
        disabled: null == _,
        onClick: () => {
            null == f || f(), (0, o.WL)(_, C);
        },
        onMouseEnter: g,
        onMouseLeave: b,
        children: null != p ? p : c.NW.string(c.t.HHZmDg)
    });
}
