r.d(t, { default: () => s });
var n = r(627968),
    o = r(64700),
    a = r(397927),
    i = r(442433),
    c = r(871648),
    l = r(915908),
    u = r(985018);
function s(e) {
    let { widget: t, onSelect: r, onClose: s } = e,
        p = (0, c.A)(t),
        b = (0, l.A)(t.id, "boolean" == typeof t.meta.horizontal && t.meta.horizontal),
        f = o.useRef(s);
    return (
        o.useEffect(() => {
            f.current = s;
        }),
        o.useEffect(
            () => () => {
                var e;
                return null == (e = f.current) ? void 0 : e.call(f);
            },
            [],
        ),
        (0, n.jsxs)(a.W1t, {
            navId: "overlay-go-live-widget-context-menu",
            onClose: i.Z_,
            "aria-label": u.intl.string(u.t.tPfVWi),
            onSelect: r,
            children: [b, p],
        })
    );
}
