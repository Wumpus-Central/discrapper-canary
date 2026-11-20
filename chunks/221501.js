var l = t(477900),
    i = t(582128),
    s = t(195118),
    r = t(31188),
    o = t(834730),
    a = t(299871),
    c = t(447404),
    u = t(696016),
    d = t(49247);
t.d(
    n,
    {},
    {
        A: function (e) {
            let { targetElementRef: n, shouldShow: t, text: x, onRequestClose: g } = e,
                { preventIdle: p, allowIdle: h } = (0, c.o)("clips-in-call-notice");
            return (
                i.useEffect(() => {
                    if (t) return (p(), h);
                }, [t, p, h]),
                (0, l.jsxs)(s.x, {
                    targetElementRef: n,
                    shouldShow: t,
                    position: "bottom",
                    alignmentStrategy: "trigger-center",
                    caretConfig: { align: "end" },
                    onRequestClose: g,
                    children: [
                        (0, l.jsxs)("div", {
                            className: d.Qs,
                            children: [
                                (0, l.jsx)(o.E, {
                                    variant: "body-sm/medium",
                                    color: "text-strong",
                                    className: d.Qq,
                                    children: x,
                                }),
                                (0, l.jsx)(a.r, { durationMs: u.Vi, className: d.p4 }),
                            ],
                        }),
                        (0, l.jsx)(r.F, {}),
                    ],
                })
            );
        },
    },
);
