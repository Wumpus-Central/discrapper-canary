n.d(t, { Z: () => m });
var i = n(200651),
    l = n(442837),
    r = n(481060),
    a = n(8454),
    s = n(626562),
    o = n(885110),
    c = n(51144),
    d = n(231338),
    u = n(388032),
    h = n(395568);
function m(e) {
    var t;
    let { user: n } = e,
        { activities: m, status: p } = (0, l.cj)([o.Z], () => ({
            activities: o.Z.getActivities(),
            status: o.Z.getStatus()
        })),
        g = null !== (t = (0, c.u5)(p)) && void 0 !== t ? t : '',
        _ = m.length > 0,
        f = (0, a.Z)(n.id),
        E = p === d.Sk.INVISIBLE || p === d.Sk.OFFLINE,
        I = (0, s.Vm)({ location: 'AccountProfilePopoutMenuItemStatusLabel' });
    return (0, i.jsxs)('div', {
        className: h.container,
        children: [
            g,
            g.length > 0 &&
                I &&
                E &&
                (_ || null != f) &&
                (0, i.jsx)(r.ua7, {
                    text: u.intl.string(u.t.L99HQk),
                    children: (e) =>
                        (0, i.jsx)(r.P4T, {
                            size: 'xs',
                            color: r.TVs.colors.STATUS_WARNING,
                            ...e
                        })
                })
        ]
    });
}
