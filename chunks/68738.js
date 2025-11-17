r.d(e, { default: () => s });
var n = r(54381),
    o = r(473749),
    i = r(481060),
    a = r(239091),
    c = r(249453),
    l = r(991249),
    u = r(388032);
function s(t) {
    let { widget: e, onSelect: r, onClose: s } = t,
        p = (0, c.Z)(e),
        b = (0, l.Z)(e.id, "boolean" == typeof e.meta.horizontal && e.meta.horizontal),
        f = o.useRef(s);
    return (
        o.useEffect(() => {
            f.current = s;
        }),
        o.useEffect(
            () => () => {
                var t;
                return null == (t = f.current) ? void 0 : t.call(f);
            },
            [],
        ),
        (0, n.jsxs)(i.v2r, {
            navId: "overlay-go-live-widget-context-menu",
            onClose: a.Zy,
            "aria-label": u.intl.string(u.t.tPfVWi),
            onSelect: r,
            children: [b, p],
        })
    );
}
