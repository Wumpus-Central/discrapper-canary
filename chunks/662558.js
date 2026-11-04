var i = t(477900),
    n = t(582128),
    s = t(503698),
    l = t.n(s),
    r = t(935462),
    c = t(192308),
    d = t(825484),
    o = t(821609),
    u = t(789645),
    p = t(548411),
    f = t(663417),
    h = t(393033),
    m = t(171576),
    g = t(36149),
    k = t(40449),
    v = t(664188),
    x = t(792996),
    C = t(511002),
    b = t(679017);
t.d(
    a,
    {},
    {
        default: function (e) {
            let {
                    onClose: a,
                    onComplete: t,
                    transitionState: s,
                    webviewUrl: j,
                    isExpressiveModalV2: E,
                    entryPoint: w,
                } = e,
                y = (0, h.W$)(),
                [W, T] = n.useState(0),
                M = n.useCallback(() => {
                    (t(), a());
                }, [t, a]),
                R = n.useCallback(() => {
                    (0, c.kB)(k.SW) && !E && M();
                }, [M, E]);
            (0, g.dZ)(R);
            let I = n.useCallback(
                    (e) => {
                        if ("" !== j) {
                            if (!E) {
                                y && e?.data?.eventType === "Verification.Result" && M();
                                return;
                            }
                            e?.data?.eventType === "Verification.Result"
                                ? t()
                                : e?.data?.eventType === "Widget.ExitReview" && a();
                        }
                    },
                    [j, E, y, M, t, a],
                ),
                N = n.useCallback(() => {
                    T(W + 1);
                }, [W]);
            n.useEffect(
                () => (
                    window.addEventListener("message", I),
                    () => {
                        window.removeEventListener("message", I);
                    }
                ),
                [I],
            );
            let V = w === m.q1.MANUAL_REVIEW;
            return (0, i.jsxs)(r.EO, {
                "data-migration-pending": !0,
                transitionState: s,
                className: l()(b.zr, C.rh),
                parentComponent: "AgeVerificationExpressiveModal",
                size: r.rI.MEDIUM,
                children: [
                    (0, i.jsx)(r.$m, {
                        "data-migration-pending": !0,
                        className: l()(b.Qs, b.WM),
                        scrollbarType: "none",
                        children: (0, i.jsx)(
                            "iframe",
                            {
                                id: "frame",
                                src: j,
                                className: b.pU,
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
                                    icon: V ? u.P : p.Z,
                                    text: x.intl.string(V ? x.t.cpT0Cq : v.default.b7Oqdu),
                                    onClick: a,
                                }),
                                (0, i.jsx)(o.$, {
                                    fullWidth: !0,
                                    variant: "secondary",
                                    icon: f.RefreshIcon,
                                    text: x.intl.string(v.default["0vTx7j"]),
                                    onClick: N,
                                }),
                            ],
                        }),
                    }),
                ],
            });
        },
    },
);
