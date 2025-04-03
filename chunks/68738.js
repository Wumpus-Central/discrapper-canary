r.d(t, { default: () => s });
var n = r(200651),
    o = r(192379),
    a = r(481060),
    c = r(239091),
    i = r(249453),
    l = r(991249),
    u = r(388032);
function s(e) {
    let { widget: t, onSelect: r, onClose: s } = e,
        p = (0, i.Z)(t),
        f = (0, l.Z)(t.id, 'boolean' == typeof t.meta.horizontal && t.meta.horizontal),
        b = o.useRef(s);
    return (
        o.useEffect(() => {
            b.current = s;
        }),
        o.useEffect(() => () => b.current(), []),
        (0, n.jsxs)(a.v2r, {
            navId: 'overlay-go-live-widget-context-menu',
            onClose: c.Zy,
            'aria-label': u.NW.string(u.t.tPfVWl),
            onSelect: r,
            children: [f, p]
        })
    );
}
