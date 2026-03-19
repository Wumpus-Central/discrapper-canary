"use strict";
n.d(t, { G: () => u });
var i = n(627968),
    s = n(311907),
    l = n(397927),
    a = n(253932),
    r = n(461213),
    o = n(985018),
    c = n(407709);
function d(e) {
    let { onClick: t } = e;
    return (0, i.jsx)(l.DUT, {
        className: c.kL,
        onClick: t,
        children: (0, i.jsx)(l.Text, {
            className: c.P_,
            variant: "text-xs/medium",
            color: "text-subtle",
            children: o.intl.string(o.t.jfrLLb),
        }),
    });
}
function u(e) {
    let { onClick: t } = e,
        n = a.tz.useSetting(),
        o = (0, s.bG)([r.A], () => r.A.getStatus());
    return __OVERLAY__ || (n && o !== l.clD.INVISIBLE) ? null : (0, i.jsx)(d, { onClick: t });
}
