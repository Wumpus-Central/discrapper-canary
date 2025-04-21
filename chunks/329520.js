n.d(t, { Z: () => f });
var r = n(200651);
n(192379);
var i = n(442837),
    a = n(481060),
    o = n(201895),
    s = n(933557),
    l = n(592125),
    c = n(473919),
    u = n(170187),
    d = n(388032);
function f(e) {
    let { stream: t, game: n, textVariant: f, textClassName: _, iconClassName: p, hideIcon: h = !1, hideText: m = !1, hideTooltip: g = !1 } = e,
        E = (0, i.e7)([l.Z], () => l.Z.getChannel(t.channelId)),
        b = (0, s.ZP)(E);
    if (h && m) return null;
    let y = (null == n ? void 0 : n.name) === '' ? null : null == n ? void 0 : n.name,
        v = null != y ? d.intl.format(d.t['0wJXSk'], { name: y }) : d.intl.string(d.t.eXan7O);
    return (0, r.jsxs)(r.Fragment, {
        children: [
            !h &&
                (0, r.jsx)(c.Z, {
                    icon: a.ARS,
                    tooltipText: g || null == b ? void 0 : b,
                    tooltipAriaLabel: g || null == E ? void 0 : (0, o.ZP)({ channel: E }),
                    className: p
                }),
            !m &&
                (0, r.jsx)(u.Z, {
                    variant: f,
                    className: _,
                    children: v
                })
        ]
    });
}
