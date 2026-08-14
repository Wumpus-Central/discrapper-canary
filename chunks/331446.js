"use strict";
n.d(t, { w: () => c });
var l = n(477900),
    i = n(582128),
    s = n(939249),
    r = n(834730),
    a = n(922016),
    o = n(860685);
let u = i.lazy(() =>
    Promise.all([n.e("932931"), n.e("446054")])
        .then(n.bind(n, 680901))
        .then((e) => ({ default: e.ClipParticipantsList })),
);
function c(e) {
    let { participants: t, maxVisibleParticipants: n, guildId: c, layerContext: d } = e,
        h = i.useRef(null),
        m = (0, i.useCallback)(
            () => (0, l.jsx)(i.Suspense, { fallback: null, children: (0, l.jsx)(u, { users: t, guildId: c }) }),
            [t, c],
        );
    return (0, l.jsx)(a.Y, {
        renderPopout: m,
        layerContext: d,
        targetElementRef: h,
        position: "right",
        children: (e) =>
            (0, l.jsx)(s.D, {
                ...e,
                innerRef: h,
                className: o.x,
                onClick: (t) => {
                    t.stopPropagation(), e.onClick?.(t);
                },
                children: (0, l.jsxs)(r.E, {
                    className: o.s,
                    variant: "text-xs/medium",
                    color: "interactive-text-default",
                    children: ["+", t.length - n],
                }),
            }),
    });
}
