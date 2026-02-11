n.d(t, { G: () => u });
var i = n(627968),
    l = n(311907),
    s = n(397927),
    a = n(253932),
    r = n(461213),
    o = n(985018),
    d = n(407709);
function c(e) {
    let { onClick: t } = e;
    return (0, i.jsx)(s.DUT, {
        className: d.kL,
        onClick: t,
        children: (0, i.jsx)(s.Text, {
            className: d.P_,
            variant: "text-xs/medium",
            color: "text-subtle",
            children: o.intl.string(o.t.jfrLLb),
        }),
    });
}
function u(e) {
    let { onClick: t } = e,
        n = a.tz.useSetting(),
        o = (0, l.bG)([r.A], () => r.A.getStatus());
    return __OVERLAY__ || (n && o !== s.clD.INVISIBLE) ? null : (0, i.jsx)(c, { onClick: t });
}
