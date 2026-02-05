i.d(a, { default: () => p });
var t = i(627968),
    r = i(64700),
    l = i(942381),
    n = i(397927),
    u = i(442433),
    s = i(259788),
    o = i(985018);
function p(e) {
    let a,
        i,
        { onSelect: p, onClose: c } = e,
        d =
            ((a = s.Ay.useState((e) => e.timeToLiveMs, l.x)),
            (0, t.jsx)(n.aK1, {
                id: "opacity",
                "aria-haspopup": !0,
                label: "Time To Live",
                control: (e, i) =>
                    (0, t.jsx)(n.i42, {
                        ...e,
                        ref: i,
                        value: a,
                        maxValue: s.nl,
                        minValue: s.jc,
                        renderValue: (e) => `${e}ms`,
                        onChange: (e) => (0, s.nj)(e),
                        "aria-label": "Time To Live",
                    }),
            })),
        m =
            ((i = s.Ay.useState((e) => e.reappearTimeMs, l.x)),
            (0, t.jsx)(n.aK1, {
                id: "opacity",
                "aria-haspopup": !0,
                label: "Time To Reappear",
                control: (e, a) =>
                    (0, t.jsx)(n.i42, {
                        ...e,
                        ref: a,
                        value: i,
                        maxValue: s.J5,
                        minValue: s.GI,
                        renderValue: (e) => `${e}ms`,
                        onChange: (e) => (0, s.g_)(e),
                        "aria-label": "Time To Reappear",
                    }),
            })),
        f = r.useRef(c);
    return (
        r.useEffect(() => {
            f.current = c;
        }),
        r.useEffect(() => () => f.current?.(), []),
        (0, t.jsxs)(n.W1t, {
            "data-menu-migrated-auto": !0,
            navId: "overlay-click-zone-debug-context-menu",
            onClose: u.Z_,
            "aria-label": o.intl.string(o.t.tPfVWi),
            onSelect: p,
            children: [d, m],
        })
    );
}
