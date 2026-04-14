a.d(t, { w: () => _ });
var n = a(627968),
    i = a(64700),
    r = a(939249),
    o = a(834730),
    c = a(397927),
    l = a(720485);
let s = i.lazy(() =>
        a
            .e("46054")
            .then(a.bind(a, 680901))
            .then((e) => ({ default: e.ClipParticipantsList })),
    ),
    _ = (e) => {
        let { participants: t, maxVisibleParticipants: a, guildId: _ } = e,
            d = i.useRef(null),
            u = (0, i.useCallback)(
                () => (0, n.jsx)(i.Suspense, { fallback: null, children: (0, n.jsx)(s, { users: t, guildId: _ }) }),
                [t, _],
            );
        return (0, n.jsx)(c.YNO, {
            renderPopout: u,
            targetElementRef: d,
            position: "right",
            children: (e) =>
                (0, n.jsx)(r.D, {
                    ...e,
                    innerRef: d,
                    className: l.x,
                    onClick: (t) => {
                        t.stopPropagation(), e.onClick?.(t);
                    },
                    children: (0, n.jsxs)(o.E, {
                        className: l.s,
                        variant: "text-xs/medium",
                        color: "interactive-text-default",
                        children: ["+", t.length - a],
                    }),
                }),
        });
    };
