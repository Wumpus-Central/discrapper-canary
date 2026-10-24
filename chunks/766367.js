t.d(e, { A: () => s });
var l = t(477900);
t(582128);
var u = t(358618),
    r = t(983851),
    i = t(625180),
    a = t(58736),
    c = t(620999),
    o = t(165610),
    d = t(105292);
function s(n) {
    let { frame: e } = n;
    if (!(0, o.x1)(e) || !(0, c.v)(e)) return null;
    let { userMuted: t } = e.data,
        s = d.intl.string(t ? d.t.PTYULU : d.t["R/F7xs"]);
    return (0, l.jsx)(a.Ay.Icon, {
        icon: t ? u._ : r.H,
        tooltip: s,
        "aria-label": s,
        onClick: () => i.A.setFrameUserMuted(e.id, !t),
    });
}
