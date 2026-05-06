a.d(t, { default: () => l });
var n = a(627968),
    i = a(64700),
    o = a(980707),
    r = a(442433),
    u = a(422229),
    s = a(871648),
    c = a(915908),
    d = a(375708);
function l(e) {
    let { onSelect: t, onClose: a, widget: l } = e,
        f = (0, u.A)(),
        h = (0, s.A)(l),
        p = i.useRef(a),
        m = (0, c.A)(l.id, "boolean" != typeof l.meta.horizontal || l.meta.horizontal);
    return (
        i.useEffect(() => {
            p.current = a;
        }),
        i.useEffect(() => () => p.current?.(), []),
        (0, n.jsxs)(o.W, {
            "data-menu-migrated-auto": !0,
            navId: "overlay-video-widget-context-menu",
            onClose: r.Z_,
            "aria-label": d.intl.string(d.t.tPfVWi),
            onSelect: t,
            children: [f, m, h],
        })
    );
}
