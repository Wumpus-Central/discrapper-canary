a.d(t, { default: () => l });
var n = a(627968),
    i = a(64700),
    o = a(980707),
    r = a(442433),
    u = a(871648),
    s = a(915908),
    c = a(375708);
function l(e) {
    let { widget: t, onSelect: a, onClose: l } = e,
        d = (0, u.A)(t),
        f = (0, s.A)(t.id, "boolean" == typeof t.meta.horizontal && t.meta.horizontal),
        h = i.useRef(l);
    return (
        i.useEffect(() => {
            h.current = l;
        }),
        i.useEffect(() => () => h.current?.(), []),
        (0, n.jsxs)(o.W, {
            "data-menu-migrated-auto": !0,
            navId: "overlay-go-live-widget-context-menu",
            onClose: r.Z_,
            "aria-label": c.intl.string(c.t.tPfVWi),
            onSelect: a,
            children: [f, d],
        })
    );
}
