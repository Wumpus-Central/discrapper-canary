r.d(t, { default: () => s });
var n = r(200651),
    o = r(192379),
    i = r(481060),
    c = r(239091),
    l = r(167675),
    a = r(249453),
    u = r(991249),
    f = r(388032);
function s(e) {
    let { onSelect: t, onClose: r, widget: s } = e,
        b = (0, l.Z)(),
        p = (0, a.Z)(s),
        y = o.useRef(r),
        O = (0, u.Z)(s.id, 'boolean' != typeof s.meta.horizontal || s.meta.horizontal);
    return (
        o.useEffect(() => {
            y.current = r;
        }),
        o.useEffect(() => () => y.current(), []),
        (0, n.jsxs)(i.v2r, {
            navId: 'overlay-video-widget-context-menu',
            onClose: c.Zy,
            'aria-label': f.intl.string(f.t.tPfVWl),
            onSelect: t,
            children: [b, O, p]
        })
    );
}
