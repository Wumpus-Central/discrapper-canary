n.d(e, { default: () => d });
var a = n(200651),
    i = n(192379),
    o = n(481060),
    r = n(239091),
    l = n(167675),
    c = n(249453),
    u = n(991249),
    s = n(388032);
function d(t) {
    let { onSelect: e, onClose: n, widget: d } = t,
        p = (0, l.Z)(),
        f = (0, c.Z)(d),
        h = i.useRef(n),
        v = (0, u.Z)(d.id, 'boolean' != typeof d.meta.horizontal || d.meta.horizontal);
    return (
        i.useEffect(() => {
            h.current = n;
        }),
        i.useEffect(() => () => h.current(), []),
        (0, a.jsxs)(o.v2r, {
            navId: 'overlay-video-widget-context-menu',
            onClose: r.Zy,
            'aria-label': s.intl.string(s.t.tPfVWl),
            onSelect: e,
            children: [p, v, f]
        })
    );
}
