i.d(e, { default: () => u });
var n = i(627968),
    a = i(64700),
    l = i(397927),
    r = i(442433),
    o = i(734337),
    d = i(871648),
    s = i(915908),
    c = i(985018);
function u(t) {
    let { onSelect: e, onClose: i, widget: u } = t,
        A = (0, o.A)(),
        f = (0, d.A)(u),
        b = a.useRef(i),
        p = (0, s.A)(u.id, "boolean" != typeof u.meta.horizontal || u.meta.horizontal);
    return (
        a.useEffect(() => {
            b.current = i;
        }),
        a.useEffect(() => () => b.current?.(), []),
        (0, n.jsxs)(l.W1t, {
            "data-menu-migrated-auto": !0,
            navId: "overlay-video-widget-context-menu",
            onClose: r.Z_,
            "aria-label": c.intl.string(c.t.tPfVWi),
            onSelect: e,
            children: [A, p, f],
        })
    );
}
