var r = i(477900),
    t = i(582128),
    l = i(462180),
    n = i(477782),
    u = i(964355),
    s = i(165862),
    o = i(442433),
    p = i(259788),
    c = i(792996);
i.d(
    a,
    {},
    {
        default: function (e) {
            let a,
                i,
                { onSelect: d, onClose: m } = e,
                f =
                    ((a = p.Ay.useState((e) => e.timeToLiveMs, l.x)),
                    (0, r.jsx)(n.aK, {
                        id: "opacity",
                        "aria-haspopup": !0,
                        label: "Time To Live",
                        control: (e, i) =>
                            (0, r.jsx)(u.i, {
                                ...e,
                                ref: i,
                                value: a,
                                maxValue: 1e4,
                                minValue: 500,
                                renderValue: (e) => `${e}ms`,
                                onChange: (e) => (0, p.nj)(e),
                                "aria-label": "Time To Live",
                            }),
                    })),
                h =
                    ((i = p.Ay.useState((e) => e.reappearTimeMs, l.x)),
                    (0, r.jsx)(n.aK, {
                        id: "opacity",
                        "aria-haspopup": !0,
                        label: "Time To Reappear",
                        control: (e, a) =>
                            (0, r.jsx)(u.i, {
                                ...e,
                                ref: a,
                                value: i,
                                maxValue: 2e4,
                                minValue: 1e3,
                                renderValue: (e) => `${e}ms`,
                                onChange: (e) => (0, p.g_)(e),
                                "aria-label": "Time To Reappear",
                            }),
                    })),
                x = t.useRef(m);
            return (
                t.useEffect(() => {
                    x.current = m;
                }),
                t.useEffect(() => () => x.current?.(), []),
                (0, r.jsxs)(s.W, {
                    "data-menu-migrated-auto": !0,
                    navId: "overlay-click-zone-debug-context-menu",
                    onClose: o.Z_,
                    "aria-label": c.intl.string(c.t.tPfVWi),
                    onSelect: d,
                    children: [f, h],
                })
            );
        },
    },
);
