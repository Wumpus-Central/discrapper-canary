t.d(a, { default: () => b });
var i = t(477900),
    n = t(582128),
    s = t(503698),
    l = t.n(s),
    r = t(935462),
    d = t(192308),
    c = t(825484),
    o = t(821609),
    u = t(548411),
    p = t(663417),
    f = t(393033),
    h = t(931374),
    m = t(40449),
    g = t(841365),
    k = t(375708),
    v = t(511002),
    x = t(679017);
let b = function (e) {
    let { onClose: a, onComplete: t, transitionState: s, webviewUrl: b, isExpressiveModalV2: C } = e,
        j = (0, f.W$)(),
        [w, y] = n.useState(0),
        E = n.useCallback(() => {
            t(), a();
        }, [t, a]),
        W = n.useCallback(() => {
            (0, d.hasModalOpen)(m.SW) && !C && E();
        }, [E, C]);
    (0, h.dZ)(W);
    let M = n.useCallback(
            (e) => {
                if ("" !== b) {
                    if (!C) {
                        j && e?.data?.eventType === "Verification.Result" && E();
                        return;
                    }
                    e?.data?.eventType === "Verification.Result"
                        ? t()
                        : e?.data?.eventType === "Widget.ExitReview" && a();
                }
            },
            [b, C, j, E, t, a],
        ),
        T = n.useCallback(() => {
            y(w + 1);
        }, [w]);
    return (
        n.useEffect(
            () => (
                window.addEventListener("message", M),
                () => {
                    window.removeEventListener("message", M);
                }
            ),
            [M],
        ),
        (0, i.jsxs)(r.EO, {
            "data-migration-pending": !0,
            transitionState: s,
            className: l()(x.zr, v.rh),
            parentComponent: "AgeVerificationExpressiveModal",
            size: r.rI.MEDIUM,
            children: [
                (0, i.jsx)(r.$m, {
                    "data-migration-pending": !0,
                    className: l()(x.Qs, x.WM),
                    scrollbarType: "none",
                    children: (0, i.jsx)(
                        "iframe",
                        {
                            id: "frame",
                            src: b,
                            className: x.pU,
                            allow: "camera; microphone;publickey-credentials-get;publickey-credentials-create",
                        },
                        w,
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
                                icon: u.Z,
                                text: k.intl.string(g.default.b7Oqdu),
                                onClick: a,
                            }),
                            (0, i.jsx)(o.$, {
                                fullWidth: !0,
                                variant: "secondary",
                                icon: p.RefreshIcon,
                                text: k.intl.string(g.default["0vTx7j"]),
                                onClick: T,
                            }),
                        ],
                    }),
                }),
            ],
        })
    );
};
