n.d(t, { A: () => _ });
var i = n(627968),
    a = n(64700),
    r = n(834730),
    l = n(939249),
    s = n(435328),
    o = n(427080),
    c = n(515115),
    d = n(988794),
    u = n(985018),
    p = n(478799);
function _(e) {
    let { guildScheduledEvent: t, channel: n, onClose: _ } = e,
        f = t.entity_type === d.Ps.EXTERNAL,
        v = a.useCallback((e) => (0, o.GI)(t, _)(e), [t, _]),
        m = (0, c.L)(t, n);
    if (null == m) return null;
    let { IconComponent: g, locationName: b } = m,
        h = (0, i.jsxs)(i.Fragment, {
            children: [
                null != g &&
                    (0, i.jsx)(g, {
                        size: "custom",
                        color: "currentColor",
                        width: 20,
                        height: 20,
                        className: p.p,
                        "aria-label": u.intl.string(u.t.gwSn4I),
                    }),
                (0, i.jsx)(r.E, {
                    color: "text-default",
                    variant: "text-sm/normal",
                    className: p.fN,
                    children: (0, s.l)(b, !0),
                }),
            ],
        });
    return (0, i.jsx)("div", {
        className: p.nM,
        children: null != v ? (0, i.jsx)(l.D, { className: f ? p.dC : p.h7, onClick: v, children: h }) : h,
    });
}
