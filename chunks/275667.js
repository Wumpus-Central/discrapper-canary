n.d(t, { G: () => A });
var i = n(627968),
    l = n(311907),
    s = n(939249),
    a = n(834730),
    r = n(652215),
    o = n(253932),
    d = n(461213),
    c = n(985018),
    u = n(673294);
function h(e) {
    let { onClick: t } = e;
    return (0, i.jsx)(s.D, {
        className: u.kL,
        onClick: t,
        children: (0, i.jsx)(a.E, {
            className: u.P_,
            variant: "text-xs/medium",
            color: "text-subtle",
            children: c.intl.string(c.t.jfrLLb),
        }),
    });
}
function A(e) {
    let { onClick: t } = e,
        n = o.tz.useSetting(),
        s = (0, l.bG)([d.A], () => d.A.getStatus());
    return __OVERLAY__ || (n && s !== r.clD.INVISIBLE) ? null : (0, i.jsx)(h, { onClick: t });
}
