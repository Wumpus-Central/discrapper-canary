var i = a(477900),
    n = a(582128),
    l = a(503698),
    s = a.n(l),
    r = a(935462),
    c = a(192308),
    d = a(825484),
    o = a(821609),
    u = a(789645),
    p = a(548411),
    f = a(663417),
    m = a(393033),
    g = a(171576),
    h = a(36149),
    k = a(40449),
    v = a(664188),
    x = a(792996),
    b = a(511002),
    w = a(679017);
a.d(
    t,
    {},
    {
        default: function (e) {
            let {
                    onClose: t,
                    onComplete: a,
                    transitionState: l,
                    webviewUrl: C,
                    isExpressiveModalV2: j,
                    entryPoint: E,
                } = e,
                y = (0, m.W$)(),
                [W, I] = n.useState(0),
                T = n.useCallback(() => {
                    (a(), t());
                }, [a, t]),
                L = n.useCallback(() => {
                    (0, c.kB)(k.SW) && !j && T();
                }, [T, j]);
            (0, h.dZ)(L);
            let M = n.useCallback(
                    (e) => {
                        if ("" !== C) {
                            if (!j) {
                                y && e?.data?.eventType === "Verification.Result" && T();
                                return;
                            }
                            e?.data?.eventType === "Verification.Result"
                                ? a()
                                : e?.data?.eventType === "Widget.ExitReview" && t();
                        }
                    },
                    [C, j, y, T, a, t],
                ),
                R = n.useCallback(() => {
                    I(W + 1);
                }, [W]);
            n.useEffect(
                () => (
                    window.addEventListener("message", M),
                    () => {
                        window.removeEventListener("message", M);
                    }
                ),
                [M],
            );
            let A = E === g.q1.MANUAL_REVIEW;
            return (0, i.jsxs)(r.EO, {
                "data-migration-pending": !0,
                transitionState: l,
                className: s()(w.zr, b.rh),
                parentComponent: "AgeVerificationExpressiveModal",
                size: r.rI.MEDIUM,
                "aria-label": x.intl.string(v.default.eKo6mw),
                children: [
                    (0, i.jsx)(r.$m, {
                        "data-migration-pending": !0,
                        className: s()(w.Qs, w.WM),
                        scrollbarType: "none",
                        children: (0, i.jsx)(
                            "iframe",
                            {
                                id: "frame",
                                title: x.intl.string(v.default.eKo6mw),
                                src: C,
                                className: w.pU,
                                allow: "camera; microphone;publickey-credentials-get;publickey-credentials-create",
                            },
                            W,
                        ),
                    }),
                    (0, i.jsx)(r.jl, {
                        "data-migration-pending": !0,
                        children: (0, i.jsxs)(d.e, {
                            fullWidth: !0,
                            children: [
                                (0, i.jsx)(o.$, {
                                    fullWidth: !0,
                                    variant: "secondary",
                                    icon: A ? u.XSmallIcon : p.ArrowLargeLeftIcon,
                                    text: x.intl.string(A ? x.t.cpT0Cq : v.default.b7Oqdu),
                                    onClick: t,
                                }),
                                (0, i.jsx)(o.$, {
                                    fullWidth: !0,
                                    variant: "secondary",
                                    icon: f.RefreshIcon,
                                    text: x.intl.string(v.default["0vTx7j"]),
                                    onClick: R,
                                }),
                            ],
                        }),
                    }),
                ],
            });
        },
    },
);
