"use strict";
i.d(t, { A: () => _ });
var n = i(627968),
    r = i(64700),
    l = i(834730),
    a = i(939249),
    s = i(435328),
    o = i(427080),
    d = i(515115),
    c = i(988794),
    u = i(478799);
function _(e) {
    let { guildScheduledEvent: t, channel: i, onClose: _ } = e,
        p = t.entity_type === c.Ps.EXTERNAL,
        h = r.useCallback((e) => (0, o.GI)(t, _)(e), [t, _]),
        f = (0, d.L)(t, i);
    if (null == f) return null;
    let { IconComponent: g, locationName: m } = f,
        b = (0, n.jsxs)(n.Fragment, {
            children: [
                null != g &&
                    (0, n.jsx)(g, { size: "custom", color: "currentColor", width: 20, height: 20, className: u.p }),
                (0, n.jsx)(l.E, {
                    color: "text-default",
                    variant: "text-sm/normal",
                    className: u.fN,
                    children: (0, s.l)(m, !0),
                }),
            ],
        });
    return (0, n.jsx)("div", {
        className: u.nM,
        children: null != h ? (0, n.jsx)(a.D, { className: p ? u.dC : u.h7, onClick: h, children: b }) : b,
    });
}
