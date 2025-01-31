e.d(n, { default: () => u });
var i = e(200651),
    o = e(192379),
    r = e(481060),
    a = e(239091),
    l = e(167675),
    d = e(249453),
    s = e(991249),
    c = e(388032);
function u(t) {
    let { onSelect: n, onClose: e, widget: u } = t,
        f = (0, l.Z)(),
        Z = (0, d.Z)(u),
        v = o.useRef(e),
        g = (0, s.Z)(u.id, 'boolean' != typeof u.meta.horizontal || u.meta.horizontal);
    return (
        o.useEffect(() => void (v.current = e)),
        o.useEffect(() => () => v.current(), []),
        (0, i.jsxs)(r.v2r, {
            navId: 'overlay-video-widget-context-menu',
            onClose: a.Zy,
            'aria-label': c.intl.string(c.t.tPfVWl),
            onSelect: n,
            children: [f, g, Z]
        })
    );
}
