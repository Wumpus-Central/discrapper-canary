var t = a(477900),
    l = a(582128),
    i = a(265872),
    r = a(866665),
    d = a(939249),
    o = a(834730),
    u = a(7834);
let s = l.lazy(() =>
    Promise.all([a.e(126301), a.e(201074), a.e(353604), a.e(124006), a.e(177104), a.e(446054)])
        .then(a.bind(a, 680901))
        .then((e) => ({ default: e.ClipParticipantsList })),
);
a.d(
    n,
    {},
    {
        w: function (e) {
            let { participants: n, maxVisibleParticipants: a, overflowLabel: c, guildId: f, layerContext: g } = e,
                m = l.useRef(null),
                b = n.length - a,
                h = (0, l.useCallback)(
                    () => (0, t.jsx)(l.Suspense, { fallback: null, children: (0, t.jsx)(s, { users: n, guildId: f }) }),
                    [n, f],
                );
            return (0, t.jsx)(i.Y, {
                renderPopout: h,
                layerContext: g,
                targetElementRef: m,
                position: "right",
                children: (e) =>
                    (0, t.jsx)(r.m, {
                        text: c,
                        ariaHidden: !0,
                        children: (0, t.jsx)(d.D, {
                            ...e,
                            innerRef: m,
                            className: u.x,
                            "aria-label": c,
                            onClick: (n) => {
                                (n.stopPropagation(), e.onClick?.(n));
                            },
                            children: (0, t.jsxs)(o.E, {
                                className: u.s,
                                variant: "body-xs/medium",
                                color: "interactive-text-default",
                                children: ["+", b],
                            }),
                        }),
                    }),
            });
        },
    },
);
