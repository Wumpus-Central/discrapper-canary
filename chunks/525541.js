n.d(t, { Z: () => d });
var i = n(200651);
n(192379);
var l = n(481060),
    a = n(493683),
    r = n(726521),
    s = n(213010),
    o = n(718538),
    c = n(388032);
function d(e) {
    let { otherUserId: t, channel: n, buttonSize: d = l.PhG.TINY, className: u, buttonText: h, navigateAwayOnReportSuccess: p = !0, onReportClick: m, onReportSubmit: f, onMouseEnter: g, onMouseLeave: _ } = e,
        C = (0, s.Q)(t),
        x = (0, o.V)(n.id, t);
    if (!C || null == x) return null;
    let v = () => {
        null == f || f(), a.Z.closePrivateChannel(n.id, p);
    };
    return (0, i.jsx)(l.zxk, {
        className: u,
        size: d,
        color: l.zxk.Colors.RED,
        disabled: null == x,
        onClick: () => {
            null == m || m(), (0, r.WL)(x, v);
        },
        onMouseEnter: g,
        onMouseLeave: _,
        children: null != h ? h : c.intl.string(c.t.HHZmDg)
    });
}
