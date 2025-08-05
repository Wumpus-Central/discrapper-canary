n.d(t, { Z: () => u });
var r = n(255367);
n(73800);
var i = n(755721),
    a = n(493683),
    o = n(726521),
    s = n(213010),
    l = n(718538),
    c = n(388032);
function u(e) {
    let { otherUserId: t, channel: n, buttonSize: u = i.Ph.TINY, className: d, buttonText: f, navigateAwayOnReportSuccess: _ = !0, onReportClick: p, onReportSubmit: h, onMouseEnter: m, onMouseLeave: g } = e,
        E = (0, s.Q)(t),
        b = (0, l.V)(n.id, t);
    if (!E || null == b) return null;
    let y = () => {
            (null == h || h(), a.Z.closePrivateChannel(n.id, _));
        },
        O = () => {
            (null == p || p(), (0, o.WL)(b, y));
        };
    return (0, r.jsx)(i.zx, {
        className: d,
        size: u,
        color: i.zx.Colors.RED,
        disabled: null == b,
        onClick: O,
        onMouseEnter: m,
        onMouseLeave: g,
        children: null != f ? f : c.intl.string(c.t.HHZmDg)
    });
}
