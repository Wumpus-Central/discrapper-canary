var a = t(477900),
    i = t(582128),
    l = t(265872),
    r = t(866665),
    o = t(939249),
    d = t(834730),
    s = t(7834);
let u = i.lazy(() =>
    Promise.all([t.e(126301), t.e(201074), t.e(353604), t.e(124006), t.e(177104), t.e(446054)])
        .then(t.bind(t, 680901))
        .then((e) => ({ default: e.ClipParticipantsList })),
);
t.d(
    n,
    {},
    {
        w: function (e) {
            let { participants: n, maxVisibleParticipants: t, overflowLabel: c, guildId: g, layerContext: f } = e,
                m = i.useRef(null),
                p = n.length - t,
                b = (0, i.useCallback)(
                    () => (0, a.jsx)(i.Suspense, { fallback: null, children: (0, a.jsx)(u, { users: n, guildId: g }) }),
                    [n, g],
                );
            return (0, a.jsx)(l.Y, {
                renderPopout: b,
                layerContext: f,
                targetElementRef: m,
                position: "right",
                children: (e) =>
                    (0, a.jsx)(r.m, {
                        text: c,
                        ariaHidden: !0,
                        children: (0, a.jsx)(o.D, {
                            ...e,
                            innerRef: m,
                            className: s.x,
                            "aria-label": c,
                            onClick: (n) => {
                                (n.stopPropagation(), e.onClick?.(n));
                            },
                            children: (0, a.jsxs)(d.E, {
                                className: s.s,
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
