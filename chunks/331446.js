a.d(t, { w: () => o });
var i = a(477900),
    n = a(582128),
    s = a(922016),
    d = a(939249),
    l = a(834730),
    r = a(7834);
let h = n.lazy(() =>
    Promise.all([a.e("608500"), a.e("201074"), a.e("353604"), a.e("124006"), a.e("177104"), a.e("446054")])
        .then(a.bind(a, 680901))
        .then((e) => ({ default: e.ClipParticipantsList })),
);
function o(e) {
    let { participants: t, maxVisibleParticipants: a, guildId: o, layerContext: u } = e,
        c = n.useRef(null),
        p = (0, n.useCallback)(
            () => (0, i.jsx)(n.Suspense, { fallback: null, children: (0, i.jsx)(h, { users: t, guildId: o }) }),
            [t, o],
        );
    return (0, i.jsx)(s.Y, {
        renderPopout: p,
        layerContext: u,
        targetElementRef: c,
        position: "right",
        children: (e) =>
            (0, i.jsx)(d.D, {
                ...e,
                innerRef: c,
                className: r.x,
                onClick: (t) => {
                    (t.stopPropagation(), e.onClick?.(t));
                },
                children: (0, i.jsxs)(l.E, {
                    className: r.s,
                    variant: "text-xs/medium",
                    color: "interactive-text-default",
                    children: ["+", t.length - a],
                }),
            }),
    });
}
