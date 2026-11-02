l.d(a, { w: () => c });
var n = l(477900),
    t = l(582128),
    i = l(265872),
    r = l(866665),
    s = l(939249),
    d = l(834730),
    o = l(7834);
let u = t.lazy(() =>
    Promise.all([l.e("126301"), l.e("201074"), l.e("353604"), l.e("124006"), l.e("177104"), l.e("446054")])
        .then(l.bind(l, 680901))
        .then((e) => ({ default: e.ClipParticipantsList })),
);
function c(e) {
    let { participants: a, maxVisibleParticipants: l, overflowLabel: c, guildId: m, layerContext: h } = e,
        p = t.useRef(null),
        g = a.length - l,
        x = (0, t.useCallback)(
            () => (0, n.jsx)(t.Suspense, { fallback: null, children: (0, n.jsx)(u, { users: a, guildId: m }) }),
            [a, m],
        );
    return (0, n.jsx)(i.Y, {
        renderPopout: x,
        layerContext: h,
        targetElementRef: p,
        position: "right",
        children: (e) =>
            (0, n.jsx)(r.m, {
                text: c,
                ariaHidden: !0,
                children: (0, n.jsx)(s.D, {
                    ...e,
                    innerRef: p,
                    className: o.x,
                    "aria-label": c,
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
