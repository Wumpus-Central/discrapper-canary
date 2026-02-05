"use strict";
n.d(t, { A: () => u });
var i = n(627968),
    s = n(64700),
    r = n(397927),
    l = n(435328),
    a = n(427080),
    o = n(515115),
    c = n(988794),
    d = n(888804);
function u(e) {
    let { guildScheduledEvent: t, channel: n, onClose: u } = e,
        h = t.entity_type === c.Ps.EXTERNAL,
        _ = s.useCallback((e) => (0, a.GI)(t, u)(e), [t, u]),
        p = (0, o.L)(t, n);
    if (null == p) return null;
    let { IconComponent: g, locationName: m } = p,
        f = (0, i.jsxs)(i.Fragment, {
            children: [
                null != g &&
                    (0, i.jsx)(g, { size: "custom", color: "currentColor", width: 20, height: 20, className: d.p }),
                (0, i.jsx)(r.Text, {
                    color: "text-default",
                    variant: "text-sm/normal",
                    className: d.fN,
                    children: (0, l.l)(m, !0),
                }),
            ],
        });
    return (0, i.jsx)("div", {
        className: d.nM,
        children: null != _ ? (0, i.jsx)(r.DUT, { className: h ? d.dC : d.h7, onClick: _, children: f }) : f,
    });
}
