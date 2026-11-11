var l = t(477900),
    s = t(582128),
    i = t(195118),
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
                { preventIdle: h, allowIdle: p } = (0, c.o)("clips-in-call-notice");
            return (
                s.useEffect(() => {
                    if (t) return (h(), p);
                }, [t, h, p]),
                (0, l.jsxs)(i.x, {
                    targetElementRef: n,
                    shouldShow: t,
                    position: "bottom",
                    caretConfig: { align: "center" },
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
