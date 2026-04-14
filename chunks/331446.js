"use strict";
n.d(t, { w: () => c });
var r = n(627968),
    i = n(64700),
    s = n(939249),
    a = n(834730),
    o = n(397927),
    l = n(720485);
let u = i.lazy(() =>
        n
            .e("46054")
            .then(n.bind(n, 680901))
            .then((e) => ({ default: e.ClipParticipantsList })),
    ),
    c = (e) => {
        let { participants: t, maxVisibleParticipants: n, guildId: c } = e,
            d = i.useRef(null),
            _ = (0, i.useCallback)(
                () => (0, r.jsx)(i.Suspense, { fallback: null, children: (0, r.jsx)(u, { users: t, guildId: c }) }),
                [t, c],
            );
        return (0, r.jsx)(o.YNO, {
            renderPopout: _,
            targetElementRef: d,
            position: "right",
            children: (e) =>
                (0, r.jsx)(s.D, {
                    ...e,
                    innerRef: d,
                    className: l.x,
                    onClick: (t) => {
                        t.stopPropagation(), e.onClick?.(t);
                    },
                    children: (0, r.jsxs)(a.E, {
                        className: l.s,
                        variant: "text-xs/medium",
                        color: "interactive-text-default",
                        children: ["+", t.length - n],
                    }),
                }),
        });
    };
