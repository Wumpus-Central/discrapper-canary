a.d(t, { w: () => c });
var i = a(477900),
    n = a(582128),
    d = a(265872),
    l = a(866665),
    s = a(939249),
    r = a(834730),
    h = a(7834);
let u = n.lazy(() =>
    Promise.all([a.e("126301"), a.e("201074"), a.e("353604"), a.e("124006"), a.e("177104"), a.e("446054")])
        .then(a.bind(a, 680901))
        .then((e) => ({ default: e.ClipParticipantsList })),
);
function c(e) {
    let { participants: t, maxVisibleParticipants: a, overflowLabel: c, guildId: o, layerContext: p } = e,
        C = n.useRef(null),
        _ = t.length - a,
        A = (0, n.useCallback)(
            () => (0, i.jsx)(n.Suspense, { fallback: null, children: (0, i.jsx)(u, { users: t, guildId: o }) }),
            [t, o],
        );
    return (0, i.jsx)(d.Y, {
        renderPopout: A,
        layerContext: p,
        targetElementRef: C,
        position: "right",
        children: (e) =>
            (0, i.jsx)(l.m, {
                text: c,
                ariaHidden: !0,
                children: (0, i.jsx)(s.D, {
                    ...e,
                    innerRef: C,
                    className: h.x,
                    "aria-label": c,
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
