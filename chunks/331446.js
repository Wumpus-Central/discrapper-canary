n.d(t, { w: () => _ });
var a = n(627968),
    o = n(64700),
    r = n(939249),
    i = n(834730),
    l = n(397927),
    c = n(720485);
let s = o.lazy(() =>
        n
            .e("46054")
            .then(n.bind(n, 680901))
            .then((e) => ({ default: e.ClipParticipantsList })),
    ),
    _ = (e) => {
        let { participants: t, maxVisibleParticipants: n, guildId: _ } = e,
            d = o.useRef(null),
            u = (0, o.useCallback)(
                () => (0, a.jsx)(o.Suspense, { fallback: null, children: (0, a.jsx)(s, { users: t, guildId: _ }) }),
                [t, _],
            );
        return (0, a.jsx)(l.YNO, {
            renderPopout: u,
            targetElementRef: d,
            position: "right",
            children: (e) =>
                (0, a.jsx)(r.D, {
                    ...e,
                    innerRef: d,
                    className: c.x,
                    onClick: (t) => {
                        t.stopPropagation(), e.onClick?.(t);
                    },
                    children: (0, a.jsxs)(i.E, {
                        className: c.s,
                        variant: "text-xs/medium",
                        color: "interactive-text-default",
                        children: ["+", t.length - n],
                    }),
                }),
        });
    };
