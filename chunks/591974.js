n.d(t, { Z: () => h });
var i = n(200651),
    l = n(442837),
    r = n(481060),
    a = n(626562),
    s = n(885110),
    o = n(51144),
    c = n(231338),
    d = n(388032),
    u = n(843855);
function h() {
    var e;
    let t = (0, l.e7)([s.Z], () => s.Z.getStatus()),
        n = null !== (e = (0, o.u5)(t)) && void 0 !== e ? e : '',
        h = t === c.Sk.INVISIBLE || t === c.Sk.OFFLINE,
        m = (0, a.Vm)({ location: 'AccountProfilePopoutMenuItemStatusLabel' });
    return (0, i.jsxs)('div', {
        className: u.container,
        children: [
            n,
            n.length > 0 &&
                m &&
                h &&
                (0, i.jsx)(r.ua7, {
                    text: d.intl.string(d.t.L99HQk),
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
