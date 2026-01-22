r.d(t, { default: () => b });
var n = r(627968),
    o = r(64700),
    i = r(397927),
    l = r(442433),
    a = r(734337),
    c = r(871648),
    u = r(915908),
    s = r(985018);
function b(e) {
    let { onSelect: t, onClose: r, widget: b } = e,
        f = (0, a.A)(),
        p = (0, c.A)(b),
        y = o.useRef(r),
        O = (0, u.A)(b.id, "boolean" != typeof b.meta.horizontal || b.meta.horizontal);
    return (
        o.useEffect(() => {
            y.current = r;
        }),
        o.useEffect(
            () => () => {
                var e;
                return null == (e = y.current) ? void 0 : e.call(y);
            },
            [],
        ),
        (0, n.jsxs)(i.W1t, {
            navId: "overlay-video-widget-context-menu",
            onClose: l.Z_,
            "aria-label": s.intl.string(s.t.tPfVWi),
            onSelect: t,
            children: [f, O, p],
        })
    );
}
