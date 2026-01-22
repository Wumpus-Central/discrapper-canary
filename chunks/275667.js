n.d(t, { G: () => d });
var r = n(627968),
    l = n(311907),
    i = n(397927),
    a = n(253932),
    s = n(461213),
    o = n(985018),
    c = n(73187);
function u(e) {
    let { onClick: t } = e;
    return (0, r.jsx)(i.DUT, {
        className: c.kL,
        onClick: t,
        children: (0, r.jsx)(i.Text, {
            className: c.P_,
            variant: "text-xs/medium",
            color: "text-subtle",
            children: o.intl.string(o.t.jfrLLb),
        }),
    });
}
function d(e) {
    let { onClick: t } = e,
        n = a.tz.useSetting(),
        o = (0, l.bG)([s.A], () => s.A.getStatus());
    return __OVERLAY__ || (n && o !== i.clD.INVISIBLE) ? null : (0, r.jsx)(u, { onClick: t });
}
