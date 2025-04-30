r.d(e, { default: () => s });
var n = r(200651),
    o = r(192379),
    i = r(481060),
    a = r(239091),
    c = r(249453),
    l = r(991249),
    u = r(388032);
function s(t) {
    let { widget: e, onSelect: r, onClose: s } = t,
        p = (0, c.Z)(e),
        f = (0, l.Z)(e.id, 'boolean' == typeof e.meta.horizontal && e.meta.horizontal),
        b = o.useRef(s);
    return (
        o.useEffect(() => {
            b.current = s;
        }),
        o.useEffect(() => () => b.current(), []),
        (0, n.jsxs)(i.v2r, {
            navId: 'overlay-go-live-widget-context-menu',
            onClose: a.Zy,
            'aria-label': u.intl.string(u.t.tPfVWl),
            onSelect: r,
            children: [f, p]
        })
    );
}
