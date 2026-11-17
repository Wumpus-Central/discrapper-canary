var i = a(477900),
    n = a(582128),
    s = a(503698),
    l = a.n(s),
    r = a(935462),
    c = a(825484),
    d = a(821609),
    o = a(789645),
    u = a(548411),
    p = a(663417),
    m = a(171576),
    f = a(664188),
    g = a(792996),
    h = a(511002),
    x = a(679017);
a.d(
    t,
    {},
    {
        default: function (e) {
            let { onClose: t, onComplete: a, transitionState: s, webviewUrl: v, entryPoint: w } = e,
                [k, b] = n.useState(0),
                j = n.useCallback(
                    (e) => {
                        "" !== v &&
                            (e?.data?.eventType === "Verification.Result"
                                ? a()
                                : e?.data?.eventType === "Widget.ExitReview" && t());
                    },
                    [v, a, t],
                ),
                C = n.useCallback(() => {
                    b(k + 1);
                }, [k]);
            n.useEffect(
                () => (
                    window.addEventListener("message", j),
                    () => {
                        window.removeEventListener("message", j);
                    }
                ),
                [j],
            );
            let E = w === m.q1.MANUAL_REVIEW;
            return (0, i.jsxs)(r.EO, {
                "data-migration-pending": !0,
                transitionState: s,
                className: l()(x.zr, h.rh),
                parentComponent: "AgeVerificationExpressiveModal",
                size: r.rI.MEDIUM,
                "aria-label": g.intl.string(f.default.eKo6mw),
                children: [
                    (0, i.jsx)(r.$m, {
                        "data-migration-pending": !0,
                        className: l()(x.Qs, x.WM),
                        scrollbarType: "none",
                        children: (0, i.jsx)(
                            "iframe",
                            {
                                id: "frame",
                                title: g.intl.string(f.default.eKo6mw),
                                src: v,
                                className: x.pU,
                                allow: "camera; microphone;publickey-credentials-get;publickey-credentials-create",
                            },
                            k,
                        ),
                    }),
                    (0, i.jsx)(r.jl, {
                        "data-migration-pending": !0,
                        children: (0, i.jsxs)(c.e, {
                            fullWidth: !0,
                            children: [
                                (0, i.jsx)(d.$, {
                                    fullWidth: !0,
                                    variant: "secondary",
                                    icon: E ? o.XSmallIcon : u.ArrowLargeLeftIcon,
                                    text: g.intl.string(E ? g.t.cpT0Cq : f.default.b7Oqdu),
                                    onClick: t,
                                }),
                                (0, i.jsx)(d.$, {
                                    fullWidth: !0,
                                    variant: "secondary",
                                    icon: p.RefreshIcon,
                                    text: g.intl.string(f.default["0vTx7j"]),
                                    onClick: C,
                                }),
                            ],
                        }),
                    }),
                ],
            });
        },
    },
);
