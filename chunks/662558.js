var i = a(477900),
    n = a(582128),
    s = a(503698),
    l = a.n(s),
    r = a(935462),
    d = a(192308),
    c = a(825484),
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
    C = a(679017);
a.d(
    t,
    {},
    {
        default: function (e) {
            let {
                    onClose: t,
                    onComplete: a,
                    transitionState: s,
                    webviewUrl: w,
                    isExpressiveModalV2: j,
                    entryPoint: E,
                } = e,
                y = (0, m.W$)(),
                [W, T] = n.useState(0),
                M = n.useCallback(() => {
                    (a(), t());
                }, [a, t]),
                R = n.useCallback(() => {
                    (0, d.kB)(k.SW) && !j && M();
                }, [M, j]);
            (0, h.dZ)(R);
            let I = n.useCallback(
                    (e) => {
                        if ("" !== w) {
                            if (!j) {
                                y && e?.data?.eventType === "Verification.Result" && M();
                                return;
                            }
                            e?.data?.eventType === "Verification.Result"
                                ? a()
                                : e?.data?.eventType === "Widget.ExitReview" && t();
                        }
                    },
                    [w, j, y, M, a, t],
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
            let V = E === g.q1.MANUAL_REVIEW;
            return (0, i.jsxs)(r.EO, {
                "data-migration-pending": !0,
                transitionState: s,
                className: l()(C.zr, b.rh),
                parentComponent: "AgeVerificationExpressiveModal",
                size: r.rI.MEDIUM,
                "aria-label": x.intl.string(v.default.eKo6mw),
                children: [
                    (0, i.jsx)(r.$m, {
                        "data-migration-pending": !0,
                        className: l()(C.Qs, C.WM),
                        scrollbarType: "none",
                        children: (0, i.jsx)(
                            "iframe",
                            {
                                id: "frame",
                                title: x.intl.string(v.default.eKo6mw),
                                src: w,
                                className: C.pU,
                                allow: "camera; microphone;publickey-credentials-get;publickey-credentials-create",
                            },
                            W,
                        ),
                    }),
                    (0, i.jsx)(r.jl, {
                        "data-migration-pending": !0,
                        children: (0, i.jsxs)(c.e, {
                            fullWidth: !0,
                            children: [
                                (0, i.jsx)(o.$, {
                                    fullWidth: !0,
                                    variant: "secondary",
                                    icon: V ? u.P : p.Z,
                                    text: x.intl.string(V ? x.t.cpT0Cq : v.default.b7Oqdu),
                                    onClick: t,
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
