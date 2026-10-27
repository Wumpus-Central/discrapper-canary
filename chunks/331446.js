l.d(a, { w: () => u });
var n = l(477900),
    t = l(582128),
    i = l(265872),
    r = l(866665),
    s = l(939249),
    d = l(834730),
    o = l(7834);
let c = t.lazy(() =>
    Promise.all([l.e("126301"), l.e("201074"), l.e("353604"), l.e("124006"), l.e("177104"), l.e("446054")])
        .then(l.bind(l, 680901))
        .then((e) => ({ default: e.ClipParticipantsList })),
);
function u(e) {
    let { participants: a, maxVisibleParticipants: l, overflowLabel: u, guildId: h, layerContext: x } = e,
        p = t.useRef(null),
        g = a.length - l,
        m = (0, t.useCallback)(
            () => (0, n.jsx)(t.Suspense, { fallback: null, children: (0, n.jsx)(c, { users: a, guildId: h }) }),
            [a, h],
        );
    return (0, n.jsx)(i.Y, {
        renderPopout: m,
        layerContext: x,
        targetElementRef: p,
        position: "right",
        children: (e) =>
            (0, n.jsx)(r.m, {
                text: u,
                ariaHidden: !0,
                children: (0, n.jsx)(s.D, {
                    ...e,
                    innerRef: p,
                    className: o.x,
                    "aria-label": u,
                    onClick: (a) => {
                        (a.stopPropagation(), e.onClick?.(a));
                    },
                    children: (0, n.jsxs)(d.E, {
                        className: o.s,
                        variant: "text-xs/medium",
                        color: "interactive-text-default",
                        children: ["+", g],
                    }),
                }),
            }),
    });
}
