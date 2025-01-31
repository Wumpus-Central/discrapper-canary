n.d(e, { default: () => s });
var i = n(200651),
    a = n(192379),
    o = n(481060),
    r = n(239091),
    l = n(249453),
    c = n(991249),
    u = n(388032);
function s(t) {
    let { widget: e, onSelect: n, onClose: s } = t,
        d = (0, l.Z)(e),
        p = (0, c.Z)(e.id, 'boolean' == typeof e.meta.horizontal && e.meta.horizontal),
        f = a.useRef(s);
    return (
        a.useEffect(() => void (f.current = s)),
        a.useEffect(() => () => f.current(), []),
        (0, i.jsxs)(o.v2r, {
            navId: 'overlay-go-live-widget-context-menu',
            onClose: r.Zy,
            'aria-label': u.intl.string(u.t.tPfVWl),
            onSelect: n,
            children: [p, d]
        })
    );
}
