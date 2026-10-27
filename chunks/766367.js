t.d(n, { A: () => s });
var l = t(477900);
t(582128);
var u = t(358618),
    r = t(983851),
    i = t(625180),
    a = t(58736),
    c = t(620999),
    o = t(165610),
    d = t(248675),
    f = t(105292);
function s(e) {
    let { frame: n } = e;
    if (!(0, o.x1)(n) || !(0, c.v)(n)) return null;
    let { userMuted: t } = n.data,
        s = f.intl.string(t ? d.default.bd0Ufh : d.default.dxBzpe);
    return (0, l.jsx)(a.Ay.Icon, {
        icon: t ? u._ : r.H,
        tooltip: s,
        "aria-label": s,
        onClick: () => i.A.setFrameUserMuted(n.id, !t),
    });
}
