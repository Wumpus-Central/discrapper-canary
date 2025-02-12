n.d(e, { default: () => s });
var a = n(200651),
    i = n(192379),
    o = n(481060),
    l = n(239091),
    r = n(249453),
    c = n(991249),
    u = n(388032);
function s(t) {
    let { widget: e, onSelect: n, onClose: s } = t,
        d = (0, r.Z)(e),
        p = (0, c.Z)(e.id, 'boolean' == typeof e.meta.horizontal && e.meta.horizontal),
        f = i.useRef(s);
    return (
        i.useEffect(() => {
            f.current = s;
        }),
        i.useEffect(() => () => f.current(), []),
        (0, a.jsxs)(o.v2r, {
            navId: 'overlay-go-live-widget-context-menu',
            onClose: l.Zy,
            'aria-label': u.intl.string(u.t.tPfVWl),
            onSelect: n,
            children: [p, d]
        })
    );
}
