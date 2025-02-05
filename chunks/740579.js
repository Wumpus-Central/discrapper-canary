n.d(e, { default: () => s });
var i = n(200651),
    a = n(192379),
    o = n(481060),
    r = n(239091),
    l = n(167675),
    c = n(249453),
    u = n(991249),
    d = n(388032);
function s(t) {
    let { onSelect: e, onClose: n, widget: s } = t,
        p = (0, l.Z)(),
        f = (0, c.Z)(s),
        v = a.useRef(n),
        h = (0, u.Z)(s.id, 'boolean' != typeof s.meta.horizontal || s.meta.horizontal);
    return (
        a.useEffect(() => void (v.current = n)),
        a.useEffect(() => () => v.current(), []),
        (0, i.jsxs)(o.v2r, {
            navId: 'overlay-video-widget-context-menu',
            onClose: r.Zy,
            'aria-label': d.intl.string(d.t.tPfVWl),
            onSelect: e,
            children: [p, h, f]
        })
    );
}
