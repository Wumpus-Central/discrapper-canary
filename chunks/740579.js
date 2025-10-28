r.d(t, { default: () => f });
var n = r(951288),
    o = r(647438),
    i = r(481060),
    l = r(239091),
    c = r(167675),
    a = r(249453),
    u = r(991249),
    s = r(388032);
function f(e) {
    let { onSelect: t, onClose: r, widget: f } = e,
        b = (0, c.Z)(),
        p = (0, a.Z)(f),
        y = o.useRef(r),
        O = (0, u.Z)(f.id, "boolean" != typeof f.meta.horizontal || f.meta.horizontal);
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
        (0, n.jsxs)(i.v2r, {
            navId: "overlay-video-widget-context-menu",
            onClose: l.Zy,
            "aria-label": s.intl.string(s.t.tPfVWi),
            onSelect: t,
            children: [b, O, p],
        })
    );
}
