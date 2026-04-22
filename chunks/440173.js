i.d(e, { default: () => c });
var n = i(627968),
    a = i(64700),
    l = i(861672),
    r = i(442433),
    o = i(734337),
    d = i(871648),
    s = i(915908),
    u = i(985018);
function c(t) {
    let { onSelect: e, onClose: i, widget: c } = t,
        A = (0, o.A)(),
        f = (0, d.A)(c),
        b = a.useRef(i),
        p = (0, s.A)(c.id, "boolean" != typeof c.meta.horizontal || c.meta.horizontal);
    return (
        a.useEffect(() => {
            b.current = i;
        }),
        a.useEffect(() => () => b.current?.(), []),
        (0, n.jsxs)(l.W, {
            "data-menu-migrated-auto": !0,
            navId: "overlay-video-widget-context-menu",
            onClose: r.Z_,
            "aria-label": u.intl.string(u.t.tPfVWi),
            onSelect: e,
            children: [A, p, f],
        })
    );
}
