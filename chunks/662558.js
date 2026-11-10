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
    f = a(393033),
    m = a(171576),
    g = a(664188),
    h = a(792996),
    v = a(511002),
    x = a(679017);
a.d(
    t,
    {},
    {
        default: function (e) {
            let {
                    onClose: t,
                    onComplete: a,
                    transitionState: s,
                    webviewUrl: k,
                    isExpressiveModalV2: w,
                    entryPoint: b,
                } = e,
                C = (0, f.W$)(),
                [j, E] = n.useState(0),
                y = n.useCallback(() => {
                    (a(), t());
                }, [a, t]),
                W = n.useCallback(
                    (e) => {
                        if ("" !== k) {
                            if (!w) {
                                C && e?.data?.eventType === "Verification.Result" && y();
                                return;
                            }
                            e?.data?.eventType === "Verification.Result"
                                ? a()
                                : e?.data?.eventType === "Widget.ExitReview" && t();
                        }
                    },
                    [k, w, C, y, a, t],
                ),
                I = n.useCallback(() => {
                    E(j + 1);
                }, [j]);
            n.useEffect(
                () => (
                    window.addEventListener("message", W),
                    () => {
                        window.removeEventListener("message", W);
                    }
                ),
                [W],
            );
            let T = b === m.q1.MANUAL_REVIEW;
            return (0, i.jsxs)(r.EO, {
                "data-migration-pending": !0,
                transitionState: s,
                className: l()(x.zr, v.rh),
                parentComponent: "AgeVerificationExpressiveModal",
                size: r.rI.MEDIUM,
                "aria-label": h.intl.string(g.default.eKo6mw),
                children: [
                    (0, i.jsx)(r.$m, {
                        "data-migration-pending": !0,
                        className: l()(x.Qs, x.WM),
                        scrollbarType: "none",
                        children: (0, i.jsx)(
                            "iframe",
                            {
                                id: "frame",
                                title: h.intl.string(g.default.eKo6mw),
                                src: k,
                                className: x.pU,
                                allow: "camera; microphone;publickey-credentials-get;publickey-credentials-create",
                            },
                            j,
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
                                    icon: T ? o.XSmallIcon : u.ArrowLargeLeftIcon,
                                    text: h.intl.string(T ? h.t.cpT0Cq : g.default.b7Oqdu),
                                    onClick: t,
                                }),
                                (0, i.jsx)(d.$, {
                                    fullWidth: !0,
                                    variant: "secondary",
                                    icon: p.RefreshIcon,
                                    text: h.intl.string(g.default["0vTx7j"]),
                                    onClick: I,
                                }),
                            ],
                        }),
                    }),
                ],
            });
        },
    },
);
