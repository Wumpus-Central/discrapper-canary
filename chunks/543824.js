a.d(e, { default: () => s });
var i = a(627968),
    n = a(64700),
    o = a(861672),
    l = a(442433),
    r = a(871648),
    u = a(915908),
    c = a(985018);
function s(t) {
    let { widget: e, onSelect: a, onClose: s } = t,
        d = (0, r.A)(e),
        p = (0, u.A)(e.id, "boolean" == typeof e.meta.horizontal && e.meta.horizontal),
        h = n.useRef(s);
    return (
        n.useEffect(() => {
            h.current = s;
        }),
        n.useEffect(() => () => h.current?.(), []),
        (0, i.jsxs)(o.W, {
            "data-menu-migrated-auto": !0,
            navId: "overlay-go-live-widget-context-menu",
            onClose: l.Z_,
            "aria-label": c.intl.string(c.t.tPfVWi),
            onSelect: a,
            children: [p, d],
        })
    );
}
