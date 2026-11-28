var a = n(477900),
    i = n(582128),
    r = n(265872),
    l = n(866665),
    s = n(939249),
    o = n(834730),
    d = n(7834);
let u = i.lazy(() =>
    Promise.all([n.e(131223), n.e(446054)])
        .then(n.bind(n, 680901))
        .then((e) => ({ default: e.ClipParticipantsList })),
);
n.d(
    t,
    {},
    {
        w: function (e) {
            let { participants: t, maxVisibleParticipants: n, overflowLabel: c, guildId: f, layerContext: b } = e,
                g = i.useRef(null),
                p = t.length - n,
                h = (0, i.useCallback)(
                    () => (0, a.jsx)(i.Suspense, { fallback: null, children: (0, a.jsx)(u, { users: t, guildId: f }) }),
                    [t, f],
                );
            return (0, a.jsx)(r.Y, {
                renderPopout: h,
                layerContext: b,
                targetElementRef: g,
                position: "right",
                children: (e) =>
                    (0, a.jsx)(l.m, {
                        text: c,
                        ariaHidden: !0,
                        children: (0, a.jsx)(s.D, {
                            ...e,
                            innerRef: g,
                            className: d.x,
                            "aria-label": c,
                            onClick: (t) => {
                                (t.stopPropagation(), e.onClick?.(t));
                            },
                            children: (0, a.jsxs)(o.E, {
                                className: d.s,
                                variant: "body-xs/medium",
                                color: "interactive-text-default",
                                children: ["+", p],
                            }),
                        }),
                    }),
            });
        },
    },
);
