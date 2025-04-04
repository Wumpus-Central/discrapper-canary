n.d(t, { Z: () => f });
var r = n(200651);
n(192379);
var i = n(442837),
    o = n(481060),
    a = n(201895),
    s = n(933557),
    l = n(592125),
    c = n(473919),
    u = n(170187),
    d = n(388032);
function f(e) {
    let { stream: t, game: n, textVariant: f, textClassName: _, hideIcon: p = !1, hideText: h = !1, hideTooltip: m = !1 } = e,
        g = (0, i.e7)([l.Z], () => l.Z.getChannel(t.channelId)),
        E = (0, s.ZP)(g);
    if (p && h) return null;
    let b = (null == n ? void 0 : n.name) === '' ? null : null == n ? void 0 : n.name,
        y = null != b ? d.NW.format(d.t['0wJXSk'], { name: b }) : d.NW.string(d.t.eXan7O);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            !p &&
                (0, r.jsx)(c.Z, {
                    icon: o.ARS,
                    tooltipText: m || null == E ? void 0 : E,
                    tooltipAriaLabel: m || null == g ? void 0 : (0, a.ZP)({ channel: g })
                }),
            !h &&
                (0, r.jsx)(u.Z, {
                    variant: f,
                    className: _,
                    children: y
                })
        ]
    });
}
