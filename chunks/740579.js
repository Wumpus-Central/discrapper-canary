n.d(e, { default: () => u });
var i = n(200651),
    o = n(192379),
    l = n(481060),
    r = n(239091),
    a = n(167675),
    d = n(249453),
    s = n(991249),
    c = n(388032);
function u(t) {
    let { onSelect: e, onClose: n, widget: u } = t,
        f = (0, a.Z)(),
        Z = (0, d.Z)(u),
        p = o.useRef(n),
        g = (0, s.Z)(u.id, 'boolean' != typeof u.meta.horizontal || u.meta.horizontal);
    return (
        o.useEffect(() => {
            p.current = n;
        }),
        o.useEffect(() => () => p.current(), []),
        (0, i.jsxs)(l.v2r, {
            navId: 'overlay-video-widget-context-menu',
            onClose: r.Zy,
            'aria-label': c.intl.string(c.t.tPfVWl),
            onSelect: e,
            children: [f, g, Z]
        })
    );
}
