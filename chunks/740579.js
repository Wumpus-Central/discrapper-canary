r.d(e, { default: () => p });
var n = r(951288),
    o = r(647438),
    i = r(481060),
    a = r(239091),
    c = r(167675),
    l = r(249453),
    u = r(991249),
    s = r(388032);
function p(t) {
    let { onSelect: e, onClose: r, widget: p } = t,
        b = (0, c.Z)(),
        f = (0, l.Z)(p),
        y = o.useRef(r),
        d = (0, u.Z)(p.id, "boolean" != typeof p.meta.horizontal || p.meta.horizontal);
    return (
        o.useEffect(() => {
            y.current = r;
        }),
        o.useEffect(
            () => () => {
                var t;
                return null == (t = y.current) ? void 0 : t.call(y);
            },
            [],
        ),
        (0, n.jsxs)(i.v2r, {
            navId: "overlay-video-widget-context-menu",
            onClose: a.Zy,
            "aria-label": s.intl.string(s.t.tPfVWi),
            onSelect: e,
            children: [b, d, f],
        })
    );
}
