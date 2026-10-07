a.d(t, { w: () => u });
var i = a(477900),
    n = a(582128),
    d = a(922016),
    s = a(866665),
    l = a(939249),
    r = a(834730),
    h = a(7834);
let o = n.lazy(() =>
    Promise.all([a.e("608500"), a.e("201074"), a.e("353604"), a.e("124006"), a.e("177104"), a.e("446054")])
        .then(a.bind(a, 680901))
        .then((e) => ({ default: e.ClipParticipantsList })),
);
function u(e) {
    let { participants: t, maxVisibleParticipants: a, overflowLabel: u, guildId: c, layerContext: p } = e,
        C = n.useRef(null),
        _ = t.length - a,
        A = (0, n.useCallback)(
            () => (0, i.jsx)(n.Suspense, { fallback: null, children: (0, i.jsx)(o, { users: t, guildId: c }) }),
            [t, c],
        );
    return (0, i.jsx)(d.Y, {
        renderPopout: A,
        layerContext: p,
        targetElementRef: C,
        position: "right",
        children: (e) =>
            (0, i.jsx)(s.m, {
                text: u,
                ariaHidden: !0,
                children: (0, i.jsx)(l.D, {
                    ...e,
                    innerRef: C,
                    className: h.x,
                    "aria-label": u,
                    onClick: (t) => {
                        (t.stopPropagation(), e.onClick?.(t));
                    },
                    children: (0, i.jsxs)(r.E, {
                        className: h.s,
                        variant: "text-xs/medium",
                        color: "interactive-text-default",
                        children: ["+", _],
                    }),
                }),
            }),
    });
}
