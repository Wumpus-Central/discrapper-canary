"use strict";
n.d(t, { w: () => u });
var i = n(627968),
    l = n(64700),
    s = n(939249),
    r = n(834730),
    a = n(265872),
    o = n(433781);
let c = l.lazy(() =>
        n
            .e("46054")
            .then(n.bind(n, 680901))
            .then((e) => ({ default: e.ClipParticipantsList })),
    ),
    u = (e) => {
        let { participants: t, maxVisibleParticipants: n, guildId: u } = e,
            d = l.useRef(null),
            h = (0, l.useCallback)(
                () => (0, i.jsx)(l.Suspense, { fallback: null, children: (0, i.jsx)(c, { users: t, guildId: u }) }),
                [t, u],
            );
        return (0, i.jsx)(a.Y, {
            renderPopout: h,
            targetElementRef: d,
            position: "right",
            children: (e) =>
                (0, i.jsx)(s.D, {
                    ...e,
                    innerRef: d,
                    className: o.x,
                    onClick: (t) => {
                        t.stopPropagation(), e.onClick?.(t);
                    },
                    children: (0, i.jsxs)(r.E, {
                        className: o.s,
                        variant: "text-xs/medium",
                        color: "interactive-text-default",
                        children: ["+", t.length - n],
                    }),
                }),
        });
    };
