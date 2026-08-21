n.d(a, { default: () => j });
var i = n(477900),
    s = n(582128),
    t = n(503698),
    l = n.n(t),
    r = n(935462),
    d = n(192308),
    c = n(825484),
    o = n(821609),
    u = n(548411),
    p = n(663417),
    h = n(393033),
    m = n(931374),
    f = n(40449),
    g = n(878400),
    x = n(375708),
    k = n(511002),
    C = n(679017);
let j = function (e) {
    let { onClose: a, onComplete: n, transitionState: t, webviewUrl: j } = e,
        v = (0, h.W$)(),
        [b, w] = s.useState(0),
        E = s.useCallback(() => {
            n(), a();
        }, [n, a]),
        W = s.useCallback(() => {
            (0, d.hasModalOpen)(f.SW) && E();
        }, [E]);
    (0, m.dZ)(W);
    let M = s.useCallback(
            (e) => {
                v && "" !== j && e?.data?.eventType === "Verification.Result" && E();
            },
            [j, E, v],
        ),
        y = s.useCallback(() => {
            w(b + 1);
        }, [b]);
    return (
        s.useEffect(
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
            transitionState: t,
            className: l()(C.zr, k.rh),
            parentComponent: "AgeVerificationExpressiveModal",
            size: r.rI.MEDIUM,
            children: [
                (0, i.jsx)(r.$m, {
                    "data-migration-pending": !0,
                    className: l()(C.Qs, C.WM),
                    scrollbarType: "none",
                    children: (0, i.jsx)(
                        "iframe",
                        { id: "frame", src: j, className: C.pU, allow: "camera; microphone" },
                        b,
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
                                text: x.intl.string(g.default.b7Oqdu),
                                onClick: a,
                            }),
                            (0, i.jsx)(o.$, {
                                fullWidth: !0,
                                variant: "secondary",
                                icon: p.RefreshIcon,
                                text: x.intl.string(g.default["0vTx7j"]),
                                onClick: y,
                            }),
                        ],
                    }),
                }),
            ],
        })
    );
};
