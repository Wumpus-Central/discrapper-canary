var l = n(477900);
n(582128);
var o = n(939249),
    i = n(834730),
    r = n(147925),
    u = n(377578),
    a = n(898612),
    s = n(232492),
    c = n(80595);
n.d(
    t,
    {},
    {
        A: function (e) {
            let { benefit: t, guildId: n, onClick: d } = e,
                C = (0, s.A)(n, t.ref_id),
                p = (0, l.jsx)(u.A, { guildId: n, emojiId: t.emoji_id, emojiName: t.emoji_name });
            return (0, l.jsxs)(o.D, {
                className: c.kL,
                onClick: function () {
                    (C?.navigateToChannel(), d());
                },
                "aria-label": C?.ariaLabel,
                role: "link",
                children: [
                    (0, l.jsx)("div", { className: c.qq, children: p }),
                    (0, l.jsxs)("div", {
                        className: c.op,
                        children: [
                            (0, l.jsx)(i.E, {
                                variant: "body-md/medium",
                                color: "text-strong",
                                className: c.UU,
                                children: (0, a.A)(t),
                            }),
                            (0, l.jsx)(i.E, {
                                color: "interactive-text-default",
                                variant: "body-sm/normal",
                                children: t.description,
                            }),
                        ],
                    }),
                    (0, l.jsx)(r.A, { direction: r.A.Directions.RIGHT, className: c.OW }),
                ],
            });
        },
    },
);
